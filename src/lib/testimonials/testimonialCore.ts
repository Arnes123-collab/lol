import { defaultTestimonials, type ClientTestimonial } from './defaultTestimonials';

export function normalizeTags(input: string[] | string | undefined): string[] {
  if (Array.isArray(input)) return input.map((item) => item.trim()).filter(Boolean);
  if (typeof input === 'string') return input.split('\n').map((item) => item.trim()).filter(Boolean);
  return [];
}

export function prepareTestimonials(input: Partial<ClientTestimonial>[] | null | undefined): ClientTestimonial[] {
  const source = Array.isArray(input) ? input : defaultTestimonials;
  return source.map((item, index) => ({
    id: item.id || `testimonial-${Date.now()}-${index}`,
    name: item.name || 'Клиент',
    age: item.age || '',
    goal: item.goal || '',
    result: item.result || '',
    period: item.period || '',
    text: item.text || '',
    tags: normalizeTags(item.tags),
    beforeValue: item.beforeValue || '',
    afterValue: item.afterValue || '',
    photoUrl: item.photoUrl || '',
    videoUrl: item.videoUrl || '',
    isVisible: item.isVisible !== false,
    sortOrder: Number(item.sortOrder) || index + 1,
  })).sort((a, b) => a.sortOrder - b.sortOrder);
}

export function visibleTestimonials(input: ClientTestimonial[]) {
  return prepareTestimonials(input).filter((item) => item.isVisible);
}
