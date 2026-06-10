import type { ClientTrainingReport, PainZone, TrainingReportStatus } from '@/types/report';

export const reportStatusLabels: Record<TrainingReportStatus, string> = {
  completed: 'Выполнил',
  not_completed: 'Не выполнил',
  partial: 'Частично',
};

export const painZoneLabels: Record<PainZone, string> = {
  none: 'Нет боли',
  shoulder: 'Плечо',
  elbow: 'Локоть',
  wrist: 'Кисть',
  lower_back: 'Поясница',
  knee: 'Колено',
  hip: 'Тазобедренный',
  other: 'Другое',
};

export function statusBadgeClass(status: TrainingReportStatus) {
  if (status === 'completed') return 'border-green-400/40 bg-green-500/10 text-green-300';
  if (status === 'partial') return 'border-yellow-400/40 bg-yellow-500/10 text-yellow-300';
  return 'border-red-400/40 bg-red-500/10 text-red-300';
}

export function painBadgeClass(level: number) {
  if (level >= 7) return 'border-red-400/40 bg-red-500/10 text-red-300';
  if (level >= 4) return 'border-yellow-400/40 bg-yellow-500/10 text-yellow-300';
  return 'border-green-400/40 bg-green-500/10 text-green-300';
}

export function formatReportDate(value: string) {
  if (!value) return '-';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat('ru-RU').format(date);
}

export function buildReportSummary(reports: ClientTrainingReport[]) {
  const total = reports.length;
  const completed = reports.filter((report) => report.status === 'completed').length;
  const partial = reports.filter((report) => report.status === 'partial').length;
  const notCompleted = reports.filter((report) => report.status === 'not_completed').length;
  const highPain = reports.filter((report) => report.painLevel >= 7).length;
  const averagePain = total ? Math.round((reports.reduce((sum, report) => sum + report.painLevel, 0) / total) * 10) / 10 : 0;

  return { total, completed, partial, notCompleted, highPain, averagePain };
}

export function buildWhatsAppReportText(report: ClientTrainingReport) {
  const sets = report.workingSets
    .filter((set) => set.exerciseName.trim())
    .map((set, index) => `${index + 1}. ${set.exerciseName} - ${set.weight || '-'} кг, ${set.sets || '-'}×${set.reps || '-'}${set.rpe ? `, RPE ${set.rpe}` : ''}`)
    .join('\n');

  return [
    `Отчёт после тренировки`,
    `Клиент: ${report.clientName}`,
    `Дата: ${formatReportDate(report.trainingDate)}`,
    `Тренировка: ${report.trainingDay || '-'}`,
    `Статус: ${reportStatusLabels[report.status]}`,
    `Самочувствие: ${report.mood}/10`,
    `Энергия: ${report.energy}/10`,
    `Боль: ${report.painLevel}/10 (${painZoneLabels[report.painZone]})`,
    report.bodyweight ? `Вес тела: ${report.bodyweight} кг` : '',
    sets ? `\nРабочие веса:\n${sets}` : '',
    report.clientComment ? `\nКомментарий:\n${report.clientComment}` : '',
    report.coachQuestion ? `\nВопрос тренеру:\n${report.coachQuestion}` : '',
    report.videoUrl ? `\nВидео техники: ${report.videoUrl}` : '',
  ]
    .filter(Boolean)
    .join('\n');
}
