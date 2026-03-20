type PermanentRedirectPageProps = {
  destination: string;
};

export function PermanentRedirectPage({
  destination,
}: PermanentRedirectPageProps) {
  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=${destination}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(destination)});`,
        }}
      />
      <main className="mx-auto flex min-h-[60vh] max-w-3xl items-center justify-center px-6 py-24 text-center">
        <p className="text-sm text-foreground/70">
          Redirecting to{" "}
          <a className="underline underline-offset-4" href={destination}>
            {destination}
          </a>
          .
        </p>
      </main>
    </>
  );
}
