import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gildre Membership — Startup Founder Community Plans Starting at $59/mo",
  description:
    "Silver ($59), Gold ($149), and Platinum ($349) startup mentorship plans for founders from pre-revenue to $5M+ ARR. 1:1 mentorship, curated peer matching, weekly events, and $5M+ in perks.",
  keywords: ["Gildre membership", "founder community", "startup mentorship", "startup mentor", "founder peer group", "entrepreneur community membership"],
  openGraph: {
    title: "Gildre Membership — Startup Founder Community Plans Starting at $59/mo",
    description:
      "Silver, Gold, and Platinum startup mentorship plans. 1:1 mentorship from exited founders, curated peer matching, and weekly events for serious startup founders.",
    url: "https://www.gildre.com/membership",
    siteName: "Gildre",
    type: "website",
    images: [{ url: "https://www.gildre.com/og-home.png", width: 1200, height: 630, alt: "Gildre membership tiers" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gildre Membership — Startup Founder Community Plans Starting at $59/mo",
    description: "Silver, Gold, and Platinum startup mentorship plans. 1:1 mentorship from exited founders, curated peer matching, and weekly events.",
  },
};

const membershipSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Gildre Founder Community Membership Plans",
  "description": "Gildre offers three startup founder community membership tiers. Silver ($59/month) for Build-stage founders (pre-revenue to $500K ARR), Gold ($149/month) for Growth-stage founders ($500K–$5M ARR), and Platinum ($349/month) for Scale-stage founders ($5M+ ARR). Gildre takes no equity.",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Product",
        "name": "Gildre Silver Membership",
        "description": "For startup founders in the Build stage (pre-revenue to $500K ARR). Includes white-glove onboarding, weekly curated 1:1 peer and mentor introductions, 3–4 virtual events per month, private community platform with 250+ founders, individualized goal tracking, and $5M+ in partner perks from 500+ companies.",
        "brand": { "@type": "Brand", "name": "Gildre" },
        "offers": {
          "@type": "Offer",
          "price": "59.00",
          "priceCurrency": "USD",
          "priceSpecification": { "@type": "UnitPriceSpecification", "price": "59.00", "priceCurrency": "USD", "unitText": "MONTH" },
          "availability": "https://schema.org/InStock",
          "url": "https://www.gildre.com/membership"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Product",
        "name": "Gildre Gold Membership",
        "description": "For startup founders in the Growth stage ($500K–$5M ARR). Includes everything in Silver plus 1 monthly advisory session with a Gildre Managing Partner (an exited founder), exclusive in-person events and quarterly dinners, podcasting and personal brand opportunities, and access to the Gildre investor directory for warm VC and angel introductions.",
        "brand": { "@type": "Brand", "name": "Gildre" },
        "offers": {
          "@type": "Offer",
          "price": "149.00",
          "priceCurrency": "USD",
          "priceSpecification": { "@type": "UnitPriceSpecification", "price": "149.00", "priceCurrency": "USD", "unitText": "MONTH" },
          "availability": "https://schema.org/InStock",
          "url": "https://www.gildre.com/membership"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Product",
        "name": "Gildre Platinum Membership",
        "description": "For startup founders in the Scale stage ($5M+ ARR). Includes everything in Gold plus 2 monthly advisory sessions, personalized 1:1 mentor pairing with a senior exited founder in your domain, and multiple warm investor introductions per month.",
        "brand": { "@type": "Brand", "name": "Gildre" },
        "offers": {
          "@type": "Offer",
          "price": "349.00",
          "priceCurrency": "USD",
          "priceSpecification": { "@type": "UnitPriceSpecification", "price": "349.00", "priceCurrency": "USD", "unitText": "MONTH" },
          "availability": "https://schema.org/InStock",
          "url": "https://www.gildre.com/membership"
        }
      }
    }
  ]
};

export default function MembershipLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(membershipSchema) }}
      />
      {children}
    </>
  );
}
