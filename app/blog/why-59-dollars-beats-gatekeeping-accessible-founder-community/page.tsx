import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/blog/why-59-dollars-beats-gatekeeping-accessible-founder-community" },
  title: "Why $59 Beats Gatekeeping: The Real Math Behind Accessible Founder Communities | Gildre",
  description:
    "Premium founder communities charge $7,000 to $8,000 a year and demand $500K ARR just to get in the door. Here is why that model fails the founders who need support most, and why radical accessibility at $59/month produces better outcomes, higher retention, and stronger communities.",
  keywords: [
    "founder community pricing",
    "accessible founder community",
    "why Gildre costs 59 dollars",
    "founder community gatekeeping",
    "affordable founder community",
    "founder community vs premium",
    "Gildre 59 per month",
    "founder community accessibility",
    "early stage founder community cost",
    "founder community ROI",
    "Gildre founder community",
    "Hampton vs Gildre pricing",
    "founder community messy middle",
    "startup community low cost",
    "founder community commitment",
    "startup community Chicago",
    "startup community New York",
    "startup community Boston",
    "startup community Bay Area",
    "startup community Austin",
    "startup community Los Angeles",
    "startup community Seattle",
    "founder community value",
    "affordable startup community",
  ],
  openGraph: {
    url: "https://www.gildre.com/blog/why-59-dollars-beats-gatekeeping-accessible-founder-community",
    title: "Why $59 Beats Gatekeeping: The Real Math Behind Accessible Founder Communities",
    description:
      "High price equals high value. That is what the premium communities say. Here is why it is the most expensive lie in the founder world, and what radical accessibility actually produces.",
    type: "article",
    images: [
      {
        url: "https://www.gildre.com/images/community/partnerships.webp",
        width: 1414,
        height: 888,
        alt: "Why Gildre charges 59 dollars a month instead of thousands, and why accessible pricing produces better founder outcomes than premium gatekeeping",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why $59 Beats Gatekeeping: The Real Math Behind Accessible Founder Communities",
    description:
      "Premium communities charge $8,000 a year and require $500K ARR to get in. Here is why that model fails the founders who need it most.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why $59 Beats Gatekeeping: The Real Math Behind Accessible Founder Communities",
  description:
    "A first-person argument for radical accessibility in founder communities: why the premium gatekeeping model fails early-stage founders, what the $59/month Gildre model actually produces in outcomes and retention, and why frugality is a feature of high-caliber early-stage founders, not a bug.",
  image: "https://www.gildre.com/images/community/partnerships.webp",
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
  mainEntityOfPage: "https://www.gildre.com/blog/why-59-dollars-beats-gatekeeping-accessible-founder-community",
  about: [
    { "@type": "Thing", name: "Founder Community Pricing" },
    { "@type": "Thing", name: "Accessible Founder Community" },
    { "@type": "Thing", name: "Gildre" },
    { "@type": "Thing", name: "Startup Community Value" },
  ],
  keywords:
    "founder community pricing, Gildre 59 per month, accessible founder community, premium gatekeeping, frugality founders, messy middle, tiered pricing, founder outcomes",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why does Gildre charge $59/month instead of thousands like premium communities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because the founders who need real community most are often the ones who can least afford $7,000 to $8,000 a year. Premium communities demand $500K to $1M ARR just to get in the door. That serves the already-arrived, not the founders in the messy middle who are still figuring out product-market fit on limited runway. Gildre bets that accessibility at scale produces better founder outcomes than exclusivity. The $59/month price is a real investment for early-stage founders, not a trivial one, which means members who join are serious. They just are not wealthy yet.",
      },
    },
    {
      "@type": "Question",
      name: "Does a lower price mean lower quality or commitment from members?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Founders who pay $59/month show up. Some dedicate an hour a month; others show up to roundtables, mindset workshops, and live events multiple times a week. The average Gildre member gets ROI from a single event, sometimes more value than communities charging $400 to $500 a month deliver in total. Frugality is not a character flaw. Jeff Bezos was famously frugal. The best early-stage founders know every dollar matters before product-market fit, which makes them more intentional with where they spend, not less committed.",
      },
    },
    {
      "@type": "Question",
      name: "What real outcomes have Gildre members achieved at the $59/month price point?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Members have raised capital, hit revenue milestones, and launched products after getting matched to the right mentors through Gildre. Founders like Arihantje Kumar with Silo and Krishman Dosapati with Clockout raised capital after joining because they finally got access to the right operators and resources. The feedback from members who previously paid $300 to $500 a month for other communities is consistent: they get more real value from a single Gildre event than from months in a premium program.",
      },
    },
    {
      "@type": "Question",
      name: "How does Gildre plan to grow beyond the $59/month tier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Through tiered pricing built around a founder's growth stage. The $59/month tier is the entry point: accessible, high-value, designed for founders in the messy middle. As members grow, Gildre offers upgrade paths with deeper features, advanced masterminds, and hands-on advisory access. The goal is not to upsell people out of a community they love. It is to offer a graduation path that grows with them, so founders who were there from the beginning stay for years rather than churning when they outgrow the entry tier.",
      },
    },
    {
      "@type": "Question",
      name: "What is the five-year prediction for accessible founder communities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In five years, accessibility will not be a differentiator. It will be the baseline. AI tools, virtual communities, and low-cost resources will be available to everyone. What will not be replaceable is access to the right people: operators, mentors, and peers who accelerate the climb from seed to Series A. The communities that win long-term are not the ones with the highest price tags. They are the ones that were there for the right founders before anyone else believed in them.",
      },
    },
  ],
};

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="mt-12 mb-4 text-xl font-bold text-white sm:text-2xl"
      style={{ fontFamily: "var(--font-fraunces)" }}
    >
      {children}
    </h2>
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

function BulletList({ items }: { items: { label: string; text: string }[] }) {
  return (
    <ul className="my-6 flex flex-col gap-3">
      {items.map(({ label, text }) => (
        <li key={label} className="flex gap-3">
          <span className="mt-0.5 flex-shrink-0 text-sm font-bold" style={{ color: "#C9A96E" }}>
            {label}
          </span>
          <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            {text}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Why59DollarsBeatsGatekeepingBlog() {
  return (
    <div style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
              Gildre Perspective
            </span>
            <span className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
              Pricing · Community · Accessibility · Founder Economy
            </span>
          </div>
          <h1
            className="text-[clamp(1.9rem,4.5vw,3.25rem)] font-bold leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Why $59 Beats Gatekeeping:{" "}
            <span style={{ color: "#C9A96E" }}>
              The Real Math Behind Accessible Founder Communities
            </span>
          </h1>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Premium founder communities charge $7,000 to $8,000 a year and require $500K ARR just to get in the door. Low price means low quality, the gatekeepers say. Here is why that is the most expensive lie in the founder world right now.
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
                  Founder Community Perspective
                </p>
              </div>
            </div>
            <div className="flex gap-5 text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
              <span>12 min read</span>
              <span>·</span>
              <span>Pricing · Accessibility · Community</span>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="mx-auto max-w-3xl px-6 py-16">

        {/* Hero image */}
        <div className="mb-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1200&q=80"
            alt="A founder reviewing pricing and investment decisions, representing the moment of choosing between a premium community that gates access and one that bets on radical accessibility"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            The best founders know every dollar matters before product-market fit. Frugality is a feature, not a flaw. (Photo: Unsplash)
          </p>
        </div>

        <Callout>
          <strong style={{ color: "#C9A96E" }}>Key takeaways:</strong>{" "}
          Pricing accessibility is not about lower standards. It is about unlocking founder breakthroughs earlier. The $59/month model demolishes the myth that cheap equals low value or low commitment. Real founder success stories prove that scaling access creates more lasting community than premium gatekeeping. Frugality is the secret weapon of scrappy, high-caliber founders in the messy middle. Tiered models, not one-size-fits-all pricing, are how you build a movement for the founders who are still locked out.
        </Callout>

        <Body>
          I have run the gauntlet. Building Kudos, running accelerator programs at Newchip, and now co-founding Gildre, I saw the same pattern everywhere: early-stage founders, often on their last pennies of runway, locked out of the support and resources they need most.
        </Body>

        <Body>
          I am betting that accessibility at scale does not just beat premium margins. It changes founder outcomes entirely. Here is why.
        </Body>

        <SectionHeading>The Early Stage Trap</SectionHeading>

        <Body>
          Here is the real problem with how most founder communities are built today:
        </Body>

        <BulletList items={[
          { label: "Too much noise.", text: "There is a glut of founder programs, and it is impossible to know what is worth it until you have already paid." },
          { label: "Runway drain.", text: "At Newchip, I watched founders shell out huge chunks of their limited cash just for a shot at access. That is not just tough. It is unfair, especially when you have not found product-market fit yet." },
          { label: "Gatekeeping by design.", text: "Most premium communities demand $500K to $1M ARR just to get in the door. That is not serving the up-and-comers. That is serving the already-arrived." },
        ]} />

        <Body>
          The result? The brightest, scrappiest founders, often the ones who need real community most, are left on the outside looking in. But what happens if you flip the script and bet on radical accessibility instead?
        </Body>

        <SectionHeading>The $59 Experiment</SectionHeading>

        <Body>
          When we launched Gildre at $59/month, people said we would attract tire-kickers. People who would not show up. People who would not value what we built.
        </Body>

        <Body>
          Here is what actually happened:
        </Body>

        <BulletList items={[
          { label: "Attendance.", text: "Founders who pay $59/month show up. Some dedicate an hour a month; others show up to roundtables, mindset workshops, and live events multiple times a week." },
          { label: "Commitment.", text: "The average Gildre member gets ROI from a single event, sometimes more value than communities charging $400 to $500 a month deliver in total." },
          { label: "Quality.", text: "Our members are not just present. They are building real companies. Arihantje Kumar with Silo and Krishman Dosapati with Clockout both raised capital after joining Gildre because they finally got the right mentors and resources." },
        ]} />

        <Quote>
          Frugality does not mean founders are cheap or unserious. It means they are smart. Look at Jeff Bezos, frugal by nature. The best founders know every dollar matters, especially before product-market fit.
        </Quote>

        {/* Comparison table */}
        <div className="my-8 overflow-x-auto rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: "rgba(201,169,110,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <th className="px-5 py-3 text-left font-semibold" style={{ color: "#C9A96E" }}>Model</th>
                <th className="px-5 py-3 text-left font-semibold" style={{ color: "#C9A96E" }}>Price Point</th>
                <th className="px-5 py-3 text-left font-semibold" style={{ color: "#C9A96E" }}>Typical Requirements</th>
                <th className="px-5 py-3 text-left font-semibold" style={{ color: "#C9A96E" }}>Real Value Delivered</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Premium Gatekeeping", "$7–8k/year", "$500K–$1M ARR, warm intro", "1x/month dinner, clout, FOMO"],
                ["Gildre-Style Accessibility", "$59/month", "MVP, messy middle, open door", "Weekly events, real mentoring"],
              ].map(([model, price, req, value], i) => (
                <tr
                  key={model}
                  style={{
                    backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent",
                    borderBottom: i === 0 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  }}
                >
                  <td className="px-5 py-4 font-medium text-white">{model}</td>
                  <td className="px-5 py-4" style={{ color: "rgba(255,255,255,0.65)" }}>{price}</td>
                  <td className="px-5 py-4" style={{ color: "rgba(255,255,255,0.65)" }}>{req}</td>
                  <td className="px-5 py-4" style={{ color: "rgba(255,255,255,0.65)" }}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Body>
          Accessibility is not just a pricing gimmick. It fundamentally changes the community dynamic, the caliber of input, and the long-term loyalty of founders.
        </Body>

        {/* Mid image */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          <Image
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
            alt="A group of founders building together in a community setting, representing the kind of real connection that accessible pricing unlocks for founders who would otherwise be priced out of the support they need"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            The real action happens in the messy middle, where founders are hungry and nobody is rolling out the red carpet yet. (Photo: Unsplash)
          </p>
        </div>

        <SectionHeading>Why Tiered Pricing Unlocks a Real Movement</SectionHeading>

        <Body>
          If accessibility is so powerful, should you just stay low forever? No. Here is the nuance.
        </Body>

        <Body>
          The winning move is to offer tiers: real accessibility for the founders who need a place to start, with the option to level up as their companies grow.
        </Body>

        <BulletList items={[
          { label: "Start with value.", text: "Give founders an accessible entry point. Provide so much value that showing up to just one event feels like a win." },
          { label: "Create upgrade paths.", text: "As members grow, offer higher tiers with deeper features, advanced masterminds, or hands-on advisory. Not an upsell. A graduation." },
        ]} />

        <Body>
          The result is not just a community. It is a movement. People stick around for years because you were there from the beginning. They want to give back, mentor the next wave, and build together. That is not something a yacht club for the already-successful produces.
        </Body>

        <SectionHeading>Debunking Low Price, Low Commitment</SectionHeading>

        <Body>
          Let us call it out directly. The laziest objection to accessible pricing is that low price means low quality or low engagement. Here is what you actually see at Gildre:
        </Body>

        <BulletList items={[
          { label: "Attendance.", text: "Members who pay less show up more." },
          { label: "Caliber.", text: "High-caliber founders choose frugality on purpose." },
          { label: "Value.", text: "Real value is not in price. It is in progress." },
        ]} />

        <Quote>
          This is the most amazing thing I have been in. I paid $300, $400, even $500 a month for other communities, and got a mastermind call that was not even half as valuable as a single Gildre event.
        </Quote>

        <Body>
          What keeps the community strong is not price. It is the people, the resources, and the realness. The loudest proof is the feedback: founders say they are getting more, not less, for less. That is not a fluke. That is what happens when you remove artificial barriers.
        </Body>

        <Body>
          What actually drives commitment at $59/month: the chance to go from $0 to $10K MRR with hands-on support. Weekly touchpoints with actual operators, not monthly ones. A community designed for retention, not annual churn. Members who become mentors as they grow.
        </Body>

        {/* Pre-CTA image */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          <Image
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
            alt="Founders working together in a real community setting, representing what happens when you remove the price barriers that keep the most scrappy, high-caliber early-stage founders out"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            AI can give you tools. It cannot give you access to the right people. That is where real impact happens. (Photo: Unsplash)
          </p>
        </div>

        <SectionHeading>The Five-Year Bet</SectionHeading>

        <Body>
          In five years, accessibility will not be a differentiator. It will be the baseline. Everyone will have access to AI tools, virtual communities, and low-cost resources.
        </Body>

        <Body>
          But AI cannot give you access to the right people. That is where real impact happens: putting founders in the same room, virtual or otherwise, with the operators, mentors, and peers who accelerate the climb from seed to Series A.
        </Body>

        <Body>
          We are not just betting on price. We are betting on people. And that is the only way to move the needle for the 20% founder economy that is still locked out by today&rsquo;s premium clubs. If you want to build something that matters, make access the default. Then fill the room with builders, not tourists.
        </Body>

        <SectionHeading>How to Rethink Pricing When Building Your Own Founder Community</SectionHeading>

        <Body>
          If there is one thing to take from this: make the door wide enough for the founders you actually want to serve.
        </Body>

        <div className="my-6 flex flex-col gap-3">
          {[
            ["1.", "Start with an accessible tier.", "Do not be afraid to price low if it unlocks more value for more people. $59/month is still a real investment for founders in the messy middle."],
            ["2.", "Layer value, not just features.", "Create clear upgrade paths with deeper resources as members grow. Not an upsell. A graduation."],
            ["3.", "Measure value by outcomes.", "Track founder progress, revenue milestones, fundraising wins, and product launches. Not just attendance or vanity metrics."],
            ["4.", "Prioritize community over clout.", "Curate for commitment, not just for logos or ARR numbers. The best communities are built on real relationships."],
          ].map(([num, label, text]) => (
            <div
              key={label}
              className="flex gap-4 rounded-xl px-5 py-4"
              style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <span className="mt-0.5 flex-shrink-0 text-sm font-bold" style={{ color: "#C9A96E" }}>{num}</span>
              <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                <strong style={{ color: "rgba(255,255,255,0.85)" }}>{label}</strong>{" "}{text}
              </span>
            </div>
          ))}
        </div>

        <SectionHeading>The Bottom Line</SectionHeading>

        <Body>
          The most successful founders are also the most frugal. They know every dollar counts. They know that showing up matters more than showing off.
        </Body>

        <Body>
          The real test is not who can pay $8,000 a year for a fancy dinner. It is who is still building, learning, and giving back three, four, five years from now because the community never priced them out in the first place.
        </Body>

        <Quote>
          Make it radically accessible. Watch what happens when you bet on the messy middle. And do not be surprised when those scrappy, overlooked founders turn out to be your best lifetime members. That is how you build something that actually lasts.
        </Quote>

        {/* Gildre tie-in */}
        <div className="mt-4">
          <Body>
            Gildre is open to founders at every stage of the messy middle: pre-revenue, early traction, and everything in between. Weekly curated 1:1 introductions, live events, and mentor access with operators who have already exited. Members in{" "}
            <Link href="/chicago" style={{ color: "#C9A96E" }}>Chicago</Link>,{" "}
            <Link href="/nyc" style={{ color: "#C9A96E" }}>New York</Link>,{" "}
            <Link href="/boston" style={{ color: "#C9A96E" }}>Boston</Link>,{" "}
            <Link href="/bayarea" style={{ color: "#C9A96E" }}>Bay Area</Link>,{" "}
            <Link href="/austin" style={{ color: "#C9A96E" }}>Austin</Link>,{" "}
            <Link href="/la" style={{ color: "#C9A96E" }}>Los Angeles</Link>, and{" "}
            <Link href="/seattle" style={{ color: "#C9A96E" }}>Seattle</Link>. Starting at $59/month. No equity.
          </Body>
        </div>

        {/* CTA */}
        <div
          className="mt-12 rounded-2xl px-8 py-10 text-center"
          style={{ backgroundColor: "rgba(201,169,110,0.06)", border: "1px solid rgba(201,169,110,0.2)" }}
        >
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            The Door Is Open
          </p>
          <h2
            className="mt-3 text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Apply for Gildre membership.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Weekly curated 1:1 introductions to founders at your exact stage. In-person chapters in{" "}
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
