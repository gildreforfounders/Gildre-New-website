import LocationPageTemplate, { LocationData } from "../components/LocationPageTemplate";

const data: LocationData = {
  name: "Bay Area",
  slug: "bayarea",
  state: "CA",
  zip: "94102",
  lat: 37.7749,
  lng: -122.4194,
  tagline: "The Venture Capital Hub of the World",
  hook: "The density of opportunity here is unmatched. So is the noise. Gildre cuts through it.",
  intro: "The Bay Area is where startups become unicorns — but it's also where founders burn out trying to stand out in the most competitive market on earth. Gildre gives Bay Area founders a private, high-signal community to build the right relationships fast.",
  scene: "From SoMa to Palo Alto, the Bay Area's founder density is unlike anywhere else. Every coffee shop is full of builders. But proximity isn't community. Gildre gives you the structure to turn proximity into partnership.",
  benefits: [
    {
      icon: "🦄",
      title: "High-Signal, Not High-Volume",
      body: "In a city where everyone is a founder, quality of connection matters more than quantity. Gildre's curation means every intro is relevant — no random networking events.",
    },
    {
      icon: "💡",
      title: "Access to the VC Ecosystem",
      body: "Get warm introductions to investors across the Bay Area's funding landscape — from pre-seed angels to Series A funds actively deploying in your space.",
    },
    {
      icon: "🌉",
      title: "Operators Who've Scaled Here",
      body: "Get mentorship from founders and operators who've built in the Bay Area — and know the specific dynamics of hiring, fundraising, and scaling in this market.",
    },
  ],
};

export const metadata = {
  title: "Founder Community in the Bay Area | Gildre",
  description:
    "Gildre connects Bay Area founders with curated peer matches, VC introductions, and mentorship from operators who've scaled in Silicon Valley. Cut through the noise.",
};

export default function BayAreaPage() {
  return <LocationPageTemplate data={data} />;
}
