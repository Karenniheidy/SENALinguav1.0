/** Módulo: authService — Autenticación, registro y gestión de sesiones de usuario. */

// ── Importaciones ──
import { CONFIG } from '@/config/app.config';
import { userDatabase } from '@/data/mockData';
import { store } from '@/core/state/store';
import type {
  AppState,
  AuthEmailResult,
  AuthMeta,
  NavigateFn,
  OAuthResult,
  PasswordResetConfirmResult,
  PasswordResetResult,
  User,
  UserRole
} from '@/types';

// ── Constantes ──
const ACCOUNTS_KEY = 'senaligua_accounts_v4';
const RESET_KEY = 'senaligua_reset_v4';
const DEFAULT_SEED_PASSWORD = 'Sena2026!';
const RESET_TTL_MS = 15 * 60 * 1000;
const MIN_PASSWORD_LENGTH = 8;

// ── Utilidades internas: normalización de correo ──
function normalizeEmail(email) {
    return email.trim().toLowerCase();
}

// ── Utilidades internas: persistencia de cuentas ──
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
        /* storage unavailable */
    }
}

// ── Utilidades internas: contraseñas ──
function isPasswordValid(password: string): boolean {
    return password.trim().length >= MIN_PASSWORD_LENGTH;
}

function passwordsMatch(stored: string | undefined, input: string, isSeed = false): boolean {
    const expected = stored || (isSeed ? DEFAULT_SEED_PASSWORD : undefined);
    if (!expected) return false;
    return expected === input;
}

function loadResetTokens(): Record<string, { code: string; expiresAt: number }> {
    try {
        const raw = localStorage.getItem(RESET_KEY);
        return raw ? JSON.parse(raw) : {};
    } catch {
        return {};
    }
}

function saveResetTokens(tokens: Record<string, { code: string; expiresAt: number }>): void {
    try {
        localStorage.setItem(RESET_KEY, JSON.stringify(tokens));
    } catch {
        /* storage unavailable */
    }
}

function generateResetCode(): string {
    return String(Math.floor(100000 + Math.random() * 900000));
}

function getAccount(email) {
    const key = normalizeEmail(email);
    return loadAccounts()[key] || null;
}

function upsertAccount(email, patch) {
    const accounts = loadAccounts();
    const key = normalizeEmail(email);
    const now = new Date().toISOString();
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

// ── Utilidades internas: instantánea de sesión ──
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

// ── Resolución de usuarios desde datos semilla ──
function resolveFromSeedDatabase(email: string): User | null {
    const normalized = normalizeEmail(email);
    const record = userDatabase.find(u => u.email === normalized);

    if (record) {
        return {
            email: record.email,
            name: record.name,
            role: record.role,
            assignedLevel: record.assignedLevel ?? null,
            diagnosticCompleted: !!record.assignedLevel && record.role === 'apprentice'
        };
    }

    const localPart = normalized.split('@')[0].replace(/\./g, ' ');
    const displayName = localPart.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    if (normalized.includes('instructor') || normalized.includes('docente')) {
        return {
            email: normalized,
            name: displayName,
            role: 'instructor',
            assignedLevel: null,
            diagnosticCompleted: false
        };
    }

    return null;
}

// ── API pública: resolución de usuario ──
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

    const localPart = normalized.split('@')[0].replace(/\./g, ' ');
    const displayName = localPart.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    return { email: normalized, name: displayName, role: null, assignedLevel: null, diagnosticCompleted: false };
}

// ── Utilidades internas: construcción de usuario OAuth ──
function buildOAuthUser(provider, context) {
    const email = `${provider.toLowerCase()}@sena.edu.co`;
    const saved = getAccount(email);
    const seed = resolveFromSeedDatabase(email);

    if (context === 'register') {
        if (saved || seed) {
            return { user: saved || seed, exists: true };
        }
        return {
            user: { email, name: provider, role: null, assignedLevel: null },
            exists: false
        };
    }

    const user = saved
        ? {
            email: saved.email,
            name: saved.name,
            role: saved.role || null,
            assignedLevel: saved.assignedLevel || null,
            diagnosticCompleted: !!saved.diagnosticCompleted
        }
        : seed || { email, name: provider, role: null, assignedLevel: null };

    return { user, exists: !!(saved || seed) };
}

// ── Validación de código de aula inscrito ──
function validateEnrolledCode(email, code, classrooms) {
    if (!code || !email) return null;
    const room = classrooms.find(c => c.code === code);
    if (!room) return null;
    const normalized = email.trim().toLowerCase();
    return room.apprentices.some(a => a.email === normalized) ? code : null;
}

// ── Retardo simulado de API ──
function delay<T>(result: T): Promise<T> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(result), CONFIG.apiMockDelayMs);
    });
}

// ── API pública: servicio de autenticación ──
export const authService = {
    resolveUserFromDatabase,
    getAccount,
    upsertAccount,

    // ── Verificación de registro ──
    isRegistered(email) {
        const normalized = normalizeEmail(email);
        return !!(getAccount(normalized) || resolveFromSeedDatabase(normalized));
    },

    // ── Autenticación por correo y contraseña ──
    authenticate(email: string, password: string): Promise<AuthEmailResult> {
        const normalized = normalizeEmail(email);

        if (!password.trim()) {
            return delay<AuthEmailResult>({ success: false, message: 'password' });
        }

        const saved = getAccount(normalized);
        const seed = resolveFromSeedDatabase(normalized);

        if (!saved && !seed) {
            return delay<AuthEmailResult>({ success: false, message: 'not_registered' });
        }

        const hasStoredPassword = !!saved?.password;
        const isSeedOnly = !hasStoredPassword && !!seed;

        if (!passwordsMatch(saved?.password, password, isSeedOnly)) {
            return delay<AuthEmailResult>({ success: false, message: 'wrong_password' });
        }

        if (saved) {
            return delay<AuthEmailResult>({
                success: true,
                user: {
                    email: saved.email,
                    name: saved.name,
                    role: (saved.role as UserRole) || null,
                    assignedLevel: saved.assignedLevel || null,
                    diagnosticCompleted: !!saved.diagnosticCompleted
                },
                session: saved.session || null
            });
        }

        return delay<AuthEmailResult>({ success: true, user: seed!, session: null });
    },

    // ── Autenticación OAuth ──
    oauth(provider: string, context: 'login' | 'register' = 'login'): Promise<OAuthResult> {
        const { user, exists } = buildOAuthUser(provider, context);

        if (context === 'login' && !exists) {
            return delay<OAuthResult>({ success: false, message: 'not_registered' });
        }

        if (context === 'register' && exists) {
            return delay<OAuthResult>({ success: false, message: 'already_registered', user });
        }

        const saved = getAccount(user.email);
        return delay<OAuthResult>({
            success: true,
            user,
            provider,
            session: saved?.session || null
        });
    },

    // ── Registro por correo y contraseña ──
    registerWithEmail(email: string, password: string): Promise<AuthEmailResult> {
        const normalized = normalizeEmail(email);

        if (!isPasswordValid(password)) {
            return delay<AuthEmailResult>({ success: false, message: 'password_too_short' });
        }

        if (getAccount(normalized)) {
            return delay<AuthEmailResult>({ success: false, message: 'already_registered' });
        }

        const seed = resolveFromSeedDatabase(normalized);
        const name = seed?.name || normalized.split('@')[0].replace(/\./g, ' ');

        upsertAccount(normalized, {
            name,
            role: null,
            assignedLevel: null,
            password,
            diagnosticCompleted: false
        });

        return delay<AuthEmailResult>({
            success: true,
            user: { email: normalized, name, role: null, assignedLevel: null }
        });
    },

    // ── Solicitud de recuperación de contraseña ──
    requestPasswordReset(email: string): Promise<PasswordResetResult> {
        const normalized = normalizeEmail(email);
        const exists = !!(getAccount(normalized) || resolveFromSeedDatabase(normalized));

        if (!exists) {
            return delay<PasswordResetResult>({ success: false, message: 'not_registered' });
        }

        const code = generateResetCode();
        const tokens = loadResetTokens();
        tokens[normalized] = { code, expiresAt: Date.now() + RESET_TTL_MS };
        saveResetTokens(tokens);

        return delay<PasswordResetResult>({ success: true, code });
    },

    // ── Confirmación de nueva contraseña ──
    resetPassword(
        email: string,
        code: string,
        newPassword: string,
        confirmPassword: string
    ): Promise<PasswordResetConfirmResult> {
        const normalized = normalizeEmail(email);

        if (!isPasswordValid(newPassword)) {
            return delay({ success: false, message: 'password_too_short' });
        }

        if (newPassword !== confirmPassword) {
            return delay({ success: false, message: 'password_mismatch' });
        }

        const tokens = loadResetTokens();
        const entry = tokens[normalized];

        if (!entry || entry.code !== code.trim()) {
            return delay({ success: false, message: 'invalid_reset_code' });
        }

        if (Date.now() > entry.expiresAt) {
            delete tokens[normalized];
            saveResetTokens(tokens);
            return delay({ success: false, message: 'reset_expired' });
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

    // ── Confirmación de rol de usuario ──
    commitRole(role) {
        const user = store.getState().user;
        if (!user?.email) return null;

        const account = upsertAccount(user.email, {
            name: user.name,
            role,
            assignedLevel: role === 'instructor' ? null : (user.assignedLevel || null),
            diagnosticCompleted: role === 'instructor'
        });

        store.setState({
            user: { ...user, role, assignedLevel: account.assignedLevel },
            ...(role === 'instructor'
                ? { diagnosticCompleted: true, assignedLevel: null, enrolledClassroomCode: null }
                : { enrolledClassroomCode: null })
        });

        return account;
    },

    // ── Sincronización de cuenta desde el estado ──
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

    // ── Persistencia de sesión antes de cerrar ──
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

    // ── Navegación tras registro ──
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
        navigateTo('role-selection');
    },

    // ── Navegación tras registro exitoso (rol confirmado) ──
    routeAfterRegisterSuccess(role: UserRole, navigateTo: NavigateFn): void {
        if (role === 'instructor') {
            navigateTo('instructor-dashboard');
            return;
        }
        navigateTo('diagnostic');
    },

    // ── Navegación tras inicio de sesión ──
    routeAfterLogin(user: User, navigateTo: NavigateFn, meta: AuthMeta = {}, session: Partial<AppState> | null = null) {
        const state = store.getState();
        const assignedLevel = user.assignedLevel || session?.assignedLevel || state.assignedLevel;
        const diagnosticCompleted = user.diagnosticCompleted
            || session?.diagnosticCompleted
            || state.diagnosticCompleted
            || !!assignedLevel;

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
            user: { ...user, assignedLevel: user.role === 'apprentice' ? assignedLevel : null },
            lastAuthMeta: meta,
            ...sessionPatch
        });

        if (user.role === 'instructor') {
            navigateTo('instructor-dashboard');
            return;
        }

        if (user.role === 'apprentice') {
            if (diagnosticCompleted) {
                navigateTo('apprentice-dashboard');
                return;
            }
            navigateTo('diagnostic');
            return;
        }

        navigateTo('role-selection');
    },

    // ── Cierre de sesión ──
    logout() {
        authService.persistSessionBeforeLogout();
        store.reset();
    },

    // ── Actualización de perfil ──
    updateProfile({ name, email }) {
        const user = store.getState().user;
        if (!user) return null;

        const oldEmail = user.email;
        const updated = {
            ...user,
            ...(name !== undefined ? { name: name.trim() } : {}),
            ...(email !== undefined ? { email: normalizeEmail(email) } : {})
        };

        if (email !== undefined && normalizeEmail(email) !== oldEmail) {
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
