const forGroups = [
  {
    emoji: "💪",
    title: "Хочешь стать сильнее",
    desc: "Никогда не поднимал тяжести или давно не тренировался. Хочешь начать безопасно и системно.",
  },
  {
    emoji: "🦷",
    title: "Есть боли в суставах",
    desc: "Беспокоят плечи, колени или поясница. Хочешь тренироваться, не причиняя вреда телу.",
  },
  {
    emoji: "📅",
    title: "Тебе 40+",
    desc: "Понимаешь: тело работает иначе. Нужен тренер, который строит программу под твои особенности.",
  },
  {
    emoji: "🏠",
    title: "Зал или дом",
    desc: "Тренируешься в зале или дома — составлю программу под твои условия и оборудование.",
  },
  {
    emoji: "🎯",
    title: "Нужен план",
    desc: "Устал от хаоса и случайных тренировок. Хочешь чёткую систему с прогрессом.",
  },
  {
    emoji: "⚡",
    title: "Пауэрлифтинг",
    desc: "Интересует жим лёжа, приседания или становая тяга. Хочешь работать над техникой и результатом.",
  },
];

const notFor = [
  "Тех, кто ищет «качалку» для накачки мышц без цели",
  "Тех, кто не готов слушать тренера и работать системно",
  "Тех, кто хочет результат за 2 недели без усилий",
];

export default function WhoIsItFor() {
  return (
    <section id="for-whom" className="section-padding bg-[#F8F4EC]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C62828]" />
            <span className="font-display text-[#C62828] text-xs tracking-[0.3em] uppercase">
              Кому подходит
            </span>
          </div>
          <h2
            className="font-display text-[#222222] uppercase"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Это для тебя,
            <br />
            <span className="text-[#C62828]">если...</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {forGroups.map((item) => (
            <div
              key={item.title}
              className="p-6 bg-[#FFFFFF] border border-[#E5DED3] hover:border-[#C62828]/40 transition-all duration-200 group"
            >
              <div className="text-3xl mb-4">{item.emoji}</div>
              <h3 className="font-display text-[#222222] text-lg uppercase tracking-wide mb-2 group-hover:text-[#C62828] transition-colors">
                {item.title}
              </h3>
              <p className="font-body text-[#666] text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Not for section */}
        <div className="p-6 bg-[#111] border border-[#E5DED3] border-l-2 border-l-[#CC2200]">
          <p className="font-display text-[#CC2200] text-sm tracking-[0.2em] uppercase mb-4">
            Это НЕ подойдёт, если:
          </p>
          <div className="space-y-2">
            {notFor.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="text-[#CC2200] text-lg leading-none">✕</span>
                <span className="font-body text-[#666666] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
