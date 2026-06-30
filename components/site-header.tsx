"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LanguageToggle } from "@/components/language-toggle";
import { useTranslate } from "@/lib/i18n";

const links = [
  { href: "/", label: { en: "Products", zh: "产品" } },
  { href: "/about", label: { en: "About", zh: "关于我们" } },
  { href: "/privacy", label: { en: "Privacy Policy", zh: "隐私政策" } },
  {
    href: "/terms",
    label: { en: "Terms of Service", zh: "用户条款" },
  },
];

export function SiteHeader() {
  const t = useTranslate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/55 bg-[rgba(255,249,239,0.78)] backdrop-blur-xl">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-stone-300/70 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-[0_10px_20px_rgba(24,34,52,0.16)] ring-1 ring-stone-200/70">
              <Image
                src="/favicon.ico"
                alt="Marhoo Studio favicon"
                width={40}
                height={40}
                className="h-10 w-10 object-cover"
                priority
              />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-heading text-lg leading-none text-stone-950">
                Marhoo Studio
              </span>
              <span className="block truncate text-[11px] uppercase tracking-[0.24em] text-stone-500">
                {t({ en: "Product showcase", zh: "产品展示" })}
              </span>
            </span>
          </Link>

          <div className="hidden min-w-0 flex-1 items-center justify-end gap-4 md:flex">
            <nav className="flex min-w-0 flex-wrap items-center justify-end gap-2 text-sm font-semibold text-stone-600">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-transparent px-3 py-2 transition hover:border-stone-200 hover:bg-white/75 hover:text-stone-950"
                >
                  {t(link.label)}
                </Link>
              ))}
            </nav>
            <div className="flex-none md:pl-1">
              <LanguageToggle />
            </div>
          </div>

          <div className="flex flex-none items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-site-menu"
              className="inline-flex items-center rounded-full border border-stone-200 bg-white/80 px-4 py-2 text-sm font-semibold text-stone-900 shadow-[0_10px_30px_rgba(24,34,52,0.08)]"
            >
              {t({ en: "More", zh: "更多" })}
            </button>
            <LanguageToggle />
          </div>
        </div>

        {isMenuOpen ? (
          <div
            id="mobile-site-menu"
            className="mt-3 rounded-[1.5rem] border border-stone-200 bg-white/92 p-3 shadow-[0_18px_60px_rgba(24,34,52,0.12)] md:hidden"
          >
            <nav className="flex flex-col gap-2 text-sm font-semibold text-stone-600">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-2xl border border-transparent px-4 py-3 transition hover:border-stone-200 hover:bg-stone-50 hover:text-stone-950"
                >
                  {t(link.label)}
                </Link>
              ))}
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
