'use client';

import { useEffect, useState } from 'react';
import { BRAND_STORAGE_KEY, defaultBrandProfile, type TrainerBrandProfile } from './defaultBrand';

export const BRAND_UPDATED_EVENT = 'trainer-brand-updated';

type BrandSource = 'server' | 'local' | 'default';

type BrandApiResponse = {
  source?: 'supabase' | 'default' | 'local';
  profile?: Partial<TrainerBrandProfile>;
  error?: string;
};

function mergeBrandProfile(input: Partial<TrainerBrandProfile> | null | undefined): TrainerBrandProfile {
  const incoming = input || {};
  const assets = defaultBrandProfile.assets.map((asset) => {
    const savedAsset = incoming.assets?.find((item) => item.key === asset.key);
    return { ...asset, ...savedAsset };
  });

  return {
    ...defaultBrandProfile,
    ...incoming,
    achievements: Array.isArray(incoming.achievements) && incoming.achievements.length ? incoming.achievements : defaultBrandProfile.achievements,
    certificates: Array.isArray(incoming.certificates) && incoming.certificates.length ? incoming.certificates : defaultBrandProfile.certificates,
    assets,
  };
}

function isDefaultBrand(profile: TrainerBrandProfile) {
  return JSON.stringify(profile) === JSON.stringify(defaultBrandProfile);
}

export function readBrandProfileFromStorage(): TrainerBrandProfile {
  if (typeof window === 'undefined') return defaultBrandProfile;

  try {
    const raw = window.localStorage.getItem(BRAND_STORAGE_KEY);
    if (!raw) return defaultBrandProfile;
    return mergeBrandProfile(JSON.parse(raw));
  } catch {
    return defaultBrandProfile;
  }
}

export function saveBrandProfileToStorage(profile: TrainerBrandProfile) {
  const prepared = mergeBrandProfile(profile);
  window.localStorage.setItem(BRAND_STORAGE_KEY, JSON.stringify(prepared));
  window.dispatchEvent(new CustomEvent(BRAND_UPDATED_EVENT, { detail: prepared }));
  return prepared;
}

export async function fetchBrandProfileFromServer(): Promise<{ profile: TrainerBrandProfile; source: BrandSource }> {
  const response = await fetch('/api/brand', { cache: 'no-store' });
  if (!response.ok) throw new Error('Не удалось загрузить бренд с сервера.');
  const data = (await response.json()) as BrandApiResponse;

  if (data.source !== 'supabase' || !data.profile) {
    return { profile: defaultBrandProfile, source: 'default' };
  }

  return { profile: mergeBrandProfile(data.profile), source: 'server' };
}

export async function saveBrandProfile(profile: TrainerBrandProfile): Promise<{ profile: TrainerBrandProfile; source: BrandSource; warning?: string }> {
  const prepared = mergeBrandProfile(profile);
  saveBrandProfileToStorage(prepared);

  let response: Response;
  try {
    response = await fetch('/api/brand', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ profile: prepared }),
    });
  } catch {
    return { profile: prepared, source: 'local', warning: 'Сервер недоступен. Бренд сохранён локально в этом браузере.' };
  }

  const data = (await response.json().catch(() => ({}))) as BrandApiResponse;

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error(data.error || 'Нет доступа. Войдите в админку заново.');
    }
    return {
      profile: prepared,
      source: 'local',
      warning: data.error || 'Supabase не подключён. Бренд сохранён локально в этом браузере.',
    };
  }

  const saved = mergeBrandProfile(data.profile || prepared);
  saveBrandProfileToStorage(saved);
  return { profile: saved, source: data.source === 'supabase' ? 'server' : 'local' };
}

export async function resetBrandProfileOnServer(): Promise<{ profile: TrainerBrandProfile; source: BrandSource; warning?: string }> {
  return saveBrandProfile(defaultBrandProfile);
}

export function resetBrandProfileInStorage() {
  window.localStorage.removeItem(BRAND_STORAGE_KEY);
  window.dispatchEvent(new CustomEvent(BRAND_UPDATED_EVENT, { detail: defaultBrandProfile }));
}

export function useBrandProfile() {
  const [profile, setProfile] = useState<TrainerBrandProfile>(defaultBrandProfile);
  const [ready, setReady] = useState(false);
  const [source, setSource] = useState<BrandSource>('default');

  useEffect(() => {
    let active = true;

    const local = readBrandProfileFromStorage();
    const hasLocal = !isDefaultBrand(local);
    setProfile(local);
    setSource(hasLocal ? 'local' : 'default');
    setReady(true);

    fetchBrandProfileFromServer()
      .then((serverResult) => {
        if (!active) return;
        if (serverResult.source === 'server') {
          saveBrandProfileToStorage(serverResult.profile);
          setProfile(serverResult.profile);
          setSource('server');
          return;
        }

        // Critical fix: if Supabase has no saved brand yet, do NOT overwrite
        // the trainer's local admin changes with default profile values.
        const currentLocal = readBrandProfileFromStorage();
        const currentHasLocal = !isDefaultBrand(currentLocal);
        setProfile(currentHasLocal ? currentLocal : defaultBrandProfile);
        setSource(currentHasLocal ? 'local' : 'default');
      })
      .catch(() => {
        if (!active) return;
        const fallback = readBrandProfileFromStorage();
        const hasFallback = !isDefaultBrand(fallback);
        setProfile(fallback);
        setSource(hasFallback ? 'local' : 'default');
      });

    const onStorage = (event: StorageEvent) => {
      if (event.key === BRAND_STORAGE_KEY) {
        const next = readBrandProfileFromStorage();
        setProfile(next);
        setSource(isDefaultBrand(next) ? 'default' : 'local');
      }
    };
    const onUpdated = (event: Event) => {
      const custom = event as CustomEvent<TrainerBrandProfile>;
      const next = custom.detail || readBrandProfileFromStorage();
      setProfile(next);
      setSource(isDefaultBrand(next) ? 'default' : 'local');
    };

    window.addEventListener('storage', onStorage);
    window.addEventListener(BRAND_UPDATED_EVENT, onUpdated);
    return () => {
      active = false;
      window.removeEventListener('storage', onStorage);
      window.removeEventListener(BRAND_UPDATED_EVENT, onUpdated);
    };
  }, []);

  return { profile, ready, source };
}
