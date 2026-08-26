"use client";

import { useLanguage } from "@/lib/i18n";

const screenshots = {
  en: [
    {
      src: "/delete-account/delete-1-en.png",
      alt: "TreeHole Adventure Data Sync screen showing the cloud-save delete control and explaining that uninstalling removes locally stored data.",
    },
    {
      src: "/delete-account/delete-2-en.png",
      alt: "TreeHole Adventure confirmation dialog requiring the word delete before permanently deleting the cloud save.",
    },
  ],
  zh: [
    {
      src: "/delete-account/delete-1-zh.png",
      alt: "树洞-奇妙之旅的数据同步页面，显示云端存档删除入口，并说明卸载应用会清除本地数据。",
    },
    {
      src: "/delete-account/delete-2-zh.png",
      alt: "树洞-奇妙之旅的删除确认对话框，要求输入 delete 后永久删除云端存档。",
    },
  ],
} as const;

export function DeleteAccountContent() {
  const { language } = useLanguage();

  return (
    <section
      aria-label={
        language === "zh" ? "删除账号和数据步骤" : "Account and data deletion steps"
      }
      className="mx-auto max-w-4xl"
    >
      <p className="text-center font-heading text-2xl leading-relaxed text-stone-900 sm:text-3xl">
        {language === "zh"
          ? "删除账号以及相关数据请在APP中操作，如图所示。"
          : "To delete your account and related data, please follow the steps shown below in the app."}
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2 sm:mt-10 sm:gap-8">
        {screenshots[language].map((screenshot, index) => (
          // eslint-disable-next-line @next/next/no-img-element -- These screenshots must be served unchanged.
          <img
            key={screenshot.src}
            src={screenshot.src}
            alt={screenshot.alt}
            width={1170}
            height={2532}
            loading={index === 0 ? "eager" : "lazy"}
            className="h-auto w-full"
          />
        ))}
      </div>
    </section>
  );
}
