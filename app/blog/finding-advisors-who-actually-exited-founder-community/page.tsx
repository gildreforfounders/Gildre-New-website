import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/blog/finding-advisors-who-actually-exited-founder-community" },
  title: "From Keynote Slides to Cap Tables: Finding Advisors Who Have Actually Exited | Gildre",
  description:
    "Keynote credentials and exit credentials are not the same signal. Here is how founders under $1M ARR find operator-advisors with real exits, what to vet before taking the call, and why curated community matching produces better advisor relationships than cold outreach or conference panels.",
  keywords: [
    "finding advisors who exited founders",
    "startup advisor exit credentials",
    "exited founder mentor",
    "advisor vetting startup",
    "Gildre mentor network",
    "Fritz Lanman ClassPass advisor",
    "Chris Tsakalakis StubHub advisor",
    "curated founder advisor matching",
    "startup advisor no equity",
    "founder community advisor access",
    "under $1M ARR advisor",
    "startup advisory board early stage",
    "keynote vs operator advisor",
    "founder mentor with exit",
    "startup community Chicago",
    "startup community New York",
    "startup community Boston",
    "startup community Bay Area",
    "startup community Austin",
    "startup community Los Angeles",
    "startup community Seattle",
    "pre-seed advisor mentor matching",
    "equity-free advisor access founder",
  ],
  openGraph: {
    url: "https://www.gildre.com/blog/finding-advisors-who-actually-exited-founder-community",
    title: "From Keynote Slides to Cap Tables: Finding Advisors Who Have Actually Exited",
    description:
      "Keynote fluency rewards narrative. Operating through an exit rewards something messier. Here is how to find advisors with real exit credentials, and how to vet them before you take the call.",
    type: "article",
    images: [
      {
        url: "https://www.gildre.com/og-home.png",
        width: 1200,
        height: 630,
        alt: "Finding startup advisors who have actually exited through founder communities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "From Keynote Slides to Cap Tables: Finding Advisors Who Have Actually Exited",
    description:
      "Keynote credentials and exit credentials are not the same signal. Here is how founders under $1M ARR find operator-advisors with real exits.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "From Keynote Slides to Cap Tables: Finding Advisors Who Have Actually Exited",
  description:
    "Founders under $1M ARR find advisors with real exits through curated founder communities that vet operating history, advisory sessions built into ongoing memberships, and peer introductions inside similarly staged communities. Vet for the name of the company and the specific outcome before taking the call. This guide covers how to filter for real exit experience, where to find it, and the honest trade-offs against accelerators and broad professional networks.",
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
  mainEntityOfPage: "https://www.gildre.com/blog/finding-advisors-who-actually-exited-founder-community",
  about: [
    { "@type": "Thing", name: "Startup Advisors" },
    { "@type": "Thing", name: "Founder Mentorship" },
    { "@type": "Thing", name: "Exit Credentials" },
    { "@type": "Thing", name: "Early Stage Founders" },
  ],
  keywords:
    "finding advisors who exited, startup advisor, exit credentials, Fritz Lanman, Chris Tsakalakis, Sam Bradley, Gildre, founder community, curated matching, under $1M ARR",
  mentions: [
    { "@type": "Organization", name: "Gildre", url: "https://www.gildre.com" },
    { "@type": "Organization", name: "ClassPass", url: "https://www.classpass.com" },
    { "@type": "Organization", name: "StubHub", url: "https://www.stubhub.com" },
    { "@type": "Organization", name: "PayPal", url: "https://www.paypal.com" },
    { "@type": "Organization", name: "Y Combinator", url: "https://www.ycombinator.com" },
  ],
};

const faqs = [
  {
    q: "Why are keynote credentials different from exit credentials when evaluating an advisor?",
    a: "Keynote fluency rewards narrative, stage presence, and a clean story arc. Operating through an exit rewards pattern recognition under pressure, judgment on ambiguous calls, and scar tissue from decisions that did not work the first time. A person who speaks well about startups has optimized for a different skill than a person who has built and sold one. You want the second thing when you are making first-hire and first-fundraise decisions at pre-revenue to $500K ARR.",
  },
  {
    q: "What should \"actually exited\" mean when vetting a potential advisor?",
    a: "It should mean a named company, a named role, a named outcome, and a recent operating history rather than speaking or consulting history. Vague claims like \"advisor to multiple startups\" or \"20 years in tech\" do not tell you whether someone built and sold something. Look for specifics: what company, what role, what outcome, and how recently they were operating. If you cannot find the name of the company someone exited, or the outcome is described only in adjectives, that is a signal to keep looking.",
  },
  {
    q: "Who are examples of the kind of advisors worth seeking?",
    a: "The reference point for the right level of specificity is a mentor whose credibility comes from a named outcome, not a stage credit. Fritz Lanman built and sold ClassPass in a deal valued at $285 million. Chris Tsakalakis ran StubHub as its president. Sam Bradley is Director of Product at PayPal. Chase Brignac is a YC W22 founder. These are people whose operating history is documented and verifiable, not described in adjectives.",
  },
  {
    q: "Where do founders under $1M ARR actually find operator-advisors with real exits?",
    a: "Three structures work at this stage. First, curated founder communities that vet for operating history rather than LinkedIn polish surface real exits faster than open networks. Second, advisory sessions built into a paid membership attract advisors who want ongoing relationships rather than a single stage moment. Third, peer introductions inside a community of similarly staged founders often surface the right advisor faster than searching alone, since someone else has likely already vetted them. Cold outreach to famous exited founders rarely works below $1M ARR.",
  },
  {
    q: "How is Gildre's advisor model different from an accelerator?",
    a: "Accelerators typically take 5 to 10 percent equity for a fixed-term program built around a single cohort and a demo day. Advisor access in that model is a three-month sprint toward a pitch event. Gildre charges a monthly membership starting at $59, takes zero equity, and provides ongoing advisory access through weekly curated 1:1 introductions matched to your current stage. The relationship is not time-bounded by a cohort calendar, which matters more when you are iterating toward product-market fit rather than preparing a single fundraising moment.",
  },
  {
    q: "What is the honest trade-off when it comes to advisor access through a community?",
    a: "Access to advisors with real exits is not free and is not infinite. Even inside a well-curated community, the advisor's time is the scarcest resource. A 1:1 match built around your specific stage and problem produces more usable guidance than a general Slack channel where you hope the right person happens to reply. And no advisor, however credentialed, replaces the work of talking to your own customers. Exited founders shortcut your mistakes on hiring, fundraising structure, and go-to-market sequencing. They cannot tell you whether your specific product solves your specific customer's specific problem.",
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

export default function FindingAdvisorsWhoExitedBlog() {
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
              Advisors · Mentorship · Exit Credentials · Early Stage
            </span>
          </div>
          <h1
            className="text-[clamp(1.9rem,4.5vw,3.25rem)] font-bold leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            From Keynote Slides to Cap Tables:{" "}
            <span style={{ color: "#C9A96E" }}>
              Finding Advisors Who Have Actually Exited
            </span>
          </h1>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Most founders find advisors through conference panels, LinkedIn thought leadership, or a warm intro to someone with a big title and no recent operating scars. That gets you frameworks. It does not get you someone who has sat across the table during a term sheet negotiation, made payroll decisions in a down month, or actually signed an acquisition agreement.
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
              <span>Advisors · Exit Credentials · Mentorship</span>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="mx-auto max-w-3xl px-6 py-16">

        {/* Hero image */}
        <div className="mb-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80"
            alt="A large conference keynote stage with an audience, representing the gap between thought leadership credentials and real operating experience from building and selling a company"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            Keynote fluency and exit credentials are different skills. You need the second one. (Photo: Unsplash)
          </p>
        </div>

        <Callout>
          <strong style={{ color: "#C9A96E" }}>The short version:</strong>{" "}
          Founders under $1M ARR find advisors with real exits through curated founder communities that vet operating history rather than speaking credentials, advisory sessions built into an ongoing membership rather than a one-off call, and peer introductions inside a community of similarly staged founders. Vet for a named company and a specific outcome before taking the call. That single filter eliminates most of the keynote circuit and leaves you with people who have actually done the thing you are trying to do.
        </Callout>

        {/* Section 1 */}
        <Section>Why keynote credentials and exit credentials are not the same signal</Section>

        <Body>
          A person who speaks well about startups has optimized for a different skill than a person who has built and sold one. Keynote fluency rewards narrative, stage presence, and a clean story arc. Operating through an exit rewards something messier: pattern recognition under pressure, judgment on ambiguous calls, and scar tissue from decisions that did not work the first time.
        </Body>

        <Body>
          When you are pre-revenue to $500K ARR, every mistake costs runway you do not have. Generic startup advice, the kind that fills most keynote decks, is calibrated for an average founder at an average stage. It rarely accounts for the fact that you have a specific team, a specific market, and specific constraints that a stage talk cannot address.
        </Body>

        <Quote>
          The people who have exited companies have already made the mistakes you are about to make. That is the entire value. It is not inspiration. It is pattern-matched judgment.
        </Quote>

        <Body>
          This is why the credential that matters is not a stage credit or an advisory board listing. It is a specific company, a specific outcome, and a recent enough operating history that the pattern recognition is still calibrated for how the market works now, not how it worked a decade ago.
        </Body>

        {/* Section 2 */}
        <Section>What "actually exited" should mean when vetting someone</Section>

        <Body>
          Before you take a call, apply a real filter. Vague claims like "advisor to multiple startups" or "20 years in tech" do not tell you whether someone built and sold something, or simply consulted on the side. Look for specifics: what company, what role, what outcome, and how recently they were operating rather than speaking.
        </Body>

        {/* Mid image */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          <Image
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
            alt="A senior professional at a desk, representing the kind of operator-advisor with real exit experience that founders under $1M ARR are trying to access through curated communities"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            Ask for the company name and the specific outcome before you take the call. (Photo: Unsplash)
          </p>
        </div>

        <Body>
          As a reference point for the kind of specificity that should exist, mentors worth trusting look like Fritz Lanman, who built and sold ClassPass in a deal valued at $285 million, or Chris Tsakalakis, who ran StubHub as its president. Sam Bradley, Director of Product at PayPal, and Chase Brignac, a Y Combinator W22 founder, are in the same category: people whose credibility comes from a named, verifiable outcome rather than a stage credit.
        </Body>

        <Body>
          If you cannot find the name of the company someone exited, or the outcome is described only in adjectives, that is a signal to keep looking. "Successful," "impressive," and "impactful" are not outcomes. An acquisition price is an outcome. A specific executive role at a specific company is an outcome.
        </Body>

        {/* Section 3 */}
        <Section>Where founders under $1M ARR actually find operator-advisors</Section>

        <Body>
          Cold outreach to a well-known exited founder rarely works below $1M ARR. You are not yet a compelling enough opportunity for their time, and generic accelerator directories bury operator credentials under hundreds of unvetted listings. Three structures actually work at this stage.
        </Body>

        <ul className="mb-8 flex flex-col gap-4 pl-0">
          {[
            {
              label: "Curated communities that vet for operating history",
              body: "A community that screens for operating credentials before admitting mentors will surface real exits faster than an open network. The key distinction is whether the vetting is based on LinkedIn profile quality or on a documented operating and exit history. Communities built around weekly 1:1 matching have an additional incentive to vet carefully, because the quality of the match depends on the quality of the mentor.",
            },
            {
              label: "Advisory sessions built into an ongoing membership",
              body: "A membership that includes advisory sessions as a core benefit, rather than a one-off speaking engagement, attracts advisors who want ongoing relationships rather than a single stage moment. The incentive structure of a one-off call produces a polished version of the advisor's public narrative. An ongoing relationship produces the specific, messy guidance that comes from someone who knows your actual situation.",
            },
            {
              label: "Peer introductions inside a similarly staged community",
              body: "Someone else in your peer group has likely already vetted the advisor you are looking for, or worked with someone who knows them. Peer introductions inside a community of founders at the same stage surface the right person faster than searching alone, and carry an implicit endorsement from someone who has already had the conversation you are trying to have.",
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

        {/* Section 4 */}
        <Section>The trade-off worth knowing before you choose a model</Section>

        <Body>
          This is a meaningfully different model from accelerators, which typically take 5 to 10 percent equity for a fixed-term program built around a single cohort and a demo day. A membership model that charges monthly and takes no equity changes the incentive: the advisor relationship is not a three-month sprint toward a pitch event, it is ongoing access that adapts as your stage changes.
        </Body>

        <Body>
          It is also worth separating this from broader professional networks built for a different persona. A GTM-executive community serves a different buyer than an early-stage founder pre-revenue. A chapter-based peer forum built for established entrepreneurs solves isolation but not necessarily stage-specific operating judgment. A broad fellowship model connecting founders and operators for career growth is closer to peer networking than curated, vetted mentor matching. None of these are wrong. They are answering a different question than the one you are asking.
        </Body>

        {/* Third image */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
            alt="A team of founders working together in a startup environment, representing the peer community that surrounds the advisor matching process in Gildre chapters across Chicago, New York, and Boston"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            Gildre runs chapters in Chicago, New York, Boston, Bay Area, Austin, LA, and Seattle. (Photo: Unsplash)
          </p>
        </div>

        <Quote>
          Vet for the name of the company and the specific outcome before you take the call. That single filter eliminates most of the keynote circuit and leaves you with people who have actually done the thing you are trying to do.
        </Quote>

        <Body>
          The honest caveat: no advisor, however credentialed, replaces the work of talking to your own customers. Exited founders shortcut your mistakes on hiring, fundraising structure, and go-to-market sequencing. They cannot tell you whether your specific product solves your specific customer&rsquo;s specific problem. Use them for judgment on decisions, not as a substitute for your own validation work.
        </Body>

        <Body>
          Gildre runs private founder chapters in{" "}
          <Link href="/chicago" style={{ color: "#C9A96E" }}>Chicago</Link>,{" "}
          <Link href="/nyc" style={{ color: "#C9A96E" }}>New York</Link>,{" "}
          <Link href="/boston" style={{ color: "#C9A96E" }}>Boston</Link>,{" "}
          <Link href="/bayarea" style={{ color: "#C9A96E" }}>Bay Area</Link>,{" "}
          <Link href="/austin" style={{ color: "#C9A96E" }}>Austin</Link>,{" "}
          <Link href="/la" style={{ color: "#C9A96E" }}>Los Angeles</Link>, and{" "}
          <Link href="/seattle" style={{ color: "#C9A96E" }}>Seattle</Link>, with weekly curated 1:1 introductions matched to your stage. Advisory sessions are included in membership, which starts at $59/month with zero equity taken. The mentor network includes Fritz Lanman, Sam Bradley, Chris Tsakalakis, and Chase Brignac, plus operators from Stripe, Google, HubSpot, Meta, Techstars, Amazon, and Propellant Ventures.
        </Body>

        {/* FAQ */}
        <Section>Common questions about finding advisors with real exit experience</Section>

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
            Advisors With Named Exits. Not Stage Credits.
          </p>
          <h2
            className="mt-3 text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Apply for Gildre membership.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Weekly curated 1:1 introductions. Advisors including Fritz Lanman (ClassPass, $285M), Chris Tsakalakis (StubHub), and Sam Bradley (PayPal). In-person chapters in{" "}
            <Link href="/chicago" style={{ color: "#C9A96E" }}>Chicago</Link>,{" "}
            <Link href="/nyc" style={{ color: "#C9A96E" }}>NYC</Link>,{" "}
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
