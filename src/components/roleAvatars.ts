/**
 * Componente: Avatares de rol — Ilustraciones SVG para aprendiz e instructor
 */

type RoleKey = 'apprentice' | 'instructor';

// ── SVG por rol (sustituye memojis PNG ausentes) ──
const ROLE_SVG: Record<RoleKey, string> = {
  apprentice: `<svg class="role-memoji" viewBox="0 0 88 88" width="88" height="88" aria-hidden="true">
    <defs>
      <linearGradient id="app-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#dcfce7"/>
        <stop offset="100%" stop-color="#ccfbf1"/>
      </linearGradient>
    </defs>
    <circle cx="44" cy="44" r="42" fill="url(#app-bg)" stroke="#86efac" stroke-width="2"/>
    <ellipse cx="44" cy="78" rx="24" ry="8" fill="#bbf7d0" opacity="0.55"/>
    <circle cx="44" cy="38" r="18" fill="#fde68a"/>
    <path d="M26 34c2-8 10-12 18-12s16 4 18 12" fill="#422006"/>
    <circle cx="37" cy="38" r="2.2" fill="#1f2937"/>
    <circle cx="51" cy="38" r="2.2" fill="#1f2937"/>
    <path d="M38 46c2 2 10 2 12 0" stroke="#b45309" stroke-width="2" stroke-linecap="round" fill="none"/>
    <rect x="28" y="54" width="32" height="22" rx="10" fill="#16a34a"/>
    <path d="M34 54h20l-3-8H37l-3 8z" fill="#15803d"/>
    <rect x="40" y="60" width="8" height="6" rx="1" fill="#f0fdf4"/>
  </svg>`,
  instructor: `<svg class="role-memoji" viewBox="0 0 88 88" width="88" height="88" aria-hidden="true">
    <defs>
      <linearGradient id="inst-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#fef3c7"/>
        <stop offset="100%" stop-color="#fde68a"/>
      </linearGradient>
    </defs>
    <circle cx="44" cy="44" r="42" fill="url(#inst-bg)" stroke="#fcd34d" stroke-width="2"/>
    <ellipse cx="44" cy="78" rx="24" ry="8" fill="#fde68a" opacity="0.55"/>
    <circle cx="44" cy="38" r="18" fill="#fdba74"/>
    <path d="M24 36c3-6 12-10 20-10s17 4 20 10" fill="#431407"/>
    <circle cx="36" cy="38" r="2.2" fill="#1f2937"/>
    <circle cx="52" cy="38" r="2.2" fill="#1f2937"/>
    <path d="M38 46c3 2 9 2 12 0" stroke="#9a3412" stroke-width="2" stroke-linecap="round" fill="none"/>
    <path d="M30 54h28l-4 22H34l-4-22z" fill="#1d4ed8"/>
    <path d="M34 54l8-10 8 10" fill="#fff"/>
    <rect x="38" y="62" width="12" height="8" rx="2" fill="#dbeafe"/>
    <circle cx="58" cy="30" r="6" fill="#fff" stroke="#93c5fd" stroke-width="1.5"/>
    <path d="M55 30h6M58 27v6" stroke="#2563eb" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`
};

// ── Renderizado del avatar por rol ──
export function roleAvatar(role: RoleKey): string {
  return `<div class="role-memoji-wrap" aria-hidden="true">
    <div class="role-memoji-glow"></div>
    ${ROLE_SVG[role]}
  </div>`;
}
