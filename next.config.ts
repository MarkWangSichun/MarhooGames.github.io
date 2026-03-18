import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // These redirects cover old non-hash URLs if they still exist anywhere.
      // They do not help with `/#/...` legacy links because the hash fragment
      // only exists in the browser, so hash compatibility is handled in app/layout.tsx.
      {
        source: "/privacyPolicy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/termsAndConditions",
        destination: "/terms",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
