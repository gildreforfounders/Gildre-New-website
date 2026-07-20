import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refer a Founder to Gildre — Earn a Membership Stipend",
  description:
    "Know a founder who belongs in the Gildre network? Submit a referral. Earn a 100% first-month membership stipend when they join, plus ongoing commissions at higher tiers.",
  keywords: ["Gildre referral", "refer a founder", "startup community referral", "founder referral program"],
  openGraph: {
    title: "Refer a Founder to Gildre — Earn a Membership Stipend",
    description:
      "Know a founder who belongs in the Gildre network? Submit a referral and earn a 100% first-month stipend when they join.",
    url: "https://www.gildre.com/referral",
    siteName: "Gildre",
    type: "website",
    images: [{ url: "https://www.gildre.com/og-home.png", width: 1200, height: 630, alt: "Gildre referral program" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Refer a Founder to Gildre — Earn a Membership Stipend",
    description: "Know a founder who belongs in Gildre? Submit a referral and earn a 100% first-month membership stipend.",
  },
};

export default function ReferralLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
