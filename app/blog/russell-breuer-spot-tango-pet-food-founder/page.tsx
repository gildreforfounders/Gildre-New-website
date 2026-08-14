import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/blog/russell-breuer-spot-tango-pet-food-founder" },
  title: "Russell Breuer: From Studio Apartment to Nine-Figure Pet Health Empire With Spot and Tango | Gildre",
  description:
    "Spot and Tango founder Russell Breuer on cooking dog food in a NYC studio apartment, scaling Unkibble from $2M to $20M in six months, and building his own factory in Allentown, PA.",
  keywords: [
    "Russell Breuer",
    "Spot and Tango",
    "Unkibble",
    "Pup Gum",
    "fresh dog food",
    "DTC pet food",
    "pet health startup",
    "Start to Scale Podcast",
    "pet food founder",
  ],
  openGraph: {
    url: "https://www.gildre.com/blog/russell-breuer-spot-tango-pet-food-founder",
    title: "Russell Breuer: From Studio Apartment to Nine-Figure Pet Health Empire With Spot and Tango",
    description:
      "From management consulting to cooking fresh meals for a mini Golden Doodle named Jack — Spot and Tango founder Russell Breuer on the decisions that built a nine-figure pet health business.",
    type: "article",
    images: [
      {
        url: "https://www.gildre.com/images/russell-breuer-headshot.webp",
        width: 800,
        height: 1000,
        alt: "Russell Breuer, Founder and CEO of Spot and Tango",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Russell Breuer: From Studio Apartment to Nine-Figure Pet Health Empire With Spot and Tango",
    description:
      "Spot and Tango founder Russell Breuer on scaling Unkibble from $2M to $20M in six months and building his own manufacturing facility in Allentown, PA.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Russell Breuer: From Studio Apartment to Nine-Figure Pet Health Empire With Spot and Tango",
  description:
    "Russell Breuer, founder of Spot and Tango, shares how a Cleveland kid with a management consulting background turned cooking fresh dog food for his mini Golden Doodle into a nine-figure direct-to-consumer pet health business.",
  datePublished: "2025-06-01",
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
    "https://www.gildre.com/blog/russell-breuer-spot-tango-pet-food-founder",
  about: [
    {
      "@type": "Person",
      name: "Russell Breuer",
      jobTitle: "Founder & CEO",
      worksFor: { "@type": "Organization", name: "Spot and Tango", url: "https://www.spotandtango.com" },
    },
    { "@type": "Organization", name: "Spot and Tango", url: "https://www.spotandtango.com" },
    { "@type": "Organization", name: "Pup Gum", url: "https://www.pupgum.com" },
  ],
  keywords:
    "Russell Breuer, Spot and Tango, Unkibble, Pup Gum, fresh dog food, direct to consumer pet food, DTC startup, pet health, human-grade dog food, Allentown factory, founder story, Gildre",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Russell Breuer",
  jobTitle: "Founder & CEO",
  worksFor: { "@type": "Organization", name: "Spot and Tango", url: "https://www.spotandtango.com" },
  knowsAbout: [
    "Direct-to-Consumer E-commerce",
    "Pet Health and Wellness",
    "Consumer Packaged Goods",
    "Vertical Integration",
    "Management Consulting",
    "Private Equity",
  ],
  description:
    "Russell Breuer is the founder and CEO of Spot and Tango, a nine-figure direct-to-consumer pet health company based in New York City. A Cleveland native with a background in management consulting and private equity, Russell launched Spot and Tango in 2017 after cooking fresh human-grade meals for his mini Golden Doodle, Jack. The company is known for its Unkibble product line and Pup Gum dental chew, and operates its own manufacturing facility in Allentown, PA.",
  sameAs: "https://www.spotandtango.com",
};

const faqs = [
  {
    q: "What is Spot and Tango?",
    a: "Spot and Tango is a direct-to-consumer pet health and wellness brand founded in 2017 by Russell Breuer. The company sells human-grade, fresh frozen dog food, Unkibble (a shelf-stable fresh dry dog food), treats, supplements, and Pup Gum dental chews, all sourced and manufactured in the USA. Spot and Tango ships nationwide at spotandtango.com.",
  },
  {
    q: "What is Unkibble by Spot and Tango?",
    a: "Unkibble is Spot and Tango's shelf-stable dry dog food made with human-grade, whole-food ingredients. Unlike traditional kibble, which is heavily processed; Unkibble uses a fresh dry process that removes moisture while preserving nutrients, making it 30–40% less expensive than fresh frozen options and far more convenient for urban dog owners with limited freezer space. It launched in April 2020 and scaled from $2M to $20M in annual run rate within six months.",
  },
  {
    q: "What is Pup Gum by Spot and Tango?",
    a: "Pup Gum is a dental chew for dogs developed by Spot and Tango. It combines mechanical brushing action, flaxseed for cleaning, and a clinically proven post-biotic that addresses the biofilm on dogs' teeth: the root cause of bad breath and plaque buildup. Available at pupgum.com and within spotandtango.com, Pup Gum sold out within a week and a half of its launch.",
  },
  {
    q: "How did Russell Breuer start Spot and Tango?",
    a: "Russell Breuer started Spot and Tango in 2017 in a NYC studio apartment, cooking fresh human-grade meals for his mini Golden Doodle, Jack. Inspired by his mother-in-law who had been cooking for her dog for decades, Russell saw the demand from neighbors and friends grow organically. He tested the concept in 14 New York City pet specialty stores before pivoting fully to direct-to-consumer e-commerce, and has since scaled to a nine-figure business with its own manufacturing facility.",
  },
  {
    q: "What advice does Russell Breuer give to early-stage founders?",
    a: "Russell Breuer's core advice for founders is grit. He emphasizes that every founder has bad days: things break, challenges pile up, and the temptation to quit is real. The founders who succeed are those who wake up the next morning, get back in the saddle, and keep making incremental progress. 'You may be in a hole, but you may be further out of the hole,' he notes. Consistency and resilience over time are what separate founders who build lasting companies.",
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

export default function RussellBreuerBlog() {
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
            Russell Breuer: From Studio Apartment<br className="hidden sm:block" />{" "}
            to{" "}
            <span style={{ color: "#C9A96E" }}>Nine-Figure Pet Health Empire</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            A Cleveland kid with a management consulting background who started cooking fresh dog food for his mini Golden Doodle in a NYC studio apartment. Spot&nbsp;and&nbsp;Tango founder Russell Breuer joined the Start to Scale Podcast to share how grit, vertical integration, and a relentless commitment to quality turned a side project into one of the fastest-growing pet health companies in the country.
          </p>

          {/* Author + meta row */}
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
              <span>Spot&nbsp;&amp;&nbsp;Tango · Unkibble · DTC · Pet Health</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────────────────────── */}
      <article className="mx-auto max-w-3xl px-6 py-16">

        {/* Intro */}
        <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
          We recently sat down with Russell Breuer, founder and CEO of{" "}
          <a
            href="https://www.spotandtango.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold transition-colors hover:text-[#C9A96E]"
            style={{ color: "#C9A96E" }}
          >
            Spot&nbsp;and&nbsp;Tango
          </a>
          , on the <strong style={{ color: "#fff" }}>Start to Scale Podcast</strong>. Russell shared the full arc of his journey, from management consulting in London to launching a fresh dog food company in a New York City studio apartment, scaling through COVID, building a factory from scratch, and launching Pup Gum, a first-of-its-kind dental innovation for dogs. Below are excerpts from the conversation.
        </p>

        {/* Russell headshot */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/russell-breuer-headshot.webp"
            alt="Russell Breuer, Founder and CEO of Spot and Tango"
            width={800}
            height={1000}
            quality={90}
            sizes="(max-width: 768px) calc(100vw - 48px), 720px"
            className="w-full object-cover"
            style={{ maxHeight: "520px", objectPosition: "center top" }}
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>
              Russell Breuer, Founder &amp; CEO of Spot and Tango
            </p>
          </div>
        </div>

        <BioCallout />

        <Section title="The Studio Apartment Origin Story" />
        <Body>
          Russell Breuer describes himself simply: a Cleveland kid. Born in 1980, he grew up in the Rust Belt before a traditional career in management consulting and private equity took him to London for eight years. When he returned to New York City in 2012, he brought with him years of operational experience across multinationals, and a mini Golden Doodle named Jack.
        </Body>
        <Body>
          The business began as a family habit. Russell's mother-in-law had been cooking fresh, human-grade meals for her dog, George, for decades. That same approach made its way into Russell's NYC studio apartment, where he and his wife began preparing meals for Jack. What happened next is the kind of organic growth founders dream about: neighbors wanted it, friends of friends wanted it, and before long, the phones were ringing off the hook.
        </Body>
        <Quote>
          "The dog used to sleep outside. Now the dog sleeps in the bed. Everything people are doing for themselves, they&rsquo;re doing for their pets."
        </Quote>
        <Body>
          That cultural shift: the humanization of pets, was the macro tailwind Russell had already been studying. Six to seven out of ten U.S. households own a dog, and the interest in organic, grain-free, and human-grade food had reached pets just as it had people. The demand signal was too clear to ignore.
        </Body>

        <Section title="From Side Hustle to CPG Company: The First Moves" />
        <Body>
          Like most founders, Russell didn't wait for a perfect plan. The first version of Spot and Tango (originally named Brewer Premium Pet Foods after his surname) was a commissary kitchen operation making fresh frozen meals: ground turkey, brown rice, carrots, and fruit and veg, cooked and frozen for safe delivery. The recipes were formulated to meet the full dietary needs of dogs, using food-grade (not feed-grade) ingredients sourced from the same upstream suppliers that serve grocery stores and restaurants.
        </Body>
        <Body>
          Before going all-in on e-commerce, Russell tested the product in retail, up to 14 pet specialty stores across the five boroughs of New York City, with branded freezers at point of sale. That experiment taught him fast: brick-and-mortar required distributors who ate margin, long lead times for changes, and enormous door count to scale. DTC, by contrast, let them move quickly: update creative, adjust copy, personalize at the individual level, all in real time.
        </Body>
        <Body>
          They chose DTC. The company rebranded to Spot and Tango in February 2019: the new name came from Russell's co-founder's father, and it stuck. "No one else has the word Spot and Tango if you do a Google search," Russell notes. "We were the only company that pops up." The rebrand also came with a critical product evolution: moving away from small/medium/large portion sizes to a personalized quiz-based algorithm that accounts for each dog's breed, weight, and activity level. That shift unlocked a new level of product-market fit, and a subscription model that made retention genuinely sticky.
        </Body>

        <Section title="Unkibble: The $2M to $20M Moment" />
        <Body>
          Fresh frozen food solved the quality problem. But it came with two friction points customers kept raising: it was expensive (cold-chain logistics and dry ice aren't cheap), and it was inconvenient (urban dog owners don't have the freezer space). Russell's team went back to the drawing board with a simple brief: same mission, same human-grade whole ingredients, nothing artificial or synthetic, but shelf-stable.
        </Body>
        <Body>
          The result was <strong style={{ color: "#fff" }}>Unkibble</strong>. Using a unique fresh dry process that removes water while preserving nutrients, Unkibble delivers the same quality as fresh frozen at 30–40% less cost. It launched in April 2020. Five people on the team, all dealing with COVID themselves.
        </Body>
        <Quote>
          "We ordered what we thought was three or four months of product. The first purchase order sold out in four days. The business went from $2 million run rate to $5, $10, and $20 million in six months."
        </Quote>
        {/* Russell at the factory with a dog */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/russell-breuer-spot-tango-factory.jpeg"
            alt="Russell Breuer holding a dog outside the Spot and Tango facility in Allentown, PA"
            width={800}
            height={1000}
            quality={90}
            sizes="(max-width: 768px) calc(100vw - 48px), 720px"
            className="w-full object-cover"
            style={{ maxHeight: "560px", objectPosition: "center top" }}
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>
              Russell at the Spot and Tango manufacturing facility in Allentown, PA
            </p>
          </div>
        </div>

        <Body>
          The timing was fortuitous but not accidental. The team had responded directly to customer feedback. COVID then accelerated every tailwind at once: 23 million dogs were adopted during the pandemic, competing DTC brands pulled back on performance marketing spend, and Spot and Tango was right there, with a more accessible product, at the exact moment demand surged. Unkibble wasn't a pivot; it was a customer-driven product extension that became the engine of the company.
        </Body>

        <Section title="Why Spot and Tango Built Its Own Factory" />
        <Body>
          At peak outsourcing, Spot and Tango was running six co-manufacturers across the country, with full truckloads shipping from East Coast to West Coast, across six different buildings. That model worked at a certain scale. Then it didn't.
        </Body>
        <Body>
          Most DTC brands outsource indefinitely. Russell made the contrarian call to build. In October 2022, Spot and Tango launched its own manufacturing facility in Allentown, Pennsylvania. It now employs over 100 people, has been further automated, and is operating in its third year.
        </Body>
        <Body>
          "People don't build factories because they're expensive and they're hard," Russell says plainly. "We did it." The decision took two years to execute: office trailers outside the building, a steep manufacturing learning curve, heavy reliance on an institutional investor with factory-building expertise. But the payoff was control: over quality, over margin, over the supply chain at true scale. Owning the factory wasn't a vanity move. It was a necessary one for a company with Spot and Tango's ambitions.
        </Body>

        <Section title="Pup Gum: First-of-Its-Kind Dental Innovation" />
        <Body>
          Spot and Tango was always positioned as a pet health company, not just a food company. Ninety-three percent of dogs aged three and above have periodontal disease. Most dental products on the market use mechanical action: ridges and shapes that scrape plaque, or require expensive vet cleanings. Russell's team saw a white space.
        </Body>
        <Body>
          <a
            href="https://www.pupgum.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold transition-colors hover:text-[#C9A96E]"
            style={{ color: "#C9A96E" }}
          >
            Pup Gum
          </a>{" "}
          combines three elements: mechanical brushing, flaxseed to help clean the surface, and a clinically proven post-biotic that targets the biofilm on dogs' teeth at the source. Biofilm is the root cause of plaque and bad breath; most products mask the symptom. Pup Gum addresses it directly. The product launched in May and sold out in a week and a half. It's available standalone at pupgum.com (including a one-time purchase option, not just subscription) and within the Spot and Tango platform. Russell views it as proof of concept for the company's broader ambition: to be the one-stop shop for pet health across all categories.
        </Body>

        <Section title="How Spot and Tango Acquires Customers" />
        <Body>
          Spot and Tango is a lower-funnel, direct response marketing operation. The primary channels are Meta, Google, and TikTok: paid performance advertising where creative quality is everything. "If our creative doesn't break through the noise, we won't be successful," Russell says. "We are in the entertainment business. I've got to compete with clicks from every other e-com brand out there: cat food brands, tennis shoes, t-shirts. Anything in consumer is going to draw the attention of the consumer."
        </Body>
        <Body>
          The approach is test-and-learn at speed: launch new creative assets, measure customer acquisition cost efficiency, kill what's not working, and double down on what is. The same philosophy extends to product launches. Unkibble's first purchase order sold out in four days, but not because they were certain it would work. They launched it because you can only learn so much from research. Eventually you pull the trigger and get live feedback.
        </Body>

        <Section title="Building the Team That Can Scale" />
        <Body>
          Russell's framework for early hiring is clear: find athletes who can do it all. In the early days, the marketer might handle ops, customer experience, and logistics simultaneously. As the company scales, those generalists give way to specialists with deep functional expertise who unlock specific wins: margin improvements, new distribution channels, better unit economics.
        </Body>
        <Body>
          The two values Russell screens for are empathy and humility. "Traveling overseas and working in London and Europe, I met so many people from very different backgrounds," he says. That exposure, he believes, made him a better manager, and it shaped the culture at Spot and Tango. Russell and his co-founder interview every hire. It's not a formality. They are looking for specific pattern recognition, and no one joins the company without them making the call directly.
        </Body>

        <Section title="The Founder's Edge: Grit" />
        <Body>
          Asked what advice he would give to an early-stage founder, Russell doesn't hesitate.
        </Body>
        <Quote>
          "Grit. You need grit. Every founder has a bad day. Things break every day. It can be quite an emotional journey, and it&rsquo;s easy to give up and throw in the towel. The people who are successful wake up the next day and get back on the saddle. You look back after 10 days, 25 days, 35 days, and you will have made progress. You may be in a hole, but you may be further out of the hole."
        </Quote>
        <Body>
          Eight-plus years in the seat, a nine-figure business, a factory of 100+ employees, two product lines that have each sold out on launch, and the lesson Russell leads with is the same one he'd give himself in 2017: keep showing up. One day at a time, seven days a week.
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
            Build Alongside Founders Like Russell
          </h3>
          <p
            className="mx-auto mt-3 max-w-md text-sm leading-relaxed"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Gildre is a curated community for high-caliber founders. Get access to advisory sessions, peer matching, live events, and warm introductions to investors and operators who have built and exited at scale.
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

        {/* External links */}
        <div
          className="mt-10 flex flex-wrap gap-4 text-sm"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          <a
            href="https://www.spotandtango.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9A96E] transition-colors"
          >
            Learn more about Spot and Tango →
          </a>
          <a
            href="https://www.pupgum.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9A96E] transition-colors"
          >
            Explore Pup Gum →
          </a>
        </div>

        {/* Tags */}
        <div className="mt-10 flex flex-wrap gap-2">
          {[
            "Spot and Tango",
            "Russell Breuer",
            "Unkibble",
            "Pup Gum",
            "DTC",
            "Pet Health",
            "CPG",
            "Founder Story",
            "Grit",
            "Vertical Integration",
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
            style={{ color: "rgba(255,255,255,0.4)" }}>
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
            className="underline underline-offset-2 hover:text-zinc-400 transition-colors">
            Privacy Policy
          </a>
          {" · "}
          <a
            href="/"
            className="underline underline-offset-2 hover:text-zinc-400 transition-colors">
            Back to Gildre.com
          </a>
        </p>
      </div>
    </div>
  );
}

function BioCallout() {
  const milestones = [
    { year: "2012", event: "Returns to NYC after 8 years in London; begins cooking for mini Golden Doodle Jack" },
    { year: "2017", event: "Founds Spot and Tango (originally Brewer Premium Pet Foods) in a NYC studio apartment" },
    { year: "2019", event: "Rebrands to Spot and Tango; pivots from retail to fully direct-to-consumer" },
    { year: "2020", event: "Launches Unkibble in April; scales from $2M to $20M run rate in six months" },
    { year: "2022", event: "Opens own manufacturing facility in Allentown, PA with 100+ employees" },
    { year: "2025", event: "Launches Pup Gum dental chew at pupgum.com; sells out in under two weeks" },
  ];
  const lessons = [
    {
      n: "1",
      title: "Respond to your customers, then move fast",
      body: "Unkibble wasn't a strategic pivot; it was a direct response to two customer complaints: fresh frozen is too expensive and takes up too much freezer space. That feedback became a product that scaled 10x in six months.",
    },
    {
      n: "2",
      title: "Vertical integration is hard, but the moat is real",
      body: "Building a factory in Allentown was contrarian, expensive, and took two years. Now it's one of Spot and Tango's most defensible assets: quality control, margin ownership, and supply chain certainty at scale.",
    },
    {
      n: "3",
      title: "Grit compounds over time",
      body: "Russell's single piece of advice to any founder is grit. Progress isn't always visible day to day, but the founders who wake up, get back on the saddle, and keep building are the ones who look back months later and realize they've dug out of the hole.",
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
          Who is Russell Breuer?
        </h2>
        <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
          Russell Breuer is the founder and CEO of{" "}
          <a
            href="https://www.spotandtango.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
            style={{ color: "#C9A96E" }}
          >
            Spot and Tango
          </a>
          , a nine-figure direct-to-consumer pet health brand. A Cleveland native with a background in management consulting and private equity, Russell spent eight years in London before returning to NYC and launching Spot and Tango in 2017. He built the company from a studio apartment cooking operation into a vertically integrated manufacturer with its own facility in Allentown, PA, serving customers nationwide with human-grade dog food, Unkibble, treats, supplements, and Pup Gum dental chews.
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
            Key Milestones
          </p>
          <ul className="space-y-3">
            {milestones.map((m) => (
              <li key={m.year} className="flex items-start gap-3 text-sm">
                <span
                  className="font-bold flex-shrink-0 tabular-nums"
                  style={{ color: "#C9A96E", minWidth: "2.8rem" }}
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
            Core Lessons from Spot and Tango
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
