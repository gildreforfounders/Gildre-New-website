import HeroSection from "./components/HeroSection";
import LogoBar from "./components/LogoBar";
import StagesSection from "./components/StagesSection";
import HowItWorks from "./components/HowItWorks";
import BenefitsSection from "./components/BenefitsSection";
import StatsBlock from "./components/StatsBlock";
import MembersCarousel from "./components/MembersCarousel";
import MemberCompanies from "./components/MemberCompanies";
import CommunityMap from "./components/CommunityMap";
import ReviewsSection from "./components/ReviewsSection";
import PricingSection from "./components/PricingSection";
import AboutSection from "./components/AboutSection";
import MissionSection from "./components/MissionSection";
import ClosingCTA from "./components/ClosingCTA";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

type Mentor = {
  name: string;
  title: string;
  company?: string;
  bio: string;
  photo: string;
};

const mentors: Mentor[] = [
  {
    name: "Diana Stepner",
    title: "Head of Product and Startup Executive",
    bio: "Diana is an established product leader who served as Vice President of Product at organizations including Chan Zuckerberg Initiative, Pearson, Kayak, SimplePractice, and Monster.com.",
    photo: "/mentors/diana-stepner.jpg",
  },
  {
    name: "Fritz Lanman",
    title: "CEO",
    company: "ClassPass & MindBody",
    bio: "Fritz is the CEO at ClassPass which attained unicorn status in 2019 with a $285M financing round. He led Microsoft's $240M Facebook investment in 2007, a deal now worth over $8 billion.",
    photo: "/mentors/fritz-lanman.png",
  },
  {
    name: "Krishna Dosapati",
    title: "Founder & CEO",
    company: "Clockout",
    bio: "Krishna is the Founder and CEO of the fastest-growing networking app Clockout, achieving $1.1M ARR in 10 months with over 500,000 downloads during their pre-seed beta.",
    photo: "/mentors/krishna-dosapati.jpg",
  },
  {
    name: "Chris Tsakalakis",
    title: "ex-President and Venture Partner",
    company: "StubHub and Serac Ventures",
    bio: "Chris has served in key C-Suite roles including President and CEO of StubHub, Vivino, and Kiva. He is currently the Managing Partner at Trefo and a Venture Partner through Serac Ventures.",
    photo: "/mentors/chris-tsakalakis.jpg",
  },
  {
    name: "Jayme Strauss",
    title: "Chief Commercial Officer",
    company: "Precision Neuroscience",
    bio: "Jayme has pioneered clinical advancements in Neurotech, Healthcare, AI, and Medical Devices for over 15 years across multiple startups including Viz.ai and Precision Neuroscience.",
    photo: "/mentors/jayme-strauss.jpg",
  },
  {
    name: "David Adeleke",
    title: "Co-Founder and CEO",
    company: "Zeeh Africa",
    bio: "David is the Co-Founder and CEO of Zeeh Africa, a FinTech startup driving financial inclusion across Africa. He has served as a mentor and advisor for dozens of companies across the globe.",
    photo: "/mentors/david-adeleke.png",
  },
  {
    name: "Chase Brignac",
    title: "CEO & Co-Founder",
    company: "ChatOpenSource",
    bio: "Chase is the Technical CEO and Founder at ChatOpenSource which is an On-Premise and Auditable ChatGPT platform. He graduated YCombinator's 22' Batch driving Generative AI.",
    photo: "/mentors/chase-brignac.jpg",
  },
  {
    name: "Sam Bradley",
    title: "Director of Product",
    company: "PayPal",
    bio: "Sam is an experienced product leader who has led global product teams at world-renowned companies including Expedia Group, Quizlet, Stitch Fix, and most recently PayPal.",
    photo: "/mentors/sam-bradley.jpg",
  },
  {
    name: "Bipasha Ghosh",
    title: "Chief Marketing Officer",
    company: "Dali Spaces",
    bio: "Bipasha is the CMO at Dali Spaces, an educational community for women entrepreneurs. Prior to that she served as Vice President of International Marketing at NBC Universal and Head of Marketing at BBC World.",
    photo: "/mentors/bipasha-ghosh.png",
  },
  {
    name: "Jason Jacobsohn",
    title: "Managing Partner & Founder",
    company: "Propellant Ventures",
    bio: "Jason has worked with thousands of startups and multiple VC's supporting 14 different industries. He also serves as the Director of the Chicago Founder Institute organization.",
    photo: "/mentors/jason-jacobsohn.jpg",
  },
  {
    name: "Ankur Jain",
    title: "CTO and Founder",
    company: "Carallel and Sprout",
    bio: "Ankur is the Chief Technology Officer at Carallel and has served as an advisor for other Series A startups including Cohart. His previous roles included time as the VP of Architecture and Engineering at Groupon and Chief Architect at Walgreens.",
    photo: "/mentors/ankur-jain.png",
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Gildre",
  "url": "https://www.gildre.com",
  "logo": "https://www.gildre.com/images/gildre-logo.png",
  "description": "Gildre is a private membership community for founders — providing curated peer connections, expert mentorship, and tactical resources to help founders build, scale, and exit.",
  "email": "info@gildre.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2510 Green Bay Road",
    "addressLocality": "Evanston",
    "addressRegion": "IL",
    "postalCode": "60201",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 42.0565,
    "longitude": -87.6888
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "sameAs": [
    "https://www.instagram.com/gildreforfounders",
    "https://www.linkedin.com/company/gildre/",
    "https://www.youtube.com/@GildreforFounders",
    "https://x.com/Gildre_",
    "https://www.tiktok.com/@gildreforfounders"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "info@gildre.com",
    "contactType": "customer service",
    "areaServed": "US",
    "availableLanguage": "English"
  }
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* 1 — Hook: bold promise, hero image, dual CTA */}
      <HeroSection />

      {/* 2 — Credibility: mentors from top companies */}
      <LogoBar />

      {/* 3 — Relevance: is this for me? (stage targeting) */}
      <StagesSection />

      {/* 4 — Process: how does it work? (3 steps) */}
      <HowItWorks />

      {/* 5 — Desire: what do I get? (bento benefits) */}
      <BenefitsSection />

      {/* 6 — Scale: numbers that validate the community */}
      <StatsBlock />

      {/* 7 — Trust: real people, member carousel */}
      <MembersCarousel members={mentors} />

      {/* 8 — Community: member companies (you'll be in great company) */}
      <MemberCompanies />

      {/* 9 — Geographic reach: community map */}
      <CommunityMap />

      {/* 10 — Social proof: member reviews */}
      <ReviewsSection />

      {/* 12 — About: team behind Gildre */}
      <AboutSection />

      {/* 13 — Decision: pricing */}
      <PricingSection />

      {/* 14 — Mission & Principles */}
      <MissionSection />

      {/* 15 — FAQ */}
      <FAQSection />

      {/* 15 — Final push: closing CTA */}
      <ClosingCTA />

      {/* 15 — Footer */}
      <Footer />

    </div>
  );
}
