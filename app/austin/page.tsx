import LocationPageTemplate, { LocationData } from "../components/LocationPageTemplate";

const data: LocationData = {
  name: "Austin",
  slug: "austin",
  state: "TX",
  zip: "78701",
  lat: 30.2672,
  lng: -97.7431,
  tagline: "The Fastest-Growing Startup City in America",
  hook: "Austin doesn't do slow. Neither does Gildre.",
  intro: "Austin has become one of the top startup cities in the country — attracting founders, capital, and talent from across the US. Gildre gives Austin founders the structured peer community to keep pace with the city's explosive growth.",
  scene: "From Downtown to the Domain, Austin's founder scene runs on a no-BS culture that rewards execution over talk. Thousands of founders have relocated here for the energy — Gildre gives them the community to channel it.",
  benefits: [
    {
      icon: "⚡",
      title: "Move Fast, Together",
      body: "Get matched weekly with Austin founders who share your urgency. No fluff — just high-signal introductions to peers building at your speed and stage.",
    },
    {
      icon: "🤠",
      title: "A Network That Relocated With You",
      body: "Whether you moved to Austin from the Bay Area, NYC, or grew up here, Gildre fast-tracks the relationships that take years to build organically in a new city.",
    },
    {
      icon: "🚀",
      title: "Access to Emerging Austin Capital",
      body: "Austin's investor ecosystem is growing fast. Get warm introductions to the funds, angels, and operators investing in Austin's next breakout companies.",
    },
  ],
};

export const metadata = {
  title: "Founder Community in Austin, TX | Gildre",
  description:
    "Gildre connects Austin founders with curated peer matches, mentorship, and investor access. Join the community powering Austin's fastest-growing startup ecosystem.",
  keywords: ["Austin founder community", "Austin startup network", "Austin entrepreneurs", "Gildre Austin", "Texas startup founders"],
  openGraph: {
    title: "Founder Community in Austin, TX | Gildre",
    description: "Curated peer matches, mentorship, and investor access for Austin founders in one of the fastest-growing startup ecosystems in the US.",
    url: "https://www.gildre.com/austin",
    siteName: "Gildre",
    type: "website",
    images: [{ url: "https://www.gildre.com/og-home.png", width: 1200, height: 630, alt: "Gildre founder community in Austin" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Founder Community in Austin, TX | Gildre",
    description: "Curated peer matches, mentorship, and investor access for Austin founders.",
  },
};

export default function AustinPage() {
  return <LocationPageTemplate data={data} />;
}
