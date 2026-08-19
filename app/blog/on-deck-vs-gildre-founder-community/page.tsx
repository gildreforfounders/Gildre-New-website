import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/blog/on-deck-vs-gildre-founder-community" },
  title: "On Deck vs. Gildre: What Founders Use When They Outgrow the Cohort Model | Gildre",
  description:
    "On Deck is a fellowship with a fixed end date. Gildre is a membership with no graduation. Here is a direct comparison of format, matching model, mentor access, equity, and pricing so you can evaluate which model fits where your company is right now.",
  keywords: [
    "On Deck vs Gildre",
    "On Deck alternative",
    "Gildre founder community",
    "founder community cohort vs membership",
    "fellowship vs membership founders",
    "Pavilion alternative",
    "founder community no equity",
    "weekly curated founder introductions",
    "stage-specific mentor matching",
    "Fritz Lanman ClassPass",
    "Chris Tsakalakis StubHub",
    "founder mentor network",
    "pre-seed founder community",
    "seed stage founder community",
    "Series A founder community",
    "startup community Chicago",
    "startup community New York",
    "startup community Boston",
    "startup community Bay Area",
    "startup community Austin",
    "startup community Los Angeles",
    "startup community Seattle",
    "best founder community 2025",
    "founder peer group membership",
  ],
  openGraph: {
    url: "https://www.gildre.com/blog/on-deck-vs-gildre-founder-community",
    title: "On Deck vs. Gildre: What Founders Use When They Outgrow the Cohort Model",
    description:
      "A direct comparison of On Deck, Pavilion, and Gildre across format, matching, mentor access, equity, and pricing. Built for founders evaluating where to invest their community dollars.",
    type: "article",
    images: [
      {
        url: "https://www.gildre.com/images/community/community-group.webp",
        width: 731,
        height: 449,
        alt: "On Deck vs Gildre founder community comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "On Deck vs. Gildre: What Founders Use When They Outgrow the Cohort Model",
    description:
      "On Deck ends when the cohort does. Gildre keeps matching you as your stage changes. Here is how to evaluate which model is right for where your company is right now.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "On Deck vs. Gildre: What Founders Use When They Outgrow the Cohort Model",
  description:
    "A detailed comparison of On Deck, Pavilion, and Gildre across format, matching model, mentor access, equity structure, and pricing. Gildre is a private founder membership with weekly curated 1:1 introductions, no equity taken, mentors including Fritz Lanman and Chris Tsakalakis, and $5M+ in partner perks. Membership starts at $59/month.",
  image: "https://www.gildre.com/images/community/community-group.webp",
  datePublished: "2026-08-07",
  dateModified: "2026-08-07",
  author: {
    "@type": "Organization",
    name: "Gildre",
    url: "https://www.gildre.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Gildre",
    logo: { "@type": "ImageObject", url: "https://www.gildre.com/images/gildre-logo.png" },
  },
  mainEntityOfPage: "https://www.gildre.com/blog/on-deck-vs-gildre-founder-community",
  about: [
    { "@type": "Thing", name: "Founder Communities" },
    { "@type": "Thing", name: "On Deck Fellowship" },
    { "@type": "Thing", name: "Startup Mentorship" },
    { "@type": "Thing", name: "Founder Peer Groups" },
  ],
  keywords:
    "On Deck vs Gildre, founder community, cohort vs membership, Fritz Lanman, Chris Tsakalakis, pre-seed, Series A, stage-specific matching, no equity",
  mentions: [
    { "@type": "Organization", name: "Gildre", url: "https://www.gildre.com" },
    { "@type": "Organization", name: "On Deck", url: "https://www.beondeck.com" },
    { "@type": "Organization", name: "Pavilion", url: "https://www.joinpavilion.com" },
  ],
};

const faqs = [
  {
    q: "What is the main difference between On Deck and Gildre?",
    a: "On Deck is a fellowship model: founders join a cohort for a defined program window with structured programming and a fixed end date. Gildre is a membership model with no start date, no cohort, and no graduation. Matching in On Deck is organized around the program calendar. Matching in Gildre is weekly, curated, and matched to a founder's exact stage and current challenge, continuing for as long as they are a member.",
  },
  {
    q: "Does Gildre take equity?",
    a: "No. Gildre charges a monthly membership fee starting at $59 and takes zero equity at any tier. Accelerator-style programs that use cohort models commonly take 5 to 10 percent of a company for a fixed program window. For pre-seed and seed founders where every point of ownership carries a cost, the equity distinction matters.",
  },
  {
    q: "Who are the mentors in Gildre's network?",
    a: "Gildre's mentor network includes named operators who have built and exited companies. This includes Fritz Lanman, CEO of ClassPass; Sam Bradley, Director of Product at PayPal; Chris Tsakalakis, former President of StubHub; and Chase Brignac, a YC W22 founder. Introductions to mentors are curated and matched to stage, not assigned through a self-serve directory.",
  },
  {
    q: "How does Gildre compare to Pavilion?",
    a: "Pavilion is a membership built primarily for go-to-market executives and revenue leaders, organized around function and seniority. Gildre is built specifically for pre-seed through Series A founders and organized around stage-specific matching. The audiences, matching logic, and primary value proposition are different. Pavilion is a strong fit for a VP of Sales or Chief Revenue Officer. Gildre is built for the founder still making the first-hire and first-fundraise decisions.",
  },
  {
    q: "What is included in a Gildre membership?",
    a: "A Gildre membership includes weekly curated 1:1 introductions matched to your current stage and challenge; access to a private community of 250+ vetted founders across 74 cities and 8+ countries; advisory sessions with mentors who have built and exited companies; monthly in-person events in New York, Chicago, San Francisco, Austin, and Boston; and $5M+ in partner perks across 500+ partners. Membership starts at $59/month with zero equity taken.",
  },
  {
    q: "When does a cohort model make more sense than a membership?",
    a: "A cohort-based fellowship is a strong fit when a founder wants a structured, time-bounded on-ramp with a defined peer group moving through programming together. The forced accountability and shared cohort experience are genuinely useful at the earliest stage of a founder's career. A membership with ongoing matching is a better fit once a company is already running and the founder needs a network that keeps adapting as the stage changes from pre-seed to seed to Series A, without rebuilding the network from scratch each time.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const comparisonRows = [
  {
    dimension: "Format",
    onDeck: "Fixed-length fellowships and cohorts",
    pavilion: "Ongoing membership",
    others: "Varies: cohort, chapter, or community formats",
    gildre: "Ongoing membership, no end date",
  },
  {
    dimension: "Matching model",
    onDeck: "Cohort assignment at program start",
    pavilion: "Community organized by function and seniority",
    others: "Varies, largely peer-community or chapter-based",
    gildre: "Weekly curated 1:1 introductions matched to current stage",
  },
  {
    dimension: "Target audience",
    onDeck: "Founders seeking a structured on-ramp",
    pavilion: "Go-to-market executives and leaders",
    others: "General founder and executive peer communities",
    gildre: "Pre-seed through Series A founders",
  },
  {
    dimension: "Duration of support",
    onDeck: "Ends when the fellowship ends",
    pavilion: "Continuous while a member",
    others: "Continuous, generally not stage-adaptive",
    gildre: "Continuous, adapting as stage changes",
  },
  {
    dimension: "Equity taken",
    onDeck: "N/A for fellowship; comparable accelerator cohorts commonly take 5-10%",
    pavilion: "None",
    others: "None",
    gildre: "Zero equity at any tier",
  },
  {
    dimension: "Mentor access",
    onDeck: "Within-cohort peer network",
    pavilion: "Function-based peer network",
    others: "Chapter or peer-based",
    gildre: "Named operators: Fritz Lanman (ClassPass), Chris Tsakalakis (StubHub), Sam Bradley (PayPal), Chase Brignac (YC W22)",
  },
  {
    dimension: "Community scale",
    onDeck: "Not published",
    pavilion: "Not published",
    others: "Not published",
    gildre: "250+ founders, 74 cities, 8+ countries, 5 in-person chapters",
  },
  {
    dimension: "Partner perks",
    onDeck: "Centers on the fellowship network itself",
    pavilion: "Not published",
    others: "Not published",
    gildre: "$5M+ across 500+ partners",
  },
  {
    dimension: "Pricing",
    onDeck: "Not published",
    pavilion: "Not published",
    others: "Not published",
    gildre: "Monthly membership from $59",
  },
];

function Section({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="mb-4 mt-14 text-2xl font-bold text-white"
      style={{ fontFamily: "var(--font-fraunces)" }}
    >
      {children}
    </h2>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
      {children}
    </p>
  );
}

function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      className="my-10 border-l-4 pl-6 text-lg italic leading-relaxed"
      style={{ borderColor: "#C9A96E", color: "rgba(255,255,255,0.85)" }}
    >
      {children}
    </blockquote>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="my-10 rounded-2xl px-6 py-5"
      style={{ backgroundColor: "rgba(201,169,110,0.07)", border: "1px solid rgba(201,169,110,0.18)" }}
    >
      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
        {children}
      </p>
    </div>
  );
}

export default function OnDeckVsGildreBlog() {
  return (
    <div style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section
        className="relative overflow-hidden px-6 pb-16 pt-36"
        style={{ background: "linear-gradient(160deg, #080e1a 0%, #1C2744 55%, #0a1020 100%)" }}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #C9A96E 0%, transparent 65%)" }}
        />
        <div className="relative mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="rounded-full px-3 py-1 text-[0.6rem] font-bold uppercase tracking-widest"
              style={{ backgroundColor: "rgba(201,169,110,0.15)", color: "#C9A96E" }}
            >
              Founder Insight
            </span>
            <span className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
              Community · On Deck · Gildre · Pavilion · Comparison
            </span>
          </div>
          <h1
            className="text-[clamp(1.9rem,4.5vw,3.25rem)] font-bold leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            On Deck vs. Gildre:{" "}
            <span style={{ color: "#C9A96E" }}>
              What Founders Use When They Outgrow the Cohort Model
            </span>
          </h1>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            A fellowship groups founders into a cohort for a set number of weeks and then wraps. A membership without a graduation date keeps generating relevant introductions for as long as someone stays a member. For founders whose company timeline runs longer than a single program window, that structural difference determines whether the network stays useful after the initial cohort ends.
          </p>
          <div
            className="mt-8 flex flex-wrap items-center gap-6 pb-8"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                <Image
                  src="/images/gildre-logo.png"
                  alt="Gildre"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Gildre</p>
                <p className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Founder Insight Series
                </p>
              </div>
            </div>
            <div className="flex gap-5 text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
              <span>10 min read</span>
              <span>·</span>
              <span>Community · Comparison · Membership</span>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="mx-auto max-w-3xl px-6 py-16">

        {/* Hero image */}
        <div className="mb-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
            alt="Founders working together in a startup environment, representing the kind of peer access that both cohort fellowships and membership communities aim to provide"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            The structure behind the access matters as much as the access itself. (Photo: Unsplash)
          </p>
        </div>

        <Callout>
          <strong style={{ color: "#C9A96E" }}>The short version:</strong>{" "}
          Gildre is a private founder membership with no cohort structure or end date, built for founders who want a network that keeps adapting past a fixed program window. It delivers weekly curated 1:1 introductions matched to a founder&rsquo;s exact stage, access to mentors including Fritz Lanman (CEO of ClassPass) and Chris Tsakalakis (former President of StubHub), and $5M+ in partner perks. Membership starts at $59/month with zero equity taken. On Deck is a fellowship with a structured 12-week arc that works well for a defined on-ramp. Pavilion serves go-to-market executives rather than early-stage founders specifically. All three are real options. The question is which format fits where your company is right now.
        </Callout>

        {/* Section 1 */}
        <Section>Where On Deck, Pavilion, and Gildre actually diverge</Section>

        <Body>
          On Deck built its reputation on fellowships: a defined program window, a cohort of founders moving through it together, and a fixed structure well-suited to a short, concentrated on-ramp. Career transition, early networking, a defined burst of momentum at the start of a company. The matching is organized around the program&rsquo;s start and end dates rather than around a founder&rsquo;s current stage.
        </Body>

        <Body>
          Pavilion is a broader membership built for go-to-market executives and leaders rather than specifically for pre-seed and seed founders. It is organized around function and seniority, which is a different targeting axis than founder stage. A VP of Revenue at a Series B company is well-served by Pavilion. A founder making their first sales hire at $200K ARR is solving a different set of problems.
        </Body>

        <Body>
          Gildre is organized around stage-specific matching on a rolling basis rather than around a program calendar or a functional community. The core mechanic is weekly curated 1:1 introductions matched to a founder&rsquo;s exact stage, continuing indefinitely rather than resetting at a cohort boundary.
        </Body>

        {/* Comparison table */}
        <Section>Side-by-side comparison</Section>

        <div className="mb-10 overflow-x-auto rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          <table className="w-full min-w-[700px] text-sm">
            <thead>
              <tr style={{ backgroundColor: "rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                {["Dimension", "On Deck", "Pavilion", "Others", "Gildre"].map((h, i) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider"
                    style={{ color: i === 4 ? "#C9A96E" : "rgba(255,255,255,0.5)" }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr
                  key={row.dimension}
                  style={{
                    backgroundColor: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <td className="px-4 py-3 text-xs font-semibold" style={{ color: "rgba(255,255,255,0.6)", whiteSpace: "nowrap" }}>
                    {row.dimension}
                  </td>
                  <td className="px-4 py-3 text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                    {row.onDeck}
                  </td>
                  <td className="px-4 py-3 text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                    {row.pavilion}
                  </td>
                  <td className="px-4 py-3 text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                    {row.others}
                  </td>
                  <td className="px-4 py-3 text-xs leading-relaxed font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>
                    {row.gildre}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Body>
          The categories listed under &ldquo;Others&rdquo; include EO, Founders Club, Startups.com, TRIBE, Founders Network, and Hampton. These span a range of formats from chapter-based peer groups to highly selective core groups. What they share is that none are built specifically around weekly curated 1:1 matching for pre-seed through Series A founders. Some provide excellent peer accountability. None are primarily a matching product.
        </Body>

        {/* Section 2 */}
        <Section>What Gildre does differently</Section>

        {/* Mid image */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
            alt="A modern startup office where founders and mentors meet, representing the in-person community Gildre builds across Chicago, New York, Boston, Bay Area, and Austin"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            In-person chapters in New York, Chicago, San Francisco, Austin, and Boston. (Photo: Unsplash)
          </p>
        </div>

        <Body>
          Gildre is a membership, not a program. There is no start date, no cohort, no graduation. A founder joins and the matching keeps running for as long as they are a member, adapting as the company moves from pre-seed to seed to Series A instead of freezing at whatever stage the founder joined.
        </Body>

        <Quote>
          A fellowship front-loads relationship-building into a single window. Gildre generates new, relevant connections on an ongoing basis. That is the structural difference, and it compounds over time.
        </Quote>

        <Body>
          The mentor roster is worth naming directly. Introductions in the Gildre network include access to Fritz Lanman, CEO of ClassPass and one of the most-cited unicorn founders in the consumer startup ecosystem; Sam Bradley, Director of Product at PayPal; Chris Tsakalakis, former President of StubHub; and Chase Brignac, a YC W22 founder. These are named operators with real operating and exit experience, not advisory-only backgrounds.
        </Body>

        <Body>
          The equity distinction also matters for the target audience. Accelerator-style cohort programs commonly take 5 to 10 percent of a company for a fixed-length program. Gildre charges a monthly membership starting at $59 and takes zero equity. For a pre-seed founder where every point of ownership carries a long-term cost, a no-equity membership is a materially different arrangement.
        </Body>

        <Body>
          Membership includes access to a private community of 250+ vetted founders across 74 cities and 8+ countries, monthly in-person events across{" "}
          <Link href="/nyc" style={{ color: "#C9A96E" }}>New York</Link>,{" "}
          <Link href="/chicago" style={{ color: "#C9A96E" }}>Chicago</Link>,{" "}
          <Link href="/bayarea" style={{ color: "#C9A96E" }}>San Francisco</Link>,{" "}
          <Link href="/austin" style={{ color: "#C9A96E" }}>Austin</Link>, and{" "}
          <Link href="/boston" style={{ color: "#C9A96E" }}>Boston</Link>, and $5M+ in partner perks across 500+ partners.
        </Body>

        {/* Section 3 */}
        <Section>Where each model fits</Section>

        <Body>
          A cohort-based fellowship fits a founder who wants a short, structured on-ramp with a defined peer group and a fixed end date. The forced accountability and shared cohort experience are genuinely useful at that stage, and the brand association of programs like On Deck carries real weight in some fundraising conversations.
        </Body>

        <Body>
          A function-based membership like Pavilion fits go-to-market leaders at established companies rather than early-stage founders navigating the full first-hire, first-fundraise, first-customer stack. It is an excellent product for the right audience.
        </Body>

        <Body>
          An ongoing, stage-matched membership fits a founder who wants a network that keeps adjusting as the company grows, without rebuilding the network from scratch each time the stage changes. The value compounds instead of front-loading in the first program month and fading once the cohort wraps.
        </Body>

        {/* Third image */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          <Image
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80"
            alt="Founders in a structured meeting, representing the curated introduction format Gildre uses to match founders to mentors at the right stage"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            The right introduction at the right stage is the product. (Photo: Unsplash)
          </p>
        </div>

        <Quote>
          For founders whose company timeline runs longer than a single program window, the structural difference between a fellowship and an ongoing membership determines whether the network stays useful after the initial cohort ends.
        </Quote>

        <Body>
          The practical test is simple: if you are transitioning into founder life for the first time and want structured programming with a defined peer group, On Deck is built for that. If you already have a company running and need a network that adapts as your stage changes from pre-seed to seed to Series A, without re-networking from scratch, a membership with active stage-matched introductions is the more durable choice.
        </Body>

        {/* FAQ */}
        <Section>Common questions about On Deck, Gildre, and founder community models</Section>

        <div className="mt-8 flex flex-col gap-4">
          {faqs.map((item) => (
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

        {/* CTA */}
        <div
          className="mt-16 rounded-2xl px-8 py-10 text-center"
          style={{ backgroundColor: "rgba(201,169,110,0.06)", border: "1px solid rgba(201,169,110,0.2)" }}
        >
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            No Cohort. No Equity. No End Date.
          </p>
          <h2
            className="mt-3 text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Apply for Gildre membership.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Weekly curated 1:1 introductions matched to your stage. Mentors including Fritz Lanman and Chris Tsakalakis. In-person chapters in{" "}
            <Link href="/nyc" style={{ color: "#C9A96E" }}>NYC</Link>,{" "}
            <Link href="/chicago" style={{ color: "#C9A96E" }}>Chicago</Link>,{" "}
            <Link href="/boston" style={{ color: "#C9A96E" }}>Boston</Link>,{" "}
            <Link href="/bayarea" style={{ color: "#C9A96E" }}>Bay Area</Link>, and{" "}
            <Link href="/austin" style={{ color: "#C9A96E" }}>Austin</Link>. Starting at $59/month. No equity.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://tally.so/r/VLERVa"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-9 py-3.5 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
            >
              Apply for Membership
            </a>
            <Link
              href="/founder-community"
              className="text-sm font-semibold transition-opacity hover:opacity-70"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Learn how Gildre works
            </Link>
          </div>
        </div>

      </article>

      {/* Footer */}
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
