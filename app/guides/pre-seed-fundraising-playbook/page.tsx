import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Pre-Seed Fundraising: The 7-Step Playbook for First-Time Founders Raising Before They Have Traction",
  description:
    "A complete founder's guide to raising your first pre-seed round — from clarifying goals and building your narrative to targeting the right investors, perfecting your pitch deck, and closing the deal. With investor tools, instrument comparison, and real founder quotes.",
  keywords: [
    "pre-seed fundraising",
    "how to raise pre-seed",
    "pre-seed round guide",
    "first-time founder fundraising",
    "pitch deck tips",
    "SAFE note vs convertible note",
    "angel investors",
    "pre-seed VC",
    "startup fundraising playbook",
    "Gildre",
    "Y Combinator",
    "venture capital",
  ],
  openGraph: {
    title:
      "Pre-Seed Fundraising: The 7-Step Playbook for First-Time Founders Raising Before They Have Traction",
    description:
      "A complete founder's guide to raising your first pre-seed round — from clarifying goals and building your narrative to targeting the right investors, perfecting your pitch deck, and closing the deal.",
    type: "article",
    images: ["/images/preseed-pitch-deck.webp"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Pre-Seed Fundraising: The 7-Step Playbook for First-Time Founders Raising Before They Have Traction",
  description:
    "A complete founder's guide to raising your first pre-seed round — from clarifying goals and building your narrative to targeting the right investors, perfecting your pitch deck, and closing the deal.",
  image: "https://www.gildre.com/images/preseed-pitch-deck.webp",
  author: {
    "@type": "Organization",
    name: "Gildre",
    url: "https://www.gildre.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Gildre",
    url: "https://www.gildre.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.gildre.com/guides/pre-seed-fundraising-playbook",
  },
  about: [
    { "@type": "Thing", name: "Pre-Seed Fundraising" },
    { "@type": "Thing", name: "Startup Funding" },
    { "@type": "Thing", name: "Venture Capital" },
    { "@type": "Organization", name: "Gildre" },
  ],
  keywords:
    "pre-seed fundraising, how to raise pre-seed, pitch deck, SAFE note, angel investors, startup fundraising, venture capital",
};

/* ── Helper components ── */

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        color: "#f0e6d3",
        fontSize: "1.55rem",
        fontWeight: 700,
        marginBottom: "1rem",
        marginTop: "2.75rem",
        letterSpacing: "-0.01em",
      }}
    >
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        color: "#e8dcc8",
        fontSize: "1.1rem",
        fontWeight: 700,
        marginBottom: "0.6rem",
        marginTop: "1.75rem",
      }}
    >
      {children}
    </h3>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        color: "#c8cdd8",
        fontSize: "1.05rem",
        lineHeight: "1.85",
        marginBottom: "1.15rem",
      }}
    >
      {children}
    </p>
  );
}

function Quote({ children, attribution }: { children: React.ReactNode; attribution?: string }) {
  return (
    <div style={{ margin: "2rem 0" }}>
      <blockquote
        style={{
          borderLeft: "4px solid #C9A96E",
          paddingLeft: "1.5rem",
          color: "#e8dcc8",
          fontSize: "1.1rem",
          fontStyle: "italic",
          lineHeight: "1.75",
          margin: 0,
        }}
      >
        {children}
      </blockquote>
      {attribution && (
        <p
          style={{
            color: "#7a8499",
            fontSize: "0.85rem",
            paddingLeft: "1.5rem",
            marginTop: "0.5rem",
          }}
        >
          — {attribution}
        </p>
      )}
    </div>
  );
}

function Callout({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0f1a2e 0%, #0a1020 100%)",
        border: "1px solid #C9A96E33",
        borderRadius: "10px",
        padding: "1.5rem 1.75rem",
        margin: "1.75rem 0",
      }}
    >
      {title && (
        <p
          style={{
            color: "#C9A96E",
            fontWeight: 700,
            fontSize: "0.78rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
          }}
        >
          {title}
        </p>
      )}
      <div style={{ color: "#c8cdd8", fontSize: "0.97rem", lineHeight: "1.75" }}>{children}</div>
    </div>
  );
}

function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "#1a0a0a",
        border: "1px solid #8B2222",
        borderLeft: "4px solid #cc3333",
        borderRadius: "8px",
        padding: "1.25rem 1.5rem",
        margin: "1.5rem 0",
        color: "#e8c8c8",
        fontSize: "0.97rem",
        lineHeight: "1.7",
      }}
    >
      <span style={{ fontWeight: 700, color: "#cc3333", marginRight: "0.5rem" }}>⚠ Watch out:</span>
      {children}
    </div>
  );
}

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "#0a1a12",
        border: "1px solid #1a6b3a",
        borderLeft: "4px solid #2a9a5a",
        borderRadius: "8px",
        padding: "1.25rem 1.5rem",
        margin: "1.5rem 0",
        color: "#c8e8d8",
        fontSize: "0.97rem",
        lineHeight: "1.7",
      }}
    >
      <span style={{ fontWeight: 700, color: "#2a9a5a", marginRight: "0.5rem" }}>💡 Best practice:</span>
      {children}
    </div>
  );
}

function ToolPill({ label, href }: { label: string; href?: string }) {
  const style = {
    display: "inline-block",
    background: "#1a2540",
    border: "1px solid #C9A96E44",
    color: "#C9A96E",
    borderRadius: "6px",
    padding: "0.3rem 0.75rem",
    fontSize: "0.83rem",
    fontWeight: 600,
    marginRight: "0.4rem",
    marginBottom: "0.4rem",
    textDecoration: "none",
  };
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={style}>
        {label}
      </a>
    );
  }
  return <span style={style}>{label}</span>;
}

function StepHeader({ num, title }: { num: string; title: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginTop: "3rem",
        marginBottom: "1.25rem",
      }}
    >
      <span
        style={{
          background: "#C9A96E",
          color: "#080e1a",
          fontWeight: 800,
          fontSize: "1rem",
          borderRadius: "50%",
          width: "2.2rem",
          height: "2.2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {num}
      </span>
      <h2
        style={{
          color: "#f0e6d3",
          fontSize: "1.45rem",
          fontWeight: 700,
          margin: 0,
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </h2>
    </div>
  );
}

export default function KickingOffPreSeed() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main
        style={{
          background: "linear-gradient(180deg, #080e1a 0%, #0a1020 100%)",
          minHeight: "100vh",
          paddingTop: "6rem",
          paddingBottom: "5rem",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 1.5rem" }}>

          {/* Tags */}
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
            {["Venture Capital", "Fundraising"].map((tag) => (
              <span
                key={tag}
                style={{
                  background: "#C9A96E22",
                  color: "#C9A96E",
                  border: "1px solid #C9A96E44",
                  borderRadius: "20px",
                  padding: "0.3rem 0.85rem",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1
            style={{
              color: "#f0e6d3",
              fontSize: "clamp(1.9rem, 4vw, 2.65rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            Pre-Seed Fundraising: The 7-Step Playbook for First-Time Founders Raising Before They Have Traction
          </h1>

          <p style={{ color: "#7a8499", fontSize: "0.9rem", marginBottom: "2.5rem" }}>
            Gildre · Fundraising Guides · 14 min read
          </p>

          {/* Intro image */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 9",
              borderRadius: "12px",
              overflow: "hidden",
              marginBottom: "2.5rem",
              border: "1px solid #ffffff10",
            }}
          >
            <Image
              src="/images/preseed-founder-laptop.webp"
              alt="Founder working on pre-seed fundraising strategy"
              fill
              style={{ objectFit: "cover" }}
              sizes="800px"
              priority
            />
          </div>

          {/* Intro */}
          <Body>
            Raising a pre-seed round is the first major fundraising milestone for most startups. You&apos;re
            turning an idea into a viable business — and convincing investors to back you before you
            have the metrics to justify it. Only about 25–30% of startups that attempt a pre-seed raise
            actually close one. Understanding why the others fail is where your edge starts.
          </Body>
          <Body>
            The good news: pre-seed is less about what you&apos;ve built and more about who you are, how
            clearly you understand the problem, and whether your vision is credible enough to bet on.
            This guide walks through 7 steps to give yourself the best possible shot.
          </Body>

          {/* What is pre-seed */}
          <H2>What Is Pre-Seed Funding?</H2>
          <Body>
            Pre-seed is the earliest stage of venture financing — typically used to validate an idea,
            build an MVP, and make the first one or two hires. Rounds range from $100K to $2M, and
            come from angel investors, pre-seed VC funds, accelerators, or friends and family.
          </Body>

          {/* Instrument comparison table */}
          <div style={{ overflowX: "auto", margin: "1.5rem 0 2rem" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.92rem",
                color: "#c8cdd8",
              }}
            >
              <thead>
                <tr>
                  {["Instrument", "How It Works", "Best For", "Key Tradeoff"].map((h) => (
                    <th
                      key={h}
                      style={{
                        background: "#1a2540",
                        color: "#C9A96E",
                        padding: "0.75rem 1rem",
                        textAlign: "left",
                        fontWeight: 700,
                        fontSize: "0.82rem",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        border: "1px solid #ffffff10",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["SAFE Note", "Converts to equity at next round", "Pre-seed / seed", "No interest, no maturity date — simpler but valuation deferred"],
                  ["Convertible Note", "Debt that converts to equity", "Pre-seed / seed", "Carries interest rate and maturity — adds deadline pressure"],
                  ["Equity Round", "Priced round with valuation set now", "Seed / Series A", "Cleaner cap table, but requires agreeing on valuation early"],
                ].map(([inst, how, best, trade], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#0a1020" : "#0d1428" }}>
                    {[inst, how, best, trade].map((cell, j) => (
                      <td
                        key={j}
                        style={{
                          padding: "0.75rem 1rem",
                          border: "1px solid #ffffff0d",
                          lineHeight: 1.5,
                          fontWeight: j === 0 ? 600 : 400,
                          color: j === 0 ? "#e8dcc8" : "#c8cdd8",
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Quote attribution="Michael Seibel, Partner at Y Combinator">
            "At pre-seed, investors are betting on the founders and their ability to execute, not on traction."
          </Quote>

          {/* Step 1 */}
          <StepHeader num="1" title="Clarify Your Fundraising Goals" />
          <Body>
            Before you send a single email, define what you actually need from this round — and why.
            Founders who skip this step almost always raise either too much (and over-dilute) or too
            little (and run out of runway before hitting a meaningful milestone).
          </Body>

          {[
            {
              q: "How much capital do you need, and what milestones will it achieve?",
              a: "Define the specific amount required to reach your next inflection point — product development, early customer acquisition, or a key hire. Investors want to see their capital driving measurable progress, not just extending runway.",
            },
            {
              q: "What type of investor aligns with your vision?",
              a: "Different investors bring different value beyond capital. Some offer deep industry expertise; others provide strategic partnerships or warm intros. Investor fit matters as much as the check size.",
            },
            {
              q: "How will the funds de-risk your business for the next stage?",
              a: "Clearly outlining how investment reduces key risks — validating product-market fit, proving unit economics, or proving demand — shows investors you're thinking ahead, not just spending to spend.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                borderLeft: "3px solid #C9A96E33",
                paddingLeft: "1.25rem",
                marginBottom: "1.25rem",
              }}
            >
              <p
                style={{
                  color: "#e8dcc8",
                  fontWeight: 600,
                  fontSize: "0.97rem",
                  marginBottom: "0.4rem",
                }}
              >
                {item.q}
              </p>
              <Body>{item.a}</Body>
            </div>
          ))}

          <Quote attribution="Caitlin Gleason, healthtech founder">
            "We originally thought we needed $1 million but realized we could hit key milestones with $500K. That clarity made our pitch stronger."
          </Quote>

          <Tip>
            Start with your milestones, then work backwards to the dollar amount. Investors respond better
            to "we need $600K to reach 500 paying customers in 12 months" than "we&apos;re raising a $600K round."
          </Tip>

          {/* Step 2 */}
          <StepHeader num="2" title="Build a Compelling Narrative" />
          <Body>
            Pre-seed investors don&apos;t fund spreadsheets — they fund conviction. Your narrative must
            answer four questions so clearly that the investor leaves the meeting able to explain your
            company to their partners without notes.
          </Body>

          <div style={{ overflowX: "auto", margin: "1.5rem 0 2rem" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.92rem",
                color: "#c8cdd8",
              }}
            >
              <thead>
                <tr>
                  {["Question", "What Investors Are Really Asking"].map((h) => (
                    <th
                      key={h}
                      style={{
                        background: "#1a2540",
                        color: "#C9A96E",
                        padding: "0.75rem 1rem",
                        textAlign: "left",
                        fontWeight: 700,
                        fontSize: "0.82rem",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        border: "1px solid #ffffff10",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["The Problem", "Does this pain point actually exist, and is it bad enough that people will pay to fix it?"],
                  ["The Solution", "Is your approach genuinely differentiated, or is it a slight variation on what already exists?"],
                  ["Market Potential", "Is the market large enough to justify a venture return — or is this a lifestyle business at scale?"],
                  ["Why You?", "What makes this team uniquely positioned to win — domain expertise, unfair access, prior experience?"],
                  ["Why Now?", "What has changed recently — regulation, technology, behavior — that makes this the right moment?"],
                ].map(([q, a], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#0a1020" : "#0d1428" }}>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        border: "1px solid #ffffff0d",
                        fontWeight: 600,
                        color: "#e8dcc8",
                        width: "30%",
                      }}
                    >
                      {q}
                    </td>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        border: "1px solid #ffffff0d",
                        lineHeight: 1.55,
                      }}
                    >
                      {a}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Quote attribution="Elliot Robinson, Partner at Bessemer Venture Partners">
            "Pre-seed investing is about conviction. If your story isn&apos;t compelling, investors won&apos;t be either."
          </Quote>

          {/* Step 3 */}
          <StepHeader num="3" title="Identify and Target the Right Investors" />
          <Body>
            Not every investor writes pre-seed checks — and among those who do, their focus varies by
            sector, geography, and stage. Sending the same cold pitch to 200 investors is less effective
            than sending a targeted, personalized approach to 30 who already invest in your space.
          </Body>

          <H3>Angel Investors</H3>
          <Body>
            High-net-worth individuals who invest their own capital at the earliest stages — often
            providing the first check before institutional VCs enter.
          </Body>
          <div style={{ marginBottom: "1rem" }}>
            <ToolPill label="LinkedIn" />
            <ToolPill label="AngelList" href="https://angel.co" />
            <ToolPill label="AngelList Syndicates" href="https://angel.co/syndicates" />
            <ToolPill label="SeedInvest" href="https://seedinvest.com" />
          </div>
          <Tip>
            Target angels who have invested in your business model before, not just your industry. A
            fintech angel who backed a marketplace is more relevant than a generic tech angel.
          </Tip>

          <H3>Pre-Seed Venture Firms</H3>
          <Body>
            Institutional funds that specifically write pre-seed checks, usually with a structured
            thesis about stage, sector, or founder archetype.
          </Body>
          <div style={{ marginBottom: "1rem" }}>
            <ToolPill label="First Round Capital" />
            <ToolPill label="Precursor Ventures" />
            <ToolPill label="Hustle Fund" />
            <ToolPill label="Contrary Capital" />
            <ToolPill label="Crunchbase" href="https://crunchbase.com" />
            <ToolPill label="PitchBook" />
          </div>
          <Tip>
            Before reaching out, read the firm&apos;s portfolio page. If they&apos;ve backed 3 companies in
            your exact space, that&apos;s either a strong signal of fit or a reason they won&apos;t back a
            competitor. Know which one it is before you send the email.
          </Tip>

          <H3>Accelerators</H3>
          <Body>
            Programs that provide early-stage funding, mentorship, and a network of investors in
            exchange for a small equity stake. Acceptance signals credibility and opens doors.
          </Body>
          <div style={{ marginBottom: "1rem" }}>
            <ToolPill label="Y Combinator" />
            <ToolPill label="Techstars" />
            <ToolPill label="500 Global" />
            <ToolPill label="Antler" />
          </div>
          <Tip>
            Accelerators are competitive. Strong applications skip the vision and focus on: what
            problem you&apos;ve already tested with real users, what you learned, and why this team is the
            one to solve it.
          </Tip>

          <H3>Warm Intros vs. Cold Outreach</H3>
          <Quote attribution="Rachel Green, fintech founder">
            "Cold outreach rarely works. Warm intros through mutual connections had a much higher success rate for us."
          </Quote>
          <Body>
            Investors receive hundreds of cold emails weekly. Getting into the right inbox requires
            strategy, not volume. The three highest-leverage paths to warm intros:
          </Body>
          <Callout>
            <ul style={{ margin: 0, paddingLeft: "1.25rem", lineHeight: 2 }}>
              <li>Ask portfolio founders from target funds for a referral — investors trust their existing founders</li>
              <li>Engage publicly with an investor&apos;s content before reaching out — build familiarity first</li>
              <li>Attend industry events and pitch competitions where investors are actively sourcing</li>
            </ul>
          </Callout>

          {/* Step 4 */}
          <StepHeader num="4" title="Perfect Your Pitch Deck" />

          {/* Pitch deck image */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 9",
              borderRadius: "12px",
              overflow: "hidden",
              margin: "1.5rem 0 2rem",
              border: "1px solid #ffffff10",
            }}
          >
            <Image
              src="/images/preseed-pitch-deck.webp"
              alt="Startup pitch deck displayed on a MacBook Pro — Uber's original UberCab concept deck"
              fill
              style={{ objectFit: "cover" }}
              sizes="800px"
            />
          </div>

          <Body>
            Your deck is a leave-behind, a conversation starter, and a signal of how clearly you
            think. It should be concise, visual, and structured so that an investor can understand
            your thesis in under 3 minutes before your meeting.
          </Body>

          <div style={{ overflowX: "auto", margin: "1.5rem 0 2rem" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.92rem",
                color: "#c8cdd8",
              }}
            >
              <thead>
                <tr>
                  {["Slide", "What to Cover", "Common Mistake"].map((h) => (
                    <th
                      key={h}
                      style={{
                        background: "#1a2540",
                        color: "#C9A96E",
                        padding: "0.75rem 1rem",
                        textAlign: "left",
                        fontWeight: 700,
                        fontSize: "0.82rem",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        border: "1px solid #ffffff10",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Problem", "The specific pain, who has it, and how bad it is", "Being too broad — \"healthcare is broken\" is not a problem"],
                  ["Solution", "How you solve the problem uniquely", "Describing features instead of outcomes"],
                  ["Market Opportunity", "TAM, SAM, SOM with sources", "Citing $500B TAM without explaining why you can capture any of it"],
                  ["Business Model", "How you make money, unit economics if known", "Skipping this because you haven't figured it out yet"],
                  ["Traction", "Users, signups, LOIs, pilots, revenue — whatever you have", "Hiding weak traction — sparse but real beats inflated"],
                  ["Go-to-Market", "How you'll reach your first 100 customers", "A generic \"content + sales\" answer with no specifics"],
                  ["Team", "Why this team, why now", "Listing credentials without connecting them to the problem"],
                  ["Financials & Ask", "How much, what milestones it buys, 18–24 month runway", "Asking for too much without justifying what it achieves"],
                ].map(([slide, what, mistake], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#0a1020" : "#0d1428" }}>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        border: "1px solid #ffffff0d",
                        fontWeight: 600,
                        color: "#e8dcc8",
                        width: "18%",
                      }}
                    >
                      {slide}
                    </td>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        border: "1px solid #ffffff0d",
                        lineHeight: 1.55,
                        width: "41%",
                      }}
                    >
                      {what}
                    </td>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        border: "1px solid #ffffff0d",
                        lineHeight: 1.55,
                        color: "#e8c8c8",
                        width: "41%",
                      }}
                    >
                      {mistake}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H3>Deck Tools Worth Using</H3>
          <div style={{ marginBottom: "1rem" }}>
            <ToolPill label="Canva" href="https://canva.com" />
            <ToolPill label="Beautiful.ai" href="https://beautiful.ai" />
            <ToolPill label="Pitch.com" href="https://pitch.com" />
            <ToolPill label="Tome" href="https://tome.app" />
            <ToolPill label="DocSend" href="https://docsend.com" />
            <ToolPill label="Slidebean" href="https://slidebean.com" />
          </div>
          <Body>
            DocSend is particularly underused: it lets you track which slides investors spend the most
            time on — giving you live signal about where interest peaks and where attention drops before
            your follow-up call.
          </Body>

          <Warning>
            Don&apos;t send a 25-slide deck with dense paragraphs on each slide. Investors will not read it
            before the meeting. Ten clear slides beat twenty cluttered ones every time.
          </Warning>

          {/* Step 5 */}
          <StepHeader num="5" title="Build Momentum With Early Wins" />
          <Body>
            You don&apos;t need revenue at pre-seed. But you do need evidence that something real is
            happening — that your idea is connecting with the world beyond your own head. The
            highest-leverage signals at this stage:
          </Body>

          <Callout title="Traction signals that move pre-seed investors">
            <ul style={{ margin: 0, paddingLeft: "1.25rem", lineHeight: 2 }}>
              <li>Beta users — even 20 engaged users who give you honest feedback</li>
              <li>Waitlist signups with strong conversion from a specific channel</li>
              <li>Letters of intent (LOIs) or verbal commitments from future customers</li>
              <li>An MVP, however scrappy, that solves the core problem</li>
              <li>An advisory board with genuine domain credibility</li>
              <li>A pilot agreement with a recognized company in your target market</li>
            </ul>
          </Callout>

          <Quote attribution="Peter Livingston, angel investor">
            "I don&apos;t expect revenue at pre-seed, but I do expect proof that users care about your solution."
          </Quote>

          <Warning>
            Vanity metrics won&apos;t move sophisticated investors. "10,000 LinkedIn followers" or "featured
            in TechCrunch" is not traction. "87 beta users with a 64% weekly retention rate" is.
          </Warning>

          {/* Step 6 */}
          <StepHeader num="6" title="Leverage Warm Introductions Strategically" />
          <Body>
            Warm intros are not just helpful — they&apos;re often the difference between getting a meeting
            and getting ignored. But getting the right intro matters as much as getting any intro.
            A weak referral from someone the investor barely knows can actually hurt more than a
            well-crafted cold email.
          </Body>

          <H3>The Intro Hierarchy</H3>
          {[
            { rank: "Highest value", source: "A founder the investor has backed before", why: "Direct trust transfer — the investor already respects their judgment" },
            { rank: "High value", source: "A mutual advisor or board member", why: "Signals you have access to quality networks" },
            { rank: "Medium value", source: "A peer founder in the same ecosystem", why: "Weaker trust transfer, but still beats cold" },
            { rank: "Lower value", source: "A LinkedIn connection you barely know", why: "Almost never moves the needle — better to go direct" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "1rem",
                padding: "0.85rem 0",
                borderBottom: i < 3 ? "1px solid #ffffff0d" : "none",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  color: "#C9A96E",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  minWidth: "8rem",
                  paddingTop: "0.1rem",
                }}
              >
                {item.rank}
              </span>
              <div>
                <p style={{ color: "#e8dcc8", fontWeight: 600, fontSize: "0.95rem", marginBottom: "0.2rem" }}>
                  {item.source}
                </p>
                <p style={{ color: "#7a8499", fontSize: "0.88rem" }}>{item.why}</p>
              </div>
            </div>
          ))}

          <Quote attribution="Nina Patel, AI startup founder">
            "I messaged an investor on Twitter about a topic they&apos;d posted. That led to a call, which turned into a term sheet."
          </Quote>

          {/* Step 7 */}
          <StepHeader num="7" title="Navigate Negotiations and Close the Round" />
          <Body>
            Pre-seed valuations vary widely — anywhere from $2M to $12M post-money depending on
            founder pedigree, market, and geography. The most important thing is not to optimize
            for valuation at the expense of the right partner or closing speed.
          </Body>

          <H3>What to Expect in Due Diligence</H3>
          <Body>
            Even at pre-seed, sophisticated investors will ask for documentation before wiring funds.
            Have these ready:
          </Body>
          <Callout>
            <ul style={{ margin: 0, paddingLeft: "1.25rem", lineHeight: 2 }}>
              <li>Cap table (can be a simple spreadsheet at this stage)</li>
              <li>Founder agreements, vesting schedules, and IP assignment docs</li>
              <li>Customer testimonials, LOIs, or early traction data</li>
              <li>Articles of incorporation and any existing investor agreements</li>
              <li>Financial model — even a simple 18-month projection is better than nothing</li>
            </ul>
          </Callout>

          <Warning>
            Don&apos;t let one investor string you along for months without a term sheet. Set a soft close
            date and communicate it clearly — scarcity and momentum are real forces in fundraising.
          </Warning>

          <H3>Handling Common Objections</H3>
          {[
            { objection: "\"You don't have enough traction\"", response: "Acknowledge it directly, then redirect to leading indicators — engagement quality, user interviews, waitlist conversion. Show you know what the right traction looks like at the next milestone." },
            { objection: "\"The market is too small\"", response: "Show the adjacent market expansion path. Most great companies started in a market that looked small (Airbnb = air mattresses, Stripe = developers). Where does your wedge lead?" },
            { objection: "\"I don't understand why you win\"", response: "This is a narrative failure. Sharpen your unfair advantage: proprietary data, a specific distribution channel, a founder insight no one else has. Make the moat concrete, not abstract." },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "#0d1428",
                border: "1px solid #ffffff0d",
                borderRadius: "8px",
                padding: "1.25rem 1.5rem",
                marginBottom: "1rem",
              }}
            >
              <p
                style={{
                  color: "#e8c8c8",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  marginBottom: "0.5rem",
                }}
              >
                {item.objection}
              </p>
              <p style={{ color: "#c8cdd8", fontSize: "0.95rem", lineHeight: 1.65, margin: 0 }}>
                {item.response}
              </p>
            </div>
          ))}

          <Quote attribution="James Currier, General Partner at NFX">
            "Fundraising isn&apos;t about convincing people. It&apos;s about finding those who already believe in your vision."
          </Quote>

          {/* Final checklist */}
          <H2>Pre-Seed Fundraising Checklist</H2>
          <Callout title="Before you start outreach — are you ready?">
            <ul style={{ margin: 0, paddingLeft: "1.25rem", lineHeight: 2.1 }}>
              <li>☐ Fundraising goal defined: amount, milestones, and timeline</li>
              <li>☐ Narrative locked: problem, solution, market, team, timing</li>
              <li>☐ Investor list built: 30–50 targeted names, not 200 untargeted ones</li>
              <li>☐ Pitch deck complete: 10 slides maximum, no walls of text</li>
              <li>☐ Traction evidence ready: at least one concrete signal of user interest</li>
              <li>☐ Warm intro paths mapped: who in your network can make the right connections</li>
              <li>☐ Cap table, founder agreements, and IP docs organized</li>
              <li>☐ Objection responses prepared: traction, market size, competitive moat</li>
              <li>☐ Instrument chosen: SAFE, convertible note, or priced round</li>
              <li>☐ Soft close date set: creates urgency and prevents indefinite stringing along</li>
            </ul>
          </Callout>

          {/* Cross-links */}
          <H2>Go Deeper</H2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
            {[
              {
                title: "Startup Equity 101",
                desc: "How to split founder equity, structure vesting, and manage your cap table before and after you raise.",
                href: "/startupequity101",
              },
              {
                title: "Equity Dilution Explained",
                desc: "How much equity founders actually give away at each funding stage — with benchmarks and a worked example.",
                href: "/equitydilution",
              },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  background: "#0d1428",
                  border: "1px solid #C9A96E33",
                  borderRadius: "10px",
                  padding: "1.25rem",
                  textDecoration: "none",
                }}
              >
                <p
                  style={{
                    color: "#C9A96E",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    marginBottom: "0.4rem",
                  }}
                >
                  {link.title} →
                </p>
                <p style={{ color: "#7a8499", fontSize: "0.88rem", lineHeight: 1.55, margin: 0 }}>
                  {link.desc}
                </p>
              </a>
            ))}
          </div>

          {/* Gildre Workshop CTA */}
          <div
            style={{
              background: "linear-gradient(135deg, #1a2540 0%, #0f1a2e 100%)",
              border: "1px solid #C9A96E44",
              borderRadius: "14px",
              padding: "2rem",
              textAlign: "center",
              marginTop: "3rem",
            }}
          >
            <p
              style={{
                color: "#C9A96E",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Gildre Executive Workshop
            </p>
            <p
              style={{
                color: "#f0e6d3",
                fontSize: "1.2rem",
                fontWeight: 700,
                marginBottom: "0.6rem",
              }}
            >
              Learn How to Pitch VCs from a Managing Partner
            </p>
            <p
              style={{
                color: "#7a8499",
                fontSize: "0.95rem",
                marginBottom: "1.5rem",
                lineHeight: 1.6,
              }}
            >
              Gildre hosted a live workshop with Jason Jacobsohn — Managing Partner at Propellant Ventures —
              on how to pitch to VCs. Watch the full session and get direct feedback on your deck.
            </p>
            <a
              href="https://www.youtube.com/watch?v=iw7D3xL7nCE"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "#C9A96E",
                color: "#080e1a",
                fontWeight: 700,
                fontSize: "0.95rem",
                padding: "0.8rem 2rem",
                borderRadius: "8px",
                textDecoration: "none",
                letterSpacing: "0.03em",
              }}
            >
              Access Workshop Recordings →
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
