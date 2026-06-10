import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { isSupabaseConfigured } from '@/lib/supabase';
import { isSupabaseServiceRoleConfigured } from '@/lib/server/supabaseAdmin';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

function StatusCard({ title, ok, text }: { title: string; ok: boolean; text: string }) {
  return (
    <div className="rounded-2xl border border-border-default bg-white p-5 shadow-sm">
      <div className={`mb-3 inline-flex rounded-full px-3 py-1 text-xs font-extrabold uppercase ${ok ? 'bg-success-green/10 text-success-green' : 'bg-warning-gold/15 text-warning-gold'}`}>
        {ok ? 'OK' : 'Проверить'}
      </div>
      <h2 className="text-xl font-extrabold text-text-primary">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-text-muted">{text}</p>
    </div>
  );
}

export default async function AdminSystemPage() {
  const session = (await cookies()).get('admin_session');
  if (session?.value !== 'true') redirect('/admin/login');

  const hasSupabaseUrl = Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL);
  const hasAnon = Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  const hasService = Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY);
  const hasAdminPassword = Boolean(process.env.ADMIN_PASSWORD);

  return (
    <main className="min-h-screen bg-bg-primary p-6 text-text-primary md:p-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <Link href="/admin" className="text-sm font-semibold text-accent-gold hover:underline">← Назад в админку</Link>
            <p className="mt-4 text-sm font-extrabold uppercase tracking-[0.22em] text-accent-gold">Этап 14</p>
            <h1 className="mt-2 text-3xl font-extrabold md:text-5xl">Система и домен</h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted">
              Здесь проверяется готовность сайта к работе на домене: Supabase, серверное сохранение, переменные окружения, резервное копирование и дальнейшие исправления без пересборки сайта с нуля.
            </p>
          </div>
          <a href="/" className="rounded-xl border border-border-default bg-white px-4 py-3 text-xs font-bold uppercase text-text-muted hover:border-accent-gold hover:text-accent-gold">Открыть сайт</a>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <StatusCard title="Supabase URL" ok={hasSupabaseUrl} text={hasSupabaseUrl ? 'Адрес базы подключён.' : 'Добавьте NEXT_PUBLIC_SUPABASE_URL в Vercel Environment Variables.'} />
          <StatusCard title="Supabase ANON KEY" ok={hasAnon} text={hasAnon ? 'Публичный ключ Supabase подключён.' : 'Добавьте NEXT_PUBLIC_SUPABASE_ANON_KEY.'} />
          <StatusCard title="Service Role Key" ok={hasService} text={hasService ? 'Серверная запись настроек разрешена через защищённый ключ.' : 'Для сохранения настроек на домене добавьте SUPABASE_SERVICE_ROLE_KEY. Не публикуйте этот ключ на клиенте.'} />
          <StatusCard title="Админ-пароль" ok={hasAdminPassword} text={hasAdminPassword ? 'Пароль задан через переменную ADMIN_PASSWORD.' : 'Сейчас используется демо-пароль. На домене обязательно задайте ADMIN_PASSWORD.'} />
          <StatusCard title="Серверное сохранение сайта" ok={isSupabaseConfigured && isSupabaseServiceRoleConfigured} text={isSupabaseConfigured && isSupabaseServiceRoleConfigured ? 'Настройки сайта и бренда могут сохраняться в Supabase и отображаться на домене.' : 'Пока изменения могут сохраняться только локально в браузере. Для домена нужна таблица Supabase и service role.'} />
          <StatusCard title="Резервное копирование" ok={false} text="Перед каждым крупным изменением скачивайте ZIP проекта и экспортируйте таблицы Supabase. В следующем этапе можно добавить кнопку экспорта настроек." />
        </div>

        <section className="mt-8 rounded-3xl border border-border-default bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-extrabold">Что сделать перед публикацией на домен</h2>
          <ol className="mt-4 space-y-3 text-sm leading-relaxed text-text-muted">
            <li>1. В Supabase выполнить SQL-файл <b>sql/stage14_site_settings_server_cms.sql</b>.</li>
            <li>2. В Vercel добавить переменные: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY, ADMIN_PASSWORD.</li>
            <li>3. Открыть /admin/site-settings, изменить телефон или тариф, нажать сохранить.</li>
            <li>4. Открыть главную страницу и обновить через Ctrl+F5.</li>
            <li>5. Проверить /admin/brand и страницу /about.</li>
          </ol>
        </section>
      </div>
    </main>
  );
}
