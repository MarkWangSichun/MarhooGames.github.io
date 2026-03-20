"use client";

import { useTranslate } from "@/lib/i18n";

export function AboutContent() {
  const t = useTranslate();

  return (
    <div>
      <section className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_24px_80px_rgba(24,34,52,0.12)] backdrop-blur sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
          {t({ en: "Studio", zh: "工作室" })}
        </p>
        <h1 className="mt-4 font-heading text-5xl text-stone-950">
          {t({ en: "Marhoo Studio", zh: "马虎工作室" })}
        </h1>
      </section>
    </div>
  );
}
