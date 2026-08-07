import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/blog/cody-graham-sogo-restaurant-app-chicago" },
  title: "Cody Graham: How SoGo Is Turning Restaurant Discovery Into Personalized Curation — One Meal at a Time | Gildre",
  description:
    "Cody Graham, COO and Head of Product at SoGo, on building a restaurant curation app that actually knows you, why a Scotland flat led to a Chicago startup, and the decision framework every founder needs: right, wrong, or no decision.",
  keywords: [
    "Cody Graham",
    "SoGo app",
    "SoGo restaurant",
    "Some Good People",
    "restaurant curation app",
    "personalized restaurant recommendations",
    "food discovery app Chicago",
    "restaurant app startup",
    "Chicago food tech",
    "product manager turned founder",
    "Michigan State entrepreneur",
    "Gildre member",
  ],
  openGraph: {
    url: "https://www.gildre.com/blog/cody-graham-sogo-restaurant-app-chicago",
    title: "Cody Graham: How SoGo Is Turning Restaurant Discovery Into Personalized Curation — One Meal at a Time",
    description:
      "Cody Graham on building SoGo: the restaurant app that learns who you are, why the best product decisions start with real human problems, and what a Scotland study abroad taught him about co-founding a company.",
    type: "article",
    images: [
      {
        url: "https://www.gildre.com/images/cody-graham-sogo.webp",
        width: 750,
        height: 750,
        alt: "Cody Graham, COO and Head of Product at SoGo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cody Graham of SoGo: The Restaurant App That Knows You — Not Just What's Nearby",
    description:
      "How Cody Graham went from Scrum Master to startup COO, why SoGo filters restaurants by who you actually are, and the three outcomes every founder needs to understand.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Cody Graham: How SoGo Is Turning Restaurant Discovery Into Personalized Curation — One Meal at a Time",
  description:
    "Cody Graham, COO and Head of Product at SoGo (Some Good People Inc.), on building a restaurant curation app that personalizes recommendations by mood, dietary needs, and who you're dining with — starting in Chicago and expanding from there. He joined the Start to Scale Podcast to share the origin story, the product philosophy, and the decision framework that keeps him focused.",
  image: "https://www.gildre.com/images/cody-graham-sogo.webp",
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
    "https://www.gildre.com/blog/cody-graham-sogo-restaurant-app-chicago",
  about: [
    {
      "@type": "Person",
      name: "Cody Graham",
      jobTitle: "COO and Head of Product, SoGo",
    },
    {
      "@type": "Organization",
      name: "SoGo",
      description: "Personalized restaurant curation app based in Chicago, built by Some Good People Inc.",
    },
  ],
  keywords:
    "Cody Graham, SoGo, SoGo app, Some Good People, restaurant curation, personalized restaurant recommendations, Chicago food app, food tech startup, Michigan State, Gildre",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Cody Graham",
  jobTitle: "COO and Head of Product, SoGo",
  knowsAbout: [
    "Product Management",
    "Agile and Scrum",
    "Restaurant Tech",
    "App Development",
    "Consumer Personalization",
    "AI Tools for Startups",
    "Business Analysis",
    "Startup Operations",
  ],
  description:
    "Cody Graham is the COO and Head of Product at SoGo (Some Good People Inc.), a personalized restaurant curation app based in Chicago. A Michigan State University graduate, he met his co-founders Connor Musichuk and Joe Schaener during a study abroad program in Scotland. His career spans product management, business analysis, Scrum, and building an Agile department from scratch at Fusion 92. He is a Gildre member.",
};

const faqs = [
  {
    q: "Who is Cody Graham?",
    a: "Cody Graham is the COO and Head of Product at SoGo, a personalized restaurant curation app built by Some Good People Inc. and based in Chicago. A Michigan State University graduate with a background in product management, business analysis, and Agile methodology, he met his co-founders Connor Musichuk and Joe Schaener during a study abroad program in Scotland. He is a Gildre member.",
  },
  {
    q: "What is the SoGo app?",
    a: "SoGo is a restaurant curation app that learns who you are and recommends restaurants that match your specific preferences, dietary needs, mood, and the people you're dining with. Unlike broad discovery platforms like Google or Yelp, SoGo filters out everything that doesn't fit you, whether you keep kosher, have a gluten intolerance, avoid seed oils, or simply want a great taco that matches tonight's vibe. The more you use it, the better the recommendations get. It is currently live and focused on Chicago, with plans to expand to Michigan and Charlotte.",
  },
  {
    q: "How did the founders of SoGo meet?",
    a: "Cody Graham and Connor Musichuk were randomly paired in a flat during a Michigan State University study abroad program in Edinburgh, Scotland. Cody was the last person accepted into the program and didn't know anyone going in. They became close friends, worked together at their first jobs after college, and stayed in touch. Years later, Connor texted the group chat asking 'why is it hard to find a place to eat?', and SoGo was born. Joe Schaener, who Connor had also met at Michigan State, rounded out the founding team.",
  },
  {
    q: "What is Cody Graham's advice for startup founders?",
    a: "Cody's core advice is to 'keep the main thing the main thing,' a line he credits to Super Bowl MVP Jalen Hurts. He frames every decision through three possible outcomes: the right decision (best outcome), the wrong decision (second-best, because you learn from it), and no decision (worst of all, because decision paralysis is the real enemy). He also emphasizes lifelong learning, rolling with the punches on things you didn't know you didn't know, and surrounding yourself with people who challenge your assumptions.",
  },
  {
    q: "Is SoGo free to use?",
    a: "Yes. Cody Graham has committed that the core restaurant discovery experience (getting personalized recommendations that match who you are) will always be free for consumers. SoGo is developing paid features for merchants and potentially a premium tier, but only for features that are genuinely worth paying for. The philosophy: give people real value first, and only monetize what earns it.",
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
        <strong style={{ color: "#C9A96E" }}>Cody Graham</strong> is the COO and Head of Product at{" "}
        <strong style={{ color: "#fff" }}>SoGo</strong> (Some Good People Inc.), a personalized restaurant
        curation app based in Chicago. A Michigan State University graduate, he built his career across
        product management, business analysis, and Agile delivery before co-founding SoGo with Connor
        Musichuk, Joe Schaener, and Cam Haggadon. He is a Gildre member.
      </p>
    </div>
  );
}

export default function CodyGrahamBlog() {
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
              Member Feature · Chicago, Illinois
            </span>
          </div>
          <h1
            className="text-[clamp(1.9rem,4.5vw,3.25rem)] font-bold leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Cody Graham: How{" "}
            <span style={{ color: "#C9A96E" }}>SoGo</span> Is Turning Restaurant Discovery Into Personalized Curation, One Meal at a Time
          </h1>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Cody Graham didn&apos;t set out to build a restaurant app. He set out to build the best possible product for real people with real dietary needs, real preferences, and real frustration with the generic discovery tools everyone already uses. As COO and Head of Product at SoGo, he joined the Start to Scale Podcast to share how a Scotland study abroad turned into a Chicago startup, why personalization beats proximity every time, and the decision framework that keeps a founder focused when everyone has an opinion.
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
              <span>13 min read</span>
              <span>·</span>
              <span>Food Tech · Product · Startup · Chicago</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────────────────────── */}
      <article className="mx-auto max-w-3xl px-6 py-16">

        <Body>
          There are thousands of restaurant apps. Most of them show you what&apos;s nearby, sort by star rating, and hand you a map. Cody Graham looked at that landscape and asked a different question: what if the app actually knew you? What if instead of surfacing ten thousand options, it surfaced the three that genuinely fit who you are, who you&apos;re with, and what you need tonight?{" "}
          <strong style={{ color: "#fff" }}>SoGo</strong>, the restaurant curation app he co-founded under parent company Some Good People Inc., is built around that bet. He joined the{" "}
          <strong style={{ color: "#fff" }}>Start to Scale Podcast</strong> to unpack the idea, the team, the career that prepared him for it, and the philosophy that keeps them moving.
        </Body>

        {/* Headshot */}
        <div className="my-12 overflow-hidden rounded-2xl mx-auto" style={{ maxWidth: "560px", border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/cody-graham-headshot.jpeg"
            alt="Cody Graham, COO and Head of Product at SoGo"
            width={560}
            height={560}
            quality={90}
            sizes="(max-width: 600px) 100vw, 560px"
            className="w-full object-cover"
            style={{ maxHeight: "520px", objectFit: "cover", objectPosition: "center top" }}
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>
              Cody Graham, COO and Head of Product at SoGo and Gildre member based in Chicago
            </p>
          </div>
        </div>

        <BioCallout />

        <Section title="Michigan, Michigan State, and a Major That Nobody Actually Plans" />
        <Body>
          Cody Graham grew up in Lansing, Michigan, and went to college at Michigan State, traveling a full twenty minutes to do so. He was drawn to political science, which he describes now with the kind of fond clarity that only comes from having moved past it: "I had more of an interest in political science and how people really work. And if you want to break down the psychology of someone who gets into product, that&apos;s actually not so different. But there&apos;s no political science factories."
        </Body>
        <Body>
          A conversation with his mother (who pointed out, gently, that a broader path might be worth considering) led to a switch to general management. He graduated with what he calls "the most broad degree possible from one of the best business schools in the country." In hindsight, it was exactly right. Not because it taught him specific skills, but because it exposed him to enough concepts and frameworks that he could build on them in every direction.
        </Body>
        <Quote>
          "One of the best pieces of advice I ever heard was that finding your passion and making it your work is actually a bad approach. Find what you&apos;re good at, and people will pay you to do it."
        </Quote>
        <Body>
          He internalized that early. The career that followed wasn&apos;t built around passion projects. It was built around taking every opportunity to push past the edge of his current skill set, find the gaps, and fill them.
        </Body>

        <Section title="The Scotland Flat That Started Everything" />
        <Body>
          Going into his senior year, Cody realized he was a few credits short and needed to take some summer classes. He saw an opportunity and did something decisive: he applied for a study abroad program at Michigan State, got in as the last person accepted, and flew to Edinburgh, Scotland; it was the first time he had ever been on a plane.
        </Body>
        <Body>
          Because he was the last to join, he didn&apos;t know anyone going in. He was randomly placed in a five-person flat. One of his flatmates was Connor Musichuk, a finance student. Connor was already friends with Joe Schaener, a computer science and engineering student who had gotten there earlier. Cody met Joe through Connor. The three of them spent a month in Scotland, became fast friends, and stayed in touch after graduating.
        </Body>
        <Body>
          Cody and Connor both ended up at their first jobs together after college. Years passed. Then Connor texted the group chat one day: "Why is it hard to find a place to eat?" Their friend Alex, also in the chat, politely declined to pursue the idea. The three of them (Cody, Connor, and Joe) created a separate group chat. And that was the beginning of SoGo.
        </Body>
        <Quote>
          "You never know the winding path that&apos;s going to take you. I didn&apos;t know anybody going into the program. I just kind of filled the gap in whatever the flats were. And that turned into friendship, and that turned into business."
        </Quote>

        <Section title="The Career That Built the Builder" />
        <Body>
          Before SoGo, Cody spent years accumulating the exact skills a product-focused COO needs, without knowing that was what he was building toward. He started as a junior project management analyst: long title, low authority, responsible for chasing down directors and keeping project plans moving in Microsoft Project. "I was that annoying guy emailing directors. Now that I&apos;m in a more senior role, I kind of understand why people weren&apos;t always responsive."
        </Body>
        <Body>
          His second job put him on his first software team, where he transitioned into business analysis: mapping user journeys, writing thick requirements documents, learning how the business role actually functions inside a technology organization. He describes breaking features into Jira stories and thinking critically about systems as "invaluable," and admits he was probably given more responsibility than his paper credentials warranted. He ran with it anyway.
        </Body>
        <Body>
          After making the move from Michigan to Chicago, he joined Fusion 92, a traditional marketing agency, as a Scrum Master on a single team. Three years later, he had built an Agile department from scratch. "Nobody told me I was going to be doing that when I joined. It was just continuing to push myself and try new things." By the end, he had people working underneath him, was delivering for clients across multiple workstreams, and had a sharp understanding of how teams succeed or stagnate.
        </Body>
        <Body>
          The question that eventually surfaced was simple: why am I building all of this for other people? What can I build for myself, with full ownership, from ideation to delivery?
        </Body>

        {/* Cody full photo */}
        <div className="my-14 overflow-hidden rounded-2xl mx-auto" style={{ maxWidth: "720px", border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/cody-graham-sogo.webp"
            alt="Cody Graham, founder and COO of SoGo restaurant app"
            width={720}
            height={720}
            quality={90}
            sizes="(max-width: 760px) 100vw, 720px"
            className="w-full object-cover"
            style={{ maxHeight: "580px", objectFit: "cover", objectPosition: "center top" }}
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>
              Cody Graham, building SoGo from Chicago, where the food city itself became the perfect testing ground
            </p>
          </div>
        </div>

        <Section title="What SoGo Actually Does, and Why Google Can&apos;t Do It" />
        <Body>
          SoGo is a restaurant curation app. That word (curation) is doing serious work in Cody&apos;s description of it, because the whole premise hinges on the difference between discovery and personalization. Google can show you every restaurant within two miles. Yelp can surface what other people rated. But neither of them knows you.
        </Body>
        <Body>
          SoGo does. Or rather, it learns to. The more a user interacts with the app, the more accurately it can match recommendations to their actual preferences: dietary restrictions, mood, who they&apos;re with, what kind of evening they&apos;re planning. If you keep kosher, SoGo won&apos;t recommend a place that breaks that. If your child has a nut allergy and you&apos;re in a new city, SoGo filters for that before you ever open the menu. If you just want a great taco place that fits tonight, SoGo finds the right one for you, not the one with the most reviews.
        </Body>
        <Quote>
          "We recommend a place to somebody and they go fifty times, but only get recommended it once. That&apos;s a win. Because we nailed it. We&apos;re trying to match the consumer&apos;s needs to what we&apos;re providing them."
        </Quote>
        <Body>
          The two-way relationship is central to Cody&apos;s thinking about what SoGo is actually building. The more you give the app (your preferences, your feedback, your patterns) the better it serves you. The more it serves you, the more reason you have to keep using it. That feedback loop, done right, is what separates a useful app from an indispensable one.
        </Body>
        <Body>
          SoGo also serves the restaurants themselves. In a market where margins were already thin before COVID and have been squeezed further since, merchants need a way to attract customers who will actually stay, enjoy themselves, and come back. SoGo&apos;s goal is to get the right people through the right door, not just foot traffic, but matched traffic.
        </Body>

        {/* SoGo logo */}
        <div className="my-14 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <div
            className="w-full flex items-center justify-center py-8"
            style={{ backgroundColor: "#111827" }}
          >
            <Image
              src="/images/sogo-logo.webp"
              alt="SoGo, restaurant curation app by Some Good People"
              width={286}
              height={116}
              quality={90}
              sizes="(max-width: 400px) 100vw, 286px"
              className="w-auto"
              style={{ maxWidth: "286px", objectFit: "contain" }}
            />
          </div>
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>
              SoGo, by Some Good People Inc. A restaurant curation app that matches recommendations to who you are, not just where you are.
            </p>
          </div>
        </div>

        <Section title="Building With Your Best Friends: The Balance That Makes It Work" />
        <Body>
          Starting a company with close friends is a test that destroys a lot of relationships and a lot of businesses. Cody is clear about both the good and the difficult: you know each other too well personally, and not well enough professionally, at least at first.
        </Body>
        <Body>
          The four-person team (Cody, Connor, Joe, and Cam Haggadon, who joined to lead UI/UX) has deliberately built a culture where constructive criticism isn&apos;t personal. The anchor for every difficult conversation is the same: the goal is to make the company successful. Not individual glory. Not personal preferences. The company. When every decision traces back to that single point, it becomes much easier to separate what a friend is saying from what a professional co-founder is saying.
        </Body>
        <Body>
          "We all still like each other," Cody says. "And I think that speaks to how professional all of us are. We&apos;re all single-minded towards the goal of making this company successful. When you anchor everything around that and not anybody&apos;s personal preferences: that&apos;s a true guidepost."
        </Body>
        <Body>
          The breadth of the team is also intentional: product and operations (Cody), finance (Connor), engineering (Joe), design (Cam). Four different SME backgrounds that, when combined, cover most of what a startup needs, and create a team that genuinely challenges each other&apos;s assumptions.
        </Body>

        <Section title="AI as an Accelerant: How SoGo Uses It and What Founders Get Wrong" />
        <Body>
          Cody takes a measured view on AI, not a fearful one, and not a breathlessly optimistic one either. "I take the middle ground where it&apos;s a really great tool for people who know how to use it." His framing is simple: AI should be doing the things that prevent you from doing the real knowledge work. Use it to build a project plan. Use it to scaffold a roadmap. Use it to accelerate the path from vision to execution.
        </Body>
        <Body>
          Where he draws the line is at the idea that AI replaces expertise. "Something like a vibe-coded app: you can spit out a million of them. Is it secure? Can it scale? Is it stable? Those are questions that somebody just jumping into this doesn&apos;t have good answers to. That&apos;s the value of having subject matter experts use these tools, not just novices." AI makes everyone capable of more. But what you do with the output, how you evaluate it, improve it, and ship something that actually works, still requires judgment that only comes from experience.
        </Body>
        <Quote>
          "AI is an accelerant for good ideas. When you approach it like that, as a tool to get the vision from your head to people&apos;s hands: that&apos;s the most successful way to use it."
        </Quote>
        <Body>
          SoGo has leaned in. Early on, one of their biggest constraints was developer bandwidth. AI tooling has dramatically changed what the team can build with the resources they have, shifting the bottleneck from technical capacity to the quality of the ideas themselves. Which is exactly where Cody wants it.
        </Body>

        <Section title="Chicago First, Then Michigan, Charlotte, and Beyond" />
        <Body>
          SoGo is live and focused on Chicago. The logic is simple: it&apos;s where Cody and Joe are based, it&apos;s one of the great food cities in the country, and it&apos;s where their network is deepest. Starting local means the feedback is real, the relationships are genuine, and the community they&apos;re trying to build has a foundation to grow from.
        </Body>
        <Body>
          An updated version of the app is launching soon (what Cody calls SoGo&apos;s rebirth). After Chicago, the plan is Michigan (where the co-founders are from) and Charlotte (where Connor is based). Then, once the model is working and the product is ready, the intention is to scale nationally.
        </Body>
        <Body>
          The business model is still evolving, but one thing Cody has hardlined: the core experience will always be free. "I think there&apos;s a lot of apps that try to extract every dollar. That&apos;s not what we&apos;re doing. For somebody to give you something in return, you have to give them something of real value first." Paid features for merchants are in development, but only features that genuinely earn their price. "If it&apos;s not worth paying for, it belongs in the free version."
        </Body>

        <Section title="Keep the Main Thing the Main Thing" />
        <Body>
          The moment you tell someone you&apos;re building a startup, everyone has an opinion. Some of those opinions are genuinely useful. Many aren&apos;t. And the hardest skill in early-stage entrepreneurship, Cody argues, is knowing the difference, and not letting the noise drive you into paralysis.
        </Body>
        <Body>
          His framework is built around three outcomes: the right decision is the best you can hope for. The wrong decision is the second best, because you can learn from it and course-correct. No decision is the worst: it&apos;s how founders stagnate, get overwhelmed, and lose momentum on the thing that actually matters.
        </Body>
        <Quote>
          "Keep the main thing the main thing," as Super Bowl MVP Jalen Hurts says. You can get inundated with all this stuff and just be frozen with decision paralysis. But if you have an idea, be open to feedback. Take the feedback that&apos;s good, that you think is right. And ultimately, stay focused. If you have a goal, go for it."
        </Quote>
        <Body>
          That philosophy (challenge yourself, surround yourself with good people, anchor every decision to the goal, and keep moving) runs through everything Cody has done since that Scotland flat. It got him from political science to product management to a Chicago startup. And it&apos;s how he&apos;s building SoGo into something he hopes people will remember: a product that genuinely made their lives better, one great meal at a time.
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
            Founders like Cody build alongside each other at Gildre.
          </h2>
          <p className="mb-8 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Gildre is a community for founders who want real conversations, real accountability, and real connections, not surface-level networking. Apply to join.
          </p>
          <Link
            href="/apply"
            className="inline-block rounded-full px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#C9A96E", color: "#080e1a" }}>
            Apply to Gildre
          </Link>
        </div>
      </article>
    </div>
  );
}
