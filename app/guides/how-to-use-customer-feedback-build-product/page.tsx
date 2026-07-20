import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Use Customer Feedback to Build a Product People Actually Want: A Founder's Growth Guide | Gildre",
  description:
    "A practical guide for startup founders on collecting, analyzing, and acting on customer feedback to achieve product-market fit. Includes the Airbnb and Slack case studies, a prioritization framework, tool recommendations, and the most common mistakes founders make.",
  keywords: [
    "customer feedback startup guide",
    "how to collect customer feedback for startups",
    "product market fit customer feedback",
    "customer feedback loop for founders",
    "NPS for startups",
    "customer interview questions startup",
    "Airbnb pivot customer feedback",
    "Slack product development story",
    "Superhuman product feedback",
    "build measure learn startup",
    "customer-driven product roadmap",
    "founder growth guide",
  ],
  openGraph: {
    title: "How to Use Customer Feedback to Build a Product People Actually Want",
    description:
      "Intuition gets you started. Customer feedback is what helps you scale. A practical guide for founders on collecting, prioritizing, and acting on what users are telling you.",
    type: "article",
    url: "https://www.gildre.com/guides/how-to-use-customer-feedback-build-product",
    images: [{ url: "https://www.gildre.com/images/feedback-team-working.webp" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Use Customer Feedback to Build a Product People Actually Want: A Founder's Growth Guide",
  "description":
    "A practical guide for startup founders on collecting, analyzing, and acting on customer feedback to achieve product-market fit — with case studies, frameworks, and tool recommendations.",
  "image": "https://www.gildre.com/images/feedback-team-working.webp",
  "author": { "@type": "Organization", "name": "Gildre", "url": "https://www.gildre.com" },
  "publisher": {
    "@type": "Organization",
    "name": "Gildre",
    "url": "https://www.gildre.com",
    "logo": { "@type": "ImageObject", "url": "https://www.gildre.com/images/gildre-logo.png" },
  },
  "datePublished": "2024-01-01",
  "dateModified": "2024-01-01",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.gildre.com/guides/how-to-use-customer-feedback-build-product" },
  "keywords": "customer feedback startup, product market fit, customer interviews, NPS, feedback loop, Airbnb pivot, Slack, Superhuman, build measure learn, product roadmap, founder growth",
  "about": [
    { "@type": "Thing", "name": "Customer Feedback" },
    { "@type": "Thing", "name": "Product-Market Fit" },
    { "@type": "Thing", "name": "Startup Growth" },
    { "@type": "Organization", "name": "Gildre" },
  ],
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 mt-12 text-[1.5rem] font-bold text-white sm:text-[1.75rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-3 mt-7 text-[1.05rem] font-bold text-white">{children}</h3>;
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
      {children}
    </p>
  );
}

function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-8 rounded-2xl px-7 py-6" style={{ backgroundColor: "rgba(201,169,110,0.08)", borderLeft: "3px solid #C9A96E" }}>
      <p className="text-base italic leading-relaxed text-white">{children}</p>
    </blockquote>
  );
}

function ToolPill({ name, href }: { name: string; href?: string }) {
  const cls = "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-opacity hover:opacity-80";
  const style = { backgroundColor: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.75)", border: "1px solid rgba(255,255,255,0.1)" };
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls} style={style}>{name} ↗</a>;
  return <span className={cls} style={style}>{name}</span>;
}

function Callout({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="my-8 rounded-2xl p-7" style={{ backgroundColor: "rgba(201,169,110,0.06)", border: "1px solid rgba(201,169,110,0.15)" }}>
      {title && <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-widest" style={{ color: "#C9A96E" }}>{title}</p>}
      {children}
    </div>
  );
}

function CaseStudy({ company, subtitle, children }: { company: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div className="my-8 rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="px-6 py-4" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
        <p className="text-[0.6rem] font-bold uppercase tracking-widest mb-1" style={{ color: "#C9A96E" }}>Case Study</p>
        <p className="text-base font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>{company}</p>
        <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>{subtitle}</p>
      </div>
      <div className="px-6 py-5" style={{ backgroundColor: "#0a1020" }}>
        {children}
      </div>
    </div>
  );
}

export default function FounderGrowthGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden px-6 pb-16 pt-32"
          style={{ background: "linear-gradient(160deg, #080e1a 0%, #1C2744 55%, #0a1020 100%)" }}
        >
          <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10"
            style={{ background: "radial-gradient(ellipse, #C9A96E 0%, transparent 65%)" }} />
          <div className="relative mx-auto max-w-3xl">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full px-3 py-1 text-[0.6rem] font-bold uppercase tracking-widest" style={{ backgroundColor: "rgba(91,127,166,0.2)", color: "#5B7FA6" }}>Growth</span>
              <span className="rounded-full px-3 py-1 text-[0.6rem] font-bold uppercase tracking-widest" style={{ backgroundColor: "rgba(91,154,166,0.2)", color: "#5B9AA6" }}>Product</span>
              <span className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>Gildre Founder Guide · 12 min read</span>
            </div>
            <h1 className="text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.1] text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
              How to Use Customer Feedback to Build a Product People Actually Want
            </h1>
            <p className="mt-3 text-lg font-medium" style={{ color: "#C9A96E", fontFamily: "var(--font-fraunces)" }}>A Founder's Growth Guide</p>
            <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              Intuition and vision get you started. Customer feedback is what helps you scale. This guide breaks down how to collect, prioritize, and act on what your users are actually telling you — with real case studies and a tool stack that works.
            </p>
          </div>
        </section>

        {/* ── Body ─────────────────────────────────────────────────────── */}
        <article className="mx-auto max-w-3xl px-6 py-16">

          <Quote>
            "Your customers are your best advisors." One founder told us this after pivoting his SaaS startup three times before finally nailing product-market fit. Each iteration was painful — but every change was guided by a single principle: listening to customers.
          </Quote>

          {/* Hero image */}
          <div className="my-10 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            <Image
              src="/images/feedback-team-working.webp"
              alt="Founders reviewing customer feedback and product decisions"
              width={1400}
              height={933}
              className="w-full"
              style={{ objectFit: "cover", maxHeight: "420px", objectPosition: "center top" }}
            />
          </div>

          <Body>
            The best founders aren't just building products. They're building solutions. And the only way to ensure you're solving real problems — not just assumed ones — is to make customer feedback a core part of how your company operates, not an afterthought.
          </Body>

          <H2>Why Customer Feedback Is a Growth Lever, Not a Chore</H2>

          <Body>
            Most founders treat customer feedback as something they "have to" collect — a box to check before the next sprint. The most successful companies treat it differently: they integrate it into every product decision, every roadmap discussion, and every hire they make.
          </Body>

          <CaseStudy company="Airbnb" subtitle="How a photography pivot changed everything">
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              In Airbnb's early days, the founders were struggling with low bookings despite solid traffic. Rather than A/B testing their way to an answer, they personally visited hosts, observed the experience firsthand, and identified the real problem: low-quality photos made listings look unappealing. Their solution was to go to New York, rent a camera, and take professional photos of listings themselves. Bookings improved immediately. A single insight, discovered by actually talking to customers, changed the company's trajectory.
            </p>
          </CaseStudy>

          <Body>
            Your customers are already telling you what they need. The question is whether you're set up to hear it — and act on it.
          </Body>

          <H2>How to Collect Feedback That's Actually Useful</H2>

          <Body>
            Not all feedback is created equal. Generic suggestions like "make it better" or "add more features" tell you nothing actionable. The goal is to extract specific, contextual insights that directly influence product development, pricing, and user experience. Here's how.
          </Body>

          <H3>1. One-on-One Customer Interviews</H3>
          <Body>
            Direct conversations with users provide the highest-quality signal of any feedback method. The key is asking open-ended questions that surface problems rather than fishing for compliments:
          </Body>
          <ul className="mb-6 space-y-2 text-sm pl-1" style={{ color: "rgba(255,255,255,0.72)" }}>
            {[
              '"What made you try our product in the first place?"',
              '"Walk me through what you were doing right before you opened the app."',
              '"What\'s one thing you wish you could do that you can\'t do today?"',
              '"What almost made you stop using us?"',
              '"If our product disappeared tomorrow, what would you use instead?"',
            ].map((q, i) => (
              <li key={i} className="flex gap-3">
                <span style={{ color: "#C9A96E", flexShrink: 0 }}>→</span>
                <span className="italic">{q}</span>
              </li>
            ))}
          </ul>
          <div className="mb-6 flex flex-wrap gap-2">
            <ToolPill name="Calendly" href="https://calendly.com" />
            <ToolPill name="SavvyCal" href="https://savvycal.com" />
            <ToolPill name="Grain" href="https://grain.com" />
            <ToolPill name="Otter.ai" href="https://otter.ai" />
            <ToolPill name="Zoom" href="https://zoom.us" />
          </div>

          <H3>2. In-App Surveys and Feedback Forms</H3>
          <Body>
            Short, targeted surveys capture feedback at the moment of highest relevance — right when a user has just completed an action or hit a friction point. Keep them to one or two questions maximum. The ones that consistently produce actionable data:
          </Body>
          <div className="mb-6 rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "rgba(201,169,110,0.08)" }}>
                  <th className="px-5 py-3 text-left font-semibold" style={{ color: "#C9A96E" }}>Survey Type</th>
                  <th className="px-5 py-3 text-left font-semibold" style={{ color: "#C9A96E" }}>Question</th>
                  <th className="px-5 py-3 text-left font-semibold hidden sm:table-cell" style={{ color: "#C9A96E" }}>What It Reveals</th>
                </tr>
              </thead>
              <tbody style={{ backgroundColor: "#0a1020" }}>
                {[
                  ["NPS", '"How likely are you to recommend us? (0–10)"', "Overall loyalty and word-of-mouth potential"],
                  ["PMF Survey", '"How would you feel if you could no longer use this product?"', "Depth of product-market fit (>40% 'very disappointed' = PMF)"],
                  ["Feature Request", '"What\'s one feature you\'d love to see?"', "Unmet needs and priority gaps"],
                  ["Exit Survey", '"Why are you canceling today?"', "Churn drivers and fixable problems"],
                ].map(([type, q, reveals], i) => (
                  <tr key={i} style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                    <td className="px-5 py-3 font-medium text-white">{type}</td>
                    <td className="px-5 py-3 italic" style={{ color: "rgba(255,255,255,0.6)" }}>{q}</td>
                    <td className="px-5 py-3 hidden sm:table-cell" style={{ color: "rgba(255,255,255,0.4)" }}>{reveals}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mb-6 flex flex-wrap gap-2">
            <ToolPill name="Typeform" href="https://typeform.com" />
            <ToolPill name="SurveyMonkey" href="https://surveymonkey.com" />
            <ToolPill name="Hotjar" href="https://hotjar.com" />
            <ToolPill name="Qualtrics" href="https://qualtrics.com" />
          </div>

          <H3>3. Support Tickets and Customer Reviews</H3>
          <Body>
            Your support inbox is one of the most underrated product research tools you have. Every ticket is a data point about where your product fails to explain itself, fails to work, or fails to meet expectations. Read them systematically — not just to resolve individual issues but to spot patterns across hundreds of conversations.
          </Body>
          <Body>
            Public reviews on G2, Trustpilot, and app stores give you unfiltered feedback from users who don't have a relationship with you — often the most honest signal you'll find.
          </Body>
          <div className="mb-6 flex flex-wrap gap-2">
            <ToolPill name="Zendesk" href="https://zendesk.com" />
            <ToolPill name="Freshdesk" href="https://freshdesk.com" />
            <ToolPill name="G2" href="https://g2.com" />
            <ToolPill name="Trustpilot" href="https://trustpilot.com" />
            <ToolPill name="Chattermill" href="https://chattermill.com" />
          </div>

          <H3>4. Social Media and Online Communities</H3>
          <Body>
            Reddit threads, X (Twitter) discussions, LinkedIn comments, and niche Slack communities are where your customers talk about your category without any filter. The feedback isn't directed at you — which makes it more honest than anything you'd collect through an official channel.
          </Body>

          {/* Twitter/social image */}
          <div className="my-8 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            <Image
              src="/images/feedback-social-listening.webp"
              alt="Social media listening — monitoring customer feedback on X and online communities"
              width={1400}
              height={933}
              className="w-full"
              style={{ objectFit: "cover", maxHeight: "340px", objectPosition: "center" }}
            />
            <p className="px-4 py-3 text-[0.68rem]" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "#0a1020" }}>
              Social listening surfaces unfiltered customer sentiment that no survey will ever capture
            </p>
          </div>

          <div className="mb-6 flex flex-wrap gap-2">
            <ToolPill name="Brandwatch" href="https://brandwatch.com" />
            <ToolPill name="Sprout Social" href="https://sproutsocial.com" />
            <ToolPill name="Hootsuite" href="https://hootsuite.com" />
          </div>

          <H2>Turning Feedback Into Product Decisions</H2>

          <Body>
            Collecting feedback without a system for acting on it is just noise collection. The process that separates high-growth founders from everyone else is what happens after the data comes in.
          </Body>

          <H3>Step 1: Prioritize with the FIE Framework</H3>
          <Body>
            When feedback comes in from multiple channels, score each item against three dimensions before adding it to your roadmap:
          </Body>
          <div className="my-6 overflow-hidden rounded-xl" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "rgba(201,169,110,0.08)" }}>
                  <th className="px-5 py-3 text-left font-semibold" style={{ color: "#C9A96E" }}>Dimension</th>
                  <th className="px-5 py-3 text-left font-semibold" style={{ color: "#C9A96E" }}>Question to Ask</th>
                  <th className="px-5 py-3 text-left font-semibold hidden sm:table-cell" style={{ color: "#C9A96E" }}>High Score Looks Like</th>
                </tr>
              </thead>
              <tbody style={{ backgroundColor: "#0a1020" }}>
                {[
                  ["Frequency (F)", "How many users mentioned this?", "Same pain point from 5+ independent users"],
                  ["Impact (I)", "How much does fixing this improve their experience?", "Removes a blocker or eliminates a top complaint"],
                  ["Effort (E)", "How long will this take to build?", "Can ship in one sprint without major rework"],
                ].map(([dim, q, high], i) => (
                  <tr key={i} style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                    <td className="px-5 py-3 font-medium text-white">{dim}</td>
                    <td className="px-5 py-3" style={{ color: "rgba(255,255,255,0.6)" }}>{q}</td>
                    <td className="px-5 py-3 hidden sm:table-cell" style={{ color: "rgba(255,255,255,0.4)" }}>{high}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Body>
            High-F, high-I, low-E items go to the top of the queue. High-F, high-I, high-E items go on the roadmap with a realistic timeline. Low-F items, no matter how loudly someone complains, get deprioritized unless they align with your core ICP.
          </Body>

          <H3>Step 2: Build a Customer-Driven Product Roadmap</H3>
          <Body>
            Your roadmap shouldn't be a wish list from your last internal brainstorm. Every item should be traceable to a customer insight. Use a tool that lets you link roadmap items back to the specific feedback that generated them — so when you ship something, you can close the loop with the users who asked for it.
          </Body>
          <div className="mb-6 flex flex-wrap gap-2">
            <ToolPill name="Productboard" href="https://productboard.com" />
            <ToolPill name="Notion" href="https://notion.so" />
            <ToolPill name="Trello" href="https://trello.com" />
          </div>

          <H3>Step 3: Test and Iterate Fast</H3>
          <Body>
            Don't commit to full-scale changes before you've validated them. Build a beta feature, run an A/B test, or release it to a small cohort. The build-measure-learn loop only works if you keep each cycle short enough to get signal before you've overcommitted to a direction.
          </Body>

          <H2>Case Studies: What Listening Actually Built</H2>

          <CaseStudy company="Slack" subtitle="From failed gaming company to $27B acquisition">
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Slack started as an internal communication tool at Tiny Speck, a gaming startup whose game never found an audience. When the game failed, founder Stewart Butterfield noticed something unexpected: his team loved using the internal tool they'd built for themselves. Rather than shutting everything down, he started gathering feedback from other teams willing to test it. Each interview revealed new ways people wanted to collaborate. He refined relentlessly based on that input — and what started as an internal tool became the dominant workplace communication platform in the world, acquired by Salesforce for $27.7B in 2021.
            </p>
          </CaseStudy>

          <CaseStudy company="Superhuman" subtitle="How obsessive user feedback built a cult product">
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Superhuman could have launched broadly and optimized based on aggregate data. Instead, founder Rahul Vohra interviewed hundreds of potential users before launch — and used Sean Ellis's PMF survey ("How would you feel if you could no longer use this product?") to measure fit rigorously. He only opened the product to users who scored "very disappointed." Every feature decision was traced directly to what that high-intent cohort wanted. The result: a premium email client with a waitlist of tens of thousands and a user base that defends it passionately — because it was built specifically for them.
            </p>
          </CaseStudy>

          <H2>The Three Mistakes That Kill Feedback Loops</H2>

          <div className="my-8 space-y-5">
            {[
              {
                title: "Ignoring negative feedback",
                body: "It's tempting to dismiss harsh criticism, especially when it stings. But negative feedback is where your biggest growth opportunities hide. When a user complains, they're telling you exactly what would make them stay. Instead of getting defensive, ask: 'What would have to be true for this person to love us?'"
              },
              {
                title: "Building for the loudest voices",
                body: "Not every piece of feedback deserves a roadmap slot. Power users who email you five times a week are an important signal — but they're not your average customer. Build for the majority use case, not the most vocal edge case. If only one user has requested something in six months, it's probably not your priority."
              },
              {
                title: "Failing to close the feedback loop",
                body: "When a customer takes time to share feedback — especially critical feedback — and never hears anything back, they feel ignored. That silence becomes a retention risk. When you ship something a user asked for, tell them directly. A short email that says 'We shipped the feature you suggested — here's how to try it' builds more loyalty than any marketing campaign."
              },
            ].map(({ title, body }, i) => (
              <div key={i} className="rounded-xl p-6" style={{ backgroundColor: "rgba(200,80,80,0.06)", border: "1px solid rgba(200,80,80,0.15)" }}>
                <p className="font-bold text-white mb-2 text-sm">
                  <span style={{ color: "rgba(255,150,150,0.8)" }}>Mistake {i + 1}: </span>{title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{body}</p>
              </div>
            ))}
          </div>

          <H2>Building a Feedback-Driven Culture</H2>

          <Body>
            Customer feedback can't live only in the support inbox or in the product team's Notion doc. The companies that execute on it best make it everyone's job — not just the customer success team's.
          </Body>

          <Callout title="What a Feedback-Driven Culture Looks Like in Practice">
            <ul className="space-y-3 text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
              <li className="flex gap-3"><span style={{ color: "#C9A96E" }}>→</span><span>Every team member — engineering, marketing, ops — does at least one customer call per month</span></li>
              <li className="flex gap-3"><span style={{ color: "#C9A96E" }}>→</span><span>A weekly "feedback digest" is shared across the company, summarizing the top themes from support, surveys, and reviews</span></li>
              <li className="flex gap-3"><span style={{ color: "#C9A96E" }}>→</span><span>Every roadmap item has a source — the specific feedback that justified prioritizing it</span></li>
              <li className="flex gap-3"><span style={{ color: "#C9A96E" }}>→</span><span>When a feature ships, the users who requested it hear about it first</span></li>
              <li className="flex gap-3"><span style={{ color: "#C9A96E" }}>→</span><span>NPS and PMF scores are tracked as core company metrics alongside revenue and retention</span></li>
            </ul>
          </Callout>

          <Body>
            The companies that scale fastest aren't the ones with the best initial ideas. They're the ones that are fastest at discovering what their customers actually need — and building it.
          </Body>

          <div className="my-10 rounded-2xl p-7" style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-widest" style={{ color: "#C9A96E" }}>Full Tool Stack — Referenced in This Guide</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <p className="mb-3 text-xs font-bold text-white">Customer Interviews</p>
                <div className="flex flex-wrap gap-2"><ToolPill name="Calendly" href="https://calendly.com" /><ToolPill name="SavvyCal" href="https://savvycal.com" /><ToolPill name="Grain" href="https://grain.com" /><ToolPill name="Otter.ai" href="https://otter.ai" /></div>
              </div>
              <div>
                <p className="mb-3 text-xs font-bold text-white">Surveys & In-App</p>
                <div className="flex flex-wrap gap-2"><ToolPill name="Typeform" href="https://typeform.com" /><ToolPill name="Hotjar" href="https://hotjar.com" /><ToolPill name="Qualtrics" href="https://qualtrics.com" /></div>
              </div>
              <div>
                <p className="mb-3 text-xs font-bold text-white">Support & Reviews</p>
                <div className="flex flex-wrap gap-2"><ToolPill name="Zendesk" href="https://zendesk.com" /><ToolPill name="Freshdesk" href="https://freshdesk.com" /><ToolPill name="G2" href="https://g2.com" /><ToolPill name="Chattermill" href="https://chattermill.com" /></div>
              </div>
              <div>
                <p className="mb-3 text-xs font-bold text-white">Roadmap & Social</p>
                <div className="flex flex-wrap gap-2"><ToolPill name="Productboard" href="https://productboard.com" /><ToolPill name="Brandwatch" href="https://brandwatch.com" /><ToolPill name="Sprout Social" href="https://sproutsocial.com" /></div>
              </div>
            </div>
          </div>

          {/* Gildre CTA */}
          <div className="mt-14 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #1C2744 0%, #0a1020 100%)", border: "1px solid rgba(201,169,110,0.2)" }}>
            <p className="text-[0.65rem] font-bold uppercase tracking-widest mb-3" style={{ color: "#C9A96E" }}>Gildre Community</p>
            <h3 className="text-[1.5rem] font-bold text-white mb-4" style={{ fontFamily: "var(--font-fraunces)" }}>
              Your next breakthrough is already in your customers' feedback.
            </h3>
            <p className="text-sm leading-relaxed mb-8 mx-auto max-w-md" style={{ color: "rgba(255,255,255,0.55)" }}>
              Gildre connects founders who are navigating product development, customer discovery, and growth — with peers who've been through the same loops. Apply to join.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a href="/membership" className="rounded-full px-8 py-3.5 text-sm font-bold transition-opacity hover:opacity-90" style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}>Apply to Gildre →</a>
              <a href="/content" className="rounded-full px-8 py-3.5 text-sm font-semibold transition-opacity hover:opacity-80" style={{ color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.15)" }}>More Founder Guides</a>
            </div>
          </div>

        </article>

        {/* ── Footer ───────────────────────────────────────────────────── */}
        <div className="px-6 py-8 text-center text-[0.7rem] text-zinc-600" style={{ backgroundColor: "#080e1a", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <p>
            &copy; {new Date().getFullYear()} Gildre, LLC. All rights reserved.{" "}
            <a href="/privacy" className="underline underline-offset-2 hover:text-zinc-400 transition-colors">Privacy Policy</a>
            {" · "}
            <a href="/" className="underline underline-offset-2 hover:text-zinc-400 transition-colors">Back to Gildre.com</a>
          </p>
        </div>

      </div>
    </>
  );
}
