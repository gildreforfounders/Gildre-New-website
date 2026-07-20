import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gildre Member Programs — What You Get at Every Tier",
  description:
    "From White-Glove Onboarding to weekly 1:1 matches and quarterly executive workshops — a full breakdown of everything Gildre members access at Silver, Gold, and Platinum.",
  keywords: ["Gildre member programs", "founder benefits", "startup membership benefits", "founder community perks"],
  openGraph: {
    title: "Gildre Member Programs — What You Get at Every Tier",
    description:
      "White-Glove Onboarding, weekly 1:1 matches, and quarterly executive workshops — everything Gildre members access at Silver, Gold, and Platinum.",
    url: "https://www.gildre.com/memberprograms",
    siteName: "Gildre",
    type: "website",
    images: [{ url: "https://www.gildre.com/og-home.png", width: 1200, height: 630, alt: "Gildre member programs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gildre Member Programs — What You Get at Every Tier",
    description: "White-Glove Onboarding, weekly 1:1 matches, and executive workshops — everything at Silver, Gold, and Platinum.",
  },
};

export default function MemberProgramsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
