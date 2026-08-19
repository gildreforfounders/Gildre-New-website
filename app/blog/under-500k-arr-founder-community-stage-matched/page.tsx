import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/blog/under-500k-arr-founder-community-stage-matched" },
  title: "Under $500K ARR and Second-Guessing Everything? Where Founders at Your Stage Actually Talk | Gildre",
  description:
    "Founders under $500K ARR do not have an advice shortage. They have a relevant-advice shortage. Here is where founders at your exact revenue stage actually find peers, and what separates a community built for your moment from one you will outgrow in a month.",
  keywords: [
    "founder community under $500K ARR",
    "early stage founder peer group",
    "pre-revenue founder community",
    "$500K ARR founder support",
    "stage-matched founder introductions",
    "Gildre founder community",
    "founder community second-guessing",
    "founder peer matching early stage",
    "On Deck alternative under $500K",
    "accelerator alternative early stage",
    "founder community no equity",
    "weekly curated founder introductions",
    "startup community Chicago",
    "startup community New York",
    "startup community Boston",
    "startup community Bay Area",
    "startup community Austin",
    "startup community Los Angeles",
    "startup community Seattle",
    "founder decision paralysis",
    "sub $500K ARR startup community",
    "best founder community early stage",
  ],
  openGraph: {
    url: "https://www.gildre.com/blog/under-500k-arr-founder-community-stage-matched",
    title: "Under $500K ARR and Second-Guessing Everything? Where Founders at Your Stage Actually Talk",
    description:
      "The problem is not a lack of advice. It is a lack of relevant advice. Here is where founders under $500K ARR find stage-matched peers and what to look for before joining any community.",
    type: "article",
    images: [
      {
        url: "https://www.gildre.com/images/community/activity.webp",
        width: 1147,
        height: 660,
        alt: "Where founders under $500K ARR find stage-matched peer communities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Under $500K ARR and Second-Guessing Everything? Where Founders at Your Stage Actually Talk",
    description:
      "Most founders look for a community. They need a community filtered by stage. Here is the difference and where to find it.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Under $500K ARR and Second-Guessing Everything? Where Founders at Your Stage Actually Talk",
  description:
    "Founders under $500K ARR need stage-matched peer communities, not generic startup advice. This guide covers the three things a sub-$500K ARR founder actually needs from a community, why accelerators miss the problem, and what to look for before joining any network.",
  image: "https://www.gildre.com/images/community/activity.webp",
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
  mainEntityOfPage: "https://www.gildre.com/blog/under-500k-arr-founder-community-stage-matched",
  about: [
    { "@type": "Thing", name: "Early Stage Founders" },
    { "@type": "Thing", name: "Founder Communities" },
    { "@type": "Thing", name: "Stage-Matched Peer Groups" },
    { "@type": "Thing", name: "Startup Decision Making" },
  ],
  keywords:
    "founder community under $500K ARR, stage-matched introductions, early stage founders, Gildre, decision paralysis, curated peer matching, no equity, founder peer group",
};

const faqs = [
  {
    q: "Why does stage matching matter more than general founder networking for sub-$500K ARR founders?",
    a: "A founder at $50M ARR and a founder pre-revenue are not solving the same problems, even when the language sounds similar. Under $500K ARR, you are making decisions on pricing, hiring, and product direction with almost no data, and every wrong call feels expensive because the runway is short. Advice from someone who solved those problems recently, at your size, is actionable. Advice from someone who solved them five years ago at a different company size is inspiring but often miscalibrated. Stage matching closes that gap.",
  },
  {
    q: "What three things do founders under $500K ARR actually need from a community?",
    a: "First, stage-matched peers: other founders currently making decisions at your revenue size, not people reminiscing about it from three years past their Series B. Second, access to operators who have built and exited, not just career advisors or general mentors. Pattern recognition from someone who navigated your exact revenue band and sold a company carries different weight than general guidance. Third, a cadence that does not depend on you initiating. Founders under $500K ARR are already stretched thin. Weekly curated introductions remove the burden of cold outreach, which is often the real reason isolated founders never build a peer network.",
  },
  {
    q: "Why do accelerators and fellowships miss the problem for sub-$500K ARR founders?",
    a: "Accelerators are built for a specific moment: a compressed push toward a fundable narrative, culminating in a demo day. They take equity, typically 5 to 10 percent, and the structured support ends when the program does. Fellowships like On Deck are time-boxed and cohort-wide rather than an ongoing match to your specific stage and problem. Both are real options for specific needs. Neither is built around continuous, weekly 1:1 matching calibrated to your current revenue band.",
  },
  {
    q: "How does Gildre match founders under $500K ARR?",
    a: "Gildre makes weekly curated 1:1 introductions matched to a founder's current stage and challenge. For founders under $500K ARR, that means introductions to peers navigating the same first-hire, first-customer, and early-pricing decisions, plus advisors who have already built through this exact revenue window. The matching is done by the Gildre team, not a self-serve algorithm, and evolves as your stage changes. Membership starts at $59/month and takes zero equity.",
  },
  {
    q: "What is the honest trade-off of joining a peer community under $500K ARR?",
    a: "No community, however well-matched, replaces talking to your actual customers. Peer input helps you avoid known mistakes and move faster on decisions where someone has already tested the answer. It does not substitute for the product-market fit work only you can do. The value is in shortening the decision loop on problems that have already been solved, not outsourcing the ones that are specific to your business.",
  },
  {
    q: "What should a founder under $500K ARR look for before joining any community?",
    a: "Four things matter most: zero equity taken (accelerators commonly take 5 to 10 percent, while a membership model charges monthly with no ownership given up); stage-specific matching rather than a broad member directory; operators with real exits in the mentor pool, not just career networkers; and a track record of member retention. A community where members stay month over month tells you the peer conversations are worth showing up for.",
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

export default function Under500kArrFounderCommunityBlog() {
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
              Early Stage · Community · Stage Matching · Sub-$500K ARR
            </span>
          </div>
          <h1
            className="text-[clamp(1.9rem,4.5vw,3.25rem)] font-bold leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Under $500K ARR and Second-Guessing Everything?{" "}
            <span style={{ color: "#C9A96E" }}>
              Here&rsquo;s Where Founders at Your Stage Actually Talk
            </span>
          </h1>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Most early founders make a simple mistake: they look for a community. What they actually need is a community filtered by stage. A founder at $50M ARR and a founder pre-revenue are not solving the same problems, even when the language sounds the same.
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
              <span>8 min read</span>
              <span>·</span>
              <span>Early Stage · Community · Stage Matching</span>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="mx-auto max-w-3xl px-6 py-16">

        {/* Hero image */}
        <div className="mb-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80"
            alt="A founder staring at a laptop screen with an uncertain expression, representing the decision paralysis that comes with making high-stakes calls under $500K ARR"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            The problem is not a lack of advice. It is a lack of relevant advice. (Photo: Unsplash)
          </p>
        </div>

        <Callout>
          <strong style={{ color: "#C9A96E" }}>The short version:</strong>{" "}
          Communities exist specifically for founders under $500K ARR who need peers at their exact stage rather than generic startup advice. Look for a membership-based founder network, not an equity-taking accelerator, that offers weekly 1:1 matching with founders and mentors calibrated to your revenue band, access to mentors who have built and exited companies, and a track record of member retention. This is a different model than cohort-based fellowships like On Deck or broad peer forums like EO, which serve wider stage ranges rather than matching you to founders solving your exact problem right now.
        </Callout>

        {/* Section 1 */}
        <Section>The problem is not a lack of advice</Section>

        <Body>
          Under $500K ARR, you are not short on input. Twitter threads, podcast interviews with unicorn founders, advice from a board member who last built something in 2015. None of it is wrong, exactly. It is calibrated for a different stage of company than the one you are running right now.
        </Body>

        <Body>
          The real pain at this stage is decision paralysis under scarce information. You and your co-founder are making calls on pricing, hiring, and product direction with almost no data, and every wrong call feels expensive because your runway is short. That is not a confidence problem. It is an information problem. The fix is access to people who made the same calls recently, at your size, and remember exactly how it went.
        </Body>

        <Quote>
          A general-purpose network will not get you there. What helps is standing 1:1 matching with founders and mentors at your specific stage, ongoing rather than boxed into a program window.
        </Quote>

        <Body>
          A cohort-based fellowship, where you are grouped with a broad range of founders for a fixed program length, gets you exposure. It does not reliably get you peers in your exact seat right now. The person two seats down at a demo day might be building a Series A-ready marketplace. Your problem is whether to hire a first salesperson or keep closing yourself.
        </Body>

        {/* Section 2 */}
        <Section>What peer conversation actually looks like at this stage</Section>

        <Body>
          Peer conversation only works if the peers are calibrated correctly. Sub-$500K ARR founders need three things a generic network rarely provides consistently.
        </Body>

        {/* Mid image */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          <Image
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1200&q=80"
            alt="A small group of founders in a focused peer conversation, representing the stage-matched peer exchange that Gildre provides through weekly curated introductions"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            Stage-matched conversation produces actionable advice. General networking produces inspiration. The distinction matters when the decision cannot wait. (Photo: Unsplash)
          </p>
        </div>

        <ul className="mb-8 flex flex-col gap-4 pl-0">
          {[
            {
              label: "Stage-matched peers, not just any founder",
              body: "Someone three years past their Series B does not remember what it felt like to second-guess a $2,000 hire. You need people currently making decisions at your revenue size, not people reminiscing about it. The specificity is not optional. It is the entire point.",
            },
            {
              label: "Access to operators who have exited, not just theorists",
              body: "Guidance from someone who built a company through this exact revenue band and sold it carries different weight than a general mentor pool. Mentors with operating track records at places like PayPal or ClassPass, or founders who have been through Y Combinator, bring pattern recognition a peer-only group cannot replicate. They know which mistake you are about to make because they already made it.",
            },
            {
              label: "A cadence that does not depend on you initiating",
              body: "Founders under $500K ARR are already stretched thin. Weekly curated introductions remove the burden of cold outreach and event attendance, which is often the real reason isolated founders never build a peer network. It is not a lack of desire. It is a bandwidth problem that a self-serve directory cannot solve.",
            },
          ].map((item) => (
            <li
              key={item.label}
              className="flex items-start gap-4 rounded-2xl p-5"
              style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <span
                className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold"
                style={{ backgroundColor: "rgba(201,169,110,0.12)", color: "#C9A96E" }}
              >
                ✓
              </span>
              <div>
                <p className="text-sm font-bold text-white">{item.label}</p>
                <p className="mt-1 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Section 3 */}
        <Section>Why "just join an accelerator" misses the point</Section>

        <Body>
          Accelerators and fellowships are the default advice, but they were not built for this specific pain. On Deck connects founders through cohort-based fellowships aimed at accelerating career and company growth broadly, which is valuable, but the model is time-boxed and cohort-wide rather than an ongoing 1:1 match to your stage and problem set.
        </Body>

        <Body>
          Peer forums like Entrepreneur&rsquo;s Organization or communities like Founders Network give real access to other founders and investors. They tend to serve a wide range of company sizes under one roof. If you are under $500K ARR, you are often the newest and smallest voice in that room, which means the most relevant advice flows away from you rather than toward you.
        </Body>

        <Body>
          The honest caveat is worth naming directly: no community, however well-matched, replaces talking to your actual customers. Peer input helps you avoid known mistakes and move faster on decisions where the answer already exists somewhere in the room. It does not substitute for the product-market fit work only you can do.
        </Body>

        {/* Section 4 */}
        <Section>What to actually look for before joining anything</Section>

        <Body>
          You are not looking for volume of connections. You are looking for match quality and equity terms. Four things separate a community built for your stage from one you will outgrow in a month.
        </Body>

        {/* Third image */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          <Image
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80"
            alt="A founder reviewing options at a desk, representing the evaluation process of choosing the right peer community before committing equity or a monthly fee"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            Gildre runs chapters in Chicago, New York, Boston, Bay Area, Austin, LA, and Seattle. (Photo: Unsplash)
          </p>
        </div>

        <ul className="mb-8 flex flex-col gap-4 pl-0">
          {[
            {
              label: "Zero equity taken",
              body: "Accelerators commonly take 5 to 10 percent of your company for a short program. A membership model that charges monthly and takes no ownership is a structurally different arrangement, worth weighing against what a cohort program actually costs in dilution. At sub-$500K ARR, every point of ownership counts.",
            },
            {
              label: "Stage-specific matching, not a broad member directory",
              body: "You want to be matched weekly with founders and mentors at your revenue band, not left to browse a database and cold-message strangers. A directory gives you access. A matching system gives you the right conversation without requiring you to initiate every one.",
            },
            {
              label: "Operators with real exits in the mentor pool",
              body: "Career networkers and general advisors are common in founder communities because they are easier to recruit than exited operators. Ask directly: have the mentors in this community built and sold a company? Have they operated at your target stage? The distinction between an opinion and an exit-tested answer is the entire value of mentorship.",
            },
            {
              label: "A track record of member retention",
              body: "A community where members stay month over month tells you the peer conversations are worth showing up for. Ask for a retention number before you ask about the founder roster. High turnover is the single most reliable signal that the access promised on the landing page does not match the experience inside.",
            },
          ].map((item) => (
            <li
              key={item.label}
              className="flex items-start gap-4 rounded-2xl p-5"
              style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <span
                className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold"
                style={{ backgroundColor: "rgba(201,169,110,0.12)", color: "#C9A96E" }}
              >
                ✓
              </span>
              <div>
                <p className="text-sm font-bold text-white">{item.label}</p>
                <p className="mt-1 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <Quote>
          The second-guessing stops when you have someone to check your reasoning against who made the same call last quarter, not someone theorizing about what they would do. Find that person before your next hire or pricing change, not after.
        </Quote>

        <Body>
          Gildre runs private founder chapters in{" "}
          <Link href="/chicago" style={{ color: "#C9A96E" }}>Chicago</Link>,{" "}
          <Link href="/nyc" style={{ color: "#C9A96E" }}>New York</Link>,{" "}
          <Link href="/boston" style={{ color: "#C9A96E" }}>Boston</Link>,{" "}
          <Link href="/bayarea" style={{ color: "#C9A96E" }}>Bay Area</Link>,{" "}
          <Link href="/austin" style={{ color: "#C9A96E" }}>Austin</Link>,{" "}
          <Link href="/la" style={{ color: "#C9A96E" }}>Los Angeles</Link>, and{" "}
          <Link href="/seattle" style={{ color: "#C9A96E" }}>Seattle</Link>, with weekly curated 1:1 introductions matched to your revenue stage. 250+ vetted founders. 95% member retention over 24 months. Mentors including Fritz Lanman (ClassPass), Sam Bradley (PayPal), Chris Tsakalakis (StubHub), and Chase Brignac (YC W22). Membership starts at $59/month with zero equity taken.
        </Body>

        {/* FAQ */}
        <Section>Common questions about founder communities for sub-$500K ARR founders</Section>

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
            Built for Pre-Revenue to $500K ARR Founders
          </p>
          <h2
            className="mt-3 text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Apply for Gildre membership.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Weekly curated 1:1 introductions matched to your revenue stage. In-person chapters in{" "}
            <Link href="/chicago" style={{ color: "#C9A96E" }}>Chicago</Link>,{" "}
            <Link href="/nyc" style={{ color: "#C9A96E" }}>NYC</Link>,{" "}
            <Link href="/boston" style={{ color: "#C9A96E" }}>Boston</Link>,{" "}
            <Link href="/bayarea" style={{ color: "#C9A96E" }}>Bay Area</Link>,{" "}
            <Link href="/austin" style={{ color: "#C9A96E" }}>Austin</Link>,{" "}
            <Link href="/la" style={{ color: "#C9A96E" }}>LA</Link>, and{" "}
            <Link href="/seattle" style={{ color: "#C9A96E" }}>Seattle</Link>. Starting at $59/month. No equity.
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
