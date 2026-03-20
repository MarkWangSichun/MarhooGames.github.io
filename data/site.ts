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
            en: "APP Codename: Focus",
            zh: "APP代号：专注",
        },
        category: {
            en: "Productivity app",
            zh: "效率应用",
        },
        tagline: {
            en: "A mobile app built around focus, aiming to reduce distractions and bring attention back to the task at hand.",
            zh: "一款以专注为核心的移动应用，目标是减少干扰，让注意力重新回到当前任务。",
        },
        description: {
            en: "APP Codename: Focus is presented on the studio site as a productivity app in the lineup and is currently shown as coming soon. The existing icon asset has already been integrated into the site, with room reserved for future store links, screenshots, and launch copy.",
            zh: "《APP代号：专注》作为工作室产品矩阵中的效率型应用加入官网，目前以即将推出的产品形式展示。站点已接入现有图标资源，并为后续补充商店链接、截图和上线文案预留了完整位置。",
        },
        audience: {
            en: "People who want a calmer, more intentional daily workflow on mobile",
            zh: "希望在移动端获得更安静、更有节奏日常工作流的用户",
        },
        icon: "/apps/vege-foc/foc_app_icon.jpg",
        image: "/apps/vege-foc/foc_app_icon.jpg",
        status: "coming-soon",
        highlights: [
            {
                en: "Built to improve efficiency",
                zh: "目标改善效率",
            },
            {
                en: "Blending focus with home design, so every session of concentration earns something back",
                zh: "结合家装，让你的每次专注都有回报！",
            },
        ],
        storySections: [
            {
                title: {
                    en: "Why it exists",
                    zh: "为什么做这款应用",
                },
                body: {
                    en: "The product is framed around a simple problem: most mobile workflows get fragmented by context switching, notifications, and visual noise. Focus is meant to compress the path between intent and action.",
                    zh: "这款产品围绕一个直接的问题展开：移动端工作流经常被切换上下文、通知和视觉噪音打断。《APP代号：专注》希望缩短“产生意图”到“开始执行”之间的路径。",
                },
            },
        ],
        featureSections: [
            {
                title: {
                    en: "Built for intentional use",
                    zh: "围绕有意识使用而设计",
                },
                body: {
                    en: "The current site positioning emphasizes a deliberate, low-friction experience instead of feature sprawl. That gives the app room to grow while preserving a clear product promise.",
                    zh: "当前站点呈现强调的是克制、低阻力的使用体验，而不是堆叠功能。这让产品后续可以继续扩展，同时仍然保持清晰的核心承诺。",
                },
            },
        ],
        storeFacts: [
            {
                label: {
                    en: "Status",
                    zh: "状态",
                },
                value: {
                    en: "Coming soon",
                    zh: "即将推出",
                },
            },
            {
                label: {
                    en: "Category",
                    zh: "分类",
                },
                value: {
                    en: "Focus and productivity",
                    zh: "专注与效率",
                },
            },
        ],
        storeLinks: {},
    },
    {
        slug: "organic-veggie",
        name: {
            en: "Organic Veggie",
            zh: "有机蔬菜农场",
        },
        category: {
            en: "Game",
            zh: "游戏",
        },
        tagline: {
            en: "A live farming-and-home-decor mobile game from marhoo.com, available on the App Store and Google Play.",
            zh: "来自 marhoo.com 的已上线手游，已在 App Store 和 Google Play 发布。",
        },
        description: {
            en: "Organic Veggie is one of the studio's published games currently featured on marhoo.com. This site version reuses the official icon, background art, and store destinations from the live homepage.",
            zh: "Organic Veggie 是工作室已经发布、并正在 marhoo.com 展示中的游戏之一。本站版本复用了官网中的官方图标、背景视觉和商店跳转链接。",
        },
        audience: {
            en: "Players who want a low-pressure farming and decorating routine that fits into a few minutes a day",
            zh: "适合想在每天几分钟内轻松种菜、布置房间、获得低压力陪伴感的玩家",
        },
        icon: "/apps/organic-veggie-store/icon.jpg",
        image: "/apps/organic-veggie-store/screen-3.webp",
        source: {
            en: "Home-decor and farming casual game",
            zh: "家装 x 种植 休闲游戏",
        },
        status: "live",
        highlights: [
            {
                en: "Grow vegetables from mystery seeds and check back in with only a few taps a day",
                zh: "从未知种子里种出不同蔬菜，每天只要几次轻操作就能推进",
            },
            {
                en: "Decorate rooms freely with furniture, layout choices, and unlockable expansions",
                zh: "可以自由摆放家具、调整房间布局，并逐步解锁新空间",
            },
            {
                en: "App Store description emphasizes no grind, optional ads, and a relaxed pace",
                zh: "App Store 文案强调无强制肝度、广告可选、整体节奏轻松",
            },
            {
                en: "Latest App Store version is 1.4, released on December 28, 2025",
                zh: "App Store 当前最新版本为 1.4，更新时间是 2025 年 12 月 28 日",
            },
        ],
        storySections: [
            {
                title: {
                    en: "Built as an antidote to grind",
                    zh: "作为“反肝”体验被做出来",
                },
                body: {
                    en: "In the App Store description, Marhoo says the team wanted to make something calmer after playing too many repetitive, grind-heavy games. That intent shows up in the short daily loop and the soft, domestic art direction.",
                    zh: "按照 App Store 介绍，Marhoo 想在玩过太多重复且偏肝的游戏之后，做一款更轻松的作品。这个出发点直接体现在它的短时日常循环，以及偏居家、柔和的视觉方向上。",
                },
            },
            {
                title: {
                    en: "A tiny daily farm loop",
                    zh: "围绕日常几分钟展开的小循环",
                },
                body: {
                    en: "The core rhythm is intentionally small: plant, water, wait, harvest, then spend what you earned on furniture or new seeds. It is designed to fit around real life instead of trying to consume it.",
                    zh: "它的核心节奏被刻意压得很小：播种、浇水、等待、收获，然后把赚到的资源用在家具或新种子上。它更像是嵌进生活里的轻度陪伴，而不是反过来占满时间。",
                },
            },
        ],
        featureSections: [
            {
                title: {
                    en: "Grow vegetables with surprise built in",
                    zh: "用带一点未知感的方式种菜",
                },
                body: {
                    en: "The App Store copy leans on discovery: you plant a seed first, then see what kind of vegetable comes out. That simple reveal loop makes the farming feel more playful than routine.",
                    zh: "App Store 文案里反复强调“先种下，再看看会长出什么”。这种轻度开盲盒式的反馈，让种植过程比纯粹重复劳动更有趣。",
                },
            },
            {
                title: {
                    en: "Decoration is a co-star, not a side system",
                    zh: "装饰不是附属，而是并列核心",
                },
                body: {
                    en: "Room unlocks, furniture shopping, and free placement are treated as major reasons to stay. The game is not only about farming output, but about shaping a place that feels yours.",
                    zh: "解锁房间、逛家具商店和自由摆放并不是附属功能，而是主要吸引力之一。它不只是让你追求产出，也鼓励你把空间真正布置成自己的样子。",
                },
            },
            {
                title: {
                    en: "Free-to-play without forced interruption",
                    zh: "免费游玩，但尽量不打断节奏",
                },
                body: {
                    en: "The listing explicitly says ads are optional rather than mandatory. That matters for this kind of cozy loop, because the promise is relaxation, not constant monetization pressure.",
                    zh: "商店页明确写了广告是可选而不是强制的。对这种休闲循环来说，这一点很重要，因为它承诺的是放松感，而不是持续被商业化打断。",
                },
            },
        ],
        gallery: [
            {
                src: "/apps/organic-veggie-store/screen-1.webp",
                alt: {
                    en: "Organic Veggie planting screen from the App Store listing",
                    zh: "Organic Veggie 的种植界面截图",
                },
                title: {
                    en: "Start with a tiny patch and grow vegetables",
                    zh: "从一小块田地开始，把蔬菜种出来",
                },
                body: {
                    en: "The first App Store screenshot focuses on the basic loop: sow seeds, water them, and check back later to see what came out of the soil.",
                    zh: "第一张 App Store 截图直接展示了最核心的玩法：播种、浇水，然后隔一段时间回来看看土地里长出了什么。",
                },
            },
            {
                src: "/apps/organic-veggie-store/screen-2.webp",
                alt: {
                    en: "Organic Veggie room expansion screenshot from the App Store listing",
                    zh: "Organic Veggie 的房间扩展截图",
                },
                title: {
                    en: "Unlock rooms and keep the home expanding",
                    zh: "逐步解锁房间，让家慢慢变大",
                },
                body: {
                    en: "The second screenshot highlights room expansion, showing that the game grows from a simple farm loop into a home-building routine.",
                    zh: "第二张截图对应房间扩展功能，说明这款游戏会从简单种植，逐步延伸到完整的居家布置体验。",
                },
            },
            {
                src: "/apps/organic-veggie-store/screen-3.webp",
                alt: {
                    en: "Organic Veggie decoration mode screenshot from the App Store listing",
                    zh: "Organic Veggie 的装饰模式截图",
                },
                title: {
                    en: "Decorate freely instead of following a fixed template",
                    zh: "自由摆放，而不是照着固定模板装修",
                },
                body: {
                    en: "The decoration UI is front and center here, reinforcing one of the store page's main promises: high freedom in furniture placement and room styling.",
                    zh: "这一张把装修界面完整放到前景，也呼应了商店页的核心卖点之一：家具摆放和房间风格拥有相对高的自由度。",
                },
            },
            {
                src: "/apps/organic-veggie-store/screen-4.webp",
                alt: {
                    en: "Organic Veggie furniture shop screenshot from the App Store listing",
                    zh: "Organic Veggie 的家具商店截图",
                },
                title: {
                    en: "Pick from a large furniture catalog",
                    zh: "从大量家具里慢慢挑自己喜欢的",
                },
                body: {
                    en: "The furniture store screenshot makes the collecting side feel tangible. You are not only growing vegetables for numbers, but also earning toward a more personal room.",
                    zh: "家具商店把收集与布置的目标具体化了。你种菜不只是为了数字增长，也是在为一个更符合自己喜好的空间持续攒资源。",
                },
            },
            {
                src: "/apps/organic-veggie-store/screen-5.webp",
                alt: {
                    en: "Organic Veggie seed collection screenshot from the App Store listing",
                    zh: "Organic Veggie 的种子领取截图",
                },
                title: {
                    en: "Seed collection keeps the loop moving",
                    zh: "收种子这一步，让循环持续往前走",
                },
                body: {
                    en: "The final screenshot turns seed collecting into a light ritual. It supports the game's promise that even very short sessions can still feel like progress.",
                    zh: "最后一张截图展示了领取种子的环节，让整个循环显得像一种轻量日常仪式，也支撑了“只玩几分钟也有推进感”的定位。",
                },
            },
        ],
        storeFacts: [
            {
                label: {
                    en: "Category on App Store",
                    zh: "App Store 分类",
                },
                value: {
                    en: "Games, with Simulation and Casual as listed genres",
                    zh: "Games，细分标签为 Simulation 与 Casual",
                },
            },
            {
                label: {
                    en: "Latest App Store version",
                    zh: "App Store 最新版本",
                },
                value: {
                    en: "1.4, released on December 28, 2025",
                    zh: "1.4，发布于 2025 年 12 月 28 日",
                },
            },
            {
                label: {
                    en: "Size",
                    zh: "大小",
                },
                value: {
                    en: "242.2 MB",
                    zh: "242.2 MB",
                },
            },
            {
                label: {
                    en: "Compatibility",
                    zh: "兼容性",
                },
                value: {
                    en: "iPhone and iPad, requires iOS / iPadOS 13.0 or later",
                    zh: "支持 iPhone 与 iPad，需要 iOS / iPadOS 13.0 或更高版本",
                },
            },
            {
                label: {
                    en: "Languages",
                    zh: "语言",
                },
                value: {
                    en: "English, Simplified Chinese, Traditional Chinese, and 6 more languages",
                    zh: "支持英文、简体中文、繁体中文在内共 9 种语言",
                },
            },
        ],
        immersiveShowcase: {
            orientation: "portrait",
            heroEyebrow: {
                en: "App Store image-first page",
                zh: "参考 App Store 的画面优先页",
            },
            heroTitle: {
                en: "Plant seeds, decorate your home, and keep the pace soft.",
                zh: "种下种子，布置自己的房间，把节奏放慢一点。",
            },
            heroBody: {
                en: "Organic Veggie sells itself best through its App Store screens: a tiny farm loop, cozy interiors, and a decorating system that feels as important as harvesting.",
                zh: "Organic Veggie 最适合先让 App Store 截图自己说话：一边是轻量种植循环，一边是温和的室内布置感，装修的重要性几乎和收菜本身一样高。",
            },
            galleryEyebrow: {
                en: "Screens from the App Store",
                zh: "App Store 官方截图",
            },
            galleryTitle: {
                en: "A cozy farming loop told through the store gallery",
                zh: "通过商店截图把这套轻松循环讲清楚",
            },
            audienceBody: {
                en: "If the player wants a game that can be checked in on briefly, rewards small acts of care, and lets decoration feel personal, this presentation should read like a low-pressure invitation.",
                zh: "如果玩家想找的是那种可以偶尔上线照料一下、每次都有一点点推进、同时又能把房间布置出个人感的游戏，这个页面就应该像一张没有压力的邀请函。",
            },
            storyEyebrow: {
                en: "Product setup",
                zh: "产品设定",
            },
            storyTitle: {
                en: "A cozy farm built around short, repeatable moments",
                zh: "围绕短时可重复陪伴感搭出来的小农场",
            },
            featureEyebrow: {
                en: "Why it works as a cozy game",
                zh: "为什么它适合做成一款治愈向休闲游戏",
            },
        },
        previewVideo: {
            src: "/apps/organic-veggie-store/preview.mp4",
            poster: "/apps/organic-veggie-store/screen-1.webp",
            orientation: "portrait",
            title: {
                en: "App Store preview video",
                zh: "App Store 预览视频",
            },
            body: {
                en: "Official preview video captured from the App Store listing, showing the farming loop, decoration flow, and the game's relaxed pacing in motion.",
                zh: "接入苹果 App Store 页面中的官方预览视频，用动态画面展示种植循环、装修流程和整体偏轻松的节奏。",
            },
        },
        storeLinks: {
            appStore: "https://apps.apple.com/us/app/organic-veggie/id6745701895",
            googlePlay:
                "https://play.google.com/store/apps/details?id=com.marhoo.vege",
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
