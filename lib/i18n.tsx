"use client";

import {
  createContext,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { Language, LocalizedText } from "@/data/site";

const STORAGE_KEY = "marhoo-language";

function getStoredLanguage(): Language {
  if (typeof window === "undefined") {
    return "en";
  }

  return window.localStorage.getItem(STORAGE_KEY) === "zh" ? "zh" : "en";
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      onStoreChange();
    }
  };

  window.addEventListener("storage", handleStorage);
  return () => window.removeEventListener("storage", handleStorage);
}

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore<Language>(
    subscribe,
    getStoredLanguage,
    () => "en",
  );

  const setLanguage = (nextLanguage: Language) => {
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    window.dispatchEvent(new StorageEvent("storage", { key: STORAGE_KEY }));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}

export function useTranslate() {
  const { language } = useLanguage();

  return (value: LocalizedText) => value[language];
}

export function pickText(language: Language, value: LocalizedText) {
  return value[language];
}
