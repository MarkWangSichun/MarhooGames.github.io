import type { Metadata } from "next";
import { TermsContent } from "@/components/pages/terms-content";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return <TermsContent />;
}
