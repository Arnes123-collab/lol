'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const primaryLinks = [
  { href: '/admin', label: 'Панель' },
  { href: '/admin/clients', label: 'Клиенты' },
  { href: '/admin/plan-builder', label: 'Конструктор' },
  { href: '/admin/exercises', label: 'Упражнения' },
  { href: '/admin/site-settings', label: 'Сайт CMS' },
  { href: '/admin/brand', label: 'Бренд' },
  { href: '/admin/testimonials', label: 'Отзывы' },
  { href: '/admin/client-portal', label: 'Кабинет клиента' },
  { href: '/admin/system', label: 'Система' },
];

function isActive(pathname: string, href: string) {
  if (href === '/admin') return pathname === '/admin';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function AdminTopNavigation() {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === '/admin/login') return null;

  return (
    <header className="no-print fixed inset-x-0 top-0 z-[80] border-b border-border-default bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-3 py-2 md:px-6">
        <div className="flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2">
            <button
              type="button"
              onClick={() => router.back()}
              className="rounded-lg border border-border-default bg-bg-primary px-3 py-2 text-xs font-extrabold text-text-primary hover:border-accent-red hover:text-accent-red"
              title="Вернуться на предыдущую страницу"
            >
              ← Назад
            </button>
            <button
              type="button"
              onClick={() => router.forward()}
              className="rounded-lg border border-border-default bg-bg-primary px-3 py-2 text-xs font-extrabold text-text-primary hover:border-accent-red hover:text-accent-red"
              title="Перейти вперёд по истории браузера"
            >
              Вперёд →
            </button>
            <Link
              href="/admin"
              className="hidden rounded-lg bg-accent-red px-3 py-2 text-xs font-extrabold text-white hover:opacity-90 sm:inline-flex"
            >
              🏠 Панель
            </Link>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Link
              href="/"
              className="rounded-lg border border-accent-red bg-white px-3 py-2 text-xs font-extrabold text-accent-red hover:bg-accent-red hover:text-white"
              title="Открыть основной сайт глазами клиента"
            >
              🌐 Сайт
            </Link>
            <form action="/admin/logout" method="post">
              <button className="rounded-lg border border-border-default bg-white px-3 py-2 text-xs font-extrabold text-text-muted hover:border-accent-red hover:text-accent-red">
                🚪 Выход
              </button>
            </form>
          </div>
        </div>

        <nav className="flex gap-2 overflow-x-auto pb-1">
          {primaryLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-bold transition ${
                  active
                    ? 'border-accent-red bg-accent-red text-white'
                    : 'border-border-default bg-bg-primary text-text-muted hover:border-accent-red hover:text-accent-red'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
