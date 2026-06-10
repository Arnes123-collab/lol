import { defaultSiteContent, type SiteContent } from './defaultSiteContent';

export function normalizePhoneRaw(phone: string) {
  return (phone || '').replace(/\D/g, '');
}

export function normalizeInstagram(input: string) {
  const value = (input || '').trim();
  if (!value) return '';
  return value.startsWith('@') ? value : `@${value}`;
}

export function instagramUrl(input: string) {
  const handle = normalizeInstagram(input).replace('@', '');
  return handle ? `https://instagram.com/${handle}` : '#';
}

export function prepareSiteContent(input: SiteContent): SiteContent {
  const phoneRaw = normalizePhoneRaw(input.phoneRaw || input.phoneDisplay);
  const whatsappUrl = input.whatsappUrl?.trim() || (phoneRaw ? `https://wa.me/${phoneRaw}` : defaultSiteContent.whatsappUrl);

  return {
    ...input,
    phoneDisplay: (input.phoneDisplay || '').trim(),
    phoneRaw,
    whatsappUrl,
    instagram: normalizeInstagram(input.instagram),
    youtube: (input.youtube || '').trim(),
    tariffs: (input.tariffs || defaultSiteContent.tariffs).map((tariff) => ({
      ...tariff,
      price: Number(tariff.price) || 0,
      usd: Number(tariff.usd) || 0,
      features: Array.isArray(tariff.features) ? tariff.features.filter(Boolean) : [],
    })),
  };
}

export function mergeSiteContent(input: Partial<SiteContent> | null | undefined): SiteContent {
  const incoming = input || {};
  const tariffs = defaultSiteContent.tariffs.map((tariff) => {
    const saved = incoming.tariffs?.find((item) => item.id === tariff.id);
    return saved ? { ...tariff, ...saved } : tariff;
  });

  return prepareSiteContent({
    ...defaultSiteContent,
    ...incoming,
    tariffs,
  });
}

export function isDefaultSiteContent(content: SiteContent) {
  return JSON.stringify(content) === JSON.stringify(defaultSiteContent);
}
