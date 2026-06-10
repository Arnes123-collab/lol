"use client";

import { useState } from "react";
import { useSiteContent } from "@/lib/site-content/useSiteContent";

const navLinks = [
  { label: "О тренере", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Результаты", href: "#results" },
  { label: "Записаться", href: "#form" },
  { label: "Кабинет", href: "/client/login" },
];

export default function Navbar() {
  const { content } = useSiteContent();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border-default bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#hero" className="flex items-center gap-2">
          <span className="text-xl font-extrabold uppercase tracking-widest text-accent-gold">{content.brandName.split(" ")[0] || "agashka"}</span>
          <span className="text-xl text-text-muted">/</span>
          <span className="text-xl font-extrabold uppercase tracking-widest text-text-primary">{content.brandName.split(" ").slice(1).join(" ") || "powerlifting"}</span>
        </a>

        <nav className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) =>
            link.href === "#form" ? (
              <a key={link.href} href={link.href} className="rounded-lg bg-accent-gold px-4 py-2 text-sm font-extrabold uppercase tracking-widest text-white transition hover:bg-accent-gold-light">
                {link.label}
              </a>
            ) : (
              <a key={link.href} href={link.href} className="text-sm font-bold uppercase tracking-widest text-text-muted transition hover:text-accent-gold">
                {link.label}
              </a>
            )
          )}
          <a href="/admin/login" className="rounded-lg border border-accent-gold px-4 py-2 text-sm font-extrabold uppercase tracking-widest text-accent-gold transition hover:bg-accent-gold hover:text-white">
            Войти в админ
          </a>
        </nav>

        <button className="flex flex-col gap-1.5 p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Открыть меню">
          <span className={`block h-0.5 w-6 bg-text-primary transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-text-primary transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-text-primary transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-border-default bg-white md:hidden">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="block border-b border-border-default px-6 py-4 text-sm font-bold uppercase tracking-widest text-text-muted transition hover:text-accent-gold">
              {link.label}
            </a>
          ))}
          <a href="/admin/login" onClick={() => setMenuOpen(false)} className="block border-b border-border-default bg-accent-gold px-6 py-4 text-sm font-extrabold uppercase tracking-widest text-white">
            Войти в админ через пароль
          </a>
        </div>
      )}
    </header>
  );
}
