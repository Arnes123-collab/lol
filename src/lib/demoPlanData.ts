import type { TrainingPlan } from '@/types/plan';

export const demoPlanData: TrainingPlan = {
  id: 'demo',
  title: '2-недельная программа укрепления жима лёжа',
  client: {
    id: 'demo-client',
    name: 'Иван',
    age: 43,
    weight: 89,
    goal: 'Укрепить жим лёжа и убрать боль в плечах',
    limitations: 'Беречь плечевой сустав, избегать отказных повторений',
  },
  startDate: '2026-06-03',
  endDate: '2026-06-17',
  coachNotes:
    'Работать технично, не гнаться за весом. Лопатки сведены, пауза контролируемая, боль в плече выше 3/10 - вес снизить на 10-15%.',
  weeks: [
    {
      weekNumber: 1,
      days: [
        {
          dayName: 'Понедельник',
          focus: 'Классика сила',
          exercises: [
            { name: 'Жим лёжа', sets: 4, reps: '5', weight: '100 кг', percent: '70%', rest: '3 мин', notes: 'Контроль опускания, без отбива', imageUrl: '/exercises/bench-press.jpg' },
            { name: 'Тяга штанги в наклоне', sets: 3, reps: '10', weight: 'умеренно', rest: '2 мин', notes: 'Спина ровная', imageUrl: '/exercises/row.jpg' },
            { name: 'Face Pull', sets: 3, reps: '15', weight: 'лёгко', rest: '60 сек', notes: 'Для задней дельты и лопаток', imageUrl: '/exercises/face-pull.jpg' },
          ],
        },
        {
          dayName: 'Среда',
          focus: 'Техника и плечи',
          exercises: [
            { name: 'Жим лёжа с паузой 2 сек', sets: 4, reps: '4', weight: '95 кг', percent: '65%', rest: '2-3 мин', notes: 'Пауза честная, старт по команде', imageUrl: '/exercises/bench-press.jpg' },
            { name: 'Гиперэкстензия', sets: 3, reps: '12', weight: 'свой вес', rest: '60 сек', notes: 'Без переразгибания поясницы', imageUrl: '/exercises/default.jpg' },
            { name: 'Face Pull', sets: 3, reps: '15', weight: 'лёгко', rest: '60 сек', notes: 'Медленно, локти в стороны', imageUrl: '/exercises/face-pull.jpg' },
          ],
        },
        {
          dayName: 'Пятница',
          focus: 'Ноги и объём',
          exercises: [
            { name: 'Присед', sets: 3, reps: '5', weight: '90 кг', percent: '60%', rest: '3 мин', notes: 'Не проваливать колени', imageUrl: '/exercises/squat.jpg' },
            { name: 'Жим лёжа средним хватом', sets: 5, reps: '6', weight: '90 кг', percent: '60%', rest: '2 мин', notes: 'Объём без отказа', imageUrl: '/exercises/bench-press.jpg' },
            { name: 'Тяга в наклоне', sets: 4, reps: '8', weight: 'умеренно', rest: '2 мин', notes: 'Стабильная спина', imageUrl: '/exercises/row.jpg' },
          ],
        },
      ],
    },
    {
      weekNumber: 2,
      days: [
        {
          dayName: 'Понедельник',
          focus: 'Жим тяжелее',
          exercises: [
            { name: 'Жим лёжа', sets: 5, reps: '3', weight: '110 кг', percent: '75%', rest: '3-4 мин', notes: 'Не терять траекторию', imageUrl: '/exercises/bench-press.jpg' },
            { name: 'Face Pull', sets: 3, reps: '15', weight: 'лёгко', rest: '60 сек', notes: 'Обязательная профилактика плеч', imageUrl: '/exercises/face-pull.jpg' },
          ],
        },
        {
          dayName: 'Среда',
          focus: 'Восстановление и техника',
          exercises: [
            { name: 'Жим лёжа пауза 2 сек', sets: 4, reps: '4', weight: '97.5 кг', percent: '67.5%', rest: '2-3 мин', notes: 'Пауза без расслабления', imageUrl: '/exercises/bench-press.jpg' },
            { name: 'Гиперэкстензия', sets: 3, reps: '12', weight: 'свой вес', rest: '60 сек', notes: 'Контроль корпуса', imageUrl: '/exercises/default.jpg' },
          ],
        },
        {
          dayName: 'Пятница',
          focus: 'Объём и спина',
          exercises: [
            { name: 'Становая тяга', sets: 3, reps: '5', weight: 'умеренно', percent: '60%', rest: '3 мин', notes: 'Без рывка с пола', imageUrl: '/exercises/deadlift.jpg' },
            { name: 'Жим лёжа средним хватом', sets: 4, reps: '6', weight: '92.5 кг', percent: '62.5%', rest: '2 мин', notes: 'Оставить 2 повтора в запасе', imageUrl: '/exercises/bench-press.jpg' },
            { name: 'Тяга штанги в наклоне', sets: 4, reps: '8', weight: 'умеренно', rest: '2 мин', notes: 'Работать широчайшими', imageUrl: '/exercises/row.jpg' },
          ],
        },
      ],
    },
  ],
};
