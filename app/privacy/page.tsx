import type { Metadata } from "next";
import { LegalContent } from "@/components/pages/legal-content";

export const metadata: Metadata = {
  title: "Privacy & Terms",
};

export default function PrivacyPage() {
  return <LegalContent />;
}
