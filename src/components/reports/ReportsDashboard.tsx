'use client';

import { useEffect, useMemo, useState } from 'react';
import type { ClientTrainingReport, TrainingReportStatus } from '@/types/report';
import {
  buildReportSummary,
  buildWhatsAppReportText,
  formatReportDate,
  painBadgeClass,
  painZoneLabels,
  reportStatusLabels,
  statusBadgeClass,
} from '@/lib/reports/reportUtils';

type Props = {
  demoReports: ClientTrainingReport[];
};

type Filter = 'all' | TrainingReportStatus | 'high_pain';

export default function ReportsDashboard({ demoReports }: Props) {
  const [localReports, setLocalReports] = useState<ClientTrainingReport[]>([]);
  const [filter, setFilter] = useState<Filter>('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('agashka_training_reports') || '[]') as ClientTrainingReport[];
      setLocalReports(saved);
    } catch {
      setLocalReports([]);
    }
  }, []);

  const reports = useMemo(() => [...localReports, ...demoReports], [localReports, demoReports]);
  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return reports.filter((report) => {
      const matchesSearch = !query || report.clientName.toLowerCase().includes(query) || report.trainingDay?.toLowerCase().includes(query) || report.planTitle?.toLowerCase().includes(query);
      const matchesFilter = filter === 'all' || (filter === 'high_pain' ? report.painLevel >= 7 : report.status === filter);
      return matchesSearch && matchesFilter;
    });
  }, [reports, filter, search]);

  const summary = useMemo(() => buildReportSummary(reports), [reports]);

  async function copyReport(report: ClientTrainingReport) {
    await navigator.clipboard.writeText(buildWhatsAppReportText(report));
    alert('Отчёт скопирован');
  }

  function deleteLocalReport(id: string) {
    const next = localReports.filter((report) => report.id !== id);
    setLocalReports(next);
    localStorage.setItem('agashka_training_reports', JSON.stringify(next));
  }

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4 text-sm text-yellow-200">
        Сейчас отчёты работают в демо-режиме и через localStorage. Это нормально для 8-го этапа без личного кабинета. Следующий шаг - сохранить отчёты в Supabase.
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        <SummaryCard label="Отчётов" value={summary.total} />
        <SummaryCard label="Выполнил" value={summary.completed} accent="green" />
        <SummaryCard label="Частично" value={summary.partial} accent="yellow" />
        <SummaryCard label="Не выполнил" value={summary.notCompleted} accent="red" />
        <SummaryCard label="Боль 7+" value={summary.highPain} accent="red" />
        <SummaryCard label="Средняя боль" value={`${summary.averagePain}/10`} />
      </div>

      <div className="bg-bg-card border border-border-default rounded-xl p-4 grid grid-cols-1 md:grid-cols-3 gap-3 no-print">
        <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Поиск: клиент, программа, день" className="w-full rounded-lg bg-bg-secondary border border-border-default px-4 py-3 text-sm outline-none focus:border-accent-gold" />
        <select value={filter} onChange={(event) => setFilter(event.target.value as Filter)} className="w-full rounded-lg bg-bg-secondary border border-border-default px-4 py-3 text-sm outline-none focus:border-accent-gold">
          <option value="all">Все отчёты</option>
          <option value="completed">Выполнил</option>
          <option value="partial">Частично</option>
          <option value="not_completed">Не выполнил</option>
          <option value="high_pain">Боль 7+</option>
        </select>
        <button type="button" onClick={() => window.print()} className="rounded-lg border border-accent-gold px-4 py-3 text-sm font-bold text-accent-gold">Печатный отчёт</button>
      </div>

      <div className="space-y-4">
        {filtered.map((report) => {
          const isLocal = report.id.startsWith('local-report-');
          return (
            <article key={report.id} className="rounded-xl bg-bg-card border border-border-default p-4 md:p-5 report-card">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${statusBadgeClass(report.status)}`}>{reportStatusLabels[report.status]}</span>
                    <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${painBadgeClass(report.painLevel)}`}>Боль {report.painLevel}/10</span>
                    {isLocal && <span className="inline-flex rounded-full border border-accent-gold/40 bg-accent-gold/10 px-3 py-1 text-xs font-bold text-accent-gold">Новый</span>}
                  </div>
                  <h2 className="text-2xl text-text-primary">{report.clientName}</h2>
                  <p className="text-sm text-text-muted">{formatReportDate(report.trainingDate)} · {report.trainingDay || 'Тренировка не указана'}</p>
                  {report.planTitle && <p className="text-sm text-accent-gold mt-1">{report.planTitle}</p>}
                </div>
                <div className="flex flex-wrap gap-2 no-print">
                  <button type="button" onClick={() => copyReport(report)} className="rounded-lg border border-accent-gold px-3 py-2 text-xs font-bold text-accent-gold">Скопировать</button>
                  {isLocal && <button type="button" onClick={() => deleteLocalReport(report.id)} className="rounded-lg border border-red-400/40 px-3 py-2 text-xs font-bold text-red-300">Удалить</button>}
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
                <Metric label="Самочувствие" value={`${report.mood}/10`} />
                <Metric label="Энергия" value={`${report.energy}/10`} />
                <Metric label="Где болит" value={painZoneLabels[report.painZone]} />
                <Metric label="Вес тела" value={report.bodyweight ? `${report.bodyweight} кг` : '-'} />
                <Metric label="WhatsApp" value={report.whatsapp || '-'} />
              </div>

              <div className="mt-5 overflow-x-auto rounded-lg border border-border-default">
                <table className="w-full min-w-[720px] text-left text-sm">
                  <thead className="bg-bg-secondary text-text-muted uppercase text-[11px]">
                    <tr>
                      <th className="p-3">Упражнение</th>
                      <th className="p-3">Вес</th>
                      <th className="p-3">Подходы</th>
                      <th className="p-3">Повторы</th>
                      <th className="p-3">RPE</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-default">
                    {report.workingSets.map((set) => (
                      <tr key={set.id}>
                        <td className="p-3 font-bold">{set.exerciseName || '-'}</td>
                        <td className="p-3">{set.weight || '-'} кг</td>
                        <td className="p-3">{set.sets || '-'}</td>
                        <td className="p-3">{set.reps || '-'}</td>
                        <td className="p-3">{set.rpe || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {(report.clientComment || report.coachQuestion || report.videoUrl) && (
                <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                  {report.clientComment && <Note title="Комментарий" text={report.clientComment} />}
                  {report.coachQuestion && <Note title="Вопрос тренеру" text={report.coachQuestion} />}
                  {report.videoUrl && <Note title="Видео техники" text={report.videoUrl} />}
                </div>
              )}
            </article>
          );
        })}
      </div>

      {filtered.length === 0 && <div className="rounded-xl bg-bg-card border border-border-default p-8 text-center text-text-muted">Отчётов по этим фильтрам нет.</div>}
    </div>
  );
}

function SummaryCard({ label, value, accent }: { label: string; value: string | number; accent?: 'green' | 'red' | 'yellow' }) {
  const accentClass = accent === 'green' ? 'text-green-300' : accent === 'red' ? 'text-red-300' : accent === 'yellow' ? 'text-yellow-300' : 'text-accent-gold';
  return <div className="rounded-xl bg-bg-card border border-border-default p-4"><div className="text-[11px] uppercase text-text-muted">{label}</div><div className={`mt-2 text-2xl font-display font-bold ${accentClass}`}>{value}</div></div>;
}

function Metric({ label, value }: { label: string; value: string }) {
  return <div className="rounded-lg bg-bg-secondary border border-border-default p-3"><div className="text-[11px] uppercase text-text-muted">{label}</div><div className="mt-1 font-bold">{value}</div></div>;
}

function Note({ title, text }: { title: string; text: string }) {
  return <div className="rounded-lg bg-bg-secondary border border-border-default p-3"><div className="text-[11px] uppercase text-accent-gold mb-1">{title}</div><p className="text-text-primary whitespace-pre-wrap">{text}</p></div>;
}
