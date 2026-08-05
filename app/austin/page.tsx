import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/austin" },
  title: "Founder Community Austin | Gildre",
  description:
    "Gildre connects Austin founders across every industry with active 1:1 matchmaking, expert operator mentorship, and private monthly dinners. Built for serious founders at the Seed to Growth stage.",
  keywords: [
    "Austin founder community",
    "Austin startup network",
    "Austin entrepreneurs",
    "Gildre Austin",
    "Texas startup founders",
    "Austin SaaS founders",
    "Austin tech community",
    "Capital Factory founders",
    "Austin fintech",
  ],
  openGraph: {
    title: "Founder Community Austin | Gildre",
    description:
      "Gildre connects Austin founders across every industry with active 1:1 matchmaking, expert operator mentorship, and private monthly dinners. Built for serious founders at the Seed to Growth stage.",
    url: "https://www.gildre.com/austin",
    siteName: "Gildre",
    type: "website",
    images: [{ url: "https://www.gildre.com/og-home.png", width: 1200, height: 630, alt: "Gildre founder community in Austin" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Founder Community Austin | Gildre",
    description:
      "Gildre connects Austin founders across every industry with active 1:1 matchmaking, expert operator mentorship, and private monthly dinners. Built for serious founders at the Seed to Growth stage.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      name: "Gildre — Austin",
      url: "https://www.gildre.com/austin",
      logo: "https://www.gildre.com/images/gildre-logo.png",
      image: "https://www.gildre.com/og-home.png",
      description:
        "Gildre is a private founder membership community in Austin, TX. Gildre Austin hosts monthly founder dinners Downtown and in East Austin for tech CEOs and early-stage startup founders, alongside weekly curated peer matches, expert mentorship, and warm investor introductions.",
      email: "info@gildre.com",
      telephone: "+1-847-881-6319",
      priceRange: "$$",
      address: { "@type": "PostalAddress", addressLocality: "Austin", addressRegion: "TX", postalCode: "78701", addressCountry: "US" },
      geo: { "@type": "GeoCoordinates", latitude: 30.2672, longitude: -97.7431 },
      areaServed: [{ "@type": "City", name: "Austin" }, { "@type": "Country", name: "United States" }],
      knowsAbout: ["Founder Peer Groups", "Startup Mentorship", "Angel Investing", "Venture Capital", "Startup Fundraising", "Community Building"],
      sameAs: ["https://www.gildre.com", "https://www.instagram.com/gildreforfounders", "https://www.linkedin.com/company/gildre/"],
      parentOrganization: { "@type": "Organization", name: "Gildre", url: "https://www.gildre.com" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How are 1:1 founder introductions curated in Austin?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every week, Gildre's team reviews your profile, stage, and goals to match you with an Austin founder or operator who has directly relevant experience, in your vertical, at your funding stage. These are warm, intentional introductions, not cold algorithm requests.",
          },
        },
        {
          "@type": "Question",
          name: "Where are Austin founder dinners and events held?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gildre Austin hosts monthly founder dinners Downtown and in East Austin, the two most active corridors of Austin's startup scene. Peer roundtables and investor sessions rotate across South Lamar and Domain-area venues.",
          },
        },
        {
          "@type": "Question",
          name: "What types of founders join Gildre Austin?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gildre Austin welcomes founders across every industry — SaaS, consumer, healthcare, creator economy, hardware, services, and beyond. What members share is not a sector. It's a stage of seriousness: actively building, accountable to peers, and ready to give as much as they get. Members typically range between the Build (<$500K) and Growth ($5M+ ARR) stages.",
          },
        },
        {
          "@type": "Question",
          name: "How is Gildre different from Capital Factory or other Austin startup hubs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Capital Factory and the Austin startup scene are great open ecosystems. Gildre is the curated, private peer layer built for founders who are past the idea stage, actively scaling and needing high-signal 1:1 introductions, operator mentorship, and a room with other builders at their exact level.",
          },
        },
        {
          "@type": "Question",
          name: "I just relocated to Austin. Is Gildre a good way to build my local network fast?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. This is one of the most common entry points for Gildre Austin members. Founders who relocated from SF, NYC, or Chicago use Gildre to build the high-trust peer relationships in Austin that took years to develop in their previous city. The 1:1 intro program accelerates that dramatically.",
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
      "SaaS, consumer, healthcare, hardware, creator economy, services. Gildre Austin has members building across all of it. The filter isn't your sector. It's whether you're serious enough to be useful to someone else.",
  },
  {
    label: "Past the point of no return",
    description:
      "Most members crossed a line where the company stopped being a project and became the thing. That changes how honest they are, how much they share, and how much they help.",
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
    q: "How are 1:1 founder introductions curated in Austin?",
    a: "Every week, Gildre's team reviews your profile, stage, and goals to match you with an Austin founder or operator with directly relevant experience, in your vertical, at your funding stage. These are warm, intentional introductions, not cold algorithm requests.",
  },
  {
    q: "Where are Austin founder dinners and events held?",
    a: "Gildre Austin hosts monthly founder dinners Downtown and in East Austin, the two most active corridors of Austin's startup scene. Peer roundtables and investor sessions rotate across South Lamar and Domain-area venues.",
  },
  {
    q: "What types of founders join Gildre Austin?",
    a: "Gildre Austin welcomes founders across every industry — SaaS, consumer, healthcare, creator economy, hardware, services, and beyond. What members share is not a sector. It's a stage of seriousness: actively building, accountable to peers, and ready to give as much as they get. Members typically range between the Build (<$500K) and Growth ($5M+ ARR) stages.",
  },
  {
    q: "How is Gildre different from Capital Factory or other Austin startup hubs?",
    a: "Capital Factory and the Austin ecosystem are great open resources. Gildre is the curated, private peer layer for founders past the idea stage, actively scaling and needing high-signal 1:1 introductions, operator mentorship, and a room with builders at their exact level.",
  },
  {
    q: "I just relocated to Austin. Is Gildre a good way to build my local network fast?",
    a: "Yes. This is one of the most common entry points for Gildre Austin members. Founders who relocated from SF, NYC, or Chicago use Gildre to build the high-trust peer relationships that took years to develop in their previous city. The 1:1 intro program accelerates that dramatically.",
  },
];

const peers = [
  { name: "Luke Ashenbrand", title: "Founder", company: "Startup Athlete", photo: "/images/luke-ashenbrand-headshot.webp" },
  { name: "Armando Vera", title: "Founder", company: "HangTight / Amazon", photo: "/images/armando-vera-headshot.webp" },
  { name: "Steve Ramona", title: "Host", company: "Servant Heart Podcast", photo: "/images/steve-ramona-headshot.jpeg" },
  { name: "John Lionberger", title: "Founder", company: "Broadway & Engineering", photo: "/images/john-lionberger-headshot.webp" },
];

export default function AustinPage() {
  return (
    <div style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 pb-28 pt-36"
        style={{ background: "linear-gradient(155deg, #080e1a 0%, #1C2744 50%, #0a1020 100%)" }}
      >
        <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10" style={{ background: "radial-gradient(ellipse, #C9A96E 0%, transparent 65%)" }} />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>Gildre · Austin, TX</p>
          <h1 className="mt-4 text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.08] text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
            <span style={{ color: "#C9A96E" }}>Austin</span> is full of people building things. The ones building at your level are harder to find.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Gildre is a private founder membership for Austin&rsquo;s active builders. Monthly dinners. Weekly 1:1 introductions made by hand. A room where the bar is the same for everyone.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="https://tally.so/r/VLERVa" target="_blank" rel="noopener noreferrer" className="rounded-full px-9 py-3.5 text-sm font-bold transition-opacity hover:opacity-90" style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}>
              Apply for Membership →
            </a>
            <Link href="/membership" className="rounded-full px-8 py-3.5 text-sm font-semibold transition-opacity hover:opacity-80" style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)" }}>
              Explore Austin Gatherings
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

      {/* ── What Members Have in Common ──────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: "#0f1524" }}>
        <div className="mx-auto max-w-5xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-center" style={{ color: "#C9A96E" }}>Why founders join and stay</p>
          <h2 className="mt-3 text-center text-[1.75rem] font-bold leading-tight text-white sm:text-[2.25rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
            Most founder communities give you more noise.<br />Gildre gives you fewer, better conversations.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            The dinner is the visible part. What actually changes is who calls you on a Tuesday when something goes sideways.
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
              <Image src="/images/community/dinner.webp" alt="Gildre Austin founder dinner, monthly gatherings Downtown and East Austin" fill sizes="(max-width: 1024px) calc(100vw - 48px), 480px" className="object-cover" style={{ objectPosition: "center center" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,14,26,0.6) 0%, transparent 50%)" }} />
              <div className="absolute bottom-5 left-5">
                <p className="text-xs font-bold uppercase tracking-widest text-white">Monthly Founder Dinner</p>
                <p className="mt-0.5 text-[0.65rem]" style={{ color: "rgba(255,255,255,0.5)" }}>East Austin · Austin, TX</p>
              </div>
            </div>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>In-Person Events · Austin, TX</p>
              <h2 className="mt-3 text-[1.75rem] font-bold leading-tight text-white sm:text-[2.1rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
                A dinner where you don&rsquo;t have to explain what you do.
              </h2>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                Twelve founders. A good table somewhere in Austin. No pitching, no panels, no networking theater. The person across from you is building something real and will tell you exactly what worked and what didn&rsquo;t.
              </p>
              <ul className="mt-7 flex flex-col gap-5">
                {[
                  { title: "Monthly Founder Dinners", detail: "Seated. Small. Every attendee selected. The conversations that happen here don't happen anywhere else in Austin because the room is built for them." },
                  { title: "Peer Operator Roundtables", detail: "Quarterly sessions on the decisions that don't have clean answers. Hiring your first real executive. Letting someone go. The fundraising round that almost killed morale. Facilitated by someone who's been through it." },
                  { title: "Investor Office Hours", detail: "Direct sessions with active Austin-area investors. No pitch decks required. These are conversations, not auditions." },
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
              We review every application. Not to be difficult — because who&rsquo;s in the room determines what the room is worth. If the bar drops, the conversations drop with it. The people already inside are the reason you want in.
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
            Meet the team behind Gildre Austin.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                name: "Ola George",
                title: "Chapter Lead, Gildre Austin",
                bio: "Ola is an Austin-based entrepreneur and community builder with deep ties to the city's growing founder ecosystem. She brings energy and warmth to every room she builds, focused on connecting founders across industries who share a bias for action and a commitment to genuine peer accountability. Having navigated the challenges of building in a competitive, fast-moving city, she understands what founders actually need from a community: honest relationships, useful introductions, and people who show up when it matters. She leads Gildre Austin with the belief that the best founder networks are built on trust first and everything else follows.",
                photo: "/team/ola-george.webp",
                linkedin: "#",
              },
              {
                name: "Diana Muturia",
                title: "Founder & CEO, Clyn · Austin Chapter Lead, Gildre",
                bio: "Diana is the founder and CEO of Clyn, a platform automating cleaning operations for short-term and vacation rental hosts, built after she worked as a cleaner herself and saw firsthand the operational gaps the industry was ignoring. Originally from Kenya, she came to the U.S. at 18 on a math and engineering scholarship, taught herself to code during the pandemic, and built the first version of Clyn from the ground up. A Techstars Austin alumna, Diana's path from scholarship loss to homelessness to a funded startup is one of the most honest founder stories in the Austin community. She brings that same candor and resilience to every room she leads at Gildre.",
                photo: "/team/diana-muturia.webp",
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
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-center" style={{ color: "#C9A96E" }}>Austin FAQ</p>
          <h2 className="mt-3 text-center text-[1.75rem] font-bold text-white sm:text-[2rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
            Questions about Gildre Austin.
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
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>Austin, TX</p>
          <h2 className="mt-4 text-[2rem] font-bold leading-tight text-white sm:text-[2.75rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
            The next dinner already has a guest list. Apply to be on it.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            Applications take less than five minutes. If you&rsquo;re a fit, you&rsquo;ll hear from us within a week. The founders you&rsquo;ve been trying to get in the room with are already members.
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
