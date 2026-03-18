import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-4xl rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_24px_80px_rgba(24,34,52,0.12)] backdrop-blur sm:p-12">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
        Legal
      </p>
      <h1 className="mt-4 font-heading text-5xl text-stone-950">
        Privacy Policy
      </h1>
      <div className="mt-8 space-y-8 text-sm leading-8 text-stone-700">
        <section>
          <h2 className="font-heading text-2xl text-stone-950">Overview</h2>
          <p className="mt-3">
            Marhoo Studio respects user privacy. This page is a starter version
            for the studio site and should be updated with the exact data
            collection and retention rules used by your production apps.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-2xl text-stone-950">
            Information We Collect
          </h2>
          <p className="mt-3">
            We may collect contact information, product usage feedback, and
            technical diagnostics that users voluntarily provide through forms,
            support channels, or in-app flows.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-2xl text-stone-950">
            How We Use Information
          </h2>
          <p className="mt-3">
            Information is used to improve products, answer user requests,
            provide support, and maintain app quality and security.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-2xl text-stone-950">
            Contact
          </h2>
          <p className="mt-3">
            Replace this section with your studio email and any jurisdiction-
            specific compliance text before publishing.
          </p>
        </section>
      </div>
    </article>
  );
}
