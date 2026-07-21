import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.gildre.com/blog/elise-madrick-cerene-executive-transformation",
  },
  title:
    "Elise Madrick on Why Real Transformation Requires Changing Your Entire Context — Not Just Your Habits",
  description:
    "Elise Madrick left a career in executive education at Kellogg to found Cerenè — an immersive 108-day transformation program that takes leaders to Morocco and France to become someone new. Here's what she learned.",
  keywords: [
    "Elise Madrick",
    "Cerenè",
    "executive transformation",
    "leadership reinvention",
    "immersive leadership program",
    "executive coaching",
    "personal transformation",
    "founder story",
    "Start to Scale Podcast",
    "Gildre",
    "Kellogg executive education",
  ],
  openGraph: {
    url: "https://www.gildre.com/blog/elise-madrick-cerene-executive-transformation",
    title:
      "Elise Madrick on Why Real Transformation Requires Changing Your Entire Context — Not Just Your Habits",
    description:
      "Elise Madrick left Kellogg executive education to found Cerenè — 108-day immersive transformation journeys to Morocco and France. What separates change from true reinvention.",
    type: "article",
    images: ["/images/elise-madrick-headshot.webp"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Elise Madrick on Why Real Transformation Requires Changing Your Entire Context — Not Just Your Habits",
  description:
    "Elise Madrick left a career in executive education at Kellogg to found Cerenè — an immersive 108-day transformation program that takes leaders to Morocco and France to become someone new.",
  image: "https://www.gildre.com/images/elise-madrick-headshot.webp",
  author: {
    "@type": "Person",
    name: "Elise Madrick",
    jobTitle: "Founder & CEO, Cerenè",
  },
  publisher: {
    "@type": "Organization",
    name: "Gildre",
    url: "https://www.gildre.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.gildre.com/blog/elise-madrick-cerene-executive-transformation",
  },
  about: [
    { "@type": "Person", name: "Elise Madrick" },
    { "@type": "Organization", name: "Cerenè" },
    { "@type": "Organization", name: "Kellogg School of Management" },
    { "@type": "Organization", name: "Gildre" },
  ],
  keywords:
    "Elise Madrick, Cerenè, executive transformation, leadership reinvention, immersive coaching, Kellogg, Morocco, France",
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
        Elise Madrick at a Glance
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

export default function EliseMadrickBlog() {
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

          {/* Category tags */}
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
            Elise Madrick on Why Real Transformation Requires Changing Your Entire Context — Not Just Your Habits
          </h1>

          {/* Byline */}
          <p style={{ color: "#7a8499", fontSize: "0.9rem", marginBottom: "2.5rem" }}>
            Gildre · Start to Scale Podcast
          </p>

          {/* Opening pull quote */}
          <Quote>
            &ldquo;If you want to become a new human, you have to enroll others to help illuminate your blind spots. Pride and the fear of vulnerability are the two things most likely to keep you stuck.&rdquo;
          </Quote>

          {/* Headshot */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "2.75rem",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "360px",
                aspectRatio: "3 / 4",
                borderRadius: "12px",
                overflow: "hidden",
                border: "2px solid #C9A96E33",
              }}
            >
              <Image
                src="/images/elise-madrick-headshot.webp"
                alt="Elise Madrick, founder and CEO of Cerenè"
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
              "Founder & CEO of Cerenè — immersive 108-day executive transformation experiences",
              "Former executive education faculty at Kellogg School of Management",
              "Background in clinical social work and child welfare advocacy",
              "Spent years training thousands of leaders across global organizations",
              "Founded Cerenè after her own six-week international transformation journey",
              "Flagship programs run in Morocco and France with 108 days of follow-on coaching",
              "Mission: help leaders and professionals become genuinely new versions of themselves",
            ]}
          />

          {/* Section 1 */}
          <Section>
            <h2
              style={{
                color: "#f0e6d3",
                fontSize: "1.55rem",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              The Distance Between Change and Transformation
            </h2>
            <Body>
              Most people trying to reinvent themselves go about it the wrong way. They read a book,
              adopt a new morning routine, or hire a coach. They make incremental adjustments to
              the existing version of themselves. And then they wonder why, six months later, nothing
              has fundamentally shifted.
            </Body>
            <Body>
              Elise Madrick has spent her career studying why that gap exists — and building a program
              designed to close it. Her company, Cerenè, runs immersive eight-day experiences in
              Morocco and France, followed by 108 days of structured skill-building and community
              support. The premise is simple but counterintuitive: you cannot become someone new
              inside the same context that created the old version of you.
            </Body>
            <Body>
              &ldquo;Change is past-based and incremental,&rdquo; Elise explains. &ldquo;Transformation is
              future-oriented. It&apos;s about becoming a person you haven&apos;t been yet. Those are
              two completely different operations.&rdquo;
            </Body>
          </Section>

          {/* Section 2 */}
          <Section>
            <h2
              style={{
                color: "#f0e6d3",
                fontSize: "1.55rem",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              From Indiana to Kellogg to a Six-Week Journey Overseas
            </h2>
            <Body>
              Elise grew up in Zionsville, Indiana — not an obvious starting point for a global
              executive transformation business. She studied social work, spent years in child welfare
              advocacy, and eventually found her way into executive education at the Kellogg School
              of Management, where she helped train thousands of leaders across industries and
              continents.
            </Body>
            <Body>
              She was good at the work. But she was also, by her own account, personally stuck —
              in an unfulfilling marriage, in routines that no longer served her, in a version of
              herself she had outgrown. The turning point came when she gave herself permission to
              do something radical: step completely outside her life and spend six weeks traveling
              internationally without an agenda.
            </Body>
            <Quote>
              &ldquo;I needed to become a totally different human. Not just a better version of the
              same one — a different one. And I couldn&apos;t do that inside my existing context.&rdquo;
            </Quote>
            <Body>
              That journey became the founding insight behind Cerenè. What Elise discovered wasn&apos;t
              just that travel was restorative — it was that removing yourself from your environment
              makes it structurally easier to break patterns, because the cues and triggers that
              maintain those patterns are no longer present.
            </Body>
          </Section>

          {/* Inline image */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2.5rem 0",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "480px",
                aspectRatio: "1 / 1",
                borderRadius: "12px",
                overflow: "hidden",
                border: "2px solid #C9A96E33",
              }}
            >
              <Image
                src="/images/elise-madrick-laughing.webp"
                alt="Elise Madrick at a Gildre event"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                sizes="480px"
              />
            </div>
          </div>

          {/* Section 3 */}
          <Section>
            <h2
              style={{
                color: "#f0e6d3",
                fontSize: "1.55rem",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              The Four Contexts That Control Who You Are
            </h2>
            <Body>
              Elise&apos;s framework for transformation rests on a straightforward but underappreciated
              insight: your behavior is shaped less by your intentions than by the four contexts
              that surround you every day.
            </Body>

            {[
              {
                num: "01",
                title: "Systems — the rules you live by",
                body: "Every environment comes with implicit and explicit rules. When you leave that environment, those rules lose their grip. New contexts invite new operating frameworks.",
              },
              {
                num: "02",
                title: "Spaces — your physical environment",
                body: "The rooms you occupy, the cities you navigate, the landscapes you move through — all of these influence your nervous system, your energy, and the mental models you default to.",
              },
              {
                num: "03",
                title: "Social — the people around you",
                body: "Your peer group is one of the strongest predictors of your behavior and ambition. New social environments expose you to people who carry different assumptions about what is possible.",
              },
              {
                num: "04",
                title: "Mindset — the lens you see through",
                body: "Mindset is often treated as something you change by thinking differently. In reality, mindset shifts most reliably when the other three contexts shift first. Change the environment; the mindset follows.",
              },
            ].map((item) => (
              <div
                key={item.num}
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  marginBottom: "1.5rem",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: "#C9A96E",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    minWidth: "2rem",
                    paddingTop: "0.05rem",
                  }}
                >
                  {item.num}
                </span>
                <div>
                  <p
                    style={{
                      color: "#f0e6d3",
                      fontWeight: 700,
                      fontSize: "1rem",
                      marginBottom: "0.35rem",
                    }}
                  >
                    {item.title}
                  </p>
                  <Body>{item.body}</Body>
                </div>
              </div>
            ))}

            <Body>
              Cerenè is designed to disrupt all four simultaneously — which is why eight days in
              Morocco or France produce more durable change than a year of incremental self-improvement
              at home.
            </Body>
          </Section>

          {/* Section 4 */}
          <Section>
            <h2
              style={{
                color: "#f0e6d3",
                fontSize: "1.55rem",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              The Cerenè Experience: 108 Days, Three Phases
            </h2>
            <Body>
              The number 108 is not arbitrary — it comes from the 108 beads of a mala, an ancient
              counting tool used in meditation traditions to track progress over extended practice.
              Cerenè&apos;s programs use 108 days as the unit of transformation: long enough for new
              behaviors to become habitual, short enough to feel urgent.
            </Body>
            <Body>
              Each journey moves through three phases:
            </Body>

            {[
              {
                phase: "Cocoon",
                subtitle: "Self-discovery (Days 1–36)",
                body: "Participants slow down, examine the stories they&apos;ve been telling about themselves, and begin identifying the skills, relationships, or beliefs they want to shed or build. The in-person retreat happens here.",
              },
              {
                phase: "Emergence",
                subtitle: "Action (Days 37–72)",
                body: "The skill each participant chose becomes the focus. Weekly touchpoints, peer challenges, and one-on-one coaching keep momentum alive after the retreat ends. Community is the accountability structure.",
              },
              {
                phase: "Mastery",
                subtitle: "Teaching others (Days 73–108)",
                body: "The deepest form of learning is teaching. By the end of the 108 days, participants share what they&apos;ve built with their community — cementing the skill and closing the loop on their journey.",
              },
            ].map((item) => (
              <div
                key={item.phase}
                style={{
                  background: "#0d1525",
                  border: "1px solid #ffffff0d",
                  borderLeft: "3px solid #C9A96E",
                  borderRadius: "8px",
                  padding: "1.25rem 1.5rem",
                  marginBottom: "1rem",
                }}
              >
                <p style={{ color: "#f0e6d3", fontWeight: 700, fontSize: "1rem", marginBottom: "0.2rem" }}>
                  {item.phase}
                  <span style={{ color: "#7a8499", fontWeight: 400, fontSize: "0.9rem", marginLeft: "0.5rem" }}>
                    — {item.subtitle}
                  </span>
                </p>
                <p style={{ color: "#c8cdd8", fontSize: "0.97rem", lineHeight: "1.75", margin: 0 }}>
                  {item.body}
                </p>
              </div>
            ))}

            <Body>
              One participant — a sales executive who had spent decades in a career that paid well
              but didn&apos;t fit — used his 108 days to reignite a childhood passion for acting he had
              buried at 22. By the end, he had performed in a short film. That is what Cerenè is
              built for: not incremental optimization, but genuine reinvention.
            </Body>
          </Section>

          {/* Section 5 */}
          <Section>
            <h2
              style={{
                color: "#f0e6d3",
                fontSize: "1.55rem",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              Who Cerenè Is Built For
            </h2>
            <Body>
              Cerenè is not a retreat for people who need a vacation. It is a program for professionals
              who are in genuine transition — starting a business, navigating a career shift, emerging
              from a significant personal disruption, or stepping into a new life chapter like retirement.
            </Body>
            <Body>
              The community includes founders, executives, and lifelong learners who share two
              qualities: a commitment to their own growth, and a willingness to actively support
              others on the same journey. Cerenè is selective about who it admits because the
              quality of the community is inseparable from the quality of the transformation.
            </Body>
            <Quote>
              &ldquo;The people around you during a transformation either accelerate it or slow it down.
              We&apos;re very intentional about building a community where everyone is rowing in the
              same direction — toward becoming someone they haven&apos;t been yet.&rdquo;
            </Quote>
          </Section>

          {/* Section 6 */}
          <Section>
            <h2
              style={{
                color: "#f0e6d3",
                fontSize: "1.55rem",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              Five Things You Can Do Right Now
            </h2>
            <Body>
              Not everyone is ready to book a flight to Morocco. Elise offers five starting points
              for anyone who wants to begin the process of genuine reinvention today:
            </Body>

            {[
              {
                num: "01",
                title: "Ask someone what they see for you",
                body: "Reach out to a trusted friend, colleague, or mentor and ask: &ldquo;What do you see for me that I might be missing?&rdquo; Most people are surprised by what comes back. Others can often see your potential more clearly than you can.",
              },
              {
                num: "02",
                title: "Map your triggers",
                body: "Notice what consistently produces joy, energy, or discomfort in your daily life. Don&apos;t just observe — write it down. Self-inquiry only compounds when it&apos;s recorded.",
              },
              {
                num: "03",
                title: "Enroll at least one person in your reinvention",
                body: "Tell someone specific what you&apos;re trying to become. Vulnerability creates accountability. And accountability is the infrastructure that transformation runs on.",
              },
              {
                num: "04",
                title: "Change one context this week",
                body: "Work from a different location. Have coffee with someone outside your usual circle. Walk a different route. Small context shifts train your brain to notice new possibilities.",
              },
              {
                num: "05",
                title: "Commit to a 108-day skill",
                body: "Pick one skill — something that matters to the future version of you, not the current one — and commit 108 days to it. Tell someone. Then start.",
              },
            ].map((item) => (
              <div
                key={item.num}
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  marginBottom: "1.5rem",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: "#C9A96E",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    minWidth: "2rem",
                    paddingTop: "0.05rem",
                  }}
                >
                  {item.num}
                </span>
                <div>
                  <p
                    style={{
                      color: "#f0e6d3",
                      fontWeight: 700,
                      fontSize: "1rem",
                      marginBottom: "0.35rem",
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      color: "#c8cdd8",
                      fontSize: "1.08rem",
                      lineHeight: "1.85",
                      margin: 0,
                    }}
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                </div>
              </div>
            ))}
          </Section>

          {/* Cerenè CTA */}
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
            <p
              style={{
                color: "#C9A96E",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Cerenè Executive Experiences
            </p>
            <p
              style={{
                color: "#f0e6d3",
                fontSize: "1.2rem",
                fontWeight: 700,
                marginBottom: "0.6rem",
              }}
            >
              Ready to become unrecognizable — in the best way?
            </p>
            <p
              style={{
                color: "#7a8499",
                fontSize: "0.95rem",
                marginBottom: "1.5rem",
                lineHeight: 1.6,
              }}
            >
              Eight days in Morocco or France, followed by 108 days of guided skill-building
              and community support. No equity. No shortcuts. Just transformation.
            </p>
            <a
              href="https://www.cerene.life/experiences"
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
              Explore Cerenè Experiences →
            </a>
          </div>

          {/* Podcast CTA */}
          <div
            style={{
              background: "linear-gradient(135deg, #12192c 0%, #0a1020 100%)",
              border: "1px solid #ffffff0f",
              borderRadius: "14px",
              padding: "2rem",
              textAlign: "center",
              marginTop: "1.25rem",
            }}
          >
            <p
              style={{
                color: "#C9A96E",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Start to Scale Podcast
            </p>
            <p
              style={{
                color: "#f0e6d3",
                fontSize: "1.2rem",
                fontWeight: 700,
                marginBottom: "0.6rem",
              }}
            >
              Hear the Full Conversation with Elise Madrick
            </p>
            <p
              style={{
                color: "#7a8499",
                fontSize: "0.95rem",
                marginBottom: "1.5rem",
                lineHeight: 1.6,
              }}
            >
              Elise goes deeper on the four contexts, the 108-day methodology, and the personal
              journey that led her from Kellogg to founding Cerenè.
            </p>
            <a
              href="https://linktr.ee/starttoscale"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "transparent",
                color: "#C9A96E",
                fontWeight: 700,
                fontSize: "0.95rem",
                padding: "0.75rem 2rem",
                borderRadius: "8px",
                textDecoration: "none",
                letterSpacing: "0.03em",
                border: "1px solid #C9A96E",
              }}
            >
              Listen to the Episode →
            </a>
          </div>

          {/* Gildre CTA */}
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <p style={{ color: "#7a8499", fontSize: "0.9rem", marginBottom: "0.75rem" }}>
              Want to connect with founders and leaders like Elise?
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
