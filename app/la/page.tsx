import LocationPageTemplate, { LocationData } from "../components/LocationPageTemplate";

const data: LocationData = {
  name: "Los Angeles",
  slug: "la",
  state: "CA",
  zip: "90001",
  lat: 34.0522,
  lng: -118.2437,
  tagline: "The Consumer Brand & Creator Economy Capital",
  hook: "Build the brand. Scale the business. Gildre helps you do both.",
  intro: "LA is where consumer brands are born and creator-led businesses thrive. From Venice to Culver City, LA's founder scene is fast, creative, and capital-ready. Gildre gives LA founders the peer infrastructure to turn traction into scale.",
  scene: "LA's ecosystem runs on brand, culture, and distribution — but the best founders here know that sustainable scale requires operations, the right team, and a network of peers who've built what you're trying to build.",
  benefits: [
    {
      icon: "🎬",
      title: "Consumer & Creator-Economy Peers",
      body: "Get matched weekly with LA founders building consumer brands, media companies, and creator-led businesses who understand the unique dynamics of brand-first growth.",
    },
    {
      icon: "🌴",
      title: "Investors Who Get the LA Market",
      body: "Access a directory of investors actively backing LA's consumer, entertainment tech, and DTC brands — and get warm introductions to the ones relevant to your round.",
    },
    {
      icon: "📈",
      title: "From Viral to Viable",
      body: "LA founders are great at getting attention. Gildre connects you with operators and mentors who've turned that attention into durable, scalable businesses.",
    },
  ],
};

export const metadata = {
  title: "Founder Community in Los Angeles | Gildre",
  description:
    "Gildre connects Los Angeles founders with curated peer matches, mentorship, and investor access. Built for LA's consumer brand and creator economy ecosystem.",
  keywords: ["Los Angeles founder community", "LA startup network", "LA entrepreneurs", "Gildre LA", "creator economy founders"],
  openGraph: {
    title: "Founder Community in Los Angeles | Gildre",
    description: "Curated peer matches, mentorship, and investor access for LA founders in consumer brand and the creator economy.",
    url: "https://www.gildre.com/la",
    siteName: "Gildre",
    type: "website",
    images: [{ url: "https://www.gildre.com/og-home.png", width: 1200, height: 630, alt: "Gildre founder community in Los Angeles" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Founder Community in Los Angeles | Gildre",
    description: "Curated peer matches, mentorship, and investor access for LA founders in consumer brand and creator economy.",
  },
};

export default function LaPage() {
  return <LocationPageTemplate data={data} />;
}
