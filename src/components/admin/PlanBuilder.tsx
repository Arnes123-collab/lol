'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { EXERCISE_LIBRARY, EXERCISE_STORAGE_KEY, TRAINING_DAY_OPTIONS, type ExerciseLibraryItem } from '@/lib/plan-builder/exerciseLibrary';
import { SITE_CONFIG, TARIFFS } from '@/lib/siteConfig';

type PlanExercise = {
  id: string;
  day: string;
  exerciseId: string;
  name: string;
  category: string;
  imageUrl: string;
  sets: string;
  reps: string;
  weight: string;
  percent: string;
  rest: string;
  comment: string;
};

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
  exercises: PlanExercise[];
};

const STORAGE_KEY = 'agashka_stage10_saved_plans';

function makeId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function formatPrice(price: number, usd?: number) {
  if (price === 0) return 'Бесплатно';
  return `${price.toLocaleString('ru-RU')} ₸${usd ? ` (${usd} $)` : ''}`;
}

export default function PlanBuilder() {
  const [clientName, setClientName] = useState('Иван');
  const [clientPhone, setClientPhone] = useState('+7 747 845 7055');
  const [goal, setGoal] = useState('Укрепить жим лёжа, убрать боль в плечах, тренироваться без перегруза суставов');
  const [tariffId, setTariffId] = useState<(typeof TARIFFS)[number]['id']>('plan_month');
  const [weeks, setWeeks] = useState('4');
  const [daysPerWeek, setDaysPerWeek] = useState<3 | 4 | 5>(3);
  const [coachNotes, setCoachNotes] = useState('Работать без боли. Если боль выше 5/10 - снизить вес и написать тренеру. Техника важнее веса.');
  const [exerciseLibrary, setExerciseLibrary] = useState<ExerciseLibraryItem[]>(EXERCISE_LIBRARY.filter((exercise) => exercise.isActive));
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [selectedExerciseId, setSelectedExerciseId] = useState(EXERCISE_LIBRARY[0].id);
  const [selectedDay, setSelectedDay] = useState<string>(TRAINING_DAY_OPTIONS[3][0]);
  const [sets, setSets] = useState('4');
  const [reps, setReps] = useState('5');
  const [weight, setWeight] = useState('80');
  const [percent, setPercent] = useState('70');
  const [rest, setRest] = useState('3 мин');
  const [comment, setComment] = useState('Контрольная техника, без отказа.');
  const [exercises, setExercises] = useState<PlanExercise[]>([]);
  const [savedMessage, setSavedMessage] = useState('');
  const planRef = useRef<HTMLDivElement>(null);

  const days = TRAINING_DAY_OPTIONS[daysPerWeek];
  const selectedTariff = TARIFFS.find((t) => t.id === tariffId) || TARIFFS[0];
  const categories = ['Все', ...Array.from(new Set(exerciseLibrary.map((e) => e.category)))];
  const filteredLibrary = selectedCategory === 'Все' ? exerciseLibrary : exerciseLibrary.filter((e) => e.category === selectedCategory);
  const selectedExercise = exerciseLibrary.find((e) => e.id === selectedExerciseId) || exerciseLibrary[0] || EXERCISE_LIBRARY[0];

  useEffect(() => {
    const stored = localStorage.getItem(EXERCISE_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as ExerciseLibraryItem[];
      const active = parsed.filter((exercise) => exercise.isActive);
      setExerciseLibrary(active.length ? active : EXERCISE_LIBRARY.filter((exercise) => exercise.isActive));
    }
  }, []);

  useEffect(() => {
    setSelectedDay(TRAINING_DAY_OPTIONS[daysPerWeek][0]);
  }, [daysPerWeek]);

  useEffect(() => {
    setSets(selectedExercise.defaultSets);
    setReps(selectedExercise.defaultReps);
    setRest(selectedExercise.defaultRest);
    setComment(selectedExercise.coachTip);
  }, [selectedExerciseId, selectedExercise.defaultSets, selectedExercise.defaultReps, selectedExercise.defaultRest, selectedExercise.coachTip]);

  const grouped = useMemo(() => days.map((day) => ({ day, rows: exercises.filter((e) => e.day === day) })), [days, exercises]);

  const addExercise = () => {
    const item: PlanExercise = {
      id: makeId(),
      day: selectedDay,
      exerciseId: selectedExercise.id,
      name: selectedExercise.name,
      category: selectedExercise.category,
      imageUrl: selectedExercise.imageUrl,
      sets,
      reps,
      weight,
      percent,
      rest,
      comment,
    };
    setExercises((prev) => [...prev, item]);
  };

  const removeExercise = (id: string) => setExercises((prev) => prev.filter((e) => e.id !== id));

  const savePlan = () => {
    const newPlan: SavedPlan = {
      id: makeId(),
      createdAt: new Date().toISOString(),
      clientName,
      clientPhone,
      goal,
      tariffId,
      weeks,
      daysPerWeek,
      coachNotes,
      exercises,
    };
    const current = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') as SavedPlan[];
    localStorage.setItem(STORAGE_KEY, JSON.stringify([newPlan, ...current]));
    setSavedMessage('План сохранён в браузере. Его можно открыть, скачать PDF или скопировать для WhatsApp.');
    setTimeout(() => setSavedMessage(''), 3500);
  };

  const copyWhatsApp = async () => {
    const lines = [
      `Здравствуйте, ${clientName}!`,
      'Ваш тренировочный план готов.',
      '',
      `Цель: ${goal}`,
      `Тариф: ${selectedTariff.name} - ${formatPrice(selectedTariff.price, selectedTariff.usd)}`,
      `Срок: ${weeks} нед.`,
      '',
      'Тренировки:',
      ...grouped.flatMap(({ day, rows }) => [
        `${day}:`,
        ...(rows.length ? rows.map((e, i) => `${i + 1}. ${e.name} - ${e.sets}×${e.reps}${e.weight ? `, ${e.weight} кг` : ''}${e.percent ? `, ${e.percent}%` : ''}`) : ['Пока не заполнено']),
        '',
      ]),
      `Рекомендации: ${coachNotes}`,
      '',
      `С вами, как всегда, ${SITE_CONFIG.instagram} из Казахстана`,
    ];
    await navigator.clipboard.writeText(lines.join('\n'));
    setSavedMessage('Текст скопирован для WhatsApp.');
    setTimeout(() => setSavedMessage(''), 3000);
  };

  const downloadPdf = async () => {
    const html2canvas = (await import('html2canvas')).default;
    const { jsPDF } = await import('jspdf');
    if (!planRef.current) return;
    const canvas = await html2canvas(planRef.current, { scale: 2, backgroundColor: '#ffffff' });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }
    pdf.save(`plan-${clientName.toLowerCase().replace(/\s+/g, '-')}.pdf`);
  };

  const printPlan = () => window.print();

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary p-4 md:p-8 font-body">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-border-default pb-5 mb-6">
          <div>
            <Link href="/admin" className="text-accent-gold text-xs uppercase">← Админка</Link>
            <h1 className="text-2xl md:text-4xl font-display uppercase text-accent-gold mt-2">Конструктор тренировочного плана</h1>
            <p className="text-text-muted text-sm mt-2">10-11 этап: собрать план клиенту из профессиональной базы упражнений, сохранить, скачать PDF и отправить в WhatsApp.</p>
          </div>
          <div className="flex gap-2"><Link href="/admin/exercises" className="px-4 py-3 bg-bg-card border border-green-400 text-green-300 rounded text-xs uppercase font-bold text-center">База упражнений</Link><Link href="/admin/plan-builder/saved" className="px-4 py-3 bg-bg-card border border-accent-gold text-accent-gold rounded text-xs uppercase font-bold text-center">Сохранённые планы</Link></div>
        </div>

        {savedMessage && <div className="mb-5 rounded border border-green-400 bg-green-500/10 p-3 text-green-300 text-sm">{savedMessage}</div>}

        <div className="grid grid-cols-1 xl:grid-cols-[420px_1fr] gap-6">
          <div className="space-y-5 no-print">
            <section className="bg-bg-card border border-border-default rounded-lg p-5">
              <h2 className="font-display text-accent-gold uppercase text-xl mb-4">Данные клиента</h2>
              <div className="space-y-3">
                <input value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder="Имя клиента" className="w-full p-3 bg-bg-primary border border-border-default rounded text-sm" />
                <input value={clientPhone} onChange={(e) => setClientPhone(e.target.value)} placeholder="Телефон клиента" className="w-full p-3 bg-bg-primary border border-border-default rounded text-sm" />
                <textarea value={goal} onChange={(e) => setGoal(e.target.value)} rows={3} placeholder="Цель клиента" className="w-full p-3 bg-bg-primary border border-border-default rounded text-sm" />
                <div className="grid grid-cols-2 gap-3">
                  <select value={tariffId} onChange={(e) => setTariffId(e.target.value as (typeof TARIFFS)[number]['id'])} className="p-3 bg-bg-primary border border-border-default rounded text-sm">
                    {TARIFFS.map((t) => <option key={t.id} value={t.id}>{t.name} - {formatPrice(t.price, t.usd)}</option>)}
                  </select>
                  <select value={weeks} onChange={(e) => setWeeks(e.target.value)} className="p-3 bg-bg-primary border border-border-default rounded text-sm">
                    <option value="1">1 неделя</option>
                    <option value="2">2 недели</option>
                    <option value="4">4 недели</option>
                    <option value="8">8 недель</option>
                    <option value="12">12 недель</option>
                    <option value="16">16 недель</option>
                  </select>
                </div>
                <select value={daysPerWeek} onChange={(e) => setDaysPerWeek(Number(e.target.value) as 3 | 4 | 5)} className="w-full p-3 bg-bg-primary border border-border-default rounded text-sm">
                  <option value={3}>3 тренировки в неделю</option>
                  <option value={4}>4 тренировки в неделю</option>
                  <option value={5}>5 тренировок в неделю</option>
                </select>
                <textarea value={coachNotes} onChange={(e) => setCoachNotes(e.target.value)} rows={3} placeholder="Комментарий тренера" className="w-full p-3 bg-bg-primary border border-border-default rounded text-sm" />
              </div>
            </section>

            <section className="bg-bg-card border border-border-default rounded-lg p-5">
              <h2 className="font-display text-accent-gold uppercase text-xl mb-4">Добавить упражнение</h2>
              <div className="space-y-3">
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full p-3 bg-bg-primary border border-border-default rounded text-sm">
                  {categories.map((c) => <option key={c}>{c}</option>)}
                </select>
                <select value={selectedExerciseId} onChange={(e) => setSelectedExerciseId(e.target.value)} className="w-full p-3 bg-bg-primary border border-border-default rounded text-sm">
                  {filteredLibrary.map((e) => <option key={e.id} value={e.id}>{e.name} - {e.category} / {e.subcategory}</option>)}
                </select>
                <div className="rounded border border-border-default p-3 bg-bg-primary flex gap-3">
                  <img src={selectedExercise.imageUrl} alt={selectedExercise.name} className="h-20 w-24 rounded object-cover bg-black" onError={(e) => { e.currentTarget.src = '/exercises/default.jpg'; }} />
                  <div>
                    <div className="font-bold text-sm">{selectedExercise.name}</div>
                    <div className="text-xs text-accent-gold mt-1">{selectedExercise.category} / {selectedExercise.subcategory}</div>
                    <p className="text-xs text-text-muted mt-2">{selectedExercise.coachTip}</p>
                  </div>
                </div>
                <select value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)} className="w-full p-3 bg-bg-primary border border-border-default rounded text-sm">
                  {days.map((d) => <option key={d}>{d}</option>)}
                </select>
                <div className="grid grid-cols-2 gap-3">
                  <input value={sets} onChange={(e) => setSets(e.target.value)} placeholder="Подходы" className="p-3 bg-bg-primary border border-border-default rounded text-sm" />
                  <input value={reps} onChange={(e) => setReps(e.target.value)} placeholder="Повторения" className="p-3 bg-bg-primary border border-border-default rounded text-sm" />
                  <input value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Вес, кг" className="p-3 bg-bg-primary border border-border-default rounded text-sm" />
                  <input value={percent} onChange={(e) => setPercent(e.target.value)} placeholder="Процент" className="p-3 bg-bg-primary border border-border-default rounded text-sm" />
                </div>
                <input value={rest} onChange={(e) => setRest(e.target.value)} placeholder="Отдых" className="w-full p-3 bg-bg-primary border border-border-default rounded text-sm" />
                <textarea value={comment} onChange={(e) => setComment(e.target.value)} rows={3} placeholder="Комментарий к упражнению" className="w-full p-3 bg-bg-primary border border-border-default rounded text-sm" />
                <button onClick={addExercise} className="w-full bg-accent-gold text-white font-bold uppercase rounded py-3 text-sm">+ Добавить в план</button>
              </div>
            </section>
          </div>

          <div>
            <div className="no-print flex flex-wrap gap-3 mb-4">
              <button onClick={savePlan} className="px-4 py-3 bg-accent-gold text-white rounded text-xs uppercase font-bold">Сохранить план</button>
              <button onClick={downloadPdf} className="px-4 py-3 bg-bg-card border border-green-400 text-green-300 rounded text-xs uppercase font-bold">Скачать PDF</button>
              <button onClick={copyWhatsApp} className="px-4 py-3 bg-bg-card border border-blue-400 text-blue-300 rounded text-xs uppercase font-bold">Скопировать для WhatsApp</button>
              <button onClick={printPlan} className="px-4 py-3 bg-bg-card border border-border-default text-text-muted rounded text-xs uppercase font-bold">Печатный вид</button>
            </div>

            <div ref={planRef} className="bg-white text-white rounded-lg p-5 md:p-8 shadow-xl print-plan">
              <div className="border-b border-gray-300 pb-5 mb-5">
                <div className="text-xs tracking-[0.3em] uppercase text-gray-500">{SITE_CONFIG.brand}</div>
                <h2 className="text-2xl md:text-4xl font-black uppercase mt-2">Персональная тренировочная программа</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5 text-sm">
                  <div><b>Клиент:</b> {clientName}</div>
                  <div><b>Телефон:</b> {clientPhone}</div>
                  <div><b>Тариф:</b> {selectedTariff.name} - {formatPrice(selectedTariff.price, selectedTariff.usd)}</div>
                  <div><b>Срок:</b> {weeks} нед. / {daysPerWeek} тренировки в неделю</div>
                  <div className="md:col-span-2"><b>Цель:</b> {goal}</div>
                </div>
              </div>

              {grouped.map(({ day, rows }) => (
                <section key={day} className="mb-6 break-inside-avoid">
                  <h3 className="text-xl font-black uppercase border-b border-gray-300 pb-2 mb-3">{day}</h3>
                  {rows.length === 0 ? <p className="text-sm text-gray-500">День пока не заполнен.</p> : <div className="space-y-3">
                    {rows.map((e, index) => (
                      <div key={e.id} className="border border-gray-200 rounded-lg p-3 grid grid-cols-[82px_1fr] gap-3 break-inside-avoid">
                        <img src={e.imageUrl} alt={e.name} className="h-20 w-20 rounded object-cover bg-gray-200" onError={(event) => { event.currentTarget.src = '/exercises/default.jpg'; }} />
                        <div>
                          <div className="font-black text-base">{index + 1}. {e.name}</div>
                          <div className="text-sm mt-1">{e.sets}×{e.reps} {e.weight ? `- ${e.weight} кг` : ''} {e.percent ? `- ${e.percent}%` : ''} {e.rest ? `- отдых ${e.rest}` : ''}</div>
                          {e.comment && <div className="text-xs text-gray-600 mt-2"><b>Комментарий:</b> {e.comment}</div>}
                          <button onClick={() => removeExercise(e.id)} className="no-print text-red-600 text-xs font-bold uppercase mt-2">Удалить</button>
                        </div>
                      </div>
                    ))}
                  </div>}
                </section>
              ))}

              <div className="border-t border-gray-300 pt-5 mt-6">
                <h3 className="font-black uppercase mb-2">Рекомендации тренера</h3>
                <p className="text-sm leading-relaxed">{coachNotes}</p>
                <p className="text-sm mt-5 font-bold">С вами, как всегда, {SITE_CONFIG.instagram} из Казахстана</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
