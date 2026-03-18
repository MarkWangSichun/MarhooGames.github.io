import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const values = [
  "Small-team speed with product-level polish",
  "Utility-first app design for real workflows",
  "Clear onboarding, support, and legal trust",
];

export default function AboutPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <section className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_24px_80px_rgba(24,34,52,0.12)] backdrop-blur sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
          Studio
        </p>
        <h1 className="mt-4 font-heading text-5xl text-stone-950">
          About Marhoo Studio
        </h1>
        <p className="mt-6 text-base leading-8 text-stone-700">
          Marhoo Studio creates focused mobile products that help people ship
          content, organize work, and move faster with less friction.
        </p>
      </section>
      <section className="rounded-[2rem] border border-stone-200 bg-stone-950 p-8 text-white sm:p-10">
        <h2 className="font-heading text-3xl">What this site is designed to do</h2>
        <div className="mt-6 grid gap-4">
          {values.map((value) => (
            <div
              key={value}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-stone-200"
            >
              {value}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
