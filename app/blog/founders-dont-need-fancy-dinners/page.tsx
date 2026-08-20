import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/blog/founders-dont-need-fancy-dinners" },
  title: "Founders Don't Need Fancy Dinners. They Need Someone Who Gets It. | Gildre",
  description:
    "Most founder communities are selling you a fantasy. Here is what founders in the messy middle actually need before Series A, and why the next wave of communities will be built on authenticity.",
  keywords: [
    "founder community",
    "founder peer support",
    "messy middle startup",
    "founder authenticity",
    "pre-series A founders",
    "affordable founder community",
    "vibe coding founders",
    "AI for founders",
    "founder operations",
    "Gildre founder community",
    "founder loneliness",
    "startup peer group",
    "founder community $59",
    "founder mentorship",
    "early stage startup community",
    "founder isolation",
    "startup community Chicago",
    "startup community New York",
    "founder peer matching",
  ],
  openGraph: {
    url: "https://www.gildre.com/blog/founders-dont-need-fancy-dinners",
    title: "Founders Don't Need Fancy Dinners. They Need Someone Who Gets It.",
    description:
      "Most founder communities are selling a fantasy. Here is what founders in the messy middle actually need before Series A, and why authenticity is the competitive advantage nobody is building on.",
    type: "article",
    images: [
      {
        url: "https://www.gildre.com/images/community/dinner.webp",
        width: 2500,
        height: 1667,
        alt: "Founders having a real conversation at a community dinner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Founders Don't Need Fancy Dinners. They Need Someone Who Gets It.",
    description:
      "Most founder communities are selling a fantasy. Here is what founders in the messy middle actually need before Series A.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Founders Don't Need Fancy Dinners. They Need Someone Who Gets It.",
  description:
    "Most founder communities sell access to a polished room of people who already made it. Founders in the messy middle need something different: peer support from founders going through the same problems in real time. This is what founder communities get wrong, what founders actually need before Series A, and why authenticity is the competitive advantage nobody is building on.",
  image: "https://www.gildre.com/images/community/dinner.webp",
  datePublished: "2026-08-19",
  dateModified: "2026-08-19",
  author: {
    "@type": "Person",
    name: "Taiga Gamell",
    url: "https://www.gildre.com",
    jobTitle: "Founder & CEO",
    worksFor: { "@type": "Organization", name: "Gildre", url: "https://www.gildre.com" },
  },
  publisher: {
    "@type": "Organization",
    name: "Gildre",
    logo: { "@type": "ImageObject", url: "https://www.gildre.com/images/gildre-logo.png" },
  },
  mainEntityOfPage: "https://www.gildre.com/blog/founders-dont-need-fancy-dinners",
  about: [
    { "@type": "Thing", name: "Founder Communities" },
    { "@type": "Thing", name: "Peer Support for Founders" },
    { "@type": "Thing", name: "Pre-Series A Startups" },
    { "@type": "Thing", name: "Founder Authenticity" },
    { "@type": "Thing", name: "AI for Founders" },
  ],
  keywords:
    "founder community, messy middle, peer support, pre-series A, founder authenticity, vibe coding, AI for founders, founder operations, Gildre, $59/month",
};

const faqs = [
  {
    q: "What do founders actually need from a community before Series A?",
    a: "Before Series A, founders need peers who are going through the exact same problems right now, not a Rolodex or a photo op. Stage-matched peer conversations, honest feedback, and access to founders who are actively building with the latest tools produce more leverage than exclusive dinners or name-brand advisor access. The specific match matters more than the prestige of the room.",
  },
  {
    q: "Why are most founder communities priced at $7,000 to $8,000 a month?",
    a: "High price points signal exclusivity and attract later-stage founders who can justify the spend against revenue. The problem is that founders in the messy middle, between MVP and $1M ARR, are often the most driven and the most in need of peer support. Gatekeeping at $7K to $8K per month locks out the exact founders who would benefit most and benefit the community most through their energy and hunger.",
  },
  {
    q: "How can a 15-minute conversation with another founder change your business?",
    a: "When you are building in isolation, you can only see what is in front of you. A founder who is actively using a tool, applying a different go-to-market approach, or working through a similar problem in a different industry can reframe your entire model in minutes. The leverage is in the timing: a peer who is building right now with the tools available right now speaks to your actual situation, not a situation from five years ago.",
  },
  {
    q: "What does standardizing operations before Series A actually mean?",
    a: "It means documenting processes, procedures, and expectations for every function in the business before you start hiring fast. When founders scale headcount before operations are standardized, new hires do not know what they are supposed to do, the founder becomes the single point of failure for institutional knowledge, and the machine breaks down right when it needs to be running fastest. Standardized operations are what make new hires effective from day one.",
  },
  {
    q: "What is vibe coding and why does it matter for founders?",
    a: "Vibe coding refers to building functional websites, applications, and product features using AI tools without a formal engineering background. What previously required a development team and a significant budget can now be done by a founder with the right AI tools and a few days of learning. The compounding effect is significant: founders who learn to build with AI reduce their dependency on outside developers, ship faster, and retain more of their budget for growth. The best place to learn this in real time is from other founders who are already doing it.",
  },
  {
    q: "What is Gildre and why does it cost $59 a month?",
    a: "Gildre is a private founder community built around weekly curated 1:1 introductions matched to your exact stage and current challenge. It is priced at $59 a month because the founders who need it most are often the ones who cannot afford $7,000 a month. The goal is to make the room accessible: 250+ vetted founders in 74 cities, in-person chapters in Chicago, New York, Boston, the Bay Area, Austin, Los Angeles, and Seattle, and 95% member retention over 24 months. No equity taken.",
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
  { sell: "Exclusive investor dinners", need: "Honest conversations with peers at the same stage" },
  { sell: "Name-brand advisor access", need: "Founders using today's tools right now" },
  { sell: "$7K–$8K/month premium pricing", need: "Accessible pricing that doesn't require $1M ARR to justify" },
  { sell: "Polished branding and past exits", need: "Authenticity about what building actually looks like" },
  { sell: "Cloud chasing parties", need: "Real support that moves the needle on your business" },
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

export default function FoundersDontNeedFancyDinners() {
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
              Founder Perspective
            </span>
            <span className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
              Community · Authenticity · Pre-Series A · AI
            </span>
          </div>
          <h1
            className="text-[clamp(1.9rem,4.5vw,3.25rem)] font-bold leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Founders Don&apos;t Need Fancy Dinners.{" "}
            <span style={{ color: "#C9A96E" }}>
              They Need Someone Who Gets It.
            </span>
          </h1>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Most founder communities are selling you a fantasy. A seat at a dinner table with people who already made it. A photo op with a name-brand investor. Here is what founders in the messy middle actually need, and why the next wave of communities will be built on something most people in this space are completely ignoring.
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
                <p className="text-xs font-semibold text-white">Taiga Gamell</p>
                <p className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Founder &amp; CEO, Gildre
                </p>
              </div>
            </div>
            <div className="flex gap-5 text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
              <span>10 min read</span>
              <span>·</span>
              <span>Community · Authenticity · Pre-Series A</span>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="mx-auto max-w-3xl px-6 py-16">

        {/* Hero image */}
        <div className="mb-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
            alt="Founders collaborating around a table in an authentic working session, not a polished dinner"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            The most valuable founder conversations happen when people stop performing and start being honest. (Photo: Unsplash)
          </p>
        </div>

        <Callout>
          <strong style={{ color: "#C9A96E" }}>The short version:</strong>{" "}
          Founders in the messy middle need peer support from people going through the exact same problems right now, not a Rolodex, not a photo op, and not a $7,000 monthly price tag. A single 15-minute conversation with the right founder can change your business model. Standardized operations before Series A is the single highest-leverage move most founders skip. And authenticity, not past exits or polished branding, is what founder communities will be built on by 2028.
        </Callout>

        {/* Key Takeaways */}
        <Section>Key Takeaways</Section>
        <ul className="mb-8 flex flex-col gap-3 pl-0">
          {[
            "Founders in the messy middle need peer support and real conversations, not access to a Rolodex",
            "A 15 to 30 minute conversation with the right founder can change your entire business model",
            "Gatekeeping founder communities at $7K to $8K per month locks out the hungriest, most driven builders",
            "Standardized operations before scaling is the single highest-leverage move pre-Series A",
            "Authenticity, not past exits or polished branding, is what founder communities will be built on by 2028",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-4 rounded-xl px-5 py-4"
              style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <span
                className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[0.6rem] font-bold"
                style={{ backgroundColor: "rgba(201,169,110,0.12)", color: "#C9A96E" }}
              >
                ✓
              </span>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>{item}</p>
            </li>
          ))}
        </ul>

        {/* Section 1 */}
        <Section>The Community I Needed Seven Years Ago Didn&apos;t Exist</Section>

        <Body>
          When I was in that messy middle myself, between MVP and product market fit, the one thing I wished existed was having founders to talk to. Not mentors on a pedestal. Not advisors who charge by the hour. Founders. People I could pick each other&apos;s brains with, who could help me understand better go-to-market functions, what steps to take in order for my business to succeed, and the right connections to actually run the business more effectively.
        </Body>

        <Body>
          That community didn&apos;t exist. Not at a price I could afford. Not with the quality of people I needed around me.
        </Body>

        <Body>
          Look, a lot of founders who can&apos;t afford those $7,000 or $8,000 monthly price tags, the ones that need a million dollar ARR minimum just to get in the door, are missing out on amazing opportunities. They&apos;re missing the chance to network with top-level founders at the dinner table, to bump shoulders with high quality people who are heavy hitters.
        </Body>

        <Quote>
          Here&apos;s what most community builders don&apos;t understand: a lot of these heavy hitters like talking and like working with founders who are younger, hungry, and driven. The energy goes both ways.
        </Quote>

        <Body>
          The moment that made me decide that charging $7,000 and making it a gatekept program was non-negotiable, that we would never do that, is because I was once in those shoes. If I had a community like Gildre for $59 a month back then, it would have been a no-brainer. I think my business from seven years ago would be successful today.
        </Body>

        <Body>
          Actually, with that being said, I am rekindling that business right now. Building a new product, building an entirely new go-to-market function with the resources I have now. I&apos;m going to test the waters and see how that goes. That is the kind of thing that happens when you finally have the support system you needed all along.
        </Body>

        {/* Mid image 1 */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          <Image
            src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1200&q=80"
            alt="Two founders having a candid one-on-one conversation, the kind of peer exchange that changes business models"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            A single honest conversation with a founder going through the same thing can change your entire model. (Photo: Unsplash)
          </p>
        </div>

        {/* Section 2 */}
        <Section>A 15-Minute Conversation That Changed Everything</Section>

        <Body>
          People assume founder communities are about investor introductions and operator Rolodexes. And sure, connections matter. But what I noticed is that founders in the messy middle honestly just need support. Support in the sense that they have other people to talk to who are going through the same problems.
        </Body>

        <Body>
          Let me give you a concrete example. I met with Larry Galen, one of our Gildre members and the founder of Clazy. He told me about all the amazing things that AI can do. That single conversation literally changed our entire business. Our model. What we do. How we operate as a business now. From our CRM to our website. It is incredible just from having a 15 to 30 minute conversation with someone like that.
        </Body>

        <Body>
          That is not a Rolodex play. That is not paying $8,000 a month for access. That is being around founders who are actively building, using the tools and resources that are there for the now.
        </Body>

        {/* Comparison table */}
        <Section>What Founders Are Being Sold vs. What They Actually Need</Section>

        <div className="mb-10 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          <div
            className="grid grid-cols-2 px-5 py-3 text-[0.6rem] font-bold uppercase tracking-widest"
            style={{ backgroundColor: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.4)" }}
          >
            <span>What Communities Sell</span>
            <span style={{ color: "#C9A96E" }}>What Founders Actually Need</span>
          </div>
          {comparisonRows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-2 gap-4 px-5 py-4 text-sm"
              style={{
                borderTop: "1px solid rgba(255,255,255,0.05)",
                backgroundColor: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)",
              }}
            >
              <span style={{ color: "rgba(255,255,255,0.45)" }}>{row.sell}</span>
              <span style={{ color: "rgba(255,255,255,0.8)" }}>{row.need}</span>
            </div>
          ))}
        </div>

        <Body>
          That is the gap. And it is massive.
        </Body>

        {/* Section 3 */}
        <Section>Vibe Coding a $200,000 Website for $59 a Month</Section>

        <Body>
          Here is where the AI piece connects to everything I am talking about.
        </Body>

        <Body>
          Just one year ago, maybe even less than that, you really needed a foundation in order to understand how to build a mobile application or a website or any function on a piece of technology. From augmented reality to virtual reality to building a marketplace, a blog page, a search query function on a page. You needed developers. You needed budget. You needed time.
        </Body>

        <Body>
          The specific moment I realized everything had shifted was, again, when I talked to Larry Galen. He walked me through exactly the process he went through building his website, making it look incredible. And I am looking at this thing thinking: how does this website look like a $200,000 website that was built by a marketing agency?
        </Body>

        <Quote>
          He showed me the exact process. That is the exact moment I realized that leveraging AI rather than hiring it out, you can do a whole lot more.
        </Quote>

        {/* Mid image 2 */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
            alt="A founder building their product using AI tools, representing the shift that makes a $200,000 website buildable for the cost of a monthly community membership"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            What required a development team and a significant budget a year ago can now be done by a founder with the right tools and a few days of learning. (Photo: Unsplash)
          </p>
        </div>

        <Body>
          Now granted, since I am not a developer, it is taking me a little bit longer to set up certain things using Claude Code. But this is just a game changer. And it is going to be progressing faster and faster for the next 30 to 300 years.
        </Body>

        <Callout>
          <strong style={{ color: "#C9A96E" }}>Right now is the most critical moment.</strong>{" "}
          Being part of a founder community like Gildre and being around folks who are consistently using AI, we are all pioneers in this industry. I didn&apos;t learn about vibe coding from a course or a conference. I learned it from a fellow founder in a 15-minute conversation. That is the compound effect of the right community.
        </Callout>

        {/* Section 4 */}
        <Section>The One Thing I&apos;d Tell Every Pre-Series A Founder</Section>

        <Body>
          If a founder joined Gildre today at $59 a month and asked me what one thing would actually move their needle before Series A, here is what I would tell them.
        </Body>

        <Body>
          Button down on your operations. Get everything standardized.
        </Body>

        <Body>
          I know that sounds unsexy. Founders want to talk about growth hacks and fundraising strategy and viral loops. But here is how businesses crumble:
        </Body>

        <ul className="mb-8 flex flex-col gap-4 pl-0">
          {[
            {
              num: "01",
              label: "They skip standardizing operations",
              body: "No documented processes, no clear procedures. Everything lives in the founder's head.",
            },
            {
              num: "02",
              label: "They start scaling and hiring fast",
              body: "Because the numbers are growing and investors want to see headcount and velocity.",
            },
            {
              num: "03",
              label: "New hires are not onboarded correctly",
              body: "They do not know what they are doing because there is nothing standardized to teach them.",
            },
            {
              num: "04",
              label: "The value disappears",
              body: "The machine breaks down right when it needs to be running fastest.",
            },
          ].map((item) => (
            <li
              key={item.num}
              className="flex items-start gap-5 rounded-2xl p-5"
              style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <span
                className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold"
                style={{ backgroundColor: "rgba(201,169,110,0.10)", color: "#C9A96E", fontFamily: "var(--font-fraunces)" }}
              >
                {item.num}
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
          So before you scale to Series A, understand all the operational procedures. Make your business a well-oiled machine so that when it is moving fast and building faster, every new person who comes in understands exactly the standardized operating procedures for their specific function.
        </Body>

        <Body>
          And then make a really good hiring methodology and stick with it. Do not deviate. Do not rush. The compounding effect of good operations plus good hiring is what separates the founders who make it through that messy middle from the ones who flame out.
        </Body>

        {/* Section 5 */}
        <Section>Authenticity Is the Competitive Advantage Nobody&apos;s Building On</Section>

        {/* Mid image 3 */}
        <div className="my-10 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          <Image
            src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80"
            alt="Founders gathered in an authentic, relaxed setting, representing the kind of honest community that drops the pitch deck voice"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            More real conversations. More in-person connection. More honesty about what building actually looks like on a Tuesday afternoon when nothing is working. (Photo: Unsplash)
          </p>
        </div>

        <Body>
          I think authenticity is the one thing that people who join founder communities actually want. And a lot of these founder communities are not building on authenticity. They are building on past success from maybe an exit or from whatever branding story they have constructed.
        </Body>

        <Body>
          I think authenticity is something that is hidden in a lot of startups because when you are reporting back to investors or talking to your company, you want to obviously talk the numbers up. Paint a better picture than what reality is.
        </Body>

        <Body>
          But that is exactly the problem. If your founder community is built on the same performance that founders are already exhausted from maintaining everywhere else, what is the point?
        </Body>

        <Quote>
          I think bringing that type of authenticity, that reality of being a founder, is what founder communities need and will want in 2028. More real conversations. More in-person connection. More honesty about what building actually looks like on a Tuesday afternoon when nothing is working.
        </Quote>

        <Body>
          That is what we are focused on at Gildre. We want to make sure that every founder who walks through our door, whether virtual or in person, feels like they can drop the pitch deck voice and just be honest about where they are.
        </Body>

        <Body>
          Because it is like finding a musical artist before they go platinum. The best founders, the hungriest ones, the most driven ones, are out there right now building something incredible. They just cannot afford $8,000 a month to be in the room.
        </Body>

        <Body>
          We want to make sure that room is open. $59 a month. No gatekeeping. Just founders helping founders through the messy middle.
        </Body>

        {/* FAQ */}
        <Section>Common Questions</Section>

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
            Keep Up the Momentum
          </p>
          <h2
            className="mt-3 text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            The room is open. $59 a month.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Weekly curated 1:1 introductions matched to your stage. 250+ vetted founders across 74 cities. In-person chapters in{" "}
            <Link href="/chicago" style={{ color: "#C9A96E" }}>Chicago</Link>,{" "}
            <Link href="/nyc" style={{ color: "#C9A96E" }}>NYC</Link>,{" "}
            <Link href="/boston" style={{ color: "#C9A96E" }}>Boston</Link>,{" "}
            <Link href="/bayarea" style={{ color: "#C9A96E" }}>Bay Area</Link>,{" "}
            <Link href="/austin" style={{ color: "#C9A96E" }}>Austin</Link>,{" "}
            <Link href="/la" style={{ color: "#C9A96E" }}>LA</Link>, and{" "}
            <Link href="/seattle" style={{ color: "#C9A96E" }}>Seattle</Link>. No equity taken.
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
