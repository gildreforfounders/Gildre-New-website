import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/la" },
  title: "Founder Community Los Angeles | Gildre",
  description:
    "Gildre connects LA founders with active 1:1 matchmaking, expert operator mentorship, and private monthly dinners in Venice and West Hollywood. Built for consumer brands, creator economy, HealthTech, and PropTech builders.",
  keywords: [
    "Los Angeles founder community",
    "LA startup network",
    "LA entrepreneurs",
    "Gildre LA",
    "creator economy founders Los Angeles",
    "consumer brand founders LA",
    "LA startup dinners",
    "Venice Beach startup community",
    "LA tech founders",
  ],
  openGraph: {
    title: "Founder Community Los Angeles | Gildre",
    description:
      "Active 1:1 matchmaking, expert operator mentorship, and private founder dinners for LA's consumer brand, creator economy, HealthTech, and PropTech builders.",
    url: "https://www.gildre.com/la",
    siteName: "Gildre",
    type: "website",
    images: [{ url: "https://www.gildre.com/og-home.png", width: 1200, height: 630, alt: "Gildre founder community in Los Angeles" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Founder Community Los Angeles | Gildre",
    description:
      "Active 1:1 matchmaking, expert operator mentorship, and private founder dinners for LA's consumer brand, creator economy, HealthTech, and PropTech builders.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      name: "Gildre — Los Angeles",
      url: "https://www.gildre.com/la",
      logo: "https://www.gildre.com/images/gildre-logo.png",
      image: "https://www.gildre.com/og-home.png",
      description:
        "Gildre is a private founder membership community in Los Angeles, CA. Gildre LA hosts monthly founder dinners in Venice and West Hollywood for tech CEOs and early-stage startup founders, alongside weekly curated peer matches, expert mentorship, and warm investor introductions.",
      email: "info@gildre.com",
      telephone: "+1-847-881-6319",
      priceRange: "$$",
      address: { "@type": "PostalAddress", addressLocality: "Los Angeles", addressRegion: "CA", postalCode: "90001", addressCountry: "US" },
      geo: { "@type": "GeoCoordinates", latitude: 34.0522, longitude: -118.2437 },
      areaServed: [{ "@type": "City", name: "Los Angeles" }, { "@type": "Country", name: "United States" }],
      knowsAbout: ["Founder Peer Groups", "Startup Mentorship", "Consumer Brands", "Creator Economy", "HealthTech", "PropTech"],
      sameAs: ["https://www.gildre.com", "https://www.instagram.com/gildreforfounders", "https://www.linkedin.com/company/gildre/"],
      parentOrganization: { "@type": "Organization", name: "Gildre", url: "https://www.gildre.com" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How are 1:1 founder introductions curated in Los Angeles?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every week, Gildre's team reviews your profile, stage, and goals to match you with an LA founder or operator with directly relevant experience. In a city built on brand and culture, these are warm, intentional introductions focused on operators who have turned awareness into durable businesses.",
          },
        },
        {
          "@type": "Question",
          name: "Where are LA founder dinners and events held?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gildre LA hosts monthly founder dinners in Venice and West Hollywood, two of LA's most active founder neighborhoods. Peer roundtables and investor sessions rotate across Culver City and Santa Monica venues depending on the cohort.",
          },
        },
        {
          "@type": "Question",
          name: "What types of founders join Gildre LA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gildre LA is built for seed-to-Series A founders primarily in consumer brands and DTC, creator economy and media tech, HealthTech and FemTech, and PropTech. Many members are building brand-forward businesses where distribution, culture, and product have to work together.",
          },
        },
        {
          "@type": "Question",
          name: "How is Gildre different from LA's existing startup and brand communities?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "LA has a rich creative community but fewer high-density founder peer networks than SF or NYC. Gildre brings the curated, operator-level peer layer that LA founders have had to travel to other cities to find, right here in your own backyard.",
          },
        },
        {
          "@type": "Question",
          name: "Can I attend an LA event before becoming a member?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Occasionally Gildre opens select LA events to prospective members by invitation. Apply and mention your interest in a Los Angeles preview dinner. We regularly prioritize local applicants so you can experience the community before committing.",
          },
        },
      ],
    },
  ],
};

const verticals = [
  {
    label: "Consumer Brands & DTC",
    description:
      "The Honest Company, Dollar Shave Club, and a generation of digitally-native brands were built in LA. Founders in DTC, CPG, beauty, wellness, and lifestyle brands find the densest concentration of brand operators, performance marketers, and consumer-focused investors in the country right here.",
    tags: ["DTC & CPG", "Beauty & Wellness", "Lifestyle Brands", "Performance Marketing"],
  },
  {
    label: "Creator Economy & Media Tech",
    description:
      "YouTube, Spotify, and the streaming wars have made LA the global capital of the creator economy. Founders building creator monetization platforms, live events technology, music tech, and content infrastructure find both the buyer base and the investor appetite to match their ambition.",
    tags: ["Creator Monetization", "Streaming Tech", "Music Tech", "Content Platforms"],
  },
  {
    label: "HealthTech & FemTech",
    description:
      "LA&rsquo;s wellness culture and the post-pandemic surge in consumer health have made it one of the strongest HealthTech markets in the US. Founders building in digital health, FemTech, mental wellness, and tech-enabled fitness find real test beds and consumer-forward investors ready to deploy.",
    tags: ["Digital Health", "FemTech", "Mental Wellness", "Tech-Enabled Fitness"],
  },
  {
    label: "PropTech & Real Estate Tech",
    description:
      "In the most expensive housing market outside of NYC, LA has produced some of the most ambitious PropTech founders in the country. Founders building in residential technology, construction software, short-term rentals, and real estate data have access to real buyer networks and operators here.",
    tags: ["Residential Tech", "Short-Term Rentals", "Construction Tech", "Real Estate Data"],
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
    quote: "This is the first membership where I truly feel like I'm getting what I paid for. The value and time the Gildre team spends with us on our business is remarkable.",
    name: "Iliana Alvarado",
    title: "President",
    company: "Ensyx Systems",
    photo: "/reviews/iliana-alvarado.webp",
  },
];

const faqItems = [
  {
    q: "How are 1:1 founder introductions curated in Los Angeles?",
    a: "Every week, Gildre's team reviews your profile, stage, and goals to match you with an LA founder or operator with directly relevant experience. In a city built on brand and culture, these are warm, intentional introductions focused on operators who have turned awareness into durable businesses.",
  },
  {
    q: "Where are LA founder dinners and events held?",
    a: "Gildre LA hosts monthly founder dinners in Venice and West Hollywood, two of LA's most active founder neighborhoods. Peer roundtables and investor sessions rotate across Culver City and Santa Monica venues.",
  },
  {
    q: "What types of founders join Gildre LA?",
    a: "Gildre LA is built for seed-to-Series A founders primarily in consumer brands, creator economy, HealthTech, and PropTech. Many members are building brand-forward businesses where distribution, culture, and product have to work together.",
  },
  {
    q: "How is Gildre different from LA's existing startup and brand communities?",
    a: "LA has a rich creative community but fewer high-density founder peer networks than SF or NYC. Gildre brings the curated, operator-level peer layer that LA founders have had to travel to other cities to find, right here in your own backyard.",
  },
  {
    q: "Can I attend an LA event before becoming a member?",
    a: "Occasionally Gildre opens select LA events to prospective members by invitation. Apply and mention your interest in a Los Angeles preview dinner. We regularly prioritize local applicants so you can experience the community before committing.",
  },
];

const peers = [
  { name: "Elise Madrick", title: "Founder", company: "Cerené", photo: "/images/elise-madrick-headshot.webp" },
  { name: "Robyn Hobson", title: "VP Marketing", company: "Remote Vans", photo: "/images/robyn-hobson-headshot.jpg" },
  { name: "Russell Breuer", title: "Founder", company: "Spot & Tango", photo: "/images/russell-breuer-headshot.png" },
  { name: "Sharon Gai", title: "Keynote Speaker", company: "Alibaba / AI", photo: "/images/sharon-gai-headshot.jpg" },
];

export default function LaPage() {
  return (
    <div style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 pb-28 pt-36" style={{ background: "linear-gradient(155deg, #080e1a 0%, #1C2744 50%, #0a1020 100%)" }}>
        <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10" style={{ background: "radial-gradient(ellipse, #C9A96E 0%, transparent 65%)" }} />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>Gildre · Los Angeles, CA</p>
          <h1 className="mt-4 text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.08] text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
            The Curated Growth Network for{" "}
            <span style={{ color: "#C9A96E" }}>LA&rsquo;s</span> Consumer,
            Creator &amp; High-Growth Builders.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Replace surface-level networking with active 1:1 matchmaking, expert operator
            mentorship, and high-impact peer roundtables, built for LA&rsquo;s most focused
            founders, from Venice to West Hollywood.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="https://tally.so/r/VLERVa" target="_blank" rel="noopener noreferrer" className="rounded-full px-9 py-3.5 text-sm font-bold transition-opacity hover:opacity-90" style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}>
              Apply for Membership →
            </a>
            <Link href="/membership" className="rounded-full px-8 py-3.5 text-sm font-semibold transition-opacity hover:opacity-80" style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)" }}>
              Explore LA Gatherings
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
          {[{ value: "250+", label: "Active Members" }, { value: "$2.4B+", label: "Member Valuations" }, { value: "Weekly", label: "Curated Intros" }, { value: "15+", label: "Cities Represented" }].map((s) => (
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
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-center" style={{ color: "#C9A96E" }}>Built for LA&rsquo;s Core Verticals</p>
          <h2 className="mt-3 text-center text-[1.75rem] font-bold leading-tight text-white sm:text-[2.25rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
            Deep expertise in the industries<br />LA sets the cultural agenda for.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            Gildre matches you with peers and operators who have already navigated the exact terrain you&rsquo;re crossing, in your vertical, at your stage.
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
              <Image src="/images/community/dinner.webp" alt="Gildre LA founder dinner, monthly gatherings in Venice and West Hollywood" fill sizes="(max-width: 1024px) calc(100vw - 48px), 480px" className="object-cover" style={{ objectPosition: "center center" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,14,26,0.6) 0%, transparent 50%)" }} />
              <div className="absolute bottom-5 left-5">
                <p className="text-xs font-bold uppercase tracking-widest text-white">Monthly Founder Dinner</p>
                <p className="mt-0.5 text-[0.65rem]" style={{ color: "rgba(255,255,255,0.5)" }}>Venice · Los Angeles</p>
              </div>
            </div>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>In-Person Events · Los Angeles, CA</p>
              <h2 className="mt-3 text-[1.75rem] font-bold leading-tight text-white sm:text-[2.1rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
                Real rooms. Real conversations. Active facilitation.
              </h2>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                Gildre LA hosts curated in-person programming every month: small, intentional gatherings where every attendee is selected and every conversation has a point.
              </p>
              <ul className="mt-7 flex flex-col gap-5">
                {[
                  { title: "Monthly Founder Dinners", detail: "Private seated dinners in Venice and West Hollywood. 12–20 founders per table. No pitches, no panels. High-density peer conversation for LA's most serious builders." },
                  { title: "Peer Operator Roundtables", detail: "Quarterly deep-dives on LA-specific scaling challenges: DTC unit economics, creator monetization, HealthTech regulation, and brand-to-product transitions, facilitated by operators who have crossed the same threshold." },
                  { title: "Investor Office Hours", detail: "Direct access sessions with active LA-area VCs and angels deploying into consumer, creator economy, HealthTech, and PropTech, the categories LA is defining for the next decade." },
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
              Built for Pre-Seed to Series A founders, executive operators, and high-growth builders in Los Angeles.
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Gildre LA is selective by design. We review every application to ensure the community stays high-signal. You are a good fit if you are actively building a tech-enabled or brand-driven company, have initial traction or prior founder experience, and are serious about peer-to-peer growth, not just attending events.
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
            Meet the team behind Gildre Los Angeles.
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
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-center" style={{ color: "#C9A96E" }}>Los Angeles FAQ</p>
          <h2 className="mt-3 text-center text-[1.75rem] font-bold text-white sm:text-[2rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
            Questions about Gildre Los Angeles.
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
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>Los Angeles, CA</p>
          <h2 className="mt-4 text-[2rem] font-bold leading-tight text-white sm:text-[2.75rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
            Your next breakthrough starts with the right room.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            Apply today and get actively matched with LA founders building at your level, with 1:1 introductions starting in your first week.
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
