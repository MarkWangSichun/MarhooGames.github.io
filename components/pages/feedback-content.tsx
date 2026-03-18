"use client";

import { appCatalog } from "@/data/site";
import { useTranslate } from "@/lib/i18n";

const inputClassName =
  "mt-2 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-stone-950 focus:bg-white";

export function FeedbackContent() {
  const t = useTranslate();

  return (
    <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
      <section className="rounded-[2rem] border border-stone-200 bg-stone-950 p-8 text-white shadow-[0_24px_80px_rgba(24,34,52,0.12)] sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-300">
          {t({ en: "Product Feedback", zh: "产品反馈" })}
        </p>
        <h1 className="mt-4 font-heading text-5xl">
          {t({
            en: "Tell us what to improve next.",
            zh: "告诉我们下一步该优化什么。",
          })}
        </h1>
        <p className="mt-6 text-sm leading-8 text-stone-300">
          {t({
            en: "This form is front-end only for now. It is ready to connect to an API, email workflow, or database when you want to start collecting submissions for real.",
            zh: "这个表单目前仅实现前端界面。等你准备正式收集反馈时，可以直接接入 API、邮件流程或数据库。",
          })}
        </p>
      </section>

      <section className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_24px_80px_rgba(24,34,52,0.12)] backdrop-blur sm:p-10">
        <form className="grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-stone-700">
              {t({ en: "Name", zh: "姓名" })}
              <input
                type="text"
                name="name"
                placeholder={t({ en: "Your name", zh: "你的姓名" })}
                className={inputClassName}
              />
            </label>
            <label className="text-sm font-semibold text-stone-700">
              Email
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className={inputClassName}
              />
            </label>
          </div>
          <label className="text-sm font-semibold text-stone-700">
            {t({ en: "Which app is this about?", zh: "这是关于哪一个应用的反馈？" })}
            <select name="app" className={inputClassName} defaultValue="">
              <option value="" disabled>
                {t({ en: "Select an app", zh: "选择一个应用" })}
              </option>
              {appCatalog.map((app) => (
                <option key={app.slug} value={app.slug}>
                  {t(app.name)}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm font-semibold text-stone-700">
            {t({ en: "Feedback type", zh: "反馈类型" })}
            <select name="type" className={inputClassName} defaultValue="feature">
              <option value="feature">
                {t({ en: "Feature request", zh: "功能建议" })}
              </option>
              <option value="bug">{t({ en: "Bug report", zh: "问题反馈" })}</option>
              <option value="general">
                {t({ en: "General feedback", zh: "一般反馈" })}
              </option>
            </select>
          </label>
          <label className="text-sm font-semibold text-stone-700">
            {t({ en: "Message", zh: "留言内容" })}
            <textarea
              name="message"
              rows={7}
              placeholder={t({
                en: "Tell us what is working, what is missing, or what should be improved.",
                zh: "请告诉我们哪些地方做得好、哪些内容缺失，或者哪些地方需要改进。",
              })}
              className={inputClassName}
            />
          </label>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-7 text-stone-500">
              {t({
                en: "Submission is currently disabled until a backend endpoint is connected.",
                zh: "在接入后端提交接口之前，当前按钮不会真正提交数据。",
              })}
            </p>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
            >
              {t({ en: "Submit later", zh: "稍后提交" })}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
