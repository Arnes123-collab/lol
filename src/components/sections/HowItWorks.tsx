const steps = [
  {
    num: "01",
    title: "Оставь заявку",
    desc: "Заполни форму ниже или напиши в WhatsApp. Это займёт 5 минут.",
  },
  {
    num: "02",
    title: "Разговор с тренером",
    desc: "Обсудим твои цели, здоровье и возможности. Составим первичный план.",
  },
  {
    num: "03",
    title: "Первое бесплатное занятие",
    desc: "Одно бесплатное занятие. Постановка техники и оценка исходного уровня.",
  },
  {
    num: "04",
    title: "Программа под тебя",
    desc: "Составляю индивидуальную программу с учётом твоих особенностей и целей.",
  },
  {
    num: "05",
    title: "Тренировки и прогресс",
    desc: "Работаем по плану. Я слежу за прогрессом и корректирую нагрузку.",
  },
  {
    num: "06",
    title: "Результат",
    desc: "Сила, здоровье суставов и уверенность в каждом подходе. Долгосрочно.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-[#F8F4EC]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C62828]" />
            <span className="font-display text-[#C62828] text-xs tracking-[0.3em] uppercase">
              Как проходит работа
            </span>
          </div>
          <h2
            className="font-display text-[#222222] uppercase"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Шесть шагов
            <br />
            <span className="text-[#C62828]">к результату</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line on desktop */}
          <div className="hidden md:block absolute left-[2.2rem] top-0 bottom-0 w-px bg-gradient-to-b from-[#C62828]/30 via-[#C62828]/10 to-transparent" />

          <div className="space-y-2">
            {steps.map((step, idx) => (
              <div key={step.num} className="flex gap-6 md:gap-8 group">
                {/* Number circle */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-16 h-16 border border-[#E5DED3] bg-[#FFFFFF] group-hover:border-[#C62828]/50 flex items-center justify-center transition-colors duration-200 relative z-10">
                    <span className="font-display text-[#C62828] text-lg font-black">
                      {step.num}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8 pt-3">
                  <h3 className="font-display text-[#222222] text-xl uppercase tracking-wide mb-2 group-hover:text-[#C62828] transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-body text-[#666] leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 pt-10 border-t border-[#E5DED3] flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="flex-1">
            <p className="font-display text-[#222222] text-xl uppercase tracking-wide">
              Готов начать?
            </p>
            <p className="font-body text-[#666666] text-sm mt-1">
              Первый шаг занимает 5 минут.
            </p>
          </div>
          <a
            href="#form"
            className="inline-flex items-center gap-3 font-display text-sm tracking-[0.15em] uppercase px-8 py-4 bg-[#C62828] text-white hover:bg-[#E53935] transition-all duration-200"
          >
            Оставить заявку
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
