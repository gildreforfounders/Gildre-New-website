import LocationPageTemplate, { LocationData } from "../components/LocationPageTemplate";

const data: LocationData = {
  name: "Seattle",
  slug: "seattle",
  state: "WA",
  zip: "98101",
  lat: 47.6062,
  lng: -122.3321,
  tagline: "Where Big-Tech Alumni Become Great Founders",
  hook: "Amazon. Microsoft. Salesforce. The pedigree is here. So is your next chapter.",
  intro: "Seattle is the city that built some of the world's most consequential technology companies — and now it's home to a new generation of founders with deep technical expertise and big-company experience. Gildre gives Seattle founders the peer community to make that transition successfully.",
  scene: "From South Lake Union to Capitol Hill, Seattle's startup scene is powered by technical depth, product instincts, and a culture of building things that last. Gildre gives founders here the peer network to complement their builder instincts with the operator perspective they need to scale.",
  benefits: [
    {
      icon: "☁️",
      title: "Enterprise & Cloud-Native Peers",
      body: "Get matched weekly with Seattle founders building enterprise software, cloud infrastructure, and developer tools — people who speak your language and understand your market.",
    },
    {
      icon: "🏢",
      title: "Big-Tech-to-Startup Mentorship",
      body: "Transitioning from Amazon, Microsoft, or another big-tech role to founder life is its own challenge. Gildre's mentors have done it — and can help you avoid the costly mistakes.",
    },
    {
      icon: "💰",
      title: "Investor Access in a Growing Market",
      body: "Seattle's investor ecosystem is expanding rapidly. Get warm introductions to the funds and angels actively backing Pacific Northwest companies.",
    },
  ],
};

export const metadata = {
  title: "Founder Community in Seattle | Gildre",
  description:
    "Gildre connects Seattle founders with curated peer matches, mentorship, and investor access. Join the founder community built for Seattle's enterprise, cloud, and big-tech-alumni ecosystem.",
};

export default function SeattlePage() {
  return <LocationPageTemplate data={data} />;
}
