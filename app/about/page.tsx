import type { Metadata } from "next";
import { AboutContent } from "@/components/pages/about-content";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return <AboutContent />;
}
