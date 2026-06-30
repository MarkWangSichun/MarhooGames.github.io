export type Language = "en" | "zh";

export type LocalizedText = {
    en: string;
    zh: string;
};

export type AppInfo = {
    slug: string;
    name: LocalizedText;
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
    previewVideo?: {
        src: string;
        poster?: string;
        orientation?: "landscape" | "portrait";
        title: LocalizedText;
        body: LocalizedText;
    };
    immersiveShowcase?: {
        orientation: "landscape" | "portrait";
        heroEyebrow: LocalizedText;
        heroTitle: LocalizedText;
        heroBody: LocalizedText;
        galleryEyebrow: LocalizedText;
        galleryTitle: LocalizedText;
        audienceBody: LocalizedText;
        storyEyebrow: LocalizedText;
        storyTitle: LocalizedText;
        featureEyebrow: LocalizedText;
    };
    storeLinks: {
        appStore?: string;
        googlePlay?: string;
    };
};

export const appCatalog: AppInfo[] = [
    {
        slug: "focus",
        name: {
            en: "Veggie Focus — Cozy Pomodoro Timer",
            zh: "专注菜菜 — 养成系番茄钟",
        },
        category: {
            en: "Productivity",
            zh: "效率",
        },
        tagline: {
            en: "Grow veggies & decorate — a cozy, healing focus timer that makes concentration feel rewarding",
            zh: "种菜&装扮，可爱治愈的专注计时器 — 让每次专注都有正反馈",
        },
        description: {
            en: "Staying focused is hard — but when every session gives you something back, it becomes light and rewarding. Veggie Focus combines vegetable growing, room decorating, and focus tracking into one cozy experience. No forced discipline — just a cute veggie buddy that grows alongside you. Harvest veggies, unlock furniture, and fill your little home. Your focus world becomes richer and cuter with every effort you put in.",
            zh: "专注很累，专注好难。但当每次专注都能收获正反馈，它也可以变成一件轻松又有成就感的事情！结合【蔬菜养成】【家具装扮】和【专注记录】，专注菜菜是一款轻松有趣、鼓励自主驱动的专注软件。没有强制自律的压力——但当你开始专注，会有一颗可爱的菜菜陪着你，和你一起成长。收获菜菜——兑换家具——充实你的小家。这个专注菜菜的小世界，会因为你的努力，变得越来越丰富可爱。",
        },
        audience: {
            en: "Anyone who wants a gentler, more rewarding way to build focus habits — no guilt, just growth",
            zh: "想要用更轻松、更有正反馈的方式养成专注习惯的用户 — 没有负罪感，只有成长感",
        },
        icon: "/apps/vege-foc/foc_app_icon.jpg",
        image: "/apps/vege-foc/foc_app_icon.jpg",
        status: "coming-soon",
        highlights: [
            {
                en: "Focus timer — count up or count down",
                zh: "专注计时 — 支持正计时与倒计时",
            },
            {
                en: "Veggie growing — plant & unlock your collection",
                zh: "蔬菜养成 — 种植蔬菜，解锁图鉴",
            },
            {
                en: "Room decorating — high-freedom furnishing system",
                zh: "家居装扮 — 超高自由度装修系统",
            },
            {
                en: "Tag categories — customize for study, work & more",
                zh: "标签分类 — 自由定制学习&工作场景",
            },
            {
                en: "White noise — immersive focus atmosphere",
                zh: "白噪音 — 营造沉浸式专注环境",
            },
            {
                en: "Data stats — clearly track your focus journey",
                zh: "数据统计 — 清晰记录你的专注轨迹",
            },
        ],
        storySections: [
            {
                title: {
                    en: "Why we made this",
                    zh: "为什么做这款应用",
                },
                body: {
                    en: "Most focus apps feel like a chore — rigid timers, guilt-driven streaks, cold interfaces. We wanted something different: a tiny, warm world where focus naturally becomes something you want to do, not something you have to do. Veggie Focus turns every session into a small act of care — for your tasks, and for your little veggie buddy.",
                    zh: "大多数专注工具都带着强硬感——刻板的计时、负罪感驱动的连续记录、冷淡的界面。我们想做点不一样的：一个温暖的小世界，让专注变成一件你自然想去做的事，而不是必须完成的任务。专注菜菜把每次专注都变成一份小小的照料——既照料你的任务，也照料你的菜菜伙伴。",
                },
            },
        ],
        featureSections: [
            {
                title: {
                    en: "Focus that grows with you",
                    zh: "陪你一起成长的专注体验",
                },
                body: {
                    en: "Start a session, grow a veggie, unlock furniture, and watch your little home come to life. Every completed focus block earns progress toward your collection. The more you focus, the cuter your world becomes — it's a gentle loop that rewards consistency without punishing breaks.",
                    zh: "开始专注 → 种植蔬菜 → 解锁家具 → 充实小家。每次完成的专注时段都为你的收藏带来进展。专注越久，你的小世界就越丰富可爱。这是一个温和的正循环——奖励坚持，但不惩罚休息。",
                },
            },
        ],
        storeFacts: [
            {
                label: {
                    en: "Expected release",
                    zh: "预计推出",
                },
                value: {
                    en: "August 31, 2026",
                    zh: "2026年8月31日",
                },
            },
            {
                label: {
                    en: "Price",
                    zh: "价格",
                },
                value: {
                    en: "Free (with in‑app purchases)",
                    zh: "免费（含 App 内购买）",
                },
            },
            {
                label: {
                    en: "Size",
                    zh: "大小",
                },
                value: {
                    en: "175.4 MB",
                    zh: "175.4 MB",
                },
            },
            {
                label: {
                    en: "Compatibility",
                    zh: "兼容性",
                },
                value: {
                    en: "iPhone, requires iOS 15.0 or later",
                    zh: "支持 iPhone，需 iOS 15.0 或更高版本",
                },
            },
            {
                label: {
                    en: "Languages",
                    zh: "语言",
                },
                value: {
                    en: "English + 8 more (incl. Chinese, Japanese, Korean, German, French, Spanish, Portuguese)",
                    zh: "英文及 8 种语言（含中/日/韩/德/法/西/葡语）",
                },
            },
            {
                label: {
                    en: "Age rating",
                    zh: "年龄分级",
                },
                value: {
                    en: "9+",
                    zh: "9+",
                },
            },
        ],
        storeLinks: {
            appStore:
                "https://apps.apple.com/cn/app/%E4%B8%93%E6%B3%A8%E8%8F%9C%E8%8F%9C-%E5%85%BB%E6%88%90%E7%B3%BB%E7%95%AA%E8%8C%84%E9%92%9F/id6756035961",
        },
    },
    {
        slug: "treehole-adventure",
        name: {
            en: "TreeHole Adventure",
            zh: "树洞-奇妙之旅",
        },
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
            zh: "参考 App Store 介绍，《树洞-奇妙之旅》的开端是你在洞穴探险时发现树上的神秘洞口，被吸入黑暗后醒来，发现自己来到一座居民离奇失踪的神秘小镇。整段旅程围绕着追查真相、拼起事件之间的联系，并设法回到原来的世界。",
        },
        audience: {
            en: "Players who enjoy story-led puzzle adventures with a compact, mysterious atmosphere",
            zh: "喜欢剧情驱动、氛围神秘、节奏紧凑的解谜冒险玩家",
        },
        icon: "/apps/marhoo/treehole-adventure-icon.webp",
        image: "/apps/treehole-adventure-store/hero.jpg",
        source: {
            en: "Cartoon-style puzzle game",
            zh: "卡通风解谜游戏",
        },
        status: "live",
        highlights: [],
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
                    zh: "树洞-奇妙之旅开场村庄场景",
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
                    zh: "树洞-奇妙之旅室内谜题场景",
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
                    zh: "树洞-奇妙之旅线索调查场景",
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
                    zh: "树洞-奇妙之旅迷宫机关场景",
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
                    zh: "树洞-奇妙之旅村庄道路场景",
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
                    zh: "树洞-奇妙之旅户外雕像关卡场景",
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
        previewVideo: {
            src: "/apps/treehole-adventure-store/preview.mp4",
            poster: "/apps/treehole-adventure-store/hero.jpg",
            title: {
                en: "App Store preview video",
                zh: "App Store 预览视频",
            },
            body: {
                en: "Official preview video captured from the App Store listing so visitors can see the game's motion, pacing, and puzzle atmosphere before downloading.",
                zh: "接入苹果商店页面中的官方预览视频，让访问者在下载前先看到游戏的动态演出、节奏和解谜氛围。",
            },
        },
        immersiveShowcase: {
            orientation: "landscape",
            heroEyebrow: {
                en: "Image-first game page",
                zh: "以画面为主的游戏详情页",
            },
            heroTitle: {
                en: "Fall through the tree hole, enter the missing town, and solve your way back.",
                zh: "坠入树洞，进入失踪者之城，并靠解谜一步步找回归途。",
            },
            heroBody: {
                en: "TreeHole Adventure works best when the world speaks first. This page now lets the screenshots carry the mood before the copy explains it.",
                zh: "《树洞-奇妙之旅》最适合先让世界观自己说话，所以这个页面现在优先用截图建立氛围，再由文案补足信息。",
            },
            galleryEyebrow: {
                en: "Screens from the adventure",
                zh: "游戏截图",
            },
            galleryTitle: {
                en: "Let the world sell the game",
                zh: "先用画面把游戏讲出来",
            },
            audienceBody: {
                en: "If the player likes hand-drawn mystery worlds, scene-based puzzles, and the feeling of uncovering how a town broke apart, the page should feel like an invitation to play.",
                zh: "如果玩家喜欢手绘神秘世界、场景式解谜，以及逐步拼出小镇真相的体验，这个页面就应该像一张邀请你开始游玩的门票。",
            },
            storyEyebrow: {
                en: "Story setup",
                zh: "故事设定",
            },
            storyTitle: {
                en: "A mystery setup with immediate stakes",
                zh: "一开场就建立风险与谜团",
            },
            featureEyebrow: {
                en: "Why it plays well as a game",
                zh: "为什么它像一款值得玩的游戏",
            },
        },
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
