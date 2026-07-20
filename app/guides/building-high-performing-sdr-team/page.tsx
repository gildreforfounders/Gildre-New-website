import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.gildre.com/guides/building-high-performing-sdr-team" },
  title:
    "The Founder's Playbook for Building a High-Performing SDR Team — From First Hire to Hypergrowth",
  description:
    "A failed SDR hire costs $27K–$48K — and that's before counting the pipeline you never built. This guide covers the hiring framework, training split, metrics that matter, daily rhythm, and culture system that high-performing SDR teams actually use.",
  keywords: [
    "SDR team",
    "building SDR team",
    "sales development representative",
    "SDR hiring",
    "B2B sales playbook",
    "outbound sales team",
    "pipeline generation",
    "sales metrics",
    "SDR training",
    "Aaron Ross Salesforce",
    "startup sales team",
    "Gildre",
  ],
  openGraph: {
    url: "https://www.gildre.com/guides/building-high-performing-sdr-team",
    title:
      "The Founder's Playbook for Building a High-Performing SDR Team — From First Hire to Hypergrowth",
    description:
      "A failed SDR hire costs $27K–$48K — and that's before counting the pipeline you never built. The hiring framework, training split, metrics, and culture system that top SDR teams use.",
    type: "article",
    images: ["/images/sdr-team-meeting.webp"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "The Founder's Playbook for Building a High-Performing SDR Team — From First Hire to Hypergrowth",
  description:
    "A failed SDR hire costs $27K–$48K — and that's before counting the pipeline you never built. This guide covers the hiring framework, training split, metrics that matter, daily rhythm, and culture system that high-performing SDR teams actually use.",
  image: "https://www.gildre.com/images/sdr-team-meeting.webp",
  author: {
    "@type": "Organization",
    name: "Gildre",
    url: "https://www.gildre.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Gildre",
    url: "https://www.gildre.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.gildre.com/guides/building-high-performing-sdr-team",
  },
  about: [
    { "@type": "Thing", name: "Sales Development Representatives" },
    { "@type": "Thing", name: "B2B Sales" },
    { "@type": "Thing", name: "Pipeline Generation" },
    { "@type": "Organization", name: "Gildre" },
  ],
  keywords:
    "SDR team, building SDR team, sales development representative, SDR hiring, B2B sales, pipeline generation, outbound sales",
};

/* ── Helper components ── */

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        color: "#f0e6d3",
        fontSize: "1.55rem",
        fontWeight: 700,
        marginBottom: "1rem",
        marginTop: "2.75rem",
        letterSpacing: "-0.01em",
      }}
    >
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        color: "#e8dcc8",
        fontSize: "1.1rem",
        fontWeight: 700,
        marginBottom: "0.6rem",
        marginTop: "1.75rem",
      }}
    >
      {children}
    </h3>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        color: "#c8cdd8",
        fontSize: "1.05rem",
        lineHeight: "1.85",
        marginBottom: "1.15rem",
      }}
    >
      {children}
    </p>
  );
}

function Quote({ children, attribution }: { children: React.ReactNode; attribution?: string }) {
  return (
    <div style={{ margin: "2rem 0" }}>
      <blockquote
        style={{
          borderLeft: "4px solid #C9A96E",
          paddingLeft: "1.5rem",
          color: "#e8dcc8",
          fontSize: "1.1rem",
          fontStyle: "italic",
          lineHeight: "1.75",
          margin: 0,
        }}
      >
        {children}
      </blockquote>
      {attribution && (
        <p
          style={{
            color: "#7a8499",
            fontSize: "0.85rem",
            paddingLeft: "1.5rem",
            marginTop: "0.5rem",
          }}
        >
          — {attribution}
        </p>
      )}
    </div>
  );
}

function Callout({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0f1a2e 0%, #0a1020 100%)",
        border: "1px solid #C9A96E33",
        borderRadius: "10px",
        padding: "1.5rem 1.75rem",
        margin: "1.75rem 0",
      }}
    >
      {title && (
        <p
          style={{
            color: "#C9A96E",
            fontWeight: 700,
            fontSize: "0.78rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
          }}
        >
          {title}
        </p>
      )}
      <div style={{ color: "#c8cdd8", fontSize: "0.97rem", lineHeight: "1.75" }}>{children}</div>
    </div>
  );
}

function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "#1a0a0a",
        border: "1px solid #8B2222",
        borderLeft: "4px solid #cc3333",
        borderRadius: "8px",
        padding: "1.25rem 1.5rem",
        margin: "1.5rem 0",
        color: "#e8c8c8",
        fontSize: "0.97rem",
        lineHeight: "1.7",
      }}
    >
      <span style={{ fontWeight: 700, color: "#cc3333", marginRight: "0.5rem" }}>⚠ Watch out:</span>
      {children}
    </div>
  );
}

function StatBar({ label, value, pct }: { label: string; value: string; pct: number }) {
  return (
    <div style={{ marginBottom: "1.1rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "0.35rem",
          alignItems: "baseline",
        }}
      >
        <span style={{ color: "#e8dcc8", fontSize: "0.95rem", fontWeight: 600 }}>{label}</span>
        <span style={{ color: "#C9A96E", fontSize: "0.9rem", fontWeight: 700 }}>{value}</span>
      </div>
      <div
        style={{
          background: "#1a2540",
          borderRadius: "4px",
          height: "8px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            background: "linear-gradient(90deg, #C9A96E, #e8c87a)",
            width: `${pct}%`,
            height: "100%",
            borderRadius: "4px",
          }}
        />
      </div>
    </div>
  );
}

function ToolPill({ label }: { label: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        background: "#1a2540",
        border: "1px solid #C9A96E44",
        color: "#C9A96E",
        borderRadius: "6px",
        padding: "0.3rem 0.75rem",
        fontSize: "0.83rem",
        fontWeight: 600,
        marginRight: "0.4rem",
        marginBottom: "0.4rem",
      }}
    >
      {label}
    </span>
  );
}

export default function SDRTeam() {
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
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 1.5rem" }}>

          {/* Tags */}
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
            {["Sales", "Revenue"].map((tag) => (
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
              lineHeight: 1.2,
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            The Founder&apos;s Playbook for Building a High-Performing SDR Team — From First Hire to Hypergrowth
          </h1>

          <p style={{ color: "#7a8499", fontSize: "0.9rem", marginBottom: "2.5rem" }}>
            Gildre · Sales &amp; Revenue · 11 min read
          </p>

          {/* Hero image */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 9",
              borderRadius: "12px",
              overflow: "hidden",
              marginBottom: "2.5rem",
              border: "1px solid #ffffff10",
            }}
          >
            <Image
              src="/images/sdr-team-meeting.webp"
              alt="SDR team in a sales meeting"
              fill
              style={{ objectFit: "cover" }}
              sizes="800px"
              priority
            />
          </div>

          {/* Intro */}
          <Body>
            In 2011, Aaron Ross cracked the code on predictable revenue at Salesforce by separating
            prospecting from closing — creating what we now know as the modern SDR role. The results
            were so dramatic that they became the template for nearly every B2B sales org built since.
          </Body>
          <Body>
            But here&apos;s what the case studies leave out: the model only works when the team is built
            right. The average cost of a failed SDR hire runs between $27,000 and $48,000. And that
            number doesn&apos;t account for the pipeline never built, the deals never sourced, or the
            momentum killed while you backfill the role.
          </Body>
          <Body>
            This guide covers what the top-performing SDR teams actually do differently — across
            hiring, training, metrics, daily rhythm, and culture.
          </Body>

          {/* Impact stats */}
          <Callout title="What a well-structured SDR team delivers">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem" }}>
              {[
                { stat: "2.7×", label: "Higher pipeline generation vs. unstructured teams" },
                { stat: "35%", label: "Shorter average sales cycles" },
                { stat: "28%", label: "Higher close rates across the funnel" },
              ].map((item) => (
                <div key={item.stat} style={{ textAlign: "center" }}>
                  <p
                    style={{
                      color: "#C9A96E",
                      fontSize: "2rem",
                      fontWeight: 800,
                      marginBottom: "0.4rem",
                    }}
                  >
                    {item.stat}
                  </p>
                  <p style={{ color: "#7a8499", fontSize: "0.85rem", lineHeight: 1.4, margin: 0 }}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </Callout>

          {/* Section 1: Hiring */}
          <H2>Part 1: Hiring for Potential, Not Just Experience</H2>
          <Body>
            Drop the "3+ years of SDR experience" requirement. The resume tells you what someone has
            done. It says nothing about whether they can handle rejection, absorb new information fast,
            or genuinely care about solving customer problems — the three things that actually predict
            SDR performance.
          </Body>
          <Body>
            The best SDR hires share three core attributes. Here&apos;s what each one looks like in
            practice and how to surface it in an interview:
          </Body>

          {/* Three attributes */}
          {[
            {
              title: "Learning Agility",
              subtitle: "Can they absorb and apply new information fast?",
              body: "SDRs face new objections, new products, and new markets constantly. The ones who thrive aren't the ones with the best script — they're the ones who can adapt mid-conversation. One founder described interviewing a candidate with zero sales experience who spent the night before memorizing the entire product offering and came in with a mock presentation. That's the attribute you're hiring for.",
              green: [
                "Studies unfamiliar material before the interview",
                "Asks clarifying questions rather than guessing",
                "Gives examples of pivoting strategy mid-project",
              ],
              red: [
                "Deflects unfamiliar topics with vague answers",
                "Relies on scripted answers that don't adapt to follow-up",
              ],
            },
            {
              title: "Resilience",
              subtitle: "How do they respond to rejection — not if, but how?",
              body: "Sales development is structurally weighted toward 'no.' The top performers aren't the ones who don't feel rejection — they're the ones who process it faster and get back on the phone. You're not looking for someone who claims rejection doesn't bother them. You're looking for someone who has a real mechanism for handling it.",
              green: [
                "Talks about past failures with specificity and what they changed",
                "Maintains energy and humor after a tough role-play",
                "Frames obstacles as problems to solve, not reasons to stop",
              ],
              red: [
                "Blames external factors for past setbacks",
                "Visibly deflates after negative feedback in the interview",
              ],
            },
            {
              title: "Curiosity",
              subtitle: "Are they genuinely interested in the customer's world?",
              body: "The best SDRs are detectives. They ask questions that reveal they've done homework on the prospect's business before the call. You can't train curiosity — but you can absolutely spot it. It shows up in the quality of the questions they ask you during the interview, not just the quality of the answers they give.",
              green: [
                "Asks about the ICP before asking about the compensation structure",
                "Has done research on your company beyond the homepage",
                "Brings up a customer pain point they read about in your space",
              ],
              red: [
                "Questions are generic (\"What does a typical day look like?\")",
                "Shows no interest in who the customer actually is",
              ],
            },
          ].map((attr) => (
            <div
              key={attr.title}
              style={{
                background: "#0d1428",
                border: "1px solid #ffffff0d",
                borderRadius: "10px",
                padding: "1.5rem",
                marginBottom: "1.25rem",
              }}
            >
              <p
                style={{
                  color: "#C9A96E",
                  fontWeight: 700,
                  fontSize: "1rem",
                  marginBottom: "0.2rem",
                }}
              >
                {attr.title}
              </p>
              <p
                style={{
                  color: "#7a8499",
                  fontSize: "0.88rem",
                  marginBottom: "0.85rem",
                  fontStyle: "italic",
                }}
              >
                {attr.subtitle}
              </p>
              <p
                style={{
                  color: "#c8cdd8",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  marginBottom: "1rem",
                }}
              >
                {attr.body}
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <p
                    style={{
                      color: "#2a9a5a",
                      fontWeight: 700,
                      fontSize: "0.78rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Green flags
                  </p>
                  <ul style={{ margin: 0, paddingLeft: "1.1rem" }}>
                    {attr.green.map((g) => (
                      <li
                        key={g}
                        style={{ color: "#c8e8d8", fontSize: "0.88rem", lineHeight: 1.6 }}
                      >
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p
                    style={{
                      color: "#cc3333",
                      fontWeight: 700,
                      fontSize: "0.78rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Red flags
                  </p>
                  <ul style={{ margin: 0, paddingLeft: "1.1rem" }}>
                    {attr.red.map((r) => (
                      <li
                        key={r}
                        style={{ color: "#e8c8c8", fontSize: "0.88rem", lineHeight: 1.6 }}
                      >
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          {/* Section 2: Training */}
          <H2>Part 2: The Training Split That Most Teams Get Backwards</H2>
          <Body>
            Most SDR training programs spend 80% of time on product knowledge. Top-performing teams
            invert this. Here&apos;s the ratio that actually moves the needle:
          </Body>

          <div
            style={{
              background: "#0d1428",
              border: "1px solid #ffffff0d",
              borderRadius: "10px",
              padding: "1.5rem 1.75rem",
              margin: "1.5rem 0 2rem",
            }}
          >
            <StatBar label="Psychology of Sales" value="50%" pct={50} />
            <StatBar label="Product Knowledge" value="30%" pct={30} />
            <StatBar label="Technical Proficiency" value="20%" pct={20} />
          </div>

          <Body>
            The psychology component — how buyers think, what triggers trust, how to handle
            objections without sounding scripted, how to build rapport in 30 seconds — is what
            separates the SDR who books meetings from the one who fills a CRM with empty activities.
          </Body>

          <Warning>
            Heavy product training early creates SDRs who talk at prospects instead of listening to
            them. Lead with psychology. Product knowledge is easy to add; the ability to read a
            conversation is hard to train after habits form.
          </Warning>

          <H3>Training Timeline by Week</H3>
          <div style={{ overflowX: "auto", margin: "1rem 0 1.75rem" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.92rem",
                color: "#c8cdd8",
              }}
            >
              <thead>
                <tr>
                  {["Week", "Focus", "Key Deliverable"].map((h) => (
                    <th
                      key={h}
                      style={{
                        background: "#1a2540",
                        color: "#C9A96E",
                        padding: "0.75rem 1rem",
                        textAlign: "left",
                        fontWeight: 700,
                        fontSize: "0.82rem",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        border: "1px solid #ffffff10",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Week 1", "ICP deep-dive + buyer psychology", "Written ICP profile and 3 common objections with responses"],
                  ["Week 2", "Core product and competitive landscape", "Pitch the product to the team — as a prospect would hear it"],
                  ["Week 3", "Prospecting mechanics + outreach sequencing", "First live sequence built and sent to 20 prospects"],
                  ["Week 4", "Call coaching + objection role-play", "5 recorded calls reviewed with manager feedback"],
                  ["Week 5+", "Live with feedback loops", "Weekly metrics review + loss analysis sessions"],
                ].map(([week, focus, del], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#0a1020" : "#0d1428" }}>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        border: "1px solid #ffffff0d",
                        fontWeight: 600,
                        color: "#e8dcc8",
                        width: "15%",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {week}
                    </td>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        border: "1px solid #ffffff0d",
                        lineHeight: 1.55,
                        width: "35%",
                      }}
                    >
                      {focus}
                    </td>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        border: "1px solid #ffffff0d",
                        lineHeight: 1.55,
                        width: "50%",
                      }}
                    >
                      {del}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section 3: Metrics */}
          <H2>Part 3: The Metrics That Actually Matter</H2>
          <Body>
            Vanity metrics — emails sent, calls made, LinkedIn connections — are activity proxies, not
            performance signals. High-performing teams track outcomes, and they track them against
            benchmarks so every SDR knows where they stand relative to the team and the industry.
          </Body>

          {/* Revenue dashboard image */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 9",
              borderRadius: "12px",
              overflow: "hidden",
              margin: "1.5rem 0 2rem",
              border: "1px solid #ffffff10",
            }}
          >
            <Image
              src="/images/sdr-revenue-dashboard.webp"
              alt="Revenue dashboard showing SDR pipeline and sales metrics"
              fill
              style={{ objectFit: "cover" }}
              sizes="800px"
            />
          </div>

          <div style={{ overflowX: "auto", margin: "0 0 2rem" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.92rem",
                color: "#c8cdd8",
              }}
            >
              <thead>
                <tr>
                  {["Metric", "What It Measures", "Industry Benchmark", "Top Performer"].map((h) => (
                    <th
                      key={h}
                      style={{
                        background: "#1a2540",
                        color: "#C9A96E",
                        padding: "0.75rem 1rem",
                        textAlign: "left",
                        fontWeight: 700,
                        fontSize: "0.82rem",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        border: "1px solid #ffffff10",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["First Touch → Meeting Rate", "Quality of targeting + outreach", "2.5%", "4–6%"],
                  ["Time to First Meeting", "Speed through the top of funnel", "18–22 days", "12–15 days"],
                  ["Multi-Thread Rate", "Depth of account penetration", "1.5 contacts/account", "3+ contacts/account"],
                  ["Meeting → Opportunity Rate", "Qualification accuracy", "45%", "65%+"],
                  ["Sequence Reply Rate", "Outreach relevance + personalization", "3–5%", "8–12%"],
                ].map(([metric, what, bench, top], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#0a1020" : "#0d1428" }}>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        border: "1px solid #ffffff0d",
                        fontWeight: 600,
                        color: "#e8dcc8",
                      }}
                    >
                      {metric}
                    </td>
                    <td
                      style={{ padding: "0.75rem 1rem", border: "1px solid #ffffff0d", lineHeight: 1.5 }}
                    >
                      {what}
                    </td>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        border: "1px solid #ffffff0d",
                        color: "#7a8499",
                        fontWeight: 500,
                      }}
                    >
                      {bench}
                    </td>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        border: "1px solid #ffffff0d",
                        color: "#2a9a5a",
                        fontWeight: 700,
                      }}
                    >
                      {top}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Warning>
            Don&apos;t track more than 3–4 metrics per SDR at any given time. A dashboard with 15 KPIs
            creates paralysis, not performance. Choose the two lagging indicators (meetings booked,
            pipeline created) and two leading indicators (reply rate, qualified call rate) and run
            weekly reviews on those.
          </Warning>

          {/* Section 4: Daily rhythm */}
          <H2>Part 4: The Daily Rhythm That Compounds</H2>
          <Body>
            The difference between a team that improves month over month and one that plateaus isn&apos;t
            talent — it&apos;s structure. High-performing SDR teams build a daily feedback loop that turns
            every loss into a learning and every win into a repeatable process.
          </Body>

          <div style={{ margin: "1.5rem 0 2rem" }}>
            {[
              {
                time: "Morning · 15 min",
                title: "Strategy Session",
                desc: "Review the day's target accounts, discuss any new intel on prospects (news, job changes, funding), and align on the day's primary focus. This is not a pipeline review — it's a reconnaissance briefing.",
              },
              {
                time: "Mid-Day · 20 min",
                title: "Loss Analysis",
                desc: "What didn't work in the morning's outreach? Pull the lowest-performing sequences and calls. The goal isn't to blame — it's to find the pattern. One insight from a loss analysis is worth 50 activity reps.",
              },
              {
                time: "End of Day · 25 min",
                title: "Optimization Block",
                desc: "Rewrite the messaging that underperformed. Test one new subject line, one new opening line, or one new call framework. Stack these small iterations and the team compounds at a rate that individual performers can't match.",
              },
            ].map((block, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  marginBottom: "1.25rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    background: "#C9A96E22",
                    border: "1px solid #C9A96E44",
                    borderRadius: "8px",
                    padding: "0.5rem 0.85rem",
                    minWidth: "9rem",
                    textAlign: "center",
                    flexShrink: 0,
                  }}
                >
                  <p
                    style={{
                      color: "#C9A96E",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    {block.time}
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      color: "#e8dcc8",
                      fontWeight: 700,
                      fontSize: "1rem",
                      marginBottom: "0.35rem",
                    }}
                  >
                    {block.title}
                  </p>
                  <p
                    style={{
                      color: "#c8cdd8",
                      fontSize: "0.95rem",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {block.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Section 5: Tech stack */}
          <H2>Part 5: The Tech Stack — and the Trap Inside It</H2>
          <Body>
            The average SDR uses only 14% of their tech stack&apos;s capabilities. More tools doesn&apos;t
            mean more pipeline — it means more context-switching, more data silos, and more time
            spent in dashboards instead of conversations.
          </Body>
          <Body>
            High-performing teams pick one tool per job and master it before adding anything new.
            Here&apos;s the core stack by category:
          </Body>

          <div style={{ overflowX: "auto", margin: "1.25rem 0 2rem" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.92rem",
                color: "#c8cdd8",
              }}
            >
              <thead>
                <tr>
                  {["Category", "What It Does", "Leading Tools"].map((h) => (
                    <th
                      key={h}
                      style={{
                        background: "#1a2540",
                        color: "#C9A96E",
                        padding: "0.75rem 1rem",
                        textAlign: "left",
                        fontWeight: 700,
                        fontSize: "0.82rem",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        border: "1px solid #ffffff10",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Intelligence", "Contact + company data, intent signals", "Apollo, ZoomInfo, Clay"],
                  ["Engagement", "Multi-channel sequencing (email, call, LinkedIn)", "Outreach, Salesloft, Instantly"],
                  ["CRM", "Pipeline tracking and handoff to AE", "Salesforce, HubSpot"],
                  ["Call Coaching", "Record, transcribe, and analyze calls", "Gong, Chorus, Fireflies"],
                  ["Analytics", "Performance tracking by rep and sequence", "Native CRM dashboards + Tableau"],
                ].map(([cat, what, tools], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#0a1020" : "#0d1428" }}>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        border: "1px solid #ffffff0d",
                        fontWeight: 600,
                        color: "#e8dcc8",
                        width: "20%",
                      }}
                    >
                      {cat}
                    </td>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        border: "1px solid #ffffff0d",
                        lineHeight: 1.5,
                        width: "40%",
                      }}
                    >
                      {what}
                    </td>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        border: "1px solid #ffffff0d",
                        width: "40%",
                      }}
                    >
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                        {tools.split(", ").map((t) => (
                          <ToolPill key={t} label={t} />
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section 6: Culture */}
          <H2>Part 6: The Cultural System That Sustains Performance</H2>
          <Body>
            Culture in an SDR team isn&apos;t a values poster — it&apos;s a set of operational habits that
            either reinforce high performance or erode it. The three habits that matter most:
          </Body>

          <H3>1. Celebrate the Small Wins — Publicly</H3>
          <Body>
            Most teams celebrate closed deals. High-performing SDR teams celebrate booked meetings,
            great conversations, and creative outreach that got a response. The signal it sends:
            effort and craft matter here, not just outcomes. That signal changes behavior.
          </Body>
          <Callout>
            <ul style={{ margin: 0, paddingLeft: "1.25rem", lineHeight: 2 }}>
              <li>A dedicated #wins Slack channel for same-day call-outs</li>
              <li>Weekly team roundup that surfaces 3 "best message of the week" examples</li>
              <li>Monthly recognition for most improved metric — not just highest volume</li>
            </ul>
          </Callout>

          <H3>2. Radical Metrics Transparency</H3>
          <Body>
            Every SDR should know their own numbers, the team&apos;s numbers, and — crucially — what
            those numbers mean for the broader business goal. When SDRs understand how their
            meeting-booking rate translates into ARR, they stop treating metrics as management
            overhead and start treating them as a personal scoreboard.
          </Body>

          <div style={{ overflowX: "auto", margin: "1rem 0 1.75rem" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.92rem",
                color: "#c8cdd8",
              }}
            >
              <thead>
                <tr>
                  {["Transparency Layer", "What Gets Shared", "How Often"].map((h) => (
                    <th
                      key={h}
                      style={{
                        background: "#1a2540",
                        color: "#C9A96E",
                        padding: "0.75rem 1rem",
                        textAlign: "left",
                        fontWeight: 700,
                        fontSize: "0.82rem",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        border: "1px solid #ffffff10",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Individual", "Personal metrics vs. personal targets", "Daily self-review"],
                  ["Team", "Team aggregate vs. pipeline goal", "Weekly team meeting"],
                  ["Business", "How SDR pipeline maps to revenue forecast", "Monthly all-hands"],
                ].map(([layer, what, freq], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#0a1020" : "#0d1428" }}>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        border: "1px solid #ffffff0d",
                        fontWeight: 600,
                        color: "#e8dcc8",
                      }}
                    >
                      {layer}
                    </td>
                    <td style={{ padding: "0.75rem 1rem", border: "1px solid #ffffff0d" }}>{what}</td>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        border: "1px solid #ffffff0d",
                        color: "#C9A96E",
                        fontWeight: 600,
                      }}
                    >
                      {freq}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H3>3. Continuous Learning Environment</H3>
          <Body>
            The best SDR managers act more like coaches than supervisors. Every loss is debrief
            material. Every top performer&apos;s call is a case study. When learning is embedded in the
            daily rhythm, performance compounds naturally — without needing to hire only stars.
          </Body>

          <Quote attribution="Founder of a B2B SaaS company, 14-person SDR team">
            "She created a mock presentation that blew me away. That&apos;s the kind of learning agility that predicts a big advantage — and it had nothing to do with her resume."
          </Quote>

          {/* Closing */}
          <H2>Where to Go From Here</H2>
          <Body>
            Building a high-performing SDR team is not a one-time hiring decision — it&apos;s an
            operating system you install and iterate on. The foundations: hire for learning agility,
            resilience, and curiosity; train the psychology before the product; track outcomes not
            activity; build the daily feedback loop; and create a culture where transparency and
            small wins are treated as seriously as close rates.
          </Body>
          <Body>
            The next evolution for SDR teams is hybrid engagement — combining high-touch human
            outreach with AI-assisted personalization and lead enrichment at scale. Teams that master
            the fundamentals above first will be the ones who use those tools well.
          </Body>

          <Callout title="SDR team build checklist">
            <ul style={{ margin: 0, paddingLeft: "1.25rem", lineHeight: 2.1 }}>
              <li>☐ Hiring rubric defined: learning agility, resilience, curiosity — scored 1–5</li>
              <li>☐ Training plan built: 50% psychology, 30% product, 20% technical</li>
              <li>☐ 3–4 core metrics chosen with benchmarks and team visibility</li>
              <li>☐ Daily rhythm installed: morning strategy, mid-day loss analysis, end-of-day optimization</li>
              <li>☐ Tech stack audited: one tool per job, usage rate reviewed monthly</li>
              <li>☐ #wins channel active and used by managers, not just SDRs</li>
              <li>☐ Every SDR knows how their pipeline contribution maps to company ARR</li>
              <li>☐ Weekly call review: at least 3 calls per SDR per week coached with recorded feedback</li>
            </ul>
          </Callout>

          {/* CTA */}
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
              Gildre Thought Leadership Sessions
            </p>
            <p
              style={{
                color: "#f0e6d3",
                fontSize: "1.2rem",
                fontWeight: 700,
                marginBottom: "0.6rem",
              }}
            >
              Go Deeper on Sales Strategy With Gildre Members
            </p>
            <p
              style={{
                color: "#7a8499",
                fontSize: "0.95rem",
                marginBottom: "1.5rem",
                lineHeight: 1.6,
              }}
            >
              Access featured video sessions, executive workshops, and sales playbooks — built
              for founders scaling their first revenue team.
            </p>
            <a
              href="/membership"
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
              Access Member Content →
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
