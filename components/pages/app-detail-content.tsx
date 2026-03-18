"use client";

import Image from "next/image";
import Link from "next/link";
import type { AppInfo } from "@/data/site";
import { useTranslate } from "@/lib/i18n";

export function AppDetailContent({ app }: { app: AppInfo }) {
  const t = useTranslate();

  return (
    <div className="space-y-10 pb-8">
      <div className="flex flex-wrap items-center gap-3 text-sm text-stone-500">
        <Link href="/" className="transition hover:text-stone-950">
          {t({ en: "Home", zh: "首页" })}
        </Link>
        <span>/</span>
        <span>{app.name}</span>
      </div>

      <section className="grid gap-8 rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_24px_80px_rgba(24,34,52,0.12)] backdrop-blur lg:grid-cols-[1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
            {t(app.category)}
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Image
                src={app.icon}
                alt={`${app.name} icon`}
                width={84}
                height={84}
                className="h-[84px] w-[84px] rounded-[22px] border border-stone-200 object-cover"
              />
              <h1 className="font-heading text-5xl leading-none text-stone-950">
                {app.name}
              </h1>
            </div>
            <p className="text-xl text-stone-700">{t(app.tagline)}</p>
            <p className="max-w-2xl text-base leading-8 text-stone-600">
              {t(app.description)}
            </p>
            {app.source ? (
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                {t(app.source)}
              </p>
            ) : null}
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={app.storeLinks.appStore}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
            >
              {t({ en: "Download on App Store", zh: "前往 App Store 下载" })}
            </a>
            <a
              href={app.storeLinks.googlePlay}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-800 transition hover:border-stone-950"
            >
              {t({ en: "View on Google Play", zh: "前往 Google Play" })}
            </a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {app.highlights.map((item) => (
              <div
                key={item.en}
                className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm text-stone-700"
              >
                {t(item)}
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-stone-100">
          <Image
            src={app.image}
            alt={app.name}
            width={1200}
            height={900}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_16px_50px_rgba(24,34,52,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
            {t({ en: "Best for", zh: "适合人群" })}
          </p>
          <h2 className="mt-4 font-heading text-3xl text-stone-950">
            {t(app.audience)}
          </h2>
          <p className="mt-4 text-sm leading-7 text-stone-600">
            {t({
              en: "This page is ready for real marketing copy, screenshots, reviews, changelog notes, or FAQs whenever you want to deepen the product story.",
              zh: "这个页面已经为后续补充正式营销文案、截图、评价、更新日志或 FAQ 预留好了空间。",
            })}
          </p>
        </div>
        <div className="rounded-[2rem] border border-stone-200 bg-stone-950 p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-300">
            {t({ en: "Next step", zh: "下一步" })}
          </p>
          <h2 className="mt-4 font-heading text-3xl">
            {t({
              en: "Want users to report issues or request features?",
              zh: "想让用户提交问题反馈或功能建议？",
            })}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-300">
            {t({
              en: "The site already includes a dedicated feedback form route. Connect it later to email, Notion, Airtable, Supabase, or your own API.",
              zh: "站点已经包含独立反馈表单页面，后续可以接入邮箱、Notion、Airtable、Supabase 或你自己的 API。",
            })}
          </p>
          <Link
            href="/feedback"
            className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-stone-100"
          >
            {t({ en: "Open feedback form", zh: "打开反馈表单" })}
          </Link>
        </div>
      </section>
    </div>
  );
}
