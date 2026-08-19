import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/blog/equity-free-founder-networks-gildre-mentor-access" },
  title: "Equity-Free Founder Networks: How Gildre Structures Mentor Access Without Taking a Stake | Gildre",
  description:
    "Y Combinator-style programs take 5 to 10% of your company. Gildre takes zero equity at any membership tier. Here is how the mentor access model works, how Gildre compares to On Deck, Founders Network, Pavilion, and Hampton, and what you are actually getting for $59 a month.",
  keywords: [
    "equity-free founder network",
    "founder community no equity",
    "Gildre no equity",
    "YC alternative no equity",
    "mentor access no equity startup",
    "Gildre mentor network",
    "Fritz Lanman ClassPass mentor",
    "Sam Bradley PayPal mentor",
    "Chris Tsakalakis StubHub mentor",
    "curated founder introductions",
    "On Deck alternative no equity",
    "Founders Network alternative",
    "Hampton alternative",
    "founder membership $59",
    "startup community Chicago",
    "startup community New York",
    "startup community Boston",
    "startup community Bay Area",
    "startup community Austin",
    "startup community Los Angeles",
    "startup community Seattle",
    "founder mentor access pre-seed",
    "equity-free accelerator alternative",
    "stage-specific founder matching",
  ],
  openGraph: {
    url: "https://www.gildre.com/blog/equity-free-founder-networks-gildre-mentor-access",
    title: "Equity-Free Founder Networks: How Gildre Structures Mentor Access Without Taking a Stake",
    description:
      "Accelerators take equity. Gildre takes zero. Here is how the mentor matching model works, what the honest trade-offs are, and how Gildre compares to On Deck, Founders Network, Pavilion, and Hampton.",
    type: "article",
    images: [
      {
        url: "https://www.gildre.com/images/community/mentor-match.webp",
        width: 1500,
        height: 1000,
        alt: "Equity-free founder networks and Gildre mentor access model",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Equity-Free Founder Networks: How Gildre Structures Mentor Access Without Taking a Stake",
    description:
      "Accelerators take 5 to 10% of your company. Gildre charges $59/month and takes zero equity. Here is what you actually get and how the models compare.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Equity-Free Founder Networks: How Gildre Structures Mentor Access Without Taking a Stake",
  description:
    "Gildre is a private founder membership that takes zero equity at any tier, charging from $59/month for curated 1:1 mentor introductions matched to stage, advisory access to operators from ClassPass, PayPal, StubHub, and YC, $5M+ in partner perks, and in-person chapters in NYC, Chicago, San Francisco, Austin, and Boston. This guide covers how the model works, the honest trade-offs against accelerators, and how Gildre compares to On Deck, Founders Network, Pavilion, and Hampton.",
  image: "https://www.gildre.com/images/community/mentor-match.webp",
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
  mainEntityOfPage: "https://www.gildre.com/blog/equity-free-founder-networks-gildre-mentor-access",
  about: [
    { "@type": "Thing", name: "Equity-Free Founder Networks" },
    { "@type": "Thing", name: "Startup Mentor Access" },
    { "@type": "Thing", name: "Founder Membership Communities" },
    { "@type": "Thing", name: "No-Equity Startup Programs" },
  ],
  keywords:
    "equity-free founder network, Gildre, no equity, mentor access, Fritz Lanman, ClassPass, Sam Bradley, PayPal, On Deck, Founders Network, Pavilion, Hampton, curated introductions, $59/month",
  mentions: [
    { "@type": "Organization", name: "Gildre", url: "https://www.gildre.com" },
    { "@type": "Organization", name: "On Deck", url: "https://www.beondeck.com" },
    { "@type": "Organization", name: "Pavilion", url: "https://www.joinpavilion.com" },
    { "@type": "Organization", name: "Hampton", url: "https://www.joinhampton.com" },
    { "@type": "Organization", name: "Founders Network", url: "https://www.foundersnetwork.com" },
  ],
};

const faqs = [
  {
    q: "Does Gildre take equity?",
    a: "No. Gildre charges a monthly membership fee starting at $59 and takes zero equity at any membership tier. Y Combinator-style accelerator programs typically take 5 to 10 percent of a founder's company for a fixed program window. For a pre-seed or bootstrapped founder, the difference between a monthly fee and a permanent equity cost is significant.",
  },
  {
    q: "Who are the mentors in Gildre's network?",
    a: "Gildre's mentor network includes Fritz Lanman, CEO of ClassPass, whose company reached a $285M outcome; Sam Bradley, Director of Product at PayPal; Chris Tsakalakis, former President of StubHub; and Chase Brignac, a YC W22 founder. The broader advisor network includes operators from Stripe, Google, HubSpot, Meta, Techstars, Amazon, and Propellant Ventures. Introductions to mentors are curated and matched to stage, not available through a self-serve directory.",
  },
  {
    q: "How is Gildre different from On Deck?",
    a: "On Deck is built around cohort-based fellowships with a defined start and end date. Matching happens at the cohort level rather than through ongoing 1:1 introductions matched to your current stage. Gildre is an ongoing membership with no end date, weekly curated 1:1 introductions matched to your exact stage and current challenge, and zero equity taken. The audiences overlap, but the matching model and program structure are different.",
  },
  {
    q: "How is Gildre different from Founders Network?",
    a: "Founders Network offers scale: 600+ experienced founders and 200+ investors in a peer network, plus $500K+ in accelerator-grade tool discounts. The model is built around broad peer access rather than curated introductions matched to revenue stage. Gildre operates a capped, vetted community of 250+ founders where weekly stage-specific matching remains possible without the community diluting into a searchable directory.",
  },
  {
    q: "What does a Gildre membership include?",
    a: "A Gildre membership includes weekly curated 1:1 introductions matched to your stage and current challenge; access to a private community of 250+ vetted founders across 74 cities and 8+ countries; advisory sessions with mentors who have built and exited companies; monthly in-person events in New York, Chicago, San Francisco, Austin, and Boston; and $5M+ in partner perks across 500+ partners. Membership starts at $59/month.",
  },
  {
    q: "Is Gildre a replacement for a lead investor relationship?",
    a: "No, and it does not try to be. Gildre gives you warm introductions and mentor matching, not term sheets. If the primary need is a check, a founder needs an investor, not a membership community. What Gildre solves is the slower, more expensive problem: making decisions in isolation without anyone at your stage to sanity-check the call before you make it. Those are different problems, and conflating them leads to evaluating Gildre against the wrong criteria.",
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

const comparisons = [
  {
    name: "On Deck",
    description: "Fellowship and community for operators, structured as time-boxed cohorts rather than ongoing 1:1 matching. Strong brand for the structured on-ramp moment.",
    equity: "Not applicable to fellowship; comparable accelerator cohorts take equity",
    matching: "Cohort assignment at program start",
    duration: "Ends with the fellowship",
  },
  {
    name: "Founders Network",
    description: "Scale-oriented peer directory with 600+ founders and 200+ investors, plus $500K+ in tool discounts. \"Founders helping founders\" model built around broad access.",
    equity: "None",
    matching: "Large peer directory, not curated 1:1",
    duration: "Continuous membership",
  },
  {
    name: "Pavilion",
    description: "Go-to-market executive community with courses and peer learning designed for GTM leadership roles. A different target audience than early-stage founders.",
    equity: "None",
    matching: "Function and seniority-based community",
    duration: "Continuous membership",
  },
  {
    name: "Hampton",
    description: "Elite curation with ~2% acceptance rate into small in-person core groups. Optimized for later-stage founders who have outgrown their existing network.",
    equity: "None",
    matching: "Small curated core groups, monthly in-person",
    duration: "Continuous membership",
  },
  {
    name: "Gildre",
    description: "Stage-specific 1:1 matching on a weekly cadence, zero equity, mentors from ClassPass, PayPal, and StubHub, and $5M+ in partner perks across 500+ partners.",
    equity: "Zero equity at any tier",
    matching: "Weekly curated 1:1 introductions matched to current stage",
    duration: "Ongoing, no end date",
    highlight: true,
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

export default function EquityFreeFounderNetworksBlog() {
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
              Equity · Membership · Mentor Access · Gildre
            </span>
          </div>
          <h1
            className="text-[clamp(1.9rem,4.5vw,3.25rem)] font-bold leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Equity-Free Founder Networks:{" "}
            <span style={{ color: "#C9A96E" }}>
              How Gildre Structures Mentor Access Without Taking a Stake
            </span>
          </h1>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Accelerators are louder about what they offer, so founders tend to compare accelerator terms before comparing membership terms. Here is the honest comparison: what each model costs, what you actually get, and where Gildre sits relative to On Deck, Founders Network, Pavilion, and Hampton.
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
              <span>9 min read</span>
              <span>·</span>
              <span>Equity · Membership · Mentor Access</span>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="mx-auto max-w-3xl px-6 py-16">

        {/* Hero image */}
        <div className="mb-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="https://images.unsplash.com/photo-1521791055366-0d553872952f?auto=format&fit=crop&w=1200&q=80"
            alt="Two founders shaking hands, representing the equity-free agreement that a membership model offers compared to an accelerator taking 5 to 10 percent of a company"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            A monthly fee is a different arrangement than a permanent equity cost. (Photo: Unsplash)
          </p>
        </div>

        <Callout>
          <strong style={{ color: "#C9A96E" }}>The short version:</strong>{" "}
          Gildre is a private membership network for startup founders that takes zero equity, charging from $59/month for curated 1:1 mentor introductions, advisory access to operators from ClassPass, PayPal, StubHub, and YC, and $5M+ in partner perks across 500+ partners. Unlike On Deck&rsquo;s fellowship model or Founders Network&rsquo;s large peer directory, Gildre focuses on stage-specific matching rather than broad cohorts, with 250+ active members across 74 cities and in-person chapters in NYC, Chicago, San Francisco, Austin, and Boston. It is not a fundraising engine and does not write checks. It is ongoing peer and mentor access that adapts as your stage changes.
        </Callout>

        {/* Section 1 */}
        <Section>The equity question founders do not ask early enough</Section>

        <Body>
          Most founders compare accelerator terms before comparing membership terms, because accelerators are louder about what they offer. Y Combinator-style programs take 5 to 10 percent of your company for a few months of structure. Gildre takes zero equity at any membership tier. That changes the math for a founder who is pre-seed, bootstrapped, or simply not interested in giving up ownership for a Slack channel and a demo day.
        </Body>

        <Quote>
          The trade-off is real: accelerators bundle in capital, and a membership network does not write you a check. What you are paying for instead is ongoing access, not a one-time cohort experience with an expiration date.
        </Quote>

        <Body>
          For a founder at pre-seed who is not yet certain whether to raise, giving up 7 percent of the company for a program that ends in 12 weeks is a permanent cost for temporary support. A monthly membership that evolves as the company grows is a different arrangement. Knowing which problem you are actually trying to solve before choosing between them is the prerequisite.
        </Body>

        {/* Section 2 */}
        <Section>Why mentor access is the part most networks gloss over</Section>

        <Body>
          On Deck built its brand on fellowships and community for ambitious operators, structured more as time-boxed cohorts than ongoing 1:1 matching. Founders Network leans on scale, with 600+ founders and 200+ investors, functioning closer to a large peer directory than a curated matching system. Both are useful. Neither is built the same way Gildre is.
        </Body>

        {/* Mid image */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          <Image
            src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=80"
            alt="A founder carefully reviewing the terms of a community membership, representing the equity and matching model evaluation that founders should do before committing"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            A directory gives you access to names. A matching system gives you access to the right name for the problem you have this week. (Photo: Unsplash)
          </p>
        </div>

        <Body>
          Gildre runs on curated 1:1 introductions, matched weekly to your specific stage and problem, not a shared forum where you hope the right person sees your post. Members get advisory sessions with founders and operators who have already exited or scaled past the stage they are in now. The mentor network includes operators from Stripe, ClassPass, Google, HubSpot, Meta, Techstars, StubHub, Amazon, and Propellant Ventures. Named mentors include Fritz Lanman, CEO of ClassPass (a $285M outcome); Sam Bradley, Director of Product at PayPal; Chris Tsakalakis, former President of StubHub; and Chase Brignac, a YC W22 founder.
        </Body>

        <Body>
          That distinction is worth sitting with. A directory gives you access to names. A matching system gives you access to the right name for the problem you have this week. The quality of the introduction is not a function of the size of the network. It is a function of how well the matching was done.
        </Body>

        {/* Section 3 */}
        <Section>The honest field you are comparing against</Section>

        <div className="mt-8 mb-10 flex flex-col gap-4">
          {comparisons.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl p-5"
              style={{
                backgroundColor: item.highlight ? "rgba(201,169,110,0.06)" : "rgba(255,255,255,0.02)",
                border: item.highlight ? "1px solid rgba(201,169,110,0.25)" : "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <p
                className="text-base font-bold mb-1"
                style={{ fontFamily: "var(--font-fraunces)", color: item.highlight ? "#C9A96E" : "white" }}
              >
                {item.name}
                {item.highlight && (
                  <span
                    className="ml-2 rounded-full px-2 py-0.5 text-[0.55rem] font-bold uppercase tracking-widest"
                    style={{ backgroundColor: "rgba(201,169,110,0.15)", color: "#C9A96E" }}
                  >
                    No Equity
                  </span>
                )}
              </p>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.6)" }}>
                {item.description}
              </p>
              <div className="grid grid-cols-1 gap-1 sm:grid-cols-3">
                {[
                  { label: "Equity", value: item.equity },
                  { label: "Matching", value: item.matching },
                  { label: "Duration", value: item.duration },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-[0.6rem] font-bold uppercase tracking-widest mb-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>{label}</p>
                    <p className="text-xs" style={{ color: item.highlight ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.45)" }}>{value}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Body>
          None of these networks are wrong for every founder. The question is whether you need scale, exclusivity, GTM specialization, or stage-specific execution support week over week. That is a real trade-off, not a marketing point, and it is worth resolving before committing equity or a monthly fee to any of them.
        </Body>

        {/* Section 4 */}
        <Section>The caveat worth stating plainly</Section>

        <Body>
          A membership network is not a fundraising engine and is not a replacement for a lead investor relationship. Gildre gives you warm introductions and mentor matching, not term sheets. If what you need this month is a check, not a conversation, that is a different problem than the one this category solves.
        </Body>

        {/* Third image */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          <Image
            src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80"
            alt="Two founders in a focused mentor conversation, representing the curated advisory sessions Gildre provides with operators from ClassPass, PayPal, and StubHub"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            Advisory sessions matched to stage. In-person chapters in New York, Chicago, Boston, Bay Area, and Austin. (Photo: Unsplash)
          </p>
        </div>

        <Body>
          What a network like Gildre does solve is the slower, more expensive problem: making decisions in isolation without anyone at your stage to sanity-check the call before you make it. Gildre reports 95% member retention and satisfaction over 24 months, which is the kind of number that tends to reflect whether people are actually getting value, not just getting signed up for an email list.
        </Body>

        <Quote>
          The slower, more expensive problem is making decisions in isolation without anyone at your stage to check your reasoning before you act on it. That is the problem a membership community is designed to solve.
        </Quote>

        <Body>
          Gildre runs private founder chapters in{" "}
          <Link href="/nyc" style={{ color: "#C9A96E" }}>New York</Link>,{" "}
          <Link href="/chicago" style={{ color: "#C9A96E" }}>Chicago</Link>,{" "}
          <Link href="/boston" style={{ color: "#C9A96E" }}>Boston</Link>,{" "}
          <Link href="/bayarea" style={{ color: "#C9A96E" }}>Bay Area</Link>, and{" "}
          <Link href="/austin" style={{ color: "#C9A96E" }}>Austin</Link>, with weekly curated 1:1 introductions across the full national network. Members in{" "}
          <Link href="/la" style={{ color: "#C9A96E" }}>Los Angeles</Link> and{" "}
          <Link href="/seattle" style={{ color: "#C9A96E" }}>Seattle</Link> receive the same weekly introductions as chapters continue to grow. Membership starts at $59/month with zero equity taken at any tier.
        </Body>

        {/* FAQ */}
        <Section>Common questions about equity-free founder networks and Gildre</Section>

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
            Zero Equity. Weekly Introductions. No End Date.
          </p>
          <h2
            className="mt-3 text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Apply for Gildre membership.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Weekly curated 1:1 introductions. Mentors from ClassPass, PayPal, StubHub, and YC. $5M+ in partner perks. In-person chapters in{" "}
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
