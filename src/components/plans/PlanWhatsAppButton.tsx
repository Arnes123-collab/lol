'use client';

import { useMemo, useState } from 'react';
import type { TrainingPlan } from '@/types/plan';

function buildWhatsAppText(plan: TrainingPlan) {
  const lines: string[] = [];
  lines.push(`Здравствуйте, ${plan.client.name}!`);
  lines.push('Ваш тренировочный план готов.');
  lines.push('');
  lines.push(`Цель: ${plan.client.goal || 'персональная тренировочная цель'}`);
  if (plan.startDate || plan.endDate) lines.push(`Период: ${plan.startDate || ''} - ${plan.endDate || ''}`);
  lines.push('');
  lines.push('Тренировки:');

  plan.weeks.forEach((week) => {
    lines.push(``);
    lines.push(`Неделя ${week.weekNumber}:`);
    week.days.forEach((day) => {
      lines.push(`${day.dayName}${day.focus ? ` - ${day.focus}` : ''}:`);
      day.exercises.forEach((exercise, index) => {
        const load = [exercise.weight, exercise.percent].filter(Boolean).join(' / ');
        lines.push(`${index + 1}. ${exercise.name} - ${exercise.sets}×${exercise.reps}${load ? ` - ${load}` : ''}`);
      });
    });
  });

  if (plan.coachNotes) {
    lines.push('');
    lines.push('Рекомендации:');
    lines.push(plan.coachNotes);
  }
  lines.push('');
  lines.push('С вами, как всегда, agashka.powerlifting из Казахстана');
  return lines.join('\n');
}

export default function PlanWhatsAppButton({ plan }: { plan: TrainingPlan }) {
  const [copied, setCopied] = useState(false);
  const text = useMemo(() => buildWhatsAppText(plan), [plan]);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2500);
  };

  return (
    <button onClick={copy} className="rounded-lg border border-green-700 bg-green-600 px-4 py-3 text-sm font-bold uppercase text-white hover:bg-green-700">
      {copied ? 'Текст скопирован для WhatsApp' : 'Скопировать для WhatsApp'}
    </button>
  );
}
