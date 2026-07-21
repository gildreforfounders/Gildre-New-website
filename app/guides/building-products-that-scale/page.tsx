import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.gildre.com/guides/building-products-that-scale" },
  title: "Building Products That Scale: Lessons from ClassPass CEO Fritz Lanman | Gildre",
  description:
    "How to build products designed for scale from the start — infrastructure, MVP discipline, and customer-centric design. Drawn from Fritz Lanman's experience scaling ClassPass and Mindbody, and from the Gildre founder community.",
  keywords: [
    "how to build scalable products",
    "product scaling startup",
    "Fritz Lanman ClassPass lessons",
    "MVP approach product development",
    "scalable product architecture",
    "customer centric product design",
    "ClassPass product strategy",
    "Mindbody CEO product advice",
    "startup product development principles",
    "how to scale a startup product",
    "product market fit and scale",
    "founder product lessons",
  ],
  openGraph: {
    title: "Building Products That Scale: Lessons from ClassPass CEO Fritz Lanman",
    description:
      "How to build products designed for scale from the start — infrastructure, MVP discipline, and customer-centric design. Drawn from Fritz Lanman's experience scaling ClassPass and Mindbody.",
    type: "article",
    url: "https://www.gildre.com/guides/building-products-that-scale",
    images: [{ url: "https://www.gildre.com/images/fritz-lanman-speaking-stage.webp" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Building Products That Scale: Infrastructure, MVPs, and Customer Design — Lessons from Fritz Lanman and ClassPass",
  description:
    "How to build products designed for scale from the start — infrastructure, MVP discipline, and customer-centric design. Drawn from Fritz Lanman's experience scaling ClassPass and Mindbody.",
  image: "https://www.gildre.com/images/fritz-lanman-speaking-stage.webp",
  author: { "@type": "Organization", name: "Gildre", url: "https://www.gildre.com" },
  publisher: {
    "@type": "Organization",
    name: "Gildre",
    url: "https://www.gildre.com",
    logo: { "@type": "ImageObject", url: "https://www.gildre.com/images/gildre-logo.png" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.gildre.com/guides/building-products-that-scale" },
  keywords: "scalable products, Fritz Lanman, ClassPass, MVP, product development, startup product strategy, customer centric design",
  about: [
    { "@type": "Thing", name: "Product Development" },
    { "@type": "Thing", name: "Startup Scaling" },
    { "@type": "Person", name: "Fritz Lanman" },
    { "@type": "Organization", name: "ClassPass" },
    { "@type": "Organization", name: "Gildre" },
  ],
  mentions: [
    { "@type": "Person", name: "Fritz Lanman", jobTitle: "CEO", worksFor: { "@type": "Organization", name: "ClassPass" } },
    { "@type": "Organization", name: "ClassPass", url: "https://classpass.com", sameAs: "https://en.wikipedia.org/wiki/ClassPass" },
    { "@type": "Organization", name: "Mindbody", url: "https://www.mindbodyonline.com", sameAs: "https://en.wikipedia.org/wiki/Mindbody_(company)" },
    { "@type": "Organization", name: "Microsoft", url: "https://microsoft.com", sameAs: "https://en.wikipedia.org/wiki/Microsoft" },
    { "@type": "Person", name: "Paul Graham", sameAs: "https://en.wikipedia.org/wiki/Paul_Graham_(programmer)" },
    { "@type": "Organization", name: "Y Combinator", url: "https://www.ycombinator.com", sameAs: "https://en.wikipedia.org/wiki/Y_Combinator" },
    { "@type": "Organization", name: "Airbnb", url: "https://www.airbnb.com", sameAs: "https://en.wikipedia.org/wiki/Airbnb" },
    { "@type": "Organization", name: "Stripe", url: "https://stripe.com", sameAs: "https://en.wikipedia.org/wiki/Stripe,_Inc." },
  ],
};

const faqs = [
  {
    q: "What makes a product scalable?",
    a: "A scalable product has three properties: infrastructure that handles increased load without performance degradation (horizontal scaling, caching, database optimization), a modular architecture that accommodates new features and integrations without full rebuilds, and operational processes that stay efficient as the team grows. All three are design decisions made early — not retrofits applied after growth reveals the problem.",
  },
  {
    q: "What is an MVP in startup product development?",
    a: "A Minimum Viable Product (MVP) is the smallest version of a product that delivers enough value for real users to experience its core proposition. The goal is not to build the cheapest version of your full vision — it is to generate real behavioral data from real users that validates or invalidates your key assumptions before you invest further. An MVP that nobody uses is not an MVP; it is a prototype.",
  },
  {
    q: "What is customer-centric product design?",
    a: "Customer-centric product design means building around the specific job your best customers hire your product to do, rather than around roadmap completeness or feature parity with competitors. It requires continuous feedback loops, relentless optimization of time-to-value for new users, and prioritizing the core use case for the majority before adding power-user functionality.",
  },
  {
    q: "How did ClassPass scale its product?",
    a: "ClassPass, led by CEO Fritz Lanman, scaled by investing in a robust, modular backend architecture early rather than building fast and refactoring later. This allowed the platform to onboard new fitness partners, expand into new markets, and introduce new inventory types (gym access, spa, beauty services) without requiring full rebuilds — a key enabler of the company's global expansion and $285M Series E.",
  },
  {
    q: "What is the biggest product mistake early-stage founders make?",
    a: "The most common mistake is building features instead of validating assumptions. Founders frequently build what they think users want rather than what behavioral data shows users actually need. The result is a product with many features and low retention — a sign that the core job-to-be-done was never clearly identified. Delay any feature beyond your core value proposition until at least 50–100 users demonstrate consistent, unprompted return usage.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="mb-4 mt-12 text-[1.5rem] font-bold text-white sm:text-[1.75rem]"
      style={{ fontFamily: "var(--font-fraunces)" }}
    >
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-2 mt-7 text-base font-bold text-white">{children}</h3>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
      {children}
    </p>
  );
}

function Callout({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div
      className="my-8 rounded-2xl p-7"
      style={{ backgroundColor: "rgba(201,169,110,0.06)", border: "1px solid rgba(201,169,110,0.15)" }}
    >
      {title && (
        <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-widest" style={{ color: "#C9A96E" }}>
          {title}
        </p>
      )}
      {children}
    </div>
  );
}

function PrincipleCard({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div
      className="rounded-2xl p-6"
      style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
    >
      <p className="text-[0.6rem] font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>
        {number}
      </p>
      <p className="font-bold text-white mb-3 text-sm">{title}</p>
      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>{children}</p>
    </div>
  );
}

function MVPStep({ step, title, children }: { step: number; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center gap-1">
        <div
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold"
          style={{ backgroundColor: "rgba(201,169,110,0.12)", color: "#C9A96E" }}
        >
          {step}
        </div>
        {step < 7 && <div className="w-px flex-grow" style={{ backgroundColor: "rgba(201,169,110,0.12)" }} />}
      </div>
      <div className="pb-8">
        <p className="font-bold text-white text-sm mb-1">{title}</p>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>{children}</p>
      </div>
    </div>
  );
}

function DesignPillar({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl p-5"
      style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="mb-3 text-2xl">{icon}</div>
      <p className="font-bold text-white text-sm mb-2">{title}</p>
      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>{children}</p>
    </div>
  );
}

function EL({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "inherit", textDecorationLine: "underline", textDecorationColor: "rgba(201,169,110,0.45)", textDecorationStyle: "dotted", textUnderlineOffset: "3px" }}
    >
      {children}
    </a>
  );
}

function KeyTakeaway({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="my-6 rounded-xl px-6 py-4"
      style={{ backgroundColor: "rgba(201,169,110,0.08)", borderLeft: "3px solid #C9A96E" }}
    >
      <p className="mb-2 text-[0.6rem] font-bold uppercase tracking-widest" style={{ color: "#C9A96E" }}>
        Key Takeaway
      </p>
      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.82)" }}>
        {children}
      </p>
    </div>
  );
}

export default function BuildingProductsThatScaleGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>

        {/* Hero */}
        <section
          className="relative overflow-hidden px-6 pb-16 pt-32"
          style={{ background: "linear-gradient(160deg, #080e1a 0%, #1C2744 55%, #0a1020 100%)" }}
        >
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10"
            style={{ background: "radial-gradient(ellipse, #C9A96E 0%, transparent 65%)" }}
          />
          <div className="relative mx-auto max-w-3xl">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span
                className="rounded-full px-3 py-1 text-[0.6rem] font-bold uppercase tracking-widest"
                style={{ backgroundColor: "rgba(91,127,166,0.2)", color: "#5B7FA6" }}
              >
                Product
              </span>
              <span
                className="rounded-full px-3 py-1 text-[0.6rem] font-bold uppercase tracking-widest"
                style={{ backgroundColor: "rgba(130,91,166,0.2)", color: "#8A5BA6" }}
              >
                Leadership
              </span>
              <span className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
                Gildre Founder Guide · 10 min read
              </span>
            </div>
            <h1
              className="text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.1] text-white"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Building Products That Scale: Lessons from ClassPass and Mindbody CEO Fritz Lanman
            </h1>
            <p className="mt-5 text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.62)", maxWidth: "640px" }}>
              Scaling a product isn&apos;t just about growth — it&apos;s about building something that
              stays effective as it grows. The founders who get this right make specific structural
              decisions early. Here&apos;s what those decisions look like.
            </p>
          </div>
        </section>

        {/* Body */}
        <article className="mx-auto max-w-3xl px-6 pb-24 pt-10">

          <Body>
            Most early-stage founders think about scaling as a future problem — something to solve
            after product-market fit, after the first significant revenue milestone, after the team
            is bigger. The founders who build companies that actually scale think about it differently:
            scaling is a design constraint from day one, not a phase that comes later.
          </Body>

          <Body>
            <EL href="https://classpass.com">Fritz Lanman</EL>&apos;s trajectory across <EL href="https://classpass.com">ClassPass</EL> and <EL href="https://www.mindbodyonline.com">Mindbody</EL> offers one of the clearest
            illustrations of this principle in practice. ClassPass didn&apos;t just grow — it grew into
            a category it helped define, across thousands of fitness partners and millions of members,
            without the backend becoming the thing that held it back. That kind of growth is not
            accidental. It reflects a set of deliberate product decisions made early and consistently.
          </Body>

          <KeyTakeaway>
            Scalable products share three design properties: infrastructure that handles load without degradation, architecture that evolves without full rebuilds, and processes that stay efficient as the team grows. All three are decisions made at the beginning — not problems solved after the fact.
          </KeyTakeaway>

          {/* Fritz photo */}
          <div
            className="my-10 flex flex-col items-center gap-4 overflow-hidden rounded-2xl sm:flex-row"
            style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div className="relative h-64 w-full flex-shrink-0 overflow-hidden sm:h-56 sm:w-56">
              <Image
                src="/images/fritz-lanman-speaking-stage.webp"
                alt="Fritz Lanman, CEO of ClassPass and Mindbody, speaking on stage at a technology conference"
                fill
                priority
                sizes="(max-width: 640px) 100vw, 224px"
                className="object-cover object-top"
              />
            </div>
            <div className="px-6 pb-6 pt-2 sm:py-6 sm:pl-2">
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.62)", fontStyle: "italic" }}>
                &ldquo;By prioritizing a robust backend and flexible design from the start, ClassPass could
                rapidly expand its services without the infrastructure becoming the constraint on growth.
                Scalability isn&apos;t a phase — it&apos;s a design decision.&rdquo;
              </p>
              <p className="mt-3 text-xs font-bold" style={{ color: "#C9A96E" }}>
                Fritz Lanman — CEO, ClassPass &amp; Mindbody · Gildre Member
              </p>
            </div>
          </div>

          {/* Section 1: What scaling actually means */}
          <H2>What Does &quot;Scalable&quot; Actually Mean for an Early-Stage Product?</H2>

          <Body>
            Scaling is a word that gets used loosely. In product terms, it means something specific:
            your product maintains its efficiency, reliability, and user value as demand grows. More
            users, more transactions, more data — none of it should degrade the experience or require
            a complete rebuild to accommodate.
          </Body>

          <Body>
            That definition has three practical dimensions.
          </Body>

          <div className="mt-6 flex flex-col gap-4">
            <PrincipleCard number="Infrastructure" title="A backend that handles load without cracking">
              Servers, databases, and networks that can absorb increased traffic and data volume
              without performance degradation. For products with global ambitions, this means
              distributed infrastructure with regional nodes, load balancing to spread traffic
              evenly, and auto-scaling policies that add capacity before users feel the ceiling.
              ClassPass&apos;s ability to expand into new cities without rebuilding its backend each
              time was a direct result of infrastructure decisions made before that growth started.
            </PrincipleCard>
            <PrincipleCard number="Architecture" title="A codebase that can evolve without collapsing">
              Modular design and well-documented APIs allow new features and third-party integrations
              to be added without breaking existing functionality. Microservices architecture — where
              discrete parts of the product run as independent services — is particularly effective
              for scaling because failures in one area don&apos;t cascade across the system, and teams
              can deploy updates to individual services without coordinating full-stack releases.
            </PrincipleCard>
            <PrincipleCard number="Operations" title="Processes that scale with the team, not against it">
              As the product grows, so do the teams building it. Operational processes — development
              workflows, QA processes, deployment pipelines, communication structures — need to
              stay lean and clear even as headcount increases. Agile methodologies, automated testing,
              and continuous integration pipelines exist precisely to prevent the operational overhead
              of growth from eating the speed advantage that made a startup fast in the first place.
            </PrincipleCard>
          </div>

          <Callout title="The ClassPass pattern">
            <Body>
              When ClassPass entered a new city, it wasn&apos;t rebuilding the product — it was
              extending a system already designed to accommodate new partners, new markets, and new
              inventory types. That&apos;s what scalable architecture looks like in practice: the
              hard engineering work is done upfront so that growth becomes a configuration change,
              not an engineering project.
            </Body>
          </Callout>

          {/* Section 2: MVP */}
          <H2>How Should Founders Use the MVP Approach to Build for Scale?</H2>
          <KeyTakeaway>
            A Minimum Viable Product should test your single riskiest assumption, not showcase your full product vision. The goal is to generate real behavioral data from real users on the smallest possible build — not to demonstrate how much you've built or how complete the product feels.
          </KeyTakeaway>

          <Body>
            A Minimum Viable Product is not a stripped-down version of your full vision. It&apos;s a
            deliberately scoped version of the core value proposition — the smallest thing you can
            build that lets a real user solve a real problem. The goal isn&apos;t to launch something
            cheap. It&apos;s to learn before you build things that don&apos;t matter.
          </Body>

          <Body>
            The MVP discipline is what separates founders who scale from founders who rebuild.
            When you know exactly what your users value — because you watched them use a minimal
            version of it — you invest your engineering resources in the right places.
            Here&apos;s how to run an MVP process that produces real signal:
          </Body>

          <div className="mt-8">
            <MVPStep step={1} title="Define the core value, not the full feature set">
              Start with the primary problem. What is the one thing your product does that users can&apos;t
              easily do otherwise? Strip everything else. The features that feel essential at the
              whiteboard stage are often the ones nobody misses in the first week of actual use.
            </MVPStep>
            <MVPStep step={2} title="Build something tangible, not theoretical">
              Whether it&apos;s a working prototype, a clickable mockup, or a manually-operated service
              that appears automated, the goal is something users can actually interact with. Feedback
              on a concept is opinion. Feedback on a real interaction is data.
            </MVPStep>
            <MVPStep step={3} title="Launch to a small, honest group">
              Early adopters who will tell you what doesn&apos;t work are more valuable than enthusiastic
              supporters who won&apos;t. Release to a group willing to be critical — early customers,
              a founder community, or a niche audience where your product either solves the problem
              or clearly doesn&apos;t.
            </MVPStep>
            <MVPStep step={4} title="Gather feedback on behavior, not just opinion">
              Watch how people actually use the product, not just what they say about it. Usage patterns,
              drop-off points, and which features get ignored tell you more than survey responses.
              Qualitative interviews add the &quot;why&quot; behind the behavioral data.
            </MVPStep>
            <MVPStep step={5} title="Iterate on the signal, ignore the noise">
              Not all feedback deserves a feature. The signal is feedback that appears repeatedly,
              from multiple users with similar contexts. A single user&apos;s preference is not a roadmap
              item. A pattern across ten users is.
            </MVPStep>
            <MVPStep step={6} title="Track the metrics that measure the core value">
              Define success metrics before you launch, not after. Engagement rate, retention at
              Day 7 and Day 30, time-to-value for new users — whatever measures whether the core
              problem is actually being solved. Vanity metrics (signups, page views) tell you about
              marketing. Retention tells you about product.
            </MVPStep>
            <MVPStep step={7} title="Pivot when the data says to, not when pride says not to">
              The hardest MVP lesson is that a negative result is still a result. If users aren&apos;t
              retaining, the product isn&apos;t solving the problem — and the answer is to change
              something meaningful, not to acquire more users into a leaky bucket.
            </MVPStep>
          </div>

          {/* Section 3: Customer-centric design */}
          <H2>What Is Customer-Centric Design and Why Does It Drive Long-Term Scale?</H2>
          <KeyTakeaway>
            The most durable competitive advantage in product is a deep, accurate understanding of the specific job your best customers hire your product to do. Build for that job first, resist feature expansion until the core experience is bulletproof, and let everything else follow from there.
          </KeyTakeaway>

          <Body>
            Scalable architecture gets you the capacity to grow. Customer-centric design is what
            gives you the reason to. The products that achieve long-term scale aren&apos;t just
            technically capable of handling more users — they become more valuable as they grow
            because they were designed around real human needs from the start.
          </Body>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <DesignPillar icon="🎯" title="Start with the user's job to be done">
              Users don&apos;t buy products — they hire them to do something. ClassPass wasn&apos;t hired
              because users wanted a fitness membership; it was hired because they wanted variety
              and flexibility without commitment. Understanding the job precisely determines what
              you build, what you deprioritize, and what &quot;done&quot; looks like for your user.
            </DesignPillar>
            <DesignPillar icon="🔁" title="Build feedback loops into the product itself">
              The best products are designed to surface user signal continuously — through NPS
              prompts, usage analytics, in-app feedback mechanisms, and structured customer
              interviews. Don&apos;t treat user research as a phase. Treat it as an ongoing function
              of the product team.
            </DesignPillar>
            <DesignPillar icon="⚡" title="Reduce time-to-value relentlessly">
              The fastest path from signup to the moment a user experiences the product&apos;s core
              value is one of the most important metrics you can optimize. Onboarding friction,
              mandatory profile completion, and delayed &quot;aha moments&quot; all reduce retention before
              users even decide whether they like the product.
            </DesignPillar>
            <DesignPillar icon="🧱" title="Design for the 80%, not the power user">
              Power users are vocal and their feedback is easy to act on. But most users will
              never use advanced features. Scalable products optimize the core experience for
              the majority use case, and surface advanced functionality without cluttering the
              path for users who just need the basics.
            </DesignPillar>
          </div>

          <Callout title="The compounding advantage">
            <Body>
              When infrastructure, MVP discipline, and customer-centric design work together, the
              result compounds: you build faster because you&apos;re building less, you iterate better
              because your feedback loops are tight, and you scale without rebuilding because the
              architecture was designed to accommodate growth from the start. This is how ClassPass
              expanded from one city to a global platform — not through brute-force engineering
              effort, but through early decisions that made each subsequent expansion cheaper and faster.
            </Body>
          </Callout>

          {/* Gildre angle */}
          <H2>How Can Peer Founders Help You Make Better Product Decisions?</H2>

          <Body>
            Principles for building scalable products are widely available. What&apos;s harder to find
            is judgment — the ability to apply those principles to your specific situation, market,
            and team. That kind of judgment comes from people who&apos;ve made the decisions before you.
          </Body>

          <Body>
            Fritz Lanman is part of the Gildre community precisely because of what he can offer
            founders working through these questions: not just what ClassPass did, but why, and what
            he would do differently. The same is true of the other seasoned operators and executives
            in the Gildre network — founders who&apos;ve navigated the transition from early product to
            scaled platform and can tell you where the standard advice breaks down.
          </Body>

          {/* FAQ */}
          <section className="mt-14">
            <h2
              className="mb-8 text-[1.5rem] font-bold text-white sm:text-[1.75rem]"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <h3 className="mb-3 font-bold" style={{ color: "#C9A96E", fontSize: "0.9rem" }}>{item.q}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div
            className="mt-8 rounded-2xl p-8 text-center"
            style={{ background: "linear-gradient(135deg, #1a2540 0%, #0f1a2e 100%)", border: "1px solid rgba(201,169,110,0.2)" }}
          >
            <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-widest" style={{ color: "#C9A96E" }}>
              Gildre Founder Community
            </p>
            <p className="mb-3 text-xl font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
              Get product judgment from founders who&apos;ve scaled.
            </p>
            <p className="mb-6 text-sm leading-relaxed mx-auto max-w-md" style={{ color: "rgba(255,255,255,0.55)" }}>
              The Gildre community includes operators like Fritz Lanman who have built products from
              zero to global scale. When you&apos;re making the decisions that determine whether your
              product can grow, that&apos;s the room to be in.
            </p>
            <a
              href="/#pricing"
              className="inline-block rounded-full px-8 py-3 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
            >
              Join Gildre →
            </a>
          </div>

        </article>
      </div>
    </>
  );
}
