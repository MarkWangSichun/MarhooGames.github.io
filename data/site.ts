export type Language = "en" | "zh";

export type LocalizedText = {
  en: string;
  zh: string;
};

export type AppInfo = {
  slug: string;
  name: string;
  category: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText;
  audience: LocalizedText;
  icon: string;
  image: string;
  source?: LocalizedText;
  status?: "live" | "coming-soon";
  highlights: LocalizedText[];
  storeLinks: {
    appStore: string;
    googlePlay: string;
  };
};

export const appCatalog: AppInfo[] = [
  {
    slug: "organic-veggie",
    name: "Organic Veggie",
    category: {
      en: "Game",
      zh: "游戏",
    },
    tagline: {
      en: "A live mobile game from marhoo.com with App Store and Google Play distribution.",
      zh: "来自 marhoo.com 的已上线手游，已在 App Store 和 Google Play 发布。",
    },
    description: {
      en: "Organic Veggie is one of the studio's published games currently featured on marhoo.com. This site version reuses the official icon, background art, and store destinations from the live homepage.",
      zh: "Organic Veggie 是工作室已经发布、并正在 marhoo.com 展示中的游戏之一。本站版本复用了官网中的官方图标、背景视觉和商店跳转链接。",
    },
    audience: {
      en: "Mobile players looking for a casual published title",
      zh: "想体验轻松休闲已发布作品的移动端玩家",
    },
    icon: "/apps/marhoo/organic-veggie-icon.webp",
    image: "/apps/marhoo/organic-veggie-bg.webp",
    source: {
      en: "Imported from www.marhoo.com",
      zh: "内容引自 www.marhoo.com",
    },
    status: "live",
    highlights: [
      {
        en: "Official app icon and homepage art reused from marhoo.com",
        zh: "复用 marhoo.com 的官方应用图标与首页视觉",
      },
      {
        en: "Direct App Store link from the live Marhoo site",
        zh: "保留来自 Marhoo 线上站点的 App Store 直达链接",
      },
      {
        en: "Direct Google Play link from the live Marhoo site",
        zh: "保留来自 Marhoo 线上站点的 Google Play 直达链接",
      },
      {
        en: "Presented as an already-published game",
        zh: "以已上线游戏的形式展示",
      },
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
    category: {
      en: "Game",
      zh: "游戏",
    },
    tagline: {
      en: "A second live game already listed on marhoo.com with store links on both platforms.",
      zh: "另一款已在 marhoo.com 展示的上线作品，同时提供双平台商店链接。",
    },
    description: {
      en: "TreeHole Adventure is another published title currently shown on marhoo.com. The homepage resources here are sourced from the existing Marhoo website bundle so the presentation stays aligned with the live brand.",
      zh: "TreeHole Adventure 是另一款已经在 marhoo.com 展示的已发布作品。这里所使用的首页资源来自现有 Marhoo 网站素材，以保持与线上品牌展示一致。",
    },
    audience: {
      en: "Players discovering Marhoo's existing game portfolio",
      zh: "正在了解 Marhoo 现有游戏产品线的玩家",
    },
    icon: "/apps/marhoo/treehole-adventure-icon.webp",
    image: "/apps/marhoo/treehole-adventure-bg.webp",
    source: {
      en: "Imported from www.marhoo.com",
      zh: "内容引自 www.marhoo.com",
    },
    status: "live",
    highlights: [
      {
        en: "Official app icon and homepage art reused from marhoo.com",
        zh: "复用 marhoo.com 的官方应用图标与首页视觉",
      },
      {
        en: "Existing App Store destination preserved",
        zh: "保留现有 App Store 跳转地址",
      },
      {
        en: "Existing Google Play destination preserved",
        zh: "保留现有 Google Play 跳转地址",
      },
      {
        en: "Structured as a live product page in the new studio site",
        zh: "在新工作室站点中按已上线产品页进行呈现",
      },
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
    category: {
      en: "Lifestyle",
      zh: "生活方式",
    },
    tagline: {
      en: "Track habits and personal metrics with a visual, low-friction daily routine.",
      zh: "用可视化、低负担的日常流程记录习惯和个人指标。",
    },
    description: {
      en: "Track Mint helps users stay consistent with habits, score personal trends, and review progress through visual snapshots instead of heavy reports.",
      zh: "Track Mint 帮助用户持续追踪习惯、观察个人趋势，并通过直观快照查看进展，而不是依赖冗长报表。",
    },
    audience: {
      en: "People building repeatable personal routines",
      zh: "希望建立可重复日常习惯的人群",
    },
    icon: "/apps/track-mint.svg",
    image: "/apps/track-mint.svg",
    status: "coming-soon",
    highlights: [
      {
        en: "Simple daily input designed for retention",
        zh: "面向长期留存设计的简洁日常记录方式",
      },
      {
        en: "Visual trend summaries with low cognitive load",
        zh: "低认知负担的可视化趋势总结",
      },
      {
        en: "Friendly structure for habit experiments",
        zh: "适合尝试和调整习惯方案的友好结构",
      },
      {
        en: "Clear upgrade path to reminders and insights",
        zh: "后续可自然扩展到提醒和洞察能力",
      },
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
