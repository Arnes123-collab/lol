'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { SITE_CONFIG, TARIFFS } from '@/lib/siteConfig';

const STORAGE_KEY = 'agashka_stage10_saved_plans';

type SavedPlan = {
  id: string;
  createdAt: string;
  clientName: string;
  clientPhone: string;
  goal: string;
  tariffId: string;
  weeks: string;
  daysPerWeek: 3 | 4 | 5;
  coachNotes: string;
  exercises: Array<{
    id: string;
    day: string;
    name: string;
    sets: string;
    reps: string;
    weight: string;
    percent: string;
    rest: string;
    comment: string;
  }>;
};

function formatPrice(price: number, usd?: number) {
  if (price === 0) return 'Бесплатно';
  return `${price.toLocaleString('ru-RU')} ₸${usd ? ` (${usd} $)` : ''}`;
}

export default function SavedPlans() {
  const [plans, setPlans] = useState<SavedPlan[]>([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setPlans(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'));
  }, []);

  const totalExercises = useMemo(() => plans.reduce((sum, p) => sum + p.exercises.length, 0), [plans]);

  const removePlan = (id: string) => {
    const next = plans.filter((p) => p.id !== id);
    setPlans(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const copyWhatsApp = async (plan: SavedPlan) => {
    const tariff = TARIFFS.find((t) => t.id === plan.tariffId) || TARIFFS[0];
    const days = Array.from(new Set(plan.exercises.map((e) => e.day)));
    const lines = [
      `Здравствуйте, ${plan.clientName}!`,
      'Ваш тренировочный план готов.',
      '',
      `Цель: ${plan.goal}`,
      `Тариф: ${tariff.name} - ${formatPrice(tariff.price, tariff.usd)}`,
      `Срок: ${plan.weeks} нед.`,
      '',
      'Тренировки:',
      ...days.flatMap((day) => [
        `${day}:`,
        ...plan.exercises
          .filter((e) => e.day === day)
          .map((e, i) => `${i + 1}. ${e.name} - ${e.sets}×${e.reps}${e.weight ? `, ${e.weight} кг` : ''}${e.percent ? `, ${e.percent}%` : ''}`),
        '',
      ]),
      `Рекомендации: ${plan.coachNotes}`,
      '',
      `С вами, как всегда, ${SITE_CONFIG.instagram} из Казахстана`,
    ];
    await navigator.clipboard.writeText(lines.join('\n'));
    setMessage('План скопирован для WhatsApp.');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary p-4 md:p-8 font-body">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-border-default pb-5 mb-6">
          <div>
            <Link href="/admin/plan-builder" className="text-accent-gold text-xs uppercase">← Конструктор плана</Link>
            <h1 className="text-2xl md:text-4xl font-display uppercase text-accent-gold mt-2">Сохранённые планы</h1>
            <p className="text-text-muted text-sm mt-2">Планы сохраняются локально в браузере. Для боевого режима следующий шаг - Supabase.</p>
          </div>
          <div className="bg-bg-card border border-border-default rounded p-4 text-sm">
            <div>Планов: <b className="text-accent-gold">{plans.length}</b></div>
            <div>Упражнений: <b className="text-accent-gold">{totalExercises}</b></div>
          </div>
        </div>
        {message && <div className="mb-4 border border-green-400 bg-green-500/10 text-green-300 p-3 rounded text-sm">{message}</div>}
        {plans.length === 0 ? (
          <div className="bg-bg-card border border-border-default rounded p-8 text-center text-text-muted">Пока нет сохранённых планов.</div>
        ) : (
          <div className="grid gap-4">
            {plans.map((plan) => {
              const tariff = TARIFFS.find((t) => t.id === plan.tariffId) || TARIFFS[0];
              return (
                <div key={plan.id} className="bg-bg-card border border-border-default rounded-lg p-5">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-bold">{plan.clientName}</h2>
                      <p className="text-text-muted text-sm mt-1">{plan.clientPhone}</p>
                      <p className="text-sm mt-3">{plan.goal}</p>
                      <p className="text-accent-gold text-sm mt-3">{tariff.name} - {formatPrice(tariff.price, tariff.usd)} - {plan.weeks} нед.</p>
                      <p className="text-xs text-text-muted mt-1">Создан: {new Date(plan.createdAt).toLocaleString('ru-RU')}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button onClick={() => copyWhatsApp(plan)} className="px-4 py-2 border border-blue-400 text-blue-300 rounded text-xs uppercase font-bold">WhatsApp</button>
                      <button onClick={() => window.print()} className="px-4 py-2 border border-border-default text-text-muted rounded text-xs uppercase font-bold">Печать</button>
                      <button onClick={() => removePlan(plan.id)} className="px-4 py-2 border border-red-400 text-red-300 rounded text-xs uppercase font-bold">Удалить</button>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {Array.from(new Set(plan.exercises.map((e) => e.day))).map((day) => (
                      <div key={day} className="border border-border-default rounded p-3">
                        <h3 className="text-accent-gold font-bold text-sm mb-2">{day}</h3>
                        {plan.exercises.filter((e) => e.day === day).map((e, i) => (
                          <div key={e.id} className="text-sm text-text-muted mb-1">{i + 1}. {e.name} - {e.sets}×{e.reps} {e.weight && `${e.weight} кг`} {e.percent && `${e.percent}%`}</div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
