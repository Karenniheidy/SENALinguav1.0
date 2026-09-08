/**
 * Datos simulados — Usuarios, aulas y reexportación del banco diagnóstico
 */

// ── Importaciones ──
import type { ApprenticeRecord, CEFRLevel, Classroom, UserRole } from '@/types';

// ── Tipos internos ──
interface SeedUser {
  email: string;
  role: UserRole;
  name: string;
  assignedLevel?: CEFRLevel;
}

// ── Nombres de aprendices ADSO (ficha 3312932) ──
export const APPRENTICE_NAMES = [
  'Jenny Carolina Marrugo Ussa',
  'Nicolás Ruiz Colorado',
  'Erik Santiago Alegría Rojas',
  'Karen Niheidy Pastás Valencia',
  'Jatniel Esneider Astudillo Benavides',
  'Cristian David Yalanda Pillimue',
  'Óscar Santiago Castro Ayala',
  'Adriana Julieth Eraso Montero',
  'Karen Vanessa Castañeda Morán',
  'Sara Isabel Campo Calapsú',
  'Samuel Santiago López Ruano',
  'Astrith Katherine Benavides Imbachi',
  'Emmanuel Bonilla Salazar',
  'Beckan Hungría Rodríguez',
  'Sebastián Alejandro Bolaños Bolaños',
  'Andrés Felipe Montano Bernal',
  'Miguel Ángel Rivera Inchima',
  'Luis Fernando Conejo Quiñones',
  'Andrea Melissa Eraso Montero',
  'Cristian David Montilla Ordoñez',
  'José David Ortega Golondrino'
];

// ── Utilidad: generar correo institucional ──
function slugifyEmail(name) {
  const parts = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().split(' ');
  const first = parts[0];
  const surname = parts.length >= 3 ? parts[parts.length - 2] : parts[parts.length - 1];
  return `${first}.${surname}@misena.edu.co`;
}

// ── Utilidad: registro de aprendiz ──
function buildApprenticeRecord(name: string, index: number): ApprenticeRecord {
  const levels: CEFRLevel[] = ['A1', 'A2', 'B1'];
  return {
    id: `app-${index + 1}`,
    name,
    email: slugifyEmail(name),
    level: levels[index % 3],
    streak: Math.max(1, (index % 7) + 1),
    points: 320 + index * 45,
    lastActivity: '2026-06-24T14:30:00'
  };
}

// ── Aprendices por defecto ──
export const defaultApprentices = APPRENTICE_NAMES.map(buildApprenticeRecord);

// ── Base de datos de usuarios semilla ──
export const userDatabase: SeedUser[] = [
  { email: 'instructor@sena.edu.co', role: 'instructor', name: 'Lead Instructor ADSO' },
  { email: 'docente.adso@sena.edu.co', role: 'instructor', name: 'Instructor Técnico ADSO' },
  ...defaultApprentices.map((a): SeedUser => ({
    email: a.email,
    role: 'apprentice',
    name: a.name,
    assignedLevel: a.level
  }))
];

// ── Aula ADSO por defecto ──
export function getDefaultClassroom(): Classroom {
  const createdAt = '2026-02-10T08:00:00.000Z';
  return {
    ficha: '3312932',
    program: 'Análisis y Desarrollo de Software (ADSO)',
    code: 'ADSO331',
    createdAt,
    displayAt: createdAt,
    dateHistory: [{
      action: 'created',
      at: createdAt,
      by: 'system',
      recordedAt: createdAt
    }],
    state: 'Active',
    apprentices: defaultApprentices.map(a => ({ ...a }))
  };
}

// ── Reexportación del banco diagnóstico ──
export { mockQuestions, DIAGNOSTIC_OPTION_LABELS } from '@/data/diagnosticQuestions';
