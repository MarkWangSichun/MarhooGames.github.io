"use client";

import { PrivacyContent } from "@/components/pages/privacy-content";
import { TermsContent } from "@/components/pages/terms-content";

export function LegalContent() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-10">
      <PrivacyContent />
      <TermsContent />
    </div>
  );
}
