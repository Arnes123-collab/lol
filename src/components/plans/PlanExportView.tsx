import type { TrainingPlan } from '@/types/plan';
import ExerciseCard from './ExerciseCard';
import PlanPdfButton from './PlanPdfButton';
import PlanWhatsAppButton from './PlanWhatsAppButton';
import PrintablePlan from './PrintablePlan';

const exportTargetId = 'printable-training-plan';

function formatDate(value?: string | null) {
  if (!value) return '-';
  return new Intl.DateTimeFormat('ru-RU').format(new Date(value));
}

export default function PlanExportView({ plan }: { plan: TrainingPlan }) {
  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-8 text-white md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="no-print mb-6 flex flex-col gap-3 rounded-2xl border border-zinc-800 bg-zinc-900 p-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-zinc-400">Этап 6 - экспорт и отправка плана</p>
            <h1 className="text-2xl font-bold uppercase text-amber-400">Готовый план клиента</h1>
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <PlanPdfButton targetId={exportTargetId} plan={plan} />
            <PlanWhatsAppButton plan={plan} />
            <PrintablePlan />
          </div>
        </div>

        <section id={exportTargetId} className="print-area rounded-2xl bg-white p-5 text-zinc-950 shadow-2xl md:p-10">
          <header className="mb-8 border-b-4 border-zinc-950 pb-6">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-600">AGASHKA POWERLIFTING</p>
            <h2 className="mt-2 text-3xl font-black uppercase md:text-5xl">Персональная тренировочная программа</h2>
            <p className="mt-3 text-zinc-600">Профессиональный план для безопасного прогресса в силовой подготовке</p>
          </header>

          <section className="mb-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
              <h3 className="mb-3 text-xl font-bold uppercase">Данные клиента</h3>
              <div className="space-y-2 text-sm">
                <p><b>Имя:</b> {plan.client.name}</p>
                <p><b>Возраст:</b> {plan.client.age || '-'} лет</p>
                <p><b>Вес:</b> {plan.client.weight || '-'} кг</p>
                <p><b>Цель:</b> {plan.client.goal || '-'}</p>
                <p><b>Ограничения:</b> {plan.client.limitations || '-'}</p>
              </div>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
              <h3 className="mb-3 text-xl font-bold uppercase">Программа</h3>
              <div className="space-y-2 text-sm">
                <p><b>Название:</b> {plan.title}</p>
                <p><b>Старт:</b> {formatDate(plan.startDate)}</p>
                <p><b>Финиш:</b> {formatDate(plan.endDate)}</p>
                <p><b>Формат:</b> {plan.weeks.length} недели, 3 тренировки в неделю</p>
              </div>
            </div>
          </section>

          {plan.coachNotes ? (
            <section className="mb-8 rounded-xl border-l-4 border-amber-500 bg-amber-50 p-5">
              <h3 className="mb-2 text-xl font-bold uppercase">Рекомендации тренера</h3>
              <p className="text-sm leading-7 text-zinc-700">{plan.coachNotes}</p>
            </section>
          ) : null}

          <section className="space-y-8">
            {plan.weeks.map((week) => (
              <article key={week.weekNumber} className="week-block rounded-2xl border border-zinc-200 p-4 md:p-6">
                <h3 className="mb-5 text-2xl font-black uppercase">Неделя {week.weekNumber}</h3>
                <div className="space-y-6">
                  {week.days.map((day) => (
                    <div key={`${week.weekNumber}-${day.dayName}`} className="day-block rounded-xl bg-zinc-50 p-4">
                      <div className="mb-4 flex flex-col justify-between gap-1 border-b border-zinc-200 pb-3 md:flex-row md:items-end">
                        <h4 className="text-xl font-bold uppercase">{day.dayName}</h4>
                        {day.focus ? <p className="text-sm font-semibold text-amber-700">{day.focus}</p> : null}
                      </div>
                      <div className="space-y-4">
                        {day.exercises.map((exercise, index) => (
                          <ExerciseCard key={`${exercise.name}-${index}`} exercise={exercise} index={index} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </section>

          <footer className="mt-10 border-t-2 border-zinc-950 pt-5 text-center text-sm font-bold uppercase tracking-wide">
            С вами, как всегда, agashka.powerlifting из Казахстана
          </footer>
        </section>
      </div>
    </main>
  );
}
