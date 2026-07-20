import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.gildre.com/guides/equity-dilution-explained" },
  title: "Equity Dilution Explained: How Much to Give Away at Each Funding Round — With Real Numbers and Benchmarks | Gildre",
  description:
    "A practical guide to equity dilution for startup founders — how much equity to give away at pre-seed, seed, Series A, B, and beyond. Includes ownership benchmarks, a worked dilution table, the Facebook example, and strategies to minimize unnecessary dilution.",
  keywords: [
    "equity dilution startup",
    "how much equity to give investors",
    "seed round dilution percentage",
    "Series A equity dilution",
    "Series B dilution",
    "startup fundraising equity percentage",
    "how much equity to give away fundraising",
    "pre-money valuation dilution",
    "startup dilution calculator",
    "Facebook equity dilution IPO",
    "SAFE notes dilution",
    "anti-dilution startup",
    "founder ownership after Series A",
  ],
  openGraph: {
    title: "Equity Dilution Explained: How Much to Give Away at Each Funding Round",
    description:
      "How much equity do founders actually give away at each stage — and how do you protect your ownership without killing your growth? Real numbers, benchmarks, and the Facebook case study.",
    type: "article",
    url: "https://www.gildre.com/guides/equity-dilution-explained",
    images: [{ url: "https://www.gildre.com/images/dilution-venture-capital.webp" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Equity Dilution Explained: How Much to Give Away at Each Funding Round — With Real Numbers and Benchmarks",
  "description":
    "A practical guide to equity dilution for startup founders — how much equity to give away at pre-seed, seed, Series A, B, and beyond, with ownership benchmarks and strategies to minimize unnecessary dilution.",
  "image": "https://www.gildre.com/images/dilution-venture-capital.webp",
  "author": { "@type": "Organization", "name": "Gildre", "url": "https://www.gildre.com" },
  "publisher": {
    "@type": "Organization",
    "name": "Gildre",
    "url": "https://www.gildre.com",
    "logo": { "@type": "ImageObject", "url": "https://www.gildre.com/images/gildre-logo.png" },
  },
  "datePublished": "2024-01-01",
  "dateModified": "2024-01-01",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.gildre.com/guides/equity-dilution-explained" },
  "keywords": "equity dilution, startup fundraising, seed round dilution, Series A equity, pre-money valuation, SAFE notes, founder ownership, cap table, Facebook dilution, anti-dilution",
  "about": [
    { "@type": "Thing", "name": "Equity Dilution" },
    { "@type": "Thing", "name": "Startup Fundraising" },
    { "@type": "Thing", "name": "Venture Capital" },
    { "@type": "Organization", "name": "Gildre" },
  ],
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="mb-4 mt-12 text-[1.5rem] font-bold text-white sm:text-[1.75rem]"
      style={{ fontFamily: "var(--font-fraunces)" }}
    >
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-3 mt-8 text-[1.1rem] font-bold text-white">
      {children}
    </h3>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
      {children}
    </p>
  );
}

function Callout({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div
      className="my-8 rounded-2xl p-7"
      style={{ backgroundColor: "rgba(201,169,110,0.06)", border: "1px solid rgba(201,169,110,0.15)" }}
    >
      {title && (
        <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-widest" style={{ color: "#C9A96E" }}>
          {title}
        </p>
      )}
      {children}
    </div>
  );
}

function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="my-6 rounded-xl px-6 py-5"
      style={{ backgroundColor: "rgba(200,80,80,0.08)", border: "1px solid rgba(200,80,80,0.2)" }}
    >
      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,200,200,0.85)" }}>
        <span className="font-bold">Watch out: </span>{children}
      </p>
    </div>
  );
}

function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      className="my-8 rounded-2xl px-7 py-6"
      style={{ backgroundColor: "rgba(201,169,110,0.08)", borderLeft: "3px solid #C9A96E" }}
    >
      <p className="text-base italic leading-relaxed text-white">{children}</p>
    </blockquote>
  );
}

export default function EquityDilution() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden px-6 pb-16 pt-32"
          style={{ background: "linear-gradient(160deg, #080e1a 0%, #1C2744 55%, #0a1020 100%)" }}
        >
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10"
            style={{ background: "radial-gradient(ellipse, #C9A96E 0%, transparent 65%)" }}
          />
          <div className="relative mx-auto max-w-3xl">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span
                className="rounded-full px-3 py-1 text-[0.6rem] font-bold uppercase tracking-widest"
                style={{ backgroundColor: "rgba(164,123,91,0.2)", color: "#A67B5B" }}
              >
                Fundraising
              </span>
              <span className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
                Gildre Founder Guide · 10 min read
              </span>
            </div>
            <h1
              className="text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.1] text-white"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Equity Dilution Explained: How Much to Give Away at Each Funding Round — With Real Numbers and Benchmarks
            </h1>
            <p className="mt-6 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              What equity dilution actually means, how much founders typically give away at each stage, when dilution works in your favor, and the ownership floors you should fight to protect.
            </p>
          </div>
        </section>

        {/* ── Article Body ─────────────────────────────────────────────── */}
        <article className="mx-auto max-w-3xl px-6 py-16">

          <Quote>
            "I knew I needed funding to scale, but the moment I saw my equity stake shrinking, I felt like I was losing control of my own company."
          </Quote>

          <Body>
            That feeling is universal among first-time fundraisers. And it's partly right — dilution does reduce your percentage. But percentage isn't the same as value, and it isn't the same as control. The founders who navigate this well are the ones who understand the difference before they start negotiating.
          </Body>

          {/* Building image */}
          <div className="my-10 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            <Image
              src="/images/dilution-financial-building.webp"
              alt="Financial institution — equity dilution and venture capital fundraising"
              width={1400}
              height={933}
              className="w-full"
              style={{ objectFit: "cover", maxHeight: "380px", objectPosition: "center top" }}
            />
          </div>

          <H2>What Is Equity Dilution?</H2>

          <Body>
            Equity dilution happens when a company issues new shares — reducing each existing shareholder's percentage of ownership. It's the mathematical consequence of bringing in outside capital: you create new shares, sell them to investors, and everyone's slice of the pie gets smaller even as the pie itself gets bigger.
          </Body>

          <Body>
            The clearest way to see it:
          </Body>

          <div className="my-6 overflow-hidden rounded-xl" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "rgba(201,169,110,0.1)" }}>
                  <th className="px-5 py-3 text-left font-semibold" style={{ color: "#C9A96E" }}>Before the round</th>
                  <th className="px-5 py-3 text-left font-semibold" style={{ color: "#C9A96E" }}>After selling 20%</th>
                </tr>
              </thead>
              <tbody style={{ backgroundColor: "#0a1020" }}>
                <tr style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <td className="px-5 py-3 text-white font-medium">You own 100%</td>
                  <td className="px-5 py-3" style={{ color: "rgba(255,255,255,0.65)" }}>You own 80%</td>
                </tr>
                <tr style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <td className="px-5 py-3 text-white font-medium">Company worth $2M</td>
                  <td className="px-5 py-3" style={{ color: "rgba(255,255,255,0.65)" }}>Company worth $5M (post-money)</td>
                </tr>
                <tr style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <td className="px-5 py-3 text-white font-medium">Your stake = $2M</td>
                  <td className="px-5 py-3" style={{ color: "rgba(255,255,255,0.65)" }}>Your stake = $4M (80% of $5M)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Body>
            Your percentage went down. Your dollar value went up. That's the core insight: dilution only destroys value when the capital doesn't create proportional growth. When it does, you're better off owning less of something worth more.
          </Body>

          <H2>How Much Equity Do Founders Give Away at Each Stage?</H2>

          <Body>
            These ranges reflect market norms. They vary significantly by sector, geography, traction, and the competitive dynamics of a specific raise — but they're solid anchors for any first-time fundraiser.
          </Body>

          <div className="my-6 overflow-hidden rounded-xl" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "rgba(201,169,110,0.1)" }}>
                  <th className="px-5 py-3 text-left font-semibold" style={{ color: "#C9A96E" }}>Stage</th>
                  <th className="px-5 py-3 text-left font-semibold" style={{ color: "#C9A96E" }}>Typical Raise</th>
                  <th className="px-5 py-3 text-left font-semibold" style={{ color: "#C9A96E" }}>Equity Given</th>
                  <th className="px-5 py-3 text-left font-semibold hidden sm:table-cell" style={{ color: "#C9A96E" }}>Typical Investors</th>
                </tr>
              </thead>
              <tbody style={{ backgroundColor: "#0a1020" }}>
                {[
                  ["Pre-Seed", "$250K–$2M", "5–15%", "Friends/family, angels, pre-seed funds"],
                  ["Seed", "$1M–$5M", "10–25%", "Angel syndicates, seed VCs, accelerators"],
                  ["Series A", "$5M–$20M", "15–25%", "Institutional VCs"],
                  ["Series B", "$20M–$80M", "15–20%", "Growth VCs, crossover funds"],
                  ["Series C+", "$50M+", "10–20%", "Late-stage VCs, PE, strategics"],
                ].map(([stage, raise, equity, investors], i) => (
                  <tr key={i} style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                    <td className="px-5 py-3 font-medium text-white">{stage}</td>
                    <td className="px-5 py-3" style={{ color: "rgba(255,255,255,0.65)" }}>{raise}</td>
                    <td className="px-5 py-3 font-semibold" style={{ color: "#C9A96E" }}>{equity}</td>
                    <td className="px-5 py-3 hidden sm:table-cell" style={{ color: "rgba(255,255,255,0.45)" }}>{investors}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Warning>
            These ranges describe what's typical — not what's optimal. Giving away 25% at seed when you could have raised at 15% is a permanent cost you pay on every future round. The strongest negotiating position is always a competing term sheet or genuine optionality to not raise at all.
          </Warning>

          <H3>Pre-Seed and Seed: High risk, high stakes</H3>
          <Body>
            At the earliest stages, investors are betting on you personally — not your metrics. That risk premium is real, and it justifies giving up meaningful equity. But "meaningful" doesn't mean reckless. Giving away 30%+ at pre-seed before you have any traction leaves you cornered before the real game starts.
          </Body>
          <Body>
            A common mistake here: optimizing for the dollar amount raised rather than the valuation. Raising $1M at a $4M pre-money is very different from raising $1M at a $9M pre-money. The former leaves you with 80%; the latter leaves you with ~90%. Over multiple rounds, the compounding difference is significant.
          </Body>

          <H3>Series A: Where real dilution math starts to hurt</H3>
          <Body>
            By Series A, you typically have revenue or strong user growth, and institutional VCs want a seat at the table — literally. Expect board representation requests alongside the check. The equity ask (15–25%) is standard, but the valuation is now heavily scrutinized. Revenue multiples, growth rate, market size, and competitive dynamics all factor in.
          </Body>
          <Body>
            Founders should aim to own at least 50% post-Series A to maintain strong governance control and meaningful financial upside. If you're below 40% post-A, you've likely either raised too much, at too low a valuation, or both.
          </Body>

          <H3>Series B and beyond: dilution compounds, but so does value</H3>
          <Body>
            By Series B, the company is typically demonstrating clear unit economics and a repeatable growth engine. Each round from here should be raising at a materially higher valuation than the last. The 15–20% dilution per round sounds similar to earlier stages, but the absolute value being created makes the math favorable if the business is executing.
          </Body>

          {/* VC typewriter image */}
          <div className="my-10 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            <Image
              src="/images/dilution-venture-capital.webp"
              alt="Typewriter with 'VENTURE CAPITAL' text — startup fundraising and equity dilution"
              width={1400}
              height={933}
              className="w-full"
              style={{ objectFit: "cover", maxHeight: "380px", objectPosition: "center" }}
            />
          </div>

          <H2>The Cumulative Dilution Problem: A Worked Example</H2>

          <Body>
            Here's what happens to two founders who each start at 45% (10% reserved for an option pool) across a typical funding journey:
          </Body>

          <div className="my-6 overflow-hidden rounded-xl" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "rgba(201,169,110,0.1)" }}>
                  <th className="px-5 py-3 text-left font-semibold" style={{ color: "#C9A96E" }}>Round</th>
                  <th className="px-5 py-3 text-left font-semibold" style={{ color: "#C9A96E" }}>Each Founder</th>
                  <th className="px-5 py-3 text-left font-semibold" style={{ color: "#C9A96E" }}>Investors</th>
                  <th className="px-5 py-3 text-left font-semibold" style={{ color: "#C9A96E" }}>Option Pool</th>
                </tr>
              </thead>
              <tbody style={{ backgroundColor: "#0a1020" }}>
                {[
                  ["Founding", "45%", "—", "10%"],
                  ["Seed (20% dilution)", "36%", "20%", "8%"],
                  ["Series A (20% dilution)", "28.8%", "35.2%", "6.4% + new pool"],
                  ["Series B (18% dilution)", "23.6%", "47.4%", "~5%"],
                ].map(([round, founder, investors, pool], i) => (
                  <tr key={i} style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                    <td className="px-5 py-3 font-medium text-white">{round}</td>
                    <td className="px-5 py-3 font-semibold" style={{ color: "#C9A96E" }}>{founder}</td>
                    <td className="px-5 py-3" style={{ color: "rgba(255,255,255,0.65)" }}>{investors}</td>
                    <td className="px-5 py-3" style={{ color: "rgba(255,255,255,0.45)" }}>{pool}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Body>
            After three rounds, each founder owns roughly 23–24%. That's significant dilution — but if the Series B values the company at $100M+, their remaining stake is worth $23M+. The question isn't "how much did I give up?" It's "what was I able to build with that capital?"
          </Body>

          <H2>Case Study: How Mark Zuckerberg Managed Dilution at Facebook</H2>

          <Body>
            Facebook's fundraising history is the most studied dilution case in startup history — because the outcome was so extreme that it illustrates every principle at once.
          </Body>

          <div className="my-6 overflow-hidden rounded-xl" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "rgba(201,169,110,0.1)" }}>
                  <th className="px-5 py-3 text-left font-semibold" style={{ color: "#C9A96E" }}>Round</th>
                  <th className="px-5 py-3 text-left font-semibold" style={{ color: "#C9A96E" }}>Amount / Key Investor</th>
                  <th className="px-5 py-3 text-left font-semibold" style={{ color: "#C9A96E" }}>Implied Valuation</th>
                </tr>
              </thead>
              <tbody style={{ backgroundColor: "#0a1020" }}>
                {[
                  ["Seed (2004)", "$500K — Peter Thiel (~10.2%)", "$4.9M"],
                  ["Series A (2005)", "$12.7M — Accel Partners", "~$98M"],
                  ["Series B (2006)", "$27.5M — Greylock + others", "~$525M"],
                  ["Microsoft (2007)", "$240M for 1.6% stake", "$15B"],
                  ["IPO (2012)", "$16B raised", "$104B"],
                ].map(([round, detail, val], i) => (
                  <tr key={i} style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                    <td className="px-5 py-3 font-medium text-white">{round}</td>
                    <td className="px-5 py-3" style={{ color: "rgba(255,255,255,0.65)" }}>{detail}</td>
                    <td className="px-5 py-3 font-semibold" style={{ color: "#C9A96E" }}>{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Body>
            By the time Facebook went public, Zuckerberg owned approximately 28% of the company. More importantly, he retained voting control through a dual-class share structure — Class B shares carried 10× the voting weight of Class A. His financial stake was diluted; his decision-making power was not.
          </Body>

          <Body>
            The lesson isn't "raise from Peter Thiel at a $5M valuation." It's that the best founders separate economic dilution from governance dilution — and protect both independently.
          </Body>

          <H2>How to Minimize Unnecessary Dilution</H2>

          <H3>1. Raise what you need — not what looks impressive</H3>
          <Body>
            Every dollar you raise that you don't need is dilution you didn't have to take. A $10M Series A at a $40M valuation leaves you with 75% post-money. Raising $15M at the same valuation leaves you with 62.5%. The delta is 12.5 percentage points that compound across every future round and exit.
          </Body>
          <Body>
            The TechCrunch articles celebrating enormous raises describe a tiny fraction of startup outcomes. Most successful companies raised less than the headlines suggest, spent it carefully, and hit milestones that justified the next round at a much higher valuation.
          </Body>

          <H3>2. Negotiate on valuation, not just check size</H3>
          <Body>
            A 20% equity ask for a $3M raise at a $12M pre-money is very different from a 20% ask for a $3M raise at a $15M pre-money. Push hard on the valuation. It requires defensible metrics — ARR, growth rate, retention, market size — but those are worth building before you enter a process.
          </Body>

          <H3>3. Know your ownership floor before you walk into a room</H3>

          <Callout title="Founder Ownership Benchmarks">
            <ul className="space-y-3 text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
              <li className="flex gap-3">
                <span className="font-bold text-white w-36 flex-shrink-0">Post-Seed</span>
                <span>Aim to retain <strong className="text-white">60–80%</strong> combined founder ownership. Below 50% at this stage is a red flag for future investors.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-white w-36 flex-shrink-0">Post-Series A</span>
                <span>Aim to retain <strong className="text-white">50%+ combined</strong>. Below 40% post-A makes it harder to attract strong Series B investors without founder credibility concerns.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-white w-36 flex-shrink-0">Post-Series B/C</span>
                <span>Aim to retain <strong className="text-white">20–35% combined</strong>. Below 15% total founder ownership pre-exit may reduce motivation and signal governance risk.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-white w-36 flex-shrink-0">Danger zone</span>
                <span>Below <strong className="text-white">10–15% founder ownership</strong> pre-exit. At this level, your personal financial return may not justify the risk and effort of having founded the company.</span>
              </li>
            </ul>
          </Callout>

          <H3>4. Explore non-dilutive capital before you raise equity</H3>
          <Body>
            Not every dollar of growth capital has to come with a new cap table entry. Before a round, consider:
          </Body>
          <ul className="mb-6 space-y-2 text-sm pl-1" style={{ color: "rgba(255,255,255,0.72)" }}>
            <li className="flex gap-3"><span style={{ color: "#C9A96E", flexShrink: 0 }}>→</span> <strong className="text-white">Revenue-based financing</strong> — repay from a % of revenue, no equity exchanged</li>
            <li className="flex gap-3"><span style={{ color: "#C9A96E", flexShrink: 0 }}>→</span> <strong className="text-white">SBIR / government grants</strong> — non-dilutive but highly competitive and sector-specific</li>
            <li className="flex gap-3"><span style={{ color: "#C9A96E", flexShrink: 0 }}>→</span> <strong className="text-white">Venture debt</strong> — available post-Series A if you have strong ARR; preserves equity while providing runway</li>
            <li className="flex gap-3"><span style={{ color: "#C9A96E", flexShrink: 0 }}>→</span> <strong className="text-white">SAFE notes</strong> — defer dilution until a priced round, useful for bridging to a stronger negotiating position</li>
          </ul>

          <H3>5. Manage the option pool proactively</H3>
          <Body>
            Investors often require a 10–20% option pool as a condition of the round — and frequently insist it be created pre-investment, which means it dilutes founders before the round closes. If you can demonstrate a hiring plan that justifies a smaller pool (say 10% instead of 15%), negotiate it. Every percentage point matters.
          </Body>

          <Warning>
            The "option pool shuffle" is one of the most commonly misunderstood dilution mechanics. When investors require a new option pool pre-investment, the effective pre-money valuation of your company is lower than it appears. Model this explicitly before signing a term sheet.
          </Warning>

          <H2>The Right Mental Model: Percentage vs. Value</H2>

          <Body>
            The founders who obsess over their ownership percentage often make worse decisions than those who focus on the value of the company they're building. A 15% stake in a $1B company is worth $150M. A 60% stake in a company that never gets off the ground is worth nothing.
          </Body>

          <Body>
            Dilution is a tool, not a threat. The question to ask at every round isn't "how much am I giving up?" — it's "does this capital, at this valuation, from this investor, meaningfully increase the probability and magnitude of what I'm building?" When the answer is yes, take it. When it isn't, don't.
          </Body>

          <Callout title="Quick Reference: Dilution Checklist">
            <ul className="space-y-3 text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
              <li className="flex gap-3"><span style={{ color: "#C9A96E", flexShrink: 0 }}>✓</span><span><strong className="text-white">Know your pre-money valuation</strong> before you agree to any equity percentage. They're the same equation.</span></li>
              <li className="flex gap-3"><span style={{ color: "#C9A96E", flexShrink: 0 }}>✓</span><span><strong className="text-white">Model cumulative dilution across 3–4 rounds</strong> before accepting seed terms. The compounding effect surprises most first-time founders.</span></li>
              <li className="flex gap-3"><span style={{ color: "#C9A96E", flexShrink: 0 }}>✓</span><span><strong className="text-white">Separate economic and governance dilution.</strong> Dual-class shares let you reduce % while maintaining control. Understand if this is available to you.</span></li>
              <li className="flex gap-3"><span style={{ color: "#C9A96E", flexShrink: 0 }}>✓</span><span><strong className="text-white">Ask about anti-dilution provisions</strong> in investor term sheets. Broad-based weighted average anti-dilution is standard and founder-friendly. Full-ratchet is not.</span></li>
              <li className="flex gap-3"><span style={{ color: "#C9A96E", flexShrink: 0 }}>✓</span><span><strong className="text-white">Raise with purpose.</strong> Define what milestone the round funds, not just how much runway it buys.</span></li>
              <li className="flex gap-3"><span style={{ color: "#C9A96E", flexShrink: 0 }}>✓</span><span><strong className="text-white">Get a startup lawyer before you sign anything.</strong> Carta, Pulley, or Capbase can model the cap table. An attorney interprets the terms.</span></li>
            </ul>
          </Callout>

          {/* Cross-link to equity 101 */}
          <div
            className="my-10 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5"
            style={{ backgroundColor: "#0a1020", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div className="flex-1">
              <p className="text-[0.6rem] font-bold uppercase tracking-widest mb-1" style={{ color: "#C9A96E" }}>Related Guide</p>
              <p className="text-white font-semibold text-sm leading-snug">Startup Equity 101: The Complete Guide to Founder Splits, Vesting, and Cap Table Management</p>
              <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Covers the full equity picture — founder splits, employee options, and ESOP structure</p>
            </div>
            <a
              href="/guides/startup-equity-101"
              className="flex-shrink-0 rounded-full px-6 py-2.5 text-xs font-bold transition-opacity hover:opacity-90 whitespace-nowrap"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
            >
              Read the guide →
            </a>
          </div>

          {/* Gildre CTA */}
          <div
            className="mt-14 rounded-2xl p-8 text-center"
            style={{ background: "linear-gradient(135deg, #1C2744 0%, #0a1020 100%)", border: "1px solid rgba(201,169,110,0.2)" }}
          >
            <p className="text-[0.65rem] font-bold uppercase tracking-widest mb-3" style={{ color: "#C9A96E" }}>
              Gildre Community
            </p>
            <h3
              className="text-[1.5rem] font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Work through your fundraising strategy with founders who've done it.
            </h3>
            <p className="text-sm leading-relaxed mb-8 mx-auto max-w-md" style={{ color: "rgba(255,255,255,0.55)" }}>
              Gildre is a private community for founders navigating fundraising, dilution, and every other high-stakes decision that comes with building a company. Apply to join.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="/membership"
                className="rounded-full px-8 py-3.5 text-sm font-bold transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
              >
                Apply to Gildre →
              </a>
              <a
                href="/content"
                className="rounded-full px-8 py-3.5 text-sm font-semibold transition-opacity hover:opacity-80"
                style={{ color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                More Founder Guides
              </a>
            </div>
          </div>

        </article>

        {/* ── Footer ───────────────────────────────────────────────────── */}
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
    </>
  );
}
