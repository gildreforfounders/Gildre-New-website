import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.gildre.com" },
  title: "Gildre — Private Startup Founder Community with 1:1 Mentorship & Peer Matching",
  description:
    "Join 250+ startup founders. Gildre is a private founder community offering 1:1 mentorship from exited operators, curated peer matching, and expert programming from pre-revenue to $5M+ ARR.",
  keywords: ["founder community", "startup mentorship", "startup founder community", "founder mentor", "peer matching founders", "entrepreneur community", "startup advisor", "Gildre"],
  openGraph: {
    title: "Gildre — Private Startup Founder Community with 1:1 Mentorship & Peer Matching",
    description:
      "Join 250+ startup founders. 1:1 mentorship from exited operators, curated peer matching, and expert programming from pre-revenue to $5M+ ARR.",
    url: "https://www.gildre.com",
    siteName: "Gildre",
    type: "website",
    images: [{ url: "https://www.gildre.com/og-home.png", width: 1200, height: 630, alt: "Gildre founder community" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gildre — Private Startup Founder Community with 1:1 Mentorship & Peer Matching",
    description: "Join 250+ startup founders. 1:1 mentorship from exited operators, curated peer matching, and expert programming from pre-revenue to $5M+ ARR.",
  },
};

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

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Gildre",
  "url": "https://www.gildre.com",
  "description": "Private startup founder community offering 1:1 mentorship, peer matching, and expert programming from pre-revenue to $5M+ ARR.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.gildre.com/content?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "name": "Gildre",
  "url": "https://www.gildre.com",
  "logo": "https://www.gildre.com/images/gildre-logo.png",
  "image": "https://www.gildre.com/images/gildre-logo.png",
  "description": "Gildre is a private startup founder community offering 1:1 mentorship from exited operators, curated peer introductions, and expert-led programming for founders from pre-revenue to $5M+ ARR. Gildre takes no equity and charges a monthly membership fee starting at $59/month.",
  "email": "info@gildre.com",
  "telephone": "+1-847-881-6319",
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Credit Card",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
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
  "hasMap": "https://maps.google.com/?q=2510+Green+Bay+Road+Evanston+IL+60201",
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "City", "name": "Chicago" },
    { "@type": "City", "name": "New York City" },
    { "@type": "City", "name": "Boston" },
    { "@type": "City", "name": "Austin" },
    { "@type": "City", "name": "Los Angeles" },
    { "@type": "City", "name": "San Francisco" },
    { "@type": "City", "name": "Seattle" }
  ],
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
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Gildre Founder Community Membership Plans",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Silver Membership",
        "description": "For founders in the Build stage (pre-revenue to $500K ARR). Includes white-glove onboarding, weekly curated 1:1 introductions, virtual events, private community platform, and $5M+ in partner perks.",
        "price": "59.00",
        "priceCurrency": "USD",
        "priceSpecification": { "@type": "UnitPriceSpecification", "price": "59.00", "priceCurrency": "USD", "unitText": "MONTH" },
        "url": "https://www.gildre.com/membership"
      },
      {
        "@type": "Offer",
        "name": "Gold Membership",
        "description": "For founders in the Growth stage ($500K–$5M ARR). Includes everything in Silver plus 1 monthly advisory session with a Gildre Managing Partner, in-person events, podcasting opportunities, and investor directory access.",
        "price": "149.00",
        "priceCurrency": "USD",
        "priceSpecification": { "@type": "UnitPriceSpecification", "price": "149.00", "priceCurrency": "USD", "unitText": "MONTH" },
        "url": "https://www.gildre.com/membership"
      },
      {
        "@type": "Offer",
        "name": "Platinum Membership",
        "description": "For founders in the Scale stage ($5M+ ARR). Includes everything in Gold plus 2 monthly advisory sessions, personalized 1:1 mentor pairing with an exited founder, and multiple warm investor introductions per month.",
        "price": "349.00",
        "priceCurrency": "USD",
        "priceSpecification": { "@type": "UnitPriceSpecification", "price": "349.00", "priceCurrency": "USD", "unitText": "MONTH" },
        "url": "https://www.gildre.com/membership"
      }
    ]
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Gildre?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gildre is a private startup founder community offering curated 1:1 mentorship, peer introductions, and expert-led programming for founders from pre-revenue to $5M+ ARR. Gildre does not take equity — it is a membership-based community, not an accelerator. Members get matched with exited founders, connected with stage-matched peers, and given access to 100+ annual events across 15+ US cities."
      }
    },
    {
      "@type": "Question",
      "name": "How much does Gildre cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gildre offers three membership tiers: Silver at $59/month (or $50/month annually), Gold at $149/month (or $125/month annually), and Platinum at $349/month (or $249/month annually). Annual billing saves up to 29%. All memberships renew automatically and can be cancelled anytime."
      }
    },
    {
      "@type": "Question",
      "name": "What is included in the Gildre membership?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every Gildre membership includes white-glove onboarding, weekly curated 1:1 peer and mentor introductions, 3–4 virtual events per month (AMAs, Innovation Roundtables, Fireside Chats, Executive Workshops), access to the private community platform with 250+ founders, and $5M+ in partner perks from 500+ companies. Gold and Platinum additionally include monthly advisory sessions with a Gildre Managing Partner, in-person events, and investor directory access. Platinum adds personalized 1:1 mentor pairing and multiple monthly investor introductions."
      }
    },
    {
      "@type": "Question",
      "name": "How does 1:1 mentorship work at Gildre?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gildre's 1:1 mentorship is available at Gold and Platinum tiers. After onboarding, the Gildre team personally curates a mentor match based on your industry, stage, and goals. Mentors are exited founders and domain operators — not coaches or consultants. Mentor-founder sessions happen 1–2 times per month and typically last 4–5 months before Gildre optimizes a new pairing. Platinum members receive a dedicated senior mentor with domain expertise in their specific space."
      }
    },
    {
      "@type": "Question",
      "name": "Does Gildre take equity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Gildre is a membership community, not an accelerator. Gildre charges a monthly membership fee (starting at $59/month) and takes zero equity in members' companies. Founders keep 100% ownership of their business."
      }
    },
    {
      "@type": "Question",
      "name": "Who are Gildre's mentors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gildre's mentor network includes 20+ operators, exited founders, and executives. Highlighted mentors include Fritz Lanman (CEO of ClassPass/Mindbody, led Microsoft's $240M Facebook investment in 2007), Diana Stepner (VP Product at Chan Zuckerberg Initiative, former Kayak and Monster), Sam Bradley (Director of Product at PayPal), Krishna Dosapati (Founder of Clockout — $1.1M ARR in 10 months), and Jason Jacobsohn (Managing Partner at Propellant Ventures, Director of Chicago Founder Institute)."
      }
    },
    {
      "@type": "Question",
      "name": "What stage of startup is Gildre for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gildre serves founders across three stages: Build (pre-revenue to $500K ARR), Growth ($500K–$5M ARR), and Scale ($5M+ ARR). Each membership tier is mapped to a specific stage: Silver for Build, Gold for Growth, and Platinum for Scale. Gildre is industry-agnostic and serves founders in SaaS, fintech, consumer, health tech, media, and professional services."
      }
    },
    {
      "@type": "Question",
      "name": "What cities does Gildre operate in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gildre has active founder communities in 15+ US cities including Boston, New York City, San Francisco Bay Area, Los Angeles, Austin, Chicago, and Seattle. Virtual membership is available worldwide. In-person events — dinners, happy hours, and co-working sessions — are hosted quarterly in each city for Gold and Platinum members."
      }
    },
    {
      "@type": "Question",
      "name": "How many events does Gildre host per month?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gildre hosts 3–4 curated virtual events per month including weekly AMAs, Innovation Roundtables (intimate founder-only sessions of 12 or fewer people), Founder Fireside Chats, and Executive Workshops. Members also get access to 2–3 ecosystem events per week from partner organizations. Gold and Platinum members attend quarterly in-person dinners and events in their city."
      }
    },
    {
      "@type": "Question",
      "name": "What are Innovation Roundtables?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Innovation Roundtables are intimate, founder-only sessions of 12 or fewer people, led by an Executive Mentor on a specific operational topic. They are designed for deep, realistic conversations — founders sharing real successes and struggles, not polished presentations. Gildre hosts these monthly, with topics determined by each Executive Mentor's domain expertise."
      }
    }
  ]
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
