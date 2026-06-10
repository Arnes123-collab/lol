'use client';

import { useEffect, useState } from 'react';
import { readClientPortalPlans } from '@/lib/client-portal/useClientPortal';
import type { ClientPortalPlan } from '@/lib/client-portal/defaultClientPortal';

function statusLabel(status: ClientPortalPlan['status']) {
  if (status === 'active') return 'Активен';
  if (status === 'pause') return 'Пауза';
  return 'Просрочен';
}

function daysLeft(endDate: string) {
  if (!endDate) return null;
  const end = new Date(`${endDate}T23:59:59`);
  const now = new Date();
  return Math.ceil((end.getTime() - now.getTime()) / 86400000);
}

export default function ClientDashboard() {
  const [plan, setPlan] = useState<ClientPortalPlan | null>(null);

  useEffect(() => {
    const id = window.localStorage.getItem('agashka_client_session_v1');
    const found = readClientPortalPlans().find((item) => item.id === id) || null;
    setPlan(found);
  }, []);

  if (!plan) {
    return (
      <main className="min-h-screen bg-bg-primary p-6 text-text-primary md:p-10">
        <div className="mx-auto max-w-xl rounded-3xl border border-border-default bg-white p-6 text-center shadow-sm">
          <h1 className="text-2xl font-extrabold">Нужно войти в кабинет</h1>
          <p className="mt-3 text-text-muted">Сессия клиента не найдена.</p>
          <a href="/client/login" className="mt-5 inline-block rounded-xl bg-accent-red px-5 py-3 text-sm font-bold uppercase text-white">Войти</a>
        </div>
      </main>
    );
  }

  const left = daysLeft(plan.endDate);

  return (
    <main className="min-h-screen bg-bg-primary p-6 text-text-primary md:p-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent-red">Личный кабинет</p>
            <h1 className="mt-2 text-3xl font-extrabold md:text-5xl">{plan.clientName}</h1>
            <p className="mt-2 text-text-muted">Тариф: {plan.tariff}</p>
          </div>
          <button onClick={() => { window.localStorage.removeItem('agashka_client_session_v1'); window.location.href = '/client/login'; }} className="rounded-xl border border-border-default bg-white px-5 py-3 text-xs font-bold uppercase text-text-muted">Выйти</button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-border-default bg-white p-5 shadow-sm"><p className="text-xs font-bold uppercase text-text-muted">Статус</p><p className="mt-2 text-2xl font-extrabold text-accent-red">{statusLabel(plan.status)}</p></div>
          <div className="rounded-2xl border border-border-default bg-white p-5 shadow-sm"><p className="text-xs font-bold uppercase text-text-muted">Период</p><p className="mt-2 text-xl font-extrabold">{plan.startDate || '—'} - {plan.endDate || '—'}</p></div>
          <div className="rounded-2xl border border-border-default bg-white p-5 shadow-sm"><p className="text-xs font-bold uppercase text-text-muted">Осталось дней</p><p className="mt-2 text-3xl font-extrabold text-success-green">{left === null ? '—' : Math.max(left, 0)}</p></div>
        </div>

        <div className="mt-6 rounded-2xl border border-border-default bg-white p-5 shadow-sm">
          <h2 className="text-xl font-extrabold">Комментарий тренера</h2>
          <p className="mt-2 whitespace-pre-line text-text-muted">{plan.coachComment || 'Комментарий пока не добавлен.'}</p>
        </div>

        <div className="mt-6 space-y-4">
          {plan.workouts.map((workout) => (
            <section key={workout.id} className="rounded-2xl border border-border-default bg-white p-5 shadow-sm">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div><h3 className="text-xl font-extrabold">{workout.title}</h3><p className="text-sm text-text-muted">{workout.date || 'Дата не указана'} • {workout.focus}</p></div>
                <span className="rounded-full bg-bg-primary px-4 py-2 text-xs font-bold uppercase text-text-muted">{workout.status === 'planned' ? 'План' : workout.status === 'done' ? 'Выполнено' : 'Пропуск'}</span>
              </div>
              <ul className="mt-4 space-y-2">
                {workout.exercises.map((exercise, index) => <li key={`${workout.id}-${index}`} className="rounded-xl bg-bg-primary p-3 text-sm font-medium">{index + 1}. {exercise}</li>)}
              </ul>
              <a href="/reports/new" className="mt-4 inline-block rounded-xl bg-accent-red px-5 py-3 text-xs font-bold uppercase text-white">Отправить отчёт</a>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
