import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/blog/jaythan-elam-jointley-startup-design-microsoft" },
  title: "Jaythan Elam: From Farming Roots and a Coin Flip to Microsoft, AOL, and Building Jointley Into a $300M Startup Design Studio | Gildre",
  description:
    "Jaythan Elam grew up on a farm in the South, flipped a coin to decide who went to grad school, landed at a Microsoft-acquired startup as employee number five, and eventually built Jointley, a design studio that has helped raise over $300M for early-stage startups.",
  keywords: [
    "Jaythan Elam",
    "Jointley",
    "startup design studio",
    "startup branding",
    "pitch deck design",
    "Microsoft acquisition Jellyfish",
    "startup fundraising design",
    "founder story",
    "design director AOL",
    "startup seed round design",
    "Gildre member",
    "Start to Scale podcast",
    "startup brand identity",
    "fractional design startup",
    "entrepreneurship design",
    "founder community Gildre",
    "startup founder interview",
    "bootstrapping startup",
    "AI design workflow",
    "startup authenticity",
  ],
  openGraph: {
    url: "https://www.gildre.com/blog/jaythan-elam-jointley-startup-design-microsoft",
    title: "Jaythan Elam: From Farming Roots and a Coin Flip to Microsoft, AOL, and $300M in Startup Fundraising",
    description:
      "Jaythan Elam grew up watching his parents bootstrap a farm and a nursery business in the South. Decades later, his design studio Jointley has helped startups raise over $300M. He never ran a single marketing campaign to get there.",
    type: "article",
    images: [
      {
        url: "https://www.gildre.com/images/community/mentor-match.webp",
        width: 2500,
        height: 1667,
        alt: "Jaythan Elam, founder of Jointley, on the Start to Scale podcast with Gildre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaythan Elam: From Farming Roots to $300M in Startup Fundraising — Without a Single Marketing Campaign",
    description:
      "Jaythan Elam of Jointley on growing up on a farm, surviving a Microsoft acquisition, going all-in on his own studio, and building a $300M startup design business entirely on referrals.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Jaythan Elam: From Farming Roots and a Coin Flip to Microsoft, AOL, and Building Jointley Into a $300M Startup Design Studio",
  description:
    "Jaythan Elam, founder and CEO of Jointley, grew up on a farm in the South where his parents bootstrapped a nursery business on the side. A coin flip moved him to Wisconsin, where he landed at an e-commerce startup acquired by Microsoft and became employee number five. He eventually went all-in on Jointley, a design studio that helps startups build their brand, product concept, and pitch deck from the ground up — and has helped raise over $300M for early-stage companies, all through referrals and without a single marketing campaign.",
  image: "https://www.gildre.com/images/community/mentor-match.webp",
  datePublished: "2026-08-21",
  dateModified: "2026-08-21",
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
  mainEntityOfPage: "https://www.gildre.com/blog/jaythan-elam-jointley-startup-design-microsoft",
  about: [
    { "@type": "Person", name: "Jaythan Elam", jobTitle: "Founder & CEO", worksFor: { "@type": "Organization", name: "Jointley" } },
    { "@type": "Thing", name: "Startup Branding" },
    { "@type": "Thing", name: "Pitch Deck Design" },
    { "@type": "Thing", name: "Startup Fundraising" },
    { "@type": "Thing", name: "Founder Community" },
  ],
  keywords:
    "Jaythan Elam, Jointley, startup design, pitch deck, branding, Microsoft acquisition, founder story, $300M fundraising, referral-only growth, Gildre, authenticity, AI workflows",
};

const faqs = [
  {
    q: "What does Jointley do?",
    a: "Jointley is a design studio founded by Jaythan Elam that helps startups from the ground up. They work on brand identity, product concept, and pitch deck design, and partner with founders from that first seed round forward. Jointley has helped startups raise over $300M in funding. Almost all of their business comes through referrals rather than any formal marketing.",
  },
  {
    q: "How did Jaythan Elam get into startups in the first place?",
    a: "Jaythan grew up in the South in a family that farmed and bootstrapped a nursery business on the side. When his wife won a coin flip to go to grad school in Wisconsin, Jaythan moved without a plan and eventually landed at Jellyfish, an e-commerce startup, as employee number five. He was hired despite the company forgetting about his interview. They promised to teach him everything about the internet and offered healthcare, which was enough. Jellyfish was later acquired by Microsoft, making it his first experience inside a major enterprise.",
  },
  {
    q: "What was it like going through a Microsoft acquisition?",
    a: "Jaythan describes it as intense and disorienting rather than glamorous. There was no formal onboarding. Everyone had to re-interview for their jobs. Microsoft was navigating the Steve Ballmer era, the Yahoo acquisition rumors, and the transition from Live Search to Bing, all at once. Jaythan had to redesign the entire product in a month in anticipation of the Bing launch, only for everything to go on hold. The Wisconsin office was eventually shut down after being kept on as an R&D unit for almost a year. He also built an iOS app for Bing Shopping that was pitched to Steve Ballmer.",
  },
  {
    q: "How does Jointley grow without marketing?",
    a: "Jointley operates almost entirely on referrals. Jaythan attributes this to doing genuinely good work, treating clients like family, and being willing to give more time than clients are paying for. He describes Jointley's client philosophy as trying to recreate a small-town business mindset inside a global economy: knowing clients personally, texting them directly, and caring about their outcomes as if they are your own. He has never needed to run a formal marketing campaign. His clients keep sending new business.",
  },
  {
    q: "How does Jointley maintain authenticity while using AI tools?",
    a: "Jaythan describes the process as the opposite of slop. He uses a Scooby-Doo sandwich analogy: all the work, research, brand strategy, and copy inputs go in first, compressed like a giant sandwich being squished down, and then fed into Claude via MCP. The output on the other end is on-brand and distinct rather than generic AI content. He emphasizes that the same amount of work still goes in upfront. The AI speeds up the final production, but an expert still needs to do the last five percent of refinement. He built a working version of a struggling startup's mobile app over a single weekend using this approach.",
  },
  {
    q: "What is Jaythan's advice for founders sitting on a side hustle?",
    a: "Ask yourself what your evolution has been: what did it start as, and what is it today, and how does that make you feel? Jaythan warns against scaling outside of yourself. You cannot build your business into something that doesn't feel like you. He also says the signal to go full-time is when your clients are filling your cup back up with joy, when you are just as tired as you were at your day job but you do not want to go back. And he warns against staying too long: he admits he should have left his last job six months before he was laid off. He had already achieved what he set out to do there. Instead, he outlived his useful window and got pushed out. That push is what forced him to go all-in.",
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

export default function JaythanElamBlog() {
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
              Founder Story
            </span>
            <span className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
              Design · Startups · Fundraising · Community
            </span>
          </div>
          <h1
            className="text-[clamp(1.9rem,4.5vw,3.25rem)] font-bold leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Jaythan Elam: From Farming Roots and a Coin Flip to{" "}
            <span style={{ color: "#C9A96E" }}>
              Microsoft, AOL, and $300M in Startup Fundraising
            </span>
          </h1>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Jaythan Elam grew up watching his parents bootstrap a nursery on the side of a Southern farm. He never planned to be an entrepreneur. A coin flip moved him to Wisconsin. An interview the company forgot about landed him at a startup that got acquired by Microsoft. And a layoff decades later pushed him to go all-in on Jointley, a design studio that has helped startups raise over $300 million, entirely through referrals.
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
                  Start to Scale Podcast
                </p>
              </div>
            </div>
            <div className="flex gap-5 text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
              <span>14 min read</span>
              <span>·</span>
              <span>Design · Startups · Fundraising</span>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="mx-auto max-w-3xl px-6 py-16">

        {/* Hero image */}
        <div className="mb-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&w=1200&q=80"
            alt="A designer working on brand identity and startup materials, representing Jointley's hands-on approach to building startups from the ground up"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            Jaythan Elam, founder of Jointley, on the Start to Scale podcast. Connect with him on{" "}
            <a href="https://www.linkedin.com/in/jaythan/" target="_blank" rel="noopener noreferrer" style={{ color: "#C9A96E" }}>LinkedIn</a>. (Photo: Unsplash)
          </p>
        </div>

        <Callout>
          <strong style={{ color: "#C9A96E" }}>At a glance:</strong>{" "}
          Jaythan Elam is the founder and CEO of{" "}
          <a href="https://www.linkedin.com/company/jointley" target="_blank" rel="noopener noreferrer" style={{ color: "#C9A96E" }}>Jointley</a>,
          a design studio that helps early-stage startups with brand identity, product concept, and pitch decks from pre-seed through Series A.
          Jointley has helped startups raise over $300 million in funding. Jaythan is also a Gildre member and joined Taiga Gamell on the Start to Scale podcast to talk about his path from the South to Microsoft, the career he built on serendipity, and the business he built entirely on referrals.
        </Callout>

        {/* Section 1 */}
        <Section>The Farm That Taught Him How to Bootstrap</Section>

        <Body>
          Jaythan Elam did not grow up calling himself an entrepreneur. But he grew up watching one. His parents farmed in the South, raised and grew everything around them, and when farming stopped paying well, his father added a nursery business on the side. He pulled family members in to help build it. Everyone wore boots. Everyone chipped in.
        </Body>

        <Body>
          That experience, sitting in the hot sun trying to get a business off the ground with nothing but resources and intellect and the people around you, was the blueprint. Jaythan did not recognize it until much later in life. But it was always there.
        </Body>

        <Quote>
          I didn&apos;t know that that&apos;s what was being instilled in me until I came out of college. I saw a startup mentality around a table in the South, with everybody literally bootstrapping. Everybody had on boots.
        </Quote>

        <Body>
          The creative spark came in school, when he first got access to design tools. The moment he understood what design could do, he knew he wanted to build things. A school project with two colleagues became Mule Magazine, a four-color print publication they sold ad space for, designed the ads themselves, sourced the paper, found a printer, and rallied volunteers to get it out the door. People kept telling them it would never be a real thing. That frustration is exactly what made it one.
        </Body>

        {/* Section 2 */}
        <Section>A Coin Flip, a Moving Van, and Employee Number Five</Section>

        {/* Mid image 1 */}
        <div className="my-10 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          <Image
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=80"
            alt="A startup office in the early internet era, representing Jaythan's first days at Jellyfish before the Microsoft acquisition"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            Jellyfish forgot about his interview. They still called him before he got home. (Photo: Unsplash)
          </p>
        </div>

        <Body>
          When Jaythan and his wife came out of school with only enough money for one of them to pursue a graduate degree, they flipped a coin. She wanted to study stem cells. He wanted to study art. She won. They loaded a moving van and drove to Madison, Wisconsin, where the professor she wanted to work with was based and where stem cells had been discovered.
        </Body>

        <Body>
          With a baby on the way and a print industry job that would not offer health insurance, Jaythan spent two days interviewing at two dozen places across Madison. At Jellyfish, an e-commerce startup, the team had forgotten he was coming in. They were surprised to see him. But they were immediately excited by his creative portfolio, the kind of book you actually had to carry around in those days, and they called him before he got home to offer him the job.
        </Body>

        <Body>
          They promised to teach him everything about the internet. They were five minutes from the house. They offered healthcare for two years. He took it. He became employee number five.
        </Body>

        {/* Section 3 */}
        <Section>Inside a Microsoft Acquisition During the Most Volatile Era in the Company&apos;s History</Section>

        <Body>
          Jellyfish was acquired by Microsoft. It was not like the movies. It was intense in a different way, the kind of disorienting intensity that comes from being very close to the source of something enormous and not fully understanding what is happening around you.
        </Body>

        <Body>
          The timing was not easy. Steve Ballmer was still running the company. Yahoo acquisition rumors were everywhere. The search product was still called Live Search. Microsoft wanted to build a shopping and deals alternative to compete with Woot and rebate.com. Jaythan had to redesign the entire product in under a month in anticipation of a new Bing announcement. Then everything went on hold because of the Yahoo situation. Then the layoffs started.
        </Body>

        <Quote>
          We had to lay people off in our office. It was scary. And then we just went right back to work again. It was a weird thing to go through.
        </Quote>

        <Body>
          There was no formal onboarding. Everyone had to re-interview for their jobs. The executive who interviewed Jaythan told him that designers with his background were rare at Microsoft, where most of the design team came from developer roots. He was told there was a long career available to him if he wanted it. He was interested. He was even flown out to Seattle for a two-day interview for a leadership position. They turned him down, not because of his work, but because, in their words, he did not know enough about internal bureaucracy to handle the job.
        </Body>

        <Body>
          He went home. The Wisconsin office was eventually shut down after being kept on as a research and development unit for nearly a year. Before it closed, Jaythan built an iOS app for Bing Shopping. It was pitched to Steve Ballmer. There were conversations about it becoming a native app on a secret Microsoft device. None of it materialized.
        </Body>

        <Callout>
          <strong style={{ color: "#C9A96E" }}>The career pattern:</strong>{" "}
          Jaythan went on to serve as design director at AOL and held roles at ADP List and Stored before going all-in on Jointley. Looking back across his resume, he points to a consistent theme: a hard thing happened, and he turned it into a good thing. The Microsoft rejection. The AOL wind-down. The eventual layoff that pushed him out the door for good. Each one became fuel.
        </Callout>

        {/* Section 4 */}
        <Section>The Layoff That Was Also a Relief</Section>

        {/* Mid image 2 */}
        <div className="my-10 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80"
            alt="A founder sitting with clarity and focus, representing the moment of going all-in on a business after years of building on the side"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            When the all-in moment arrived, it found him. He just tried to embrace it. (Photo: Unsplash)
          </p>
        </div>

        <Body>
          Jaythan had run Jointley as a side business for most of his adult life since leaving college. It started as career advice from a colleague. For years it stayed small, extra work taken on to help pay for his kids&apos; private school tuition. He cared about the quality of the work. He did not care much about how much money it made.
        </Body>

        <Body>
          By the time he was at his last full-time role, he had already achieved everything he set out to do there. He should have left six months before he was laid off. He knew it. The hairs were standing up on the back of his neck. He ignored them. He stayed because he saw something bigger on the horizon and wanted to chase it. Instead he got pushed out, a numbers game and nothing more.
        </Body>

        <Body>
          He was not sad about it. He was a little weird about it, because everybody around him was devastated, and he was not. He kept telling people it was okay. He knew, from every book he had read, that you cannot build something real with one foot in and one foot out. The moment found him. He tried to embrace it.
        </Body>

        <Quote>
          Everybody wanted to feel bad. And it looks weird when you&apos;re not feeling bad. I was pretty happy about it. And I just hoped that would be infectious.
        </Quote>

        <Body>
          He filled the transition period by mentoring others going through the same thing. He was surprised by the range of people who reached out, from all over the world, many of them more qualified on paper than he was. He mentored anyway. He put his positivity somewhere useful.
        </Body>

        {/* Section 5 */}
        <Section>A $300M Studio Built Entirely on Referrals</Section>

        <Body>
          Jointley has never run a marketing campaign. Almost a hundred percent of the work comes from recommendations from past clients. Jaythan attributes this to one thing: being genuinely good at the work, and treating the people they work with like family.
        </Body>

        <Body>
          He describes his operating philosophy as trying to recreate a small-town business inside a global economy. He knows his clients by first name. He knows about their kids. He texts them directly, late at night, because the relationship is built on trust rather than formality. A venture capital firm in New York keeps sending Jointley business not because of a contract or a pitch, but because they know Jaythan cares about their outcomes as much as they do.
        </Body>

        <Quote>
          I&apos;m trying to recreate a small-town business in a very global economy. And I&apos;d like to think that&apos;s how we&apos;re thriving.
        </Quote>

        <Body>
          There is a children&apos;s movie called Robots with a robot whose whole mission is to see a need and fill a need. People just show up at his front door. Jaythan felt like that. The more he offered something that was genuinely hard to find elsewhere, the more people kept showing up without him having to hang a sign.
        </Body>

        {/* Section 6 */}
        <Section>Authenticity in the Age of AI Slop</Section>

        {/* Mid image 3 */}
        <div className="my-10 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
            alt="A design and technology workspace, representing how Jointley combines deep creative work with AI tools to build at startup speed"
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <p className="px-4 py-2.5 text-xs italic" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "rgba(0,0,0,0.2)" }}>
            All the work still goes in. The AI compresses it. An expert does the last five percent. (Photo: Unsplash)
          </p>
        </div>

        <Body>
          Jaythan has been building his own internal AI workflow at Jointley for some time, and his description of it cuts through the noise around AI-generated content more clearly than most.
        </Body>

        <Body>
          He uses a Scooby-Doo analogy. You know the part in the cartoon where Scooby and Shaggy make a giant stacked sandwich, tie a string to it, and squish it down so it fits in one bite? That is what Jointley does with AI. All the real work, the brand strategy, the research, the messaging, the copy, gets loaded into markdown files and fed into Claude via MCP. The output on the other end is not generic. It is on-brand, specific, and does not drift. But the same amount of work still goes in upfront. An expert still handles the last five percent of refinement. The AI does not replace the thinking. It compresses the production.
        </Body>

        <Body>
          The Nashville proof point makes it concrete. A startup came to Jointley nearly bankrupt. They had been trying to ship a new version of their mobile app for six months and had not been able to do it. Jaythan and his partner took a weekend. On Friday they pitched the new design. By Monday morning they delivered a working GitHub repo of the actual application, not Figma mockups but functioning code. The startup is now using that build to go out and raise again.
        </Body>

        <Quote>
          They were like, wait, wait, what is this? It took them a minute to get their mind wrapped around the fact that the design we pitched Friday was now working Monday morning. Merry Christmas.
        </Quote>

        {/* Section 7 */}
        <Section>What He Would Tell Founders Sitting on a Side Hustle</Section>

        <Body>
          The first question Jaythan would ask is: what has the evolution been? What did it start as and what is it today? For him, Jointley started as a way to pay for private school. It became the thing he would put on his shirt in his coffin. Those are different things, and knowing which one you are dealing with is everything.
        </Body>

        <ul className="mb-8 flex flex-col gap-4 pl-0">
          {[
            {
              label: "Scale you, not outside of you",
              body: "Jaythan tried to build Jointley into something that did not feel like him. It did not work. The only path that works is figuring out how to scale yourself: your values, your instincts, your way of working. When it feels awkward, that is a signal you have gone outside of your lane.",
            },
            {
              label: "Your customers will do your marketing for you",
              body: "If the work is right, clients will recommend you before you ever put out a sign. The signal to watch is not how much money you are making. It is whether customers are validating the work loudly enough that more people keep showing up at the door.",
            },
            {
              label: "Your cup will get filled in a way your day job never did",
              body: "You will be just as tired as you were at your day job. But the clients and customers will fill your cup back up with joy. You did not know that was possible before. Once you feel it, you will not want to go back.",
            },
            {
              label: "Do not wait too long to leave",
              body: "Jaythan should have left his last job six months before he was laid off. He had already done everything he set out to do there. He stayed because he wanted more. He outlived his useful window and got pushed. The all-in moment is better chosen than forced.",
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
          His closing advice is simple: find your community. He credits Gildre, and specifically Michael Frank, with providing one of the best conversations he had in the past year. The right room changes what you are able to see about your own business.
        </Body>

        {/* FAQ */}
        <Section>Common Questions About Jaythan Elam and Jointley</Section>

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

        {/* Guest info */}
        <div
          className="mt-14 rounded-2xl px-7 py-6"
          style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#C9A96E" }}>
            Connect With Jaythan
          </p>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Jaythan Elam is the founder and CEO of{" "}
            <a href="https://www.linkedin.com/company/jointley" target="_blank" rel="noopener noreferrer" style={{ color: "#C9A96E" }}>Jointley</a>.
            {" "}Find him on{" "}
            <a href="https://www.linkedin.com/in/jaythan/" target="_blank" rel="noopener noreferrer" style={{ color: "#C9A96E" }}>LinkedIn</a>{" "}
            or reach out directly if you are an early-stage startup looking for a design partner for your brand, product, or pitch deck.
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
            Find your community.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Gildre is where founders like Jaythan find the right conversations. Weekly curated 1:1 introductions matched to your stage. In-person chapters in{" "}
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
