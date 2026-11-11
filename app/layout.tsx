import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const headingFont = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Marhoo Studio",
    template: "%s | Marhoo Studio",
  },
  description:
    "Marhoo Studio builds focused mobile apps for creators, teams, and daily workflows.",
};

// The legacy site used hash routes such as `/#/privacyPolicy`.
// URL fragments are never sent to the server, so Next.js redirects cannot see them.
// This script runs before the app hydrates and upgrades those legacy hash links
// to the current canonical routes, preserving old links that are already in the wild.
const legacyHashRedirectScript = `
  (function() {
    var redirects = {
      '#/privacyPolicy': '/privacy',
      '#/termsAndConditions': '/terms'
    };
    var normalizedPath = function(pathname) {
      if (!pathname) {
        return '/';
      }

      return pathname.endsWith('/') && pathname !== '/'
        ? pathname.slice(0, -1)
        : pathname;
    };
    var redirectIfNeeded = function() {
      if (window.location.pathname.startsWith('/editorial/')) {
        return;
      }

      var destination = redirects[window.location.hash];

      if (!destination) {
        return;
      }

      if (normalizedPath(window.location.pathname) === destination) {
        return;
      }

      window.location.replace(destination);
    };

    redirectIfNeeded();
    window.addEventListener('hashchange', redirectIfNeeded);
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head suppressHydrationWarning>
        {/* Keep this in the document head so legacy hash URLs redirect as early as possible. */}
        <script
          id="legacy-hash-redirect"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: legacyHashRedirectScript }}
        />
      </head>
      <body
        className={`${headingFont.variable} ${bodyFont.variable} bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
