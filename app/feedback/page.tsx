import type { Metadata } from "next";
import { FeedbackContent } from "@/components/pages/feedback-content";

export const metadata: Metadata = {
  title: "Feedback",
};

export default function FeedbackPage() {
  return <FeedbackContent />;
}
