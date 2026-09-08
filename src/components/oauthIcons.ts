/**
 * Componente: Iconos OAuth — Gmail, Outlook y GitHub (SVG inline, sin assets externos)
 */

// ── SVG por proveedor ──
const PROVIDER_SVG: Record<string, string> = {
  Gmail: `<svg class="oauth-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#EA4335" d="M5.2 4h13.6A1.2 1.2 0 0 1 20 5.2v13.6A1.2 1.2 0 0 1 18.8 20H5.2A1.2 1.2 0 0 1 4 18.8V5.2A1.2 1.2 0 0 1 5.2 4z"/>
    <path fill="#fff" d="M12 13.1 4.6 6.7V18h14.8V6.7L12 13.1z"/>
    <path fill="#34A853" d="M4 5.8 12 12.2l8-6.4V5.2A1.2 1.2 0 0 0 18.8 4H5.2A1.2 1.2 0 0 0 4 5.2v.6z"/>
    <path fill="#FBBC05" d="M4 18.8V6.7l8 6.4-8 5.7z"/>
    <path fill="#4285F4" d="M20 6.7V18.8A1.2 1.2 0 0 1 18.8 20h.4L12 13.1 20 6.7z"/>
  </svg>`,
  Outlook: `<svg class="oauth-icon" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="5" width="11" height="14" rx="1.5" fill="#0078D4"/>
    <path fill="#50A0FF" d="M14 7.5h6.2c.7 0 1.3.6 1.3 1.3v10.4c0 .7-.6 1.3-1.3 1.3H14V7.5z"/>
    <ellipse cx="8.5" cy="12" rx="3.2" ry="3.8" fill="#fff"/>
    <path fill="#0078D4" d="M8.5 9.4c1.4 0 2.6 1.2 2.6 2.6s-1.2 2.6-2.6 2.6-2.6-1.2-2.6-2.6 1.2-2.6 2.6-2.6z"/>
  </svg>`,
  GitHub: `<svg class="oauth-icon oauth-icon--github" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.36 1.11 2.94.85.09-.67.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.74 0 0 .84-.27 2.75 1.05A9.2 9.2 0 0 1 12 6.84c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.42.2 2.48.1 2.74.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/>
  </svg>`
};

// ── Renderizado del icono OAuth ──
export function oauthIcon(provider: string): string {
  const svg = PROVIDER_SVG[provider];
  if (!svg) return '';
  return `<span class="oauth-icon-slot" aria-hidden="true">${svg}</span>`;
}
