import LocationPageTemplate, { LocationData } from "../components/LocationPageTemplate";

const data: LocationData = {
  name: "New York City",
  slug: "nyc",
  state: "NY",
  zip: "10001",
  lat: 40.7128,
  lng: -74.0060,
  tagline: "The World's Most Diverse Startup Ecosystem",
  hook: "If you can build it here, you can build it anywhere.",
  intro: "New York City is home to the most diverse startup ecosystem in the world — fintech, consumer, media, fashion tech, and enterprise all thriving in the same zip code. Gildre connects NYC founders across industries with the peers and mentors they need to scale.",
  scene: "From Flatiron to Brooklyn Tech Triangle, NYC's founder scene moves at a different speed. The energy is relentless, the talent pool is deep, and the capital is flowing — but the right relationships are still the difference between traction and scale.",
  benefits: [
    {
      icon: "🏙️",
      title: "Cross-Industry Peer Matching",
      body: "NYC's founder diversity is its superpower. Gildre matches you with founders across fintech, DTC, media, and enterprise — giving you perspective you won't get inside your own vertical.",
    },
    {
      icon: "💳",
      title: "Fintech & Consumer Brand Focus",
      body: "NYC is the capital of fintech and consumer brands. Get matched with founders and mentors who understand the NYC market's unique capital dynamics and consumer behavior.",
    },
    {
      icon: "⚡",
      title: "A Community That Keeps Pace With You",
      body: "NYC moves fast and so do you. Gildre's weekly introductions and curated events are designed around founder schedules — not generic networking happy hours.",
    },
  ],
};

export const metadata = {
  title: "Founder Community in NYC | Gildre",
  description:
    "Gildre connects New York City founders with curated peer matches, mentorship, and investor access. Join the founder community built for NYC's fintech, consumer, and enterprise ecosystem.",
};

export default function NycPage() {
  return <LocationPageTemplate data={data} />;
}
