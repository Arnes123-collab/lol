'use client';

import { useTestimonials } from '@/lib/testimonials/useTestimonials';
import { visibleTestimonials } from '@/lib/testimonials/testimonialCore';

export default function Results() {
  const { testimonials } = useTestimonials();
  const visible = visibleTestimonials(testimonials);

  return (
    <section id="results" className="section-padding bg-[#FFFFFF]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-14 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-[#C62828]" />
            <span className="font-display text-xs uppercase tracking-[0.3em] text-[#C62828]">Отзывы и результаты</span>
            <div className="h-px w-8 bg-[#C62828]" />
          </div>
          <h2 className="font-display uppercase text-[#222222]" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Реальные кейсы
            <br />
            <span className="text-[#C62828]">учеников</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#666]">
            Эти карточки редактируются через админку: /admin/testimonials. Можно менять текст, результат, период, теги, фото и скрывать лишние кейсы.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {visible.map((item) => (
            <article key={item.id} className="rounded-3xl border border-[#E5DED3] bg-[#F8F4EC] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              {item.photoUrl ? (
                <div className="mb-5 aspect-[4/3] overflow-hidden rounded-2xl border border-[#E5DED3] bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.photoUrl} alt={item.name} className="h-full w-full object-cover" />
                </div>
              ) : null}
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <div className="font-display text-2xl font-black uppercase text-[#C62828]">{item.result}</div>
                  <div className="mt-1 font-display text-sm uppercase tracking-wider text-[#444]">{item.period}</div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center border border-[#C62828]/20 text-[#C62828]">✓</div>
              </div>

              {(item.beforeValue || item.afterValue) && (
                <div className="mb-5 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl border border-[#E5DED3] bg-white p-3"><span className="block text-xs uppercase text-[#999]">До</span><strong>{item.beforeValue || '-'}</strong></div>
                  <div className="rounded-xl border border-[#E5DED3] bg-white p-3"><span className="block text-xs uppercase text-[#999]">После</span><strong>{item.afterValue || '-'}</strong></div>
                </div>
              )}

              <p className="mb-5 border-l-2 border-[#E5DED3] pl-4 font-body text-sm italic leading-relaxed text-[#666]">«{item.text}»</p>
              <div className="mb-4 text-sm text-[#666]"><strong className="text-[#222]">Цель:</strong> {item.goal}</div>
              {item.videoUrl ? <a href={item.videoUrl} target="_blank" rel="noopener noreferrer" className="mb-4 inline-block text-sm font-bold text-[#C62828]">Смотреть видео</a> : null}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-display text-sm uppercase tracking-wider text-[#666666]">— {item.name}{item.age ? `, ${item.age}` : ''}</span>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="bg-[#E5DED3] px-2 py-0.5 font-display text-xs uppercase tracking-wider text-[#444]">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center font-body text-xs text-[#999]">
          Результаты индивидуальны и зависят от регулярности, питания и исходного уровня подготовки.
        </p>
      </div>
    </section>
  );
}
