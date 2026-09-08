/** Vista: apprenticeDashboard — Panel principal del aprendiz */

// ── Dependencias ──
import type { NavigateFn } from '@/types';
import { getModulesForLevel } from '@/data/curriculum';
import { store } from '@/core/state/store';
import { t } from '@/i18n/translator';
import { classroomService } from '@/services/classroomService';
import { learningService } from '@/services/learningService';
import { authService } from '@/services/authService';
import { icon, skillChips } from '@/components/uiIcons';
import { q, qAll, requireEl } from '@/utils/dom';

// ── Funciones auxiliares: perfil y progreso ──
function getInitials(name = '') {
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return 'AD';
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

function renderProgressRing(percent) {
    const r = 42;
    const circ = 2 * Math.PI * r;
    const offset = circ - (percent / 100) * circ;
    return `
        <div class="hub-ring" aria-label="${percent}%">
            <svg width="108" height="108" viewBox="0 0 100 100">
                <circle class="hub-ring-track" cx="50" cy="50" r="${r}"/>
                <circle class="hub-ring-fill" cx="50" cy="50" r="${r}"
                    stroke-dasharray="${circ}" stroke-dashoffset="${circ}"
                    data-target-offset="${offset}"/>
            </svg>
            <span class="hub-ring-text">${percent}%</span>
        </div>
    `;
}

function renderProfileDrawer(user, level) {
    return `
        <div class="hub-profile-overlay" id="hub-profile-overlay" hidden>
            <div class="hub-profile-drawer" role="dialog" aria-modal="true" aria-labelledby="hub-profile-title">
                <button type="button" class="hub-profile-close" id="hub-profile-close" aria-label="${t('profile.cancel')}">×</button>
                <div class="hub-profile-drawer-head">
                    <span class="hub-avatar hub-avatar--lg" aria-hidden="true">${getInitials(user?.name)}</span>
                    <h2 id="hub-profile-title" data-i18n="profile.title">${t('profile.title')}</h2>
                    <p data-i18n="profile.sub">${t('profile.sub')}</p>
                </div>
                <form id="hub-profile-form" class="hub-profile-form">
                    <div class="hub-field">
                        <label for="profile-name" data-i18n="profile.name">${t('profile.name')}</label>
                        <input type="text" id="profile-name" class="input-field auth-input" value="${user?.name || ''}" required autocomplete="name">
                    </div>
                    <div class="hub-field">
                        <label for="profile-email" data-i18n="profile.email">${t('profile.email')}</label>
                        <input type="email" id="profile-email" class="input-field auth-input" value="${user?.email || ''}" required autocomplete="email">
                    </div>
                    <div class="hub-field hub-field--readonly">
                        <label data-i18n="profile.level">${t('profile.level')}</label>
                        <span class="hub-readonly-value">CEFR ${level}</span>
                    </div>
                    <div class="hub-field hub-field--readonly">
                        <label data-i18n="profile.role">${t('profile.role')}</label>
                        <span class="hub-readonly-value" data-i18n="profile.role.apprentice">${t('profile.role.apprentice')}</span>
                    </div>
                    <p id="profile-saved-msg" class="hub-profile-saved" hidden data-i18n="profile.saved">${t('profile.saved')}</p>
                    <div class="hub-profile-actions">
                        <button type="button" class="btn-login-action" id="hub-profile-cancel" data-i18n="profile.cancel">${t('profile.cancel')}</button>
                        <button type="submit" class="btn-register-action" data-i18n="profile.save">${t('profile.save')}</button>
                    </div>
                </form>
            </div>
        </div>
    `;
}

function bindProfilePanel(div, navigateTo) {
    const overlay = div.querySelector('#hub-profile-overlay');
    const openBtn = div.querySelector('#hub-open-profile');
    const closeBtn = div.querySelector('#hub-profile-close');
    const cancelBtn = div.querySelector('#hub-profile-cancel');
    const form = div.querySelector('#hub-profile-form');
    const savedMsg = div.querySelector('#profile-saved-msg');

    const close = () => {
        overlay.hidden = true;
        document.body.classList.remove('hub-drawer-open');
    };

    const open = () => {
        overlay.hidden = false;
        document.body.classList.add('hub-drawer-open');
        div.querySelector('#profile-name')?.focus();
    };

    openBtn?.addEventListener('click', open);
    closeBtn?.addEventListener('click', close);
    cancelBtn?.addEventListener('click', close);
    overlay?.addEventListener('click', (e) => {
        if (e.target === overlay) close();
    });

    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        authService.updateProfile({
            name: div.querySelector('#profile-name').value,
            email: div.querySelector('#profile-email').value
        });
        savedMsg.hidden = false;
        window.setTimeout(() => {
            close();
            navigateTo('apprentice-dashboard');
        }, 600);
    });
}

function animateHub(div) {
    window.requestAnimationFrame(() => {
        const ring = div.querySelector('.hub-ring-fill');
        if (ring) {
            ring.style.strokeDashoffset = ring.dataset.targetOffset || '0';
        }
        div.querySelectorAll('[data-stat-fill]').forEach(el => {
            el.style.width = `${el.dataset.target || 0}%`;
        });
    });
}

function renderClassroomAuditPanel(classroom, lang) {
    if (!classroom) return '';
    const c = classroomService.normalizeClassroom(classroom);
    const modified = classroomService.wasDateModified(c);
    const isActive = c.state === 'Active';

    return `
        <section class="hub-classroom-audit card-premium-luxury">
            <div class="hub-classroom-audit-head">
                <span class="hub-enrolled-tag">
                    ${icon('check', 'ui-icon ui-icon--xs')}
                    ${t('join.enrolled')} <strong>${c.code}</strong>
                </span>
                <span class="status-pill ${isActive ? 'status-pill--active' : 'status-pill--inactive'}">
                    ${icon('zap', 'ui-icon ui-icon--xs')}
                    ${isActive ? t('classroom.status.active') : t('classroom.status.inactive')}
                </span>
            </div>
            <div class="hub-classroom-audit-dates">
                <div>
                    <span class="hub-audit-label" data-i18n="classroom.date.original">${t('classroom.date.original')}</span>
                    <strong>${classroomService.formatDate(c.createdAt, lang)}</strong>
                </div>
                <div>
                    <span class="hub-audit-label" data-i18n="classroom.date.display">${t('classroom.date.display')}</span>
                    <strong>
                        ${classroomService.formatDate(c.displayAt, lang)}
                        ${modified ? `<span class="date-modified-badge">${icon('history', 'ui-icon ui-icon--xs')}<span data-i18n="classroom.date.modified">${t('classroom.date.modified')}</span></span>` : ''}
                    </strong>
                </div>
            </div>
            ${modified ? `
            <details class="hub-classroom-audit-history" open>
                <summary>
                    ${icon('history', 'ui-icon ui-icon--xs')}
                    <span data-i18n="classroom.history.title">${t('classroom.history.title')}</span>
                </summary>
                <ul class="date-history-list">
                    ${classroomService.renderDateHistory(c, lang, t)}
                </ul>
                <p class="inst-date-security" data-i18n="classroom.history.security">${t('classroom.history.security')}</p>
            </details>
            ` : ''}
        </section>
    `;
}

// ── Exportación principal: panel del aprendiz ──
export function renderApprenticeDashboard(navigateTo: NavigateFn) {
    const state = store.getState();

    if (classroomService.clearStaleEnrollment()) {
        authService.syncAccountFromState();
    }

    const freshState = store.getState();
    const user = freshState.user ?? {
        email: '',
        name: 'Developer',
        role: 'apprentice' as const
    };
    const level = freshState.assignedLevel || user.assignedLevel || 'A1';
    const enrollment = classroomService.resolveEnrollment(freshState);
    const { enrolled, classroom } = enrollment;
    const modules = getModulesForLevel(level);
    const progress = learningService.calculateProgressPercent(level, freshState.lessonProgress);
    const rank = learningService.calculateRank(classroom, user.email, freshState.learnerStats.points);
    const stats = freshState.learnerStats;
    const userName = user.name?.split(' ')[0] || 'Developer';
    const welcomeParams = JSON.stringify({ name: userName });
    const initials = getInitials(user.name);

    const div = document.createElement('div');
    div.className = 'fade-in apprentice-hub';

    // ── Markup principal ──
    div.innerHTML = `
        <div class="hub-scene">
            <div class="hub-orb hub-orb--a" aria-hidden="true"></div>
            <div class="hub-orb hub-orb--b" aria-hidden="true"></div>

            <header class="hub-command-bar">
                <button type="button" class="hub-profile-chip" id="hub-open-profile">
                    <span class="hub-avatar" aria-hidden="true">${initials}</span>
                    <span class="hub-profile-chip-text">
                        <strong data-i18n-skip>${user.name || userName}</strong>
                        <span data-i18n-skip>CEFR ${level}</span>
                    </span>
                    <span class="hub-profile-chip-hint">
                        ${icon('user', 'ui-icon ui-icon--xs')}
                        <span data-i18n="dash.profile.open">${t('dash.profile.open')}</span>
                    </span>
                </button>
                <button type="button" class="hub-logout-btn btn-with-icon" id="hub-logout">
                    ${icon('logout', 'ui-icon ui-icon--sm')}
                    <span data-i18n="dash.logout">${t('dash.logout')}</span>
                </button>
            </header>

            <section class="hub-hero card-premium-luxury">
                <div class="hub-hero-content">
                    <span class="auth-pill hub-pill">
                        ${icon('sparkles', 'ui-icon ui-icon--xs')}
                        <span data-i18n-skip>ADSO · ${level}</span>
                    </span>
                    <h1 data-i18n="dash.welcome" data-i18n-params='${welcomeParams}'>${t('dash.welcome', { name: userName })}</h1>
                    <p class="hub-hero-sub" data-i18n="dash.route">${t('dash.route')}</p>
                </div>
                ${renderProgressRing(progress)}
            </section>

            <div class="hub-stats" role="list">
                <div class="hub-stat" role="listitem">
                    <span class="hub-stat-icon stat-fire">${icon('flame', 'ui-icon')}</span>
                    <strong>${stats.streak}</strong>
                    <span data-i18n="dash.streak">${t('dash.streak')}</span>
                </div>
                <div class="hub-stat" role="listitem">
                    <span class="hub-stat-icon">${icon('star', 'ui-icon')}</span>
                    <strong>${stats.points}</strong>
                    <span data-i18n="dash.points">${t('dash.points')}</span>
                </div>
                <div class="hub-stat" role="listitem">
                    <span class="hub-stat-icon">${icon('trophy', 'ui-icon')}</span>
                    <strong>${rank}</strong>
                    <span data-i18n="dash.rank">${t('dash.rank')}</span>
                </div>
                <div class="hub-stat hub-stat--progress" role="listitem">
                    <span class="hub-stat-icon">${icon('trendUp', 'ui-icon')}</span>
                    <strong>${progress}%</strong>
                    <span data-i18n="dash.progress">${t('dash.progress')}</span>
                    <div class="hub-stat-bar"><div class="hub-stat-bar-fill" data-stat-fill data-target="${progress}"></div></div>
                </div>
            </div>

            ${enrolled ? renderClassroomAuditPanel(classroom, freshState.lang) : `
            <section class="hub-classroom-enrol card-premium-luxury" aria-labelledby="hub-enrol-heading">
                <div class="hub-classroom-enrol-head">
                    <span class="hub-classroom-enrol-icon" aria-hidden="true">${icon('classroom', 'ui-icon')}</span>
                    <div>
                        <h2 id="hub-enrol-heading" data-i18n="join.dash.title">${t('join.dash.title')}</h2>
                        <p data-i18n="join.dash.desc">${t('join.dash.desc')}</p>
                    </div>
                </div>
                <form id="dash-join-form" class="hub-join-form hub-join-form--prominent">
                    <label class="sr-only" for="dash-classroom-code" data-i18n="join.code.label">${t('join.code.label')}</label>
                    <input type="text" class="input-field input-code" id="dash-classroom-code" placeholder="ADSO331" required autocomplete="off">
                    <button type="submit" class="btn-register-action btn-with-icon">
                        ${icon('key', 'ui-icon ui-icon--sm')}
                        <span data-i18n="join.submit">${t('join.submit')}</span>
                    </button>
                </form>
                <p class="hub-join-hint">
                    ${icon('sparkles', 'ui-icon ui-icon--xs')}
                    <span data-i18n="join.hint">${t('join.hint')}</span>
                </p>
                <p id="dash-join-error" class="form-error" hidden></p>
            </section>
            `}

            <section class="hub-modules-section">
                <div class="hub-section-head">
                    ${icon('layers', 'ui-icon ui-icon--sm')}
                    <h2 data-i18n-skip>${t('dash.mod')} · ${level}</h2>
                </div>
                <div class="hub-module-list">
                    ${modules.map((mod, modIdx) => `
                        <article class="hub-module card-premium-luxury">
                            <header class="hub-module-head">
                                <span class="hub-module-index">0${modIdx + 1}</span>
                                <div>
                                    <h3>${mod.title}</h3>
                                    <p>${mod.subtitle}</p>
                                </div>
                            </header>
                            <div class="hub-lessons">
                                ${mod.lessons.map(lesson => {
        const prog = freshState.lessonProgress[lesson.id];
        const unlocked = learningService.isLessonUnlocked(level, lesson.id, freshState.lessonProgress);
        const done = prog?.completed;
        const scoreLabel = done ? `${prog.score}/${prog.total}` : '';
        const lessonIcon = done
            ? icon('check', 'ui-icon ui-icon--sm')
            : unlocked
                ? icon('play', 'ui-icon ui-icon--sm')
                : icon('lock', 'ui-icon ui-icon--sm');
        return `
                                        <div class="hub-lesson ${unlocked ? '' : 'hub-lesson--locked'} ${done ? 'hub-lesson--done' : ''}">
                                            <div class="hub-lesson-main">
                                                <span class="hub-lesson-icon" aria-hidden="true">${lessonIcon}</span>
                                                <div>
                                                    <strong>${lesson.title}</strong>
                                                    <span class="hub-lesson-meta">
                                                        <span>5 ${t('dash.questions')}</span>
                                                        ${skillChips()}
                                                    </span>
                                                </div>
                                            </div>
                                            ${done
                ? `<span class="hub-lesson-score">${icon('check', 'ui-icon ui-icon--xs')} ${scoreLabel}</span>`
                : unlocked
                    ? `<button type="button" class="btn-register-action btn-sm lesson-start-btn btn-with-icon" data-lesson="${lesson.id}">
                                                        ${icon('play', 'ui-icon ui-icon--xs')}
                                                        <span>${t('dash.start.lesson')}</span>
                                                       </button>`
                    : `<span class="hub-lesson-locked">
                                                        ${icon('lock', 'ui-icon ui-icon--xs')}
                                                        <span data-i18n="dash.locked">${t('dash.locked')}</span>
                                                       </span>`
            }
                                        </div>
                                    `;
    }).join('')}
                            </div>
                        </article>
                    `).join('')}
                </div>
            </section>
        </div>
        ${renderProfileDrawer(user, level)}
    `;

    animateHub(div);
    bindProfilePanel(div, navigateTo);

    // ── Eventos: cierre de sesión, lecciones e inscripción ──
    q(div, '#hub-logout')?.addEventListener('click', () => {
        authService.logout();
        navigateTo('home');
    });

    qAll<HTMLButtonElement>(div, '.lesson-start-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            store.setState({
                activeLessonId: btn.dataset.lesson ?? null,
                currentLessonStep: 0,
                lessonAnswers: []
            });
            navigateTo('lesson-environment');
        });
    });

    const joinForm = q<HTMLFormElement>(div, '#dash-join-form');
    if (joinForm) {
        joinForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const code = requireEl<HTMLInputElement>(div, '#dash-classroom-code').value;
            const result = classroomService.joinByCode(code, store.getState().user);
            const errorEl = requireEl<HTMLElement>(div, '#dash-join-error');
            if (!result.success) {
                errorEl.hidden = false;
                errorEl.textContent = result.message === 'classroom_inactive'
                    ? t('join.inactive')
                    : t('join.error');
                return;
            }
            errorEl.hidden = true;
            authService.syncAccountFromState();
            navigateTo('apprentice-dashboard');
        });
    }

    return div;
}
