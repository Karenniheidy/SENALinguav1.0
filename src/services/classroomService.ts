/** Módulo: classroomService — Gestión de aulas, inscripción por código y panel del instructor. */

// ── Importaciones ──
import { store } from '@/core/state/store';

// ── Utilidades internas: códigos y normalización ──

/**
 * Genera un código de acceso aleatorio con prefijo ADSO (simulación SENA).
 */
function generateAccessCode() {
    return 'ADSO' + Math.floor(100 + Math.random() * 900);
}

/**
 * Garantiza que un objeto aula tenga fechas, historial y estado válidos.
 */
function normalizeClassroom(classroom) {
    if (!classroom) return classroom;

    const createdAt = classroom.createdAt || new Date().toISOString();
    const displayAt = classroom.displayAt || createdAt;
    let dateHistory = Array.isArray(classroom.dateHistory) ? [...classroom.dateHistory] : [];

    if (!dateHistory.length) {
        dateHistory = [{
            action: 'created',
            at: createdAt,
            by: 'system',
            recordedAt: createdAt
        }];
    }

    return {
        ...classroom,
        createdAt,
        displayAt,
        dateHistory,
        state: classroom.state === 'Inactive' ? 'Inactive' : 'Active'
    };
}

/**
 * Normaliza un arreglo completo de aulas.
 */
function normalizeAll(classrooms) {
    return classrooms.map(normalizeClassroom);
}

/**
 * Obtiene el identificador del usuario actual para auditoría de cambios.
 */
function getChangedBy() {
    const user = store.getState().user;
    return user?.email || user?.name || 'instructor';
}

// ── API pública: servicio de aulas ──
export const classroomService = {
    normalizeClassroom,
    normalizeAll,

    // ── Consulta de aula por ficha ──
    /**
     * Busca un aula por número de ficha SENA.
     */
    getByFicha(ficha) {
        const c = store.getState().classrooms.find(room => room.ficha === ficha);
        return c ? normalizeClassroom(c) : null;
    },

    // ── Fecha de visualización efectiva ──
    /**
     * Devuelve la fecha de visualización efectiva del aula.
     */
    getDisplayAt(classroom) {
        return normalizeClassroom(classroom).displayAt;
    },

    // ── Detección de fecha modificada ──
    /**
     * Indica si la fecha de visualización fue modificada después de la creación.
     */
    wasDateModified(classroom) {
        const c = normalizeClassroom(classroom);
        return c.dateHistory.some(entry => entry.action === 'modified');
    },

    // ── Inscripción de aprendiz por código ──
    /**
     * Permite a un aprendiz unirse a un aula mediante código de acceso.
     * Actualiza el roster y el estado de inscripción del usuario.
     */
    joinByCode(code, apprenticeUser) {
        const normalizedCode = code.trim().toUpperCase();
        const classrooms = normalizeAll(store.getState().classrooms);
        const match = classrooms.find(c => c.code.toUpperCase() === normalizedCode);

        if (!match) {
            return { success: false, message: 'invalid_code' };
        }

        if (match.state === 'Inactive') {
            return { success: false, message: 'classroom_inactive' };
        }

        const apprenticePayload = {
            id: `app-${Date.now()}`,
            name: apprenticeUser.name || apprenticeUser.email.split('@')[0],
            email: apprenticeUser.email,
            level: store.getState().assignedLevel || 'Pending',
            streak: store.getState().learnerStats?.streak || 0,
            points: store.getState().learnerStats?.points || 0,
            lastActivity: new Date().toISOString()
        };

        const updatedClassrooms = classrooms.map(c => {
            if (c.code.toUpperCase() !== normalizedCode) return c;

            const exists = c.apprentices.some(a => a.email === apprenticeUser.email);
            if (exists) {
                return {
                    ...c,
                    apprentices: c.apprentices.map(a =>
                        a.email === apprenticeUser.email
                            ? { ...a, name: apprenticePayload.name, lastActivity: apprenticePayload.lastActivity }
                            : a
                    )
                };
            }

            return { ...c, apprentices: [...c.apprentices, apprenticePayload] };
        });

        store.setState({
            classrooms: updatedClassrooms,
            enrolledClassroomCode: match.code,
            user: {
                ...apprenticeUser,
                role: 'apprentice',
                classroomCode: match.code,
                ficha: match.ficha
            }
        });

        return { success: true, classroom: match };
    },

    // ── Creación de aula ──
    /**
     * Crea una nueva aula con ficha y programa. Valida duplicados.
     */
    createClassroom(ficha, program) {
        const trimmedFicha = ficha.trim();
        if (!trimmedFicha) return { success: false, message: 'ficha_required' };

        const classrooms = normalizeAll(store.getState().classrooms);
        if (classrooms.some(c => c.ficha === trimmedFicha)) {
            return { success: false, message: 'ficha_exists' };
        }

        const now = new Date().toISOString();
        const newClassroom = normalizeClassroom({
            ficha: trimmedFicha,
            program: program || 'Análisis y Desarrollo de Software (ADSO)',
            code: generateAccessCode(),
            createdAt: now,
            displayAt: now,
            dateHistory: [{
                action: 'created',
                at: now,
                by: getChangedBy(),
                recordedAt: now
            }],
            state: 'Active',
            apprentices: []
        });

        store.setState({ classrooms: [...classrooms, newClassroom] });
        return { success: true, classroom: newClassroom };
    },

    // ── Eliminación de aula ──
    /**
     * Elimina un aula por ficha y limpia la vista activa si corresponde.
     */
    deleteClassroom(ficha) {
        store.setState({
            classrooms: store.getState().classrooms.filter(c => c.ficha !== ficha),
            viewClassroomFicha: store.getState().viewClassroomFicha === ficha ? null : store.getState().viewClassroomFicha
        });
    },

    // ── Remoción de aprendiz del roster ──
    /**
     * Quita un aprendiz del roster de un aula específica.
     */
    removeApprentice(ficha, apprenticeId) {
        const classrooms = store.getState().classrooms.map(c => {
            if (c.ficha !== ficha) return c;
            return { ...c, apprentices: c.apprentices.filter(a => a.id !== apprenticeId) };
        });
        store.setState({ classrooms });
    },

    // ── Alternancia de estado del aula ──
    /**
     * Alterna el estado Active/Inactive de un aula.
     */
    toggleClassroomState(ficha) {
        const classrooms = store.getState().classrooms.map(c => {
            if (c.ficha !== ficha) return c;
            const next = c.state === 'Active' ? 'Inactive' : 'Active';
            return { ...c, state: next };
        });
        store.setState({ classrooms });
        return classrooms.find(c => c.ficha === ficha)?.state;
    },

    // ── Actualización de fecha de visualización ──
    /**
     * Actualiza la fecha de visualización del aula y registra el cambio en el historial.
     */
    updateDisplayDate(ficha, isoDateTime) {
        const parsed = new Date(isoDateTime);
        if (Number.isNaN(parsed.getTime())) {
            return { success: false, message: 'invalid_date' };
        }

        const newIso = parsed.toISOString();
        const changedBy = getChangedBy();
        const recordedAt = new Date().toISOString();
        let updated = null;

        const classrooms = store.getState().classrooms.map(c => {
            if (c.ficha !== ficha) return c;
            const room = normalizeClassroom(c);

            if (room.displayAt === newIso) {
                updated = room;
                return room;
            }

            const entry = {
                action: 'modified',
                from: room.displayAt,
                to: newIso,
                by: changedBy,
                recordedAt
            };

            updated = {
                ...room,
                displayAt: newIso,
                dateHistory: [...room.dateHistory, entry]
            };
            return updated;
        });

        store.setState({ classrooms });
        return { success: true, classroom: updated };
    },

    // ── Formato datetime-local para inputs HTML ──
    /**
     * Convierte una fecha ISO al formato `datetime-local` del input HTML.
     */
    toDatetimeLocalValue(isoString) {
        const d = new Date(isoString);
        const pad = (n) => String(n).padStart(2, '0');
        return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
    },

    // ── Formato de fecha localizado ──
    /**
     * Formatea una fecha ISO según el idioma de la interfaz.
     */
    formatDate(isoString, lang) {
        const locale = lang === 'es-CO' ? 'es-CO' : 'en-GB';
        return new Date(isoString).toLocaleString(locale, { dateStyle: 'medium', timeStyle: 'short' });
    },

    // ── Verificación de aprendiz en roster ──
    /**
     * Comprueba si un correo figura en la lista de aprendices del aula.
     */
    isUserInClassroomRoster(email, classroom) {
        if (!email || !classroom) return false;
        const normalized = email.trim().toLowerCase();
        return classroom.apprentices.some(a => a.email === normalized);
    },

    // ── Resolución de inscripción activa ──
    /**
     * Determina si el usuario actual está inscrito en un aula válida.
     */
    resolveEnrollment(state) {
        const code = state.enrolledClassroomCode;
        const email = state.user?.email;
        if (!code || !email) {
            return { enrolled: false, classroom: null, code: null };
        }

        const classroom = state.classrooms.find(c => c.code === code);
        if (!classroom || !this.isUserInClassroomRoster(email, classroom)) {
            return { enrolled: false, classroom: null, code: null, stale: !!code };
        }

        return { enrolled: true, classroom: this.normalizeClassroom(classroom), code };
    },

    // ── Limpieza de inscripción obsoleta ──
    /**
     * Limpia códigos de inscripción obsoletos (aula eliminada o usuario removido).
     */
    clearStaleEnrollment() {
        const state = store.getState();
        const { stale } = this.resolveEnrollment(state);
        if (stale) {
            store.setState({ enrolledClassroomCode: null });
        }
        return stale;
    },

    // ── Renderizado del historial de fechas ──
    /**
     * Genera el HTML del historial de fechas del aula para el panel del instructor.
     */
    renderDateHistory(classroom, lang, t) {
        const c = normalizeClassroom(classroom);
        const isEs = lang === 'es-CO';

        return c.dateHistory.map((entry, idx) => {
            if (entry.action === 'created') {
                const label = t('classroom.history.created');
                return `
                    <li class="date-history-item date-history-item--created">
                        <span class="date-history-badge">${label}</span>
                        <span class="date-history-when">${classroomService.formatDate(entry.at, lang)}</span>
                        <span class="date-history-meta">${isEs ? 'Registrado' : 'Recorded'}: ${classroomService.formatDate(entry.recordedAt || entry.at, lang)}</span>
                    </li>
                `;
            }

            const label = t('classroom.history.modified');
            return `
                <li class="date-history-item date-history-item--modified">
                    <span class="date-history-badge">${label} #${idx}</span>
                    <span class="date-history-change">
                        ${classroomService.formatDate(entry.from, lang)}
                        →
                        <strong>${classroomService.formatDate(entry.to, lang)}</strong>
                    </span>
                    <span class="date-history-meta">${isEs ? 'Por' : 'By'}: ${entry.by} · ${classroomService.formatDate(entry.recordedAt, lang)}</span>
                </li>
            `;
        }).join('');
    }
};
