/** Módulo: diagnosticService — Diagnóstico MCER con TRI simplificado y colocación por banda. */

// ── Importaciones ──
import { mockQuestions } from '@/data/diagnosticQuestions';

// ── Constantes: umbrales de dominio MCER ──
const BAND_MASTERY = 0.6;
const BAND_PARTIAL = 0.4;

// ── Constantes: metadatos de niveles CEFR ──
const LEVEL_META = {
    A1: {
        name: { en: 'Beginner', es: 'Principiante' },
        cefr: 'A1',
        thetaMin: 0,
        thetaMax: 0.38
    },
    A2: {
        name: { en: 'Elementary', es: 'Elementario' },
        cefr: 'A2',
        thetaMin: 0.38,
        thetaMax: 0.62
    },
    B1: {
        name: { en: 'Intermediate', es: 'Intermedio' },
        cefr: 'B1',
        thetaMin: 0.62,
        thetaMax: 1
    }
};

// ── Constantes: retroalimentación pedagógica por nivel ──
const LEVEL_FEEDBACK = {
    A1: {
        en: 'You can recognise basic technical vocabulary but need structured support with documentation, error messages, and professional communication. Your route prioritises foundational reading of interfaces and simple instructions.',
        es: 'Puedes reconocer vocabulario técnico básico, pero necesitas apoyo estructurado con documentación, mensajes de error y comunicación profesional. Tu ruta prioriza la lectura de interfaces e instrucciones simples.'
    },
    A2: {
        en: 'You understand straightforward technical texts and common development scenarios, with room to strengthen listening comprehension and written precision in team contexts.',
        es: 'Comprendes textos técnicos directos y escenarios comunes de desarrollo, con margen para fortalecer comprensión auditiva y precisión escrita en contextos de equipo.'
    },
    B1: {
        en: 'You can interpret documentation, participate in technical discussions, and produce functional written communication. Your route focuses on APIs, pull requests, and junior interview readiness.',
        es: 'Puedes interpretar documentación, participar en discusiones técnicas y producir comunicación escrita funcional. Tu ruta se enfoca en APIs, pull requests y preparación para entrevistas junior.'
    }
};

// ── Constantes: dimensiones de evaluación ──
const SKILLS = ['Reading', 'Listening', 'Speaking', 'Writing'];
const BANDS = ['A1', 'A2', 'B1'];

// ── Utilidades internas: cálculos estadísticos ──

/**
 * Calcula la tasa de aciertos de una banda MCER (correctos / total).
 */
function bandRate(cefrScores, band) {
    const s = cefrScores[band];
    return s?.t ? s.c / s.t : 0;
}

/**
 * Convierte conteo correcto/total a porcentaje redondeado.
 */
function pct(c, t) {
    return t ? Math.round((c / t) * 100) : 0;
}

// ── Colocación de nivel CEFR ──

/**
 * Asigna el nivel CEFR según dominio por banda y el índice θ como respaldo.
 */
function assignCEFRLevel(theta, cefrScores) {
    const p = (band) => bandRate(cefrScores, band);

    // 1. Banda más alta con dominio pleno (≥60% = 3/5)
    for (const band of ['B1', 'A2', 'A1']) {
        if (p(band) >= BAND_MASTERY) {
            return { level: band, reason: 'mastery', bandPct: pct(cefrScores[band].c, cefrScores[band].t) };
        }
    }

    // 2. Banda más alta con dominio parcial (≥40% = 2/5), θ respalda la colocación
    if (p('B1') >= BAND_PARTIAL && theta >= 0.42) {
        return { level: 'B1', reason: 'partial', bandPct: pct(cefrScores.B1.c, cefrScores.B1.t) };
    }
    if (p('A2') >= BAND_PARTIAL && theta >= 0.22) {
        return { level: 'A2', reason: 'partial', bandPct: pct(cefrScores.A2.c, cefrScores.A2.t) };
    }
    if (p('A1') >= BAND_PARTIAL) {
        return { level: 'A1', reason: 'partial', bandPct: pct(cefrScores.A1.c, cefrScores.A1.t) };
    }

    // 3. Sin umbral — asignar la banda con mejor desempeño
    const ranked = BANDS
        .map(band => ({ band, rate: p(band), pct: pct(cefrScores[band].c, cefrScores[band].t) }))
        .sort((a, b) => b.rate - a.rate);

    const best = ranked[0];
    if (best.rate > 0) {
        return { level: best.band, reason: 'highest_band', bandPct: best.pct };
    }

    // 4. Sin respuestas correctas — A1 por respaldo de θ
    if (theta >= 0.55) return { level: 'B1', reason: 'theta', bandPct: pct(cefrScores.B1.c, cefrScores.B1.t) };
    if (theta >= 0.32) return { level: 'A2', reason: 'theta', bandPct: pct(cefrScores.A2.c, cefrScores.A2.t) };
    return { level: 'A1', reason: 'theta', bandPct: pct(cefrScores.A1.c, cefrScores.A1.t) };
}

// ── Utilidades internas: textos de explicación ──

/**
 * Genera la explicación textual del motivo de colocación (bilingüe).
 */
function placementExplanation(placement, cefrBands, level, lang) {
    const isEs = lang === 'es-CO';
    const band = cefrBands[placement.level];
    const name = LEVEL_META[placement.level].name[isEs ? 'es' : 'en'];

    if (placement.reason === 'mastery') {
        return isEs
            ? `Nivel asignado: MCER ${level} (${name}) — alcanzaste ${band.pct}% en la banda ${placement.level} (${band.c}/${band.t}), cumpliendo el umbral de dominio ≥60%.`
            : `Assigned level: CEFR ${level} (${name}) — you scored ${band.pct}% on the ${placement.level} band (${band.c}/${band.t}), meeting the ≥60% mastery threshold.`;
    }

    if (placement.reason === 'partial') {
        return isEs
            ? `Nivel asignado: MCER ${level} (${name}) — ${band.pct}% en la banda ${placement.level} (${band.c}/${band.t}), umbral de dominio parcial ≥40%.`
            : `Assigned level: CEFR ${level} (${name}) — ${band.pct}% on the ${placement.level} band (${band.c}/${band.t}), meeting the ≥40% partial-mastery threshold.`;
    }

    if (placement.reason === 'highest_band') {
        return isEs
            ? `Nivel asignado: MCER ${level} (${name}) — tu banda con mejor desempeño fue ${placement.level} (${band.pct}%, ${band.c}/${band.t}).`
            : `Assigned level: CEFR ${level} (${name}) — your strongest band was ${placement.level} (${band.pct}%, ${band.c}/${band.t}).`;
    }

    return isEs
        ? `Nivel asignado: MCER ${level} (${name}) — respaldo por índice TRI cuando ninguna banda alcanzó el umbral mínimo.`
        : `Assigned level: CEFR ${level} (${name}) — supported by the IRT index when no band reached the minimum threshold.`;
}

/**
 * Construye la lista de viñetas con el razonamiento del resultado del diagnóstico.
 */
function buildRationaleBullets(result, placement, lang) {
    const isEs = lang === 'es-CO';
    const { level, theta, rawCorrect, totalItems, cefrBands } = result;

    return isEs
        ? [
            `Respondiste ${rawCorrect} de ${totalItems} ítems correctamente.`,
            `Desempeño por banda: A1 ${cefrBands.A1.pct}% (${cefrBands.A1.c}/${cefrBands.A1.t}), A2 ${cefrBands.A2.pct}% (${cefrBands.A2.c}/${cefrBands.A2.t}), B1 ${cefrBands.B1.pct}% (${cefrBands.B1.c}/${cefrBands.B1.t}).`,
            placementExplanation(placement, cefrBands, level, lang),
            `Índice TRI θ = ${theta.toFixed(3)} — métrica ponderada de apoyo (dificultad × discriminación).`
        ]
        : [
            `You answered ${rawCorrect} of ${totalItems} items correctly.`,
            `Band performance: A1 ${cefrBands.A1.pct}% (${cefrBands.A1.c}/${cefrBands.A1.t}), A2 ${cefrBands.A2.pct}% (${cefrBands.A2.c}/${cefrBands.A2.t}), B1 ${cefrBands.B1.pct}% (${cefrBands.B1.c}/${cefrBands.B1.t}).`,
            placementExplanation(placement, cefrBands, level, lang),
            `IRT index θ = ${theta.toFixed(3)} — supporting weighted metric (difficulty × discrimination).`
        ];
}

// ── API pública: cálculo principal del diagnóstico ──

/**
 * Procesa las respuestas del diagnóstico y devuelve nivel, métricas y retroalimentación.
 */
export function calculateCEFRLevel(answers) {
    let weightedCorrect = 0;
    let totalWeight = 0;
    let rawCorrect = 0;

    const skillScores = Object.fromEntries(SKILLS.map(s => [s, { c: 0, t: 0 }]));
    const cefrScores = Object.fromEntries(BANDS.map(b => [b, { c: 0, t: 0 }]));

    answers.forEach(ans => {
        const meta = mockQuestions.find(q => q.id === ans.questionId);
        if (!meta) return;

        const w = meta.difficulty * meta.discrimination;
        totalWeight += w;

        if (skillScores[meta.skill]) {
            skillScores[meta.skill].t += 1;
            if (ans.isCorrect) skillScores[meta.skill].c += 1;
        }

        if (meta.cefr && cefrScores[meta.cefr]) {
            cefrScores[meta.cefr].t += 1;
            if (ans.isCorrect) cefrScores[meta.cefr].c += 1;
        }

        if (ans.isCorrect) {
            weightedCorrect += w;
            rawCorrect += 1;
        }
    });

    const theta = weightedCorrect / (totalWeight || 1);
    const placement = assignCEFRLevel(theta, cefrScores);
    const level = placement.level;
    const totalItems = answers.length;

    const cefrBands = Object.fromEntries(
        BANDS.map(b => [b, { ...cefrScores[b], pct: pct(cefrScores[b].c, cefrScores[b].t) }])
    );

    const skills = Object.fromEntries(
        SKILLS.map(s => [s, { ...skillScores[s], pct: pct(skillScores[s].c, skillScores[s].t) }])
    );

    const ringOffset = 264 - (264 * Math.min(1, theta));

    return {
        level,
        placement,
        levelMeta: LEVEL_META[level],
        theta,
        percentage: Math.round(theta * 100),
        rawCorrect,
        totalItems,
        rawPct: pct(rawCorrect, totalItems),
        skillScores: skills,
        cefrBands,
        cefrScores,
        ringOffset,
        feedback: LEVEL_FEEDBACK[level],
        formula: {
            weightedSum: weightedCorrect,
            weightTotal: totalWeight
        }
    };
}

// ── API pública: textos de resultados ──

/**
 * Obtiene textos localizados (feedback, nombre de nivel, viñetas de razonamiento).
 */
export function getResultCopy(result, lang) {
    const isEs = lang === 'es-CO';
    return {
        feedback: isEs ? result.feedback.es : result.feedback.en,
        levelName: isEs ? result.levelMeta.name.es : result.levelMeta.name.en,
        rationaleBullets: buildRationaleBullets(result, result.placement, lang)
    };
}

// ── Constantes: iconos por habilidad ──
const SKILL_ICON = {
    Reading: '📖',
    Listening: '🎧',
    Speaking: '🎙️',
    Writing: '✍️'
};

// ── API pública: renderizado de resultados ──

/**
 * Genera el HTML completo de la pantalla de resultados del diagnóstico.
 */
export function renderResultsMarkup(result, lang, t) {
    const copy = getResultCopy(result, lang);
    const bands = ['A1', 'A2', 'B1'];
    const langKey = lang === 'es-CO' ? 'es' : 'en';

    return `
        <section class="diag-result-focus" aria-labelledby="diag-result-heading">
            <div class="diag-result-ring diag-result-ring--hero" aria-hidden="true">
                <svg viewBox="0 0 100 100" class="diag-ring-svg">
                    <circle class="diag-ring-track" cx="50" cy="50" r="42"/>
                    <circle class="diag-ring-fill" cx="50" cy="50" r="42"
                        style="stroke-dashoffset: ${result.ringOffset}"
                        data-target-offset="${result.ringOffset}"/>
                </svg>
                <div class="diag-ring-center">
                    <span class="diag-ring-level">${result.level}</span>
                    <span class="diag-ring-sub" data-i18n-skip>${copy.levelName}</span>
                </div>
            </div>

            <span class="auth-pill diag-result-pill" data-i18n="diag.res.badge">${t('diag.res.badge')}</span>
            <h2 id="diag-result-heading" class="diag-result-title" data-i18n="diag.res">${t('diag.res')}</h2>
            <p class="diag-result-lead" data-i18n="diag.res.lead" data-i18n-params='{"score":"${result.rawCorrect}","total":"${result.totalItems}"}'>${t('diag.res.lead', { score: result.rawCorrect, total: result.totalItems })}</p>

            <div class="diag-scale-minimal" aria-label="${t('diag.scale')}">
                ${bands.map(b => `
                    <span class="diag-scale-pill ${b === result.level ? 'diag-scale-pill--active' : ''}">
                        <strong>${b}</strong>
                        <span>${LEVEL_META[b].name[langKey]}</span>
                    </span>
                `).join('')}
            </div>

            <blockquote class="diag-result-summary">${copy.feedback}</blockquote>
        </section>

        <details class="diag-result-details">
            <summary class="diag-result-details-toggle">
                <span data-i18n="diag.details.toggle">${t('diag.details.toggle')}</span>
                <span class="diag-result-details-icon" aria-hidden="true">+</span>
            </summary>

            <div class="diag-details-body">
                <div class="diag-score-chips">
                    <span class="diag-score-chip">
                        <em data-i18n="diag.stat.raw">${t('diag.stat.raw')}</em>
                        <strong>${result.rawCorrect}/${result.totalItems}</strong>
                    </span>
                    <span class="diag-score-chip">
                        <em data-i18n="diag.stat.index">${t('diag.stat.index')}</em>
                        <strong>${result.percentage}%</strong>
                    </span>
                    <span class="diag-score-chip">
                        <em data-i18n="diag.stat.formula">${t('diag.stat.formula')}</em>
                        <strong>θ ${result.theta.toFixed(3)}</strong>
                    </span>
                </div>

                <div class="diag-details-block">
                    <h3 class="diag-details-heading" data-i18n="diag.bands">${t('diag.bands')}</h3>
                    <div class="diag-band-list">
                        ${bands.map(b => {
                            const band = result.cefrBands[b];
                            const active = b === result.level;
                            return `
                                <div class="diag-band-row ${active ? 'diag-band-row--active' : ''}">
                                    <span class="diag-band-row-code">${b}</span>
                                    <div class="diag-band-row-bar">
                                        <div class="diag-band-bar-fill" style="width: 0%" data-band-fill="${b}" data-target="${band.pct}"></div>
                                    </div>
                                    <span class="diag-band-row-pct">${band.pct}%</span>
                                    <span class="diag-band-row-meta" data-i18n-skip>${band.c}/${band.t}</span>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>

                <div class="diag-details-block">
                    <h3 class="diag-details-heading" data-i18n="diag.skills">${t('diag.skills')}</h3>
                    <div class="diag-skill-list">
                        ${SKILLS.map(skill => {
                            const s = result.skillScores[skill];
                            return `
                                <div class="diag-skill-row">
                                    <span class="diag-skill-row-icon" aria-hidden="true">${SKILL_ICON[skill]}</span>
                                    <span class="diag-skill-row-name">${skill}</span>
                                    <div class="diag-skill-row-bar">
                                        <div class="diag-skill-bar-fill" style="width: 0%" data-skill-fill="${skill}" data-target="${s.pct}"></div>
                                    </div>
                                    <span class="diag-skill-row-pct">${s.pct}%</span>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>

                <div class="diag-details-block diag-details-block--method">
                    <h3 class="diag-details-heading" data-i18n="diag.details.method">${t('diag.details.method')}</h3>
                    <ul class="diag-rationale-list">
                        ${copy.rationaleBullets.map(line => `<li>${line}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </details>

        <button type="button" id="go-dash" class="btn-register-action btn-full diag-submit diag-result-cta">
            <span data-i18n="diag.continue">${t('diag.continue')}</span>
            <span class="auth-submit-icon" aria-hidden="true">→</span>
        </button>
    `;
}

// ── API pública: animación de resultados ──

/**
 * Anima las barras de progreso y el anillo circular al mostrar resultados.
 */
export function animateDiagnosticResults(root) {
    const animateBars = () => {
        root.querySelectorAll('[data-band-fill], [data-skill-fill]').forEach(el => {
            el.style.width = `${el.dataset.target || '0'}%`;
        });
        const ring = root.querySelector('.diag-ring-fill');
        if (ring) ring.style.strokeDashoffset = ring.dataset.targetOffset || '264';
    };

    window.requestAnimationFrame(animateBars);

    const details = root.querySelector('.diag-result-details');
    if (details) {
        details.addEventListener('toggle', () => {
            if (details.open) window.requestAnimationFrame(animateBars);
        });
    }
}

// ── API pública: helper legado de desglose por habilidad ──

/**
 * Genera HTML de desglose por habilidad (compatibilidad con imports externos).
 */
export function getSkillBreakdownHTML(skillScores) {
    return SKILLS.map(skill => {
        const s = skillScores[skill];
        const p = s.pct ?? (s.t ? Math.round((s.c / s.t) * 100) : 0);
        return `
            <div class="skill-breakdown-row">
                <span class="skill-breakdown-label">${skill}</span>
                <div class="skill-breakdown-bar"><div class="skill-breakdown-fill" style="width:${p}%"></div></div>
                <span class="skill-breakdown-pct">${p}%</span>
            </div>
        `;
    }).join('');
}
