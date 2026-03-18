"use client";

import Link from "next/link";
import { useTranslate } from "@/lib/i18n";

export function SiteFooter() {
  const t = useTranslate();

  return (
    <footer className="border-t border-stone-200/80 py-8 text-sm text-stone-500">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>
          {t({
            en: "Marhoo Studio. Product showcase website starter.",
            zh: "Marhoo Studio 产品展示网站起始版本。",
          })}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/about" className="transition hover:text-stone-950">
            {t({ en: "About", zh: "关于" })}
          </Link>
          <Link href="/privacy" className="transition hover:text-stone-950">
            {t({ en: "Privacy", zh: "隐私" })}
          </Link>
          <Link href="/terms" className="transition hover:text-stone-950">
            {t({ en: "Terms", zh: "条款" })}
          </Link>
          <Link href="/feedback" className="transition hover:text-stone-950">
            {t({ en: "Feedback", zh: "反馈" })}
          </Link>
        </div>
      </div>
    </footer>
  );
}
