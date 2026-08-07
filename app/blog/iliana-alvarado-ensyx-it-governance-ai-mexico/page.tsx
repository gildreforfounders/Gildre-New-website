import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/blog/iliana-alvarado-ensyx-it-governance-ai-mexico" },
  title: "Iliana Alvarado: The Mexico City Attorney Who Left Banking to Build ENSYX — IT and AI Governance for Every Company That's Becoming a Tech Company | Gildre",
  description:
    "Iliana Alvarado, founder of ENSYX and Gildre member based in Mexico City, on the gap between IT services and IT governance, why every company is becoming a tech company, and how a decade of odd jobs across three continents taught her to build without a plan.",
  keywords: [
    "Iliana Alvarado",
    "ENSYX",
    "IT governance",
    "AI governance",
    "Mexico City entrepreneur",
    "fractional CTO",
    "IT services Mexico",
    "Banamex",
    "Latin America startup",
    "IT compliance",
    "AI risk management",
    "Gildre member",
  ],
  openGraph: {
    url: "https://www.gildre.com/blog/iliana-alvarado-ensyx-it-governance-ai-mexico",
    title: "Iliana Alvarado: The Mexico City Attorney Who Left Banking to Build ENSYX — IT and AI Governance for Every Company That's Becoming a Tech Company",
    description:
      "Iliana Alvarado on the critical gap between IT execution and IT governance, why AI adoption without documentation creates liability, and what a decade of building her plane while flying taught her about entrepreneurship.",
    type: "article",
    images: [
      {
        url: "https://www.gildre.com/images/iliana-alvarado-headshot.jpeg",
        width: 800,
        height: 800,
        alt: "Iliana Alvarado, founder of ENSYX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iliana Alvarado: From Banamex to ENSYX — IT and AI Governance for the Era When Every Company Is a Tech Company",
    description:
      "Iliana Alvarado on the governance gap in IT, AI liability most founders don't know they have, and why your value multiplier, not your credentials, is what actually builds a business.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Iliana Alvarado: The Mexico City Attorney Who Left Banking to Build ENSYX — IT and AI Governance for Every Company That's Becoming a Tech Company",
  description:
    "Iliana Alvarado, founder of ENSYX and Gildre member, on identifying the governance gap in IT services, why every company is becoming a tech company, how AI adoption without documentation creates real liability, and what a decade living across New York, Boston, Santiago, and Germany taught her about building without a plan.",
  image: "https://www.gildre.com/images/iliana-alvarado-headshot.jpeg",
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
    "https://www.gildre.com/blog/iliana-alvarado-ensyx-it-governance-ai-mexico",
  about: [
    {
      "@type": "Person",
      name: "Iliana Alvarado",
      jobTitle: "Founder and CEO, ENSYX",
    },
    {
      "@type": "Organization",
      name: "ENSYX",
      description: "IT and AI governance services firm based in Mexico, partnered with XPERTEKIT.Inc in Dallas",
    },
  ],
  keywords:
    "Iliana Alvarado, ENSYX, IT governance, AI governance, Mexico City entrepreneur, fractional CTO, IT services, Banamex, Latin America startup, AI compliance, Gildre",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Iliana Alvarado",
  jobTitle: "Founder and CEO, ENSYX",
  knowsAbout: [
    "IT Governance",
    "AI Governance",
    "Corporate Law",
    "Risk Management",
    "Digital Transformation",
    "Fractional CTO Services",
    "Latin America Business",
    "Change Management",
  ],
  description:
    "Iliana Alvarado is the founder of ENSYX, an IT and AI governance firm based in Mexico City partnered with XPERTEKIT.Inc in Dallas. An attorney with 20+ years of experience, she previously spent nearly a decade at Banamex before launching ENSYX in 2023. She holds an LLM from Heidelberg University (split between Santiago, Chile and Germany), an undergraduate degree in linguistics, and a law degree from Mexico. She is a Gildre member actively expanding ENSYX to Chile.",
};

const faqs = [
  {
    q: "Who is Iliana Alvarado?",
    a: "Iliana Alvarado is the founder of ENSYX, an IT and AI governance firm based in Mexico City that partners with XPERTEKIT.Inc in Dallas to deliver comprehensive technology services. An attorney with more than 20 years of experience, she previously worked at Banamex, one of Mexico's most important banks, for nearly a decade before launching ENSYX in 2023. She holds a law degree from Mexico, an LLM from Heidelberg University (split between Santiago and Germany), and an undergraduate degree in linguistics. She is a Gildre member currently expanding ENSYX into Chile.",
  },
  {
    q: "What does ENSYX do?",
    a: "ENSYX provides IT and AI governance services to businesses of all sizes, with a particular focus on companies that need their technology strategy aligned with their broader business direction. Services include endpoint management, digital transformation, fractional CTO, IT strategy, IT governance, and AI governance. ENSYX's core thesis is that the IT industry has focused heavily on technical execution while leaving a critical gap: context. Governance (understanding who has access to what, whether AI tools are putting company data at risk, and whether decisions are documented) is what ENSYX fills.",
  },
  {
    q: "What is the difference between IT services and IT governance?",
    a: "Iliana Alvarado explains it this way: most IT service providers do excellent technical work, but in isolation from business context. They manage your network. They maintain your endpoints. But they may not be asking: is your AI usage documented? Who has access to what data? Are your technology decisions aligned with where your company wants to grow? IT governance is the discipline that puts technology decisions inside the context of corporate strategy, risk, and liability. For smaller companies without a board of directors, governance may feel optional, but they are still legally liable to their clients, and undocumented AI decisions are an exposure most founders don't know they're carrying.",
  },
  {
    q: "Why does Iliana Alvarado say every company is becoming a tech company?",
    a: "Iliana argues that regardless of industry, every company now depends on technology to operate, and that dependency will only deepen with AI. The implication: technology is no longer a support function. It needs to be at the center of corporate decision-making. Hardware costs are rising because AI is consuming supply. AI tools are proliferating without governance. If you don't have someone guiding your technology strategy within the context of your business goals, you're making critical decisions blindly. ENSYX exists to provide that guidance, particularly for mid-market companies that can't afford a full-time CTO but can't afford to operate without one either.",
  },
  {
    q: "What advice does Iliana Alvarado give to first-time founders?",
    a: "Iliana's core advice: start from the understanding that everybody has the same capabilities as you. Nobody is more or less than you. From that baseline of equality, the question becomes not 'what can I sell' but 'what multiplier am I bringing to the table for the people I serve?' If your product or service is devoid of a clear value multiplier, a reason it makes someone else's goals more achievable; it may not work in today's market. The founders who succeed are the ones who anchor their business in what it enables for others, not just what it is.",
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

export default function IlianaAlvaradoBlog() {
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
              Member Feature · Mexico City, Mexico
            </span>
          </div>
          <h1
            className="text-[clamp(1.9rem,4.5vw,3.25rem)] font-bold leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Iliana Alvarado: The Mexico City Attorney Who Left Banking to Build{" "}
            <span style={{ color: "#C9A96E" }}>ENSYX</span>: IT and AI Governance for the Era When Every Company Is a Tech Company
          </h1>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            After nearly a decade at one of Mexico&apos;s biggest banks, attorney Iliana Alvarado saw a gap nobody was filling: companies were getting great IT execution with zero governance context. She left in 2023, built ENSYX, and is now expanding from Mexico City to Chile. She joined the Start to Scale Podcast to share the thesis, the pivot, and what a decade of building without a plan across three continents taught her about entrepreneurship.
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
              <span>IT Governance · AI · Latin America · Legal Tech</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────────────────────── */}
      <article className="mx-auto max-w-3xl px-6 py-16">

        <Body>
          Most founders pick a lane and stay in it. Iliana Alvarado spent fifteen years doing the opposite, moving between legal careers, service jobs, countries, and languages, and discovered that the ability to read context across radically different environments was the skill the technology industry was missing entirely. Her company,{" "}
          <strong style={{ color: "#fff" }}>ENSYX</strong>, exists at exactly that intersection: technically capable IT services wrapped in the governance and legal context that turns isolated tech decisions into a coherent corporate strategy. Iliana joined the{" "}
          <strong style={{ color: "#fff" }}>Start to Scale Podcast</strong> from Mexico City to unpack the thesis, the career arc, and the cultural lens she brings to a market that is just beginning to understand what it needs.
        </Body>

        {/* Headshot */}
        <div className="my-12 overflow-hidden rounded-2xl mx-auto" style={{ maxWidth: "560px", border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/iliana-alvarado-headshot.jpeg"
            alt="Iliana Alvarado, founder of ENSYX, IT and AI governance firm based in Mexico City"
            width={560}
            height={560}
            quality={90}
            sizes="(max-width: 600px) 100vw, 560px"
            className="w-full object-cover"
            style={{ maxHeight: "500px", objectFit: "cover", objectPosition: "center top" }}
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>
              Iliana Alvarado, founder of ENSYX and Gildre member based in Mexico City
            </p>
          </div>
        </div>


        <BioCallout />

        <Section title="Building the Plane While Flying: Leaving Mexico at 18 With No Plan" />
        <Body>
          Iliana left Mexico at 18 or 19 and didn&apos;t come back until her early thirties. In between: New York, Boston, Rhode Island, stints in Europe, odd jobs that would raise eyebrows on a traditional CV, a law degree already in hand, and a gradually forming idea of what she actually wanted her life to look like.
        </Body>
        <Body>
          She was not unusual in one sense, leaving Latin America in your twenties to experience the world happens, particularly from a position of relative privilege, which she is the first to acknowledge. What was unusual was that she had no plan. "I was just flying and building the plane while flying," she says. "I didn&apos;t really have a plan. I just knew that I wanted this, and I knew that I needed a plan. So I made one on the go."
        </Body>
        <Body>
          The jobs she took during those years were not glamorous: ice cream service, waitressing, working in a chocolate shop, cooking. But each of them, she realized in retrospect, was doing something specific: teaching her how to connect with people across languages, cultures, and class backgrounds. "The service part was the most important part. It helped me connect with people. You get to know a lot of very interesting people."
        </Body>
        <Body>
          The master&apos;s degree came next. While in Boston, she ruled out pursuing a US law degree and started looking for alternatives. The Heidelberg University LLM, an international master&apos;s in law split between Santiago, Chile and Germany, won her over on a single selling point: she would get a German education while living in South America first. She enrolled. She also, along the way, studied linguistics, a degree she describes as one of the most practically useful things she ever did.
        </Body>
        <Quote>
          "It&apos;s one thing when people tell you they&apos;re multicultural or bilingual from an academic standpoint. It&apos;s very different when you&apos;re actually there and you actually have to face different traditions, different practices, different ways of engaging with life itself. That opened up the world to me."
        </Quote>

        <Section title="Santiago, Banamex, and What Corporate Taught Her About Governance" />
        <Body>
          After completing her LLM, Iliana worked at one of the most prestigious law firms in Santiago, Chile. The experience of doing serious legal work in a foreign country, one with a distinct culture, a complicated recent history, and a different structural relationship with regulation than Mexico, sharpened a skill she had already been developing: adapting not just linguistically but institutionally.
        </Body>
        <Body>
          "Chile has structures I haven&apos;t seen in any other country," she says. "For better or for worse because of their past, they have a little bit of rigidity still. And that helped me shape how I do things now. Because even though you need leeway and space, you also need structure." That awareness of structure, when it serves you and when it constrains you, became central to how she eventually thought about IT governance.
        </Body>
        <Body>
          She returned to Mexico and spent nearly a decade at Banamex, one of the country&apos;s most important financial institutions. Corporate life suited her in ways she hadn&apos;t expected. She learned how a well-run large organization actually operates from the inside: the rhythms, the decision chains, the governance architecture. She also learned something more personal: her most productive self wasn&apos;t the version that worked the longest hours. It was the version that slept more than seven hours, ate at consistent times, and protected her cognitive capacity deliberately.
        </Body>
        <Body>
          "My most productive self was when I slept well, when I was healthy, not stressed. I know it sounds obvious, but when you&apos;re in it, you&apos;re like, well, I&apos;m eating well, I&apos;m healthy. Are you actually?" The bank taught her what good operational habits look like at scale, and what goes wrong when they erode.
        </Body>
        <Body>
          By 2023, she had asked herself a question she could no longer defer: do I see myself doing this same thing for however many more years? The answer was uncomfortable. "No. I want to do so many things. And if I keep doing an eight-to-seven, I was never going to be able to do all of the things I wanted to do."
        </Body>

        {/* ENSYX banner */}
        <div className="my-14 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <div
            className="w-full flex items-center justify-center py-2"
            style={{ backgroundColor: "#4a1d8c" }}
          >
            <Image
              src="/images/iliana-alvarado-ensyx-banner.jpeg"
              alt="ENSYX, Reliable. Secure. Trusted. IT and AI governance"
              width={1200}
              height={400}
              quality={90}
              sizes="(max-width: 768px) calc(100vw - 48px), 720px"
              className="w-full"
              style={{ maxHeight: "210px", objectFit: "contain" }}
            />
          </div>
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>
              ENSYX: Reliable. Secure. Trusted. IT and AI governance services for companies that need technology decisions inside a business context.
            </p>
          </div>
        </div>

        <Section title="The Gap Nobody Was Filling: IT Without Governance" />
        <Body>
          ENSYX grew from a specific observation Iliana made after leaving Banamex. The US IT services market, and the managed service provider (MSP) space in particular was saturated with technically capable providers. Plenty of very smart people were delivering solid infrastructure, endpoint management, and networking support. But almost universally, they were doing it detached from context.
        </Body>
        <Body>
          "They were doing a very good job at the IT itself, but detached from context. If I tell you I&apos;m going to manage your network. Okay, good to know, but it lacks context. And context is important." Twenty years as an attorney, combined with her work in governance and risk at Banamex, gave Iliana a precise name for what was missing: IT governance.
        </Body>
        <Body>
          ENSYX partnered with XPERTEKIT.Inc, based in Dallas, to build a combined capability: technically excellent managed IT services delivered within a governance and compliance framework. The partnership lets ENSYX serve clients with everything from endpoint management and digital transformation to fractional CTO services and strategic IT planning, with governance layered across all of it.
        </Body>
        <Quote>
          "Every company is going to be a tech company. You need tech to run your company. So you need to think about who is going to take care of your IT, not only your IT isolated, but your IT within the context of your company and how you want to grow and where you want to go."
        </Quote>
        <Body>
          The AI governance piece arrived as a natural extension. AI adoption is accelerating across every industry, and most companies, even those with internal IT teams, are making AI decisions without documentation, without an access framework, and without a clear understanding of what data they&apos;re exposing. That is not just a technical problem. It is a legal and liability problem.
        </Body>
        <Body>
          "Do you actually know what access you&apos;re granting? Do you actually know if your data is secure? Are you paying for it? If you&apos;re not, are you okay with the risk that implies?" Iliana is careful not to be prescriptive here. Risk-seeking is a legitimate posture. But it needs to be a documented decision, not an accidental omission. "As long as they are aware, there is no problem. Even if medium or small companies don&apos;t have a board of directors, they are still liable to their clients."
        </Body>

        <Section title="Closing Deals Across Latam: Why Every Country Is Different" />
        <Body>
          ENSYX now operates across Mexico and is actively expanding into Chile, where two incoming pieces of IT legislation have created real demand for exactly what the firm provides. But getting there has required learning something that Iliana frames as the hardest lesson of her entrepreneurial journey: you have to adapt not to a country&apos;s work culture, but to how that country closes deals.
        </Body>
        <Body>
          "As a company, you don&apos;t have to adapt to their work culture, but you have to adapt to the way they close deals. That is one of the biggest lessons I&apos;ve learned." The mechanics vary sharply across Latam. In Mexico, the game is relational and insular: it is entirely about who you know and what can be exchanged within that network. Cold outreach to an unknown party goes nowhere. In Chile, trust matters just as much, but the path to it is different, an introduction from a known contact opens a door that would otherwise be permanently closed.
        </Body>
        <Body>
          Germany, where she spent part of her LLM, operates differently still. What reads as coldness or detachment to most Latin American expats felt to Iliana like something she respected: structure, directness, and a clear separation between the professional and the personal. "What would translate as detachment for someone else, for me it was respect. It was organization. I loved all that."
        </Body>
        <Body>
          The cross-cultural fluency she built across a decade of odd jobs, legal work, and corporate life is now a competitive advantage. Most IT governance consultants understand the technical side or the legal side. Very few can read a room in Santiago the same way they read one in Mexico City, and close a deal in both.
        </Body>

        <Section title="Work-Life Balance Is a Myth, and So Is the 120-Hour Week" />
        <Body>
          Iliana is clear-eyed on a question that trips up a lot of founders: how do you structure your life when you&apos;re building something? Her answer cuts in two directions at once.
        </Body>
        <Body>
          First: if you are genuinely passionate about what you&apos;re building, work-life balance is a category error. "Work-life balance doesn&apos;t really exist. It&apos;s a myth. If you want to be good at something, you don&apos;t budget the hours you spend doing that. Just do it because you want to be good at it, because it&apos;s your passion, because there&apos;s something at the end of that process that you want." She sleeps less some nights, not because anyone told her to, but because she chooses to. That distinction (obligation versus drive) is everything.
        </Body>
        <Body>
          Second: the 80-hour week as a badge of honor is a different story entirely. "That&apos;s also untenable and not healthy." The version of Iliana that did her best work at Banamex was not the one grinding the longest; it was the one sleeping consistently, eating at regular times, and managing her cognitive load deliberately. Both things are simultaneously true: don&apos;t count the hours, and don&apos;t wreck the machine that produces them.
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
            Connect with Founders Building Across Borders
          </h3>
          <p
            className="mx-auto mt-3 max-w-md text-sm leading-relaxed"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Gildre connects high-caliber founders like Iliana who are building in emerging markets, navigating cross-cultural expansion, and solving problems that require both technical depth and business judgment. Apply to join the community.
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
            "Iliana Alvarado",
            "ENSYX",
            "IT Governance",
            "AI Governance",
            "Mexico City",
            "Latin America",
            "Fractional CTO",
            "AI Compliance",
            "Legal Tech",
            "Cross-Border Expansion",
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
    { year: "Age 18–19", event: "Leaves Mexico; spends years in New York, Boston, Rhode Island, and Europe working service jobs" },
    { year: "Santiago", event: "Works at one of Chile's most prestigious law firms after completing LLM through Heidelberg University (split Santiago/Germany)" },
    { year: "Post-LLM", event: "Returns to Mexico; joins Banamex, one of the country's largest banks; spends ~9 years in corporate governance and risk" },
    { year: "2023", event: "Leaves Banamex; launches ENSYX in partnership with XPERTEKIT.Inc (Dallas) to fill the IT governance gap" },
    { year: "Now", event: "Growing ENSYX across Mexico; expanding into Chile ahead of new IT legislation; active Gildre member" },
  ];
  const lessons = [
    {
      n: "1",
      title: "IT without governance is just execution",
      body: "Most IT providers do excellent technical work in isolation. The governance layer, who has access to what, how AI is being used, whether decisions are documented, is what turns isolated tech work into a coherent, defensible corporate strategy. That gap is what ENSYX fills.",
    },
    {
      n: "2",
      title: "Every company is becoming a tech company",
      body: "It doesn't matter what industry you're in. Technology is no longer a support function; it's infrastructure for everything. Founders who don't have someone guiding their tech strategy inside the context of their business goals are making critical decisions blindly, often creating liability they don't know exists.",
    },
    {
      n: "3",
      title: "Adapt to how a country closes, not just how it works",
      body: "Expanding internationally means learning not just cultural norms but deal mechanics. Mexico is relationship-closed: who you know determines what opens. Chile is trust-gated: an introduction unlocks doors that cold outreach never will. Miss that distinction and your product doesn't matter.",
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
          Who is Iliana Alvarado?
        </h2>
        <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
          Iliana Alvarado is the founder of{" "}
          <strong style={{ color: "#fff" }}>ENSYX</strong>, an IT and AI governance firm based in Mexico City that partners with XPERTEKIT.Inc in Dallas to deliver comprehensive, context-driven technology services. An attorney with 20+ years of experience across Mexico, Chile, and Germany, she spent nearly a decade at Banamex before leaving corporate in 2023 to build ENSYX. She holds an LLM from Heidelberg University, an undergrad in linguistics, and a Mexican law degree, and is currently expanding ENSYX into Chile.
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
