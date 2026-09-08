/**
 * Enrutador — Navegación SPA entre vistas de SENALingua
 */

// ── Importaciones ──
import { renderHome } from '@/views/homeView';
import { renderRegister, renderLogin, renderRoleSelection, renderForgotPassword, renderResetPassword, renderRegisterSuccess } from '@/views/authViews';
import { renderDiagnostic } from '@/views/diagnosticView';
import { renderApprenticeDashboard } from '@/views/apprenticeDashboard';
import { renderInstructorDashboard } from '@/views/instructorDashboard';
import { renderClassroomApprentices } from '@/views/classroomApprenticesView';
import { renderLessonEnvironment } from '@/views/lessonView';
import { store } from '@/core/state/store';
import { translatePageDOM } from '@/i18n/translator';
import type { NavigateFn, RouteName, UserRole } from '@/types';

// ── Tipos internos ──
type ViewRenderer = (navigateTo: NavigateFn) => HTMLElement;

// ── Redirección por acceso no autorizado ──
function resolveGuardedRoute(viewName: RouteName): RouteName {
  const user = store.getState().user;

  if (viewName === 'role-selection' && !user?.email) return 'register';
  if (viewName === 'register-success') {
    if (!user?.email) return 'register';
    if (!user.role) return 'role-selection';
  }

  const roleRoutes: Partial<Record<RouteName, UserRole>> = {
    diagnostic: 'apprentice',
    'apprentice-dashboard': 'apprentice',
    'lesson-environment': 'apprentice',
    'instructor-dashboard': 'instructor',
    'classroom-apprentices': 'instructor'
  };

  const requiredRole = roleRoutes[viewName];
  if (!requiredRole) return viewName;

  if (!user?.email) return 'login';
  if (!user.role) return 'role-selection';
  if (user.role !== requiredRole) {
    return user.role === 'instructor' ? 'instructor-dashboard' : 'apprentice-dashboard';
  }

  return viewName;
}

// ── Mapa de rutas ──
const routes: Record<RouteName, ViewRenderer> = {
  home: renderHome,
  register: renderRegister,
  login: renderLogin,
  'forgot-password': renderForgotPassword,
  'reset-password': renderResetPassword,
  'register-success': renderRegisterSuccess,
  'role-selection': renderRoleSelection,
  diagnostic: renderDiagnostic,
  'apprentice-dashboard': renderApprenticeDashboard,
  'instructor-dashboard': renderInstructorDashboard,
  'classroom-apprentices': renderClassroomApprentices,
  'lesson-environment': renderLessonEnvironment
};

// ── Inicialización del enrutador ──
export function initRouter(rootElement: HTMLElement): { navigateTo: NavigateFn } {
  // ── Navegación entre vistas ──
  const navigateTo: NavigateFn = (viewName, isBack = false) => {
    const resolvedView = isBack ? viewName : resolveGuardedRoute(viewName);
    const render = routes[resolvedView];
    if (!render) return;

    if (!isBack) {
      const currentStack = store.getState().historyStack;
      if (currentStack[currentStack.length - 1] !== resolvedView) {
        store.setState({ historyStack: [...currentStack, resolvedView] });
      }
    }

    rootElement.innerHTML = '';
    rootElement.appendChild(render(navigateTo));

    updateNavControls();
    translatePageDOM();
    window.scrollTo(0, 0);
  };

  // ── Control del botón atrás ──
  function updateNavControls(): void {
    const backBtn = document.getElementById('btn-global-back');
    const stack = store.getState().historyStack;
    const currentView = stack[stack.length - 1];
    if (backBtn) {
      backBtn.hidden = stack.length <= 1 || currentView === 'home';
    }
  }

  document.getElementById('btn-global-back')?.addEventListener('click', () => {
    const currentStack = store.getState().historyStack;
    if (currentStack.length > 1) {
      const newStack = [...currentStack];
      newStack.pop();
      const previousView = newStack[newStack.length - 1];
      store.setState({ historyStack: newStack });
      navigateTo(previousView, true);
    }
  });

  // ── Navegación al inicio (logo) ──
  const goHome = (): void => {
    store.setState({ historyStack: ['home'] });
    navigateTo('home');
  };

  const goHomeEl = document.getElementById('go-home');
  if (!goHomeEl) return { navigateTo };

  goHomeEl.addEventListener('click', goHome);
  goHomeEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      goHome();
    }
  });

  return { navigateTo };
}
