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
    number: 52,
    title: "The Hidden Power of Challenging Yourself Every Day as an Entrepreneur",
    guest: "Cody Graham",
    role: "COO, SoGo",
    date: "Jul 2026",
    duration: "46 min",
    description:
      "Cody walks through the mindset shifts required to move from corporate operator to startup builder — covering AI integration, building community-driven products, and why the best founders stay deliberately uncomfortable.",
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
      "Steve breaks down his ASLA framework — Ask, Listen, Learn, Act — and demonstrates how authentic networking can turn a casual conversation into a long-term business relationship. One of the most practical episodes on relationship capital we've recorded.",
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
    role: "Founder, N6 Systems",
    date: "Mar 2026",
    duration: "46 min",
    description:
      "Iliana built a tech venture across three countries after a career defined by embracing the unpredictable — from odd jobs to international roles. She makes a compelling case that cultural agility is the most underrated founder skill.",
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
      "Sharon went from leading Alibaba's global growth to building her own personal brand — and discovered that documenting failures outperforms polished success stories. She shares the counterintuitive rules of digital presence and why AI is the great equalizer for solo founders.",
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
      "Gadareth went from the Bahamas to Yale to the front lines of life sciences investing — and shares how he evaluates early-stage biomedical companies, why continuous improvement is his operating system, and how AI is reshaping the due diligence process.",
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
    duration: "51 min",
    description:
      "Chris co-wrote the book on blitzscaling with Reid Hoffman — and in this episode he goes deeper on what actually separates companies that scale from those that plateau. He covers conviction, lifelong learning, and building the kind of collaborative network that compounds over decades.",
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
    duration: "47 min",
    description:
      "Andrew has navigated two startup exits and written a book about it — The Entrepreneurial Odyssey. He shares the resilience frameworks that got him through the hard parts, the mental models he wishes he'd had earlier, and what he tells first-time founders who are just starting to feel the pressure.",
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
    duration: "42 min",
    description:
      "Aya left the stability of Microsoft to build from scratch — and she's honest about how different the two worlds are. She maps the psychological and operational challenges of the transition, the obstacles she didn't see coming, and how she found her footing as a first-time solo founder.",
    photo: null,
    initials: "AK",
    color: "#C93B6C",
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
              { stat: "52+", label: "Episodes" },
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
