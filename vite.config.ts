/**
 * Configuración Vite — Bundler, alias @/ y plugin Tailwind CSS 4
 */

// ── Importaciones ──
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath, URL } from 'node:url';

// ── Configuración de exportación ──
export default defineConfig({
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});