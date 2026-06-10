export type ClientPortalStatus = 'active' | 'pause' | 'expired';

export type ClientPortalWorkout = {
  id: string;
  date: string;
  title: string;
  focus: string;
  status: 'planned' | 'done' | 'missed';
  exercises: string[];
};

export type ClientPortalPlan = {
  id: string;
  clientName: string;
  phone: string;
  accessCode: string;
  tariff: string;
  status: ClientPortalStatus;
  startDate: string;
  endDate: string;
  coachComment: string;
  workouts: ClientPortalWorkout[];
};

export const CLIENT_PORTAL_STORAGE_KEY = 'agashka_client_portal_v1';

export const defaultClientPortalPlans: ClientPortalPlan[] = [
  {
    id: 'client-demo-1',
    clientName: 'Иван Демоклиент',
    phone: '+7 700 000 00 01',
    accessCode: '1111',
    tariff: 'План на месяц - 6 000 тг',
    status: 'active',
    startDate: '2026-06-01',
    endDate: '2026-06-30',
    coachComment: 'Работаем спокойно: техника, плечи, постепенный рост рабочих весов.',
    workouts: [
      {
        id: 'w1',
        date: '2026-06-03',
        title: 'Тренировка 1',
        focus: 'Жим лёжа + спина',
        status: 'planned',
        exercises: ['Жим лёжа 4×5', 'Тяга штанги в наклоне 4×8', 'Face Pull 3×15'],
      },
      {
        id: 'w2',
        date: '2026-06-05',
        title: 'Тренировка 2',
        focus: 'Ноги + ОФП',
        status: 'planned',
        exercises: ['Фронтальный присед 4×5', 'Румынская тяга 3×8', 'Планка 3×40 сек'],
      },
      {
        id: 'w3',
        date: '2026-06-07',
        title: 'Тренировка 3',
        focus: 'Пауза в жиме + трицепс',
        status: 'planned',
        exercises: ['Жим с паузой 2 сек 5×3', 'Жим узким хватом 3×6', 'Разгибание канатом 3×12'],
      },
    ],
  },
];

export function normalizeClientPortalPlans(input: unknown): ClientPortalPlan[] {
  if (!Array.isArray(input)) return defaultClientPortalPlans;
  return input.map((item, index) => ({
    id: String(item?.id || `client-${index + 1}`),
    clientName: String(item?.clientName || 'Клиент'),
    phone: String(item?.phone || ''),
    accessCode: String(item?.accessCode || '1111'),
    tariff: String(item?.tariff || 'План на месяц - 6 000 тг'),
    status: ['active', 'pause', 'expired'].includes(item?.status) ? item.status : 'active',
    startDate: String(item?.startDate || ''),
    endDate: String(item?.endDate || ''),
    coachComment: String(item?.coachComment || ''),
    workouts: Array.isArray(item?.workouts) ? item.workouts.map((workout: any, workoutIndex: number) => ({
      id: String(workout?.id || `w-${workoutIndex + 1}`),
      date: String(workout?.date || ''),
      title: String(workout?.title || `Тренировка ${workoutIndex + 1}`),
      focus: String(workout?.focus || ''),
      status: ['planned', 'done', 'missed'].includes(workout?.status) ? workout.status : 'planned',
      exercises: Array.isArray(workout?.exercises) ? workout.exercises.map(String) : [],
    })) : [],
  }));
}
