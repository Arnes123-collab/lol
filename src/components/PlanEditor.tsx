'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';

type Exercise = { id: string; name: string; category?: string | null };
type PlanItem = {
  id: string;
  training_day: string;
  exercise_order: number;
  sets: number | null;
  reps: string | null;
  weight: number | null;
  percent: number | null;
  rest_time: string | null;
  tempo: string | null;
  comment: string | null;
  exercise?: Exercise | null;
};

const days = ['Понедельник', 'Среда', 'Пятница', 'Суббота', 'Воскресенье'];

export default function PlanEditor({ planId }: { planId: string }) {
  const [items, setItems] = useState<PlanItem[]>([]);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  const loadData = useCallback(async () => {
    setError('');
    try {
      const [itemsRes, exercisesRes] = await Promise.all([
        fetch(`/api/training-plans/${planId}/items`, { cache: 'no-store' }),
        fetch('/api/exercises', { cache: 'no-store' }),
      ]);
      const itemsJson = await itemsRes.json();
      const exercisesJson = await exercisesRes.json();
      if (!itemsRes.ok) throw new Error(itemsJson.error || 'Не удалось загрузить упражнения плана');
      if (!exercisesRes.ok) throw new Error(exercisesJson.error || 'Не удалось загрузить справочник упражнений');
      setItems(itemsJson.data || []);
      setExercises(exercisesJson.data || []);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Ошибка загрузки данных');
    } finally {
      setLoading(false);
    }
  }, [planId]);

  useEffect(() => { loadData(); }, [loadData]);

  const grouped = useMemo(() => days.map((day) => ({ day, rows: items.filter((i) => i.training_day === day) })), [items]);

  const addItem = async (formData: FormData) => {
    setSaving(true);
    setError('');
    const payload = {
      training_day: String(formData.get('training_day') || ''),
      exercise_id: String(formData.get('exercise_id') || ''),
      exercise_order: Number(formData.get('exercise_order') || 1),
      sets: Number(formData.get('sets') || 0) || null,
      reps: String(formData.get('reps') || '').trim() || null,
      weight: Number(formData.get('weight') || 0) || null,
      percent: Number(formData.get('percent') || 0) || null,
      rest_time: String(formData.get('rest_time') || '').trim() || null,
      tempo: String(formData.get('tempo') || '').trim() || null,
      comment: String(formData.get('comment') || '').trim() || null,
    };
    try {
      const res = await fetch(`/api/training-plans/${planId}/items`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || json.error) throw new Error(json.error || 'Не удалось добавить упражнение');
      await loadData();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Ошибка сохранения');
    } finally {
      setSaving(false);
    }
  };

  const deleteItem = async (itemId: string) => {
    if (!confirm('Удалить упражнение из плана?')) return;
    setError('');
    const res = await fetch(`/api/training-plan-items/${itemId}`, { method: 'DELETE' });
    const json = await res.json();
    if (!res.ok || json.error) {
      setError(json.error || 'Не удалось удалить упражнение');
      return;
    }
    await loadData();
  };

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary p-4 md:p-8 font-body">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between gap-4"><Link href="/admin/plans" className="text-accent-gold text-xs">← Назад к планам</Link><Link href={`/plans/${planId}/view`} className="text-green-400 text-xs font-bold uppercase">Открыть PDF/WhatsApp →</Link></div>
        <h1 className="text-2xl md:text-3xl font-display text-accent-gold uppercase mt-3 mb-6">Редактор тренировочного плана</h1>
        {error && <div className="mb-4 border border-accent-red text-accent-red bg-bg-card p-3 rounded text-sm">{error}</div>}

        <form action={addItem} className="bg-bg-card p-5 rounded border border-border-default mb-8 grid grid-cols-1 md:grid-cols-6 gap-3">
          <select name="training_day" required className="p-3 bg-bg-primary border border-border-default rounded text-sm">
            {days.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
          <select name="exercise_id" required className="p-3 bg-bg-primary border border-border-default rounded text-sm md:col-span-2">
            <option value="">Упражнение...</option>
            {exercises.map((e) => <option key={e.id} value={e.id}>{e.name}</option>)}
          </select>
          <input name="exercise_order" type="number" min="1" defaultValue="1" placeholder="№" className="p-3 bg-bg-primary border border-border-default rounded text-sm" />
          <input name="sets" type="number" min="1" placeholder="Подх." className="p-3 bg-bg-primary border border-border-default rounded text-sm" />
          <input name="reps" placeholder="Повт. 5 или 2+2" className="p-3 bg-bg-primary border border-border-default rounded text-sm" />
          <input name="weight" type="number" step="0.5" placeholder="кг" className="p-3 bg-bg-primary border border-border-default rounded text-sm" />
          <input name="percent" type="number" step="0.5" placeholder="%" className="p-3 bg-bg-primary border border-border-default rounded text-sm" />
          <input name="rest_time" placeholder="Отдых 3 мин" className="p-3 bg-bg-primary border border-border-default rounded text-sm" />
          <input name="tempo" placeholder="Темп/пауза" className="p-3 bg-bg-primary border border-border-default rounded text-sm" />
          <input name="comment" placeholder="Комментарий тренера" className="p-3 bg-bg-primary border border-border-default rounded text-sm md:col-span-2" />
          <button disabled={saving} type="submit" className="bg-accent-gold text-white font-bold uppercase rounded text-sm disabled:opacity-60">
            {saving ? 'Сохраняю...' : '+ Добавить'}
          </button>
        </form>

        {loading ? <p className="text-text-muted">Загрузка...</p> : grouped.map(({ day, rows }) => (
          <section key={day} className="mb-7">
            <h2 className="text-accent-gold font-display text-xl border-b border-border-default pb-2 mb-3">{day}</h2>
            {rows.length === 0 ? <p className="text-text-muted text-sm">Нет упражнений</p> : rows.map((item) => (
              <div key={item.id} className="bg-bg-card border border-border-default rounded p-4 mb-2 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <div className="font-bold">{item.exercise_order}. {item.exercise?.name || 'Упражнение удалено'}</div>
                  <div className="text-sm text-text-muted">
                    {item.sets || '-'}×{item.reps || '-'} {item.weight ? `- ${item.weight} кг` : ''} {item.percent ? `- ${item.percent}%` : ''} {item.rest_time ? `- отдых ${item.rest_time}` : ''}
                  </div>
                  {(item.tempo || item.comment) && <div className="text-xs text-text-muted mt-1">{item.tempo} {item.comment}</div>}
                </div>
                <button onClick={() => deleteItem(item.id)} className="text-accent-red text-xs uppercase font-bold self-start md:self-center">Удалить</button>
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
