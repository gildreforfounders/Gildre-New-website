import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/blog/solo-founder-test-market-fit-without-fooling-yourself" },
  title: "From Conviction to Confirmation: How Solo Founders Test Market Fit Without Fooling Themselves | Gildre",
  description:
    "Solo founders can't judge their own product objectively — the structure is wrong, not the person. Here's how to test market fit honestly when there's no one in the building to disagree with you.",
  keywords: [
    "solo founder product market fit",
    "how to test market fit",
    "solo founder bias",
    "founder proximity bias",
    "how to validate market fit solo",
    "product market fit signals",
    "solo startup founder",
    "startup market validation",
    "product market fit without team",
    "founder community market fit",
    "solo founder mentorship",
    "market fit behavioral signals",
    "founder isolation bias",
    "startup market validation techniques",
    "when do you have product market fit",
    "solo founder peer group",
    "startup founder community",
    "Gildre founder community",
    "stage-matched founder mentorship",
    "exited founder mentor",
  ],
  openGraph: {
    url: "https://www.gildre.com/blog/solo-founder-test-market-fit-without-fooling-yourself",
    title: "From Conviction to Confirmation: How Solo Founders Test Market Fit Without Fooling Themselves",
    description:
      "Solo founders can't judge their own product objectively. Here's how to manufacture honest signal when there's no one in the room to disagree with you.",
    type: "article",
    images: [
      {
        url: "https://www.gildre.com/images/community/coaching.webp",
        width: 1200,
        height: 675,
        alt: "Solo founder reviewing product data, testing market fit without the blind spots that come with building alone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "From Conviction to Confirmation: How Solo Founders Test Market Fit Without Fooling Themselves",
    description:
      "Solo founders can't judge their own product neutrally. Here are the behavioral signals that matter and how to manufacture honest friction when you're building alone.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "From Conviction to Confirmation: How Solo Founders Test Market Fit Without Fooling Themselves",
  description:
    "Solo founders determine real market fit by tracking behavior, not opinion: unprompted retention, referrals, full-price payment, and deepening usage over time. Because no one in the building provides friction, the fix is deliberate exposure to outside operators and mentors willing to challenge the founder's read of their own data.",
  image: "https://www.gildre.com/images/community/coaching.webp",
  datePublished: "2026-10-16",
  dateModified: "2026-10-16",
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
  mainEntityOfPage: "https://www.gildre.com/blog/solo-founder-test-market-fit-without-fooling-yourself",
  about: [
    { "@type": "Thing", name: "Product-Market Fit" },
    { "@type": "Thing", name: "Solo Founders" },
    { "@type": "Thing", name: "Startup Validation" },
    { "@type": "Thing", name: "Founder Mentorship" },
    { "@type": "Thing", name: "Market Research" },
  ],
  keywords:
    "solo founder, product market fit, market validation, founder bias, proximity bias, behavioral signals, startup mentorship, Gildre",
  mentions: [
    { "@type": "Organization", name: "Gildre", url: "https://www.gildre.com" },
  ],
};

const faqs = [
  {
    q: "Why is it so hard for solo founders to judge their own product objectively?",
    a: "Solo founders designed the solution, pitched the vision, and stand to lose the most if the answer turns out to be no. That combination makes neutral judgment almost impossible. There's no one in the building to say 'that's optimism talking, not data.' This isn't a character flaw — it's structural. Teams catch blind spots through disagreement. A founder working alone has to manufacture that friction on purpose, by deliberately bringing in outside perspective, rather than wait for it to show up on its own.",
  },
  {
    q: "What are the clearest signals of real product-market fit?",
    a: "Real fit shows up as behavior, not sentiment. Four signals matter more than anything a customer will ever say out loud: retention that holds without chasing (people come back on their own, not because you emailed them); unprompted referrals (someone tells a peer without being asked); willingness to pay full price with no discount negotiation; and usage that deepens over time instead of flattening out after the first session. If none of those show up after a reasonable sample of users, the signal is weak — no matter how many compliments the product has collected.",
  },
  {
    q: "Why is customer praise unreliable as a signal of product-market fit?",
    a: "Compliments are cheap. Conflict is expensive. Most people take the cheap option. A polite 'this is cool' in a demo costs the other person nothing and tells you almost nothing. A credit card number, a renewal decision, a referral that puts someone's own reputation on the line — those cost something. That's why they tell you almost everything. Founders who lean on verbal feedback are optimizing for positive sentiment, a metric with no real connection to the one that actually matters: sustained, paying usage.",
  },
  {
    q: "How do you tell the difference between 'a few people love it' and 'there's a market'?",
    a: "A few people loving something is a sample size problem. A market exists when that love replicates across people who don't know each other and didn't get the product as a personal favor. The test: can you find paying users outside your existing network, acquired through a repeatable channel, who behave like your best early adopters? If every happy user traces back to a warm introduction from your own circle, you've validated that your friends like you. You have not validated a market.",
  },
  {
    q: "What questions should a solo founder ask instead of 'do you like this?'",
    a: "Swap opinion questions for behavior and consequence questions. Ask what the person was doing before your product existed, and what they're doing now. Ask what it would cost them — in time or money — to go back to the old way. Ask whether they've already told anyone else about it, unprompted. You're looking for evidence of a switch already made, not a hypothetical switch someone is being polite enough to agree to for later.",
  },
  {
    q: "Is it possible to have traction and still not have product-market fit?",
    a: "Yes, and it's one of the more expensive mistakes a solo founder can make. Traction can come from novelty, a founder's personal network, one well-timed launch post, or paid acquisition masking weak organic pull. None of that is evidence of fit. The real test is what happens after the spike fades: does usage settle into a stable, repeat-engaged base, or decay back toward zero? Fit is whatever's left after the initial curiosity wears off.",
  },
  {
    q: "When should a founder bring in outside perspective on their own read of the data?",
    a: "As early as possible — before you're emotionally committed to one interpretation. Wait until after a big decision, a pivot, a funding round, or a product rebuild, and outside input arrives too late to change anything. The better model is routine exposure to people who've built and sold companies before, so pattern-matching happens continuously instead of in a crisis. Founders who've exited companies have usually seen the gap between 'my users are nice to me' and 'my users won't churn' more than once, across more than one business.",
  },
  {
    q: "What's a practical way to stress-test market fit without a full team?",
    a: "Pressure-test the thesis against people who have no stake in your success and no reason to spare your feelings: mentors who've already built something in an adjacent space, peer founders at a similar stage working comparable problems, or a structured group built for exactly this purpose. The value isn't encouragement — it's disagreement delivered early enough to actually act on. Left entirely alone, a founder will default to reading ambiguous signals in the most favorable light, because there's no counterweight in the room. The fix isn't more data. It's more people willing to read the same data differently, and say so out loud.",
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

export default function SoloFounderMarketFitBlog() {
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

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
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
              Solo Founders · Market Fit · Validation · Mentorship
            </span>
          </div>
          <h1
            className="text-[clamp(1.9rem,4.5vw,3.25rem)] font-bold leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            From Conviction to Confirmation:{" "}
            <span style={{ color: "#C9A96E" }}>How Solo Founders Test Market Fit</span>{" "}
            Without Fooling Themselves
          </h1>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            The solo founder designed the solution, pitched the vision, and stands to lose the most if the answer turns out to be no. That combination makes neutral judgment almost impossible. There&rsquo;s no one in the building to say &ldquo;that&rsquo;s optimism talking, not data.&rdquo; Here&rsquo;s how to manufacture the friction you&rsquo;re missing.
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
              <span>Market Fit · Solo Founder · Validation</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────────────────────────── */}
      <article className="mx-auto max-w-3xl px-6 py-16">

        {/* Hero image */}
        <div className="mb-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1200&q=80"
            alt="Solo founder working alone at a laptop, the exact situation that makes objective product judgment structurally difficult"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            Building alone is the setup. Fooling yourself is the risk. (Photo: Unsplash)
          </p>
        </div>

        <Callout>
          <strong style={{ color: "#C9A96E" }}>Direct answer:</strong> Solo founders determine real market fit by tracking behavior, not opinion: unprompted retention, referrals, full-price payment, and deepening usage over time, rather than verbal compliments or traction borrowed from a founder&rsquo;s personal network. Because solo founders lack built-in disagreement, the most reliable fix is deliberate exposure to outside operators and mentors who&rsquo;ve already seen the gap between polite feedback and real fit, and who are willing to challenge the founder&rsquo;s read of their own data.
        </Callout>

        {/* ── Section 1 ── */}
        <Section>Why solo founders can&rsquo;t judge their own product objectively</Section>

        <Body>
          This isn&rsquo;t a character flaw. It&rsquo;s structural. Teams catch blind spots through disagreement. A co-founder says &ldquo;we&rsquo;re reading this wrong.&rdquo; An engineer points out that users are not using the feature they keep asking for. A sales rep notices that objections cluster around a problem the product doesn&rsquo;t actually solve. None of that happens when you&rsquo;re the only one in the room.
        </Body>

        <Body>
          A solo founder designed the solution, pitched the vision, spent months building it, and stands to lose the most if the honest answer turns out to be &ldquo;not yet.&rdquo; That combination makes neutral judgment almost impossible, not because the founder is deluded, but because there is no friction. Friction is how you find the truth in a signal. Without it, every data point gets read in the most favorable light available.
        </Body>

        <Quote>
          Teams catch blind spots through disagreement. A founder working alone has to manufacture that friction on purpose, by deliberately bringing in outside perspective, rather than wait for it to show up on its own.
        </Quote>

        <Body>
          The fix isn&rsquo;t better introspection. It&rsquo;s a different input: people with no stake in your success and no reason to spare your feelings, who have seen enough product cycles to recognize the gap between a polite early customer and a retained one.
        </Body>

        {/* ── Section 2 ── */}
        <Section>Behavior is the signal. Sentiment is noise.</Section>

        <Body>
          Most founders track the wrong thing. Compliments are cheap. Conflict is expensive. Most people take the cheap option in a demo or a feedback call, which means a positive qualitative session is nearly useless as a market signal. Four behavioral signals matter more than anything a customer will ever say out loud:
        </Body>

        <ul className="mb-8 flex flex-col gap-4 pl-0">
          {[
            {
              label: "Retention without chasing",
              body: "People come back on their own, not because you emailed them. Unprompted return behavior is one of the strongest signals in early-stage validation. If you have to engineer every re-engagement, you don't have retention, you have a drip sequence.",
            },
            {
              label: "Unprompted referrals",
              body: "Someone tells a peer without being asked to. A referral puts the referring person's reputation on the line. People only do that for products that solved a real problem. If nobody is referring without being asked, that tells you something.",
            },
            {
              label: "Full-price willingness to pay",
              body: "A credit card number with no discount negotiation. The moment a customer pushes back on price, you learn how replaceable they think you are. Willingness to pay at your stated price is evidence that you've solved something they couldn't route around.",
            },
            {
              label: "Usage that deepens over time",
              body: "People who find real fit use more features, not fewer, as they become familiar with the product. Flat or declining usage after the first session isn't a product problem — it's a fit problem.",
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

        <Body>
          If none of those show up after a reasonable sample of users, the signal is weak, no matter how many compliments the product has collected along the way.
        </Body>

        {/* Mid-article image */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
            alt="Product analytics dashboard showing user behavior data, the kind of signals that reveal real product-market fit"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            Behavior in the data is more honest than anything in the interview. (Photo: Unsplash)
          </p>
        </div>

        {/* ── Section 3 ── */}
        <Section>The difference between &ldquo;a few people love it&rdquo; and &ldquo;there&rsquo;s a market&rdquo;</Section>

        <Body>
          A few people loving something is a sample size problem. It&rsquo;s also often a network problem. If every happy user traces back to a warm introduction from your own circle, you&rsquo;ve validated that your friends like you. You have not validated a market.
        </Body>

        <Body>
          A market exists when that love replicates across people who don&rsquo;t know each other and didn&rsquo;t get the product as a personal favor. The test: can you find paying users outside your existing network, acquired through a repeatable channel, who behave like your best early adopters? If the answer is yes, you have something. If every warm user required a warm intro, the distribution problem is unsolved and the love is contained.
        </Body>

        <Body>
          This is where the questions you ask in customer conversations matter. The wrong question is &ldquo;do you like this?&rdquo; The right ones are: what were you doing before this existed? What would it cost you in time or money to go back to the old way? Have you already told anyone else about it, without being asked?
        </Body>

        <Quote>
          You&rsquo;re looking for evidence of a switch already made, not a hypothetical switch someone is being polite enough to agree to for later.
        </Quote>

        {/* ── Section 4 ── */}
        <Section>Traction is not fit. This distinction is expensive to miss.</Section>

        <Body>
          A solo founder can generate real traction from novelty, a well-timed launch post, paid acquisition, or the founder&rsquo;s own network working overtime. None of that is evidence of fit. It&rsquo;s evidence of a short-term spike. The real test is what happens after the spike fades.
        </Body>

        <Body>
          Does usage settle into a stable, repeat-engaged base? Or does it decay back toward zero while you spend more on re-acquisition? Fit is whatever&rsquo;s left after the initial curiosity wears off. If what&rsquo;s left is a small set of power users who came through your warm network and still need regular prompting, that&rsquo;s a lead, not a market.
        </Body>

        <Body>
          The path back from a misread is long. A founder who mistakes launch traction for product-market fit often rebuilds features for months around the behaviors of early adopters who are not representative of a replicable customer. By the time the real signal surface, significant runway is gone.
        </Body>

        {/* ── Section 5 ── */}
        <Section>The practical fix: outside perspective before it&rsquo;s too late to act on it</Section>

        <Body>
          Outside perspective is most valuable before you&rsquo;re emotionally committed to one interpretation of the data. Wait until after a big decision, a pivot, a product rebuild, and input arrives too late to change anything. The better model is routine exposure to people who&rsquo;ve built and sold companies before, so pattern recognition happens continuously instead of in a crisis.
        </Body>

        <Body>
          Founders who&rsquo;ve exited companies have usually seen the gap between &ldquo;my users are nice to me&rdquo; and &ldquo;my users won&rsquo;t churn&rdquo; more than once, across more than one business. That pattern recognition is hard to replicate alone, no matter how long a solo founder stares at their own dashboard. The value isn&rsquo;t encouragement. It&rsquo;s disagreement delivered early enough to actually act on.
        </Body>

        {/* Third image */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          <Image
            src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1200&q=80"
            alt="Founder having a 1:1 advisory session with a mentor, the kind of outside perspective that catches what solo founders miss"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            The counterweight you need isn&rsquo;t inside the building. (Photo: Unsplash)
          </p>
        </div>

        <Body>
          The specific people worth seeking out: mentors who&rsquo;ve already built something in an adjacent space, peer founders at a similar stage working comparable problems, and structured peer groups where the explicit purpose is honest feedback, not mutual encouragement. The last one is underrated. Left entirely alone, a founder will default to reading ambiguous signals in the most favorable light, because there&rsquo;s no counterweight in the room.
        </Body>

        <Body>
          <Link href="/founder-community" style={{ color: "#C9A96E" }}>Gildre</Link> is built around this specific problem. Weekly curated 1:1 introductions match founders by stage and problem, not by geography. Monthly advisory sessions with Managing Partners who are exited founders bring the pattern recognition that&rsquo;s otherwise only available through a personal network or an accelerator. The difference between &ldquo;this feels like it&rsquo;s working&rdquo; and &ldquo;here&rsquo;s what working actually looks like at your stage&rdquo; is often one conversation.
        </Body>

        {/* ── FAQ ── */}
        <Section>Common questions about solo founder market fit</Section>

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

        {/* ── CTA ── */}
        <div
          className="mt-16 rounded-2xl px-8 py-10 text-center"
          style={{ backgroundColor: "rgba(201,169,110,0.06)", border: "1px solid rgba(201,169,110,0.2)" }}
        >
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            Built for Active Founders
          </p>
          <h2
            className="mt-3 text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Find the people who will tell you the truth.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Gildre matches solo founders with exited-operator mentors and stage-matched peers who have already navigated the gap between polite feedback and real fit. Weekly 1:1 introductions, no equity taken, from{" "}
            <Link href="/nyc" style={{ color: "#C9A96E" }}>NYC</Link> to{" "}
            <Link href="/bayarea" style={{ color: "#C9A96E" }}>Bay Area</Link> to{" "}
            <Link href="/boston" style={{ color: "#C9A96E" }}>Boston</Link> and beyond.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
              href="/founder-community"
              className="text-sm font-semibold transition-opacity hover:opacity-70"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Learn how Gildre works →
            </Link>
          </div>
        </div>

      </article>

      {/* ── Footer ── */}
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
