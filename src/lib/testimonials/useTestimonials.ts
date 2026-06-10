'use client';

import { useEffect, useState } from 'react';
import { defaultTestimonials, TESTIMONIALS_STORAGE_KEY, type ClientTestimonial } from './defaultTestimonials';
import { prepareTestimonials } from './testimonialCore';

export const TESTIMONIALS_UPDATED_EVENT = 'testimonials-updated';
type Source = 'server' | 'local' | 'default';
type ApiResponse = { source?: 'supabase' | 'default' | 'local'; testimonials?: Partial<ClientTestimonial>[]; error?: string };

function isDefault(items: ClientTestimonial[]) {
  return JSON.stringify(prepareTestimonials(items)) === JSON.stringify(defaultTestimonials);
}

export function readTestimonialsFromStorage(): ClientTestimonial[] {
  if (typeof window === 'undefined') return defaultTestimonials;
  try {
    const raw = window.localStorage.getItem(TESTIMONIALS_STORAGE_KEY);
    if (!raw) return defaultTestimonials;
    return prepareTestimonials(JSON.parse(raw));
  } catch {
    return defaultTestimonials;
  }
}

export function saveTestimonialsToStorage(testimonials: ClientTestimonial[]) {
  if (typeof window === 'undefined') return prepareTestimonials(testimonials);
  const prepared = prepareTestimonials(testimonials);
  window.localStorage.setItem(TESTIMONIALS_STORAGE_KEY, JSON.stringify(prepared));
  window.dispatchEvent(new CustomEvent(TESTIMONIALS_UPDATED_EVENT, { detail: prepared }));
  return prepared;
}

async function fetchFromServer(): Promise<{ testimonials: ClientTestimonial[]; source: Source }> {
  const response = await fetch('/api/testimonials', { cache: 'no-store' });
  if (!response.ok) throw new Error('Не удалось загрузить отзывы с сервера.');
  const data = (await response.json()) as ApiResponse;
  if (data.source !== 'supabase' || !data.testimonials) return { testimonials: defaultTestimonials, source: 'default' };
  return { testimonials: prepareTestimonials(data.testimonials), source: 'server' };
}

export async function saveTestimonials(testimonials: ClientTestimonial[]): Promise<{ testimonials: ClientTestimonial[]; source: Source; warning?: string }> {
  const prepared = saveTestimonialsToStorage(testimonials);
  let response: Response;
  try {
    response = await fetch('/api/testimonials', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ testimonials: prepared }),
    });
  } catch {
    return { testimonials: prepared, source: 'local', warning: 'Сервер недоступен. Отзывы сохранены локально.' };
  }
  const data = (await response.json().catch(() => ({}))) as ApiResponse;
  if (!response.ok) {
    if (response.status === 401) throw new Error(data.error || 'Нет доступа. Войдите в админку.');
    return { testimonials: prepared, source: 'local', warning: data.error || 'Supabase не подключён. Отзывы сохранены локально.' };
  }
  const saved = prepareTestimonials(data.testimonials || prepared);
  saveTestimonialsToStorage(saved);
  return { testimonials: saved, source: data.source === 'supabase' ? 'server' : 'local' };
}

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState<ClientTestimonial[]>(defaultTestimonials);
  const [source, setSource] = useState<Source>('default');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let active = true;
    const local = readTestimonialsFromStorage();
    setTestimonials(local);
    setSource(isDefault(local) ? 'default' : 'local');
    setReady(true);

    fetchFromServer().then((serverResult) => {
      if (!active) return;
      if (serverResult.source === 'server') {
        saveTestimonialsToStorage(serverResult.testimonials);
        setTestimonials(serverResult.testimonials);
        setSource('server');
        return;
      }
      const current = readTestimonialsFromStorage();
      setTestimonials(current);
      setSource(isDefault(current) ? 'default' : 'local');
    }).catch(() => {
      if (!active) return;
      const fallback = readTestimonialsFromStorage();
      setTestimonials(fallback);
      setSource(isDefault(fallback) ? 'default' : 'local');
    });

    const onStorage = (event: StorageEvent) => {
      if (event.key === TESTIMONIALS_STORAGE_KEY) {
        const next = readTestimonialsFromStorage();
        setTestimonials(next);
        setSource(isDefault(next) ? 'default' : 'local');
      }
    };
    const onUpdated = (event: Event) => {
      const custom = event as CustomEvent<ClientTestimonial[]>;
      const next = prepareTestimonials(custom.detail || readTestimonialsFromStorage());
      setTestimonials(next);
      setSource(isDefault(next) ? 'default' : 'local');
    };
    window.addEventListener('storage', onStorage);
    window.addEventListener(TESTIMONIALS_UPDATED_EVENT, onUpdated);
    return () => {
      active = false;
      window.removeEventListener('storage', onStorage);
      window.removeEventListener(TESTIMONIALS_UPDATED_EVENT, onUpdated);
    };
  }, []);

  return { testimonials, source, ready };
}
