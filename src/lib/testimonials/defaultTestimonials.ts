export type ClientTestimonial = {
  id: string;
  name: string;
  age?: string;
  goal: string;
  result: string;
  period: string;
  text: string;
  tags: string[];
  beforeValue?: string;
  afterValue?: string;
  photoUrl?: string;
  videoUrl?: string;
  isVisible: boolean;
  sortOrder: number;
};

export const TESTIMONIALS_STORAGE_KEY = 'agashka_testimonials_v1';

export const defaultTestimonials: ClientTestimonial[] = [
  {
    id: 'bench-progress-01',
    name: 'Клиент 40+',
    age: '42',
    goal: 'Увеличить жим лёжа без боли в плече',
    result: '+15 кг в жиме лёжа',
    period: '12 недель',
    text: 'План был понятный: техника, проценты, восстановление и профилактика плеч. Стало легче контролировать нагрузку.',
    tags: ['Жим лёжа', '40+', 'Плечи'],
    beforeValue: '80 кг',
    afterValue: '95 кг',
    isVisible: true,
    sortOrder: 1,
  },
  {
    id: 'health-training-02',
    name: 'Клиент с болью в пояснице',
    age: '48',
    goal: 'Вернуться к силовым тренировкам',
    result: 'Тренировки без обострений',
    period: '8 недель',
    text: 'Упражнения подбирались аккуратно. Появилась система, стало понятно, где добавлять вес, а где не спешить.',
    tags: ['Поясница', 'ОФП', 'Без боли'],
    beforeValue: 'боль 6/10',
    afterValue: 'боль 1-2/10',
    isVisible: true,
    sortOrder: 2,
  },
  {
    id: 'competition-prep-03',
    name: 'Спортсмен-любитель',
    age: '35',
    goal: 'Подготовка к старту',
    result: 'Стабильный выход на пик',
    period: '16 недель',
    text: 'Программа помогла убрать хаос. Тяжёлые, объёмные и лёгкие дни стали логичными, восстановление стало лучше.',
    tags: ['Пауэрлифтинг', 'Пик силы', '16 недель'],
    beforeValue: 'хаотичная подготовка',
    afterValue: 'плановый пик',
    isVisible: true,
    sortOrder: 3,
  },
];
