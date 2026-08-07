import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/blog/alex-jekowski-cents-laundromat-tech-vertical-saas" },
  title: "Alex Jekowski: From College Pinboards to $140M — How Cents Is Building the All-In-One Platform Powering America's Laundromats | Gildre",
  description:
    "Alex Jekowski, founder and CEO of Cents, on raising nearly a quarter billion dollars for laundromat tech, why the Series B was the hardest fundraise of his life, and what every early-stage founder gets wrong about hard work.",
  keywords: [
    "Alex Jekowski",
    "Cents app",
    "Cents laundromat",
    "laundromat software",
    "vertical SaaS laundry",
    "laundromat POS system",
    "Newlingo exit",
    "laundry tech startup",
    "Cents Series C",
    "small business tech founder",
    "do the hardest things",
    "Gildre founder",
  ],
  openGraph: {
    url: "https://www.gildre.com/blog/alex-jekowski-cents-laundromat-tech-vertical-saas",
    title: "Alex Jekowski: From College Pinboards to $140M — How Cents Is Building the All-In-One Platform Powering America's Laundromats",
    description:
      "Alex Jekowski on building and exiting Newlingo, discovering laundromats as the backbone of the on-demand economy, raising nearly $250M for Cents, and why the Series B nearly killed him, and why it was worth it.",
    type: "article",
    images: [
      {
        url: "https://www.gildre.com/images/alex-jekowski-headshot.webp",
        width: 2400,
        height: 3000,
        alt: "Alex Jekowski, founder and CEO of Cents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Jekowski of Cents: How Laundromats Became a $140M Vertical SaaS Opportunity, and Why Hardware Is the Moat Everyone Ignored",
    description:
      "Alex Jekowski on the Cents origin story, passing the hat for $25K checks to close the Series B, and why 'do three hard things instead of ten easy ones' is the only founder advice that compounds.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Alex Jekowski: From College Pinboards to $140M — How Cents Is Building the All-In-One Platform Powering America's Laundromats",
  description:
    "Alex Jekowski, founder and CEO of Cents (vertical SaaS for laundromats), on his first exit with Newlingo, how he stumbled into the laundry industry, why he bet on hardware when everyone said not to, and the principles behind a company running at $1M revenue per headcount with 98% employee retention.",
  image: "https://www.gildre.com/images/alex-jekowski-headshot.webp",
  datePublished: "2026-07-29",
  author: {
    "@type": "Organization",
    name: "Gildre",
    url: "https://www.gildre.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Gildre",
    logo: {
      "@type": "ImageObject",
      url: "https://www.gildre.com/images/gildre-logo.png",
    },
  },
  mainEntityOfPage:
    "https://www.gildre.com/blog/alex-jekowski-cents-laundromat-tech-vertical-saas",
  about: [
    {
      "@type": "Person",
      name: "Alex Jekowski",
      jobTitle: "Founder and CEO, Cents",
    },
    {
      "@type": "Organization",
      name: "Cents",
      description: "All-in-one vertical SaaS platform for laundromats and the broader laundry industry, including hardware, software, and payments.",
    },
  ],
  keywords:
    "Alex Jekowski, Cents, Cents laundromat, vertical SaaS, laundromat software, Newlingo, laundry tech, Series C, small business tech, Gildre",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alex Jekowski",
  jobTitle: "Founder and CEO, Cents",
  knowsAbout: [
    "Vertical SaaS",
    "Small Business Technology",
    "Laundromat Operations",
    "Fundraising",
    "Hardware and Software Integration",
    "Company Culture",
    "Startup Exits",
    "Product Market Fit",
  ],
  description:
    "Alex Jekowski is the founder and CEO of Cents, an all-in-one vertical SaaS platform for laundromats that has raised nearly a quarter billion dollars. Before Cents, he founded Newlingo, a digital marketplace and payments system for college campuses sold to Motolabs in 2019. He left Chapman University his sophomore year to run Newlingo full time. Cents has raised a Seed, C2, Series A, Series B (which included the acquisition of Launchoworks hardware), and a $140M Series C.",
};

const faqs = [
  {
    q: "Who is Alex Jekowski?",
    a: "Alex Jekowski is the founder and CEO of Cents, an all-in-one vertical SaaS platform for laundromats and the broader laundry industry. Before Cents, he founded Newlingo, a digital marketplace and payments system for college campuses, which he left Chapman University sophomore year to run full time before selling it to Motolabs in 2019. Cents has raised nearly a quarter billion dollars across multiple rounds, including a $140M Series C.",
  },
  {
    q: "What is Cents?",
    a: "Cents is an all-in-one business management platform built specifically for laundromats and the broader laundry industry. It combines hardware (payment devices integrated into laundry machines), software (POS, business management), and payments into a single system, the first platform of its kind in an industry that previously had no vertically integrated solution. Cents also serves dry cleaners, shared laundry rooms in multifamily properties, RV parks, colleges, and universities.",
  },
  {
    q: "How much has Cents raised?",
    a: "Cents has raised nearly a quarter billion dollars total, including a Seed round, a C2 round six months after the Seed, a $25M Series A nine months after C2, a Series B that included the acquisition of Launchoworks (a hardware company), and a $140M Series C. Alex Jekowski has described the Series B, where he was passing the hat for $25,000 checks on a $40M equity raise, as the most difficult fundraise they've done.",
  },
  {
    q: "What advice does Alex Jekowski give to founders?",
    a: "Alex's core advice for early-stage founders: do the hardest things. 'Do three hard things instead of ten easy ones' because hard things compound and deliver most of the growth value, while easy things (making a pretty website, polishing a deck) create the illusion of productivity. He also emphasizes falling in love with the problem rather than the solution, getting brutally honest advisors, and avoiding hustle porn: working late doesn't matter if the quality of work is low.",
  },
  {
    q: "Why did Cents bet on hardware when investors said not to?",
    a: "When Cents raised its Series B, which included the acquisition of Launchoworks, a hardware company. Many investors said hardware was a bad bet: one-time revenue, not a creative on value, risky for a tech company. Alex and his team disagreed. They saw hardware as the essential bridge between physical laundry machines and digital management. Today, Cents has hundreds of thousands of payment devices drilled into laundry equipment across the US. In the age of AI, where software alone is increasingly commoditized, that physical footprint has become one of their most defensible competitive advantages.",
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

function Section({ title }: { title: string }) {
  return (
    <h2
      className="mb-4 mt-14 text-2xl font-bold text-white"
      style={{ fontFamily: "var(--font-fraunces)" }}
    >
      {title}
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

function BioCallout() {
  return (
    <div
      className="my-10 rounded-2xl px-6 py-5"
      style={{ backgroundColor: "rgba(201,169,110,0.07)", border: "1px solid rgba(201,169,110,0.18)" }}
    >
      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
        <strong style={{ color: "#C9A96E" }}>Alex Jekowski</strong> is the founder and CEO of{" "}
        <strong style={{ color: "#fff" }}>Cents</strong>, an all-in-one vertical SaaS platform for laundromats
        and the broader laundry industry. Before Cents, he founded Newlingo, a digital marketplace and payments
        platform for college campuses, which he left Chapman University to run full time before selling it in
        2019. Cents has raised nearly a quarter billion dollars, including a $140M Series C.
      </p>
    </div>
  );
}

export default function AlexJekowskiBlog() {
  return (
    <div style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
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
              Start to Scale
            </span>
            <span className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
              Founder Story · Laundry Tech · Vertical SaaS
            </span>
          </div>
          <h1
            className="text-[clamp(1.9rem,4.5vw,3.25rem)] font-bold leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Alex Jekowski: From College Pinboards to{" "}
            <span style={{ color: "#C9A96E" }}>$140M</span>: How Cents Is Building the All-In-One Platform Powering America&apos;s Laundromats
          </h1>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Alex Jekowski left Chapman University sophomore year to build his first company. He sold it before he was thirty. Then he stumbled into laundromats, realized nobody had ever built real software for them, and decided to fix that, raising nearly a quarter billion dollars in the process. He joined the Start to Scale Podcast to share what it actually takes: the brutal early advisors, the Series B he almost couldn&apos;t close, and why doing three hard things beats ten easy ones every time.
          </p>

          {/* Meta row */}
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
                  Start to Scale Podcast
                </p>
              </div>
            </div>
            <div className="flex gap-5 text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
              <span>15 min read</span>
              <span>·</span>
              <span>Vertical SaaS · Fundraising · Culture · SMB Tech</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────────────────────── */}
      <article className="mx-auto max-w-3xl px-6 py-16">

        <Body>
          Most founders pick a sexy industry. Alex Jekowski picked laundromats. Not because he loves doing laundry (he doesn&apos;t), but because he looked at an industry running almost entirely on coins and paper logs, realized there was no real software for it, and saw an opportunity that nobody with serious capital had ever touched. That instinct, combined with the lessons from his first exit and a willingness to fight for deals that nearly fell apart,{" "}
          has turned <strong style={{ color: "#fff" }}>Cents</strong> into a vertical SaaS business that raised nearly a quarter billion dollars and runs at roughly $1M in revenue per employee. He joined the{" "}
          <strong style={{ color: "#fff" }}>Start to Scale Podcast</strong> to break down how he got there.
        </Body>

        {/* Main headshot */}
        <div className="my-12 overflow-hidden rounded-2xl mx-auto" style={{ maxWidth: "720px", border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/alex-jekowski-headshot.webp"
            alt="Alex Jekowski, founder and CEO of Cents"
            width={720}
            height={900}
            quality={90}
            sizes="(max-width: 760px) 100vw, 720px"
            className="w-full object-cover"
            style={{ maxHeight: "600px", objectFit: "cover", objectPosition: "center top" }}
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>
              Alex Jekowski, founder and CEO of Cents, the all-in-one vertical SaaS platform for laundromats
            </p>
          </div>
        </div>

        <BioCallout />

        <Section title="Bar Mitzvah Money, a Batting Cage, and What Entrepreneurship Actually Is" />
        <Body>
          Alex didn&apos;t grow up wanting to be an entrepreneur. He grew up loving baseball. In high school, he took his bar mitzvah money, bought a batting cage and a pitching machine, and started coaching kids. Not because he had a business plan because he loved the game and loved coaching. The business was a byproduct of the passion, not the goal.
        </Body>
        <Body>
          That distinction matters to him. A lot. He&apos;s seen what happens when the ambition runs in the other direction, when someone wants to be a founder so badly that they&apos;ll build anything just to have a company. "The desire to be an entrepreneur leads people down inauthentic paths. They want to build a business so badly they don&apos;t actually care about the product they&apos;re building or the problem they&apos;re truly solving. They just really want to be the founder."
        </Body>
        <Quote>
          "Fall in love with the problem, not the solution. The exercise of questioning why have we been doing it this way is what leads to a lot of innovation."
        </Quote>
        <Body>
          That framing (borrowed from Uri Levine, the founder of Waze, and embedded into Cents&apos; own guiding principles as "question the way things are done") is the lens through which Alex has approached every business he&apos;s built. It led him to college campus pinboards. It led him to laundromats. The industries were accidents. The questions were always intentional.
        </Body>

        <Section title="Newlingo: The College Campus Exit That Set Everything Up" />
        <Body>
          At Chapman University, Alex noticed that physical pinboards were still the primary way information spread across college campuses. Every school had them. All of them were insane. He built a digital version focused on classifieds and marketplace, the thing every college student knows as "Facebook Free and For Sale", and eventually pivoted it into a payment system for what he called student life commerce: membership dues, meal plans, peer-to-peer exchanges, event tickets, all integrated with campus systems.
        </Body>
        <Body>
          He left school sophomore year to run Newlingo full time. The company was bootstrapped and angel-funded; his first check was $16,900 from an angel investor. He ran it for about five and a half years, never quite framing it as fintech or vertical SaaS (which he later recognized it was), and eventually found a buyer: Motolabs, a company that powered mobile app infrastructure for both workplaces and colleges. The deal closed on a Friday. His first day at the parent company was Monday.
        </Body>
        <Body>
          "It wasn&apos;t like we went on the world tour of enjoyment of the milestone. I also think that people say they want to sell their company. Well, then what? I like doing this stuff. The ambition isn&apos;t to sell. The ambition is to build, and build bigger."
        </Body>
        <Body>
          With the exit came a three-year earnout at the parent company, and enough lessons about what not to do that his second company would be structurally opposite to his first in almost every respect.
        </Body>

        {/* Secondary headshot */}
        <div className="my-14 overflow-hidden rounded-2xl mx-auto" style={{ maxWidth: "560px", border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/alex-jekowski-cents.webp"
            alt="Alex Jekowski, CEO of Cents vertical SaaS laundromat platform"
            width={560}
            height={634}
            quality={90}
            sizes="(max-width: 600px) 100vw, 560px"
            className="w-full object-cover"
            style={{ maxHeight: "540px", objectFit: "cover", objectPosition: "center top" }}
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>
              Alex Jekowski, serial founder who went from college campus software to the backbone of the American laundry industry
            </p>
          </div>
        </div>

        <Section title="How a Laundromat Industry Became a $140M Opportunity" />
        <Body>
          During his earnout, Alex was looking for something to scratch the founder itch. He heard about laundromats. He looked at the unit economics. A well-run store could generate six figures of free cash flow. He started writing LOIs to buy stores. And the deeper he looked, the more he was stunned by what he found.
        </Body>
        <Body>
          "You could buy a brand new store with brand new equipment and brand new everything, and coin is still your predominant form of payment. There was no industry-specific software to run the business." The on-demand laundry wave of 2019–2020, all the Uber-for-laundry startups that raised venture capital had entirely missed this. They were building delivery logistics for laundry, but they were taking it to laundromats. The laundromats were always the backbone. Nobody had built for them.
        </Body>
        <Body>
          A contact in the industry told him he couldn&apos;t own stores if he wanted to build software for them; operators would see it as a conflict. He listened. He pulled back from buying, and started building. Going door to door in San Francisco. Working behind counters. Attending industry events. Talking to operators to see if there was actual product-market fit, or if this was just an idea he had that nobody cared about.
        </Body>
        <Body>
          The operators cared. What he found wasn&apos;t an unsophisticated market afraid of technology. It was a market that had Frankensteined together six different systems and paper logs just to run a business that deserved a real platform. "In SMB, you have to earn the right for innovation. You have to be super thoughtful, genuine, deliberate, and transparent in how you&apos;re building and why, to build trust. Our business has flourished when our operators trust us the most."
        </Body>

        <Section title="Raising Nearly a Quarter Billion Dollars, and the Series B That Almost Didn&apos;t Happen" />
        <Body>
          Cents left the parent company in 2021, raised its seed round, and moved fast. A C2 round came six months later. A $25M Series A followed nine months after that. The business was working, the capital environment was open, and nobody had done what Cents was doing at scale in this space. The momentum was real.
        </Body>
        <Body>
          Then came the Series B. And it nearly killed them.
        </Body>
        <Body>
          The Series B was tied to the acquisition of Launchoworks, a hardware company that manufactured payment devices for laundry machines. Alex and his team had a clear strategic thesis: hardware was the bridge between physical equipment and digital management. Hundreds of thousands of payment devices drilled into laundry machines across the United States would create a physical footprint (a moat) that software alone could never build.
        </Body>
        <Body>
          Investors didn&apos;t see it that way. "A lot of people said hardware is dumb. Building hardware is a tech company. It&apos;s not a valuable revenue line. It&apos;s one-time revenue. It presents risk. Why are we buying a hardware business when the world is software?" Alex was passing the hat for $25,000 checks at a time on a $40M equity raise. He got it done.
        </Body>
        <Quote>
          "It shows that there are a lot of investors who get things wrong. The same investors who said hardware was a bad bet have completely changed their tune now that hardware is obviously the connection of the physical to the digital world in the age of AI."
        </Quote>
        <Body>
          The $140M Series C followed. In the announcement, Alex framed it not as an investment in Cents but as a bet on the industry, and on the laundromat owners who had trusted the company when it was nothing.
        </Body>

        {/* Product / app screenshot */}
        <div className="my-14 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/cents-app-screenshot.jpg"
            alt="Cents platform, all-in-one business management software for laundromats"
            width={804}
            height={518}
            quality={90}
            sizes="(max-width: 768px) calc(100vw - 48px), 720px"
            className="w-full object-cover"
            style={{ objectFit: "cover", objectPosition: "center center" }}
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>
              Cents: the all-in-one platform combining hardware, software, and payments built for laundromats, dry cleaners, and the broader laundry industry
            </p>
          </div>
        </div>

        <Section title="The Culture That Runs at $1M Per Head" />
        <Body>
          Cents has ~94 employees, 98% employee retention, 99% customer retention, and runs at approximately $1M in revenue per headcount. Alex is direct about what drove those numbers: guiding principles.
        </Body>
        <Body>
          Early on, an advisor pushed him to codify the character traits that define a Cents employee (internally, they call it "making a dime"). Ten principles: act like an owner, run through walls, diversity in team and thought, stay curious, self-awareness, commitment, communication, and others. The rule is simple: if you embody the ten guiding principles, it&apos;s nearly impossible to be fired. If you&apos;re not succeeding, it&apos;s because the company hasn&apos;t put you in the right position, not because you&apos;re a bad person.
        </Body>
        <Body>
          "We always hold the same bar of values. That has delivered an egoless environment where nobody is unwilling to do any job. There&apos;s very little finger-pointing, and execution quality becomes really high." The company also doesn&apos;t tell people to work sixty hours a week. "I&apos;ve had the most success in my career when I had the best work-life balance."
        </Body>
        <Body>
          Communication runs on radical transparency. At all-hands meetings, Alex shares the same information he shares with the board: financials, metrics, risks, priorities. He runs a framework he calls "act like an owner, think like an investor," presenting company performance the way he&apos;d want an outside investor to see it. "Nobody who gets fired should be surprised. Nobody who gets promoted should be surprised. People should know how well they&apos;re doing and how well the business is doing."
        </Body>

        <Section title="What Investors Are Actually Buying When They Back a Founder" />
        <Body>
          Alex is not a technical founder. He&apos;s not a finance wizard. What he is, consistently, is genuine, and he&apos;s found that authenticity is both the hardest thing to fake and the most important thing investors are looking for.
        </Body>
        <Body>
          "The times where I&apos;ve lost an investor is where I come off salesy or trying to convince somebody of something. Genuine, authentic, and remarkably passionate goes a really long way. I can&apos;t turn it on or off. I love this business. It comes out whether I want it to or not." The trap, he says, is that you do have to sell, especially during a Series B when you&apos;re passing the hat for $25K checks, but the moment you start sounding like a salesperson, you stop sounding like a trusted partner.
        </Body>
        <Body>
          Beyond authenticity, he points to three things investors consistently evaluate: the ability to recruit and build an executive team, the ability to set a strategic vision, and the ability to convey that vision in a genuine and transparent way. "From there, just don&apos;t be an asshole. Those are the three things people care about, and that is universal at any scale."
        </Body>

        <Section title="Do Three Hard Things. Not Ten Easy Ones." />
        <Body>
          When Alex thinks back to his early years, the mistake he made wasn&apos;t working too little. It was confusing visible effort with productive effort. Posting about being at the office at 11pm on Snapchat. Grinding through the easy stuff because it looked like progress. Optimizing for how the work appeared rather than for the quality of the work itself.
        </Body>
        <Body>
          "I cared a little bit more about how I was viewed from an output perspective versus the quality of the output. None of that actually matters. And you end up enjoying it a lot more when you&apos;re doing it for the right reasons." He points to Alex Ohanian&apos;s concept of hustle porn (the performance of hard work, divorced from the results of it) as one of the most dangerous traps for early founders.
        </Body>
        <Quote>
          "Focus on doing the hardest things. Making a pretty website, not that hard. Calling a customer and getting them to buy your stuff: that&apos;s hard. Do three hard things instead of ten easy ones. Hard things compound and end up delivering a majority of the value from a growth standpoint."
        </Quote>
        <Body>
          The framework he&apos;d give his younger self is simpler than any strategy: find happiness in what you&apos;re doing. Not the performance of happiness. The real thing. "I probably didn&apos;t index on that very much in the beginning." He did later. And the quality of work improved alongside it.
        </Body>
        <Body>
          From a first check of $16,900 to a quarter billion dollars raised, from college campus pinboards to hundreds of thousands of payment devices drilled into laundry machines across America: Alex Jekowski&apos;s story is a case study in what happens when you fall in love with the problem, build trust with the people who have the most to lose, and refuse to let the hard deals die. The laundromats were always the backbone. He just had to be the one who showed up to build for them.
        </Body>

        {/* FAQs */}
        <div
          className="mt-20 rounded-2xl px-8 py-10"
          style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <h2
            className="mb-8 text-xl font-bold text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-7">
            {faqs.map(({ q, a }) => (
              <div key={q}>
                <h3 className="mb-2 text-sm font-semibold text-white">{q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="mt-16 rounded-2xl px-8 py-10 text-center"
          style={{ background: "linear-gradient(135deg, rgba(201,169,110,0.12) 0%, rgba(28,39,68,0.4) 100%)", border: "1px solid rgba(201,169,110,0.2)" }}
        >
          <p
            className="mb-2 text-xs font-bold uppercase tracking-widest"
            style={{ color: "#C9A96E" }}
          >
            Join the Community
          </p>
          <h2
            className="mb-4 text-2xl font-bold text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Founders like Alex build alongside each other at Gildre.
          </h2>
          <p className="mb-8 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Gildre is a community for founders who want honest feedback, real accountability, and the kind of relationships that hold up under pressure. Apply to join.
          </p>
          <Link
            href="/apply"
            className="inline-block rounded-full px-8 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#C9A96E", color: "#080e1a" }}
           target="_blank" rel="noopener noreferrer">
            Apply to Gildre
          </Link>
        </div>
      </article>
    </div>
  );
}
