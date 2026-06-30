"use client";

import Image from "next/image";
import Link from "next/link";
import { appCatalog } from "@/data/site";
import { useTranslate } from "@/lib/i18n";
import { AppStoreBadgeLink, GooglePlayBadgeLink } from "@/components/store-badge-links";

function GradientImagePlaceholder({
  gradient,
  label,
  labelColor,
}: {
  gradient: string;
  label: string;
  labelColor: "light" | "dark";
}) {
  return (
    <div className={`relative h-64 w-full overflow-hidden sm:h-72 lg:h-80 ${gradient}`}>
      <p
        className={`absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-heading text-lg font-semibold ${
          labelColor === "light" ? "text-white/90" : "text-stone-600"
        }`}
      >
        {label}
      </p>
    </div>
  );
}

export function HomeContent() {
  const t = useTranslate();

  return (
    <div className="space-y-10 pb-8 sm:space-y-14">
      {/* Hero Section */}
      <section className="flex flex-col items-center gap-4 px-4 pt-4 text-center sm:gap-5 sm:pt-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
          {t({ en: "PRODUCT SHOWCASE", zh: "产品展示" })}
        </p>
        <h1 className="max-w-2xl font-heading text-4xl leading-none tracking-tight text-stone-950 sm:text-5xl">
          {t({
            en: "Focused products, crafted with care",
            zh: "精选产品，专注体验",
          })}
        </h1>
        <p className="max-w-lg text-base leading-7 text-stone-500 sm:text-lg">
          {t({
            en: "Two original works, two different directions — built by a two-person indie team",
            zh: "两款独立作品，两种不同的探索方向 — 来自两人团队的原创设计",
          })}
        </p>
      </section>

      {/* Product Cards */}
      <section className="grid gap-6 lg:grid-cols-2">
        {appCatalog.map((app, index) => {
          const isLive = app.status === "live";
          const isComingSoon = app.status === "coming-soon";
          const slug = app.slug;

          return (
            <article
              key={slug}
              className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/85 shadow-[0_1px_8px_rgba(148,168,154,0.08),0_4px_16px_rgba(148,168,154,0.12)] backdrop-blur transition duration-300 hover:shadow-[0_1px_8px_rgba(148,168,154,0.12),0_8px_24px_rgba(148,168,154,0.16)]"
            >
              {/* Product Image Area */}
              <div className="relative overflow-hidden">
                {isLive ? (
                  <Link href={`/apps/${slug}`} className="block">
                    <div className="relative h-64 w-full overflow-hidden sm:h-72 lg:h-80">
                      {app.image ? (
                        <Image
                          src={app.image}
                          alt={t(app.name)}
                          width={1286}
                          height={594}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                        />
                      ) : (
                        <GradientImagePlaceholder
                          gradient={
                            index === 0
                              ? "bg-[linear-gradient(180deg,#2a1545,#3d2870,#5a3a9a)]"
                              : "bg-[linear-gradient(180deg,#f0ece0,#e5ded0,#dbd2c0)]"
                          }
                          label={t(app.name)}
                          labelColor={index === 0 ? "light" : "dark"}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent" />
                    </div>
                  </Link>
                ) : (
                  <div className="relative h-64 w-full overflow-hidden sm:h-72 lg:h-80">
                    {app.image ? (
                      <Image
                        src={app.image}
                        alt={t(app.name)}
                        width={900}
                        height={640}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <GradientImagePlaceholder
                        gradient={
                          index === 0
                            ? "bg-[linear-gradient(180deg,#2a1545,#3d2870,#5a3a9a)]"
                            : "bg-[linear-gradient(180deg,#f0ece0,#e5ded0,#dbd2c0)]"
                        }
                        label={t(app.name)}
                        labelColor={index === 0 ? "light" : "dark"}
                      />
                    )}
                    {/* Coming Soon Badge */}
                    <span className="absolute left-6 top-6 inline-flex items-center rounded-full bg-[#D89575] px-4 py-2 text-xs font-semibold text-white shadow-[0_4px_12px_rgba(216,149,117,0.3)]">
                      {t({ en: "Coming soon", zh: "即将推出" })}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col gap-5 p-6 sm:p-8">
                {/* Category */}
                <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${
                  isComingSoon ? "text-[#D89575]" : "text-[#87A878]"
                }`}>
                  {t(app.category)}
                </p>

                {/* Header Row: Icon + Name */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 overflow-hidden rounded-[18px] border border-stone-200 shadow-[0_8px_16px_rgba(24,34,52,0.06)]">
                    {isLive ? (
                      <Link href={`/apps/${slug}`}>
                        <Image
                          src={app.icon}
                          alt={`${t(app.name)} icon`}
                          width={64}
                          height={64}
                          className="h-14 w-14 object-cover transition duration-300 hover:scale-[1.03] sm:h-16 sm:w-16"
                        />
                      </Link>
                    ) : (
                      <Image
                        src={app.icon}
                        alt={`${t(app.name)} icon`}
                        width={64}
                        height={64}
                        className="h-14 w-14 object-cover sm:h-16 sm:w-16"
                      />
                    )}
                  </div>
                  <div>
                    {isLive ? (
                      <Link href={`/apps/${slug}`} className="inline-block">
                        <h2 className="font-heading text-2xl leading-tight text-stone-950 transition hover:text-stone-700 sm:text-[1.75rem]">
                          {t(app.name)}
                        </h2>
                      </Link>
                    ) : (
                      <h2 className="font-heading text-2xl leading-tight text-stone-950 sm:text-[1.75rem]">
                        {t(app.name)}
                      </h2>
                    )}
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-sm leading-7 text-stone-500 sm:text-base">
                  {t(app.tagline)}
                </p>

                {/* Highlights (for coming soon) or highlights grid */}
                {app.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {app.highlights.map((highlight) => (
                      <span
                        key={highlight.en}
                        className="inline-flex items-center rounded-lg border border-[#E8DFD0] bg-[#FAF7F2] px-3 py-2 text-xs font-medium text-stone-500 sm:px-4"
                      >
                        {t(highlight)}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action Row */}
                <div className="mt-auto space-y-3 border-t border-stone-200/80 pt-5">
                  {isLive ? (
                    <div className="flex flex-wrap items-center gap-3 sm:flex-nowrap">
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
                      <Link
                        href={`/apps/${slug}`}
                        className="inline-flex items-center justify-center rounded-full bg-stone-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-stone-800"
                      >
                        {t({ en: "View details", zh: "查看详情" })}
                      </Link>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <span className="inline-flex items-center gap-2 rounded-full border border-[#D89575] bg-[#FAF7F2] px-5 py-3 text-sm font-semibold text-[#D89575]">
                        <span className="text-base">✦</span>
                        {t({
                          en: "Coming soon — stay tuned",
                          zh: "即将上线，敬请期待",
                        })}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* CTA / Contact Section */}
      <section className="flex justify-center">
        <div className="w-full max-w-2xl rounded-[1.75rem] border border-[#E8DFD0] bg-[#FBF9F4] p-8 text-center shadow-[0_1px_8px_rgba(148,168,154,0.06)] sm:p-12">
          <h2 className="font-heading text-2xl text-stone-950 sm:text-[1.75rem]">
            {t({
              en: "Have ideas or feedback about our products?",
              zh: "对我们的产品有想法或建议？",
            })}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-stone-500 sm:text-base">
            {t({
              en: "Reach out via email — your feedback directly shapes our product direction",
              zh: "欢迎通过邮件与我们联系，反馈和建议将直接影响产品方向",
            })}
          </p>
          <a
            href="mailto:marhoogames@gmail.com"
            className="mx-auto mt-6 inline-flex items-center gap-2 rounded-xl bg-[#87A878] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_2px_8px_rgba(135,168,120,0.25)] transition hover:bg-[#7a9b6c] hover:shadow-[0_4px_12px_rgba(135,168,120,0.3)] sm:text-base"
          >
            marhoogames@gmail.com
          </a>
        </div>
      </section>

      {/* Links footer */}
      <div className="flex flex-wrap items-center justify-center gap-6 border-t border-stone-200/60 pt-8 text-sm">
        <Link
          href="/about"
          className="font-medium text-stone-500 transition hover:text-stone-950"
        >
          {t({ en: "About", zh: "关于我们" })}
        </Link>
        <Link
          href="/privacy"
          className="font-medium text-stone-500 transition hover:text-stone-950"
        >
          {t({ en: "Privacy Policy", zh: "隐私政策" })}
        </Link>
        <Link
          href="/terms"
          className="font-medium text-stone-500 transition hover:text-stone-950"
        >
          {t({ en: "Terms of Service", zh: "用户条款" })}
        </Link>
        <Link
          href="/feedback"
          className="font-medium text-stone-500 transition hover:text-stone-950"
        >
          {t({ en: "Feedback", zh: "反馈" })}
        </Link>
      </div>
    </div>
  );
}
