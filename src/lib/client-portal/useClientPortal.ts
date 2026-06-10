'use client';

import { useEffect, useMemo, useState } from 'react';
import { CLIENT_PORTAL_STORAGE_KEY, defaultClientPortalPlans, normalizeClientPortalPlans, type ClientPortalPlan } from './defaultClientPortal';

export function readClientPortalPlans(): ClientPortalPlan[] {
  if (typeof window === 'undefined') return defaultClientPortalPlans;
  try {
    const raw = window.localStorage.getItem(CLIENT_PORTAL_STORAGE_KEY);
    if (!raw) return defaultClientPortalPlans;
    return normalizeClientPortalPlans(JSON.parse(raw));
  } catch {
    return defaultClientPortalPlans;
  }
}

export function saveClientPortalPlans(plans: ClientPortalPlan[]) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(CLIENT_PORTAL_STORAGE_KEY, JSON.stringify(normalizeClientPortalPlans(plans)));
  window.dispatchEvent(new CustomEvent('client-portal-updated'));
}

export function useClientPortalPlans() {
  const [plans, setPlans] = useState<ClientPortalPlan[]>(defaultClientPortalPlans);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setPlans(readClientPortalPlans());
    setReady(true);
    const sync = () => setPlans(readClientPortalPlans());
    window.addEventListener('storage', sync);
    window.addEventListener('client-portal-updated', sync);
    return () => {
      window.removeEventListener('storage', sync);
      window.removeEventListener('client-portal-updated', sync);
    };
  }, []);

  const activeCount = useMemo(() => plans.filter((plan) => plan.status === 'active').length, [plans]);
  return { plans, setPlans, ready, activeCount };
}
