'use client';

import BrandImage from '@/components/brand/BrandImage';
import { useSiteContent } from '@/lib/site-content/useSiteContent';

export default function Hero() {
  const { content } = useSiteContent();
  return (
    <section id="hero" className="relative overflow-hidden bg-bg-primary pt-24">
      <div className="absolute inset-0 opacity-60" style={{ backgroundImage: 'radial-gradient(circle at 15% 20%, rgba(198,40,40,0.12), transparent 26%), radial-gradient(circle at 85% 5%, rgba(249,168,37,0.12), transparent 26%)' }} />
      <div className="relative mx-auto grid min-h-[88vh] max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-[1.05fr_0.95fr] md:py-20">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-accent-gold/25 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-accent-gold shadow-sm">
            {content.country} · Силовая подготовка · {content.experienceText}
          </div>
          <h1 className="max-w-3xl font-extrabold text-text-primary">{content.heroTitle}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-muted md:text-xl">{content.heroSubtitle}</p>
          <p className="mt-3 text-base font-semibold text-text-primary">{content.heroNote}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#form" className="rounded-xl bg-accent-gold px-7 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-white shadow-lg shadow-red-900/10 transition hover:bg-accent-gold-light">Записаться бесплатно</a>
            <a href="/about" className="rounded-xl border border-border-default bg-white px-7 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-text-primary transition hover:border-accent-gold hover:text-accent-gold">О тренере</a>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {[
              { num: content.experienceBadge, label: 'Лет опыта' },
              { num: '40+', label: 'Клиенты' },
              { num: '1', label: 'Бесплатное занятие' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-border-default bg-white p-4 shadow-sm">
                <div className="text-2xl font-extrabold text-accent-gold">{stat.num}</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wider text-text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-accent-gold/10" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border-default bg-white p-3 shadow-2xl shadow-stone-400/20">
            <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-bg-secondary"><BrandImage assetKey="mainPhoto" fallbackLabel="Главное фото тренера" /></div>
            <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-white/92 p-4 shadow-xl backdrop-blur">
              <div className="text-sm font-bold uppercase tracking-[0.16em] text-accent-gold">{content.brandName}</div>
              <div className="mt-1 text-lg font-extrabold text-text-primary">{content.experienceBadge} лет тренерского опыта</div>
              <div className="mt-1 text-sm text-text-muted">Жим лёжа · Пауэрлифтинг · Здоровые суставы</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
