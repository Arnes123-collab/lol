'use client';

import { useEffect, useState } from 'react';
import { saveClientPortalPlans, useClientPortalPlans } from '@/lib/client-portal/useClientPortal';
import type { ClientPortalPlan, ClientPortalWorkout } from '@/lib/client-portal/defaultClientPortal';

const emptyWorkout = (index: number): ClientPortalWorkout => ({
  id: `w-${Date.now()}-${index}`,
  date: '',
  title: `Тренировка ${index + 1}`,
  focus: '',
  status: 'planned',
  exercises: [''],
});

const newPlan = (): ClientPortalPlan => ({
  id: `client-${Date.now()}`,
  clientName: '',
  phone: '',
  accessCode: String(Math.floor(1000 + Math.random() * 9000)),
  tariff: 'План на месяц - 6 000 тг',
  status: 'active',
  startDate: '',
  endDate: '',
  coachComment: '',
  workouts: [emptyWorkout(0), emptyWorkout(1), emptyWorkout(2)],
});

export default function AdminClientPortalManager() {
  const { plans, ready } = useClientPortalPlans();
  const [drafts, setDrafts] = useState<ClientPortalPlan[]>(plans);
  const [selectedId, setSelectedId] = useState<string>('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (ready) {
      setDrafts(plans);
      setSelectedId((current) => current || plans[0]?.id || '');
    }
  }, [ready]);

  const selected = drafts.find((plan) => plan.id === selectedId) || drafts[0];

  function updatePlan(patch: Partial<ClientPortalPlan>) {
    if (!selected) return;
    setDrafts((current) => current.map((plan) => (plan.id === selected.id ? { ...plan, ...patch } : plan)));
  }

  function updateWorkout(workoutId: string, patch: Partial<ClientPortalWorkout>) {
    if (!selected) return;
    updatePlan({ workouts: selected.workouts.map((workout) => (workout.id === workoutId ? { ...workout, ...patch } : workout)) });
  }

  function saveAll() {
    saveClientPortalPlans(drafts);
    setMessage('Кабинеты клиентов сохранены. Клиент может войти по телефону и коду доступа.');
    setTimeout(() => setMessage(''), 3500);
  }

  function addPlan() {
    const plan = newPlan();
    setDrafts((current) => [plan, ...current]);
    setSelectedId(plan.id);
  }

  function removePlan() {
    if (!selected) return;
    const next = drafts.filter((plan) => plan.id !== selected.id);
    setDrafts(next);
    setSelectedId(next[0]?.id || '');
  }

  if (!ready) return <div className="rounded-2xl bg-white p-6 shadow-sm">Загрузка кабинетов клиентов...</div>;

  return (
    <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
      <aside className="rounded-2xl border border-border-default bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-xl font-extrabold">Клиенты</h2>
          <button onClick={addPlan} className="rounded-lg bg-accent-red px-3 py-2 text-xs font-bold uppercase text-white">Добавить</button>
        </div>
        <div className="mt-4 space-y-2">
          {drafts.map((plan) => (
            <button key={plan.id} onClick={() => setSelectedId(plan.id)} className={`w-full rounded-xl border p-3 text-left transition ${selected?.id === plan.id ? 'border-accent-red bg-red-50' : 'border-border-default bg-white hover:border-accent-red'}`}>
              <div className="font-bold">{plan.clientName || 'Новый клиент'}</div>
              <div className="mt-1 text-xs text-text-muted">Код: {plan.accessCode} • {plan.status}</div>
            </button>
          ))}
        </div>
      </aside>

      <section className="rounded-2xl border border-border-default bg-white p-5 shadow-sm">
        {!selected ? (
          <div className="text-text-muted">Добавь первого клиента для личного кабинета.</div>
        ) : (
          <div className="space-y-6">
            <div className="flex flex-col gap-3 border-b border-border-default pb-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-extrabold">Личный кабинет клиента</h2>
                <p className="mt-1 text-sm text-text-muted">Данные клиента, код доступа, текущий тариф и тренировки.</p>
              </div>
              <div className="flex gap-2">
                <button onClick={saveAll} className="rounded-lg bg-success-green px-4 py-3 text-xs font-bold uppercase text-white">Сохранить</button>
                <button onClick={removePlan} className="rounded-lg border border-accent-red px-4 py-3 text-xs font-bold uppercase text-accent-red">Удалить</button>
              </div>
            </div>

            {message && <div className="rounded-xl border border-success-green bg-green-50 p-3 text-sm font-bold text-success-green">{message}</div>}

            <div className="grid gap-4 md:grid-cols-2">
              <label className="block text-sm font-bold">Имя клиента<input value={selected.clientName} onChange={(e) => updatePlan({ clientName: e.target.value })} className="mt-2 w-full rounded-xl border border-border-default p-3 font-normal" /></label>
              <label className="block text-sm font-bold">Телефон<input value={selected.phone} onChange={(e) => updatePlan({ phone: e.target.value })} className="mt-2 w-full rounded-xl border border-border-default p-3 font-normal" /></label>
              <label className="block text-sm font-bold">Код доступа<input value={selected.accessCode} onChange={(e) => updatePlan({ accessCode: e.target.value })} className="mt-2 w-full rounded-xl border border-border-default p-3 font-normal" /></label>
              <label className="block text-sm font-bold">Статус<select value={selected.status} onChange={(e) => updatePlan({ status: e.target.value as ClientPortalPlan['status'] })} className="mt-2 w-full rounded-xl border border-border-default p-3 font-normal"><option value="active">Активен</option><option value="pause">Пауза</option><option value="expired">Просрочен</option></select></label>
              <label className="block text-sm font-bold">Тариф<input value={selected.tariff} onChange={(e) => updatePlan({ tariff: e.target.value })} className="mt-2 w-full rounded-xl border border-border-default p-3 font-normal" /></label>
              <div className="grid grid-cols-2 gap-3"><label className="block text-sm font-bold">Старт<input type="date" value={selected.startDate} onChange={(e) => updatePlan({ startDate: e.target.value })} className="mt-2 w-full rounded-xl border border-border-default p-3 font-normal" /></label><label className="block text-sm font-bold">Финиш<input type="date" value={selected.endDate} onChange={(e) => updatePlan({ endDate: e.target.value })} className="mt-2 w-full rounded-xl border border-border-default p-3 font-normal" /></label></div>
            </div>
            <label className="block text-sm font-bold">Комментарий тренера<textarea value={selected.coachComment} onChange={(e) => updatePlan({ coachComment: e.target.value })} rows={3} className="mt-2 w-full rounded-xl border border-border-default p-3 font-normal" /></label>

            <div>
              <div className="mb-3 flex items-center justify-between"><h3 className="text-xl font-extrabold">Тренировки клиента</h3><button onClick={() => updatePlan({ workouts: [...selected.workouts, emptyWorkout(selected.workouts.length)] })} className="rounded-lg border border-border-default px-3 py-2 text-xs font-bold uppercase">Добавить тренировку</button></div>
              <div className="space-y-4">
                {selected.workouts.map((workout) => (
                  <div key={workout.id} className="rounded-2xl border border-border-default p-4">
                    <div className="grid gap-3 md:grid-cols-4">
                      <input value={workout.title} onChange={(e) => updateWorkout(workout.id, { title: e.target.value })} className="rounded-xl border border-border-default p-3" placeholder="Название" />
                      <input type="date" value={workout.date} onChange={(e) => updateWorkout(workout.id, { date: e.target.value })} className="rounded-xl border border-border-default p-3" />
                      <input value={workout.focus} onChange={(e) => updateWorkout(workout.id, { focus: e.target.value })} className="rounded-xl border border-border-default p-3" placeholder="Фокус" />
                      <select value={workout.status} onChange={(e) => updateWorkout(workout.id, { status: e.target.value as ClientPortalWorkout['status'] })} className="rounded-xl border border-border-default p-3"><option value="planned">План</option><option value="done">Выполнено</option><option value="missed">Пропуск</option></select>
                    </div>
                    <textarea value={workout.exercises.join('\n')} onChange={(e) => updateWorkout(workout.id, { exercises: e.target.value.split('\n').filter(Boolean) })} rows={4} className="mt-3 w-full rounded-xl border border-border-default p-3" placeholder="Каждое упражнение с новой строки" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
