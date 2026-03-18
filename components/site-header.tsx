import Link from "next/link";

const links = [
  { href: "/", label: "Apps" },
  { href: "/about", label: "About" },
  { href: "/feedback", label: "Feedback" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function SiteHeader() {
  return (
    <header className="relative z-10 py-6">
      <div className="flex flex-col gap-4 rounded-full border border-white/70 bg-white/75 px-5 py-4 shadow-[0_10px_30px_rgba(24,34,52,0.08)] backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-950 font-heading text-sm font-bold text-white">
            M
          </span>
          <span>
            <span className="block font-heading text-lg leading-none text-stone-950">
              Marhoo Studio
            </span>
            <span className="block text-xs uppercase tracking-[0.2em] text-stone-500">
              Product showcase
            </span>
          </span>
        </Link>
        <nav className="flex flex-wrap items-center gap-3 text-sm font-semibold text-stone-600">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 transition hover:bg-stone-100 hover:text-stone-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
