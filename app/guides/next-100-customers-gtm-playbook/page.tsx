import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.gildre.com/guides/next-100-customers-gtm-playbook" },
  title: "Your Next 100 Customers: The Gildre GTM Playbook for Founders (2026 Edition) | Gildre",
  description:
    "The exact go-to-market playbook Gildre founders used to acquire their next 100 customers in 2026 — three high-signal acquisition channels: high-intent content marketing, precision outbound email, and the strategic partnership flywheel. With specific tools, workflows, and tactics.",
  keywords: [
    "GTM playbook for founders",
    "how to get your first 100 customers startup",
    "founder go-to-market strategy 2026",
    "startup customer acquisition playbook",
    "cold email outbound startup",
    "strategic partnerships startup growth",
    "content marketing for B2B founders",
    "comparison page SEO startup",
    "Clay enrichment outbound",
    "PartnerStack referral program",
    "startup growth playbook",
  ],
  openGraph: {
    title: "Your Next 100 Customers: The Gildre GTM Playbook",
    description:
      "Three acquisition channels Gildre founders used to land their next 100 customers — content, outbound, and partnerships — with exact tools, workflows, and tactics.",
    type: "article",
    url: "https://www.gildre.com/guides/next-100-customers-gtm-playbook",
    images: [{ url: "https://www.gildre.com/images/gtm-analytics-laptop.webp" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Your Next 100 Customers: The Gildre GTM Playbook for Founders (2026 Edition)",
  "description":
    "The exact go-to-market playbook Gildre founders used to acquire their next 100 customers in 2026 — three high-signal acquisition channels with specific tools, workflows, and tactics.",
  "image": "https://www.gildre.com/images/gtm-analytics-laptop.webp",
  "author": { "@type": "Organization", "name": "Gildre", "url": "https://www.gildre.com" },
  "publisher": {
    "@type": "Organization",
    "name": "Gildre",
    "url": "https://www.gildre.com",
    "logo": { "@type": "ImageObject", "url": "https://www.gildre.com/images/gildre-logo.png" },
  },
  "datePublished": "2026-01-01",
  "dateModified": "2026-01-01",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.gildre.com/guides/next-100-customers-gtm-playbook" },
  "keywords": "GTM playbook, customer acquisition, cold email, content marketing, strategic partnerships, Clay, PartnerStack, Instantly, startup growth, founder go-to-market",
  "about": [
    { "@type": "Thing", "name": "Go-to-Market Strategy" },
    { "@type": "Thing", "name": "Customer Acquisition" },
    { "@type": "Organization", "name": "Gildre" },
  ],
};

function StepNumber({ n }: { n: number }) {
  return (
    <span
      className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold"
      style={{ backgroundColor: "rgba(201,169,110,0.15)", color: "#C9A96E" }}
    >
      {n}
    </span>
  );
}

function ToolPill({ name, href }: { name: string; href?: string }) {
  const cls = "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-opacity hover:opacity-80";
  const style = { backgroundColor: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.75)", border: "1px solid rgba(255,255,255,0.1)" };
  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls} style={style}>{name} ↗</a>;
  }
  return <span className={cls} style={style}>{name}</span>;
}

function Workflow({ steps }: { steps: string[] }) {
  return (
    <div
      className="my-6 rounded-xl p-5"
      style={{ backgroundColor: "rgba(201,169,110,0.05)", border: "1px solid rgba(201,169,110,0.12)" }}
    >
      <p className="mb-3 text-[0.6rem] font-bold uppercase tracking-widest" style={{ color: "#C9A96E" }}>Workflow</p>
      <div className="flex flex-wrap items-center gap-2">
        {steps.map((step, i) => (
          <span key={i} className="flex items-center gap-2">
            <span className="rounded-lg px-3 py-1.5 text-xs font-medium text-white" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
              {step}
            </span>
            {i < steps.length - 1 && <span style={{ color: "#C9A96E" }}>→</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
      {children}
    </p>
  );
}

function PhilosophyBar({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="mb-8 rounded-xl px-6 py-4"
      style={{ backgroundColor: "#0a1020", border: "1px solid rgba(255,255,255,0.07)" }}
    >
      <span className="text-[0.6rem] font-bold uppercase tracking-widest mr-3" style={{ color: "#C9A96E" }}>The Philosophy</span>
      <span className="text-sm font-semibold text-white">{children}</span>
    </div>
  );
}

export default function Next100Customers() {
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
                style={{ backgroundColor: "rgba(91,127,166,0.2)", color: "#5B7FA6" }}
              >
                Growth
              </span>
              <span
                className="rounded-full px-3 py-1 text-[0.6rem] font-bold uppercase tracking-widest"
                style={{ backgroundColor: "rgba(201,169,110,0.15)", color: "#C9A96E" }}
              >
                2026 Playbook
              </span>
              <span className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
                Gildre GTM Guide · 15 min read
              </span>
            </div>
            <h1
              className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.08] text-white"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Your Next 100 Customers
            </h1>
            <p
              className="mt-3 text-[1.1rem] font-semibold"
              style={{ color: "#C9A96E", fontFamily: "var(--font-fraunces)" }}
            >
              The Gildre GTM Playbook: Three Acquisition Channels That Actually Worked in 2026
            </p>
            <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              After six months of running these strategies with our founder cohorts, we're sharing the three highest-performing go-to-market channels of 2026 — with the exact steps, tools, and workflows used to execute them.
            </p>
          </div>
        </section>

        {/* ── Body ─────────────────────────────────────────────────────── */}
        <article className="mx-auto max-w-3xl px-6 py-16">

          {/* Intro */}
          <div
            className="mb-12 rounded-2xl p-7"
            style={{ backgroundColor: "rgba(201,169,110,0.06)", border: "1px solid rgba(201,169,110,0.15)" }}
          >
            <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-widest" style={{ color: "#C9A96E" }}>
              Quick Background
            </p>
            <p className="text-base leading-relaxed text-white font-medium">
              The secret to your next 100 customers isn't more volume — it's more relevance.
            </p>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Most founders default to spray-and-pray automation. Gildre cohorts have moved away from that entirely — toward a high-signal, high-velocity framework built on clear positive buying signals. The results over the past six months have been significant. Below are the three channels that outperformed everything else.
            </p>
          </div>

          {/* ── Process 1 ─────────────────────────────────────────────── */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span
                className="flex-shrink-0 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
                style={{ backgroundColor: "rgba(91,127,166,0.2)", color: "#5B7FA6", border: "1px solid rgba(91,127,166,0.3)" }}
              >
                Process 01
              </span>
              <div className="flex-1 h-px" style={{ backgroundColor: "rgba(255,255,255,0.07)" }} />
            </div>

            <h2
              className="text-[1.75rem] font-bold text-white mb-2"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              High-Intent Content & Feature Marketing
            </h2>

            <PhilosophyBar>Don't write for Google. Write for the decision-maker holding the credit card.</PhilosophyBar>

            {/* Step 1 */}
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-3">
                <StepNumber n={1} />
                <h3 className="text-base font-bold text-white pt-1">Bottom-of-Funnel Dominance</h3>
              </div>
              <div className="pl-12">
                <Body>
                  Stop creating generic blog posts. The highest-converting content in B2B is Comparison Pages — <em style={{ color: "rgba(255,255,255,0.85)" }}>[Your Tool] vs. [Competitor]</em> — because they capture people who are already in a buying decision, not people casually browsing.
                </Body>
                <Body>
                  Use SEMRush or Ahrefs to find the exact comparison queries your prospects are searching, then optimize for both traditional SEO and AI search (AIO) — since an increasing share of B2B research now happens through AI tools, not just Google.
                </Body>
                <div
                  className="mt-4 rounded-xl p-5"
                  style={{ backgroundColor: "rgba(201,169,110,0.07)", border: "1px solid rgba(201,169,110,0.15)" }}
                >
                  <p className="text-sm font-bold text-white mb-2">The Radical Honesty Hack</p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                    Tell prospects when the competitor is better. Admitting where you lose eliminates skepticism and earns the right to explain where you win. Your "Why we win" section becomes 10× more believable because you're not pretending the competitor doesn't exist.
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <ToolPill name="SEMRush" href="https://semrush.com" />
                  <ToolPill name="Ahrefs" href="https://ahrefs.com" />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-3">
                <StepNumber n={2} />
                <h3 className="text-base font-bold text-white pt-1">Permission-Less Value</h3>
              </div>
              <div className="pl-12">
                <Body>
                  Take your strongest insight or framework and turn it into a single-page SOP or cheat sheet. Offer it freely — in LinkedIn comments, as a landing page lead magnet, anywhere your prospects already are. When someone asks for it, you've earned the right to start a conversation without it feeling like a cold pitch.
                </Body>
                <Body>
                  The key: it has to be genuinely useful. A mediocre asset won't generate hand-raisers. The goal is something specific enough that when prospects read it, they immediately think <em style={{ color: "rgba(255,255,255,0.85)" }}>"I need to talk to whoever built this."</em>
                </Body>
              </div>
            </div>

            {/* Step 3 */}
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-3">
                <StepNumber n={3} />
                <h3 className="text-base font-bold text-white pt-1">Track Engagement & Personalize the CTA</h3>
              </div>
              <div className="pl-12">
                <Body>
                  Once someone engages with your content, don't send them a generic follow-up. Tools like Arrows let you build personalized Sales Rooms for each lead — a dedicated page that includes a 1:1 Loom video, relevant assets, and a direct booking link. The Video Bridge converts at significantly higher rates than a standard email follow-up.
                </Body>
                <div className="mt-4 flex flex-wrap gap-2">
                  <ToolPill name="Arrows" href="https://arrows.to" />
                  <ToolPill name="Loom" href="https://loom.com" />
                </div>
              </div>
            </div>

            <Workflow steps={["Create Comparison Pages", "Optimize for AIO + SEO", "Embed Hand-Raiser CTAs", "1:1 Video Follow-ups"]} />

            {/* Feature dashboard image */}
            <div className="mt-8 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
              <Image
                src="/images/gtm-feature-dashboard.webp"
                alt="Feature.com dashboard — AI-powered content marketing and partnership discovery"
                width={1400}
                height={800}
                className="w-full"
                style={{ objectFit: "cover", maxHeight: "420px" }}
              />
              <div className="px-5 py-3" style={{ backgroundColor: "#0a1020" }}>
                <p className="text-[0.68rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
                  Feature.com surfaces AI-recommended partnership and content opportunities to expand your AIO/SEO footprint
                </p>
                <div className="mt-2">
                  <ToolPill name="Feature" href="https://feature.com" />
                </div>
              </div>
            </div>

            {/* Video 1 */}
            <div className="mt-8">
              <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-widest" style={{ color: "#C9A96E" }}>Watch</p>
              <div className="overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src="https://www.youtube.com/embed/YH1Y06eMEqM"
                    title="Gildre GTM Playbook — High-Intent Content Marketing"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── Process 2 ─────────────────────────────────────────────── */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span
                className="flex-shrink-0 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
                style={{ backgroundColor: "rgba(164,123,91,0.2)", color: "#A67B5B", border: "1px solid rgba(164,123,91,0.3)" }}
              >
                Process 02
              </span>
              <div className="flex-1 h-px" style={{ backgroundColor: "rgba(255,255,255,0.07)" }} />
            </div>

            <h2
              className="text-[1.75rem] font-bold text-white mb-2"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              The Precision Outbound Engine
            </h2>
            <p className="mb-6 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>Cold Email — because signal beats volume every time</p>

            <PhilosophyBar>Stop acting like a "sender." Start acting like a "solver."</PhilosophyBar>

            {/* Step 1 */}
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-3">
                <StepNumber n={1} />
                <h3 className="text-base font-bold text-white pt-1">Signal Identification & Enrichment</h3>
              </div>
              <div className="pl-12">
                <Body>
                  Stop emailing static lists. Email trigger events. A prospect who just raised a round, hired a VP of Sales, or posted about a specific pain point is infinitely more likely to respond than someone pulled from a cold export.
                </Body>
                <Body>
                  Tools like Clay or ppl.contact let you aggregate these signals across data sources and auto-enrich each lead with company size, tech stack, growth signals, and contact details — so your message can be specific before you ever hit send.
                </Body>
                <div className="mt-4 flex flex-wrap gap-2">
                  <ToolPill name="Clay" href="https://clay.com" />
                  <ToolPill name="ppl.contact" href="https://ppl.contact" />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-3">
                <StepNumber n={2} />
                <h3 className="text-base font-bold text-white pt-1">Build Your Sending Infrastructure</h3>
              </div>
              <div className="pl-12">
                <Body>
                  Deliverability is the invisible ceiling on all outbound performance. Your messages can't convert if they land in spam. Set up secondary sending domains (separate from your main domain to protect it), warm them properly, and keep send volumes conservative until you've established reputation.
                </Body>
                <Body>
                  We recommend Premium Inboxes as a starting point, but A/B test based on your TAM size and volume needs. The right infrastructure for someone emailing 200 prospects a week looks different from someone running 2,000.
                </Body>
                <div className="mt-4 flex flex-wrap gap-2">
                  <ToolPill name="Premium Inboxes" />
                  <ToolPill name="Instantly" href="https://instantly.ai" />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-3">
                <StepNumber n={3} />
                <h3 className="text-base font-bold text-white pt-1">Centralize & Reply Fast</h3>
              </div>
              <div className="pl-12">
                <Body>
                  Once replies start coming in, your only job is Response Management. Use Instantly as your master inbox to monitor all secondary sending domains in one place. This prevents the chaos of managing multiple inboxes across different accounts.
                </Body>
                <div
                  className="mt-4 rounded-xl p-5"
                  style={{ backgroundColor: "rgba(201,169,110,0.07)", border: "1px solid rgba(201,169,110,0.15)" }}
                >
                  <p className="text-sm font-bold text-white mb-2">Speed to Lead Is Everything</p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                    The faster you respond to a warm reply, the more likely you are to qualify it. Nobody wants to wait 24 hours to schedule a demo. Get your prospect value immediately and show them there's a real human on the other end. Responding within 15 minutes of a reply dramatically increases booking rates.
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <ToolPill name="Instantly" href="https://instantly.ai" />
                </div>
              </div>
            </div>

            <Workflow steps={["Identify High-Pain Triggers", "Scale Infrastructure", "Centralize & Reply", "Bridge to CTA"]} />

            {/* Video 2 */}
            <div className="mt-8">
              <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-widest" style={{ color: "#C9A96E" }}>Watch</p>
              <div className="overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src="https://www.youtube.com/embed/gReszNnykpg"
                    title="Gildre GTM Playbook — Precision Outbound"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── Process 3 ─────────────────────────────────────────────── */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span
                className="flex-shrink-0 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
                style={{ backgroundColor: "rgba(107,138,111,0.2)", color: "#6B8A6F", border: "1px solid rgba(107,138,111,0.3)" }}
              >
                Process 03
              </span>
              <div className="flex-1 h-px" style={{ backgroundColor: "rgba(255,255,255,0.07)" }} />
            </div>

            <h2
              className="text-[1.75rem] font-bold text-white mb-2"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              The Strategic Partnership Flywheel
            </h2>

            <PhilosophyBar>Borrow trust from people who've spent years earning it.</PhilosophyBar>

            {/* Analytics laptop image */}
            <div className="mb-8 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
              <Image
                src="/images/gtm-analytics-laptop.webp"
                alt="Analytics dashboard on a laptop — tracking partnership and acquisition metrics"
                width={1400}
                height={933}
                className="w-full"
                style={{ objectFit: "cover", maxHeight: "380px", objectPosition: "center" }}
              />
            </div>

            {/* Step 1 */}
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-3">
                <StepNumber n={1} />
                <h3 className="text-base font-bold text-white pt-1">The "Complementary, Not Competitive" Map</h3>
              </div>
              <div className="pl-12">
                <Body>
                  Identify tools or services that sit upstream or downstream from your product in your customer's workflow. If you sell SEO software, your natural partners are the web development agencies building the sites you optimize. If you sell HR software, it's the PEOs and benefits brokers your buyers already trust.
                </Body>
                <Body>
                  Use Reveal or Crossbeam to overlay your CRM against a potential partner's. These tools show you exactly which of your target accounts they already have a relationship with — without you exposing your full list to them. This lets you prioritize the partnerships with the highest overlap before making any introductions.
                </Body>
                <div className="mt-4 flex flex-wrap gap-2">
                  <ToolPill name="Reveal" href="https://reveal.co" />
                  <ToolPill name="Crossbeam" href="https://crossbeam.com" />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-3">
                <StepNumber n={2} />
                <h3 className="text-base font-bold text-white pt-1">The Revenue-First Introduction</h3>
              </div>
              <div className="pl-12">
                <Body>
                  Don't ask for a "partnership." The word sounds like work and meetings. Instead, ask to provide value to their existing customer base.
                </Body>
                <div
                  className="my-5 rounded-xl p-5"
                  style={{ backgroundColor: "rgba(201,169,110,0.07)", border: "1px solid rgba(201,169,110,0.15)" }}
                >
                  <p className="text-sm font-bold text-white mb-2">The Move</p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                    Offer to write a guest expert module for their newsletter, or provide a "Partner-Only" discount their customers can't get elsewhere. You give them something that makes them look like a hero to their clients. They give you a warm introduction that no cold email could replicate.
                  </p>
                </div>
                <Body>
                  The best partner approaches don't feel like business development. They feel like someone doing their customers a favor.
                </Body>
              </div>
            </div>

            {/* Step 3 */}
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-3">
                <StepNumber n={3} />
                <h3 className="text-base font-bold text-white pt-1">The Referral Dopamine Loop</h3>
              </div>
              <div className="pl-12">
                <Body>
                  Friction kills partnerships. If a partner has to chase you for their commission check, they'll send their next referral somewhere else. Automate the rewards from day one.
                </Body>
                <Body>
                  Use PartnerStack to handle success bonuses and commissions automatically. Set up a Slack Connect channel with your top five partners and use Zapier to trigger a notification every time a joint lead hits "Closed Won." Publicly celebrating the win in that channel creates the dopamine loop that keeps referrals flowing without you having to ask.
                </Body>
                <div className="mt-4 flex flex-wrap gap-2">
                  <ToolPill name="PartnerStack" href="https://partnerstack.com" />
                  <ToolPill name="Slack Connect" />
                  <ToolPill name="Zapier" href="https://zapier.com" />
                </div>
              </div>
            </div>

            <Workflow steps={["Map Overlapping Accounts", "Deliver Value-First Assets", "Centralize Communication", "Automate Rewards"]} />
          </div>

          {/* ── Tools Summary ─────────────────────────────────────────── */}
          <div
            className="mb-16 rounded-2xl p-7"
            style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <p className="mb-5 text-[0.65rem] font-bold uppercase tracking-widest" style={{ color: "#C9A96E" }}>
              Full Stack — Tools Referenced in This Playbook
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <p className="mb-3 text-xs font-bold text-white">Content & SEO</p>
                <div className="flex flex-col gap-2">
                  <ToolPill name="SEMRush" href="https://semrush.com" />
                  <ToolPill name="Ahrefs" href="https://ahrefs.com" />
                  <ToolPill name="Feature" href="https://feature.com" />
                  <ToolPill name="Arrows (Sales Rooms)" href="https://arrows.to" />
                  <ToolPill name="Loom" href="https://loom.com" />
                </div>
              </div>
              <div>
                <p className="mb-3 text-xs font-bold text-white">Outbound</p>
                <div className="flex flex-col gap-2">
                  <ToolPill name="Clay" href="https://clay.com" />
                  <ToolPill name="ppl.contact" href="https://ppl.contact" />
                  <ToolPill name="Premium Inboxes" />
                  <ToolPill name="Instantly" href="https://instantly.ai" />
                </div>
              </div>
              <div>
                <p className="mb-3 text-xs font-bold text-white">Partnerships</p>
                <div className="flex flex-col gap-2">
                  <ToolPill name="Reveal" href="https://reveal.co" />
                  <ToolPill name="Crossbeam" href="https://crossbeam.com" />
                  <ToolPill name="PartnerStack" href="https://partnerstack.com" />
                  <ToolPill name="Zapier" href="https://zapier.com" />
                </div>
              </div>
            </div>
          </div>

          {/* ── Final CTA ─────────────────────────────────────────────── */}
          <div
            className="rounded-2xl p-8 text-center"
            style={{ background: "linear-gradient(135deg, #1C2744 0%, #0a1020 100%)", border: "1px solid rgba(201,169,110,0.2)" }}
          >
            <p className="text-[0.65rem] font-bold uppercase tracking-widest mb-3" style={{ color: "#C9A96E" }}>
              Don't Build in a Vacuum
            </p>
            <h3
              className="text-[1.75rem] font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Scaling isn't a solo sport.
            </h3>
            <p className="text-sm leading-relaxed mb-8 mx-auto max-w-md" style={{ color: "rgba(255,255,255,0.55)" }}>
              Book a 30-minute advisory session to see how Gildre's network of founders and operators can accelerate your growth timeline — and help you pressure-test which of these three channels fits your specific stage and market.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="/contact"
                className="rounded-full px-10 py-4 text-sm font-bold transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
              >
                Schedule Your Advisory Call →
              </a>
              <a
                href="/membership"
                className="rounded-full px-8 py-4 text-sm font-semibold transition-opacity hover:opacity-80"
                style={{ color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                Join Gildre →
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
