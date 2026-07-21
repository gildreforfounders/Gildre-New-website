import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.gildre.com/guides/startup-fundraising-terminology" },
  title: "Startup Fundraising Terminology: The Complete Founder's Glossary — From Pre-Seed to Series C | Gildre",
  description:
    "Every fundraising term founders need to know — runway, burn rate, dilution, convertible notes, term sheets, SAFEs, and 20+ more. Plain-language definitions with context on when each term actually matters.",
  keywords: [
    "startup fundraising terminology",
    "startup fundraising glossary",
    "fundraising terms for founders",
    "what is a term sheet",
    "what is dilution startup",
    "pre-seed vs seed funding",
    "Series A Series B Series C explained",
    "convertible note startup",
    "angel investor vs VC",
    "burn rate runway explained",
    "TAM SAM SOM",
    "startup funding stages",
    "ARR MRR startup metrics",
    "accredited investor definition",
  ],
  openGraph: {
    title: "Startup Fundraising Terminology: The Complete Founder's Glossary",
    description:
      "Every fundraising term founders need — runway, burn rate, dilution, convertible notes, term sheets, and 20+ more. Plain-language definitions with real context.",
    type: "article",
    url: "https://www.gildre.com/guides/startup-fundraising-terminology",
    images: [{ url: "https://www.gildre.com/images/fundraising-plant-coins.webp" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Startup Fundraising Terminology: The Complete Founder's Glossary — From Pre-Seed to Series C",
  description:
    "Every fundraising term founders need to know — runway, burn rate, dilution, convertible notes, term sheets, and 20+ more. Plain-language definitions with context.",
  image: "https://www.gildre.com/images/fundraising-plant-coins.webp",
  author: { "@type": "Organization", name: "Gildre", url: "https://www.gildre.com" },
  publisher: {
    "@type": "Organization",
    name: "Gildre",
    url: "https://www.gildre.com",
    logo: { "@type": "ImageObject", url: "https://www.gildre.com/images/gildre-logo.png" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.gildre.com/guides/startup-fundraising-terminology" },
  keywords: "startup fundraising terminology, pre-seed funding, seed round, Series A, burn rate, runway, dilution, term sheet, convertible note, angel investor, venture capital, TAM SAM SOM, ARR MRR",
  about: [
    { "@type": "Thing", name: "Startup Fundraising" },
    { "@type": "Thing", name: "Venture Capital" },
    { "@type": "Thing", name: "Angel Investing" },
    { "@type": "Organization", name: "Gildre" },
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

function KeyTakeaway({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="my-6 rounded-xl px-6 py-4"
      style={{ backgroundColor: "rgba(201,169,110,0.08)", borderLeft: "3px solid #C9A96E" }}
    >
      <p className="mb-2 text-[0.6rem] font-bold uppercase tracking-widest" style={{ color: "#C9A96E" }}>
        Key Takeaway
      </p>
      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.82)" }}>
        {children}
      </p>
    </div>
  );
}

function Term({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <div
      className="mb-4 rounded-xl px-6 py-5"
      style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
    >
      <p className="mb-2 text-sm font-bold" style={{ color: "#C9A96E" }}>{term}</p>
      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>{children}</p>
    </div>
  );
}

function StageCard({ round, range, description }: { round: string; range: string; description: string }) {
  return (
    <div
      className="rounded-xl p-5"
      style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,169,110,0.12)" }}
    >
      <div className="mb-1 flex items-baseline justify-between gap-3 flex-wrap">
        <p className="font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>{round}</p>
        <p className="text-xs font-semibold" style={{ color: "#C9A96E" }}>{range}</p>
      </div>
      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{description}</p>
    </div>
  );
}

export default function StartupFundraisingTerminology() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>

        {/* Hero */}
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
                Reference Guide
              </span>
              <span className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
                Gildre Founder Guide · 10 min read
              </span>
            </div>
            <h1
              className="text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.1] text-white"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Startup Fundraising Terminology: The Complete Founder&apos;s Glossary
            </h1>
            <p
              className="mt-5 text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.62)", maxWidth: "640px" }}
            >
              From pre-seed to Series C, from burn rate to anti-dilution provisions — every
              fundraising term you&apos;ll encounter, explained plainly and with the context that actually
              matters when you&apos;re sitting across from an investor.
            </p>

            {/* Hero image */}
            <div className="relative mt-10 overflow-hidden rounded-2xl" style={{ aspectRatio: "16/7" }}>
              <Image
                src="/images/fundraising-plant-coins.webp"
                alt="Plant growing from coins — startup fundraising guide"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Body */}
        <article className="mx-auto max-w-3xl px-6 pb-24 pt-4">

          {/* Intro */}
          <H2>Why Fundraising Terminology Matters — Even If You&apos;re Not Raising</H2>
          <KeyTakeaway>
            Knowing startup fundraising terminology before your first investor meeting gives you negotiating leverage, helps you identify unfavorable terms early, and signals to investors that you understand the mechanics of the deal you're entering. Even founders who don't plan to raise VC benefit from fluency in these terms.
          </KeyTakeaway>
          <Body>
            Startup fundraising has its own language, and it&apos;s denser than most. VCs, angels,
            term sheets, convertible notes, SAFEs, dilution, runway — every conversation with an
            investor, advisor, or even a well-funded peer assumes you know what these words mean.
            The founders who stumble in those rooms usually don&apos;t stumble on the idea. They stumble
            on the vocabulary.
          </Body>
          <Body>
            That said, understanding fundraising terminology is not the same as deciding to fundraise.
            Not every startup should raise venture capital — bootstrapping, staying profitable, or
            raising a single angel round can be the right answer depending on your market, margins,
            and ambitions. But every founder should understand the terms regardless, because they
            define the rules of the game even when you choose not to play it the conventional way.
          </Body>

          {/* The lifecycle */}
          <H2>The Fundraising Lifecycle</H2>
          <Body>
            Startups typically move through a sequence of funding stages, each designed for a
            different level of maturity and risk. The progression is not rigid — some companies skip
            stages, some raise rounds out of order, and some raise seed rounds that are larger than
            some Series As. But the general arc holds.
          </Body>

          <div className="mt-6 flex flex-col gap-4">
            <StageCard
              round="Bootstrapping"
              range="Self-funded"
              description="Founders fund the company from personal savings, early revenue, or income from other ventures. You retain 100% of equity but grow at the pace your cash allows. Many successful companies — including Jotform, which has 25M+ users — have never raised a dollar of external capital."
            />
            <StageCard
              round="Pre-Seed"
              range="$50K – $2M"
              description="The earliest external capital, typically raised before the product is fully built or before meaningful revenue exists. Usually comes from friends, family, angel investors, or early-stage funds. Covers market research, initial product development, and the first hires."
            />
            <StageCard
              round="Seed"
              range="$250K – $5M (some go higher)"
              description="The first official equity funding round. The company typically has a product and early traction. Used to reach product-market fit, grow the team, and prove out core metrics. Seed rounds into the $10M–$30M+ range have become common in competitive markets."
            />
            <StageCard
              round="Series A"
              range="$2M – $15M"
              description="Raised once the company has demonstrated consistent revenue growth and a repeatable go-to-market motion. Investors want to see evidence that the model works — not just a promising product. Used to scale sales, marketing, and operations."
            />
            <StageCard
              round="Series B and Beyond"
              range="$15M+"
              description="Each subsequent round is raised to accelerate proven growth, expand into new markets, or build infrastructure for scale. By Series B and C, institutional VCs typically lead, and founder equity has been diluted significantly through each round."
            />
          </div>

          <Callout title="The trade-off every founder should understand">
            <Body>
              Raising capital lets you grow faster. It also means giving up ownership — a piece of
              every outcome, good or bad. Bootstrapping means slower growth but higher ownership at
              exit. Neither is universally better. The right answer depends on how big your market is,
              how fast your competitors are moving, and how much of the upside you want to own when
              you get there.
            </Body>
          </Callout>

          {/* World map image */}
          <div className="relative my-10 overflow-hidden rounded-2xl" style={{ aspectRatio: "4/3" }}>
            <Image
              src="/images/fundraising-world-map-money.webp"
              alt="Global fundraising and capital markets"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
            />
          </div>

          {/* Deal mechanics */}
          <H2>Deal Mechanics: The Terms That Govern Every Round</H2>
          <KeyTakeaway>
            The most consequential terms in any funding round are valuation, dilution, and the provisions that govern what happens at exit. Founders who understand pro rata rights, anti-dilution clauses, and liquidation preferences before signing avoid surprises that can cost significant equity — sometimes the difference between a meaningful outcome and a disappointing one.
          </KeyTakeaway>
          <Body>
            These are the terms that define how a deal actually works — what you give, what you get,
            and what happens to your ownership over time.
          </Body>

          <Term term="Runway">
            The number of months a company can operate before running out of cash, given its current
            burn rate. If you have $600K in the bank and spend $50K per month, you have 12 months
            of runway. Extending runway is one of the most important levers available to a founder —
            it gives you time to hit milestones before you need to raise again, which almost always
            means raising at a better valuation.
          </Term>

          <Term term="Burn Rate">
            The amount of cash a company spends per month. Gross burn is total monthly spend. Net
            burn is monthly spend minus monthly revenue. A company generating $30K/month in revenue
            and spending $80K/month has a net burn of $50K. Investors care about burn rate because
            it tells them how much time your runway buys and how capital-efficiently you operate.
          </Term>

          <Term term="Valuation (Pre-Money and Post-Money)">
            Valuation is how much your company is worth. Pre-money valuation is the value before
            new investment is added. Post-money valuation is pre-money plus the investment. If an
            investor puts in $1M at a $4M pre-money valuation, the post-money valuation is $5M and
            the investor owns 20%. Always clarify which valuation you&apos;re negotiating — the difference
            matters.
          </Term>

          <Term term="Dilution">
            When you issue new shares to investors, existing shareholders own a smaller percentage
            of the total. If you own 80% and raise a 20% round, you now own 64% (80% × 80%).
            Dilution is normal and often necessary — the goal is for your smaller percentage of a
            larger, more valuable company to be worth more than your larger percentage of the
            earlier-stage version.
          </Term>

          <Term term="Term Sheet">
            A non-binding document that outlines the key terms of a proposed investment: valuation,
            investment amount, ownership percentage, liquidation preferences, board seats, and
            investor rights. It&apos;s a summary, not the final contract — but the terms in it typically
            carry forward into the binding legal documents. Read everything in a term sheet carefully,
            especially the liquidation preferences and anti-dilution clauses.
          </Term>

          <Term term="Convertible Note">
            A short-term loan that converts into equity at a future round, rather than being repaid
            in cash. Common in early-stage deals because it lets both sides defer the hard question
            of valuation until there&apos;s more data. Usually comes with a discount rate (e.g., 20% off
            the next round&apos;s price) and a valuation cap (the maximum price at which it converts).
          </Term>

          <Term term="SAFE (Simple Agreement for Future Equity)">
            Created by Y Combinator as a simpler alternative to convertible notes. A SAFE is not
            a loan — it carries no interest rate and no maturity date. Investors receive the right
            to convert their investment into equity at a future round, subject to a cap and/or
            discount. SAFEs are now the most common instrument for pre-seed and seed raises.
          </Term>

          <Term term="Lead Investor">
            The investor who anchors a round — setting the valuation, negotiating the term sheet,
            and often taking a board seat. Once you have a lead, other investors follow on the same
            terms. Finding a lead is usually the hardest part of fundraising; once you have one,
            the rest of the round tends to close faster.
          </Term>

          <Term term="Pro Rata Rights">
            The right for an existing investor to participate in future funding rounds in proportion
            to their current ownership, allowing them to maintain their percentage. Investors care
            deeply about pro rata rights because they let them double down on winning companies
            without being diluted. Founders should understand what pro rata commitments mean for
            future round dynamics.
          </Term>

          {/* Investor types */}
          <H2>Types of Investors</H2>
          <Body>
            Not all capital is the same. The investor type shapes the relationship, the expectations,
            and the terms attached to the money.
          </Body>

          <Term term="Angel Investor">
            Individuals who invest their own money — not a fund&apos;s — in early-stage startups, typically
            at pre-seed or seed. Angels often invest because of a personal connection to the founder,
            the market, or the problem. The best angels bring networks and operating experience
            alongside capital. Check size typically ranges from $10K to $250K per deal.
          </Term>

          <Term term="Venture Capitalist (VC)">
            Professional investment firms that manage pooled capital from limited partners (LPs)
            such as university endowments, pension funds, and family offices. VCs invest in exchange
            for equity with the goal of returning capital to their LPs through exits (IPOs or
            acquisitions). Most VCs target a specific stage (seed, Series A, growth) and sector.
            They have a portfolio mentality — expecting most investments to fail, a few to return
            the fund.
          </Term>

          <Term term="Accredited Investor">
            A legal classification defined by the SEC: individuals with income exceeding $200K
            ($300K for a couple) or net worth over $1M (excluding primary residence), or certain
            professional credentials. Only accredited investors can participate in most private
            fundraising rounds. This matters because it shapes who you can legally solicit when
            raising capital.
          </Term>

          {/* Protective terms */}
          <H2>Legal and Protective Provisions</H2>

          <Term term="Anti-Dilution Protection">
            Provisions that protect investors if future shares are issued at a lower price than what
            they paid (a &ldquo;down round&rdquo;). Full ratchet anti-dilution adjusts the investor&apos;s price all the
            way down to the new lower price — the most founder-unfriendly version. Weighted average
            anti-dilution is more common and more balanced. Understand what you&apos;re agreeing to before
            signing.
          </Term>

          <Term term="Liquidation Preference">
            Investors&apos; right to be paid before common shareholders in a liquidation event (sale or
            wind-down). A 1× non-participating preference means investors get their money back first,
            then common shareholders split the rest. Participating preferred means investors get
            their money back AND participate in the remaining proceeds. Liquidation preferences
            can dramatically affect founder outcomes in acquisitions below certain valuations.
          </Term>

          <Term term="Data Room">
            A secure digital repository of documents shared with investors during due diligence:
            financials, cap table, contracts, IP assignments, incorporation documents, and any
            material agreements. A well-organized data room signals professionalism and speeds up
            close. Disorganized data rooms kill deals — not because the company is bad, but because
            they create doubt.
          </Term>

          <Term term="Exit Strategy">
            The mechanism through which investors eventually realize returns. The two primary exits
            are: (1) an IPO, where the company goes public and early shareholders can sell on the
            open market; and (2) an acquisition, where another company buys the startup. An acqui-hire
            is a specific type of acquisition where the buyer&apos;s primary interest is the team, not
            the product. Exit timelines for VC-backed companies typically run 7–10 years.
          </Term>

          {/* Metrics */}
          <H2>The Metrics Every Investor Will Ask About</H2>
          <KeyTakeaway>
            Investors evaluate early-stage companies primarily on three metrics: ARR growth rate, net dollar retention (whether existing customers expand or contract), and the CAC-to-LTV ratio. Being able to state these numbers clearly and defend your assumptions is what separates a confident investor conversation from a fumbled one.
          </KeyTakeaway>
          <Body>
            Investors don&apos;t evaluate companies on vibes. They evaluate them on metrics. Knowing
            these terms — and knowing your own numbers — is the difference between a confident
            investor conversation and a fumbled one.
          </Body>

          <p className="mb-3 mt-8 text-sm font-bold uppercase tracking-widest" style={{ color: "#C9A96E" }}>
            Growth Metrics
          </p>

          <Term term="ARR / MRR (Annual / Monthly Recurring Revenue)">
            The normalized annual or monthly value of all active subscriptions or recurring contracts.
            ARR is the standard benchmark for SaaS businesses. Investors use it to project growth
            trajectories and compare across companies. MRR × 12 = ARR — but be careful about
            including one-time or non-recurring revenue in the calculation.
          </Term>

          <Term term="CAC (Customer Acquisition Cost)">
            The total cost to acquire a single customer — sales, marketing, and overhead divided by
            new customers added. A CAC of $500 means you spend $500 in aggregate to win each new
            customer. CAC matters most in relation to LTV.
          </Term>

          <Term term="LTV (Lifetime Value)">
            The total revenue a single customer is expected to generate over their relationship with
            your company. LTV:CAC ratio is one of the most important indicators of business health
            — most investors want to see at least 3:1. LTV below CAC means you&apos;re paying more to
            acquire customers than they&apos;re worth.
          </Term>

          <Term term="NDR (Net Dollar Retention)">
            The percentage of revenue retained from existing customers after accounting for
            expansions, downgrades, and churn. 110% NDR means existing customers spend 10% more
            next year than this year — a sign of a healthy, sticky product. 80% NDR means you&apos;re
            losing ground even before factoring in new customer acquisition.
          </Term>

          <Term term="Churn Rate">
            The percentage of customers or revenue lost in a given period. High churn undermines
            growth because you&apos;re constantly filling a leaky bucket. Most investors want to see
            monthly churn below 2–3% for SaaS businesses.
          </Term>

          <Term term="MAU / DAU (Monthly / Daily Active Users)">
            Engagement metrics that track how many unique users interact with your product each month
            or day. Most relevant for consumer products and platforms. DAU/MAU ratio (sometimes
            called &ldquo;stickiness&rdquo;) measures how frequently monthly users engage on a daily basis.
          </Term>

          <p className="mb-3 mt-8 text-sm font-bold uppercase tracking-widest" style={{ color: "#C9A96E" }}>
            Market Metrics
          </p>

          <Term term="TAM (Total Addressable Market)">
            The total global revenue opportunity if your product captured 100% market share. Used
            to establish the upper bound of opportunity. Investors want large TAMs — not because
            they expect you to capture all of it, but because even a small slice of a large market
            can be a significant business.
          </Term>

          <Term term="SAM (Serviceable Addressable Market)">
            The portion of TAM that your specific product and go-to-market approach can realistically
            reach today — filtered by geography, customer segment, or distribution constraints. More
            grounded than TAM and the number that actually drives near-term revenue projections.
          </Term>

          <Term term="SOM (Serviceable Obtainable Market)">
            The portion of SAM you can realistically capture in the next 2–3 years given your
            current resources, team, and competitive position. This is the number investors will
            stress-test most aggressively, because it&apos;s where your actual plan lives.
          </Term>

          <p className="mb-3 mt-8 text-sm font-bold uppercase tracking-widest" style={{ color: "#C9A96E" }}>
            Financial Metrics
          </p>

          <Term term="EBITDA">
            Earnings Before Interest, Taxes, Depreciation, and Amortization. A measure of operating
            profitability that strips out financing and accounting decisions to give a cleaner view
            of core business performance. More relevant at growth and late stages than early stage,
            where most startups are intentionally unprofitable.
          </Term>

          <Term term="Gross Margin">
            Revenue minus cost of goods sold (COGS), expressed as a percentage of revenue. SaaS
            companies typically target 70–80%+ gross margins. Lower gross margins (common in
            hardware, marketplace, or services businesses) compress valuation multiples and
            complicate unit economics.
          </Term>

          <Term term="COGS (Cost of Goods Sold)">
            The direct costs associated with delivering your product or service — hosting, support,
            third-party services embedded in the product. Distinguished from operating expenses like
            sales, marketing, and G&amp;A. Reducing COGS is often the fastest path to improving
            gross margin.
          </Term>

          {/* Recommended reading */}
          <Callout title="Recommended Reading for Founders Exploring Fundraising">
            <div className="flex flex-col gap-3">
              {[
                { title: "The Young VC's Handbook", desc: "Practical fundraising mechanics from the investor's perspective — useful for understanding how VCs evaluate deals." },
                { title: "Start. Scale. Exit. Repeat.", desc: "Colin C. Campbell's framework for building businesses designed to exit — essential for understanding what investors are optimizing for." },
                { title: "The Venture Mindset", desc: "How to think like a VC — useful for founders who want to understand the decision-making frameworks on the other side of the table." },
              ].map((book) => (
                <div key={book.title} style={{ borderLeft: "2px solid rgba(201,169,110,0.4)", paddingLeft: "1rem" }}>
                  <p className="font-semibold text-white text-sm">{book.title}</p>
                  <p className="text-sm mt-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>{book.desc}</p>
                </div>
              ))}
            </div>
          </Callout>

          {/* CTA */}
          <div
            className="mt-12 rounded-2xl p-8 text-center"
            style={{ background: "linear-gradient(135deg, #1a2540 0%, #0f1a2e 100%)", border: "1px solid rgba(201,169,110,0.2)" }}
          >
            <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-widest" style={{ color: "#C9A96E" }}>
              Gildre Founder Community
            </p>
            <p className="mb-3 text-xl font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
              Know the terms. Now build the strategy.
            </p>
            <p className="mb-6 text-sm leading-relaxed mx-auto max-w-md" style={{ color: "rgba(255,255,255,0.55)" }}>
              Understanding terminology is the entry point. Working through your actual fundraising
              strategy — which round is right for you, which investors to target, how to structure
              your pitch — requires peers and mentors who have done it. That&apos;s what Gildre is for.
            </p>
            <a
              href="/#pricing"
              className="inline-block rounded-full px-8 py-3 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
            >
              Join Gildre →
            </a>
          </div>

        </article>
      </div>
    </>
  );
}
