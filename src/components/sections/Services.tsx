const services = [
  {
    num: "01",
    title: "Жим лёжа",
    subtitle: "Техника и результат",
    desc: "Разбираем технику жима с нуля или улучшаем существующую. Программа на увеличение максимального веса без травм плеч и запястий.",
    tags: ["Техника", "Прогрессия нагрузки", "Здоровье плеч"],
  },
  {
    num: "02",
    title: "Пауэрлифтинг",
    subtitle: "Жим · Присед · Тяга",
    desc: "Полная подготовка по трём движениям. Соревновательный или любительский уровень. Безопасная работа с суставами на каждом этапе.",
    tags: ["3 движения", "Периодизация", "Безопасность"],
  },
  {
    num: "03",
    title: "Силовая 40+",
    subtitle: "Здоровье и долголетие",
    desc: "Специальная программа для людей после 40. Фокус на укреплении суставов, поясницы и общей физической силе. Без «стандартных» схем.",
    tags: ["40+ лет", "Суставы", "Поясница · Колени"],
  },
  {
    num: "04",
    title: "Онлайн-ведение",
    subtitle: "Удалённо по всему Казахстану",
    desc: "Получаешь программу в приложении, ведёшь дневник тренировок, я анализирую прогресс и корректирую план. Связь через WhatsApp.",
    tags: ["WhatsApp", "Дневник", "Корректировки"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-[#F8F4EC]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C62828]" />
            <span className="font-display text-[#C62828] text-xs tracking-[0.3em] uppercase">
              Услуги
            </span>
          </div>
          <h2
            className="font-display text-[#222222] uppercase"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Что я
            <br />
            <span className="text-[#C62828]">предлагаю</span>
          </h2>
        </div>

        {/* Services list */}
        <div className="space-y-1">
          {services.map((service, idx) => (
            <div
              key={service.num}
              className="group flex flex-col md:flex-row md:items-start gap-6 p-6 md:p-8 bg-[#FFFFFF] border border-[#E5DED3] hover:border-[#C62828]/30 hover:bg-[#FFFFFF] transition-all duration-200"
            >
              {/* Number */}
              <div className="flex-shrink-0">
                <span className="font-display text-[#C62828]/20 text-5xl font-black group-hover:text-[#C62828]/40 transition-colors">
                  {service.num}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="mb-1">
                  <span className="font-display text-[#666666] text-xs tracking-[0.2em] uppercase">
                    {service.subtitle}
                  </span>
                </div>
                <h3 className="font-display text-[#222222] text-2xl uppercase tracking-wide mb-3 group-hover:text-[#C62828] transition-colors">
                  {service.title}
                </h3>
                <p className="font-body text-[#666] leading-relaxed mb-4">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-display text-xs tracking-wider uppercase px-3 py-1 border border-[#E5DED3] text-[#666666] group-hover:border-[#C62828]/20 group-hover:text-[#666666] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  className="text-[#C62828]"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
