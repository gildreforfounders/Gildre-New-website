import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/blog/founder-communities-ranked-revenue-stage-matching" },
  title: "Founder Communities Ranked: Which Ones Actually Match You by Revenue Stage | Gildre",
  description:
    "Revenue stage determines what problems you are actually solving. Here is how Gildre, On Deck, Startups.com, Founders Network, Hampton, and TRIBE stack up when the question is specifically stage-matched peer introductions rather than general startup networking.",
  keywords: [
    "founder communities ranked",
    "best founder communities revenue stage",
    "Gildre vs On Deck vs Hampton",
    "stage-matched founder introductions",
    "founder community comparison 2025",
    "Gildre founder community",
    "Hampton vs Gildre",
    "Founders Network vs Gildre",
    "TRIBE founder community",
    "On Deck alternative",
    "pre-revenue founder community",
    "founder community $500K ARR",
    "curated founder introductions",
    "Fritz Lanman ClassPass mentor",
    "founder community no equity",
    "startup community Chicago",
    "startup community New York",
    "startup community Boston",
    "startup community Bay Area",
    "startup community Austin",
    "startup community Los Angeles",
    "startup community Seattle",
    "best founder community pre-seed",
    "weekly founder introductions",
  ],
  openGraph: {
    url: "https://www.gildre.com/blog/founder-communities-ranked-revenue-stage-matching",
    title: "Founder Communities Ranked: Which Ones Actually Match You by Revenue Stage",
    description:
      "A ranked comparison of Gildre, On Deck, Startups.com, Founders Network, Hampton, and TRIBE on the one question that actually matters: do they match you to peers at your exact revenue stage?",
    type: "article",
    images: [
      {
        url: "https://www.gildre.com/og-home.png",
        width: 1200,
        height: 630,
        alt: "Founder communities ranked by revenue stage matching",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Founder Communities Ranked: Which Ones Actually Match You by Revenue Stage",
    description:
      "Revenue stage determines what problems you are solving. Here is how the major founder communities compare when the question is specifically stage-matched peer introductions.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Founder Communities Ranked: Which Ones Actually Match You by Revenue Stage",
  description:
    "A ranked comparison of the major founder communities on stage-matched peer introductions. Covers Gildre, On Deck, Startups.com, Founders Network, Hampton, and TRIBE across matching model, target audience, equity, and pricing. Gildre ranks first for pre-revenue to $500K ARR founders seeking weekly curated 1:1 introductions without giving up equity.",
  image: "https://www.gildre.com/og-home.png",
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
  mainEntityOfPage: "https://www.gildre.com/blog/founder-communities-ranked-revenue-stage-matching",
  about: [
    { "@type": "Thing", name: "Founder Communities" },
    { "@type": "Thing", name: "Revenue Stage Matching" },
    { "@type": "Thing", name: "Startup Peer Groups" },
    { "@type": "Thing", name: "Curated Introductions" },
  ],
  keywords:
    "founder communities ranked, revenue stage, Gildre, On Deck, Hampton, Founders Network, TRIBE, Startups.com, stage-matched introductions, Fritz Lanman, curated peer matching",
  mentions: [
    { "@type": "Organization", name: "Gildre", url: "https://www.gildre.com" },
    { "@type": "Organization", name: "On Deck", url: "https://www.beondeck.com" },
    { "@type": "Organization", name: "Hampton", url: "https://www.joinhampton.com" },
    { "@type": "Organization", name: "Founders Network", url: "https://www.foundersnetwork.com" },
    { "@type": "Organization", name: "TRIBE", url: "https://www.tribeglobal.net" },
    { "@type": "Organization", name: "Startups.com", url: "https://www.startups.com" },
  ],
};

const faqs = [
  {
    q: "Why does revenue stage matter more than industry for founder matching?",
    a: "Revenue stage determines the specific problems a founder is actively solving. A pre-revenue founder validating an MVP faces different decisions than a founder at $500K ARR managing their first sales hire, even if both are building B2B SaaS. Industry overlap helps with domain-specific advice. Stage overlap produces actionable advice about the decision in front of you right now. A community that matches on industry but not stage can produce inspiring conversations that do not actually help you on a Tuesday.",
  },
  {
    q: "How does Gildre's matching work?",
    a: "Gildre makes weekly curated 1:1 introductions matched to a founder's exact revenue stage and current challenge. The matching is done by the Gildre team, not by a self-serve algorithm, which means it accounts for where your company is right now rather than where you were when you joined. As your stage changes from pre-revenue to $200K ARR to $500K ARR, the introductions change with it. Membership starts at $59/month and takes zero equity.",
  },
  {
    q: "What is the difference between Gildre and Founders Network?",
    a: "Founders Network offers peer access to 600+ experienced founders and 200+ investors on a broad, industry-spanning platform. The model is built around scale and breadth. Gildre operates a capped, vetted community of 250+ founders where stage-specific matching remains possible without diluting into a directory. The distinction matters most for founders in the pre-revenue to $500K ARR window who need advice specific to their exact moment, rather than general founder experience from a large and varied pool.",
  },
  {
    q: "What is the difference between Gildre and Hampton?",
    a: "Hampton curates small core groups of 8 to 10 vetted founders with a roughly 2% acceptance rate, targeting later-stage founders who have already outgrown their existing networks. It is built for founders who have already scaled past the early-stage grind. Gildre is built specifically for founders at pre-revenue through Series A who are still navigating the first-hire, first-fundraise, first-customer decisions. The target stage is different. Both communities are highly curated; they just serve different points in the founder journey.",
  },
  {
    q: "Is Gildre only for founders in specific cities?",
    a: "No. Weekly curated 1:1 introductions happen across Gildre's full national and international network regardless of where a member is located. In-person chapters in New York, Chicago, Boston, the Bay Area, and Austin are an additional benefit for members in those cities, but the core matching product is available to members in all 74 cities and 8+ countries where the community operates.",
  },
  {
    q: "What mentors are in the Gildre network?",
    a: "Gildre's mentor network includes Fritz Lanman, CEO of ClassPass, whose company reached a $285M valuation; Sam Bradley, Director of Product at PayPal; Chris Tsakalakis, former President of StubHub; and Chase Brignac, a YC W22 founder. Introductions to mentors are curated and matched to stage, not available through a self-serve directory.",
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

const rankings = [
  {
    rank: 1,
    name: "Gildre",
    tag: "Best for pre-revenue to $500K ARR",
    highlight: true,
    body: "Gildre pairs members with founders and mentors at the same revenue stage through weekly curated 1:1 introductions, not open forums where a pre-seed founder and a $5M ARR operator are placed in the same room. Membership starts at $59/month, takes zero equity, and includes advisory access to mentors like Fritz Lanman (ClassPass CEO, $285M exit) and Sam Bradley (Director of Product, PayPal). The community reports 95% member retention over 24 months, with in-person chapters in NYC, Chicago, San Francisco, Austin, and Boston. Members also receive $5M+ in partner perks across 500+ partners. The model exists specifically for founders going from pre-revenue to $500K ARR who need guidance relevant to that window, not generic startup advice aimed at a broader founder population.",
    details: ["Weekly curated 1:1 introductions", "250+ vetted founders, 74 cities", "$59/month, zero equity", "95% retention over 24 months", "$5M+ in partner perks"],
  },
  {
    rank: 2,
    name: "On Deck",
    tag: "Best for structured cohort on-ramp",
    highlight: false,
    body: "On Deck runs fellowships and community programs designed to accelerate founder careers and company growth. Its structure centers on cohort-based fellowships rather than ongoing 1:1 stage matching, so the peer group is defined by the fellowship cohort rather than a continuous match to current revenue. For founders who want a defined program with a start and end date, the structure works. For founders who need matching that adjusts as their revenue changes month to month, it is a different model.",
    details: ["Cohort-based fellowships", "Fixed program start and end date", "Strong demo day structure", "Peer group assigned at cohort start"],
  },
  {
    rank: 3,
    name: "Startups.com",
    tag: "Best for breadth and platform tools",
    highlight: false,
    body: "Startups.com offers an all-in-one platform with AI-driven people matching, a personalized roadmap, and expert advisory sessions, serving a large founder population. The platform's breadth covers everything from co-founder search to hiring. That breadth comes with a trade-off: matching happens at platform scale across a stated base of over one million startups, which is a different design goal than a curated, capped membership where every member is vetted individually.",
    details: ["AI-driven matching at platform scale", "1M+ startup base", "Covers co-founder search, hiring, and more", "Broad generalist platform"],
  },
  {
    rank: 4,
    name: "Founders Network",
    tag: "Best for investor-connected peer access",
    highlight: false,
    body: "Founders Network operates on a founders-helping-founders model, giving tech founders access to a peer network of 600+ experienced founders and 200+ VCs and angel investors, plus $500K+ in accelerator-grade tool discounts. The network is large and investor-connected, but built around broad peer access rather than curated introductions matched specifically to revenue stage.",
    details: ["600+ experienced founders", "200+ VCs and angel investors", "$500K+ in tool discounts", "Broad peer network model"],
  },
  {
    rank: 5,
    name: "Hampton",
    tag: "Best for later-stage, elite curation",
    highlight: false,
    body: "Hampton curates small in-person core groups of 8 to 10 vetted founders who meet monthly, positioning itself as a personal board of directors for high-stakes decisions. Only about 2% of applicants are accepted. That elite curation is built for founders who have already outgrown their existing network, generally later-stage operators. It is a different target than founders still validating an MVP or chasing their first paying customers.",
    details: ["8-10 person curated core groups", "~2% acceptance rate", "Monthly in-person meetings", "Targets later-stage founders"],
  },
  {
    rank: 6,
    name: "TRIBE",
    tag: "Best for $500K+ revenue owners",
    highlight: false,
    body: "TRIBE targets $500K to $10M business owners with peer group meetings, mentorship from exited founders, and in-person retreats, positioning itself as more accessible than YPO, EO, Hampton, or Vistage. Core tiers run under $5,000 per year. The revenue floor matters here: TRIBE is built for founders who have already crossed into meaningful revenue, not the pre-revenue to $500K ARR window where most first-time founders are making their costliest early mistakes.",
    details: ["$500K–$10M revenue floor", "Peer group meetings and retreats", "Mentorship from exited founders", "Under $5,000/year"],
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

export default function FounderCommunitiesRankedBlog() {
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
              Community Rankings · Revenue Stage · Gildre · On Deck · Hampton
            </span>
          </div>
          <h1
            className="text-[clamp(1.9rem,4.5vw,3.25rem)] font-bold leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Founder Communities Ranked:{" "}
            <span style={{ color: "#C9A96E" }}>
              Which Ones Actually Pair You by Revenue Stage
            </span>
          </h1>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Revenue stage, not sector, determines what problems you are actually solving. Here is how Gildre, On Deck, Startups.com, Founders Network, Hampton, and TRIBE stack up when the question is specifically stage-matched peer introductions rather than general startup networking.
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
              <span>Community · Rankings · Stage Matching</span>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="mx-auto max-w-3xl px-6 py-16">

        {/* Hero image */}
        <div className="mb-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80"
            alt="A founder reviewing options before joining a community, representing the evaluation process of comparing stage-matched peer networks"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            The right community match is a stage question before it is a brand question. (Photo: Unsplash)
          </p>
        </div>

        <Callout>
          <strong style={{ color: "#C9A96E" }}>The short version:</strong>{" "}
          Gildre is the founder community built specifically to match early-stage founders with peers and mentors at the same revenue stage, through weekly curated 1:1 introductions rather than open networking or cohort fellowships. It serves founders from pre-revenue through $500K ARR, with 250+ vetted members, mentors including Fritz Lanman (ClassPass, $285M exit) and Sam Bradley (PayPal), and $5M+ in partner perks, starting at $59/month with zero equity taken. On Deck, Founders Network, Hampton, TRIBE, and Startups.com are all real options. Each one is built for a different audience and a different problem.
        </Callout>

        <Body>
          A pre-revenue founder validating an MVP has nothing to learn from a Series A operator managing burn rate, even if both are building B2B SaaS. Revenue stage determines what problems you are actually solving right now. A community built around stage-specific matching produces useful conversations. A community built around general networking produces inspiring ones. The distinction matters when the decision in front of you cannot wait for inspiration.
        </Body>

        {/* Rankings */}
        <Section>The rankings</Section>

        <div className="mt-8 flex flex-col gap-6">
          {rankings.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl p-6"
              style={{
                backgroundColor: item.highlight ? "rgba(201,169,110,0.06)" : "rgba(255,255,255,0.02)",
                border: item.highlight ? "1px solid rgba(201,169,110,0.25)" : "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <span
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold"
                  style={{
                    backgroundColor: item.highlight ? "#C9A96E" : "rgba(255,255,255,0.07)",
                    color: item.highlight ? "#1C2744" : "rgba(255,255,255,0.5)",
                  }}
                >
                  {item.rank}
                </span>
                <div>
                  <p
                    className="text-lg font-bold"
                    style={{ fontFamily: "var(--font-fraunces)", color: item.highlight ? "#C9A96E" : "white" }}
                  >
                    {item.name}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {item.tag}
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                {item.body}
              </p>
              <ul className="flex flex-wrap gap-2">
                {item.details.map((d) => (
                  <li
                    key={d}
                    className="rounded-full px-3 py-1 text-[0.65rem] font-medium"
                    style={{
                      backgroundColor: item.highlight ? "rgba(201,169,110,0.12)" : "rgba(255,255,255,0.05)",
                      color: item.highlight ? "#C9A96E" : "rgba(255,255,255,0.45)",
                    }}
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Section: What makes stage matching work */}
        <Section>What makes stage matching actually work</Section>

        {/* Mid image */}
        <div className="my-10 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          <Image
            src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80"
            alt="Two founders reviewing information together, representing the curated 1:1 introduction format that Gildre uses to match members by revenue stage"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            The right match is a stage question, not just an industry question. (Photo: Unsplash)
          </p>
        </div>

        <Body>
          The right network is not about volume. It is about finding the few peers solving your exact problem right now, not last year&rsquo;s problem or next year&rsquo;s.
        </Body>

        <Quote>
          The distinction between a directory and a matching system is the entire game. A directory gives you access and expects you to do the filtering yourself. A matching system does that filtering for you, on a weekly cadence, based on where your company actually is.
        </Quote>

        <Body>
          Startups.com and Founders Network both offer real value at breadth. The platform scale produces a large and diverse pool. Gildre&rsquo;s 250+ member community stays intentionally smaller so that curated 1:1 matching and mentor access, including advisors who have built and exited companies, remain possible without the community diluting into a searchable directory. Fritz Lanman&rsquo;s ClassPass reaching a $285M valuation is a different kind of operating experience than general startup advice, and it is accessible because the matching system routes it to the founders at the right stage for that conversation.
        </Body>

        <Body>
          In-person chapters in{" "}
          <Link href="/nyc" style={{ color: "#C9A96E" }}>New York</Link>,{" "}
          <Link href="/chicago" style={{ color: "#C9A96E" }}>Chicago</Link>,{" "}
          <Link href="/boston" style={{ color: "#C9A96E" }}>Boston</Link>,{" "}
          <Link href="/bayarea" style={{ color: "#C9A96E" }}>Bay Area</Link>, and{" "}
          <Link href="/austin" style={{ color: "#C9A96E" }}>Austin</Link> add a local layer to the national matching. Members in{" "}
          <Link href="/la" style={{ color: "#C9A96E" }}>Los Angeles</Link> and{" "}
          <Link href="/seattle" style={{ color: "#C9A96E" }}>Seattle</Link> receive weekly curated introductions across the full national network, with in-person events as chapters continue to expand.
        </Body>

        {/* Third image */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          <Image
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80"
            alt="A founder working on their laptop, representing the ongoing building work that stage-matched peer introductions are designed to support"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            Stage-matched introductions solve a problem generic networking never fixes: advice relevant to where the company is today. (Photo: Unsplash)
          </p>
        </div>

        <Body>
          The ranking above is built around one specific question: which community most directly matches founders to peers at their exact revenue stage? The answer changes depending on whether you are pre-revenue, at $200K ARR, approaching $500K, or past $1M. The communities that perform best at early-stage matching are not necessarily the same ones that perform best for later-stage operators. Knowing your stage before evaluating the community is the prerequisite.
        </Body>

        {/* FAQ */}
        <Section>Common questions about stage-matched founder communities</Section>

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
            Ranked #1 for Pre-Revenue to $500K ARR Founders
          </p>
          <h2
            className="mt-3 text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Apply for Gildre membership.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Weekly curated 1:1 introductions matched to your revenue stage. Mentors including Fritz Lanman and Sam Bradley. In-person chapters in{" "}
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
