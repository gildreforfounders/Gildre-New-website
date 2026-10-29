import type { Metadata } from "next";
import Image from "next/image";

const SLUG = "matt-savare-lowenstein-sandler-fansmit-ip-law-founder";
const CANONICAL = `https://www.gildre.com/blog/${SLUG}`;
const PUBLISHED = "2026-10-30";

export const metadata: Metadata = {
  alternates: { canonical: CANONICAL },
  title: "Matt Savare: IP Law, AI Legal Risks, and Building FansMet While Running a 400-Person Law Firm | Gildre",
  description:
    "Lowenstein Sandler partner and FansMet founder Matt Savare on the AI legal exposures founders are glossing over, how patents actually work, and why now is the best time to build.",
  keywords: [
    "Matt Savare Lowenstein Sandler",
    "AI legal risks founders",
    "startup IP law",
    "patent process startups",
    "FansMet sports tech",
    "Gildre expert in residence",
    "founder IP protection",
  ],
  openGraph: {
    title: "Matt Savare on IP Law, AI Legal Risks, and Building FansMet",
    description:
      "Lowenstein Sandler partner and FansMet founder Matt Savare on AI legal traps, patents, the IP clause every founder should read, and his best advice for early-stage builders.",
    url: CANONICAL,
    siteName: "Gildre",
    type: "article",
    publishedTime: PUBLISHED,
    images: [
      {
        url: "https://www.gildre.com/images/blog/matt-savare.jpg",
        width: 1500,
        height: 2100,
        alt: "Matt Savare, Partner at Lowenstein Sandler and founder of FansMet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matt Savare on IP Law, AI Legal Risks, and Building FansMet",
    description:
      "AI legal traps, patents, the one contract clause every founder must read, and why now is the best time to build.",
  },
};

const faqItems = [
  {
    q: "What are the biggest AI legal risks founders are overlooking?",
    a: "Three things: using public LLMs with confidential information (nothing you enter is protected), relying on AI to generate core IP without enough human involvement (making it uncopyrightable and unpatentable), and using the wrong model for the task. Always use enterprise versions if confidentiality matters.",
  },
  {
    q: "Is AI-generated content protectable by copyright or patent?",
    a: "Not reliably. If there is insufficient human creative involvement, the output may not qualify for copyright or patent protection. Founders who use AI to generate the core of their business need to ensure meaningful human contribution throughout the process to preserve IP rights.",
  },
  {
    q: "What is the difference between a provisional and non-provisional patent?",
    a: "A provisional patent is a faster, less expensive filing that establishes a priority date without full formal requirements. A non-provisional patent is the complete application that goes through examination. Most founders file provisional first, then convert to non-provisional once the invention is fully documented.",
  },
  {
    q: "Can founders file patents without an attorney?",
    a: "You can copyright something on your own and potentially trademark something without an attorney (though an attorney is still recommended for trademarks). For patents, Matt Savare strongly advises hiring an experienced patent attorney, and specifically one who specializes in your industry.",
  },
  {
    q: "What contract clause should every founder read before signing?",
    a: "IP ownership. Founders must ensure that any developer, contractor, or vendor they hire assigns all IP rights to the company. Look for work-for-hire language and explicit assignment of all work product. Missing this clause has cost early-stage companies their own technology.",
  },
  {
    q: "What is FansMet and how does it work?",
    a: "FansMet is a platform that lets users crowdsource alternative audio commentary and synchronize it in real time with whatever they are watching. A viewer can swap out broadcast announcers for a friend, a celebrity, or themselves, all perfectly timed regardless of stream latency. It is protected by two issued patents.",
  },
  {
    q: "Should founders use Claude, ChatGPT, or another AI model?",
    a: "Use enterprise versions of any model to protect confidentiality. Different models perform better for different tasks. For vibe coding, Matt specifically mentions Claude. The key rule: never input sensitive or proprietary information into a public, free-tier model.",
  },
  {
    q: "What advice does Matt Savare give to early-stage founders?",
    a: "Get off your ass and do it. With AI tools, founder communities, and vibe coding, there has never been a cheaper or faster time to build. Founders who wait for the perfect moment often wait for years. The tools available today remove most of the old excuses.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Matt Savare: IP Law, AI Legal Risks, and Building FansMet While Running a 400-Person Law Firm",
  description:
    "Lowenstein Sandler partner and FansMet founder Matt Savare on AI legal traps, patents, the IP clause every founder should read, and his best advice for early-stage builders.",
  image: "https://www.gildre.com/images/blog/matt-savare.jpg",
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { "@type": "Person", name: "Matt Savare", url: "https://www.lowenstein.com" },
  publisher: {
    "@type": "Organization",
    name: "Gildre",
    logo: { "@type": "ImageObject", url: "https://www.gildre.com/images/gildre-logo.png" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function BlogPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>

        {/* Hero */}
        <section
          className="relative overflow-hidden px-6 pb-16 pt-32"
          style={{ background: "linear-gradient(160deg, #080e1a 0%, #1C2744 55%, #0a1020 100%)" }}
        >
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10"
            style={{ background: "radial-gradient(ellipse, #C9A96E 0%, transparent 65%)" }}
          />
          <div className="relative mx-auto max-w-3xl">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span
                className="rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-widest"
                style={{ backgroundColor: "rgba(201,169,110,0.12)", color: "#C9A96E", border: "1px solid rgba(201,169,110,0.25)" }}
              >
                Founder Story
              </span>
              <span
                className="rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-widest"
                style={{ backgroundColor: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.45)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                IP &amp; Law
              </span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                {new Date(PUBLISHED).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} · Start to Scale Podcast
              </span>
            </div>
            <h1
              className="text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.1] text-white"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Matt Savare: IP Law, AI Legal Risks, and Building FansMet While Running a 400-Person Law Firm
            </h1>
            <p className="mt-6 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              The Lowenstein Sandler partner and FansMet founder on the AI legal traps founders keep walking into, how patents actually work, the one contract clause that founders routinely miss, and why now is the best time in history to build a company.
            </p>

            {/* Author card */}
            <div
              className="mt-10 flex items-center gap-4 rounded-2xl p-5"
              style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,169,110,0.15)" }}
            >
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full" style={{ border: "2px solid rgba(201,169,110,0.3)" }}>
                <Image
                  src="/images/blog/matt-savare.jpg"
                  alt="Matt Savare"
                  fill
                  className="object-cover object-top"
                  sizes="64px"
                />
              </div>
              <div>
                <p className="font-bold text-white">Matt Savare</p>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Chair of Commercial Contracts, Lowenstein Sandler · Founder, FansMet · Gildre Expert in Residence (Law)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hero photo */}
        <div className="mx-auto max-w-3xl px-6 -mt-4">
          <div className="overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
            <Image
              src="/images/blog/matt-savare.jpg"
              alt="Matt Savare, Partner at Lowenstein Sandler and founder of FansMet"
              width={1500}
              height={900}
              className="w-full object-cover object-top"
              style={{ maxHeight: "480px" }}
              priority
            />
          </div>
        </div>

        {/* Body */}
        <article className="mx-auto max-w-3xl px-6 py-16">

          {/* Intro */}
          <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Matt Savare has spent 23 years at Lowenstein Sandler, where he chairs commercial contracts and advises on AI, blockchain, copyrights, trademarks, and digital media across a national practice of 400 attorneys. He also spent seven years negotiating procurement contracts for the Department of the Army. And somewhere in between, he dreamed up a sports tech startup while watching Ricky Gervais get fired from the Golden Globes.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            That startup is FansMet, a platform that lets anyone crowdsource and synchronize alternative audio commentary in real time, over any broadcast, anywhere in the world. Two patents issued. CTO formerly of Sports Illustrated Ticketing. Commercial launch three to four months out. Fundraise underway.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Matt joined the Start to Scale podcast to talk about all of it, and to share what he sees as the most dangerous legal mistakes founders are making right now, most of them involving AI.
          </p>

          {/* Section: FansMet */}
          <h2
            className="mt-14 text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            The idea: what if you could change the announcer?
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            The spark came from a simple frustration. Ricky Gervais had hosted the Golden Globes and was outrageously funny, but celebrities objected and he was not invited back. Matt's thought: what if Gervais were in his flat, no standards and practices, announcing the ceremony for whoever wanted to listen?
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            That question became FansMet. The platform works as a second-device app: you load FansMet on your phone while watching any broadcast on your TV. It recognizes what you are watching, asks whether you want to listen or broadcast, and connects you to a real-time feed of other commentators covering the same event. The proprietary synchronization engine accounts for the fact that viewers on different cable and streaming providers may be receiving the signal at different latencies. You and a friend on opposite coasts, watching the same game on different services, hear the commentary in perfect sync.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            The platform is channel-agnostic, device-agnostic, and not limited to sports. A state of the union, a reality show, a boxing match: anything works. On the B2B side, Matt has been in discussions with leagues, federations, and individual teams about integrating the synchronization technology directly into their platforms, a negotiation he is unusually equipped for given that structuring complex media rights deals is what he does for clients every day.
          </p>

          {/* Quote block */}
          <blockquote
            className="my-10 rounded-2xl p-8"
            style={{ backgroundColor: "rgba(201,169,110,0.07)", borderLeft: "3px solid #C9A96E" }}
          >
            <p className="text-base leading-relaxed text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
              "It democratizes the listening experience. It allows anyone to be a broadcaster. It also allows anyone to listen to their preferred people if they don't feel like broadcasting."
            </p>
            <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              Matt Savare, founder of FansMet
            </p>
          </blockquote>

          {/* Section: Career */}
          <h2
            className="text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            From Army procurement to national law firm: a non-linear path
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Matt graduated college a year early on AP credits and landed a job with the Department of the Army, doing communications and electronics procurement five minutes from his house. He planned to stay a year or two. He stayed seven. "I found the mission to be really important. I supported the military, I met my wife there. I wouldn't change it for the world."
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            His wife was also the reason he left. "She said: you aspire to bigger things. Either do something different or we're done." He took the LSATs after a week or two of prep, got into Seton Hall Law School with a scholarship, and during his second year missed the first month of class to shoot a feature film he had written. He had planned to work for Miramax or HBO after graduation. He learned they require five or six years at a law firm first. Lowenstein Sandler was on his list. He joined. Twenty-three years later, he is still there.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            The idea of becoming a founder never crossed his mind until he was embedded in Lowenstein's startup and VC ecosystem. "I see so many founders. I'm part of the ecosystem. And then I had the epiphany. No one is doing this. You can change angles, you can time shift, you can go from your iPhone to your iPad to your TV, but you're tethered to the same broadcaster."
          </p>

          {/* Mid image */}
          <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            <Image
              src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=1200&auto=format&fit=crop&q=80"
              alt="Live sports broadcast technology"
              width={1200}
              height={600}
              className="w-full object-cover"
              style={{ maxHeight: "360px" }}
            />
          </div>

          {/* Section: AI legal risks */}
          <h2
            className="text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            The AI legal exposures founders are glossing over
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Matt writes regularly on AI law for Gildre and advises both startups and large enterprise clients. He named three risks that are underappreciated right now.
          </p>

          {[
            {
              n: "01",
              title: "Public LLMs are not confidential",
              body: "If you use the free or standard consumer version of any AI model, everything you enter can be used to train that model. There is no obligation of confidentiality. Put trade secrets, proprietary strategy, or sensitive code into a public LLM and you may have just surrendered trade secret protection. Always use enterprise versions when anything confidential is involved.",
            },
            {
              n: "02",
              title: "AI-generated IP may not be protectable",
              body: "Copyright and patent protection require meaningful human creative or inventive contribution. If AI generates the core of your product with minimal human involvement, that output may be uncopyrightable and unpatentable. Founders building with AI tools need to document their own creative decisions and ensure the human contribution is real and traceable.",
            },
            {
              n: "03",
              title: "The right model matters",
              body: "Different models perform better for different tasks. Using the wrong one costs time and quality. For vibe coding specifically, Matt points to Claude. The broader rule: don't default to one model for everything. Evaluate based on the actual task.",
            },
          ].map((item) => (
            <div
              key={item.n}
              className="mt-5 flex gap-5 rounded-2xl p-6"
              style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <span
                className="flex-shrink-0 text-xl font-bold"
                style={{ color: "#C9A96E", fontFamily: "var(--font-fraunces)" }}
              >
                {item.n}
              </span>
              <div>
                <p className="font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.52)" }}>
                  {item.body}
                </p>
              </div>
            </div>
          ))}

          {/* Section: Patents */}
          <h2
            className="mt-14 text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Patents explained: what founders actually need to know
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            FansMet holds two issued patents, and Matt walked through how they got there. The first step was a provisional patent filing: faster, less formal, less expensive, but enough to establish a priority date while the team developed the invention further. The patent examiner then requested more specificity, and what had been one application was split into two non-provisional patents because multiple distinct inventions were embedded in the original filing.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            His advice for founders considering a patent:
          </p>
          <ul className="mt-4 flex flex-col gap-3">
            {[
              "You cannot patent an abstract idea. The invention must be reduced to practice and described in specific, concrete terms.",
              "Hire a patent attorney, not a generalist. Find one who specializes in your industry. A life sciences patent attorney is not the right fit for a media technology patent.",
              "Copyrights can be registered without an attorney. Trademarks ideally use one. Patents should never be filed without experienced counsel.",
              "Lowenstein has a strong patent practice across software, AI, blockchain, and more. Matt is happy to make introductions.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div
                  className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                  style={{ backgroundColor: "#C9A96E" }}
                />
                <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Section: One clause */}
          <h2
            className="mt-14 text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            The one clause every founder must read before signing
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Ask Matt what contract clause matters most and the answer is immediate: IP ownership.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            "I am horrified and appalled by some agreements that founders sign without reading the IP clauses." When a startup hires a developer, a designer, or any contractor, the company must explicitly own everything that person creates. That requires work-for-hire language and an assignment of all IP rights in the contract. Without it, the contractor may legally retain ownership of the code, design, or technology they were paid to build.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            For early-stage companies, intellectual capital is often the only asset. Losing ownership of it through a poorly reviewed contract is one of the most avoidable and most common mistakes Matt sees across his startup clients.
          </p>

          {/* Bottom image */}
          <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&auto=format&fit=crop&q=80"
              alt="Founder reviewing a contract"
              width={1200}
              height={600}
              className="w-full object-cover"
              style={{ maxHeight: "360px" }}
            />
          </div>

          {/* Section: Advice */}
          <h2
            className="text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            One piece of advice for early-stage founders
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Matt thought about FansMet for years before moving on it. He understands the hesitation, and he has no patience for it anymore.
          </p>

          <blockquote
            className="my-8 rounded-2xl p-8"
            style={{ backgroundColor: "rgba(201,169,110,0.07)", borderLeft: "3px solid #C9A96E" }}
          >
            <p className="text-base leading-relaxed text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
              "Get off your ass and do it. There is so much technology out there that enables you to do this in a cost-effective manner. If you have a burning desire to do it and you have the idea, just do it. Sorry if Nike is listening."
            </p>
            <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              Matt Savare
            </p>
          </blockquote>

          <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            The ecosystem has never been more supportive. Vibe coding tools have collapsed the cost of building a prototype. Founder communities like Gildre have made experienced peers and mentors accessible without requiring you to know the right person. And VCs, while discerning, are paying close attention to teams that can ship quickly with very little capital.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            Matt's own lesson from the FansMet journey: if you are building something with any technical component, find a technical co-founder before you do anything else. "The only way for me to build it was to raise money or pay out of pocket and engage a third party. Whereas if one of the initial team were technical, especially with vibe coding now, you could probably build and launch an app in a month with very little money."
          </p>

          {/* Quick Answer / GEO block */}
          <div
            className="mt-14 rounded-2xl p-8"
            style={{ backgroundColor: "rgba(201,169,110,0.08)", border: "1px solid rgba(201,169,110,0.25)" }}
          >
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A96E" }}>
              Quick Answer
            </p>
            <p className="mt-3 text-base font-semibold leading-relaxed text-white">
              The three AI legal risks founders most frequently miss: using public LLMs with confidential data, building core IP with AI without sufficient human involvement, and failing to use enterprise model versions.
            </p>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              The one contract clause that matters most is IP ownership. Every developer and contractor hired by a startup must sign an agreement with explicit work-for-hire language and full assignment of IP rights. Matt Savare, Chair of Commercial Contracts at Lowenstein Sandler and Gildre's expert in residence for law, handles these issues for founders at every stage.
            </p>
          </div>

          {/* FAQ */}
          <h2
            className="mt-14 text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="group rounded-xl"
                style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 text-sm font-semibold text-white">
                  {item.q}
                  <span
                    className="flex-shrink-0 text-lg leading-none transition-transform group-open:rotate-45"
                    style={{ color: "#C9A96E" }}
                  >
                    +
                  </span>
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>

        </article>

        {/* CTA */}
        <section
          className="px-6 py-20 text-center"
          style={{ background: "linear-gradient(160deg, #1C2744 0%, #080e1a 100%)" }}
        >
          <div className="mx-auto max-w-2xl">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
              Gildre Founder Community
            </p>
            <h2
              className="mt-4 text-[2rem] font-bold leading-tight text-white sm:text-[2.75rem]"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Access experts like Matt inside Gildre.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Matt Savare is Gildre's expert in residence for law. Members get direct access to him and to 250+ vetted founders across 74 cities. Starting at $59 per month, no equity taken.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://tally.so/r/VLERVa"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-8 py-3.5 text-sm font-bold transition-all hover:opacity-90"
                style={{
                  backgroundColor: "#C9A96E",
                  color: "#1C2744",
                  boxShadow: "0 0 24px rgba(201,169,110,0.35)",
                }}
              >
                Apply Now
              </a>
              <a
                href="/membership"
                className="text-sm underline underline-offset-4 transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Compare membership tiers
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
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
            <a href="/blog" className="underline underline-offset-2 hover:text-zinc-400 transition-colors">
              More Articles
            </a>
          </p>
        </div>

      </div>
    </>
  );
}
