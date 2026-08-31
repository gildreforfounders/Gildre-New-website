import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/partners" },
  title: "Gildre Partner Network | Capital, Legal, and Community Tools for Founders",
  description:
    "The Gildre Growth Ecosystem: banking, legal, EOR, community, and AI tools curated for founders. Access $1.5M+ in partner perks through the Gildre network.",
  keywords: [
    "Gildre partner network",
    "founder perks and tools",
    "startup banking partner",
    "employer of record founders",
    "startup legal partner",
    "Gildre growth ecosystem",
    "founder community perks",
    "Leader Bank Gildre",
    "G-P Gildre partnership",
    "Lowenstein Sandler founders",
  ],
  openGraph: {
    url: "https://www.gildre.com/partners",
    title: "Gildre Partner Network | Capital, Legal, and Community Tools for Founders",
    description:
      "Banking, legal counsel, global hiring, and community tools curated for founders. Access the full Gildre Growth Ecosystem through membership.",
    type: "website",
    images: [{ url: "https://www.gildre.com/og-home.png", width: 1200, height: 630, alt: "Gildre Partner Network" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gildre Partner Network",
    description: "Banking, legal, EOR, and AI tools curated for founders through the Gildre Growth Ecosystem.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Gildre",
  url: "https://www.gildre.com",
  description: "Gildre is a private founder membership community with a curated partner ecosystem providing banking, legal, global employment, and community tools for founders.",
  memberOf: [
    { "@type": "Organization", name: "Leader Bank", url: "https://www.leaderbank.com" },
    { "@type": "Organization", name: "G-P (Globalization Partners)", url: "https://www.globalization-partners.com" },
    { "@type": "Organization", name: "Lowenstein Sandler LLP", url: "https://www.lowenstein.com" },
    { "@type": "Organization", name: "Matchplay Group", url: "https://www.matchplaygroup.com" },
    { "@type": "Organization", name: "Gatherly", url: "https://www.gatherly.io" },
    { "@type": "Organization", name: "Solvee AI", url: "https://www.solvee.ai" },
    { "@type": "Organization", name: "MindHappy", url: "https://www.mindhappy.com" },
  ],
};

type Partner = {
  name: string;
  tagline: string;
  perk: string;
  href: string;
  badge: string;
  tier: 1 | 2;
};

const capitalPartners: Partner[] = [
  {
    name: "Leader Bank",
    tagline: "Startup banking from pre-seed to IPO. $1.5M+ in partner discounts and curated investor matching through Leader Link.",
    perk: "Warm intro to the startup banking team + full Innovation Toolkit access",
    href: "/partners/leader-bank",
    badge: "Banking",
    tier: 1,
  },
];

const legalPartners: Partner[] = [
  {
    name: "G-P",
    tagline: "The world's leading Employer of Record. Hire and pay talent in 180+ countries without setting up a legal entity.",
    perk: "Direct intro to the G-P startup team + priority EOR platform access",
    href: "/partners/g-p",
    badge: "Global EOR",
    tier: 1,
  },
  {
    name: "Lowenstein Sandler",
    tagline: "One of the most active startup law firms in the US. ECVC counsel from formation through exit, representing both founders and investors.",
    perk: "Warm intro to the ECVC team + VentureCrush event access",
    href: "/partners/lowenstein-sandler",
    badge: "Legal",
    tier: 1,
  },
];

const communityPartners: Partner[] = [
  {
    name: "Matchplay Group",
    tagline: "A structured fundraising platform that runs founders through investor-grade due diligence before the first pitch meeting.",
    perk: "Priority access to Matchplay programs and annual summits",
    href: "/matchplaygroup",
    badge: "Fundraising",
    tier: 2,
  },
  {
    name: "Gatherly",
    tagline: "Virtual event infrastructure built for real connection. Used by Gildre for online community events and virtual founder dinners.",
    perk: "Priority access to Gildre-hosted Gatherly events",
    href: "/gatherlypartnership",
    badge: "Events",
    tier: 2,
  },
  {
    name: "Solvee AI",
    tagline: "AI-powered business coaching that delivers the strategic support of a senior advisor at a fraction of the cost.",
    perk: "Member discount on Solvee AI coaching platform",
    href: "/solvee",
    badge: "AI Coaching",
    tier: 2,
  },
  {
    name: "MindHappy",
    tagline: "Mental health and performance coaching designed for founders, because the builder needs care too.",
    perk: "Member access to MindHappy founder coaching programs",
    href: "/mindhappy",
    badge: "Wellbeing",
    tier: 2,
  },
];

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <Link
      href={partner.href}
      className="group flex flex-col rounded-2xl p-7 transition-all"
      style={{
        backgroundColor: "rgba(255,255,255,0.02)",
        border: partner.tier === 1 ? "1px solid rgba(201,169,110,0.2)" : "1px solid rgba(255,255,255,0.07)",
        textDecoration: "none",
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
            {partner.name}
          </h3>
          <span
            className="mt-1.5 inline-block rounded-full px-2.5 py-0.5 text-[0.55rem] font-bold uppercase tracking-wider"
            style={{ backgroundColor: "rgba(201,169,110,0.1)", color: "#C9A96E", border: "1px solid rgba(201,169,110,0.2)" }}
          >
            {partner.badge}
          </span>
        </div>
        {partner.tier === 1 && (
          <span
            className="flex-shrink-0 rounded-full px-2.5 py-0.5 text-[0.55rem] font-bold uppercase tracking-wider"
            style={{ backgroundColor: "rgba(201,169,110,0.08)", color: "#C9A96E", border: "1px solid rgba(201,169,110,0.15)" }}
          >
            Anchor
          </span>
        )}
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
        {partner.tagline}
      </p>
      <div
        className="mt-5 rounded-xl px-4 py-3"
        style={{ backgroundColor: "rgba(201,169,110,0.05)", border: "1px solid rgba(201,169,110,0.12)" }}
      >
        <p className="text-[0.6rem] font-bold uppercase tracking-wider" style={{ color: "#C9A96E" }}>
          Member Perk
        </p>
        <p className="mt-1 text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
          {partner.perk}
        </p>
      </div>
      <p className="mt-5 text-xs font-semibold transition-opacity group-hover:opacity-70" style={{ color: "#C9A96E" }}>
        Learn More →
      </p>
    </Link>
  );
}

function CategorySection({
  label,
  description,
  partners,
}: {
  label: string;
  description: string;
  partners: Partner[];
}) {
  return (
    <div className="mb-16">
      <div className="mb-6 flex items-center gap-4">
        <div>
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            {label}
          </p>
          <p className="mt-0.5 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            {description}
          </p>
        </div>
      </div>
      <div className={`grid grid-cols-1 gap-5 ${partners.length === 1 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"}`}>
        {partners.map((p) => (
          <PartnerCard key={p.name} partner={p} />
        ))}
      </div>
    </div>
  );
}

export default function PartnersPage() {
  return (
    <div style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 pb-24 pt-36"
        style={{ background: "linear-gradient(155deg, #080e1a 0%, #1C2744 50%, #0a1020 100%)" }}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #C9A96E 0%, transparent 65%)" }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <span
            className="rounded-full px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em]"
            style={{ backgroundColor: "rgba(201,169,110,0.12)", color: "#C9A96E", border: "1px solid rgba(201,169,110,0.25)" }}
          >
            Partner Network
          </span>
          <h1
            className="mt-5 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.08] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            The Gildre Growth Ecosystem: the capital, counsel, and tools powering our founders.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Gildre members don&rsquo;t just get a peer community. They get warm introductions to banking partners, legal counsel, global hiring infrastructure, and AI tools, all curated for founders at every stage.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://tally.so/r/VLERVa"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-9 py-3.5 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
            >
              Apply for Membership →
            </a>
            <Link
              href="/membership"
              className="rounded-full px-8 py-3.5 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              See Membership Tiers
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────────── */}
      <section
        className="px-6 py-10"
        style={{ backgroundColor: "#080e1a", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="mx-auto max-w-4xl grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { value: "7", label: "Ecosystem Partners" },
            { value: "$1.5M+", label: "In Member Perks" },
            { value: "180+", label: "Countries via G-P" },
            { value: "Seed → IPO", label: "Coverage Range" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold sm:text-3xl" style={{ fontFamily: "var(--font-fraunces)", color: "#C9A96E" }}>
                {s.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Partner Directory ─────────────────────────────────────────── */}
      <section className="px-6 py-20" style={{ backgroundColor: "#0f1524" }}>
        <div className="mx-auto max-w-5xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-center mb-2" style={{ color: "#C9A96E" }}>
            Gildre Growth Ecosystem
          </p>
          <h2
            className="text-center text-[1.75rem] font-bold leading-tight text-white sm:text-[2.25rem] mb-14"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Browse the partner network.
          </h2>

          <CategorySection
            label="Capital & Banking"
            description="Financial infrastructure for founders at every stage"
            partners={capitalPartners}
          />
          <CategorySection
            label="Global Operations & Legal"
            description="Hire globally and build your legal foundation"
            partners={legalPartners}
          />
          <CategorySection
            label="Community & AI Tools"
            description="Fundraising, events, coaching, and founder wellbeing"
            partners={communityPartners}
          />
        </div>
      </section>

      {/* ── How Partners Work ────────────────────────────────────────── */}
      <section className="px-6 py-20" style={{ backgroundColor: "#080e1a" }}>
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
                How Partners Work
              </p>
              <h2
                className="mt-3 text-[1.75rem] font-bold leading-tight text-white sm:text-[2.1rem]"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                Every partner was chosen because it closes a gap founders actually hit.
              </h2>
              <p className="mt-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                Gildre members don&rsquo;t get a coupon page. Every partner in the ecosystem was brought in because Gildre founders kept running into the same friction points: banking that doesn&rsquo;t understand pre-revenue startups, legal that doesn&rsquo;t know both sides of the cap table, hiring blockers when the best candidate is overseas.
              </p>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                Anchor partners get dedicated pages and warm introductions. Community and AI tools are available directly through the Gildre network. In every case, the connection comes through a relationship, not a link in a resource library.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { label: "Banking and capital", desc: "Startup accounts, innovation toolkit perks, and investor matching through Leader Bank." },
                { label: "Global hiring", desc: "Employer of Record in 180+ countries through G-P, so you can hire the best person regardless of where they live." },
                { label: "Legal counsel", desc: "ECVC representation from formation to exit through Lowenstein Sandler, a firm that represents both founders and investors." },
                { label: "Community and tools", desc: "Fundraising infrastructure, virtual events, AI coaching, and founder wellbeing through the community partner tier." },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-xl p-5"
                  style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <span
                    className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold"
                    style={{ backgroundColor: "rgba(201,169,110,0.12)", color: "#C9A96E" }}
                  >
                    ✓
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white">{item.label}</p>
                    <p className="mt-0.5 text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <section className="px-6 py-28 text-center" style={{ backgroundColor: "#1C2744" }}>
        <div className="mx-auto max-w-2xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            Gildre Membership
          </p>
          <h2
            className="mt-4 text-[2rem] font-bold leading-tight text-white sm:text-[2.75rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Partner perks are one part of what membership unlocks.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            Gildre members also get weekly 1:1 curated introductions, monthly founder dinners, operator mentorship, and a peer community that compounds over time. Apply and hear back within a week.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://tally.so/r/VLERVa"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-10 py-4 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
            >
              Apply for Membership →
            </a>
            <a
              href="https://calendly.com/briangildre/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-4 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              Talk to Us
            </a>
          </div>
        </div>
      </section>

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
  );
}
