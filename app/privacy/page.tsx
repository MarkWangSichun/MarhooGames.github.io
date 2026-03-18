import type { Metadata } from "next";
import { PrivacyContent } from "@/components/pages/privacy-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
