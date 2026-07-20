import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gildre Membership — Join the Founder Community Built for Every Stage",
  description:
    "Silver, Gold, and Platinum tiers for founders from pre-revenue to $5M+ ARR. Expert mentors, curated peer matches, weekly events, and 250+ operators in your corner.",
  keywords: ["Gildre membership", "founder community", "startup network", "founder mentorship", "peer matching founders"],
  openGraph: {
    title: "Gildre Membership — Join the Founder Community Built for Every Stage",
    description:
      "Silver, Gold, and Platinum tiers for every stage. Expert mentors, curated peer matches, and weekly events for founders who execute.",
    url: "https://www.gildre.com/membership",
    siteName: "Gildre",
    type: "website",
    images: [{ url: "https://www.gildre.com/og-home.png", width: 1200, height: 630, alt: "Gildre membership tiers" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gildre Membership — Join the Founder Community Built for Every Stage",
    description: "Silver, Gold, and Platinum tiers. Expert mentors, curated peer matches, and weekly events for serious founders.",
  },
};

export default function MembershipLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
