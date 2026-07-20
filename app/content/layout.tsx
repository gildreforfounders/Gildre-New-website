import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founder Playbooks, Guides & Stories | Gildre Content Hub",
  description:
    "Fundraising playbooks, GTM guides, equity breakdowns, and real founder stories. Browse by topic — practical insight for founders at every stage, not theory.",
  keywords: [
    "founder content",
    "startup guides",
    "fundraising playbook",
    "GTM strategy",
    "equity guide",
    "founder stories",
    "Gildre blog",
  ],
  openGraph: {
    title: "Founder Playbooks, Guides & Stories | Gildre Content Hub",
    description:
      "Fundraising playbooks, GTM guides, equity breakdowns, and real founder stories — built for founders who need practical insight, not theory.",
    url: "https://www.gildre.com/content",
    siteName: "Gildre",
    type: "website",
    images: [{ url: "https://www.gildre.com/og-home.png", width: 1200, height: 630, alt: "Gildre content hub" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Founder Playbooks, Guides & Stories | Gildre Content Hub",
    description: "Fundraising playbooks, GTM guides, equity breakdowns, and real founder stories for every stage.",
  },
};

export default function ContentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
