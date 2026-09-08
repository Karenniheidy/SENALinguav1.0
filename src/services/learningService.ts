/** Módulo: learningService — Progreso de lecciones, estadísticas y desbloqueo del aprendiz. */

// ── Importaciones ──
import { countTotalLessons, getAllLessonsForLevel } from '@/data/curriculum';
import { store } from '@/core/state/store';
import { authService } from '@/services/authService';

import type { CEFRLevel, LessonProgressEntry } from '@/types';

// ── API pública: servicio de aprendizaje ──
export const learningService = {
    // ── Estadísticas por defecto del aprendiz ──
    getDefaultStats() {
        return { streak: 1, points: 0, rank: null };
    },

    // ── Cálculo de porcentaje de progreso ──
    calculateProgressPercent(level: CEFRLevel, lessonProgress: Record<string, LessonProgressEntry>) {
        const total = countTotalLessons(level);
        if (!total) return 0;
        const completed = Object.values(lessonProgress).filter((p) => p.completed).length;
        return Math.round((completed / total) * 100);
    },

    // ── Cálculo de posición en el ranking del aula ──
    calculateRank(classroom, userEmail, points) {
        if (!classroom) return '—';
        const sorted = [...classroom.apprentices].sort((a, b) => b.points - a.points);
        const idx = sorted.findIndex(a => a.email === userEmail);
        if (idx === -1) return `#${sorted.length + 1}`;
        return `#${String(idx + 1).padStart(2, '0')}`;
    },

    // ── Completar lección y actualizar estado ──
    completeLesson(lessonId, score, total) {
        const state = store.getState();
        const lessonProgress = {
            ...state.lessonProgress,
            [lessonId]: { completed: true, score, total, completedAt: new Date().toISOString() }
        };

        const pointsEarned = score * 50 + (score === total ? 25 : 0);
        const learnerStats = {
            ...state.learnerStats,
            points: state.learnerStats.points + pointsEarned,
            streak: state.learnerStats.streak + 1
        };

        const level = state.assignedLevel || 'A1';
        const progressPercent = this.calculateProgressPercent(level, lessonProgress);

        const classrooms = state.classrooms.map(c => {
            if (c.code !== state.enrolledClassroomCode) return c;
            return {
                ...c,
                apprentices: c.apprentices.map(a =>
                    a.email === state.user?.email
                        ? { ...a, points: learnerStats.points, streak: learnerStats.streak, level, lastActivity: new Date().toISOString() }
                        : a
                )
            };
        });

        store.setState({ lessonProgress, learnerStats, progressPercent, classrooms });
        authService.syncAccountFromState();
    },

    // ── Verificación de lección desbloqueada ──
    isLessonUnlocked(level, lessonId, lessonProgress) {
        const lessons = getAllLessonsForLevel(level);
        const idx = lessons.findIndex(l => l.id === lessonId);
        if (idx <= 0) return true;
        const prev = lessons[idx - 1];
        return lessonProgress[prev?.id]?.completed === true;
    }
};
