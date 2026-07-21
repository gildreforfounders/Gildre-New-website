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
    description: "Hiring, culture, managing yourself — the hard stuff nobody talks about.",
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
      "The real tradeoffs between bootstrapping and raising VC — from control and hiring to exit strategy and risk. Insights from founders who've done both, with a side-by-side comparison and a decision framework for your specific situation.",
    href: "/guides/bootstrapping-vs-venture-capital",
  },
  {
    title: "Cap Table Management From Pre-Seed to Series A: The Founder's Equity Playbook",
    category: "Fundraising",
    readTime: "10 min read",
    excerpt:
      "Your cap table is the financial story of every decision you've made — and Series A investors will read it that way. A stage-by-stage guide: authorized shares, founder vesting, option pool sizing, Series A red flags, and a 10-point readiness checklist.",
    href: "/guides/cap-table-management",
  },
  {
    title: "How to Use Customer Feedback to Build a Product People Actually Want: A Founder's Growth Guide",
    category: "Growth",
    readTime: "12 min read",
    excerpt:
      "Intuition gets you started. Customer feedback is what helps you scale. A practical guide on collecting, prioritizing, and acting on what your users are telling you — with the Airbnb, Slack, and Superhuman case studies plus a full tool stack.",
    href: "/guides/how-to-use-customer-feedback-build-product",
  },
  {
    title: "Your Next 100 Customers: The Gildre GTM Playbook (2026 Edition)",
    category: "Growth",
    readTime: "15 min read",
    excerpt:
      "The three highest-performing go-to-market channels Gildre founders used in 2026 — high-intent content marketing, precision outbound email, and the strategic partnership flywheel. With exact tools, workflows, and tactics.",
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
      "No brand, no budget, no traction. Eight strategies that work precisely because of those constraints — from ICP clarity and personal network outreach to picking a single traction channel and building a referral flywheel.",
    href: "/guides/first-100-customers",
  },
  {
    title: "Startup Fundraising Terminology: The Complete Founder's Glossary — From Pre-Seed to Series C",
    category: "Fundraising",
    readTime: "10 min read",
    excerpt:
      "Every fundraising term founders need to know — runway, burn rate, dilution, convertible notes, SAFEs, term sheets, and 20+ more. Plain-language definitions with context on when each term actually matters.",
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
      "Elise Madrick left Kellogg executive education to found Cerenè — immersive 108-day transformation programs in Morocco and France. Her insight: you can't become someone new inside the same context that created the old version of you.",
    href: "/blog/elise-madrick-cerene-executive-transformation",
  },
  {
    title: "Ryan Hughes: Why a Google and Snapchat Engineer Left Big Tech to Build Fan Pier Labs",
    category: "Product",
    readTime: "9 min read",
    excerpt:
      "Ryan Hughes worked inside Google and Snapchat before founding Fan Pier Labs, an AI-driven software consulting firm for startups. He shares what big tech teaches you — and what it can't — on the Start to Scale Podcast.",
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
      "How to split founder equity fairly, structure employee stock options, survive investor dilution, and avoid the cap table mistakes that haunt founders for years — with benchmarks, tables, and worked examples.",
    href: "/guides/startup-equity-101",
  },
  {
    title: "Armando Vera Carvajal: How a First-Generation Mexican Immigrant Built Hangtight After a Journey Through the Amazon",
    category: "Mindset",
    readTime: "12 min read",
    excerpt:
      "His parents gave up careers in Mexico for the American Dream. Armando sold cheesecakes door-to-door, studied in Paris and Singapore, trekked into the Peruvian Amazon — then came home and built an AI startup that acquired its competition.",
    href: "/blog/armando-vera-carvajal-hangtight-amazon",
  },
  {
    title: "John Lionberger: From Broadway Technician to Electrical Engineer to Pro Racer — Building a Half-Billion-Dollar Business Along the Way",
    category: "Operations",
    readTime: "10 min read",
    excerpt:
      "Theater. Engineering. A $500M consulting firm. Valvoline franchises. An ESOP. An IPO. And still racing competitively on weekends — John Lionberger's career refuses to stay in a single lane.",
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
      "How to raise your first pre-seed round — from defining your goals and building your narrative to targeting the right investors, perfecting your deck, and closing the deal. Includes instrument comparison, pitch deck breakdown, and objection handling.",
    href: "/guides/pre-seed-fundraising-playbook",
  },
  {
    title: "Chris Riklin: How a Decade in Political Tech Led Him to Co-Found Topline — a Meritocratic Marketplace Disrupting Professional Services",
    category: "Product",
    readTime: "9 min read",
    excerpt:
      "Chris Riklin spent 10+ years at NationBuilder watching talented professionals lose opportunities to outdated hiring gatekeepers. So he left to co-found Topline — a frictionless marketplace where the best professionals win on merit, not connections.",
    href: "/blog/chris-riklin-topline-professional-marketplace",
  },
  {
    title: "Luke Ashenbrand: From Princeton Division I Football to Startup Entrepreneur After a Career-Ending Concussion",
    category: "Leadership",
    readTime: "8 min read",
    excerpt:
      "Princeton lineman Luke Ashenbrand lost his football career to a traumatic concussion — spent 15 days in a dark room recovering — then channeled the setback into startup consulting and entrepreneurship.",
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
      "From growing Woolworths South Africa to 500K fans to marketing Sprinter vans — Robyn Hobson on 13 years of marketing across Africa, China, and the US and what it actually takes to build a global career.",
    href: "/blog/robyn-hobson-cape-town-to-us-cmo",
  },
  {
    title: "From NASA Engineer to Y Combinator Founder: Building an Open-Source AI Company After Working on Mars Rovers",
    category: "Product",
    readTime: "11 min read",
    excerpt:
      "From Louisiana's Cancer Alley to NASA's Curiosity mission to founding ChatOpenSource through Y Combinator — one of the most unconventional founder paths you'll read about.",
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
      "From selling $20 miniature paintings at farmers markets to owning galleries — wildlife artist James Corwin on building a creative business with no blueprint and no shortcuts.",
    href: "/blog/james-corwin-wildlife-artist-corwin-galleries",
  },
  {
    title: "How to Close Your First 10 Customers (Without a Sales Team)",
    category: "Growth",
    readTime: "6 min read",
    excerpt:
      "The frameworks Gildre founders use to get from zero to traction — before you have a pipeline, a playbook, or a sales hire.",
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
      "We talked to 12 investors about what makes them move fast on a deal — and what immediately kills interest.",
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
      "It doesn't look like exhaustion. It looks like productivity — until the day it doesn't.",
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
            Blogs, guides, and playbooks built for founders at every stage — from your first customers to your first exit.
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
              style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
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
              <p className="text-sm mt-2">More coming soon — subscribe to the newsletter to get notified.</p>
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
              >
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
            Subscribe to The Essential Founder Newsletter and get tactical insights delivered directly to your inbox — no fluff, no filler.
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
