"use client";

import Image from "next/image";

type StoreBadgeLinkProps = {
  href: string;
  label: string;
  compact?: boolean;
};

export function AppStoreBadgeLink({ href, label, compact = false }: StoreBadgeLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex shrink-0 items-center rounded-[0.65rem] transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950/30"
    >
      <Image
        src="/apps/marhoo/apple-app@2x.png"
        alt={label}
        width={400}
        height={144}
        className={compact ? "h-11 w-auto sm:h-12" : "h-[54px] w-auto sm:h-[64px]"}
      />
    </a>
  );
}

export function GooglePlayBadgeLink({ href, label, compact = false }: StoreBadgeLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex shrink-0 items-center rounded-[0.65rem] transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950/30"
    >
      <Image
        src="/apps/marhoo/google-play-app@2x.png"
        alt={label}
        width={400}
        height={144}
        className={compact ? "h-11 w-auto sm:h-12" : "h-[54px] w-auto sm:h-[64px]"}
      />
    </a>
  );
}
