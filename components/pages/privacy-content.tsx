"use client";

import { useTranslate } from "@/lib/i18n";

const sections = [
  {
    title: { en: "Scope", zh: "适用范围" },
    body: [
      {
        en: "This Privacy Policy applies to the Marhoo Studio website and to certain Marhoo Studio mobile applications that link to this page. It explains how we collect, use, disclose, and retain information when you visit this website, download our apps, or contact us for support.",
        zh: "本隐私政策适用于 Marhoo Studio 网站，以及链接到本页面的部分 Marhoo Studio 移动应用。它说明了当你访问本网站、下载我们的应用或联系我们获取支持时，我们如何收集、使用、披露和保留相关信息。",
      },
      {
        en: "If a specific application presents a different privacy notice inside the app or on its store listing, that app-specific notice controls for that product to the extent of any conflict.",
        zh: "如果某个具体应用在应用内或商店页面展示了不同的隐私说明，则该应用的专属隐私说明在冲突范围内优先生效。",
      },
    ],
  },
  {
    title: { en: "Who We Are", zh: "我们是谁" },
    body: [
      {
        en: "For the purposes of this site and the linked applications, Marhoo Studio or Marhoo Games is the service provider responsible for the products presented here.",
        zh: "就本网站及其链接应用而言，Marhoo Studio 或 Marhoo Games 是这里所展示产品的服务提供方。",
      },
    ],
  },
  {
    title: { en: "Information We Collect", zh: "我们收集的信息" },
    body: [
      {
        en: "When you use our website, we may receive standard technical data such as IP address, browser type, device type, referral information, and basic server logs.",
        zh: "当你使用我们的网站时，我们可能会接收标准技术数据，例如 IP 地址、浏览器类型、设备类型、来源信息以及基础服务器日志。",
      },
      {
        en: "If you contact us or if we enable the feedback form in the future, we may collect information you choose to provide, such as your name, email address, app name, and the contents of your message.",
        zh: "如果你联系我们，或我们未来启用反馈表单，我们可能会收集你主动提供的信息，例如姓名、邮箱地址、应用名称以及留言内容。",
      },
      {
        en: "When you use our mobile apps, the app or integrated third-party services may collect device identifiers, usage events, crash data, advertising identifiers, and approximate location inferred from IP address or platform services.",
        zh: "当你使用我们的移动应用时，应用本身或集成的第三方服务可能会收集设备标识符、使用事件、崩溃数据、广告标识符，以及基于 IP 地址或平台服务推断的大致位置。",
      },
    ],
  },
  {
    title: { en: "How We Use Information", zh: "我们如何使用信息" },
    body: [
      {
        en: "We use information to operate our website and apps, improve product quality, investigate bugs, respond to support requests, maintain security, and understand aggregate usage trends.",
        zh: "我们会使用这些信息来运营网站和应用、提升产品质量、排查问题、回应支持请求、维护安全，以及了解整体使用趋势。",
      },
      {
        en: "We may also use submitted contact details to reply to user inquiries, product feedback, or legal requests.",
        zh: "我们也可能使用你提交的联系方式来回复用户咨询、产品反馈或法律相关请求。",
      },
    ],
  },
  {
    title: { en: "Third-Party Services", zh: "第三方服务" },
    body: [
      {
        en: "Some mobile apps presented on this site may use third-party services such as Google Play Services, AdMob, or Unity. Those services may collect data according to their own privacy policies and may be used for analytics, app functionality, advertising, fraud prevention, or service optimization.",
        zh: "本网站展示的部分移动应用可能会使用 Google Play Services、AdMob 或 Unity 等第三方服务。这些服务会依据各自的隐私政策收集数据，并可能用于分析、应用功能、广告、防欺诈或服务优化。",
      },
      {
        en: "This website itself does not state that every page uses all of those providers. The disclosure above is intended to cover the mobile products that integrate those services.",
        zh: "本网站并不表示每一个页面都会使用所有这些服务商。上述披露主要用于覆盖集成了相关第三方服务的移动产品。",
      },
    ],
  },
  {
    title: { en: "Sharing of Information", zh: "信息共享" },
    body: [
      {
        en: "We may share information with service providers that help us host, analyze, secure, support, or distribute our products.",
        zh: "我们可能会与帮助我们托管、分析、安全防护、支持服务或分发产品的服务提供商共享信息。",
      },
      {
        en: "We may also disclose information when required by law, to enforce our rights, to protect users or the public, or in connection with a business transfer, restructuring, or sale.",
        zh: "在法律要求、维护我们的权利、保护用户或公众利益，或涉及业务转让、重组、出售等情况下，我们也可能披露相关信息。",
      },
    ],
  },
  {
    title: { en: "Retention", zh: "信息保留" },
    body: [
      {
        en: "We retain information for as long as reasonably necessary to provide our services, comply with legal obligations, resolve disputes, enforce agreements, and maintain security and business records.",
        zh: "我们会在为提供服务、履行法律义务、解决争议、执行协议以及维护安全和业务记录所合理必要的期限内保留信息。",
      },
      {
        en: "Retention periods may vary depending on the type of data, the product involved, and whether the information is stored by us or by a third-party platform provider.",
        zh: "具体保留期限可能会因数据类型、涉及的产品，以及信息是由我们还是第三方平台保存而有所不同。",
      },
    ],
  },
  {
    title: { en: "Your Choices", zh: "你的选择权" },
    body: [
      {
        en: "You may stop collection by an app by uninstalling it through your device's standard uninstall process.",
        zh: "你可以通过设备的标准卸载流程删除应用，以停止该应用继续收集信息。",
      },
      {
        en: "Depending on your jurisdiction, you may have rights to request access, correction, deletion, or restriction of certain personal data. To make a request, contact us using the email address below.",
        zh: "根据你所在司法辖区的规定，你可能享有访问、更正、删除或限制处理某些个人数据的权利。如需提出请求，请通过下方邮箱联系我们。",
      },
      {
        en: "For ads personalization or analytics choices managed by third parties, please use your device settings and the privacy controls offered by the relevant platform or provider.",
        zh: "对于由第三方管理的广告个性化或分析选项，请使用你的设备设置以及相关平台或服务商提供的隐私控制功能。",
      },
    ],
  },
  {
    title: { en: "Children's Privacy", zh: "儿童隐私" },
    body: [
      {
        en: "We do not knowingly collect personal information from children under 13 through this website. If we learn that a child under 13 has provided personal information, we will take reasonable steps to delete it.",
        zh: "我们不会有意通过本网站收集 13 岁以下儿童的个人信息。如果我们发现有 13 岁以下儿童向我们提供了个人信息，我们会采取合理措施删除这些信息。",
      },
      {
        en: "If a specific app has a different age rating or child-directed experience, additional product-specific disclosures may apply.",
        zh: "如果某个具体应用具有不同的年龄分级或面向儿童的使用场景，则可能适用额外的产品专属披露说明。",
      },
    ],
  },
  {
    title: { en: "Security", zh: "安全" },
    body: [
      {
        en: "We use reasonable administrative, technical, and organizational measures to protect information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
        zh: "我们会采取合理的管理、技术和组织措施保护信息安全。但任何传输或存储方式都无法做到绝对安全，因此我们不能保证绝对安全性。",
      },
    ],
  },
  {
    title: { en: "Changes to This Policy", zh: "本政策的更新" },
    body: [
      {
        en: "We may update this Privacy Policy from time to time. When we do, we will post the updated version on this page and revise the effective date below.",
        zh: "我们可能会不时更新本隐私政策。更新后，我们会在本页面发布最新版本，并更新下方的生效日期。",
      },
    ],
  },
  {
    title: { en: "Contact", zh: "联系方式" },
    body: [
      {
        en: "For privacy questions or data requests, contact us at marhoogames@gmail.com.",
        zh: "如有隐私问题或数据请求，请通过 marhoogames@gmail.com 联系我们。",
      },
      {
        en: "Effective date: June 30, 2025.",
        zh: "生效日期：2025 年 6 月 30 日。",
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
          en: "This version is adapted from the existing Marhoo policy and revised to fit this new studio website and the mobile apps linked from it.",
          zh: "本版本基于现有 Marhoo 隐私政策改写，并调整为适配当前工作室网站及其链接的移动应用。",
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
