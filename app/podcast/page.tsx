/**
 * HOW TO ADD A NEW EPISODE
 * ─────────────────────────────────────────────────────────────────────────────
 * 1. Copy any episode object from the `episodes` array below.
 * 2. Paste it at the TOP of the array (newest first).
 * 3. Fill in: number, title, guest, role, date, duration, description,
 *    spotifyUrl, appleUrl, and photo (or leave null for initials fallback).
 * 4. For the description, paste the transcript into Claude Code with:
 *      "Summarize this podcast transcript in 2–3 sentences for the Gildre
 *       website episode card. Focus on the guest's key insight or story."
 *    Then paste the output into the description field.
 * 5. Add the guest photo to /public/images/<firstname-lastname>-headshot.webp
 *    (or .jpg/.jpeg — either works).
 * 6. git add . && git commit -m "add ep <N>: <guest name>" && git push
 *    → Vercel auto-deploys in ~30 seconds.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import Image from "next/image";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/podcast" },
  title: "Start to Scale Podcast | Gildre — Founders Who've Done It",
  description:
    "Start to Scale is Gildre's founder podcast. Real conversations with founders who have raised capital, scaled companies, and learned what actually works.",
  openGraph: {
    title: "Start to Scale Podcast | Gildre",
    description:
      "Real conversations with founders who have scaled companies, raised capital, and know what actually works. New episodes every month.",
    url: "https://www.gildre.com/podcast",
    siteName: "Gildre",
    type: "website",
    images: [{ url: "https://www.gildre.com/og-home.png", width: 1200, height: 630, alt: "Start to Scale Podcast by Gildre" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Start to Scale Podcast | Gildre",
    description:
      "Real conversations with founders who have scaled, raised capital, and know what actually works.",
  },
};

/* ─── Platform links ─────────────────────────────────────────────── */
const platforms = [
  {
    name: "Spotify",
    href: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
  {
    name: "Apple Podcasts",
    href: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5a7.5 7.5 0 11-.001 15.001A7.5 7.5 0 0112 4.5zm0 2.25a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5zm0 2.25a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-.75 4.5h1.5v3h-1.5v-3z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@GildreforFounders",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

/* ─── Episode data ───────────────────────────────────────────────────
   Add new episodes at the TOP. All fields required except photo
   (leave null for initials fallback) and appleUrl/spotifyUrl
   (leave null if not yet published on that platform).
─────────────────────────────────────────────────────────────────────── */
const episodes = [
  {
    number: 57,
    title: "From COVID Layoff to Shark Tank: Nelson Brooks on Building Cabana Boys",
    guest: "Nelson Brooks",
    role: "Founder & CEO, Cabana Boys Events",
    date: "Aug 2026",
    duration: "45 min",
    description:
      "Nelson Brooks spotted an untapped market at a bachelorette party, launched Cabana Boys Events in August 2020 during COVID, scaled to 10 US markets under 6 brands, and secured a Shark Tank deal with investor Kendra Scott. He breaks down why charisma, not appearance, is the only thing that scales in hospitality.",
    photo: "/images/nelson-brooks-headshot.webp",
    initials: "NB",
    color: "#3B9BC9",
    articleUrl: "/blog/nelson-brooks-cabana-boys-shark-tank-founder",
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 56,
    title: "Dropping Out, $250M Raised, and the Fundraise That Almost Killed Cents",
    guest: "Alex Jekowski",
    role: "Founder & CEO, Cents",
    date: "Jul 2026",
    duration: "45 min",
    description:
      "Alex Jekowski left college sophomore year, exited his first startup, then stumbled into laundromats and built Cents into a vertical SaaS platform that raised nearly $250M including a $140M Series C. He shares the fundraise that nearly broke him and why betting on hardware when investors said no became a lasting competitive moat.",
    photo: "/images/alex-jekowski-headshot.webp",
    initials: "AJ",
    color: "#C9703B",
    articleUrl: "/blog/alex-jekowski-cents-laundromat-tech-vertical-saas",
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 55,
    title: "From Two Chairs to PE Exit: Dr. Michael Filosi's Dental Playbook",
    guest: "Dr. Michael Filosi",
    role: "Exited Founder, Fullarton Park Dental",
    date: "Jul 2026",
    duration: "45 min",
    description:
      "Dr. Michael Filosi bought a run-down two-chair dental practice nobody wanted and scaled it into the largest clinic in Adelaide before a private equity exit with four firms competing to acquire. He shares his hiring strategy, a flawless Google review program, and why he walked away at 42 when the reward of building disappeared.",
    photo: "/images/dr-michael-filosi-headshot.jpeg",
    initials: "MF",
    color: "#3B6CC9",
    articleUrl: "/blog/dr-michael-filosi-fullarton-park-dental-adelaide",
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 54,
    title: "AI That Asks Instead of Tells: Building solvee After Bosch",
    guest: "Christof Gomez Mannfeld",
    role: "Founder, solvee",
    date: "Jul 2026",
    duration: "45 min",
    description:
      "Christof Gomez Mannfeld spent seven years at Bosch in automotive machine learning, was let go, then moved his family to southern Spain to build solvee — an AI accelerator that learns a founder's specific business through 43 structured steps. He makes the case for AI that interrogates rather than hallucinates.",
    photo: "/images/christof-gomez-manfeld-headshot.jpeg",
    initials: "CM",
    color: "#9B3BC9",
    articleUrl: "/blog/christof-gomez-mannfeld-solvee-ai-business-coach",
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 53,
    title: "Olympic Judo to 100+ Investments: Florian Kemmerich on Vocation",
    guest: "Florian Kemmerich",
    role: "Founder, Vocating AI · Impact Investor",
    date: "Jul 2026",
    duration: "45 min",
    description:
      "Florian Kemmerich was on track for the Barcelona Olympics in judo, spent 15 years in corporate healthcare, then had a single coaching session at 33 that triggered a pivot to impact investing across 100+ companies in 30+ countries. He built Vocating AI to help millions of young people find their vocation before AI eliminates the entry-level jobs that used to teach it.",
    photo: "/images/florian-kemmerich-headshot.jpeg",
    initials: "FK",
    color: "#C93B8E",
    articleUrl: "/blog/florian-kemmerich-vocating-ai-impact-investor",
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 52,
    title: "The Hidden Power of Challenging Yourself Every Day as an Entrepreneur",
    guest: "Cody Graham",
    role: "COO, SoGo",
    date: "Jul 2026",
    duration: "46 min",
    description:
      "Cody walks through the mindset shifts required to move from corporate operator to startup builder, covering AI integration, building community-driven products, and why the best founders stay deliberately uncomfortable.",
    photo: "/images/cody-graham-headshot.jpeg",
    initials: "CG",
    color: "#3B6CC9",
    articleUrl: "/blog/cody-graham-sogo-restaurant-app-chicago",
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 51,
    title: "How Asking Questions With the ASLA Principle Can Double Your Income",
    guest: "Steve Ramona",
    role: "Founder & Podcast Host",
    date: "May 2026",
    duration: "54 min",
    description:
      "Steve breaks down his ASLA framework: Ask, Listen, Learn, Act — and demonstrates how authentic networking can turn a casual conversation into a long-term business relationship. One of the most practical episodes on relationship capital we've recorded.",
    photo: "/images/steve-ramona-headshot.webp",
    initials: "SR",
    color: "#C97B3B",
    articleUrl: "/blog/steve-ramona-servant-heart-podcast-networking",
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 50,
    title: "How Traveling and Odd Jobs Shaped Entrepreneurial Success",
    guest: "Iliana Alvarado",
    role: "Founder, XPERTEKIT.Inc",
    date: "Mar 2026",
    duration: "46 min",
    description:
      "Iliana built a tech venture across three countries after a career defined by embracing the unpredictable, from odd jobs to international roles. She makes a compelling case that cultural agility is the most underrated founder skill.",
    photo: "/images/iliana-alvarado-headshot.jpeg",
    initials: "IA",
    color: "#3BC97B",
    articleUrl: "/blog/iliana-alvarado-ensyx-it-governance-ai-mexico",
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 49,
    title: "Why Sharing Your Failures Is the Ultimate Trust Builder Online",
    guest: "Sharon Gai",
    role: "Former Alibaba Executive & Keynote Speaker",
    date: "Feb 2026",
    duration: "43 min",
    description:
      "Sharon went from leading Alibaba's global growth to building her own personal brand, and discovered that documenting failures outperforms polished success stories. She shares the counterintuitive rules of digital presence and why AI is the great equalizer for solo founders.",
    photo: "/images/sharon-gai-headshot.jpg",
    initials: "SG",
    color: "#9B3BC9",
    articleUrl: "/blog/sharon-gai-keynote-speaker-alibaba-ai",
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 48,
    title: "From Apartment Kitchen to 9-Figure Pet Food Brand: The Spot & Tango Story",
    guest: "Russell Breuer",
    role: "Founder, Spot & Tango",
    date: "Jan 2026",
    duration: "38 min",
    description:
      "Russell left management consulting to cook dog food in his apartment. Nine figures later, Spot & Tango is one of the fastest-growing DTC pet brands in the country. He breaks down the direct-to-consumer playbook and the bet on personalized nutrition that changed everything.",
    photo: "/images/russell-breuer-headshot.webp",
    initials: "RB",
    color: "#C93B3B",
    articleUrl: "/blog/russell-breuer-spot-tango-pet-food-founder",
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 47,
    title: "From Bahamas to Yale: Gadareth Higgs' Journey",
    guest: "Gadareth Higgs",
    role: "Investment Analyst, Grander",
    date: "Dec 2025",
    duration: "43 min",
    description:
      "Gadareth went from the Bahamas to Yale to the front lines of life sciences investing, and shares how he evaluates early-stage biomedical companies, why continuous improvement is his operating system, and how AI is reshaping the due diligence process.",
    photo: null,
    initials: "GH",
    color: "#3B9BC9",
    articleUrl: null,
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 46,
    title: "From Track to Tech: Robie Webster Jr.'s Entrepreneurial Leap",
    guest: "Robie Webster Jr.",
    role: "Founder, Mtrc",
    date: "Nov 2025",
    duration: "46 min",
    description:
      "Former Division I athlete Robie Webster Jr. turned the discipline of competitive sport into a fitness technology company. He talks about finding a co-founder, the grit it takes to build without a safety net, and why learning never stops for a first-time founder.",
    photo: null,
    initials: "RW",
    color: "#C9A93B",
    articleUrl: null,
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 45,
    title: "From StubHub to AI: Chris Tsakalakis on Innovation",
    guest: "Chris Tsakalakis",
    role: "Former CEO, StubHub · Venture Partner, Starhawk",
    date: "Oct 2025",
    duration: "49 min",
    description:
      "Chris ran one of the most recognizable B2C marketplaces in the world before pivoting to venture. He traces the lessons from Bain to StubHub, the aggressive marketing bets that paid off, and why he believes AI's impact on business will be bigger than the internet.",
    photo: "/images/chris-tsakalakis-headshot.jpeg",
    initials: "CT",
    color: "#3BC97B",
    articleUrl: "/blog/chris-tsakalakis-stubhub-ceo-marketplace",
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 44,
    title: "Blitzscaling and Beyond: Chris Yeh's Journey",
    guest: "Chris Yeh",
    role: "Co-Author, Blitzscaling · Investor & Speaker",
    date: "Sep 2025",
    duration: "46 min",
    description:
      "Chris co-wrote the book on blitzscaling with Reid Hoffman, and in this episode he goes deeper on what actually separates companies that scale from those that plateau. He covers conviction, lifelong learning, and building the kind of collaborative network that compounds over decades.",
    photo: "/images/chris-yeh-headshot.webp",
    initials: "CY",
    color: "#C9A96E",
    articleUrl: "/blog/chris-yeh-blitzscaling-reid-hoffman",
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 43,
    title: "The Entrepreneurial Odyssey of Andrew Ackerman",
    guest: "Andrew Ackerman",
    role: "Two-Time Exit Founder & Author",
    date: "Sep 2025",
    duration: "35 min",
    description:
      "Andrew has navigated two startup exits and written a book about it. He shares the resilience frameworks that got him through the hard parts, the mental models he wishes he'd had earlier, and what he tells first-time founders who are just starting to feel the pressure.",
    photo: null,
    initials: "AA",
    color: "#3B6CC9",
    articleUrl: null,
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 42,
    title: "Overcoming the Fear of Selling: Insights from Frances Pratt",
    guest: "Frances Pratt",
    role: "Founder & CEO, Metisan",
    date: "Aug 2025",
    duration: "44 min",
    description:
      "Frances built a sales consulting firm for founders who are brilliant at their craft but uncomfortable in the room. She explains why most selling fails at listening, how storytelling closes deals that decks can't, and the community-building strategies that create revenue without cold outreach.",
    photo: "/images/frances-pratt-headshot.jpeg",
    initials: "FP",
    color: "#9B3BC9",
    articleUrl: "/blog/frances-pratt-more-sales-less-marketing",
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 41,
    title: "From Microsoft to Startup: Aya Kikimova's Journey",
    guest: "Aya Kikimova",
    role: "Founder & Former Microsoft",
    date: "Jul 2025",
    duration: "39 min",
    description:
      "Aya left the stability of Microsoft to build from scratch, and she's honest about how different the two worlds are. She maps the psychological and operational challenges of the transition, the obstacles she didn't see coming, and how she found her footing as a first-time solo founder.",
    photo: null,
    initials: "AK",
    color: "#C93B6C",
    articleUrl: null,
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 40,
    title: "From Cyclist to Coach: Michael Ceely's Performance Framework",
    guest: "Michael Ceely",
    role: "Executive Coach & Former Pro Cyclist",
    date: "Jul 2025",
    duration: "42 min",
    description:
      "Michael Ceely is a former professional cyclist who discovered that the mental frameworks behind winning races apply directly to running a business. He walks through the performance methodology he developed coaching executives and why most leaders are missing the discipline that elite athletes train daily.",
    photo: null,
    initials: "MC",
    color: "#3BC97B",
    articleUrl: null,
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 39,
    title: "Why Immersive Transformation Beats Habit-Stacking: Elise Madrick on Cerenè",
    guest: "Elise Madrick",
    role: "Founder & CEO, Cerenè",
    date: "Jun 2025",
    duration: "43 min",
    description:
      "Elise Madrick left executive education at Kellogg after her own international journey revealed the difference between incremental change and genuine transformation. She founded Cerenè, a 108-day immersive program in Morocco and France, recognizing that no amount of habit-stacking at home disrupts all four contexts of change simultaneously.",
    photo: "/images/elise-madrick-headshot.webp",
    initials: "EM",
    color: "#C9A96E",
    articleUrl: "/blog/elise-madrick-cerene-executive-transformation",
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 38,
    title: "Giving Startups Enterprise-Grade Financial Modeling: Logan Burchett",
    guest: "Logan Burchett",
    role: "Founder & CEO, Forecastr",
    date: "Jun 2025",
    duration: "43 min",
    description:
      "Logan Burchett built Forecastr to give early-stage startups the financial modeling tools that were previously only available inside big companies. He shares how better financial visibility changes the decisions founders make and what he learned about building B2B software for a customer segment that hates spreadsheets.",
    photo: null,
    initials: "LB",
    color: "#C93B3B",
    articleUrl: null,
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 37,
    title: "From Stereo to Success: Aaron James Yeager's Creative Founder Path",
    guest: "Aaron James Yeager",
    role: "Founder & Creative Entrepreneur",
    date: "May 2025",
    duration: "44 min",
    description:
      "Aaron James Yeager built a business at the intersection of music, lifestyle, and entrepreneurship, using creative platforms as a launchpad for brand building. He shares the unconventional path that got him there and what he learned about building at the edge of culture and commerce.",
    photo: null,
    initials: "AY",
    color: "#3B9BC9",
    articleUrl: null,
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 36,
    title: "Selling Divvy Before It Was Built: Alex Bean's Fintech Playbook",
    guest: "Alex Bean",
    role: "Co-Founder, Divvy · Tandem Invest",
    date: "Apr 2025",
    duration: "41 min",
    description:
      "Alex Bean co-founded Divvy, combined corporate cards with expense management software, and sold it to Bill.com in one of fintech's landmark acquisitions before the product was fully built. He now backs early-stage founders at Tandem Invest, applying what he learned about conviction, culture, and selling before you're ready.",
    photo: "/images/alex-bean-headshot.webp",
    initials: "AB",
    color: "#C9703B",
    articleUrl: "/blog/alex-bean-divvy-billcom-acquisition",
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 35,
    title: "The Meritocratic Marketplace for Fractional Executives: Chris Riklin",
    guest: "Chris Riklin",
    role: "Co-Founder, Topline",
    date: "Mar 2025",
    duration: "49 min",
    description:
      "Chris Riklin spent over a decade at NationBuilder watching talented professionals lose opportunities to outdated hiring systems, then co-founded Topline, a marketplace where fractional executives win on results, not relationships. He shares how a serendipitous co-founder alignment became the foundation of the company.",
    photo: "/images/chris-riklin-headshot.webp",
    initials: "CR",
    color: "#C97B3B",
    articleUrl: "/blog/chris-riklin-topline-professional-marketplace",
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 34,
    title: "Josh Cain on the Future of Brain-Computer Interfaces",
    guest: "Josh Cain",
    role: "Founder & BCI Researcher",
    date: "Mar 2025",
    duration: "51 min",
    description:
      "Josh Cain is working at the frontier of brain-computer interfaces, one of the most consequential emerging technologies of the next decade. He explains the current state of BCI development, the regulatory landscape, and what founders in adjacent spaces need to understand about where this technology is heading.",
    photo: null,
    initials: "JC",
    color: "#9B3BC9",
    articleUrl: null,
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 33,
    title: "Manifesting Emblem: Luke Ashenbrand Returns",
    guest: "Luke Ashenbrand",
    role: "Founder, Emblem",
    date: "Mar 2025",
    duration: "33 min",
    description:
      "Luke Ashenbrand returns to Start to Scale with an update on Emblem, the company he has been building since his first appearance on episode 3. He shares what has changed, what building has taught him, and how manifesting a business vision into an operating company is harder and more rewarding than he expected.",
    photo: "/images/luke-ashenbrand-headshot.webp",
    initials: "LA",
    color: "#3B6CC9",
    articleUrl: null,
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 32,
    title: "From Corporate to Coaching: Anika Gakovic's Identity Shift",
    guest: "Anika Gakovic",
    role: "Executive Coach & Founder",
    date: "Feb 2025",
    duration: "41 min",
    description:
      "Anika Gakovic made the transition from a structured corporate career to building her own executive coaching practice, helping leaders unlock clarity they couldn't find inside traditional organizations. She shares what the identity shift required, how she built a client base from scratch, and what most corporate executives misunderstand about the founder path.",
    photo: null,
    initials: "AG",
    color: "#C93B8E",
    articleUrl: null,
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 31,
    title: "From Fuzzy to Clear: Orly Zeewy on Building Powerful Startup Brands",
    guest: "Orly Zeewy",
    role: "Brand Strategist & Author",
    date: "Feb 2025",
    duration: "39 min",
    description:
      "Orly Zeewy has spent her career helping early-stage startups move from fuzzy positioning to sharp, differentiated messaging that actually closes deals. She shares the frameworks she uses to get founders to articulate what they do and why it matters, and why so many smart companies fail at the basics of brand.",
    photo: null,
    initials: "OZ",
    color: "#3BC97B",
    articleUrl: null,
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 30,
    title: "Fighting SaaS Sprawl: Sanjay Goel and the NachoNacho Thesis",
    guest: "Sanjay Goel",
    role: "Founder & CEO, NachoNacho",
    date: "Jan 2025",
    duration: "43 min",
    description:
      "Sanjay Goel is the founder and CEO of NachoNacho, a SaaS subscription management platform helping companies discover, track, and optimize the software they already pay for. He walks through the company's founding thesis, the market dynamics driving SaaS sprawl, and what growing a B2B product requires that most founders underestimate.",
    photo: null,
    initials: "SG",
    color: "#C9A96E",
    articleUrl: null,
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 29,
    title: "Google, Snapchat, and Building AI-First at Fan Pier Labs",
    guest: "Ryan Hughes",
    role: "Founder, Fan Pier Labs",
    date: "Jan 2025",
    duration: "25 min",
    description:
      "Ryan Hughes used Northeastern's co-op program to get inside Google and Snapchat before graduating, observing what scale does to engineering speed and what a post-IPO culture shift looks like from inside. He left to found Fan Pier Labs, an AI-driven software consultancy helping early-stage startups build faster.",
    photo: "/images/ryan-hughes-headshot.webp",
    initials: "RH",
    color: "#3B9BC9",
    articleUrl: "/blog/ryan-hughes-google-snapchat-fan-pier-labs",
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 28,
    title: "From Diplomat to Hero-Maker: John Graham's Giraffe Heroes Project",
    guest: "John Graham",
    role: "Founder, The Giraffe Heroes Project",
    date: "Dec 2024",
    duration: "45 min",
    description:
      "John Graham spent decades in diplomatic roles before founding The Giraffe Heroes Project, which identifies and celebrates people who stick their necks out for the common good. He shares what a career in diplomacy teaches you about leadership, courage, and why most organizations fail to reward the people doing the most important work.",
    photo: null,
    initials: "JG",
    color: "#C9703B",
    articleUrl: null,
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 27,
    title: "Building MedTech That Reaches Clinicians: Amit Guruprasad",
    guest: "Amit Guruprasad",
    role: "Founder & CvO, Devan MedTech Solutions",
    date: "Nov 2024",
    duration: "38 min",
    description:
      "Amit Guruprasad is building technology for the healthcare sector with a focus on tools that actually reach clinicians and patients. He shares the unique challenges of selling into healthcare, navigating regulatory environments, and building a company in a sector where the stakes are literally life and death.",
    photo: null,
    initials: "AG",
    color: "#3B6CC9",
    articleUrl: null,
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 26,
    title: "What 1,000 Fundraises Teach You: Nathan Beckord of Foundersuite",
    guest: "Nathan Beckord",
    role: "Founder & CEO, Foundersuite · Fundingstack",
    date: "Oct 2024",
    duration: "42 min",
    description:
      "Nathan Beckord has worked with thousands of founders raising capital through Foundersuite and Fundingstack, observing patterns across successful and unsuccessful fundraises from a rare vantage point. He shares what investors actually respond to, how the fundraising process has evolved, and the one thing most founders skip that costs them the deal.",
    photo: null,
    initials: "NB",
    color: "#9B3BC9",
    articleUrl: null,
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 25,
    title: "25 Million Users, Zero VC: Aytekin Tank on Bootstrapping Jotform",
    guest: "Aytekin Tank",
    role: "Founder & CEO, Jotform",
    date: "Oct 2024",
    duration: "53 min",
    description:
      "Aytekin Tank bootstrapped Jotform from a school computer in Turkey to 25 million users and 600 employees without a single dollar of venture capital, competing directly against Google Forms. He shares his 50/50 product-and-growth rule, why the free tier is a feedback engine, and how long-term thinking beats chasing the next round.",
    photo: "/images/aytekin-tank-headshot.webp",
    initials: "AT",
    color: "#C93B3B",
    articleUrl: "/blog/aytekin-tank-bootstrapped-jotform-no-vc",
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 24,
    title: "Building a Food Brand From Concept to Market: Mike Reilly",
    guest: "Mike Reilly",
    role: "Founder, Poached to Perfection",
    date: "Sep 2024",
    duration: "46 min",
    description:
      "Mike Reilly is the founder of Poached to Perfection, building a focused culinary concept with a clear thesis about where consumer tastes are heading. He shares the realities of building in food and beverage, what it takes to validate a concept before you scale it, and what most founders get wrong about product-market fit in consumer.",
    photo: null,
    initials: "MR",
    color: "#3BC97B",
    articleUrl: null,
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 23,
    title: "Public Speaking and Startup Exit Strategies: John Kennelly",
    guest: "John Kennelly",
    role: "Founder, Speaker & Multi-Exit Operator",
    date: "Sep 2024",
    duration: "49 min",
    description:
      "John Kennelly has been through multiple startup cycles and an exit, giving him a view of the founder journey that spans the early hustle and the negotiation table. He shares frameworks for thinking about exits early, how to command a room when it matters, and the communication skills that separate founders who close from those who don't.",
    photo: null,
    initials: "JK",
    color: "#C9A93B",
    articleUrl: null,
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 22,
    title: "Fueling Success and Overcoming Pressure: Zach Beegal",
    guest: "Zach Beegal",
    role: "Founder & Performance Coach",
    date: "Aug 2024",
    duration: "44 min",
    description:
      "Zach Beegal built his career navigating high-pressure environments and the psychological demands of performance under scrutiny, developing a philosophy around fueling success without burning out. He shares what he has learned about pressure, resilience, and why the mental side of building a company is the last thing most founders invest in until it is the only thing that matters.",
    photo: null,
    initials: "ZB",
    color: "#C97B3B",
    articleUrl: null,
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 21,
    title: "Business Is Blumin: Daniel Blumin's Founder Journey",
    guest: "Daniel Blumin",
    role: "Founder & CEO",
    date: "Jul 2024",
    duration: "53 min",
    description:
      "Daniel Blumin is a founder and operator who shares how he built his company, the strategic decisions that shaped its growth, and the mindset required to run a business that depends on constant iteration and customer feedback. He brings a perspective shaped by both creative instinct and hard-nosed operational thinking.",
    photo: null,
    initials: "DB",
    color: "#3B9BC9",
    articleUrl: null,
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 20,
    title: "Brazil to Portugal, Psychology to Entrepreneurship: Carol Palombini",
    guest: "Carol Palombini",
    role: "Founder & Clinical Psychologist",
    date: "Jul 2024",
    duration: "44 min",
    description:
      "Carol Palombini built her career across two countries and two disciplines, moving from clinical psychology in Brazil to entrepreneurship in Portugal. She shares how her background in psychology informs how she builds, leads, and connects with customers, and what the cross-cultural experience of building in Europe has taught her.",
    photo: null,
    initials: "CP",
    color: "#C93B6C",
    articleUrl: null,
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 19,
    title: "From Teacher to Executive Coach: Brittany Fowler's Transition",
    guest: "Brittany Fowler",
    role: "Executive Coach & Founder",
    date: "Jun 2024",
    duration: "48 min",
    description:
      "Brittany Fowler left a career in education to become an executive coach, discovering that the skills that made her an exceptional teacher, clarity, empathy, and structured feedback, are exactly what leaders need most. She walks through her transition, how she built her coaching practice, and why the best coaches are always the ones who have been in the rooms they are advising.",
    photo: null,
    initials: "BF",
    color: "#9B3BC9",
    articleUrl: null,
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 18,
    title: "What Marketing Actually Is: Andy Karuza on Brand and Growth",
    guest: "Andy Karuza",
    role: "Marketing Leader & Entrepreneur",
    date: "May 2024",
    duration: "41 min",
    description:
      "Andy Karuza is a marketing leader and entrepreneur who has built brand and growth programs for companies at multiple stages, with a track record in both B2B and consumer markets. He shares his philosophy on what marketing actually is, when to invest in brand versus performance, and what he has learned from watching too many startups optimize for the wrong metrics.",
    photo: null,
    initials: "AK",
    color: "#3BC97B",
    articleUrl: null,
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 17,
    title: "Who Not How: John Olson on Running Multiple Businesses at Once",
    guest: "John Olson",
    role: "Entrepreneur & Executive Coach",
    date: "Apr 2024",
    duration: "49 min",
    description:
      "John Olson managed healthcare teams overseeing a billion-dollar budget before leaving to build an e-commerce business, a real estate portfolio, and an executive coaching practice simultaneously. He shares his 'Who Not How' delegation framework and why peer groups consistently deliver the highest ROI of any leadership investment.",
    photo: "/images/john-olson-headshot.webp",
    initials: "JO",
    color: "#C9A96E",
    articleUrl: "/blog/john-olson-healthcare-entrepreneur-coaching",
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 16,
    title: "Backing First-Time Founders: Mike Spidaliere of First Time Founder Capital",
    guest: "Mike Spidaliere",
    role: "CEO, First Time Founder Capital",
    date: "Apr 2024",
    duration: "41 min",
    description:
      "Mike Spidaliere is the CEO of First Time Founder Capital, a fund specifically designed to back first-time founders who lack the track record most investors require. He explains the thesis behind the fund, what he looks for when conventional investor signals are absent, and what he has learned from backing founders at the earliest and most uncertain stage of company building.",
    photo: null,
    initials: "MS",
    color: "#C93B3B",
    articleUrl: null,
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 15,
    title: "Shaping Fintech in Africa: David Adeleke's Story",
    guest: "David Adeleke",
    role: "Founder & Fintech Operator",
    date: "Feb 2024",
    duration: "46 min",
    description:
      "David Adeleke is working at the frontier of fintech in Africa, building infrastructure that serves populations that traditional financial systems have historically excluded. He shares the unique challenges and opportunities of fintech in Africa, what building for a rapidly growing market looks like from the inside, and why the lessons from African fintech apply far beyond the continent.",
    photo: null,
    initials: "DA",
    color: "#3B9BC9",
    articleUrl: null,
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 14,
    title: "From $20 Paintings at Farmers Markets to Wildlife Art Galleries",
    guest: "James Corwin",
    role: "Wildlife Artist & Founder, Corwin Galleries",
    date: "Feb 2024",
    duration: "49 min",
    description:
      "James Corwin grew up in Montana, won an unexpected art scholarship, and spent summers selling miniature paintings at farmers markets before scaling into Corwin Galleries. An African safari redirected his focus to wildlife art, and mastering Facebook ads turned a studio practice into a multi-venue business.",
    photo: "/images/james-corwin-headshot.webp",
    initials: "JC",
    color: "#C9703B",
    articleUrl: "/blog/james-corwin-wildlife-artist-corwin-galleries",
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 13,
    title: "ClassPass, Microsoft, and What It Actually Takes to Hit Unicorn Status",
    guest: "Fritz Lanman",
    role: "CEO, ClassPass & Mindbody",
    date: "Jan 2024",
    duration: "49 min",
    description:
      "Fritz Lanman led Microsoft's $240M strategic investment in Facebook before becoming CEO of ClassPass, raising a $285M Series E and achieving unicorn status. He traces what big tech teaches you about infrastructure, why capital is a tool not a trophy, and the Montana office that became the company's largest.",
    photo: "/images/fritz-lanman-headshot.webp",
    initials: "FL",
    color: "#3B6CC9",
    articleUrl: "/blog/fritz-lanman-classpass-microsoft-unicorn",
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 12,
    title: "From NYC Teacher to Manila Founder: John Ignacio's Story",
    guest: "John Ignacio",
    role: "Founder & Former NYC Teacher",
    date: "Dec 2023",
    duration: "48 min",
    description:
      "John Ignacio left a teaching career in New York City and moved to Manila to build a startup from scratch, navigating a completely new market, culture, and entrepreneurial ecosystem. He shares what the move taught him, the specific advantages of building in Southeast Asia, and how a background in education turned out to be a genuine edge in company building.",
    photo: null,
    initials: "JI",
    color: "#9B3BC9",
    articleUrl: null,
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 11,
    title: "From Education to Entrepreneurship: Sher Downing's Leap",
    guest: "Sher Downing",
    role: "Founder & Former Educator",
    date: "Dec 2023",
    duration: "43 min",
    description:
      "Sher Downing moved from a career in education into entrepreneurship, applying the skills she developed teaching and building programs to the challenges of building a company from scratch. She shares the mindset required to make that transition, what surprised her most about the founder's journey, and what she would do differently if she were starting again.",
    photo: null,
    initials: "SD",
    color: "#C93B8E",
    articleUrl: null,
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 10,
    title: "From NASA Mars Missions to Y Combinator: Chase Brignac Builds ChatOpenSource",
    guest: "Chase Brignac",
    role: "Founder, ChatOpenSource · Y Combinator",
    date: "Nov 2023",
    duration: "50 min",
    description:
      "Chase Brignac grew up in Louisiana's Cancer Alley, worked on NASA's Curiosity and Maven Mars missions, and scaled Deliv from zero to a million deliveries per day before its Target acquisition. He then founded ChatOpenSource through Y Combinator, an open-source enterprise AI alternative built for organizations with strict data privacy requirements.",
    photo: "/images/nasa-founder-headshot.webp",
    initials: "CB",
    color: "#3BC97B",
    articleUrl: "/blog/nasa-engineer-y-combinator-chatopensource",
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 9,
    title: "The Power of Community When You Move to a New Place: Toni Witt",
    guest: "Toni Witt",
    role: "Community Builder & Founder",
    date: "Nov 2023",
    duration: "34 min",
    description:
      "Toni Witt explores what it means to build a life and a network in a completely new place, without the social infrastructure most people take for granted, and how that experience maps directly onto the founder's journey. She shares what intentional community-building looks like and how founders can apply the same principles to build environments where the best people want to stay.",
    photo: null,
    initials: "TW",
    color: "#C9A96E",
    articleUrl: null,
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 8,
    title: "Product Leadership From Silicon Valley to London: Diana Stepner",
    guest: "Diana Stepner",
    role: "Product Leader & Advisor",
    date: "Nov 2023",
    duration: "40 min",
    description:
      "Diana Stepner has spent her career at the intersection of product leadership and organizational design, working across Silicon Valley and London and advising companies on how great products actually get built inside complex teams. She shares what separates product teams that ship from those that debate, and what great product leadership looks like in practice.",
    photo: null,
    initials: "DS",
    color: "#C97B3B",
    articleUrl: null,
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 7,
    title: "Spirituality, Economics, and Technology in Modern India: Ranjodh Singh",
    guest: "Ranjodh Singh",
    role: "Founder & Entrepreneur",
    date: "Oct 2023",
    duration: "59 min",
    description:
      "Ranjodh Singh explores the intersection of spirituality, economics, and technology in modern India, one of the most complex and rapidly changing societies on the planet. He shares how ancient frameworks of meaning interact with modern market forces and what the rest of the world misunderstands about India's development trajectory.",
    photo: null,
    initials: "RS",
    color: "#3B9BC9",
    articleUrl: null,
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 6,
    title: "Bootstrapping vs Fundraising: Melissa Kwan's Honest Take",
    guest: "Melissa Kwan",
    role: "Founder & Bootstrapped Operator",
    date: "Oct 2023",
    duration: "43 min",
    description:
      "Melissa Kwan bootstrapped her business to significant scale without venture capital and has become one of the clearest voices on why raising money is not always the right answer. She breaks down the real tradeoffs between bootstrapping and fundraising, what each approach demands, what it costs, and how to know which path is right for your specific business.",
    photo: null,
    initials: "MK",
    color: "#C93B3B",
    articleUrl: null,
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 5,
    title: "Rejected Twice, Trekked the Amazon, Then Built Hangtight: Armando Vera",
    guest: "Armando Vera Carvajal",
    role: "Co-Founder & CEO, Hangtight",
    date: "Oct 2023",
    duration: "49 min",
    description:
      "Armando Vera Carvajal immigrated from Mexico at four, was rejected twice by UT Austin's business school, studied in Paris and Singapore, trekked the Peruvian Amazon, then built Hangtight, an AI social planning app that acquired a competitor to accelerate growth. He credits his parents' sacrifice as the reason quitting was never an option.",
    photo: "/images/armando-vera-headshot.webp",
    initials: "AV",
    color: "#9B3BC9",
    articleUrl: "/blog/armando-vera-carvajal-hangtight-amazon",
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 4,
    title: "Broadway Stagehand to $500M Engineering Office: John Lionberger",
    guest: "John Lionberger",
    role: "Engineer, Entrepreneur & Pro Racing Driver",
    date: "Oct 2023",
    duration: "58 min",
    description:
      "John Lionberger went from working rock concerts and Broadway productions to electrical engineering, then built a regional consulting office from $0 to nearly $500M in revenue while racing competitively on weekends. He shares lessons from an ESOP transition, a front-row seat to an IPO, and why racing makes you a sharper business operator.",
    photo: "/images/john-lionberger-headshot.webp",
    initials: "JL",
    color: "#C9A93B",
    articleUrl: "/blog/john-lionberger-broadway-engineer-racing",
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 3,
    title: "Princeton Football, a Traumatic Concussion, and Building Anyway",
    guest: "Luke Ashenbrand",
    role: "Startup Consultant & Founder",
    date: "Sep 2023",
    duration: "47 min",
    description:
      "Luke Ashenbrand was a Princeton Division I football lineman whose career ended with a traumatic concussion that left him unconscious for a month. He channeled that setback into startup consulting, applying the same resilience to early-stage ventures and sharing what building Vega during COVID taught him about shipping under pressure.",
    photo: "/images/luke-ashenbrand-headshot.webp",
    initials: "LA",
    color: "#3B6CC9",
    articleUrl: "/blog/luke-ashenbrand-princeton-football-startup",
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 2,
    title: "From Cape Town to VP of Marketing: Robyn Hobson's Global Career",
    guest: "Robyn Hobson",
    role: "VP of Marketing, Remote Vans",
    date: "Sep 2023",
    duration: "38 min",
    description:
      "Robyn Hobson built a 13-year marketing career across South Africa, China, and the US, from mobile tech startup exits to crisis communications at a low-cost airline and growing Woolworths SA to 500,000 social followers. She shares what cross-cultural experience teaches you about brand that no playbook can.",
    photo: "/images/robyn-hobson-headshot.jpg",
    initials: "RH",
    color: "#C93B6C",
    articleUrl: "/blog/robyn-hobson-cape-town-to-us-cmo",
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
  {
    number: 1,
    title: "Welcome to Start to Scale: The Founder's Podcast by Gildre",
    guest: "Taiga Gamell",
    role: "Founder, Gildre",
    date: "Aug 2023",
    duration: "10 min",
    description:
      "Gildre founder Taiga Gamell introduces Start to Scale: the podcast about founders who have done it, raised capital, scaled companies, and learned what actually works. He sets the stage for the conversations ahead and explains why real founder stories told honestly are the most valuable resource an early-stage builder can access.",
    photo: null,
    initials: "TG",
    color: "#C9A96E",
    articleUrl: null,
    spotifyUrl: "https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72",
    appleUrl: "https://podcasts.apple.com/us/podcast/start-to-scale-the-founders-podcast-by-gildre/id1706846585",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "PodcastSeries",
  name: "Start to Scale: The Founder's Podcast by Gildre",
  description:
    "Start to Scale is Gildre's founder interview podcast — real conversations with founders who have scaled companies, raised capital, and know what actually works.",
  url: "https://www.gildre.com/podcast",
  image: "https://www.gildre.com/og-home.png",
  author: { "@type": "Person", name: "Taiga Gamell" },
  publisher: { "@type": "Organization", name: "Gildre", url: "https://www.gildre.com" },
  webFeed: "https://anchor.fm/s/gildre-spotlight/podcast/rss",
};

/* ─── Mic icon ───────────────────────────────────────────────────── */
function MicIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <rect x="9" y="2" width="6" height="11" rx="3" />
      <path d="M5 10a7 7 0 0014 0" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="8" y1="22" x2="16" y2="22" />
    </svg>
  );
}

/* ─── Platform badge ─────────────────────────────────────────────── */
function PlatformBadge({ platform }: { platform: (typeof platforms)[0] }) {
  return (
    <a
      href={platform.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2.5 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 hover:opacity-80"
      style={{
        backgroundColor: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.1)",
        color: "rgba(255,255,255,0.8)",
      }}
    >
      <span style={{ color: "#C9A96E" }}>{platform.icon}</span>
      <span>{platform.name}</span>
    </a>
  );
}

/* ─── Episode card ───────────────────────────────────────────────── */
function EpisodeCard({ ep }: { ep: (typeof episodes)[0] }) {
  const isLatest = ep.number === episodes[0].number;

  return (
    <article
      className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        backgroundColor: "rgba(255,255,255,0.03)",
        border: isLatest ? "1.5px solid rgba(201,169,110,0.4)" : "1.5px solid rgba(255,255,255,0.07)",
        boxShadow: isLatest
          ? "0 0 40px rgba(201,169,110,0.1), 0 8px 32px rgba(0,0,0,0.35)"
          : "0 4px 20px rgba(0,0,0,0.2)",
      }}
    >
      {isLatest && (
        <div
          className="absolute top-4 right-4 rounded-full px-3 py-1 text-[0.58rem] font-bold uppercase tracking-[0.16em] z-10"
          style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
        >
          Latest
        </div>
      )}

      {/* Guest photo */}
      <div className="relative h-48 overflow-hidden" style={{ backgroundColor: ep.color + "22" }}>
        {ep.photo ? (
          <Image
            src={ep.photo}
            alt={ep.guest}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div
              className="flex h-24 w-24 items-center justify-center rounded-full text-2xl font-bold text-white"
              style={{ backgroundColor: ep.color, fontFamily: "var(--font-fraunces)" }}
            >
              {ep.initials}
            </div>
          </div>
        )}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(8,14,26,0.95) 0%, rgba(8,14,26,0.3) 60%, transparent 100%)" }}
        />
        {/* Episode number */}
        <div className="absolute bottom-3 left-4">
          <span
            className="text-[0.6rem] font-bold uppercase tracking-[0.2em]"
            style={{ color: "#C9A96E" }}
          >
            Episode {ep.number}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="mb-3 flex items-center gap-3">
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{ep.date}</span>
          <span className="h-px flex-1" style={{ backgroundColor: "rgba(255,255,255,0.07)" }} />
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{ep.duration}</span>
        </div>

        <h3
          className="mb-1 text-base font-semibold leading-snug text-white"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          {ep.title}
        </h3>

        <p className="mb-1 text-sm font-semibold" style={{ color: "#C9A96E" }}>
          {ep.guest}
        </p>
        <p className="mb-4 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
          {ep.role}
        </p>

        <p className="mb-6 flex-1 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
          {ep.description}
        </p>

        {/* Listen + article links */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {ep.spotifyUrl && (
            <a
              href={ep.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-all duration-200 hover:opacity-80"
              style={{ backgroundColor: "rgba(30,215,96,0.1)", color: "#1ed760", border: "1px solid rgba(30,215,96,0.2)" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              Spotify
            </a>
          )}
          {ep.appleUrl && (
            <a
              href={ep.appleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-all duration-200 hover:opacity-80"
              style={{ backgroundColor: "rgba(250,50,100,0.1)", color: "#fa3264", border: "1px solid rgba(250,50,100,0.2)" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z" />
              </svg>
              Apple
            </a>
          )}
          {ep.articleUrl && (
            <a
              href={ep.articleUrl}
              className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-all duration-200 hover:opacity-80"
              style={{ backgroundColor: "rgba(201,169,110,0.1)", color: "#C9A96E", border: "1px solid rgba(201,169,110,0.25)" }}
             target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              Read Article
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function PodcastPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main style={{ backgroundColor: "#080e1a", minHeight: "100vh" }}>

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section className="relative px-6 pb-16 pt-32 sm:pt-40 overflow-hidden">
          {/* Ambient glow */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 opacity-[0.06]"
            style={{ background: "radial-gradient(ellipse, #C9A96E 0%, transparent 65%)" }}
          />

          <div className="relative mx-auto max-w-3xl text-center">
            {/* Pill */}
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]"
              style={{
                backgroundColor: "rgba(201,169,110,0.1)",
                border: "1px solid rgba(201,169,110,0.25)",
                color: "#C9A96E",
              }}
            >
              <MicIcon />
              <span>Start to Scale</span>
            </div>

            <h1
              className="mb-5 text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.1] text-white"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Founders who&apos;ve{" "}
              <span style={{ color: "#C9A96E" }}>done it</span>.
            </h1>

            <p className="mx-auto mb-10 max-w-lg text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              One founder. One real conversation. 30–50 minutes on what it actually took to build, raise, and scale.
            </p>

            {/* Platform badges */}
            <div className="flex flex-wrap justify-center gap-3">
              {platforms.map((p) => (
                <PlatformBadge key={p.name} platform={p} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Stats bar ─────────────────────────────────────────────── */}
        <section
          className="border-y px-6 py-8"
          style={{ borderColor: "rgba(255,255,255,0.06)", backgroundColor: "rgba(255,255,255,0.02)" }}
        >
          <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-10 sm:gap-16">
            {[
              { stat: "57+", label: "Episodes" },
              { stat: "30–50", label: "Minutes each" },
              { stat: "1", label: "Founder per episode" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p
                  className="text-3xl font-bold"
                  style={{ fontFamily: "var(--font-fraunces)", color: "#C9A96E" }}
                >
                  {item.stat}
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Episodes grid ─────────────────────────────────────────── */}
        <section className="px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex items-end justify-between">
              <div>
                <p
                  className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: "#C9A96E" }}
                >
                  All Episodes
                </p>
                <h2
                  className="text-[1.75rem] font-bold text-white sm:text-[2.25rem]"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  Recent conversations
                </h2>
              </div>
              <a
                href="https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden text-sm font-semibold underline underline-offset-4 transition-opacity hover:opacity-70 sm:block"
                style={{ color: "#C9A96E" }}
              >
                See all on Spotify →
              </a>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {episodes.map((ep) => (
                <EpisodeCard key={ep.number} ep={ep} />
              ))}
            </div>

            <div className="mt-10 flex justify-center sm:hidden">
              <a
                href="https://open.spotify.com/show/3loSk2bBTZQdklXJdJ5r72"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold underline underline-offset-4"
                style={{ color: "#C9A96E" }}
              >
                See all episodes on Spotify →
              </a>
            </div>
          </div>
        </section>

        {/* ── Be a guest CTA ────────────────────────────────────────── */}
        <section
          className="px-6 py-16 sm:py-24"
          style={{ backgroundColor: "rgba(201,169,110,0.04)", borderTop: "1px solid rgba(201,169,110,0.1)" }}
        >
          <div className="mx-auto max-w-2xl text-center">
            <p
              className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "#C9A96E" }}
            >
              Be on the show
            </p>
            <h2
              className="mb-4 text-[1.75rem] font-bold text-white sm:text-[2.25rem]"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Founders who&apos;ve scaled.
              <br />
              <span style={{ color: "#C9A96E" }}>Interested in sharing your story?</span>
            </h2>
            <p className="mb-8 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              We only record with founders who have real reps — a raise, an exit, a lesson hard-earned.
              If that&apos;s you, reach out.
            </p>
            <a
              href="https://calendly.com/taiga-gildre/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl px-8 py-4 text-sm font-bold transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: "#C9A96E",
                color: "#1C2744",
                boxShadow: "0 4px 24px rgba(201,169,110,0.35)",
              }}
            >
              Pitch yourself as a guest
            </a>
          </div>
        </section>

        {/* ── Footer spacer ─────────────────────────────────────────── */}
        <div className="px-6 py-12 text-center">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
            Start to Scale is produced by{" "}
            <a href="https://www.gildre.com" className="underline underline-offset-2 hover:text-white/40" target="_blank" rel="noopener noreferrer">
              Gildre
            </a>
            . New episodes drop monthly.
          </p>
        </div>
      </main>
    </>
  );
}
