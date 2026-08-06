import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/seattle" },
  title: "Founder Community Seattle WA | Gildre",
  description:
    "Gildre connects Seattle founders across every industry with curated 1:1 peer introductions, expert operator mentorship, and private monthly dinners. A growing chapter for serious founders at the Seed to Growth stage.",
  keywords: [
    "Seattle founder community",
    "Seattle startup network",
    "Washington entrepreneur community",
    "Gildre Seattle",
    "enterprise SaaS founders Seattle",
    "startup dinners Seattle WA",
    "founder peer groups Seattle",
    "Amazon alumni founder community",
  ],
  openGraph: {
    title: "Founder Community Seattle WA | Gildre",
    description:
      "Gildre connects Seattle founders across every industry with curated 1:1 peer introductions, expert operator mentorship, and private monthly dinners. A growing chapter for serious founders at the Seed to Growth stage.",
    url: "https://www.gildre.com/seattle",
    siteName: "Gildre",
    type: "website",
    images: [{ url: "https://www.gildre.com/og-home.png", width: 1200, height: 630, alt: "Gildre founder community in Seattle, Washington" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Founder Community Seattle WA | Gildre",
    description:
      "Gildre connects Seattle founders across every industry with curated 1:1 peer introductions, expert operator mentorship, and private monthly dinners. A growing chapter for serious founders at the Seed to Growth stage.",
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
        "Gildre is a private founder membership community in Seattle, WA. Gildre Seattle is a growing chapter hosting founder dinners and curated events throughout the city for tech founders and operators, alongside weekly curated peer matches, expert mentorship, and warm investor introductions.",
      email: "info@gildre.com",
      telephone: "+1-847-881-6319",
      priceRange: "$$",
      address: { "@type": "PostalAddress", addressLocality: "Seattle", addressRegion: "WA", postalCode: "98101", addressCountry: "US" },
      geo: { "@type": "GeoCoordinates", latitude: 47.6062, longitude: -122.3321 },
      areaServed: [{ "@type": "City", name: "Seattle" }, { "@type": "State", name: "Washington" }],
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
            text: "Every week, Gildre's team reviews your profile, stage, and goals to match you with a Seattle founder or operator with directly relevant experience. These are warm, intentional introductions, not algorithm-generated connection requests.",
          },
        },
        {
          "@type": "Question",
          name: "Where are Seattle founder dinners and events held?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gildre Seattle hosts founder dinners and curated events throughout the city. Venues rotate so no matter where you're based in the Seattle metro area, you're in range.",
          },
        },
        {
          "@type": "Question",
          name: "What types of founders join Gildre Seattle?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gildre Seattle has members building across enterprise SaaS, AI, consumer, cloud infrastructure, and health tech. Many have made the leap from Amazon, Microsoft, or other large tech companies. The filter isn't your background. It's whether you're serious, giving, and ready to be genuinely useful to a peer.",
          },
        },
        {
          "@type": "Question",
          name: "Is Gildre Seattle a full chapter or a growing chapter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gildre Seattle is a growing chapter, which means the founding cohort is being built right now. Joining early means you help shape the community's culture, have direct access to Gildre leadership, and get in before the chapter is full.",
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
    label: "They left the big company. They don&rsquo;t want to go back.",
    description:
      "Seattle has an extraordinary concentration of tech talent that has made the leap from Amazon, Microsoft, or Google to founding something. Gildre Seattle is built around people who've crossed that threshold — and can offer the specific peer support it requires.",
  },
  {
    label: "They give before they ask.",
    description:
      "The community runs on reciprocity. Every member comes in ready to contribute. That standard is what separates a Gildre dinner from every other founder event in the Pacific Northwest.",
  },
  {
    label: "Every industry. One standard.",
    description:
      "Enterprise SaaS, AI, consumer, cloud infrastructure, health tech. Gildre Seattle has members building across all of it. The filter isn't your stack or your exit history. It's whether you're serious enough to be genuinely useful to someone else.",
  },
  {
    label: "They build with rigor.",
    description:
      "Engineers who became founders. Operators who started companies. Seattle's founder culture runs deep on execution. Gildre reflects that: a community that values honest assessment, precise feedback, and real accountability over hype.",
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
    a: "Every week, Gildre's team reviews your profile, stage, and goals to match you with a Seattle founder or operator with directly relevant experience. These are warm, intentional introductions, not algorithm-generated connection requests.",
  },
  {
    q: "Where are Seattle founder dinners and events held?",
    a: "Gildre Seattle hosts founder dinners and curated events throughout the city. Venues rotate so no matter where you're based in the Seattle metro area, you're in range.",
  },
  {
    q: "What types of founders join Gildre Seattle?",
    a: "Gildre Seattle has members building across enterprise SaaS, AI, consumer, cloud infrastructure, and health tech. Many have made the leap from Amazon, Microsoft, or other large tech companies. The filter isn't your background. It's whether you're serious, giving, and ready to be genuinely useful to a peer.",
  },
  {
    q: "Is Gildre Seattle a full chapter or a growing chapter?",
    a: "Gildre Seattle is a growing chapter, which means the founding cohort is being built right now. Joining early means you help shape the community's culture, have direct access to Gildre leadership, and get in before the chapter is full.",
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
          <div className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5" style={{ backgroundColor: "rgba(201,169,110,0.08)", border: "1px dashed rgba(201,169,110,0.3)" }}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#C9A96E" }} />
            <span className="text-[0.6rem] font-bold uppercase tracking-widest" style={{ color: "rgba(201,169,110,0.8)" }}>Growing Chapter · Get in Early</span>
          </div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>Gildre · Seattle, WA</p>
          <h1 className="mt-4 text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.08] text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
            Seattle&rsquo;s best founders are already{" "}
            <span style={{ color: "#C9A96E" }}>in the room.</span>{" "}The question is whether you are.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Gildre Seattle is a growing chapter — which means the founding cohort is being built right now. Join early, shape the culture, and build the peer relationships that compound over the next decade.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="https://tally.so/r/VLERVa" target="_blank" rel="noopener noreferrer" className="rounded-full px-9 py-3.5 text-sm font-bold transition-opacity hover:opacity-90" style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}>
              Apply for Membership →
            </a>
            <a href="https://calendly.com/briangildre/30min" target="_blank" rel="noopener noreferrer" className="rounded-full px-8 py-3.5 text-sm font-semibold transition-opacity hover:opacity-80" style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)" }}>
              Talk to Us
            </a>
          </div>
          <p className="mt-5 text-[0.65rem]" style={{ color: "rgba(255,255,255,0.28)" }}>
            Applications reviewed weekly · Founding cohort spots are limited
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {["Private Membership", "Hand-Curated Introductions", "Founding Cohort"].map((tag) => (
              <span key={tag} className="rounded-full px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-wider" style={{ backgroundColor: "rgba(201,169,110,0.1)", color: "rgba(201,169,110,0.7)", border: "1px solid rgba(201,169,110,0.2)" }}>
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
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-center" style={{ color: "#C9A96E" }}>Why founders join and stay</p>
          <h2 className="mt-3 text-center text-[1.75rem] font-bold leading-tight text-white sm:text-[2.25rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
            Seattle has the talent.<br />Gildre is where it gathers.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            The dinner is the visible part. What actually changes is who calls you on a Tuesday when something goes sideways.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {memberTraits.map((v) => (
              <div key={v.label} className="rounded-2xl p-7" style={{ backgroundColor: "rgba(201,169,110,0.04)", border: "1px solid rgba(201,169,110,0.12)" }}>
                <h3 className="text-base font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }} dangerouslySetInnerHTML={{ __html: v.label }} />
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
            Gildre members are hand-selected founders, operators, and builders who are active, giving, and at your level. Not LinkedIn connections. Actual peers.
          </p>

          {/* Featured member spotlight */}
          <div className="mt-12 rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(201,169,110,0.2)", backgroundColor: "rgba(255,255,255,0.02)" }}>
            <div className="flex flex-col sm:flex-row">
              <div className="relative h-56 sm:h-auto sm:w-48 flex-shrink-0">
                <Image src="/images/alex-bean-headshot.webp" alt="Alex Bean, Co-Founder of Divvy acquired by Bill.com, Seattle Gildre member" fill sizes="(max-width: 640px) 100vw, 192px" className="object-cover object-top" />
              </div>
              <div className="flex flex-col justify-center p-8">
                <span className="mb-3 inline-block rounded-full px-3 py-1 text-[0.6rem] font-bold uppercase tracking-widest" style={{ backgroundColor: "rgba(201,169,110,0.12)", color: "#C9A96E" }}>
                  Seattle Member Spotlight
                </span>
                <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>Alex Bean</h3>
                <p className="mt-1 text-sm font-medium" style={{ color: "rgba(255,255,255,0.45)" }}>Co-Founder · Divvy (acquired by Bill.com)</p>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Alex co-founded Divvy, the spend management and business credit platform acquired by Bill.com in a deal valued at approximately $2.5 billion. He brings a rare combination of founder grit, product depth, and hard-won exit experience that most communities talk about in the abstract. In Gildre Seattle, that knowledge is accessible to you directly — in the same room, at the same table.
                </p>
                <Link href="/blog/alex-bean-divvy-bill-com-seattle" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70" style={{ color: "#C9A96E" }}>
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
                <p className="mt-0.5 text-[0.65rem]" style={{ color: "rgba(255,255,255,0.4)" }}>{p.title} · {p.company}</p>
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
              <Image src="/images/community/dinner.webp" alt="Gildre Seattle founder dinner, monthly curated gatherings in Seattle WA" fill sizes="(max-width: 1024px) calc(100vw - 48px), 480px" className="object-cover" style={{ objectPosition: "center center" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,14,26,0.6) 0%, transparent 50%)" }} />
              <div className="absolute bottom-5 left-5">
                <p className="text-xs font-bold uppercase tracking-widest text-white">Founder Dinner</p>
                <p className="mt-0.5 text-[0.65rem]" style={{ color: "rgba(255,255,255,0.5)" }}>Seattle, WA</p>
              </div>
            </div>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>In-Person Events · Seattle, WA</p>
              <h2 className="mt-3 text-[1.75rem] font-bold leading-tight text-white sm:text-[2.1rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
                More than dinners. A full calendar built around founders.
              </h2>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                Gildre Seattle events run the full range — from intimate curated dinners to tech-powered Match House networking, escape rooms, co-hosted startup events, BBQs, and investor office hours. Every format is designed for one thing: getting the right people in the right room.
              </p>
              <ul className="mt-7 flex flex-col gap-5">
                {[
                  { title: "Founder Dinners", detail: "Seated. Small. Every attendee selected. Twelve founders around a good table — no panels, no pitching. The conversations here don't happen at the average Seattle tech event because this room was built for them." },
                  { title: "Match House Networking Events", detail: "Gildre's signature format uses technology to match you with the right people before you walk in — and sends automated follow-ups after so connections don't die in someone's pocket. You leave with threads already started." },
                  { title: "Team Building Experiences", detail: "Escape rooms, off-sites, and challenges designed to build trust faster than a conference ever could. The best peer relationships start when you're solving something together." },
                  { title: "Co-Hosted Events with Other Startups", detail: "Gildre partners with top startups and ecosystem organizations across Seattle to co-host events. Curated cross-pollination — access to complementary communities, not just ours." },
                  { title: "BBQs & Social Gatherings", detail: "Some of the best founder relationships start over good food. Gildre hosts seasonal social events where the agenda is just being around the right people." },
                  { title: "Investor Office Hours", detail: "Direct sessions with active Pacific Northwest investors. No pitch decks required. These are conversations, not auditions — designed to build real relationships before you ever need to fundraise." },
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
              Membership isn&rsquo;t automatic. That&rsquo;s what makes it worth having.
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              We review every application. Not to be difficult — because who&rsquo;s in the room determines what the room is worth. Seattle&rsquo;s founding cohort is being built carefully, so the right people are in the room from day one.
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

      {/* ── Chapter Lead ─────────────────────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: "#0f1524", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="mx-auto max-w-3xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-center" style={{ color: "#C9A96E" }}>Chapter Lead</p>
          <h2 className="mt-3 text-center text-[1.75rem] font-bold text-white sm:text-[2.1rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
            Meet the team behind Gildre Seattle.
          </h2>
          <div className="mt-12 flex justify-center">
            <div className="rounded-2xl p-8 flex flex-col sm:flex-row gap-6 w-full max-w-2xl" style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="relative mx-auto sm:mx-0 h-20 w-20 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-[#C9A96E]/30">
                <Image src="/team/taiga-gamell.webp" alt="Taiga Gamell, Seattle Chapter Lead at Gildre" fill sizes="80px" className="object-cover object-top" />
              </div>
              <div className="flex flex-col justify-center text-center sm:text-left">
                <p className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>Taiga Gamell</p>
                <p className="mt-0.5 text-xs font-medium" style={{ color: "#C9A96E" }}>Co-Founder, Gildre · Seattle Chapter Lead</p>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Taiga is the co-founder of Gildre and a Pacific Northwest native who has been building founder communities for years. Born in Japan, raised in Montana, and educated at the University of Redlands, she started her first business at 15 and has since built a reputation for creating the kinds of high-trust, high-signal communities that most networks only aspire to. She leads the Seattle chapter with the conviction that the right peer group is one of the most consequential investments a founder can make.
                </p>
                <a href="https://www.linkedin.com/in/taiga-gamell/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70 justify-center sm:justify-start" style={{ color: "#C9A96E" }}>
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
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>Seattle, WA · Growing Chapter</p>
          <h2 className="mt-4 text-[2rem] font-bold leading-tight text-white sm:text-[2.75rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
            The founding cohort is being built now.<br />Get in while spots remain.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            Founding members help shape the culture of Gildre Seattle from day one — and build the peer relationships that compound for years. Applications take less than five minutes.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="https://tally.so/r/VLERVa" target="_blank" rel="noopener noreferrer" className="rounded-full px-10 py-4 text-sm font-bold transition-opacity hover:opacity-90" style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}>
              Apply for Membership →
            </a>
            <a href="https://calendly.com/briangildre/30min" target="_blank" rel="noopener noreferrer" className="rounded-full px-8 py-4 text-sm font-semibold transition-opacity hover:opacity-80" style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.2)" }}>
              Talk to Us
            </a>
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
