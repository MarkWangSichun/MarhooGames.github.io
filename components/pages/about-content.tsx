"use client";

import { useTranslate } from "@/lib/i18n";

const values = [
  {
    en: "Small-team speed with product-level polish",
    zh: "小团队速度，产品级完成度",
  },
  {
    en: "Utility-first app design for real workflows",
    zh: "面向真实工作流的实用型应用设计",
  },
  {
    en: "Clear onboarding, support, and legal trust",
    zh: "清晰的引导、支持和法律信任基础",
  },
];

export function AboutContent() {
  const t = useTranslate();

  return (
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <section className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_24px_80px_rgba(24,34,52,0.12)] backdrop-blur sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
          {t({ en: "Studio", zh: "工作室" })}
        </p>
        <h1 className="mt-4 font-heading text-5xl text-stone-950">
          {t({ en: "About Marhoo Studio", zh: "关于 Marhoo Studio" })}
        </h1>
        <p className="mt-6 text-base leading-8 text-stone-700">
          {t({
            en: "Marhoo Studio creates focused mobile products that help people ship content, organize work, and move faster with less friction.",
            zh: "Marhoo Studio 专注打造移动产品，帮助用户更高效地发布内容、组织工作，并以更低阻力推进日常流程。",
          })}
        </p>
      </section>
      <section className="rounded-[2rem] border border-stone-200 bg-stone-950 p-8 text-white sm:p-10">
        <h2 className="font-heading text-3xl">
          {t({
            en: "What this site is designed to do",
            zh: "这个网站的目标是什么",
          })}
        </h2>
        <div className="mt-6 grid gap-4">
          {values.map((value) => (
            <div
              key={value.en}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-stone-200"
            >
              {t(value)}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
