import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const adminLinks = [
  { href: '/admin/clients', label: 'Клиенты', stage: 'CRM', note: 'Заявки и контакты клиентов' },
  { href: '/admin/plan-builder', label: 'Конструктор', stage: 'Этап 10', note: 'Создание тренировочных планов, PDF и WhatsApp' },
  { href: '/admin/exercises', label: 'Упражнения', stage: 'Этап 11', note: 'База упражнений, категории, sport tags и замены' },
  { href: '/admin/brand', label: 'Личный бренд', stage: 'Этап 12', note: 'Фото тренера, биография, достижения и сертификаты' },
  { href: '/admin/site-settings', label: 'Содержимое сайта', stage: 'Этап 13', note: 'Телефон, тексты главной, стаж, соцсети и тарифы без правки кода' },
  { href: '/admin/testimonials', label: 'Отзывы и результаты', stage: 'Этап 15', note: 'Кейсы учеников, результаты, фото, видео и видимость на главной странице' },
  { href: '/admin/client-portal', label: 'Кабинет клиента', stage: 'Этап 16', note: 'Доступ клиента по телефону и коду: тариф, сроки, тренировки, отчёты и связь с тренером' },
  { href: '/admin/payments', label: 'Оплаты', stage: 'Этап 7', note: 'Тарифы, статусы и сроки ведения клиентов' },
  { href: '/admin/reports', label: 'Отчёты', stage: 'Этап 8', note: 'Самочувствие, боль, веса и комментарии клиента' },
  { href: '/admin/launch-checklist', label: 'Запуск', stage: 'Этап 9', note: 'Проверка Supabase, безопасности и резервных копий' },
  { href: '/admin/system', label: 'Система', stage: 'Этап 14', note: 'Статус домена, Supabase, серверного сохранения, резервного копирования и диагностики' },
];

export default async function AdminPage() {
  const session = (await cookies()).get('admin_session');
  if (session?.value !== 'true') redirect('/admin/login');

  const { data: clients, error } = await supabase.from('clients').select('status');

  if (error) {
    return (
      <div className="min-h-screen bg-bg-primary p-8 text-text-primary">
        <div className="mx-auto max-w-xl rounded-xl border border-accent-red bg-white p-6 shadow-sm">
          <h1 className="text-xl font-bold text-accent-red">Ошибка Supabase</h1>
          <p className="mt-2 text-sm text-text-muted">{error.message}</p>
        </div>
      </div>
    );
  }

  const totalCount = clients?.length || 0;
  const newCount = clients?.filter((c: { status: string }) => c.status === 'new').length || 0;

  return (
    <main className="min-h-screen bg-bg-primary p-6 text-text-primary md:p-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 border-b border-border-default pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent-gold">Agashka Powerlifting</p>
            <h1 className="mt-2 text-3xl font-extrabold md:text-5xl">Админ-панель тренера</h1>
          </div>
          <form action="/admin/logout" method="post">
            <button className="rounded-lg border border-border-default bg-white px-4 py-3 text-xs font-bold uppercase text-text-muted hover:border-accent-gold hover:text-accent-gold">Выйти</button>
          </form>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-border-default bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Всего заявок</p>
            <p className="mt-3 text-5xl font-extrabold">{totalCount}</p>
          </div>
          <div className="rounded-2xl border border-border-default bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Новые</p>
            <p className="mt-3 text-5xl font-extrabold text-accent-gold">{newCount}</p>
          </div>
          <div className="rounded-2xl border border-accent-gold/25 bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Личный бренд</p>
            <p className="mt-3 text-3xl font-extrabold text-accent-gold">30+ лет</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {adminLinks.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-2xl border border-border-default bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-accent-gold hover:shadow-md">
              <div className="text-xs font-bold uppercase tracking-wider text-text-muted">{item.stage}</div>
              <div className="mt-2 text-xl font-extrabold text-text-primary">{item.label}</div>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.note}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
