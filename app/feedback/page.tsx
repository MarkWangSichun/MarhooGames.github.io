import type { Metadata } from "next";
import { appCatalog } from "@/data/site";

export const metadata: Metadata = {
  title: "Feedback",
};

const inputClassName =
  "mt-2 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-stone-950 focus:bg-white";

export default function FeedbackPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
      <section className="rounded-[2rem] border border-stone-200 bg-stone-950 p-8 text-white shadow-[0_24px_80px_rgba(24,34,52,0.12)] sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-300">
          Product Feedback
        </p>
        <h1 className="mt-4 font-heading text-5xl">Tell us what to improve next.</h1>
        <p className="mt-6 text-sm leading-8 text-stone-300">
          This form is front-end only for now. It is ready to connect to an API,
          email workflow, or database when you want to start collecting
          submissions for real.
        </p>
      </section>

      <section className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_24px_80px_rgba(24,34,52,0.12)] backdrop-blur sm:p-10">
        <form className="grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-stone-700">
              Name
              <input
                type="text"
                name="name"
                placeholder="Your name"
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
            Which app is this about?
            <select name="app" className={inputClassName} defaultValue="">
              <option value="" disabled>
                Select an app
              </option>
              {appCatalog.map((app) => (
                <option key={app.slug} value={app.slug}>
                  {app.name}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm font-semibold text-stone-700">
            Feedback type
            <select name="type" className={inputClassName} defaultValue="feature">
              <option value="feature">Feature request</option>
              <option value="bug">Bug report</option>
              <option value="general">General feedback</option>
            </select>
          </label>
          <label className="text-sm font-semibold text-stone-700">
            Message
            <textarea
              name="message"
              rows={7}
              placeholder="Tell us what is working, what is missing, or what should be improved."
              className={inputClassName}
            />
          </label>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-7 text-stone-500">
              Submission is currently disabled until a backend endpoint is
              connected.
            </p>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
            >
              Submit later
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
