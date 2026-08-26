import type { Metadata } from "next";
import { DeleteAccountContent } from "@/components/pages/delete-account-content";

export const metadata: Metadata = {
  title: "Delete Account — TreeHole Adventure",
  description:
    "Account and cloud-save deletion instructions for TreeHole Adventure by Marhoo Studio.",
};

export default function DeleteAccountPage() {
  return <DeleteAccountContent />;
}
