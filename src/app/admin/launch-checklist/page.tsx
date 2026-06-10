import Link from 'next/link';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { requireAdmin } from '@/lib/adminAuth';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

type CheckItem = {
  title: string;
  status: 'ok' | 'warning' | 'danger';
  note: string;
};

async function safeCount(table: string) {
  try {
    const { count, error } = await supabase.from(table).select('*', { count: 'exact', head: true });
    if (error) return { ok: false, message: error.message, count: 0 };
    return { ok: true, message: 'OK', count: count || 0 };
  } catch (error) {
    return { ok: false, message: error instanceof Error ? error.message : 'Ошибка проверки', count: 0 };
  }
}

export default async function LaunchChecklistPage() {
  await requireAdmin();

  const clients = await safeCount('clients');
  const plans = await safeCount('training_plans');
  const payments = await safeCount('client_payments');
  const reports = await safeCount('training_reports');

  const checks: CheckItem[] = [
    {
      title: 'ADMIN_PASSWORD',
      status: process.env.ADMIN_PASSWORD ? 'ok' : process.env.NODE_ENV === 'production' ? 'danger' : 'warning',
      note: process.env.ADMIN_PASSWORD ? 'Пароль администратора задан через переменные окружения.' : 'Локально можно использовать демо-пароль. Перед Vercel обязательно задать ADMIN_PASSWORD.',
    },
    {
      title: 'Supabase URL и ANON KEY',
      status: isSupabaseConfigured ? 'ok' : 'danger',
      note: isSupabaseConfigured ? 'Переменные Supabase найдены.' : 'NEXT_PUBLIC_SUPABASE_URL или NEXT_PUBLIC_SUPABASE_ANON_KEY не заданы.',
    },
    {
      title: 'Таблица clients',
      status: clients.ok ? 'ok' : 'danger',
      note: clients.ok ? `Доступна. Записей: ${clients.count}.` : clients.message,
    },
    {
      title: 'Таблица training_plans',
      status: plans.ok ? 'ok' : 'warning',
      note: plans.ok ? `Доступна. Планов: ${plans.count}.` : plans.message,
    },
    {
      title: 'Таблица client_payments',
      status: payments.ok ? 'ok' : 'warning',
      note: payments.ok ? `Доступна. Оплат: ${payments.count}.` : payments.message,
    },
    {
      title: 'Таблица training_reports',
      status: reports.ok ? 'ok' : 'warning',
      note: reports.ok ? `Доступна. Отчётов: ${reports.count}.` : reports.message,
    },
    {
      title: 'Мобильная версия',
      status: 'ok',
      note: 'Админка, оплаты, отчёты и публичные формы используют адаптивные сетки, горизонтальный скролл таблиц и мобильные отступы.',
    },
    {
      title: 'Резервное копирование',
      status: 'warning',
      note: 'Добавлены инструкции и скрипт. Перед запуском нужно проверить pg_dump или включить Supabase backups на платном тарифе.',
    },
  ];

  const badgeClass = {
    ok: 'border-green-500/40 bg-green-500/10 text-green-300',
    warning: 'border-yellow-500/40 bg-yellow-500/10 text-yellow-300',
    danger: 'border-red-500/40 bg-red-500/10 text-red-300',
  } as const;

  const label = { ok: 'Готово', warning: 'Проверить', danger: 'Ошибка' } as const;

  return (
    <div className="min-h-screen bg-bg-primary p-4 text-text-primary md:p-8 font-body">
      <main className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <Link href="/admin" className="text-xs text-accent-gold hover:underline">← Назад в админку</Link>
            <h1 className="mt-3 text-3xl md:text-5xl font-display uppercase text-accent-gold">Финальная подготовка к запуску</h1>
            <p className="mt-3 max-w-2xl text-sm text-text-muted">Этап 9: безопасность админки, мобильная версия, Supabase, ошибки и резервное копирование.</p>
          </div>
          <form action="/admin/logout" method="post">
            <button className="rounded border border-border-default px-4 py-2 text-xs uppercase text-text-muted hover:border-accent-gold hover:text-accent-gold">Выйти</button>
          </form>
        </div>

        <div className="grid gap-4">
          {checks.map((check) => (
            <div key={check.title} className="rounded-lg border border-border-default bg-bg-card p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-xl font-display uppercase">{check.title}</h2>
                <span className={`w-fit rounded-full border px-3 py-1 text-xs font-bold uppercase ${badgeClass[check.status]}`}>{label[check.status]}</span>
              </div>
              <p className="mt-3 text-sm text-text-muted">{check.note}</p>
            </div>
          ))}
        </div>

        <section className="mt-8 rounded-lg border border-accent-gold/40 bg-accent-gold/10 p-5">
          <h2 className="text-2xl font-display uppercase text-accent-gold">Что сделать перед публикацией</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-text-primary">
            <li>В Vercel задать ADMIN_PASSWORD, NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY.</li>
            <li>В Supabase выполнить SQL-файлы из папки sql.</li>
            <li>Открыть /admin/launch-checklist и убедиться, что критичных ошибок нет.</li>
            <li>Проверить формы на телефоне: заявка, отчёт, план PDF, оплаты.</li>
            <li>Сделать первый бэкап базы перед рекламой и первыми клиентами.</li>
          </ol>
        </section>
      </main>
    </div>
  );
}
