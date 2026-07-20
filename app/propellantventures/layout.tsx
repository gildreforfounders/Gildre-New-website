import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Propellant Ventures × Gildre — Investor Partner for Founder Members",
  description:
    "Propellant Ventures is Gildre's venture capital partner. Members get access to VC pitch workshops, investor introductions, and early-stage funding resources led by Managing Partner Jason Jacobsohn.",
  keywords: ["Propellant Ventures", "Gildre VC partner", "startup funding", "VC pitch workshop", "Jason Jacobsohn", "early stage investing"],
  openGraph: {
    title: "Propellant Ventures × Gildre — Investor Partner for Founder Members",
    description:
      "Propellant Ventures is Gildre's VC partner. Members get VC pitch workshops, investor introductions, and early-stage funding resources.",
    url: "https://www.gildre.com/propellantventures",
    siteName: "Gildre",
    type: "website",
    images: [{ url: "https://www.gildre.com/og-home.png", width: 1200, height: 630, alt: "Propellant Ventures x Gildre" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Propellant Ventures × Gildre — Investor Partner for Founder Members",
    description: "Propellant Ventures is Gildre's VC partner. Members get VC workshops, investor intros, and funding resources.",
  },
};

export default function PropellantVenturesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
