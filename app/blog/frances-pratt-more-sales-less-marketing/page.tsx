import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/blog/frances-pratt-more-sales-less-marketing" },
  title: "Frances Pratt: From the Ritz Carlton to $18M Exit — How the Author of More Sales Less Marketing Rewires Founders Who Hate Selling | Gildre",
  description:
    "Frances Pratt, author of More Sales Less Marketing and founder of a Melbourne-based sales consultancy, on the Wizard of Oz sales framework, why sales always comes before marketing, and how firing a $2M bully client unlocked an $18M outcome.",
  keywords: [
    "Frances Pratt",
    "More Sales Less Marketing",
    "sales consultant",
    "B2B sales",
    "founder sales coaching",
    "sales vs marketing",
    "Wizard of Oz sales framework",
    "overcoming fear of selling",
    "sales team building",
    "Melbourne entrepreneur",
    "Ritz Carlton",
  ],
  openGraph: {
    url: "https://www.gildre.com/blog/frances-pratt-more-sales-less-marketing",
    title: "Frances Pratt: From the Ritz Carlton to $18M Exit — How the Author of More Sales Less Marketing Rewires Founders Who Hate Selling",
    description:
      "Frances Pratt on the Wizard of Oz sales framework, why great selling is helping someone make a good buying decision (not pushing), and what firing a $2M bully client taught her about strategic clarity.",
    type: "article",
    images: [
      {
        url: "https://www.gildre.com/images/frances-pratt-headshot.jpeg",
        width: 800,
        height: 800,
        alt: "Frances Pratt, author of More Sales Less Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frances Pratt: From Ritz Carlton to $18M Exit on Sales as Service",
    description:
      "Frances Pratt on the Wizard of Oz sales model, why founders should sell before they market, and how courage — not charisma — is the real skill behind great selling.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Frances Pratt: From the Ritz Carlton to $18M Exit — How the Author of More Sales Less Marketing Rewires Founders Who Hate Selling",
  description:
    "Frances Pratt, author of More Sales Less Marketing and Melbourne-based sales consultant, shares the Wizard of Oz sales framework, why sales comes before marketing, the three pillars that turn sales-averse founders into confident closers, and what firing a $2M bully client taught her about building on your own terms.",
  image: "https://www.gildre.com/images/frances-pratt-headshot.jpeg",
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
    "https://www.gildre.com/blog/frances-pratt-more-sales-less-marketing",
  about: [
    {
      "@type": "Person",
      name: "Frances Pratt",
      jobTitle: "Sales Consultant and Author",
    },
    {
      "@type": "Book",
      name: "More Sales Less Marketing",
      author: { "@type": "Person", name: "Frances Pratt" },
    },
  ],
  keywords:
    "Frances Pratt, More Sales Less Marketing, sales consultant, B2B sales, founder sales coaching, Wizard of Oz sales framework, sales vs marketing, Melbourne entrepreneur, Ritz Carlton, Gildre",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Frances Pratt",
  jobTitle: "Sales Consultant, Author, and Entrepreneur",
  knowsAbout: [
    "B2B Sales",
    "Sales Team Building",
    "Change Management",
    "Entrepreneurship",
    "Sales Coaching",
    "Organizational Culture",
    "Revenue Strategy",
  ],
  description:
    "Frances Pratt is a Melbourne-based sales consultant with 30+ years in sales and 15 years helping founders overcome their fear of selling and build high-performing sales teams. She is the author of More Sales Less Marketing and previously co-owned an IT company that grew to $6M ARR before a buyout worth approximately $18M. She holds an MBA from Melbourne Business School and a postgraduate degree in change management.",
};

const faqs = [
  {
    q: "Who is Frances Pratt?",
    a: "Frances Pratt is a Melbourne-based sales consultant, author, and entrepreneur with more than 30 years in sales. For the past 15 years she has specialized in helping founders overcome their fear of selling and build high-performing B2B sales teams. She is the author of More Sales Less Marketing, holds an MBA from Melbourne Business School, and previously co-owned an IT company that grew to $6M ARR before a buyout valued at approximately $18M.",
  },
  {
    q: "What is the Wizard of Oz sales framework?",
    a: "Frances Pratt's Wizard of Oz sales framework uses Dorothy as a metaphor for the customer. When a new client first engages, they are like Dorothy arriving in Oz — disoriented, overwhelmed, and unsure of what's ahead. The salesperson's first job is not to explain flying monkeys or warn them about the Wicked Witch (i.e., overwhelm them with product detail and future challenges). It is simply to get Dorothy off the porch, introduce her to the Yellow Brick Road, and let her travel it and discover her own power. Great selling is not taking over the client's journey — it's enabling it.",
  },
  {
    q: "What is the difference between sales and marketing according to Frances Pratt?",
    a: "Frances Pratt teaches that sales always comes before marketing. At the earliest stage of a business, the questions you need to answer — does this problem exist, is my solution viable, will someone pay for it — are answered through sales conversations, not marketing campaigns. Marketing is about herding a group of people through a funnel until they become a marketing-qualified lead. Selling is sitting with one person and understanding exactly what they need. A third distinction: the marketing mindset says get everything perfect before launching; the sales mindset says take what you have — even a napkin sketch — and go ask the market now.",
  },
  {
    q: "How do you fix a founder who hates selling?",
    a: "Frances Pratt works on three areas. First, mindset: the fear of selling comes from a mental image of the pushy used-car salesman. Replace that with the truth — great selling is helping someone make a good buying decision for themselves, yes or no. Second, activities: selling should start with listening, not telling. Understand their problem, reflect it back, get confirmation, then ask permission to share how you can help. Third, results: the only result isn't a closed deal. Every step — a good conversation, a referral, something learned — is a result. Reframing success makes the process far less threatening.",
  },
  {
    q: "How do you make sales conversations feel comfortable?",
    a: "Frances Pratt's answer: stop making it about you. The reason sales feels uncomfortable is that we perceive it as self-promotion. Instead, root every conversation in the client's story. What problems have you seen that mirror theirs? What have you learned from helping others through it? What failures taught you something? When you are telling the story of your clients' wins and struggles — not your own credentials — the conversation stops feeling like a pitch and starts feeling like a service. Your posture changes, your voice changes, your confidence is genuine because it's rooted in something real.",
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

export default function FrancesPrattBlog() {
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
              Gildre Spotlight
            </span>
            <span className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
              Member Feature · Melbourne, Australia
            </span>
          </div>
          <h1
            className="text-[clamp(1.9rem,4.5vw,3.25rem)] font-bold leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Frances Pratt: From the Ritz Carlton to{" "}
            <span style={{ color: "#C9A96E" }}>$18M Exit</span> — How the Author of{" "}
            <em>More Sales Less Marketing</em> Rewires Founders Who Hate Selling
          </h1>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Frances Pratt has spent 30 years in B2B sales and 15 years helping founders stop dreading the conversation they need most. A Gildre member based in Melbourne, she joined the Gildre Spotlight podcast to share the Wizard of Oz sales framework, why sales always comes before marketing, and what firing a $2M bully client taught her about building on her own terms.
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
                  Gildre Spotlight Podcast
                </p>
              </div>
            </div>
            <div className="flex gap-5 text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
              <span>13 min read</span>
              <span>·</span>
              <span>Sales · B2B · Founder Coaching · Books</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────────────────────── */}
      <article className="mx-auto max-w-3xl px-6 py-16">

        <Body>
          Most founders treat sales as something they have to survive. Frances Pratt has spent three decades arguing it is actually something they can love — and that the path from dread to mastery runs through one realization: great selling is not pushing. It is helping someone make a good buying decision, whether that decision is yes or no. Frances joined the{" "}
          <strong style={{ color: "#fff" }}>Gildre Spotlight Podcast</strong> from Melbourne, Australia to unpack the Wizard of Oz framework from her book{" "}
          <em>More Sales Less Marketing</em>, the three pillars she uses to transform sales-averse founders, and the story of the $2M client she fired — and the $18M outcome that followed.
        </Body>

        {/* Headshot */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/frances-pratt-headshot.jpeg"
            alt="Frances Pratt, author of More Sales Less Marketing and sales consultant based in Melbourne"
            width={800}
            height={800}
            className="w-full object-cover"
            style={{ maxHeight: "500px", objectPosition: "center top" }}
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>
              Frances Pratt — sales consultant, author, and Gildre member based in Melbourne, Australia
            </p>
          </div>
        </div>

        <BioCallout />

        <Section title="Growing Up the Extrovert in a Family of Introverts" />
        <Body>
          Frances Pratt is one of five children — three older brothers and a twin sister — from a family she describes with affection as "high nerd introverts." Everybody else was happy with a book and their own company. Frances wanted to get out and meet the world.
        </Body>
        <Body>
          The trait showed up early. At eleven years old, her twin sister pulled her aside and said: "Friar, you&apos;re dangerous." Frances was delighted. "Tell me why," she pushed. The answer: "I know what you know. But when you&apos;re talking to someone else, you don&apos;t lie — but you deliver it with so much confidence that they think you know more than you do."
        </Body>
        <Body>
          In retrospect, she recognizes that moment as the clearest early signal of what would become her professional gift. "I had that ability to confidently talk about a subject in a way that gave other people confidence. And I think, you know, that&apos;s the art of selling."
        </Body>
        <Body>
          Her parents set the other half of the foundation. Her mother was a lawyer who made partner. Her father was an entrepreneur ahead of his time — in 1979 he started a grass-fed, pasture-to-plate beef export business decades before the concept had a name. Every time Frances came home from university, she applied what she&apos;d learned directly to his business. "Right, Dad, you need a mission statement. You need a targeted marketing plan." The reflex to apply ideas — not just collect them — became a permanent operating mode.
        </Body>

        <Section title="The Ritz Carlton, Zig Ziglar, and Why Service Is Not Servitude" />
        <Body>
          Frances chose her university degree the way many extroverts make decisions: she saw what a friend was filling out and copied it. Hospitality and tourism sounded like fun. She had no idea it would end up being the perfect grounding for a sales career.
        </Body>
        <Body>
          After graduating, she spent four years at the Ritz Carlton in Australia. The experience shaped her understanding of service at a fundamental level. "Ladies and gentlemen serving ladies and gentlemen" — the Ritz Carlton credo — drew a distinction she still teaches today: you are there to help, not to be subordinate. The guest is not the master. You are a peer, choosing to give your best.
        </Body>
        <Body>
          During her tenure, the Ritz Carlton won the Deming Award — the first service business in the world to receive it. W. Edwards Deming, the father of continuous improvement, had built a philosophy around what today we would call agile thinking. Frances absorbed it early.
        </Body>
        <Body>
          When she saw a newspaper job ad for a sales role in hospitality IT — a role she was not fully qualified for on paper — she applied anyway. She got the job. In her first year, her boss took her to see Zig Ziglar speak live in Australia. The takeaway that lodged permanently: "You can achieve everything you want to achieve if you just help others do the same." Sales as service. Giving to receive, not pushing to extract.
        </Body>
        <Quote>
          "The modern iteration of that would probably be Bob Burg&apos;s Go-Giver — what can we be doing that&apos;s giving to the world in order to receive? Zig Ziglar had that baked in decades before it was fashionable."
        </Quote>

        <Section title="17 Years in B2B IT, an MBA, and the Equity Demand That Changed Everything" />
        <Body>
          Frances spent seventeen years in IT sales — moving from hospitality software to cloud computing and desktop-as-a-service, selling to everyone from small owner-operated businesses to multinationals like Lion Nathan. The chameleon skillset her family helped her build meant she could read a room fast and adjust. "It&apos;s a different sale if you&apos;re selling to a mum-and-dad business versus a multinational," she says. "You&apos;ve got to use that ability to read and adapt."
        </Body>
        <Body>
          Somewhere along the way she discovered a postgraduate degree in change management. The link to sales clicked immediately: great selling, she realized, is fundamentally a change management problem. You are trying to help a client see a future state that is better than their current one, and then navigate the emotional and practical journey from here to there. She enrolled. She loved it. Then she did an MBA at Melbourne Business School — while working fifty to sixty hours a week.
        </Body>
        <Body>
          When a group of entrepreneurs approached her to run their sales team, she had one condition she put on the table in the first meeting: equity. "They fell off their chairs," she says. She didn&apos;t blink. They negotiated a six-month trial with agreed parameters for equity to follow. It happened. She became a co-owner of an IT business built on cloud computing — selling a concept, desktop-as-a-service, before most people understood what the cloud even meant.
        </Body>

        <Section title="Firing a $2M Bully Client — and the $18M Outcome That Followed" />
        <Body>
          The business grew to $6 million in annual revenue. One client was worth $2 million of it — a third of total revenue. And they were a bully.
        </Body>
        <Body>
          They were pulling the business away from its strategic direction. Their behavior had escalated to the point where something had to give. Frances and her co-founders made the decision to fire them.
        </Body>
        <Quote>
          "Taking out $2 million of revenue from a company doing $6 million is pretty extreme. You could have heard a pin drop when we told the CTO we were ending the relationship. They were not expecting that."
        </Quote>
        <Body>
          The restructure that followed forced clarity. The team started not with their internal org chart but with their remaining customers: who are they, what do they actually need, and what roles does serving them well require? In that process, Frances realized she had designed herself out of a job — and that this made complete sense. Her gift had always been going into a sales system, making it run beautifully, and then moving on to the next challenge. The consultant model was the natural next move.
        </Body>
        <Body>
          The company, restructured and refocused, was eventually bought out. Combined with IPO shares, the total value of the exit came to approximately $18 million.
        </Body>

        {/* Book photo */}
        <div className="my-14 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/frances-pratt-book.jpeg"
            alt="Frances Pratt holding her book More Sales Less Marketing"
            width={800}
            height={900}
            className="w-full object-cover"
            style={{ maxHeight: "540px", objectFit: "cover", objectPosition: "center center" }}
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>
              Frances Pratt with her book <em>More Sales Less Marketing</em> — a practical guide to building a high-performing B2B sales system from first principles
            </p>
          </div>
        </div>

        <Section title="The Wizard of Oz Sales Framework: Getting Dorothy Off the Porch" />
        <Body>
          Frances&apos;s book, <em>More Sales Less Marketing</em>, centers on a reframe she gives every founder who hires her: stop thinking about your sales process and start thinking about your client&apos;s buying journey. The difference is profound.
        </Body>
        <Body>
          She uses the Wizard of Oz as the metaphor. Your client is Dorothy. When Dorothy first arrives in Oz, she is disoriented, a little frightened, and completely overwhelmed. She has just accidentally killed someone. She is in a technicolor world she does not understand. This is your prospective customer on first contact.
        </Body>
        <Body>
          The first job is not to tell her about flying monkeys. It is not to warn her that a witch wants her shoes. It is not to reveal that the wizard is a fraud. Even if you know all of those things, none of them are useful to Dorothy right now. Your job is simply to get her off the porch, introduce her to the Yellow Brick Road, and let her start moving.
        </Body>
        <Quote>
          "Our role isn&apos;t to take over her journey. It&apos;s to allow her her journey — and allow her to learn that she had the power inside her all along. That&apos;s what great selling looks like."
        </Quote>
        <Body>
          The implication for founders: the impulse to show up and immediately explain everything — all your features, all your differentiators, all the ways you can help — is actually Dorothy-hostile. It overwhelms the person who most needs to feel safe taking the first step. A great sales process creates elegant, sequential moments of understanding and discovery. Each step is designed to let Dorothy move forward of her own choosing.
        </Body>

        <Section title="Sales vs. Marketing: Why Sales Always Comes First" />
        <Body>
          Ask most founders about sales and marketing and they will describe them as two sides of the same coin. Frances separates them clearly — and insists the order matters.
        </Body>
        <Body>
          <strong style={{ color: "#fff" }}>First: sales validates what marketing later amplifies.</strong> At the earliest stage of a business — or a new product — the questions that matter are not marketing questions. They are sales questions: Does this problem actually exist? Will someone pay for my solution? Exactly how do they describe the problem in their own words? You cannot answer those questions with a website or a campaign. You answer them by sitting in front of people and having the conversation.
        </Body>
        <Body>
          She was a judge at Launch 48 in Australia — an event where teams had 48 hours to launch a business. Her opening question to every team was always the same: how many customers have you spoken to? The answer was almost always zero. "You don&apos;t have time, you don&apos;t have time," they&apos;d say. Her response: "No — you don&apos;t have time <em>not</em> to. You can build the most beautiful mousetrap in the world, but if everyone has a cockroach problem, you do not have a business."
        </Body>
        <Body>
          <strong style={{ color: "#fff" }}>Second: marketing herds, selling hunts.</strong> Once you know who your customer is and what they will buy, marketing&apos;s job is to move groups of people through an awareness-to-consideration funnel until they become a marketing qualified lead. At that point they pass to sales. Marketing is about the herd. Selling is sitting across from one specific person and saying: I know exactly what that looks like, and I know how to help.
        </Body>
        <Body>
          <strong style={{ color: "#fff" }}>Third: the mindset is different.</strong> Marketing says get everything perfect before you launch — the website, the brand, the materials. Sales says take whatever you have, even a napkin sketch, and go ask the market. Iteration speed in sales is far faster, and the feedback is far more useful in the early stages.
        </Body>

        <Section title="The Three Things That Turn Sales-Averse Founders Into Confident Closers" />
        <Body>
          Frances doesn&apos;t promise founders that she will make them like sales. She promises she will make them love it. The path runs through three areas.
        </Body>
        <Body>
          <strong style={{ color: "#fff" }}>1. Mindset.</strong> The greasy used-car salesman image that lives in the back of every founder&apos;s mind is the root problem. Because nobody wants to be that person, they overcorrect into apology: "I&apos;m really sorry, when you&apos;re ready, let me know." They never ask. They have no process. They don&apos;t help Dorothy at all — they just leave her on the porch. Correcting the mindset means replacing the image of selling as pushing with the reality: selling is helping someone make a good buying decision, even if that decision is no.
        </Body>
        <Body>
          <strong style={{ color: "#fff" }}>2. Activities.</strong> If the goal is helping rather than pushing, the activity set changes completely. You start by listening, not telling. You understand their specific version of the problem. You understand what they&apos;ve tried before. You reflect it back: "It sounds to me like the problem is this, this, and this, and what that&apos;s stopping you from doing is this. Have I got that right?" They confirm or adjust. Then — and only then — do you ask: "Would it be okay if I shared some ways I might be able to help?" The dance has a sequence. You have put on the music, told them it is a waltz, and you are leading. But you don&apos;t get to stop in the middle of the song and walk away.
        </Body>
        <Body>
          <strong style={{ color: "#fff" }}>3. Results.</strong> The biggest mindset shift of all: a sale is not the only result of a sales conversation. A good conversation is a result. Learning something more about how to serve that person is a result. A referral is a result. An inquiry is a result. When every step has a result, the process feels much less like a high-stakes binary, and founders start showing up to conversations with curiosity instead of dread.
        </Body>
        <Quote>
          "Dorothy doesn&apos;t turn from this timid little girl into a ferocious witch-killer overnight. She goes on a journey of discovery. Our clients do exactly the same thing. Every step is a result."
        </Quote>

        <Section title="The Courage to Name What You See" />
        <Body>
          One insight Frances returned to throughout our conversation was the distinction between emotional intelligence and the willingness to act on it. Most people with high emotional intelligence can read a room accurately. Far fewer have the courage to say what they see out loud.
        </Body>
        <Body>
          "You might see something. But do you have the courage to name it — to call that out in a way that doesn&apos;t shut the person down, or make them angry, but encourages them forward?" Frances has spent her career honing exactly that skill. The willingness to say the thing the other person is not saying — about their own fear, their own uncertainty, their own situation — is what separates a great salesperson from a smooth one. "I&apos;ve honed that skill by being unsuccessful at it. You don&apos;t hone a gift by only being successful."
        </Body>
        <Body>
          Her final advice for founders applies far beyond the sales call: be honest. Share your wins, your failures, and everything in between. "Adults are no different from children. They&apos;re just less good at hiding their truth." Authenticity — not perfection — is what creates the conditions in which real buying decisions get made.
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
            Connect with Founders Building World-Class Sales
          </h3>
          <p
            className="mx-auto mt-3 max-w-md text-sm leading-relaxed"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Gildre connects high-caliber founders with operators and advisors like Frances who have been in the room — and know what it takes to close. Apply to join a community where the conversations that matter happen offline.
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
            "Frances Pratt",
            "More Sales Less Marketing",
            "B2B Sales",
            "Wizard of Oz Framework",
            "Sales vs Marketing",
            "Founder Coaching",
            "Sales Team Building",
            "Melbourne",
            "Change Management",
            "Servant Leadership",
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

function BioCallout() {
  const milestones = [
    { year: "Age 12", event: "First job at a Sydney chocolate shop — $5/hour plus as much chocolate as she could eat" },
    { year: "Uni", event: "Business degree majoring in hospitality; took over father's accounts books during secretary's leave" },
    { year: "Post-uni", event: "Four years at Ritz Carlton Australia; absorbed service culture and Deming continuous improvement" },
    { year: "Early career", event: "Saw Zig Ziglar live; pivoted into B2B IT sales; spent 17 years selling to businesses from startups to multinationals" },
    { year: "~2008", event: "Postgrad in change management; MBA at Melbourne Business School while working 50–60 hours/week" },
    { year: "2013+", event: "Fired $2M bully client (1/3 of revenue); restructured business; eventual buyout valued at ~$18M" },
    { year: "Now", event: "Independent sales consultant; Gildre member; author of More Sales Less Marketing" },
  ];
  const lessons = [
    {
      n: "1",
      title: "Get Dorothy off the porch",
      body: "Your client arrives disoriented. Your first job is not to overwhelm them with everything you know. It's to take one clear, safe step together — the Yellow Brick Road. The sale is a journey of discovery the client takes; your job is to make that journey possible.",
    },
    {
      n: "2",
      title: "Sales comes before marketing",
      body: "Before you build a funnel, run a campaign, or launch a website, talk to customers. Does the problem exist? Will someone pay for your solution? Those are sales questions, not marketing ones. Go ask the market with whatever you have, even a napkin sketch.",
    },
    {
      n: "3",
      title: "Tell the client's story, not yours",
      body: "The reason sales feels uncomfortable is that it feels like self-promotion. Replace your story with theirs: the problems you've seen, the wins you've helped create, the failures that made you better. That's a conversation of pride, not a pitch — and it lands completely differently.",
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
          Who is Frances Pratt?
        </h2>
        <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
          Frances Pratt is a Melbourne-based sales consultant, entrepreneur, and author with more than 30 years in B2B sales. For the past 15 years she has focused on helping founders overcome their fear of selling and build high-performing sales teams. She is the author of{" "}
          <em>More Sales Less Marketing</em>, holds an MBA from Melbourne Business School, and previously co-owned an IT company that grew to $6M ARR before an exit valued at approximately $18M. She is a Gildre member and a regular speaker on sales, change management, and organisational culture.
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
                <p className="font-bold mb-1 text-white">{l.n}. {l.title}</p>
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
