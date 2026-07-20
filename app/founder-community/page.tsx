import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.gildre.com/founder-community" },
  title: "Founder Community for Startups | Gildre — Join 250+ Founders",
  description:
    "A founder community is a curated network of startup founders, mentors, and operators. Learn what to look for, compare types, and find the best founder community for your stage.",
  keywords: [
    "founder community",
    "startup founder community",
    "best founder community",
    "founder community for startups",
    "online founder community",
    "founder community membership",
    "startup community",
    "entrepreneur community",
    "founder peer group",
    "startup mentorship community",
  ],
  openGraph: {
    title: "Founder Community for Startups | Gildre — Join 250+ Founders",
    description:
      "A founder community is a curated network of startup founders, mentors, and operators. Join Gildre — 250+ members, 1:1 mentorship, weekly events, no equity taken.",
    url: "https://www.gildre.com/founder-community",
    siteName: "Gildre",
    type: "article",
    images: [{ url: "https://www.gildre.com/og-home.png", width: 1200, height: 630, alt: "Gildre founder community" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Founder Community for Startups | Gildre",
    description: "Join 250+ startup founders. 1:1 mentorship, curated peer matching, weekly events — no equity taken.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a founder community?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A founder community is a curated network of startup founders, operators, and mentors who share knowledge, make introductions, and support each other through the challenges of building a company. Unlike a general business network, a founder community is organized around the specific needs of company builders — fundraising, hiring, product development, growth, and exit.",
      },
    },
    {
      "@type": "Question",
      name: "How is a founder community different from an accelerator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Accelerators (like Y Combinator or Techstars) take 5–10% equity in your company in exchange for funding and a short intensive program. A founder community like Gildre charges a monthly membership fee and takes zero equity. Accelerators are a one-time cohort; founder communities provide ongoing mentorship, peer connections, and programming for as long as you're a member.",
      },
    },
    {
      "@type": "Question",
      name: "Do founder communities take equity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the type. Accelerators (YC, Techstars, 500 Startups) take 5–10% equity. Membership-based founder communities like Gildre charge a monthly fee and take no equity. Free communities (Indie Hackers, Reddit) take nothing but offer no curation or programming.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best founder community for early-stage startups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For early-stage founders (pre-revenue to $500K ARR), Gildre's Silver membership ($59/month) offers weekly curated peer introductions, virtual events, expert mentorship access, and $5M+ in partner perks — with no equity taken. For founders who want intensive funding and a cohort experience, Y Combinator or Techstars are alternatives, though they take 5–7% equity.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a founder community cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Founder community costs vary widely. Free communities (Indie Hackers, Startup School) cost nothing but offer no curation. Paid communities like Gildre range from $59/month (Silver) to $349/month (Platinum). Accelerators are free but take 5–10% equity, which is worth tens to hundreds of thousands of dollars at exit. Gildre offers the most comprehensive paid model without any equity requirement.",
      },
    },
    {
      "@type": "Question",
      name: "What should I look for in a founder community?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Look for: (1) Curation — are members and mentors vetted? (2) Stage-specificity — are peers at your ARR level? (3) Mentor quality — are they exited founders and operators, not just coaches? (4) Programming — live events, AMAs, workshops? (5) Equity model — does it take equity or charge a membership fee? Gildre checks all five with no equity taken.",
      },
    },
    {
      "@type": "Question",
      name: "What cities does Gildre's founder community operate in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gildre's founder community has active chapters in Boston, New York City, San Francisco Bay Area, Los Angeles, Austin, Chicago, and Seattle — with virtual membership available worldwide. In-person events are hosted quarterly in each city for Gold and Platinum members.",
      },
    },
  ],
};

const comparisonData = [
  {
    type: "Membership Community",
    examples: "Gildre, Pavilion, YPO",
    equity: "No",
    cost: "$59–$499/mo",
    bestFor: "Ongoing mentorship, peer connections, events",
    highlight: true,
  },
  {
    type: "Accelerator",
    examples: "Y Combinator, Techstars, 500 Startups",
    equity: "5–10%",
    cost: "Free (equity only)",
    bestFor: "Seed funding, intensive cohort, demo day",
    highlight: false,
  },
  {
    type: "Free Forum/Network",
    examples: "Indie Hackers, Hacker News, Reddit",
    equity: "No",
    cost: "Free",
    bestFor: "Casual advice, wide exposure",
    highlight: false,
  },
  {
    type: "Alumni Network",
    examples: "MIT Sloan, GSB, HBS",
    equity: "No",
    cost: "Alumni only",
    bestFor: "Warm intros, trusted credentialing",
    highlight: false,
  },
  {
    type: "Incubator",
    examples: "1871, Station F, Capital Factory",
    equity: "0–3%",
    cost: "Desk/program fee",
    bestFor: "Physical space, local ecosystem",
    highlight: false,
  },
];

export default function FounderCommunityPage() {
  return (
    <div className="flex flex-col" style={{ fontFamily: "var(--font-geist-sans)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden px-6 pb-20 pt-32"
        style={{ background: "linear-gradient(160deg, #080e1a 0%, #0f1524 55%, #0a1020 100%)" }}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #C9A96E 0%, transparent 65%)" }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            Founder Community Guide
          </p>
          <h1
            className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            The Startup Founder Community<br />
            <span style={{ color: "#C9A96E" }}>Built for Operators Who Execute</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            A founder community is a curated network of startup founders, mentors, and operators who share knowledge, make introductions, and support each other through every stage of company building. Gildre is the private founder community where 250+ founders connect, learn, and build — no equity taken.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://tally.so/r/VLERVa"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-3.5 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
            >
              Apply to Join the Community
            </a>
            <Link
              href="/membership"
              className="text-sm underline underline-offset-4 transition-opacity hover:opacity-80"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              See membership plans →
            </Link>
          </div>
        </div>
      </section>

      {/* ── What is a founder community ── */}
      <section className="px-6 py-16 sm:py-24" style={{ backgroundColor: "#F5F0E8" }}>
        <div className="mx-auto max-w-3xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#C9A96E]">
            The Definition
          </p>
          <h2
            className="mt-3 text-[2rem] font-bold text-[#1C2744] sm:text-[2.4rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            What Is a Founder Community?
          </h2>
          <p className="mt-5 text-base leading-[1.9] text-zinc-600">
            A <strong>founder community</strong> is a curated membership network of startup founders, operators, and experienced mentors organized around the specific challenges of building a company. Unlike a general business network or a LinkedIn group, a founder community provides structured programming, vetted introductions, and expert access focused on what founders actually need: fundraising support, hiring guidance, product feedback, revenue growth strategies, and peer accountability.
          </p>
          <p className="mt-4 text-base leading-[1.9] text-zinc-600">
            The best founder communities are stage-specific — matching founders with peers who are solving the same problems at the same ARR level — and mentor-led, connecting members with operators who have actually built and exited companies rather than coaches or consultants.
          </p>
          <p className="mt-4 text-base leading-[1.9] text-zinc-600">
            Founder communities differ from accelerators in a critical way: they do not take equity. An accelerator like Y Combinator or Techstars takes 5–10% of your company in exchange for a short cohort program. A founder community like Gildre charges a monthly membership fee and takes zero ownership stake, making it accessible at any stage — not just when you're raising a round.
          </p>
        </div>
      </section>

      {/* ── Why founders join ── */}
      <section className="px-6 py-16 sm:py-24" style={{ backgroundColor: "#1C2744" }}>
        <div className="mx-auto max-w-5xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            The Case for Community
          </p>
          <h2
            className="mt-3 text-[2rem] font-bold text-white sm:text-[2.4rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Why Startup Founders Join a Community
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            Founding a company is one of the most isolating professional experiences. The decisions are high-stakes, the information is scarce, and most people around you don't have the context to give useful advice. A founder community fixes this by surrounding you with people who are living the same journey.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Peer accountability", body: "Founders in communities move faster because they have peers who hold them accountable to their goals — not just cheerleaders, but honest advisors." },
              { title: "Mentors who've done it", body: "Access to operators who have built and exited companies in your space, not generalist coaches. Gildre mentors include a $285M unicorn CEO, a PayPal Director of Product, and a NASA engineer turned YC founder." },
              { title: "Warm investor introductions", body: "The most efficient fundraising happens through warm intros. Founder communities with investor networks unlock introductions that cold outreach can't." },
              { title: "Avoiding costly mistakes", body: "The fastest ROI of any founder community is avoiding a bad hire, a bad contract, or a bad fundraising strategy that a peer or mentor has already lived through." },
              { title: "Finding co-founders and hires", body: "Many founders find their next co-founder, early hire, or advisor inside a founder community — people who already share the same values and ambition." },
              { title: "Mental resilience", body: "Founders in communities report significantly lower burnout rates. Knowing that other people understand what you're going through is not a nice-to-have — it's a performance variable." },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-7"
                style={{
                  backgroundColor: "#111e35",
                  border: "1px solid rgba(201,169,110,0.12)",
                }}
              >
                <div className="mb-4 h-[2px] w-8 rounded-full" style={{ backgroundColor: "#C9A96E" }} />
                <h3 className="text-base font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What to look for ── */}
      <section className="px-6 py-16 sm:py-24" style={{ backgroundColor: "#F5F0E8" }}>
        <div className="mx-auto max-w-3xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#C9A96E]">
            How to Choose
          </p>
          <h2
            className="mt-3 text-[2rem] font-bold text-[#1C2744] sm:text-[2.4rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            5 Things to Look for in a Founder Community
          </h2>
          <div className="mt-10 flex flex-col gap-6">
            {[
              { n: "01", title: "Curation — Is every member vetted?", body: "The value of a founder community is directly proportional to the quality of its members. Open communities attract noise. The best founder communities review applications and selectively admit members who meet criteria around ambition, experience, and contribution mindset." },
              { n: "02", title: "Stage-specificity — Are peers at your level?", body: "A pre-revenue founder and a $10M ARR founder have almost nothing to learn from each other on a day-to-day basis. Look for communities that segment by stage — Build, Growth, Scale — so you're talking to people solving the same problems you're facing this quarter." },
              { n: "03", title: "Mentor quality — Operators or coaches?", body: "There is a meaningful difference between a mentor who has built and sold a company and a coach who has a certification. The best founder communities have mentors with operating track records: people who have raised rounds, managed boards, hired and fired at scale, and navigated exits." },
              { n: "04", title: "Programming — Events, AMAs, workshops?", body: "A community is not a forum. Look for live programming: weekly AMAs, Innovation Roundtables with domain experts, Fireside Chats from peer founders, and Executive Workshops on topics you're actively working through. Programming is what turns a directory into a community." },
              { n: "05", title: "Equity model — Does it take a stake?", body: "Accelerators take equity. Founder communities should not. If a community takes equity as part of membership, it is structurally an accelerator with different branding. A true founder community charges a membership fee and takes zero ownership in your business." },
            ].map((item) => (
              <div
                key={item.n}
                className="flex gap-6 rounded-2xl border border-[#e8e0d0] bg-white p-7"
              >
                <span
                  className="flex-shrink-0 text-[0.7rem] font-bold tracking-[0.25em] uppercase pt-0.5"
                  style={{ color: "rgba(201,169,110,0.6)" }}
                >
                  {item.n}
                </span>
                <div>
                  <h3 className="text-base font-bold text-[#1C2744]" style={{ fontFamily: "var(--font-fraunces)" }}>{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison table ── */}
      <section className="px-6 py-16 sm:py-24" style={{ backgroundColor: "#080e1a" }}>
        <div className="mx-auto max-w-5xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            Compare Your Options
          </p>
          <h2
            className="mt-3 text-[2rem] font-bold text-white sm:text-[2.4rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Types of Founder Communities
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Not all founder communities are structured the same way. Here's how the main types compare.
          </p>
          <div className="mt-10 overflow-x-auto rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr style={{ backgroundColor: "rgba(201,169,110,0.08)", borderBottom: "1px solid rgba(201,169,110,0.15)" }}>
                  {["Type", "Examples", "Equity?", "Cost", "Best for"].map((h) => (
                    <th key={h} className="px-5 py-4 text-left text-[0.65rem] font-bold uppercase tracking-widest" style={{ color: "#C9A96E" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      backgroundColor: row.highlight ? "rgba(201,169,110,0.06)" : "transparent",
                      borderBottom: i < comparisonData.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                    }}
                  >
                    <td className="px-5 py-4 font-semibold text-white">
                      {row.type}
                      {row.highlight && (
                        <span className="ml-2 rounded-full px-2 py-0.5 text-[0.6rem] font-bold" style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}>
                          Gildre
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-4" style={{ color: "rgba(255,255,255,0.55)" }}>{row.examples}</td>
                    <td className="px-5 py-4">
                      <span
                        className="font-semibold"
                        style={{ color: row.equity === "No" ? "#4ade80" : "#f87171" }}
                      >
                        {row.equity}
                      </span>
                    </td>
                    <td className="px-5 py-4" style={{ color: "rgba(255,255,255,0.55)" }}>{row.cost}</td>
                    <td className="px-5 py-4" style={{ color: "rgba(255,255,255,0.55)" }}>{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Gildre CTA ── */}
      <section className="px-6 py-16 sm:py-24" style={{ backgroundColor: "#0c1628" }}>
        <div className="mx-auto max-w-5xl">
          <div
            className="rounded-3xl p-10 sm:p-14"
            style={{ background: "linear-gradient(135deg, #111e35 0%, #0f1a2e 100%)", border: "1px solid rgba(201,169,110,0.2)" }}
          >
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
              The Founder Community Built for Execution
            </p>
            <h2
              className="mt-4 text-[2rem] font-bold text-white sm:text-[2.5rem]"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Why Gildre Is the Right Founder Community
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Gildre is a private, application-based startup founder community serving 250+ founders across 15+ US cities. Members get weekly curated 1:1 peer introductions, monthly advisory sessions with exited founders, 3–4 curated events per month, and $5M+ in partner perks — starting at $59/month with no equity taken.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { stat: "250+", label: "Active founders" },
                { stat: "95%", label: "Member retention rate" },
                { stat: "$0", label: "Equity taken" },
              ].map((s) => (
                <div key={s.stat} className="rounded-xl p-5 text-center" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <p className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>{s.stat}</p>
                  <p className="mt-1 text-xs text-zinc-500 uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://tally.so/r/VLERVa"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-8 py-3.5 text-sm font-bold transition-opacity hover:opacity-90 text-center"
                style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
              >
                Apply to the Founder Community
              </a>
              <Link
                href="/membership"
                className="rounded-full px-8 py-3.5 text-sm font-semibold text-center transition-opacity hover:opacity-80"
                style={{ backgroundColor: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                View membership plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-6 py-16 sm:py-24" style={{ backgroundColor: "#0c1628" }}>
        <div className="mx-auto max-w-3xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            Common Questions
          </p>
          <h2
            className="mt-3 text-[2rem] font-bold text-white sm:text-[2.4rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Founder Community FAQ
          </h2>
          <div className="mt-10 flex flex-col divide-y" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
            {[
              {
                q: "What is a founder community?",
                a: "A founder community is a curated network of startup founders, operators, and mentors organized around the specific challenges of building a company — fundraising, hiring, product development, and growth. Unlike a general business network, a founder community provides structured programming, vetted introductions, and expert access.",
              },
              {
                q: "How is a founder community different from an accelerator?",
                a: "Accelerators (Y Combinator, Techstars) take 5–10% equity in exchange for a short cohort program and seed funding. Founder communities like Gildre charge a monthly membership fee and take zero equity. Accelerators are a one-time program; founder communities provide ongoing mentorship and peers for as long as you're a member.",
              },
              {
                q: "Do founder communities take equity?",
                a: "Most membership-based founder communities do not take equity — they charge a monthly fee. Gildre takes zero equity. Accelerators take 5–10% equity but are technically a different structure. Always confirm the equity model before joining any program.",
              },
              {
                q: "What is the best founder community for early-stage startups?",
                a: "For early-stage founders (pre-revenue to $500K ARR), Gildre's Silver membership ($59/month) offers weekly curated peer introductions, virtual events, expert mentor access, and $5M+ in partner perks with no equity taken. It's designed specifically for founders at the build stage who need peer accountability and experienced guidance.",
              },
              {
                q: "How much does a founder community cost?",
                a: "Costs vary: free forums (Indie Hackers, Hacker News) cost nothing. Paid communities like Gildre range from $59–$349/month depending on the tier. Accelerators are free but take 5–10% equity. Gildre is the most comprehensive paid community model with no equity requirement.",
              },
              {
                q: "What cities does Gildre's founder community operate in?",
                a: "Gildre has active in-person chapters in Boston, New York City, San Francisco Bay Area, Los Angeles, Austin, Chicago, and Seattle. Virtual membership is available worldwide. In-person events — dinners, co-working sessions, happy hours — are hosted quarterly in each city.",
              },
              {
                q: "What should I look for in a founder community?",
                a: "Look for: (1) Curation — vetted members and mentors; (2) Stage-specificity — peers at your ARR level; (3) Mentor quality — exited founders, not coaches; (4) Live programming — events, AMAs, workshops; (5) No equity taken. Gildre checks all five.",
              },
            ].map((item, i) => (
              <div key={i} className="py-6">
                <h3 className="text-base font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>{item.q}</h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── City links ── */}
      <section className="px-6 py-12 sm:py-16" style={{ backgroundColor: "#080e1a" }}>
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            Find Your City
          </p>
          <h2
            className="mt-3 text-[1.75rem] font-bold text-white sm:text-[2rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Founder Communities by City
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              { name: "Boston Founder Community", href: "/boston" },
              { name: "NYC Founder Community", href: "/nyc" },
              { name: "Bay Area Founder Community", href: "/bayarea" },
              { name: "Chicago Founder Community", href: "/chicago" },
              { name: "Austin Founder Community", href: "/austin" },
              { name: "LA Founder Community", href: "/la" },
              { name: "Seattle Founder Community", href: "/seattle" },
            ].map((city) => (
              <Link
                key={city.href}
                href={city.href}
                className="rounded-full px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-80"
                style={{ backgroundColor: "rgba(201,169,110,0.1)", border: "1px solid rgba(201,169,110,0.25)", color: "#C9A96E" }}
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
