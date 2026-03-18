import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-4xl rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_24px_80px_rgba(24,34,52,0.12)] backdrop-blur sm:p-12">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
        Legal
      </p>
      <h1 className="mt-4 font-heading text-5xl text-stone-950">
        Terms of Service
      </h1>
      <div className="mt-8 space-y-8 text-sm leading-8 text-stone-700">
        <section>
          <h2 className="font-heading text-2xl text-stone-950">
            Acceptance of Terms
          </h2>
          <p className="mt-3">
            By accessing this website or related applications, users agree to
            the current version of these terms.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-2xl text-stone-950">
            Product Availability
          </h2>
          <p className="mt-3">
            App features, pricing, regions, and platform availability may change
            without prior notice.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-2xl text-stone-950">
            Intellectual Property
          </h2>
          <p className="mt-3">
            All branding, interface assets, and product materials shown on this
            site remain the property of Marhoo Studio unless otherwise stated.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-2xl text-stone-950">
            Support and Feedback
          </h2>
          <p className="mt-3">
            Feedback submitted through this site may be used to improve products
            and support planning. Replace this starter text with your formal
            legal language before launch.
          </p>
        </section>
      </div>
    </article>
  );
}
