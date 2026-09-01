import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.gildre.com/partners" },
  title: "Gildre Partner Network | Exclusive Tools and Services for Founders",
  description:
    "Gildre members get preferred access to a curated network of partners across banking, global hiring, legal counsel, community, and AI tools. Every partner is chosen because they make serious founders faster.",
  keywords: [
    "Gildre partner network",
    "founder perks",
    "startup tools for founders",
    "Leader Bank startup banking",
    "G-P global hiring founders",
    "Lowenstein Sandler startup legal",
    "Gatherly virtual events",
    "Matchplay Group founders",
    "Solvee AI business coach",
    "MindHappy founders wellness",
  ],
  openGraph: {
    title: "Gildre Partner Network | Exclusive Tools and Services for Founders",
    description:
      "Banking, legal, global hiring, community, and AI tools, all negotiated for Gildre members. Every partner makes serious founders faster.",
    url: "https://www.gildre.com/partners",
    siteName: "Gildre",
    type: "website",
    images: [{ url: "https://www.gildre.com/og-home.png", width: 1200, height: 630, alt: "Gildre Partner Network" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gildre Partner Network | Exclusive Tools and Services for Founders",
    description: "Banking, legal, global hiring, community, and AI tools for Gildre founders.",
  },
};

type LogoImage = { type: "image"; src: string; width: number; height: number; alt: string };
type LogoText = { type: "text"; label: string };
type LogoMark = LogoImage | LogoText;

type Partner = {
  category: string;
  slug: string;
  href: string;
  name: string;
  tagline: string;
  perk: string;
  description: string;
  external: boolean;
  logo: LogoMark;
};

const partners: Partner[] = [
  {
    category: "Capital & Banking",
    slug: "leader-bank",
    href: "/partners/leader-bank",
    name: "Leader Bank",
    tagline: "Startup banking built for founders who are going somewhere.",
    perk: "$1.5M+ in startup perks and discounts",
    description:
      "Leader Bank is Gildre's official banking partner. Startup deposit accounts, a $1.5M+ startup discount toolkit, and Leader Link, their curated investor matching program, for founders who need more than a place to park their runway.",
    external: false,
    logo: { type: "text", label: "Leader Bank" },
  },
  {
    category: "Global Operations & Legal",
    slug: "g-p",
    href: "/partners/g-p",
    name: "G-P",
    tagline: "Hire anyone, anywhere. No entity required.",
    perk: "EOR in 180+ countries, AI-powered onboarding",
    description:
      "G-P is the world's leading Employer of Record platform. Hire, pay, and manage talent in 180+ countries without setting up a legal entity. G-P Gia, their AI HR agent, handles onboarding through offboarding.",
    external: false,
    logo: { type: "text", label: "G-P" },
  },
  {
    category: "Global Operations & Legal",
    slug: "lowenstein-sandler",
    href: "/partners/lowenstein-sandler",
    name: "Lowenstein Sandler",
    tagline: "Legal counsel that has been on both sides of the table.",
    perk: "ECVC practice: Seed through IPO",
    description:
      "One of the most active startup law firms in the US. Lowenstein Sandler's ECVC team represents both founders and investors, which means they know exactly what the other side of your cap table is thinking. Plus access to VentureCrush.",
    external: false,
    logo: { type: "text", label: "LS" },
  },
  {
    category: "Community & AI Tools",
    slug: "gatherly",
    href: "/gatherly",
    name: "Gatherly",
    tagline: "Virtual events that actually feel like a room.",
    perk: "Preferred access for Gildre-hosted events",
    description:
      "Gatherly's spatial video platform powers the virtual component of Gildre's events. Think networking that mimics a real room: walk up to conversations, drift between groups, leave when you're done.",
    external: true,
    logo: { type: "image", src: "/images/gatherly/gatherly-logo.png", width: 110, height: 34, alt: "Gatherly" },
  },
  {
    category: "Community & AI Tools",
    slug: "matchplay-group",
    href: "/matchplaygroup",
    name: "Matchplay Group",
    tagline: "Golf as a business development tool for founders.",
    perk: "Curated member outings and introductions",
    description:
      "Matchplay Group curates golf experiences specifically for founders and operators. A round with the right people is worth more than a year of cold outreach. Gildre members get access to curated outings and introductions.",
    external: true,
    logo: { type: "text", label: "Matchplay" },
  },
  {
    category: "Community & AI Tools",
    slug: "solvee",
    href: "/solvee",
    name: "Solvee AI",
    tagline: "Your AI business coach, available at 2am.",
    perk: "AI-powered coaching for Gildre founders",
    description:
      "Solvee is an AI business coaching platform built for founders who need a thinking partner between peer sessions. Strategy questions, accountability, and decision frameworks, on demand.",
    external: true,
    logo: { type: "text", label: "Solvee" },
  },
  {
    category: "Community & AI Tools",
    slug: "mindhappy",
    href: "/mindhappy",
    name: "MindHappy",
    tagline: "Performance coaching for founders who carry a lot.",
    perk: "Mental performance support for members",
    description:
      "MindHappy delivers performance coaching and mental wellness support built specifically for the founder lifestyle. Because sustained execution requires more than a productivity system.",
    external: true,
    logo: { type: "image", src: "/images/mindhappy-logo.png", width: 110, height: 34, alt: "MindHappy" },
  },
];

const categories = ["Capital & Banking", "Global Operations & Legal", "Community & AI Tools"];

const categoryColors: Record<string, string> = {
  "Capital & Banking": "#4E9AF1",
  "Global Operations & Legal": "#7B6FF0",
  "Community & AI Tools": "#C9A96E",
};

function PartnerLogo({ logo }: { logo: LogoMark }) {
  if (logo.type === "image") {
    return (
      <div
        className="mb-4 flex h-10 items-center rounded-lg px-3 self-start"
        style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
      >
        <Image
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className="h-6 w-auto object-contain"
        />
      </div>
    );
  }
  return (
    <div
      className="mb-4 flex h-10 items-center self-start rounded-lg px-4"
      style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
    >
      <span className="text-sm font-bold tracking-tight text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
        {logo.label}
      </span>
    </div>
  );
}

export default function PartnersPage() {
  return (
    <div style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>
      <style>{`
        .partner-card { background-color: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.07); }
        .partner-card:hover { background-color: rgba(201,169,110,0.04) !important; border: 1px solid rgba(201,169,110,0.2) !important; }
      `}</style>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 pb-24 pt-36"
        style={{ background: "linear-gradient(155deg, #080e1a 0%, #1C2744 50%, #0a1020 100%)" }}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #C9A96E 0%, transparent 65%)" }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mb-6">
            <span
              className="rounded-full px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em]"
              style={{ backgroundColor: "rgba(201,169,110,0.12)", color: "#C9A96E", border: "1px solid rgba(201,169,110,0.25)" }}
            >
              Gildre Partner Network
            </span>
          </div>
          <h1
            className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.08] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Every tool a serious founder
            <span style={{ color: "#C9A96E" }}> actually needs.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Gildre members get preferred access to a curated network of partners across banking, global hiring, legal counsel, community, and AI tools. Every partner was chosen for one reason: they make serious founders faster.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://tally.so/r/VLERVa"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-9 py-3.5 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
            >
              Apply for Membership
            </a>
            <a
              href="#partners"
              className="rounded-full px-8 py-3.5 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              Browse Partners
            </a>
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
            { value: "7", label: "Core Ecosystem Partners" },
            { value: "3", label: "Categories" },
            { value: "$5M+", label: "In Member Perks" },
            { value: "180+", label: "Countries Covered" },
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

      {/* ── Partner cards ─────────────────────────────────────────────── */}
      <section id="partners" className="px-6 py-24" style={{ backgroundColor: "#0f1524" }}>
        <div className="mx-auto max-w-5xl">

          {categories.map((category) => {
            const group = partners.filter((p) => p.category === category);
            const color = categoryColors[category];
            return (
              <div key={category} className="mb-20 last:mb-0">
                <div className="mb-8 flex items-center gap-4">
                  <span
                    className="rounded-full px-4 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.2em]"
                    style={{ backgroundColor: `${color}18`, color, border: `1px solid ${color}35` }}
                  >
                    {category}
                  </span>
                  <div className="flex-1 h-px" style={{ backgroundColor: "rgba(255,255,255,0.05)" }} />
                </div>

                <div className={`grid grid-cols-1 gap-5 ${group.length >= 2 ? "sm:grid-cols-2" : ""} ${group.length >= 3 ? "lg:grid-cols-3" : ""}`}>
                  {group.map((partner) => (
                    <a
                      key={partner.slug}
                      href={partner.href}
                      className="partner-card group flex flex-col gap-4 rounded-2xl p-7 transition-all duration-200"
                      style={{ textDecoration: "none" }}
                    >
                      {/* Partner logo or mark */}
                      <PartnerLogo logo={partner.logo} />

                      {/* Partner name + arrow */}
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p
                            className="text-lg font-bold text-white leading-tight"
                            style={{ fontFamily: "var(--font-fraunces)" }}
                          >
                            {partner.name}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                            {partner.tagline}
                          </p>
                        </div>
                        <div className="mt-0.5 flex-shrink-0 text-zinc-600 transition-colors group-hover:text-[#C9A96E]">
                          <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>

                      {/* Perk highlight */}
                      <div
                        className="inline-flex items-center gap-2 rounded-lg px-3 py-2 self-start"
                        style={{ backgroundColor: "rgba(201,169,110,0.08)", border: "1px solid rgba(201,169,110,0.15)" }}
                      >
                        <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 flex-shrink-0" style={{ color: "#C9A96E" }}>
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                        <p className="text-[0.65rem] font-semibold" style={{ color: "#C9A96E" }}>{partner.perk}</p>
                      </div>

                      {/* Description */}
                      <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                        {partner.description}
                      </p>

                      {/* CTA */}
                      <p
                        className="mt-auto text-xs font-semibold transition-colors group-hover:text-[#C9A96E]"
                        style={{ color: "rgba(255,255,255,0.35)" }}
                      >
                        {partner.external ? "Learn more" : "View partnership"} &rarr;
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Why these partners ──────────────────────────────────────── */}
      <section className="px-6 py-20" style={{ backgroundColor: "#080e1a" }}>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            How We Pick
          </p>
          <h2
            className="mt-3 text-[1.75rem] font-bold leading-tight text-white sm:text-[2.25rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Every partner earns its spot. Nothing here is paid placement.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            We evaluate every potential partner against one question: does this make a serious founder meaningfully faster or better? If the answer is yes, we negotiate preferred access for our members and build the partnership. If it&rsquo;s no, it doesn&rsquo;t matter how much they&rsquo;re willing to pay.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                heading: "Curated, not comprehensive",
                body: "We would rather have seven partners that are genuinely excellent than thirty that are mediocre. Every partner on this page is something Gildre founders actually use.",
              },
              {
                heading: "Negotiated access",
                body: "Gildre members don't get a generic discount code. We work directly with each partner to build something meaningful: preferred pricing, dedicated support, or direct introductions to the right people.",
              },
              {
                heading: "Updated as we grow",
                body: "The partner network grows as Gildre grows. If you are building something that belongs here, reach out. We are always looking for partners who make serious founders better.",
              },
            ].map((item) => (
              <div
                key={item.heading}
                className="rounded-2xl p-7 text-left"
                style={{ backgroundColor: "rgba(201,169,110,0.04)", border: "1px solid rgba(201,169,110,0.12)" }}
              >
                <h3 className="text-base font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
                  {item.heading}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="px-6 py-28 text-center" style={{ backgroundColor: "#1C2744" }}>
        <div className="mx-auto max-w-2xl">
          <h2
            className="text-[2rem] font-bold leading-tight text-white sm:text-[2.5rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Get access to the full partner network.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            Partner benefits are exclusive to Gildre members. Apply for membership and get preferred access to all seven partners alongside a community of serious founders at your stage.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://tally.so/r/VLERVa"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-9 py-4 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
            >
              Apply for Membership
            </a>
            <a
              href="/founder-community"
              className="rounded-full px-8 py-4 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              Learn About Gildre
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
