import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/blog/nelson-brooks-cabana-boys-shark-tank-founder" },
  title: "Nelson Brooks: Cabana Boys Founder on Shark Tank | Gildre",
  description:
    "Nelson Brooks on launching Cabana Boys during COVID, landing a Shark Tank deal with Kendra Scott, scaling to 10 markets, and why personality is the product.",
  keywords: [
    "Nelson Brooks",
    "Cabana Boys",
    "Cabana Boys Events",
    "Cabana Boys Shark Tank",
    "bachelorette party bartending",
    "party hosting company",
    "Kendra Scott Shark Tank deal",
    "event company founder",
    "charismatic bartending",
    "Cocktail Crew bartending",
    "hospitality startup founder",
    "scaling a hospitality business",
    "Arizona entrepreneur",
    "Scottsdale bachelorette party",
    "Phoenix event company",
    "USC entrepreneur",
    "Gildre founder",
    "Start to Scale podcast",
  ],
  openGraph: {
    url: "https://www.gildre.com/blog/nelson-brooks-cabana-boys-shark-tank-founder",
    title: "Nelson Brooks of Cabana Boys: From COVID Layoff to Shark Tank",
    description:
      "How Nelson Brooks went from being laid off during COVID to founding a party hosting company that appeared on Shark Tank, struck a deal with Kendra Scott, and now operates in 10 markets across the US.",
    type: "article",
    images: [
      {
        url: "https://www.gildre.com/images/nelson-brooks-cabana-boys-shark-tank-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Cabana Boys Events as seen on Shark Tank, founded by Nelson Brooks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nelson Brooks of Cabana Boys: How Charisma Became a Business Model",
    description:
      "From COVID layoff to Shark Tank to 10 markets: how Nelson Brooks built Cabana Boys by treating charisma as the core product.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Nelson Brooks of Cabana Boys: From COVID Layoff to Shark Tank, Building Charisma Into a Business Model",
  description:
    "Nelson Brooks, founder and CEO of Cabana Boys Events, on launching a party hosting and bartending company during COVID, securing a Shark Tank deal with investor Kendra Scott, scaling to 10 US markets under 6 brands, and why charisma, not looks, is the real product. He joined the Start to Scale Podcast hosted by Taiga Gamell of Gildre.",
  image: "https://www.gildre.com/images/nelson-brooks-cabana-boys-shark-tank-banner.jpg",
  datePublished: "2026-08-13",
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
    "https://www.gildre.com/blog/nelson-brooks-cabana-boys-shark-tank-founder",
  about: [
    {
      "@type": "Person",
      name: "Nelson Brooks",
      jobTitle: "Founder and CEO, Cabana Boys Events",
    },
    {
      "@type": "Organization",
      name: "Cabana Boys Events",
      description:
        "A party hosting and bartending company operating in 10 US markets under 6 brands, founded in August 2020 in Arizona and featured on Shark Tank.",
    },
  ],
  keywords:
    "Nelson Brooks, Cabana Boys, Cabana Boys Events, Shark Tank, bachelorette party bartending, party hosting company, Kendra Scott, Cocktail Crew, Arizona entrepreneur, hospitality startup, Gildre, Start to Scale podcast",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nelson Brooks",
  jobTitle: "Founder and CEO, Cabana Boys Events",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Southern California",
    alternateName: "USC",
  },
  knowsAbout: [
    "Party Hosting",
    "Event Management",
    "Bartending",
    "Hospitality Operations",
    "Scaling a Service Business",
    "Hiring for Culture",
    "Franchise and Multi-Market Expansion",
    "Shark Tank",
    "Bachelorette Events",
    "Charismatic Customer Experience",
  ],
  description:
    "Nelson Brooks is the founder and CEO of Cabana Boys Events, a party hosting and bartending company he launched in Arizona in August 2020. After being laid off from a hospitality tech company during COVID, he spotted an untapped market at a bachelorette party and turned it into a business now operating in 10 markets under 6 brands. He appeared on Shark Tank and secured a deal with investor Kendra Scott. He is a USC graduate and a Gildre member.",
};

const faqs = [
  {
    q: "Who is Nelson Brooks?",
    a: "Nelson Brooks is the founder and CEO of Cabana Boys Events, a party hosting and bartending company based in Arizona. He launched the business in August 2020 after being laid off from a hospitality tech company during COVID. He is a USC graduate, appeared on Shark Tank, and secured an investment deal with entrepreneur and investor Kendra Scott. He is a Gildre member.",
  },
  {
    q: "What is Cabana Boys Events?",
    a: "Cabana Boys Events is a party hosting and bartending company that specializes in bachelorette parties and private events. Founded in August 2020 in Arizona, the company operates in 10 US markets under 6 different brands, including the Cocktail Crew, which focuses on weddings, corporate events, and holiday parties. The company emphasizes charisma and personality over appearance, using a rigorous hiring process to find staff who can create memorable experiences.",
  },
  {
    q: "Did Cabana Boys appear on Shark Tank?",
    a: "Yes. Nelson Brooks applied online and was selected to appear on Shark Tank. The episode aired in January 2026. He secured a deal with investor Kendra Scott, who has since been working with him to refine Cabana Boys' service model, including in-store events at her retail locations. Nelson credits the appearance with giving the company a significant credibility boost, converting it in the public eye from a side hustle to a legitimately backed business.",
  },
  {
    q: "How did Nelson Brooks come up with the Cabana Boys idea?",
    a: "Nelson was attending a bachelorette party as a friend when he noticed two guys being paid $50 each simply to hang out and serve drinks. He asked if it was a business. They said they were just friends of the maid of honor. He decided to make it an actual company. He was unemployed at the time, having recently been laid off from a hospitality tech company during COVID, and he saw an opening in the market for a branded, professional version of the experience.",
  },
  {
    q: "How does Cabana Boys hire bartenders and party hosts?",
    a: "Cabana Boys uses a multi-step interview process that starts with a video application. Candidates must answer questions on video, which immediately reveals whether they can present themselves confidently on camera. Those who can't hold their own on a 30-second video are unlikely to perform well in front of 20 people at an event. The company prioritizes charisma and interpersonal personality over physical appearance, trains staff through video modules and on-the-job experience, and maintains ongoing training to ensure consistent quality across thousands of events per year.",
  },
  {
    q: "What markets does Cabana Boys operate in?",
    a: "Cabana Boys Events currently operates in 10 markets across the United States. The company is headquartered in Arizona and has expanded nationally, with bachelorette party demand concentrated in cities like Scottsdale, Nashville, Miami, Las Vegas, and Austin. Nelson Brooks has noted that some markets were opened earlier than ideal and that the lesson was to validate unit economics per market before expanding further.",
  },
  {
    q: "What is Nelson Brooks's advice for early-stage founders?",
    a: "Nelson offers two core pieces of advice. First, just start. Don't wait for a perfect business plan or a fully built-out document. Pick a domain name, grab the Instagram handle, get the idea in front of real people, and see how they respond. Second, watch your cash flow obsessively. Know what's coming in, where it's going, and how much cash you have on hand. Running out of cash is how businesses die, and it catches many first-time founders by surprise.",
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
        <strong style={{ color: "#C9A96E" }}>Nelson Brooks</strong> is the founder and CEO of{" "}
        <strong style={{ color: "#fff" }}>Cabana Boys Events</strong>, a party hosting and bartending
        company he launched in Arizona in August 2020. A USC graduate with a background in hospitality
        tech and event planning, he grew Cabana Boys to 10 US markets and appeared on Shark Tank,
        securing a deal with investor Kendra Scott. He is a Gildre member.
      </p>
    </div>
  );
}

export default function NelsonBrooksBlog() {
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
              Start to Scale
            </span>
            <span className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
              Member Feature · Scottsdale, Arizona
            </span>
          </div>
          <h1
            className="text-[clamp(1.9rem,4.5vw,3.25rem)] font-bold leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Nelson Brooks of{" "}
            <span style={{ color: "#C9A96E" }}>Cabana Boys</span>: From COVID Layoff to Shark Tank, Building Charisma Into a Business Model
          </h1>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Nelson Brooks was unemployed, in the middle of a pandemic, and at a bachelorette party as a friend when he spotted something nobody had turned into a real business yet. Two years later it was his full-time job. Four years after that, it was on national television. He joined the Start to Scale Podcast to share how Cabana Boys got built, what Shark Tank actually changed, and why personality, not appearance, is the only thing that scales in hospitality.
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
              <span>14 min read</span>
              <span>·</span>
              <span>Hospitality · Events · Shark Tank · Arizona</span>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="mx-auto max-w-3xl px-6 py-16">

        <Body>
          Most hospitality businesses are hard to start in the best of times. Nelson Brooks started his in August 2020, at the height of COVID, after being laid off from a hospitality tech company with no job lined up. The fact that he is now the founder and CEO of{" "}
          <strong style={{ color: "#fff" }}>Cabana Boys Events</strong>, operating in 10 markets across the United States under 6 brands, with a Shark Tank deal and a partnership with Kendra Scott to show for it, is a story about what happens when you take a simple observation seriously and have the nerve to build something from it.
        </Body>

        {/* Hero image */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/nelson-brooks-cabana-boys-shark-tank-banner.jpg"
            alt="Cabana Boys Events as seen on Shark Tank"
            width={1400}
            height={700}
            quality={90}
            sizes="(max-width: 768px) 100vw, 720px"
            className="w-full object-cover"
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>
              Cabana Boys Events, as seen on Shark Tank. Nelson Brooks brought his full team to pitch the panel in Los Angeles.
            </p>
          </div>
        </div>

        <BioCallout />

        {/* Headshot */}
        <div className="my-12 overflow-hidden rounded-2xl mx-auto" style={{ maxWidth: "480px", border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/nelson-brooks-headshot.webp"
            alt="Nelson Brooks, founder and CEO of Cabana Boys Events"
            width={480}
            height={640}
            quality={90}
            sizes="(max-width: 520px) 100vw, 480px"
            className="w-full object-cover"
            style={{ maxHeight: "560px", objectFit: "cover", objectPosition: "center top" }}
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>
              Nelson Brooks, founder and CEO of Cabana Boys Events, and Gildre member
            </p>
          </div>
        </div>

        <Section title="An Idea Spotted at Someone Else's Party" />
        <Body>
          Nelson was not at the bachelorette party as a vendor. He was there as a friend, invited along because his friend was in town from Austin. Two other guys were there too, friends of the maid of honor, each paid fifty dollars just to hang out and serve drinks. Nelson asked them if it was an actual job. They said no, they were just friends doing a favor.
        </Body>
        <Body>
          That answer told him everything. There was real demand for what those two guys were doing: charismatic, attentive, fun service at a private event where the whole point was atmosphere and memory. But nobody had built a real company around it. Nobody had packaged it, branded it, and made it repeatable at scale.
        </Body>
        <Quote>
          "I was like, is this a business? They said no, we're just friends. And I was like, well, I want to make this a company. I'm going to do that."
        </Quote>
        <Body>
          He was living in Arizona, recently laid off, and operating in a state that opened up slightly faster than most during the pandemic. The timing was unusual, but it gave him something valuable: time, and a market that was already starting to move.
        </Body>

        <Section title="USC, Austin, and Always One Foot Out the Door" />
        <Body>
          Nelson studied business at USC. He describes himself as having had an entrepreneurial spirit from an early age, though he was not the kid setting up lemonade stands every weekend. What he was, consistently, was someone who liked keeping his calendar full and was always looking for ways to do more. He was social chair of his fraternity at USC, not just as a title but as the person genuinely responsible for getting people to show up and making sure they had a good time when they did.
        </Body>
        <Body>
          After graduating, he moved to Austin in 2015 and started his first real side hustle: an event planning company. It was small, mostly friends, charity events, and local gatherings, but it established a pattern. He was good at this. He liked this. And corporate life, while he gave it his full effort, always had him scanning the horizon for what else he could be building.
        </Body>
        <Body>
          He worked in hospitality tech before being laid off during COVID. That layoff, as it turned out, was the push he needed. Not because he could not have found another job (he did, almost immediately), but because suddenly he had a reason to take the idea he had spotted seriously.
        </Body>

        <Section title="What Cabana Boys Actually Is, and Why It Worked" />
        <Body>
          At its core, Cabana Boys Events is a party hosting and bartending company. The signature product is what Nelson describes as a full party hosting experience: charismatic, personable staff who bring energy, serve drinks, handle the vibe, and make the event memorable. The primary niche is bachelorette parties, though the company serves any private event where the host wants something more than a bartender standing quietly behind a folding table.
        </Body>
        <Body>
          The company also operates a separate brand called the{" "}
          <strong style={{ color: "#fff" }}>Cocktail Crew</strong>, focused on weddings, corporate events, and holiday parties. The Cocktail Crew is positioned as a charismatic bartending service: still personality-forward, still intentional about staffing fit, but designed for occasions that call for something more traditional than the full Cabana Boys experience. Six brands in total operate under the parent company, covering different formats and audience types across 10 markets.
        </Body>
        <Body>
          COVID, counterintuitively, helped. People could not go to bars. Private events in homes and backyards surged. And when restrictions lifted, a wave of pent-up travel demand hit cities like Scottsdale, Nashville, Miami, Las Vegas, and Austin all at once, places where bachelorette parties had already been trending, and where demand for elevated private experiences was accelerating fast.
        </Body>
        <Quote>
          "We got a little bit lucky with COVID. People couldn't go out to the bars. And then there was this post-COVID demand that had been built up. We were definitely a beneficiary of that."
        </Quote>

        <Section title="Hiring for Charisma: Why Personality Beats Looks Every Time" />
        <Body>
          The most common misconception about Cabana Boys is that it is a company that hires attractive people to go to parties. Nelson has a clear answer for that. Looks are part of the equation. But they are a small part, and on their own they produce staff who are forgettable at best and actively damaging to the brand at worst.
        </Body>
        <Body>
          What the company actually hires for is charisma: the ability to engage a room, make people feel seen and special, and turn what could be a routine event into something guests talk about afterward. A GQ model who cannot hold a conversation is useless at a bachelorette party. Someone who has an average look but an electric personality, who makes every guest feel like the guest of honor, is exactly what the brand is built on.
        </Body>
        <Body>
          The hiring process reflects this. Applications require a video component from the start. Candidates answer questions on camera. If someone cannot present themselves confidently for 30 seconds on their own phone, they are unlikely to hold their own in front of 20 people at a private event with all eyes on them. That filter alone removes a significant number of applicants who might look good on paper.
        </Body>
        <Quote>
          "I would much rather hire somebody who has an unbelievable killer personality and is kind of an average Joe versus somebody who is a GQ model but can't talk their way out of a cardboard box."
        </Quote>
        <Body>
          Beyond the application, there are multiple interview rounds, background checks, reference calls, and training videos before anyone works their first event. Even then, the proof comes in the first two to three events. Some people ace every step of the process and then clam up the moment they walk into a real room. Nelson knows that within the first few events, every time. The bar stays high regardless of how many events someone has worked, because from the client's perspective, it is always their only one.
        </Body>

        <Section title="Scaling to 10 Markets: What Breaks, What Holds" />
        <Body>
          Going from one party per weekend to thousands of events per year is not a linear process. Nelson is honest about where the cracks showed. Some markets were opened before the unit economics were solid enough to support them. Some processes that worked fine at small volume broke when volume increased. The HR system was swapped out last month, not because it was planned but because the business outgrew it.
        </Body>
        <Body>
          His core lesson is one most operators learn the hard way: the things that break at one party per weekend are not the things that break at 25. And the only way to know what those new breaking points are is to hit them. The company uses ConnectTeam as its employee app, centralizing training videos, group chats, and job scheduling in one place. Each market has a team lead who works the events alongside staff. A director of customer experience follows up with clients after every event to capture feedback before it becomes a review.
        </Body>
        <Body>
          If Nelson were starting over, he would have validated unit economics in each market more thoroughly before opening new ones. But he is candid that even knowing that lesson in advance might not have changed much. Some things can only be learned in motion.
        </Body>
        <Quote>
          "You're building the plane as it's taking off. We just changed our HR system last month. Not something I anticipated doing, but I kind of had to. You just have to be nimble."
        </Quote>

        <Section title="Shark Tank, Kendra Scott, and the Badge That Changed Everything" />
        <Body>
          Nelson applied to Shark Tank online. No connections, no special path in, just a submitted application and a call a couple of months later. He filmed in Los Angeles and the episode aired in early 2026. He secured a deal with Kendra Scott, the entrepreneur and investor whose jewelry brand is one of the most successful founder-built companies in the country.
        </Body>
        <Body>
          The money was helpful. But the more significant outcome was credibility. A party hosting company run by a founder in Arizona occupies an ambiguous space in people's minds. Is it legitimate? Is it serious? Is it a real business or a fun side project? Shark Tank answered those questions definitively. The badge of national television, combined with a named investor, shifted Cabana Boys from a company people had to explain to a company people instantly respected.
        </Body>
        <Body>
          Kendra Scott has been an active partner, helping refine the service model and exploring Cabana Boys' presence at her retail store events. Nelson is still working through how that partnership evolves, but the direction is clear: bringing the charismatic service experience into new formats and new venues, not just private homes and rented venues but branded retail moments as well.
        </Body>
        <Quote>
          "It took us from a hobby project, side hustle type of company to: this is a legit company. It's backed by an investor. It was on national TV. That badge was really helpful, especially for a business like mine."
        </Quote>

        <Section title="The BHAG: A Billion-Dollar Hospitality Brand" />
        <Body>
          Nelson uses the term BHAG (big hairy audacious goal) without irony. His is a billion-dollar hospitality brand. He is clear that Cabana Boys Events as it currently exists, private event bartending and party hosting, will not get there on its own. The path runs through expansion: taking the core brand and the charisma model into adjacent verticals.
        </Body>
        <Body>
          Real estate. Short-term rentals. Beverages. Apparel. Licensing. Media. The vision is a flywheel built around the bachelorette and events experience: vertically integrating the full weekend, not just the party on Saturday night but the place you stay, the products you use, the content you consume before and after. The charisma-as-a-business-model thesis scales because it is not tied to a specific service. It is a positioning strategy that can be applied to almost any consumer vertical.
        </Body>
        <Body>
          As for fundraising: not right now. The focus is on building the existing business into something stronger before layering in outside capital. But Nelson is realistic that reaching the BHAG will likely require it at some point.
        </Body>

        {/* Shark Tank celebration */}
        <div className="my-14 overflow-hidden rounded-2xl mx-auto" style={{ maxWidth: "560px", border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/nelson-brooks-shark-tank-confetti.webp"
            alt="Nelson Brooks and the Cabana Boys team celebrating their Shark Tank deal with confetti"
            width={560}
            height={800}
            quality={90}
            sizes="(max-width: 600px) 100vw, 560px"
            className="w-full object-cover"
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>
              Nelson Brooks and the Cabana Boys team celebrate closing their Shark Tank deal with investor Kendra Scott
            </p>
          </div>
        </div>

        <Section title="Two Pieces of Advice Every Early-Stage Founder Needs to Hear" />
        <Body>
          Nelson keeps his founder advice simple, and specific in the way that only comes from having actually done it. For people who have an idea and are still thinking about it: just start. Pick a domain name. Find the Instagram handle. Get something in front of people and see how they respond. A business plan sitting in a document does not test your assumptions. A real thing in the market does.
        </Body>
        <Body>
          For founders who are further along and already in the middle of it: pay attention to your cash flow. Know what is coming in, where it is going, and how much cash you have on hand at all times. Cash is the one constraint that ends businesses that might otherwise have survived. Many founders who have great ideas, solid demand, and real customers still run out of runway because they were not watching the numbers closely enough.
        </Body>
        <Quote>
          "Entrepreneurs are a special breed. Gritty, resilient, creative. If you just continue to have that resilience and keep going, you will likely be successful. But pay attention to your cash flow. Cash is king. If you run out of that, it's a little hard to operate."
        </Quote>
        <Body>
          Nelson Brooks took a $50-a-night side gig spotted at a stranger's bachelorette party and turned it into a nationally recognized brand with a Shark Tank deal, 10 markets, and a billion-dollar vision. The path was not clean or perfectly planned. He built the plane while flying it, made mistakes opening markets too early, swapped out his HR system mid-flight, and kept going. That, more than any specific tactic, is the thing worth studying.
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
            Founders like Nelson build alongside each other at Gildre.
          </h2>
          <p className="mb-8 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Gildre is a private community for founders who want real conversations, real accountability, and real connections. Weekly 1:1 introductions, expert mentorship, and events in your city. Apply to join.
          </p>
          <Link
            href="https://tally.so/r/VLERVa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full px-8 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#C9A96E", color: "#080e1a" }}
          >
            Apply to Gildre
          </Link>
        </div>
      </article>
    </div>
  );
}
