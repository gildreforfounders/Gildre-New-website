import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/bayarea" },
  title: "Founder Community Bay Area | Gildre",
  description:
    "Gildre connects Bay Area founders across every industry with active 1:1 matchmaking, expert operator mentorship, and private monthly dinners. Built for serious founders at the Seed to Growth stage.",
  keywords: [
    "Bay Area founder community",
    "Silicon Valley startup network",
    "San Francisco entrepreneurs",
    "Gildre Bay Area",
    "VC introductions founders",
    "AI founders San Francisco",
    "enterprise SaaS Bay Area",
    "Silicon Valley peer groups",
    "SF startup dinners",
  ],
  openGraph: {
    title: "Founder Community Bay Area | Gildre",
    description:
      "Gildre connects Bay Area founders across every industry with active 1:1 matchmaking, expert operator mentorship, and private monthly dinners. Built for serious founders at the Seed to Growth stage.",
    url: "https://www.gildre.com/bayarea",
    siteName: "Gildre",
    type: "website",
    images: [{ url: "https://www.gildre.com/og-home.png", width: 1200, height: 630, alt: "Gildre founder community in the Bay Area" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Founder Community Bay Area | Gildre",
    description:
      "Gildre connects Bay Area founders across every industry with active 1:1 matchmaking, expert operator mentorship, and private monthly dinners. Built for serious founders at the Seed to Growth stage.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      name: "Gildre — Bay Area",
      url: "https://www.gildre.com/bayarea",
      logo: "https://www.gildre.com/images/gildre-logo.png",
      image: "https://www.gildre.com/og-home.png",
      description:
        "Gildre is a private founder membership community in the Bay Area, CA. Gildre Bay Area hosts monthly founder dinners in SoMa and Palo Alto for tech CEOs and early-stage startup founders, alongside weekly curated peer matches, expert mentorship, and warm investor introductions.",
      email: "info@gildre.com",
      telephone: "+1-847-881-6319",
      priceRange: "$$",
      address: { "@type": "PostalAddress", addressLocality: "San Francisco", addressRegion: "CA", postalCode: "94102", addressCountry: "US" },
      geo: { "@type": "GeoCoordinates", latitude: 37.7749, longitude: -122.4194 },
      areaServed: [{ "@type": "City", name: "San Francisco" }, { "@type": "State", name: "California" }, { "@type": "Country", name: "United States" }],
      knowsAbout: ["Founder Peer Groups", "Startup Mentorship", "Angel Investing", "Venture Capital", "Startup Fundraising", "Community Building"],
      sameAs: ["https://www.gildre.com", "https://www.instagram.com/gildreforfounders", "https://www.linkedin.com/company/gildre/"],
      parentOrganization: { "@type": "Organization", name: "Gildre", url: "https://www.gildre.com" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How are 1:1 founder introductions curated in the Bay Area?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every week, Gildre's team reviews your profile, stage, and goals to match you with a Bay Area founder or operator with directly relevant experience. In a market where everyone is a founder, quality of connection matters more than volume. Every intro is intentional.",
          },
        },
        {
          "@type": "Question",
          name: "Where are Bay Area founder dinners and events held?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gildre Bay Area hosts monthly founder dinners in SoMa and Palo Alto, the two most active nodes of the Bay Area's founder ecosystem. Peer roundtables and investor sessions rotate across the Peninsula and East Bay depending on the cohort.",
          },
        },
        {
          "@type": "Question",
          name: "What types of founders join Gildre Bay Area?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gildre Bay Area welcomes founders across every industry — SaaS, consumer, healthcare, creator economy, hardware, services, and beyond. What members share is not a sector. It's a stage of seriousness: actively building, accountable to peers, and ready to give as much as they get. Members typically range between the Build (<$500K) and Growth ($5M+ ARR) stages.",
          },
        },
        {
          "@type": "Question",
          name: "How is Gildre different from other Bay Area founder communities?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every coffee shop in SoMa is full of founders. Proximity isn't community. Gildre is the curated, private peer layer: selected members, intentional 1:1 introductions, and small-group dinners where every person was chosen deliberately. It is designed for depth, not volume.",
          },
        },
        {
          "@type": "Question",
          name: "Can I attend a Bay Area event before becoming a member?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Occasionally Gildre opens select Bay Area events to prospective members by invitation. Apply and mention your interest in a Bay Area preview dinner. We regularly prioritize local applicants so you can experience the community before committing.",
          },
        },
      ],
    },
  ],
};

const memberTraits = [
  {
    label: "They're actively building",
    description:
      "Not ideating, not studying the market. Gildre members are shipping, selling, and scaling. The conversations reflect it.",
  },
  {
    label: "They give before they ask",
    description:
      "The community runs on reciprocity. Every member contributes. That's what keeps the signal high and the trust real.",
  },
  {
    label: "Every industry. One standard.",
    description:
      "Consumer, healthcare, SaaS, hardware, creator economy, services. Gildre Bay Area has members building across all of it. Industry is never the filter. Ambition and accountability are.",
  },
  {
    label: "Past the point of no return",
    description:
      "Most members have crossed a threshold where going back isn't the plan. That changes how they show up, what they share, and how much they're willing to help.",
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
    q: "How are 1:1 founder introductions curated in the Bay Area?",
    a: "Every week, Gildre's team reviews your profile, stage, and goals to match you with a Bay Area founder or operator with directly relevant experience. In a market where everyone is a founder, quality of connection matters more than volume. Every intro is intentional.",
  },
  {
    q: "Where are Bay Area founder dinners and events held?",
    a: "Gildre Bay Area hosts monthly founder dinners in SoMa and Palo Alto, the two most active nodes of the Bay Area's founder ecosystem. Peer roundtables and investor sessions rotate across the Peninsula and East Bay depending on the cohort.",
  },
  {
    q: "What types of founders join Gildre Bay Area?",
    a: "Gildre Bay Area welcomes founders across every industry — SaaS, consumer, healthcare, creator economy, hardware, services, and beyond. What members share is not a sector. It's a stage of seriousness: actively building, accountable to peers, and ready to give as much as they get. Members typically range between the Build (<$500K) and Growth ($5M+ ARR) stages.",
  },
  {
    q: "How is Gildre different from other Bay Area founder communities?",
    a: "Every coffee shop in SoMa is full of founders. Proximity isn't community. Gildre is the curated, private peer layer: selected members, intentional 1:1 introductions, and small dinners where every person was chosen deliberately. Depth over volume.",
  },
  {
    q: "Can I attend a Bay Area event before becoming a member?",
    a: "Occasionally Gildre opens select Bay Area events to prospective members by invitation. Apply and mention your interest in a preview dinner. We regularly prioritize local applicants so you can experience the community before committing.",
  },
];

const peers = [
  { name: "Chris Yeh", title: "Partner & Author", company: "Blitzscaling Ventures", photo: "/images/chris-yeh-headshot.jpeg" },
  { name: "Fritz Lanman", title: "CEO", company: "ClassPass", photo: "/images/fritz-lanman-headshot.webp" },
  { name: "Alex Bean", title: "Co-Founder", company: "Divvy / Bill.com", photo: "/images/alex-bean-headshot.webp" },
  { name: "Chris Tsakalakis", title: "CEO", company: "StubHub", photo: "/images/chris-tsakalakis-headshot.jpeg" },
];

export default function BayAreaPage() {
  return (
    <div style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 pb-28 pt-36" style={{ background: "linear-gradient(155deg, #080e1a 0%, #1C2744 50%, #0a1020 100%)" }}>
        <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10" style={{ background: "radial-gradient(ellipse, #C9A96E 0%, transparent 65%)" }} />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>Gildre · Bay Area, CA</p>
          <h1 className="mt-4 text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.08] text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
            The Curated Growth Network for{" "}
            <span style={{ color: "#C9A96E" }}>the Bay Area&rsquo;s</span> Founders Who Are Actually Building.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            In the noisiest founder market on earth, replace surface-level networking with active
            1:1 matchmaking, expert operator mentorship, and high-impact peer roundtables, built
            for the Bay Area&rsquo;s founders who are actually building.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="https://tally.so/r/VLERVa" target="_blank" rel="noopener noreferrer" className="rounded-full px-9 py-3.5 text-sm font-bold transition-opacity hover:opacity-90" style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}>
              Apply for Membership →
            </a>
            <Link href="/membership" className="rounded-full px-8 py-3.5 text-sm font-semibold transition-opacity hover:opacity-80" style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)" }}>
              Explore Bay Area Gatherings
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {["All Industries", "Seed to Growth Stage", "High Signal Only"].map((tag) => (
              <span
                key={tag}
                className="rounded-full px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-wider"
                style={{ backgroundColor: "rgba(201,169,110,0.1)", color: "rgba(201,169,110,0.7)", border: "1px solid rgba(201,169,110,0.2)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────────────────── */}
      <section className="px-6 py-10" style={{ backgroundColor: "#080e1a", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="mx-auto max-w-4xl grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[{ value: "250+", label: "Active Members" }, { value: "$2.4B+", label: "Member Valuations" }, { value: "Weekly", label: "Curated Intros" }, { value: "15+", label: "Cities Represented" }].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold" style={{ fontFamily: "var(--font-fraunces)", color: "#C9A96E" }}>{s.value}</p>
              <p className="mt-1 text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── What Members Have in Common ──────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: "#0f1524" }}>
        <div className="mx-auto max-w-5xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-center" style={{ color: "#C9A96E" }}>What Gildre Bay Area Members Have in Common</p>
          <h2 className="mt-3 text-center text-[1.75rem] font-bold leading-tight text-white sm:text-[2.25rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
            It&rsquo;s not what you&rsquo;re building.<br />It&rsquo;s how serious you are about building it.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            The right people are already in the room. The filter isn&rsquo;t industry — it&rsquo;s
            commitment. Every member ships, gives, and shows up.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {memberTraits.map((v) => (
              <div key={v.label} className="rounded-2xl p-7" style={{ backgroundColor: "rgba(201,169,110,0.04)", border: "1px solid rgba(201,169,110,0.12)" }}>
                <h3 className="text-base font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>{v.label}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Member Section ───────────────────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: "#080e1a" }}>
        <div className="mx-auto max-w-5xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-center" style={{ color: "#C9A96E" }}>Your Future Peers</p>
          <h2 className="mt-3 text-center text-[1.75rem] font-bold leading-tight text-white sm:text-[2.25rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
            The founders you&rsquo;ve been<br />trying to get in the room with.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            Gildre members are hand-selected founders, operators, and builders who are active, giving, and at your level.
          </p>

          {/* Featured member */}
          <div className="mt-12 rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(201,169,110,0.2)", backgroundColor: "rgba(255,255,255,0.02)" }}>
            <div className="flex flex-col sm:flex-row">
              <div className="relative h-56 sm:h-auto sm:w-48 flex-shrink-0">
                <Image src="/images/chris-yeh-headshot.jpeg" alt="Chris Yeh, Blitzscaling co-author and Silicon Valley partner, Gildre Bay Area member" fill sizes="(max-width: 640px) 100vw, 192px" className="object-cover object-top" />
              </div>
              <div className="flex flex-col justify-center p-8">
                <span className="mb-3 inline-block rounded-full px-3 py-1 text-[0.6rem] font-bold uppercase tracking-widest" style={{ backgroundColor: "rgba(201,169,110,0.12)", color: "#C9A96E" }}>
                  Bay Area Member Spotlight
                </span>
                <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>Chris Yeh</h3>
                <p className="mt-1 text-sm font-medium" style={{ color: "rgba(255,255,255,0.45)" }}>Partner · Blitzscaling Ventures</p>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Chris Yeh co-authored Blitzscaling with Reid Hoffman, the definitive playbook for scaling winner-take-most companies in Silicon Valley. As a partner at Blitzscaling Ventures, he brings direct operator knowledge of how the Bay Area&rsquo;s most consequential companies were built.
                </p>
                <Link href="/blog/chris-yeh-blitzscaling-reid-hoffman" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70" style={{ color: "#C9A96E" }}>
                  Read his story →
                </Link>
              </div>
            </div>
          </div>

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
              <Image src="/images/community/dinner.webp" alt="Gildre Bay Area founder dinner, monthly gatherings in SoMa and Palo Alto" fill sizes="(max-width: 1024px) calc(100vw - 48px), 480px" className="object-cover" style={{ objectPosition: "center center" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,14,26,0.6) 0%, transparent 50%)" }} />
              <div className="absolute bottom-5 left-5">
                <p className="text-xs font-bold uppercase tracking-widest text-white">Monthly Founder Dinner</p>
                <p className="mt-0.5 text-[0.65rem]" style={{ color: "rgba(255,255,255,0.5)" }}>SoMa · San Francisco</p>
              </div>
            </div>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>In-Person Events · Bay Area, CA</p>
              <h2 className="mt-3 text-[1.75rem] font-bold leading-tight text-white sm:text-[2.1rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
                Real rooms. Real conversations. Active facilitation.
              </h2>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                Gildre Bay Area hosts curated in-person programming every month: small, intentional gatherings where every attendee is selected and every conversation has a point.
              </p>
              <ul className="mt-7 flex flex-col gap-5">
                {[
                  { title: "Monthly Founder Dinners", detail: "Private seated dinners in SoMa and Palo Alto. 12–20 founders per table. No pitches, no panels. High-density peer conversation for Bay Area's most focused builders." },
                  { title: "Peer Operator Roundtables", detail: "Quarterly deep-dives on the hardest parts of scaling: hiring, GTM, fundraising, and the decisions founders don't talk about publicly." },
                  { title: "Investor Office Hours", detail: "Direct access sessions with active Bay Area VCs and angels. Sessions are open across industries — the focus is stage and fit, not sector." },
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
              Built for Pre-Seed to Series A founders, executive operators, and high-growth builders in the Bay Area.
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Gildre Bay Area is selective by design. In the world&rsquo;s most founder-dense market, the only way to build a high-signal community is through deliberate curation. We review every application. You are a good fit if you are actively building a tech-enabled company with traction, and are serious about peer-to-peer growth, not just proximity to other founders.
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
            Meet the team behind Gildre Bay Area.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                name: "Fred Zirdung",
                title: "Founder, Rocket House · Bay Area Chapter Lead, Gildre",
                bio: "Fred is the founder of Rocket House, bringing over 20 years of experience designing and scaling large-scale software systems. He has led engineering teams across local and distributed environments, mentored technical founders on architecture decisions, and served as VP of Learning and Development at Talent Path. Fred is an IT Advisor at Stride and volunteers with the SF SPCA and Rocket Dog Rescue, reflecting the community-first values he brings to his chapter leadership. At Gildre Bay Area, he creates the kind of high-trust peer environment where technical founders can think out loud and move faster together.",
                photo: "/team/fred-zirdung.webp",
                linkedin: "#",
              },
              {
                name: "Tony Xiong",
                title: "Founder, Bubbl AI · Bay Area Chapter Lead, Gildre",
                bio: "Tony is a serial entrepreneur and product designer building Bubbl AI, a platform focused on cutting through message chaos for fast-moving teams and founders. A Northwestern University graduate with experience at Invisible Product Inc., Tony describes himself as an intuitive product builder who thinks deeply about how people communicate and collaborate. He has built across multiple ventures in the Bay Area and brings a product-first perspective to every founder conversation. At Gildre Bay Area, Tony is committed to creating the kind of community he wished he had earlier: high-signal, low-noise, and built on the trust that only comes from showing up consistently.",
                photo: "/team/tony-xiong.webp",
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
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-center" style={{ color: "#C9A96E" }}>Bay Area FAQ</p>
          <h2 className="mt-3 text-center text-[1.75rem] font-bold text-white sm:text-[2rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
            Questions about Gildre Bay Area.
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
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>Bay Area, CA</p>
          <h2 className="mt-4 text-[2rem] font-bold leading-tight text-white sm:text-[2.75rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
            Your next breakthrough starts with the right room.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            Apply today and get actively matched with Bay Area founders building at your level, with 1:1 introductions starting in your first week.
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
