import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/70 bg-white/85 p-10 text-center shadow-[0_24px_80px_rgba(24,34,52,0.12)] backdrop-blur">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
        404
      </p>
      <h1 className="mt-4 font-heading text-5xl text-stone-950">
        Page not found
      </h1>
      <p className="mt-4 text-base leading-8 text-stone-600">
        The requested page does not exist in this studio site build.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
      >
        Return home
      </Link>
    </div>
  );
}
