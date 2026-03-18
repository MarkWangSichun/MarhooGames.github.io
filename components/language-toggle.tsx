"use client";

import { useLanguage } from "@/lib/i18n";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="inline-flex items-center rounded-full border border-stone-200 bg-stone-50 p-1"
      aria-label="Language switcher"
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
          language === "en"
            ? "bg-stone-950 text-white"
            : "text-stone-600 hover:text-stone-950"
        }`}
        aria-pressed={language === "en"}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("zh")}
        className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
          language === "zh"
            ? "bg-stone-950 text-white"
            : "text-stone-600 hover:text-stone-950"
        }`}
        aria-pressed={language === "zh"}
      >
        中文
      </button>
    </div>
  );
}
