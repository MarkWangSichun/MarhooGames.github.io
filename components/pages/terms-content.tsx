"use client";

import { useTranslate } from "@/lib/i18n";

const sections = [
  {
    title: { en: "Acceptance and Eligibility", zh: "接受条款与适用资格" },
    body: [
      {
        en: "These Terms of Service apply to the Marhoo Studio website and the apps and games that link to this page. By accessing, downloading, installing, purchasing, or using any covered service, you agree to these Terms.",
        zh: "本服务条款适用于 Marhoo Studio 网站，以及链接到本页面的应用和游戏。访问、下载、安装、购买或使用任何受本条款约束的服务，即表示你同意本条款。",
      },
      {
        en: "If you are under the age of majority where you live, you may use the service only with permission from a parent or legal guardian. If you do not agree to these Terms, do not use the service.",
        zh: "如果你在所在地区尚未达到法定成年年龄，则只能在父母或法定监护人许可下使用本服务。如果你不同意本条款，请不要使用本服务。",
      },
    ],
  },
  {
    title: { en: "Service Scope and Availability", zh: "服务范围与可用性" },
    body: [
      {
        en: "We may add, modify, remove, suspend, discontinue, or region-limit features, content, items, events, servers, pricing, or distribution channels at any time. Apps and games may also differ by platform, device, operating system version, country, age rating, or store policy.",
        zh: "我们可能随时新增、修改、移除、暂停、终止或按地区限制功能、内容、道具、活动、服务器、价格或分发渠道。应用和游戏也可能因平台、设备、系统版本、国家或地区、年龄分级或商店政策而存在差异。",
      },
      {
        en: "We are not required to continue supporting any particular feature, online mode, save system, item, language pack, or version of a service unless applicable law requires otherwise.",
        zh: "除非适用法律另有要求，我们没有义务持续支持某一特定功能、联机模式、存档系统、道具、语言包或服务版本。",
      },
    ],
  },
  {
    title: { en: "Accounts, Gameplay Data, and Community Features", zh: "账户、游戏数据与社区功能" },
    body: [
      {
        en: "Some services may work without an account, while others may require an account, platform identity, cloud save profile, or support email. You are responsible for information you submit and for keeping your device, credentials, and linked platform account reasonably secure.",
        zh: "部分服务可以在无账户状态下使用，另一些服务则可能需要账户、平台身份、云存档档案或支持邮箱。你需要对自己提交的信息负责，并妥善保护设备、凭据以及关联的平台账户安全。",
      },
      {
        en: "If a service includes usernames, chat, leaderboards, guilds, multiplayer, or user-generated content now or in the future, you may not upload or share unlawful, infringing, abusive, harassing, hateful, deceptive, sexual, malicious, or otherwise harmful content, and you may not interfere with the experience of other users.",
        zh: "如果某项服务现在或未来包含用户名、聊天、排行榜、公会、多人玩法或用户生成内容，你不得上传或分享违法、侵权、辱骂、骚扰、仇恨、误导、色情、恶意或其他有害内容，也不得干扰其他用户的正常体验。",
      },
      {
        en: "We may review, moderate, remove, or restrict content, accounts, matchmaking access, or community privileges when necessary for safety, legal compliance, platform rules, or service integrity.",
        zh: "为保障安全、符合法律要求、遵守平台规则或维护服务完整性，我们可能在必要时审核、删除或限制内容、账户、匹配权限或社区功能使用资格。",
      },
    ],
  },
  {
    title: { en: "Payments, Subscriptions, and Virtual Items", zh: "付费、订阅与虚拟物品" },
    body: [
      {
        en: "Apps and games may offer paid downloads, subscriptions, downloadable content, consumables, virtual currency, or virtual items. Unless required by law, all purchases are final after delivery and are subject to the refund rules of the platform store or payment provider you used.",
        zh: "应用和游戏可能提供付费下载、订阅、可下载内容、消耗品、虚拟货币或虚拟物品。除非法律另有要求，相关内容一经交付通常即视为最终成交，并受你所使用的平台商店或支付服务商退款规则约束。",
      },
      {
        en: "Virtual items and in-game currency are licensed, not sold, have no cash value unless expressly stated, and may be modified, expired, revoked, or discontinued as part of service operation, balancing, anti-fraud action, or content updates to the extent permitted by law.",
        zh: "虚拟物品和游戏内货币仅以许可方式提供，并非出售；除非我们明确说明，否则它们不具有现实现金价值。在法律允许范围内，它们可能因服务运营、数值平衡、防欺诈措施或内容更新而被调整、失效、撤销或终止。",
      },
      {
        en: "Subscriptions may renew automatically unless canceled through the platform that manages billing. Price changes, trial terms, renewal timing, and cancellation timing are generally controlled by the applicable store or payment provider.",
        zh: "订阅服务可能会自动续费，除非你通过负责计费的平台取消。价格变化、试用条款、续费时间和取消生效时间通常由相应商店或支付服务商决定。",
      },
    ],
  },
  {
    title: { en: "Rules of Conduct and Fair Use", zh: "行为规范与公平使用" },
    body: [
      {
        en: "You may use our services only for lawful and intended purposes. You may not cheat, exploit bugs for unfair advantage, automate gameplay without authorization, perform denial-of-service activity, interfere with matchmaking or rankings, evade suspensions, or attempt to gain unauthorized access to any system or data.",
        zh: "你只能以合法且符合产品设计目的的方式使用我们的服务。你不得作弊、利用漏洞获取不公平优势、未经授权自动化操作、发起拒绝服务行为、干扰匹配或排行、规避封禁，或试图未经授权访问任何系统或数据。",
      },
      {
        en: "Except where applicable law does not allow such restrictions, you may not copy, scrape at scale, decompile, reverse engineer, modify, redistribute, rent, resell, or create derivative works from any part of the service.",
        zh: "除非适用法律不允许作出此类限制，你不得复制、大规模抓取、反编译、反向工程、修改、再分发、出租、转售或基于本服务任何部分创作衍生作品。",
      },
    ],
  },
  {
    title: { en: "Third-Party Platforms and Services", zh: "第三方平台与服务" },
    body: [
      {
        en: "Our services may rely on or integrate third-party app stores, payment processors, analytics providers, ad networks, cloud providers, engines, identity systems, or social features. Those third parties may impose separate terms, technical restrictions, and privacy practices.",
        zh: "我们的服务可能依赖或集成第三方应用商店、支付处理方、分析服务商、广告网络、云服务商、引擎、身份系统或社交功能。这些第三方可能适用其各自的条款、技术限制和隐私规则。",
      },
      {
        en: "We are not responsible for third-party products or services except to the extent required by law. Your relationship with those providers may be governed by separate agreements between you and them.",
        zh: "除法律另有规定外，我们不对第三方产品或服务负责。你与这些服务商之间的关系，可能受你与其另行达成的协议约束。",
      },
    ],
  },
  {
    title: { en: "Intellectual Property and Limited License", zh: "知识产权与有限许可" },
    body: [
      {
        en: "The website, apps, games, artwork, music, audiovisual elements, code, interfaces, text, characters, branding, and related materials are owned by or licensed to Marhoo Studio unless otherwise stated. These Terms do not transfer ownership to you.",
        zh: "除非另有说明，本网站、应用、游戏、美术、音乐、视听内容、代码、界面、文本、角色、品牌及相关材料均归 Marhoo Studio 所有或经其授权使用。本条款不会向你转移相关所有权。",
      },
      {
        en: "Subject to these Terms, we grant you a limited, revocable, non-exclusive, non-transferable license to use the service for personal, non-commercial entertainment or consumer use.",
        zh: "在遵守本条款的前提下，我们授予你一项有限的、可撤销的、非独占且不可转让的许可，用于个人、非商业性的娱乐或消费者用途。",
      },
      {
        en: "If you send us ideas, suggestions, bug reports, feature proposals, creative concepts, or other feedback, you keep ownership of your original material, but you grant us a worldwide, non-exclusive, perpetual, irrevocable, royalty-free license to use, adapt, reproduce, publish, and incorporate that feedback to operate and improve our services.",
        zh: "如果你向我们提交创意、建议、错误报告、功能提案、设计概念或其他反馈，你仍保留对原始内容的权利，但你授予我们一项全球范围、非独占、永久、不可撤销且免版税的许可，以便我们为运营和改进服务而使用、改编、复制、发布和整合这些反馈。",
      },
    ],
  },
  {
    title: { en: "Suspension and Termination", zh: "暂停与终止" },
    body: [
      {
        en: "We may suspend, limit, or terminate access to any service or feature if we reasonably believe it is necessary for security, maintenance, legal compliance, platform demands, chargeback risk, fraud prevention, community safety, or violations of these Terms.",
        zh: "如果我们合理认为出于安全、维护、法律合规、平台要求、拒付风险、防欺诈、社区安全或违反本条款等原因有必要采取措施，我们可以暂停、限制或终止你对服务或功能的访问。",
      },
      {
        en: "You may stop using our services at any time, including by uninstalling the app, stopping a subscription through the relevant store, or no longer accessing the website.",
        zh: "你可以随时停止使用我们的服务，包括卸载应用、通过相关商店取消订阅，或不再访问本网站。",
      },
    ],
  },
  {
    title: { en: "Disclaimers", zh: "免责声明" },
    body: [
      {
        en: "To the maximum extent permitted by law, the services are provided on an as-is and as-available basis. We do not guarantee uninterrupted availability, error-free operation, compatibility with every device, preservation of every item or save state, or that every defect will be corrected within any specific timeframe.",
        zh: "在法律允许的最大范围内，本服务按“现状”及“可用”基础提供。我们不保证服务持续不中断、完全无错误、兼容所有设备、保留全部道具或存档状态，也不保证所有缺陷都会在特定时间内得到修复。",
      },
    ],
  },
  {
    title: { en: "Limitation of Liability", zh: "责任限制" },
    body: [
      {
        en: "To the maximum extent permitted by law, Marhoo Studio and its affiliates, licensors, and service providers will not be liable for indirect, incidental, special, consequential, punitive, or exemplary damages, or for loss of profits, revenue, goodwill, data, virtual items, business opportunity, or service interruption arising from or related to the service.",
        zh: "在法律允许的最大范围内，Marhoo Studio 及其关联方、许可方和服务提供商不对因本服务引起或与本服务相关的间接、附带、特殊、后果性、惩罚性或示范性损害承担责任，也不对利润、收入、商誉、数据、虚拟物品、商业机会损失或服务中断承担责任。",
      },
      {
        en: "Where liability cannot be excluded under applicable law, it will be limited to the minimum extent permitted by law.",
        zh: "如果适用法律不允许完全排除责任，则相关责任将在法律允许的最小范围内受到限制。",
      },
    ],
  },
  {
    title: { en: "Changes to These Terms", zh: "条款更新" },
    body: [
      {
        en: "We may update these Terms from time to time to reflect legal, technical, or product changes. Updated Terms become effective when posted here unless a later date is stated. Continued use of the service after the effective date means you accept the revised Terms.",
        zh: "我们可能会因法律、技术或产品变化而不时更新本条款。除非另行注明更晚日期，更新后的条款自发布于本页面时起生效。在生效日期之后继续使用本服务，即视为你接受修订后的条款。",
      },
    ],
  },
  {
    title: { en: "Contact", zh: "联系方式" },
    body: [
      {
        en: "If you have questions about these Terms, contact us at marhoogames@gmail.com.",
        zh: "如果你对本条款有任何疑问，请通过 marhoogames@gmail.com 联系我们。",
      },
      {
        en: "Effective date: March 18, 2026.",
        zh: "生效日期：2026 年 3 月 18 日。",
      },
    ],
  },
];

export function TermsContent() {
  const t = useTranslate();

  return (
    <article className="mx-auto max-w-4xl rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_24px_80px_rgba(24,34,52,0.12)] backdrop-blur sm:p-12">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
        {t({ en: "Legal", zh: "法律" })}
      </p>
      <h1 className="mt-4 font-heading text-5xl text-stone-950">
        {t({ en: "Terms of Service", zh: "用户使用条款" })}
      </h1>
      <p className="mt-6 max-w-3xl text-sm leading-8 text-stone-600">
        {t({
          en: "This version is rewritten for current app and game operations, including in-app purchases, subscriptions, online features, user conduct, content moderation, and virtual items.",
          zh: "本版本已按当前应用与游戏运营场景重写，覆盖应用内付费、订阅、在线功能、用户行为规范、内容审核和虚拟物品等常见条款。",
        })}
      </p>
      <div className="mt-8 space-y-8 text-sm leading-8 text-stone-700">
        {sections.map((section) => (
          <section key={section.title.en}>
            <h2 className="font-heading text-2xl text-stone-950">
              {t(section.title)}
            </h2>
            <div className="mt-3 space-y-4">
              {section.body.map((paragraph) => (
                <p key={paragraph.en}>{t(paragraph)}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
