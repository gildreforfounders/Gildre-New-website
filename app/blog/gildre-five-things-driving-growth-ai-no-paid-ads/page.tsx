import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/blog/gildre-five-things-driving-growth-ai-no-paid-ads" },
  title: "Five Things Driving Gildre's Growth Right Now: AI, Chapter Leads, and Zero Paid Ads | Gildre",
  description:
    "Gildre is adding roughly one new member per day with no paid ads. Here are the five things that are actually driving it, from rebuilding our stack on Claude Code to partnering with founders inside our own community.",
  keywords: [
    "Gildre growth",
    "founder community growth",
    "no paid ads founder community",
    "Claude Code startup",
    "AI for startup operations",
    "founder community AI tools",
    "Gildre membership growth",
    "startup co-founder advice",
    "how to start a startup",
    "ICP founder community",
    "Gildre chapter leads",
    "bootstrapping founder community",
    "startup growth without paid ads",
    "organic startup growth",
    "startup validation",
    "co-founder equity",
    "startup product market fit",
    "Gildre 2026",
    "founder community what works",
  ],
  openGraph: {
    url: "https://www.gildre.com/blog/gildre-five-things-driving-growth-ai-no-paid-ads",
    title: "Five Things Driving Gildre's Growth Right Now: AI, Chapter Leads, and Zero Paid Ads",
    description:
      "Gildre is adding roughly one new member per day with no paid ads. Here are the five things that are actually driving it, the co-founder lessons we learned the hard way, and what I would tell any founder starting from scratch today.",
    type: "article",
    images: [
      {
        url: "https://www.gildre.com/images/community/community-group.webp",
        width: 2500,
        height: 1667,
        alt: "Gildre founder community members connecting in person",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Five Things Driving Gildre's Growth Right Now: AI, Chapter Leads, and Zero Paid Ads",
    description:
      "One new member per day, no paid ads, and a blog that goes from transcript to published in three minutes. Here is what is actually working at Gildre right now.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Five Things Driving Gildre's Growth Right Now: AI, Chapter Leads, and Zero Paid Ads",
  description:
    "Gildre co-founder Taiga Gamell shares the five things driving Gildre's current growth: full-time team commitment, strategic member partnerships, a rebuilt AI-backed tech stack, sharper ICP targeting, and chapter leads in cities with five or more members. Recorded from a conversation on the Growth Edge podcast with Samuel Pinnock of Blitz Growth Partner.",
  image: "https://www.gildre.com/images/community/community-group.webp",
  datePublished: "2026-08-20",
  dateModified: "2026-08-20",
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
  mainEntityOfPage: "https://www.gildre.com/blog/gildre-five-things-driving-growth-ai-no-paid-ads",
  about: [
    { "@type": "Thing", name: "Founder Community Growth" },
    { "@type": "Thing", name: "AI for Startups" },
    { "@type": "Thing", name: "Co-Founder Relationships" },
    { "@type": "Thing", name: "Startup Validation" },
    { "@type": "Thing", name: "Organic Growth" },
  ],
  keywords:
    "Gildre growth, founder community, no paid ads, Claude Code, AI for startups, co-founder advice, ICP, chapter leads, startup validation, organic growth",
};

const faqs = [
  {
    q: "How is Gildre growing without paid ads?",
    a: "Gildre's growth is driven by three channels running simultaneously: LinkedIn automation, word-of-mouth referrals from existing members, and organic content through SEO and GEO. Members can bring a plus-one founder to any in-person event, which keeps introducing the community to new people without any paid acquisition. Chapter leads in cities with five or more members handle local organic growth. The content side, blogs, podcast transcripts, guides, is now fast enough to produce consistently because the tech stack runs on Claude Code.",
  },
  {
    q: "What is Gildre's tech stack now?",
    a: "Gildre moved everything off Squarespace and rebuilt on Next.js, hosted on GitHub, with Claude Code as the primary development and content tool. The CRM is being rebuilt as a single tool that combines Monday and HubSpot functionality, backed by Claude. Daily planning, meeting prep, member notes, and blog production all run through Claude. A transcript that used to take four to five hours to turn into a published blog post now takes about three minutes.",
  },
  {
    q: "What is the Solveed partnership and how does it work?",
    a: "Solveed is an AI accelerator tool that guides founders through a 52-step process tailored to their specific company. Gildre partnered with Solveed so that members who opt in can share their progress directly with the Gildre team. Previously, Gildre tracked member progress through manual quarterly check-ins using a Google Sheet. Now the team can see live progress data without scheduling a call, and members reach out when they need support rather than waiting for a quarterly touchpoint.",
  },
  {
    q: "How does Gildre vet co-founders and when do you bring someone on?",
    a: "The core advice is to work with someone for a meaningful period, ideally at least 90 days, before discussing equity. Gildre's co-founding team worked together for two years before starting the company, so by the time they committed to it they had already proven to each other that they were high performers. A practical approach is to bring someone on as a sales advisor or contractor first, see how they actually perform, and then have the equity conversation once there is real evidence to work with. Skills should be complementary rather than overlapping, and every co-founder, regardless of their area, needs to be able to sell.",
  },
  {
    q: "What should a first-time founder do before building their product?",
    a: "Start with an unmet need you personally experience in your own work or life. Then validate that others share it: send surveys, run interviews, or look for internal signals at your company. Before writing any code, be honest about whether you have the financial runway to sustain the business through zero revenue for however long it takes. Then define your go-to-market: how exactly will you get the product into the hands of the first ten customers? Customer validation before building is the rule. If you can build cheaply with AI tools today, that changes the equation, but the validation step never goes away.",
  },
  {
    q: "Why is now the best time to start a company?",
    a: "The total addressable market for startups is expanding because AI is lowering the cost to build, the time to ship, and the headcount required to operate. A solo founder with the right AI tools can now build a product, run marketing, manage a CRM, and produce content that previously required a team. The compounding effect is real: every hour saved through AI automation can be reinvested into growth. The founders who figure out how to leverage AI now are not just more efficient, they are operating at a structural advantage over those who are not.",
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

const fiveThings = [
  {
    num: "01",
    label: "Full-time team commitment, every single day",
    body: "Before this growth window, we were meeting maybe two or three times a week. Now it's every day, and often on weekends too. All three of us are fully dedicated. That level of commitment is what allows us to catch problems fast, move fast, and stay aligned on what actually matters.",
  },
  {
    num: "02",
    label: "Strategic partnerships with members inside the community",
    body: "We recently partnered with Solveed, a 52-step AI accelerator tool built by one of our members, Christof Gomez Mannfeld. Members who opt in can share their live progress with us, replacing our old manual quarterly check-ins on Google Sheets. We are also partnering with Core GTM, another Gildre member's company, to help us scale our SEO and GEO content output. The best partnerships are already inside your community.",
  },
  {
    num: "03",
    label: "Rebuilding the entire stack on Claude Code",
    body: "We moved everything off Squarespace. The site is now on Next.js, hosted on GitHub, built and maintained with Claude Code. A blog post that used to take me four to five hours from transcript to published now takes about three minutes. The CRM is being rebuilt as a single unified tool combining Monday and HubSpot, all backed by Claude. When your tech stack is fast, your operations are fast.",
  },
  {
    num: "04",
    label: "Sharper ICP targeting",
    body: "We finally have our ideal customer profile dialed in to the point where the people coming in are the right fit from the first conversation. That makes onboarding faster, retention easier, and referrals more likely. Getting ICP right is underrated by most founders. Once you have it, everything downstream gets easier.",
  },
  {
    num: "05",
    label: "Chapter leads and sponsored in-person events",
    body: "Any city where we have five or more members now gets a chapter lead, or two, whose job is to grow local membership and facilitate in-person camaraderie. Every member can bring a plus-one founder to our events. The events are sponsored, so the experience is high quality without cost to members. The in-person layer is what turns an online community into something founders actually stay in.",
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

export default function GildreGrowthPlaybook() {
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
              Founder Playbook
            </span>
            <span className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
              Growth · AI · Operations · Co-Founders
            </span>
          </div>
          <h1
            className="text-[clamp(1.9rem,4.5vw,3.25rem)] font-bold leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Five Things Driving Gildre&apos;s Growth Right Now:{" "}
            <span style={{ color: "#C9A96E" }}>
              AI, Chapter Leads, and Zero Paid Ads
            </span>
          </h1>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            We are adding roughly one new member per day right now, and we are not running a single paid ad. Here is exactly what is working, the co-founder lessons we learned the hard way, and what I would tell any founder starting from scratch today.
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
                  Founder &amp; CEO, Gildre &nbsp;·&nbsp; Growth Edge Podcast
                </p>
              </div>
            </div>
            <div className="flex gap-5 text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
              <span>12 min read</span>
              <span>·</span>
              <span>Growth · AI · Operations</span>
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
            alt="Founders having a focused conversation, the kind of candid exchange that happens in a real peer community"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            From the Growth Edge podcast with Samuel Pinnock of Blitz Growth Partner. (Photo: Unsplash)
          </p>
        </div>

        <Callout>
          <strong style={{ color: "#C9A96E" }}>Context:</strong>{" "}
          I recently sat down with Samuel Pinnock on the Growth Edge podcast to talk about what is actually driving Gildre&apos;s growth, how AI has changed the way we operate, and what I have learned about co-founders and starting a company after building for three and a half years. This post draws from that conversation. Links to find me are at the bottom.
        </Callout>

        {/* Section 1 */}
        <Section>Where Gildre Is Right Now</Section>

        <Body>
          I am currently building from Tulum. Part of the reason I come to places like this is because we have been bootstrapping Gildre for three years, and when you are bootstrapping a startup you want to be as lean on expenses as possible. LATAM and Southeast Asia make it a lot easier to run lean than the Bay Area or Seattle.
        </Body>

        <Body>
          We have three co-founders: myself, Brian, and Michael. We span three generations. I am Gen Z on the cusp of millennial. Brian is millennial. Michael is 68. Each of us owns a distinct area of the business. Brian focuses on in-person events. Michael focuses on VC partnerships and strategic sponsors. I am focused on the technical side and marketing.
        </Body>

        <Body>
          This month we onboarded 18 new members. About one per day. We are not running paid ads. We do not do email marketing. We stopped that a while ago. Our growth is LinkedIn automation, word of mouth, and content through SEO and GEO. It feels like we finally cracked the code of engagement, retention, and membership growth compounding together at the same time.
        </Body>

        <Quote>
          It is kind of the best time in history to become an entrepreneur, and I think that is going to be true for the next 30 to 300 years.
        </Quote>

        {/* Section 2 */}
        <Section>How AI Changed the Way We Operate</Section>

        {/* Mid image 1 */}
        <div className="my-10 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          <Image
            src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80"
            alt="AI tools on a screen, representing the shift in how founders build and operate their businesses"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            If you are not leveraging AI to automate some part of your process right now, you are falling behind. (Photo: Unsplash)
          </p>
        </div>

        <Body>
          The biggest leadership lesson the recent growth has taught me is this: if you are not using AI to make your business more efficient, automate some type of process, or save your team time, you are falling behind. That is not a hedge. That is what I am watching play out in real time.
        </Body>

        <Body>
          I think about the trust curve the same way I think about the early internet. When e-commerce first appeared in the 90s and early 2000s, nobody put their credit card online. My family told me it was a scam. Now everyone buys everything on Amazon without thinking twice. AI is following the same curve. People were reluctant at first, did not want to share personal information, did not trust it for anything real. Now Michael, our 68-year-old co-founder, uses it every single day. The trust is there.
        </Body>

        <Body>
          Here is what that shift has looked like practically for us. I have pre-built Claude prompts that structure my entire day every morning, including meeting notes and context on every person I am going to talk to. We rebuilt the website entirely using Claude Code, moving off Squarespace and onto Next.js hosted on GitHub. I am currently rebuilding our CRM by combining Monday and HubSpot into a single tool backed by Claude.
        </Body>

        <Body>
          The most concrete example: a podcast transcript that used to take me four to five hours to turn into a published blog post now takes about three minutes. That is not an exaggeration. I put the transcript into Claude Code and it produces the entire blog, formatted and ready to publish.
        </Body>

        <Callout>
          <strong style={{ color: "#C9A96E" }}>The compounding effect:</strong>{" "}
          If every person on your team saves four hours per day through AI, those hours can be reinvested into growth, customer conversations, or product. Over a quarter, that is not incremental improvement. It changes what your company is capable of.
        </Callout>

        {/* Section 3 */}
        <Section>The Five Things That Are Actually Working</Section>

        <Body>
          I want to put these in no particular order because I genuinely think they are all equally important. Any one of them alone would not have moved the needle this much. It is the combination compounding.
        </Body>

        <div className="mb-8 flex flex-col gap-5">
          {fiveThings.map((item) => (
            <div
              key={item.num}
              className="flex items-start gap-5 rounded-2xl p-6"
              style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <span
                className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold"
                style={{ backgroundColor: "rgba(201,169,110,0.10)", color: "#C9A96E", fontFamily: "var(--font-fraunces)" }}
              >
                {item.num}
              </span>
              <div>
                <p className="text-sm font-bold text-white">{item.label}</p>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.58)" }}>
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section 4 */}
        <Section>What I Have Learned About Co-Founders</Section>

        {/* Mid image 2 */}
        <div className="my-10 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          <Image
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1200&q=80"
            alt="Two co-founders working side by side, representing the kind of complementary partnership that builds durable companies"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            Brian, Michael, and I worked together for two years before we ever started Gildre together. (Photo: Unsplash)
          </p>
        </div>

        <Body>
          Brian, Michael, and I worked together for two years before we ever started Gildre. We have now been running the company together for three and a half years, which means we have over five and a half years of working history. By the time we committed to starting the company, we already knew each other as high performers. That is not an accident. That is how we de-risked the co-founder relationship.
        </Body>

        <Body>
          A co-founder relationship is like a marriage. You are going to be with this person through the hardest moments of building something. You better actually like them. And not just like them from a dinner table, but from a work context.
        </Body>

        <ul className="mb-8 flex flex-col gap-4 pl-0">
          {[
            {
              label: "Map strengths and allocate ownership clearly",
              body: "We each own a distinct area. Brian owns in-person events. Michael owns sponsor and VC relationships. I own the technical and marketing side. When everyone is working in their strength zone, there is less stepping on each other and less resentment.",
            },
            {
              label: "Every co-founder needs to be able to sell",
              body: "It does not matter what your primary role is. Until you can hire salespeople, every person with equity in the company should be able to clearly articulate what you do and close a conversation. Selling is not a personality type. It is understanding the unmet need in front of you and filling it.",
            },
            {
              label: "Know them as a performer before you talk equity",
              body: "Bring someone on as a sales advisor or in a specific contractor role first. See how they actually perform over 90 days. Then have the equity conversation. Giving up equity to someone you have not seen work is one of the most expensive mistakes an early-stage founder can make.",
            },
            {
              label: "Complementary skills beat overlapping skills",
              body: "If you are both excellent at the same thing, you will step on each other's toes and erode trust. The best co-founder pairings cover different domains. One person's weakness is the other person's strength.",
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

        {/* Section 5 */}
        <Section>Five Steps for Starting a Startup From Scratch</Section>

        {/* Mid image 3 */}
        <div className="my-10 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          <Image
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
            alt="A founder working on a laptop in a focused environment, representing the early days of building something from scratch"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            Start with the unmet need you are already experiencing. Everything else follows from there. (Photo: Unsplash)
          </p>
        </div>

        <Body>
          If you are thinking about starting a company, here is how I would approach it regardless of your experience level.
        </Body>

        <ul className="mb-8 flex flex-col gap-5 pl-0">
          {[
            {
              num: "01",
              label: "Start with an unmet need you personally experience",
              body: "The best businesses come from problems the founder is living right now. If you are encountering something in your work or personal life every day and you think you have a solution, that is your starting point. Not a trend you read about. Something you are actually experiencing.",
            },
            {
              num: "02",
              label: "Validate before you build",
              body: "Send surveys. Run conversations. If you are at a company and your idea would fix something for your team, and 100 of your colleagues all say yes, that is enough signal to start building a beta. You do not need a massive study. You need enough honest signal from enough real people to know you are not the only one with this problem.",
            },
            {
              num: "03",
              label: "Be honest about your financial runway",
              body: "Do you have a job that is paying the bills? Do you have enough saved up that you could go without income for X months while building? You have to be realistic and pragmatic before you start. A lot of founders recently got laid off from tech and started companies by default. That can work. But you should know your number going in.",
            },
            {
              num: "04",
              label: "Have a go-to-market plan, not a full business plan",
              body: "You do not need a 40-page business plan. You need to know how you are going to get your product into your first customer's hands. If it is a B2B product, how are you going to reach the specific person at the specific company who would buy it? That question is the whole plan. The rest is detail you figure out as you go.",
            },
            {
              num: "05",
              label: "Start as a side project if you have a paying job",
              body: "If you have a job that is paying you well, start the business on the side. When the side project starts making more than your full-time salary, that is the moment you consider making the switch. That is a much cleaner transition than quitting first and building in financial stress.",
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

        <Quote>
          Customer validation always comes first. But right now, if you can build cheaply with AI tools, the equation changes. You can validate and ship at the same time in a way that was not possible two years ago.
        </Quote>

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

        {/* Find me */}
        <div
          className="mt-14 rounded-2xl px-7 py-6"
          style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#C9A96E" }}>
            Connect With Taiga
          </p>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            The best way to reach me is through{" "}
            <a href="https://www.gildre.com" style={{ color: "#C9A96E" }}>gildre.com</a> or on{" "}
            <a href="https://www.linkedin.com/in/taigagamell/" target="_blank" rel="noopener noreferrer" style={{ color: "#C9A96E" }}>
              LinkedIn (Taiga Gamell)
            </a>. My calendar link is connected directly to the one on the Gildre website. If you want to talk shop, reach out.
          </p>
        </div>

        {/* CTA */}
        <div
          className="mt-10 rounded-2xl px-8 py-10 text-center"
          style={{ backgroundColor: "rgba(201,169,110,0.06)", border: "1px solid rgba(201,169,110,0.2)" }}
        >
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            Join the Community
          </p>
          <h2
            className="mt-3 text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Apply for Gildre membership.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Weekly curated 1:1 introductions matched to your stage. 250+ vetted founders across 74 cities. In-person chapters in{" "}
            <Link href="/chicago" style={{ color: "#C9A96E" }}>Chicago</Link>,{" "}
            <Link href="/nyc" style={{ color: "#C9A96E" }}>NYC</Link>,{" "}
            <Link href="/boston" style={{ color: "#C9A96E" }}>Boston</Link>,{" "}
            <Link href="/bayarea" style={{ color: "#C9A96E" }}>Bay Area</Link>,{" "}
            <Link href="/austin" style={{ color: "#C9A96E" }}>Austin</Link>,{" "}
            <Link href="/la" style={{ color: "#C9A96E" }}>LA</Link>, and{" "}
            <Link href="/seattle" style={{ color: "#C9A96E" }}>Seattle</Link>. $59/month. No equity.
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
