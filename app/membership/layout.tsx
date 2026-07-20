import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gildre Membership — Startup Founder Community Plans Starting at $59/mo",
  description:
    "Silver ($59), Gold ($149), and Platinum ($349) startup mentorship plans for founders from pre-revenue to $5M+ ARR. 1:1 mentorship, curated peer matching, weekly events, and $5M+ in perks.",
  keywords: ["Gildre membership", "founder community", "startup mentorship", "startup mentor", "founder peer group", "entrepreneur community membership"],
  openGraph: {
    title: "Gildre Membership — Startup Founder Community Plans Starting at $59/mo",
    description:
      "Silver, Gold, and Platinum startup mentorship plans. 1:1 mentorship from exited founders, curated peer matching, and weekly events for serious startup founders.",
    url: "https://www.gildre.com/membership",
    siteName: "Gildre",
    type: "website",
    images: [{ url: "https://www.gildre.com/og-home.png", width: 1200, height: 630, alt: "Gildre membership tiers" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gildre Membership — Startup Founder Community Plans Starting at $59/mo",
    description: "Silver, Gold, and Platinum startup mentorship plans. 1:1 mentorship from exited founders, curated peer matching, and weekly events.",
  },
};

export default function MembershipLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
