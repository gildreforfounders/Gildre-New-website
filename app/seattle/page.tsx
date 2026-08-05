import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/seattle" },
  title: "Founder Community Seattle | Gildre",
  description:
    "Gildre connects Seattle founders across every industry with active 1:1 matchmaking, expert operator mentorship, and private monthly dinners. Built for serious founders at the Seed to Growth stage.",
  keywords: [
    "Seattle founder community",
    "Seattle startup network",
    "Seattle entrepreneurs",
    "Gildre Seattle",
    "big tech alumni founders Seattle",
    "enterprise software Seattle",
    "cloud infrastructure founders",
    "Amazon alumni startup",
    "South Lake Union founders",
  ],
  openGraph: {
    title: "Founder Community Seattle | Gildre",
    description:
      "Gildre connects Seattle founders across every industry with active 1:1 matchmaking, expert operator mentorship, and private monthly dinners. Built for serious founders at the Seed to Growth stage.",
    url: "https://www.gildre.com/seattle",
    siteName: "Gildre",
    type: "website",
    images: [{ url: "https://www.gildre.com/og-home.png", width: 1200, height: 630, alt: "Gildre founder community in Seattle" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Founder Community Seattle | Gildre",
    description:
      "Gildre connects Seattle founders across every industry with active 1:1 matchmaking, expert operator mentorship, and private monthly dinners. Built for serious founders at the Seed to Growth stage.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      name: "Gildre — Seattle",
      url: "https://www.gildre.com/seattle",
      logo: "https://www.gildre.com/images/gildre-logo.png",
      image: "https://www.gildre.com/og-home.png",
      description:
        "Gildre is a private founder membership community in Seattle, WA. Gildre Seattle hosts monthly founder dinners in South Lake Union and Capitol Hill for tech CEOs and early-stage startup founders, alongside weekly curated peer matches, expert mentorship, and warm investor introductions.",
      email: "info@gildre.com",
      telephone: "+1-847-881-6319",
      priceRange: "$$",
      address: { "@type": "PostalAddress", addressLocality: "Seattle", addressRegion: "WA", postalCode: "98101", addressCountry: "US" },
      geo: { "@type": "GeoCoordinates", latitude: 47.6062, longitude: -122.3321 },
      areaServed: [{ "@type": "City", name: "Seattle" }, { "@type": "Country", name: "United States" }],
      knowsAbout: ["Founder Peer Groups", "Startup Mentorship", "Angel Investing", "Venture Capital", "Startup Fundraising", "Community Building"],
      sameAs: ["https://www.gildre.com", "https://www.instagram.com/gildreforfounders", "https://www.linkedin.com/company/gildre/"],
      parentOrganization: { "@type": "Organization", name: "Gildre", url: "https://www.gildre.com" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How are 1:1 founder introductions curated in Seattle?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every week, Gildre's team reviews your profile, stage, and goals to match you with a Seattle founder or operator with directly relevant experience, in your vertical, at your funding stage. These are warm, intentional introductions, not cold algorithm requests.",
          },
        },
        {
          "@type": "Question",
          name: "Where are Seattle founder dinners and events held?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gildre Seattle hosts monthly founder dinners in South Lake Union and Capitol Hill, the two most active nodes of Seattle's founder ecosystem. Peer roundtables and investor sessions rotate across Pioneer Square and Belltown venues.",
          },
        },
        {
          "@type": "Question",
          name: "What types of founders join Gildre Seattle?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gildre Seattle welcomes founders across every industry — SaaS, consumer, healthcare, creator economy, hardware, services, and beyond. What members share is not a sector. It's a stage of seriousness: actively building, accountable to peers, and ready to give as much as they get. Members typically range between the Build (<$500K) and Growth ($5M+ ARR) stages.",
          },
        },
        {
          "@type": "Question",
          name: "How does Gildre help big-tech alumni transition to founder life?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The leap from FAANG to founder is a specific challenge, different from general entrepreneurship. Gildre Seattle has a concentrated cohort of big-tech alumni founders who have crossed that threshold and can offer the specific mentorship and peer support that transition requires, from the first hire to the first enterprise contract.",
          },
        },
        {
          "@type": "Question",
          name: "Can I attend a Seattle event before becoming a member?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Occasionally Gildre opens select Seattle events to prospective members by invitation. Apply and mention your interest in a Seattle preview dinner. We regularly prioritize local applicants so you can experience the community before committing.",
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
      "Consumer, healthcare, SaaS, hardware, creator economy, services. Gildre Seattle has members building across all of it. Industry is never the filter. Ambition and accountability are.",
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
    q: "How are 1:1 founder introductions curated in Seattle?",
    a: "Every week, Gildre's team reviews your profile, stage, and goals to match you with a Seattle founder or operator with directly relevant experience, in your vertical, at your funding stage. These are warm, intentional introductions, not cold algorithm requests.",
  },
  {
    q: "Where are Seattle founder dinners and events held?",
    a: "Gildre Seattle hosts monthly founder dinners in South Lake Union and Capitol Hill, the two most active nodes of Seattle's founder ecosystem. Peer roundtables and investor sessions rotate across Pioneer Square and Belltown venues.",
  },
  {
    q: "What types of founders join Gildre Seattle?",
    a: "Gildre Seattle welcomes founders across every industry — SaaS, consumer, healthcare, creator economy, hardware, services, and beyond. What members share is not a sector. It's a stage of seriousness: actively building, accountable to peers, and ready to give as much as they get. Members typically range between the Build (<$500K) and Growth ($5M+ ARR) stages.",
  },
  {
    q: "How does Gildre help big-tech alumni transition to founder life?",
    a: "The leap from FAANG to founder is a specific challenge, very different from general entrepreneurship. Gildre Seattle has a concentrated cohort of big-tech alumni founders who have crossed that threshold and can offer the specific mentorship the transition requires, from the first hire to the first enterprise contract.",
  },
  {
    q: "Can I attend a Seattle event before becoming a member?",
    a: "Occasionally Gildre opens select Seattle events to prospective members by invitation. Apply and mention your interest in a Seattle preview dinner. We regularly prioritize local applicants so you can experience the community before committing.",
  },
];

const peers = [
  { name: "Alex Bean", title: "Co-Founder", company: "Divvy / Bill.com", photo: "/images/alex-bean-headshot.webp" },
  { name: "John Olson", title: "Founder", company: "Healthcare Entrepreneur", photo: "/images/john-olson-headshot.webp" },
  { name: "James Corwin", title: "Founder", company: "Corwin Galleries", photo: "/images/james-corwin-headshot.webp" },
  { name: "Aytekin Tank", title: "Founder & CEO", company: "Jotform", photo: "/images/aytekin-tank-headshot.webp" },
];

export default function SeattlePage() {
  return (
    <div style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 pb-28 pt-36" style={{ background: "linear-gradient(155deg, #080e1a 0%, #1C2744 50%, #0a1020 100%)" }}>
        <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10" style={{ background: "radial-gradient(ellipse, #C9A96E 0%, transparent 65%)" }} />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>Gildre · Seattle, WA</p>
          <h1 className="mt-4 text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.08] text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
            The Curated Growth Network for{" "}
            <span style={{ color: "#C9A96E" }}>Seattle&rsquo;s</span> Founders Who Are All In.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Replace surface-level networking with active 1:1 matchmaking, expert operator
            mentorship, and high-impact peer roundtables, built for Seattle&rsquo;s founders
            who are all in.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="https://tally.so/r/VLERVa" target="_blank" rel="noopener noreferrer" className="rounded-full px-9 py-3.5 text-sm font-bold transition-opacity hover:opacity-90" style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}>
              Apply for Membership →
            </a>
            <Link href="/membership" className="rounded-full px-8 py-3.5 text-sm font-semibold transition-opacity hover:opacity-80" style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)" }}>
              Explore Seattle Gatherings
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
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-center" style={{ color: "#C9A96E" }}>What Gildre Seattle Members Have in Common</p>
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
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
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
              <Image src="/images/community/dinner.webp" alt="Gildre Seattle founder dinner, monthly gatherings in South Lake Union and Capitol Hill" fill sizes="(max-width: 1024px) calc(100vw - 48px), 480px" className="object-cover" style={{ objectPosition: "center center" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,14,26,0.6) 0%, transparent 50%)" }} />
              <div className="absolute bottom-5 left-5">
                <p className="text-xs font-bold uppercase tracking-widest text-white">Monthly Founder Dinner</p>
                <p className="mt-0.5 text-[0.65rem]" style={{ color: "rgba(255,255,255,0.5)" }}>South Lake Union · Seattle</p>
              </div>
            </div>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>In-Person Events · Seattle, WA</p>
              <h2 className="mt-3 text-[1.75rem] font-bold leading-tight text-white sm:text-[2.1rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
                Real rooms. Real conversations. Active facilitation.
              </h2>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                Gildre Seattle hosts curated in-person programming every month: small, intentional gatherings where every attendee is selected and every conversation has a point.
              </p>
              <ul className="mt-7 flex flex-col gap-5">
                {[
                  { title: "Monthly Founder Dinners", detail: "Private seated dinners in South Lake Union and Capitol Hill. 12–20 founders per table. No pitches, no panels. High-density peer conversation for Seattle's most serious builders." },
                  { title: "Peer Operator Roundtables", detail: "Quarterly deep-dives on the hardest parts of scaling: hiring, GTM, fundraising, and the decisions founders don't talk about publicly." },
                  { title: "Investor Office Hours", detail: "Direct access sessions with active Pacific Northwest VCs and angels. Sessions are open across industries — the focus is stage and fit, not sector." },
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
              Built for Pre-Seed to Series A founders, executive operators, and high-growth builders in Seattle.
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Gildre Seattle is selective by design. We review every application to ensure the community stays high-signal. You are a good fit if you are actively building a tech-enabled company, have initial traction or prior big-tech experience, and are serious about peer-to-peer growth, not just collecting contacts.
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
            Meet the team behind Gildre Seattle.
          </h2>
          <div className="mt-12 flex justify-center">
            <div className="rounded-2xl p-8 flex flex-col sm:flex-row gap-6 max-w-xl w-full" style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="relative mx-auto sm:mx-0 h-20 w-20 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-[#C9A96E]/30">
                <Image src="/team/taiga-gamell.jpg" alt="Taiga Gamell" fill sizes="80px" className="object-cover object-top" />
              </div>
              <div className="flex flex-col justify-center text-center sm:text-left">
                <p className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>Taiga Gamell</p>
                <p className="mt-0.5 text-xs font-medium" style={{ color: "#C9A96E" }}>Co-Founder &amp; Managing Partner, Gildre</p>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Taiga was born in Japan and grew up in an entrepreneurial family. He ran a family-owned EdTech platform then co-founded and raised funding for a sustainability startup called Kudos. As a GTM and revenue leader, he has led sales teams at multiple startups scaling to $20M+ ARR. You can find him hiking, water skiing, or practicing taekwondo.
                </p>
                <a href="https://www.linkedin.com/in/taigagamell-gildre/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70 justify-center sm:justify-start" style={{ color: "#C9A96E" }}>
                  LinkedIn →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="px-6 py-20" style={{ backgroundColor: "#080e1a" }}>
        <div className="mx-auto max-w-3xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-center" style={{ color: "#C9A96E" }}>Seattle FAQ</p>
          <h2 className="mt-3 text-center text-[1.75rem] font-bold text-white sm:text-[2rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
            Questions about Gildre Seattle.
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
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>Seattle, WA</p>
          <h2 className="mt-4 text-[2rem] font-bold leading-tight text-white sm:text-[2.75rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
            Your next breakthrough starts with the right room.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            Apply today and get actively matched with Seattle founders building at your level, with 1:1 introductions starting in your first week.
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
