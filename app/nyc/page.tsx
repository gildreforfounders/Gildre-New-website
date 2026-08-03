import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/nyc" },
  title: "Founder Community New York City | Gildre",
  description:
    "Gildre connects NYC founders with active 1:1 matchmaking, expert operator mentorship, and private monthly dinners in Flatiron and Tribeca. Built for fintech, consumer brands, media tech, and PropTech builders.",
  keywords: [
    "NYC founder community",
    "New York startup network",
    "NYC entrepreneurs",
    "Gildre NYC",
    "fintech founders New York",
    "consumer brand founders NYC",
    "New York City startup dinners",
    "Flatiron startup community",
  ],
  openGraph: {
    title: "Founder Community New York City | Gildre",
    description:
      "Active 1:1 matchmaking, expert operator mentorship, and private founder dinners for NYC's fintech, consumer brand, media tech, and PropTech builders.",
    url: "https://www.gildre.com/nyc",
    siteName: "Gildre",
    type: "website",
    images: [{ url: "https://www.gildre.com/og-home.png", width: 1200, height: 630, alt: "Gildre founder community in New York City" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Founder Community New York City | Gildre",
    description:
      "Active 1:1 matchmaking, expert operator mentorship, and private founder dinners for NYC's fintech, consumer brand, media tech, and PropTech builders.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      name: "Gildre — New York City",
      url: "https://www.gildre.com/nyc",
      logo: "https://www.gildre.com/images/gildre-logo.png",
      image: "https://www.gildre.com/og-home.png",
      description:
        "Gildre is a private founder membership community in New York City, NY. Gildre NYC hosts monthly founder dinners in Flatiron and Tribeca for tech CEOs and early-stage startup founders, alongside weekly curated peer matches, expert mentorship, and warm investor introductions.",
      email: "info@gildre.com",
      telephone: "+1-847-881-6319",
      priceRange: "$$",
      address: { "@type": "PostalAddress", addressLocality: "New York City", addressRegion: "NY", postalCode: "10001", addressCountry: "US" },
      geo: { "@type": "GeoCoordinates", latitude: 40.7128, longitude: -74.006 },
      areaServed: [{ "@type": "City", name: "New York City" }, { "@type": "Country", name: "United States" }],
      knowsAbout: ["Founder Peer Groups", "Startup Mentorship", "Fintech", "Consumer Brands", "Media Tech", "PropTech"],
      sameAs: ["https://www.gildre.com", "https://www.instagram.com/gildreforfounders", "https://www.linkedin.com/company/gildre/"],
      parentOrganization: { "@type": "Organization", name: "Gildre", url: "https://www.gildre.com" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How are 1:1 founder introductions curated in New York City?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every week, Gildre's team reviews your profile, stage, and goals to match you with a New York founder or operator with directly relevant experience. These are warm, intentional introductions — not algorithm-generated requests in a crowded platform.",
          },
        },
        {
          "@type": "Question",
          name: "Where are NYC founder dinners and events held?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gildre NYC hosts monthly founder dinners in Flatiron and Tribeca — two of New York's most concentrated founder neighborhoods. Peer roundtables and investor sessions rotate across SoHo and Midtown South venues.",
          },
        },
        {
          "@type": "Question",
          name: "What types of founders join Gildre NYC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gildre NYC is built for seed-to-Series A founders primarily in fintech, consumer brands and DTC, media and AdTech, and PropTech. NYC's diversity means Gildre members here often get valuable cross-industry perspective alongside deep-vertical peer matching.",
          },
        },
        {
          "@type": "Question",
          name: "How is Gildre different from NYC's existing startup communities?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "NYC has no shortage of founder events and communities. Gildre is the curated, private layer — selected members, intentional 1:1 introductions, and small-group dinners where every person in the room was chosen deliberately. No open applications. No panel speaker pitches.",
          },
        },
        {
          "@type": "Question",
          name: "Can I attend a NYC event before becoming a member?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Occasionally Gildre opens select NYC events to prospective members by invitation. Apply and mention your interest in a New York preview dinner — we regularly prioritize local applicants so you can experience the community before committing.",
          },
        },
      ],
    },
  ],
};

const verticals = [
  {
    label: "Fintech & Insurtech",
    description:
      "Wall Street&rsquo;s legacy and a generation of challenger fintech companies have made New York the capital of financial technology. Founders in payments, trading infrastructure, lending, wealth management, and insurtech find peer density and investor appetite unlike anywhere else.",
    tags: ["Payments", "Wealth Tech", "Insurtech", "Banking Infrastructure"],
  },
  {
    label: "Consumer Brands & DTC",
    description:
      "New York is where consumer brands are born and scaled. Founders building DTC, CPG, beauty, wellness, and digitally-native brands find a community of operators who understand brand equity, customer acquisition, and the specific dynamics of New York&rsquo;s retail and media ecosystem.",
    tags: ["DTC & CPG", "Beauty & Wellness", "Retail Tech", "Brand Strategy"],
  },
  {
    label: "Media & AdTech",
    description:
      "From TV networks to streaming platforms to digital advertising infrastructure, New York owns media at scale. Founders building in content technology, programmatic advertising, creator tools, and audience monetization find operators and investors here who have built these categories from the ground up.",
    tags: ["Streaming Tech", "Programmatic Ads", "Creator Tools", "Content Platforms"],
  },
  {
    label: "PropTech & Real Estate Tech",
    description:
      "The world&rsquo;s most valuable real estate market creates the world&rsquo;s most ambitious PropTech founders. Whether building in residential, commercial, construction technology, or real estate data infrastructure — New York&rsquo;s operator density and buyer access are unmatched.",
    tags: ["Residential Tech", "Commercial PropTech", "Construction Tech", "Real Estate Data"],
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
    quote: "The structure at Gildre is impressive — it's truly a space where founders challenge each other and mentorship isn't abstract.",
    name: "Christof Mannfeld",
    title: "Founder",
    company: "Solvee",
    photo: "/reviews/christof-mannfeld.webp",
  },
  {
    quote: "I wanted to surround myself with others going through similar growth and challenges. Gildre gives me exactly that — a community where I can both give and gain exceptional value.",
    name: "Elise Madrick",
    title: "Founder",
    company: "Cerené",
    photo: "/reviews/elise-madrick.webp",
  },
];

const faqItems = [
  {
    q: "How are 1:1 founder introductions curated in New York City?",
    a: "Every week, Gildre's team reviews your profile, stage, and goals to match you with a New York founder or operator with directly relevant experience. These are warm, intentional introductions — not algorithm-generated requests in a crowded platform.",
  },
  {
    q: "Where are NYC founder dinners and events held?",
    a: "Gildre NYC hosts monthly founder dinners in Flatiron and Tribeca — two of New York's most concentrated founder neighborhoods. Peer roundtables and investor sessions rotate across SoHo and Midtown South venues.",
  },
  {
    q: "What types of founders join Gildre NYC?",
    a: "Gildre NYC is built for seed-to-Series A founders primarily in fintech, consumer brands, media and AdTech, and PropTech. NYC's diversity means members often get valuable cross-industry perspective alongside deep-vertical peer matching.",
  },
  {
    q: "How is Gildre different from NYC's existing startup communities?",
    a: "NYC has no shortage of founder events. Gildre is the curated, private layer — selected members, intentional 1:1 introductions, and small-group dinners where every person in the room was chosen deliberately. No open applications. No panel speaker pitches.",
  },
  {
    q: "Can I attend a NYC event before becoming a member?",
    a: "Occasionally Gildre opens select NYC events to prospective members by invitation. Apply and mention your interest in a New York preview dinner — we regularly prioritize local applicants so you can experience the community before committing.",
  },
];

const peers = [
  { name: "Chris Tsakalakis", title: "CEO", company: "StubHub", photo: "/images/chris-tsakalakis-headshot.jpeg" },
  { name: "Aytekin Tank", title: "Founder & CEO", company: "Jotform", photo: "/images/aytekin-tank-headshot.webp" },
  { name: "Sharon Gai", title: "Keynote Speaker", company: "Alibaba / AI", photo: "/images/sharon-gai-headshot.jpg" },
  { name: "Frances Pratt", title: "Author & Advisor", company: "More Sales Less Marketing", photo: "/images/frances-pratt-headshot.jpeg" },
];

export default function NycPage() {
  return (
    <div style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 pb-28 pt-36" style={{ background: "linear-gradient(155deg, #080e1a 0%, #1C2744 50%, #0a1020 100%)" }}>
        <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10" style={{ background: "radial-gradient(ellipse, #C9A96E 0%, transparent 65%)" }} />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>Gildre · New York City, NY</p>
          <h1 className="mt-4 text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.08] text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
            The Curated Growth Network for{" "}
            <span style={{ color: "#C9A96E" }}>New York&rsquo;s</span> Fintech,
            Consumer &amp; Media Builders.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Replace surface-level networking with active 1:1 matchmaking, expert operator
            mentorship, and high-impact peer roundtables — built for New York&rsquo;s most focused
            founders, from Flatiron to Tribeca.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="https://gildre.circle.so/checkout/gildre-silver-membership" target="_blank" rel="noopener noreferrer" className="rounded-full px-9 py-3.5 text-sm font-bold transition-opacity hover:opacity-90" style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}>
              Apply for Membership →
            </a>
            <Link href="/membership" className="rounded-full px-8 py-3.5 text-sm font-semibold transition-opacity hover:opacity-80" style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)" }}>
              Explore NYC Gatherings
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
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-center" style={{ color: "#C9A96E" }}>Built for NYC&rsquo;s Core Verticals</p>
          <h2 className="mt-3 text-center text-[1.75rem] font-bold leading-tight text-white sm:text-[2.25rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
            Deep expertise in the industries<br />New York runs the world in.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            Gildre matches you with peers and operators who have already navigated the exact terrain you&rsquo;re crossing — in your vertical, at your stage.
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
              <Image src="/images/community/dinner.webp" alt="Gildre NYC founder dinner — monthly gatherings in Flatiron and Tribeca" fill sizes="(max-width: 1024px) calc(100vw - 48px), 480px" className="object-cover" style={{ objectPosition: "center center" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,14,26,0.6) 0%, transparent 50%)" }} />
              <div className="absolute bottom-5 left-5">
                <p className="text-xs font-bold uppercase tracking-widest text-white">Monthly Founder Dinner</p>
                <p className="mt-0.5 text-[0.65rem]" style={{ color: "rgba(255,255,255,0.5)" }}>Flatiron District · New York City</p>
              </div>
            </div>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>In-Person Events · New York City, NY</p>
              <h2 className="mt-3 text-[1.75rem] font-bold leading-tight text-white sm:text-[2.1rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
                Real rooms. Real conversations. Active facilitation.
              </h2>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                Gildre NYC hosts curated in-person programming every month — small, intentional gatherings where every attendee is selected and every conversation has a point.
              </p>
              <ul className="mt-7 flex flex-col gap-5">
                {[
                  { title: "Monthly Founder Dinners", detail: "Private seated dinners in Flatiron and Tribeca. 12–20 founders per table. No pitches, no panels — high-density peer conversation for New York's most ambitious builders." },
                  { title: "Peer Operator Roundtables", detail: "Quarterly deep-dives on scaling challenges — DTC unit economics, fintech regulation, consumer acquisition in a competitive market — facilitated by operators who have crossed the same threshold." },
                  { title: "Investor Office Hours", detail: "Direct access sessions with active NYC-area VCs and angels deploying into fintech, consumer, media, and PropTech — the verticals New York owns." },
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
              Built for Seed-to-Series A founders, high-growth operators, and ambitious builders in New York City.
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Gildre NYC is selective by design. We review every application to ensure the community stays high-signal. You are a good fit if you are actively building a tech-enabled company, have initial traction or prior founder experience, and are serious about peer-to-peer growth.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {["Seed to Series A stage", "Tech-enabled business", "Active builder — not ideating"].map((crit) => (
                <div key={crit} className="flex items-center gap-2 rounded-xl px-4 py-3" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <span style={{ color: "#C9A96E" }}>✓</span>
                  <span className="text-sm font-medium text-white">{crit}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a href="https://gildre.circle.so/checkout/gildre-silver-membership" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full px-9 py-3.5 text-sm font-bold transition-opacity hover:opacity-90" style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}>
                Apply for Membership →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="px-6 py-20" style={{ backgroundColor: "#080e1a" }}>
        <div className="mx-auto max-w-3xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-center" style={{ color: "#C9A96E" }}>NYC FAQ</p>
          <h2 className="mt-3 text-center text-[1.75rem] font-bold text-white sm:text-[2rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
            Questions about Gildre New York.
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
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>New York City, NY</p>
          <h2 className="mt-4 text-[2rem] font-bold leading-tight text-white sm:text-[2.75rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
            Your next breakthrough starts with the right room.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            Apply today and get actively matched with New York founders building at your level — with 1:1 introductions starting in your first week.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="https://gildre.circle.so/checkout/gildre-silver-membership" target="_blank" rel="noopener noreferrer" className="rounded-full px-10 py-4 text-sm font-bold transition-opacity hover:opacity-90" style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}>
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
