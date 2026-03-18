"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { AppInfo } from "@/data/site";
import { useTranslate } from "@/lib/i18n";

function AppStoreBadgeLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex items-center rounded-[0.65rem] transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950/30"
    >
      <Image
        src="/apps/marhoo/apple-app@2x.png"
        alt={label}
        width={200}
        height={72}
        className="h-[54px] w-[150px] sm:h-[72px] sm:w-[200px]"
      />
    </a>
  );
}

function GooglePlayBadgeLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex items-center rounded-[0.65rem] transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950/30"
    >
      <Image
        src="/apps/marhoo/google-play-app@2x.png"
        alt={label}
        width={200}
        height={72}
        className="h-[54px] w-[150px] sm:h-[72px] sm:w-[200px]"
      />
    </a>
  );
}

export function AppDetailContent({ app }: { app: AppInfo }) {
  const t = useTranslate();
  const storySections = app.storySections ?? [];
  const featureSections = app.featureSections ?? [];
  const gallery = app.gallery ?? [];
  const storeFacts = app.storeFacts ?? [];
  const marqueeShots =
    gallery.length > 0
      ? gallery
      : [
          {
            src: app.image,
            alt: { en: `${app.name} cover`, zh: `${app.name} 封面` },
            title: app.tagline,
            body: app.description,
          },
        ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplayNonce, setAutoplayNonce] = useState(0);
  const shotRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    if (app.slug !== "treehole-adventure" || marqueeShots.length <= 1) {
      return;
    }

    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % marqueeShots.length);
    }, 4000);

    return () => window.clearTimeout(timer);
  }, [activeIndex, app.slug, autoplayNonce, marqueeShots.length]);

  useEffect(() => {
    if (app.slug !== "treehole-adventure") {
      return;
    }

    shotRefs.current[activeIndex]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeIndex, app.slug]);

  if (app.slug === "treehole-adventure") {
    const setSlide = (nextIndex: number) => {
      setAutoplayNonce((current) => current + 1);
      setActiveIndex(nextIndex);
    };
    const goToPrev = () => {
      setSlide(activeIndex === 0 ? marqueeShots.length - 1 : activeIndex - 1);
    };
    const goToNext = () => {
      setSlide((activeIndex + 1) % marqueeShots.length);
    };

    return (
      <div className="space-y-8 pb-8">
        <div className="flex flex-wrap items-center gap-3 text-sm text-stone-500">
          <Link href="/" className="transition hover:text-stone-950">
            {t({ en: "Home", zh: "首页" })}
          </Link>
          <span>/</span>
          <span>{app.name}</span>
        </div>

        <section className="overflow-hidden rounded-[2.4rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(248,244,237,0.9))] shadow-[0_24px_80px_rgba(24,34,52,0.12)]">
          <div className="space-y-8 p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Image
                    src={app.icon}
                    alt={`${app.name} icon`}
                    width={72}
                    height={72}
                    className="h-[72px] w-[72px] rounded-[20px] border border-stone-200 object-cover shadow-[0_12px_24px_rgba(24,34,52,0.12)]"
                  />
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
                      {t(app.category)}
                    </p>
                    <h1 className="font-heading text-4xl leading-none text-stone-950 sm:text-5xl">
                      {app.name}
                    </h1>
                  </div>
                </div>
                <p className="max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">
                  {t(app.tagline)}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <AppStoreBadgeLink
                  href={app.storeLinks.appStore}
                  label={t({
                    en: "Download on the App Store",
                    zh: "前往 App Store 下载",
                  })}
                />
                <GooglePlayBadgeLink
                  href={app.storeLinks.googlePlay}
                  label={t({
                    en: "Get it on Google Play",
                    zh: "前往 Google Play",
                  })}
                />
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-400">
                {t({ en: "Gallery", zh: "图片跑马灯" })}
              </p>

              <div className="space-y-4">
                <div className="relative">
                  {marqueeShots.length > 1 ? (
                    <>
                      <button
                        type="button"
                        onClick={goToPrev}
                        aria-label={t({
                          en: "Previous image",
                          zh: "上一张图片",
                        })}
                        className="absolute left-0 top-[7.5rem] z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/92 text-xl text-stone-950 shadow-[0_10px_30px_rgba(24,34,52,0.18)] backdrop-blur hover:bg-white sm:left-2 sm:top-[8.75rem]"
                      >
                        ←
                      </button>
                      <button
                        type="button"
                        onClick={goToNext}
                        aria-label={t({
                          en: "Next image",
                          zh: "下一张图片",
                        })}
                        className="absolute right-0 top-[7.5rem] z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/92 text-xl text-stone-950 shadow-[0_10px_30px_rgba(24,34,52,0.18)] backdrop-blur hover:bg-white sm:right-2 sm:top-[8.75rem]"
                      >
                        →
                      </button>
                    </>
                  ) : null}

                  <div className="store-carousel-shell">
                    <div className="store-carousel-track">
                      {marqueeShots.map((shot, index) => (
                        <article
                          key={shot.src}
                          ref={(node) => {
                            shotRefs.current[index] = node;
                          }}
                          className="store-carousel-slide snap-center"
                        >
                          <button
                            type="button"
                            onClick={() => setSlide(index)}
                            aria-label={`${t({
                              en: "Select image",
                              zh: "选择图片",
                            })} ${index + 1}`}
                            aria-pressed={index === activeIndex}
                            className={`block w-full overflow-hidden rounded-[1.5rem] border bg-stone-950 transition ${
                              index === activeIndex
                                ? "carousel-frame scale-100 border-stone-950 shadow-[0_16px_40px_rgba(24,34,52,0.18)]"
                                : "scale-[0.94] border-stone-200/70 opacity-65"
                            }`}
                          >
                            <div className="relative aspect-[1286/594]">
                              <Image
                                src={shot.src}
                                alt={t(shot.alt)}
                                width={1286}
                                height={594}
                                className="h-full w-full object-cover"
                                priority={index === 0}
                              />
                            </div>
                          </button>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2">
                  {marqueeShots.map((shot, index) => (
                    <button
                      key={`${shot.src}-dot`}
                      type="button"
                      onClick={() => setSlide(index)}
                      aria-label={`${t({
                        en: "Go to image",
                        zh: "切换到图片",
                      })} ${index + 1}`}
                      aria-pressed={index === activeIndex}
                      className={`h-2.5 rounded-full transition ${
                        index === activeIndex
                          ? "w-8 bg-stone-950"
                          : "w-2.5 bg-stone-300 hover:bg-stone-500"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="space-y-10 pb-8">
      <div className="flex flex-wrap items-center gap-3 text-sm text-stone-500">
        <Link href="/" className="transition hover:text-stone-950">
          {t({ en: "Home", zh: "首页" })}
        </Link>
        <span>/</span>
        <span>{app.name}</span>
      </div>

      <section className="overflow-hidden rounded-[2.2rem] border border-white/70 bg-white/80 shadow-[0_24px_80px_rgba(24,34,52,0.12)] backdrop-blur">
        <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-6 p-8 lg:p-10">
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
            <AppStoreBadgeLink
              href={app.storeLinks.appStore}
              label={t({
                en: "Download on the App Store",
                zh: "前往 App Store 下载",
              })}
            />
            <GooglePlayBadgeLink
              href={app.storeLinks.googlePlay}
              label={t({
                en: "Get it on Google Play",
                zh: "前往 Google Play",
              })}
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {app.highlights.map((item) => (
              <div
                key={item.en}
                className="rounded-2xl border border-amber-200/60 bg-gradient-to-br from-amber-50 to-stone-50 p-4 text-sm leading-7 text-stone-700"
              >
                {t(item)}
              </div>
            ))}
          </div>
          </div>

          <div className="relative min-h-[380px] overflow-hidden bg-stone-950 lg:min-h-[720px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(252,211,77,0.28),transparent_42%),linear-gradient(180deg,rgba(12,10,9,0.05),rgba(12,10,9,0.78))]" />
            <Image
              src={app.image}
              alt={app.name}
              width={1286}
              height={593}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 space-y-4 p-6 text-white sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                {t({ en: "Image-first game page", zh: "以画面为主的游戏详情页" })}
              </p>
              <h2 className="max-w-xl font-heading text-3xl leading-tight sm:text-4xl">
                {t({
                  en: "Fall through the tree hole, enter the missing town, and solve your way back.",
                  zh: "坠入树洞，进入失踪者之城，并靠解谜一步步找回归途。",
                })}
              </h2>
              <p className="max-w-lg text-sm leading-7 text-white/80">
                {t({
                  en: "TreeHole Adventure works best when the world speaks first. This page now lets the screenshots carry the mood before the copy explains it.",
                  zh: "TreeHole Adventure 最适合先让世界观自己说话，所以这个页面现在优先用截图建立氛围，再由文案补足信息。",
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {gallery.length > 0 ? (
        <section className="space-y-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
                {t({ en: "Screens from the adventure", zh: "游戏截图" })}
              </p>
              <h2 className="mt-3 font-heading text-4xl text-stone-950">
                {t({
                  en: "Let the world sell the game",
                  zh: "先用画面把游戏讲出来",
                })}
              </h2>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <article className="overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-950 shadow-[0_16px_50px_rgba(24,34,52,0.12)]">
              <div className="relative">
                <Image
                  src={gallery[0].src}
                  alt={t(gallery[0].alt)}
                  width={1286}
                  height={593}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                  <h3 className="max-w-xl font-heading text-3xl leading-tight">
                    {t(gallery[0].title)}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-white/80">
                    {t(gallery[0].body)}
                  </p>
                </div>
              </div>
            </article>

            <div className="grid gap-5">
              {gallery.slice(1, 3).map((shot) => (
                <article
                  key={shot.src}
                  className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/85 shadow-[0_16px_40px_rgba(24,34,52,0.08)]"
                >
                  <Image
                    src={shot.src}
                    alt={t(shot.alt)}
                    width={1286}
                    height={594}
                    className="h-auto w-full object-cover"
                  />
                  <div className="space-y-2 p-5">
                    <h3 className="font-heading text-2xl text-stone-950">
                      {t(shot.title)}
                    </h3>
                    <p className="text-sm leading-7 text-stone-600">
                      {t(shot.body)}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {gallery.slice(3).map((shot) => (
              <article
                key={shot.src}
                className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/85 shadow-[0_16px_40px_rgba(24,34,52,0.08)]"
              >
                <Image
                  src={shot.src}
                  alt={t(shot.alt)}
                  width={1286}
                  height={594}
                  className="h-auto w-full object-cover"
                />
                <div className="space-y-2 p-5">
                  <h3 className="font-heading text-2xl text-stone-950">
                    {t(shot.title)}
                  </h3>
                  <p className="text-sm leading-7 text-stone-600">
                    {t(shot.body)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

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
              en: "If the player likes hand-drawn mystery worlds, scene-based puzzles, and the feeling of uncovering how a town broke apart, the page should feel like an invitation to play.",
              zh: "如果玩家喜欢手绘神秘世界、场景式解谜，以及逐步拼出小镇真相的体验，这个页面就应该像一张邀请你开始游玩的门票。",
            })}
          </p>
        </div>
        <div className="rounded-[2rem] border border-stone-200 bg-stone-950 p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-300">
            {t({ en: "Next step", zh: "下一步" })}
          </p>
          <h2 className="mt-4 font-heading text-3xl">
            {t({
              en: "Need legal and company pages to stay visible?",
              zh: "希望法律页面和公司信息保持可见？",
            })}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-300">
            {t({
              en: "Privacy Policy, Terms of Service, and About pages are already linked across the site so product pages stay compliant and easy to trust.",
              zh: "隐私政策、用户条款和关于页面已经在站内完成链接，方便产品页面保持合规展示并建立信任。",
            })}
          </p>
          <Link
            href="/privacy"
            className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-stone-100"
          >
            {t({ en: "View privacy policy", zh: "查看隐私政策" })}
          </Link>
        </div>
      </section>

      {storySections.length > 0 ? (
        <section className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_16px_50px_rgba(24,34,52,0.08)]">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
              {t({ en: "Story setup", zh: "故事设定" })}
            </p>
            <h2 className="mt-4 font-heading text-4xl text-stone-950">
              {t({
                en: "A mystery setup with immediate stakes",
                zh: "一开场就建立风险与谜团",
              })}
            </h2>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {storySections.map((section) => (
              <article
                key={section.title.en}
                className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-6"
              >
                <h3 className="font-heading text-2xl text-stone-950">
                  {t(section.title)}
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">
                  {t(section.body)}
                </p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {featureSections.length > 0 ? (
        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_16px_50px_rgba(24,34,52,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
              {t({ en: "Why it plays well as a game", zh: "为什么它像一款值得玩的游戏" })}
            </p>
            <div className="mt-6 space-y-4">
              {featureSections.map((section) => (
                <article
                  key={section.title.en}
                  className="rounded-[1.5rem] border border-stone-200 bg-white p-5"
                >
                  <h3 className="font-heading text-2xl text-stone-950">
                    {t(section.title)}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-stone-600">
                    {t(section.body)}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {storeFacts.length > 0 ? (
            <div className="rounded-[2rem] border border-amber-200/70 bg-gradient-to-br from-amber-100 via-orange-50 to-white p-8 shadow-[0_16px_50px_rgba(24,34,52,0.08)]">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
                {t({ en: "Store facts", zh: "商店信息" })}
              </p>
              <div className="mt-6 space-y-4">
                {storeFacts.map((fact) => (
                  <div
                    key={fact.label.en}
                    className="rounded-[1.4rem] border border-white/80 bg-white/80 p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                      {t(fact.label)}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-stone-700">
                      {t(fact.value)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </section>
      ) : null}
    </div>
  );
}
