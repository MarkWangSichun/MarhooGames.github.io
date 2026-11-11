import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { LanguageProvider } from "@/lib/i18n";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top,_rgba(244,184,97,0.28),_transparent_48%),radial-gradient(circle_at_18%_24%,_rgba(88,138,255,0.18),_transparent_28%),linear-gradient(180deg,_#fff9ef_0%,_#f5f7fb_65%,_#eef2f7_100%)]" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
          <SiteHeader />
          <main className="flex-1 px-0 pb-10 pt-24 sm:pb-12 sm:pt-28">
            {children}
          </main>
          <SiteFooter />
        </div>
      </div>
    </LanguageProvider>
  );
}
