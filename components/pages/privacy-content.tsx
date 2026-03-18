"use client";

import { useTranslate } from "@/lib/i18n";

const sections = [
  {
    title: { en: "Scope and Product Coverage", zh: "适用范围与产品覆盖" },
    body: [
      {
        en: "This Privacy Policy applies to the Marhoo Studio website and to our apps and games that link to this page. It is written as a general privacy notice for most consumer apps and games we publish. If a specific product shows an additional in-app notice, store disclosure, or regional supplement, that product-specific notice will control to the extent of any conflict.",
        zh: "本隐私政策适用于 Marhoo Studio 网站，以及链接到本页面的应用和游戏。本文档作为适用于我们大多数消费者应用与游戏的一般性隐私说明；如果某个具体产品在应用内、商店页或地区补充说明中展示了额外隐私通知，则该产品专属说明在冲突范围内优先生效。",
      },
      {
        en: "For the purposes of these services, Marhoo Studio or Marhoo Games is the provider responsible for the products presented here.",
        zh: "就本网站及其链接产品而言，Marhoo Studio 或 Marhoo Games 为相关服务与产品的提供方。",
      },
    ],
  },
  {
    title: { en: "Information We Collect", zh: "我们收集的信息" },
    body: [
      {
        en: "Information you provide directly may include your email address, support messages, bug reports, screenshots, player name, feedback, or any other content you choose to send when contacting us or using support features.",
        zh: "你直接提供的信息可能包括邮箱地址、支持请求内容、错误报告、截图、玩家昵称、反馈意见，或你在联系我们和使用支持功能时主动提交的其他内容。",
      },
      {
        en: "Information collected automatically may include IP address, device model, operating system, language, app version, approximate region, crash logs, gameplay or feature usage events, session timestamps, referral information, and device or advertising identifiers where allowed by platform rules and your settings.",
        zh: "自动收集的信息可能包括 IP 地址、设备型号、操作系统、语言、应用版本、大致地区、崩溃日志、游戏或功能使用事件、会话时间、来源信息，以及在平台规则和你的设置允许范围内的设备标识符或广告标识符。",
      },
      {
        en: "If a game or app includes leaderboards, cloud saves, multiplayer, community features, or account systems now or in the future, we may collect the information needed to provide those features, such as profile identifiers, progress data, friend or interaction records, moderation records, and anti-abuse signals.",
        zh: "如果某个应用或游戏现在或未来包含排行榜、云存档、多人玩法、社区功能或账户系统，我们可能会收集提供这些功能所必需的信息，例如档案标识、进度数据、好友或互动记录、内容审核记录以及防滥用信号。",
      },
      {
        en: "If you make purchases, subscriptions, or in-app purchases, payment processing is typically handled by the platform store or another payment provider. We generally do not receive your full bank card or payment account details, but we may receive transaction status, country, currency, product identifier, renewal status, or fraud-prevention information.",
        zh: "如果你进行购买、订阅或应用内付费，支付通常由平台商店或其他支付服务商处理。我们一般不会接收你的完整银行卡或支付账户信息，但可能会收到交易状态、国家或地区、币种、商品标识、续订状态或防欺诈相关信息。",
      },
    ],
  },
  {
    title: { en: "How We Use Information", zh: "我们如何使用信息" },
    body: [
      {
        en: "We use information to provide, maintain, operate, localize, secure, and improve our website, apps, and games. This includes debugging, performance monitoring, customer support, analytics, fraud prevention, abuse detection, age-gating, content moderation, and measuring product quality.",
        zh: "我们使用相关信息来提供、维护、运营、本地化、保护并改进我们的网站、应用和游戏。这包括问题排查、性能监控、客户支持、数据分析、防欺诈、滥用检测、年龄分级控制、内容审核以及产品质量评估。",
      },
      {
        en: "We may also use information to send service-related notices, respond to legal requests, enforce our terms, process user requests, deliver contextual or personalized advertising where permitted, and comply with platform, tax, accounting, or record-keeping obligations.",
        zh: "在适用情况下，我们也可能使用信息发送服务通知、回应法律请求、执行服务条款、处理用户请求、投放上下文广告或个性化广告，并履行平台、税务、会计或留档义务。",
      },
      {
        en: "Where required by applicable law, we will rely on an appropriate legal basis such as your consent, performance of a contract, our legitimate interests, or compliance with legal obligations.",
        zh: "在适用法律要求的情况下，我们会基于适当的处理依据处理信息，例如你的同意、履行合同、我们的合法利益或履行法定义务。",
      },
    ],
  },
  {
    title: { en: "Advertising, Analytics, and Third-Party Services", zh: "广告、分析与第三方服务" },
    body: [
      {
        en: "Some of our apps and games may use third-party SDKs, cloud services, engines, ad networks, attribution tools, customer support tools, or platform services. Examples may include services related to app distribution, crash reporting, analytics, advertising, cloud storage, authentication, fraud prevention, or game functionality.",
        zh: "我们的部分应用和游戏可能会使用第三方 SDK、云服务、引擎、广告网络、归因工具、客服工具或平台服务。这些服务可能用于应用分发、崩溃报告、数据分析、广告、云存储、身份验证、防欺诈或游戏功能实现等。",
      },
      {
        en: "These third parties may collect information in accordance with their own policies and contractual obligations. Their practices are not fully controlled by us, but we try to select providers that are appropriate for app and game operations and store compliance.",
        zh: "这些第三方可能会依据其自身政策和合同义务收集信息。我们无法完全控制其具体做法，但会尽量选择适合应用与游戏运营且符合商店要求的服务商。",
      },
      {
        en: "If a product uses advertising, you may see advertising identifiers or similar technologies used for ad delivery, frequency control, measurement, fraud prevention, and, where permitted, personalization. You can usually manage those choices through device settings, consent prompts, or platform privacy controls.",
        zh: "如果某个产品包含广告，你可能会遇到用于广告投放、频次控制、效果衡量、防欺诈以及在允许情况下的个性化推荐的广告标识符或类似技术。你通常可以通过设备设置、授权弹窗或平台隐私控制来管理这些选项。",
      },
    ],
  },
  {
    title: { en: "How We Share Information", zh: "我们如何共享信息" },
    body: [
      {
        en: "We may share information with service providers and partners that help us host, secure, distribute, analyze, monetize, support, or operate our products, but only as reasonably necessary for those purposes.",
        zh: "我们可能会与帮助我们托管、安全防护、分发、分析、商业化、客服支持或运营产品的服务提供商和合作方共享信息，但仅限于实现相关目的所合理必要的范围内。",
      },
      {
        en: "We may disclose information when required by law, legal process, court order, regulator request, or platform rule, or when reasonably necessary to protect our rights, users, community safety, or the public.",
        zh: "在法律、法律程序、法院命令、监管要求或平台规则要求下，或在为保护我们的权利、用户、社区安全或公众利益所合理必要时，我们可能会披露相关信息。",
      },
      {
        en: "We may also share information in connection with a merger, financing, asset sale, acquisition, reorganization, bankruptcy, or similar corporate transaction, subject to applicable confidentiality and legal requirements.",
        zh: "在合并、融资、资产出售、收购、重组、破产或类似公司交易过程中，我们也可能在符合适用保密义务与法律要求的前提下共享相关信息。",
      },
    ],
  },
  {
    title: { en: "International Transfers and Storage", zh: "跨境传输与存储" },
    body: [
      {
        en: "Our website, apps, games, or service providers may process and store information in countries other than the one where you live. Data protection laws in those countries may differ from those in your jurisdiction.",
        zh: "我们的网站、应用、游戏或服务提供商可能会在你所在国家或地区之外处理和存储信息。相关国家或地区的数据保护法律可能与你所在司法辖区不同。",
      },
      {
        en: "Where required, we will take reasonable steps to use lawful transfer mechanisms and safeguards appropriate to the type of data and the services involved.",
        zh: "在法律要求的情况下，我们会根据数据类型和服务场景，采取合理措施并使用适当的合法传输机制与保护措施。",
      },
    ],
  },
  {
    title: { en: "Data Retention", zh: "信息保留期限" },
    body: [
      {
        en: "We retain personal information for only as long as reasonably necessary for the purposes described in this Policy, including providing services, handling disputes, complying with legal obligations, enforcing our agreements, protecting security, and maintaining financial or business records.",
        zh: "我们仅会在实现本政策所述目的的合理必要期限内保留个人信息，包括提供服务、处理争议、履行法定义务、执行协议、维护安全以及保留财务或业务记录等。",
      },
      {
        en: "Retention periods may vary by data type, product feature, store requirements, safety needs, and whether the data is held directly by us or by a third-party provider.",
        zh: "具体保留期限会因数据类型、产品功能、商店要求、安全需要以及相关数据由我们还是由第三方服务商持有而有所不同。",
      },
    ],
  },
  {
    title: { en: "Your Rights and Choices", zh: "你的权利与选择" },
    body: [
      {
        en: "Depending on your location, you may have rights to request access, correction, deletion, portability, objection, restriction, or withdrawal of consent regarding certain personal information. You may also have the right to appeal a denial of your request where local law provides one.",
        zh: "根据你所在地区的法律，你可能享有访问、更正、删除、可携带、反对处理、限制处理或撤回同意等权利；在当地法律提供相关机制时，你也可能享有对请求处理结果提出申诉的权利。",
      },
      {
        en: "You may be able to control certain data practices through your device or platform settings, such as resetting advertising identifiers, limiting app tracking, revoking permissions, disabling notifications, or uninstalling the app.",
        zh: "你也可以通过设备或平台设置管理部分数据处理方式，例如重置广告标识符、限制应用跟踪、撤回权限授权、关闭通知或直接卸载应用。",
      },
      {
        en: "Residents of certain jurisdictions, including parts of the United States, the European Economic Area, the United Kingdom, and other regions with privacy laws, may have additional rights or disclosures. To exercise rights or ask questions, contact us using the address below.",
        zh: "美国部分州、欧洲经济区、英国以及其他实行隐私法律的地区居民，可能享有额外权利或适用额外披露说明。如需行使权利或提出问题，请通过下方联系方式与我们联系。",
      },
    ],
  },
  {
    title: { en: "Children and Age-Sensitive Experiences", zh: "儿童与年龄敏感场景" },
    body: [
      {
        en: "We do not knowingly collect personal information from children in violation of applicable law. If a product is directed to children or includes mixed-audience features, we may provide a separate notice, disable certain data uses, limit advertising practices, or request parental or guardian consent where required.",
        zh: "我们不会在违反适用法律的情况下故意收集儿童个人信息。如果某个产品面向儿童，或属于混合受众场景，我们可能会提供单独说明、限制某些数据用途、限制广告实践，或在法律要求时请求父母或监护人同意。",
      },
      {
        en: "If you believe a child has provided personal information to us without appropriate authorization, contact us and we will review the report and take reasonable action.",
        zh: "如果你认为有儿童在未获得适当授权的情况下向我们提供了个人信息，请联系我们；我们会核查并采取合理措施处理。",
      },
    ],
  },
  {
    title: { en: "Security", zh: "信息安全" },
    body: [
      {
        en: "We use reasonable administrative, technical, and organizational measures designed to protect information. However, no system is perfectly secure, and we cannot guarantee absolute security of data transmitted or stored through our services.",
        zh: "我们会采取合理的管理、技术和组织措施来保护信息安全。但任何系统都不可能做到绝对安全，因此我们无法保证通过服务传输或存储的数据具备绝对安全性。",
      },
    ],
  },
  {
    title: { en: "Changes to This Policy", zh: "本政策的更新" },
    body: [
      {
        en: "We may update this Privacy Policy from time to time to reflect product changes, legal developments, or operational needs. When we do, we will post the updated version here and revise the effective date. Material changes may also be communicated through in-app notices or other appropriate means when required.",
        zh: "我们可能会基于产品变化、法律发展或运营需要不时更新本隐私政策。更新后，我们会在本页面发布最新版本并修改生效日期；如法律要求，重大变更也可能通过应用内通知或其他适当方式另行告知。",
      },
    ],
  },
  {
    title: { en: "Contact", zh: "联系方式" },
    body: [
      {
        en: "For privacy questions, rights requests, deletion requests, or child-safety reports, contact us at marhoogames@gmail.com.",
        zh: "如有隐私问题、权利请求、删除请求或儿童安全相关报告，请通过 marhoogames@gmail.com 联系我们。",
      },
      {
        en: "Effective date: March 18, 2026.",
        zh: "生效日期：2026 年 3 月 18 日。",
      },
    ],
  },
];

export function PrivacyContent() {
  const t = useTranslate();

  return (
    <article className="mx-auto max-w-4xl rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_24px_80px_rgba(24,34,52,0.12)] backdrop-blur sm:p-12">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
        {t({ en: "Legal", zh: "法律" })}
      </p>
      <h1 className="mt-4 font-heading text-5xl text-stone-950">
        {t({ en: "Privacy Policy", zh: "隐私政策" })}
      </h1>
      <p className="mt-6 max-w-3xl text-sm leading-8 text-stone-600">
        {t({
          en: "This version is rewritten for current consumer apps and games, including support, analytics, advertising, in-app purchases, community features, and region-specific privacy rights.",
          zh: "本版本已按当前常见应用与游戏场景重写，覆盖支持服务、数据分析、广告、应用内付费、社区功能以及分地区隐私权利等常见内容。",
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
