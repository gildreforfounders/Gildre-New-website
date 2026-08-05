import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/blog/chris-tsakalakis-stubhub-ceo-marketplace" },
  title: "Chris Tsakalakis: How the StubHub CEO Grew Ticket Sales From $400M to $3.2B in Eight Years | Gildre",
  description:
    "Former StubHub CEO Chris Tsakalakis on the seat map conversion flywheel, flipping 80% physical tickets to electronic, and why the best money a founder can raise is revenue from customers.",
  keywords: [
    "Chris Tsakalakis",
    "StubHub CEO",
    "StubHub growth",
    "Vivino",
    "Kiva",
    "marketplace startup",
    "B2C founder advice",
    "Wharton",
    "Start to Scale Podcast",
    "Sirac Ventures",
  ],
  openGraph: {
    url: "https://www.gildre.com/blog/chris-tsakalakis-stubhub-ceo-marketplace",
    title: "Chris Tsakalakis: How the StubHub CEO Grew Ticket Sales From $400M to $3.2B in Eight Years",
    description:
      "From Bain consulting in Warsaw to leading StubHub's 8x revenue run — Chris Tsakalakis on interactive seat maps, electronic delivery, and why bootstrapping beats TechCrunch fundraise headlines.",
    type: "article",
    images: [
      {
        url: "https://www.gildre.com/images/chris-tsakalakis-headshot.jpeg",
        width: 800,
        height: 800,
        alt: "Chris Tsakalakis, former CEO of StubHub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Tsakalakis: How the StubHub CEO Grew Ticket Sales From $400M to $3.2B in Eight Years",
    description:
      "StubHub CEO Chris Tsakalakis on the conversion flywheel, going 80% electronic, and why revenue from customers beats investor money every time.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Chris Tsakalakis: How the StubHub CEO Grew Ticket Sales From $400M to $3.2B in Eight Years",
  description:
    "Chris Tsakalakis, former President and CEO of StubHub, shares the strategic decisions that drove 8x revenue growth, from interactive seat maps to electronic delivery, and the lessons that carried him through Vivino, Kiva, and into venture capital.",
  image: "https://www.gildre.com/images/chris-tsakalakis-headshot.jpeg",
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
    "https://www.gildre.com/blog/chris-tsakalakis-stubhub-ceo-marketplace",
  about: [
    {
      "@type": "Person",
      name: "Chris Tsakalakis",
      jobTitle: "Former President & CEO",
      worksFor: { "@type": "Organization", name: "StubHub" },
    },
    { "@type": "Organization", name: "StubHub", url: "https://www.stubhub.com" },
    { "@type": "Organization", name: "Vivino", url: "https://www.vivino.com" },
    { "@type": "Organization", name: "Kiva", url: "https://www.kiva.org" },
    { "@type": "Organization", name: "eBay", url: "https://www.ebay.com" },
    { "@type": "Organization", name: "Bain & Company", url: "https://www.bain.com" },
  ],
  keywords:
    "Chris Tsakalakis, StubHub CEO, StubHub growth strategy, Vivino, Kiva, B2C marketplace, Wharton business school, Sirac Ventures, trefo.com, founder advice, bootstrapping, Start to Scale Podcast, Gildre",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Chris Tsakalakis",
  jobTitle: "Venture Partner",
  worksFor: { "@type": "Organization", name: "Sirac Ventures" },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Wharton School of Business, University of Pennsylvania",
    sameAs: "https://en.wikipedia.org/wiki/Wharton_School_of_the_University_of_Pennsylvania",
  },
  knowsAbout: [
    "B2C Marketplaces",
    "E-commerce",
    "Ticketing Industry",
    "Crowdfunding",
    "Venture Capital",
    "Management Consulting",
    "Team Building",
  ],
  description:
    "Chris Tsakalakis is the former President and CEO of StubHub, where he grew ticket sales from $400M to $3.2B over eight years. A Wharton graduate who began his career at Bain & Company, Chris went on to run Vivino (wine app) and Kiva (microloan nonprofit) before becoming a Venture Partner at Sirac Ventures. He also runs a CEO advisory practice at trefo.com.",
  sameAs: "https://www.trefo.com",
};

const faqs = [
  {
    q: "Who is Chris Tsakalakis?",
    a: "Chris Tsakalakis is the former President and CEO of StubHub, the online ticket marketplace. Under his leadership, StubHub grew annual ticket sales from $400 million to $3.2 billion over eight years. A Wharton School of Business graduate, Chris began his career at Bain & Company before joining eBay and then StubHub. He later served as CEO of Vivino and Kiva, and is currently a Venture Partner at Sirac Ventures and runs a CEO advisory practice at trefo.com.",
  },
  {
    q: "How did StubHub grow under Chris Tsakalakis?",
    a: "StubHub's growth under Chris Tsakalakis came from three primary drivers: aggressive performance marketing backed by a superior conversion rate; interactive stadium seat maps that let buyers pick their exact seat, which increased purchase likelihood; and a shift from 80% physical ticket delivery to 80% electronic delivery, dramatically improving customer satisfaction and reducing service costs. Strategic partnerships with Major League Baseball and major college sports programs accelerated the platform's reach and electronic delivery adoption.",
  },
  {
    q: "What is Vivino?",
    a: "Vivino is a wine app that allows users to take a photo of a wine bottle label and instantly see how other users have rated that wine. Chris Tsakalakis served as CEO of Vivino after leaving StubHub. Like his other ventures (StubHub, eBay, and Kiva), Vivino operates as a marketplace, matching wine buyers with community-sourced ratings and sellers.",
  },
  {
    q: "What is Kiva?",
    a: "Kiva is a nonprofit crowdfunding platform for micro loans. It allows individuals to give out loans of $25 at a time to borrowers in over 70 countries around the world. Chris Tsakalakis served as CEO of Kiva after Vivino. Kiva operates as a marketplace matching individual lenders to borrowers globally, continuing Chris's pattern of building businesses around a marketplace mechanism.",
  },
  {
    q: "What advice does Chris Tsakalakis give to early-stage founders?",
    a: "Chris Tsakalakis's core advice to founders is: the best money you can get is revenue from customers. He argues that investors take a long time to find and are difficult to manage, while customers are the only true validation of a business. He encourages founders to bootstrap for as long as possible, prove the model first, and resist the temptation to chase investor funding and TechCrunch headlines as a measure of success. 'If you have customers and revenue, it's easy to get money from investors. If you don't, it's almost impossible.'",
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

export default function ChrisTsakalakisBlog() {
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
            Chris Tsakalakis: How the StubHub CEO<br className="hidden sm:block" />{" "}
            Grew Ticket Sales From{" "}
            <span style={{ color: "#C9A96E" }}>$400M to $3.2B</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            From a Greek-American kid who worked construction for his dad to President and CEO of one of the internet's most recognizable marketplaces. Chris Tsakalakis joined the Start to Scale Podcast to break down the product decisions, partnership plays, and team-building principles that drove eight years of compounding growth at StubHub.
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
              <span>14 min read</span>
              <span>·</span>
              <span>StubHub · eBay · Vivino · Kiva · B2C Marketplaces</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────────────────────── */}
      <article className="mx-auto max-w-3xl px-6 py-16">

        {/* Intro */}
        <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
          We recently had the opportunity to sit down with Chris Tsakalakis, former President and CEO of{" "}
          <a
            href="https://www.stubhub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold transition-colors hover:text-[#C9A96E]"
            style={{ color: "#C9A96E" }}
          >
            StubHub
          </a>
          , CEO of{" "}
          <a
            href="https://www.vivino.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold transition-colors hover:text-[#C9A96E]"
            style={{ color: "#C9A96E" }}
          >
            Vivino
          </a>{" "}
          and{" "}
          <a
            href="https://www.kiva.org"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold transition-colors hover:text-[#C9A96E]"
            style={{ color: "#C9A96E" }}
          >
            Kiva
          </a>
          , and now Venture Partner at Sirac Ventures, on the <strong style={{ color: "#fff" }}>Start to Scale Podcast</strong>. Chris shared the full arc of 30 years in the internet industry: the Bain consulting years, the pivot to Silicon Valley in 1995, and the product decisions at StubHub that compounded into one of the internet's most impressive marketplace growth stories. Below are excerpts from the conversation.
        </p>

        {/* Headshot */}
        <div className="my-12 overflow-hidden rounded-2xl mx-auto" style={{ maxWidth: "620px", border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/chris-tsakalakis-headshot.jpeg"
            alt="Chris Tsakalakis, former President and CEO of StubHub"
            width={620}
            height={620}
            quality={90}
            sizes="(max-width: 660px) 100vw, 620px"
            className="w-full object-cover"
            style={{ maxHeight: "500px", objectFit: "cover", objectPosition: "center top" }}
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>
              Chris Tsakalakis, former President &amp; CEO of StubHub
            </p>
          </div>
        </div>


        <BioCallout />

        <Section title="Greek-American Roots: Construction, Restaurants, and an Entrepreneurial Blueprint" />
        <Body>
          Chris Tsakalakis grew up in the suburbs of Chicago, in a household where entrepreneurship wasn't a concept; it was the family business. His father was an electrical contractor who expanded into general construction and eventually real estate development. Two uncles and an aunt ran fast food and sit-down restaurants. Coming from Greek immigrant stock, being your own boss wasn't ambition; it was expectation.
        </Body>
        <Body>
          From age 12 to 20, Chris worked construction for his dad. That physical foundation (carrying materials, figuring things out with limited resources, being accountable for a result) became the through line of how he'd later operate inside large organizations. "I was no stranger to hard work through construction," he says. The transition came when he landed his first internships and discovered air-conditioned offices. The goal posts didn't disappear. They just moved indoors.
        </Body>

        <Section title="The Wharton Accident That Changed Everything" />
        <Body>
          Chris didn't apply to the Wharton School of Business at the University of Pennsylvania because he had a carefully mapped plan. He applied because a friend told him it existed. Growing up in the Chicago suburbs in the 1980s, Chris had heard of Harvard, Yale, and Princeton as Ivy League institutions, but not Penn. When a brochure arrived in the mail, a friend set him straight: this is a private university, Ivy League, and home to what many consider the best undergraduate business program in the country.
        </Body>
        <Body>
          He applied. He got in. He later graduated in 1989 with a BS in Economics, concentrating in real estate (a nod to his father's career) and entrepreneurial management (a sign of where his instincts were already pointing). The curriculum, rigorous and overlapping in many cases with MBA coursework, gave him the accounting, legal, and strategic foundations that most first-year consultants have to learn from scratch. He already had them.
        </Body>
        <Quote>
          "Donald Trump, Elon Musk, and I all have the same degree from Penn, a BS in Economics. You pick a concentration. I chose real estate and entrepreneurial management. I didn't want to specialize in just finance or accounting. I wanted to stay at a higher level and look across disciplines."
        </Quote>

        <Section title="From Bain's Boardroom to Warsaw: Finding the Entrepreneurial Bug" />
        <Body>
          Bain & Company recruited on campus. Chris, like most Wharton graduates of his era, dropped a resume in the Career Center slot and waited. He got 80 first-round interviews. He joined Bain in Boston. For three years, he worked on complex business problems for large US corporate clients: the kind of analytical, data-driven problem-solving Bain is known for. It was intellectually stimulating. It was also, increasingly, frustrating.
        </Body>
        <Body>
          "After a while it started to feel like an academic exercise," Chris recalls. "You could make recommendations to your clients, but whether or not they followed them was up to them, not you." That frustration drove him to volunteer for a different kind of assignment: privatization work in Warsaw, Poland. When he arrived at the Bain Warsaw office, there were three people there, compared to 700 in Boston. One of his first tasks was going to IKEA to buy desks.
        </Body>
        <Body>
          That was his first taste of startup-mode in a professional environment: no infrastructure, creative constraints, real accountability for outcomes. He spent a year and a half between Warsaw and Russia before returning to London, and immediately knew the consulting life, even in a new geography, wasn't the path. He wanted to build something, not advise on it.
        </Body>
        <Quote>
          "I&rsquo;d rather get my hands dirty and build something than sit back and advise. The Warsaw office had to draw out slides and fax them to London to be formatted. It was a logistical pain, but it forced you to be creative about overcoming obstacles. And that was more interesting to me than the actual work."
        </Quote>

        <Section title="Why B2C, Not B2B: The Fishing vs. Farming Framework" />
        <Body>
          In the summer of 1995, Netscape went public and Chris saw the internet for the first time as a career path, not a curiosity. He researched it, got excited, and started telling his English friends he wanted to work in the internet. Most of them had heard of it but hadn't used it. He moved to Silicon Valley anyway.
        </Body>
        <Body>
          When people ask why he chose business-to-consumer over the more predictable economics of B2B SaaS, Chris's answer is straightforward: personal empathy. He understood consumers because he was one. He could feel what made a product good or bad from the user's perspective in a way that a business customer relationship would never give him.
        </Body>
        <Body>
          But he also articulates the structural trade-off clearly. A transaction business, he says, is like fishing every day: you have to go find your catch each morning. A subscription business is like farming: you raise fish in a pond and they're there when you need them. "You still eat either way, but it's easier to eat from the farm than to catch in the wild every day." He chose the harder model because it interested him more. It was as simple as that.
        </Body>

        <Section title="StubHub: The Three Decisions That Drove 8x Growth" />
        <Body>
          Chris joined StubHub (already owned by eBay) as President and CEO, and over eight years grew annual ticket sales from $400 million to $3.2 billion. He's direct about the attribution: he didn't do it alone. But the strategic decisions that compounded the growth were deliberate.
        </Body>
        <Body>
          <strong style={{ color: "#fff" }}>1. The conversion flywheel.</strong> StubHub invested in interactive seat maps, letting buyers choose their exact seat in a stadium before purchasing. This sounds obvious in retrospect. At the time, it was a competitive advantage. Higher visual clarity meant higher purchase intent meant higher conversion rate. A visitor to StubHub was more likely to become a buyer than a visitor to any competitor. That allowed StubHub to spend more on marketing per visitor and still maintain profitable unit economics. The flywheel compounded.
        </Body>
        <Body>
          <strong style={{ color: "#fff" }}>2. Electronic delivery.</strong> When Chris started, 80% of tickets were delivered physically: via FedEx or by picking up at one of nine locations across the US. By the time he left, 80% were delivered electronically. That inversion, 80% physical to 80% digital, transformed the buyer experience (tickets instantly in hand, no delivery anxiety), the seller experience (no FedEx runs), and the operational cost structure (fewer customer service contacts, lower fulfillment costs). It was a product bet that paid off in satisfaction, trust, and economics simultaneously.
        </Body>
        <Body>
          <strong style={{ color: "#fff" }}>3. Strategic partnerships.</strong> The biggest was with Major League Baseball. StubHub became the official secondary marketplace for MLB, integrating directly with team ticketing systems and enabling seamless electronic delivery for baseball: the sport with the most games per season and the highest ticket volume. They extended the model to college sports: University of Michigan, University of Texas, and most major college athletic programs became partners. Each integration brought supply, trust, and higher electronic delivery rates.
        </Body>
        <Quote>
          "The likelihood of a visitor coming to StubHub to actually purchase a ticket was higher than our competitors because we had a better product. That meant we could spend more on marketing. A visitor coming to our site was worth more than a visitor going to a competitor's site."
        </Quote>

        <Section title="After StubHub: The Marketplace Pattern at Vivino and Kiva" />
        <Body>
          After leaving StubHub in 2014, Chris ran Vivino, a wine app where users photograph a label and the app returns community ratings and pricing data. Then came{" "}
          <a
            href="https://www.kiva.org"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold transition-colors hover:text-[#C9A96E]"
            style={{ color: "#C9A96E" }}
          >
            Kiva
          </a>
          , a nonprofit crowdfunding platform for micro loans that lets individuals lend as little as $25 to borrowers across 70+ countries. On the surface, these three companies, a ticketing marketplace, a wine discovery app, and a nonprofit lending platform, look unrelated. Chris sees the common thread clearly: all four companies he ran (eBay, StubHub, Vivino, Kiva) operated as marketplace mechanisms matching buyers to sellers, or in Kiva's case, lenders to borrowers.
        </Body>
        <Body>
          That consistent pattern wasn't accidental. Chris has a deep understanding of how marketplaces create value, what makes supply and demand sides trust each other, and how network effects compound, developed over three decades of building exactly these kinds of platforms.
        </Body>

        <Section title="Building Teams That Push Your Thinking" />
        <Body>
          Chris has a clear, two-part framework for what he looks for in leadership team members, whether he's hiring a CMO, a CTO, or a General Counsel.
        </Body>
        <Body>
          The first quality: genuine expertise in their domain. Not someone who needs direction on what to do in their function, someone who arrives with opinions, ideas, and an agenda that pushes the CEO's thinking. "If I'm the one who has the ideas and I'm pushing them to marketing, I have the wrong person running marketing," Chris says. The expert should be outrunning the CEO in their own lane.
        </Body>
        <Body>
          The second quality: the ability to think strategically across the whole business, not just their vertical. Every seat at the leadership table should be occupied by someone who can contribute meaningfully to company-level decisions, not just their department's roadmap. "I want to sit around the table and have everyone provide valuable input before a decision is made," he says. The decision may ultimately rest with him, but it should be informed by people who think as broadly as he does.
        </Body>

        <Section title="Career Advice: Be Valuable, Not Just Tenured" />
        <Body>
          For earlier-career professionals, Chris distills his advice into two words: be valuable. Not visible. Not tenured. Valuable.
        </Body>
        <Body>
          At Bain, the first piece of advice he received was: your job is to make your boss's job easier. That principle stuck. The people who get ahead fastest are the ones who are proactive, who identify problems before being asked to, who bring solutions rather than flags, who get things done without waiting to be told. He pushes back directly on the idea that time served earns promotion: "No one gets promoted just because they time served. This isn't a prison. The people who move more quickly in their careers are the ones who provide more value over a period of time."
        </Body>
        <Quote>
          "Don&rsquo;t wait for something to be told to you. Be proactive and be valuable. Solve problems and get things done. Think about how much value you accumulate for the company; once you reach that point, you can be promoted. But that&rsquo;s not based on a timeline. It&rsquo;s based on how much effort you put in every day."
        </Quote>

        <Section title="Founder Advice: The Best Money Is Revenue From Customers" />
        <Body>
          When Chris works with founders (whether as an advisor, investor, or mentor), he sees the same pattern: everyone is focused on raising money from investors. His advice is consistent and blunt.
        </Body>
        <Body>
          The best money you can get is revenue from customers. Investors take a long time to find and are difficult to manage. More importantly, they don't validate your business; customers do. If you have customers and revenue, investors will come to you. If you don't, finding investors is nearly impossible. The order of operations matters enormously.
        </Body>
        <Body>
          He's equally direct about the culture of fundraising announcements: raising money is not the achievement people think it is. TechCrunch is full of big-round headlines. Revenue milestones rarely get the same coverage. But a company that bootstrapped to product-market fit and real revenue is worth infinitely more, structurally, than one that raised a large round without proving demand.
        </Body>
        <Quote>
          "If I could start a business without raising any money from outside investors, I would do that first. Bootstrap it for as long as you can. Prove the model, that you have a product or service someone likes, and customers who will pay for it. That&rsquo;s much more important than raising money and getting your name in TechCrunch."
        </Quote>
        <Body>
          He's seen the downside up close: companies ruined by too much money, where the absence of capital constraints removed the discipline to be strategic. Capital efficiency: the investor's phrase for spending carefully, isn't just financial prudence. It's a forcing function for making better decisions faster.
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
            Build Alongside Operators Like Chris
          </h3>
          <p
            className="mx-auto mt-3 max-w-md text-sm leading-relaxed"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Gildre connects founders with operators, exited executives, and venture partners who have been in the seat. Get access to advisory sessions, peer matching, and warm introductions to people who have built and scaled at the highest level.
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
            href="https://www.stubhub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9A96E] transition-colors"
          >
            Learn more about StubHub →
          </a>
          <a
            href="https://www.kiva.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9A96E] transition-colors"
          >
            Learn more about Kiva →
          </a>
          <a
            href="https://www.trefo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9A96E] transition-colors"
          >
            Chris&rsquo;s consulting practice at trefo.com →
          </a>
        </div>

        {/* Tags */}
        <div className="mt-10 flex flex-wrap gap-2">
          {[
            "Chris Tsakalakis",
            "StubHub",
            "eBay",
            "Vivino",
            "Kiva",
            "B2C Marketplace",
            "Wharton",
            "Bain & Company",
            "Bootstrapping",
            "Founder Advice",
            "Team Building",
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
    { year: "1989", event: "Graduates from Wharton School of Business, University of Pennsylvania" },
    { year: "1989", event: "Joins Bain & Company in Boston; later seconded to Warsaw and Russia" },
    { year: "1995", event: "Netscape IPO sparks move to Silicon Valley; joins the internet industry" },
    { year: "2000s", event: "Joins eBay as Vice President" },
    { year: "2006", event: "Becomes President & CEO of StubHub; grows ticket sales from $400M to $3.2B" },
    { year: "2014", event: "Departs StubHub; goes on to run Vivino and then Kiva" },
    { year: "Now", event: "Venture Partner at Sirac Ventures; CEO advisory at trefo.com" },
  ];
  const lessons = [
    {
      n: "1",
      title: "Build the conversion flywheel before scaling marketing",
      body: "StubHub's interactive seat maps increased purchase conversion. A higher conversion rate meant each marketing dollar went further, which funded more aggressive spending than any competitor could justify.",
    },
    {
      n: "2",
      title: "Revenue is the only validation that matters",
      body: "Investors don't validate your business; customers do. If you have revenue, investors will find you. If you don't, raising is nearly impossible. Get the customer money first.",
    },
    {
      n: "3",
      title: "Hire experts who outrun you in their own lane",
      body: "The right leadership team member brings ideas to the CEO; they don't wait for direction. If you're the one pushing marketing ideas to your CMO, you've hired the wrong CMO.",
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
          Who is Chris Tsakalakis?
        </h2>
        <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
          Chris Tsakalakis is the former President and CEO of{" "}
          <a
            href="https://www.stubhub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
            style={{ color: "#C9A96E" }}
          >
            StubHub
          </a>
          , where he grew the online ticket marketplace from $400 million to $3.2 billion in annual ticket sales over eight years. A Wharton graduate and former Bain & Company consultant, Chris has spent 30 years building and leading B2C internet marketplace businesses including eBay (VP), Vivino (CEO), and Kiva (CEO). He is currently a Venture Partner at Sirac Ventures and runs a CEO advisory practice at{" "}
          <a
            href="https://www.trefo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
            style={{ color: "#C9A96E" }}
          >
            trefo.com
          </a>
          , focused on helping technology CEOs scale from 100 to 1,000 employees.
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
            {milestones.map((m, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
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
            Core Lessons from StubHub
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
