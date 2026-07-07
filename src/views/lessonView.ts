/** Vista: lessonView — Entorno interactivo de lección */

// ── Dependencias ──
import type { NavigateFn } from '@/types';
import { getLessonById } from '@/data/curriculum';
import { store } from '@/core/state/store';
import { t } from '@/i18n/translator';
import { learningService } from '@/services/learningService';
import {
    LESSON_OPTION_LABELS,
    calculateLessonResult,
    renderLessonResultsMarkup,
    animateLessonResults
} from '@/services/lessonScoringService';
import { q as query, qAll, requireEl } from '@/utils/dom';

// ── Constantes: clases por habilidad ──
const SKILL_CLASS = {
    Reading: 'skill-reading',
    Listening: 'skill-listening',
    Speaking: 'skill-speaking',
    Writing: 'skill-writing'
};

// ── Funciones auxiliares: escena y pantalla de resultados ──
function lessonScene(content) {
    return `
        <div class="lesson-scene">
            <div class="lesson-orb lesson-orb--a" aria-hidden="true"></div>
            <div class="lesson-orb lesson-orb--b" aria-hidden="true"></div>
            <div class="lesson-orb lesson-orb--c" aria-hidden="true"></div>
            <div class="lesson-card-frame">
                <div class="lesson-card-glow" aria-hidden="true"></div>
                <div class="lesson-card card-premium-luxury stagger-children">
                    ${content}
                </div>
            </div>
        </div>
    `;
}

function renderResultScreen(navigateTo, lessonTitle, answers, level, lang, routeProgress) {
    const result = calculateLessonResult(answers, level, lang);
    const div = document.createElement('div');
    div.className = 'fade-in lesson-shell lesson-shell--results';
    div.innerHTML = lessonScene(renderLessonResultsMarkup(result, lang, t, lessonTitle, routeProgress));

    animateLessonResults(div);

    // ── Eventos: volver al panel del aprendiz ──
    div.querySelector('#btn-return-dash').addEventListener('click', () => {
        store.setState({ currentLessonStep: 0, lessonAnswers: [], activeLessonId: null });
        navigateTo('apprentice-dashboard');
    });

    return div;
}

// ── Exportación principal: entorno de lección ──
export function renderLessonEnvironment(navigateTo: NavigateFn) {
    const state = store.getState();
    const level = state.assignedLevel || 'A1';
    const lessonId = state.activeLessonId;
    const currentStep = state.currentLessonStep;
    const lang = state.lang;
    const routeProgress = state.progressPercent ?? 0;

    const lessonData = getLessonById(level, lessonId);
    if (!lessonData) {
        const div = document.createElement('div');
        div.className = 'auth-shell fade-in';
        div.innerHTML = `
            <div class="card-premium-luxury auth-card">
                <p data-i18n="lesson.not.found">${t('lesson.not.found')}</p>
                <button class="btn-register-action btn-full" id="back-dash" data-i18n="lesson.back">${t('lesson.back')}</button>
            </div>
        `;
        // ── Eventos: lección no encontrada ──
        div.querySelector('#back-dash').addEventListener('click', () => navigateTo('apprentice-dashboard'));
        return div;
    }

    const { module, lesson } = lessonData;
    const questions = lesson.questions;
    const total = questions.length;

    if (currentStep >= total) {
        const score = state.lessonAnswers.filter(a => a.isCorrect).length;
        const alreadyCompleted = state.lessonProgress[lessonId]?.completed;

        if (!alreadyCompleted) {
            learningService.completeLesson(lessonId, score, total);
        }

        const updatedProgress = store.getState().progressPercent ?? routeProgress;
        return renderResultScreen(navigateTo, lesson.title, state.lessonAnswers, level, lang, updatedProgress);
    }

    const q = questions[currentStep];
    const skillClass = SKILL_CLASS[q.skill] || 'skill-reading';
    const itemProgressPct = Math.round(((currentStep + 1) / total) * 100);

    const div = document.createElement('div');
    div.className = 'fade-in lesson-shell';
    // ── Markup principal ──
    div.innerHTML = lessonScene(`
        <div class="lesson-global-track" aria-label="${t('lesson.route.progress')}">
            <div class="lesson-global-track-label">
                <span data-i18n="lesson.route.progress">${t('lesson.route.progress')}</span>
                <strong data-i18n-skip>${routeProgress}%</strong>
            </div>
            <div class="lesson-global-track-bar" role="progressbar" aria-valuenow="${routeProgress}" aria-valuemin="0" aria-valuemax="100">
                <div class="lesson-global-track-fill" style="width: ${routeProgress}%"></div>
            </div>
        </div>

        <header class="lesson-header">
            <span class="auth-pill lesson-pill" data-i18n="lesson.banner">${t('lesson.banner')}</span>
            <p class="lesson-breadcrumb" data-i18n-skip>
                <span>${module.title}</span> · <strong>${lesson.title}</strong>
            </p>
            <div class="lesson-meta">
                <div class="lesson-meta-left">
                    <span class="diag-cefr-badge" data-i18n-skip>${level}</span>
                    <span class="skill-badge ${skillClass}" data-i18n-skip>${q.skill}</span>
                </div>
                <span class="lesson-counter" data-i18n-skip>
                    <span data-i18n="diag.q">${t('diag.q')}</span>
                    ${currentStep + 1} <span data-i18n="diag.of">${t('diag.of')}</span> ${total}
                </span>
            </div>
            <div class="lesson-progress-dual">
                <div class="lesson-progress-row">
                    <span class="lesson-progress-label" data-i18n="lesson.item.progress">${t('lesson.item.progress')}</span>
                    <div class="lesson-progress" role="progressbar" aria-valuenow="${itemProgressPct}" aria-valuemin="0" aria-valuemax="100">
                        <div class="lesson-progress-fill" style="width: ${itemProgressPct}%"></div>
                    </div>
                </div>
            </div>
        </header>

        <h3 class="lesson-question">${q.q}</h3>

        <div class="lesson-options" id="options-stack" role="listbox" aria-label="${t('diag.q')} ${currentStep + 1}">
            ${q.o.map((opt, i) => `
                <button type="button"
                    class="lesson-option"
                    data-index="${i}"
                    role="option"
                    aria-selected="false">
                    <span class="lesson-option-letter" aria-hidden="true">${LESSON_OPTION_LABELS[i]}</span>
                    <span class="lesson-option-text">${opt}</span>
                    <span class="lesson-option-icon" aria-hidden="true"></span>
                </button>
            `).join('')}
        </div>

        <div id="dynamic-feedback-area" class="lesson-feedback" role="status" aria-live="polite" hidden></div>

        <footer class="lesson-footer">
            <button type="button" id="btn-next-step" class="btn-register-action" hidden data-i18n="lesson.next">${t('lesson.next')}</button>
        </footer>
    `);

    let evaluated = false;
    const options = qAll<HTMLButtonElement>(div, '.lesson-option');
    const feedbackEl = requireEl<HTMLElement>(div, '#dynamic-feedback-area');
    const nextBtn = requireEl<HTMLButtonElement>(div, '#btn-next-step');

    // ── Eventos: selección de respuesta ──
    options.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (evaluated) return;
            evaluated = true;

            const idx = parseInt(btn.dataset.index ?? '0', 10);
            const isCorrect = idx === q.c;

            options.forEach((o) => {
                o.disabled = true;
                o.classList.remove('lesson-option--selected');
            });

            btn.classList.add('lesson-option--selected');
            btn.setAttribute('aria-selected', 'true');

            if (isCorrect) {
                btn.classList.add('lesson-option--correct');
                query<HTMLElement>(btn, '.lesson-option-icon')!.textContent = '✓';
            } else {
                btn.classList.add('lesson-option--incorrect');
                query<HTMLElement>(btn, '.lesson-option-icon')!.textContent = '✕';
                const correctBtn = options[q.c];
                if (correctBtn) {
                    correctBtn.classList.add('lesson-option--correct');
                    query<HTMLElement>(correctBtn, '.lesson-option-icon')!.textContent = '✓';
                }
            }

            feedbackEl.hidden = false;
            feedbackEl.className = `lesson-feedback feedback-box ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`;
            feedbackEl.innerHTML = `
                <strong>${isCorrect ? t('lesson.correct') : t('lesson.incorrect')}</strong>
                <p>${q.f}</p>
            `;

            store.setState({
                lessonAnswers: [...store.getState().lessonAnswers, { questionId: q.id, isCorrect, skill: q.skill }]
            });

            nextBtn.hidden = false;
        });
    });

    // ── Eventos: avanzar a la siguiente pregunta ──
    nextBtn.addEventListener('click', () => {
        store.setState({ currentLessonStep: currentStep + 1 });
        navigateTo('lesson-environment');
    });

    return div;
}
