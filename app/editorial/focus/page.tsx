import type { Metadata } from "next";
import Image from "next/image";
import { EditorialVideo } from "@/components/editorial-video";
import { focusEditorial } from "@/data/editorial";

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
      className="flex min-h-svh flex-col items-center bg-[#b94d38] bg-repeat px-4 py-6 text-stone-800 sm:px-8 sm:py-12"
      style={{ backgroundImage: "url('/editorial/focus/christmas/wall.png')", backgroundSize: "213px 294px" }}
    >
      <div className="relative flex w-full max-w-3xl flex-col items-center rounded-[2rem] border-4 border-[#e8c59c] bg-[#fffcf2] px-4 pb-7 pt-4 shadow-[0_20px_80px_rgba(74,24,16,0.24)] sm:px-12 sm:pb-9 sm:pt-5">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-4 select-none sm:top-6">
          <Image src="/editorial/focus/christmas/bell.png" alt="" width={160} height={160} className="absolute left-1 h-16 w-16 -rotate-12 sm:left-7 sm:h-24 sm:w-24" />
          <Image src="/editorial/focus/christmas/stocking.png" alt="" width={160} height={160} className="absolute right-1 h-16 w-16 rotate-12 sm:right-7 sm:h-24 sm:w-24" />
        </div>
        <header className="mb-6 flex flex-col items-center text-center sm:mb-8">
          <Image src="/editorial/focus/christmas/stars.png" alt="" aria-hidden="true" width={160} height={160} className="pointer-events-none -mt-4 h-20 w-44 select-none object-cover sm:h-24 sm:w-52" />
          <Image
            src={content.icon}
            alt="专注菜菜应用图标"
            width={64}
            height={64}
            priority
            className="rounded-[1.125rem] shadow-sm ring-4 ring-[#e8c59c]/35"
          />
          <h1 className="mt-4 text-2xl font-semibold tracking-wide text-[#365843] sm:text-3xl">
            {content.name}
          </h1>
          {content.introduction.trim() && (
            <p className="mt-3 max-w-md text-sm leading-7 text-stone-500">
              {content.introduction}
            </p>
          )}
        </header>

        <EditorialVideo
          src={content.video}
          poster={content.poster}
          name={content.name}
          email={content.email}
        />

        <footer className="relative mt-7 w-full text-center text-sm leading-7 sm:mt-8 sm:flex sm:min-h-24 sm:flex-col sm:justify-end">
          <div aria-hidden="true" className="pointer-events-none mb-2 flex h-14 items-center justify-center gap-1 select-none sm:hidden">
            <Image src="/editorial/focus/christmas/gingerbread.png" alt="" width={160} height={160} className="h-14 w-14 -rotate-6" />
            <Image src="/editorial/focus/christmas/gift.png" alt="" width={160} height={160} className="h-14 w-14 rotate-6" />
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 hidden select-none sm:block">
            <Image src="/editorial/focus/christmas/tree.png" alt="" width={160} height={160} className="absolute -bottom-3 -left-8 h-32 w-32" />
            <Image src="/editorial/focus/christmas/gift.png" alt="" width={160} height={160} className="absolute -bottom-2 -right-4 h-24 w-24 rotate-6" />
          </div>
          <a
            href={`mailto:${content.email}`}
            className="relative break-all text-[#5e473b] underline decoration-[#c8a78c] underline-offset-4 hover:text-[#365843] focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            {content.email}
          </a>
          <p className="relative mt-1 text-xs tracking-wide text-[#8a705f]">{content.studio}</p>
        </footer>
      </div>
    </main>
  );
}
