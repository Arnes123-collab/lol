import { defaultSiteContent } from './site-content/defaultSiteContent';

export const SITE_CONFIG = {
  coachName: defaultSiteContent.coachName,
  brand: defaultSiteContent.brandName,
  experienceText: defaultSiteContent.experienceText,
  phoneDisplay: defaultSiteContent.phoneDisplay,
  phoneRaw: defaultSiteContent.phoneRaw,
  whatsappUrl: defaultSiteContent.whatsappUrl,
  instagram: defaultSiteContent.instagram,
  freeLessonText: defaultSiteContent.freeLessonText,
};

export const TARIFFS = defaultSiteContent.tariffs.map(({ badge, description, features, featured, ...tariff }) => tariff) as readonly {
  id: string;
  name: string;
  price: number;
  usd?: number;
  duration: string;
}[];
