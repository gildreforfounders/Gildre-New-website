import LocationPageTemplate, { LocationData } from "../components/LocationPageTemplate";

const data: LocationData = {
  name: "Chicago",
  slug: "chicago",
  state: "IL",
  zip: "60601",
  lat: 41.8781,
  lng: -87.6298,
  tagline: "The Midwest's Most Underrated Startup Hub",
  hook: "The Second City builds first-rate companies. And Gildre is here for it.",
  intro: "Chicago is quietly one of the most founder-dense cities in the country — with deep strengths in fintech, enterprise SaaS, and logistics tech. Gildre connects Chicago founders with the community, capital access, and mentors to go from regional to national.",
  scene: "From River North to the West Loop, Chicago's founder community is tight-knit, execution-focused, and tired of being overlooked. The talent is here, the capital is growing, and the next breakout companies from Chicago are being built right now.",
  neighborhood: "River North",
  benefits: [
    {
      icon: "🏙️",
      title: "Fintech & Enterprise SaaS Peers",
      body: "Chicago's fintech and B2B ecosystem is thriving. Get matched weekly with founders building in your space who understand Chicago's unique strengths in financial services and enterprise software.",
    },
    {
      icon: "🌎",
      title: "Go National from the Midwest",
      body: "Chicago companies often underestimate their national potential. Gildre connects you with mentors and operators who've scaled Chicago businesses beyond the Midwest.",
    },
    {
      icon: "🤝",
      title: "A Tight-Knit, High-Trust Network",
      body: "Chicago's founder community is smaller and more collaborative than coastal cities. Gildre amplifies that dynamic with structured intros and curated events you can't get anywhere else.",
    },
  ],
};

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/chicago" },
  title: "Founder Community in Chicago | Gildre",
  description:
    "Gildre connects Chicago founders with curated peer matches, mentorship, and investor access. Built for Chicago's fintech, enterprise, and logistics startup ecosystem.",
  keywords: ["Chicago founder community", "Chicago startup network", "Chicago entrepreneurs", "Gildre Chicago", "fintech founders Chicago"],
  openGraph: {
    title: "Founder Community in Chicago | Gildre",
    description: "Curated peer matches, mentorship, and investor access for Chicago founders in fintech, enterprise, and logistics.",
    url: "https://www.gildre.com/chicago",
    siteName: "Gildre",
    type: "website",
    images: [{ url: "https://www.gildre.com/og-home.png", width: 1200, height: 630, alt: "Gildre founder community in Chicago" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Founder Community in Chicago | Gildre",
    description: "Curated peer matches, mentorship, and investor access for Chicago founders in fintech, enterprise, and logistics.",
  },
};

export default function ChicagoPage() {
  return <LocationPageTemplate data={data} />;
}
