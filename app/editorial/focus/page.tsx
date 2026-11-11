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
    <main lang="zh-CN" className="flex min-h-svh flex-col items-center bg-[#fafbf7] px-5 py-10 text-stone-800 sm:px-8 sm:py-12">
      <div className="flex w-full max-w-2xl flex-col items-center">
        <header className="mb-7 flex flex-col items-center text-center sm:mb-8">
          <Image
            src={content.icon}
            alt="专注菜菜应用图标"
            width={64}
            height={64}
            priority
            className="rounded-[1.125rem] ring-1 ring-stone-900/5"
          />
          <h1 className="mt-4 text-2xl font-semibold tracking-wide sm:text-3xl">
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

        <footer className="mt-8 text-center text-sm leading-7">
          <a
            href={`mailto:${content.email}`}
            className="break-all text-stone-600 underline decoration-stone-300 underline-offset-4 hover:text-stone-900 focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            {content.email}
          </a>
          <p className="mt-1 text-xs tracking-wide text-stone-400">{content.studio}</p>
        </footer>
      </div>
    </main>
  );
}
