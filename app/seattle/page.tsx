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
  neighborhood: "South Lake Union",
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
  alternates: { canonical: "https://www.gildre.com/seattle" },
  title: "Founder Community in Seattle | Gildre",
  description:
    "Gildre connects Seattle founders with curated peer matches, mentorship, and investor access. Built for Seattle's enterprise, cloud, and big-tech-alumni startup ecosystem.",
  keywords: ["Seattle founder community", "Seattle startup network", "Seattle entrepreneurs", "Gildre Seattle", "big tech alumni founders"],
  openGraph: {
    title: "Founder Community in Seattle | Gildre",
    description: "Curated peer matches, mentorship, and investor access for Seattle founders in enterprise, cloud, and big-tech-alumni startups.",
    url: "https://www.gildre.com/seattle",
    siteName: "Gildre",
    type: "website",
    images: [{ url: "https://www.gildre.com/og-home.png", width: 1200, height: 630, alt: "Gildre founder community in Seattle" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Founder Community in Seattle | Gildre",
    description: "Curated peer matches, mentorship, and investor access for Seattle founders in enterprise, cloud, and big-tech alumni startups.",
  },
};

export default function SeattlePage() {
  return <LocationPageTemplate data={data} />;
}
