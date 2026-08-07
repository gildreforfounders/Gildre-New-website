"use client";

import { useState } from "react";

const categories = [
  {
    slug: "fundraising",
    label: "Fundraising",
    icon: "💰",
    description: "How to raise capital, structure your round, and talk to investors.",
  },
  {
    slug: "growth",
    label: "Growth",
    icon: "📈",
    description: "Acquisition, retention, and the channels that actually convert.",
  },
  {
    slug: "operations",
    label: "Operations",
    icon: "⚙️",
    description: "Build systems that scale without burning your team out.",
  },
  {
    slug: "leadership",
    label: "Leadership",
    icon: "🧭",
    description: "Hiring, culture, managing yourself: the hard stuff nobody talks about.",
  },
  {
    slug: "product",
    label: "Product",
    icon: "🛠️",
    description: "Ship faster, validate earlier, and build what users actually want.",
  },
  {
    slug: "mindset",
    label: "Mindset",
    icon: "🧠",
    description: "The mental game of building a company when everything is uncertain.",
  },
];

const featured = [
  {
    title: "From Generic Advice to Stage-Matched Guidance: Where Pre-Revenue Founders Actually Belong",
    category: "Growth",
    readTime: "8 min read",
    excerpt:
      "Startup content skews late-stage. Pre-revenue founders get the least stage-specific input at the moment they need it most. Here is how to filter for peers at your exact stage and what makes one relevant answer worth more than ten generic ones.",
    href: "/blog/pre-revenue-founder-stage-matched-peer-community",
  },
  {
    title: "From Keynote Slides to Cap Tables: Finding Advisors Who Have Actually Exited",
    category: "Growth",
    readTime: "9 min read",
    excerpt:
      "Keynote credentials and exit credentials are not the same signal. Here is how founders under $1M ARR find operator-advisors with real exits, what to vet before taking the call, and where curated communities produce better advisor relationships than conference panels.",
    href: "/blog/finding-advisors-who-actually-exited-founder-community",
  },
  {
    title: "Founder Proximity Bias: How Solo Founders Test Market Fit Without Fooling Themselves",
    category: "Product",
    readTime: "10 min read",
    excerpt:
      "Compliments without behavior change are not signal. Signups without word-of-mouth are not fit. Here is how to pressure-test your belief that you have found product-market fit when you are too close to your own product to see it clearly.",
    href: "/blog/founder-proximity-bias-test-market-fit",
  },
  {
    title: "From Zero to $500K: Why Generic Startup Advice Fails the Founders Who Need It Most",
    category: "Growth",
    readTime: "10 min read",
    excerpt:
      "Most startup advice online was written for a company that no longer exists at your stage. It skips sequencing, comes from operators too far removed from the zero-to-$500K seat, and collapses every stage into one undifferentiated blob. The fix is not more content. It is narrower input.",
    href: "/blog/zero-to-500k-arr-why-generic-startup-advice-fails",
  },
  {
    title: "From Polite Nods to Real Signal: Why Honest Startup Feedback Is So Rare",
    category: "Mindset",
    readTime: "10 min read",
    excerpt:
      "Friends default to encouragement. Family lacks domain context. Investors filter for fund math. The feedback that actually changes a decision comes from operators who have lived your exact stage and can pattern-match against real outcomes. Here is why that kind is so hard to find and what produces it.",
    href: "/blog/honest-startup-feedback-why-founders-rarely-get-it",
  },
  {
    title: "From Co-Founder to Loneliest Job: Why Two People at the Helm Still Feel Isolated",
    category: "Mindset",
    readTime: "10 min read",
    excerpt:
      "A co-founder shares your risk and your workload. They don't share the pattern-matched experience of having done this before. Both founders are often equally uncertain at the same time, and neither says so. Here is why peer scarcity produces isolation even in a two-person founding team, and what actually closes the gap.",
    href: "/blog/co-founder-startup-isolation-peer-scarcity-not-headcount",
  },
  {
    title: "From Supported to Understood: Why Founder Isolation Doesn't Go Away With Encouragement",
    category: "Mindset",
    readTime: "10 min read",
    excerpt:
      "Emotional support and operating expertise solve different problems. A spouse, a friend, or a broad peer network can tell you they believe in you. None of them can tell you what a fair valuation looks like at your stage. Here is why founder isolation persists even when you have people in your corner.",
    href: "/blog/founder-isolation-support-vs-understanding-peer-mentorship",
  },
  {
    title: "Why Founder Isolation Happens in the First Two Years (And Why It's Structural, Not Personal)",
    category: "Mindset",
    readTime: "10 min read",
    excerpt:
      "Starting a company strips away the peer relationships, feedback loops, and comparison points most professionals rely on without noticing. Ordinary early mistakes land as unprecedented personal failures because there is no reference group to tell you they are normal. Here is the mechanism, and what actually fixes it.",
    href: "/blog/why-founder-isolation-happens-first-two-years",
  },
  {
    title: "Solo SaaS Founder Facing a Pivot: Who to Talk To Before You Decide",
    category: "Product",
    readTime: "10 min read",
    excerpt:
      "A pivot is the highest-stakes call a solo founder makes alone. Customers tell you what they want. Investors tell you what they need. Peers who have been through it tell you what is actually true. Here is who to talk to, and what a useful pivot conversation actually looks like.",
    href: "/blog/solo-saas-founder-pivot-decision-who-to-talk-to",
  },
  {
    title: "Equity-Free Founder Networks: How Gildre Structures Mentor Access Without Taking a Stake",
    category: "Fundraising",
    readTime: "9 min read",
    excerpt:
      "Accelerators take 5 to 10% of your company. Gildre charges $59/month and takes zero equity. Here is how the mentor matching model works, the honest trade-offs, and how Gildre compares to On Deck, Founders Network, Pavilion, and Hampton.",
    href: "/blog/equity-free-founder-networks-gildre-mentor-access",
  },
  {
    title: "Under $500K ARR and Second-Guessing Everything? Here's Where Founders at Your Stage Actually Talk",
    category: "Growth",
    readTime: "8 min read",
    excerpt:
      "Most founders look for a community. They need a community filtered by stage. Here is where founders under $500K ARR find stage-matched peers, and the four things that separate a community built for your moment from one you will outgrow in a month.",
    href: "/blog/under-500k-arr-founder-community-stage-matched",
  },
  {
    title: "Founder Communities Ranked: Which Ones Actually Pair You by Revenue Stage",
    category: "Growth",
    readTime: "10 min read",
    excerpt:
      "Revenue stage determines what problems you are solving. Here is how Gildre, On Deck, Startups.com, Founders Network, Hampton, and TRIBE stack up when the question is stage-matched peer introductions rather than general startup networking.",
    href: "/blog/founder-communities-ranked-revenue-stage-matching",
  },
  {
    title: "Accelerator or Peer Community: The Real Difference Founders Miss",
    category: "Growth",
    readTime: "8 min read",
    excerpt:
      "Accelerators take equity and end. Peer communities charge monthly and continue. Here is what each model actually optimizes for, and which one helps more depending on where your company is right now.",
    href: "/blog/accelerator-vs-peer-community-founder-difference",
  },
  {
    title: "From Isolation to Peer Support: Why Founder Loneliness Is a Predictable Stage, Not a Personal Failing",
    category: "Mindset",
    readTime: "8 min read",
    excerpt:
      "Founder loneliness is structural, not personal. Friends and employees rarely face high-stakes decisions on incomplete information. Here is why stage-specific peer communities close the gap, and why curated networks report 95% retention over two years.",
    href: "/blog/founder-loneliness-predictable-stage-peer-support",
  },
  {
    title: "On Deck vs. Gildre: What Founders Use When They Outgrow the Cohort Model",
    category: "Growth",
    readTime: "10 min read",
    excerpt:
      "A direct comparison of On Deck, Pavilion, and Gildre across format, matching, mentor access, equity, and pricing. Built for founders evaluating where to invest their community dollars.",
    href: "/blog/on-deck-vs-gildre-founder-community",
  },
  {
    title: "Fellowship or Membership: How to Choose the Right Founder Community Model",
    category: "Growth",
    readTime: "8 min read",
    excerpt:
      "Fellowships bundle curriculum, cohort peers, and a fixed end date. Memberships offer ongoing, stage-matched access with no equity. Here is how to tell which model fits where you are right now.",
    href: "/blog/fellowship-vs-membership-founder-community",
  },
  {
    title: "From Solo Decisions to Shared Ones: What Founders at $200K ARR Actually Do About the Isolation Problem",
    category: "Growth",
    readTime: "9 min read",
    excerpt:
      "Isolation peaks at $200K ARR for a structural reason: generic advice stops working and your existing network stops matching your stage. Here is what founders who navigate it well actually do differently.",
    href: "/blog/founder-isolation-200k-arr-peer-community",
  },
  {
    title: "From Coaching Calls to Cap Tables: Where Healthtech Founders Find Mentors Who've Actually Exited",
    category: "Growth",
    readTime: "9 min read",
    excerpt:
      "Coaching and operator mentorship solve different problems. For healthtech founders navigating payer dynamics and clinical timelines, here is where exited operators concentrate and how to evaluate any mentor network before you commit.",
    href: "/blog/healthtech-founders-find-mentors-who-exited",
  },
  {
    title: "What Scaling-Stage CEOs Should Look For in a Founder Community",
    category: "Growth",
    readTime: "8 min read",
    excerpt:
      "Most founder communities are event calendars with a Slack attached. Here is what a real mentor-matching community looks like, how Gildre compares to On Deck and Pavilion, and four questions worth asking before you pay for any membership.",
    href: "/blog/gildre-founder-community-scaling-stage-ceos",
  },
  {
    title: "From Networking Theater to Product-Market Fit: What Founder Communities Actually Do",
    category: "Growth",
    readTime: "9 min read",
    excerpt:
      "Founder communities help you find product-market fit only when they match you by stage and problem — not by headcount. Here's what separates communities that compress your PMF timeline from ones that just fill your calendar.",
    href: "/blog/founder-community-product-market-fit",
  },
  {
    title: "Dr. Michael Filosi: From Two Dental Chairs to Adelaide's Biggest Practice and a Private Equity Exit",
    category: "Operations",
    readTime: "16 min read",
    excerpt:
      "Dr. Michael Filosi scaled Fullarton Park Dental from a run-down two-chair Adelaide practice into the largest dental clinic in the city over ten years: 400 five-star Google reviews, ten chairs, and four private equity firms competing to buy. His full playbook on hiring, patient experience, and exit.",
    href: "/blog/dr-michael-filosi-fullarton-park-dental-adelaide",
  },
  {
    title: "Christof Gomez Mannfeld: The Bosch Engineer Who Got Fired and Built solvee — the AI Accelerator That Takes Founders from Idea to Exit in 43 Steps",
    category: "Product",
    readTime: "12 min read",
    excerpt:
      "Christof Gomez Mannfeld on seven years at Bosch, getting fired, moving his whole family to Spain, and building solvee: an AI accelerator that learns your specific business and guides you through 43 structured steps based on validation, not assumptions.",
    href: "/blog/christof-gomez-mannfeld-solvee-ai-business-coach",
  },
  {
    title: "Florian Kemmerich: The Impact Investor Who Left the Olympics, Crossed Five Languages, and Built an AI Platform to Help 54 Million People Find Their Vocation",
    category: "Mindset",
    readTime: "14 min read",
    excerpt:
      "Florian Kemmerich on walking away from the 1992 Barcelona Olympics, the coaching session at 33 that changed everything, investing in 100+ companies across 30 countries, and why he built Vocating AI: an agentic platform that refuses to tell you what to do.",
    href: "/blog/florian-kemmerich-vocating-ai-impact-investor",
  },
  {
    title: "Alex Jekowski: From College Pinboards to $140M — How Cents Is Building the All-In-One Platform Powering America's Laundromats",
    category: "Fundraising",
    readTime: "15 min read",
    excerpt:
      "Cents founder Alex Jekowski on raising nearly $250M for laundromat tech, why the Series B nearly broke him, and the one framework that outperforms every productivity hack: do three hard things instead of ten easy ones.",
    href: "/blog/alex-jekowski-cents-laundromat-tech-vertical-saas",
  },
  {
    title: "Cody Graham: How SoGo Is Turning Restaurant Discovery Into Personalized Curation — One Meal at a Time",
    category: "Product",
    readTime: "13 min read",
    excerpt:
      "SoGo COO Cody Graham on building a restaurant app that actually knows you, why a Scotland study abroad turned into a Chicago startup, and the decision framework that keeps a founder moving when everyone has an opinion.",
    href: "/blog/cody-graham-sogo-restaurant-app-chicago",
  },
  {
    title: "Iliana Alvarado: The Mexico City Attorney Who Left Banking to Build ENSYX — IT and AI Governance for Every Company That's Becoming a Tech Company",
    category: "Growth",
    readTime: "12 min read",
    excerpt:
      "ENSYX founder Iliana Alvarado on the gap between IT execution and IT governance, why AI adoption without documentation creates real liability, and what a decade building without a plan across New York, Santiago, and Germany taught her about entrepreneurship.",
    href: "/blog/iliana-alvarado-ensyx-it-governance-ai-mexico",
  },
  {
    title: "Frances Pratt: From the Ritz Carlton to $18M Exit — The Author of More Sales Less Marketing on Why Founders Who Hate Selling Are Doing It Wrong",
    category: "Growth",
    readTime: "13 min read",
    excerpt:
      "Melbourne sales consultant and author Frances Pratt on the Wizard of Oz sales framework, why sales always comes before marketing, and what firing a $2M bully client taught her about building on your own terms.",
    href: "/blog/frances-pratt-more-sales-less-marketing",
  },
  {
    title: "Steve Ramona: The Servant's Heart Business Philosophy That Turned a Gym Front Desk Into Millions",
    category: "Growth",
    readTime: "12 min read",
    excerpt:
      "Podcaster and entrepreneur Steve Ramona on the ASLA networking principle (Ask, Shut Up, Listen Actively, Ask Again) and how 20 years behind a health club front desk built the network that launched a restaurant, a recycling empire, and a 31,000-subscriber podcast.",
    href: "/blog/steve-ramona-servant-heart-podcast-networking",
  },
  {
    title: "Sharon Gai: From Alibaba Head of Global Accounts to International Keynote Speaker on the Future of AI and Work",
    category: "Growth",
    readTime: "13 min read",
    excerpt:
      "International keynote speaker and former Alibaba Head of Global Accounts Sharon Gai on the night AI changed everything at Double Eleven, the busy bee to beekeeper framework, and why documentation beats content creation for founders building a personal brand.",
    href: "/blog/sharon-gai-keynote-speaker-alibaba-ai",
  },
  {
    title: "Chris Yeh: The Co-Author of Blitzscaling on Winning Winner-Take-Most Markets and Building Your Tribe",
    category: "Growth",
    readTime: "14 min read",
    excerpt:
      "Blitzscaling co-author and Blitzscaling Ventures partner Chris Yeh on why the AI boom is bigger than the internet, how AI amplifies the skilled more than the unskilled, and the tribe-building philosophy that defines Silicon Valley's greatest wins.",
    href: "/blog/chris-yeh-blitzscaling-reid-hoffman",
  },
  {
    title: "Chris Tsakalakis: How the StubHub CEO Grew Ticket Sales From $400M to $3.2B in Eight Years",
    category: "Growth",
    readTime: "14 min read",
    excerpt:
      "Former StubHub President & CEO Chris Tsakalakis on the interactive seat map flywheel, flipping from 80% physical to 80% electronic delivery, and why the best money a founder can raise is revenue from customers.",
    href: "/blog/chris-tsakalakis-stubhub-ceo-marketplace",
  },
  {
    title: "Russell Breuer: From Studio Apartment to Nine-Figure Pet Health Empire With Spot and Tango",
    category: "Growth",
    readTime: "12 min read",
    excerpt:
      "Spot and Tango founder Russell Breuer on cooking dog food in a NYC studio apartment, scaling Unkibble from $2M to $20M in six months, and building his own manufacturing facility in Allentown, PA.",
    href: "/blog/russell-breuer-spot-tango-pet-food-founder",
  },
  {
    title: "The $1M–$3M ARR Gap: What Founder Communities Get Wrong — and What Actually Works",
    category: "Leadership",
    readTime: "8 min read",
    excerpt:
      "At $1M–$3M ARR, the loneliness changes shape. The people around you stop being useful, and most founder communities weren't built for what this stage actually demands. Here's what clears the bar.",
    href: "/blog/one-to-three-million-arr-founder-community",
  },
  {
    title: "Building Products That Scale: Lessons from ClassPass and Mindbody CEO Fritz Lanman",
    category: "Product",
    readTime: "10 min read",
    excerpt:
      "Scaling a product isn't a phase; it's a design decision made early. Fritz Lanman's experience at ClassPass and Mindbody reveals the infrastructure, MVP discipline, and customer-centric principles that separate products that scale from products that rebuild.",
    href: "/guides/building-products-that-scale",
  },
  {
    title: "Micro-Influencer Marketing: The Founder's Playbook for Niche Creator Partnerships",
    category: "Growth",
    readTime: "10 min read",
    excerpt:
      "Micro-influencers consistently outperform mega-influencers on engagement, trust, and cost-per-conversion. How to find the right ones, structure the partnership, price it fairly, and measure what actually matters.",
    href: "/guides/micro-influencer-marketing",
  },
  {
    title: "Bootstrapping vs. Venture Capital: What Real Founders Know",
    category: "Fundraising",
    readTime: "11 min read",
    excerpt:
      "The real tradeoffs between bootstrapping and raising VC: from control and hiring to exit strategy and risk. Insights from founders who've done both, with a side-by-side comparison and a decision framework for your specific situation.",
    href: "/guides/bootstrapping-vs-venture-capital",
  },
  {
    title: "Cap Table Management From Pre-Seed to Series A: The Founder's Equity Playbook",
    category: "Fundraising",
    readTime: "10 min read",
    excerpt:
      "Your cap table is the financial story of every decision you've made, and Series A investors will read it that way. A stage-by-stage guide: authorized shares, founder vesting, option pool sizing, Series A red flags, and a 10-point readiness checklist.",
    href: "/guides/cap-table-management",
  },
  {
    title: "How to Use Customer Feedback to Build a Product People Actually Want: A Founder's Growth Guide",
    category: "Growth",
    readTime: "12 min read",
    excerpt:
      "Intuition gets you started. Customer feedback is what helps you scale. A practical guide on collecting, prioritizing, and acting on what your users are telling you, with the Airbnb, Slack, and Superhuman case studies plus a full tool stack.",
    href: "/guides/how-to-use-customer-feedback-build-product",
  },
  {
    title: "Your Next 100 Customers: The Gildre GTM Playbook (2026 Edition)",
    category: "Growth",
    readTime: "15 min read",
    excerpt:
      "The three highest-performing go-to-market channels Gildre founders used in 2026: high-intent content marketing, precision outbound email, and the strategic partnership flywheel. With exact tools, workflows, and tactics.",
    href: "/guides/next-100-customers-gtm-playbook",
  },
  {
    title: "When to Say No to Customers: How Founders Protect Their Vision, Avoid Burnout, and Build Better Products",
    category: "Product",
    readTime: "8 min read",
    excerpt:
      "Saying yes to every customer feels like momentum. Often it's the opposite. Four signals that a customer isn't right, how to build a screening process, and how to say no without burning the relationship.",
    href: "/guides/when-to-say-no-to-customers",
  },
  {
    title: "How to Get Your First 100 Customers: 8 Proven Strategies for Early-Stage Founders",
    category: "Growth",
    readTime: "11 min read",
    excerpt:
      "No brand, no budget, no traction. Eight strategies that work precisely because of those constraints: from ICP clarity and personal network outreach to picking a single traction channel and building a referral flywheel.",
    href: "/guides/first-100-customers",
  },
  {
    title: "Startup Fundraising Terminology: The Complete Founder's Glossary — From Pre-Seed to Series C",
    category: "Fundraising",
    readTime: "10 min read",
    excerpt:
      "Every fundraising term founders need to know: runway, burn rate, dilution, convertible notes, SAFEs, term sheets, and 20+ more. Plain-language definitions with context on when each term actually matters.",
    href: "/guides/startup-fundraising-terminology",
  },
  {
    title: "John Olson: From Managing a Billion-Dollar Healthcare Budget to E-Commerce, Real Estate, and Executive Coaching",
    category: "Leadership",
    readTime: "10 min read",
    excerpt:
      "John Olson led complex healthcare teams, studied at Wharton, UC Davis, and Stanford, then left to build multiple businesses with his wife. His playbook: invest in peer groups, master delegation, and ask 'who' before 'how.'",
    href: "/blog/john-olson-healthcare-entrepreneur-coaching",
  },
  {
    title: "Elise Madrick on Why Real Transformation Requires Changing Your Entire Context — Not Just Your Habits",
    category: "Mindset",
    readTime: "10 min read",
    excerpt:
      "Elise Madrick left Kellogg executive education to found Cerenè: immersive 108-day transformation programs in Morocco and France. Her insight: you can't become someone new inside the same context that created the old version of you.",
    href: "/blog/elise-madrick-cerene-executive-transformation",
  },
  {
    title: "Ryan Hughes: Why a Google and Snapchat Engineer Left Big Tech to Build Fan Pier Labs",
    category: "Product",
    readTime: "9 min read",
    excerpt:
      "Ryan Hughes worked inside Google and Snapchat before founding Fan Pier Labs, an AI-driven software consulting firm for startups. He shares what big tech teaches you, and what it can't, on the Start to Scale Podcast.",
    href: "/blog/ryan-hughes-google-snapchat-fan-pier-labs",
  },
  {
    title: "Equity Dilution Explained: How Much to Give Away at Each Funding Round — With Real Numbers and Benchmarks",
    category: "Fundraising",
    readTime: "10 min read",
    excerpt:
      "How much equity do founders actually give away at pre-seed, seed, Series A, B, and beyond? Benchmarks, a worked dilution table, the Facebook case study, and five strategies to protect your ownership without killing your growth.",
    href: "/guides/equity-dilution-explained",
  },
  {
    title: "Startup Equity 101: The Complete Founder's Guide to Splitting Shares, Vesting, and Managing Your Cap Table",
    category: "Fundraising",
    readTime: "12 min read",
    excerpt:
      "How to split founder equity fairly, structure employee stock options, survive investor dilution, and avoid the cap table mistakes that haunt founders for years, with benchmarks, tables, and worked examples.",
    href: "/guides/startup-equity-101",
  },
  {
    title: "Armando Vera Carvajal: How a First-Generation Mexican Immigrant Built Hangtight After a Journey Through the Amazon",
    category: "Mindset",
    readTime: "12 min read",
    excerpt:
      "His parents gave up careers in Mexico for the American Dream. Armando sold cheesecakes door-to-door, studied in Paris and Singapore, trekked into the Peruvian Amazon, then came home and built an AI startup that acquired its competition.",
    href: "/blog/armando-vera-carvajal-hangtight-amazon",
  },
  {
    title: "John Lionberger: From Broadway Technician to Electrical Engineer to Pro Racer — Building a Half-Billion-Dollar Business Along the Way",
    category: "Operations",
    readTime: "10 min read",
    excerpt:
      "Theater. Engineering. A $500M consulting firm. Valvoline franchises. An ESOP. An IPO. And still racing competitively on weekends; John Lionberger's career refuses to stay in a single lane.",
    href: "/blog/john-lionberger-broadway-engineer-racing",
  },
  {
    title: "The Founder's Playbook for Building a High-Performing SDR Team — From First Hire to Hypergrowth",
    category: "Operations",
    readTime: "11 min read",
    excerpt:
      "A failed SDR hire costs $27K–$48K before you count the pipeline never built. The hiring framework (learning agility, resilience, curiosity), the training split most teams get backwards, the metrics that matter, and the daily rhythm that compounds.",
    href: "/guides/building-high-performing-sdr-team",
  },
  {
    title: "Pre-Seed Fundraising: The 7-Step Playbook for First-Time Founders Raising Before They Have Traction",
    category: "Fundraising",
    readTime: "14 min read",
    excerpt:
      "How to raise your first pre-seed round: from defining your goals and building your narrative to targeting the right investors, perfecting your deck, and closing the deal. Includes instrument comparison, pitch deck breakdown, and objection handling.",
    href: "/guides/pre-seed-fundraising-playbook",
  },
  {
    title: "Chris Riklin: How a Decade in Political Tech Led Him to Co-Found Topline — a Meritocratic Marketplace Disrupting Professional Services",
    category: "Product",
    readTime: "9 min read",
    excerpt:
      "Chris Riklin spent 10+ years at NationBuilder watching talented professionals lose opportunities to outdated hiring gatekeepers. So he left to co-found Topline: a frictionless marketplace where the best professionals win on merit, not connections.",
    href: "/blog/chris-riklin-topline-professional-marketplace",
  },
  {
    title: "Luke Ashenbrand: From Princeton Division I Football to Startup Entrepreneur After a Career-Ending Concussion",
    category: "Leadership",
    readTime: "8 min read",
    excerpt:
      "Princeton lineman Luke Ashenbrand lost his football career to a traumatic concussion, spent 15 days in a dark room recovering, then channeled the setback into startup consulting and entrepreneurship.",
    href: "/blog/luke-ashenbrand-princeton-football-startup",
  },
  {
    title: "Fritz Lanman: How a Microsoft Exec Took ClassPass to $285M Unicorn Status",
    category: "Leadership",
    readTime: "15 min read",
    excerpt:
      "ClassPass CEO Fritz Lanman on investing $240M into Facebook at Microsoft, losing 70 lbs on his own product, and the unconventional path to building a billion-dollar company.",
    href: "/blog/fritz-lanman-classpass-microsoft-unicorn",
  },
  {
    title: "Robyn Hobson: From Cape Town Startup to US CMO — A Global Marketing Career Built on Grit",
    category: "Leadership",
    readTime: "8 min read",
    excerpt:
      "From growing Woolworths South Africa to 500K fans to marketing Sprinter vans: Robyn Hobson on 13 years of marketing across Africa, China, and the US and what it actually takes to build a global career.",
    href: "/blog/robyn-hobson-cape-town-to-us-cmo",
  },
  {
    title: "From NASA Engineer to Y Combinator Founder: Building an Open-Source AI Company After Working on Mars Rovers",
    category: "Product",
    readTime: "11 min read",
    excerpt:
      "From Louisiana's Cancer Alley to NASA's Curiosity mission to founding ChatOpenSource through Y Combinator: one of the most unconventional founder paths you'll read about.",
    href: "/blog/nasa-engineer-y-combinator-chatopensource",
  },
  {
    title: "Alex Bean: How the Co-Founder of Divvy Sold to Bill.com and Moved Into Venture Capital",
    category: "Fundraising",
    readTime: "9 min read",
    excerpt:
      "Divvy co-founder Alex Bean on selling before the product was built, combining a credit card with expense software to disrupt fintech, and what he looks for now as a VC at Tandem Invest.",
    href: "/blog/alex-bean-divvy-billcom-acquisition",
  },
  {
    title: "Aytekin Tank: How He Bootstrapped Jotform to 25 Million Users Without VC Funding",
    category: "Growth",
    readTime: "12 min read",
    excerpt:
      "Jotform CEO Aytekin Tank on the 50/50 rule, competing with Google Forms, and why bootstrapping gave him the freedom to build a 600-person company on his own timeline.",
    href: "/blog/aytekin-tank-bootstrapped-jotform-no-vc",
  },
  {
    title: "James Corwin: How a Montana Wildlife Artist Built Corwin Galleries into a Thriving Business",
    category: "Leadership",
    readTime: "10 min read",
    excerpt:
      "From selling $20 miniature paintings at farmers markets to owning galleries: wildlife artist James Corwin on building a creative business with no blueprint and no shortcuts.",
    href: "/blog/james-corwin-wildlife-artist-corwin-galleries",
  },
  {
    title: "How to Close Your First 10 Customers (Without a Sales Team)",
    category: "Growth",
    readTime: "6 min read",
    excerpt:
      "The frameworks Gildre founders use to get from zero to traction: before you have a pipeline, a playbook, or a sales hire.",
    href: "https://gildre-for-founders.beehiiv.com/",
  },
  {
    title: "The Founder's Guide to Delegating Without Losing Control",
    category: "Operations",
    readTime: "8 min read",
    excerpt:
      "Delegation doesn't mean disappearing. Here's how to hand off work while staying on top of what matters.",
    href: "https://gildre-for-founders.beehiiv.com/",
  },
  {
    title: "What VCs Actually Look for in a Pre-Seed Deck",
    category: "Fundraising",
    readTime: "7 min read",
    excerpt:
      "We talked to 12 investors about what makes them move fast on a deal, and what immediately kills interest.",
    href: "https://gildre-for-founders.beehiiv.com/",
  },
  {
    title: "Building Company Culture Before You Have 10 Employees",
    category: "Leadership",
    readTime: "5 min read",
    excerpt:
      "Culture gets set in the first 10 hires whether you intend it or not. Here's how to be intentional about it.",
    href: "https://gildre-for-founders.beehiiv.com/",
  },
  {
    title: "The Burnout Pattern No One Warns You About",
    category: "Mindset",
    readTime: "4 min read",
    excerpt:
      "It doesn't look like exhaustion. It looks like productivity, until the day it doesn't.",
    href: "https://gildre-for-founders.beehiiv.com/",
  },
  {
    title: "How to Validate a B2B SaaS Idea in 30 Days",
    category: "Product",
    readTime: "9 min read",
    excerpt:
      "A step-by-step framework for getting signal from the market before you write a single line of code.",
    href: "https://gildre-for-founders.beehiiv.com/",
  },
];

const categoryColor: Record<string, string> = {
  Growth: "#5B7FA6",
  Operations: "#C9A96E",
  Fundraising: "#A67B5B",
  Leadership: "#6B8A6F",
  Mindset: "#7B6FA6",
  Product: "#5B9AA6",
};

export default function ContentPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const visibleArticles = activeCategory
    ? featured.filter((a) => a.category === activeCategory)
    : featured;

  function toggleCategory(label: string) {
    setActiveCategory((prev) => (prev === label ? null : label));
    document.getElementById("articles")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 pb-20 pt-32"
        style={{ background: "linear-gradient(160deg, #080e1a 0%, #1C2744 55%, #0a1020 100%)" }}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #C9A96E 0%, transparent 65%)" }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            Founder Content
          </p>
          <h1
            className="mt-4 text-[clamp(2.4rem,5.5vw,4rem)] font-bold leading-[1.08] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Tactical Content for{" "}
            <span style={{ color: "#C9A96E" }}>Founders Who Execute</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            Blogs, guides, and playbooks built for founders at every stage: from your first customers to your first exit.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://gildre-for-founders.beehiiv.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-3.5 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
            >
              Subscribe to the Newsletter →
            </a>
            <a
              href="#articles"
              className="rounded-full px-8 py-3.5 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)" }}>
              Browse Articles
            </a>
          </div>
        </div>
      </section>

      {/* ── Categories ───────────────────────────────────────────────── */}
      <section className="px-6 py-16" style={{ backgroundColor: "#080e1a" }}>
        <div className="mx-auto max-w-6xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-center" style={{ color: "#C9A96E" }}>
            Browse by Topic
          </p>
          <h2
            className="mt-3 text-center text-[1.75rem] font-bold text-white sm:text-[2.25rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Find What You Need Right Now
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.label;
              const color = categoryColor[cat.label] ?? "#C9A96E";
              return (
                <button
                  key={cat.slug}
                  onClick={() => toggleCategory(cat.label)}
                  className="group flex flex-col items-center gap-3 rounded-2xl p-5 text-center transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: isActive ? `${color}18` : "rgba(255,255,255,0.02)",
                    border: isActive ? `1.5px solid ${color}` : "1px solid rgba(255,255,255,0.07)",
                    cursor: "pointer",
                  }}
                >
                  <span className="text-3xl">{cat.icon}</span>
                  <span
                    className="text-sm font-semibold transition-colors duration-150"
                    style={{ color: isActive ? color : "#fff" }}
                  >
                    {cat.label}
                  </span>
                  <span className="text-[0.68rem] leading-snug" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {cat.description}
                  </span>
                  {isActive && (
                    <span
                      className="text-[0.58rem] font-bold uppercase tracking-widest"
                      style={{ color }}
                    >
                      ✕ clear
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Featured Articles ─────────────────────────────────────────── */}
      <section id="articles" className="px-6 py-16" style={{ backgroundColor: "#0f1524" }}>
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
                {activeCategory ? activeCategory : "Featured"}
              </p>
              <h2
                className="mt-3 text-[1.75rem] font-bold text-white sm:text-[2.25rem]"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                {activeCategory ? `${activeCategory} Articles` : "Start Here"}
              </h2>
            </div>
            {activeCategory && (
              <button
                onClick={() => setActiveCategory(null)}
                className="rounded-full px-4 py-2 text-xs font-semibold transition-opacity hover:opacity-80"
                style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)" }}
              >
                ← Show all articles
              </button>
            )}
          </div>

          {visibleArticles.length === 0 && (
            <div className="mt-12 text-center py-16" style={{ color: "rgba(255,255,255,0.35)" }}>
              <p className="text-lg">No articles yet in this category.</p>
              <p className="text-sm mt-2">More coming soon; subscribe to the newsletter to get notified.</p>
            </div>
          )}

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleArticles.map((article) => {
              const isExternal = article.href.startsWith("http");
              return (
              <a
                key={article.title}
                href={article.href}
                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex flex-col rounded-2xl p-7 transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#0a1020",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
               target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="rounded-full px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-widest"
                    style={{
                      backgroundColor: `${categoryColor[article.category] ?? "#C9A96E"}22`,
                      color: categoryColor[article.category] ?? "#C9A96E",
                    }}
                  >
                    {article.category}
                  </span>
                  <span className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.3)" }}>
                    {article.readTime}
                  </span>
                </div>

                <h3
                  className="text-base font-bold leading-snug text-white group-hover:text-[#C9A96E] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {article.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {article.excerpt}
                </p>

                <div
                  className="mt-5 flex items-center gap-1 text-xs font-semibold transition-colors duration-200"
                  style={{ color: "#C9A96E" }}
                >
                  Read article
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="ml-0.5 group-hover:translate-x-0.5 transition-transform duration-150">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </a>
              );
            })}
          </div>

          {/* More content CTA */}
          <div className="mt-10 text-center">
            <a
              href="https://gildre-for-founders.beehiiv.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ border: "1px solid rgba(201,169,110,0.3)", color: "#C9A96E" }}
            >
              See all articles in the newsletter →
            </a>
          </div>
        </div>
      </section>

      {/* ── Newsletter CTA ────────────────────────────────────────────── */}
      <section
        className="px-6 py-20 text-center"
        style={{ backgroundColor: "#1C2744" }}
      >
        <div className="mx-auto max-w-2xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            Stay in the Loop
          </p>
          <h2
            className="mt-4 text-[2rem] font-bold leading-tight text-white sm:text-[2.75rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            New content drops every week.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            Subscribe to The Essential Founder Newsletter and get tactical insights delivered directly to your inbox, no fluff, no filler.
          </p>
          <a
            href="https://gildre-for-founders.beehiiv.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-full px-10 py-4 text-sm font-bold transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
          >
            Subscribe Free →
          </a>
        </div>
      </section>

      {/* ── Minimal footer ────────────────────────────────────────────── */}
      <div
        className="px-6 py-8 text-center text-[0.7rem] text-zinc-600"
        style={{ backgroundColor: "#080e1a", borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <p>
          &copy; {new Date().getFullYear()} Gildre, LLC. All rights reserved.{" "}
          <a href="/privacy" className="underline underline-offset-2 hover:text-zinc-400 transition-colors">
            Privacy Policy
          </a>
          {" · "}
          <a href="/" className="underline underline-offset-2 hover:text-zinc-400 transition-colors">
            Back to Gildre.com
          </a>
        </p>
      </div>

    </div>
  );
}
