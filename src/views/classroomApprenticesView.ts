/** Vista: classroomApprenticesView — Detalle de aprendices por ficha */

// ── Dependencias ──
import type { NavigateFn } from '@/types';
import { store } from '@/core/state/store';
import { t } from '@/i18n/translator';
import { classroomService } from '@/services/classroomService';
import { icon } from '@/components/uiIcons';
import { q, qAll, requireEl } from '@/utils/dom';

// ── Constantes: clases por nivel CEFR ──
const LEVEL_CLASS = { A1: 'level-a1', A2: 'level-a2', B1: 'level-b1' };

// ── Funciones auxiliares: tabla de aprendices ──
function renderTableHead(labelKey, iconName) {
    return `<th scope="col"><span class="inst-th">${icon(iconName, 'ui-icon ui-icon--xs')}${t(labelKey)}</span></th>`;
}

function renderApprenticeRows(classroom, lang) {
    return classroom.apprentices.map(app => `
        <tr>
            <td>
                <span class="inst-cell-user">
                    ${icon('user', 'ui-icon ui-icon--sm')}
                    <span>${app.name}</span>
                </span>
            </td>
            <td>
                <code class="email-chip">
                    ${icon('mail', 'ui-icon ui-icon--xs')}
                    ${app.email}
                </code>
            </td>
            <td>
                <span class="level-badge-sm ${LEVEL_CLASS[app.level] || ''}">
                    ${icon('target', 'ui-icon ui-icon--xs')}
                    ${app.level}
                </span>
            </td>
            <td>
                <span class="inst-metric">
                    ${icon('flame', 'ui-icon ui-icon--xs')}
                    ${app.streak}
                </span>
            </td>
            <td>
                <span class="inst-metric">
                    ${icon('star', 'ui-icon ui-icon--xs')}
                    ${app.points}
                </span>
            </td>
            <td>${app.lastActivity ? classroomService.formatDate(app.lastActivity, lang) : '—'}</td>
            <td>
                <button type="button"
                    class="btn-danger-sm btn-icon-only btn-remove-apprentice"
                    data-ficha="${classroom.ficha}"
                    data-id="${app.id}"
                    aria-label="${t('inst.remove.apprentice')} — ${app.name}">
                    ${icon('trash', 'ui-icon ui-icon--sm')}
                    <span class="sr-only" data-i18n="inst.remove.apprentice">${t('inst.remove.apprentice')}</span>
                </button>
            </td>
        </tr>
    `).join('');
}

// ── Exportación principal: aprendices de la ficha ──
export function renderClassroomApprentices(navigateTo: NavigateFn) {
    const state = store.getState();
    const ficha = state.viewClassroomFicha;
    const classroom = ficha ? classroomService.getByFicha(ficha) : null;
    const lang = state.lang;

    const div = document.createElement('div');
    div.className = 'fade-in inst-hub';

    if (!classroom) {
        // ── Markup: ficha no encontrada ──
        div.innerHTML = `
            <div class="inst-scene">
                <div class="card-premium-luxury inst-empty inst-empty--hero">
                    ${icon('classroom', 'ui-icon')}
                    <strong data-i18n="classroom.not.found">${t('classroom.not.found')}</strong>
                    <button type="button" class="btn-register-action" id="back-inst" data-i18n="inst.back">${t('inst.back')}</button>
                </div>
            </div>
        `;
        // ── Eventos: volver al panel ──
        div.querySelector('#back-inst').addEventListener('click', () => navigateTo('instructor-dashboard'));
        return div;
    }

    const c = classroomService.normalizeClassroom(classroom);
    const modified = classroomService.wasDateModified(c);
    const isActive = c.state === 'Active';

    // ── Markup principal ──
    div.innerHTML = `
        <div class="inst-scene inst-scene--detail">
            <div class="inst-orb inst-orb--a" aria-hidden="true"></div>
            <div class="inst-orb inst-orb--b" aria-hidden="true"></div>

            <header class="inst-detail-hero card-premium-luxury">
                <div class="inst-detail-head">
                    <button type="button" class="btn-login-action btn-with-icon inst-back-link" id="back-inst">
                        ${icon('arrowLeft', 'ui-icon ui-icon--sm')}
                        <span data-i18n="inst.back">${t('inst.back')}</span>
                    </button>
                    <div class="inst-detail-title">
                        <span class="auth-pill inst-pill">
                            ${icon('users', 'ui-icon ui-icon--xs')}
                            <span data-i18n-skip>${t('inst.apprentices.title')} · Ficha ${c.ficha}</span>
                        </span>
                        <h1 data-i18n-skip>${c.program}</h1>
                        <div class="inst-detail-meta">
                            <code class="code-chip">${icon('key', 'ui-icon ui-icon--xs')}${c.code}</code>
                            <span class="inst-metric">${icon('users', 'ui-icon ui-icon--xs')}${c.apprentices.length}</span>
                            <button type="button"
                                class="status-toggle ${isActive ? 'status-toggle--active' : 'status-toggle--inactive'}"
                                id="toggle-status"
                                data-ficha="${c.ficha}"
                                aria-pressed="${isActive}">
                                ${icon('zap', 'ui-icon ui-icon--xs')}
                                <span data-i18n-skip>${isActive ? t('classroom.status.active') : t('classroom.status.inactive')}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <section class="inst-date-panel card-premium-luxury">
                <div class="inst-date-panel-head">
                    <h2>
                        ${icon('calendar', 'ui-icon ui-icon--sm')}
                        <span data-i18n="classroom.date.title">${t('classroom.date.title')}</span>
                    </h2>
                    ${modified ? `<span class="date-modified-badge">${icon('history', 'ui-icon ui-icon--xs')}<span data-i18n="classroom.date.modified">${t('classroom.date.modified')}</span></span>` : ''}
                </div>

                <div class="inst-date-grid">
                    <div class="inst-date-field inst-date-field--readonly">
                        <label data-i18n="classroom.date.original">${t('classroom.date.original')}</label>
                        <p>${classroomService.formatDate(c.createdAt, lang)}</p>
                        <span class="inst-date-hint" data-i18n="classroom.date.original.hint">${t('classroom.date.original.hint')}</span>
                    </div>
                    <form id="date-edit-form" class="inst-date-edit">
                        <label for="display-date-input">
                            ${icon('clock', 'ui-icon ui-icon--xs')}
                            <span data-i18n="classroom.date.display">${t('classroom.date.display')}</span>
                        </label>
                        <div class="inst-date-edit-row">
                            <input type="datetime-local"
                                id="display-date-input"
                                class="input-field"
                                value="${classroomService.toDatetimeLocalValue(c.displayAt)}"
                                required>
                            <button type="submit" class="btn-register-action btn-sm btn-with-icon">
                                ${icon('pen', 'ui-icon ui-icon--xs')}
                                <span data-i18n="classroom.date.save">${t('classroom.date.save')}</span>
                            </button>
                        </div>
                        <p id="date-save-msg" class="hub-profile-saved" hidden data-i18n="classroom.date.saved">${t('classroom.date.saved')}</p>
                    </form>
                </div>

                <details class="inst-date-history" ${modified ? 'open' : ''}>
                    <summary class="inst-date-history-toggle">
                        ${icon('history', 'ui-icon ui-icon--xs')}
                        <span data-i18n="classroom.history.title">${t('classroom.history.title')}</span>
                    </summary>
                    <ul class="date-history-list" aria-label="${t('classroom.history.title')}">
                        ${classroomService.renderDateHistory(c, lang, t)}
                    </ul>
                    <p class="inst-date-security" data-i18n="classroom.history.security">${t('classroom.history.security')}</p>
                </details>
            </section>

            <div class="table-card card-premium-luxury inst-table-wrap">
                <div class="inst-table-toolbar">
                    <h2>${icon('users', 'ui-icon ui-icon--sm')}<span data-i18n="inst.apprentices.title">${t('inst.apprentices.title')}</span></h2>
                    <span class="inst-panel-count">${c.apprentices.length}</span>
                </div>
                <div class="inst-table-scroll">
                    <table class="data-table inst-table">
                        <thead>
                            <tr>
                                ${renderTableHead('inst.col.name', 'user')}
                                ${renderTableHead('inst.col.email', 'mail')}
                                ${renderTableHead('inst.col.level', 'target')}
                                ${renderTableHead('inst.col.streak', 'flame')}
                                ${renderTableHead('inst.col.points', 'star')}
                                ${renderTableHead('inst.col.activity', 'clock')}
                                <th scope="col"><span class="inst-th">${t('table.actions')}</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            ${c.apprentices.length
                                ? renderApprenticeRows(c, lang)
                                : `<tr><td colspan="7" class="inst-empty">${icon('users', 'ui-icon ui-icon--sm')}<span data-i18n="inst.no.apprentices">${t('inst.no.apprentices')}</span></td></tr>`
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;

    // ── Eventos: navegación, estado y fechas ──
    requireEl<HTMLButtonElement>(div, '#back-inst').addEventListener('click', () => {
        store.setState({ viewClassroomFicha: null });
        navigateTo('instructor-dashboard');
    });

    q(div, '#toggle-status')?.addEventListener('click', () => {
        classroomService.toggleClassroomState(c.ficha);
        navigateTo('classroom-apprentices');
    });

    requireEl<HTMLFormElement>(div, '#date-edit-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const value = requireEl<HTMLInputElement>(div, '#display-date-input').value;
        const result = classroomService.updateDisplayDate(c.ficha, value);
        if (result.success) {
            const msg = requireEl<HTMLElement>(div, '#date-save-msg');
            msg.hidden = false;
            window.setTimeout(() => navigateTo('classroom-apprentices'), 500);
        }
    });

    // ── Eventos: eliminación de aprendices ──
    qAll<HTMLButtonElement>(div, '.btn-remove-apprentice').forEach((btn) => {
        btn.addEventListener('click', () => {
            if (confirm(t('inst.remove.confirm'))) {
                classroomService.removeApprentice(btn.dataset.ficha ?? '', btn.dataset.id ?? '');
                navigateTo('classroom-apprentices');
            }
        });
    });

    return div;
}
