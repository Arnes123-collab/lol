export type SiteTariff = {
  id: string;
  name: string;
  price: number;
  usd?: number;
  duration: string;
  badge: string;
  description: string;
  features: string[];
  featured?: boolean;
};

export type SiteContent = {
  coachName: string;
  brandName: string;
  experienceBadge: string;
  experienceText: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappUrl: string;
  instagram: string;
  youtube: string;
  country: string;
  city: string;
  freeLessonText: string;
  heroTitle: string;
  heroSubtitle: string;
  heroNote: string;
  aboutTitle: string;
  aboutSubtitle: string;
  bio: string;
  signatureText: string;
  contactsTitle: string;
  pricingTitle: string;
  pricingSubtitle: string;
  tariffs: SiteTariff[];
};

export const defaultSiteContent: SiteContent = {
  coachName: 'Агашка',
  brandName: 'AGASHKA POWERLIFTING',
  experienceBadge: '30+',
  experienceText: 'более 30 лет',
  phoneDisplay: '+7 747 845 7055',
  phoneRaw: '77478457055',
  whatsappUrl: 'https://wa.me/77478457055',
  instagram: 'agashka.powerlifting',
  youtube: '',
  country: 'Казахстан',
  city: 'Алматы',
  freeLessonText: 'Первое занятие бесплатно',
  heroTitle: 'Стань сильнее без боли после 40',
  heroSubtitle: 'Персональные программы по жиму лёжа, пауэрлифтингу и силовой подготовке с учётом здоровья плеч, коленей и поясницы.',
  heroNote: 'Онлайн и офлайн · Казахстан · Первое занятие бесплатно',
  aboutTitle: 'Тренирую осознанно. Работаю на результат.',
  aboutSubtitle: 'О тренере',
  bio: 'Я занимаюсь силовой подготовкой более 30 лет. Моя специализация - жим лёжа и пауэрлифтинг для людей, которые хотят стать сильнее, но при этом сохранить здоровье суставов на долгие годы.',
  signatureText: 'С вами, как всегда, agashka.powerlifting из Казахстана',
  contactsTitle: 'Напиши мне прямо сейчас',
  pricingTitle: 'Выбери свой формат работы',
  pricingSubtitle: 'Можно начать с одного бесплатного занятия, а дальше выбрать готовый план или полное онлайн-ведение.',
  tariffs: [
    {
      id: 'free_lesson',
      name: 'Бесплатное занятие',
      price: 0,
      usd: 0,
      duration: '1 занятие',
      badge: 'Старт',
      description: 'Первое занятие бесплатно - чтобы оценить технику, боли, уровень подготовки и понять, подходит ли формат работы.',
      features: ['1 пробное занятие', 'Оценка техники', 'Первичная рекомендация', 'Онлайн или офлайн'],
    },
    {
      id: 'plan_month',
      name: 'План на месяц',
      price: 6000,
      usd: 15,
      duration: '4 недели',
      badge: 'Месяц',
      description: 'Готовый тренировочный план на 4 недели для самостоятельной работы с понятной структурой.',
      features: ['План на месяц', '3-5 тренировок в неделю', 'Упражнения, подходы, повторы', 'PDF и WhatsApp-формат'],
      featured: true,
    },
    {
      id: 'plan_12_weeks',
      name: 'План на 12 недель',
      price: 15000,
      usd: 35,
      duration: '12 недель',
      badge: '12 недель',
      description: 'Среднесрочная программа для системного прогресса в силе, технике и восстановлении.',
      features: ['Периодизация на 12 недель', 'Контроль нагрузки', 'Профилактика плеч/спины', 'План под цель клиента'],
    },
    {
      id: 'competition_16_weeks',
      name: 'План на 16 недель - подготовка к соревнованиям',
      price: 18000,
      usd: 40,
      duration: '16 недель',
      badge: 'Соревнования',
      description: 'Подготовка к соревнованиям с постепенным выходом на пик и контролем восстановления.',
      features: ['16 недель подготовки', 'Пиковый цикл', 'Жимовая специализация', 'Контроль тяжёлых недель'],
    },
    {
      id: 'full_online_month',
      name: 'Полное онлайн ведение',
      price: 40000,
      usd: 85,
      duration: '1 месяц',
      badge: 'Ведение',
      description: 'Полное онлайн-ведение: план, отчёты, корректировки, связь и разбор техники.',
      features: ['1 месяц сопровождения', 'Корректировки по отчётам', 'Видеоразбор техники', 'Поддержка в WhatsApp'],
    },
  ],
};

export const SITE_CONTENT_STORAGE_KEY = 'agashka_site_content_v1';
