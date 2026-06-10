'use client';

import { useState } from 'react';
import { readClientPortalPlans } from '@/lib/client-portal/useClientPortal';

function digits(value: string) {
  return value.replace(/\D/g, '');
}

export default function ClientLoginForm() {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  function login() {
    const plans = readClientPortalPlans();
    const found = plans.find((plan) => digits(plan.phone).endsWith(digits(phone)) && plan.accessCode.trim() === code.trim());
    if (!found) {
      setError('Клиент не найден. Проверьте телефон и код доступа.');
      return;
    }
    window.localStorage.setItem('agashka_client_session_v1', found.id);
    window.location.href = '/client/dashboard';
  }

  return (
    <div className="mt-6 space-y-4">
      <label className="block text-sm font-bold">Телефон<input value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-2 w-full rounded-xl border border-border-default p-3 font-normal" placeholder="+7 700 000 00 01" /></label>
      <label className="block text-sm font-bold">Код доступа<input value={code} onChange={(e) => setCode(e.target.value)} className="mt-2 w-full rounded-xl border border-border-default p-3 font-normal" placeholder="1111" /></label>
      {error && <div className="rounded-xl border border-accent-red bg-red-50 p-3 text-sm font-bold text-accent-red">{error}</div>}
      <button onClick={login} className="w-full rounded-xl bg-accent-red px-5 py-4 text-sm font-extrabold uppercase tracking-widest text-white">Войти в кабинет</button>
      <a href="/" className="block text-center text-sm font-bold text-text-muted hover:text-accent-red">Вернуться на сайт</a>
    </div>
  );
}
