import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.gildre.com/guides/first-100-customers" },
  title: "How to Get Your First 100 Customers: 8 Proven Strategies for Early-Stage Founders | Gildre",
  description:
    "No brand, no budget, no traction. Here's how early-stage founders get their first 100 customers — from nailing your ICP and mining your network to picking a single traction channel and building a referral flywheel.",
  keywords: [
    "how to get first 100 customers",
    "first 100 customers startup",
    "early customer acquisition strategies",
    "startup customer acquisition",
    "how to find first customers",
    "early adopter strategy",
    "startup go-to-market",
    "customer acquisition no budget",
    "early stage marketing",
    "founder-led sales",
    "startup traction channels",
    "ideal customer profile startup",
  ],
  openGraph: {
    title: "How to Get Your First 100 Customers: 8 Proven Strategies for Early-Stage Founders",
    description:
      "No brand, no budget, no traction. 8 tactics for getting your first 100 customers — from ICP clarity and network outreach to traction channels, referral flywheels, and founder-led support.",
    type: "article",
    url: "https://www.gildre.com/guides/first-100-customers",
    images: [{ url: "https://www.gildre.com/images/first-100-customers-whiteboard.webp" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Get Your First 100 Customers: 8 Proven Strategies for Early-Stage Founders",
  description:
    "No brand, no budget, no traction. Here's how early-stage founders get their first 100 customers — ICP clarity, network outreach, traction channels, referral flywheels, and more.",
  image: "https://www.gildre.com/images/first-100-customers-whiteboard.webp",
  author: { "@type": "Organization", name: "Gildre", url: "https://www.gildre.com" },
  publisher: {
    "@type": "Organization",
    name: "Gildre",
    url: "https://www.gildre.com",
    logo: { "@type": "ImageObject", url: "https://www.gildre.com/images/gildre-logo.png" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.gildre.com/guides/first-100-customers" },
  keywords: "first 100 customers, startup customer acquisition, early adopter strategy, ICP, founder-led sales, traction channels, referral program, startup go-to-market",
  about: [
    { "@type": "Thing", name: "Customer Acquisition" },
    { "@type": "Thing", name: "Startup Go-to-Market" },
    { "@type": "Organization", name: "Gildre" },
  ],
};

function H2({ num, children }: { num?: string; children: React.ReactNode }) {
  return (
    <h2
      className="mb-4 mt-14 flex items-baseline gap-3 text-[1.5rem] font-bold text-white sm:text-[1.75rem]"
      style={{ fontFamily: "var(--font-fraunces)" }}
    >
      {num && (
        <span className="text-[1rem] font-bold" style={{ color: "#C9A96E" }}>{num}</span>
      )}
      {children}
    </h2>
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

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mb-4 flex flex-col gap-2 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
          <span className="mt-[3px] flex-shrink-0 text-[0.7rem]" style={{ color: "#C9A96E" }}>→</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ChannelCard({ label, tag, desc }: { label: string; tag: string; desc: string }) {
  return (
    <div
      className="rounded-xl p-5"
      style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="mb-2 flex items-center gap-3">
        <p className="font-bold text-white text-sm">{label}</p>
        <span
          className="rounded-full px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider"
          style={{ backgroundColor: "rgba(201,169,110,0.12)", color: "#C9A96E" }}
        >
          {tag}
        </span>
      </div>
      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.58)" }}>{desc}</p>
    </div>
  );
}

export default function First100CustomersGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
                Growth
              </span>
              <span
                className="rounded-full px-3 py-1 text-[0.6rem] font-bold uppercase tracking-widest"
                style={{ backgroundColor: "rgba(91,166,110,0.15)", color: "#5BA66E" }}
              >
                Marketing
              </span>
              <span className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
                Gildre Founder Guide · 11 min read
              </span>
            </div>
            <h1
              className="text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.1] text-white"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              How to Get Your First 100 Customers
            </h1>
            <p className="mt-5 text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.62)", maxWidth: "640px" }}>
              No brand recognition, no word-of-mouth momentum, often no budget. Eight strategies
              that work precisely because of those constraints — not in spite of them.
            </p>

            <div className="relative mt-10 overflow-hidden rounded-2xl" style={{ aspectRatio: "16/8" }}>
              <Image
                src="/images/first-100-customers-whiteboard.webp"
                alt="Founders mapping early customer acquisition strategy on a whiteboard"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </section>

        {/* Body */}
        <article className="mx-auto max-w-3xl px-6 pb-24 pt-4">

          {/* Intro */}
          <Body>
            The first 100 customers are unlike any others you&apos;ll ever acquire. They come before
            the product is polished, before anyone has heard of you, and before you have data to
            prove any of your assumptions. They require a fundamentally different approach than
            what scales later — because at this stage, scalability is not the goal. Signal is.
          </Body>
          <Body>
            Every tactic below is optimized for the same constraint: maximum learning per hour
            spent, with minimal budget required. The strategies that work at 100K customers —
            paid acquisition, SEO, brand — are largely irrelevant here. What works at zero
            is founder intensity, personal trust, and relentless iteration.
          </Body>

          {/* 1 */}
          <H2 num="01">Define Your ICP Before You Talk to Anyone</H2>
          <Body>
            The most common early-stage customer acquisition mistake is not being wrong about the
            channel — it&apos;s being wrong about who you&apos;re targeting. &ldquo;Everyone&rdquo; is not a customer.
            Neither is &ldquo;SMBs&rdquo; or &ldquo;marketing teams.&rdquo; You need a specific person with a specific
            problem who feels it acutely enough to try an unproven solution.
          </Body>
          <Body>
            Your ideal early adopter is not just someone who has the problem. It&apos;s someone who
            has the problem, has already tried to solve it (and failed), is in enough pain to try
            something new, and has the authority to make the decision. That last part eliminates
            most leads that feel promising.
          </Body>
          <Callout title="Three questions to sharpen your ICP">
            <BulletList items={[
              "What are they using today instead of you — and what frustrates them most about it?",
              "Why would they take a chance on an unproven solution? What makes the status quo painful enough?",
              "Can they make the decision themselves, or do they need internal approval?",
            ]} />
            <Body>
              A strong ICP makes every downstream effort more efficient. The narrower and more
              specific your definition, the easier it is to find these people, message them
              precisely, and convert them into paying customers — and then into advocates.
            </Body>
          </Callout>

          {/* 2 */}
          <H2 num="02">Mine Your Personal Network with Precision</H2>
          <Body>
            Your first customers are almost certainly closer than you think. Former colleagues,
            LinkedIn connections, college classmates, industry contacts — these are people who
            already have baseline trust in you as a human, which is the hardest thing to earn cold.
            Do not waste this asset with a generic announcement post.
          </Body>
          <Body>
            Instead, go one-to-one. Go through your contacts and identify the 30–50 people who
            most closely fit your ICP, then send each of them a personalized message. Not a pitch
            — a genuine conversation starter that acknowledges why you thought of them specifically.
          </Body>
          <BulletList items={[
            "Be specific about why you reached out to them in particular — not a mass copy-paste.",
            "Ask for a 20-minute conversation, not a sale. Early-stage customers often buy after they feel heard.",
            "Use 'Who do you know who might be dealing with [problem]?' — referrals from your network are warm by proxy.",
            "Offer early access benefits: a lower price, direct access to you, influence over the roadmap. Make it feel like an insider invitation.",
          ]} />
          <Body>
            Your goal in this phase is not revenue — it&apos;s qualified conversations. Every person who
            says yes tells you something. Every person who says no tells you something more.
          </Body>

          {/* 3 */}
          <H2 num="03">Go All-In on One Traction Channel</H2>
          <Body>
            There are roughly 19 distinct customer acquisition channels available to any startup:
            content marketing, SEO, paid social, cold outbound, community, partnerships, PR,
            product-led growth, and so on. At the first-100 stage, the correct number to pursue
            simultaneously is one.
          </Body>
          <Body>
            Spreading attention across three channels doesn&apos;t give you three chances to succeed —
            it gives you three chances to do mediocre work on each. Pick the channel that best
            fits your ICP&apos;s behavior and your business model, and pursue it until you either
            find signal or definitively rule it out. Then move.
          </Body>

          <div className="mt-6 flex flex-col gap-3">
            <ChannelCard
              label="LinkedIn outreach + content"
              tag="B2B"
              desc="For B2B founders, LinkedIn is the highest-signal channel available without a budget. Targeted connection requests followed by personalized messages, combined with consistent thought leadership posts, build trust at scale. One strong post per day compounds faster than most founders expect."
            />
            <ChannelCard
              label="Founder-led cold email"
              tag="B2B"
              desc="A 200-word email from the founder to a precisely targeted list — not a sales tool, just an email from one person to another — still outperforms most paid channels at early stage. The key is ultra-specific personalization and a clear, low-friction ask."
            />
            <ChannelCard
              label="Niche communities (Reddit, Slack, Discord, Facebook Groups)"
              tag="B2C / B2B"
              desc="Find where your ICP already hangs out online and add genuine value before mentioning your product. Becoming a trusted voice in a community of 5,000 relevant people is more valuable than a Facebook ad to 50,000 irrelevant ones."
            />
            <ChannelCard
              label="SEO + content marketing"
              tag="Long-term"
              desc="The slowest to show results (6–12+ months) but the highest ROI at scale. If your ICP is actively searching for solutions to the problem you solve, targeting those high-intent keywords now compounds over time. Write one excellent long-form piece per week targeting a specific keyword."
            />
            <ChannelCard
              label="Paid ads (small-scale testing)"
              tag="If budget exists"
              desc="Not a channel for zero-budget founders, but $500–$2,000 in Meta or Google ads can validate messaging and ICP assumptions faster than almost anything else. Run 4–6 creative variants against each other and let the data tell you what resonates before you commit."
            />
          </div>

          {/* LinkedIn image */}
          <div className="relative my-10 overflow-hidden rounded-2xl" style={{ aspectRatio: "4/3" }}>
            <Image
              src="/images/linkedin-logo.webp"
              alt="LinkedIn — the highest-signal B2B customer acquisition channel for early-stage founders"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
            />
          </div>

          {/* 4 */}
          <H2 num="04">Do Things That Don&apos;t Scale — On Purpose</H2>
          <Body>
            Paul Graham&apos;s most cited advice — &ldquo;do things that don&apos;t scale&rdquo; — is especially relevant
            for the first 100 customers. Airbnb&apos;s founders personally photographed early hosts&apos;
            apartments. Stripe&apos;s founders installed Stripe on users&apos; laptops in person. These
            weren&apos;t inefficiencies — they were deliberate decisions to do things that only worked
            for small numbers of customers, so they could learn things that couldn&apos;t be learned any
            other way.
          </Body>
          <BulletList items={[
            "Onboard your first 20 customers manually, one-on-one. Watch them use the product. Listen to what confuses them.",
            "Follow up personally with every churned user. Not an automated email — a personal message asking what went wrong.",
            "Offer your first customers direct access to you: your personal email, a Slack channel, or a recurring call. This is your research lab.",
            "Personally demo to every qualified prospect, even if the product sells itself. You&apos;ll hear objections no survey would surface.",
          ]} />

          {/* 5 */}
          <H2 num="05">Hustle for Early PR and Earned Attention</H2>
          <Body>
            You don&apos;t need a PR agency to get media coverage — you need a story that a journalist
            or podcast host can tell their audience. The key is leading with the angle they care
            about, not the product you want to promote. Journalists write for their readers. Podcast
            hosts book guests their audience wants to hear from. Position yourself as serving them,
            not the other way around.
          </Body>
          <BulletList items={[
            "Find 10–15 journalists who cover your industry. Read their last 20 articles. Pitch only the angle that fits their beat.",
            "Product Hunt: relevant for dev tools, consumer apps, and B2B SaaS. A strong launch can drive hundreds of qualified sign-ups in 24 hours.",
            "Podcast appearances: the host gets a guest, you get their audience's trust. Niche podcasts (1K–20K listeners) often convert better than large ones.",
            "Guest posts and contributed articles: build authority and drive backlinks. Target publications your ICP actually reads.",
          ]} />

          {/* 6 */}
          <H2 num="06">Build a Community Around the Problem, Not the Product</H2>
          <Body>
            The most durable early customer acquisition strategy is also the most counterintuitive:
            don&apos;t build a following for your product — build a community around the problem your
            product solves. People join communities organized around their identity and challenges.
            They rarely join communities organized around a vendor.
          </Body>
          <Body>
            If you&apos;re building for growth-stage founders, start a group for growth-stage founders.
            If you&apos;re building for independent consultants, create a space for independent consultants.
            Your product becomes the natural recommendation inside a community where you&apos;re already
            trusted as the person who understands the problem best.
          </Body>
          <BulletList items={[
            "Start a small Slack or Discord group and seed it with 20 high-quality people. Quality over quantity at early stage.",
            "Run a weekly AMA or office hours on the problem — not on your product.",
            "Share customer wins publicly on social. Real success stories from real users are more persuasive than any ad.",
            "The community members who engage most become your warmest prospects — they self-select.",
          ]} />

          {/* 7 */}
          <H2 num="07">Design a Referral Flywheel Early</H2>
          <Body>
            Every happy customer is a distribution channel you haven&apos;t fully utilized. A referral
            program doesn&apos;t need to be sophisticated to work — it needs to make the incentive clear,
            the ask easy, and the reward immediate. The founders who wait until they have 1,000
            customers to build a referral program leave dozens of organic customers on the table.
          </Body>
          <Callout title="What great referral programs have in common">
            <BulletList items={[
              "Dropbox gave users extra storage for referring friends — the reward was the product itself, making it feel natural rather than transactional.",
              "Tesla offered free Supercharging miles — high-perceived-value reward with near-zero marginal cost.",
              "The best early-stage referral programs are bilateral: both the referrer and the new customer get something. This removes friction from the ask.",
              "Make it frictionless: a unique link, a one-sentence ask, and a clear reward. Complicated referral programs don't get used.",
            ]} />
          </Callout>
          <Body>
            Even a simple &ldquo;refer a friend and you both get your first month free&rdquo; can generate
            meaningful compounding growth when your early customers are genuinely excited about
            what you&apos;re building.
          </Body>

          {/* 8 */}
          <H2 num="08">Treat Customer Support as a Growth Channel</H2>
          <Body>
            At first-100 scale, your support function and your growth function are the same function.
            Every customer interaction is an opportunity to turn a user into an advocate — or into
            someone who warns everyone they know to stay away. The math here is asymmetric: a
            delighted customer might tell two people. A disappointed one tells eleven.
          </Body>
          <BulletList items={[
            "Respond to every support request within hours, not days. Speed is one of the only dimensions where an early-stage startup beats incumbents.",
            "Go beyond what&apos;s expected: a personal follow-up after resolving an issue, a small credit for an inconvenience, a handwritten note for a big customer.",
            "Turn support conversations into content: the most common objections and confusion points are your best blog post topics.",
            "Ask every engaged customer for a testimonial, a case study, or a referral. The best time to ask is immediately after they&apos;ve experienced a win.",
          ]} />

          {/* Takeaway */}
          <div
            className="mt-14 rounded-2xl p-8"
            style={{ background: "linear-gradient(135deg, #111e35 0%, #0d1628 100%)", border: "1px solid rgba(201,169,110,0.15)" }}
          >
            <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-widest" style={{ color: "#C9A96E" }}>
              The Core Principle
            </p>
            <p className="mb-4 text-xl font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
              There&apos;s no formula. There&apos;s only relentless execution.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              The startups that reach 100 customers fastest aren&apos;t the ones with the best product
              or the biggest budget. They&apos;re the ones who talk to the most people, iterate the
              fastest, and refuse to accept silence as an answer. Be specific about who you serve.
              Pick one channel. Do things that don&apos;t scale. Build a feedback loop tight enough that
              you&apos;re learning something every single day. The first 100 will follow.
            </p>
          </div>

          {/* CTA */}
          <div
            className="mt-8 rounded-2xl p-8 text-center"
            style={{ background: "linear-gradient(135deg, #1a2540 0%, #0f1a2e 100%)", border: "1px solid rgba(201,169,110,0.2)" }}
          >
            <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-widest" style={{ color: "#C9A96E" }}>
              Gildre Founder Community
            </p>
            <p className="mb-3 text-xl font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
              Get your first 100 faster — with founders who&apos;ve already done it.
            </p>
            <p className="mb-6 text-sm leading-relaxed mx-auto max-w-md" style={{ color: "rgba(255,255,255,0.55)" }}>
              Strategy is one thing. Having a peer group of founders who have already navigated
              early customer acquisition — and mentors who can look at your specific situation —
              is another. That&apos;s what Gildre is built for.
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
