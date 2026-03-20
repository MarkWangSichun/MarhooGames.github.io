"use client";

import { useLanguage, useTranslate } from "@/lib/i18n";

export function SiteFooter() {
  const { language } = useLanguage();
  const t = useTranslate();

  return (
    <footer className="border-t border-stone-200/80 py-8 text-sm text-stone-500">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p>
            {t({
              en: "© 2025 Marhoo Studio",
              zh: "© 2025 Marhoo Studio",
            })}
          </p>
        </div>
        {language === "zh" ? (
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-stone-950 sm:text-right"
          >
            蜀ICP备2025172848
          </a>
        ) : null}
      </div>
    </footer>
  );
}
