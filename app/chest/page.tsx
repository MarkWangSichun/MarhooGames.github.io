import type { Metadata } from "next";
import { ChestContent } from "@/components/pages/chest-content";

export const metadata: Metadata = {
  title: "TreeHole Chest",
};

export default function ChestPage() {
  return <ChestContent />;
}
