/** Vista: homeView — Página de inicio y landing de SENALingua */

// ── Dependencias ──
import type { NavigateFn } from '@/types';
import { t } from '@/i18n/translator';
import { icon } from '@/components/uiIcons';

// ── Constantes: términos del hero ──
const TECH_TERMS = [
    '<span class="term-kw">async</span> <span class="term-str">"await"</span>',
    '<span class="term-kw">function</span> debug()',
    '<span class="term-kw">const</span> API_KEY',
    '<span class="term-str">"pull request"</span>',
    '<span class="term-kw">class</span> Developer',
    '<span class="term-str">"merge conflict"</span>',
    '<span class="term-kw">try</span> / <span class="term-kw">catch</span>',
    '<span class="term-str">"code review"</span>',
    '<span class="term-kw">export</span> default',
    '<span class="term-str">"unit test"</span>',
];

// ── Constantes: capacidades de la plataforma ──
const CAPABILITIES = [
    { key: 'diag', icon: 'clipboard', color: 'capability-green' },
    { key: 'skills', icon: 'target', color: 'capability-orange' },
    { key: 'modules', icon: 'layers', color: 'capability-teal' },
    { key: 'instructor', icon: 'chart', color: 'capability-yellow' }
];

// ── Constantes: pasos del recorrido ──
const JOURNEY_STEPS = [
    { key: 's1', icon: 'door' },
    { key: 's2', icon: 'clipboard' },
    { key: 's3', icon: 'route' },
    { key: 's4', icon: 'trendUp' }
];

// ── Función auxiliar: cinta animada ──
function buildMarquee() {
    const terms = [...TECH_TERMS, ...TECH_TERMS];
    const items = terms.map(term => `<span class="tech-term">${term}</span>`).join('');
    return `
        <div class="tech-marquee-wrap" aria-hidden="true">
            <div class="tech-marquee">
                <div class="tech-marquee-track">${items}</div>
                <div class="tech-marquee-track">${items}</div>
            </div>
        </div>
    `;
}

// ── Exportación principal: renderizado de inicio ──
export function renderHome(navigateTo: NavigateFn) {
    // ── Markup principal ──
    const html = `
        <section class="hero-grid">
            <div class="hero-content">
                <span class="hero-tag">
                    ${icon('sparkles', 'ui-icon ui-icon--xs')}
                    <span data-i18n="hero.badge">${t('hero.badge')}</span>
                </span>
                <h1 class="hero-main-title">
                    <span class="hero-line" data-i18n="hero.title.line1">${t('hero.title.line1')}</span>
                    <span class="hero-line hero-accent" data-i18n="hero.title.line2">${t('hero.title.line2')}</span>
                </h1>
                <p class="hero-desc" data-i18n="hero.desc">${t('hero.desc')}</p>
                <div class="hero-cta">
                    <button id="go-register" class="btn-register-action btn-with-icon">
                        ${icon('zap', 'ui-icon ui-icon--sm')}
                        <span data-i18n="btn.start">${t('btn.start')}</span>
                    </button>
                    <button id="go-login" class="btn-login-action btn-with-icon">
                        ${icon('door', 'ui-icon ui-icon--sm')}
                        <span data-i18n="btn.login">${t('btn.login')}</span>
                    </button>
                </div>
            </div>
            <div class="art-shell-luxury">
                <div class="hero-visual-core">
                    <div class="code-window">
                        <div class="code-window-bar">
                            <span></span><span></span><span></span>
                            <span class="code-window-title">developer.js</span>
                        </div>
                        <pre class="code-snippet"><span class="cm">// SENALingua — your path to fluency</span>
<span class="kw">const</span> developer = {
  name: <span class="str">"ADSO apprentice"</span>,
  skill: <span class="str">"technical English"</span>,
  context: <span class="str">"SENA"</span>,
  level: <span class="fn">upgrade</span>(<span class="str">"A1"</span>, <span class="str">"B1"</span>),
  speak: <span class="kw">async</span> () => <span class="kw">await</span> <span class="fn">practice</span>()
};<span class="cursor"></span></pre>
                    </div>
                </div>
                <div class="floating-badge badge-top">
                    ${icon('target', 'ui-icon ui-icon--xs')}
                    <span data-i18n="hero.badge.skill">${t('hero.badge.skill')}</span>
                </div>
                <div class="floating-badge badge-bottom">
                    ${icon('clipboard', 'ui-icon ui-icon--xs')}
                    <span data-i18n="hero.badge.cefr">${t('hero.badge.cefr')}</span>
                </div>
            </div>
        </section>

        ${buildMarquee()}

        <section class="section-block">
            <div class="section-header">
                <h2 data-i18n="context.title">${t('context.title')}</h2>
                <p data-i18n="context.desc">${t('context.desc')}</p>
            </div>
        </section>

        <section id="section-offer" class="section-block">
            <span class="section-eyebrow">
                ${icon('layers', 'ui-icon ui-icon--xs')}
                Platform
            </span>
            <h2 class="section-title" data-i18n="offer.title">${t('offer.title')}</h2>
            <div class="capabilities-grid stagger-children">
                ${CAPABILITIES.map(cap => `
                    <article class="capability-card ${cap.color}">
                        <div class="capability-icon">${icon(cap.icon, 'ui-icon')}</div>
                        <h3 data-i18n="offer.${cap.key}">${t(`offer.${cap.key}`)}</h3>
                        <p data-i18n="offer.${cap.key}.desc">${t(`offer.${cap.key}.desc`)}</p>
                    </article>
                `).join('')}
            </div>
        </section>

        <section class="section-block journey-section">
            <span class="section-eyebrow">
                ${icon('route', 'ui-icon ui-icon--xs')}
                Process
            </span>
            <h2 class="section-title" data-i18n="journey.title">${t('journey.title')}</h2>
            <div class="journey-steps stagger-children">
                ${JOURNEY_STEPS.map((step, i) => `
                    <div class="journey-step">
                        <span class="journey-step-icon" aria-hidden="true">
                            ${icon(step.icon, 'ui-icon ui-icon--sm')}
                        </span>
                        <em class="journey-step-num">0${i + 1}</em>
                        <p data-i18n="journey.${step.key}">${t(`journey.${step.key}`)}</p>
                    </div>
                `).join('')}
            </div>
        </section>
    `;

    // ── Montaje en el DOM ──
    const container = document.createElement('div');
    container.className = 'fade-in';
    container.innerHTML = html;

    // ── Eventos: navegación a registro e inicio de sesión ──
    container.querySelector('#go-register').addEventListener('click', () => navigateTo('register'));
    container.querySelector('#go-login').addEventListener('click', () => navigateTo('login'));

    return container;
}
