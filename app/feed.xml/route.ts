import { NextResponse } from "next/server";

const BASE = "https://www.gildre.com";

const posts = [
  // Blog — founder stories (sorted newest first)
  { slug: "/blog/nancy-yen-omielife-omiebox-24-million-bootstrapped",     date: "2026-08-21", title: "Nancy Yen: Bootstrapped OmieLife to $24 Million, Got Kylie Jenner to Post Without Being Asked, and Never Paid a Single Influencer" },
  { slug: "/blog/jaythan-elam-jointley-startup-design-microsoft",        date: "2026-08-21", title: "Jaythan Elam: From Farming Roots and a Coin Flip to Microsoft, AOL, and $300M in Startup Fundraising" },
  { slug: "/blog/gildre-five-things-driving-growth-ai-no-paid-ads",      date: "2026-08-20", title: "Five Things Driving Gildre's Growth Right Now: AI, Chapter Leads, and Zero Paid Ads" },
  { slug: "/blog/founders-dont-need-fancy-dinners",                      date: "2026-08-19", title: "Founders Don't Need Fancy Dinners. They Need Someone Who Gets It." },
  { slug: "/blog/nelson-brooks-cabana-boys-shark-tank-founder",          date: "2026-08-13", title: "Nelson Brooks of Cabana Boys: From COVID Layoff to Shark Tank" },
  { slug: "/blog/accelerator-vs-peer-community-founder-difference",       date: "2026-08-07", title: "Accelerator or Peer Community: The Real Difference Founders Miss" },
  { slug: "/blog/co-founder-startup-isolation-peer-scarcity-not-headcount", date: "2026-08-07", title: "From Co-Founder to Loneliest Job: Why Two People at the Helm Still Feel Isolated" },
  { slug: "/blog/equity-free-founder-networks-gildre-mentor-access",      date: "2026-08-07", title: "Equity-Free Founder Networks: How Gildre Structures Mentor Access Without Taking a Stake" },
  { slug: "/blog/fellowship-vs-membership-founder-community",             date: "2026-08-07", title: "Fellowship or Membership: How to Choose the Right Founder Community Model" },
  { slug: "/blog/finding-advisors-who-actually-exited-founder-community", date: "2026-08-07", title: "From Keynote Slides to Cap Tables: Finding Advisors Who Have Actually Exited" },
  { slug: "/blog/founder-communities-ranked-revenue-stage-matching",      date: "2026-08-07", title: "Founder Communities Ranked: Which Ones Actually Match You by Revenue Stage" },
  { slug: "/blog/founder-community-product-market-fit",                   date: "2026-08-07", title: "From Networking Theater to Product-Market Fit: What Founder Communities Actually Do" },
  { slug: "/blog/founder-isolation-200k-arr-peer-community",             date: "2026-08-07", title: "From Solo Decisions to Shared Ones: What Founders at $200K ARR Do About Isolation" },
  { slug: "/blog/founder-isolation-support-vs-understanding-peer-mentorship", date: "2026-08-07", title: "From Supported to Understood: Why Founder Isolation Doesn't Go Away With Encouragement" },
  { slug: "/blog/founder-loneliness-predictable-stage-peer-support",     date: "2026-08-07", title: "Founder Loneliness Is Predictable, Not Personal" },
  { slug: "/blog/founder-proximity-bias-test-market-fit",                date: "2026-08-07", title: "Founder Proximity Bias: How Solo Founders Test Market Fit Without Fooling Themselves" },
  { slug: "/blog/gildre-founder-community-scaling-stage-ceos",           date: "2026-08-07", title: "What Scaling-Stage CEOs Should Look For in a Founder Community" },
  { slug: "/blog/gildre-july-2026-25-percent-growth-zero-churn-product-market-fit", date: "2026-08-07", title: "Zero Churn, 25% Growth, and the Compounding Bets That Got Us There" },
  { slug: "/blog/healthtech-founders-find-mentors-who-exited",           date: "2026-08-07", title: "From Coaching Calls to Cap Tables: Where Healthtech Founders Find Mentors Who've Actually Exited" },
  { slug: "/blog/honest-startup-feedback-why-founders-rarely-get-it",    date: "2026-08-07", title: "From Polite Nods to Real Signal: Why Honest Startup Feedback Is So Rare" },
  { slug: "/blog/on-deck-vs-gildre-founder-community",                   date: "2026-08-07", title: "On Deck vs. Gildre: What Founders Use When They Outgrow the Cohort Model" },
  { slug: "/blog/pre-revenue-founder-stage-matched-peer-community",      date: "2026-08-07", title: "From Generic Advice to Stage-Matched Guidance: Where Pre-Revenue Founders Actually Belong" },
  { slug: "/blog/solo-saas-founder-pivot-decision-who-to-talk-to",       date: "2026-08-07", title: "Solo SaaS Founder Facing a Pivot: Who to Talk To Before You Decide" },
  { slug: "/blog/under-500k-arr-founder-community-stage-matched",        date: "2026-08-07", title: "Under $500K ARR and Second-Guessing Everything? Where Founders at Your Stage Actually Talk" },
  { slug: "/blog/why-59-dollars-beats-gatekeeping-accessible-founder-community", date: "2026-08-07", title: "Why $59 Beats Gatekeeping: The Real Math Behind Accessible Founder Communities" },
  { slug: "/blog/why-founder-isolation-happens-first-two-years",         date: "2026-08-07", title: "Why Founder Isolation Happens in the First Two Years (And Why It's Structural, Not Personal)" },
  { slug: "/blog/zero-to-500k-arr-why-generic-startup-advice-fails",     date: "2026-08-07", title: "From Zero to $500K: Why Generic Startup Advice Fails the Founders Who Need It Most" },
  { slug: "/blog/dr-michael-filosi-fullarton-park-dental-adelaide",      date: "2026-07-30", title: "Dr. Michael Filosi: From Two Dental Chairs to Adelaide's Biggest Practice and a Private Equity Exit" },
  { slug: "/blog/alex-jekowski-cents-laundromat-tech-vertical-saas",     date: "2026-07-29", title: "Alex Jekowski: From College Pinboards to $140M — How Cents Is Building the All-In-One Platform Powering America's Laundromats" },
  { slug: "/blog/christof-gomez-mannfeld-solvee-ai-business-coach",      date: "2026-07-29", title: "Christof Gomez Mannfeld: The Bosch Engineer Who Got Fired and Built solvee" },
  { slug: "/blog/cody-graham-sogo-restaurant-app-chicago",               date: "2026-07-29", title: "Cody Graham: How SoGo Is Turning Restaurant Discovery Into Personalized Curation" },
  { slug: "/blog/florian-kemmerich-vocating-ai-impact-investor",         date: "2026-07-29", title: "Florian Kemmerich: The Impact Investor Who Left the Olympics and Built an AI Platform" },
  { slug: "/blog/one-to-three-million-arr-founder-community",            date: "2026-07-25", title: "The $1M–$3M ARR Gap: What Founder Communities Get Wrong, and What Actually Works" },
  { slug: "/blog/chris-yeh-blitzscaling-reid-hoffman",                   date: "2025-07-01", title: "Chris Yeh: The Co-Author of Blitzscaling on Winning Winner-Take-Most Markets" },
  { slug: "/blog/frances-pratt-more-sales-less-marketing",               date: "2025-07-01", title: "Frances Pratt: From the Ritz Carlton to $18M Exit — How the Author of More Sales Less Marketing Rewires Founders Who Hate Selling" },
  { slug: "/blog/iliana-alvarado-ensyx-it-governance-ai-mexico",         date: "2025-07-01", title: "Iliana Alvarado: The Mexico City Attorney Who Left Banking to Build XPERTEKIT.Inc" },
  { slug: "/blog/sharon-gai-keynote-speaker-alibaba-ai",                 date: "2025-07-01", title: "Sharon Gai: From Alibaba Head of Global Accounts to International Keynote Speaker on the Future of AI and Work" },
  { slug: "/blog/steve-ramona-servant-heart-podcast-networking",         date: "2025-07-01", title: "Steve Ramona: The Servant's Heart Business Philosophy That Turned a Gym Front Desk Into Millions" },
  { slug: "/blog/chris-tsakalakis-stubhub-ceo-marketplace",             date: "2025-06-01", title: "Chris Tsakalakis: How the StubHub CEO Grew Ticket Sales From $400M to $3.2B in Eight Years" },
  { slug: "/blog/russell-breuer-spot-tango-pet-food-founder",            date: "2025-06-01", title: "Russell Breuer: From Studio Apartment to Nine-Figure Pet Health Empire With Spot and Tango" },
  { slug: "/blog/chris-riklin-topline-professional-marketplace",         date: "2025-03-01", title: "Chris Riklin: How a Decade in Political Tech Led Him to Co-Found Topline" },
  { slug: "/blog/elise-madrick-cerene-executive-transformation",         date: "2025-03-01", title: "Elise Madrick: Why Real Transformation Requires Changing Your Entire Context" },
  { slug: "/blog/john-olson-healthcare-entrepreneur-coaching",           date: "2025-02-01", title: "John Olson: From Managing a Billion-Dollar Healthcare Budget to E-Commerce and Executive Coaching" },
  { slug: "/blog/robyn-hobson-cape-town-to-us-cmo",                     date: "2024-05-01", title: "Robyn Hobson: From Cape Town Startup to US CMO — A Global Marketing Career Built on Grit" },
  { slug: "/blog/nasa-engineer-y-combinator-chatopensource",             date: "2024-04-01", title: "NASA Engineer to Y Combinator: Building Open-Source AI" },
  { slug: "/blog/alex-bean-divvy-billcom-acquisition",                   date: "2024-03-01", title: "Alex Bean: How the Co-Founder of Divvy Sold to Bill.com and Moved Into Venture Capital" },
  { slug: "/blog/aytekin-tank-bootstrapped-jotform-no-vc",              date: "2024-02-01", title: "Aytekin Tank: How He Bootstrapped Jotform to 25 Million Users Without a Dollar of VC Funding" },
  { slug: "/blog/james-corwin-wildlife-artist-corwin-galleries",         date: "2024-01-15", title: "James Corwin: How a Montana Wildlife Artist Built Corwin Galleries into a Thriving Business" },
  { slug: "/blog/fritz-lanman-classpass-microsoft-unicorn",              date: "2024-01-01", title: "Fritz Lanman: Building Products That Scale — From Microsoft to ClassPass Unicorn" },
  { slug: "/blog/ryan-hughes-google-snapchat-fan-pier-labs",            date: "2024-01-01", title: "Ryan Hughes: Google and Snapchat Alum Building Fan Pier Labs" },
  { slug: "/blog/luke-ashenbrand-princeton-football-startup",            date: "2024-01-01", title: "Luke Ashenbrand: Princeton Athlete Turned Startup Founder" },
  { slug: "/blog/john-lionberger-broadway-engineer-racing",              date: "2024-01-01", title: "John Lionberger: From Broadway Technician to Electrical Engineer to Pro Racing Driver" },
  { slug: "/blog/armando-vera-carvajal-hangtight-amazon",               date: "2024-01-01", title: "Armando Vera Carvajal: From the Amazon River to Building Hangtight" },
  // Guides
  { slug: "/guides/next-100-customers-gtm-playbook",             date: "2026-08-01", title: "Your Next 100 Customers: The Gildre GTM Playbook for Founders" },
  { slug: "/guides/building-high-performing-sdr-team",           date: "2026-08-01", title: "How to Build a High-Performing SDR Team" },
  { slug: "/guides/pre-seed-fundraising-playbook",               date: "2026-08-01", title: "Pre-Seed Fundraising: The 7-Step Playbook for First-Time Founders" },
  { slug: "/guides/equity-dilution-explained",                   date: "2026-08-01", title: "Equity Dilution Explained: How Much to Give Away at Each Funding Round" },
  { slug: "/guides/startup-equity-101",                          date: "2026-08-01", title: "Startup Equity 101: The Complete Founder's Guide to Splitting Shares and Vesting Schedules" },
  { slug: "/guides/when-to-say-no-to-customers",                  date: "2026-08-01", title: "When to Say No to Customers: The Founder's Playbook" },
  { slug: "/guides/first-100-customers",                          date: "2026-08-01", title: "How to Get Your First 100 Customers" },
  { slug: "/guides/how-to-use-customer-feedback-build-product",  date: "2026-08-01", title: "How to Use Customer Feedback to Build a Product People Actually Want" },
  { slug: "/guides/cap-table-management",                        date: "2026-08-01", title: "Cap Table Management From Pre-Seed to Series A: The Founder's Equity Playbook" },
  { slug: "/guides/bootstrapping-vs-venture-capital",            date: "2026-08-01", title: "Bootstrapping vs. Venture Capital: What Real Founders Know" },
  { slug: "/guides/micro-influencer-marketing",                  date: "2026-08-01", title: "Micro-Influencer Marketing: The Founder's Playbook for Niche Creator Partnerships" },
  { slug: "/guides/startup-fundraising-terminology",             date: "2026-08-01", title: "Startup Fundraising Terminology: The Complete Founder's Glossary" },
  { slug: "/guides/building-products-that-scale",                date: "2026-08-01", title: "Building Products That Scale: Lessons from ClassPass CEO Fritz Lanman" },
];

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const items = posts
    .map(
      ({ slug, date, title }) => `
    <item>
      <title><![CDATA[${title}]]></title>
      <link>${BASE}${slug}</link>
      <guid isPermaLink="true">${BASE}${slug}</guid>
      <pubDate>${new Date(date).toUTCString()}</pubDate>
    </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Gildre — Founder Stories, Guides &amp; Insights</title>
    <link>${BASE}</link>
    <description>Founder interviews, startup guides, and community insights from Gildre — the private founder community for pre-revenue to $5M+ ARR startups.</description>
    <language>en-us</language>
    <copyright>Gildre, LLC</copyright>
    <managingEditor>${escapeXml("info@gildre.com")} (Gildre)</managingEditor>
    <webMaster>${escapeXml("info@gildre.com")} (Gildre)</webMaster>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
