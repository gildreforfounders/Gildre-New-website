import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/blog/sharon-gai-keynote-speaker-alibaba-ai" },
  title: "Sharon Gai: From Alibaba Head of Global Accounts to International Keynote Speaker on the Future of AI and Work | Gildre",
  description:
    "International keynote speaker and former Alibaba Head of Global Key Accounts Sharon Gai on the night AI changed everything at Double Eleven, why documentation beats content creation, and how to future-proof yourself in the age of AI.",
  keywords: [
    "Sharon Gai",
    "keynote speaker",
    "Alibaba",
    "AI and future of work",
    "personal branding",
    "How to Do More with Less",
    "Rethink Retail",
    "Pattern",
    "B2B creator",
    "Start to Scale Podcast",
  ],
  openGraph: {
    url: "https://www.gildre.com/blog/sharon-gai-keynote-speaker-alibaba-ai",
    title: "Sharon Gai: From Alibaba Head of Global Accounts to International Keynote Speaker on the Future of AI and Work",
    description:
      "Sharon Gai on the AI moment she witnessed inside Alibaba's Double Eleven war room, why busy bees need to become beekeepers, and the personal brand framework that turns founders into thought leaders.",
    type: "article",
    images: [
      {
        url: "https://www.gildre.com/images/sharon-gai-headshot.jpg",
        width: 800,
        height: 800,
        alt: "Sharon Gai, international keynote speaker and former Alibaba Head of Global Key Accounts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharon Gai: From Alibaba to International Keynote Speaker on the Future of AI and Work",
    description:
      "Sharon Gai on the night AI changed everything inside Alibaba, why human taste — not output — will define the future of work, and how founders should build in public.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Sharon Gai: From Alibaba Head of Global Accounts to International Keynote Speaker on the Future of AI and Work",
  description:
    "Sharon Gai, international keynote speaker and former Head of Global Key Accounts at Alibaba, shares the AI moment she witnessed during Alibaba's Double Eleven, the busy bee to beekeeper framework, and why documentation beats content creation for founders building a personal brand.",
  image: "https://www.gildre.com/images/sharon-gai-headshot.jpg",
  datePublished: "2025-07-01",
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
    "https://www.gildre.com/blog/sharon-gai-keynote-speaker-alibaba-ai",
  about: [
    {
      "@type": "Person",
      name: "Sharon Gai",
      jobTitle: "International Keynote Speaker and Author",
    },
    { "@type": "Organization", name: "Alibaba", url: "https://www.alibaba.com" },
    { "@type": "Organization", name: "Rethink Retail", url: "https://rethinkretail.us" },
    { "@type": "Organization", name: "Pattern" },
    {
      "@type": "Book",
      name: "How to Do More with Less: Future Proofing Yourself in the Age of AI",
      author: { "@type": "Person", name: "Sharon Gai" },
    },
  ],
  keywords:
    "Sharon Gai, keynote speaker, Alibaba, Double Eleven, AI future of work, personal branding, documentation vs content creation, Rethink Retail, Pattern, busy bee to beekeeper, Start to Scale Podcast, Gildre",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sharon Gai",
  jobTitle: "International Keynote Speaker and Author",
  knowsAbout: [
    "Artificial Intelligence",
    "Future of Work",
    "Personal Branding",
    "E-commerce",
    "Keynote Speaking",
    "B2B Creator Economy",
    "Retail Technology",
  ],
  description:
    "Sharon Gai is an international keynote speaker, author, and advisor who previously served as Head of Global Key Accounts at Alibaba and General Manager at Pattern. She advises at Rethink Retail and speaks globally on AI, the future of work, personal branding, and retail technology. Her book, How to Do More with Less: Future Proofing Yourself in the Age of AI, uses a bee-to-beekeeper metaphor to help professionals adapt to the AI era.",
};

const faqs = [
  {
    q: "Who is Sharon Gai?",
    a: "Sharon Gai is an international keynote speaker, author, and advisor. She previously served as Head of Global Key Accounts at Alibaba and General Manager at Pattern, and currently advises at Rethink Retail. She speaks globally on AI, the future of work, personal branding, and retail technology. Her book, How to Do More with Less: Future Proofing Yourself in the Age of AI, helps professionals shift from doing rote work to leading strategic, high-impact thinking.",
  },
  {
    q: "What is Sharon Gai's book about?",
    a: "Sharon Gai's book is called How to Do More with Less: Future Proofing Yourself in the Age of AI. It uses a bee and beekeeper metaphor: most professionals operate as busy bees — executing endless to-do lists and rote mechanical tasks. The book teaches readers how to become beekeepers instead — managing a hive of AI tools and resources that do the mechanical work, while the human focuses on strategy, creativity, and judgment. The book was inspired by a pivotal moment Sharon witnessed inside Alibaba's Double Eleven operation.",
  },
  {
    q: "What is 996 work culture at Chinese tech companies?",
    a: "996 refers to a work schedule of 9am to 9pm, six days a week — a culture common at Chinese technology companies during high-intensity periods like Alibaba's Double Eleven sales campaign. Sharon Gai experienced this culture firsthand at Alibaba. While controversial for its impact on work-life balance, she credits the 996 hustle model with driving the explosive growth of China's tech companies, and notes that many AI startups in San Francisco are now replicating a similar intensity.",
  },
  {
    q: "How do founders build a personal brand according to Sharon Gai?",
    a: "Sharon Gai's core framework is that documentation beats content creation. Rather than only posting wins and announcements, founders should document their struggles, failures, and day-to-day journey in public. This 'building in public' approach is more authentic and more engaging — audiences connect with the struggle, not just the outcome. She also advises founders to be present both online and in person, leverage live events for genuine connection, and recognize that holding attention offline with a room of 100–200 target customers is one of the most effective forms of direct selling available.",
  },
  {
    q: "What does Sharon Gai say about the future of work and AI?",
    a: "Sharon Gai argues that as AI commoditizes labor — from design to copywriting to software development — the final differentiator will be human taste and judgment. Knowing what to build, why to build it, and whether it will resonate cannot be automated. She also highlights the uneven adoption of AI globally, arguing that the first step to a transformed workforce is a universal 'AI 101' — the same way Calculus was once the universal first-year course. Human potential should be focused on truly creative and strategic tasks; rote mechanical work should be delegated to AI.",
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

export default function SharonGaiBlog() {
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
              Podcast Recap
            </span>
          </div>
          <h1
            className="text-[clamp(1.9rem,4.5vw,3.25rem)] font-bold leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Sharon Gai: From Alibaba to{" "}
            <span style={{ color: "#C9A96E" }}>International Keynote Speaker</span>{" "}
            on the Future of AI and Work
          </h1>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Sharon Gai left a top role at Alibaba after witnessing a single demo in a Double Eleven war room that changed how she understood human work forever. She joined the Start to Scale Podcast to talk about that moment, the live events boom, why founders should document failures not wins, and her book on turning busy bees into beekeepers.
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
              <span>Alibaba · AI · Keynote Speaking · Personal Brand</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────────────────────── */}
      <article className="mx-auto max-w-3xl px-6 py-16">

        {/* Intro */}
        <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
          We recently sat down with Sharon Gai — international keynote speaker, author, and former Head of Global Key Accounts at{" "}
          <a
            href="https://www.alibaba.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold transition-colors hover:text-[#C9A96E]"
            style={{ color: "#C9A96E" }}
          >
            Alibaba
          </a>{" "}
          — on the <strong style={{ color: "#fff" }}>Start to Scale Podcast</strong>. Sharon shared the moment inside Alibaba's Double Eleven operation that convinced her AI would permanently alter what it means to work, the framework behind her upcoming book on future-proofing yourself in the AI age, and the personal brand strategies she teaches founders who want to turn their online presence into a genuine growth engine.
        </p>

        {/* Headshot */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/sharon-gai-headshot.jpg"
            alt="Sharon Gai, international keynote speaker and former Alibaba Head of Global Key Accounts"
            width={800}
            height={800}
            quality={90}
            sizes="(max-width: 768px) calc(100vw - 48px), 720px"
            className="w-full object-cover"
            style={{ maxHeight: "520px", objectPosition: "center top" }}
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>
              Sharon Gai — international keynote speaker, author, and former Head of Global Key Accounts at Alibaba
            </p>
          </div>
        </div>

        <BioCallout />

        <Section title="The Traditional Path — and the Pivot" />
        <Body>
          Sharon Gai walked the path that most high achievers are handed in school: four-year degree, corporate job, annual salary bumps, steady progression up the ladder. She did it at Intel. She did it at Alibaba, one of the world's largest technology companies. And then, like many of the founders and operators she now speaks to from stages around the world, she started to look at that path and wonder if it was really the one she wanted.
        </Body>
        <Body>
          The shift didn't happen overnight. While still in corporate, Sharon had already begun to notice something: invitations to speak at conferences were trickling in. Requests to write, to appear, to represent ideas publicly. She didn't think it could be a career. "Going to school, you're not taught to look at those things," she says. But COVID changed the calculus. Communities formed online. Events moved virtual. Sharon joined one called Badassery — a group that connected similar professional profiles — and her eyes opened to what else was possible.
        </Body>
        <Body>
          She's now one of roughly 40,000 professional keynote speakers globally. She speaks on AI, the future of work, retail technology, and personal branding — and she advises at{" "}
          <a
            href="https://rethinkretail.us"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold transition-colors hover:text-[#C9A96E]"
            style={{ color: "#C9A96E" }}
          >
            Rethink Retail
          </a>
          . She is also finishing a book. But the real origin story behind all of it starts with a single late night in an Alibaba office.
        </Body>

        <Section title="The Night AI Changed Everything: Inside Alibaba's Double Eleven" />
        <Body>
          Alibaba's Double Eleven — China's equivalent of Black Friday — is one of the largest commercial events on earth. The volume of product listings, images, copy, and marketing assets required to support it is staggering. Historically, the company would bring in hundreds of thousands of additional designers, marketers, and copywriters to manage the surge.
        </Body>
        <Body>
          One evening, at 10 PM, Sharon was pulled aside by an engineer. He wanted to show her something. He entered a prompt into a tool. Out came all of the product images, page descriptions, and marketing copy — for dozens of SKUs — that would have taken an army of human contractors weeks to produce. In minutes.
        </Body>
        <Quote>
          "The year after, the way that we worked — just from a workflow perspective — it completely changed. That was the first time that I knew AI was really going to change the way that we work."
        </Quote>
        <Body>
          That moment is the first chapter of her book. It's also the lens through which Sharon now frames almost everything she speaks about: we are still in the early innings of understanding what AI actually means for the way humans spend their professional hours — and most organizations are far behind where they need to be.
        </Body>

        {/* Speaking photo 1 — blue blazer */}
        <div className="my-14 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/sharon-gai-speaking-blue.jpeg"
            alt="Sharon Gai speaking on stage at a conference"
            width={800}
            height={800}
            quality={90}
            sizes="(max-width: 768px) calc(100vw - 48px), 720px"
            className="w-full object-cover"
            style={{ maxHeight: "580px", objectFit: "cover", objectPosition: "center top" }}
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>
              Sharon Gai on stage — she has spoken at conferences globally on AI, retail technology, and the future of work
            </p>
          </div>
        </div>

        <Section title="The 996 Culture That Built China's Tech Giants" />
        <Body>
          Working at Alibaba means working inside one of the most intense professional environments in the world. 996 — a schedule of 9am to 9pm, six days a week — became a shorthand for the culture at Chinese tech companies during their highest-growth periods. Sharon is careful to contextualize it: 996 wasn't every day for everyone, and the most intense stretches coincided with campaigns like Double Eleven. But the broader ethos of relentless, high-velocity execution was real.
        </Body>
        <Body>
          "I think the 996 hustle culture is what caused those companies to grow so quickly," she says. "It's just kind of related." She draws a parallel that will resonate with any founder who's been paying attention: "You see that model being replicated in San Francisco right now with a lot of AI founders." The names aren't hard to guess. The intensity isn't accidental. When you're trying to win a winner-take-most market against well-funded competitors, the margin of effort matters.
        </Body>
        <Body>
          But Sharon doesn't romanticize it. The Chinese internet also gave birth to the opposing phenomenon — "lying flat," the deliberate choice to do the minimum and collect a salary. The tension between extreme hustle and disengagement, she observes, is playing out in the American workforce too. Gen Z's version is the "lazy girl job." Both responses, she implies, are symptoms of a workforce that hasn't yet figured out how to direct human energy toward the things that actually require it.
        </Body>

        <Section title="From Busy Bee to Beekeeper: The Book" />
        <Body>
          Sharon's book is called <strong style={{ color: "#fff" }}>How to Do More with Less: Future Proofing Yourself in the Age of AI</strong>. The cover features a bee. The metaphor is intentional.
        </Body>
        <Body>
          Most professionals, she argues, are busy bees — executing endless task lists, checking boxes, doing what's in front of them. The traditional corporate path reinforces this: four-year degree, climb the ladder, earn your 10–15% annual raise, repeat. The problem is that the work that makes busy bees valuable — the rote, mechanical, repeatable output — is exactly what AI is now able to do at far greater scale and speed.
        </Body>
        <Quote>
          "Human potential is so vast and we shouldn't mire ourselves with those boring rote mechanical tasks that are meant for a machine to do. We should be left with the truly creative and truly strategic tasks that deserve our human attention. I hope work in the future is where we spend human precious hours on human necessary tasks."
        </Quote>
        <Body>
          The beekeeper, by contrast, manages the hive. They direct the resources, set the strategy, and focus their own energy on what only a human can do: judgment, taste, creative direction, relationship-building. The book teaches the mindset shift — from individual contributor executing tasks to someone who orchestrates AI tools and human resources toward outcomes that actually require a person.
        </Body>

        {/* Speaking photo 2 — lavender blazer */}
        <div className="my-14 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/sharon-gai-speaking-lavender.jpeg"
            alt="Sharon Gai keynote speaking at a large conference"
            width={800}
            height={1000}
            quality={90}
            sizes="(max-width: 768px) calc(100vw - 48px), 720px"
            className="w-full object-cover"
            style={{ maxHeight: "620px", objectFit: "cover", objectPosition: "center top" }}
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>
              Sharon Gai keynoting at an international conference
            </p>
          </div>
        </div>

        <Section title="The Live Events Boom — and Why In-Person Is Winning" />
        <Body>
          One of the most counterintuitive observations Sharon makes is about where attention is going: offline. Post-COVID, the live events industry didn't just recover — it exploded. Informa, the world's largest events company, runs roughly one million conferences per year in the US alone and is still growing. A creator event Sharon attended in New York the day before the podcast had 800 people on the waitlist.
        </Body>
        <Body>
          The reason, she argues, is straightforward. "We went overboard with being online. There's a craving to go back to analog." Younger generations talk about "touching grass" — a meme that captures the need to physically disengage from the digital world. As AI generates more content, more video, more noise, the scarcity of genuine human presence in a room becomes more valuable, not less.
        </Body>
        <Body>
          For founders, Sharon frames live events as one of the most underutilized channels available. Standing in front of 100 or 200 of your target customers — holding their undivided attention for 45 minutes with no Instagram reel competing for their focus — is a form of direct selling that almost no other format can replicate. "That's very direct selling you could do," she says. "And that can be applicable whether you are a consultant, advisor, or founder."
        </Body>
        <Body>
          For discoverability, she points to Luma as the current hub for event communities — "the new age Meetup.com" — and notes that Instagram's algorithm is increasingly effective at connecting niche interest groups around local events. B2B conferences remain a separate ecosystem, driven by sponsors and industry associations, but the energy in both spaces is pointing the same direction: up.
        </Body>

        <Section title="Documentation Over Content Creation: The Personal Brand Framework" />
        <Body>
          Founders often ask Sharon how to build a personal brand when they're heads-down operating. Her answer is simple and counter to what most think: stop trying to create content. Start documenting.
        </Body>
        <Body>
          "Documentation is better than content creation," she says. What works on LinkedIn, Instagram, and TikTok isn't polished announcements of wins. It's the raw process. The struggle. The sandwich you ate twice in a row because you didn't have time to find something better. The video from the floor at midnight. Building in public — showing the messy middle of building a company — is what actually builds trust and draws an audience.
        </Body>
        <Quote>
          "Everyone likes to cheer for the underdog. When there's no process — when you can't see the struggle — it waters the achievement down. Before posting any big announcement, document what it took to get there."
        </Quote>
        <Body>
          The mechanism is authentic differentiation. In a world where AI can generate a polished post in seconds, the one thing AI cannot replicate is the genuine mess of your actual journey. That rawness — and the trust it builds — is what compounds over time into real audience relationships.
        </Body>
        <Body>
          Sharon also draws a useful distinction between two types of personal brand builders: those who are natural on camera and build massive followings online, and those who are more powerful in an offline room. She falls in the latter camp. The best founders, she advises, develop both — but most find one lane and go deep. Neither is wrong. Both require showing up consistently and letting the guard down.
        </Body>

        <Section title="The Future of Work: Human Taste Is the Last Moat" />
        <Body>
          When Sharon thinks about the future of work, she starts with an honest acknowledgment: adoption of AI is radically uneven. She was on a flight recently and the person next to her had heard of ChatGPT but wasn't sure if it was any good. "It just humbles you into realizing that something that seems obvious to you could be very foreign to somebody else."
        </Body>
        <Body>
          Her first prescription is the equivalent of a universal course: an AI 101 that every working professional takes, the same way Calculus was the one course that unified first-year college students across every major. Without that shared baseline, organizations will continue to have wildly uneven productivity — some people using AI to multiply their output 10x, others not using it at all.
        </Body>
        <Body>
          But once the baseline is established, the more interesting question emerges: when AI can build the product, write the copy, design the interface, and write the code — what is the human's job? Sharon's answer: taste and judgment. "The hard part is not making the product. It's more the strategy part of things — knowing what to build and why — that will differentiate one person from the next."
        </Body>
        <Body>
          For founders specifically, she argues the moat is no longer in the code. It's in the relationships, the market insight, the ability to identify what will actually resonate — and the judgment to go after it before everyone else sees it. As Eric Ries's lean startup methodology gets "tired out" by the pace of AI iteration, she sees space for a new modality of thinking about how companies are built and how founders create durable value.
        </Body>

        {/* FAQ section */}
        <div className="mt-16 space-y-6">
          <h2
            className="text-xl font-bold text-white sm:text-2xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Frequently Asked Questions
          </h2>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl p-6"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <h3 className="text-base font-semibold text-white">{faq.q}</h3>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* CTA block */}
        <div
          className="mt-16 rounded-2xl p-8 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(201,169,110,0.08) 0%, rgba(28,39,68,0.6) 100%)",
            border: "1px solid rgba(201,169,110,0.2)",
          }}
        >
          <p
            className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]"
            style={{ color: "#C9A96E" }}
          >
            Gildre Community
          </p>
          <h3
            className="mt-3 text-xl font-bold text-white sm:text-2xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Build Alongside Founders Who Are Future-Proofing
          </h3>
          <p
            className="mx-auto mt-3 max-w-md text-sm leading-relaxed"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Gildre connects high-caliber founders with operators, advisors, and speakers who are navigating the AI transition in real time. Get access to advisory sessions, peer matching, and a community built for founders who are playing the long game.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://tally.so/r/VLERVa"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-7 py-3 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
            >
              Apply to Gildre →
            </a>
            <a
              href="https://linktr.ee/starttoscale"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-7 py-3 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{
                color: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              Listen to the Full Episode
            </a>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-10 flex flex-wrap gap-2">
          {[
            "Sharon Gai",
            "Alibaba",
            "Keynote Speaker",
            "AI & Future of Work",
            "Personal Branding",
            "Double Eleven",
            "Rethink Retail",
            "996 Culture",
            "Build in Public",
            "Beekeeper Framework",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full px-3 py-1 text-[0.65rem] font-medium"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                color: "rgba(255,255,255,0.4)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-12 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <Link
            href="/content"
            className="text-sm transition-colors hover:text-[#C9A96E]"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            ← Back to Founder Content
          </Link>
        </div>
      </article>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <div
        className="px-6 py-8 text-center text-[0.7rem] text-zinc-600"
        style={{ backgroundColor: "#080e1a", borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <p>
          &copy; {new Date().getFullYear()} Gildre, LLC. All rights reserved.{" "}
          <a
            href="/privacy"
            className="underline underline-offset-2 hover:text-zinc-400 transition-colors"
          >
            Privacy Policy
          </a>
          {" · "}
          <a
            href="/"
            className="underline underline-offset-2 hover:text-zinc-400 transition-colors"
          >
            Back to Gildre.com
          </a>
        </p>
      </div>
    </div>
  );
}

function BioCallout() {
  const milestones = [
    { year: "Early career", event: "Joins Intel; begins traditional corporate path" },
    { year: "Alibaba", event: "Becomes Head of Global Key Accounts; witnesses AI's impact firsthand during Double Eleven" },
    { year: "Pattern", event: "Serves as General Manager, deepening e-commerce and retail technology expertise" },
    { year: "COVID era", event: "Discovers the professional speaking world; joins community Badassery; pivots toward thought leadership" },
    { year: "Now", event: "International keynote speaker on AI, future of work, and personal branding; advisor at Rethink Retail" },
    { year: "Upcoming", event: "Publishes How to Do More with Less: Future Proofing Yourself in the Age of AI" },
  ];
  const lessons = [
    {
      n: "1",
      title: "Document the struggle, not just the win",
      body: "Audiences connect with process, not polish. Founders who build in public — showing the messy, exhausting, unglamorous reality of building — create more trust and more engagement than any announcement post ever will.",
    },
    {
      n: "2",
      title: "Shift from busy bee to beekeeper",
      body: "Rote, mechanical tasks belong to AI. Human time should be reserved for creative direction, strategic judgment, and relationship-building — the things machines can't replicate. Managing the hive is the job now.",
    },
    {
      n: "3",
      title: "In-person is your highest-leverage channel",
      body: "Holding the undivided attention of 100–200 target customers in a room is one of the most powerful forms of direct selling available. The live events boom is real — and most founders aren't using it.",
    },
  ];

  return (
    <div
      className="my-12 overflow-hidden rounded-2xl"
      style={{
        border: "1px solid rgba(201,169,110,0.2)",
        backgroundColor: "rgba(201,169,110,0.04)",
      }}
    >
      <div
        className="px-7 pt-6 pb-5"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <p
          className="text-[0.6rem] font-bold uppercase tracking-widest mb-1"
          style={{ color: "#C9A96E" }}
        >
          Founder Profile
        </p>
        <h2
          className="text-xl font-bold text-white"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Who is Sharon Gai?
        </h2>
        <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
          Sharon Gai is an international keynote speaker, author, and advisor who previously served as Head of Global Key Accounts at{" "}
          <a
            href="https://www.alibaba.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
            style={{ color: "#C9A96E" }}
          >
            Alibaba
          </a>{" "}
          and General Manager at Pattern. She now advises at{" "}
          <a
            href="https://rethinkretail.us"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
            style={{ color: "#C9A96E" }}
          >
            Rethink Retail
          </a>{" "}
          and speaks globally on AI, the future of work, retail technology, and personal branding. Her book,{" "}
          <em>How to Do More with Less: Future Proofing Yourself in the Age of AI</em>, draws on her experience inside one of the world's most intense tech environments to teach professionals how to shift from task execution to strategic leadership.
        </p>
      </div>
      <div className="grid sm:grid-cols-2">
        <div
          className="px-7 py-6 sm:border-r"
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            borderColor: "rgba(255,255,255,0.06)",
          }}
        >
          <p
            className="text-[0.6rem] font-bold uppercase tracking-widest mb-4"
            style={{ color: "#C9A96E" }}
          >
            Career Timeline
          </p>
          <ul className="space-y-3">
            {milestones.map((m, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <span
                  className="font-bold flex-shrink-0"
                  style={{ color: "#C9A96E", minWidth: "5.5rem" }}
                >
                  {m.year}
                </span>
                <span style={{ color: "rgba(255,255,255,0.65)" }}>{m.event}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="px-7 py-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p
            className="text-[0.6rem] font-bold uppercase tracking-widest mb-4"
            style={{ color: "#C9A96E" }}
          >
            Core Lessons for Founders
          </p>
          <ul className="space-y-4">
            {lessons.map((l) => (
              <li key={l.n} className="text-sm">
                <p className="font-bold mb-1 text-white">
                  {l.n}. {l.title}
                </p>
                <p style={{ color: "rgba(255,255,255,0.55)" }}>{l.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Section({ title }: { title: string }) {
  return (
    <h2
      className="mt-12 mb-4 text-xl font-bold text-white sm:text-2xl"
      style={{ fontFamily: "var(--font-fraunces)" }}
    >
      {title}
    </h2>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
      {children}
    </p>
  );
}

function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      className="my-8 rounded-xl px-7 py-6 text-base italic leading-relaxed"
      style={{
        borderLeft: "3px solid #C9A96E",
        backgroundColor: "rgba(201,169,110,0.06)",
        color: "rgba(255,255,255,0.75)",
      }}
    >
      {children}
    </blockquote>
  );
}
