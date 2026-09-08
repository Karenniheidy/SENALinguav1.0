/** Módulo: lessonScoringService — Puntuación TRI de lecciones y pantalla de resultados. */

// ── Constantes: habilidades evaluadas ──
const SKILLS = ['Reading', 'Listening', 'Speaking', 'Writing'];

// ── Constantes: pesos TRI por habilidad ──
const SKILL_WEIGHT = {
    Reading: { difficulty: 0.28, discrimination: 1.1 },
    Listening: { difficulty: 0.32, discrimination: 1.15 },
    Speaking: { difficulty: 0.30, discrimination: 1.1 },
    Writing: { difficulty: 0.34, discrimination: 1.2 }
};

// ── Constantes: nombres localizados de niveles MCER ──
const LEVEL_META = {
    A1: { en: 'Beginner', es: 'Principiante' },
    A2: { en: 'Elementary', es: 'Elementario' },
    B1: { en: 'Intermediate', es: 'Intermedio' }
};

// ── Utilidades internas: porcentaje ──

/**
 * Convierte conteo correcto/total a porcentaje redondeado.
 */
function pct(c, t) {
    return t ? Math.round((c / t) * 100) : 0;
}

// ── Constantes exportadas: etiquetas de opciones ──

/** Etiquetas de opciones múltiples (a, b, c, d) usadas en las lecciones. */
export const LESSON_OPTION_LABELS = ['a', 'b', 'c', 'd'];

// ── API pública: cálculo de resultados de lección ──

/**
 * Calcula el resultado de una lección: θ ponderado, desglose por habilidad y feedback.
 */
export function calculateLessonResult(answers, assignedLevel, lang = 'en-GB') {
    const isEs = lang === 'es-CO';
    let weightedCorrect = 0;
    let totalWeight = 0;
    let rawCorrect = 0;
    const skillScores = Object.fromEntries(SKILLS.map(s => [s, { c: 0, t: 0 }]));

    answers.forEach(ans => {
        const meta = SKILL_WEIGHT[ans.skill] || { difficulty: 0.3, discrimination: 1 };
        const w = meta.difficulty * meta.discrimination;
        totalWeight += w;

        if (skillScores[ans.skill]) {
            skillScores[ans.skill].t += 1;
            if (ans.isCorrect) skillScores[ans.skill].c += 1;
        }

        if (ans.isCorrect) {
            weightedCorrect += w;
            rawCorrect += 1;
        }
    });

    const total = answers.length;
    const theta = totalWeight ? weightedCorrect / totalWeight : 0;
    const rawPct = pct(rawCorrect, total);
    const weightedPct = Math.round(theta * 100);

    const skills = Object.fromEntries(
        SKILLS.map(s => [s, { ...skillScores[s], pct: pct(skillScores[s].c, skillScores[s].t) }])
    );

    const ringOffset = 264 - (264 * Math.min(1, theta));

    // ── Clasificación cualitativa del desempeño ──
    let performanceKey = 'developing';
    if (rawPct >= 80) performanceKey = 'strong';
    else if (rawPct >= 60) performanceKey = 'solid';
    else if (rawPct >= 40) performanceKey = 'developing';
    else performanceKey = 'support';

    const levelName = LEVEL_META[assignedLevel]?.[isEs ? 'es' : 'en'] || assignedLevel;

    const feedback = isEs
        ? {
            strong: `Desempeño sólido en ${assignedLevel} (${levelName}). Dominas el vocabulario técnico de esta lección.`,
            solid: `Buen desempeño en ${assignedLevel}. Refuerza las habilidades con menor porcentaje.`,
            developing: `Progreso en desarrollo en ${assignedLevel}. Revisa la retroalimentación de cada ítem.`,
            support: `Se recomienda repetir la lección y apoyo adicional en ${assignedLevel}.`
        }[performanceKey]
        : {
            strong: `Strong performance at ${assignedLevel} (${levelName}). You handle this lesson's technical English well.`,
            solid: `Good performance at ${assignedLevel}. Reinforce skills with lower scores.`,
            developing: `Developing progress at ${assignedLevel}. Review feedback on each item.`,
            support: `Consider repeating this lesson with additional ${assignedLevel} support.`
        }[performanceKey];

    return {
        rawCorrect,
        total,
        rawPct,
        weightedPct,
        theta,
        ringOffset,
        skills,
        assignedLevel,
        levelName,
        performanceKey,
        feedback
    };
}

// ── API pública: renderizado de desglose por habilidad ──

/**
 * Genera las filas HTML del desglose por habilidad en los resultados de lección.
 */
export function renderLessonSkillRows(skills) {
    const icons = { Reading: '📖', Listening: '🎧', Speaking: '🎙️', Writing: '✍️' };
    return SKILLS.map(skill => {
        const s = skills[skill];
        if (!s.t) return '';
        return `
            <div class="lesson-result-skill">
                <span class="lesson-result-skill-icon">${icons[skill]}</span>
                <span class="lesson-result-skill-name">${skill}</span>
                <div class="lesson-result-skill-bar">
                    <div class="lesson-result-skill-fill" data-lesson-skill-fill data-target="${s.pct}"></div>
                </div>
                <span class="lesson-result-skill-pct">${s.pct}%</span>
            </div>
        `;
    }).join('');
}

// ── API pública: renderizado de pantalla de resultados ──

/**
 * Genera el HTML completo de la pantalla de resultados al finalizar una lección.
 */
export function renderLessonResultsMarkup(result, lang, t, lessonTitle, routeProgress) {
    const isEs = lang === 'es-CO';

    return `
        <section class="lesson-result-focus" aria-labelledby="lesson-result-heading">
            <div class="diag-result-ring diag-result-ring--hero" aria-hidden="true">
                <svg viewBox="0 0 100 100" class="diag-ring-svg">
                    <circle class="diag-ring-track" cx="50" cy="50" r="42"/>
                    <circle class="diag-ring-fill" cx="50" cy="50" r="42"
                        style="stroke-dashoffset: ${result.ringOffset}"
                        data-target-offset="${result.ringOffset}"/>
                </svg>
                <div class="diag-ring-center">
                    <span class="diag-ring-level">${result.assignedLevel}</span>
                    <span class="diag-ring-sub" data-i18n-skip>${result.levelName}</span>
                </div>
            </div>

            <span class="auth-pill lesson-result-pill" data-i18n="lesson.res.badge">${t('lesson.res.badge')}</span>
            <h2 id="lesson-result-heading" class="diag-result-title" data-i18n="lesson.res.title">${t('lesson.res.title')}</h2>
            <p class="lesson-result-lesson" data-i18n-skip>${lessonTitle}</p>
            <p class="diag-result-lead" data-i18n="lesson.res.lead" data-i18n-params='{"score":"${result.rawCorrect}","total":"${result.total}"}'>${t('lesson.res.lead', { score: result.rawCorrect, total: result.total })}</p>

            <div class="lesson-route-progress" aria-label="${t('lesson.route.progress')}">
                <div class="lesson-route-progress-head">
                    <span data-i18n="lesson.route.progress">${t('lesson.route.progress')}</span>
                    <strong data-i18n-skip>${routeProgress}%</strong>
                </div>
                <div class="lesson-route-progress-bar" role="progressbar" aria-valuenow="${routeProgress}" aria-valuemin="0" aria-valuemax="100">
                    <div class="lesson-route-progress-fill" style="width: ${routeProgress}%"></div>
                </div>
            </div>

            <blockquote class="diag-result-summary">${result.feedback}</blockquote>
        </section>

        <details class="diag-result-details lesson-result-details">
            <summary class="diag-result-details-toggle">
                <span data-i18n="lesson.details.toggle">${t('lesson.details.toggle')}</span>
                <span class="diag-result-details-icon" aria-hidden="true">+</span>
            </summary>

            <div class="diag-details-body">
                <div class="diag-score-chips">
                    <span class="diag-score-chip">
                        <em data-i18n="diag.stat.raw">${t('diag.stat.raw')}</em>
                        <strong>${result.rawCorrect}/${result.total}</strong>
                    </span>
                    <span class="diag-score-chip">
                        <em data-i18n="diag.stat.index">${t('diag.stat.index')}</em>
                        <strong>${result.weightedPct}%</strong>
                    </span>
                    <span class="diag-score-chip">
                        <em data-i18n="diag.stat.formula">${t('diag.stat.formula')}</em>
                        <strong>θ ${result.theta.toFixed(3)}</strong>
                    </span>
                </div>

                <div class="diag-details-block">
                    <h3 class="diag-details-heading" data-i18n="diag.skills">${t('diag.skills')}</h3>
                    <div class="lesson-result-skills">${renderLessonSkillRows(result.skills)}</div>
                </div>

                <div class="diag-details-block">
                    <h3 class="diag-details-heading" data-i18n="lesson.details.method">${t('lesson.details.method')}</h3>
                    <p class="lesson-formula-note" data-i18n="lesson.formula.note">${t('lesson.formula.note')}</p>
                </div>
            </div>
        </details>

        <button type="button" id="btn-return-dash" class="btn-register-action lesson-result-cta" data-i18n="lesson.return">${t('lesson.return')}</button>
    `;
}

// ── API pública: animación de resultados ──

/**
 * Anima el anillo circular y las barras de habilidad en la pantalla de resultados.
 */
export function animateLessonResults(root) {
    window.requestAnimationFrame(() => {
        root.querySelectorAll('[data-lesson-skill-fill]').forEach(el => {
            el.style.width = `${el.dataset.target || '0'}%`;
        });
        const ring = root.querySelector('.diag-ring-fill');
        if (ring) {
            const target = ring.dataset.targetOffset || ring.style.strokeDashoffset;
            ring.style.strokeDashoffset = '264';
            window.requestAnimationFrame(() => {
                ring.style.strokeDashoffset = target;
            });
        }
    });
}
