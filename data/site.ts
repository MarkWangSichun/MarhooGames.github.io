export type AppInfo = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  audience: string;
  icon: string;
  image: string;
  source?: string;
  status?: "live" | "coming-soon";
  highlights: string[];
  storeLinks: {
    appStore: string;
    googlePlay: string;
  };
};

export const appCatalog: AppInfo[] = [
  {
    slug: "organic-veggie",
    name: "Organic Veggie",
    category: "Game",
    tagline:
      "A live mobile game from marhoo.com with App Store and Google Play distribution.",
    description:
      "Organic Veggie is one of the studio's published games currently featured on marhoo.com. This site version reuses the official icon, background art, and store destinations from the live homepage.",
    audience: "Mobile players looking for a casual published title",
    icon: "/apps/marhoo/organic-veggie-icon.webp",
    image: "/apps/marhoo/organic-veggie-bg.webp",
    source: "Imported from www.marhoo.com",
    status: "live",
    highlights: [
      "Official app icon and homepage art reused from marhoo.com",
      "Direct App Store link from the live Marhoo site",
      "Direct Google Play link from the live Marhoo site",
      "Presented as an already-published game",
    ],
    storeLinks: {
      appStore:
        "https://apps.apple.com/app/apple-store/id6745701895?pt=118081168&ct=marhoo-homepage&mt=8",
      googlePlay:
        "https://play.google.com/store/apps/details?id=com.marhoo.vege",
    },
  },
  {
    slug: "treehole-adventure",
    name: "TreeHole Adventure",
    category: "Game",
    tagline:
      "A second live game already listed on marhoo.com with store links on both platforms.",
    description:
      "TreeHole Adventure is another published title currently shown on marhoo.com. The homepage resources here are sourced from the existing Marhoo website bundle so the presentation stays aligned with the live brand.",
    audience: "Players discovering Marhoo's existing game portfolio",
    icon: "/apps/marhoo/treehole-adventure-icon.webp",
    image: "/apps/marhoo/treehole-adventure-bg.webp",
    source: "Imported from www.marhoo.com",
    status: "live",
    highlights: [
      "Official app icon and homepage art reused from marhoo.com",
      "Existing App Store destination preserved",
      "Existing Google Play destination preserved",
      "Structured as a live product page in the new studio site",
    ],
    storeLinks: {
      appStore: "https://apps.apple.com/app/id1473568894",
      googlePlay:
        "https://play.google.com/store/apps/details?id=com.treeholegame.adventure",
    },
  },
  {
    slug: "track-mint",
    name: "Track Mint",
    category: "Lifestyle",
    tagline: "Track habits and personal metrics with a visual, low-friction daily routine.",
    description:
      "Track Mint helps users stay consistent with habits, score personal trends, and review progress through visual snapshots instead of heavy reports.",
    audience: "People building repeatable personal routines",
    icon: "/apps/track-mint.svg",
    image: "/apps/track-mint.svg",
    status: "coming-soon",
    highlights: [
      "Simple daily input designed for retention",
      "Visual trend summaries with low cognitive load",
      "Friendly structure for habit experiments",
      "Clear upgrade path to reminders and insights",
    ],
    storeLinks: {
      appStore: "https://apps.apple.com/",
      googlePlay: "https://play.google.com/store",
    },
  },
];

export function getAppBySlug(slug: string) {
  return appCatalog.find((app) => app.slug === slug);
}
