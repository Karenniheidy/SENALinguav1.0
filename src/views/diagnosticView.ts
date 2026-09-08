/** Vista: diagnosticView — Evaluación diagnóstica CEFR del aprendiz */

// ── Dependencias ──
import type { NavigateFn } from '@/types';
import { mockQuestions, DIAGNOSTIC_OPTION_LABELS } from '@/data/diagnosticQuestions';
import { store } from '@/core/state/store';
import { t } from '@/i18n/translator';
import { calculateCEFRLevel, renderResultsMarkup, animateDiagnosticResults } from '@/services/diagnosticService';
import { authService } from '@/services/authService';
import { qAll } from '@/utils/dom';

// ── Constantes: clases por habilidad ──
const SKILL_CLASS = {
    Reading: 'skill-reading',
    Listening: 'skill-listening',
    Speaking: 'skill-speaking',
    Writing: 'skill-writing'
};

// ── Funciones auxiliares: escena y pantalla de resultados ──
function diagScene(content) {
    return `
        <div class="diag-scene">
            <div class="diag-orb diag-orb--a" aria-hidden="true"></div>
            <div class="diag-orb diag-orb--b" aria-hidden="true"></div>
            <div class="diag-orb diag-orb--c" aria-hidden="true"></div>
            <div class="diag-card-frame">
                <div class="diag-card-glow" aria-hidden="true"></div>
                <div class="diag-card card-premium-luxury stagger-children">
                    ${content}
                </div>
            </div>
        </div>
    `;
}

function renderResultScreen(navigateTo, result, lang) {
    const div = document.createElement('div');
    div.className = 'fade-in diag-shell diag-shell--results';
    div.innerHTML = diagScene(renderResultsMarkup(result, lang, t));

    animateDiagnosticResults(div);

    // ── Eventos: continuar al panel del aprendiz ──
    div.querySelector('#go-dash').addEventListener('click', () => {
        const user = store.getState().user;
        const classrooms = store.getState().classrooms.map(c => {
            if (c.code !== store.getState().enrolledClassroomCode) return c;
            return {
                ...c,
                apprentices: c.apprentices.map(a =>
                    a.email === user?.email ? { ...a, level: result.level } : a
                )
            };
        });

        store.setState({
            assignedLevel: result.level,
            diagnosticCompleted: true,
            diagnosticStep: 0,
            diagnosticAnswers: [],
            classrooms,
            user: user ? { ...user, role: 'apprentice', assignedLevel: result.level } : user,
            progressPercent: 0
        });

        authService.syncAccountFromState();
        navigateTo('apprentice-dashboard');
    });

    return div;
}

// ── Exportación principal: diagnóstico ──
export function renderDiagnostic(navigateTo: NavigateFn) {
    const state = store.getState();
    const currentStep = state.diagnosticStep;
    const lang = state.lang;
    const total = mockQuestions.length;

    if (currentStep >= total) {
        const result = calculateCEFRLevel(state.diagnosticAnswers);
        return renderResultScreen(navigateTo, result, lang);
    }

    const currentQuestion = mockQuestions[currentStep];
    const progressPercent = Math.round((currentStep / total) * 100);
    const skillClass = SKILL_CLASS[currentQuestion.skill] || 'skill-reading';

    const div = document.createElement('div');
    div.className = 'fade-in diag-shell';
    div.innerHTML = diagScene(`
        <header class="diag-header">
            <span class="auth-pill diag-pill" data-i18n="diag.banner">${t('diag.banner')}</span>
            <div class="diag-meta">
                <div class="diag-meta-left">
                    <span class="diag-cefr-badge" data-i18n-skip>${currentQuestion.cefr}</span>
                    <span class="skill-badge ${skillClass}" data-i18n-skip>${currentQuestion.skill}</span>
                </div>
                <span class="diag-counter" data-i18n-skip>
                    <span data-i18n="diag.q">${t('diag.q')}</span>
                    ${currentStep + 1} <span data-i18n="diag.of">${t('diag.of')}</span> ${total}
                </span>
            </div>
            <div class="diag-progress" role="progressbar" aria-valuenow="${progressPercent}" aria-valuemin="0" aria-valuemax="100">
                <div class="diag-progress-fill" style="width: ${progressPercent}%"></div>
            </div>
        </header>
        <h3 class="diag-question">${currentQuestion.q}</h3>
        <div class="diag-options" role="listbox" aria-label="${t('diag.q')} ${currentStep + 1}">
            ${currentQuestion.o.map((opt, i) => `
                <button type="button"
                    class="diag-option"
                    data-index="${i}"
                    role="option"
                    aria-selected="false">
                    <span class="diag-option-letter" aria-hidden="true">${DIAGNOSTIC_OPTION_LABELS[i]}</span>
                    <span class="diag-option-text">${opt}</span>
                    <span class="diag-option-check" aria-hidden="true">✓</span>
                </button>
            `).join('')}
        </div>
        <p class="diag-hint" data-i18n="diag.hint">${t('diag.hint')}</p>
    `);

    // ── Eventos: selección de respuesta ──
    const options = qAll<HTMLButtonElement>(div, '.diag-option');
    let locked = false;

    options.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (locked) return;
            locked = true;

            options.forEach((b) => {
                b.disabled = true;
                b.classList.remove('diag-option--selected');
            });

            btn.classList.add('diag-option--selected');
            btn.setAttribute('aria-selected', 'true');

            const selectedIdx = parseInt(btn.dataset.index ?? '0', 10);
            const isCorrect = selectedIdx === currentQuestion.c;

            window.setTimeout(() => {
                store.setState({
                    diagnosticStep: currentStep + 1,
                    diagnosticAnswers: [
                        ...store.getState().diagnosticAnswers,
                        { questionId: currentQuestion.id, isCorrect }
                    ]
                });
                navigateTo('diagnostic');
            }, 380);
        });
    });

    return div;
}
