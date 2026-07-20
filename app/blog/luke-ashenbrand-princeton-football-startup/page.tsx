import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.gildre.com/blog/luke-ashenbrand-princeton-football-startup" },
  title: "Luke Ashenbrand: From Princeton Division I Football to Startup Entrepreneur After a Career-Ending Concussion | Gildre",
  description:
    "Princeton football player Luke Ashenbrand suffered a career-ending concussion in 2021 — then channeled that setback into startup consulting and entrepreneurship. His story from the Gildre Start to Scale Podcast.",
  keywords: [
    "Luke Ashenbrand",
    "Princeton football entrepreneur",
    "Division I athlete startup founder",
    "career-ending concussion recovery",
    "Ivy League entrepreneur",
    "Vega startup Princeton",
    "startup consultant",
    "athlete turned entrepreneur",
    "Princeton University football",
    "Gildre Start to Scale Podcast",
  ],
  openGraph: {
    url: "https://www.gildre.com/blog/luke-ashenbrand-princeton-football-startup",
    title: "Luke Ashenbrand: From Princeton Division I Football to Startup Entrepreneur",
    description:
      "A career-ending concussion ended Luke Ashenbrand's Princeton football dream — and launched his entrepreneurial journey. Featured on the Gildre Start to Scale Podcast.",
    type: "article",
    images: [{ url: "https://www.gildre.com/images/luke-ashenbrand-headshot.webp" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Luke Ashenbrand: From Princeton Division I Football to Startup Entrepreneur After a Career-Ending Concussion",
  "description":
    "Princeton football player Luke Ashenbrand suffered a career-ending concussion in 2021 — then channeled that setback into startup consulting and entrepreneurship.",
  "image": "https://www.gildre.com/images/luke-ashenbrand-headshot.webp",
  "author": { "@type": "Organization", "name": "Gildre", "url": "https://www.gildre.com" },
  "publisher": {
    "@type": "Organization",
    "name": "Gildre",
    "url": "https://www.gildre.com",
    "logo": { "@type": "ImageObject", "url": "https://www.gildre.com/images/gildre-logo.png" },
  },
  "datePublished": "2024-01-01",
  "dateModified": "2024-01-01",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.gildre.com/blog/luke-ashenbrand-princeton-football-startup" },
  "keywords": "Luke Ashenbrand, Princeton football, Division I athlete, startup entrepreneur, concussion recovery, Vega startup, startup consultant, Gildre podcast",
  "about": [
    { "@type": "Person", "name": "Luke Ashenbrand" },
    { "@type": "Organization", "name": "Princeton University" },
    { "@type": "Organization", "name": "Gildre" },
  ],
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2
        className="mb-4 text-[1.5rem] font-bold text-white sm:text-[1.75rem]"
        style={{ fontFamily: "var(--font-fraunces)" }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
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
    <blockquote
      className="my-8 rounded-2xl px-7 py-6"
      style={{ backgroundColor: "rgba(201,169,110,0.08)", borderLeft: "3px solid #C9A96E" }}
    >
      <p className="text-base italic leading-relaxed text-white">{children}</p>
    </blockquote>
  );
}

export default function LukeAshenbrandBlog() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
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
                style={{ backgroundColor: "rgba(107,138,111,0.2)", color: "#6B8A6F" }}
              >
                Leadership
              </span>
              <span className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
                Start to Scale Podcast · Gildre Spotlight
              </span>
            </div>
            <h1
              className="text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.1] text-white"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Luke Ashenbrand: From Princeton Division I Football to Startup Entrepreneur After a Career-Ending Concussion
            </h1>
            <p className="mt-6 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              A Princeton football lineman loses his career to a traumatic concussion — spends 15 days in a pitch-black room — then channels the setback into startup consulting and a new entrepreneurial path.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-6 text-[0.7rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
              <span>Princeton University · Class of 2022</span>
              <span>·</span>
              <span>Startup Consultant &amp; Founder</span>
              <span>·</span>
              <span>8 min read</span>
            </div>
          </div>
        </section>

        {/* ── Body ─────────────────────────────────────────────────────── */}
        <article className="mx-auto max-w-3xl px-6 py-16">

          {/* Pull quote up top */}
          <Quote>
            "The concussion kind of switched me out of the football phase. I was unconscious for a month. I don't remember a dang thing about that month. I had people dropping off food to my door. I was in a pitch-black room for 15 days. Life was gone like that."
          </Quote>

          {/* Podcast photo */}
          <div className="my-10 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            <Image
              src="/images/luke-ashenbrand-podcast.webp"
              alt="Luke Ashenbrand on the Gildre Start to Scale Podcast"
              width={1280}
              height={720}
              className="w-full"
            />
            <p className="px-4 py-3 text-[0.68rem]" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "#0a1020" }}>
              Luke Ashenbrand (left) on the Gildre Start to Scale Podcast
            </p>
          </div>

          {/* Key facts */}
          <div
            className="my-10 rounded-2xl p-7"
            style={{ backgroundColor: "rgba(201,169,110,0.06)", border: "1px solid rgba(201,169,110,0.15)" }}
          >
            <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-widest" style={{ color: "#C9A96E" }}>
              Luke Ashenbrand at a Glance
            </p>
            <ul className="space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
              <li>• Princeton University, Class of 2022 — Entrepreneurship minor</li>
              <li>• Played Guard &amp; Center for Princeton Tigers football (Ivy League)</li>
              <li>• Career-ending concussion: September 2021 (vs. Stetson) — 15 days in a dark room</li>
              <li>• Built Vega during COVID — a campus delivery algorithm — as his first startup</li>
              <li>• Currently a startup consultant working with founders and investors</li>
              <li>• Also building his own startup as a side venture</li>
              <li>• Father is an entrepreneur — the original inspiration for the startup path</li>
            </ul>
          </div>

          <Section title="Meet Luke">
            <Body>
              Luke Ashenbrand graduated from Princeton University in May 2022 — but the path to graduation was anything but straightforward. He arrived at Princeton as a recruited football player, took on one of the most physically demanding positions on the offensive line, and had every intention of finishing his career on the field.
            </Body>
            <Body>
              That plan ended in September 2021, when a concussion during a game against Stetson changed everything.
            </Body>
            <Body>
              "I'd be lying if I said it didn't sting," Luke says. But rather than letting the setback define him, he chose to treat it as a new chapter — one shaped not by what he lost, but by what he still had the drive to build.
            </Body>
          </Section>

          {/* Headshot */}
          <div className="my-10 flex flex-col items-center">
            <div className="overflow-hidden rounded-2xl" style={{ maxWidth: "400px", width: "100%", border: "1px solid rgba(255,255,255,0.07)" }}>
              <Image
                src="/images/luke-ashenbrand-headshot.webp"
                alt="Luke Ashenbrand — Princeton graduate and startup entrepreneur"
                width={800}
                height={1000}
                className="w-full"
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <p className="mt-3 text-[0.68rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
              Luke Ashenbrand, Princeton graduate and startup consultant
            </p>
          </div>

          <Section title="A Late Start in Football — and an Early Hunger to Compete">
            <Body>
              Unlike most linemen who grow up playing the sport from age six, Luke came to football late. He started at Tight End and Defensive Line his freshman year of high school at 14, then transitioned to Defensive Tackle as he developed. The late entry didn't slow him down — it sharpened his focus.
            </Body>
            <Body>
              By February 2017, he had an offer from Brown. His performance at the Nike Opening camp — going up against players who would go on to play in the NFL — gave him a clear-eyed look at what he was competing against in the recruiting world. He leaned into those lessons rather than shrinking from them.
            </Body>
            <Body>
              Eventually, Luke chose Princeton. The rigorous academic environment, the campus, and his connection to the coaching staff made it the right fit. He enrolled with two ambitions: play Division I Ivy League football and build something of his own.
            </Body>
          </Section>

          <Section title="The First Startup: Vega">
            <Body>
              When COVID shut down the 2020 football season, Luke didn't sit still. He used the time to build Vega — an algorithm designed to aggregate all campus orders and consolidate deliveries to a central campus pickup point. It was his entrepreneurship minor brought to life: a real problem, a real attempt at a solution.
            </Body>
            <Body>
              He also interned at a private equity firm that summer, getting his first look at capital, deals, and the investor mindset from the inside.
            </Body>
            <Body>
              Vega didn't make it to market. But it taught him something more valuable than revenue: what it actually feels like to try to build something from nothing, and how much depends on timing, team, and opportunity alignment.
            </Body>
          </Section>

          <Section title="The Hit That Changed Everything">
            <Body>
              Football resumed in the fall of 2021. In September, during a game against Stetson, Luke took a hit that left him unconscious for an extended period. He lost an entire month of memory. Friends dropped food at his door while he recovered alone. He spent 15 days in a completely dark room — no screens, no light, minimal stimulation.
            </Body>
            <Quote>
              "The concussion kind of switched me out of the football phase. I was unconscious for a month. I don't remember a dang thing about that month. I had people dropping off food to my door. I was in a pitch-black room for 15 days. Life was gone like that."
            </Quote>
            <Body>
              What pulled him through wasn't a highlight reel or a pep talk. It was meditation. Luke's mother — coming from a Buddhist family background — taught him to meditate during recovery. The practice helped him process the loss, quiet the noise, and stop leading with ego.
            </Body>
            <Body>
              "I realized that not making a choice left a wider world of opportunity in front of me," he reflects. With football gone, everything else became possible.
            </Body>
          </Section>

          <Section title="From the Locker Room to the Startup World">
            <Body>
              After graduation, Luke did something deliberately open-ended: he joined an agnostic company — one that worked across industries and gave him access to a wide range of investors and founders simultaneously. His goal wasn't to specialize immediately. It was to learn — fast, broadly, and from people further along than him.
            </Body>
            <Body>
              Being an extrovert helped. He thrived in rooms full of different kinds of builders, absorbing perspectives on fundraising, company culture, product development, and failure. "I got to see the good, bad, and in-between of various contexts that most people my age don't get exposed to," he says.
            </Body>
            <Body>
              His father's entrepreneurial path had always been the north star. Now Luke had the raw material — real-world exposure, a Princeton network, and the lived experience of navigating a major setback — to start building his own version of that path.
            </Body>
          </Section>

          <Section title="What He's Building Now">
            <Body>
              Today, Luke runs startup consulting as his primary work — helping early-stage founders think through strategy, positioning, and execution. Alongside that, he's nurturing a startup of his own on the side.
            </Body>
            <Body>
              He's methodical about it. Vega taught him that good ideas need the right moment, the right team, and the right conditions. He's not rushing to ship for the sake of shipping.
            </Body>
            <Body>
              The resilience that carried him through two-a-days at Princeton, the recruiting grind, and 15 days in a dark room now drives how he approaches building. Patience isn't passivity for Luke — it's strategy.
            </Body>
          </Section>

          <Section title="What Founders Can Learn from an Athlete Who Pivoted">
            <Body>
              Luke's story isn't about football. It's about what happens when the identity you built your life around disappears overnight — and what you find on the other side if you're willing to look.
            </Body>
            <Body>
              For founders who've watched a company fold, lost a major customer, or seen a product they believed in fail to find traction: the arc Luke describes — loss, stillness, reorientation, rebuild — is one worth sitting with.
            </Body>
            <Body>
              The entrepreneurial muscle isn't just about building. It's about what you do when the build stops working.
            </Body>
          </Section>

          {/* Listen CTA */}
          <div
            className="my-10 rounded-2xl p-8 text-center"
            style={{ backgroundColor: "#0a1020", border: "1px solid rgba(201,169,110,0.15)" }}
          >
            <p className="text-[0.65rem] font-bold uppercase tracking-widest mb-3" style={{ color: "#C9A96E" }}>
              Start to Scale Podcast
            </p>
            <p className="text-white font-semibold text-lg mb-4" style={{ fontFamily: "var(--font-fraunces)" }}>
              Hear Luke's full story — in his own words
            </p>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
              This blog is adapted from Luke's episode on the Gildre Start to Scale Podcast. Listen to the full conversation for the unedited story — including his thoughts on the recruiting process, Princeton culture, and what he's building next.
            </p>
            <a
              href="https://linktr.ee/starttoscale"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full px-8 py-3 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
            >
              Listen to the Podcast →
            </a>
          </div>

          {/* Gildre CTA */}
          <div
            className="mt-14 rounded-2xl p-8 text-center"
            style={{ background: "linear-gradient(135deg, #1C2744 0%, #0a1020 100%)", border: "1px solid rgba(201,169,110,0.2)" }}
          >
            <p className="text-[0.65rem] font-bold uppercase tracking-widest mb-3" style={{ color: "#C9A96E" }}>
              Gildre Community
            </p>
            <h3
              className="text-[1.5rem] font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Founders who've been through the fire belong here.
            </h3>
            <p className="text-sm leading-relaxed mb-8 mx-auto max-w-md" style={{ color: "rgba(255,255,255,0.55)" }}>
              Gildre is a private community for founders at every stage — including those rebuilding after a pivot, a setback, or an unexpected detour. Apply to join.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="/membership"
                className="rounded-full px-8 py-3.5 text-sm font-bold transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
              >
                Apply to Gildre →
              </a>
              <a
                href="/content"
                className="rounded-full px-8 py-3.5 text-sm font-semibold transition-opacity hover:opacity-80"
                style={{ color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                More Founder Stories
              </a>
            </div>
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
    </>
  );
}
