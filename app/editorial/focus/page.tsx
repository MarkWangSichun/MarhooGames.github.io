import type { Metadata } from "next";
import Image from "next/image";
import localFont from "next/font/local";
import { EditorialVideo } from "@/components/editorial-video";
import { focusEditorial } from "@/data/editorial";

const roundedTitle = localFont({
  src: "../../../public/editorial/focus/fonts/focus-rounded.woff2",
  weight: "600",
  display: "swap",
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: { absolute: "专注菜菜 · 宣传视频" },
  description: "专注菜菜宣传视频，Marhoo Studio 出品。",
  robots: { index: false, follow: false },
};

export default function FocusEditorialPage() {
  const content = focusEditorial;

  return (
    <main
      lang="zh-CN"
      className="relative isolate flex min-h-svh flex-col items-center overflow-hidden bg-[#d9574c] bg-repeat px-5 pb-32 pt-28 text-[#421c15] sm:px-8 lg:py-12"
      style={{ backgroundImage: "url('/editorial/focus/christmas/shop-background.jpg')", backgroundSize: "256px 256px" }}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 select-none">
        <Image src="/editorial/focus/christmas/furniture/bell.png" alt="" width={180} height={161} className="absolute right-[17%] top-2 h-auto w-10 -rotate-[16deg] lg:left-[5%] lg:right-auto lg:top-[48%] lg:w-16 xl:w-20" />
        <Image src="/editorial/focus/christmas/furniture/stocking.png" alt="" width={119} height={164} className="absolute right-[1%] top-14 h-auto w-8 rotate-[24deg] lg:right-[6%] lg:top-[17%] lg:w-14 xl:right-[8%] xl:w-16" />
        <Image src="/editorial/focus/christmas/furniture/stars.png" alt="" width={277} height={100} className="absolute left-[2%] top-5 h-auto w-28 -rotate-[8deg] lg:left-[6%] lg:top-[4%] lg:w-32 xl:left-[12%] xl:w-40" />
        <Image src="/editorial/focus/christmas/furniture/gingerbread.png" alt="" width={149} height={166} className="absolute bottom-[28%] right-[10%] hidden h-auto w-14 rotate-[21deg] lg:block xl:right-[17%] xl:w-16" />
        <Image src="/editorial/focus/christmas/furniture/tree.png" alt="" width={410} height={570} className="absolute -bottom-3 left-[1%] h-auto w-[88px] -rotate-[8deg] lg:bottom-4 lg:left-[3%] lg:w-32 xl:left-[11%] xl:w-44" />
        <Image src="/editorial/focus/christmas/furniture/gift.png" alt="" width={150} height={134} className="absolute bottom-8 right-[15%] h-auto w-12 -rotate-[13deg] lg:bottom-[8%] lg:right-[4%] lg:w-20 xl:right-[5%] xl:w-24" />
      </div>
      <div className="flex w-full max-w-2xl flex-col items-center">
        <EditorialVideo
          src={content.video}
          poster={content.poster}
          name={content.name}
          email={content.email}
        />

        <section
          aria-labelledby="focus-editorial-title"
          className="mt-5 flex w-full max-w-[min(100%,calc(72svh*0.75))] items-center gap-4 rounded-[1.5rem] border border-white/40 bg-white/35 px-5 py-5 shadow-[0_8px_32px_rgba(93,31,20,0.12),inset_0_1px_0_rgba(255,255,255,0.4)] backdrop-blur-xl backdrop-saturate-150 sm:gap-5 sm:px-7 sm:py-6"
        >
          <Image
            src={content.icon}
            alt="专注菜菜应用图标"
            width={64}
            height={64}
            priority
            className="h-14 w-14 shrink-0 rounded-2xl shadow-[0_4px_12px_rgba(80,35,25,0.12)] ring-1 ring-white/40 sm:h-16 sm:w-16"
          />
          <div className="flex min-w-0 flex-1 flex-col gap-2.5">
            <h1 id="focus-editorial-title" className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-[#174d35]">
              <span className={`${roundedTitle.className} text-2xl font-semibold leading-none tracking-wide sm:text-3xl`}>
                {content.name}
              </span>
              <span className="text-[10px] font-normal leading-5 sm:text-[11px]">
                （AppStore精选提名申请）
              </span>
            </h1>
            {content.introduction.trim() && (
              <p className="text-sm leading-6 text-[#52362d]">
                {content.introduction}
              </p>
            )}
            <div className="flex flex-wrap items-baseline text-xs leading-5 text-[#174d35] sm:text-[13px]">
              <span className="whitespace-nowrap">联系方式：</span>
              <a
                href={`mailto:${content.email}`}
                className="min-w-0 break-all no-underline transition-opacity hover:opacity-75 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                {content.email}
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
