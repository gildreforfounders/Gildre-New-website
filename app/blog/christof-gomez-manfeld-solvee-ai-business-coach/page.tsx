import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/blog/christof-gomez-manfeld-solvee-ai-business-coach" },
  title: "Christof Gomez Manfeld: The Bosch Engineer Who Got Fired and Built Solvee: the AI Accelerator That Takes Founders from Idea to Exit in 43 Steps | Gildre",
  description:
    "Christof Gomez Manfeld, founder of Solvee and Gildre member, on leaving Bosch, moving his whole family back to Spain, and building an AI-powered personalized accelerator that guides founders from first idea to scale, by asking the right questions instead of giving generic answers.",
  keywords: [
    "Christof Gomez Manfeld",
    "Solvee AI",
    "Solvee business coach",
    "AI accelerator for founders",
    "startup strategy tool",
    "founder operating system",
    "AI business advisor",
    "systems thinking founders",
    "startup validation tool",
    "Bosch engineer entrepreneur",
    "Gildre member Spain",
    "solvee app",
  ],
  openGraph: {
    url: "https://www.gildre.com/blog/christof-gomez-manfeld-solvee-ai-business-coach",
    title: "Christof Gomez Manfeld: The Bosch Engineer Who Got Fired and Built Solvee: the AI Accelerator That Takes Founders from Idea to Exit in 43 Steps",
    description:
      "Christof Gomez Manfeld on growing up between Spain and Germany, a NASA girlfriend who took him to Houston and Pasadena, seven years at Bosch, and why getting fired was the best thing that ever happened to him, leading to Solvee, an AI business coach that knows your specific business and refuses to hallucinate about it.",
    type: "article",
    images: [
      {
        url: "https://www.gildre.com/images/christof-gomez-manfeld-headshot.jpeg",
        width: 800,
        height: 600,
        alt: "Christof Gomez Manfeld, founder of Solvee AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christof Gomez Manfeld of Solvee: The AI Accelerator Built on Systems Thinking That Guides Founders 43 Steps from Idea to Exit",
    description:
      "How a Bosch engineer went from automotive machine learning to building Solvee, an AI advisor that learns everything about your specific business and guides you based on validation, not assumptions.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Christof Gomez Manfeld: The Bosch Engineer Who Got Fired and Built Solvee: the AI Accelerator That Takes Founders from Idea to Exit in 43 Steps",
  description:
    "Christof Gomez Manfeld, founder of Solvee (solvee.app) and Gildre member based in southern Spain, on growing up between Spanish and German culture, seven years at Bosch in automotive machine learning, getting fired and moving his family back to Spain, and building an AI-powered personalized accelerator that guides founders from idea to scale and exit through 43 structured steps — based on validation, not assumptions.",
  image: "https://www.gildre.com/images/christof-gomez-manfeld-headshot.jpeg",
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
    "https://www.gildre.com/blog/christof-gomez-manfeld-solvee-ai-business-coach",
  about: [
    {
      "@type": "Person",
      name: "Christof Gomez Manfeld",
      jobTitle: "Founder, Solvee",
    },
    {
      "@type": "Organization",
      name: "Solvee",
      description: "AI-powered personalized accelerator that guides founders from idea to scale and exit in 43 structured steps, using business-specific data to eliminate hallucinations and provide actionable strategic advice.",
    },
  ],
  keywords:
    "Christof Gomez Manfeld, Solvee, Solvee AI, AI business coach, startup accelerator, founder operating system, systems thinking, validation not assumptions, Bosch engineer, Gildre Spain",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Christof Gomez Manfeld",
  jobTitle: "Founder, Solvee",
  knowsAbout: [
    "AI Business Coaching",
    "Systems Thinking",
    "Startup Strategy",
    "Organizational Development",
    "Process Management",
    "Automotive Engineering",
    "Machine Learning Applications",
    "Founder Validation",
    "Business Model Design",
  ],
  description:
    "Christof Gomez Manfeld is the founder of Solvee (solvee.app), an AI-powered personalized accelerator for founders, and a Gildre member based in southern Spain. Born and raised in Madrid for 18 years, he studied electrical engineering in Germany, spent time in Houston and Pasadena during a relationship with a NASA engineer, and worked seven years at Bosch in automotive machine learning before being let go and starting Solvee. He is bilingual in Spanish and German and holds a European trademark on the Solvee name.",
};

const faqs = [
  {
    q: "Who is Christof Gomez Manfeld?",
    a: "Christof Gomez Manfeld is the founder of Solvee (solvee.app), an AI-powered personalized accelerator for founders, and a Gildre member based in southern Spain. Born and raised in Madrid, he studied electrical engineering in Germany, lived briefly in Houston and Pasadena while his then-girlfriend worked at NASA's Jet Propulsion Laboratory, and spent seven years at Bosch in automotive project and organizational development before being let go and starting Solvee.",
  },
  {
    q: "What is Solvee?",
    a: "Solvee is an AI-powered personalized accelerator that guides founders from idea to scale and exit in 43 structured steps. Unlike generalist AI tools like ChatGPT or Claude, Solvee builds a deep, business-specific knowledge base about each founder's company by asking targeted questions and tracking their answers. This allows it to give highly contextual advice with near-zero hallucination because it is only advising based on data the founder has provided. It can also connect to financials, flag strategic gaps, and eventually serve as the operating system for an entire organization.",
  },
  {
    q: "How is Solvee different from using ChatGPT or Claude for business advice?",
    a: "Generalist AI tools like ChatGPT and Claude give broad answers that may not be applicable to a specific business. Solvee builds a proprietary knowledge base of each founder's business through a structured curriculum. Then advises based on that specific data rather than general training. This eliminates hallucination (there's nothing to fabricate when the AI only draws on what you've told it), ensures advice is contextual rather than generic, and creates continuity: the more you use Solvee, the more it understands your business and the better its advice becomes.",
  },
  {
    q: "What are the 43 steps in Solvee?",
    a: "Solvee's 43-step curriculum takes founders through the full journey from initial idea to scale and exit. It begins with a business assessment and moves through validation of assumptions, business model design, go-to-market strategy, financials, and scaling decisions. At each step, Solvee asks questions rather than providing prescriptive answers, tracking the founder's responses and building a complete operating picture of the business. The number of steps may evolve as the product develops.",
  },
  {
    q: "What advice does Christof Gomez Manfeld give to early-stage founders?",
    a: "Christof's core message: give yourself the space, and believe in yourself that you can build something. If you're unhappy at your job, don't be miserable. He was fired from Bosch and describes it as the best thing that happened to him. He also emphasizes building based on validation rather than assumptions: talking to potential customers and partners before committing to a product direction is something too many founders wait too long to do. And above all, do something you're passionate about, his brother's successful Spanish wine bar in Munich and his parents' tourism business are his evidence that passion-driven businesses, even small ones, can work.",
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
        <strong style={{ color: "#C9A96E" }}>Christof Gomez Manfeld</strong> is the founder of{" "}
        <strong style={{ color: "#fff" }}>Solvee</strong>{" "}(<a href="https://www.solvee.app/" target="_blank" rel="noopener noreferrer" style={{ color: "#C9A96E" }}>solvee.app</a>), an AI-powered personalized
        accelerator for founders, and a Gildre member based in southern Spain. After 18 years in Madrid,
        an electrical engineering degree in Germany, time in Houston and Pasadena, and seven years at
        Bosch in automotive machine learning and organizational development, he was let go, and built
        Solvee. He holds a European trademark on the Solvee name.
      </p>
    </div>
  );
}

export default function ChristofGomezManfeldBlog() {
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
              Member Feature · Spain · AI · Founder Tools
            </span>
          </div>
          <h1
            className="text-[clamp(1.9rem,4.5vw,3.25rem)] font-bold leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Christof Gomez Manfeld: The Bosch Engineer Who Got Fired and Built{" "}
            <span style={{ color: "#C9A96E" }}>Solvee</span>: the AI Accelerator That Takes Founders from Idea to Exit in 43 Steps
          </h1>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            He grew up caught between Spanish warmth and German precision. He studied electrical engineering in Germany with great difficulty, spent two years following a NASA engineer to Houston and Pasadena, and spent seven years at Bosch working on machine learning and organizational strategy. Then he was let go, and moved his entire family back to Spain to build Solvee: an AI accelerator that learns everything about a founder&apos;s specific business and guides them through 43 structured steps, asking the right questions instead of giving generic answers.
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
              <span>AI Tools · Founder Strategy · Spain · Startup</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────────────────────── */}
      <article className="mx-auto max-w-3xl px-6 py-16">

        <Body>
          Most people who leave a big corporate job to start a company have a plan. Christof Gomez Manfeld had a problem: he&apos;d spent seven years watching large organizations fail to make good decisions because their strategy lived in silos, their teams didn&apos;t know the business direction, and nobody had a system for connecting daily work to long-term outcomes. When he got fired from Bosch, he didn&apos;t pivot industries. He took everything he&apos;d learned about systems thinking, machine learning, and organizational development, and built{" "}
          <strong style={{ color: "#fff" }}>Solvee</strong>, the AI-powered accelerator that gives founders the strategic clarity that most companies spend millions trying to achieve. He joined the{" "}
          <strong style={{ color: "#fff" }}>Start to Scale Podcast</strong> from southern Spain to share how he got there.
        </Body>

        {/* Photo 1 — headshot/portrait (800×600) */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/christof-gomez-manfeld-headshot.jpeg"
            alt="Christof Gomez Manfeld, founder of Solvee AI and Gildre member"
            width={720}
            height={540}
            quality={90}
            sizes="(max-width: 768px) calc(100vw - 48px), 720px"
            className="w-full object-cover"
            style={{ maxHeight: "520px", objectFit: "cover", objectPosition: "center top" }}
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>
              Christof Gomez Manfeld — founder of Solvee, Gildre member, and bilingual Spaniard-German building the AI accelerator for founders from southern Spain
            </p>
          </div>
        </div>

        <BioCallout />

        <Section title="Between Two Cultures: Growing Up Spanish, Thinking German" />
        <Body>
          Christof spent the first eighteen years of his life in Madrid. His mother is German, his father Spanish, but at home, they mixed both languages freely, switching mid-sentence whenever a word wasn&apos;t coming. It was a linguistic luxury that vanished the moment he moved to Germany to study at eighteen. Suddenly, he had to actually know the vocabulary. "I had to learn a lot of words that I didn&apos;t have to really memorize before."
        </Body>
        <Body>
          The cultural displacement ran deeper than vocabulary. In Spain, he felt German. In Germany, he felt Spanish. After 24 years living in Germany, he returned to the south of Spain, a rural, traditional part of the country, and the friction showed up again in a new form. "I always felt a little bit like the outsider." It&apos;s a feeling he&apos;s made peace with. The double perspective, the ability to read both cultures from the inside, became one of his professional advantages: it made him curious about difference, comfortable with complexity, and unusually good at reading organizational dynamics from the outside in.
        </Body>
        <Quote>
          "I always felt the Spaniard in Germany and the German in Spain. I&apos;ve never felt really at home anywhere, and that still is the case. But it opened a lot of doors."
        </Quote>

        <Section title="Houston, JPL, and the Girlfriend at NASA Who Changed His Trajectory" />
        <Body>
          At twenty, mid-way through his electrical engineering degree in Germany, Christof made a decision that he describes as rare even by the standards of his generation: he broke off his studies and followed his girlfriend to the United States. She had a job at NASA. First Houston, then Pasadena. She moved to the Jet Propulsion Laboratory at Caltech, and he went with her. He enrolled at Pasadena City College to keep studying.
        </Body>
        <Body>
          The two years he spent in the US were formative and disorienting in equal measure. Houston and Pasadena are car cities, a jarring contrast for someone from walkable German student towns where the public transit was almost redundant because everywhere was within cycling distance. Crossing the road in Houston, he remembers, felt life-threatening. The cultural disconnection was real: "As a European, I had trouble finding context the way I used to have in Europe."
        </Body>
        <Body>
          He came back to Germany, finished his degree in electrical engineering ("with a lot of pain," he says) and entered the job market with something most candidates didn&apos;t have: a history that made people curious. "I didn&apos;t have a very good degree, to be honest. But when they saw my history, they got curious. What type of person is this? And somehow I was likable enough that people would give me a job."
        </Body>

        {/* Photo 2 — wide landscape (800×368) */}
        <div className="my-14 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/christof-gomez-manfeld-solvi.jpeg"
            alt="Christof Gomez Manfeld and Solvee — AI accelerator for startup founders"
            width={720}
            height={331}
            quality={90}
            sizes="(max-width: 768px) calc(100vw - 48px), 720px"
            className="w-full object-cover"
            style={{ objectFit: "cover", objectPosition: "center center" }}
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>
              Christof Gomez Manfeld — seven years at Bosch led to the insight that built Solvee: founders need the same strategic clarity that big companies spend millions trying to create
            </p>
          </div>
        </div>

        <Section title="Seven Years at Bosch, and the Machine Learning That Sparked an Idea" />
        <Body>
          The job that came after his studies was in the automotive industry. Christof moved through Düsseldorf, Munich, and eventually Stuttgart, landing at Bosch, one of the world&apos;s largest engineering and technology companies, where he stayed for seven years. His role evolved: software engineer on paper, but in practice a project manager, then a process manager, then increasingly focused on organizational development and systems thinking.
        </Body>
        <Body>
          The machine learning exposure came through his teams. One project that stayed with him: the front-end camera system Bosch was developing for vehicles. It used machine learning to recognize and react to inputs in real time. He wasn&apos;t building it himself at the technical level, but watching it work gave him a clear and early intuition that this technology was not a novelty. It was a platform. "I understood that this is a very interesting technology. I knew it was here to stay, and I was super motivated to learn about it and grow with it."
        </Body>
        <Body>
          What stayed with him from Bosch wasn&apos;t the engineering. It was the organizational pathology he watched repeat across departments: strategy existed in silos. Marketing had a strategy. Engineering had a strategy. Finance had a strategy. None of them were connected. Teams worked hard on things that had nothing to do with the business&apos;s actual direction, and nobody had a system to surface that misalignment before it became expensive.
        </Body>

        <Section title="A Brother&apos;s Wine Bar and the Permission to Build" />
        <Body>
          The entrepreneurial impulse had been dormant for years, buried under a career that was working well enough. It was his family that brought it back. His grandfather had built an electrical engineering company from scratch after World War II, and Christof grew up wanting to take it over. When his grandfather died, the company went sideways and was eventually acquired by an American firm before Christof was old enough to be part of it. The dream didn&apos;t disappear. It went underground.
        </Body>
        <Body>
          Then his brother lost his job in Madrid and moved to Munich. Rather than look for another employer, he opened a Spanish wine bar. The location was small, not particularly visible, and the competition in Munich was real. He was successful anyway. "He had studied hotel management, he had a lot of experience in the industry, and he put all his energy and passion into this project." Watching someone who knew their craft, trusted it, and executed without a safety net made something click for Christof.
        </Body>
        <Body>
          His parents did something similar after his father&apos;s early retirement: they built a small tourism business combining Spanish wines, theaters, and museums. Not a startup aiming for scale, just something built with passion, for the love of it. "It didn&apos;t have to make millions. Just to do something that you&apos;re passionate about and you enjoy doing." That became Christof&apos;s permission structure. When the opportunity came, he took it.
        </Body>

        <Section title="What Is Solvee? The AI Accelerator Built to Know Your Business" />
        <Body>
          Solvee is not a chatbot. It is not a generic AI assistant. Christof is careful about this distinction, and for good reason. The problem with using ChatGPT or Claude for business strategy, he explains, is not that they&apos;re bad tools. It&apos;s that they&apos;re general-purpose tools. They give good answers. But those answers have no connection to your specific business, your specific stage, your specific assumptions, your specific gaps.
        </Body>
        <Body>
          Solvee is built differently. It starts with a business assessment and moves through a structured curriculum of 43 steps, from initial idea through validation, business model design, go-to-market strategy, financial planning, scaling decisions, and eventually exit. At every step, it asks questions. The founder answers. The AI builds a proprietary knowledge base about that specific business. And once that base exists, everything changes: the advice Solvee gives is no longer generic. It is drawn from what the founder has told it, and only that.
        </Body>
        <Quote>
          "We want to make sure that the founder builds based on validation and not assumptions. There is a very, very big difference, and from my experience, people are very thankful for the clarity they get."
        </Quote>
        <Body>
          The hallucination problem that plagues most AI business tools is, in Solvee&apos;s architecture, structurally eliminated. If the AI only advises based on data the founder has provided, there is nothing to fabricate. "We try to reduce hallucinations to zero because we have all the data. There&apos;s no reason for the AI to hallucinate."
        </Body>

        {/* Photo 3 — wide landscape (800×368) */}
        <div className="my-14 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/christof-gomez-manfeld-spain.jpeg"
            alt="Solvee AI: the founder operating system built by Christof Gomez Manfeld in Spain"
            width={720}
            height={331}
            quality={90}
            sizes="(max-width: 768px) calc(100vw - 48px), 720px"
            className="w-full object-cover"
            style={{ objectFit: "cover", objectPosition: "center center" }}
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>
              Solvee: the AI-powered personalized accelerator that guides founders from idea to scale and exit, built in southern Spain by Christof Gomez Manfeld
            </p>
          </div>
        </div>

        <Section title="Systems Thinking: The Framework Behind the Product" />
        <Body>
          The intellectual foundation of Solvee is systems thinking, a discipline Christof discovered through Donella Meadows&apos; book and describes as one of the hardest and most rewarding frameworks he&apos;s encountered. Systems are not linear. They are full of feedback loops, time delays, and non-obvious interconnections that make them genuinely difficult to hold in one&apos;s head. "It doesn&apos;t come really natural to think in systems. They have so many interconnections that for us as humans it&apos;s very difficult to grasp how systems work."
        </Body>
        <Body>
          When ChatGPT launched and Christof started interacting with it, he found something unexpected: he could use the AI to make systems thinking more accessible on a daily basis. The model already knew the theory. He could ask it questions, test applications, and practice applying the framework to real organizational problems far faster than any book or course had allowed. That experience of AI as an accelerator for a rigorous but hard-to-apply discipline is baked into Solvee&apos;s design.
        </Body>
        <Body>
          Solvee is what happens when systems thinking and business strategy are packaged into a product that guides a founder through structured questions, captures the answers, and then applies frameworks precisely to the situation the founder has described. Not in theory. Not generally. To their specific business.
        </Body>

        <Section title="The Long Game: From Founder Operating System to Company-Wide Strategy" />
        <Body>
          The current focus of Solvee is early-stage founders: the people with an idea, or running a company of two or three years, who have gaps in their business model they haven&apos;t named yet. Those founders often don&apos;t know what they don&apos;t know, and when Solvee&apos;s curriculum surfaces a gap, the response is usually gratitude. "From my experience, people are very thankful for the clarity they get."
        </Body>
        <Body>
          But the roadmap extends further. As Solvee connects to financials, not just strategy, and it can flag problems the founder might have missed. Track performance against the strategic plan in real time. Alert when execution diverges from direction. Christof describes the end state as a founder&apos;s operating system: one place to see what needs to happen today, how the financials are performing, what the AI strategic advisor recommends, and how to prepare for the next funding round.
        </Body>
        <Body>
          Further out: employees. The same dysfunction Christof watched at Bosch (teams working in isolation, strategies never converging) is the problem Solvee&apos;s organizational module will eventually address. When a company can give any employee real-time access to the business strategy, explain how their work connects to it, and flag when their work is drifting away from it, the misalignment that costs companies millions dissolves. "If you&apos;re working on things that have nothing to do with the business, you will very quickly notice."
        </Body>

        <Section title="Getting Fired Was the Best Thing That Happened to Him" />
        <Body>
          After seven years at Bosch, Christof was let go. He took his family (wife, kids, all of them) and moved back to Spain. To a small town in the south. He&apos;s been building Solvee since. "Despite the uncertainty, it is an amazing ride. I get to meet people from Australia to the United States, sitting in Spain in a little town. It&apos;s an absolute blast."
        </Body>
        <Body>
          His vision for Solvee has always been larger than revenue. The displacement happening right now (people losing jobs to AI, redundancies everywhere, workers without a path) is the problem Solvee is designed to meet. "For all the people getting fired right now, for whatever reason: there needs to be something they can build with their passion, their knowledge, their motivation to do something that actually has value in the world. They just need the structure."
        </Body>
        <Quote>
          "Give yourself the space. Believe in yourself that you can build something. If you&apos;re unhappy at your job, don&apos;t be miserable. I was fired, and I&apos;m happy I was. Just go for it. It is an amazing ride."
        </Quote>
        <Body>
          Solvee is available now at{" "}
          <a href="https://www.solvee.app/" target="_blank" rel="noopener noreferrer" style={{ color: "#C9A96E" }}>solvee.app</a>{" "}
          with a free version that Christof says delivers real value before any payment is required. The paid tier goes deeper. The feedback loop (what users love, what confuses them, where they drop off) is the most important metric right now, more than revenue. User experience workshops are running. Features are in the pipeline. And one of the biggest problems in the startup ecosystem (founders building on assumptions they mistake for validation) has finally found its product.
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
            Founders like Christof build alongside each other at Gildre.
          </h2>
          <p className="mb-8 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Gildre is a global founder community for people who want real conversations, real accountability, and connections that hold up under pressure. Apply to join.
          </p>
          <Link
            href="/apply"
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
