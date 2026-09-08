/**
 * Utilidades DOM — Consultas tipadas al árbol del documento
 */

// ── Consulta de un elemento ──
export function q<T extends HTMLElement = HTMLElement>(
  root: ParentNode,
  selector: string
): T | null {
  return root.querySelector<T>(selector);
}

// ── Consulta de múltiples elementos ──
export function qAll<T extends HTMLElement = HTMLElement>(
  root: ParentNode,
  selector: string
): NodeListOf<T> {
  return root.querySelectorAll<T>(selector);
}

// ── Consulta obligatoria (lanza error si no existe) ──
export function requireEl<T extends HTMLElement = HTMLElement>(
  root: ParentNode,
  selector: string
): T {
  const el = root.querySelector<T>(selector);
  if (!el) throw new Error(`Element not found: ${selector}`);
  return el;
}
