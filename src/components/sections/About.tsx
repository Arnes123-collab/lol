'use client';

import BrandImage from '@/components/brand/BrandImage';
import { useBrandProfile } from '@/lib/brand/useBrandProfile';
import { useSiteContent } from '@/lib/site-content/useSiteContent';

const values = [
  { title: 'Результат без травм', desc: 'Методика строится вокруг техники, дозировки нагрузки и восстановления суставов.' },
  { title: 'Индивидуальный подход', desc: 'Программа составляется под цель, возраст, уровень, оборудование и ограничения клиента.' },
  { title: 'Системный прогресс', desc: 'Подходы, повторы, проценты, отдых и контроль отчётов - всё фиксируется в системе.' },
];

export default function About() {
  const { content } = useSiteContent();
  const { profile } = useBrandProfile();
  return (
    <section id="about" className="section-padding bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 max-w-3xl">
          <div className="mb-4 h-1 w-14 rounded-full bg-accent-gold" />
          <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent-gold">{content.aboutSubtitle}</p>
          <h2 className="mt-3 font-extrabold text-text-primary">{content.aboutTitle}</h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">{content.bio}</p>
        </div>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="overflow-hidden rounded-3xl border border-border-default bg-bg-primary p-3 shadow-xl shadow-stone-300/30"><div className="aspect-[3/4] overflow-hidden rounded-2xl bg-bg-secondary"><BrandImage assetKey="mainPhoto" fallbackLabel="Фото тренера" /></div></div>
            <div className="mt-5 grid gap-3">{profile.achievements.map((item) => <div key={item} className="rounded-xl border border-border-default bg-white p-4 text-sm font-semibold text-text-primary shadow-sm">{item}</div>)}</div>
          </div>
          <div className="space-y-5">
            <div className="rounded-3xl border border-border-default bg-bg-primary p-6">
              <p className="text-lg font-bold text-accent-gold">{content.signatureText}</p>
              <p className="mt-4 text-text-muted">Основная аудитория - люди после 40 лет, которые хотят стать сильнее, но не хотят платить за прогресс плечами, коленями и поясницей. Подход тренера - практичный, цифры понятные, нагрузка управляемая.</p>
            </div>
            {values.map((value) => <div key={value.title} className="rounded-2xl border border-border-default bg-white p-5 shadow-sm"><h3 className="text-xl font-extrabold text-text-primary">{value.title}</h3><p className="mt-2 text-sm leading-relaxed text-text-muted">{value.desc}</p></div>)}
            <div className="grid grid-cols-2 gap-4">{[['benchPhoto', 'Жим лёжа'], ['clientWorkPhoto', 'Работа с клиентами']].map(([key, label]) => <div key={key} className="overflow-hidden rounded-2xl border border-border-default bg-bg-secondary"><div className="aspect-[4/3]"><BrandImage assetKey={key as any} fallbackLabel={label} /></div></div>)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
