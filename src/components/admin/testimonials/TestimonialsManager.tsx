'use client';

import { useEffect, useState } from 'react';
import { defaultTestimonials, type ClientTestimonial } from '@/lib/testimonials/defaultTestimonials';
import { saveTestimonials, useTestimonials } from '@/lib/testimonials/useTestimonials';

function Field({ label, value, onChange, textarea = false }: { label: string; value: string; onChange: (value: string) => void; textarea?: boolean }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-text-muted">{label}</span>
      {textarea ? (
        <textarea value={value} onChange={(event) => onChange(event.target.value)} rows={3} className="w-full rounded-xl border border-border-default bg-white px-4 py-3 text-sm text-text-primary outline-none focus:border-accent-gold" />
      ) : (
        <input value={value} onChange={(event) => onChange(event.target.value)} className="w-full rounded-xl border border-border-default bg-white px-4 py-3 text-sm text-text-primary outline-none focus:border-accent-gold" />
      )}
    </label>
  );
}

function createEmptyTestimonial(): ClientTestimonial {
  return {
    id: `testimonial-${Date.now()}`,
    name: 'Новый клиент',
    age: '',
    goal: '',
    result: '',
    period: '',
    text: '',
    tags: [],
    beforeValue: '',
    afterValue: '',
    photoUrl: '',
    videoUrl: '',
    isVisible: true,
    sortOrder: 99,
  };
}

export default function TestimonialsManager() {
  const { testimonials, source } = useTestimonials();
  const [draft, setDraft] = useState<ClientTestimonial[]>(testimonials);
  const [notice, setNotice] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setDraft(testimonials);
  }, [testimonials]);

  const update = (index: number, value: ClientTestimonial) => setDraft((prev) => prev.map((item, idx) => (idx === index ? value : item)));
  const remove = (index: number) => setDraft((prev) => prev.filter((_, idx) => idx !== index));

  async function save() {
    setIsSaving(true);
    try {
      const result = await saveTestimonials(draft);
      setDraft(result.testimonials);
      setNotice(result.source === 'server' ? 'Отзывы сохранены на сервере и будут видны на домене.' : 'Отзывы сохранены локально в этом браузере. Для домена подключи Supabase.');
    } catch (error) {
      setNotice(error instanceof Error ? error.message : 'Не удалось сохранить отзывы.');
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <main className="min-h-screen bg-bg-primary p-6 text-text-primary md:p-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent-gold">Этап 15</p>
            <h1 className="mt-2 text-3xl font-extrabold md:text-5xl">Отзывы и результаты учеников</h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted">Добавляй кейсы клиентов, результаты, период подготовки, фото/видео и теги. Видимые отзывы отображаются на главной странице.</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-text-muted">Источник данных: {source === 'server' ? 'Supabase / сервер' : source === 'local' ? 'локальный браузер' : 'базовые отзывы'}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="/" className="rounded-xl border border-border-default bg-white px-4 py-3 text-xs font-bold uppercase text-text-muted hover:border-accent-gold hover:text-accent-gold">Открыть сайт</a>
            <button onClick={() => setDraft((prev) => [...prev, createEmptyTestimonial()])} className="rounded-xl border border-border-default bg-white px-4 py-3 text-xs font-bold uppercase text-text-muted hover:border-accent-gold hover:text-accent-gold">Добавить отзыв</button>
            <button onClick={save} disabled={isSaving} className="rounded-xl bg-accent-gold px-5 py-3 text-xs font-extrabold uppercase text-white hover:bg-accent-gold-light disabled:opacity-60">{isSaving ? 'Сохраняю...' : 'Сохранить'}</button>
          </div>
        </div>

        {notice && <div className="mb-6 rounded-xl border border-success-green/30 bg-white p-4 text-sm font-semibold text-success-green">{notice}</div>}

        <div className="space-y-5">
          {draft.map((item, index) => (
            <section key={item.id} className="rounded-3xl border border-border-default bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Кейс #{index + 1}</p>
                  <h2 className="mt-1 text-xl font-extrabold">{item.name}</h2>
                </div>
                <div className="flex gap-3">
                  <label className="flex items-center gap-2 text-sm font-semibold text-text-muted"><input type="checkbox" checked={item.isVisible} onChange={(event) => update(index, { ...item, isVisible: event.target.checked })} /> Показать</label>
                  <button onClick={() => remove(index)} className="rounded-lg border border-accent-red/30 px-3 py-2 text-xs font-bold uppercase text-accent-red">Удалить</button>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Имя / описание клиента" value={item.name} onChange={(value) => update(index, { ...item, name: value })} />
                <Field label="Возраст" value={item.age || ''} onChange={(value) => update(index, { ...item, age: value })} />
                <Field label="Цель" value={item.goal} onChange={(value) => update(index, { ...item, goal: value })} />
                <Field label="Результат" value={item.result} onChange={(value) => update(index, { ...item, result: value })} />
                <Field label="Период" value={item.period} onChange={(value) => update(index, { ...item, period: value })} />
                <Field label="Порядок" value={String(item.sortOrder)} onChange={(value) => update(index, { ...item, sortOrder: Number(value) || 99 })} />
                <Field label="До" value={item.beforeValue || ''} onChange={(value) => update(index, { ...item, beforeValue: value })} />
                <Field label="После" value={item.afterValue || ''} onChange={(value) => update(index, { ...item, afterValue: value })} />
                <Field label="Фото URL" value={item.photoUrl || ''} onChange={(value) => update(index, { ...item, photoUrl: value })} />
                <Field label="Видео URL" value={item.videoUrl || ''} onChange={(value) => update(index, { ...item, videoUrl: value })} />
                <div className="md:col-span-2"><Field label="Теги - каждый с новой строки" value={item.tags.join('\n')} onChange={(value) => update(index, { ...item, tags: value.split('\n').map((tag) => tag.trim()).filter(Boolean) })} textarea /></div>
                <div className="md:col-span-2"><Field label="Текст отзыва" value={item.text} onChange={(value) => update(index, { ...item, text: value })} textarea /></div>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button onClick={save} disabled={isSaving} className="rounded-xl bg-accent-gold px-6 py-4 text-sm font-extrabold uppercase text-white hover:bg-accent-gold-light disabled:opacity-60">{isSaving ? 'Сохраняю...' : 'Сохранить отзывы'}</button>
          <button onClick={() => setDraft(defaultTestimonials)} className="rounded-xl border border-border-default bg-white px-6 py-4 text-sm font-bold uppercase text-text-muted hover:border-accent-gold hover:text-accent-gold">Вернуть демо-отзывы</button>
        </div>
      </div>
    </main>
  );
}
