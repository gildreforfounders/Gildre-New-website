import LocationPageTemplate, { LocationData } from "../components/LocationPageTemplate";

const data: LocationData = {
  name: "Boston",
  slug: "boston",
  state: "MA",
  zip: "02101",
  lat: 42.3601,
  lng: -71.0589,
  tagline: "The Biotech & DeepTech Capital of the World",
  hook: "MIT. Harvard. Kendall Square. The intellectual firepower is here — the founder community to match it now is too.",
  intro: "Boston's ecosystem is one of the most research-driven in the world. Gildre connects Boston founders with the peers, mentors, and resources to turn breakthrough ideas into breakout companies.",
  scene: "From Kendall Square to the Seaport Innovation District, Boston's startup scene is dense with deep-tech, biotech, and enterprise founders building companies that matter. But the best founders here know that execution is what separates research from revenue — and that takes community.",
  benefits: [
    {
      icon: "🔬",
      title: "Deep-Tech & Biotech Peers",
      body: "Get matched weekly with other Boston founders navigating long R&D cycles, FDA timelines, and the unique capital landscape of science-driven startups.",
    },
    {
      icon: "🏛️",
      title: "Access to Academic Networks",
      body: "Tap into a member base with direct ties to MIT, Harvard, and Boston's world-class research institutions — for hiring, partnerships, and advisor relationships.",
    },
    {
      icon: "💼",
      title: "East Coast Investor Connections",
      body: "Get warm intros to investors who understand the Boston market — from biotech VCs to enterprise-focused funds backing the next generation of Kendall Square companies.",
    },
  ],
};

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/boston" },
  title: "Founder Community in Boston | Gildre",
  description:
    "Gildre connects Boston founders with curated peer matches, expert mentorship, and investor access. Built for Boston's biotech, deep-tech, and enterprise startup ecosystem.",
  keywords: ["Boston founder community", "Boston startup network", "Boston entrepreneurs", "Gildre Boston", "biotech founders Boston"],
  openGraph: {
    title: "Founder Community in Boston | Gildre",
    description: "Curated peer matches, expert mentorship, and investor access for Boston founders in biotech, deep-tech, and enterprise.",
    url: "https://www.gildre.com/boston",
    siteName: "Gildre",
    type: "website",
    images: [{ url: "https://www.gildre.com/og-home.png", width: 1200, height: 630, alt: "Gildre founder community in Boston" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Founder Community in Boston | Gildre",
    description: "Curated peer matches, expert mentorship, and investor access for Boston founders in biotech, deep-tech, and enterprise.",
  },
};

export default function BostonPage() {
  return <LocationPageTemplate data={data} />;
}
