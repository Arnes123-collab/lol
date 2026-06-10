'use client';

import { useEffect, useState } from 'react';
import { defaultSiteContent, SITE_CONTENT_STORAGE_KEY, type SiteContent } from './defaultSiteContent';
import { isDefaultSiteContent, mergeSiteContent, prepareSiteContent, normalizeInstagram, instagramUrl } from './siteContentCore';

export { normalizeInstagram, instagramUrl, prepareSiteContent, mergeSiteContent };

export const SITE_CONTENT_UPDATED_EVENT = 'site-content-updated';

type SiteContentSource = 'server' | 'local' | 'default';

type SiteContentApiResponse = {
  source?: 'supabase' | 'default' | 'local';
  content?: Partial<SiteContent>;
  error?: string;
};

export function readSiteContentFromStorage(): SiteContent {
  if (typeof window === 'undefined') return defaultSiteContent;

  try {
    const raw = window.localStorage.getItem(SITE_CONTENT_STORAGE_KEY);
    if (!raw) return defaultSiteContent;
    return mergeSiteContent(JSON.parse(raw));
  } catch {
    return defaultSiteContent;
  }
}

export function saveSiteContentToStorage(content: SiteContent) {
  if (typeof window === 'undefined') return prepareSiteContent(content);
  const prepared = prepareSiteContent(content);
  window.localStorage.setItem(SITE_CONTENT_STORAGE_KEY, JSON.stringify(prepared));
  window.dispatchEvent(new CustomEvent(SITE_CONTENT_UPDATED_EVENT, { detail: prepared }));
  return prepared;
}

export async function fetchSiteContentFromServer(): Promise<{ content: SiteContent; source: SiteContentSource }> {
  const response = await fetch('/api/site-content', { cache: 'no-store' });
  if (!response.ok) throw new Error('Не удалось загрузить настройки сайта с сервера.');
  const data = (await response.json()) as SiteContentApiResponse;

  if (data.source !== 'supabase' || !data.content) {
    return { content: defaultSiteContent, source: 'default' };
  }

  return { content: mergeSiteContent(data.content), source: 'server' };
}

export async function saveSiteContent(content: SiteContent): Promise<{ content: SiteContent; source: SiteContentSource; warning?: string }> {
  const prepared = prepareSiteContent(content);
  saveSiteContentToStorage(prepared);

  let response: Response;
  try {
    response = await fetch('/api/site-content', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: prepared }),
    });
  } catch {
    return { content: prepared, source: 'local', warning: 'Сервер недоступен. Данные сохранены локально в этом браузере.' };
  }

  const data = (await response.json().catch(() => ({}))) as SiteContentApiResponse;

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error(data.error || 'Нет доступа. Войдите в админку заново.');
    }
    return {
      content: prepared,
      source: 'local',
      warning: data.error || 'Supabase не подключён. Данные сохранены локально в этом браузере.',
    };
  }

  const saved = mergeSiteContent(data.content || prepared);
  saveSiteContentToStorage(saved);
  return { content: saved, source: data.source === 'supabase' ? 'server' : 'local' };
}

export async function resetSiteContentOnServer(): Promise<{ content: SiteContent; source: SiteContentSource; warning?: string }> {
  return saveSiteContent(defaultSiteContent);
}

export function resetSiteContentInStorage() {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(SITE_CONTENT_STORAGE_KEY);
  window.dispatchEvent(new CustomEvent(SITE_CONTENT_UPDATED_EVENT, { detail: defaultSiteContent }));
}

export function useSiteContent() {
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);
  const [ready, setReady] = useState(false);
  const [source, setSource] = useState<SiteContentSource>('default');

  useEffect(() => {
    let active = true;

    const local = readSiteContentFromStorage();
    const hasLocal = !isDefaultSiteContent(local);
    setContent(local);
    setSource(hasLocal ? 'local' : 'default');
    setReady(true);

    fetchSiteContentFromServer()
      .then((serverResult) => {
        if (!active) return;
        if (serverResult.source === 'server') {
          saveSiteContentToStorage(serverResult.content);
          setContent(serverResult.content);
          setSource('server');
          return;
        }

        const currentLocal = readSiteContentFromStorage();
        const currentHasLocal = !isDefaultSiteContent(currentLocal);
        setContent(currentHasLocal ? currentLocal : defaultSiteContent);
        setSource(currentHasLocal ? 'local' : 'default');
      })
      .catch(() => {
        if (!active) return;
        const fallback = readSiteContentFromStorage();
        const hasFallback = !isDefaultSiteContent(fallback);
        setContent(fallback);
        setSource(hasFallback ? 'local' : 'default');
      });

    const onStorage = (event: StorageEvent) => {
      if (event.key === SITE_CONTENT_STORAGE_KEY) {
        const next = readSiteContentFromStorage();
        setContent(next);
        setSource(isDefaultSiteContent(next) ? 'default' : 'local');
      }
    };
    const onUpdated = (event: Event) => {
      const custom = event as CustomEvent<SiteContent>;
      const next = custom.detail || readSiteContentFromStorage();
      setContent(next);
      setSource(isDefaultSiteContent(next) ? 'default' : 'local');
    };

    window.addEventListener('storage', onStorage);
    window.addEventListener(SITE_CONTENT_UPDATED_EVENT, onUpdated);
    return () => {
      active = false;
      window.removeEventListener('storage', onStorage);
      window.removeEventListener(SITE_CONTENT_UPDATED_EVENT, onUpdated);
    };
  }, []);

  return { content, ready, source };
}
