'use client';

import { useEffect, useMemo, useState } from 'react';
import { defaultSiteContent, type SiteContent, type SiteTariff } from '@/lib/site-content/defaultSiteContent';
import { resetSiteContentOnServer, saveSiteContent, useSiteContent } from '@/lib/site-content/useSiteContent';

function Field({ label, value, onChange, textarea = false }: { label: string; value: string; onChange: (value: string) => void; textarea?: boolean }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-text-muted">{label}</span>
      {textarea ? (
        <textarea value={value} onChange={(event) => onChange(event.target.value)} rows={4} className="w-full rounded-xl border border-border-default bg-white px-4 py-3 text-sm text-text-primary outline-none focus:border-accent-gold" />
      ) : (
        <input value={value} onChange={(event) => onChange(event.target.value)} className="w-full rounded-xl border border-border-default bg-white px-4 py-3 text-sm text-text-primary outline-none focus:border-accent-gold" />
      )}
    </label>
  );
}

function TariffEditor({ tariff, onChange }: { tariff: SiteTariff; onChange: (tariff: SiteTariff) => void }) {
  const featuresText = useMemo(() => tariff.features.join('\n'), [tariff.features]);

  return (
    <div className="rounded-2xl border border-border-default bg-bg-primary p-5">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Название тарифа" value={tariff.name} onChange={(value) => onChange({ ...tariff, name: value })} />
        <Field label="Бейдж" value={tariff.badge} onChange={(value) => onChange({ ...tariff, badge: value })} />
        <Field label="Цена, тенге" value={String(tariff.price)} onChange={(value) => onChange({ ...tariff, price: Number(value) || 0 })} />
        <Field label="Цена, $" value={String(tariff.usd || 0)} onChange={(value) => onChange({ ...tariff, usd: Number(value) || 0 })} />
        <Field label="Срок" value={tariff.duration} onChange={(value) => onChange({ ...tariff, duration: value })} />
        <label className="flex items-end gap-3 pb-3 text-sm font-semibold text-text-primary">
          <input type="checkbox" checked={Boolean(tariff.featured)} onChange={(event) => onChange({ ...tariff, featured: event.target.checked })} />
          Выделить тариф
        </label>
        <div className="md:col-span-2"><Field label="Описание" value={tariff.description} onChange={(value) => onChange({ ...tariff, description: value })} textarea /></div>
        <div className="md:col-span-2"><Field label="Пункты тарифа - каждый с новой строки" value={featuresText} onChange={(value) => onChange({ ...tariff, features: value.split('\n').map((item) => item.trim()).filter(Boolean) })} textarea /></div>
      </div>
    </div>
  );
}

export default function SiteSettingsManager() {
  const { content, source } = useSiteContent();
  const [draft, setDraft] = useState<SiteContent>(content);
  const [notice, setNotice] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => setDraft(content), [content]);

  const update = <K extends keyof SiteContent>(key: K, value: SiteContent[K]) => setDraft((prev) => ({ ...prev, [key]: value }));
  const updateTariff = (index: number, tariff: SiteTariff) => setDraft((prev) => ({ ...prev, tariffs: prev.tariffs.map((item, idx) => (idx === index ? tariff : item)) }));

  async function save() {
    setIsSaving(true);
    try {
      const result = await saveSiteContent(draft);
      setDraft(result.content);
      setNotice(result.source === 'server' ? 'Сохранено на сервере. Обнови главную страницу через Ctrl+F5 - изменения применяются на сайте и домене.' : 'Сохранено локально в этом браузере. Изменения должны оставаться в админке и отображаться на главной после Ctrl+F5. Для домена подключи Supabase.');
    } catch (error) {
      setNotice(error instanceof Error ? error.message : 'Не удалось сохранить настройки.');
    } finally {
      setIsSaving(false);
    }
  }

  async function reset() {
    setIsSaving(true);
    try {
      const result = await resetSiteContentOnServer();
      setDraft(result.content);
      setNotice(result.source === 'server' ? 'Настройки сброшены и сохранены на сервере.' : 'Настройки сброшены и сохранены локально в этом браузере.');
    } catch (error) {
      setDraft(defaultSiteContent);
      setNotice(error instanceof Error ? error.message : 'Не удалось сбросить настройки на сервере.');
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <main className="min-h-screen bg-bg-primary p-6 text-text-primary md:p-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent-gold">Этап 13</p>
            <h1 className="mt-2 text-3xl font-extrabold md:text-5xl">Содержимое сайта</h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted">Здесь меняются телефон, WhatsApp, стаж, тексты главной страницы, биография и тарифы. Этап 14 сохраняет данные через серверный API и Supabase, чтобы изменения работали на домене.</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-text-muted">Источник данных: {source === 'server' ? 'Supabase / сервер' : source === 'local' ? 'локальный браузер' : 'базовые настройки'}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="/" className="rounded-xl border border-border-default bg-white px-4 py-3 text-xs font-bold uppercase text-text-muted hover:border-accent-gold hover:text-accent-gold">Открыть сайт</a>
            <button onClick={save} disabled={isSaving} className="rounded-xl bg-accent-gold px-5 py-3 text-xs font-extrabold uppercase text-white hover:bg-accent-gold-light disabled:opacity-60">{isSaving ? 'Сохраняю...' : 'Сохранить'}</button>
          </div>
        </div>

        {notice && <div className="mb-6 rounded-xl border border-success-green/30 bg-white p-4 text-sm font-semibold text-success-green">{notice}</div>}

        <section className="rounded-3xl border border-border-default bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-2xl font-extrabold">Контакты и бренд</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Имя тренера" value={draft.coachName} onChange={(value) => update('coachName', value)} />
            <Field label="Название бренда" value={draft.brandName} onChange={(value) => update('brandName', value)} />
            <Field label="Стаж в карточке" value={draft.experienceBadge} onChange={(value) => update('experienceBadge', value)} />
            <Field label="Стаж в тексте" value={draft.experienceText} onChange={(value) => update('experienceText', value)} />
            <Field label="Телефон на сайте" value={draft.phoneDisplay} onChange={(value) => update('phoneDisplay', value)} />
            <Field label="Телефон для WhatsApp без +" value={draft.phoneRaw} onChange={(value) => update('phoneRaw', value)} />
            <Field label="Instagram" value={draft.instagram} onChange={(value) => update('instagram', value)} />
            <Field label="YouTube" value={draft.youtube} onChange={(value) => update('youtube', value)} />
            <Field label="Город" value={draft.city} onChange={(value) => update('city', value)} />
            <Field label="Страна" value={draft.country} onChange={(value) => update('country', value)} />
            <div className="md:col-span-2"><Field label="Фраза бесплатного занятия" value={draft.freeLessonText} onChange={(value) => update('freeLessonText', value)} /></div>
          </div>
        </section>

        <section className="mt-6 rounded-3xl border border-border-default bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-2xl font-extrabold">Главная страница</h2>
          <div className="grid gap-4">
            <Field label="Главный заголовок" value={draft.heroTitle} onChange={(value) => update('heroTitle', value)} />
            <Field label="Подзаголовок" value={draft.heroSubtitle} onChange={(value) => update('heroSubtitle', value)} textarea />
            <Field label="Строка под заголовком" value={draft.heroNote} onChange={(value) => update('heroNote', value)} />
            <Field label="Заголовок блока О тренере" value={draft.aboutTitle} onChange={(value) => update('aboutTitle', value)} />
            <Field label="Биография" value={draft.bio} onChange={(value) => update('bio', value)} textarea />
            <Field label="Подпись тренера" value={draft.signatureText} onChange={(value) => update('signatureText', value)} />
            <Field label="Заголовок контактов" value={draft.contactsTitle} onChange={(value) => update('contactsTitle', value)} />
            <Field label="Заголовок тарифов" value={draft.pricingTitle} onChange={(value) => update('pricingTitle', value)} />
            <Field label="Описание тарифов" value={draft.pricingSubtitle} onChange={(value) => update('pricingSubtitle', value)} textarea />
          </div>
        </section>

        <section className="mt-6 rounded-3xl border border-border-default bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-2xl font-extrabold">Тарифы</h2>
          <div className="space-y-4">
            {draft.tariffs.map((tariff, index) => <TariffEditor key={tariff.id} tariff={tariff} onChange={(value) => updateTariff(index, value)} />)}
          </div>
        </section>

        <div className="mt-6 flex flex-wrap gap-3">
          <button onClick={save} disabled={isSaving} className="rounded-xl bg-accent-gold px-6 py-4 text-sm font-extrabold uppercase text-white hover:bg-accent-gold-light disabled:opacity-60">{isSaving ? 'Сохраняю...' : 'Сохранить изменения'}</button>
          <button onClick={reset} disabled={isSaving} className="rounded-xl border border-border-default bg-white px-6 py-4 text-sm font-bold uppercase text-text-muted hover:border-accent-gold hover:text-accent-gold disabled:opacity-60">Сбросить к базовым</button>
        </div>
      </div>
    </main>
  );
}
