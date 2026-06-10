'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { defaultBrandProfile, type BrandAsset, type TrainerBrandProfile } from '@/lib/brand/defaultBrand';
import { resetBrandProfileOnServer, saveBrandProfile, useBrandProfile } from '@/lib/brand/useBrandProfile';

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ACCEPTED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

function compressImage(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!ACCEPTED_TYPES.includes(file.type)) {
      reject(new Error('Допустимы только JPG, PNG и WEBP.'));
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      reject(new Error('Максимальный размер файла - 10 МБ.'));
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const image = new Image();
      image.onload = () => {
        const maxSide = 1400;
        const ratio = Math.min(1, maxSide / Math.max(image.width, image.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(image.width * ratio);
        canvas.height = Math.round(image.height * ratio);
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Не удалось обработать изображение.'));
          return;
        }
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/webp', 0.82));
      };
      image.onerror = () => reject(new Error('Файл изображения повреждён.'));
      image.src = String(reader.result || '');
    };
    reader.onerror = () => reject(new Error('Не удалось прочитать файл.'));
    reader.readAsDataURL(file);
  });
}

export default function BrandManager() {
  const { profile: storedProfile, source } = useBrandProfile();
  const [profile, setProfile] = useState<TrainerBrandProfile>(defaultBrandProfile);
  const [message, setMessage] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setProfile(storedProfile);
  }, [storedProfile]);

  async function save(nextProfile: TrainerBrandProfile, successMessage = 'Данные личного бренда сохранены на сервере.') {
    setIsSaving(true);
    try {
      const result = await saveBrandProfile(nextProfile);
      setProfile(result.profile);
      setMessage(result.source === 'server' ? successMessage : 'Сохранено локально в этом браузере. Для домена подключи Supabase.');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Не удалось сохранить данные бренда. Возможно, изображение слишком большое.');
    } finally {
      setIsSaving(false);
    }
  }

  function updateField(field: keyof TrainerBrandProfile, value: string) {
    void save({ ...profile, [field]: value });
  }

  function updateTextArray(field: 'achievements' | 'certificates', value: string) {
    void save({ ...profile, [field]: value.split('\n').map((item) => item.trim()).filter(Boolean) });
  }

  async function handleUpload(asset: BrandAsset, event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const imageUrl = await compressImage(file);
      const nextAssets = profile.assets.map((item) => (item.key === asset.key ? { ...item, imageUrl } : item));
      void save({ ...profile, assets: nextAssets }, `${asset.label}: фото загружено, сжато и сохранено.`);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Ошибка загрузки изображения.');
    }
  }

  function clearAsset(asset: BrandAsset) {
    const nextAssets = profile.assets.map((item) => (item.key === asset.key ? { ...item, imageUrl: '' } : item));
    void save({ ...profile, assets: nextAssets }, `${asset.label}: фото очищено.`);
  }

  async function resetBrand() {
    setIsSaving(true);
    try {
      const result = await resetBrandProfileOnServer();
      setProfile(result.profile);
      setMessage(result.source === 'server' ? 'Данные личного бренда сброшены и сохранены на сервере.' : 'Данные личного бренда сброшены и сохранены локально в этом браузере.');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Не удалось сбросить бренд на сервере.');
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <main className="min-h-screen bg-bg-primary p-4 text-text-primary md:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <Link href="/admin" className="text-sm font-semibold text-accent-gold hover:underline">← Назад в админку</Link>
            <h1 className="mt-3 text-3xl font-extrabold md:text-5xl">Личный бренд тренера</h1>
            <p className="mt-2 max-w-2xl text-sm text-text-muted">Фото и тексты хранятся отдельно от кода. Этап 14 сохраняет профиль бренда через серверный API и Supabase.</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-text-muted">Источник данных: {source === 'server' ? 'Supabase / сервер' : source === 'local' ? 'локальный браузер' : 'базовый профиль'}</p>
          </div>
          <button onClick={resetBrand} disabled={isSaving} className="rounded-lg border border-border-default bg-white px-4 py-3 text-xs font-bold uppercase text-text-muted hover:border-accent-gold hover:text-accent-gold disabled:opacity-60">{isSaving ? 'Сохраняю...' : 'Сбросить'}</button>
        </div>

        {message && <div className="mb-6 rounded-lg border border-accent-gold/30 bg-white p-4 text-sm font-semibold text-accent-gold">{message}</div>}

        <section className="grid gap-5 rounded-2xl border border-border-default bg-white p-5 shadow-sm md:grid-cols-2">
          <label className="block">
            <span className="text-sm font-bold uppercase text-text-muted">Имя тренера</span>
            <input value={profile.coachName} onChange={(e) => updateField('coachName', e.target.value)} className="mt-2 w-full rounded-lg border border-border-default bg-bg-primary px-4 py-3 text-base text-text-primary outline-none focus:border-accent-gold" />
          </label>
          <label className="block">
            <span className="text-sm font-bold uppercase text-text-muted">Роль</span>
            <input value={profile.role} onChange={(e) => updateField('role', e.target.value)} className="mt-2 w-full rounded-lg border border-border-default bg-bg-primary px-4 py-3 text-base text-text-primary outline-none focus:border-accent-gold" />
          </label>
          <label className="block">
            <span className="text-sm font-bold uppercase text-text-muted">Стаж</span>
            <input value={profile.experience} onChange={(e) => updateField('experience', e.target.value)} className="mt-2 w-full rounded-lg border border-border-default bg-bg-primary px-4 py-3 text-base text-text-primary outline-none focus:border-accent-gold" />
          </label>
          <label className="block md:col-span-2">
            <span className="text-sm font-bold uppercase text-text-muted">Биография</span>
            <textarea value={profile.bio} onChange={(e) => updateField('bio', e.target.value)} rows={5} className="mt-2 w-full rounded-lg border border-border-default bg-bg-primary px-4 py-3 text-base text-text-primary outline-none focus:border-accent-gold" />
          </label>
          <label className="block">
            <span className="text-sm font-bold uppercase text-text-muted">Спортивные достижения</span>
            <textarea value={profile.achievements.join('\n')} onChange={(e) => updateTextArray('achievements', e.target.value)} rows={6} className="mt-2 w-full rounded-lg border border-border-default bg-bg-primary px-4 py-3 text-base text-text-primary outline-none focus:border-accent-gold" />
          </label>
          <label className="block">
            <span className="text-sm font-bold uppercase text-text-muted">Сертификаты</span>
            <textarea value={profile.certificates.join('\n')} onChange={(e) => updateTextArray('certificates', e.target.value)} rows={6} className="mt-2 w-full rounded-lg border border-border-default bg-bg-primary px-4 py-3 text-base text-text-primary outline-none focus:border-accent-gold" />
          </label>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-extrabold">Фотографии бренда</h2>
          <p className="mt-2 text-sm text-text-muted">Поддержка JPG, PNG, WEBP. Максимум 10 МБ. Изображения автоматически сжимаются в WEBP.</p>
          <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {profile.assets.map((asset) => (
              <div key={asset.key} className="overflow-hidden rounded-2xl border border-border-default bg-white shadow-sm">
                <div className="aspect-[4/3] bg-bg-secondary">
                  {asset.imageUrl ? <img src={asset.imageUrl} alt={asset.label} className="h-full w-full object-cover" /> : <div className="flex h-full items-center justify-center p-6 text-center text-sm font-bold uppercase tracking-[0.16em] text-text-muted">{asset.label}</div>}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-extrabold">{asset.label}</h3>
                  <p className="mt-1 text-sm text-text-muted">{asset.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <label className="cursor-pointer rounded-lg bg-accent-gold px-4 py-2 text-xs font-bold uppercase text-white hover:bg-accent-gold-light">
                      Загрузить
                      <input type="file" accept="image/jpeg,image/png,image/webp" className="hidden" onChange={(event) => handleUpload(asset, event)} />
                    </label>
                    {asset.imageUrl && <button onClick={() => clearAsset(asset)} className="rounded-lg border border-border-default px-4 py-2 text-xs font-bold uppercase text-text-muted hover:border-accent-gold hover:text-accent-gold">Очистить</button>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
