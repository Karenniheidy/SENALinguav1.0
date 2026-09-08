/**
 * Punto de entrada — Inicializa SENALingua al cargar el DOM
 */

// ── Importaciones ──
import { initRouter } from '@/router/router';
import { store } from '@/core/state/store';
import { classroomService } from '@/services/classroomService';
import { translatePageDOM } from '@/i18n/translator';
import type { SupportedLanguage } from '@/types';

import '@/styles/main.css';

// ── Utilidad: etiqueta del botón de idioma ──
function getLangButtonHTML(lang: SupportedLanguage): string {
  return lang === 'en-GB'
    ? '🇬🇧 <span class="lang-text">English (UK)</span>'
    : '🇨🇴 <span class="lang-text">Español (Col)</span>';
}

// ── Utilidad: sincronizar atributo lang del documento ──
function syncDocumentLanguage(lang: SupportedLanguage): void {
  document.documentElement.lang = lang === 'es-CO' ? 'es' : 'en';
}

// ── Arranque de la aplicación ──
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app-root');
  if (!root) return;

  const { navigateTo } = initRouter(root);

  // ── Estado inicial e idioma ──
  const initialLang = store.getState().lang;
  syncDocumentLanguage(initialLang);

  const normalizedRooms = classroomService.normalizeAll(store.getState().classrooms || []);
  store.setState({ classrooms: normalizedRooms });

  // ── Selector de idioma ──
  const langBtn = document.getElementById('btn-lang-toggle');
  if (langBtn) {
    langBtn.innerHTML = getLangButtonHTML(initialLang);

    langBtn.addEventListener('click', () => {
      const currentLang = store.getState().lang;
      const nextLang: SupportedLanguage = currentLang === 'en-GB' ? 'es-CO' : 'en-GB';

      langBtn.innerHTML = getLangButtonHTML(nextLang);
      store.setState({ lang: nextLang });
      syncDocumentLanguage(nextLang);

      translatePageDOM();

      const currentStack = store.getState().historyStack;
      navigateTo(currentStack[currentStack.length - 1], true);
    });
  }

  // ── Primera renderización ──
  translatePageDOM();
  navigateTo('home');
});
