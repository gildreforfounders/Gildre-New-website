import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "John Lionberger: From Broadway Technician to Electrical Engineer to Pro Racing Driver — Building a Half-Billion-Dollar Business Along the Way | Gildre",
  description:
    "John Lionberger went from working rock concerts and Broadway shows to electrical engineering, then built a regional consulting firm from $0 to nearly $500M in revenue — all while racing competitively on weekends. Featured on the Gildre Start to Scale Podcast.",
  keywords: [
    "John Lionberger",
    "theater to engineering career pivot",
    "pro racing entrepreneur",
    "ESOP business transition",
    "Valvoline Quick Lube franchise",
    "Houston engineering consulting",
    "how to take a company public",
    "employee stock ownership plan founder",
    "career reinvention entrepreneur",
    "Gildre Start to Scale Podcast",
  ],
  openGraph: {
    title: "John Lionberger: From Broadway to Engineering to Pro Racing — A Half-Billion-Dollar Journey",
    description:
      "Broadway technician, electrical engineer, race car driver, franchise owner, ESOP architect — John Lionberger's career doesn't fit a single lane. And that's exactly the point.",
    type: "article",
    url: "https://www.gildre.com/blog/john-lionberger-broadway-engineer-racing",
    images: [{ url: "https://www.gildre.com/images/john-lionberger-headshot.webp" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "John Lionberger: From Broadway Technician to Electrical Engineer to Pro Racing Driver — Building a Half-Billion-Dollar Business Along the Way",
  "description":
    "John Lionberger went from working rock concerts and Broadway shows to electrical engineering, then built a regional consulting firm from $0 to nearly $500M in revenue — all while racing competitively on weekends.",
  "image": "https://www.gildre.com/images/john-lionberger-headshot.webp",
  "author": { "@type": "Organization", "name": "Gildre", "url": "https://www.gildre.com" },
  "publisher": {
    "@type": "Organization",
    "name": "Gildre",
    "url": "https://www.gildre.com",
    "logo": { "@type": "ImageObject", "url": "https://www.gildre.com/images/gildre-logo.png" },
  },
  "datePublished": "2024-01-01",
  "dateModified": "2024-01-01",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.gildre.com/blog/john-lionberger-broadway-engineer-racing" },
  "keywords": "John Lionberger, theater engineering pivot, pro racing entrepreneur, ESOP transition, Valvoline franchise, Houston consulting, going public, career reinvention, Gildre podcast",
  "about": [
    { "@type": "Person", "name": "John Lionberger" },
    { "@type": "Organization", "name": "Valvoline" },
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

export default function JohnLionbergerBlog() {
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
                style={{ backgroundColor: "rgba(91,154,166,0.2)", color: "#5B9AA6" }}
              >
                Operations
              </span>
              <span
                className="rounded-full px-3 py-1 text-[0.6rem] font-bold uppercase tracking-widest"
                style={{ backgroundColor: "rgba(164,123,91,0.2)", color: "#A67B5B" }}
              >
                Fundraising
              </span>
              <span className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
                Start to Scale Podcast · Gildre Spotlight
              </span>
            </div>
            <h1
              className="text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.1] text-white"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              John Lionberger: From Broadway Technician to Electrical Engineer to Pro Racer — Building a Half-Billion-Dollar Business Along the Way
            </h1>
            <p className="mt-6 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              Theater. Engineering. A $500M consulting firm. Valvoline franchises. ESOPs. Going public. And still racing competitively on weekends — John Lionberger's career refuses to stay in a single lane.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-6 text-[0.7rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
              <span>Electrical Engineer · Entrepreneur · Pro Racing Driver</span>
              <span>·</span>
              <span>Houston, TX</span>
              <span>·</span>
              <span>10 min read</span>
            </div>
          </div>
        </section>

        {/* ── Body ─────────────────────────────────────────────────────── */}
        <article className="mx-auto max-w-3xl px-6 py-16">

          {/* Opening pull quote */}
          <Quote>
            "It's kind of a unique path from theater to engineering — but that move was essential for everything that came after."
          </Quote>

          {/* Podcast photo */}
          <div className="my-10 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            <Image
              src="/images/john-lionberger-podcast.webp"
              alt="John Lionberger on the Gildre Start to Scale Podcast"
              width={640}
              height={480}
              className="w-full"
            />
            <p className="px-4 py-3 text-[0.68rem]" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "#0a1020" }}>
              John Lionberger (left) on the Gildre Start to Scale Podcast
            </p>
          </div>

          {/* Key facts */}
          <div
            className="my-10 rounded-2xl p-7"
            style={{ backgroundColor: "rgba(201,169,110,0.06)", border: "1px solid rgba(201,169,110,0.15)" }}
          >
            <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-widest" style={{ color: "#C9A96E" }}>
              John Lionberger at a Glance
            </p>
            <ul className="space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
              <li>• Career start: theater technician — rock bands and Broadway productions</li>
              <li>• Pivot to electrical engineering — one of the most unconventional transitions in his industry</li>
              <li>• Built a regional engineering consulting office in Houston from $0 to ~$500M revenue (1999–2012)</li>
              <li>• Developed Valvoline Quick Lube franchises — combining business with his passion for motorsports</li>
              <li>• Navigated a full ESOP (Employee Stock Ownership Plan) transition</li>
              <li>• Helped take a portfolio company public — and gained firsthand IPO experience</li>
              <li>• Has raced competitively since age 25 — still on the track today</li>
              <li>• Raised a daughter while balancing full-time school, work, and racing</li>
            </ul>
          </div>

          <Section title="The First Career: Lights, Sound, and the Stage">
            <Body>
              Before John Lionberger ever touched an engineering textbook, he was behind the scenes at rock concerts and Broadway productions — managing the technical infrastructure that makes live performance work. He was good at it. And for a time, it was enough.
            </Body>
            <Body>
              But something else was pulling at him. A different kind of problem-solving. A different kind of build. He made the call to pivot — from theater to electrical engineering — a transition that surprised people around him and wouldn't be the last time he defied expectations about what his career should look like.
            </Body>
          </Section>

          {/* Headshot */}
          <div className="my-10 flex flex-col items-center">
            <div className="overflow-hidden rounded-2xl" style={{ maxWidth: "420px", width: "100%", border: "1px solid rgba(255,255,255,0.07)" }}>
              <Image
                src="/images/john-lionberger-headshot.webp"
                alt="John Lionberger — entrepreneur and pro racing driver"
                width={800}
                height={900}
                className="w-full"
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <p className="mt-3 text-[0.68rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
              John Lionberger — engineer, entrepreneur, and competitive racing driver
            </p>
          </div>

          <Section title="Building While Balancing: School, Work, and Fatherhood">
            <Body>
              The transition to engineering didn't happen in a vacuum. John was simultaneously a full-time student, an active professional, and a father raising a young daughter. The schedule was punishing — but he made it work by doing something most people avoid: communicating directly with his professors about his situation, negotiating accommodations, and planning each week with military precision.
            </Body>
            <Body>
              "It's all about planning and taking initiative," he says. Not outsourcing the problem. Not waiting for the situation to resolve itself. Just deciding what needed to happen and building the structures to make it happen.
            </Body>
            <Body>
              His daughter, now grown, has channeled her own creativity into art. John considers that one of his proudest outcomes.
            </Body>
          </Section>

          <Section title="From Utility Sector to $500M: The Consulting Build">
            <Body>
              After graduating, John entered the utility industry — a steady, technical world that gave him the operational foundation for what came next. He moved to a consulting firm, steadily advanced, and was eventually tapped to launch the firm's Houston regional office from scratch.
            </Body>
            <Body>
              From 1999 to 2012, that office went from zero revenue to nearly half a billion dollars. It's the kind of number that sounds clean in retrospect — but the 13-year arc included everything you'd expect: difficult clients, scaling pains, hiring the wrong people, hiring the right ones, and navigating the complex politics of a growing regional operation inside a larger firm.
            </Body>
            <Body>
              When he left, he left on his own terms — and with a clear sense of what he wanted to build next.
            </Body>
          </Section>

          {/* Racing garage photo */}
          <div className="my-10 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            <Image
              src="/images/john-lionberger-racing-garage.webp"
              alt="John Lionberger preparing his race car — #115"
              width={960}
              height={1200}
              className="w-full"
              style={{ objectFit: "cover", maxHeight: "520px" }}
            />
            <p className="px-4 py-3 text-[0.68rem]" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "#0a1020" }}>
              John prepping car #115 — a ritual he's maintained since he started racing at 25
            </p>
          </div>

          <Section title="When Passion Meets Business: The Valvoline Franchise">
            <Body>
              John has been a car person his entire life — working on vehicles with his father from an early age, developing a mechanical intuition that most engineers don't have. He started racing competitively at 25 and never stopped.
            </Body>
            <Body>
              When he stepped out of the consulting firm, he found a way to make the passion load-bearing. He developed Valvoline Quick Lube franchises — automotive service locations that sat squarely at the intersection of his business acumen, operational expertise, and genuine love for the industry.
            </Body>
            <Body>
              It wasn't a coincidence. It was the deliberate application of years of business-building to a sector he actually understood from the inside.
            </Body>
          </Section>

          {/* Trackside headshot */}
          <div className="my-10 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            <Image
              src="/images/john-lionberger-trackside.webp"
              alt="John Lionberger at the track in racing gear"
              width={960}
              height={960}
              className="w-full"
              style={{ objectFit: "cover", maxHeight: "480px", objectPosition: "top" }}
            />
          </div>

          <Section title="The ESOP Transition: What Most Business Owners Get Wrong">
            <Body>
              One of the most substantive chapters of John's career came when he navigated an ESOP — an Employee Stock Ownership Plan — as a business transition mechanism. He's a vocal advocate for the model. Done right, an ESOP fundamentally changes company culture: when every employee owns a piece of the business, motivation shifts, accountability sharpens, and retention improves.
            </Body>
            <Body>
              But he's equally blunt about where ESOPs fail. The most common mistake: not planning far enough ahead for senior staff retirements, and failing to maintain a cash reserve for repurchase liability. When long-tenured employees eventually sell their shares back to the plan, the liquidity has to come from somewhere. Companies that ignore this create financial instability precisely at the moment they should be most stable.
            </Body>
            <Quote>
              "The key to a successful ESOP is planning ahead — especially for senior staff retirements. Many companies don't maintain a cash reserve for repurchase liability, and it leads to serious financial trouble."
            </Quote>
          </Section>

          {/* Cockpit photo */}
          <div className="my-10 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            <Image
              src="/images/john-lionberger-cockpit.webp"
              alt="John Lionberger in the cockpit of his race car"
              width={960}
              height={960}
              className="w-full"
              style={{ objectFit: "cover", maxHeight: "480px" }}
            />
            <p className="px-4 py-3 text-[0.68rem]" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "#0a1020" }}>
              In the cockpit — where the same focus that built a $500M business gets applied at 140 mph
            </p>
          </div>

          <Section title="Going Public: What Founders Actually Need to Know">
            <Body>
              When a company John had invested in made the decision to go public, he got a front-row seat to what an IPO actually demands — not the sanitized version in the business press, but the real operational weight of preparing financials, managing investor relations, coordinating legal and compliance workstreams, and keeping the actual business running while all of it is happening.
            </Body>
            <Body>
              His advice for any founder considering the public markets: define your exit strategy before you start the process, not after. The IPO path has a logic of its own, and founders who haven't thought clearly about what they want from it often find themselves reactive when they need to be decisive.
            </Body>
            <Body>
              He also emphasizes the importance of celebrating milestones along the way. An IPO process can take a year or more. Without deliberate pauses to acknowledge progress, the team burns out before they ever ring the bell.
            </Body>
          </Section>

          <Section title="Why Racing Is a Business Skill">
            <Body>
              For John, competitive racing isn't a hobby that competes with work. It's a discipline that reinforces it. The mental focus required to run clean laps under pressure — the physical conditioning, the situational awareness, the ability to make split-second decisions and live with the consequences — maps directly onto how he manages businesses and makes investment decisions.
            </Body>
            <Body>
              He's intentional about protecting time for it. Not because it's fun (though it is), but because he knows that letting it go would cost him the edge that comes from having something outside of work that demands the same level of presence.
            </Body>
            <Body>
              "Keeping yourself physically fit, setting blocks of private work time, and sometimes stepping out of the office to think — that's how you maintain balance," he says. "Racing keeps me sharp."
            </Body>
          </Section>

          <Section title="The Through Line">
            <Body>
              What connects theater, electrical engineering, a $500M consulting build, Valvoline franchises, an ESOP, an IPO, and a race car? Not an obvious throughline — but one that becomes clear when you talk to John: a commitment to doing the hard version of whatever he takes on.
            </Body>
            <Body>
              He didn't dabble in engineering. He built half a billion in revenue. He didn't try racing casually. He's still at it decades later. He didn't observe ESOPs from a distance. He built one and learned its failure modes firsthand.
            </Body>
            <Body>
              The career that looks unconventional from the outside is, on closer inspection, deeply coherent — because the same person showed up to every chapter.
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
              Hear John's full story — in his own words
            </p>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
              This blog is adapted from John's episode on the Gildre Start to Scale Podcast. Listen to the full conversation for his unedited takes on ESOPs, going public, franchise operations, and why he still gets in a race car every chance he gets.
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
              Built for founders who take the unconventional path.
            </h3>
            <p className="text-sm leading-relaxed mb-8 mx-auto max-w-md" style={{ color: "rgba(255,255,255,0.55)" }}>
              Gildre is a private community for founders navigating growth, transitions, exits, and everything in between. Apply to join.
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
