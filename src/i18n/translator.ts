/**
 * Traductor — Funciones t() y sincronización del DOM con i18n
 */

// ── Importaciones ──
import { store } from '@/core/state/store';
import { translations } from '@/i18n/languages';
import type { SupportedLanguage } from '@/types';

// ── Tipos internos ──
type TranslationParams = Record<string, string | number>;

// ── Traducción por clave ──
export function t(key: string, params: TranslationParams = {}): string {
  const currentLang = store.getState().lang;
  let text =
    translations[currentLang]?.[key] ??
    translations['en-GB' as SupportedLanguage]?.[key] ??
    key;

  Object.entries(params).forEach(([param, value]) => {
    text = text.replace(new RegExp(`\\{${param}\\}`, 'g'), String(value));
  });

  return text;
}

// ── Traducción de elementos con data-i18n ──
export function translatePageDOM(root: ParentNode = document): void {
  root.querySelectorAll('[data-i18n]:not([data-i18n-skip])').forEach((el) => {
    if (!(el instanceof HTMLElement)) return;

    const key = el.getAttribute('data-i18n');
    if (!key) return;

    const paramsAttr = el.getAttribute('data-i18n-params');
    let params: TranslationParams = {};

    if (paramsAttr) {
      try {
        params = JSON.parse(paramsAttr) as TranslationParams;
      } catch {
        /* parámetros mal formados — se ignoran */
      }
    }

    const translated = t(key, params);

    if (el.hasAttribute('data-i18n-html')) {
      el.innerHTML = translated;
    } else {
      el.textContent = translated;
    }
  });
}
