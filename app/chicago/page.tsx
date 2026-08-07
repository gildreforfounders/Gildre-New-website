import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/chicago" },
  title: "Founder Community Chicago | Gildre",
  description:
    "Gildre connects Chicago's top founders with active 1:1 matchmaking, expert operator mentorship, and private monthly dinners in West Loop and Fulton Market. Built for fintech, enterprise SaaS, logistics, and deep-tech builders.",
  keywords: [
    "Chicago founder community",
    "Chicago startup network",
    "Chicago entrepreneurs",
    "Gildre Chicago",
    "fintech founders Chicago",
    "enterprise SaaS Chicago",
    "Chicago startup dinners",
    "founder peer groups Chicago",
    "Chicago tech founders",
    "West Loop startup community",
  ],
  openGraph: {
    title: "Founder Community Chicago | Gildre",
    description:
      "Active 1:1 matchmaking, expert operator mentorship, and private founder dinners for Chicago's fintech, enterprise SaaS, and deep-tech builders.",
    url: "https://www.gildre.com/chicago",
    siteName: "Gildre",
    type: "website",
    images: [{ url: "https://www.gildre.com/og-home.png", width: 1200, height: 630, alt: "Gildre founder community in Chicago" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Founder Community Chicago | Gildre",
    description:
      "Active 1:1 matchmaking, expert operator mentorship, and private founder dinners for Chicago's fintech, enterprise SaaS, and deep-tech builders.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      name: "Gildre — Chicago",
      url: "https://www.gildre.com/chicago",
      logo: "https://www.gildre.com/images/gildre-logo.png",
      image: "https://www.gildre.com/og-home.png",
      description:
        "Gildre is a private founder membership community in Chicago, IL. Gildre Chicago hosts monthly founder dinners and curated events throughout the city for tech CEOs and early-stage startup founders, alongside weekly curated peer matches, expert mentorship, and warm investor introductions.",
      email: "info@gildre.com",
      telephone: "+1-847-881-6319",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chicago",
        addressRegion: "IL",
        postalCode: "60601",
        addressCountry: "US",
      },
      geo: { "@type": "GeoCoordinates", latitude: 41.8781, longitude: -87.6298 },
      areaServed: [{ "@type": "City", name: "Chicago" }, { "@type": "Country", name: "United States" }],
      knowsAbout: ["Founder Peer Groups", "Startup Mentorship", "Angel Investing", "Venture Capital", "Startup Fundraising", "Community Building"],
      sameAs: [
        "https://www.gildre.com",
        "https://www.instagram.com/gildreforfounders",
        "https://www.linkedin.com/company/gildre/",
        "https://www.youtube.com/@GildreforFounders",
        "https://x.com/Gildre_",
      ],
      parentOrganization: { "@type": "Organization", name: "Gildre", url: "https://www.gildre.com" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How are 1:1 founder introductions curated in Chicago?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every week, Gildre's team actively reviews your profile, stage, and goals to match you with a specific Chicago founder or operator who is solving a complementary problem or has relevant experience. These are warm, intentional intros, not algorithm-generated requests you have to cold-follow up on.",
          },
        },
        {
          "@type": "Question",
          name: "Where are Chicago founder dinners and events held?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We host monthly founder dinners and curated events throughout Chicago. Venues rotate across the city so no matter where you're based in the metro area, you're in range.",
          },
        },
        {
          "@type": "Question",
          name: "What types of founders join Gildre's Chicago Chapter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gildre Chicago welcomes founders across all industries, from consumer tech and creator economy to healthcare, logistics, and B2B software. The community is defined less by vertical and more by mindset: you are actively building, serious about peer accountability, and ready to give as much as you get. Members typically range between the Build (<$500K) and Growth ($5M+ ARR) stages.",
          },
        },
        {
          "@type": "Question",
          name: "How is Gildre different from 1871 or other Chicago startup communities?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gildre is a curated private membership, not an open coworking hub or events calendar. You are selected, matched, and actively facilitated. Every introduction, dinner, and roundtable is built around you specifically, not general networking. 1871 is a great physical space; Gildre is the high-signal peer layer on top of it.",
          },
        },
        {
          "@type": "Question",
          name: "Can I attend a Chicago event before becoming a member?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Occasionally Gildre opens select Chicago events to prospective members by invitation. The best path is to apply and mention your interest in Chicago events. We often prioritize local applicants for preview dinners so you can experience the community firsthand before committing.",
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
      "Not planning to build. Building. Gildre members are shipping, closing, and navigating the hard stuff in real time. The conversations match.",
  },
  {
    label: "They give before they ask",
    description:
      "The community runs on reciprocity. Every member comes in ready to contribute. That standard is what separates a Gildre dinner from every other founder event you've sat through.",
  },
  {
    label: "Every industry. One standard.",
    description:
      "SaaS, consumer, healthcare, hardware, creator economy, services. Gildre Chicago has members building across all of it. The filter isn't your sector. It's whether you're serious enough to be useful to someone else.",
  },
  {
    label: "Past the point of no return",
    description:
      "Most members crossed a line where the company stopped being a project and became the thing. That changes how honest they are, how much they share, and how much they help.",
  },
];

const testimonials = [
  {
    quote:
      "Being in Gildre feels like having founder co-workers that actually get it. They've saved me hours of research just by sharing what's worked for them.",
    name: "Caitlin Van Berkel",
    title: "Founder",
    company: "Silver Lining Career Coach",
    photo: "/reviews/caitlin-van-berkel.webp",
  },
  {
    quote:
      "The structure at Gildre is impressive. It's truly a space where founders challenge each other and mentorship isn't abstract.",
    name: "Christof Mannfeld",
    title: "Founder",
    company: "Solvee",
    photo: "/reviews/christof-mannfeld.webp",
  },
  {
    quote:
      "I wanted to surround myself with others going through similar growth and challenges. Gildre gives me exactly that, a community where I can both give and gain exceptional value.",
    name: "Elise Madrick",
    title: "Founder",
    company: "Cerené",
    photo: "/reviews/elise-madrick.webp",
  },
];

const faqItems = [
  {
    q: "How are 1:1 founder introductions curated in Chicago?",
    a: "Every week, Gildre's team actively reviews your profile, stage, and goals to match you with a specific Chicago founder or operator who is solving a complementary problem or has directly relevant experience. These are warm, intentional introductions, not algorithm-generated requests you have to cold-follow up on.",
  },
  {
    q: "Where are Chicago founder dinners and events held?",
    a: "We host monthly founder dinners and curated events throughout Chicago. Venues rotate across the city, so no matter where you're based in the metro area, you're in range.",
  },
  {
    q: "What types of founders join Gildre's Chicago Chapter?",
    a: "Gildre Chicago welcomes founders across all industries, from consumer tech and creator economy to healthcare, logistics, and B2B software. The community is defined less by vertical and more by mindset: you are actively building, serious about peer accountability, and ready to give as much as you get. Members typically range between the Build (<$500K) and Growth ($5M+ ARR) stages.",
  },
  {
    q: "How is Gildre different from 1871 or other Chicago startup communities?",
    a: "Gildre is a curated private membership, not an open coworking hub or events calendar. Every introduction, dinner, and roundtable is built around you specifically. 1871 is a great physical space; Gildre is the high-signal peer layer that operates inside and beyond it.",
  },
  {
    q: "Can I attend a Chicago event before becoming a member?",
    a: "Occasionally Gildre opens select Chicago events to prospective members by invitation. The best path is to apply and mention your interest in a Chicago preview dinner. We regularly prioritize local applicants so you can experience the community firsthand before committing.",
  },
];

const peers = [
  { name: "Jason Jacobsohn", title: "Founder & Connector", company: "Jumpstart Capital", photo: "/mentors/jason-jacobsohn.jpg", initials: "JJ", color: "#3B6CC9" },
  { name: "Brittany Canty", title: "Founder", company: "Inciteful App", photo: "/mentors/brittany-canty.png", initials: "BC", color: "#C97B3B" },
  { name: "Ivan Rahman", title: "CEO & Founder", company: "Avistar.ai", photo: "/mentors/ivan-rahman.png", initials: "IR", color: "#3BC97B" },
  { name: "Lauren Basler", title: "Founder", company: "Conscious Ascent", photo: "/mentors/lauren-basler.jpeg", initials: "LB", color: "#7B3BC9" },
];

const chapterLeads = [
  {
    name: "Brian Lee",
    role: "Co-Founder & Managing Partner, Gildre",
    bio: "Brian is a 2X exited entrepreneur who has spent the past decade working with bootstrapped and venture-backed companies. He launched his first company in 2015 and has since co-founded multiple 7-figure ARR startups. His most recent role was Head of Product at a global accelerator working with hundreds of Series A-Pre Seed founders across high-growth industries. He currently sits on two advisory boards and mentors for organizations like Founders Institute, Techstars and Watson Institute where he serves as their Entrepreneur-in-Residence.",
    linkedin: "https://www.linkedin.com/in/brianconnorlee-gildre/",
    photo: "/team/brian-lee.png",
    color: "#3B6CC9",
  },
  {
    name: "Dan Hernandez",
    role: "Co-Founder, HUPR · Chapter Lead, Gildre Chicago",
    bio: "Dan is a Chicago-based entrepreneur and creative operator building HUPR, a tech platform that helps basketball players discover pickup games, connect with local community, and grow the culture of pickup hoops. He brings a background in experiential marketing and digital solutions, working at the intersection of sport, culture, and technology to build brands that actually connect with people. As Creative Director at Cruz Capital, Dan works with founders and growth-stage companies to sharpen how they show up in the market. He brings that same builder's energy to Gildre Chicago, creating a high-trust peer environment where founders can be honest about the hard parts and get real, tactical support.",
    linkedin: "https://www.linkedin.com/in/dan-hernan/",
    photo: "/reviews/dan-hernandez.jpg",
    color: "#C97B3B",
  },
];

export default function ChicagoPage() {
  return (
    <div style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 pb-28 pt-36"
        style={{ background: "linear-gradient(155deg, #080e1a 0%, #1C2744 50%, #0a1020 100%)" }}
      >
        {/* Glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #C9A96E 0%, transparent 65%)" }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            Gildre · Chicago, IL
          </p>
          <h1
            className="mt-4 text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.08] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            <span style={{ color: "#C9A96E" }}>Chicago</span> builds companies the hard way. Gildre is where those builders find each other.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Gildre is a private founder membership for Chicago&rsquo;s active builders. Monthly dinners. Weekly introductions made by hand. A room with standards.
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
             target="_blank" rel="noopener noreferrer">
              Explore Chicago Gatherings
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {["Private Membership", "Hand-Curated Introductions", "Monthly Founder Dinners"].map((tag) => (
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
      <section
        className="px-6 py-10"
        style={{ backgroundColor: "#080e1a", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="mx-auto max-w-4xl grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { value: "250+", label: "Active Members" },
            { value: "$2.4B+", label: "Member Valuations" },
            { value: "Weekly", label: "Curated Intros" },
            { value: "15+", label: "Cities Represented" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold" style={{ fontFamily: "var(--font-fraunces)", color: "#C9A96E" }}>
                {s.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── What Members Have in Common ──────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: "#0f1524" }}>
        <div className="mx-auto max-w-5xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-center" style={{ color: "#C9A96E" }}>
            Why founders join and stay
          </p>
          <h2
            className="mt-3 text-center text-[1.75rem] font-bold leading-tight text-white sm:text-[2.25rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Most founder communities give you more noise.<br />Gildre gives you fewer, better conversations.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            The dinner is the visible part. What actually changes is who calls you on a Tuesday when something goes sideways.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {memberTraits.map((v) => (
              <div
                key={v.label}
                className="rounded-2xl p-7"
                style={{ backgroundColor: "rgba(201,169,110,0.04)", border: "1px solid rgba(201,169,110,0.12)" }}
              >
                <h3 className="text-base font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
                  {v.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Member Spotlight ─────────────────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: "#080e1a" }}>
        <div className="mx-auto max-w-5xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-center" style={{ color: "#C9A96E" }}>
            Your Future Peers
          </p>
          <h2
            className="mt-3 text-center text-[1.75rem] font-bold leading-tight text-white sm:text-[2.25rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            The curated founder room designed to<br />unblock your growth.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            Gildre members are hand-selected founders, operators, and builders who are active,
            giving, and at your level. Not LinkedIn connections. Actual peers.
          </p>

          {/* Featured Chicago member */}
          <div
            className="mt-12 rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(201,169,110,0.2)", backgroundColor: "rgba(255,255,255,0.02)" }}
          >
            <div className="flex flex-col sm:flex-row">
              <div className="relative h-56 sm:h-auto sm:w-48 flex-shrink-0">
                <Image
                  src="/images/cody-graham-headshot.jpeg"
                  alt="Cody Graham, COO and Head of Product at SoGo, Chicago Gildre member"
                  fill
                  sizes="(max-width: 640px) 100vw, 192px"
                  className="object-cover object-top"
                />
              </div>
              <div className="flex flex-col justify-center p-8">
                <span
                  className="mb-3 inline-block rounded-full px-3 py-1 text-[0.6rem] font-bold uppercase tracking-widest"
                  style={{ backgroundColor: "rgba(201,169,110,0.12)", color: "#C9A96E" }}
                >
                  Chicago Member Spotlight
                </span>
                <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
                  Cody Graham
                </h3>
                <p className="mt-1 text-sm font-medium" style={{ color: "rgba(255,255,255,0.45)" }}>
                  COO &amp; Head of Product · SoGo
                </p>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Cody is building SoGo, a personalized restaurant curation app that learns who
                  you are, not just what&rsquo;s nearby. He brought SoGo from concept to product in
                  Chicago&rsquo;s hyper-competitive restaurant market, and is one of the most
                  thoughtful product operators in the Gildre community.
                </p>
                <Link
                  href="/blog/cody-graham-sogo-restaurant-app-chicago"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70"
                  style={{ color: "#C9A96E" }}
                 target="_blank" rel="noopener noreferrer">
                  Read his story →
                </Link>
              </div>
            </div>
          </div>

          {/* Peer grid */}
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {peers.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl p-5 text-center"
                style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="relative mx-auto h-16 w-16 overflow-hidden rounded-full ring-2 ring-[#C9A96E]/30">
                  {p.photo ? (
                    <Image
                      src={p.photo}
                      alt={p.name}
                      fill
                      sizes="64px"
                      className="object-cover object-top"
                    />
                  ) : (
                    <div
                      className="flex h-full w-full items-center justify-center text-lg font-bold text-white"
                      style={{ backgroundColor: p.color }}
                    >
                      {p.initials}
                    </div>
                  )}
                </div>
                <p className="mt-3 text-sm font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
                  {p.name}
                </p>
                <p className="mt-0.5 text-[0.65rem]" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {p.company ? `${p.title} · ${p.company}` : p.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Events & Programs ────────────────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: "#0f1524" }}>
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            {/* Photo */}
            <div className="relative h-80 overflow-hidden rounded-2xl lg:h-96" style={{ border: "1px solid rgba(201,169,110,0.12)" }}>
              <Image
                src="/images/community/dinner.webp"
                alt="Gildre Chicago founder dinner, monthly gatherings for Chicago's top tech founders"
                fill
                sizes="(max-width: 1024px) calc(100vw - 48px), 480px"
                className="object-cover"
                style={{ objectPosition: "center center" }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(8,14,26,0.6) 0%, transparent 50%)" }}
              />
              <div className="absolute bottom-5 left-5">
                <p className="text-xs font-bold uppercase tracking-widest text-white">Curated Dinners</p>
                <p className="mt-0.5 text-[0.65rem]" style={{ color: "rgba(255,255,255,0.5)" }}>Wicker Park, Chicago</p>
              </div>
            </div>

            {/* Events content */}
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
                In-Person Events · Chicago, IL
              </p>
              <h2
                className="mt-3 text-[1.75rem] font-bold leading-tight text-white sm:text-[2.1rem]"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                More than dinners. A full calendar built around founders.
              </h2>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                Gildre Chicago events run the full range — from intimate curated dinners to tech-powered Match House networking, escape rooms, co-hosted startup events, BBQs, and investor office hours. Every format is designed for one thing: getting the right people in the right room.
              </p>

              <ul className="mt-7 flex flex-col gap-5">
                {[
                  {
                    title: "Founder Dinners",
                    detail: "Seated. Small. Every attendee selected. Twelve founders around a good table — no panels, no pitching. The conversations here don't happen anywhere else in Chicago because the room was built for them.",
                  },
                  {
                    title: "Match House Networking Events",
                    detail: "Gildre's signature format uses technology to match you with the right people before you walk in — and sends automated follow-ups after so connections don't die in someone's pocket. You leave with threads already started.",
                  },
                  {
                    title: "Team Building Experiences",
                    detail: "Escape rooms, off-sites, and challenges designed to build trust faster than a conference ever could. The best peer relationships start when you're solving something together.",
                  },
                  {
                    title: "Co-Hosted Events with Other Startups",
                    detail: "Gildre partners with top Chicago startups and ecosystem organizations to co-host events. Curated cross-pollination — access to complementary communities, not just ours.",
                  },
                  {
                    title: "BBQs & Social Gatherings",
                    detail: "Some of the best founder relationships start over good food. Gildre hosts seasonal social events where the agenda is just being around the right people.",
                  },
                  {
                    title: "Investor Office Hours",
                    detail: "Direct sessions with active Chicago-area investors. No pitch decks required. These are conversations, not auditions — designed to build real relationships before you ever need to fundraise.",
                  },
                ].map((ev) => (
                  <li key={ev.title} className="flex items-start gap-4">
                    <span
                      className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold"
                      style={{ backgroundColor: "rgba(201,169,110,0.12)", color: "#C9A96E" }}
                    >
                      ✓
                    </span>
                    <div>
                      <p className="text-sm font-bold text-white">{ev.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                        {ev.detail}
                      </p>
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
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-center" style={{ color: "#C9A96E" }}>
            From Gildre Members
          </p>
          <h2
            className="mt-3 text-center text-[1.75rem] font-bold text-white sm:text-[2.1rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            What building inside Gildre<br />actually feels like.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl p-7 flex flex-col"
                style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div
                  className="text-4xl mb-5 flex-shrink-0"
                  style={{ color: "rgba(201,169,110,0.4)", fontFamily: "Georgia, serif", lineHeight: 1 }}
                >
                  &ldquo;
                </div>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {t.quote}
                </p>
                <div className="mt-7 flex items-center gap-3 border-t pt-5" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                    <Image src={t.photo} alt={t.name} fill sizes="40px" className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.4)" }}>
                      {t.title} · {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Qualification / Who This Is For ──────────────────────────── */}
      <section className="px-6 py-20" style={{ backgroundColor: "#0f1524", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="mx-auto max-w-4xl">
          <div
            className="rounded-2xl px-8 py-10 sm:px-12"
            style={{ backgroundColor: "rgba(201,169,110,0.05)", border: "1px solid rgba(201,169,110,0.18)" }}
          >
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
              Selection Criteria
            </p>
            <h2
              className="mt-3 text-[1.5rem] font-bold leading-snug text-white sm:text-[1.9rem]"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Membership isn&rsquo;t automatic. That&rsquo;s what makes it worth having.
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              We review every application. Not to be difficult — because who&rsquo;s in the room determines what the room is worth. If the bar drops, the conversations drop with it. The people already inside are the reason you want in.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                "Pre-Seed to Series A",
                "Executive Operators",
                "Active Builders",
              ].map((crit) => (
                <div
                  key={crit}
                  className="flex items-center gap-2 rounded-xl px-4 py-3"
                  style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <span style={{ color: "#C9A96E" }}>✓</span>
                  <span className="text-sm font-medium text-white">{crit}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a
                href="https://tally.so/r/VLERVa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full px-9 py-3.5 text-sm font-bold transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
              >
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
          <h2
            className="mt-3 text-center text-[1.75rem] font-bold text-white sm:text-[2.1rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Meet the team leading Gildre&rsquo;s Chicago Chapter.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {chapterLeads.map((lead) => (
              <div
                key={lead.name}
                className="rounded-2xl p-8 flex flex-col sm:flex-row gap-6"
                style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="relative mx-auto sm:mx-0 h-20 w-20 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-[#C9A96E]/30">
                  {lead.photo ? (
                    <Image
                      src={lead.photo}
                      alt={lead.name}
                      fill
                      sizes="80px"
                      className="object-cover object-top"
                    />
                  ) : (
                    <div
                      className="flex h-full w-full items-center justify-center text-xl font-bold text-white"
                      style={{ backgroundColor: lead.color }}
                    >
                      {lead.name.split(" ").map((n: string) => n[0]).join("")}
                    </div>
                  )}
                </div>
                <div className="flex flex-col justify-center text-center sm:text-left">
                  <p className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
                    {lead.name}
                  </p>
                  <p className="mt-0.5 text-xs font-medium" style={{ color: "#C9A96E" }}>
                    {lead.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {lead.bio}
                  </p>
                  <a
                    href={lead.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70 justify-center sm:justify-start"
                    style={{ color: "#C9A96E" }}
                  >
                    LinkedIn →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Chicago FAQ ──────────────────────────────────────────────── */}
      <section className="px-6 py-20" style={{ backgroundColor: "#080e1a" }}>
        <div className="mx-auto max-w-3xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-center" style={{ color: "#C9A96E" }}>
            Chicago FAQ
          </p>
          <h2
            className="mt-3 text-center text-[1.75rem] font-bold text-white sm:text-[2rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Questions about Gildre Chicago.
          </h2>

          <div className="mt-10 flex flex-col gap-3">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl"
                style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <summary
                  className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-sm font-semibold text-white list-none"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {item.q}
                  <span
                    className="flex-shrink-0 text-lg font-light transition-transform group-open:rotate-45"
                    style={{ color: "#C9A96E" }}
                  >
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 pt-0">
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {item.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <section className="px-6 py-28 text-center" style={{ backgroundColor: "#1C2744" }}>
        <div className="mx-auto max-w-2xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            Chicago, IL
          </p>
          <h2
            className="mt-4 text-[2rem] font-bold leading-tight text-white sm:text-[2.75rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            The next dinner already has a guest list. Apply to be on it.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            Applications take less than five minutes. If you&rsquo;re a fit, you&rsquo;ll hear from us within a week. The founders you&rsquo;ve been trying to get in the room with are already members.
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
          <a href="/privacy" className="underline underline-offset-2 hover:text-zinc-400 transition-colors" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          {" · "}
          <a href="/" className="underline underline-offset-2 hover:text-zinc-400 transition-colors" target="_blank" rel="noopener noreferrer">
            Back to Gildre.com
          </a>
        </p>
      </div>
    </div>
  );
}
