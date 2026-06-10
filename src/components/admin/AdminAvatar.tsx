'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import BrandImage from '@/components/brand/BrandImage';

export default function AdminAvatar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname === '/admin/login') return null;

  return (
    <div className="no-print fixed right-4 top-24 z-[70]">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-2 rounded-full border border-border-default bg-white px-2 py-2 shadow-lg"
        aria-label="Меню тренера"
      >
        <div className="h-9 w-9 overflow-hidden rounded-full border border-border-default bg-bg-secondary">
          <BrandImage assetKey="mainPhoto" fallbackLabel="A" />
        </div>
        <span className="hidden pr-2 text-sm font-bold text-text-primary sm:block">Агашка</span>
      </button>

      {open && (
        <div className="mt-2 w-56 overflow-hidden rounded-xl border border-border-default bg-white shadow-xl">
          <Link href="/admin/brand" className="block px-4 py-3 text-sm font-semibold text-text-primary hover:bg-bg-primary">Профиль</Link>
          <Link href="/admin/brand" className="block px-4 py-3 text-sm font-semibold text-text-primary hover:bg-bg-primary">Настройки</Link>
          <Link href="/" className="block px-4 py-3 text-sm font-semibold text-text-primary hover:bg-bg-primary">Открыть сайт</Link>
          <Link href="/about" className="block px-4 py-3 text-sm font-semibold text-text-primary hover:bg-bg-primary">О тренере</Link>
          <form action="/admin/logout" method="post">
            <button className="block w-full px-4 py-3 text-left text-sm font-semibold text-accent-gold hover:bg-bg-primary">Выход</button>
          </form>
        </div>
      )}
    </div>
  );
}
