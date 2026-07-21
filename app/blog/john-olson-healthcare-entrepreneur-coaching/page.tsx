import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.gildre.com/blog/john-olson-healthcare-entrepreneur-coaching",
  },
  title:
    "John Olson: From Managing a Billion-Dollar Healthcare Budget to E-Commerce, Real Estate, and Executive Coaching",
  description:
    "John Olson led complex healthcare teams, studied at Wharton, UC Davis, and Stanford, then left to build multiple businesses with his wife. His playbook: invest in peer groups, master delegation, and use the 'Who Not How' framework.",
  keywords: [
    "John Olson",
    "healthcare leadership",
    "entrepreneur coach",
    "peer groups",
    "who not how",
    "e-commerce entrepreneur",
    "executive coaching",
    "leadership development",
    "Wharton leadership",
    "delegation framework",
    "Start to Scale Podcast",
    "Gildre",
  ],
  openGraph: {
    url: "https://www.gildre.com/blog/john-olson-healthcare-entrepreneur-coaching",
    title:
      "John Olson: From Managing a Billion-Dollar Healthcare Budget to E-Commerce, Real Estate, and Executive Coaching",
    description:
      "Healthcare executive. Wharton alum. E-commerce founder. Executive coach. John Olson's journey across four careers — and the peer groups, delegation framework, and mindset shifts that made it possible.",
    type: "article",
    images: ["/images/john-olson-headshot.webp"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "John Olson: From Managing a Billion-Dollar Healthcare Budget to E-Commerce, Real Estate, and Executive Coaching",
  description:
    "John Olson led complex healthcare teams, studied at Wharton, UC Davis, and Stanford, then left to build multiple businesses. His playbook: invest in peer groups, master delegation, and apply the 'Who Not How' framework.",
  image: "https://www.gildre.com/images/john-olson-headshot.webp",
  author: {
    "@type": "Person",
    name: "John Olson",
    jobTitle: "Entrepreneur & Executive Coach",
  },
  publisher: {
    "@type": "Organization",
    name: "Gildre",
    url: "https://www.gildre.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.gildre.com/blog/john-olson-healthcare-entrepreneur-coaching",
  },
  about: [
    { "@type": "Person", name: "John Olson" },
    { "@type": "Organization", name: "Gildre" },
    { "@type": "Organization", name: "Wharton School" },
  ],
  keywords:
    "John Olson, healthcare leadership, entrepreneur coach, peer groups, who not how, delegation, e-commerce, Wharton, Gildre",
};

function Section({ children }: { children: React.ReactNode }) {
  return <div style={{ marginBottom: "2.5rem" }}>{children}</div>;
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        color: "#c8cdd8",
        fontSize: "1.08rem",
        lineHeight: "1.85",
        marginBottom: "1.25rem",
      }}
    >
      {children}
    </p>
  );
}

function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      style={{
        borderLeft: "4px solid #C9A96E",
        paddingLeft: "1.5rem",
        margin: "2rem 0",
        color: "#e8dcc8",
        fontSize: "1.15rem",
        fontStyle: "italic",
        lineHeight: "1.75",
      }}
    >
      {children}
    </blockquote>
  );
}

function KeyFacts({ items }: { items: string[] }) {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0f1a2e 0%, #0a1020 100%)",
        border: "1px solid #C9A96E33",
        borderRadius: "12px",
        padding: "1.75rem 2rem",
        marginBottom: "2.5rem",
      }}
    >
      <p
        style={{
          color: "#C9A96E",
          fontWeight: 700,
          fontSize: "0.8rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          marginBottom: "1rem",
        }}
      >
        John Olson at a Glance
      </p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((item, i) => (
          <li
            key={i}
            style={{
              color: "#c8cdd8",
              fontSize: "0.97rem",
              lineHeight: "1.6",
              paddingBottom: "0.55rem",
              borderBottom:
                i < items.length - 1 ? "1px solid #ffffff0d" : "none",
              marginBottom: i < items.length - 1 ? "0.55rem" : 0,
            }}
          >
            <span style={{ color: "#C9A96E", marginRight: "0.6rem" }}>→</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function JohnOlsonBlog() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main
        style={{
          background: "linear-gradient(180deg, #080e1a 0%, #0a1020 100%)",
          minHeight: "100vh",
          paddingTop: "6rem",
          paddingBottom: "5rem",
        }}
      >
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 1.5rem" }}>

          {/* Tags */}
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
            {["Podcast", "Blog", "Leadership"].map((tag) => (
              <span
                key={tag}
                style={{
                  background: "#C9A96E22",
                  color: "#C9A96E",
                  border: "1px solid #C9A96E44",
                  borderRadius: "20px",
                  padding: "0.3rem 0.85rem",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1
            style={{
              color: "#f0e6d3",
              fontSize: "clamp(1.9rem, 4vw, 2.65rem)",
              fontWeight: 800,
              lineHeight: 1.22,
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            John Olson: From Managing a Billion-Dollar Healthcare Budget to E-Commerce, Real Estate, and Executive Coaching
          </h1>

          {/* Byline */}
          <p style={{ color: "#7a8499", fontSize: "0.9rem", marginBottom: "2.5rem" }}>
            Gildre · Start to Scale Podcast
          </p>

          {/* Opening pull quote */}
          <Quote>
            &ldquo;The moment I realized I was responsible for a billion-dollar budget with almost no formal leadership training was the moment I understood I had to invest in myself — aggressively and immediately.&rdquo;
          </Quote>

          {/* Headshot */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "2.75rem" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "360px",
                aspectRatio: "1 / 1",
                borderRadius: "12px",
                overflow: "hidden",
                border: "2px solid #C9A96E33",
              }}
            >
              <Image
                src="/images/john-olson-headshot.webp"
                alt="John Olson, entrepreneur and executive coach"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                sizes="360px"
                priority
              />
            </div>
          </div>

          {/* Key facts */}
          <KeyFacts
            items={[
              "Former healthcare executive overseeing complex, multi-departmental operations",
              "Studied leadership at Wharton's Healthcare Leadership Initiative, UC Davis, and Stanford",
              "Co-founded and scaled an e-commerce business alongside his wife",
              "Built a diversified portfolio spanning e-commerce, real estate, and services",
              "Executive coach helping entrepreneurs and leaders navigate complexity and growth",
              "Practitioner of the 'Who Not How' delegation framework for scaling without burnout",
              "Active member of Gildre — invests in peer groups as a core leadership strategy",
            ]}
          />

          {/* Section 1 */}
          <Section>
            <h2 style={{ color: "#f0e6d3", fontSize: "1.55rem", fontWeight: 700, marginBottom: "1rem" }}>
              The Pirate Ship Problem: Leading Experts Who Know More Than You
            </h2>
            <Body>
              Healthcare leadership is one of the most underrated proving grounds for business
              founders. You are managing units that operate like autonomous ships — each one led by
              clinical experts who have devoted careers to becoming the best in their specialty. Your
              job is not to be the smartest person in the room. Your job is to be the person who
              makes the room work.
            </Body>
            <Body>
              John Olson learned this early. Walking into healthcare administration as a young leader,
              he found himself responsible for teams of specialists — nurses, physicians, department
              heads — who had decades of domain expertise he would never match. The instinct to
              project authority was a trap. The skill that actually worked was humility: knowing
              what you don&apos;t know, asking the right questions, and building trust with people
              who have no reason to give it to you automatically.
            </Body>
            <Body>
              Then came the moment that changed everything.
            </Body>
          </Section>

          {/* Section 2 */}
          <Section>
            <h2 style={{ color: "#f0e6d3", fontSize: "1.55rem", fontWeight: 700, marginBottom: "1rem" }}>
              The Billion-Dollar Wake-Up Call
            </h2>
            <Body>
              A nurse on John&apos;s team was managing a budget that exceeded one billion dollars.
              She was extraordinarily competent at her clinical work. The financial and operational
              complexity surrounding that responsibility was another matter entirely — and as her
              leader, the accountability ultimately landed with him.
            </Body>
            <Body>
              That realization — the full weight of what he was responsible for versus the formal
              leadership preparation he had received — was the inflection point. Not a crisis, but
              a clarity. He needed to invest in himself with the same seriousness that the
              organization invested in its most critical operations.
            </Body>
            <Quote>
              &ldquo;I stopped waiting for the organization to develop me. I enrolled myself.&rdquo;
            </Quote>
            <Body>
              What followed was a deliberate, structured investment in leadership education. Wharton&apos;s
              Healthcare Leadership Initiative. Formal programs at UC Davis and Stanford. Not for
              the credentials — for the frameworks, the networks, and the discipline of learning
              alongside other high-performing professionals who were asking the same hard questions.
            </Body>
          </Section>

          {/* Inline image — Golden Gate casual */}
          <div style={{ display: "flex", justifyContent: "center", margin: "2.5rem 0" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "480px",
                aspectRatio: "3 / 4",
                borderRadius: "12px",
                overflow: "hidden",
                border: "2px solid #C9A96E33",
              }}
            >
              <Image
                src="/images/john-olson-golden-gate.webp"
                alt="John Olson in San Francisco"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="480px"
              />
            </div>
          </div>

          {/* Section 3 */}
          <Section>
            <h2 style={{ color: "#f0e6d3", fontSize: "1.55rem", fontWeight: 700, marginBottom: "1rem" }}>
              Why Peer Groups Are the Highest-ROI Investment a Leader Can Make
            </h2>
            <Body>
              Alongside formal education, John discovered what he now considers the most
              undervalued tool in any leader&apos;s development stack: the peer group.
            </Body>
            <Body>
              Not networking events. Not LinkedIn. High-quality, curated groups of people who are
              operating at a similar level, facing similar challenges, and committed to being honest
              with each other. Groups like Gildre, where the conversations go beyond surface-level
              business updates into the real problems — the hiring mistake you can&apos;t talk about
              publicly, the strategic decision that keeps you up at night, the blind spot your team
              is too close to see.
            </Body>
            <Body>
              The ROI of a great peer group, John argues, is not measured in advice received. It&apos;s
              measured in decisions made faster, mistakes avoided, and the compounding effect of
              being around people who normalize a higher standard of thinking.
            </Body>
            <Quote>
              &ldquo;Your peer group is one of the most important things you can invest in. The people
              you think with shape what you&apos;re capable of thinking.&rdquo;
            </Quote>
          </Section>

          {/* Section 4 */}
          <Section>
            <h2 style={{ color: "#f0e6d3", fontSize: "1.55rem", fontWeight: 700, marginBottom: "1rem" }}>
              The Entrepreneurial Leap: E-Commerce, Real Estate, and Building With His Wife
            </h2>
            <Body>
              The transition from healthcare administration to entrepreneurship was not impulsive —
              it was the product of years of watching what autonomy looked like in the people he
              admired, and gradually building the conviction that he could create it himself.
            </Body>
            <Body>
              The first major move was e-commerce, built alongside his wife. What started as a
              focused venture grew rapidly, and with it came both the rewards and the real tests
              of entrepreneurship: operational complexity, team-building, the need to move from
              doing to leading at a completely different scale.
            </Body>
            <Body>
              Real estate followed as a natural extension — a different business model with
              different leverage mechanics, different cash flow characteristics, and different
              demands on his attention. Building a portfolio of businesses, John learned something
              that healthcare had only begun to teach him: that the skill separating good operators
              from great ones is not execution. It&apos;s judgment about what to execute yourself
              and what to hand off.
            </Body>
          </Section>

          {/* Section 5 */}
          <Section>
            <h2 style={{ color: "#f0e6d3", fontSize: "1.55rem", fontWeight: 700, marginBottom: "1rem" }}>
              &ldquo;Who, Not How&rdquo;: The Delegation Framework That Changes Everything
            </h2>
            <Body>
              The most common trap for high-achieving founders and executives is the belief that
              their value is in their doing. They are often excellent at a specific set of skills
              — operations, sales, product, finance — and they have built identity and confidence
              around those skills. Letting go feels like risk. It feels like losing control.
            </Body>
            <Body>
              John&apos;s framework for breaking that pattern is simple in principle and hard in practice:
              stop asking <em style={{ color: "#e8dcc8" }}>how</em> to get something done, and start
              asking <em style={{ color: "#e8dcc8" }}>who</em> should own it.
            </Body>

            {[
              {
                num: "01",
                title: "Identify what only you can do",
                body: "Most founders dramatically overestimate how many tasks genuinely require their involvement. Honest accounting of your unique contribution is the first step toward intelligent delegation.",
              },
              {
                num: "02",
                title: "Hire for ownership, not task completion",
                body: "The difference between a great hire and an adequate one is whether they take ownership of outcomes or simply execute instructions. Build teams of owners, not operators.",
              },
              {
                num: "03",
                title: "Define the outcome, not the method",
                body: "Micromanagement is usually disguised as quality control. When you trust the 'who,' you define what done looks like — then get out of the way.",
              },
              {
                num: "04",
                title: "Acknowledge your team publicly",
                body: "John is emphatic about this: the people who built his businesses with him — including his wife — deserve explicit recognition. Credit is not a finite resource. Share it.",
              },
            ].map((item) => (
              <div
                key={item.num}
                style={{ display: "flex", gap: "1.25rem", marginBottom: "1.5rem", alignItems: "flex-start" }}
              >
                <span style={{ color: "#C9A96E", fontWeight: 800, fontSize: "1.1rem", minWidth: "2rem", paddingTop: "0.05rem" }}>
                  {item.num}
                </span>
                <div>
                  <p style={{ color: "#f0e6d3", fontWeight: 700, fontSize: "1rem", marginBottom: "0.35rem" }}>
                    {item.title}
                  </p>
                  <Body>{item.body}</Body>
                </div>
              </div>
            ))}
          </Section>

          {/* Inline image — sunglasses */}
          <div style={{ display: "flex", justifyContent: "center", margin: "2.5rem 0" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "400px",
                aspectRatio: "1 / 1",
                borderRadius: "12px",
                overflow: "hidden",
                border: "2px solid #C9A96E33",
              }}
            >
              <Image
                src="/images/john-olson-sunglasses.webp"
                alt="John Olson at the Golden Gate Bridge"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                sizes="400px"
              />
            </div>
          </div>

          {/* Section 6 */}
          <Section>
            <h2 style={{ color: "#f0e6d3", fontSize: "1.55rem", fontWeight: 700, marginBottom: "1rem" }}>
              The Coaching Calling: Helping Others Navigate What He&apos;s Already Lived Through
            </h2>
            <Body>
              Somewhere in the middle of building businesses and developing his own leadership
              practice, John found a new source of meaning: helping others do what he had done.
            </Body>
            <Body>
              Executive coaching was not a pivot — it was an extension. The skills he had developed
              across healthcare, entrepreneurship, and team-building were exactly the skills that
              other founders and leaders were struggling to acquire. And the satisfaction of watching
              a client make a decision with clarity they didn&apos;t have six months ago turned out to be
              remarkably similar to what he had loved about healthcare: the moment when someone
              becomes more capable than they were before you worked with them.
            </Body>
            <Body>
              The through-line across all four chapters of John&apos;s career — healthcare, e-commerce,
              real estate, coaching — is the same: find the people around you, invest in them
              relentlessly, and build systems that compound their capability over time. The vehicle
              changes. The operating philosophy doesn&apos;t.
            </Body>
          </Section>

          {/* Takeaways box */}
          <div
            style={{
              background: "#0d1525",
              border: "1px solid #C9A96E22",
              borderRadius: "12px",
              padding: "1.75rem 2rem",
              marginBottom: "2.5rem",
            }}
          >
            <p style={{ color: "#C9A96E", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
              What John Would Tell His Younger Self
            </p>
            {[
              "Invest in peer groups before you feel ready — the conversations will accelerate your readiness.",
              "Your humility is an asset. Not knowing is the correct starting point for learning.",
              "The 'who' is almost always more important than the 'how.' Hire for ownership.",
              "Formal education is a tool, not a credential. Use it to build frameworks, not a résumé.",
              "Building with a partner you trust — including a life partner — is a strategic advantage, not a conflict of interest.",
              "The same hunger that drove you to master your craft will drive you to become a great leader — if you channel it deliberately.",
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  paddingBottom: i < 5 ? "0.7rem" : 0,
                  marginBottom: i < 5 ? "0.7rem" : 0,
                  borderBottom: i < 5 ? "1px solid #ffffff0d" : "none",
                  alignItems: "flex-start",
                }}
              >
                <span style={{ color: "#C9A96E", fontSize: "0.85rem", marginTop: "0.15rem", flexShrink: 0 }}>→</span>
                <p style={{ color: "#c8cdd8", fontSize: "0.97rem", lineHeight: "1.65", margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>

          {/* Podcast CTA */}
          <div
            style={{
              background: "linear-gradient(135deg, #1a2540 0%, #0f1a2e 100%)",
              border: "1px solid #C9A96E44",
              borderRadius: "14px",
              padding: "2rem",
              textAlign: "center",
              marginTop: "3rem",
            }}
          >
            <p style={{ color: "#C9A96E", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              Start to Scale Podcast
            </p>
            <p style={{ color: "#f0e6d3", fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.6rem" }}>
              Hear the Full Conversation with John Olson
            </p>
            <p style={{ color: "#7a8499", fontSize: "0.95rem", marginBottom: "1.5rem", lineHeight: 1.6 }}>
              John goes deeper on the billion-dollar budget moment, what Wharton taught him that
              Stanford didn&apos;t, and how he and his wife built multiple businesses in parallel.
            </p>
            <a
              href="https://linktr.ee/starttoscale"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "#C9A96E",
                color: "#080e1a",
                fontWeight: 700,
                fontSize: "0.95rem",
                padding: "0.8rem 2rem",
                borderRadius: "8px",
                textDecoration: "none",
                letterSpacing: "0.03em",
              }}
            >
              Listen to the Episode →
            </a>
          </div>

          {/* Gildre CTA */}
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <p style={{ color: "#7a8499", fontSize: "0.9rem", marginBottom: "0.75rem" }}>
              Want to connect with founders and leaders like John?
            </p>
            <a
              href="/#pricing"
              style={{
                display: "inline-block",
                border: "1px solid #C9A96E",
                color: "#C9A96E",
                fontWeight: 600,
                fontSize: "0.9rem",
                padding: "0.65rem 1.75rem",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              Join Gildre
            </a>
          </div>

        </div>
      </main>
    </>
  );
}
