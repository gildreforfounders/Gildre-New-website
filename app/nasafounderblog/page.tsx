import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "From NASA Engineer to Y Combinator Founder: Building an Open-Source AI Company After Working on Mars Rovers | Gildre",
  description:
    "From Louisiana's Cancer Alley to NASA's Mars rovers to Y Combinator — the founder of ChatOpenSource on physics, AI, and building startups from problems you've actually lived.",
  keywords: ["NASA founder", "ChatOpenSource", "Y Combinator", "open source AI", "Mars rover engineer", "Gildre podcast"],
  openGraph: {
    title: "From NASA Engineer to Y Combinator Founder: Building an Open-Source AI Company After Working on Mars Rovers",
    description:
      "From Cancer Alley to NASA's Curiosity mission to Y Combinator — the founder of ChatOpenSource on physics, AI, and why the best startups solve problems you've lived.",
    type: "article",
    images: [{ url: "https://www.gildre.com/images/nasa-founder-headshot.webp", width: 512, height: 512, alt: "NASA engineer turned Y Combinator founder" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "From NASA Engineer to Y Combinator Founder: Building an Open-Source AI Company After Mars Rovers",
    description: "From Cancer Alley to NASA's Mars rovers to Y Combinator — the ChatOpenSource founder on physics, AI, and unlikely startups.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "From NASA Engineer to Y Combinator Founder: Building an Open-Source AI Company After Working on Mars Rovers",
  description:
    "Growing up in Louisiana's 'Cancer Alley,' working on NASA's Curiosity and Maven missions, and ultimately founding ChatOpenSource through Y Combinator — a non-linear founder journey through physics, aerospace, and AI.",
  image: "https://www.gildre.com/images/nasa-founder-headshot.webp",
  datePublished: "2024-04-01",
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
  mainEntityOfPage: "https://www.gildre.com/nasafounderblog",
  about: [
    { "@type": "Organization", name: "ChatOpenSource" },
    { "@type": "Organization", name: "NASA" },
    { "@type": "Organization", name: "Y Combinator" },
    { "@type": "Organization", name: "Deliv" },
    { "@type": "Organization", name: "Northrop Grumman" },
  ],
  keywords: "NASA founder, ChatOpenSource, Y Combinator, open source AI, ChatGPT alternative, LSU physics, Curiosity rover, Maven mission, Deliv startup, Louisiana entrepreneur, Gildre Spotlight Podcast",
};

export default function NasaFounderBlog() {
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
            <span className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>Podcast Recap · AI · Deep Tech · Y Combinator</span>
          </div>
          <h1
            className="text-[clamp(1.9rem,4.5vw,3.25rem)] font-bold leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            From NASA Engineer to{" "}
            <span style={{ color: "#C9A96E" }}>Y Combinator Founder</span>:{" "}
            Building an Open-Source AI Company After Working on Mars Rovers
          </h1>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            From growing up in Louisiana's "Cancer Alley" to working on NASA's Curiosity and Maven missions, to founding ChatOpenSource through Y Combinator — this is what a non-linear founder journey actually looks like. Excerpts from the Gildre Spotlight Podcast.
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
              <span>11 min read</span>
              <span>·</span>
              <span>NASA · Y Combinator · Open-Source AI · Louisiana → Bay Area</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────────────────────── */}
      <article className="mx-auto max-w-3xl px-6 py-16">

        {/* Headshot */}
        <div className="mb-10 flex flex-col items-center">
          <div className="overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)", maxWidth: "380px", width: "100%" }}>
            <Image
              src="/images/nasa-founder-headshot.webp"
              alt="Founder of ChatOpenSource — from NASA to Y Combinator"
              width={600}
              height={600}
              className="w-full"
              style={{ display: "block" }}
            />
            <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
              <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>Founder of ChatOpenSource — from NASA's Curiosity mission to Y Combinator</p>
            </div>
          </div>
        </div>

        <Body>
          Not every founder story starts in Silicon Valley. Some start in South Louisiana, off the Mississippi River, in a region locals call <strong style={{ color: "#fff" }}>"Cancer Alley"</strong> — a stretch dense with chemical plants, pollution, and health problems that shaped a young kid's determination to find a different life. This is one of those stories.
        </Body>

        <Section title="Growing Up in 'Cancer Alley': The Origin of a Different Kind of Drive" />
        <Body>
          Growing up in South Louisiana, I was immersed in a place you might come across if you Google "Cancer Alley." It's a region with a significant amount of pollution due to the abundance of chemical plants, one of which my father worked for. Health problems were common in our family and among our friends.
        </Body>
        <Body>
          Determined to find a different path, I went to Louisiana State University (LSU) where I earned a degree in physics and mathematics. Initially, I thought I might become a physicist. But I also had another dream brewing — one that had taken root at around age ten, when my parents gave me an old computer and, with it, access to a world beyond my front door.
        </Body>
        <Body>
          I encountered the Bay Area tech culture through that screen and it stirred a feeling of optimism that was in stark contrast with my surroundings. Google was gaining momentum just as I was discovering the world beyond South Louisiana. The first AI winter — that period of reduced funding and interest in artificial intelligence — was waning. These experiences ignited a desire for something grounded in science and evidence, underscored by fresh mindsets and new technology.
        </Body>

        <Section title="From LSU Physics to NASA's Mars Missions" />
        <Body>
          My journey was hardly linear. I initially pursued a PhD in quantum computing but ended up working for NASA instead — which, in hindsight, was not the worst pivot.
        </Body>
        <Body>
          At NASA, I worked on high-profile missions including <strong style={{ color: "#fff" }}>Maven</strong> and <strong style={{ color: "#fff" }}>Curiosity</strong> — the Mars Science Laboratory rover that continues to operate on the Martian surface to this day. I honed my skills in systems engineering, spacecraft operations, and testing. The work was extraordinary. The pace was not.
        </Body>
        <Body>
          I also had the opportunity to work at Northrop Grumman, focusing on the MQ-4C Triton — a Navy unmanned surveillance aircraft. There I further developed my expertise in systems engineering and DevOps while working within the cybersecurity and infrastructure domains.
        </Body>
        <Body>
          Despite the thrill of working on missions that made the news, I couldn't escape a growing frustration. The pace was too slow. The operations too bureaucratic. It wasn't the fast-moving, fail-fast environment I was hungry for. These prestigious organizations gave me an exceptional foundation — but they also made clear exactly what kind of environment I needed to build something of my own.
        </Body>

        <Section title="The First Taste of Startup Speed: Deliv" />
        <Body>
          The frustrations at NASA and Northrop Grumman eventually led me to Deliv — a courier delivery startup aiming to make deliveries within one hour of the order being placed. It was my first experience in the breakneck pace of a real startup environment.
        </Body>
        <Body>
          Our team went from zero to <strong style={{ color: "#fff" }}>one million deliveries per day in just two years</strong> — an almost incomprehensible pace compared to the meticulously slow operations I'd come from. The contrast was electric. This was the environment I'd been looking for.
        </Body>
        <Body>
          Our rapid success prompted Target to acquire Deliv. Suddenly, I found myself inside a Fortune 50 retailer — a valuable education in its own right, and a bridge to what came next.
        </Body>

        <Section title="Y Combinator and the Founding of ChatOpenSource" />
        <Body>
          Following my time at Target, I joined <strong style={{ color: "#fff" }}>Y Combinator</strong> — one of the world's most prestigious startup accelerators — where I founded my first company. It was an intense, transformative process.
        </Body>
        <Body>
          The initial journey involved numerous pivots, failed products, and unmet customer needs. Each failure installed a lesson: it's not about building products you love — it's about understanding what your customers actually need and meeting them there. Eventually, after considerable trial and error, I founded <strong style={{ color: "#fff" }}>ChatOpenSource</strong>.
        </Body>

        {/* ChatOpenSource logo on dark bg */}
        <div
          className="my-12 flex items-center justify-center overflow-hidden rounded-2xl px-10 py-10"
          style={{ border: "1px solid rgba(201,169,110,0.15)", backgroundColor: "#0a1020" }}
        >
          <Image
            src="/images/chatopensource-logo.webp"
            alt="ChatOpenSource — open-source alternative to ChatGPT"
            width={500}
            height={120}
            className="w-full object-contain"
            style={{ maxWidth: "360px" }}
          />
        </div>

        <Section title="What ChatOpenSource Is — and Why It Matters" />
        <Body>
          ChatOpenSource delivers an open-source alternative to ChatGPT. It's more versatile and purpose-built for companies with strict privacy and security requirements — including those in the legal, healthcare, and financial sectors.
        </Body>
        <Body>
          The enterprise world is vast, and while consumer AI tools like ChatGPT focus on broad, general use, ChatOpenSource aims to meet the complex and specific needs of business sectors where data sovereignty isn't optional. As the centralization of power in the AI industry becomes an increasingly serious concern, ChatOpenSource offers organizations a path to AI capabilities on their own terms.
        </Body>

        {/* Pull quote */}
        <blockquote
          className="my-8 rounded-xl px-7 py-6 text-base italic leading-relaxed"
          style={{
            borderLeft: "3px solid #C9A96E",
            backgroundColor: "rgba(201,169,110,0.06)",
            color: "rgba(255,255,255,0.75)",
          }}
        >
          "You can have all the money in the world, but if you see a need in society and you fulfill that need and you make something new — that's what gives me goosebumps. That's what it's all about, really."
        </blockquote>

        <Section title="The Lessons That Carry Forward" />
        <Body>
          The idea of building my own startup was once a vague dream nurtured by a computer in South Louisiana. It became real through a series of pivots, realizations, and experiments that pushed my limits. The path from NASA's Jet Propulsion Laboratory to Y Combinator to building an open-source AI company is not one anyone would have drawn on a whiteboard. But it makes complete sense in retrospect.
        </Body>

        {/* Key lessons block */}
        <div
          className="my-12 rounded-2xl p-8"
          style={{
            backgroundColor: "rgba(201,169,110,0.05)",
            border: "1px solid rgba(201,169,110,0.15)",
          }}
        >
          <p className="text-[0.65rem] font-bold uppercase tracking-widest mb-5" style={{ color: "#C9A96E" }}>
            Takeaways for Founders
          </p>
          <ul className="flex flex-col gap-4">
            {[
              "Non-linear paths build non-obvious advantages — NASA gave a startup founder skills no CS degree does.",
              "Bureaucracy is a signal, not a life sentence. Use it to clarify what you actually want to build.",
              "Speed is a feature. Going from zero to 1M deliveries/day at Deliv rewired how fast 'fast' really is.",
              "Build what your customers love, not what you love. Pivots are the curriculum, not the failure.",
              "Open-source isn't just a product strategy — for enterprise AI, it's a trust strategy.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0" style={{ color: "#C9A96E" }}>✓</span>
                <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <Body>
          I would not be where I am today without the lessons learned from previous roles, mentors, peers, successes, and disappointments. The journey has not ended — it has only begun. The ever-evolving field of AI continues to pose new challenges, opportunities, and horizons to explore.
        </Body>
        <Body>
          So for those of you with a similar dream — even if you don't know any founders, software engineers, or people who've left your home state — remember this: aim to meet the needs of your customers. Focus on addressing compelling problems, find the right distribution strategy, and remember that as a founder, your job is to solve problems. The rest follows.
        </Body>

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
            Your background is your edge
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Gildre is built for founders with unconventional paths — scientists, engineers, operators, and builders who are turning deep expertise into companies. Join the community.
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

        {/* External link */}
        <div className="mt-10 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
          <a
            href="https://www.chatopensource.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9A96E] transition-colors"
          >
            Learn more about ChatOpenSource →
          </a>
        </div>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-2">
          {["NASA", "Y Combinator", "Open Source AI", "Deep Tech", "Founder Journey", "ChatGPT Alternative"].map((tag) => (
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
