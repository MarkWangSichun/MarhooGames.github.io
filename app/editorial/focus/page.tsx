import type { Metadata } from "next";

const target = "/press/pomoveggie/";

export const metadata: Metadata = {
  title: { absolute: "专注菜菜 · 页面已迁移" },
  robots: { index: false, follow: false },
};

export default function LegacyFocusEditorialPage() {
  return (
    <main lang="zh-CN" className="flex min-h-svh flex-col items-center justify-center gap-4 bg-[#b94e3c] px-6 text-center text-[#fff1cb]">
      <meta httpEquiv="refresh" content={`0; url=${target}`} />
      <p className="text-base leading-7">
        这个页面已迁移到新的媒体资料地址。
      </p>
      <a
        href={target}
        className="rounded-full border border-current px-5 py-2 text-sm no-underline transition-opacity hover:opacity-80"
      >
        前往 {target}
      </a>
    </main>
  );
}
