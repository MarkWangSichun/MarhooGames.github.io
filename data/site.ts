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
  storySections?: {
    title: LocalizedText;
    body: LocalizedText;
  }[];
  featureSections?: {
    title: LocalizedText;
    body: LocalizedText;
  }[];
  gallery?: {
    src: string;
    alt: LocalizedText;
    title: LocalizedText;
    body: LocalizedText;
  }[];
  storeFacts?: {
    label: LocalizedText;
    value: LocalizedText;
  }[];
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
    storySections: [
      {
        title: {
          en: "Published title",
          zh: "已发布作品",
        },
        body: {
          en: "Organic Veggie is shown here as a live Marhoo release. The current detail page preserves its official storefront routes and studio branding.",
          zh: "Organic Veggie 在这里以 Marhoo 已上线作品的形式呈现，当前详情页保留了官方商店入口和工作室品牌视觉。",
        },
      },
    ],
    featureSections: [
      {
        title: {
          en: "Store-ready presentation",
          zh: "面向商店的展示方式",
        },
        body: {
          en: "This page is structured so screenshots, feature explanations, update notes, and support content can be added later without changing the route design.",
          zh: "该页面结构已为后续补充截图、功能说明、更新日志和支持内容预留空间，无需再改动路由设计。",
        },
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
      en: "A puzzle adventure that pulls players into a magical town full of missing citizens and hidden connections.",
      zh: "一款将玩家卷入奇幻小镇的解谜冒险游戏，你需要追查失踪居民与背后隐藏的联系。",
    },
    description: {
      en: "Based on the App Store listing, TreeHole Adventure begins when you discover a magical hole in a tree while exploring a cave. After being pulled into darkness, you wake up in a mysterious town where residents have vanished. The journey revolves around uncovering what happened, understanding how everything is connected, and finding your way home.",
      zh: "参考 App Store 介绍，TreeHole Adventure 的开端是你在洞穴探险时发现树上的神秘洞口，被吸入黑暗后醒来，发现自己来到一座居民离奇失踪的神秘小镇。整段旅程围绕着追查真相、拼起事件之间的联系，并设法回到原来的世界。",
    },
    audience: {
      en: "Players who enjoy story-led puzzle adventures with a compact, mysterious atmosphere",
      zh: "喜欢剧情驱动、氛围神秘、节奏紧凑的解谜冒险玩家",
    },
    icon: "/apps/marhoo/treehole-adventure-icon.webp",
    image: "/apps/treehole-adventure-store/hero.jpg",
    source: {
      en: "Story and store facts referenced from the App Store listing",
      zh: "剧情与商店信息参考 App Store 页面",
    },
    status: "live",
    highlights: [
      {
        en: "A magical-hole premise that immediately turns cave exploration into a wonderland mystery",
        zh: "以“树洞传送”作为开场，让洞穴探索迅速转入奇幻谜团",
      },
      {
        en: "A missing-citizens storyline that gives every puzzle a narrative purpose",
        zh: "以居民失踪事件串联谜题推进，让解谜具备明确叙事目标",
      },
      {
        en: "Mobile-ready release on both the App Store and Google Play",
        zh: "已同时登陆 App Store 与 Google Play，适合移动端体验",
      },
      {
        en: "Built by a two-person team covering design, development, QA, and promotion",
        zh: "由两人小团队完成设计、开发、测试与推广",
      },
    ],
    storySections: [
      {
        title: {
          en: "How the journey starts",
          zh: "故事如何开始",
        },
        body: {
          en: "While exploring a cave, the protagonist finds a tree with a magical hole. The moment they get pulled in, the world cuts to black. That abrupt transition gives the game an immediate sense of curiosity and danger.",
          zh: "主角在洞穴探索时发现一棵树，树上有一个神秘洞口；被吸入其中后，世界瞬间陷入黑暗。这个突兀的转折让整场冒险从一开始就带着强烈的未知感与危险感。",
        },
      },
      {
        title: {
          en: "A town with missing citizens",
          zh: "一座居民失踪的小镇",
        },
        body: {
          en: "After waking up, you realize you are trapped in a magical town where some citizens have mysteriously disappeared. The main thread is not only escaping, but also understanding what happened to the town and why you were brought there.",
          zh: "醒来之后，你发现自己被困在一座奇幻小镇中，而这里的一部分居民已经神秘失踪。主线目标不只是离开，更是弄清小镇到底发生了什么，以及你为何会被带到这里。",
        },
      },
    ],
    featureSections: [
      {
        title: {
          en: "Puzzle gates, hidden clues, and eerie detours",
          zh: "机关谜题、隐藏线索与诡异岔路",
        },
        body: {
          en: "This is not a pure storybook. Progress comes from reading odd spaces, solving layered puzzles, and noticing what each strange resident or object is trying to tell you.",
          zh: "它并不只是看剧情推进。真正的节奏来自观察诡异场景、拆解层层机关，并读懂角色与道具想传达的信息。",
        },
      },
      {
        title: {
          en: "Hand-drawn mood with compact adventure pacing",
          zh: "手绘气质配合紧凑冒险节奏",
        },
        body: {
          en: "The world feels intimate instead of oversized. Scenes are staged like memorable puzzle rooms, so every location reads like a playable illustration with a specific purpose.",
          zh: "它不是那种体量庞大的开放世界，而是更像一系列被精心布置的谜题场景。每个地点都像一张可游玩的插画，并承担明确的推进作用。",
        },
      },
      {
        title: {
          en: "Built by a two-person indie team",
          zh: "由两人独立团队完成",
        },
        body: {
          en: "According to the App Store note, design, development, QA, and promotion were all handled by a team of two. That gives the game a focused identity and a clearly authored feel.",
          zh: "根据 App Store 开发者说明，设计、开发、测试和推广都由两人团队完成。这让作品呈现出更聚焦、更强作者表达的独立游戏气质。",
        },
      },
    ],
    gallery: [
      {
        src: "/apps/treehole-adventure-store/hero.jpg",
        alt: {
          en: "TreeHole Adventure opening village scene",
          zh: "树洞奇妙之旅开场村庄场景",
        },
        title: {
          en: "Step into a quiet world that instantly feels wrong",
          zh: "踏入一座安静却明显不对劲的世界",
        },
        body: {
          en: "The first impression is deceptively calm: soft colors, simple roads, and a storybook town. That calm is exactly what makes the mystery land harder.",
          zh: "初见时是柔和配色、简单道路与童话感小镇，但正是这种平静感，让后续谜团显得更不安。",
        },
      },
      {
        src: "/apps/treehole-adventure-store/screen-1.jpg",
        alt: {
          en: "TreeHole Adventure interior puzzle scene",
          zh: "树洞奇妙之旅室内谜题场景",
        },
        title: {
          en: "Every room is a compact puzzle box",
          zh: "每个房间都是一个小型谜题盒",
        },
        body: {
          en: "Objects, characters, and item placements carry meaning. You are constantly reading the room, not just tapping through it.",
          zh: "道具、角色和摆设位置都带着信息。玩家需要真正“读懂场景”，而不只是一路点过去。",
        },
      },
      {
        src: "/apps/treehole-adventure-store/screen-2.jpg",
        alt: {
          en: "TreeHole Adventure clue investigation scene",
          zh: "树洞奇妙之旅线索调查场景",
        },
        title: {
          en: "Clues feel tactile and close-up",
          zh: "线索呈现更贴身、更具体",
        },
        body: {
          en: "The game likes to push attention onto suspicious details, photos, and objects, giving the mystery an investigative rhythm instead of abstract menu logic.",
          zh: "游戏经常把注意力拉向可疑细节、照片与关键物件，让探索更像调查，而不是抽象的菜单推理。",
        },
      },
      {
        src: "/apps/treehole-adventure-store/screen-3.jpg",
        alt: {
          en: "TreeHole Adventure maze puzzle scene",
          zh: "树洞奇妙之旅迷宫机关场景",
        },
        title: {
          en: "Puzzles escalate from observation to deduction",
          zh: "谜题从观察逐步升级到推理",
        },
        body: {
          en: "Maze-like interfaces and symbolic mechanisms change the pace, forcing players to connect what they saw earlier with what the game is asking now.",
          zh: "迷宫式界面和符号机关会改变节奏，迫使玩家把之前见过的信息与当前谜面真正连接起来。",
        },
      },
      {
        src: "/apps/treehole-adventure-store/screen-4.jpg",
        alt: {
          en: "TreeHole Adventure village path scene",
          zh: "树洞奇妙之旅村庄道路场景",
        },
        title: {
          en: "Quiet paths still feel charged with mystery",
          zh: "平静道路里依然藏着不安感",
        },
        body: {
          en: "Even the calmer outdoor scenes keep the game slightly off-balance, which helps the world feel story-driven instead of decorative.",
          zh: "即使是更安静的户外场景，也始终保留一点异样感，让整个世界更像在叙事，而不只是装饰背景。",
        },
      },
      {
        src: "/apps/treehole-adventure-store/screen-5.jpg",
        alt: {
          en: "TreeHole Adventure outdoor statue gate scene",
          zh: "树洞奇妙之旅户外雕像关卡场景",
        },
        title: {
          en: "The adventure keeps opening new strange landmarks",
          zh: "冒险会不断打开新的奇异地标",
        },
        body: {
          en: "Outdoor areas keep the game from feeling boxed in. Statues, roads, and landmarks suggest a larger world while still keeping progression readable on mobile.",
          zh: "户外关卡让游戏不会显得过于封闭。雕像、道路与地标暗示更大的世界，同时仍保持移动端可读性。",
        },
      },
    ],
    storeFacts: [
      {
        label: {
          en: "Category",
          zh: "分类",
        },
        value: {
          en: "Puzzle",
          zh: "益智解谜",
        },
      },
      {
        label: {
          en: "Latest version on App Store",
          zh: "App Store 最新版本",
        },
        value: {
          en: "1.9, updated on January 5, 2024",
          zh: "1.9，更新于 2024 年 1 月 5 日",
        },
      },
      {
        label: {
          en: "Download size",
          zh: "下载大小",
        },
        value: {
          en: "395.8 MB",
          zh: "395.8 MB",
        },
      },
      {
        label: {
          en: "Compatibility",
          zh: "兼容性",
        },
        value: {
          en: "iPhone and iPad, requires iOS/iPadOS 12.0 or later",
          zh: "支持 iPhone 和 iPad，需要 iOS / iPadOS 12.0 或更高版本",
        },
      },
      {
        label: {
          en: "Languages",
          zh: "语言",
        },
        value: {
          en: "English plus 9 more languages including Simplified Chinese",
          zh: "支持英文及另外 9 种语言，包含简体中文",
        },
      },
    ],
    storeLinks: {
      appStore: "https://apps.apple.com/app/id1473568894",
      googlePlay:
        "https://play.google.com/store/apps/details?id=com.treeholegame.adventure",
    },
  },
];

export function getAppBySlug(slug: string) {
  return appCatalog.find((app) => app.slug === slug);
}
