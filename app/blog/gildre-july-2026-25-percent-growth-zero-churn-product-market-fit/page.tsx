import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/blog/gildre-july-2026-25-percent-growth-zero-churn-product-market-fit" },
  title: "Zero Churn, 25% Growth, and the Compounding Bets That Got Us There | Gildre",
  description:
    "Gildre hit 25% membership growth and zero churn across 250 members in July 2026. It wasn't one big move. It was three or four smaller bets finally compounding together. Here is what happened, what we learned, and what almost every founder gets wrong after their first real growth spike.",
  keywords: [
    "Gildre growth July 2026",
    "founder community product market fit",
    "zero churn founder community",
    "Gildre 250 members",
    "founder community growth",
    "compounding bets startup",
    "Gildre membership growth",
    "founder community Chicago",
    "founder community New York",
    "startup product market fit milestone",
    "Gildre community",
    "founder peer community growth",
    "startup messy middle growth",
    "founder community zero churn",
    "Gildre founder story",
    "startup community Chicago",
    "startup community New York",
    "startup community Boston",
    "startup community Bay Area",
    "startup community Austin",
    "startup community Los Angeles",
    "startup community Seattle",
    "founder community momentum",
    "early stage startup compounding",
  ],
  openGraph: {
    url: "https://www.gildre.com/blog/gildre-july-2026-25-percent-growth-zero-churn-product-market-fit",
    title: "Zero Churn, 25% Growth, and the Compounding Bets That Got Us There",
    description:
      "Gildre hit 25% membership growth and zero churn across 250 members in a single month. Here is what actually drove it and what every founder needs to know about momentum after a spike.",
    type: "article",
    images: [
      {
        url: "https://www.gildre.com/og-home.png",
        width: 1200,
        height: 630,
        alt: "Gildre hitting 25% membership growth and zero churn in July 2026, the compounding result of three years of smaller bets finally stacking up",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero Churn, 25% Growth, and the Compounding Bets That Got Us There",
    description:
      "25% growth in one month after three years. Zero churn across 250 members. Here is what compounded to get us there and what founders get wrong after a spike.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Zero Churn, 25% Growth, and the Compounding Bets That Got Us There",
  description:
    "A first-person account from the Gildre team on hitting 25% membership growth and zero churn in July 2026 after three years of building. Covers the four compounding bets that drove it, the decision to go all-in, and what founders in the messy middle get wrong after their first real growth spike.",
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
  mainEntityOfPage: "https://www.gildre.com/blog/gildre-july-2026-25-percent-growth-zero-churn-product-market-fit",
  about: [
    { "@type": "Thing", name: "Founder Community Growth" },
    { "@type": "Thing", name: "Product Market Fit" },
    { "@type": "Thing", name: "Startup Momentum" },
    { "@type": "Thing", name: "Gildre" },
  ],
  keywords:
    "Gildre, 25% growth, zero churn, product market fit, founder community, compounding bets, messy middle, startup momentum, 250 members",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What drove Gildre's 25% membership growth in July 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It was not one big move. It was four smaller bets finally compounding at the same time: better targeting that brought in higher-quality members, a full website rebuild that improved search visibility and made content easier to upload, the launch of a Salvi AI partnership that added real-time progress tracking for members, and elevated event programming that consistently brought 20 to 30 founders to every session. Each of those bets was placed months earlier. July was when they all landed together.",
      },
    },
    {
      "@type": "Question",
      name: "Why does zero churn matter more than the growth number?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Growth tells you people are interested. Zero churn tells you people are getting value. You can grow 25% and lose 20% in the same month and feel like you are winning when you are actually on a treadmill. Gildre grew 25% and lost nobody across 250 members. That is a snowball, not a treadmill. Zero churn at that membership level is confirmation that the product is working, the community is working, and the price point is right. It is the real signal that product-market fit has been found.",
      },
    },
    {
      "@type": "Question",
      name: "What was the single decision that most directly enabled Gildre's growth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Going 100% on Gildre. In June, the decision was made to drop a separate opportunity that was splitting focus. The moment that happened, everything shifted. Co-founders went from meeting three times a week to every single day. Daily standups replaced weekly check-ins and the difference in operations was immediate. Focus is a force multiplier: going full time did not just add hours, it added quality of thought that showed up in every call, every decision, and every product bet.",
      },
    },
    {
      "@type": "Question",
      name: "What do most founders get wrong after their first real growth spike?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They ease off. Just a little. A few fewer calls, a few skipped meetings, a slower response time. And momentum dies faster than it built. The founders who win are the ones who take a spike and turn it into a snowball effect: they keep rolling, keep growing, keep compounding. If you are not roughly tripling every year in the early stages, the math does not work. Sustaining growth requires the same energy that created it, and often more.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Salvi partnership Gildre launched?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Salvi is an AI chief operating officer capability for Gildre members that tracks progress and replaces the old progress pulse system. It lets both members and the Gildre team see how successful members are being in real time. That visibility is significant for retention because founders can see their own growth, and Gildre can identify where to help them before they disengage.",
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

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="mt-8 mb-3 text-base font-bold text-white"
      style={{ fontFamily: "var(--font-fraunces)" }}
    >
      {children}
    </h3>
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

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center text-center px-4">
      <span
        className="text-3xl font-bold sm:text-4xl"
        style={{ color: "#C9A96E", fontFamily: "var(--font-fraunces)" }}
      >
        {value}
      </span>
      <span className="mt-1 text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.45)" }}>
        {label}
      </span>
    </div>
  );
}

export default function GildreJuly2026GrowthBlog() {
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
              Gildre Update
            </span>
            <span className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
              Growth · Product Market Fit · Founder Community · August 2026
            </span>
          </div>
          <h1
            className="text-[clamp(1.9rem,4.5vw,3.25rem)] font-bold leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Zero Churn, 25% Growth,{" "}
            <span style={{ color: "#C9A96E" }}>
              and the Compounding Bets That Got Us There
            </span>
          </h1>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Three years of building. Then July hit. 25% membership growth. Zero churn out of 250 members. It was not one big move. It was three or four smaller bets finally compounding together. Here is what happened and what every founder in the messy middle needs to hear about it.
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
                  Founder Community Update
                </p>
              </div>
            </div>
            <div className="flex gap-5 text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
              <span>12 min read</span>
              <span>·</span>
              <span>Growth · Product Market Fit · Momentum</span>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="mx-auto max-w-3xl px-6 py-16">

        {/* Hero image */}
        <div className="mb-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1200&q=80"
            alt="A founder team meeting to review growth milestones, representing the moment when compounding bets finally land at the same time and a community hits product-market fit"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            Most founder communities are either growing or dying. July was the month we knew which one we were. (Photo: Unsplash)
          </p>
        </div>

        {/* Stats bar */}
        <div
          className="mb-12 flex flex-wrap justify-around gap-8 rounded-2xl px-6 py-8"
          style={{ backgroundColor: "rgba(201,169,110,0.06)", border: "1px solid rgba(201,169,110,0.18)" }}
        >
          <Stat value="25%" label="Membership growth in July" />
          <Stat value="0" label="Members lost in July" />
          <Stat value="250" label="Active members" />
          <Stat value="3 yrs" label="Building before this month" />
        </div>

        <Callout>
          <strong style={{ color: "#C9A96E" }}>What you will take away:</strong>{" "}
          Why 25% growth after three years matters more than early viral spikes. How going all-in on one venture changes everything. The compounding effect of small operational bets stacking up. Why zero churn is the real headline, not the growth number. And what almost every founder gets wrong after their first real spike.
        </Callout>

        <SectionHeading>Three Years of Building Before the Breakthrough</SectionHeading>

        <Body>
          Look, 25% growth in a single month is huge. But context matters. We have been in business since May of 2023. Over three years. And this was our first month hitting that number.
        </Body>

        <Body>
          That is not a failure story. That is a reality story. Most founders expect hockey stick growth in month six. They see other companies posting wins on social media and wonder what they are doing wrong. What they do not see is the years of quiet compounding that precede those moments.
        </Body>

        <Body>
          For us, the compounding looked like this: better targeting, a full website refresh, new product partnerships, and a community that was finally hitting its stride with 20 to 30 people showing up to every single event. None of those things happened overnight. Each one was a bet placed months ago that finally started paying off at the same time.
        </Body>

        <Quote>
          The quality of the people we have been bringing into the community is so top level. And that is the piece most people miss when they look at a growth number. It is not just about adding bodies. It is about adding the right founders who see the value, stick around, and make the community better for everyone else.
        </Quote>

        <SectionHeading>The Decision That Changed Everything</SectionHeading>

        <Body>
          If there is one thing from the last 90 days that directly enabled this growth, it was going 100% on Gildre.
        </Body>

        <Body>
          In June, I made the call to drop my other opportunity with Digital Mirror. It was taking up too much time and splitting my focus. The moment I went all in, everything shifted.
        </Body>

        <SubHeading>Daily standups replaced weekly check-ins</SubHeading>

        <Body>
          My co-founders and I used to meet three times a week. Now we meet every single day. That sounds intense, and it is. But the difference in our operations and processes has been night and day. When you are in the messy middle, you cannot afford to let three or four days pass between alignment conversations. Things move too fast. Decisions pile up. Small misalignments become big problems.
        </Body>

        <Body>
          Meeting daily meant we caught issues faster, moved on opportunities quicker, and stayed locked in on what mattered.
        </Body>

        <SubHeading>Focus as a force multiplier</SubHeading>

        <Body>
          A lot of founders in the early stages try to hedge their bets by keeping multiple things going. I get it. I was doing it too. But there is a cost to split attention that does not show up on a spreadsheet. It shows up in the energy you bring to calls, the speed of your decisions, and the depth of your thinking about your product.
        </Body>

        <Body>
          When I went full time on Gildre, I was not just adding hours. I was adding quality of thought. And that quality showed up everywhere.
        </Body>

        {/* Mid image */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          <Image
            src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=1200&q=80"
            alt="A growth chart trending sharply upward, representing the compounding effect of multiple smaller bets landing at the same time after months of investment"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            Compounding does not look like progress until it suddenly does. (Photo: Unsplash)
          </p>
        </div>

        <SectionHeading>The Four Bets That Compounded</SectionHeading>

        <Body>
          This growth was not driven by one thing. It was three or four smaller bets finally compounding together. Here is what stacked up:
        </Body>

        {/* Table */}
        <div className="my-8 overflow-x-auto rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: "rgba(201,169,110,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <th className="px-5 py-3 text-left font-semibold" style={{ color: "#C9A96E" }}>Bet</th>
                <th className="px-5 py-3 text-left font-semibold" style={{ color: "#C9A96E" }}>What We Did</th>
                <th className="px-5 py-3 text-left font-semibold" style={{ color: "#C9A96E" }}>What It Unlocked</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Targeting", "Refined who we were going after", "Higher quality members who stayed and engaged"],
                ["Website Refresh", "Rebuilt the site (vibe coded with Claude)", "Better GEO and SEO optimization, easier content uploads"],
                ["New Products", "Launched Salvi partnership for AI COO capabilities", "Better retention through progress tracking"],
                ["Programming", "Elevated event quality and consistency", "20-30 attendees per event, stronger community bonds"],
              ].map(([bet, did, unlocked], i) => (
                <tr
                  key={bet}
                  style={{
                    backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent",
                    borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  }}
                >
                  <td className="px-5 py-4 font-medium text-white">{bet}</td>
                  <td className="px-5 py-4" style={{ color: "rgba(255,255,255,0.65)" }}>{did}</td>
                  <td className="px-5 py-4" style={{ color: "rgba(255,255,255,0.65)" }}>{unlocked}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Body>
          The Salvi partnership is one I am especially excited about. It is basically going to be an AI chief operating officer for our members that tracks progress and replaces our old progress pulse system. Now we can actually see how successful our members are being in real time. That is huge for retention because founders can see their own growth, and we can see where to help them.
        </Body>

        <Body>
          And the website update was not just cosmetic. I rebuilt the whole thing with Claude Code. It looks a lot more professional now, but more importantly it made it so much easier to upload content and it improved our search optimization. When you are running a community at $59 a month while competitors charge $7,000 or $8,000, you need your website doing heavy lifting on discovery.
        </Body>

        <Quote>
          No other community can compete with the quality and the price that we offer. I genuinely believe that. And July proved it.
        </Quote>

        <SectionHeading>Zero Churn Is the Real Story</SectionHeading>

        <Body>
          Everyone wants to talk about the 25% growth number. I get it. It is flashy. But the number that actually matters more?
        </Body>

        <div
          className="my-8 rounded-2xl px-6 py-6 text-center"
          style={{ backgroundColor: "rgba(201,169,110,0.06)", border: "1px solid rgba(201,169,110,0.2)" }}
        >
          <p
            className="text-5xl font-bold"
            style={{ color: "#C9A96E", fontFamily: "var(--font-fraunces)" }}
          >
            Zero churn.
          </p>
          <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
            Out of all 250 members, not a single person left in July.
          </p>
        </div>

        <Body>
          That is the first time we have hit that. And it tells a fundamentally different story than growth alone.
        </Body>

        <Body>
          Growth tells you people are interested. Zero churn tells you people are getting value. You can grow 25% and lose 20% and feel like you are winning when you are actually on a treadmill. We grew 25% and lost nobody. That is a snowball, not a treadmill.
        </Body>

        <Body>
          It means the product is working. The community is working. The price point is right. The people are right. It means we finally have product-market fit.
        </Body>

        {/* Pre-CTA image */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          <Image
            src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=1200&q=80"
            alt="A founder team reviewing numbers together, representing the moment of realizing that zero churn and 25% growth in the same month means the community is finally working the way it was designed to"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            When you grow and nobody leaves, you are not on a treadmill anymore. You are on a snowball. (Photo: Unsplash)
          </p>
        </div>

        <SectionHeading>What Almost Every Founder Gets Wrong After a Spike</SectionHeading>

        <Body>
          Here is what I would tell any founder in the messy middle who just hit their first real growth spike.
        </Body>

        <Body>
          Do not take a break.
        </Body>

        <Body>
          I know that sounds harsh. And look, celebrate the win. Have that beer. You earned it. But know that it is not the end of the journey. What happens to a lot of founders is predictable and painful:
        </Body>

        <div className="my-6 flex flex-col gap-3">
          {[
            ["They hit the spike.", "Everything feels amazing. They think they are on top of the world."],
            ["They ease off.", "Just a little. A few fewer calls. A few skipped meetings. A slower response time."],
            ["Momentum dies.", "And it dies faster than it built. The cycle resets and they are back to grinding from a lower baseline."],
          ].map(([label, desc]) => (
            <div
              key={label}
              className="flex gap-4 rounded-xl px-5 py-4"
              style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <span className="mt-0.5 flex-shrink-0 text-sm font-bold" style={{ color: "#C9A96E" }}>{label}</span>
              <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{desc}</span>
            </div>
          ))}
        </div>

        <Body>
          The founders who win are the ones who take that spike and turn it into a snowball effect. You keep rolling and growing and growing. Because effectively, if you are not tripling every single year in those early stages, you are not going to succeed. That is not dramatic. That is what the math demands. Sustaining growth requires the same energy that created it. Maybe more.
        </Body>

        <SectionHeading>What Has to Be True for This to Continue</SectionHeading>

        <Body>
          If this growth rate held for the next 12 months, here is what would have to change: our operations need to get even tighter.
        </Body>

        <Body>
          Right now, we are still a little loose on how we manage our community manager workflows, how we handle event follow-ups, and all the small operational details that compound into either efficiency or chaos. We want to make sure every process is dialed in because at scale, loose processes do not just slow you down. They break.
        </Body>

        <Body>
          But I am optimistic. We have gone from meeting three times a week to every day. From split focus to all in. From hoping members stick around to watching zero churn at 250 members.
        </Body>

        <Quote>
          It is like finding a musical artist before they go platinum. The early believers, the ones who showed up when we were small and scrappy and figuring it out, they are going to look back on this time and know they were part of something special.
        </Quote>

        <Body>
          The messy middle does not last forever. Sometimes you look up and realize you are not in the middle anymore. You are building something real. And the only thing left to do is keep the momentum going.
        </Body>

        {/* CTA */}
        <div
          className="mt-16 rounded-2xl px-8 py-10 text-center"
          style={{ backgroundColor: "rgba(201,169,110,0.06)", border: "1px solid rgba(201,169,110,0.2)" }}
        >
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            Join While We&rsquo;re Still Building
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
