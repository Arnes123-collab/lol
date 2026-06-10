export type BrandAssetKey =
  | 'mainPhoto'
  | 'benchPhoto'
  | 'squatPhoto'
  | 'deadliftPhoto'
  | 'clientWorkPhoto'
  | 'achievementGallery';

export type BrandAsset = {
  key: BrandAssetKey;
  label: string;
  description: string;
  imageUrl: string;
};

export type TrainerBrandProfile = {
  coachName: string;
  role: string;
  experience: string;
  bio: string;
  achievements: string[];
  certificates: string[];
  assets: BrandAsset[];
};

export const BRAND_STORAGE_KEY = 'agashka_trainer_brand_v1';

export const defaultBrandAssets: BrandAsset[] = [
  { key: 'mainPhoto', label: 'Главное фото', description: 'Hero-блок и страница о тренере', imageUrl: '' },
  { key: 'benchPhoto', label: 'Фото жима лёжа', description: 'Блок личного бренда и галерея', imageUrl: '' },
  { key: 'squatPhoto', label: 'Фото приседаний', description: 'Галерея упражнений тренера', imageUrl: '' },
  { key: 'deadliftPhoto', label: 'Фото становой тяги', description: 'Галерея упражнений тренера', imageUrl: '' },
  { key: 'clientWorkPhoto', label: 'Фото работы с клиентами', description: 'Доверие и социальное доказательство', imageUrl: '' },
  { key: 'achievementGallery', label: 'Галерея достижений', description: 'Медали, соревнования, сертификаты', imageUrl: '' },
];

export const defaultBrandProfile: TrainerBrandProfile = {
  coachName: 'Агашка',
  role: 'Тренер по жиму лёжа и силовой подготовке',
  experience: '30+ лет опыта',
  bio:
    'Я занимаюсь силовой подготовкой более 30 лет. Моя специализация - жим лёжа, пауэрлифтинг и безопасная силовая подготовка для людей 40+. Работаю так, чтобы человек становился сильнее, но сохранял плечи, колени и поясницу.',
  achievements: [
    '30+ лет практического опыта в силовой подготовке',
    'Специализация: жим лёжа, пауэрлифтинг, народный жим',
    'Работа с возрастными клиентами 40+, 50+, 60+',
    'Системный подход к профилактике травм плеч, коленей и поясницы',
  ],
  certificates: [
    'Сертификаты и документы можно добавить через админ-панель',
    'Фотографии соревнований и достижений готовы к подключению',
  ],
  assets: defaultBrandAssets,
};
