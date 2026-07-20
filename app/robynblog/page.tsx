import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Robyn Hobson: From Cape Town Startup to US CMO — A Global Marketing Career Built on Grit | Gildre",
  description:
    "Robyn Hobson on 13 years of marketing across South Africa, China, and the US — from growing Woolworths SA to 500K fans to VP of Marketing at Remote Vans.",
  keywords: ["Robyn Hobson", "global marketing career", "CMO", "South Africa startup", "Remote Vans", "Gildre podcast"],
  openGraph: {
    title: "Robyn Hobson: From Cape Town Startup to US CMO — A Global Marketing Career Built on Grit",
    description:
      "From South Africa's top digital agencies to a low-cost airline crisis, an MBA from UCT, EdTech scaling, and now marketing Sprinter vans — Robyn Hobson on building a career across borders.",
    type: "article",
    images: [{ url: "https://www.gildre.com/images/robyn-hobson-headshot.jpg", width: 512, height: 512, alt: "Robyn Hobson, VP of Marketing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Robyn Hobson: From Cape Town Startup to US CMO — A Global Marketing Career Built on Grit",
    description: "13 years of marketing across South Africa, China, and the US — from Woolworths SA to VP of Marketing at Remote Vans.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Robyn Hobson: From Cape Town Startup to US CMO — A Global Marketing Career Built on Grit and Reinvention",
  description:
    "Robyn Hobson shares how 13 years of marketing across South Africa, China, and the US — from growing Woolworths SA to 500K fans to becoming VP of Marketing at Remote Vans — created one of the most varied and resilient career paths in global marketing.",
  image: "https://www.gildre.com/images/robyn-hobson-headshot.jpg",
  datePublished: "2024-05-01",
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
  mainEntityOfPage: "https://www.gildre.com/robynblog",
  about: [
    { "@type": "Person", name: "Robyn Hobson", jobTitle: "VP of Marketing", worksFor: { "@type": "Organization", name: "Remote Vans" } },
    { "@type": "Organization", name: "Remote Vans", url: "https://remotevans.com" },
    { "@type": "Organization", name: "Woolworths South Africa" },
    { "@type": "Organization", name: "Mobile Guardian" },
    { "@type": "Place", name: "Cape Town, South Africa" },
  ],
  keywords: "Robyn Hobson, Remote Vans, CMO marketing, South Africa marketing, Cape Town entrepreneur, Woolworths South Africa, UCT MBA, global marketing career, Stevie Award, Female Executive, Gildre Spotlight Podcast, startup marketing",
};

export default function RobynBlog() {
  return (
    <div style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
              Gildre Spotlight
            </span>
            <span className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>Podcast Recap · Marketing · Global Career</span>
          </div>
          <h1
            className="text-[clamp(1.9rem,4.5vw,3.25rem)] font-bold leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Robyn Hobson: From Cape Town Startup to{" "}
            <span style={{ color: "#C9A96E" }}>US CMO</span> — A Global Marketing Career Built on Grit and Reinvention
          </h1>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Digital agencies. Mobile tech exits. Crisis comms at a low-cost airline. An MBA from UCT. EdTech at scale. And now, marketing Sprinter vans. Robyn Hobson's 13-year career across South Africa, China, and the US is one of the most genuinely global — and genuinely varied — marketing journeys you'll come across. This is that story.
          </p>

          {/* Meta row */}
          <div className="mt-8 flex flex-wrap items-center gap-6 pb-8" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                <Image src="/images/gildre-logo.png" alt="Gildre" fill className="object-contain brightness-0 invert" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Gildre</p>
                <p className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.4)" }}>Gildre Spotlight Podcast</p>
              </div>
            </div>
            <div className="flex gap-5 text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
              <span>8 min read</span>
              <span>·</span>
              <span>Cape Town · China · Startup Marketing · Remote Vans</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────────────────────── */}
      <article className="mx-auto max-w-3xl px-6 py-16">

        {/* Headshot */}
        <div className="mb-10 flex flex-col items-center">
          <div className="overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)", maxWidth: "360px", width: "100%" }}>
            <Image
              src="/images/robyn-hobson-headshot.jpg"
              alt="Robyn Hobson — VP of Marketing at Remote Vans"
              width={400}
              height={400}
              className="w-full"
              style={{ display: "block" }}
            />
            <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
              <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>Robyn Hobson — VP of Marketing at Remote Vans, Bronze Stevie Award winner</p>
            </div>
          </div>
        </div>

        {/* Pull quote up top */}
        <blockquote
          className="mb-10 rounded-xl px-7 py-6 text-base italic leading-relaxed"
          style={{
            borderLeft: "3px solid #C9A96E",
            backgroundColor: "rgba(201,169,110,0.06)",
            color: "rgba(255,255,255,0.75)",
          }}
        >
          "My career has been anything but boring! I interned at a digital marketing agency that was home to some of the best creative minds in Africa, dove into the deep end at a mobile technology start-up that successfully exited, learnt how vital a crisis communications plan is at a low-cost airline, dipped a toe into corporate waters, ate far too much chocolate launching a FMCG brand, started a business, studied, spent time scaling a global EdTech company, and then... started marketing Sprinter vans."
          <footer className="mt-3 text-sm not-italic" style={{ color: "rgba(201,169,110,0.8)" }}>— Robyn Hobson</footer>
        </blockquote>

        <Section title="South African Grit: The Foundation of Everything" />
        <Body>
          Robyn Hobson's story begins in South Africa — a country that teaches resilience before it teaches anything else. Growing up and building her early career there instilled a mindset that would carry her across continents and through industries that had nothing obvious in common. The grit she developed in Cape Town became her most transferable skill.
        </Body>
        <Body>
          Her journey took her from Africa to China and back — experiences that didn't just expand her geography but fundamentally shaped her entrepreneurial mindset. Each move required her to start over, read new cultures, and find ways to add value in environments she didn't grow up in. That adaptability is not something you learn in a classroom.
        </Body>

        <Section title="13 Years, 6 Industries: The Career No One Would Have Planned" />
        <Body>
          Robyn's marketing career began at a digital agency in South Africa — home to some of the best creative minds on the continent. It was a high-energy introduction to the craft, and she thrived in it. From there, she joined a high-growth mobile technology startup as one of their first hires — experiencing firsthand what it means to build something from nothing and then watch it successfully exit.
        </Body>
        <Body>
          That startup exit opened a door to entrepreneurship. Robyn launched her own digital marketing consulting firm, attracting major clients including Africa's premium lifestyle retailer. Building something independently — owning client relationships, managing outcomes, carrying the risk — gave her a founder's perspective that would shape every corporate role that followed.
        </Body>
        <Body>
          Her next move was into the corporate world at <strong style={{ color: "#fff" }}>Woolworths South Africa</strong> as Social Media Manager. There she grew their online community to over <strong style={{ color: "#C9A96E" }}>500,000 fans</strong> — making it the largest retail social community in Africa at the time. From Woolworths, she moved into crisis communications and PR at a low-cost airline, learning one of marketing's most underrated disciplines: what you do when everything goes wrong.
        </Body>

        <Section title="The MBA, EdTech, and Going Global" />
        <Body>
          Throughout all of this, Robyn completed her <strong style={{ color: "#fff" }}>MBA from the University of Cape Town's Graduate School of Business</strong> — one of Africa's most prestigious programs. The combination of real-world startup experience, corporate marketing at scale, and a rigorous academic credential positioned her for the next chapter: going global.
        </Body>
        <Body>
          She spent time scaling a global EdTech company — an experience that exposed her to the challenges of marketing products across different markets, languages, and regulatory environments simultaneously. Then came a role at <strong style={{ color: "#fff" }}>Mobile Guardian</strong> as VP of Marketing and Sales, where she operated at the intersection of tech and education on an international stage.
        </Body>

        {/* Remote Vans team photo */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/robyn-hobson-remote-vans.jpeg"
            alt="The Remote Vans team"
            width={800}
            height={600}
            className="w-full object-cover"
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>The Remote Vans team — Robyn serves as VP of Marketing</p>
          </div>
        </div>

        <Section title="Remote Vans: Where Startups and Sprinters Meet" />
        <Body>
          Today, Robyn is VP of Marketing at <strong style={{ color: "#fff" }}>Remote Vans</strong> — a company building fully-equipped mobile offices in Sprinter vans for the remote work era. It's a role that perfectly combines everything she's built across her career: the scrappy energy of a startup, the need for strong brand and storytelling, and the complexity of a physical product in an emerging market.
        </Body>
        <Body>
          For someone who's marketed everything from digital platforms to airline crisis communications to FMCG chocolate launches, marketing a van that functions as a mobile office might seem like a left turn. For Robyn, it's a natural next chapter — one that lets her combine her love of startups, her experience in brand building, and her ability to connect with communities in an authentic way.
        </Body>

        <Section title="Awards, Mentorship, and Giving Back" />
        <Body>
          Robyn's impact has not gone unrecognized. She's a <strong style={{ color: "#fff" }}>Bronze Stevie Award winner for Female Executive of the Year</strong>, has been named a <strong style={{ color: "#fff" }}>U35 Marketing Rising Star</strong>, and is a finalist for B2B Marketing Excellence. She also mentors young entrepreneurs and serves as a judge for major marketing award shows — sharing the perspective she's spent 13 years building.
        </Body>
        <Body>
          She is also passionate about social impact, supporting the <strong style={{ color: "#fff" }}>Put Foot Foundation</strong> — a South African non-profit dedicated to giving opportunities to disadvantaged youth. The foundation reflects the values Robyn has carried with her across every continent and every role.
        </Body>

        <Section title="Robyn's Advice: Culture, Relationships, and Sensitivity" />
        <Body>
          Having built teams and managed brands across multiple continents, Robyn has strong views on what actually makes organizations work. She emphasizes the importance of intentional company culture — not culture as a ping-pong table or a values poster, but culture as the lived day-to-day behavior of a team. She believes relationships are the core infrastructure of any marketing program, and that sensitivity training isn't a nice-to-have — it's a prerequisite for building global brands that actually resonate.
        </Body>
        <Body>
          Her advice for founders and marketing leaders: hire people whose curiosity matches their competence. The marketers who thrive across industries, cultures, and company stages are the ones who never stop being interested in what they don't yet know.
        </Body>

        {/* Key facts block */}
        <div
          className="my-12 rounded-2xl p-8"
          style={{
            backgroundColor: "rgba(201,169,110,0.05)",
            border: "1px solid rgba(201,169,110,0.15)",
          }}
        >
          <p className="text-[0.65rem] font-bold uppercase tracking-widest mb-5" style={{ color: "#C9A96E" }}>
            Robyn Hobson at a Glance
          </p>
          <ul className="flex flex-col gap-4">
            {[
              "13+ years in marketing across South Africa, China, and the United States",
              "Grew Woolworths South Africa's social community to 500,000+ fans — largest in Africa",
              "MBA from the University of Cape Town Graduate School of Business",
              "Bronze Stevie Award for Female Executive of the Year",
              "Named U35 Marketing Rising Star and B2B Marketing Excellence finalist",
              "Currently VP of Marketing at Remote Vans",
              "Mentor, judge, and supporter of the Put Foot Foundation",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0" style={{ color: "#C9A96E" }}>✓</span>
                <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA block */}
        <div
          className="mt-16 rounded-2xl p-8 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(201,169,110,0.08) 0%, rgba(28,39,68,0.6) 100%)",
            border: "1px solid rgba(201,169,110,0.2)",
          }}
        >
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            Gildre Community
          </p>
          <h3
            className="mt-3 text-xl font-bold text-white sm:text-2xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Build alongside operators like Robyn
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Gildre connects founders and operators with the peers, mentors, and resources they need to build globally — regardless of where they started.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://gildre.circle.so/checkout/gildre-silver-membership"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-7 py-3 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
            >
              Join Gildre →
            </a>
            <a
              href="https://linktr.ee/starttoscale"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-7 py-3 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              Listen to the Full Episode
            </a>
          </div>
        </div>

        {/* External links */}
        <div className="mt-10 flex flex-wrap gap-5 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
          <a href="https://remotevans.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A96E] transition-colors">Remote Vans →</a>
          <a href="https://www.putfootfoundation.org" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A96E] transition-colors">Put Foot Foundation →</a>
          <a href="https://www.linkedin.com/in/robynhobson" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A96E] transition-colors">Robyn on LinkedIn →</a>
        </div>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-2">
          {["Marketing", "South Africa", "Remote Vans", "CMO", "Global Career", "Podcast"].map((tag) => (
            <span
              key={tag}
              className="rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-widest"
              style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.35)" }}
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-12 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <Link href="/content" className="text-sm transition-colors hover:text-[#C9A96E]" style={{ color: "rgba(255,255,255,0.4)" }}>
            ← Back to Founder Content
          </Link>
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
  );
}

function Section({ title }: { title: string }) {
  return (
    <h2
      className="mt-12 mb-4 text-xl font-bold text-white sm:text-2xl"
      style={{ fontFamily: "var(--font-fraunces)" }}
    >
      {title}
    </h2>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
      {children}
    </p>
  );
}
