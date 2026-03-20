"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AppStoreBadgeLink, GooglePlayBadgeLink } from "@/components/store-badge-links";
import { appCatalog } from "@/data/site";
import { useTranslate } from "@/lib/i18n";

const metrics = [
  {
    label: { en: "Platforms", zh: "平台" },
    value: { en: "iOS / Android", zh: "iOS / Android" },
  },
];

const contactMethods = [
  {
    label: { en: "Email", zh: "邮箱" },
    title: { en: "Contact us", zh: "联系我们" },
    value: { en: "marhoogames@gmail.com", zh: "marhoogames@gmail.com" },
    description: {
      en: "For business inquiries and product support, please use email.",
      zh: "商务合作和产品支持，请直接通过邮箱联系。",
    },
    href: "mailto:marhoogames@gmail.com",
  },
];

function ProductCardPreview({
  src,
  poster,
  alt,
  orientation,
}: {
  src: string;
  poster?: string;
  alt: string;
  orientation?: "landscape" | "portrait";
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
      {orientation !== "portrait" ? (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/25 via-transparent to-transparent" />
      ) : null}
    </div>
  );
}

export function HomeContent() {
  const t = useTranslate();
  const featuredApp = appCatalog[0];

  return (
    <div className="space-y-8 pb-8 sm:space-y-12">
      <section className="grid gap-10 rounded-[2rem] border border-white/70 bg-white/75 p-8 shadow-[0_24px_80px_rgba(24,34,52,0.12)] backdrop-blur md:grid-cols-[1.2fr_0.8fr] md:p-12">
        <div className="space-y-8">
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

      <section className="space-y-3">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
              {t({ en: "App Lineup", zh: "产品展示" })}
            </p>
          </div>
        </div>
        <div className="grid gap-3 lg:grid-cols-3">
          {appCatalog.map((app) => {
            const useStaticPreview = !app.previewVideo;
            const hasDetailPage = app.status !== "coming-soon";

            return (
              <article
                key={app.slug}
                className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-[0_18px_50px_rgba(24,34,52,0.08)] backdrop-blur"
              >
              {hasDetailPage ? (
                <Link
                  href={`/apps/${app.slug}`}
                  aria-label={`${t(app.name)} ${t({ en: "details", zh: "详情" })}`}
                  className="relative block overflow-hidden bg-stone-100"
                >
                  {!useStaticPreview && app.previewVideo ? (
                    <ProductCardPreview
                      src={app.previewVideo.src}
                      poster={app.previewVideo.poster}
                      alt={t(app.name)}
                      orientation={app.previewVideo.orientation}
                    />
                  ) : (
                    <div className="h-64 w-full overflow-hidden">
                      <Image
                        src={app.image}
                        alt={t(app.name)}
                        width={900}
                        height={640}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  )}
                </Link>
              ) : (
                <div className="relative block overflow-hidden bg-stone-100">
                  <div className="h-64 w-full overflow-hidden">
                    <Image
                      src={app.image}
                      alt={t(app.name)}
                      width={900}
                      height={640}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              )}
              <div className="flex flex-1 flex-col space-y-5 p-6">
                <div className="flex items-center gap-4">
                  {hasDetailPage ? (
                    <Link
                      href={`/apps/${app.slug}`}
                      aria-label={`${t(app.name)} ${t({ en: "details", zh: "详情" })}`}
                      className="block overflow-hidden rounded-[18px]"
                    >
                      <Image
                        src={app.icon}
                        alt={`${t(app.name)} icon`}
                        width={64}
                        height={64}
                        className="h-16 w-16 rounded-[18px] border border-stone-200 object-cover transition duration-300 hover:scale-[1.03]"
                      />
                    </Link>
                  ) : (
                    <div className="block overflow-hidden rounded-[18px]">
                      <Image
                        src={app.icon}
                        alt={`${t(app.name)} icon`}
                        width={64}
                        height={64}
                        className="h-16 w-16 rounded-[18px] border border-stone-200 object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <p className="mb-1 text-left text-sm font-bold text-stone-500">
                      {t(app.category)}
                    </p>
                    {hasDetailPage ? (
                      <Link
                        href={`/apps/${app.slug}`}
                        className="inline-block"
                      >
                        <h3 className="font-heading text-[1.3rem] leading-tight text-stone-950 transition hover:text-stone-700">
                          {t(app.name)}
                        </h3>
                      </Link>
                    ) : (
                      <h3 className="font-heading text-[1.3rem] leading-tight text-stone-950">
                        {t(app.name)}
                      </h3>
                    )}
                  </div>
                </div>
                <div className="mt-auto space-y-3 border-t border-stone-200/80 pt-4">
                  <div className="flex justify-center">
                    {hasDetailPage ? (
                      <Link
                        href={`/apps/${app.slug}`}
                        className="inline-flex items-center justify-center rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
                      >
                        {t({ en: "View details", zh: "查看详情" })}
                      </Link>
                    ) : (
                      <span className="inline-flex items-center justify-center rounded-full border border-stone-200 bg-stone-100 px-5 py-3 text-sm font-semibold text-stone-500">
                        {t({ en: "Coming soon", zh: "即将推出" })}
                      </span>
                    )}
                  </div>
                  <div className="flex min-h-12 flex-wrap items-center justify-center gap-2 sm:flex-nowrap">
                    {app.storeLinks.appStore ? (
                      <AppStoreBadgeLink
                        href={app.storeLinks.appStore}
                        compact
                        label={t({
                          en: "Download on the App Store",
                          zh: "前往 App Store 下载",
                        })}
                      />
                    ) : null}
                    {app.storeLinks.googlePlay ? (
                      <GooglePlayBadgeLink
                        href={app.storeLinks.googlePlay}
                        compact
                        label={t({
                          en: "Get it on Google Play",
                          zh: "前往 Google Play",
                        })}
                      />
                    ) : null}
                    {!hasDetailPage && !app.storeLinks.appStore && !app.storeLinks.googlePlay ? null : !app.storeLinks.appStore && !app.storeLinks.googlePlay ? (
                      <span className="inline-flex items-center justify-center rounded-full border border-stone-200 bg-stone-100 px-5 py-3 text-sm font-semibold text-stone-500">
                        {t({ en: "Coming soon", zh: "即将推出" })}
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-2xl rounded-[999px] border border-white/55 bg-[rgba(255,249,239,0.78)] px-5 py-5 text-stone-950 shadow-[0_14px_30px_rgba(24,34,52,0.09)] backdrop-blur-xl sm:px-8 sm:py-6">
        <div className="mx-auto max-w-xl text-center">
          {contactMethods.map((method) => (
            <div key={method.label.en} className="px-1.5 py-1 sm:px-3">
              <p className="mx-auto max-w-lg text-[13px] leading-6 text-stone-600 sm:text-sm">
                {t({
                  en: `${method.title.en}. ${method.description.en}`,
                  zh: `${method.title.zh}，${method.description.zh}`,
                })}
              </p>
              <p className="mt-4 break-all font-heading text-lg leading-tight tracking-tight text-stone-950 sm:text-xl">
                {t(method.value)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
