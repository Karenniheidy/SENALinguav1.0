import { store } from "@/core/state/store";
import { authService } from "@/services/authService";
import { t, translatePageDOM } from "@/i18n/translator";
import { oauthIcon } from "@/components/oauthIcons";
import { roleAvatar } from "@/components/roleAvatars";
import { q, qAll, requireEl } from "@/utils/dom";
function authScene(content) {
  return `
        <div class="auth-scene" aria-hidden="false">
            <div class="auth-orb auth-orb--a"></div>
            <div class="auth-orb auth-orb--b"></div>
            <div class="auth-orb auth-orb--c"></div>
            <div class="auth-card-frame">
                <div class="auth-card-glow"></div>
                <div class="auth-card card-premium-luxury stagger-children">
                    ${content}
                </div>
            </div>
        </div>
    `;
}
function generateOAuthBlock() {
  const providers = [
    { id: "Gmail", label: "auth.oauth.gmail", mod: "gmail" },
    { id: "Outlook", label: "auth.oauth.outlook", mod: "outlook" },
    { id: "GitHub", label: "auth.oauth.github", mod: "github" }
  ];
  return `
        <div class="oauth-container">
            ${providers.map((p) => `
                <button type="button" class="btn-oauth btn-oauth--${p.mod} oauth-action-trigger" data-provider="${p.id}">
                    ${oauthIcon(p.id)}
                    <span class="btn-oauth-label" data-i18n="${p.label}">${t(p.label)}</span>
                    <span class="btn-oauth-arrow" aria-hidden="true">\u2192</span>
                </button>
            `).join("")}
        </div>
        <p class="auth-oauth-hint" data-i18n="auth.oauth.hint">${t("auth.oauth.hint")}</p>
    `;
}
function authField(id, labelKey, type, placeholder, autocomplete, minLength) {
  const minAttr = minLength ? ` minlength="${minLength}"` : "";
  return `
        <div class="auth-field">
            <label for="${id}" data-i18n="${labelKey}">${t(labelKey)}</label>
            <div class="auth-input-wrap">
                <input type="${type}" class="input-field auth-input" required id="${id}" placeholder="${placeholder}" autocomplete="${autocomplete}"${minAttr}>
            </div>
        </div>
    `;
}
function mapAuthError(message) {
  const keys = {
    already_registered: "auth.error.already",
    not_registered: "auth.error.not.registered",
    wrong_password: "auth.error.wrong_password",
    password: "auth.error.password",
    password_too_short: "auth.error.password_short",
    password_mismatch: "auth.error.password_mismatch",
    invalid_reset_code: "auth.error.invalid_reset_code",
    reset_expired: "auth.error.reset_expired"
  };
  return t(keys[message] ?? "auth.error.generic");
}
function setOAuthLoading(div, loading) {
  qAll(div, '.oauth-action-trigger, .auth-form button[type="submit"]').forEach((btn) => {
    btn.disabled = loading;
    if (loading) btn.setAttribute("aria-busy", "true");
    else btn.removeAttribute("aria-busy");
  });
  q(div, ".auth-card")?.classList.toggle("auth-card--loading", loading);
}
function bindOAuth(div, context, onSuccess, onError) {
  qAll(div, ".oauth-action-trigger").forEach((btn) => {
    btn.addEventListener("click", async () => {
      setOAuthLoading(div, true);
      try {
        const provider = btn.dataset.provider ?? "";
        const result = await authService.oauth(provider, context);
        if (result.success === false) {
          onError?.(result);
          return;
        }
        onSuccess(result.user, { provider: result.provider, session: result.session });
      } finally {
        setOAuthLoading(div, false);
      }
    });
  });
}
function showAuthError(div, selector, message) {
  const el = q(div, selector);
  if (!el) return;
  el.hidden = false;
  el.textContent = message;
}
export function renderRegister(navigateTo) {
  const div = document.createElement("div");
  div.className = "auth-shell fade-in";
  div.innerHTML = authScene(`
        <div class="auth-card-header">
            <span class="auth-pill">\u2726 ADSO \xB7 Technical English</span>
            <h2 data-i18n="auth.create">${t("auth.create")}</h2>
            <p class="auth-subtitle" data-i18n="auth.create.sub">${t("auth.create.sub")}</p>
        </div>
        ${generateOAuthBlock()}
        <div class="auth-divider"><span data-i18n="auth.or">${t("auth.or")}</span></div>
        <form id="auth-form-runtime" class="auth-form">
            ${authField("auth-email-node", "auth.email", "email", "developer@misena.edu.co", "email")}
            ${authField("auth-pass-node", "auth.pass", "password", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "new-password", 8)}
            <p id="register-error" class="form-error" hidden></p>
            <button type="submit" class="btn-register-action btn-full auth-submit" data-i18n="auth.submit">
                <span>${t("auth.submit")}</span>
                <span class="auth-submit-icon" aria-hidden="true">\u2192</span>
            </button>
        </form>
        <p class="auth-switch">
            <span data-i18n="auth.have.account">${t("auth.have.account")}</span>
            <button type="button" class="auth-switch-link" id="go-to-login" data-i18n="auth.go.login">${t("auth.go.login")}</button>
        </p>
    `);
  const goRegister = (user, meta = {}) => authService.routeAfterRegister(user, navigateTo, meta);
  bindOAuth(div, "register", goRegister, (result) => {
    showAuthError(div, "#register-error", mapAuthError(result.message));
  });
  q(div, "#go-to-login")?.addEventListener("click", () => navigateTo("login"));
  requireEl(div, "#auth-form-runtime").addEventListener("submit", async (e) => {
    e.preventDefault();
    setOAuthLoading(div, true);
    const errorEl = requireEl(div, "#register-error");
    errorEl.hidden = true;
    try {
      const email = requireEl(div, "#auth-email-node").value;
      const password = requireEl(div, "#auth-pass-node").value;
      const result = await authService.registerWithEmail(email, password);
      if (result.success === false) {
        errorEl.hidden = false;
        errorEl.textContent = mapAuthError(result.message);
        return;
      }
      goRegister(result.user);
    } finally {
      setOAuthLoading(div, false);
    }
  });
  return div;
}
export function renderLogin(navigateTo) {
  const div = document.createElement("div");
  div.className = "auth-shell fade-in";
  div.innerHTML = authScene(`
        <div class="auth-card-header">
            <span class="auth-pill">\u2726 SENALingua</span>
            <h2 data-i18n="auth.login.title">${t("auth.login.title")}</h2>
            <p class="auth-subtitle" data-i18n="auth.login.sub">${t("auth.login.sub")}</p>
        </div>
        ${generateOAuthBlock()}
        <div class="auth-divider"><span data-i18n="auth.or">${t("auth.or")}</span></div>
        <form id="login-form" class="auth-form">
            ${authField("login-email", "auth.email", "email", "instructor@sena.edu.co", "email")}
            ${authField("login-pass", "auth.pass", "password", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "current-password")}
            <p class="auth-forgot-row">
                <button type="button" class="auth-forgot-link" id="go-forgot-password" data-i18n="auth.forgot.link">${t("auth.forgot.link")}</button>
            </p>
            <p id="login-error" class="form-error" hidden></p>
            <button type="submit" class="btn-login-action btn-full auth-submit auth-submit--login" data-i18n="auth.login.submit">
                <span>${t("auth.login.submit")}</span>
                <span class="auth-submit-icon" aria-hidden="true">\u2192</span>
            </button>
        </form>
        <p class="auth-switch">
            <span data-i18n="auth.no.account">${t("auth.no.account")}</span>
            <button type="button" class="auth-switch-link" id="go-to-register" data-i18n="auth.go.register">${t("auth.go.register")}</button>
        </p>
    `);
  const goLogin = (user, meta = {}) => authService.routeAfterLogin(user, navigateTo, meta, meta.session ?? null);
  bindOAuth(div, "login", (user, meta) => goLogin(user, meta), (result) => {
    showAuthError(div, "#login-error", mapAuthError(result.message));
  });
  q(div, "#go-to-register")?.addEventListener("click", () => navigateTo("register"));
  q(div, "#go-forgot-password")?.addEventListener("click", () => navigateTo("forgot-password"));
  requireEl(div, "#login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    setOAuthLoading(div, true);
    const errorEl = requireEl(div, "#login-error");
    errorEl.hidden = true;
    try {
      const email = requireEl(div, "#login-email").value;
      const password = requireEl(div, "#login-pass").value;
      if (!password.trim()) {
        showAuthError(div, "#login-error", t("auth.error.password"));
        return;
      }
      const result = await authService.authenticate(email, password);
      if (result.success === false) {
        showAuthError(div, "#login-error", mapAuthError(result.message));
        return;
      }
      goLogin(result.user, { session: result.session });
    } finally {
      setOAuthLoading(div, false);
    }
  });
  return div;
}
function redirectShell() {
  const div = document.createElement("div");
  div.className = "auth-shell fade-in";
  return div;
}
function roleScene(content) {
  return `
        <div class="role-scene">
            <div class="role-orb role-orb--a" aria-hidden="true"></div>
            <div class="role-orb role-orb--b" aria-hidden="true"></div>
            <div class="role-orb role-orb--c" aria-hidden="true"></div>
            ${content}
        </div>
    `;
}
export function renderRoleSelection(navigateTo) {
  const user = store.getState().user;
  if (!user?.email) {
    navigateTo("register");
    return redirectShell();
  }
  const div = document.createElement("div");
  div.className = "fade-in role-shell";
  div.innerHTML = roleScene(`
        <header class="role-header stagger-children">
            <span class="auth-pill" data-i18n="role.badge">${t("role.badge")}</span>
            <h2 data-i18n="role.heading">${t("role.heading")}</h2>
            <p class="auth-subtitle role-sub" data-i18n="role.sub">${t("role.sub")}</p>
        </header>
        <div class="role-stage stagger-children">
            <button type="button" id="role-apprentice" class="role-card role-card--apprentice">
                <div class="role-card-glow" aria-hidden="true"></div>
                <div class="role-card-inner">
                    ${roleAvatar("apprentice")}
                    <span class="role-tag" data-i18n="role.learn.tag">${t("role.learn.tag")}</span>
                    <h3 data-i18n="role.learn">${t("role.learn")}</h3>
                    <p data-i18n="role.learn.sub">${t("role.learn.sub")}</p>
                    <span class="role-cta">
                        <span class="role-cta-text" data-i18n="role.learn.cta.text">${t("role.learn.cta.text")}</span>
                        <span class="role-cta-arrow" aria-hidden="true">\u2192</span>
                    </span>
                </div>
            </button>
            <button type="button" id="role-instructor" class="role-card role-card--instructor">
                <div class="role-card-glow" aria-hidden="true"></div>
                <div class="role-card-inner">
                    ${roleAvatar("instructor")}
                    <span class="role-tag role-tag--warm" data-i18n="role.inst.tag">${t("role.inst.tag")}</span>
                    <h3 data-i18n="role.inst">${t("role.inst")}</h3>
                    <p data-i18n="role.inst.sub">${t("role.inst.sub")}</p>
                    <span class="role-cta role-cta--warm">
                        <span class="role-cta-text" data-i18n="role.inst.cta.text">${t("role.inst.cta.text")}</span>
                        <span class="role-cta-arrow" aria-hidden="true">\u2192</span>
                    </span>
                </div>
            </button>
        </div>
    `);
  requireEl(div, "#role-apprentice").addEventListener("click", () => {
    authService.commitRole("apprentice");
    navigateTo("register-success");
  });
  requireEl(div, "#role-instructor").addEventListener("click", () => {
    authService.commitRole("instructor");
    navigateTo("register-success");
  });
  return div;
}
export function renderForgotPassword(navigateTo) {
  const div = document.createElement("div");
  div.className = "auth-shell fade-in";
  div.innerHTML = authScene(`
        <div class="auth-card-header">
            <span class="auth-pill">\u2726 SENALingua</span>
            <h2 data-i18n="auth.forgot.title">${t("auth.forgot.title")}</h2>
            <p class="auth-subtitle" data-i18n="auth.forgot.sub">${t("auth.forgot.sub")}</p>
        </div>
        <form id="forgot-form" class="auth-form">
            ${authField("forgot-email", "auth.email", "email", "developer@misena.edu.co", "email")}
            <p id="forgot-error" class="form-error" hidden></p>
            <button type="submit" class="btn-register-action btn-full auth-submit" data-i18n="auth.forgot.submit">
                <span>${t("auth.forgot.submit")}</span>
                <span class="auth-submit-icon" aria-hidden="true">\u2192</span>
            </button>
        </form>
        <p class="auth-switch">
            <button type="button" class="auth-switch-link" id="forgot-back-login" data-i18n="auth.forgot.back">${t("auth.forgot.back")}</button>
        </p>
    `);
  q(div, "#forgot-back-login")?.addEventListener("click", () => navigateTo("login"));
  requireEl(div, "#forgot-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const errorEl = requireEl(div, "#forgot-error");
    errorEl.hidden = true;
    const email = requireEl(div, "#forgot-email").value;
    const result = await authService.requestPasswordReset(email);
    if (!result.success) {
      showAuthError(div, "#forgot-error", mapAuthError(result.message ?? "generic"));
      return;
    }
    store.setState({ pendingResetEmail: email.trim().toLowerCase() });
    const card = requireEl(div, ".auth-card");
    card.innerHTML = `
            <div class="auth-success-panel stagger-children">
                <div class="auth-success-icon" aria-hidden="true">\u2713</div>
                <h2 data-i18n="auth.forgot.sent.title">${t("auth.forgot.sent.title")}</h2>
                <p class="auth-subtitle" data-i18n="auth.forgot.sent.sub">${t("auth.forgot.sent.sub")}</p>
                <div class="auth-reset-code-box">
                    <span class="auth-reset-code-label" data-i18n="auth.forgot.code.label">${t("auth.forgot.code.label")}</span>
                    <strong class="auth-reset-code" data-i18n-skip>${result.code}</strong>
                </div>
                <button type="button" class="btn-register-action btn-full auth-submit" id="go-reset-password" data-i18n="auth.forgot.continue">
                    <span>${t("auth.forgot.continue")}</span>
                    <span class="auth-submit-icon" aria-hidden="true">\u2192</span>
                </button>
                <p class="auth-switch">
                    <button type="button" class="auth-switch-link" id="forgot-back-login-2" data-i18n="auth.forgot.back">${t("auth.forgot.back")}</button>
                </p>
            </div>
        `;
    translatePageDOM(card);
    q(div, "#go-reset-password")?.addEventListener("click", () => navigateTo("reset-password"));
    q(div, "#forgot-back-login-2")?.addEventListener("click", () => navigateTo("login"));
  });
  return div;
}
export function renderResetPassword(navigateTo) {
  const pendingEmail = store.getState().pendingResetEmail ?? "";
  const div = document.createElement("div");
  div.className = "auth-shell fade-in";
  div.innerHTML = authScene(`
        <div class="auth-card-header">
            <span class="auth-pill">\u2726 SENALingua</span>
            <h2 data-i18n="auth.reset.title">${t("auth.reset.title")}</h2>
            <p class="auth-subtitle" data-i18n="auth.reset.sub">${t("auth.reset.sub")}</p>
        </div>
        <form id="reset-form" class="auth-form">
            ${authField("reset-email", "auth.email", "email", "developer@misena.edu.co", "email")}
            <div class="auth-field">
                <label for="reset-code" data-i18n="auth.reset.code">${t("auth.reset.code")}</label>
                <div class="auth-input-wrap">
                    <input type="text" class="input-field auth-input input-code" required id="reset-code" maxlength="6" pattern="[0-9]{6}" inputmode="numeric" autocomplete="one-time-code" placeholder="000000">
                </div>
            </div>
            ${authField("reset-pass", "auth.reset.new_pass", "password", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "new-password", 8)}
            ${authField("reset-pass-confirm", "auth.reset.confirm_pass", "password", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "new-password", 8)}
            <p id="reset-error" class="form-error" hidden></p>
            <button type="submit" class="btn-register-action btn-full auth-submit" data-i18n="auth.reset.submit">
                <span>${t("auth.reset.submit")}</span>
                <span class="auth-submit-icon" aria-hidden="true">\u2192</span>
            </button>
        </form>
        <p class="auth-switch">
            <button type="button" class="auth-switch-link" id="reset-back-login" data-i18n="auth.forgot.back">${t("auth.forgot.back")}</button>
        </p>
    `);
  const emailInput = q(div, "#reset-email");
  if (emailInput && pendingEmail) emailInput.value = pendingEmail;
  q(div, "#reset-back-login")?.addEventListener("click", () => navigateTo("login"));
  requireEl(div, "#reset-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const errorEl = requireEl(div, "#reset-error");
    errorEl.hidden = true;
    const email = requireEl(div, "#reset-email").value;
    const code = requireEl(div, "#reset-code").value;
    const newPassword = requireEl(div, "#reset-pass").value;
    const confirmPassword = requireEl(div, "#reset-pass-confirm").value;
    const result = await authService.resetPassword(email, code, newPassword, confirmPassword);
    if (!result.success) {
      showAuthError(div, "#reset-error", mapAuthError(result.message ?? "generic"));
      return;
    }
    store.setState({ pendingResetEmail: null });
    const card = requireEl(div, ".auth-card");
    card.innerHTML = `
            <div class="auth-success-panel stagger-children">
                <div class="auth-success-icon" aria-hidden="true">\u2713</div>
                <h2 data-i18n="auth.reset.success.title">${t("auth.reset.success.title")}</h2>
                <p class="auth-subtitle" data-i18n="auth.reset.success.sub">${t("auth.reset.success.sub")}</p>
                <button type="button" class="btn-register-action btn-full auth-submit" id="reset-go-login" data-i18n="auth.reset.success.cta">
                    <span>${t("auth.reset.success.cta")}</span>
                    <span class="auth-submit-icon" aria-hidden="true">\u2192</span>
                </button>
            </div>
        `;
    translatePageDOM(card);
    q(div, "#reset-go-login")?.addEventListener("click", () => navigateTo("login"));
  });
  return div;
}
export function renderRegisterSuccess(navigateTo) {
  const user = store.getState().user;
  if (!user?.email) {
    navigateTo("register");
    return redirectShell();
  }
  if (!user.role) {
    navigateTo("role-selection");
    return redirectShell();
  }
  const role = user.role;
  const isInstructor = role === "instructor";
  const div = document.createElement("div");
  div.className = "auth-shell fade-in";
  div.innerHTML = authScene(`
        <div class="auth-success-panel auth-success-panel--register stagger-children">
            <span class="auth-pill auth-pill--success" data-i18n="auth.register.success.badge">${t("auth.register.success.badge")}</span>
            <div class="auth-success-icon auth-success-icon--large" aria-hidden="true">\u2713</div>
            <h2 data-i18n="auth.register.success.title">${t("auth.register.success.title")}</h2>
            <p class="auth-subtitle" data-i18n="${isInstructor ? "auth.register.success.sub.instructor" : "auth.register.success.sub.apprentice"}">
                ${t(isInstructor ? "auth.register.success.sub.instructor" : "auth.register.success.sub.apprentice")}
            </p>
            ${user?.email ? `<p class="auth-success-email" data-i18n-skip>${user.email}</p>` : ""}
            <button type="button" class="btn-register-action btn-full auth-submit" id="register-success-cta" data-i18n="${isInstructor ? "auth.register.success.cta.instructor" : "auth.register.success.cta.apprentice"}">
                <span>${t(isInstructor ? "auth.register.success.cta.instructor" : "auth.register.success.cta.apprentice")}</span>
                <span class="auth-submit-icon" aria-hidden="true">\u2192</span>
            </button>
        </div>
    `);
  q(div, "#register-success-cta")?.addEventListener("click", () => {
    if (role) authService.routeAfterRegisterSuccess(role, navigateTo);
  });
  return div;
}
