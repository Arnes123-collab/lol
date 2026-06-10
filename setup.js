const fs = require('fs');
const path = require('path');

const files = {
  'src/types/client.ts': `export interface Client {
  id: string;
  name: string;
  age?: number | null;
  weight?: number | null;
  height?: number | null;
  goal: string;
  experience?: string | null;
  injuries?: string | null;
  training_place?: string | null;
  training_days?: string | null;
  whatsapp?: string | null;
  instagram?: string | null;
  status: 'new' | 'active' | 'paused' | 'finished';
  created_at: string;
}`,

  'src/app/admin/login/page.tsx': `import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

interface LoginPageProps {
  searchParams: Promise<{ error?: string }>;
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const resolvedParams = await searchParams;
  const session = cookies().get('admin_session');
  if (session?.value === 'true') {
    redirect('/admin');
  }

  async function handleLogin(formData: FormData) {
    'use server';
    const password = formData.get('password');
    
    if (password === process.env.ADMIN_PASSWORD) {
      cookies().set('admin_session', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
      });
      redirect('/admin');
    } else {
      redirect('/admin/login?error=1');
    }
  }

  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center p-4 font-body text-text-primary">
      <div className="max-w-md w-full bg-bg-card border border-border-default p-8 rounded-lg shadow-2xl">
        <h1 className="text-2xl font-display text-accent-gold uppercase text-center mb-2 tracking-wide">Вход в панель</h1>
        <form action={handleLogin} className="space-y-4">
          <input type="password" name="password" placeholder="Введите пароль тренера" required className="w-full p-3 bg-bg-primary text-text-primary border border-border-default focus:border-accent-gold outline-none rounded" />
          {resolvedParams.error && <p className="text-accent-red text-xs font-semibold">Неверный пароль!</p>}
          <button type="submit" className="w-full py-3 bg-accent-gold text-bg-primary font-bold uppercase hover:bg-accent-gold-light transition-colors rounded text-sm">Войти</button>
        </form>
      </div>
    </div>
  );
}`,

  'src/app/admin/page.tsx': `import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export const revalidate = 0;

export default async function AdminPage() {
  const session = cookies().get('admin_session');
  if (session?.value !== 'true') redirect('/admin/login');

  const { data: clients, error } = await supabase.from('clients').select('status');

  if (error) {
    return (
      <div className="min-h-screen bg-bg-primary text-text-primary p-8">
        <div className="max-w-xl mx-auto border border-accent-red bg-bg-card p-6 rounded-lg">
          <h1 className="text-xl text-accent-red font-bold">Ошибка Supabase</h1>
          <p className="mt-2 text-sm">{error.message}</p>
        </div>
      </div>
    );
  }

  const totalCount = clients?.length || 0;
  const newCount = clients?.filter(c => c.status === 'new').length || 0;

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary p-6 md:p-12 font-body">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center border-b border-border-default pb-6 mb-8">
          <div>
            <h1 className="text-3xl font-display uppercase text-accent-gold">Админ-панель тренера</h1>
          </div>
          <Link href="/admin/clients" className="px-6 py-3 bg-accent-gold text-bg-primary font-bold uppercase text-xs rounded">Список клиентов →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-bg-card border border-border-default p-6 rounded-lg">
            <p className="text-text-muted text-xs uppercase">Всего заявок</p>
            <p className="text-5xl font-display mt-3">{totalCount}</p>
          </div>
          <div className="bg-bg-card border border-border-default p-6 rounded-lg">
            <p className="text-text-muted text-xs uppercase">Новые</p>
            <p className="text-5xl font-display text-accent-gold mt-3">{newCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}`,

  'src/app/admin/clients/page.tsx': `import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Client } from '@/types/client';
import Link from 'next/link';

export const revalidate = 0;

export default async function AdminClientsPage() {
  const session = cookies().get('admin_session');
  if (session?.value !== 'true') redirect('/admin/login');

  const { data, error } = await supabase.from('clients').select('*').order('created_at', { ascending: false });

  if (error) {
    return <div className="p-8 text-accent-red">Ошибка: {error.message}</div>;
  }

  const clients = data as Client[];

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary p-4 md:p-8 font-body">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Link href="/admin" className="text-accent-gold text-xs">← Назад</Link>
          <h1 className="text-2xl font-display uppercase mt-1">Список заявок</h1>
        </div>
        {!clients || clients.length === 0 ? (
          <p>Заявок пока нет</p>
        ) : (
          <div className="w-full overflow-x-auto bg-bg-card border border-border-default rounded-lg">
            <table className="w-full text-left border-collapse min-w-[1300px] text-xs">
              <thead>
                <tr className="bg-bg-secondary border-b border-border-default text-text-muted uppercase text-[10px]">
                  <th className="p-4">Дата</th><th className="p-4">Статус</th><th className="p-4">Имя</th>
                  <th className="p-4">Возраст</th><th className="p-4">Вес/Рост</th><th className="p-4">Цель</th>
                  <th className="p-4">Опыт</th><th className="p-4">Травмы</th><th className="p-4">Где</th>
                  <th className="p-4">Дней</th><th className="p-4">Контакты</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-default">
                {clients.map((client) => (
                  <tr key={client.id} className="hover:bg-bg-secondary/30">
                    <td className="p-4 text-text-muted">{new Date(client.created_at).toLocaleDateString('ru-RU')}</td>
                    <td className="p-4"><span className="px-2 py-0.5 bg-accent-gold text-bg-primary rounded font-bold">{client.status}</span></td>
                    <td className="p-4 font-bold">{client.name}</td>
                    <td className="p-4">{client.age || '—'}</td>
                    <td className="p-4">{client.weight || '—'}/{client.height || '—'}</td>
                    <td className="p-4 truncate max-w-xs">{client.goal}</td>
                    <td className="p-4 truncate max-w-xs">{client.experience || '—'}</td>
                    <td className="p-4 text-accent-red-light">{client.injuries || 'Нет'}</td>
                    <td className="p-4">{client.training_place || '—'}</td>
                    <td className="p-4">{client.training_days || '—'}</td>
                    <td className="p-4">
                      {client.whatsapp && <div>WA: {client.whatsapp}</div>}
                      {client.instagram && <div>IG: {client.instagram}</div>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}`
};

Object.entries(files).forEach(([filePath, content]) => {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, content.trim());
  console.log(`\x1b[32m[Создан]\x1b[0m ${filePath}`);
});