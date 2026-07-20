import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gildre Referral Program Agreement",
  description: "Review and acknowledge the terms of the Gildre Referral Program Agreement before participating.",
  robots: { index: false, follow: false },
};

export default function ReferralAgreementLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
