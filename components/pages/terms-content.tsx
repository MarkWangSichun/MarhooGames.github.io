"use client";

import { useTranslate } from "@/lib/i18n";

const sections = [
  {
    title: { en: "Acceptance of Terms", zh: "条款接受" },
    body: [
      {
        en: "These Terms of Service apply to the Marhoo Studio website and the related mobile applications that link to this page. By accessing the website, downloading an app, or using related services, you agree to these Terms.",
        zh: "本服务条款适用于 Marhoo Studio 网站以及链接到本页面的相关移动应用。访问本网站、下载应用或使用相关服务，即表示你同意这些条款。",
      },
      {
        en: "If you do not agree, do not use the website or the relevant application.",
        zh: "如果你不同意这些条款，请不要使用本网站或相关应用。",
      },
    ],
  },
  {
    title: { en: "Products and Availability", zh: "产品与可用性" },
    body: [
      {
        en: "We may modify, suspend, discontinue, or update any website feature, app feature, content item, or distribution channel at any time.",
        zh: "我们可能随时修改、暂停、终止或更新任何网站功能、应用功能、内容项目或分发渠道。",
      },
      {
        en: "Store availability, pricing, app compatibility, feature sets, and regional access may vary by platform and may change without notice.",
        zh: "商店可用性、价格、应用兼容性、功能范围以及地区可访问性可能因平台不同而不同，并且可能在不另行通知的情况下变更。",
      },
    ],
  },
  {
    title: { en: "Permitted Use", zh: "允许的使用方式" },
    body: [
      {
        en: "You may use the website and our apps only for lawful purposes and in accordance with these Terms.",
        zh: "你只能在合法且符合本条款的前提下使用本网站和我们的应用。",
      },
      {
        en: "You may not copy, reverse engineer, decompile, interfere with, scrape at scale, circumvent security measures, or misuse our products except to the extent such restrictions are prohibited by applicable law.",
        zh: "除非适用法律明确禁止此类限制，否则你不得复制、反向工程、反编译、干扰、进行大规模抓取、绕过安全措施或以其他方式滥用我们的产品。",
      },
    ],
  },
  {
    title: { en: "Accounts, Feedback, and Communications", zh: "账户、反馈与沟通" },
    body: [
      {
        en: "If you submit feedback, support requests, or other communications, you represent that the information you provide is accurate and that you have the right to provide it.",
        zh: "如果你提交反馈、支持请求或其他沟通内容，即表示你确认所提供的信息准确，并且你有权提供这些内容。",
      },
      {
        en: "You retain ownership of your feedback, but you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and incorporate that feedback to improve our products and services.",
        zh: "你保留对反馈内容的所有权，但你授予我们一项非独占、全球范围、免版税的许可，用于使用、复制、修改并整合这些反馈，以改进我们的产品和服务。",
      },
      {
        en: "The current feedback page on this website is front-end only unless and until a submission backend is enabled.",
        zh: "除非未来启用提交后端，否则本网站当前的反馈页面仅包含前端界面。",
      },
    ],
  },
  {
    title: { en: "Third-Party Platforms and Services", zh: "第三方平台与服务" },
    body: [
      {
        en: "Our apps may be distributed through third-party stores or may integrate third-party tools such as platform SDKs, analytics, advertising services, or game engines.",
        zh: "我们的应用可能通过第三方应用商店分发，也可能集成平台 SDK、分析工具、广告服务或游戏引擎等第三方工具。",
      },
      {
        en: "Those third parties may impose their own terms, policies, and technical requirements. We are not responsible for third-party services except as required by law.",
        zh: "这些第三方可能适用各自的条款、政策和技术要求。除法律另有要求外，我们不对第三方服务承担责任。",
      },
    ],
  },
  {
    title: { en: "Intellectual Property", zh: "知识产权" },
    body: [
      {
        en: "The website, app content, branding, graphics, interfaces, code, copy, and related materials are owned by or licensed to Marhoo Studio unless otherwise stated.",
        zh: "除非另有说明，本网站、应用内容、品牌、图形、界面、代码、文案及相关材料均归 Marhoo Studio 所有或经其授权使用。",
      },
      {
        en: "These Terms do not transfer any ownership rights to you.",
        zh: "本条款不会向你转移任何所有权权益。",
      },
    ],
  },
  {
    title: { en: "Disclaimers", zh: "免责声明" },
    body: [
      {
        en: "The website and apps are provided on an as-is and as-available basis to the maximum extent permitted by law.",
        zh: "在法律允许的最大范围内，本网站和应用按“现状”和“可用”基础提供。",
      },
      {
        en: "We do not guarantee uninterrupted availability, error-free performance, or that every issue will be corrected within any particular timeframe.",
        zh: "我们不保证服务持续不中断、完全无错误，也不保证所有问题都会在特定时间内得到修复。",
      },
    ],
  },
  {
    title: { en: "Limitation of Liability", zh: "责任限制" },
    body: [
      {
        en: "To the maximum extent permitted by law, Marhoo Studio will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss of data, profits, goodwill, or business interruption arising from your use of the website or apps.",
        zh: "在法律允许的最大范围内，Marhoo Studio 不对因你使用本网站或应用而产生的间接、附带、特殊、后果性、示范性或惩罚性损害负责，也不对数据、利润、商誉损失或业务中断负责。",
      },
      {
        en: "Where liability cannot be excluded under applicable law, it will be limited to the minimum extent permitted by law.",
        zh: "如果适用法律不允许完全排除责任，则责任将在法律允许的最小范围内受到限制。",
      },
    ],
  },
  {
    title: { en: "Termination", zh: "终止" },
    body: [
      {
        en: "We may suspend or terminate access to the website or any app if required for security, maintenance, legal compliance, platform requirements, or misuse of the service.",
        zh: "如果出于安全、维护、法律合规、平台要求或服务被滥用等原因需要，我们可能暂停或终止对网站或任何应用的访问。",
      },
      {
        en: "You may stop using our services at any time, including by uninstalling an app.",
        zh: "你可以随时停止使用我们的服务，包括直接卸载应用。",
      },
    ],
  },
  {
    title: { en: "Changes to These Terms", zh: "条款变更" },
    body: [
      {
        en: "We may update these Terms from time to time. Continued use of the website or apps after updated Terms become effective constitutes acceptance of the revised Terms.",
        zh: "我们可能不时更新本条款。更新后的条款生效后，继续使用本网站或应用即视为你接受修订后的条款。",
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
        en: "Effective date: June 30, 2025.",
        zh: "生效日期：2025 年 6 月 30 日。",
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
        {t({ en: "Terms of Service", zh: "服务条款" })}
      </h1>
      <p className="mt-6 max-w-3xl text-sm leading-8 text-stone-600">
        {t({
          en: "This version is adapted from the existing Marhoo terms and rewritten so it matches the new studio site, the linked apps, and the planned feedback workflow.",
          zh: "本版本基于现有 Marhoo 条款改写，并调整为匹配当前工作室网站、已链接应用以及计划中的反馈流程。",
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
