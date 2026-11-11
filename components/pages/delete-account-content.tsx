"use client";

import { useLanguage } from "@/lib/i18n";

const copy = {
  en: {
    ariaLabel: "PomoVeggie account and data deletion instructions",
    eyebrow: "Account deletion",
    title: "PomoVeggie Account Deletion",
    intro:
      "To delete your account and related data, please complete the process in the app as shown below.",
    stepsTitle: "Steps",
    steps:
      "Settings → Data Sync → Tap the delete (trash) button shown below.",
    dataTitle: "Data deletion and retention",
    data: "Deleting your account permanently deletes your account ID, cloud save, and all other associated data. No data will be retained, and there is no additional retention period.",
  },
  zh: {
    ariaLabel: "专注菜菜账号和数据删除说明",
    eyebrow: "账号删除",
    title: "《专注菜菜》账号删除说明",
    intro: "删除账号以及相关数据请在 APP 中操作，如下图所示。",
    stepsTitle: "操作步骤",
    steps: "设置 → 数据同步 → 如图点击删除（垃圾桶）按钮。",
    dataTitle: "删除的数据与保留期限",
    data: "删除账号后，账户 ID、云端存档及其他全部相关数据都会被永久删除。不会保留任何数据，也没有额外保留期限。",
  },
} as const;

const screenshots = {
  en: [
    {
      src: "/delete-account/delete-1-en.png",
      alt: "PomoVeggie Data Sync screen showing the cloud-save delete control and explaining that uninstalling removes locally stored data.",
    },
    {
      src: "/delete-account/delete-2-en.png",
      alt: "PomoVeggie confirmation dialog requiring the word delete before permanently deleting the cloud save.",
    },
  ],
  zh: [
    {
      src: "/delete-account/delete-1-zh.png",
      alt: "专注菜菜的数据同步页面，显示云端存档删除入口，并说明卸载应用会清除本地数据。",
    },
    {
      src: "/delete-account/delete-2-zh.png",
      alt: "专注菜菜的删除确认对话框，要求输入 delete 后永久删除云端存档。",
    },
  ],
} as const;

export function DeleteAccountContent() {
  const { language } = useLanguage();
  const text = copy[language];

  return (
    <section
      aria-label={text.ariaLabel}
      className="mx-auto max-w-5xl"
    >
      <div className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-[0_24px_80px_rgba(24,34,52,0.12)] backdrop-blur sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
          {text.eyebrow}
        </p>
        <h1 className="mt-3 font-heading text-4xl text-stone-950 sm:text-5xl">
          {text.title}
        </h1>
        <p className="mt-5 text-base leading-8 text-stone-600 sm:text-lg">
          {text.intro}
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-amber-50 p-5 ring-1 ring-amber-200/70">
            <h2 className="font-heading text-xl text-stone-950">
              {text.stepsTitle}
            </h2>
            <p className="mt-3 text-base font-semibold leading-7 text-stone-800">
              {text.steps}
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200/80">
            <h2 className="font-heading text-xl text-stone-950">
              {text.dataTitle}
            </h2>
            <p className="mt-3 text-sm leading-7 text-stone-700">
              {text.data}
            </p>
          </div>
        </div>
      </div>
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
