import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200/80 py-8 text-sm text-stone-500">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>Marhoo Studio. Product showcase website starter.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/about" className="transition hover:text-stone-950">
            About
          </Link>
          <Link href="/privacy" className="transition hover:text-stone-950">
            Privacy
          </Link>
          <Link href="/terms" className="transition hover:text-stone-950">
            Terms
          </Link>
          <Link href="/feedback" className="transition hover:text-stone-950">
            Feedback
          </Link>
        </div>
      </div>
    </footer>
  );
}
