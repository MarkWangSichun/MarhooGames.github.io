"use client";

import { useEffect, useRef, useState } from "react";
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

const contactMethods = [
  {
    label: { en: "Email", zh: "邮箱" },
    value: { en: "marhoogames@gmail.com", zh: "marhoogames@gmail.com" },
  },
];

function ProductCardPreview({
  src,
  poster,
  alt,
}: {
  src: string;
  poster?: string;
  alt: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = videoRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry?.isIntersecting ?? false);
      },
      { threshold: 0.45 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = videoRef.current;
    if (!node) {
      return;
    }

    if (!isVisible) {
      node.pause();
      return;
    }

    node.play().catch(() => {
      // Ignore autoplay failures and keep the poster visible.
    });
  }, [isVisible]);

  return (
    <div className="relative h-64 w-full overflow-hidden">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={alt}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/25 via-transparent to-transparent" />
    </div>
  );
}

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
            <h1 className="max-w-3xl font-heading text-3xl leading-none tracking-tight text-stone-950 sm:text-4xl">
              {t({
                en: "Three focused apps, one studio site built to convert visits into installs.",
                zh: "专注应用，开发中",
              })}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-stone-600">
              {t({
                en: "This version presents your app lineup, routes users into dedicated detail pages, and exposes legal pages clearly.",
                zh: "当前版本用于展示你的产品，引导用户进入独立详情页，并清晰呈现法律页面。",
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
                  alt={`${t(featuredApp.name)} icon`}
                  width={72}
                  height={72}
                  className="h-[72px] w-[72px] rounded-[18px] border border-white/15 object-cover"
                />
                <h2 className="font-heading text-3xl">{t(featuredApp.name)}</h2>
              </div>
              <p className="text-sm leading-7 text-stone-300">
                {t(featuredApp.description)}
              </p>
            </div>
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5">
              <Image
                src={featuredApp.image}
                alt={t(featuredApp.name)}
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
              {t({ en: "App Lineup", zh: "产品展示" })}
            </p>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {appCatalog.map((app) => (
            <article
              key={app.slug}
              className="group overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-[0_18px_50px_rgba(24,34,52,0.08)] backdrop-blur"
            >
              <Link
                href={`/apps/${app.slug}`}
                aria-label={`${t(app.name)} ${t({ en: "details", zh: "详情" })}`}
                className="relative block overflow-hidden bg-stone-100"
              >
                {app.previewVideo ? (
                  <ProductCardPreview
                    src={app.previewVideo.src}
                    poster={app.previewVideo.poster}
                    alt={t(app.name)}
                  />
                ) : (
                  <Image
                    src={app.image}
                    alt={t(app.name)}
                    width={900}
                    height={640}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                )}
              </Link>
              <div className="space-y-5 p-6">
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
                    {t(app.category)}
                  </p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={app.icon}
                      alt={`${t(app.name)} icon`}
                      width={64}
                      height={64}
                      className="h-16 w-16 rounded-[18px] border border-stone-200 object-cover"
                    />
                    <div>
                      <h3 className="font-heading text-3xl text-stone-950">
                        {t(app.name)}
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
                  {app.storeLinks.appStore ? (
                    <a
                      href={app.storeLinks.appStore}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-stone-300 px-5 py-3 text-sm font-semibold text-stone-800 transition hover:border-stone-950"
                    >
                      App Store
                    </a>
                  ) : (
                    <span className="inline-flex items-center justify-center rounded-full border border-stone-200 bg-stone-100 px-5 py-3 text-sm font-semibold text-stone-500">
                      {t({ en: "Coming soon", zh: "即将推出" })}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[2rem] border border-stone-200 bg-stone-950 px-8 py-10 text-white lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-300">
            {t({ en: "Contact", zh: "联系方式" })}
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {contactMethods.map((method) => (
            <div
              key={method.label.en}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-400">
                {t(method.label)}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-white">
                {t(method.value)}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
