/**
 * Tipos del dominio — Contratos TypeScript de SENALingua
 */

// ── Idiomas e internacionalización ──
export type SupportedLanguage = 'en-GB' | 'es-CO';

// ── Roles y niveles ──
export type UserRole = 'apprentice' | 'instructor';

export type CEFRLevel = 'A1' | 'A2' | 'B1';

export type SkillType = 'Reading' | 'Listening' | 'Speaking' | 'Writing';

// ── Rutas de la SPA ──
export type RouteName =
  | 'home'
  | 'register'
  | 'login'
  | 'forgot-password'
  | 'reset-password'
  | 'register-success'
  | 'role-selection'
  | 'diagnostic'
  | 'apprentice-dashboard'
  | 'instructor-dashboard'
  | 'classroom-apprentices'
  | 'lesson-environment';

export type NavigateFn = (viewName: RouteName, isBack?: boolean) => void;

// ── Usuario y autenticación ──
export interface User {
  email: string;
  name: string;
  role: UserRole | null;
  assignedLevel?: CEFRLevel | null;
  diagnosticCompleted?: boolean;
}

export interface AuthMeta {
  provider?: string;
  method?: string;
  [key: string]: unknown;
}

export interface DiagnosticAnswer {
  questionId: number;
  isCorrect: boolean;
}

// ── Progreso del aprendiz ──
export interface LearnerStats {
  streak: number;
  points: number;
  rank: string | null;
}

export interface LessonProgressEntry {
  completed: boolean;
  score: number;
  total: number;
  completedAt: string;
}

// ── Aula y aprendices ──
export interface ApprenticeRecord {
  id: string;
  name: string;
  email: string;
  level: CEFRLevel;
  streak: number;
  points: number;
  lastActivity: string;
}

export interface ClassroomDateHistoryEntry {
  action: string;
  at: string;
  by: string;
  recordedAt: string;
}

export interface Classroom {
  ficha: string;
  program: string;
  code: string;
  createdAt: string;
  displayAt: string;
  dateHistory: ClassroomDateHistoryEntry[];
  state: string;
  apprentices: ApprenticeRecord[];
}

export interface LessonAnswer {
  questionId: string;
  isCorrect: boolean;
  skill: SkillType;
}

// ── Estado global de la aplicación ──
export interface AppState {
  lang: SupportedLanguage;
  user: User | null;
  diagnosticStep: number;
  diagnosticAnswers: DiagnosticAnswer[];
  assignedLevel: CEFRLevel | null;
  diagnosticCompleted: boolean;
  activeLessonId: string | null;
  currentLessonStep: number;
  lessonAnswers: LessonAnswer[];
  lessonProgress: Record<string, LessonProgressEntry>;
  learnerStats: LearnerStats;
  progressPercent: number;
  enrolledClassroomCode: string | null;
  classrooms: Classroom[];
  viewClassroomFicha: string | null;
  historyStack: RouteName[];
  lastAuthMeta?: AuthMeta;
  pendingResetEmail: string | null;
}

// ── Resultados de autenticación ──
export type AuthErrorMessage =
  | 'already_registered'
  | 'not_registered'
  | 'wrong_password'
  | 'password_too_short'
  | 'password_mismatch'
  | 'invalid_reset_code'
  | 'reset_expired'
  | 'generic';

export interface AuthFailure {
  success: false;
  message: AuthErrorMessage | string;
  user?: User;
}

export interface AuthSuccess {
  success: true;
  user: User;
  session?: Partial<AppState> | null;
}

export interface OAuthSuccess extends AuthSuccess {
  provider: string;
}

export type AuthEmailResult = AuthSuccess | AuthFailure;
export type OAuthResult = OAuthSuccess | AuthFailure;

export interface LoginMeta extends AuthMeta {
  provider?: string;
  session?: Partial<AppState> | null;
}

// ── Currículo educativo ──
export interface PasswordResetResult {
  success: boolean;
  message?: AuthErrorMessage | string;
  code?: string;
}

export interface PasswordResetConfirmResult {
  success: boolean;
  message?: AuthErrorMessage | string;
}

export interface CurriculumItem {
  id: string;
  skill: SkillType;
  q: string;
  o: string[];
  c: number;
  f: string;
}

export interface CurriculumLesson {
  id: string;
  title: string;
  questions: CurriculumItem[];
}

export interface CurriculumModule {
  id: string;
  title: string;
  subtitle: string;
  lessons: CurriculumLesson[];
}
