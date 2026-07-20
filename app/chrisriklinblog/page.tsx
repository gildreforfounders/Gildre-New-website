import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Chris Riklin: How a Decade in Political Tech Led Him to Co-Found Topline — a Meritocratic Marketplace Disrupting Professional Services",
  description:
    "Chris Riklin spent ten years at NationBuilder watching talented professionals lose out to outdated hiring systems. So he co-founded Topline — a frictionless marketplace that lets the best professionals win on merit, not connections.",
  keywords: [
    "Chris Riklin",
    "Topline",
    "professional marketplace",
    "fractional executives",
    "consulting platform",
    "NationBuilder",
    "future of work",
    "meritocratic hiring",
    "startup founder",
    "Gildre",
    "Start to Scale podcast",
  ],
  openGraph: {
    title:
      "Chris Riklin: How a Decade in Political Tech Led Him to Co-Found Topline — a Meritocratic Marketplace Disrupting Professional Services",
    description:
      "Chris Riklin spent ten years at NationBuilder watching talented professionals lose out to outdated hiring systems. So he co-founded Topline — a frictionless marketplace that lets the best professionals win on merit, not connections.",
    type: "article",
    images: ["/images/chris-riklin-headshot.webp"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Chris Riklin: How a Decade in Political Tech Led Him to Co-Found Topline — a Meritocratic Marketplace Disrupting Professional Services",
  description:
    "Chris Riklin spent ten years at NationBuilder watching talented professionals lose out to outdated hiring systems. So he co-founded Topline — a frictionless marketplace that lets the best professionals win on merit, not connections.",
  image: "https://www.gildre.com/images/chris-riklin-headshot.webp",
  author: {
    "@type": "Person",
    name: "Chris Riklin",
    jobTitle: "Co-Founder, Topline",
  },
  publisher: {
    "@type": "Organization",
    name: "Gildre",
    url: "https://www.gildre.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.gildre.com/chrisriklinblog",
  },
  about: [
    { "@type": "Person", name: "Chris Riklin" },
    { "@type": "Organization", name: "Topline" },
    { "@type": "Organization", name: "NationBuilder" },
    { "@type": "Organization", name: "Gildre" },
  ],
  keywords:
    "Chris Riklin, Topline, professional marketplace, meritocratic hiring, fractional executives, NationBuilder, future of work",
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
        Chris Riklin at a Glance
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
              borderBottom: i < items.length - 1 ? "1px solid #ffffff0d" : "none",
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

export default function ChrisRiklinBlog() {
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
            {["Podcast", "Blog", "Entrepreneur"].map((tag) => (
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
            Chris Riklin: How a Decade in Political Tech Led Him to Co-Found Topline — a Meritocratic Marketplace Disrupting Professional Services
          </h1>

          {/* Byline */}
          <p style={{ color: "#7a8499", fontSize: "0.9rem", marginBottom: "2.5rem" }}>
            Gildre · Start to Scale Podcast
          </p>

          {/* Opening pull quote */}
          <Quote>
            "The best professionals don't always win — not because they lack talent, but because current systems rely on outdated processes like resumes, inefficient hiring models, and insular industry networks."
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
                aspectRatio: "1 / 1",
                borderRadius: "12px",
                overflow: "hidden",
                border: "2px solid #C9A96E33",
              }}
            >
              <Image
                src="/images/chris-riklin-headshot.webp"
                alt="Chris Riklin, co-founder of Topline"
                fill
                style={{ objectFit: "cover" }}
                sizes="360px"
              />
            </div>
          </div>

          {/* Key facts */}
          <KeyFacts
            items={[
              "Co-Founder of Topline — a meritocratic marketplace for professional services",
              "10+ years at NationBuilder, a pioneering SaaS platform for communities and political campaigns",
              "Background in political science; studied entrepreneurship at the London School of Economics (LSE)",
              "Saw firsthand how talented professionals lose opportunities to outdated hiring gatekeepers",
              "Topline removes friction for fractional executives, consultants, and freelancers finding clients",
              "Believes the future of work is multi-role, multi-income-stream, and non-linear",
              "Mission: build a platform that empowers professionals globally — one connection at a time",
            ]}
          />

          {/* Section 1: The shift */}
          <Section>
            <h2
              style={{
                color: "#f0e6d3",
                fontSize: "1.55rem",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              The Career Path Nobody Prepared You For
            </h2>
            <Body>
              The idea of a single employer for 30 years is a relic. Today&apos;s professionals juggle
              consulting engagements alongside full-time roles, build personal brands in parallel with
              W-2 jobs, and move fluidly between industries that didn&apos;t exist a decade ago. The
              infrastructure around them, however, hasn&apos;t kept up.
            </Body>
            <Body>
              Resumes still dominate hiring. Referrals still beat merit. LinkedIn connections still
              open more doors than demonstrable results. Chris Riklin watched this play out for years
              inside political tech — watching talented operators miss opportunities not because of
              what they could do, but because of who they happened to know.
            </Body>
            <Body>
              Topline is the platform he and co-founder Alex built to fix that.
            </Body>
          </Section>

          {/* Section 2: NationBuilder decade */}
          <Section>
            <h2
              style={{
                color: "#f0e6d3",
                fontSize: "1.55rem",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              Ten Years at NationBuilder: Learning What Broken Looks Like
            </h2>
            <Body>
              Before Topline, Chris spent over a decade at NationBuilder — a SaaS platform that helped
              political campaigns, nonprofits, and community organizations manage their constituents.
              It was early-stage startup work that gave him an unusually deep view into how
              organizations actually build and leverage professional networks.
            </Body>
            <Body>
              He saw enterprise clients struggling to find specialized consultants through
              traditional channels. He watched talented fractional executives get overlooked because
              their resumes didn&apos;t fit a template. He saw smaller organizations pay outsized fees
              for visibility in professional marketplaces that rewarded incumbency over impact.
            </Body>
            <Body>
              The longer he stayed, the clearer the problem became: the professional services industry
              was ripe for disruption — not with a tweak, but with a fundamentally different model.
            </Body>
          </Section>

          {/* Section 3: The aha moment */}
          <Section>
            <h2
              style={{
                color: "#f0e6d3",
                fontSize: "1.55rem",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              The Serendipitous Co-Founder Match
            </h2>
            <Body>
              Chris had been circling the problem independently — running an entrepreneurship program
              at the London School of Economics and working through what a modern professional
              marketplace could look like. Then his future co-founder Alex sent him a deck.
            </Body>
            <Quote>
              "When Alex shared the original Topline deck, it was almost identical to the project
              I worked on during my entrepreneurship program at LSE. It was clear we were aligned
              on solving a massive, global problem."
            </Quote>
            <Body>
              That alignment — on the problem, the target market, and the long-term ambition —
              is the foundation most co-founder relationships collapse without. For Topline, it was
              present from day one. Two people had independently arrived at the same diagnosis. That&apos;s
              a signal worth acting on.
            </Body>
          </Section>

          {/* Section 4: How Topline works */}
          <Section>
            <h2
              style={{
                color: "#f0e6d3",
                fontSize: "1.55rem",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              How Topline Actually Works
            </h2>
            <Body>
              Topline is a marketplace with an embedded SaaS layer — think less job board, more
              operating system for independent professional services. Four mechanisms make it different
              from what came before:
            </Body>

            {[
              {
                num: "01",
                title: "Meritocratic Profiles",
                body: "Professionals display their expertise through a transparent, structured profile that lets potential clients evaluate work directly — not just read a resume bullet point.",
              },
              {
                num: "02",
                title: "One Subscription, Full Toolkit",
                body: "A single subscription unlocks marketing tools, client management, and networking features. No paying per connection or per visibility boost.",
              },
              {
                num: "03",
                title: "Community Distribution",
                body: "Topline partners with industry associations, chambers of commerce, and niche networking groups — bringing the platform directly to professionals in communities they already trust.",
              },
              {
                num: "04",
                title: "Quantified Value Exchange",
                body: "Professionals can set consultation and collaboration rates, creating a transparent market for expertise and establishing mutual value before a longer engagement begins.",
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
          </Section>

          {/* Section 5: Who it's for */}
          <Section>
            <h2
              style={{
                color: "#f0e6d3",
                fontSize: "1.55rem",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              Who Topline Is Built For
            </h2>
            <Body>
              The platform is particularly powerful for fractional executives, independent consultants,
              and freelancers who spend too much time and money on self-promotion relative to their
              actual work. A fractional CTO, a cybersecurity consultant, a growth advisor — these
              professionals have valuable expertise and strong track records, but traditional
              discovery mechanisms (expensive ads, cold LinkedIn outreach, conference attendance)
              are slow, costly, and hit-or-miss.
            </Body>
            <Body>
              Topline offers a direct line between expertise and client — removing the middlemen who
              inflate cost without adding value, and letting quality speak for itself through
              structured, comparable profiles.
            </Body>
            <Quote>
              "I&apos;ve always believed in taking big swings. If you&apos;re going to do something,
              it should be impactful on a large scale. And for me, that means building something
              global — a platform that can truly change how people grow their careers."
            </Quote>
          </Section>

          {/* Section 6: Lessons */}
          <Section>
            <h2
              style={{
                color: "#f0e6d3",
                fontSize: "1.55rem",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              The Lesson Behind the Risk
            </h2>
            <Body>
              Leaving a decade-long career at a recognized company is not a small decision. For Chris,
              the logic was straightforward even if the leap wasn&apos;t: the best time to build
              something is when you understand the problem better than anyone else, and the window
              for doing it is now. Ten years at NationBuilder didn&apos;t just give him product and
              sales experience — it gave him an intimate understanding of a broken market and a
              clear picture of what the fix looked like.
            </Body>
            <Body>
              His path — political science to political tech to enterprise SaaS to startup co-founder
              — isn&apos;t the kind you plan. It&apos;s the kind that emerges when you stay curious,
              stay close to real problems, and say yes to collaborations that align on something big.
            </Body>
          </Section>

          {/* Section 7: What's next */}
          <Section>
            <h2
              style={{
                color: "#f0e6d3",
                fontSize: "1.55rem",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              What&apos;s Next for Topline
            </h2>
            <Body>
              Topline&apos;s near-term focus is on deepening partnerships with industry associations
              and local business communities — channels that already aggregate the kind of
              professionals the platform serves. Rather than fighting for organic SEO traffic or
              paying to acquire users cold, the strategy is to embed Topline into ecosystems where
              trust already exists.
            </Body>
            <Body>
              Long-term, the mission is unchanged: give every professional — regardless of their
              network, zip code, or career path — a fair shot at winning the work they deserve.
              Merit over incumbency. Results over relationships.
            </Body>
            <Quote>
              "Building something impactful requires a community of people who believe in the same
              mission. At Topline, we&apos;re creating that community — one connection at a time."
            </Quote>
          </Section>

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
              Hear the Full Story from Chris Riklin
            </p>
            <p
              style={{
                color: "#7a8499",
                fontSize: "0.95rem",
                marginBottom: "1.5rem",
                lineHeight: 1.6,
              }}
            >
              Chris goes deep on the NationBuilder decade, the co-founder alignment story,
              and the mechanics behind Topline&apos;s community distribution strategy.
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
              Listen to the Podcast →
            </a>
          </div>

          {/* Gildre CTA */}
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <p style={{ color: "#7a8499", fontSize: "0.9rem", marginBottom: "0.75rem" }}>
              Want to connect with founders like Chris?
            </p>
            <a
              href="/membership"
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
