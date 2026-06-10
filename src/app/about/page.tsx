'use client';

import Link from 'next/link';
import BrandImage from '@/components/brand/BrandImage';
import { useBrandProfile } from '@/lib/brand/useBrandProfile';
import { useSiteContent } from '@/lib/site-content/useSiteContent';

export default function AboutTrainerPage() {
  const { content } = useSiteContent();
  const { profile } = useBrandProfile();
  return (
    <main className="min-h-screen bg-bg-primary p-4 text-text-primary md:p-8">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm font-bold text-accent-gold hover:underline">← На главную</Link>
        <section className="mt-6 grid gap-8 rounded-3xl border border-border-default bg-white p-5 shadow-xl shadow-stone-300/20 md:grid-cols-[0.9fr_1.1fr] md:p-8">
          <div className="overflow-hidden rounded-3xl bg-bg-secondary"><div className="aspect-[3/4]"><BrandImage assetKey="mainPhoto" fallbackLabel="Фото тренера" /></div></div>
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent-gold">О тренере</p>
            <h1 className="mt-3 font-extrabold">{content.coachName}</h1>
            <p className="mt-2 text-xl font-bold text-text-primary">{profile.role}</p>
            <p className="mt-2 inline-flex rounded-full bg-bg-primary px-4 py-2 text-sm font-extrabold uppercase tracking-wider text-accent-gold">{content.experienceBadge} лет опыта</p>
            <p className="mt-6 text-base leading-relaxed text-text-muted">{content.bio}</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div><h2 className="text-2xl font-extrabold">Спортивные достижения</h2><ul className="mt-4 space-y-3">{profile.achievements.map((item) => <li key={item} className="rounded-xl border border-border-default bg-bg-primary p-4 text-sm font-semibold">{item}</li>)}</ul></div>
              <div><h2 className="text-2xl font-extrabold">Сертификаты</h2><ul className="mt-4 space-y-3">{profile.certificates.map((item) => <li key={item} className="rounded-xl border border-border-default bg-bg-primary p-4 text-sm font-semibold">{item}</li>)}</ul></div>
            </div>
          </div>
        </section>
        <section className="mt-8"><h2 className="text-2xl font-extrabold">Галерея фотографий</h2><div className="mt-5 grid gap-5 md:grid-cols-3">{[['benchPhoto', 'Фото жима лёжа'], ['squatPhoto', 'Фото приседаний'], ['deadliftPhoto', 'Фото становой тяги'], ['clientWorkPhoto', 'Работа с клиентами'], ['achievementGallery', 'Галерея достижений']].map(([key, label]) => <div key={key} className="overflow-hidden rounded-2xl border border-border-default bg-white shadow-sm"><div className="aspect-[4/3]"><BrandImage assetKey={key as any} fallbackLabel={label} /></div><div className="p-4 text-sm font-bold text-text-primary">{label}</div></div>)}</div></section>
      </div>
    </main>
  );
}
