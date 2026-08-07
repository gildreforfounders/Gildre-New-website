import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/blog/steve-ramona-servant-heart-podcast-networking" },
  title: "Steve Ramona: The Servant's Heart Business Philosophy That Turned a Gym Front Desk Into Millions | Gildre",
  description:
    "Podcaster, TV host, and entrepreneur Steve Ramona on the ASLA networking principle, why transformational beats transactional every time, and how 20 years behind a health club front desk built a network that launched three businesses.",
  keywords: [
    "Steve Ramona",
    "Doing Business with a Servant's Heart",
    "servant leadership",
    "networking for entrepreneurs",
    "ASLA principle",
    "podcasting for business",
    "transformational vs transactional",
    "entrepreneurship networking",
    "health club networking",
    "Silicon Valley entrepreneur",
  ],
  openGraph: {
    url: "https://www.gildre.com/blog/steve-ramona-servant-heart-podcast-networking",
    title: "Steve Ramona: The Servant's Heart Business Philosophy That Turned a Gym Front Desk Into Millions",
    description:
      "Steve Ramona on the ASLA principle: Ask, Shut Up, Listen Actively, Ask Again, and how a 20-year health club career built a network that launched a restaurant, a recycling company, and one of the fastest-growing servant leadership podcasts.",
    type: "article",
    images: [
      {
        url: "https://www.gildre.com/images/steve-ramona-headshot.jpeg",
        width: 800,
        height: 800,
        alt: "Steve Ramona, host of Doing Business with a Servant's Heart podcast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Steve Ramona: The Servant's Heart Business Philosophy That Built Millions",
    description:
      "Steve Ramona on the ASLA principle, why transformational beats transactional, and how a gym front desk career became the network behind three successful businesses.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Steve Ramona: The Servant's Heart Business Philosophy That Turned a Gym Front Desk Into Millions",
  description:
    "Steve Ramona, host of Doing Business with a Servant's Heart podcast, shares the ASLA networking principle, why transformational beats transactional, and how 20 years at a health club front desk built the network that launched a restaurant, a recycling company, and a top business podcast.",
  image: "https://www.gildre.com/images/steve-ramona-headshot.jpeg",
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
    "https://www.gildre.com/blog/steve-ramona-servant-heart-podcast-networking",
  about: [
    { "@type": "Person", name: "Steve Ramona", jobTitle: "Podcaster, TV Host, and Entrepreneur" },
  ],
  keywords:
    "Steve Ramona, Doing Business with a Servant's Heart, ASLA principle, servant leadership, networking, entrepreneurship, podcasting, Silicon Valley, health club, transformational business, Gildre",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Steve Ramona",
  jobTitle: "Podcaster, TV Host, and Entrepreneur",
  knowsAbout: [
    "Servant Leadership",
    "Networking",
    "Entrepreneurship",
    "Podcasting",
    "Business Development",
    "Community Building",
    "Sales",
  ],
  description:
    "Steve Ramona is the host of Doing Business with a Servant's Heart, a top business and networking podcast with over 31,000 subscribers and 300+ episodes. Over a 40-year career spanning a family health club, a restaurant, and an electronics recycling company, Steve built and leveraged a vast network using a philosophy of transformational, not transactional, relationships.",
};

const faqs = [
  {
    q: "Who is Steve Ramona?",
    a: "Steve Ramona is a podcaster, TV host, entrepreneur, and community builder based in Silicon Valley. He is the host of Doing Business with a Servant's Heart, a top business podcast with over 31,000 subscribers and more than 300 episodes featuring guests from NFL super-agents to BNI founder Ivan Meisner. Over a 40-year entrepreneurial career, Steve has built and monetized his network through a health club, a restaurant, an electronics recycling company, and a network of business leaders and founders.",
  },
  {
    q: "What is the ASLA principle?",
    a: "The ASLA principle is a networking framework developed by Steve Ramona: Ask a question, Shut up, Listen Actively, and Ask another question. The goal is to make the other person the expert, give them the gift of your attention, and build a genuine connection without pitching or self-promoting. Steve credits the ASLA principle with generating millions of dollars in revenue and business relationships over the course of his career.",
  },
  {
    q: "What is Steve Ramona's podcast called?",
    a: "Steve Ramona's podcast is called Doing Business with a Servant's Heart. It launched October 4, 2022 and grew rapidly to 31,000+ subscribers. Steve records 25 to 30 episodes per week, featuring entrepreneurs, thought leaders, nonprofit founders, and executives. The name came from a fellow networker, Rich Kozak, who told Steve after just one meeting that 'doing business with a servant's heart' perfectly captured his philosophy.",
  },
  {
    q: "What does transformational vs transactional mean in business?",
    a: "Steve Ramona defines transformational relationships as ones where you genuinely improve the other person's situation: offering advice, connections, or resources, without expecting an immediate return. Transactional relationships are purely exchange-based: I give you something, you give me something now. Steve's philosophy is that consistently showing up as transformational, even when it costs you time or money, is what builds the deep network that sustains long-term business success. His career is the proof: every business he launched succeeded by activating relationships he had built transactionally years before.",
  },
  {
    q: "How did Steve Ramona build his professional network?",
    a: "Steve Ramona built his network over 20 years working the front desk at a family health club in Silicon Valley, where 2,000–3,000 members came through daily. He made it a habit to remember names, ask follow-up questions about vacations and business wins, and connect with members genuinely, not as prospects, but as people. That network of gym members became the customers at his restaurant, the clients of his recycling company, and the guests and subscribers of his podcast. The lesson: repetitive, authentic contact in any regular community context builds more durable relationships than any targeted outreach campaign.",
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

export default function SteveRamonaBlog() {
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
            Steve Ramona: The{" "}
            <span style={{ color: "#C9A96E" }}>Servant&apos;s Heart</span>{" "}
            Business Philosophy That Turned a Gym Front Desk Into Millions
          </h1>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Steve Ramona spent 20 years behind a health club front desk in Silicon Valley, and quietly built one of the most powerful networks in the room. He joined the Start to Scale Podcast to share the ASLA principle, why transformational beats transactional, and what every founder gets wrong about networking.
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
              <span>12 min read</span>
              <span>·</span>
              <span>Networking · Servant Leadership · Podcasting · Entrepreneurship</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────────────────────── */}
      <article className="mx-auto max-w-3xl px-6 py-16">

        {/* Intro */}
        <Body>
          Most founders treat networking as a campaign, a set of deliberate outreaches to targeted people they want something from. Steve Ramona spent four decades proving a different model: show up consistently, make everyone in the room feel genuinely seen, ask good questions and then shut up, and let the returns arrive on their own timeline. We sat down with Steve on the{" "}
          <strong style={{ color: "#fff" }}>Start to Scale Podcast</strong> to unpack the principles behind his <strong style={{ color: "#fff" }}>Doing Business with a Servant&apos;s Heart</strong> podcast, now over 31,000 subscribers and 300+ episodes, and the career arc that took him from a health club front desk to a recycling empire to one of Silicon Valley&apos;s most-connected business hosts.
        </Body>

        {/* Headshot */}
        <div className="my-12 overflow-hidden rounded-2xl mx-auto" style={{ maxWidth: "660px", border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/steve-ramona-headshot.jpeg"
            alt="Steve Ramona, host of Doing Business with a Servant's Heart podcast"
            width={660}
            height={660}
            quality={90}
            sizes="(max-width: 700px) 100vw, 660px"
            className="w-full object-cover"
            style={{ maxHeight: "500px", objectFit: "cover", objectPosition: "center top" }}
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>
              Steve Ramona, podcaster, TV host, entrepreneur, and host of Doing Business with a Servant&apos;s Heart
            </p>
          </div>
        </div>


        <BioCallout />

        <Section title="Eighteen Years Old, a Book, and a Financial Advisor Named Tony" />
        <Body>
          Steve Ramona&apos;s origin story doesn&apos;t start with a startup or a pitch deck. It starts with a health club front desk, a summer job, and a short Italian financial advisor who threw a book across the counter and said: "Read this. I&apos;ll be back Tuesday."
        </Body>
        <Body>
          The book was <em>The Wealthy Barber</em>. The lesson was simple: take 10% of every paycheck, put it somewhere you never touch, and let time do the work. Steve did exactly that. Ten years later, he called Tony to say thank you, and had $68,000 in a savings account at age 28 or 29.
        </Body>
        <Body>
          Tony&apos;s response stuck with him more than the money. "Steve, I&apos;m retired first of all, so I wouldn&apos;t take your money," Tony told him. "But I gave you some advice and you ran with it. The universe paid me back by bringing people into my life that allowed me to retire with abundance. That&apos;s how it works. You take care of people, not just transactional, but transforming, and good things happen."
        </Body>
        <Quote>
          "You take care of people, not just transactional, but transforming, and good things happen. Tony was a multimillionaire, retired, enjoying retirement. I had $68,000. Think we were both happy? Absolutely."
        </Quote>
        <Body>
          That exchange became the operating philosophy behind everything Steve has built since. He didn&apos;t name it then. But the seed of what he now calls a servant&apos;s heart was planted by a guy who walked into a gym and threw a 60-page book at an 18-year-old he barely knew.
        </Body>

        <Section title="20 Years Behind the Front Desk: What It Actually Built" />
        <Body>
          From 1978 to 2000, Steve worked at a health club in Silicon Valley. 2,000 to 3,000 members a day. Two decades of checking people in, remembering names, asking follow-up questions, and building what he didn&apos;t yet have a word for: a network.
        </Body>
        <Body>
          His approach was almost accidental at first. "Hey Joe, have a great workout. Hey Tony, have a great day." Then the conversations shifted: "Tony, how was your vacation in Bali? Jim, did you get that big client you were talking about?" He became friends with people twice his age. He collected relationships the way other people collect business cards, except his were genuine.
        </Body>
        <Body>
          The mechanism, he explains, is repetition. "That&apos;s what you&apos;re doing when you&apos;re going to the gym. You see the same people. Think about what makes a marriage work; they go on a number of dates before they commit. That&apos;s what you&apos;re doing in a recurring community setting. You&apos;re naturally building a relationship without forcing it."
        </Body>
        <Body>
          When the family sold the health club in 2000: the deal was too good to pass up. Steve found himself at home watching Oprah, trying to figure out what came next. No degree. No resume. No corporate experience. Just a phone full of contacts who knew him, trusted him, and owed him nothing but a conversation.
        </Body>
        <Body>
          That was enough. Jim, a longtime gym member, called and asked Steve to help him launch a restaurant. "Jim, I know nothing about a restaurant," Steve said. Jim&apos;s answer: "I know. But I know all the people you know." Within six months, they were the fastest-growing restaurant in the area. The launch strategy: Steve called every gym member he was still connected with and said, "I&apos;m working at this place. I&apos;d love you to come see me." People showed up because the relationship already existed.
        </Body>

        <Section title="The 2003 Email Newsletter: Before Beehive, Before Substack" />
        <Body>
          Inside Sharky&apos;s, a fish place in Silicon Valley, Steve started thinking about how to keep people coming back. A customer asked about next week&apos;s specials. Steve walked away and thought: why not just write them down and email them?
        </Body>
        <Body>
          He started a pad of paper at the host stand. "Would you like to know our specials?" People signed up. Steve emailed every Monday: the specials, a note, a reminder that he was there. This was 2003. Pre-social media. Pre-everything.
        </Body>
        <Quote>
          "If they forget about you, they&apos;ll never come in. If you treat them bad, they&apos;ll never come back. And if you aren&apos;t someone people want to be around, they won&apos;t come back. But that&apos;s true for any business: restaurant, coaching, CPA. The newsletter just kept reminding them that we cared."
        </Quote>
        <Body>
          The lesson translates directly to any founder-led business: staying in front of your audience is not marketing; it&apos;s maintenance of a relationship. Remind them you exist. Make it valuable. Give them something to look forward to showing up for.
        </Body>

        <Section title="Earth Care Recycling: Six Figures in Six Months From a Cold Start" />
        <Body>
          After Sharky&apos;s closed, Steve launched Earth Care Recycling, picking up and properly recycling TVs, computers, and electronics in California, where regulation created real demand. His business partner left after five months. Steve ran it alone with two employees.
        </Body>
        <Body>
          Six figures in six to eight months. The playbook was identical: reach out to the health club network, the restaurant network, and every new contact he&apos;d made since. "Hey, I started a recycling company. If you need your stuff picked up, we&apos;ll come get it." Then he went further, partnering with elementary schools, high schools, and colleges to run recycling fundraiser days in the parking lot. He&apos;d write a $2,000–$2,500 check to the school and take the equipment. Value in every direction.
        </Body>
        <Body>
          The business ran successfully until 2013, when changes in California&apos;s government recycling payment structure made it unviable. Steve&apos;s instinct was to keep going; he had employees, customers, and a deep sense of obligation. His father and his cousin Jeff, both mentors, gave him the same advice: "Steve, would you rather stop now or reach a point where you can&apos;t pay your employees for work they&apos;ve already done?"
        </Body>
        <Body>
          Three months later, the business closed. Three months after that, both employees had found jobs. "Mentorship is just huge," Steve says. "It changed my life because I was stressing about it. And they just cut right through it."
        </Body>

        {/* Podcast / full body photo */}
        <div className="my-14 overflow-hidden rounded-2xl mx-auto" style={{ border: "1px solid rgba(201,169,110,0.15)", maxWidth: "660px" }}>
          <Image
            src="/images/steve-ramona-podcast.jpeg"
            alt="Steve Ramona holding a microphone, host of Doing Business with a Servant's Heart"
            width={660}
            height={825}
            quality={90}
            sizes="(max-width: 700px) 100vw, 660px"
            className="w-full object-cover"
            style={{ maxHeight: "580px", objectFit: "cover", objectPosition: "center top" }}
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>
              Steve Ramona on the mic, his podcast Doing Business with a Servant&apos;s Heart launched October 4, 2022 and now has 31,000+ subscribers
            </p>
          </div>
        </div>

        <Section title="The ASLA Principle: The Networking Framework That Made Him Millions" />
        <Body>
          When people ask Steve how to approach someone they want to connect with, a potential client, a senior operator, a heavy hitter at the gym, his answer is four steps.
        </Body>
        <Body>
          <strong style={{ color: "#fff" }}>Ask</strong> a question. <strong style={{ color: "#fff" }}>Shut up.</strong> <strong style={{ color: "#fff" }}>Listen Actively.</strong> <strong style={{ color: "#fff" }}>Ask</strong> another question.
        </Body>
        <Body>
          He calls it the ASLA principle, coined by a podcast guest named Jeffrey Flacky, who gave the label to something Steve had been doing naturally for decades. The mechanics are simple: find something you genuinely want to know about the person in front of you, ask it, and then get out of the way. "Hey, I saw you doing curls at a certain angle. Why do you do that?" The other person becomes the expert. You&apos;ve given them the gift of your attention. A relationship has started.
        </Body>
        <Quote>
          "Ask, shut up, listen actively, and ask another question. Everybody&apos;s going to answer a question most of the time. You identified them, you made them the expert, and you gave them a gift. That&apos;s literally made me millions."
        </Quote>
        <Body>
          The worry most people have ("will it seem forced, will they think I want something?") dissolves when the question is genuine. And if someone doesn&apos;t want to engage, Steve&apos;s answer is one word: "Next. Not a fit. Move on. You can&apos;t impact everybody."
        </Body>

        <Section title="Why Saying 'I'm Good' Is the Most Expensive Mistake in Networking" />
        <Body>
          Steve spent years reflexively deflecting when people tried to help him. Someone he&apos;d given advice to would say, "How can I return the favor?" and he&apos;d wave them off: "I&apos;m good." He thought he was being gracious. He was actually, a $250M-a-year entrepreneur told him flatly, turning them into takers.
        </Body>
        <Body>
          "You just gave that person a gift," the man told him. "They want to return the favor. When you say you don&apos;t need it, subconsciously you&apos;re not thinking they&apos;re an a-hole, but they are. They can&apos;t help you. You turned them into a taker. And who knows who they&apos;ll meet down the road; they won&apos;t remember Steve, because Steve wouldn&apos;t let them help him."
        </Body>
        <Body>
          The fix is simple: have an answer ready. Know what you&apos;re looking for. When someone asks how they can help, tell them. "I&apos;m looking for introductions to X. I&apos;m trying to build Y. I&apos;m working on Z." Let people in. The relationship becomes two-directional, which is what makes it durable, and what makes it generate.
        </Body>

        <Section title="Doing Business with a Servant's Heart: Building a Podcast From Zero" />
        <Body>
          Steve launched his podcast on October 4, 2022. He remembers the exact date. The origin motivation was simple: he kept asking himself how he could increase his level of service. A hand at chin level was good; he was helping people, connecting them, adding value. But how could he get to nose level? Mouth level?
        </Body>
        <Body>
          He signed up for Josh Tapp&apos;s podcasting program. Josh told him: start recording. Steve&apos;s initial goal was modest: put his clients on the show, highlight them, give them a platform. Those clients started introducing him to other people. Word spread. His cadence grew to 25–30 episodes a week.
        </Body>
        <Body>
          The name came from a community setting as well. A fellow networker named Rich Kozak, someone Steve had met just one week earlier for a discovery call, stopped a group meeting mid-sentence: "Steve, I just met you last week. You have a heart for this servant thing. I think your podcast should be called Doing Business with a Servant&apos;s Heart." Steve adopted it immediately.
        </Body>
        <Body>
          The guest list today spans Ivan Meisner (founder of BNI), Lee Steinberg (NFL super-agent who inspired Jerry Maguire), and founders at every stage. The through-line is always the same: people who give first, ask good questions, and let the relationship breathe.
        </Body>

        <Section title="Get 1% Better Every Day, and Serve Yourself First" />
        <Body>
          Steve is 64 years old and starts every morning the same way: a Darren Hardy video, a meditation, and a two-minute cold shower. He does a weekly fast. He reads. He watches content from people he wants to learn from, and a key part of the philosophy is that age and seniority are not reasons to stop learning.
        </Body>
        <Body>
          "The more abundance I have by learning, the more I can give," he says. When a 34-year-old taught him YouTube strategies, Steve didn&apos;t filter it through ego. He took notes. He shared what he learned with the Gildre team. A chain of value passed through the relationship, and a new connection deepened.
        </Body>
        <Body>
          His advice for founders who want to build a servant&apos;s heart but feel too buried in survival mode to give: don&apos;t treat it as a strategy layer on top of your business. Treat it as a mindset that runs underneath everything else. "I was $50,000–$60,000 in debt three years ago. I still did 1,500 referrals that year. The debt had nothing to do with you. I could still help you."
        </Body>
        <Quote>
          "Get better 1% every day. Find what that is for you. If you start today, you&apos;re up around 200% by end of year. Are you going to make more money? Are you going to have a bigger network? Are you going to be happy?"
        </Quote>
        <Body>
          Practice the muscle in small moments: use people&apos;s names. Ask the grocery clerk how their day is going. Pay for someone&apos;s coffee when you have a bad day. Steve paid for a stranger&apos;s baby formula and diapers on a hard afternoon; he didn&apos;t know her name, never saw her again. She burst into tears; her husband had lost his job the week before. "I had no idea," he says. "The universe does."
        </Body>

        {/* FAQ */}
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

        {/* CTA */}
        <div
          className="mt-16 rounded-2xl p-8 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(201,169,110,0.08) 0%, rgba(28,39,68,0.6) 100%)",
            border: "1px solid rgba(201,169,110,0.2)",
          }}
        >
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            Gildre Community
          </p>
          <h3
            className="mt-3 text-xl font-bold text-white sm:text-2xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Build Your Network the Right Way
          </h3>
          <p
            className="mx-auto mt-3 max-w-md text-sm leading-relaxed"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Gildre connects high-caliber founders with operators, advisors, and connectors who lead with the same transformational philosophy Steve describes. Apply to join a community where the first question is always: "How can I help you?"
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
              style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              Listen to the Full Episode
            </a>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-10 flex flex-wrap gap-2">
          {[
            "Steve Ramona",
            "Servant Leadership",
            "ASLA Principle",
            "Networking",
            "Podcasting",
            "Transformational vs Transactional",
            "Entrepreneurship",
            "Silicon Valley",
            "Build in Public",
            "Lifelong Learning",
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
           target="_blank" rel="noopener noreferrer">
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
          <a href="/privacy" className="underline underline-offset-2 hover:text-zinc-400 transition-colors" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          {" · "}
          <a href="/" className="underline underline-offset-2 hover:text-zinc-400 transition-colors" target="_blank" rel="noopener noreferrer">
            Back to Gildre.com
          </a>
        </p>
      </div>
    </div>
  );
}

function BioCallout() {
  const milestones = [
    { year: "Age 18", event: "Joins family health club front desk; builds a 2,000-person daily network over 20 years" },
    { year: "2000", event: "Health club sells; pivots to restaurant industry using gym network as customer base" },
    { year: "2003", event: "Launches what may be the earliest restaurant email newsletter, growing Sharky's to fastest in area" },
    { year: "2007–2013", event: "Founds Earth Care Recycling; reaches six figures in 6–8 months; closes when government payments shift" },
    { year: "2013–2022", event: "10+ years in network marketing; builds solo entrepreneurship and public speaking skills" },
    { year: "Oct 4, 2022", event: "Launches Doing Business with a Servant's Heart podcast; grows to 31,000+ subscribers, 300+ episodes" },
  ];
  const lessons = [
    {
      n: "1",
      title: "Transformational, not transactional",
      body: "Give value without attaching an expected return. Consistently show up to transform the people around you, with advice, connections, resources, and the business will follow. It always has, in every industry Steve entered.",
    },
    {
      n: "2",
      title: "The ASLA principle",
      body: "Ask a question. Shut up. Listen Actively. Ask another question. Make the other person the expert, give them the gift of your full attention, and let the relationship develop naturally. This is the single framework Steve credits with generating millions.",
    },
    {
      n: "3",
      title: "Don't block people who want to give",
      body: "Saying 'I'm good' when someone offers to help turns them into takers. Know what you need. Have an answer ready. When you let people serve you the way you serve them, the relationship becomes two-directional, and durable.",
    },
  ];

  return (
    <div
      className="my-12 overflow-hidden rounded-2xl"
      style={{ border: "1px solid rgba(201,169,110,0.2)", backgroundColor: "rgba(201,169,110,0.04)" }}
    >
      <div className="px-7 pt-6 pb-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <p className="text-[0.6rem] font-bold uppercase tracking-widest mb-1" style={{ color: "#C9A96E" }}>
          Founder Profile
        </p>
        <h2 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
          Who is Steve Ramona?
        </h2>
        <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
          Steve Ramona is the host of{" "}
          <strong style={{ color: "#fff" }}>Doing Business with a Servant&apos;s Heart</strong>, a business podcast with 31,000+ subscribers and 300+ episodes featuring entrepreneurs, executives, athletes, and nonprofit founders. Over a 40-year career across a health club, a restaurant, and an electronics recycling company, Steve built and leveraged one of the most powerful grassroots networks in Silicon Valley using a single operating system: give first, ask good questions, and let the relationship lead.
        </p>
      </div>
      <div className="grid sm:grid-cols-2">
        <div
          className="px-7 py-6"
          style={{ borderRight: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-[0.6rem] font-bold uppercase tracking-widest mb-4" style={{ color: "#C9A96E" }}>
            Career Timeline
          </p>
          <ul className="space-y-3">
            {milestones.map((m, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <span className="font-bold flex-shrink-0" style={{ color: "#C9A96E", minWidth: "5.5rem" }}>
                  {m.year}
                </span>
                <span style={{ color: "rgba(255,255,255,0.65)" }}>{m.event}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="px-7 py-6">
          <p className="text-[0.6rem] font-bold uppercase tracking-widest mb-4" style={{ color: "#C9A96E" }}>
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
