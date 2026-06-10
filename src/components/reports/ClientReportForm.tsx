'use client';

import { useMemo, useState } from 'react';
import type { ClientTrainingReport, PainZone, TrainingReportStatus, WorkingSetReport } from '@/types/report';
import { buildWhatsAppReportText, painZoneLabels } from '@/lib/reports/reportUtils';

const emptySet = (index: number): WorkingSetReport => ({
  id: `set-${Date.now()}-${index}`,
  exerciseName: '',
  weight: '',
  sets: '',
  reps: '',
  rpe: '',
});

export default function ClientReportForm() {
  const [clientName, setClientName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [trainingDate, setTrainingDate] = useState(new Date().toISOString().slice(0, 10));
  const [planTitle, setPlanTitle] = useState('');
  const [trainingDay, setTrainingDay] = useState('');
  const [status, setStatus] = useState<TrainingReportStatus>('completed');
  const [bodyweight, setBodyweight] = useState('');
  const [mood, setMood] = useState(7);
  const [energy, setEnergy] = useState(7);
  const [painLevel, setPainLevel] = useState(0);
  const [painZone, setPainZone] = useState<PainZone>('none');
  const [workingSets, setWorkingSets] = useState<WorkingSetReport[]>([emptySet(1), emptySet(2), emptySet(3)]);
  const [clientComment, setClientComment] = useState('');
  const [coachQuestion, setCoachQuestion] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [message, setMessage] = useState('');

  const canSubmit = useMemo(() => clientName.trim().length >= 2 && trainingDate, [clientName, trainingDate]);

  function updateSet(id: string, field: keyof WorkingSetReport, value: string) {
    setWorkingSets((sets) => sets.map((set) => (set.id === id ? { ...set, [field]: value } : set)));
  }

  function addSet() {
    setWorkingSets((sets) => [...sets, emptySet(sets.length + 1)]);
  }

  function removeSet(id: string) {
    setWorkingSets((sets) => sets.filter((set) => set.id !== id));
  }

  function buildReport(): ClientTrainingReport {
    return {
      id: `local-report-${Date.now()}`,
      clientName: clientName.trim(),
      whatsapp: whatsapp.trim(),
      trainingDate,
      planTitle: planTitle.trim(),
      trainingDay: trainingDay.trim(),
      status,
      bodyweight: bodyweight.trim(),
      mood,
      energy,
      painLevel,
      painZone,
      workingSets: workingSets.filter((set) => set.exerciseName.trim() || set.weight.trim() || set.sets.trim() || set.reps.trim()),
      clientComment: clientComment.trim(),
      coachQuestion: coachQuestion.trim(),
      videoUrl: videoUrl.trim(),
      createdAt: new Date().toISOString(),
    };
  }

  function saveReport() {
    if (!canSubmit) {
      setMessage('Укажите имя клиента и дату тренировки.');
      return;
    }

    const report = buildReport();
    const existing = JSON.parse(localStorage.getItem('agashka_training_reports') || '[]') as ClientTrainingReport[];
    localStorage.setItem('agashka_training_reports', JSON.stringify([report, ...existing]));
    setMessage('Отчёт сохранён. Тренер увидит его в разделе отчётов на этом устройстве.');
  }

  async function copyForWhatsApp() {
    if (!canSubmit) {
      setMessage('Укажите имя клиента и дату тренировки.');
      return;
    }
    await navigator.clipboard.writeText(buildWhatsAppReportText(buildReport()));
    setMessage('Отчёт скопирован для WhatsApp.');
  }

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-accent-gold/40 bg-accent-gold/10 p-4 text-sm text-accent-gold">
        Это простая форма без личного кабинета. Клиент заполняет отчёт после тренировки, сохраняет его или копирует текст для WhatsApp.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Имя клиента" value={clientName} onChange={setClientName} placeholder="Например: Иван" required />
        <Field label="WhatsApp" value={whatsapp} onChange={setWhatsapp} placeholder="+7 ..." />
        <Field label="Дата тренировки" value={trainingDate} onChange={setTrainingDate} type="date" required />
        <Field label="Вес тела" value={bodyweight} onChange={setBodyweight} placeholder="Например: 89" />
        <Field label="Название программы" value={planTitle} onChange={setPlanTitle} placeholder="Например: Жим 2 недели" />
        <Field label="День тренировки" value={trainingDay} onChange={setTrainingDay} placeholder="Понедельник - тяжёлый жим" />
      </div>

      <div className="rounded-xl bg-bg-card border border-border-default p-4">
        <h2 className="text-xl text-accent-gold mb-4">Выполнение</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            ['completed', 'Выполнил'],
            ['partial', 'Частично'],
            ['not_completed', 'Не выполнил'],
          ].map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setStatus(value as TrainingReportStatus)}
              className={`rounded-lg border px-4 py-3 text-sm font-bold ${status === value ? 'border-accent-gold bg-accent-gold text-white' : 'border-border-default bg-bg-secondary text-text-primary'}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-xl bg-bg-card border border-border-default p-4 space-y-5">
        <h2 className="text-xl text-accent-gold">Самочувствие и боль</h2>
        <Range label="Самочувствие" value={mood} setValue={setMood} />
        <Range label="Энергия" value={energy} setValue={setEnergy} />
        <Range label="Боль" value={painLevel} setValue={setPainLevel} />
        <label className="block text-sm">
          <span className="mb-2 block text-text-muted">Где болит</span>
          <select
            value={painZone}
            onChange={(event) => setPainZone(event.target.value as PainZone)}
            className="w-full rounded-lg bg-bg-secondary border border-border-default px-4 py-3 outline-none focus:border-accent-gold"
          >
            {Object.entries(painZoneLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
        </label>
      </div>

      <div className="rounded-xl bg-bg-card border border-border-default p-4 space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-xl text-accent-gold">Рабочие веса</h2>
          <button type="button" onClick={addSet} className="rounded-lg border border-accent-gold px-3 py-2 text-xs font-bold text-accent-gold">+ упражнение</button>
        </div>
        <div className="space-y-3">
          {workingSets.map((set) => (
            <div key={set.id} className="grid grid-cols-1 md:grid-cols-6 gap-2 rounded-lg bg-bg-secondary p-3">
              <input value={set.exerciseName} onChange={(event) => updateSet(set.id, 'exerciseName', event.target.value)} placeholder="Упражнение" className="md:col-span-2 rounded bg-bg-primary border border-border-default px-3 py-2 text-sm" />
              <input value={set.weight} onChange={(event) => updateSet(set.id, 'weight', event.target.value)} placeholder="кг" className="rounded bg-bg-primary border border-border-default px-3 py-2 text-sm" />
              <input value={set.sets} onChange={(event) => updateSet(set.id, 'sets', event.target.value)} placeholder="подх." className="rounded bg-bg-primary border border-border-default px-3 py-2 text-sm" />
              <input value={set.reps} onChange={(event) => updateSet(set.id, 'reps', event.target.value)} placeholder="повт." className="rounded bg-bg-primary border border-border-default px-3 py-2 text-sm" />
              <div className="flex gap-2">
                <input value={set.rpe} onChange={(event) => updateSet(set.id, 'rpe', event.target.value)} placeholder="RPE" className="min-w-0 flex-1 rounded bg-bg-primary border border-border-default px-3 py-2 text-sm" />
                <button type="button" onClick={() => removeSet(set.id)} className="rounded border border-red-400/40 px-3 text-red-300">×</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextArea label="Комментарий после тренировки" value={clientComment} onChange={setClientComment} placeholder="Что чувствовали, что получилось, что было тяжело" />
        <TextArea label="Вопрос тренеру" value={coachQuestion} onChange={setCoachQuestion} placeholder="Что нужно уточнить у тренера" />
      </div>

      <Field label="Ссылка на видео техники - позже можно подключить загрузку файла" value={videoUrl} onChange={setVideoUrl} placeholder="Пока можно вставить ссылку на видео" />

      {message && <div className="rounded-lg border border-green-400/30 bg-green-500/10 p-4 text-sm text-green-300">{message}</div>}

      <div className="flex flex-col sm:flex-row gap-3">
        <button type="button" onClick={saveReport} className="rounded-lg bg-accent-gold px-5 py-4 text-sm font-bold uppercase text-white">Сохранить отчёт</button>
        <button type="button" onClick={copyForWhatsApp} className="rounded-lg border border-accent-gold px-5 py-4 text-sm font-bold uppercase text-accent-gold">Скопировать для WhatsApp</button>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder, type = 'text', required = false }: { label: string; value: string; onChange: (value: string) => void; placeholder?: string; type?: string; required?: boolean }) {
  return (
    <label className="block text-sm">
      <span className="mb-2 block text-text-muted">{label}{required && <span className="text-accent-gold"> *</span>}</span>
      <input value={value} type={type} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className="w-full rounded-lg bg-bg-card border border-border-default px-4 py-3 outline-none focus:border-accent-gold" />
    </label>
  );
}

function TextArea({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (value: string) => void; placeholder?: string }) {
  return (
    <label className="block text-sm">
      <span className="mb-2 block text-text-muted">{label}</span>
      <textarea value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} rows={5} className="w-full rounded-lg bg-bg-card border border-border-default px-4 py-3 outline-none focus:border-accent-gold" />
    </label>
  );
}

function Range({ label, value, setValue }: { label: string; value: number; setValue: (value: number) => void }) {
  return (
    <label className="block">
      <div className="mb-2 flex items-center justify-between text-sm"><span className="text-text-muted">{label}</span><span className="font-bold text-accent-gold">{value}/10</span></div>
      <input type="range" min="0" max="10" value={value} onChange={(event) => setValue(Number(event.target.value))} className="w-full" />
    </label>
  );
}
