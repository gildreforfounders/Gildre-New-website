import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Startup Equity 101: The Complete Founder's Guide to Splitting Shares, Vesting Schedules, and Managing Your Cap Table | Gildre",
  description:
    "A practical guide to startup equity for founders — how to split shares with co-founders, structure employee stock options, understand dilution, and avoid the mistakes that destroy cap tables. Includes equity benchmarks, vesting schedules, and dilution examples.",
  keywords: [
    "startup equity guide",
    "how to split equity co-founders",
    "founder equity split",
    "employee stock options startup",
    "ESOP startup percentage",
    "vesting schedule startup",
    "equity dilution explained",
    "cap table management",
    "Slicing Pie model",
    "common vs preferred shares startup",
    "startup equity for employees",
    "how much equity to give employees",
    "startup equity 101",
  ],
  openGraph: {
    title: "Startup Equity 101: The Complete Founder's Guide",
    description:
      "How to split shares with co-founders, structure employee options, understand dilution, and avoid the mistakes that sink cap tables — explained without legal jargon.",
    type: "article",
    url: "https://www.gildre.com/guides/startup-equity-101",
    images: [{ url: "https://www.gildre.com/images/equity-growth-coins.webp" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Startup Equity 101: The Complete Founder's Guide to Splitting Shares, Vesting Schedules, and Managing Your Cap Table",
  "description":
    "A practical guide to startup equity for founders — how to split shares with co-founders, structure employee stock options, understand dilution, and avoid the mistakes that destroy cap tables.",
  "image": "https://www.gildre.com/images/equity-growth-coins.webp",
  "author": { "@type": "Organization", "name": "Gildre", "url": "https://www.gildre.com" },
  "publisher": {
    "@type": "Organization",
    "name": "Gildre",
    "url": "https://www.gildre.com",
    "logo": { "@type": "ImageObject", "url": "https://www.gildre.com/images/gildre-logo.png" },
  },
  "datePublished": "2024-01-01",
  "dateModified": "2024-01-01",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.gildre.com/guides/startup-equity-101" },
  "keywords": "startup equity, founder equity split, vesting schedule, employee stock options, ESOP, cap table, dilution, Slicing Pie, common shares, preferred shares",
  "about": [
    { "@type": "Thing", "name": "Startup Equity" },
    { "@type": "Thing", "name": "Employee Stock Options" },
    { "@type": "Thing", "name": "Cap Table Management" },
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
    <h3
      className="mb-3 mt-8 text-[1.1rem] font-bold text-white"
    >
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

export default function StartupEquity101() {
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
              <span
                className="rounded-full px-3 py-1 text-[0.6rem] font-bold uppercase tracking-widest"
                style={{ backgroundColor: "rgba(91,127,166,0.2)", color: "#5B7FA6" }}
              >
                Operations
              </span>
              <span className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
                Gildre Founder Guide · 12 min read
              </span>
            </div>
            <h1
              className="text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.1] text-white"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Startup Equity 101: The Complete Founder's Guide to Splitting Shares, Vesting, and Managing Your Cap Table
            </h1>
            <p className="mt-6 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              How to split shares with co-founders fairly, structure employee stock options, survive dilution from investors, and avoid the equity mistakes that haunt founders for years — explained without legal jargon.
            </p>
          </div>
        </section>

        {/* ── Article Body ─────────────────────────────────────────────── */}
        <article className="mx-auto max-w-3xl px-6 py-16">

          {/* Quick reference */}
          <Callout title="What You'll Learn in This Guide">
            <ul className="space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
              <li>• <span className="text-white font-medium">Founder equity splits</span> — why 50/50 is often wrong, and how to use contribution-based frameworks instead</li>
              <li>• <span className="text-white font-medium">Vesting schedules</span> — the 4-year / 1-year cliff standard, and why it protects everyone</li>
              <li>• <span className="text-white font-medium">Employee option pools</span> — how much to allocate, and how much equity each role should get</li>
              <li>• <span className="text-white font-medium">Dilution mechanics</span> — how funding rounds change ownership, with a worked example</li>
              <li>• <span className="text-white font-medium">Common vs. preferred shares</span> — what investors get that employees don't</li>
              <li>• <span className="text-white font-medium">Exit scenarios</span> — what happens to equity at acquisition or IPO</li>
            </ul>
          </Callout>

          {/* Hero image */}
          <div className="my-10 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            <Image
              src="/images/equity-stock-charts.webp"
              alt="Stock market charts — startup equity and cap table management"
              width={1400}
              height={933}
              className="w-full"
              style={{ objectFit: "cover", maxHeight: "380px" }}
            />
          </div>

          <Body>
            Equity is the most consequential decision you'll make as a founder — and one of the most frequently botched. The mistakes happen early, before anyone knows what they're doing, and they compound quietly for years until they blow up at the worst possible moment: during a raise, a hire, or an acquisition.
          </Body>
          <Body>
            This guide covers the fundamentals clearly, so you can make decisions with confidence rather than hope.
          </Body>

          {/* ── Part 1: Founder Equity ────────────────────────────────── */}
          <H2>Part 1: Splitting Founder Equity</H2>

          <Body>
            The most common founder equity mistake isn't greed — it's false fairness. A 50/50 split feels democratic, but it's almost never accurate to what each person actually contributes. And when the split doesn't match reality, resentment follows.
          </Body>

          <H3>What to factor in before you split anything</H3>

          <div className="mb-6 rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "rgba(201,169,110,0.1)" }}>
                  <th className="px-5 py-3 text-left font-semibold" style={{ color: "#C9A96E" }}>Factor</th>
                  <th className="px-5 py-3 text-left font-semibold" style={{ color: "#C9A96E" }}>Why It Matters</th>
                </tr>
              </thead>
              <tbody style={{ backgroundColor: "#0a1020" }}>
                {[
                  ["Who originated the idea", "Idea credit matters less than execution — weight this lightly"],
                  ["Time commitment", "Full-time vs. part-time is the biggest single lever"],
                  ["Capital contribution", "Cash in deserves higher weight than unpaid time"],
                  ["Skills that are hardest to replace", "A CTO who can actually build the product is worth more than an advisor"],
                  ["Early customers or revenue brought in", "Proof of sales ability should be rewarded at founding"],
                ].map(([factor, why], i) => (
                  <tr key={i} style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                    <td className="px-5 py-3 font-medium text-white">{factor}</td>
                    <td className="px-5 py-3" style={{ color: "rgba(255,255,255,0.55)" }}>{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H3>The Slicing Pie Model: dynamic equity that adjusts as contributions evolve</H3>

          <Body>
            Rather than locking in percentages on day one, the Slicing Pie model allocates equity dynamically based on what each founder actually contributes over time. The mechanics:
          </Body>

          <ul className="mb-6 space-y-3 text-sm pl-1" style={{ color: "rgba(255,255,255,0.72)" }}>
            <li className="flex gap-3"><span style={{ color: "#C9A96E", flexShrink: 0 }}>→</span> Each contribution type (time, cash, IP, equipment) is assigned a relative value</li>
            <li className="flex gap-3"><span style={{ color: "#C9A96E", flexShrink: 0 }}>→</span> Your equity percentage = your total contributions ÷ all contributions combined</li>
            <li className="flex gap-3"><span style={{ color: "#C9A96E", flexShrink: 0 }}>→</span> If a founder stops contributing, their slice stops growing — they don't dilute the people still working</li>
            <li className="flex gap-3"><span style={{ color: "#C9A96E", flexShrink: 0 }}>→</span> Cash is typically weighted at 2× unpaid time, since it carries more risk</li>
          </ul>

          <Body>
            Slicing Pie is particularly useful in the pre-revenue, pre-funding phase when it's hard to know how much time each founder will actually put in. It prevents the most common early mistake: allocating too much equity too soon to someone who ends up barely contributing.
          </Body>

          <H3>Vesting schedules: non-negotiable, even between best friends</H3>

          <Body>
            The standard is a <strong className="text-white">4-year vesting schedule with a 1-year cliff</strong>. This means:
          </Body>

          <ul className="mb-6 space-y-3 text-sm pl-1" style={{ color: "rgba(255,255,255,0.72)" }}>
            <li className="flex gap-3"><span style={{ color: "#C9A96E", flexShrink: 0 }}>→</span> Nothing vests in the first 12 months (the cliff)</li>
            <li className="flex gap-3"><span style={{ color: "#C9A96E", flexShrink: 0 }}>→</span> At the 1-year mark, 25% of shares vest all at once</li>
            <li className="flex gap-3"><span style={{ color: "#C9A96E", flexShrink: 0 }}>→</span> The remaining 75% vests monthly over the following 3 years</li>
            <li className="flex gap-3"><span style={{ color: "#C9A96E", flexShrink: 0 }}>→</span> If a co-founder leaves before the cliff, they walk away with nothing</li>
          </ul>

          <Warning>
            Without vesting, a co-founder can disappear after six months and still own 30% of your company. Investors will immediately flag this as a red flag during due diligence — and they're right to.
          </Warning>

          <H3>What happens when a founder leaves</H3>

          <Body>
            A founders' agreement should specify this before it needs to apply. Key questions to resolve upfront:
          </Body>
          <ul className="mb-6 space-y-2 text-sm pl-1" style={{ color: "rgba(255,255,255,0.72)" }}>
            <li className="flex gap-3"><span style={{ color: "#C9A96E", flexShrink: 0 }}>→</span> Does the departing founder keep their vested shares or are they required to sell them back?</li>
            <li className="flex gap-3"><span style={{ color: "#C9A96E", flexShrink: 0 }}>→</span> If shares are sold back, at what price — original cost or fair market value?</li>
            <li className="flex gap-3"><span style={{ color: "#C9A96E", flexShrink: 0 }}>→</span> Do remaining founders get right of first refusal on those shares?</li>
          </ul>
          <Body>
            The conversation is uncomfortable when everything is going well. It's devastating when it isn't. Have it early.
          </Body>

          {/* ── Part 2: Employee Equity ───────────────────────────────── */}
          <H2>Part 2: Employee Equity and Stock Options</H2>

          {/* Coins image */}
          <div className="my-8 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            <Image
              src="/images/equity-growth-coins.webp"
              alt="Coins with a plant growing — startup equity as long-term investment"
              width={1400}
              height={933}
              className="w-full"
              style={{ objectFit: "cover", maxHeight: "360px", objectPosition: "center" }}
            />
          </div>

          <Body>
            Equity is your primary recruiting and retention tool at the early stage — before you can compete on salary with established companies. Done right, it turns employees into co-owners who care about outcomes, not just outputs.
          </Body>

          <H3>The employee option pool</H3>

          <Body>
            Before raising your first institutional round, set aside <strong className="text-white">10–20% of total shares</strong> as an employee stock option pool (ESOP). This is standard, and investors will expect it. If you don't do it before the round, they'll require it after — which means the dilution comes entirely out of the founder pool.
          </Body>

          <Body>
            Start at 10% if you're early and lean. Go to 15–20% if you're planning aggressive hiring in the next 12–18 months.
          </Body>

          <H3>How much equity to give each role</H3>

          <Body>
            These ranges reflect early-stage norms. They compress significantly as the company matures and de-risks.
          </Body>

          <div className="my-6 overflow-hidden rounded-xl" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "rgba(201,169,110,0.1)" }}>
                  <th className="px-5 py-3 text-left font-semibold" style={{ color: "#C9A96E" }}>Role</th>
                  <th className="px-5 py-3 text-left font-semibold" style={{ color: "#C9A96E" }}>Typical Equity Range</th>
                  <th className="px-5 py-3 text-left font-semibold hidden sm:table-cell" style={{ color: "#C9A96E" }}>Notes</th>
                </tr>
              </thead>
              <tbody style={{ backgroundColor: "#0a1020" }}>
                {[
                  ["CEO (non-founder)", "5–10%", "Only if replacing a founding CEO"],
                  ["CTO / VP Engineering", "1–5%", "Higher end if genuinely hard to find"],
                  ["VP of Sales / CMO", "0.5–3%", "Depends on stage and track record"],
                  ["Senior Engineer", "0.25–1%", "Adjust for market and seniority"],
                  ["First 10 employees", "0.1–1%", "Risk premium for joining early"],
                  ["Later employees (post-Series A)", "0.01–0.25%", "Smaller % but company is less risky"],
                  ["Advisors", "0.1–0.5%", "2-year vest, usually no cliff"],
                ].map(([role, range, notes], i) => (
                  <tr key={i} style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                    <td className="px-5 py-3 font-medium text-white">{role}</td>
                    <td className="px-5 py-3" style={{ color: "#C9A96E" }}>{range}</td>
                    <td className="px-5 py-3 hidden sm:table-cell" style={{ color: "rgba(255,255,255,0.45)" }}>{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H3>Standard vesting for employees</H3>

          <Body>
            Same structure as founders: <strong className="text-white">4-year vest, 1-year cliff</strong>. Some companies layer in performance-based vesting for senior hires, where a portion of equity unlocks on hitting specific milestones:
          </Body>

          <ul className="mb-6 space-y-2 text-sm pl-1" style={{ color: "rgba(255,255,255,0.72)" }}>
            <li className="flex gap-3"><span style={{ color: "#C9A96E", flexShrink: 0 }}>→</span> A sales lead might vest a tranche upon closing a certain ARR target</li>
            <li className="flex gap-3"><span style={{ color: "#C9A96E", flexShrink: 0 }}>→</span> A product lead could unlock shares on shipping a key feature</li>
            <li className="flex gap-3"><span style={{ color: "#C9A96E", flexShrink: 0 }}>→</span> A CTO might earn additional equity after building out a full engineering team</li>
          </ul>

          <Body>
            Performance vesting aligns incentives well — but only when milestones are clearly defined and mutually agreed on before the grant. Vague targets lead to disputes. Specific, measurable ones don't.
          </Body>

          {/* ── Part 3: Investors & Dilution ─────────────────────────── */}
          <H2>Part 3: Investors, Dilution, and Share Classes</H2>

          <H3>Common vs. preferred shares</H3>

          <div className="my-6 overflow-hidden rounded-xl" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "rgba(201,169,110,0.1)" }}>
                  <th className="px-5 py-3 text-left font-semibold" style={{ color: "#C9A96E" }}>Share Type</th>
                  <th className="px-5 py-3 text-left font-semibold" style={{ color: "#C9A96E" }}>Who Gets Them</th>
                  <th className="px-5 py-3 text-left font-semibold" style={{ color: "#C9A96E" }}>Key Features</th>
                </tr>
              </thead>
              <tbody style={{ backgroundColor: "#0a1020" }}>
                <tr style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <td className="px-5 py-3 font-medium text-white">Common shares</td>
                  <td className="px-5 py-3" style={{ color: "rgba(255,255,255,0.65)" }}>Founders, employees, early advisors</td>
                  <td className="px-5 py-3" style={{ color: "rgba(255,255,255,0.45)" }}>Standard voting rights; paid out last in a liquidation</td>
                </tr>
                <tr style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <td className="px-5 py-3 font-medium text-white">Preferred shares</td>
                  <td className="px-5 py-3" style={{ color: "rgba(255,255,255,0.65)" }}>Institutional investors (VCs, angels)</td>
                  <td className="px-5 py-3" style={{ color: "rgba(255,255,255,0.45)" }}>Liquidation preferences, anti-dilution protections, sometimes board seats</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Body>
            The liquidation preference is the most important term in preferred shares. A 1× non-participating liquidation preference means investors get their money back first — then everyone splits the remainder. A 2× preference means they get 2× their investment before anyone else sees anything. Know what you're agreeing to.
          </Body>

          <H3>How dilution actually works: a worked example</H3>

          <Body>
            Your company starts with two founders splitting ownership equally:
          </Body>

          <div className="my-6 overflow-hidden rounded-xl" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
                  <th className="px-5 py-3 text-left font-semibold text-white">Stakeholder</th>
                  <th className="px-5 py-3 text-left font-semibold" style={{ color: "#C9A96E" }}>At Founding</th>
                  <th className="px-5 py-3 text-left font-semibold" style={{ color: "#5B7FA6" }}>After Seed (20%)</th>
                  <th className="px-5 py-3 text-left font-semibold" style={{ color: "#A67B5B" }}>After Series A (25%)</th>
                </tr>
              </thead>
              <tbody style={{ backgroundColor: "#0a1020" }}>
                {[
                  ["Founder A", "50%", "40%", "30%"],
                  ["Founder B", "50%", "40%", "30%"],
                  ["Seed Investors", "—", "20%", "15%"],
                  ["Series A Investors", "—", "—", "25%"],
                  ["Employee Pool", "—", "—", "—"],
                ].map(([name, founding, seed, seriesA], i) => (
                  <tr key={i} style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                    <td className="px-5 py-3 font-medium text-white">{name}</td>
                    <td className="px-5 py-3" style={{ color: "#C9A96E" }}>{founding}</td>
                    <td className="px-5 py-3" style={{ color: "#5B7FA6" }}>{seed}</td>
                    <td className="px-5 py-3" style={{ color: "#A67B5B" }}>{seriesA}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Body>
            Each founder goes from 50% to 30% through two rounds — and that's before any employee pool dilution. The percentage shrinks, but the value of that 30% may be far greater than the original 50% if the business has grown. Dilution isn't inherently bad. Dilution at a bad valuation is.
          </Body>

          <Warning>
            A pre-money valuation determines how much your existing ownership is worth before new money comes in. Always negotiate on pre-money, and understand how the option pool shuffle works — investors sometimes require the pool to be created pre-investment, which dilutes founders before they've counted the investment.
          </Warning>

          {/* ── Part 4: Long-Term Equity Management ──────────────────── */}
          <H2>Part 4: Managing Equity as Your Company Grows</H2>

          <H3>Equity refreshers</H3>
          <Body>
            After 2–3 years, early employees may have most of their options vested — which removes a key retention lever. Many fast-growing startups issue equity refresher grants to keep top performers engaged and feeling ownership over what they're building. Budget for this in your option pool planning.
          </Body>

          <H3>Secondary sales</H3>
          <Body>
            As the company gains traction, founders and employees may want to sell a portion of their vested shares before an exit — to pay off debt, buy a house, or simply diversify. Secondary sales can happen on company-approved tender offers or through secondary market platforms. Some companies allow them; others restrict them to avoid creating a "short-timer" culture. Have a clear policy before employees ask.
          </Body>

          <H3>Exit scenarios: what happens at acquisition or IPO</H3>
          <Body>
            At exit, equity holders get paid based on ownership percentage and the deal structure. The key terms to understand:
          </Body>
          <ul className="mb-6 space-y-2 text-sm pl-1" style={{ color: "rgba(255,255,255,0.72)" }}>
            <li className="flex gap-3"><span style={{ color: "#C9A96E", flexShrink: 0 }}>→</span> <strong className="text-white">Liquidation waterfall:</strong> preferred shareholders (investors) typically get paid before common shareholders (founders and employees)</li>
            <li className="flex gap-3"><span style={{ color: "#C9A96E", flexShrink: 0 }}>→</span> <strong className="text-white">Participating preferred:</strong> investors get their preference AND participate in the remainder — worse for founders</li>
            <li className="flex gap-3"><span style={{ color: "#C9A96E", flexShrink: 0 }}>→</span> <strong className="text-white">Acceleration clauses:</strong> some employee option grants include single or double-trigger acceleration — all unvested options vest immediately on acquisition or termination post-acquisition</li>
            <li className="flex gap-3"><span style={{ color: "#C9A96E", flexShrink: 0 }}>→</span> <strong className="text-white">Lock-up period:</strong> post-IPO, insiders typically can't sell shares for 180 days</li>
          </ul>

          {/* ── Summary ──────────────────────────────────────────────── */}
          <H2>The Key Decisions: A Quick Reference</H2>

          <Callout title="Equity Checklist for Founders">
            <ul className="space-y-3 text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
              <li className="flex gap-3">
                <span style={{ color: "#C9A96E", flexShrink: 0 }}>✓</span>
                <span><strong className="text-white">Don't default to 50/50.</strong> Base the split on actual and projected contributions. Use a Slicing Pie framework if timing is uncertain.</span>
              </li>
              <li className="flex gap-3">
                <span style={{ color: "#C9A96E", flexShrink: 0 }}>✓</span>
                <span><strong className="text-white">Vest everything.</strong> Founders, employees, advisors — 4 years with a 1-year cliff is standard. No exceptions.</span>
              </li>
              <li className="flex gap-3">
                <span style={{ color: "#C9A96E", flexShrink: 0 }}>✓</span>
                <span><strong className="text-white">Create the option pool before your round.</strong> 10–20% depending on hiring plans. Understand the pool shuffle before you agree to it.</span>
              </li>
              <li className="flex gap-3">
                <span style={{ color: "#C9A96E", flexShrink: 0 }}>✓</span>
                <span><strong className="text-white">Know your liquidation preference.</strong> 1× non-participating is founder-friendly. Anything else, get your lawyer to model the exit scenarios.</span>
              </li>
              <li className="flex gap-3">
                <span style={{ color: "#C9A96E", flexShrink: 0 }}>✓</span>
                <span><strong className="text-white">Get a founders' agreement in writing.</strong> Before you need it. Covers departure terms, share buyback rights, and non-competes.</span>
              </li>
              <li className="flex gap-3">
                <span style={{ color: "#C9A96E", flexShrink: 0 }}>✓</span>
                <span><strong className="text-white">Use cap table software from day one.</strong> Carta, Pulley, and Capbase all handle this well. Spreadsheets break once you have more than one round.</span>
              </li>
            </ul>
          </Callout>

          <Body>
            Equity isn't just a legal document. It's a statement about who you believe in, how much, and for how long. Structure it carelessly and you'll spend the next ten years dealing with the consequences. Structure it thoughtfully and it becomes one of your most powerful tools for building the team and the company you actually want.
          </Body>

          {/* ── Gildre CTA ───────────────────────────────────────────── */}
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
              Talk equity strategy with founders who've been through it.
            </h3>
            <p className="text-sm leading-relaxed mb-8 mx-auto max-w-md" style={{ color: "rgba(255,255,255,0.55)" }}>
              Gildre is a private community where founders work through decisions like equity structure, fundraising, and hiring with peers who've navigated the same terrain. Apply to join.
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
