/** Vista: instructorDashboard — Panel de gestión del instructor */

// ── Dependencias ──
import type { NavigateFn } from '@/types';
import { store } from '@/core/state/store';
import { t } from '@/i18n/translator';
import { classroomService } from '@/services/classroomService';
import { icon } from '@/components/uiIcons';
import { q, qAll, requireEl } from '@/utils/dom';

// ── Funciones auxiliares: tabla de fichas ──
function renderTableHead(labelKey, iconName) {
    return `<th scope="col"><span class="inst-th">${icon(iconName, 'ui-icon ui-icon--xs')}${t(labelKey)}</span></th>`;
}

// ── Exportación principal: panel del instructor ──
export function renderInstructorDashboard(navigateTo: NavigateFn) {
    const state = store.getState();
    const classroomCount = state.classrooms.length;
    const apprenticeTotal = state.classrooms.reduce((n, c) => n + c.apprentices.length, 0);

    const div = document.createElement('div');
    div.className = 'fade-in inst-hub';

    // ── Markup principal ──
    div.innerHTML = `
        <div class="inst-scene">
            <div class="inst-orb inst-orb--a" aria-hidden="true"></div>
            <div class="inst-orb inst-orb--b" aria-hidden="true"></div>

            <header class="inst-hero card-premium-luxury">
                <div class="inst-hero-text">
                    <span class="auth-pill inst-pill">
                        ${icon('shield', 'ui-icon ui-icon--xs')}
                        <span data-i18n="inst.badge">Instructor · ADSO</span>
                    </span>
                    <h1 data-i18n="inst.title">${t('inst.title')}</h1>
                    <p data-i18n="inst.sub">${t('inst.sub')}</p>
                </div>
                <button type="button" id="btn-create-class" class="btn-register-action inst-create-btn">
                    ${icon('plus', 'ui-icon ui-icon--sm')}
                    <span data-i18n="inst.create.text">${t('inst.create.text')}</span>
                </button>
            </header>

            <div class="inst-kpis" role="list">
                <div class="inst-kpi" role="listitem">
                    ${icon('classroom', 'ui-icon inst-kpi-icon')}
                    <strong>${classroomCount}</strong>
                    <span data-i18n="inst.kpi.classrooms">${t('inst.kpi.classrooms')}</span>
                </div>
                <div class="inst-kpi" role="listitem">
                    ${icon('users', 'ui-icon inst-kpi-icon')}
                    <strong>${apprenticeTotal}</strong>
                    <span data-i18n="inst.kpi.apprentices">${t('inst.kpi.apprentices')}</span>
                </div>
                <div class="inst-kpi" role="listitem">
                    ${icon('chart', 'ui-icon inst-kpi-icon')}
                    <strong>${classroomCount ? Math.round(apprenticeTotal / classroomCount) : 0}</strong>
                    <span data-i18n="inst.kpi.avg">${t('inst.kpi.avg')}</span>
                </div>
            </div>

            <div id="create-modal" class="modal-overlay" hidden>
                <div class="modal-card card-premium-luxury inst-modal" role="dialog" aria-modal="true" aria-labelledby="inst-modal-title">
                    <div class="inst-modal-head">
                        <span class="inst-modal-icon" aria-hidden="true">${icon('classroom', 'ui-icon')}</span>
                        <div>
                            <h3 id="inst-modal-title" data-i18n="inst.modal.title">${t('inst.modal.title')}</h3>
                            <p class="auth-subtitle" data-i18n="inst.modal.desc">${t('inst.modal.desc')}</p>
                        </div>
                    </div>
                    <form id="create-class-form">
                        <div class="form-box">
                            <label for="new-ficha">
                                ${icon('key', 'ui-icon ui-icon--xs')}
                                <span data-i18n="inst.modal.ficha">${t('inst.modal.ficha')}</span>
                            </label>
                            <input type="text" class="input-field" id="new-ficha" required placeholder="3312932" pattern="[0-9]+" inputmode="numeric">
                        </div>
                        <div class="form-box">
                            <label for="new-program">
                                ${icon('clipboard', 'ui-icon ui-icon--xs')}
                                <span data-i18n="inst.modal.program">${t('inst.modal.program')}</span>
                            </label>
                            <input type="text" class="input-field" id="new-program" value="${t('inst.modal.program.default')}">
                        </div>
                        <p id="create-error" class="form-error" hidden></p>
                        <div class="modal-actions">
                            <button type="button" id="cancel-create" class="btn-login-action" data-i18n="inst.modal.cancel">${t('inst.modal.cancel')}</button>
                            <button type="submit" class="btn-register-action">
                                ${icon('plus', 'ui-icon ui-icon--sm')}
                                <span data-i18n="inst.modal.confirm">${t('inst.modal.confirm')}</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div class="table-card card-premium-luxury inst-table-wrap">
                <div class="inst-table-scroll">
                    <table class="data-table inst-table">
                        <thead>
                            <tr>
                                ${renderTableHead('table.prog', 'clipboard')}
                                ${renderTableHead('table.ficha', 'key')}
                                ${renderTableHead('table.code', 'copy')}
                                ${renderTableHead('table.learners', 'users')}
                                ${renderTableHead('table.created', 'calendar')}
                                ${renderTableHead('table.state', 'zap')}
                                <th scope="col"><span class="inst-th">${icon('sparkles', 'ui-icon ui-icon--xs')}${t('table.actions')}</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            ${state.classrooms.length ? state.classrooms.map(c => {
                                const room = classroomService.normalizeClassroom(c);
                                const isActive = room.state === 'Active';
                                const modified = classroomService.wasDateModified(room);
                                return `
                                <tr class="classroom-row ${isActive ? '' : 'classroom-row--inactive'}">
                                    <td>${room.program}</td>
                                    <td><strong class="inst-ficha">${room.ficha}</strong></td>
                                    <td>
                                        <code class="code-chip" title="${t('table.code')}">
                                            ${icon('key', 'ui-icon ui-icon--xs')}
                                            ${room.code}
                                        </code>
                                    </td>
                                    <td>
                                        <span class="inst-metric">
                                            ${icon('users', 'ui-icon ui-icon--xs')}
                                            ${room.apprentices.length}
                                        </span>
                                    </td>
                                    <td>
                                        <span class="inst-date-cell">
                                            ${classroomService.formatDate(room.displayAt, state.lang)}
                                            ${modified ? `<span class="date-modified-dot" title="${t('classroom.date.modified')}"></span>` : ''}
                                        </span>
                                    </td>
                                    <td>
                                        <button type="button"
                                            class="status-toggle ${isActive ? 'status-toggle--active' : 'status-toggle--inactive'} btn-toggle-state"
                                            data-ficha="${room.ficha}"
                                            aria-pressed="${isActive}">
                                            ${icon('zap', 'ui-icon ui-icon--xs')}
                                            <span data-i18n-skip>${isActive ? t('classroom.status.active') : t('classroom.status.inactive')}</span>
                                        </button>
                                    </td>
                                    <td>
                                        <div class="actions-cell inst-actions">
                                            <button type="button"
                                                class="btn-login-action btn-with-icon btn-view-apprentices"
                                                data-ficha="${room.ficha}">
                                                ${icon('users', 'ui-icon ui-icon--sm')}
                                                <span data-i18n="inst.expand">${t('inst.expand')}</span>
                                            </button>
                                            <button type="button"
                                                class="btn-danger-sm btn-with-icon btn-delete-class"
                                                data-ficha="${room.ficha}">
                                                ${icon('trash', 'ui-icon ui-icon--sm')}
                                                <span data-i18n="inst.delete">${t('inst.delete')}</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>`;
                            }).join('') : `
                                <tr>
                                    <td colspan="7" class="inst-empty inst-empty--hero">
                                        ${icon('classroom', 'ui-icon')}
                                        <strong data-i18n="inst.empty.title">${t('inst.empty.title')}</strong>
                                        <span data-i18n="inst.empty.desc">${t('inst.empty.desc')}</span>
                                    </td>
                                </tr>
                            `}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;

    // ── Eventos: modal de creación ──
    requireEl<HTMLButtonElement>(div, '#btn-create-class').addEventListener('click', () => {
        requireEl<HTMLElement>(div, '#create-modal').hidden = false;
        q<HTMLInputElement>(div, '#new-ficha')?.focus();
    });

    requireEl<HTMLButtonElement>(div, '#cancel-create').addEventListener('click', () => {
        requireEl<HTMLElement>(div, '#create-modal').hidden = true;
        requireEl<HTMLElement>(div, '#create-error').hidden = true;
    });

    requireEl<HTMLFormElement>(div, '#create-class-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const ficha = requireEl<HTMLInputElement>(div, '#new-ficha').value;
        const program = requireEl<HTMLInputElement>(div, '#new-program').value;
        const result = classroomService.createClassroom(ficha, program);
        const errorEl = requireEl<HTMLElement>(div, '#create-error');

        if (!result.success) {
            errorEl.hidden = false;
            errorEl.textContent = result.message === 'ficha_exists' ? t('inst.error.ficha') : t('inst.error.ficha.required');
            return;
        }

        requireEl<HTMLElement>(div, '#create-modal').hidden = true;
        navigateTo('instructor-dashboard');
    });

    // ── Eventos: acciones sobre fichas ──
    qAll<HTMLButtonElement>(div, '.btn-view-apprentices').forEach((btn) => {
        btn.addEventListener('click', () => {
            store.setState({ viewClassroomFicha: btn.dataset.ficha ?? null });
            navigateTo('classroom-apprentices');
        });
    });

    qAll<HTMLButtonElement>(div, '.btn-toggle-state').forEach((btn) => {
        btn.addEventListener('click', () => {
            classroomService.toggleClassroomState(btn.dataset.ficha ?? '');
            navigateTo('instructor-dashboard');
        });
    });

    qAll<HTMLButtonElement>(div, '.btn-delete-class').forEach((btn) => {
        btn.addEventListener('click', () => {
            if (confirm(t('inst.delete.confirm'))) {
                classroomService.deleteClassroom(btn.dataset.ficha ?? '');
                navigateTo('instructor-dashboard');
            }
        });
    });
    return div;
}
