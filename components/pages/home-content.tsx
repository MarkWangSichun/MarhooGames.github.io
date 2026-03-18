"use client";

import Image from "next/image";
import Link from "next/link";
import { appCatalog } from "@/data/site";
import { useTranslate } from "@/lib/i18n";

const metrics = [
  {
    label: { en: "Apps", zh: "应用数" },
    value: { en: "3", zh: "3" },
  },
  {
    label: { en: "Platforms", zh: "平台" },
    value: { en: "iOS / Android", zh: "iOS / Android" },
  },
  {
    label: { en: "Focus", zh: "方向" },
    value: { en: "Brand + Utility", zh: "品牌 + 实用性" },
  },
];

export function HomeContent() {
  const t = useTranslate();
  const featuredApp = appCatalog[0];

  return (
    <div className="space-y-16 pb-8 sm:space-y-24">
      <section className="grid gap-10 rounded-[2rem] border border-white/70 bg-white/75 p-8 shadow-[0_24px_80px_rgba(24,34,52,0.12)] backdrop-blur md:grid-cols-[1.2fr_0.8fr] md:p-12">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-stone-300/80 bg-stone-50 px-4 py-2 text-sm font-semibold text-stone-700">
            {t({
              en: "Marhoo Studio mobile products",
              zh: "Marhoo Studio 移动产品",
            })}
          </div>
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
              {t({ en: "Studio Homepage", zh: "工作室官网" })}
            </p>
            <h1 className="max-w-3xl font-heading text-5xl leading-none tracking-tight text-stone-950 sm:text-6xl">
              {t({
                en: "Three focused apps, one studio site built to convert visits into installs.",
                zh: "三个聚焦产品，一个把访问转化为下载的工作室网站。",
              })}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-stone-600">
              {t({
                en: "This first version presents your app lineup, routes users into dedicated detail pages, exposes legal pages clearly, and leaves a ready-to-connect feedback form for the next phase.",
                zh: "当前版本用于展示你的应用矩阵，引导用户进入独立详情页，清晰呈现法律页面，并为下一阶段预留可接入后端的反馈表单。",
              })}
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href={`/apps/${featuredApp.slug}`}
              className="inline-flex items-center justify-center rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
            >
              {t({ en: "View featured app", zh: "查看主推应用" })}
            </Link>
            <Link
              href="/feedback"
              className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-800 transition hover:border-stone-950"
            >
              {t({ en: "Open feedback form", zh: "打开反馈表单" })}
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label.en}
                className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
                  {t(metric.label)}
                </p>
                <p className="mt-3 text-lg font-bold text-stone-900">
                  {t(metric.value)}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] bg-stone-950 p-6 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,184,97,0.35),_transparent_36%),radial-gradient(circle_at_bottom_left,_rgba(88,138,255,0.4),_transparent_32%)]" />
          <div className="relative space-y-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.24em] text-stone-300">
                {t({ en: "Launch Priority", zh: "优先展示" })}
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src={featuredApp.icon}
                  alt={`${featuredApp.name} icon`}
                  width={72}
                  height={72}
                  className="h-[72px] w-[72px] rounded-[18px] border border-white/15 object-cover"
                />
                <h2 className="font-heading text-3xl">{featuredApp.name}</h2>
              </div>
              <p className="text-sm leading-7 text-stone-300">
                {t(featuredApp.description)}
              </p>
            </div>
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5">
              <Image
                src={featuredApp.image}
                alt={featuredApp.name}
                width={800}
                height={600}
                className="h-auto w-full"
                priority
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {featuredApp.highlights.slice(0, 4).map((item) => (
                <div
                  key={item.en}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-stone-100"
                >
                  {t(item)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
              {t({ en: "App Lineup", zh: "应用矩阵" })}
            </p>
            <h2 className="mt-3 font-heading text-4xl text-stone-950">
              {t({ en: "Explore all three products", zh: "查看全部三款产品" })}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-stone-600">
            {t({
              en: "Each card routes to a dedicated product page with screenshots, highlights, store links, and feature details.",
              zh: "每张卡片都会进入独立产品页，展示截图、亮点、商店链接和功能信息。",
            })}
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {appCatalog.map((app) => (
            <article
              key={app.slug}
              className="group overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-[0_18px_50px_rgba(24,34,52,0.08)] backdrop-blur"
            >
              <div className="relative overflow-hidden bg-stone-100">
                <Image
                  src={app.image}
                  alt={app.name}
                  width={900}
                  height={640}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="space-y-5 p-6">
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
                    {t(app.category)}
                  </p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={app.icon}
                      alt={`${app.name} icon`}
                      width={64}
                      height={64}
                      className="h-16 w-16 rounded-[18px] border border-stone-200 object-cover"
                    />
                    <div>
                      <h3 className="font-heading text-3xl text-stone-950">
                        {app.name}
                      </h3>
                      {app.source ? (
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                          {t(app.source)}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <p className="text-sm leading-7 text-stone-600">
                    {t(app.tagline)}
                  </p>
                </div>
                <ul className="space-y-2 text-sm text-stone-700">
                  {app.highlights.slice(0, 3).map((item) => (
                    <li key={item.en}>{t(item)}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/apps/${app.slug}`}
                    className="inline-flex items-center justify-center rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
                  >
                    {t({ en: "View details", zh: "查看详情" })}
                  </Link>
                  <a
                    href={app.storeLinks.appStore}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-stone-300 px-5 py-3 text-sm font-semibold text-stone-800 transition hover:border-stone-950"
                  >
                    App Store
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[2rem] border border-stone-200 bg-stone-950 px-8 py-10 text-white lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-300">
            {t({ en: "Ready For Growth", zh: "已为增长做好准备" })}
          </p>
          <h2 className="font-heading text-4xl">
            {t({
              en: "Feedback collection is already wired into the site structure.",
              zh: "站点结构已经为反馈收集预留好接入位置。",
            })}
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold">
              {t({ en: "Form-first setup", zh: "表单优先架构" })}
            </h3>
            <p className="mt-3 text-sm leading-7 text-stone-300">
              {t({
                en: "The feedback page is implemented as a real front-end form with fields ready for API connection later.",
                zh: "反馈页已经实现为真实的前端表单，字段结构可在后续直接接入 API。",
              })}
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold">
              {t({ en: "Legal pages included", zh: "法律页面已齐备" })}
            </h3>
            <p className="mt-3 text-sm leading-7 text-stone-300">
              {t({
                en: "Privacy Policy, Terms of Service, and About routes are linked in navigation and footer for trust and compliance.",
                zh: "导航和页脚已接入隐私政策、服务条款和关于页面，便于建立信任并满足合规展示需求。",
              })}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
