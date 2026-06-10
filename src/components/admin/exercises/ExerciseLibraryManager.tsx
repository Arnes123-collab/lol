'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  DIFFICULTY_LEVELS,
  EQUIPMENT_OPTIONS,
  EXERCISE_CATEGORIES,
  EXERCISE_LIBRARY,
  EXERCISE_STORAGE_KEY,
  EXERCISE_SUBCATEGORIES,
  EXERCISE_TYPES,
  SPORT_TAG_OPTIONS,
} from '@/lib/exercises/exerciseCmsData';
import type { DifficultyLevel, ExerciseCmsItem, ExerciseType } from '@/types/exercise';

type FilterStatus = 'active' | 'hidden' | 'all';

const EMPTY_EXERCISE: ExerciseCmsItem = {
  id: '',
  name: '',
  category: 'Грудные мышцы',
  subcategory: 'Базовые упражнения',
  exerciseType: 'Базовое',
  primaryMuscle: '',
  secondaryMuscles: [],
  equipment: [],
  difficultyLevel: 'Средний',
  sportTags: [],
  imageUrl: '/exercises/default.jpg',
  gifUrl: '',
  videoUrl: '',
  description: '',
  commonMistakes: '',
  coachTip: '',
  replacementExerciseIds: [],
  isActive: true,
  defaultSets: '3',
  defaultReps: '8',
  defaultRest: '90 сек',
};

function makeId(value: string) {
  return `${value.toLowerCase().trim().replace(/[ё]/g, 'е').replace(/[^a-zа-я0-9]+/gi, '-').replace(/^-|-$/g, '')}-${Date.now().toString(36)}`;
}

function toggleArrayValue(values: string[], value: string) {
  return values.includes(value) ? values.filter((v) => v !== value) : [...values, value];
}

const IMAGE_FILE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
const VIDEO_FILE_TYPES = ['video/mp4', 'video/webm', 'video/quicktime'];
const MAX_IMAGE_SIZE_MB = 10;
const MAX_VIDEO_SIZE_MB = 25;

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = () => reject(new Error('Не удалось прочитать файл.'));
    reader.readAsDataURL(file);
  });
}

async function compressImageToDataUrl(file: File, maxWidth = 1200, quality = 0.82): Promise<string> {
  const rawDataUrl = await readFileAsDataUrl(file);
  if (file.type === 'image/gif') return rawDataUrl;

  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const ratio = Math.min(1, maxWidth / img.width);
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(img.width * ratio);
      canvas.height = Math.round(img.height * ratio);
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        resolve(rawDataUrl);
        return;
      }
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL('image/webp', quality));
    };
    img.onerror = () => resolve(rawDataUrl);
    img.src = rawDataUrl;
  });
}

function isVideoSource(value: string) {
  return value.startsWith('data:video') || /\.(mp4|webm|mov)(\?.*)?$/i.test(value);
}

export default function ExerciseLibraryManager() {
  const [items, setItems] = useState<ExerciseCmsItem[]>(EXERCISE_LIBRARY);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Все');
  const [subcategory, setSubcategory] = useState('Все');
  const [type, setType] = useState('Все');
  const [difficulty, setDifficulty] = useState('Все');
  const [equipment, setEquipment] = useState('Все');
  const [sportTag, setSportTag] = useState('Все');
  const [status, setStatus] = useState<FilterStatus>('active');
  const [editing, setEditing] = useState<ExerciseCmsItem | null>(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem(EXERCISE_STORAGE_KEY);
    if (stored) setItems(JSON.parse(stored));
  }, []);

  const persist = (next: ExerciseCmsItem[], msg: string) => {
    setItems(next);
    try {
      localStorage.setItem(EXERCISE_STORAGE_KEY, JSON.stringify(next));
      setMessage(msg);
    } catch {
      setMessage('Ошибка: файл слишком большой для локального браузера. Для видео используй YouTube/Instagram ссылку или Supabase Storage на домене.');
    }
    setTimeout(() => setMessage(''), 5000);
  };

  const availableSubcategories = useMemo(() => {
    if (category === 'Все') return Array.from(new Set(items.map((item) => item.subcategory))).sort();
    return Array.from(new Set(items.filter((item) => item.category === category).map((item) => item.subcategory))).sort();
  }, [category, items]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      const text = [item.name, item.category, item.subcategory, item.primaryMuscle, item.secondaryMuscles.join(' '), item.equipment.join(' '), item.sportTags.join(' ')].join(' ').toLowerCase();
      if (q && !text.includes(q)) return false;
      if (category !== 'Все' && item.category !== category) return false;
      if (subcategory !== 'Все' && item.subcategory !== subcategory) return false;
      if (type !== 'Все' && item.exerciseType !== type) return false;
      if (difficulty !== 'Все' && item.difficultyLevel !== difficulty) return false;
      if (equipment !== 'Все' && !item.equipment.includes(equipment)) return false;
      if (sportTag !== 'Все' && !item.sportTags.includes(sportTag)) return false;
      if (status === 'active' && !item.isActive) return false;
      if (status === 'hidden' && item.isActive) return false;
      return true;
    });
  }, [items, query, category, subcategory, type, difficulty, equipment, sportTag, status]);

  const stats = useMemo(() => ({
    total: items.length,
    active: items.filter((item) => item.isActive).length,
    hidden: items.filter((item) => !item.isActive).length,
    categories: new Set(items.map((item) => item.category)).size,
  }), [items]);

  const startCreate = () => setEditing({ ...EMPTY_EXERCISE, id: makeId('exercise') });
  const startEdit = (item: ExerciseCmsItem) => setEditing(JSON.parse(JSON.stringify(item)));

  const saveEditing = () => {
    if (!editing) return;
    if (!editing.name.trim()) {
      setMessage('Ошибка: название упражнения обязательно.');
      return;
    }
    const nextItem = {
      ...editing,
      id: editing.id || makeId(editing.name),
      imageUrl: editing.imageUrl || '/exercises/default.jpg',
      primaryMuscle: editing.primaryMuscle || editing.category,
    };
    const exists = items.some((item) => item.id === nextItem.id);
    const next = exists ? items.map((item) => (item.id === nextItem.id ? nextItem : item)) : [nextItem, ...items];
    persist(next, exists ? 'Упражнение обновлено.' : 'Новое упражнение добавлено.');
    setEditing(null);
  };

  const toggleActive = (id: string) => {
    const next = items.map((item) => item.id === id ? { ...item, isActive: !item.isActive } : item);
    persist(next, 'Статус упражнения изменён.');
  };

  const resetSeed = () => {
    persist(EXERCISE_LIBRARY, 'База упражнений сброшена к профессиональному каталогу Stage 11.');
  };

  const updateEditing = <K extends keyof ExerciseCmsItem>(key: K, value: ExerciseCmsItem[K]) => {
    setEditing((current) => current ? { ...current, [key]: value } : current);
  };

  const tryServerMediaUpload = async (field: 'imageUrl' | 'gifUrl' | 'videoUrl', file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('exerciseId', editing?.id || editing?.name || 'new-exercise');
    formData.append('mediaType', field === 'videoUrl' ? 'video' : field === 'gifUrl' ? 'gif' : 'image');

    const response = await fetch('/api/exercise-media', { method: 'POST', body: formData });
    if (!response.ok) return null;
    const result = await response.json();
    return typeof result.url === 'string' ? result.url : null;
  };

  const handleMediaUpload = async (field: 'imageUrl' | 'gifUrl' | 'videoUrl', file: File | undefined) => {
    if (!file) return;

    try {
      if (field === 'videoUrl') {
        if (!VIDEO_FILE_TYPES.includes(file.type)) {
          setMessage('Ошибка: видео должно быть MP4, WEBM или MOV.');
          return;
        }
        if (file.size > MAX_VIDEO_SIZE_MB * 1024 * 1024) {
          setMessage(`Ошибка: короткое видео должно быть до ${MAX_VIDEO_SIZE_MB} МБ. Большие ролики лучше вставлять ссылкой YouTube/Instagram.`);
          return;
        }
        const serverUrl = await tryServerMediaUpload(field, file);
        if (serverUrl) {
          updateEditing(field, serverUrl);
          setMessage('Видео загружено в Supabase Storage и сохранено в карточке упражнения.');
          return;
        }
        if (file.size > 4 * 1024 * 1024) {
          setMessage('Для локального режима видео больше 4 МБ лучше вставлять ссылкой YouTube/Instagram. На домене подключи Supabase Storage.');
          return;
        }
        const dataUrl = await readFileAsDataUrl(file);
        updateEditing(field, dataUrl);
        setMessage('Короткое видео загружено локально в карточку упражнения.');
        return;
      }

      if (!IMAGE_FILE_TYPES.includes(file.type)) {
        setMessage('Ошибка: фото/GIF должны быть JPG, PNG, WEBP или GIF.');
        return;
      }
      if (file.size > MAX_IMAGE_SIZE_MB * 1024 * 1024) {
        setMessage(`Ошибка: изображение должно быть до ${MAX_IMAGE_SIZE_MB} МБ.`);
        return;
      }
      const serverUrl = await tryServerMediaUpload(field, file);
      if (serverUrl) {
        updateEditing(field, serverUrl);
        setMessage(field === 'imageUrl' ? 'Фото загружено в Supabase Storage.' : 'GIF загружен в Supabase Storage.');
        return;
      }
      const dataUrl = field === 'imageUrl' ? await compressImageToDataUrl(file) : await readFileAsDataUrl(file);
      updateEditing(field, dataUrl);
      setMessage(field === 'imageUrl' ? 'Фото упражнения загружено и сжато локально.' : 'GIF техники загружен локально.');
    } catch {
      setMessage('Ошибка загрузки файла. Попробуй другой файл или вставь ссылку.');
    }
  };

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary p-4 md:p-8 font-body">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-b border-border-default pb-5 mb-6">
          <div>
            <Link href="/admin" className="text-accent-gold text-xs uppercase">← Админка</Link>
            <h1 className="text-2xl md:text-4xl font-display uppercase text-accent-gold mt-2">База упражнений тренера</h1>
            <p className="text-text-muted text-sm mt-2">11-й этап: Exercise Library CMS на 200-300 упражнений с фильтрами, видео, заменами и скрытием.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="/admin/plan-builder" className="px-4 py-3 bg-bg-card border border-accent-gold text-accent-gold rounded text-xs uppercase font-bold">В конструктор</Link>
            <button onClick={startCreate} className="px-4 py-3 bg-accent-gold text-white rounded text-xs uppercase font-bold">+ Добавить упражнение</button>
          </div>
        </div>

        {message && <div className="mb-5 rounded border border-green-400 bg-green-500/10 p-3 text-green-300 text-sm">{message}</div>}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-bg-card border border-border-default rounded p-4"><div className="text-xs text-text-muted uppercase">Всего</div><div className="text-3xl font-display text-accent-gold">{stats.total}</div></div>
          <div className="bg-bg-card border border-border-default rounded p-4"><div className="text-xs text-text-muted uppercase">Активные</div><div className="text-3xl font-display text-green-300">{stats.active}</div></div>
          <div className="bg-bg-card border border-border-default rounded p-4"><div className="text-xs text-text-muted uppercase">Скрытые</div><div className="text-3xl font-display text-red-300">{stats.hidden}</div></div>
          <div className="bg-bg-card border border-border-default rounded p-4"><div className="text-xs text-text-muted uppercase">Категории</div><div className="text-3xl font-display">{stats.categories}</div></div>
        </div>

        <section className="bg-bg-card border border-border-default rounded-lg p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-8 gap-3">
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Поиск упражнения" className="md:col-span-2 p-3 bg-bg-primary border border-border-default rounded text-sm" />
            <select value={category} onChange={(e) => { setCategory(e.target.value); setSubcategory('Все'); }} className="p-3 bg-bg-primary border border-border-default rounded text-sm">
              <option>Все</option>{EXERCISE_CATEGORIES.map((c) => <option key={c.id}>{c.name}</option>)}
            </select>
            <select value={subcategory} onChange={(e) => setSubcategory(e.target.value)} className="p-3 bg-bg-primary border border-border-default rounded text-sm">
              <option>Все</option>{availableSubcategories.map((s) => <option key={s}>{s}</option>)}
            </select>
            <select value={type} onChange={(e) => setType(e.target.value)} className="p-3 bg-bg-primary border border-border-default rounded text-sm">
              <option>Все</option>{EXERCISE_TYPES.map((t) => <option key={t}>{t}</option>)}
            </select>
            <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className="p-3 bg-bg-primary border border-border-default rounded text-sm">
              <option>Все</option>{DIFFICULTY_LEVELS.map((d) => <option key={d}>{d}</option>)}
            </select>
            <select value={equipment} onChange={(e) => setEquipment(e.target.value)} className="p-3 bg-bg-primary border border-border-default rounded text-sm">
              <option>Все</option>{EQUIPMENT_OPTIONS.map((e) => <option key={e}>{e}</option>)}
            </select>
            <select value={sportTag} onChange={(e) => setSportTag(e.target.value)} className="p-3 bg-bg-primary border border-border-default rounded text-sm">
              <option>Все</option>{SPORT_TAG_OPTIONS.map((t) => <option key={t}>{t}</option>)}
            </select>
            <select value={status} onChange={(e) => setStatus(e.target.value as FilterStatus)} className="p-3 bg-bg-primary border border-border-default rounded text-sm">
              <option value="active">Активные</option><option value="hidden">Скрытые</option><option value="all">Все</option>
            </select>
            <button onClick={resetSeed} className="p-3 bg-bg-primary border border-red-400 text-red-300 rounded text-xs uppercase font-bold">Сбросить базу</button>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_430px] gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 content-start">
            {filtered.map((item) => {
              const replacements = item.replacementExerciseIds.map((id) => items.find((ex) => ex.id === id)?.name).filter(Boolean).slice(0, 3);
              return (
                <article key={item.id} className={`bg-bg-card border rounded-lg overflow-hidden ${item.isActive ? 'border-border-default' : 'border-red-400/40 opacity-70'}`}>
                  <img src={item.imageUrl || '/exercises/default.jpg'} alt={item.name} className="h-40 w-full object-cover bg-black" onError={(e) => { e.currentTarget.src = '/exercises/default.jpg'; }} />
                  <div className="p-4">
                    <div className="flex justify-between gap-3">
                      <h2 className="font-bold text-base leading-tight">{item.name}</h2>
                      <span className={`text-[10px] uppercase font-bold ${item.isActive ? 'text-green-300' : 'text-red-300'}`}>{item.isActive ? 'Показано' : 'Скрыто'}</span>
                    </div>
                    <div className="text-xs text-accent-gold mt-2">{item.category} / {item.subcategory}</div>
                    <div className="mt-3 flex flex-wrap gap-1">
                      <span className="px-2 py-1 rounded bg-bg-primary border border-border-default text-[11px]">{item.exerciseType}</span>
                      <span className="px-2 py-1 rounded bg-bg-primary border border-border-default text-[11px]">{item.difficultyLevel}</span>
                      {item.sportTags.slice(0, 2).map((tag) => <span key={tag} className="px-2 py-1 rounded bg-accent-gold/10 border border-accent-gold/30 text-[11px] text-accent-gold">{tag}</span>)}
                    </div>
                    <p className="text-xs text-text-muted mt-3 line-clamp-3">{item.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                      {item.imageUrl && item.imageUrl !== '/exercises/default.jpg' && <span className="rounded border border-green-400/40 px-2 py-1 text-green-500">Фото есть</span>}
                      {item.gifUrl && <span className="rounded border border-yellow-400/50 px-2 py-1 text-yellow-600">GIF есть</span>}
                      {item.videoUrl && <a href={isVideoSource(item.videoUrl) ? undefined : item.videoUrl} target="_blank" rel="noopener noreferrer" className="rounded border border-accent-gold/40 px-2 py-1 text-accent-gold">Видео есть</a>}
                    </div>
                    {replacements.length > 0 && <p className="text-xs text-text-muted mt-2"><b>Замены:</b> {replacements.join(', ')}</p>}
                    <div className="flex gap-2 mt-4">
                      <button onClick={() => startEdit(item)} className="flex-1 px-3 py-2 border border-accent-gold text-accent-gold rounded text-xs uppercase font-bold">Редактировать</button>
                      <button onClick={() => toggleActive(item.id)} className="px-3 py-2 border border-border-default text-text-muted rounded text-xs uppercase font-bold">{item.isActive ? 'Скрыть' : 'Показать'}</button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <aside className="bg-bg-card border border-border-default rounded-lg p-5 h-fit sticky top-4">
            {editing ? (
              <div className="space-y-3">
                <h2 className="font-display text-accent-gold uppercase text-xl">{items.some((i) => i.id === editing.id) ? 'Редактирование' : 'Новое упражнение'}</h2>
                <input value={editing.name} onChange={(e) => updateEditing('name', e.target.value)} placeholder="Название" className="w-full p-3 bg-bg-primary border border-border-default rounded text-sm" />
                <div className="grid grid-cols-2 gap-3">
                  <select value={editing.category} onChange={(e) => updateEditing('category', e.target.value)} className="p-3 bg-bg-primary border border-border-default rounded text-sm">{EXERCISE_CATEGORIES.map((c) => <option key={c.id}>{c.name}</option>)}</select>
                  <input value={editing.subcategory} onChange={(e) => updateEditing('subcategory', e.target.value)} placeholder="Подкатегория" className="p-3 bg-bg-primary border border-border-default rounded text-sm" />
                  <select value={editing.exerciseType} onChange={(e) => updateEditing('exerciseType', e.target.value as ExerciseType)} className="p-3 bg-bg-primary border border-border-default rounded text-sm">{EXERCISE_TYPES.map((t) => <option key={t}>{t}</option>)}</select>
                  <select value={editing.difficultyLevel} onChange={(e) => updateEditing('difficultyLevel', e.target.value as DifficultyLevel)} className="p-3 bg-bg-primary border border-border-default rounded text-sm">{DIFFICULTY_LEVELS.map((d) => <option key={d}>{d}</option>)}</select>
                </div>
                <input value={editing.primaryMuscle} onChange={(e) => updateEditing('primaryMuscle', e.target.value)} placeholder="Основная мышца" className="w-full p-3 bg-bg-primary border border-border-default rounded text-sm" />
                <input value={editing.secondaryMuscles.join(', ')} onChange={(e) => updateEditing('secondaryMuscles', e.target.value.split(',').map((v) => v.trim()).filter(Boolean))} placeholder="Дополнительные мышцы через запятую" className="w-full p-3 bg-bg-primary border border-border-default rounded text-sm" />
                <div className="rounded-lg border border-border-default bg-bg-primary p-3">
                  <div className="mb-2 text-xs font-bold uppercase text-text-muted">Фото упражнения</div>
                  <div className="mb-3 h-40 overflow-hidden rounded border border-border-default bg-white">
                    <img src={editing.imageUrl || '/exercises/default.jpg'} alt={editing.name || 'Фото упражнения'} className="h-full w-full object-cover" onError={(e) => { e.currentTarget.src = '/exercises/default.jpg'; }} />
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    <input value={editing.imageUrl} onChange={(e) => updateEditing('imageUrl', e.target.value)} placeholder="Фото URL или Data URL" className="w-full p-3 bg-bg-primary border border-border-default rounded text-sm" />
                    <label className="cursor-pointer rounded border border-accent-gold px-3 py-2 text-center text-xs font-bold uppercase text-accent-gold hover:bg-accent-gold hover:text-white">
                      Загрузить фото JPG / PNG / WEBP
                      <input type="file" accept="image/jpeg,image/png,image/webp" className="hidden" onChange={(e) => handleMediaUpload('imageUrl', e.target.files?.[0])} />
                    </label>
                    <button type="button" onClick={() => updateEditing('imageUrl', '/exercises/default.jpg')} className="rounded border border-border-default px-3 py-2 text-xs font-bold uppercase text-text-muted">Поставить заглушку</button>
                  </div>
                </div>

                <div className="rounded-lg border border-border-default bg-bg-primary p-3">
                  <div className="mb-2 text-xs font-bold uppercase text-text-muted">GIF техники</div>
                  {editing.gifUrl ? <img src={editing.gifUrl} alt="GIF техники" className="mb-3 h-32 w-full rounded border border-border-default object-cover" /> : <div className="mb-3 flex h-24 items-center justify-center rounded border border-dashed border-border-default text-xs text-text-muted">GIF не загружен</div>}
                  <input value={editing.gifUrl} onChange={(e) => updateEditing('gifUrl', e.target.value)} placeholder="GIF URL" className="mb-2 w-full p-3 bg-bg-primary border border-border-default rounded text-sm" />
                  <label className="block cursor-pointer rounded border border-accent-gold px-3 py-2 text-center text-xs font-bold uppercase text-accent-gold hover:bg-accent-gold hover:text-white">
                    Загрузить GIF
                    <input type="file" accept="image/gif" className="hidden" onChange={(e) => handleMediaUpload('gifUrl', e.target.files?.[0])} />
                  </label>
                </div>

                <div className="rounded-lg border border-border-default bg-bg-primary p-3">
                  <div className="mb-2 text-xs font-bold uppercase text-text-muted">Видео упражнения</div>
                  {editing.videoUrl ? (
                    isVideoSource(editing.videoUrl) ? <video src={editing.videoUrl} controls className="mb-3 h-40 w-full rounded border border-border-default bg-black object-cover" /> : <a href={editing.videoUrl} target="_blank" rel="noopener noreferrer" className="mb-3 block rounded border border-accent-gold/40 p-3 text-sm font-bold text-accent-gold">Открыть видео по ссылке</a>
                  ) : <div className="mb-3 flex h-24 items-center justify-center rounded border border-dashed border-border-default text-xs text-text-muted">Видео не добавлено</div>}
                  <input value={editing.videoUrl} onChange={(e) => updateEditing('videoUrl', e.target.value)} placeholder="YouTube / Instagram / MP4 URL" className="mb-2 w-full p-3 bg-bg-primary border border-border-default rounded text-sm" />
                  <label className="block cursor-pointer rounded border border-accent-gold px-3 py-2 text-center text-xs font-bold uppercase text-accent-gold hover:bg-accent-gold hover:text-white">
                    Загрузить короткое видео MP4 / WEBM / MOV
                    <input type="file" accept="video/mp4,video/webm,video/quicktime" className="hidden" onChange={(e) => handleMediaUpload('videoUrl', e.target.files?.[0])} />
                  </label>
                  <p className="mt-2 text-[11px] leading-relaxed text-text-muted">Для локальной версии лучше вставлять ссылки YouTube/Instagram. Большие видео на домене нужно хранить в Supabase Storage.</p>
                </div>
                <div>
                  <div className="text-xs uppercase text-text-muted mb-2">Инвентарь</div>
                  <div className="flex flex-wrap gap-2">{EQUIPMENT_OPTIONS.map((option) => <button key={option} onClick={() => updateEditing('equipment', toggleArrayValue(editing.equipment, option))} className={`px-2 py-1 rounded border text-xs ${editing.equipment.includes(option) ? 'border-accent-gold text-accent-gold' : 'border-border-default text-text-muted'}`}>{option}</button>)}</div>
                </div>
                <div>
                  <div className="text-xs uppercase text-text-muted mb-2">Sport tags</div>
                  <div className="flex flex-wrap gap-2">{SPORT_TAG_OPTIONS.map((option) => <button key={option} onClick={() => updateEditing('sportTags', toggleArrayValue(editing.sportTags, option))} className={`px-2 py-1 rounded border text-xs ${editing.sportTags.includes(option) ? 'border-accent-gold text-accent-gold' : 'border-border-default text-text-muted'}`}>{option}</button>)}</div>
                </div>
                <textarea value={editing.description} onChange={(e) => updateEditing('description', e.target.value)} rows={3} placeholder="Описание техники" className="w-full p-3 bg-bg-primary border border-border-default rounded text-sm" />
                <textarea value={editing.commonMistakes} onChange={(e) => updateEditing('commonMistakes', e.target.value)} rows={3} placeholder="Типичные ошибки" className="w-full p-3 bg-bg-primary border border-border-default rounded text-sm" />
                <textarea value={editing.coachTip} onChange={(e) => updateEditing('coachTip', e.target.value)} rows={2} placeholder="Комментарий тренера" className="w-full p-3 bg-bg-primary border border-border-default rounded text-sm" />
                <select multiple value={editing.replacementExerciseIds} onChange={(e) => updateEditing('replacementExerciseIds', Array.from(e.target.selectedOptions).map((o) => o.value))} className="w-full h-32 p-3 bg-bg-primary border border-border-default rounded text-sm">
                  {items.filter((item) => item.id !== editing.id).map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
                </select>
                <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={editing.isActive} onChange={(e) => updateEditing('isActive', e.target.checked)} /> Активно - показывать в конструкторе</label>
                <div className="grid grid-cols-3 gap-2">
                  <input value={editing.defaultSets} onChange={(e) => updateEditing('defaultSets', e.target.value)} placeholder="Подходы" className="p-3 bg-bg-primary border border-border-default rounded text-sm" />
                  <input value={editing.defaultReps} onChange={(e) => updateEditing('defaultReps', e.target.value)} placeholder="Повторы" className="p-3 bg-bg-primary border border-border-default rounded text-sm" />
                  <input value={editing.defaultRest} onChange={(e) => updateEditing('defaultRest', e.target.value)} placeholder="Отдых" className="p-3 bg-bg-primary border border-border-default rounded text-sm" />
                </div>
                <div className="flex gap-2">
                  <button onClick={saveEditing} className="flex-1 bg-accent-gold text-white rounded py-3 text-xs uppercase font-bold">Сохранить</button>
                  <button onClick={() => setEditing(null)} className="px-4 border border-border-default rounded text-xs uppercase font-bold">Отмена</button>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="font-display text-accent-gold uppercase text-xl">Как пользоваться</h2>
                <ol className="text-sm text-text-muted mt-3 space-y-2 list-decimal list-inside">
                  <li>Фильтруй по мышцам, оборудованию, sport tags и сложности.</li>
                  <li>Добавляй новые упражнения через кнопку сверху.</li>
                  <li>Не удаляй редкие упражнения - скрывай их.</li>
                  <li>Указывай замены: это ускорит составление планов.</li>
                  <li>В конструкторе планов будут видны только активные упражнения.</li>
                </ol>
                <div className="mt-5 rounded border border-accent-gold/30 bg-accent-gold/10 p-3 text-xs text-text-muted">Для боевого режима фото и видео надо хранить в Supabase Storage, а эту локальную CMS заменить на таблицу exercises.</div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
