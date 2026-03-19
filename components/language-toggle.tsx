"use client";

import { useLanguage } from "@/lib/i18n";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const nextLanguage = language === "en" ? "zh" : "en";

  return (
    <button
      type="button"
      onClick={() => setLanguage(nextLanguage)}
      className="inline-flex shrink-0 cursor-pointer items-center whitespace-nowrap rounded-full border border-stone-200 bg-stone-50 p-1"
      aria-label={`Switch language to ${nextLanguage === "en" ? "English" : "Chinese"}`}
    >
      <span
        className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
          language === "en"
            ? "bg-stone-950 text-white"
            : "text-stone-600 hover:text-stone-950"
        }`}
      >
        EN
      </span>
      <span
        className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
          language === "zh"
            ? "bg-stone-950 text-white"
            : "text-stone-600 hover:text-stone-950"
        }`}
      >
        中文
      </span>
    </button>
  );
}
