import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/boston" },
  title: "Founder Community Boston | Gildre",
  description:
    "Gildre connects Boston founders with active 1:1 matchmaking, expert operator mentorship, and private monthly dinners in Kendall Square and the Seaport. Built for biotech, deep-tech, AI, and enterprise builders.",
  keywords: [
    "Boston founder community",
    "Boston startup network",
    "Boston entrepreneurs",
    "Gildre Boston",
    "biotech founders Boston",
    "deep-tech Boston",
    "Kendall Square founders",
    "MIT startup community",
    "Harvard founders Boston",
  ],
  openGraph: {
    title: "Founder Community Boston | Gildre",
    description:
      "Active 1:1 matchmaking, expert operator mentorship, and private founder dinners for Boston's biotech, deep-tech, AI, and enterprise builders.",
    url: "https://www.gildre.com/boston",
    siteName: "Gildre",
    type: "website",
    images: [{ url: "https://www.gildre.com/og-home.png", width: 1200, height: 630, alt: "Gildre founder community in Boston" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Founder Community Boston | Gildre",
    description:
      "Active 1:1 matchmaking, expert operator mentorship, and private founder dinners for Boston's biotech, deep-tech, AI, and enterprise builders.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      name: "Gildre — Boston",
      url: "https://www.gildre.com/boston",
      logo: "https://www.gildre.com/images/gildre-logo.png",
      image: "https://www.gildre.com/og-home.png",
      description:
        "Gildre is a private founder membership community in Boston, MA. Gildre Boston hosts monthly founder dinners in Kendall Square and the Seaport Innovation District for tech CEOs and early-stage startup founders, alongside weekly curated peer matches, expert mentorship, and warm investor introductions.",
      email: "info@gildre.com",
      telephone: "+1-847-881-6319",
      priceRange: "$$",
      address: { "@type": "PostalAddress", addressLocality: "Boston", addressRegion: "MA", postalCode: "02101", addressCountry: "US" },
      geo: { "@type": "GeoCoordinates", latitude: 42.3601, longitude: -71.0589 },
      areaServed: [{ "@type": "City", name: "Boston" }, { "@type": "Country", name: "United States" }],
      knowsAbout: ["Founder Peer Groups", "Startup Mentorship", "Biotech", "Deep-Tech", "Enterprise SaaS", "AI Research"],
      sameAs: ["https://www.gildre.com", "https://www.instagram.com/gildreforfounders", "https://www.linkedin.com/company/gildre/"],
      parentOrganization: { "@type": "Organization", name: "Gildre", url: "https://www.gildre.com" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How are 1:1 founder introductions curated in Boston?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every week, Gildre's team reviews your profile, stage, and goals to match you with a Boston founder or operator who has directly relevant experience, in your vertical, at your funding stage. These are warm, intentional introductions, not cold algorithm requests.",
          },
        },
        {
          "@type": "Question",
          name: "Where are Boston founder dinners and events held?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gildre Boston hosts monthly founder dinners in Kendall Square and the Seaport Innovation District, the two densest nodes of Boston's tech ecosystem. Peer roundtables and investor sessions rotate across Cambridge and Back Bay venues.",
          },
        },
        {
          "@type": "Question",
          name: "What types of founders join Gildre Boston?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gildre Boston is built for seed-to-Series A founders primarily in biotech, life sciences, deep-tech, AI research, enterprise SaaS, and climate tech. Many members have MIT, Harvard, or Northeastern ties and are translating research into commercial ventures.",
          },
        },
        {
          "@type": "Question",
          name: "How is Gildre different from Boston's university innovation programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MIT's entrepreneurship programs and Harvard Innovation Labs are excellent institutional resources. Gildre is the peer layer for founders who have already left those programs, building companies at speed and needing operator-level mentorship and active 1:1 introductions, not coursework.",
          },
        },
        {
          "@type": "Question",
          name: "Can I attend a Boston event before becoming a member?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Occasionally Gildre opens select Boston events to prospective members by invitation. Apply and mention your interest in a Boston preview dinner. We regularly prioritize local applicants so you can experience the community before committing.",
          },
        },
      ],
    },
  ],
};

const verticals = [
  {
    label: "Biotech & Life Sciences",
    description:
      "Kendall Square is the most concentrated biotech corridor in the world. If you are navigating FDA timelines, clinical trials, or science-driven fundraising, Gildre matches you with operators who have built and exited in this specific capital landscape.",
    tags: ["Genomics", "Drug Discovery", "MedTech", "Clinical Trials"],
  },
  {
    label: "Deep-Tech & Climate Tech",
    description:
      "MIT and Harvard spin-offs have made Boston the capital of hard-tech entrepreneurship. Founders in fusion, advanced materials, quantum, and climate technology find peers here who understand long R&D cycles and patient capital.",
    tags: ["Quantum Computing", "Climate Tech", "Advanced Materials", "Fusion Energy"],
  },
  {
    label: "AI & Applied Research",
    description:
      "Boston's concentration of research institutions makes it one of the most important cities for applied AI. Founders translating academic AI breakthroughs into commercial products find the operator and investor density they need inside Gildre.",
    tags: ["Applied AI", "ML Infrastructure", "AI Research Spinouts", "Autonomous Systems"],
  },
  {
    label: "Enterprise SaaS & Cybersecurity",
    description:
      "HubSpot's success has seeded a generation of enterprise SaaS founders in Boston. The city's cybersecurity cluster, anchored by a dense federal and financial services client base, is equally deep.",
    tags: ["CRM & MarTech", "Cybersecurity", "Vertical SaaS", "Enterprise Platforms"],
  },
];

const testimonials = [
  {
    quote: "Being in Gildre feels like having founder co-workers that actually get it. They've saved me hours of research just by sharing what's worked for them.",
    name: "Caitlin Van Berkel",
    title: "Founder",
    company: "Silver Lining Career Coach",
    photo: "/reviews/caitlin-van-berkel.webp",
  },
  {
    quote: "The structure at Gildre is impressive. It's truly a space where founders challenge each other and mentorship isn't abstract.",
    name: "Christof Mannfeld",
    title: "Founder",
    company: "Solvee",
    photo: "/reviews/christof-mannfeld.webp",
  },
  {
    quote: "I wanted to surround myself with others going through similar growth and challenges. Gildre gives me exactly that, a community where I can both give and gain exceptional value.",
    name: "Elise Madrick",
    title: "Founder",
    company: "Cerené",
    photo: "/reviews/elise-madrick.webp",
  },
];

const faqItems = [
  {
    q: "How are 1:1 founder introductions curated in Boston?",
    a: "Every week, Gildre's team reviews your profile, stage, and goals to match you with a Boston founder or operator with directly relevant experience, in your vertical, at your funding stage. These are warm, intentional introductions, not cold algorithm requests.",
  },
  {
    q: "Where are Boston founder dinners and events held?",
    a: "Gildre Boston hosts monthly founder dinners in Kendall Square and the Seaport Innovation District, the two densest nodes of Boston's tech ecosystem. Peer roundtables and investor sessions rotate across Cambridge and Back Bay venues.",
  },
  {
    q: "What types of founders join Gildre Boston?",
    a: "Gildre Boston is built for seed-to-Series A founders primarily in biotech, life sciences, deep-tech, AI research, enterprise SaaS, and climate tech. Many members have MIT, Harvard, or Northeastern ties and are translating research into commercial ventures.",
  },
  {
    q: "How is Gildre different from Boston's university innovation programs?",
    a: "MIT's entrepreneurship programs and Harvard Innovation Labs are excellent institutional resources. Gildre is the peer layer for founders who have already left those programs, building companies at speed and needing operator-level mentorship and active 1:1 introductions, not coursework.",
  },
  {
    q: "Can I attend a Boston event before becoming a member?",
    a: "Occasionally Gildre opens select Boston events to prospective members by invitation. Apply and mention your interest in a Boston preview dinner. We regularly prioritize local applicants so you can experience the community before committing.",
  },
];

const peers = [
  { name: "Ryan Hughes", title: "Founder & CEO", company: "Fan Pier Labs", photo: "/images/ryan-hughes-headshot.webp" },
  { name: "John Olson", title: "Founder", company: "Healthcare Entrepreneur", photo: "/images/john-olson-headshot.webp" },
  { name: "Sharon Gai", title: "Keynote Speaker", company: "AI & Alibaba", photo: "/images/sharon-gai-headshot.jpg" },
  { name: "Steve Ramona", title: "Host", company: "Servant Heart Podcast", photo: "/images/steve-ramona-headshot.jpeg" },
];

export default function BostonPage() {
  return (
    <div style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 pb-28 pt-36"
        style={{ background: "linear-gradient(155deg, #080e1a 0%, #1C2744 50%, #0a1020 100%)" }}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #C9A96E 0%, transparent 65%)" }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            Gildre · Boston, MA
          </p>
          <h1
            className="mt-4 text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.08] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            The Curated Growth Network for{" "}
            <span style={{ color: "#C9A96E" }}>Boston&rsquo;s</span> Biotech,
            Deep-Tech &amp; Enterprise Builders.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Replace surface-level networking with active 1:1 matchmaking, expert operator
            mentorship, and high-impact peer roundtables, built for Boston&rsquo;s most focused
            founders, from Kendall Square to the Seaport.
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
              Explore Boston Gatherings
            </Link>
          </div>
          <p className="mt-8 text-[0.7rem] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.25)" }}>
            Seed · Series A · Operator-led · High-signal only
          </p>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────────────────── */}
      <section className="px-6 py-10" style={{ backgroundColor: "#080e1a", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="mx-auto max-w-4xl grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { value: "250+", label: "Active Members" },
            { value: "$2.4B+", label: "Member Valuations" },
            { value: "Weekly", label: "Curated Intros" },
            { value: "15+", label: "Cities Represented" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold" style={{ fontFamily: "var(--font-fraunces)", color: "#C9A96E" }}>{s.value}</p>
              <p className="mt-1 text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Ecosystem Verticals ──────────────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: "#0f1524" }}>
        <div className="mx-auto max-w-5xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-center" style={{ color: "#C9A96E" }}>
            Built for Boston&rsquo;s Core Verticals
          </p>
          <h2
            className="mt-3 text-center text-[1.75rem] font-bold leading-tight text-white sm:text-[2.25rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Deep expertise in the industries<br />Boston leads the world in.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            Gildre matches you with peers and operators who have already navigated the exact
            terrain you&rsquo;re crossing, in your vertical, at your stage.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {verticals.map((v) => (
              <div key={v.label} className="rounded-2xl p-7" style={{ backgroundColor: "rgba(201,169,110,0.04)", border: "1px solid rgba(201,169,110,0.12)" }}>
                <h3 className="text-base font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>{v.label}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{v.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {v.tags.map((tag) => (
                    <span key={tag} className="rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider" style={{ backgroundColor: "rgba(201,169,110,0.08)", color: "rgba(201,169,110,0.7)" }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Member Section ───────────────────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: "#080e1a" }}>
        <div className="mx-auto max-w-5xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-center" style={{ color: "#C9A96E" }}>
            Your Future Peers
          </p>
          <h2
            className="mt-3 text-center text-[1.75rem] font-bold leading-tight text-white sm:text-[2.25rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            The founders you&rsquo;ve been<br />trying to get in the room with.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            Gildre members are hand-selected founders, operators, and builders who are active,
            giving, and at your level. Not LinkedIn connections. Actual peers.
          </p>

          {/* Featured member */}
          <div className="mt-12 rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(201,169,110,0.2)", backgroundColor: "rgba(255,255,255,0.02)" }}>
            <div className="flex flex-col sm:flex-row">
              <div className="relative h-56 sm:h-auto sm:w-48 flex-shrink-0">
                <Image src="/images/ryan-hughes-headshot.webp" alt="Ryan Hughes, Founder of Fan Pier Labs, Boston Gildre member" fill sizes="(max-width: 640px) 100vw, 192px" className="object-cover object-top" />
              </div>
              <div className="flex flex-col justify-center p-8">
                <span className="mb-3 inline-block rounded-full px-3 py-1 text-[0.6rem] font-bold uppercase tracking-widest" style={{ backgroundColor: "rgba(201,169,110,0.12)", color: "#C9A96E" }}>
                  Boston Member Spotlight
                </span>
                <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>Ryan Hughes</h3>
                <p className="mt-1 text-sm font-medium" style={{ color: "rgba(255,255,255,0.45)" }}>Founder &amp; CEO · Fan Pier Labs</p>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Ryan left senior engineering roles at Google and Snapchat to found Fan Pier Labs, an AI-driven software consultancy for startups, named after Boston&rsquo;s iconic waterfront. He brings a rare combination of big-tech depth and founder urgency to the Gildre community.
                </p>
                <Link href="/blog/ryan-hughes-google-snapchat-fan-pier-labs" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70" style={{ color: "#C9A96E" }}>
                  Read his story →
                </Link>
              </div>
            </div>
          </div>

          {/* Peer grid */}
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {peers.map((p) => (
              <div key={p.name} className="rounded-2xl p-5 text-center" style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="relative mx-auto h-16 w-16 overflow-hidden rounded-full ring-2 ring-[#C9A96E]/30">
                  <Image src={p.photo} alt={p.name} fill sizes="64px" className="object-cover object-top" />
                </div>
                <p className="mt-3 text-sm font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>{p.name}</p>
                <p className="mt-0.5 text-[0.65rem]" style={{ color: "rgba(255,255,255,0.4)" }}>{p.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Events & Programs ────────────────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: "#0f1524" }}>
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div className="relative h-80 overflow-hidden rounded-2xl lg:h-96" style={{ border: "1px solid rgba(201,169,110,0.12)" }}>
              <Image src="/images/community/dinner.webp" alt="Gildre Boston founder dinner, monthly gatherings in Kendall Square and the Seaport" fill sizes="(max-width: 1024px) calc(100vw - 48px), 480px" className="object-cover" style={{ objectPosition: "center center" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,14,26,0.6) 0%, transparent 50%)" }} />
              <div className="absolute bottom-5 left-5">
                <p className="text-xs font-bold uppercase tracking-widest text-white">Monthly Founder Dinner</p>
                <p className="mt-0.5 text-[0.65rem]" style={{ color: "rgba(255,255,255,0.5)" }}>Kendall Square · Boston</p>
              </div>
            </div>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>In-Person Events · Boston, MA</p>
              <h2 className="mt-3 text-[1.75rem] font-bold leading-tight text-white sm:text-[2.1rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
                Real rooms. Real conversations. Active facilitation.
              </h2>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                Gildre Boston hosts curated in-person programming every month: small, intentional gatherings where every attendee is selected and every conversation has a point.
              </p>
              <ul className="mt-7 flex flex-col gap-5">
                {[
                  { title: "Monthly Founder Dinners", detail: "Private seated dinners in Kendall Square and the Seaport Innovation District. 12–20 founders per table. No pitches, no panels. High-density peer conversation." },
                  { title: "Peer Operator Roundtables", detail: "Quarterly deep-dives on scaling challenges: navigating FDA timelines, deep-tech fundraising, and hiring PhD talent, facilitated by operators who have crossed the same threshold." },
                  { title: "Investor Office Hours", detail: "Direct access sessions with active Boston-area VCs and angels deploying into biotech, deep-tech, and enterprise, the verticals you are building in." },
                ].map((ev) => (
                  <li key={ev.title} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold" style={{ backgroundColor: "rgba(201,169,110,0.12)", color: "#C9A96E" }}>✓</span>
                    <div>
                      <p className="text-sm font-bold text-white">{ev.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{ev.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: "#080e1a" }}>
        <div className="mx-auto max-w-5xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-center" style={{ color: "#C9A96E" }}>From Gildre Members</p>
          <h2 className="mt-3 text-center text-[1.75rem] font-bold text-white sm:text-[2.1rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
            What building inside Gildre<br />actually feels like.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl p-7 flex flex-col" style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="text-4xl mb-5 flex-shrink-0" style={{ color: "rgba(201,169,110,0.4)", fontFamily: "Georgia, serif", lineHeight: 1 }}>&ldquo;</div>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.65)" }}>{t.quote}</p>
                <div className="mt-7 flex items-center gap-3 border-t pt-5" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                    <Image src={t.photo} alt={t.name} fill sizes="40px" className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.4)" }}>{t.title} · {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Qualification ────────────────────────────────────────────── */}
      <section className="px-6 py-20" style={{ backgroundColor: "#0f1524", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl px-8 py-10 sm:px-12" style={{ backgroundColor: "rgba(201,169,110,0.05)", border: "1px solid rgba(201,169,110,0.18)" }}>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>Selection Criteria</p>
            <h2 className="mt-3 text-[1.5rem] font-bold leading-snug text-white sm:text-[1.9rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
              Built for Pre-Seed to Series A founders, executive operators, and high-growth builders in Boston.
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Gildre Boston is selective by design. We review every application to ensure the community stays high-signal. You are a good fit if you are actively building a tech-enabled company, have initial traction or prior founder experience, and are serious about peer-to-peer growth, not just collecting contacts.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {["Pre-Seed to Series A", "Executive Operators", "Active Builders"].map((crit) => (
                <div key={crit} className="flex items-center gap-2 rounded-xl px-4 py-3" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <span style={{ color: "#C9A96E" }}>✓</span>
                  <span className="text-sm font-medium text-white">{crit}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a href="https://tally.so/r/VLERVa" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full px-9 py-3.5 text-sm font-bold transition-opacity hover:opacity-90" style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}>
                Apply for Membership →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Meet the Chapter Leads ───────────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: "#0f1524", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="mx-auto max-w-5xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-center" style={{ color: "#C9A96E" }}>
            Chapter Leads
          </p>
          <h2 className="mt-3 text-center text-[1.75rem] font-bold text-white sm:text-[2.1rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
            Meet the team behind Gildre Boston.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                name: "Shweta Agrawal",
                title: "Co-Director & Chief AI Product Officer, Boston New Technology · Boston Chapter Lead, Gildre",
                bio: "Shweta is an AI product leader and ecosystem builder who serves as Co-Director and Chief AI Product Officer at Boston New Technology. She is the founder of SheBuildsProduct and SheBuildsStartupWeekends, and Chair at StartOut Boston, having mentored hundreds of founders from first-time entrepreneurs to seasoned operators on product strategy, go-to-market, and the path to product-market fit. A Forbes Technology Council member and speaker at Venture Café Cambridge, she brings both the institutional perspective of an operator and the personal stake of a founder to her community work. Shweta leads Gildre Boston with a focus on underrepresented builders and the kind of intentional programming that creates real leverage.",
                photo: "/team/shweta-agrawal.webp",
                linkedin: "#",
              },
              {
                name: "Connor Fitzgerald",
                title: "Founder, AGI Beacon · Boston Chapter Lead, Gildre",
                bio: "Connor is the founder of AGI Beacon, a platform that helps companies make smarter technology decisions by sourcing the right providers across AI, cloud, cybersecurity, and connectivity faster and at better prices. Based in the Greater Boston area, he has built AGI Beacon into a trusted resource for businesses navigating a rapidly changing technology landscape. Connor brings a sharp operator's eye to Gildre Boston, focused on connecting founders who are serious about building well with the peers, mentors, and introductions that actually move the needle. He believes the best founder communities are defined not by who attends events but by who shows up for each other between them.",
                photo: "/team/connor-fitzgerald.webp",
                linkedin: "#",
              },
            ].map((lead) => (
              <div key={lead.name} className="rounded-2xl p-8 flex flex-col sm:flex-row gap-6" style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="relative mx-auto sm:mx-0 h-20 w-20 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-[#C9A96E]/30">
                  <Image src={lead.photo} alt={lead.name} fill sizes="80px" className="object-cover object-top" />
                </div>
                <div className="flex flex-col justify-center text-center sm:text-left">
                  <p className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>{lead.name}</p>
                  <p className="mt-0.5 text-xs font-medium" style={{ color: "#C9A96E" }}>{lead.title}</p>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{lead.bio}</p>
                  <a href={lead.linkedin} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70 justify-center sm:justify-start" style={{ color: "#C9A96E" }}>
                    LinkedIn →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="px-6 py-20" style={{ backgroundColor: "#080e1a" }}>
        <div className="mx-auto max-w-3xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-center" style={{ color: "#C9A96E" }}>Boston FAQ</p>
          <h2 className="mt-3 text-center text-[1.75rem] font-bold text-white sm:text-[2rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
            Questions about Gildre Boston.
          </h2>
          <div className="mt-10 flex flex-col gap-3">
            {faqItems.map((item) => (
              <details key={item.q} className="group rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-sm font-semibold text-white list-none" style={{ fontFamily: "var(--font-fraunces)" }}>
                  {item.q}
                  <span className="flex-shrink-0 text-lg font-light transition-transform group-open:rotate-45" style={{ color: "#C9A96E" }}>+</span>
                </summary>
                <div className="px-6 pb-5 pt-0">
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <section className="px-6 py-28 text-center" style={{ backgroundColor: "#1C2744" }}>
        <div className="mx-auto max-w-2xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>Boston, MA</p>
          <h2 className="mt-4 text-[2rem] font-bold leading-tight text-white sm:text-[2.75rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
            Your next breakthrough starts with the right room.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            Apply today and get actively matched with Boston founders who are building at your level, with 1:1 introductions starting in your first week.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="https://tally.so/r/VLERVa" target="_blank" rel="noopener noreferrer" className="rounded-full px-10 py-4 text-sm font-bold transition-opacity hover:opacity-90" style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}>
              Apply for Membership →
            </a>
            <Link href="/contact" className="rounded-full px-8 py-4 text-sm font-semibold transition-opacity hover:opacity-80" style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.2)" }}>
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <div className="px-6 py-8 text-center text-[0.7rem] text-zinc-600" style={{ backgroundColor: "#080e1a", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <p>
          &copy; {new Date().getFullYear()} Gildre, LLC. All rights reserved.{" "}
          <a href="/privacy" className="underline underline-offset-2 hover:text-zinc-400 transition-colors">Privacy Policy</a>
          {" · "}
          <a href="/" className="underline underline-offset-2 hover:text-zinc-400 transition-colors">Back to Gildre.com</a>
        </p>
      </div>
    </div>
  );
}
