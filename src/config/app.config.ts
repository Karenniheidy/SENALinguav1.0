/**
 * Configuración global — Constantes de la aplicación SENALingua
 */

// ── Importaciones ──
import type { SupportedLanguage } from '@/types';

// ── Constantes de la aplicación ──
export const CONFIG = {
  appName: 'SENALingua',
  version: '4.0.0',
  environment: 'production',
  defaultLanguage: 'en-GB' as SupportedLanguage,
  supportedLanguages: ['en-GB', 'es-CO'] as SupportedLanguage[],
  apiMockDelayMs: 350
} as const;
