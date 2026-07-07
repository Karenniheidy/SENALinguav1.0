import { CONFIG } from "@/config/app.config";
import { userDatabase } from "@/data/mockData";
import { store } from "@/core/state/store";
const ACCOUNTS_KEY = "senaligua_accounts_v4";
const RESET_KEY = "senaligua_reset_v4";
const DEFAULT_SEED_PASSWORD = "Sena2026!";
const RESET_TTL_MS = 15 * 60 * 1e3;
const MIN_PASSWORD_LENGTH = 8;
function normalizeEmail(email) {
  return email.trim().toLowerCase();
}
function loadAccounts() {
  try {
    const raw = localStorage.getItem(ACCOUNTS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
function saveAccounts(accounts) {
  try {
    localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
  } catch {
  }
}
function isPasswordValid(password) {
  return password.trim().length >= MIN_PASSWORD_LENGTH;
}
function passwordsMatch(stored, input, isSeed = false) {
  const expected = stored || (isSeed ? DEFAULT_SEED_PASSWORD : void 0);
  if (!expected) return false;
  return expected === input;
}
function loadResetTokens() {
  try {
    const raw = localStorage.getItem(RESET_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
function saveResetTokens(tokens) {
  try {
    localStorage.setItem(RESET_KEY, JSON.stringify(tokens));
  } catch {
  }
}
function generateResetCode() {
  return String(Math.floor(1e5 + Math.random() * 9e5));
}
function getAccount(email) {
  const key = normalizeEmail(email);
  return loadAccounts()[key] || null;
}
function upsertAccount(email, patch) {
  const accounts = loadAccounts();
  const key = normalizeEmail(email);
  const now = (/* @__PURE__ */ new Date()).toISOString();
  const existing = accounts[key] || {};
  accounts[key] = {
    ...existing,
    ...patch,
    email: key,
    updatedAt: now,
    registeredAt: existing.registeredAt || now
  };
  saveAccounts(accounts);
  return accounts[key];
}
function snapshotSession(state) {
  return {
    assignedLevel: state.assignedLevel,
    diagnosticCompleted: state.diagnosticCompleted,
    diagnosticStep: state.diagnosticStep,
    diagnosticAnswers: state.diagnosticAnswers,
    lessonProgress: state.lessonProgress,
    learnerStats: state.learnerStats,
    progressPercent: state.progressPercent,
    enrolledClassroomCode: state.enrolledClassroomCode
  };
}
function resolveFromSeedDatabase(email) {
  const normalized = normalizeEmail(email);
  const record = userDatabase.find((u) => u.email === normalized);
  if (record) {
    return {
      email: record.email,
      name: record.name,
      role: record.role,
      assignedLevel: record.assignedLevel ?? null,
      diagnosticCompleted: !!record.assignedLevel && record.role === "apprentice"
    };
  }
  const localPart = normalized.split("@")[0].replace(/\./g, " ");
  const displayName = localPart.split(" ").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  if (normalized.includes("instructor") || normalized.includes("docente")) {
    return {
      email: normalized,
      name: displayName,
      role: "instructor",
      assignedLevel: null,
      diagnosticCompleted: false
    };
  }
  return null;
}
export function resolveUserFromDatabase(email) {
  const normalized = normalizeEmail(email);
  const saved = getAccount(normalized);
  if (saved?.role) {
    return {
      email: saved.email,
      name: saved.name,
      role: saved.role,
      assignedLevel: saved.assignedLevel || null,
      diagnosticCompleted: !!saved.diagnosticCompleted
    };
  }
  const seed = resolveFromSeedDatabase(normalized);
  if (seed) return seed;
  const localPart = normalized.split("@")[0].replace(/\./g, " ");
  const displayName = localPart.split(" ").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return { email: normalized, name: displayName, role: null, assignedLevel: null, diagnosticCompleted: false };
}
function buildOAuthUser(provider, context) {
  const email = `${provider.toLowerCase()}@sena.edu.co`;
  const saved = getAccount(email);
  const seed = resolveFromSeedDatabase(email);
  if (context === "register") {
    if (saved || seed) {
      return { user: saved || seed, exists: true };
    }
    return {
      user: { email, name: provider, role: null, assignedLevel: null },
      exists: false
    };
  }
  const user = saved ? {
    email: saved.email,
    name: saved.name,
    role: saved.role || null,
    assignedLevel: saved.assignedLevel || null,
    diagnosticCompleted: !!saved.diagnosticCompleted
  } : seed || { email, name: provider, role: null, assignedLevel: null };
  return { user, exists: !!(saved || seed) };
}
function validateEnrolledCode(email, code, classrooms) {
  if (!code || !email) return null;
  const room = classrooms.find((c) => c.code === code);
  if (!room) return null;
  const normalized = email.trim().toLowerCase();
  return room.apprentices.some((a) => a.email === normalized) ? code : null;
}
function delay(result) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(result), CONFIG.apiMockDelayMs);
  });
}
export const authService = {
  resolveUserFromDatabase,
  getAccount,
  upsertAccount,
  isRegistered(email) {
    const normalized = normalizeEmail(email);
    return !!(getAccount(normalized) || resolveFromSeedDatabase(normalized));
  },
  authenticate(email, password) {
    const normalized = normalizeEmail(email);
    if (!password.trim()) {
      return delay({ success: false, message: "password" });
    }
    const saved = getAccount(normalized);
    const seed = resolveFromSeedDatabase(normalized);
    if (!saved && !seed) {
      return delay({ success: false, message: "not_registered" });
    }
    const hasStoredPassword = !!saved?.password;
    const isSeedOnly = !hasStoredPassword && !!seed;
    if (!passwordsMatch(saved?.password, password, isSeedOnly)) {
      return delay({ success: false, message: "wrong_password" });
    }
    if (saved) {
      return delay({
        success: true,
        user: {
          email: saved.email,
          name: saved.name,
          role: saved.role || null,
          assignedLevel: saved.assignedLevel || null,
          diagnosticCompleted: !!saved.diagnosticCompleted
        },
        session: saved.session || null
      });
    }
    return delay({ success: true, user: seed, session: null });
  },
  oauth(provider, context = "login") {
    const { user, exists } = buildOAuthUser(provider, context);
    if (context === "login" && !exists) {
      return delay({ success: false, message: "not_registered" });
    }
    if (context === "register" && exists) {
      return delay({ success: false, message: "already_registered", user });
    }
    const saved = getAccount(user.email);
    return delay({
      success: true,
      user,
      provider,
      session: saved?.session || null
    });
  },
  registerWithEmail(email, password) {
    const normalized = normalizeEmail(email);
    if (!isPasswordValid(password)) {
      return delay({ success: false, message: "password_too_short" });
    }
    if (getAccount(normalized)) {
      return delay({ success: false, message: "already_registered" });
    }
    const seed = resolveFromSeedDatabase(normalized);
    const name = seed?.name || normalized.split("@")[0].replace(/\./g, " ");
    upsertAccount(normalized, {
      name,
      role: null,
      assignedLevel: null,
      password,
      diagnosticCompleted: false
    });
    return delay({
      success: true,
      user: { email: normalized, name, role: null, assignedLevel: null }
    });
  },
  requestPasswordReset(email) {
    const normalized = normalizeEmail(email);
    const exists = !!(getAccount(normalized) || resolveFromSeedDatabase(normalized));
    if (!exists) {
      return delay({ success: false, message: "not_registered" });
    }
    const code = generateResetCode();
    const tokens = loadResetTokens();
    tokens[normalized] = { code, expiresAt: Date.now() + RESET_TTL_MS };
    saveResetTokens(tokens);
    return delay({ success: true, code });
  },
  resetPassword(email, code, newPassword, confirmPassword) {
    const normalized = normalizeEmail(email);
    if (!isPasswordValid(newPassword)) {
      return delay({ success: false, message: "password_too_short" });
    }
    if (newPassword !== confirmPassword) {
      return delay({ success: false, message: "password_mismatch" });
    }
    const tokens = loadResetTokens();
    const entry = tokens[normalized];
    if (!entry || entry.code !== code.trim()) {
      return delay({ success: false, message: "invalid_reset_code" });
    }
    if (Date.now() > entry.expiresAt) {
      delete tokens[normalized];
      saveResetTokens(tokens);
      return delay({ success: false, message: "reset_expired" });
    }
    const seed = resolveFromSeedDatabase(normalized);
    const saved = getAccount(normalized);
    upsertAccount(normalized, {
      name: saved?.name || seed?.name || normalized,
      role: saved?.role || seed?.role || null,
      assignedLevel: saved?.assignedLevel ?? seed?.assignedLevel ?? null,
      password: newPassword,
      diagnosticCompleted: saved?.diagnosticCompleted ?? seed?.diagnosticCompleted ?? false
    });
    delete tokens[normalized];
    saveResetTokens(tokens);
    return delay({ success: true });
  },
  commitRole(role) {
    const user = store.getState().user;
    if (!user?.email) return null;
    const account = upsertAccount(user.email, {
      name: user.name,
      role,
      assignedLevel: role === "instructor" ? null : user.assignedLevel || null,
      diagnosticCompleted: role === "instructor"
    });
    store.setState({
      user: { ...user, role, assignedLevel: account.assignedLevel },
      ...role === "instructor" ? { diagnosticCompleted: true, assignedLevel: null, enrolledClassroomCode: null } : { enrolledClassroomCode: null }
    });
    return account;
  },
  syncAccountFromState() {
    const state = store.getState();
    const user = state.user;
    if (!user?.email || !user.role) return;
    upsertAccount(user.email, {
      name: user.name,
      role: user.role,
      assignedLevel: state.assignedLevel,
      diagnosticCompleted: state.diagnosticCompleted,
      session: snapshotSession(state)
    });
  },
  persistSessionBeforeLogout() {
    const state = store.getState();
    const user = state.user;
    if (!user?.email || !user.role) return;
    upsertAccount(user.email, {
      name: user.name,
      role: user.role,
      assignedLevel: state.assignedLevel,
      diagnosticCompleted: state.diagnosticCompleted,
      session: snapshotSession(state)
    });
  },
  routeAfterRegister(user, navigateTo, meta = {}) {
    upsertAccount(user.email, {
      name: user.name,
      role: null,
      assignedLevel: null,
      diagnosticCompleted: false
    });
    store.setState({
      user: { ...user, role: null },
      assignedLevel: null,
      diagnosticCompleted: false,
      diagnosticStep: 0,
      diagnosticAnswers: [],
      enrolledClassroomCode: null,
      lastAuthMeta: meta
    });
    navigateTo("role-selection");
  },
  routeAfterRegisterSuccess(role, navigateTo) {
    if (role === "instructor") {
      navigateTo("instructor-dashboard");
      return;
    }
    navigateTo("diagnostic");
  },
  routeAfterLogin(user, navigateTo, meta = {}, session = null) {
    const state = store.getState();
    const assignedLevel = user.assignedLevel || session?.assignedLevel || state.assignedLevel;
    const diagnosticCompleted = user.diagnosticCompleted || session?.diagnosticCompleted || state.diagnosticCompleted || !!assignedLevel;
    const sessionPatch = session ? {
      assignedLevel: session.assignedLevel ?? assignedLevel,
      diagnosticCompleted: session.diagnosticCompleted ?? diagnosticCompleted,
      diagnosticStep: session.diagnosticStep ?? 0,
      diagnosticAnswers: session.diagnosticAnswers ?? [],
      lessonProgress: session.lessonProgress ?? {},
      learnerStats: session.learnerStats ?? state.learnerStats,
      progressPercent: session.progressPercent ?? 0,
      enrolledClassroomCode: validateEnrolledCode(
        user.email,
        session.enrolledClassroomCode,
        state.classrooms
      )
    } : { enrolledClassroomCode: validateEnrolledCode(user.email, state.enrolledClassroomCode, state.classrooms) };
    store.setState({
      user: { ...user, assignedLevel: user.role === "apprentice" ? assignedLevel : null },
      lastAuthMeta: meta,
      ...sessionPatch
    });
    if (user.role === "instructor") {
      navigateTo("instructor-dashboard");
      return;
    }
    if (user.role === "apprentice") {
      if (diagnosticCompleted) {
        navigateTo("apprentice-dashboard");
        return;
      }
      navigateTo("diagnostic");
      return;
    }
    navigateTo("role-selection");
  },
  logout() {
    authService.persistSessionBeforeLogout();
    store.reset();
  },
  updateProfile({ name, email }) {
    const user = store.getState().user;
    if (!user) return null;
    const oldEmail = user.email;
    const updated = {
      ...user,
      ...name !== void 0 ? { name: name.trim() } : {},
      ...email !== void 0 ? { email: normalizeEmail(email) } : {}
    };
    if (email !== void 0 && normalizeEmail(email) !== oldEmail) {
      const accounts = loadAccounts();
      const oldKey = normalizeEmail(oldEmail);
      const newKey = normalizeEmail(email);
      if (accounts[oldKey]) {
        accounts[newKey] = { ...accounts[oldKey], ...updated, email: newKey };
        delete accounts[oldKey];
        saveAccounts(accounts);
      }
    } else {
      upsertAccount(updated.email, { name: updated.name });
    }
    store.setState({ user: updated });
    authService.syncAccountFromState();
    return updated;
  }
};
