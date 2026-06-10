'use client';

import { useSiteContent } from '@/lib/site-content/useSiteContent';

function formatPrice(price: number, usd?: number) {
  if (price === 0) return 'Бесплатно';
  return `${price.toLocaleString('ru-RU')} ₸` + (usd ? ` / ${usd} $` : '');
}

export default function Pricing() {
  const { content } = useSiteContent();
  const titleParts = content.pricingTitle.split(' ');
  return (
    <section id="pricing" className="section-padding bg-[#F8F4EC]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4"><div className="w-8 h-px bg-[#C62828]" /><span className="font-display text-[#C62828] text-xs tracking-[0.3em] uppercase">Тарифы</span></div>
          <h2 className="font-display text-[#222222] uppercase" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>{titleParts.slice(0, -2).join(' ') || 'Выбери свой'}<br /><span className="text-[#C62828]">{titleParts.slice(-2).join(' ') || 'формат работы'}</span></h2>
          <p className="font-body text-[#666666] text-base mt-4 max-w-lg">{content.pricingSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
          {content.tariffs.map((tariff) => (
            <div key={tariff.id} className={`relative flex flex-col p-6 border transition-all duration-200 ${tariff.featured ? 'bg-[#FFFFFF] border-[#C62828] scale-[1.02]' : 'bg-[#FFFFFF] border-[#E5DED3] hover:border-[#C62828]/30'}`}>
              <div className="mb-6"><span className={`font-display text-xs tracking-[0.2em] uppercase px-3 py-1 ${tariff.featured ? 'bg-[#C62828] text-white' : 'border border-[#D8D0C4] text-[#666666]'}`}>{tariff.badge}</span></div>
              <h3 className="font-display text-[#222222] text-xl uppercase tracking-wide mb-2">{tariff.name}</h3>
              <div className="mb-2"><span className="font-display text-[#C62828] text-3xl font-black">{formatPrice(tariff.price, tariff.usd)}</span></div>
              <div className="font-body text-[#666666] text-xs tracking-widest uppercase mb-5 pb-5 border-b border-[#E5DED3]">{tariff.duration}</div>
              <p className="font-body text-[#666] text-sm leading-relaxed mb-6">{tariff.description}</p>
              <div className="flex-1 space-y-2.5 mb-8">{tariff.features.map((f) => <div key={f} className="font-body text-[#777] text-sm">✓ {f}</div>)}</div>
              <a href="#form" className={`inline-flex items-center justify-center font-display text-xs tracking-[0.15em] uppercase px-4 py-3 transition-all duration-200 ${tariff.featured ? 'bg-[#C62828] text-white hover:bg-[#E53935]' : 'border border-[#D8D0C4] text-[#666666] hover:border-[#C62828] hover:text-[#222222]'}`}>Выбрать</a>
            </div>
          ))}
        </div>
        <p className="text-center font-body text-[#444] text-sm mt-8">Оплата: Kaspi / наличные · {content.country}</p>
      </div>
    </section>
  );
}
