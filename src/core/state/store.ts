/**
 * Estado global — Store reactivo con persistencia en localStorage
 */

// ── Importaciones ──
import { CONFIG } from '@/config/app.config';
import { getDefaultClassroom } from '@/data/mockData';
import type { AppState } from '@/types';

// ── Constantes de almacenamiento ──
const STORAGE_KEY = 'senaligua_state_v4';

const PERSISTED_KEYS = [
  'lang',
  'user',
  'diagnosticStep',
  'diagnosticAnswers',
  'assignedLevel',
  'diagnosticCompleted',
  'lessonProgress',
  'learnerStats',
  'progressPercent',
  'enrolledClassroomCode',
  'classrooms',
  'viewClassroomFicha'
] as const satisfies readonly (keyof AppState)[];

// ── Estado por defecto ──
function getDefaultState(): AppState {
  return {
    lang: CONFIG.defaultLanguage,
    user: null,
    diagnosticStep: 0,
    diagnosticAnswers: [],
    assignedLevel: null,
    diagnosticCompleted: false,
    activeLessonId: null,
    currentLessonStep: 0,
    lessonAnswers: [],
    lessonProgress: {},
    learnerStats: { streak: 1, points: 0, rank: null },
    progressPercent: 0,
    enrolledClassroomCode: null,
    classrooms: [getDefaultClassroom()],
    viewClassroomFicha: null,
    historyStack: ['home'],
    pendingResetEmail: null
  };
}

// ── Carga desde localStorage ──
function loadPersistedState(): Partial<AppState> | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Partial<AppState>;
  } catch {
    return null;
  }
}

// ── Guardado en localStorage ──
function savePersistedState(state: AppState): void {
  try {
    const payload: Record<string, unknown> = {};
    PERSISTED_KEYS.forEach((key) => {
      payload[key] = state[key];
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    /* almacenamiento no disponible — la app sigue en memoria */
  }
}

// ── Tipos internos ──
type StateListener = (state: AppState) => void;

// ── Clase Store ──
class Store {
  private state: AppState;
  private listeners: StateListener[] = [];

  constructor() {
    const defaults = getDefaultState();
    const saved = loadPersistedState();

    this.state = saved
      ? {
          ...defaults,
          ...saved,
          historyStack: ['home'],
          activeLessonId: null,
          currentLessonStep: 0,
          lessonAnswers: [],
          pendingResetEmail: null
        }
      : defaults;
  }

  getState(): AppState {
    return this.state;
  }

  setState(newState: Partial<AppState>): void {
    this.state = { ...this.state, ...newState };
    savePersistedState(this.state);
    this.listeners.forEach((listener) => listener(this.state));
  }

  subscribe(listener: StateListener): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  reset(): void {
    localStorage.removeItem(STORAGE_KEY);
    this.state = getDefaultState();
    this.listeners.forEach((listener) => listener(this.state));
  }
}

// ── Instancia singleton ──
export const store = new Store();
