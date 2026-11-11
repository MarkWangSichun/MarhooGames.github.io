import type { Metadata } from "next";
import { DeleteAccountContent } from "@/components/pages/delete-account-content";

export const metadata: Metadata = {
  title: "Delete Account — PomoVeggie",
  description:
    "Account and data deletion instructions for PomoVeggie by Marhoo Studio.",
};

export default function DeleteAccountPage() {
  return <DeleteAccountContent />;
}
