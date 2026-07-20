"use client";

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
    title: "Fritz Lanman: How a Microsoft Exec Took ClassPass to $285M Unicorn Status",
    category: "Leadership",
    readTime: "15 min read",
    excerpt:
      "ClassPass CEO Fritz Lanman on investing $240M into Facebook at Microsoft, losing 70 lbs on his own product, and the unconventional path to building a billion-dollar company.",
    href: "/fritzlanmanblog",
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
            {categories.map((cat) => (
              <a
                key={cat.slug}
                href={`https://gildre-for-founders.beehiiv.com/`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 rounded-2xl p-5 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(201,169,110,0.35)]"
                style={{
                  backgroundColor: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <span className="text-3xl">{cat.icon}</span>
                <span className="text-sm font-semibold text-white">{cat.label}</span>
                <span className="text-[0.68rem] leading-snug" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {cat.description}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Articles ─────────────────────────────────────────── */}
      <section id="articles" className="px-6 py-16" style={{ backgroundColor: "#0f1524" }}>
        <div className="mx-auto max-w-6xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            Featured
          </p>
          <h2
            className="mt-3 text-[1.75rem] font-bold text-white sm:text-[2.25rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Start Here
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((article) => (
              <a
                key={article.title}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
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
            ))}
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
