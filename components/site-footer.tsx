"use client";

import Link from "next/link";
import { useLanguage, useTranslate } from "@/lib/i18n";

export function SiteFooter() {
  const { language } = useLanguage();
  const t = useTranslate();

  return (
    <footer className="border-t border-stone-200/80 py-8 text-sm text-stone-500">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2">
          <p>
            {t({
              en: "© 2025 Marhoo Studio | Contact Us : marhoogames@gmail.com ",
              zh: "© 2025 Marhoo Studio | Contact Us : marhoogames@gmail.com ",
            })}
          </p>
          {language === "zh" ? (
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noreferrer"
              className="block transition hover:text-stone-950"
            >
              蜀ICP备2025172848
            </a>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/about" className="transition hover:text-stone-950">
            {t({ en: "About", zh: "关于我们" })}
          </Link>
          <Link href="/privacy" className="transition hover:text-stone-950">
            {t({ en: "Privacy", zh: "隐私政策" })}
          </Link>
          <Link href="/terms" className="transition hover:text-stone-950">
            {t({ en: "Terms", zh: "用户条款" })}
          </Link>
        </div>
      </div>
    </footer>
  );
}
