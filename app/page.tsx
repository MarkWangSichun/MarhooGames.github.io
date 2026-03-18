import Image from "next/image";
import Link from "next/link";
import { appCatalog } from "@/data/site";

const metrics = [
  { label: "Apps", value: "3" },
  { label: "Platforms", value: "iOS / Android" },
  { label: "Focus", value: "Brand + Utility" },
];

export default function Home() {
  const featuredApp = appCatalog[0];

  return (
    <div className="space-y-16 pb-8 sm:space-y-24">
      <section className="grid gap-10 rounded-[2rem] border border-white/70 bg-white/75 p-8 shadow-[0_24px_80px_rgba(24,34,52,0.12)] backdrop-blur md:grid-cols-[1.2fr_0.8fr] md:p-12">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-stone-300/80 bg-stone-50 px-4 py-2 text-sm font-semibold text-stone-700">
            Marhoo Studio mobile products
          </div>
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
              Studio Homepage
            </p>
            <h1 className="max-w-3xl font-heading text-5xl leading-none tracking-tight text-stone-950 sm:text-6xl">
              Three focused apps, one studio site built to convert visits into installs.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-stone-600">
              This first version presents your app lineup, routes users into
              dedicated detail pages, exposes legal pages clearly, and leaves a
              ready-to-connect feedback form for the next phase.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href={`/apps/${featuredApp.slug}`}
              className="inline-flex items-center justify-center rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
            >
              View featured app
            </Link>
            <Link
              href="/feedback"
              className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-800 transition hover:border-stone-950"
            >
              Open feedback form
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
                  {metric.label}
                </p>
                <p className="mt-3 text-lg font-bold text-stone-900">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] bg-stone-950 p-6 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,184,97,0.35),_transparent_36%),radial-gradient(circle_at_bottom_left,_rgba(88,138,255,0.4),_transparent_32%)]" />
          <div className="relative space-y-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.24em] text-stone-300">
                Launch Priority
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src={featuredApp.icon}
                  alt={`${featuredApp.name} icon`}
                  width={72}
                  height={72}
                  className="h-[72px] w-[72px] rounded-[18px] border border-white/15 object-cover"
                />
                <h2 className="font-heading text-3xl">{featuredApp.name}</h2>
              </div>
              <p className="text-sm leading-7 text-stone-300">
                {featuredApp.description}
              </p>
            </div>
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5">
              <Image
                src={featuredApp.image}
                alt={featuredApp.name}
                width={800}
                height={600}
                className="h-auto w-full"
                priority
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {featuredApp.highlights.slice(0, 4).map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-stone-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
              App Lineup
            </p>
            <h2 className="mt-3 font-heading text-4xl text-stone-950">
              Explore all three products
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-stone-600">
            Each card routes to a dedicated product page with screenshots,
            highlights, store links, and feature details.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {appCatalog.map((app) => (
            <article
              key={app.slug}
              className="group overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-[0_18px_50px_rgba(24,34,52,0.08)] backdrop-blur"
            >
              <div className="relative overflow-hidden bg-stone-100">
                <Image
                  src={app.image}
                  alt={app.name}
                  width={900}
                  height={640}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="space-y-5 p-6">
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
                    {app.category}
                  </p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={app.icon}
                      alt={`${app.name} icon`}
                      width={64}
                      height={64}
                      className="h-16 w-16 rounded-[18px] border border-stone-200 object-cover"
                    />
                    <div>
                      <h3 className="font-heading text-3xl text-stone-950">
                        {app.name}
                      </h3>
                      {app.source ? (
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                          {app.source}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <p className="text-sm leading-7 text-stone-600">
                    {app.tagline}
                  </p>
                </div>
                <ul className="space-y-2 text-sm text-stone-700">
                  {app.highlights.slice(0, 3).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/apps/${app.slug}`}
                    className="inline-flex items-center justify-center rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
                  >
                    View details
                  </Link>
                  <a
                    href={app.storeLinks.appStore}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-stone-300 px-5 py-3 text-sm font-semibold text-stone-800 transition hover:border-stone-950"
                  >
                    App Store
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[2rem] border border-stone-200 bg-stone-950 px-8 py-10 text-white lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-300">
            Ready For Growth
          </p>
          <h2 className="font-heading text-4xl">
            Feedback collection is already wired into the site structure.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold">Form-first setup</h3>
            <p className="mt-3 text-sm leading-7 text-stone-300">
              The feedback page is implemented as a real front-end form with
              fields ready for API connection later.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold">Legal pages included</h3>
            <p className="mt-3 text-sm leading-7 text-stone-300">
              Privacy Policy, Terms of Service, and About routes are linked in
              navigation and footer for trust and compliance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
