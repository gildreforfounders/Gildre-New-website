import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Armando Vera Carvajal: How a First-Generation Mexican Immigrant Built Hangtight — an AI Social Planning App — After a Journey Through the Amazon | Gildre",
  description:
    "Armando Vera Carvajal immigrated to the US at age four, sold cheesecakes door-to-door as a kid, studied in Paris and Singapore, trekked into the Amazon, and built Hangtight — an AI-powered social planning app that acquired its competition. Featured on the Gildre Start to Scale Podcast.",
  keywords: [
    "Armando Vera Carvajal",
    "Hangtight app",
    "first-generation immigrant founder",
    "Mexican American entrepreneur",
    "AI social planning app",
    "GoPlanIt acquisition",
    "University of Texas Austin entrepreneur",
    "immigrant startup founder story",
    "Hangtight CEO co-founder",
    "Gildre Start to Scale Podcast",
  ],
  openGraph: {
    title: "Armando Vera Carvajal: From First-Generation Immigrant to AI Startup Founder",
    description:
      "His parents gave up careers in Mexico to pursue the American Dream. Armando Vera Carvajal is building Hangtight to honor what they sacrificed — one AI-powered group hangout at a time.",
    type: "article",
    url: "https://www.gildre.com/blog/armando-vera-carvajal-hangtight-amazon",
    images: [{ url: "https://www.gildre.com/images/armando-vera-headshot.webp" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Armando Vera Carvajal: How a First-Generation Mexican Immigrant Built Hangtight — an AI Social Planning App — After a Journey Through the Amazon",
  "description":
    "Armando Vera Carvajal immigrated to the US at age four, sold cheesecakes door-to-door as a kid, studied in Paris and Singapore, trekked into the Amazon, and built Hangtight — an AI-powered social planning app that acquired its competition.",
  "image": "https://www.gildre.com/images/armando-vera-headshot.webp",
  "author": { "@type": "Organization", "name": "Gildre", "url": "https://www.gildre.com" },
  "publisher": {
    "@type": "Organization",
    "name": "Gildre",
    "url": "https://www.gildre.com",
    "logo": { "@type": "ImageObject", "url": "https://www.gildre.com/images/gildre-logo.png" },
  },
  "datePublished": "2024-01-01",
  "dateModified": "2024-01-01",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.gildre.com/blog/armando-vera-carvajal-hangtight-amazon" },
  "keywords": "Armando Vera Carvajal, Hangtight app, first-generation immigrant founder, Mexican American entrepreneur, AI social planning, GoPlanIt acquisition, UT Austin, Amazon Peru, ayahuasca entrepreneur, Gildre podcast",
  "about": [
    { "@type": "Person", "name": "Armando Vera Carvajal" },
    { "@type": "Organization", "name": "Hangtight" },
    { "@type": "Organization", "name": "GoPlanIt" },
    { "@type": "Organization", "name": "University of Texas at Austin" },
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

export default function ArmandoBlog() {
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
                style={{ backgroundColor: "rgba(123,111,166,0.2)", color: "#7B6FA6" }}
              >
                Mindset
              </span>
              <span
                className="rounded-full px-3 py-1 text-[0.6rem] font-bold uppercase tracking-widest"
                style={{ backgroundColor: "rgba(91,127,166,0.2)", color: "#5B7FA6" }}
              >
                Growth
              </span>
              <span className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
                Start to Scale Podcast · Gildre Spotlight
              </span>
            </div>
            <h1
              className="text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.1] text-white"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Armando Vera Carvajal: How a First-Generation Mexican Immigrant Built Hangtight After a Journey Through the Amazon
            </h1>
            <p className="mt-6 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              His parents gave up careers — a would-be president and a physician — to pursue the American Dream. Armando arrived at age four, sold cheesecakes door-to-door in high school, studied in Paris and Singapore, trekked deep into the Peruvian Amazon, and built an AI startup that acquired its competition.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-6 text-[0.7rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
              <span>Co-Founder &amp; CEO, Hangtight</span>
              <span>·</span>
              <span>University of Texas at Austin</span>
              <span>·</span>
              <span>12 min read</span>
            </div>
          </div>
        </section>

        {/* ── Body ─────────────────────────────────────────────────────── */}
        <article className="mx-auto max-w-3xl px-6 py-16">

          {/* Opening pull quote */}
          <Quote>
            "Quitting was unacceptable given my parents sacrificed everything for me to be here."
          </Quote>

          {/* Childhood airport photo — the most powerful image, leads the article */}
          <div className="my-10 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            <Image
              src="/images/armando-vera-arriving-usa.webp"
              alt="Young Armando Vera Carvajal arriving in the United States with his father"
              width={960}
              height={960}
              className="w-full"
              style={{ objectFit: "cover", maxHeight: "500px", objectPosition: "center" }}
            />
            <p className="px-4 py-3 text-[0.68rem]" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "#0a1020" }}>
              Armando arriving in the United States with his father — the moment that set everything in motion
            </p>
          </div>

          {/* Key facts */}
          <div
            className="my-10 rounded-2xl p-7"
            style={{ backgroundColor: "rgba(201,169,110,0.06)", border: "1px solid rgba(201,169,110,0.15)" }}
          >
            <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-widest" style={{ color: "#C9A96E" }}>
              Armando Vera Carvajal at a Glance
            </p>
            <ul className="space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
              <li>• Born in Mexico — immigrated to the US at age four with parents and sister Gloria</li>
              <li>• Parents gave up careers (aspiring politician + physician) to work as missionaries in the US</li>
              <li>• First entrepreneurial venture: selling homemade cheesecakes door-to-door in high school</li>
              <li>• University of Texas at Austin — double major: International Relations + Corporate Communication</li>
              <li>• Studied abroad in Paris and Singapore; twice rejected by UT's McCombs School of Business</li>
              <li>• Trekked into the Amazon jungle in Peru — experienced ayahuasca plant medicine</li>
              <li>• Co-Founder &amp; CEO of Hangtight — AI-powered social planning app</li>
              <li>• Acquired competitor GoPlanIt (formerly Gathr) — adding ML models, tech stack, and user base</li>
              <li>• Advisor team includes former COO of OpenTable, early TikTok employee, former VP Engineering at Indeed</li>
            </ul>
          </div>

          <Section title="The Sacrifice That Started Everything">
            <Body>
              Armando Vera Carvajal was four years old when his parents made the decision that would define his entire life. His father, who harbored serious political ambitions in Mexico — who genuinely imagined himself as the country's future president — walked away from that path. His mother, a trained physician, did the same. They packed what they could, took their two children, and moved to the United States to work as missionaries.
            </Body>
            <Body>
              The calculus of what they gave up didn't register for a four-year-old. It registers now.
            </Body>
            <Body>
              "I realized that this was the most defining moment of our lives," Armando says. Everything he has built since — every company, every risk, every difficult decision — sits on top of that one act of sacrifice.
            </Body>
          </Section>

          <Section title="Learning English in Third Grade, Selling Cheesecakes in High School">
            <Body>
              The early years in America were disorienting. His parents insisted on speaking Spanish at home — a deliberate choice to preserve their culture, not negligence — which meant Armando didn't speak fluent English until third grade. The gap between home and school was constant: a different language, a different cultural frame, a persistent sense of not quite fitting in.
            </Body>
            <Quote>
              "Adapting and assimilating into a new culture is not easy. I didn't speak English fluently until I was in the third grade, mainly because at home, Spanish was the language that was spoken. My parents wanted to make sure that I could still observe that culture."
            </Quote>
            <Body>
              Rather than letting that friction become bitterness, Armando channeled it into curiosity. The outsider's perspective — the habit of observing how systems work rather than taking them for granted — showed up early in unexpected ways.
            </Body>
            <Body>
              In high school, he was already running a micro-business: baking cheesecakes at home and selling them door-to-door. Not a lemonade stand. A product, a pitch, and a route. The entrepreneurial instinct was there before he had a word for it.
            </Body>
          </Section>

          {/* Headshot */}
          <div className="my-10 flex flex-col items-center">
            <div className="overflow-hidden rounded-2xl" style={{ maxWidth: "440px", width: "100%", border: "1px solid rgba(255,255,255,0.07)" }}>
              <Image
                src="/images/armando-vera-headshot.webp"
                alt="Armando Vera Carvajal — co-founder and CEO of Hangtight"
                width={960}
                height={1280}
                className="w-full"
                style={{ objectFit: "cover", objectPosition: "top", maxHeight: "560px" }}
              />
            </div>
            <p className="mt-3 text-[0.68rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
              Armando Vera Carvajal — co-founder and CEO of Hangtight
            </p>
          </div>

          <Section title="UT Austin: Rejection, Reinvention, and the Right Room">
            <Body>
              At the University of Texas at Austin, Armando applied twice to the McCombs School of Business. He was rejected both times. The path he did find — an emerging major in international relations, combined with corporate communication — turned out to be richer than what he'd been chasing.
            </Body>
            <Body>
              Being among the first students in a new program meant being in rooms where the rules weren't written yet. It meant meeting people at an early stage of their own journeys — people who later became investors, mentors, and supporters. The doors that opened were different from the ones he'd tried to force.
            </Body>
            <Quote>
              "Your experiences, decisions, and relationships impact you in ways you can't immediately see but shape your path for years."
            </Quote>
            <Body>
              The international relations track took him abroad — first Paris, then Singapore. Each stop expanded his frame for what was possible, reinforced his instinct that the world is bigger than any single market, and deepened his conviction that Mexico — often written off as an emerging economy — was a potential powerhouse waiting to be unlocked.
            </Body>
          </Section>

          {/* Family photo */}
          <div className="my-10 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            <Image
              src="/images/armando-vera-family.webp"
              alt="Armando Vera Carvajal with his family"
              width={960}
              height={960}
              className="w-full"
              style={{ objectFit: "cover", maxHeight: "480px", objectPosition: "top" }}
            />
            <p className="px-4 py-3 text-[0.68rem]" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "#0a1020" }}>
              Armando with his family — the people whose sacrifice shaped everything he's built
            </p>
          </div>

          <Section title="Into the Amazon: The Trip That Changed the Direction">
            <Body>
              After college, with corporate career options available and the startup world beckoning, Armando made a different kind of move. He traveled to Peru and went deep into the Amazon jungle — a journey motivated not by tourism but by a genuine search for clarity.
            </Body>
            <Body>
              He experienced ayahuasca, the plant medicine used in traditional Amazonian healing ceremonies. The experience — like many who have described it — surfaced the fears and insecurities he'd been carrying: the imposter syndrome of the immigrant kid, the weight of his parents' sacrifice, the self-doubt that had quietly accumulated through years of trying to prove himself worthy of the opportunities they'd created.
            </Body>
            <Quote>
              "Having a clear understanding of who you are and why you are doing it is crucial in succeeding as an entrepreneur."
            </Quote>
            <Body>
              The Amazon didn't hand him a business plan. It stripped away the noise long enough for him to hear what he actually wanted to do — and to believe, for the first time without qualification, that he could do it.
            </Body>
          </Section>

          {/* Amazon village photo */}
          <div className="my-10 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            <Image
              src="/images/armando-vera-amazon-village.webp"
              alt="Armando Vera Carvajal in the Amazon jungle in Peru"
              width={960}
              height={1280}
              className="w-full"
              style={{ objectFit: "cover", maxHeight: "560px", objectPosition: "top" }}
            />
            <p className="px-4 py-3 text-[0.68rem]" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "#0a1020" }}>
              Deep in the Amazon — the expedition that reoriented his entrepreneurial path
            </p>
          </div>

          {/* Amazon river photo */}
          <div className="my-10 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            <Image
              src="/images/armando-vera-amazon-river.webp"
              alt="Armando Vera Carvajal on the Amazon River in Peru"
              width={960}
              height={1280}
              className="w-full"
              style={{ objectFit: "cover", maxHeight: "480px", objectPosition: "center" }}
            />
          </div>

          <Section title="Building Hangtight: The AI App That Makes Group Plans Actually Happen">
            <Body>
              Hangtight started as a conversation between Armando and his co-founder Rich Fortune about a problem everyone has: coordinating group hangouts. The endless back-and-forth texts. The ghosting. The "sure, let me know" that never leads anywhere. The indecision that kills plans before they start.
            </Body>
            <Body>
              Their answer: an AI-powered social planning assistant that removes the friction entirely. Hangtight uses advanced natural language processing to understand social preferences, suggest plans, and get groups from conversation to confirmed plans — without the usual chaos.
            </Body>
            <Body>
              When early feedback from friends and mentors validated the concept, they committed. When they needed to accelerate, they took an unexpected route: acquiring their competition.
            </Body>
          </Section>

          <Section title="The Acquisition: Buying GoPlanIt to Skip Ahead">
            <Body>
              Hangtight's biggest early milestone wasn't a funding round or a viral launch. It was the acquisition of GoPlanIt — formerly known as Gathr — a competing social planning platform with an existing tech stack, machine learning models, and established user base.
            </Body>
            <Body>
              The negotiation wasn't clean. The financial hurdles were real. But getting it done gave Hangtight immediate advantages that would have taken years to build from scratch: infrastructure, data, and a team of users already familiar with the problem they were solving.
            </Body>
            <Body>
              The deal was a signal of how Armando operates: when a shortcut to the right outcome is available, take it. Conventional paths are not inherently better than unconventional ones.
            </Body>
          </Section>

          <Section title="The Advisory Team: Builders Who've Scaled It Before">
            <Body>
              One of Hangtight's most tangible assets is its advisor network. Armando has assembled a team with hands-on experience at the companies that defined the last decade of consumer tech:
            </Body>
            <div className="mb-6 rounded-xl p-6" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <ul className="space-y-3 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                <li>• <span className="text-white font-medium">Former COO of OpenTable</span> — marketplace scaling and operations</li>
                <li>• <span className="text-white font-medium">Former VP of Consumer Marketing, OpenTable / Lyft / SurveyMonkey</span> — growth and retention at scale</li>
                <li>• <span className="text-white font-medium">Former Director of Data Science &amp; Analytics, Bird Scooter</span> — computational neuroscientist with 20+ years in ML/AI</li>
                <li>• <span className="text-white font-medium">Former VP of Engineering, Indeed</span> — engineering leadership at one of the world's highest-traffic platforms</li>
                <li>• <span className="text-white font-medium">Former Head of Product Design, LinkedIn</span> — consumer product design at global scale</li>
                <li>• <span className="text-white font-medium">Early TikTok team member</span> — built the influencer and celebrity platform from zero to one</li>
              </ul>
            </div>
            <Body>
              Getting access to advisors at this level — and getting them genuinely engaged in the mission — is itself a signal about what Armando has built. People with options choose where they spend time carefully.
            </Body>
          </Section>

          {/* Mountain photo */}
          <div className="my-10 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            <Image
              src="/images/armando-vera-mountain.webp"
              alt="Armando Vera Carvajal camping in the mountains"
              width={960}
              height={960}
              className="w-full"
              style={{ objectFit: "cover", maxHeight: "520px", objectPosition: "center" }}
            />
            <p className="px-4 py-3 text-[0.68rem]" style={{ color: "rgba(255,255,255,0.35)", backgroundColor: "#0a1020" }}>
              Armando in the mountains — the same drive that fueled the Amazon expedition and the Amazon acquisition
            </p>
          </div>

          <Section title="Why He Can't Quit">
            <Body>
              For many founders, the pressure to succeed is professional. For Armando, it's personal in a way that most founders don't carry. Every hard decision, every fundraising no, every product pivot — it all connects back to a four-year-old kid sitting on a suitcase outside an airport, watching his father push everything they owned into a new country.
            </Body>
            <Quote>
              "Don't give up and quit. If you succeed, you succeed big. If you fail, guess what? Try again, do something else — but don't give up."
            </Quote>
            <Body>
              His parents didn't build a fallback. They went all in. Armando treats entrepreneurship the same way: not as one option among several, but as the thing he owes them — the return on an investment they made with their lives, not their money.
            </Body>
            <Body>
              That's the kind of "why" that doesn't evaporate when a launch goes sideways or a funding conversation goes cold. It compounds.
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
              Hear Armando's full story — in his own words
            </p>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
              This blog is adapted from Armando's episode on the Gildre Start to Scale Podcast. Listen for the unedited conversation — including the Amazon expedition, the GoPlanIt acquisition story, and his vision for where Hangtight goes next.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://linktr.ee/starttoscale"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full px-8 py-3 text-sm font-bold transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
              >
                Listen to the Podcast →
              </a>
              <a
                href="https://www.hangtight.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full px-8 py-3 text-sm font-semibold transition-opacity hover:opacity-80"
                style={{ color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                Download Hangtight →
              </a>
            </div>
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
              Built for founders who have something to prove.
            </h3>
            <p className="text-sm leading-relaxed mb-8 mx-auto max-w-md" style={{ color: "rgba(255,255,255,0.55)" }}>
              Gildre is a private community for founders navigating the hardest parts of building — from first customers to first acquisition. Apply to join.
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
