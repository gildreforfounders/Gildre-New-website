import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Fritz Lanman: How a Microsoft Exec Took ClassPass to $285M Unicorn Status | Gildre",
  description:
    "ClassPass CEO Fritz Lanman on leading Microsoft's $240M Facebook bet, losing 70 lbs on his own product, and scaling ClassPass to $285M unicorn status.",
  keywords: ["Fritz Lanman", "ClassPass", "startup CEO", "unicorn startup", "Microsoft", "Gildre podcast"],
  openGraph: {
    title: "Fritz Lanman: How a Microsoft Exec Took ClassPass to $285M Unicorn Status",
    description:
      "From investing $240M into Facebook at Microsoft to losing 70 lbs using his own product — ClassPass CEO Fritz Lanman on the founder journey no one talks about.",
    type: "article",
    images: [{ url: "https://www.gildre.com/images/fritz-lanman-headshot.webp", width: 512, height: 512, alt: "Fritz Lanman, CEO of ClassPass" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fritz Lanman: How a Microsoft Exec Took ClassPass to $285M Unicorn Status",
    description: "ClassPass CEO Fritz Lanman on Microsoft's $240M Facebook bet, losing 70 lbs on his own product, and scaling to unicorn status.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Fritz Lanman: How a Microsoft Exec Took ClassPass to $285M Unicorn Status",
  description:
    "Fritz Lanman, CEO of ClassPass and Mindbody, shares how his journey from Bay Area kid to Microsoft executive to angel investor led him to scale ClassPass into a billion-dollar company.",
  image: "https://www.gildre.com/images/fritz-lanman-headshot.webp",
  datePublished: "2024-01-01",
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
  mainEntityOfPage: "https://www.gildre.com/fritzlanmanblog",
  about: [
    { "@type": "Person", name: "Fritz Lanman", jobTitle: "CEO", worksFor: { "@type": "Organization", name: "ClassPass" } },
    { "@type": "Organization", name: "ClassPass" },
    { "@type": "Organization", name: "Mindbody" },
    { "@type": "Organization", name: "Microsoft" },
  ],
  keywords: "Fritz Lanman, ClassPass CEO, Mindbody, Microsoft, startup founder, angel investor, unicorn, $285M fundraise, founder story, Gildre",
};

export default function FritzLanmanBlog() {
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
            <span className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>Podcast Recap</span>
          </div>
          <h1
            className="text-[clamp(1.9rem,4.5vw,3.25rem)] font-bold leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Fritz Lanman: How a Microsoft Exec<br className="hidden sm:block" />{" "}
            Took <span style={{ color: "#C9A96E" }}>ClassPass to Unicorn Status</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            From investing a quarter-billion dollars into Facebook at Microsoft, to losing 70 lbs on his own product, to raising a $285M Series E — ClassPass CEO Fritz Lanman joined the Gildre Spotlight Podcast to share the founder journey behind one of fitness tech's biggest success stories.
          </p>

          {/* Author + meta row */}
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
              <span>15 min read</span>
              <span>·</span>
              <span>ClassPass · Microsoft · Angel Investing</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────────────────────── */}
      <article className="mx-auto max-w-3xl px-6 py-16">

        {/* Intro */}
        <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
          Last month we had the opportunity to sit down with industry titan and ClassPass CEO, Fritz Lanman on our <strong style={{ color: "#fff" }}>Gildre Spotlight Podcast</strong>. Fritz shared deep insights from his upbringing and how his career at Microsoft and building startups led him along the path to helping ClassPass reach unicorn status with a $285M Series E raise in 2020. Below are excerpts from the full episode.
        </p>

        {/* Fritz headshot */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/fritz-lanman-headshot.webp"
            alt="Fritz Lanman, CEO of ClassPass and Mindbody"
            width={800}
            height={800}
            className="w-full object-cover"
            style={{ maxHeight: "480px", objectPosition: "center top" }}
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>Fritz Lanman, CEO of ClassPass and Mindbody</p>
          </div>
        </div>

        <Section title="Fritz's Introduction" />
        <Body>
          I'll never forget the men and women who shaped my journey from a curious Bay Area kid to a tech executive, investor, and entrepreneur. Their influence began shaping my path long before I understood the world of startups, investment, and innovation that I would eventually dive into.
        </Body>

        <Section title="The Bedrock of Adobe: Remembering John Warnock" />
        <Body>
          Recently, the tech world bid farewell to an influential pioneer, John Warnock, the beloved founder of Adobe. His passing is not only a great loss to the industry but also to me personally — as he is closely intertwined with my beginnings and life's journey.
        </Body>
        <Body>
          As a child, I was fortunate to have been exposed to computers at an early age, thanks in part to John Warnock's mentorship. John, a close family friend and my brother's godfather, was one of the main reasons I was introduced to the world of computers. He built Adobe from the ground up after his time at Xerox PARC, and I was lucky to witness some of Adobe's early days through the lens of a family connection. His entrepreneurial spirit was infectious and left a lasting impression on me. Adobe was founded on innovation and creativity, values that I have carried with me throughout my career.
        </Body>

        {/* Family photo */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/fritz-lanman-family.webp"
            alt="Fritz Lanman with his family"
            width={800}
            height={600}
            className="w-full object-cover"
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>Fritz with his family</p>
          </div>
        </div>

        <Section title="Childhood Dreams and Family Dynamics" />
        <Body>
          Growing up in the Bay Area as a kid, I was swept up in the world of sports — Michael Jordan and the Chicago Bulls capturing my imagination. I was also an avid Golden State Warriors fan, through the highs and lows, from the era of Tim Hardaway and Chris Mullin to Latrell Sprewell and Chris Webber.
        </Body>
        <Body>
          Amidst my sports fandom, my parents were raising us in distinct pairings, plus "the baby" who, they claim, wasn't an accident. There was me and my brother James, two peas in a pod, born while my dad was still grinding away as a medical resident with not much to spare in the bank.
        </Body>

        <Section title="Tech, Sports, and Sibling Bonds in Silicon Valley" />
        <Body>
          Tech was not just a fascination; it was a part of my upbringing. With close family connections to Silicon Valley pioneers and a proximity to groundbreaking companies like Apple, I got hands-on with technology years before it became ubiquitous in homes and classrooms.
        </Body>
        <Body>
          My siblings did manage to outshine me in some areas, including sports. But it was more about support than competition. Even as adults, we might have a friendly rivalry reminiscing over who was the better baseball player or engage in some pickup basketball — but at the end of the day, it's all love.
        </Body>

        <Section title="An Unexpected Detour: From Yale's Court to the Classroom" />
        <Body>
          My journey took me to Yale with dreams of playing D1 basketball, but those aspirations took a different turn. Injuries and a change in coaching staff led me to redefine my college experience. Instead of aiming for the NBA — which isn't the typical path for Ivy Leaguers — I decided to immerse myself in Yale's world-class history department and ultimately study abroad in Italy, cultivating a passion for languages and global culture.
        </Body>
        <Quote>
          "Yale was less about sports and more about seizing other opportunities — it was about taking that rich educational environment and using it to meet incredible people and learn from them."
        </Quote>

        <Section title="Lessons From Microsoft: Investing a Quarter Billion Into Facebook" />
        <Body>
          Post-college, job searches brought me face-to-face with a tough economy, but Microsoft opened its doors for me. Microsoft came to Yale to recruit and I found my first opportunity there. The inaugural class of their product management program was a game-changer, providing training at Kellogg and an unmatched network of colleagues who have since become prominent figures in tech.
        </Body>
        <Body>
          My claim to fame might be convincing leadership to invest a quarter billion into Facebook, but that success was part luck, part the skills I honed in the program, and part sheer determination.
        </Body>
        <Body>
          As one of the youngest directors at Microsoft, I had a unique advantage — an intimate understanding of social dynamics, particularly among young people. My observation of Facebook's expansion from colleges to high schools, coupled with a deep dive into the platform's infrastructure and competitors, informed my assessment. MySpace's downfall highlighted the importance of robust engineering, and Facebook's superior tech infrastructure was a significant factor in its success.
        </Body>
        <Body>
          By assigning probabilities to each scenario, we could justify a significant investment, recognizing the platform's potential to become a hundred billion-dollar company. It was a convergence of strategic, financial, and instinctual factors — akin to what Satya Nadella later accomplished with OpenAI.
        </Body>

        <Section title="London Calling: Corporate Strategy and the Power of Networks" />
        <Body>
          The stint at Microsoft translated into an opportunity to move to London, where I helped lead strategic teams and navigate the company through emerging technological landscapes. London became a gateway to the world for me — an extension of my earlier study abroad experience but with the means to truly explore.
        </Body>
        <Body>
          Some of my former colleagues from London have become integral parts of my professional journey — from my boss who now oversees international operations at MINDBODY and ClassPass, to my CFO and CMO. Relationships formed in London have transcended borders and careers.
        </Body>
        <Body>
          My job at Microsoft afforded me opportunities to travel the world, from rugby sevens in Hong Kong to evaluating assets in Japan and China. Looking back, my twenties were indeed a gift. And to anyone contemplating a gap year or dreaming of living abroad — do it. You never know where it might lead you.
        </Body>

        <Section title="The Angel Investor Emerges: From Tech Exec to Startup Enthusiast" />
        <Body>
          My transition from a corporate strategy role at Microsoft to becoming an angel investor was anything but planned. As the youngest executive at Microsoft, a pivotal moment came with the Facebook investment — suddenly, Silicon Valley took notice.
        </Body>
        <Body>
          It all began with an invitation to a baseball game from a group led by the legendary Ron Conway of SV Angel. Sitting down with Jack Dorsey, fresh from his departure from Twitter, I was intrigued by his vision for a new payment platform. And just like that, I made my first angel investment in Square.
        </Body>
        <Body>
          From Square to Pinterest to Wish, each deal seemed to reinforce my confidence in my abilities. But it wasn't just about the financial gains — it was witnessing the impact these entrepreneurs were making on the world that fueled my desire to become one of them.
        </Body>
        <Body>
          I left Microsoft to pursue my entrepreneurial aspirations, and then came the call from one of my most trusted mentors, Hank Vi Hill. Together, we embarked on a new journey, founding a venture capital firm and making investments that would shape the tech landscape for years to come.
        </Body>
        <Quote>
          "Be so good they can't ignore you." — not just advice from Steve Martin, but a lived philosophy for success and impact.
        </Quote>

        {/* Kevin Durant photo */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/fritz-lanman-kevin-durant.webp"
            alt="Fritz Lanman with Kevin Durant"
            width={800}
            height={450}
            className="w-full object-cover"
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>Fritz Lanman with Kevin Durant</p>
          </div>
        </div>

        <Section title="The Evolution: From Executive to Investor to CEO of ClassPass" />
        <Body>
          I left Microsoft in my late twenties, driven by a desire to build something from the ground up. I ventured into angel investing, partnering with someone who shared my vision and had the capital to back it up. The journey wasn't without its ups and downs — I tasted success with ventures like Live Star, which we sold to Pinterest, but also experienced setbacks, like with Doppler, a hardware venture that didn't quite take off.
        </Body>
        <Body>
          Then there was ClassPass — a project I initially got involved with as an advisor. Little did I know that a phone call from my partner would change everything. Suddenly, I found myself stepping into the role of CEO, tasked with navigating the company through challenging times. It was supposed to be a temporary gig, just for a year, but here I am, almost a decade later, still at the helm.
        </Body>
        <Quote>
          "I've had an unusual path where I was a Microsoft exec, became an angel investor, and then became an entrepreneur — in quite rapid succession. I was 28 or 29 when I left Microsoft and I just wanted to build. I knew if I became a professional VC and that's all I did, you build a lifestyle around that — then you're stuck."
        </Quote>

        <Section title="Being the CEO of ClassPass" />
        <Body>
          ClassPass was actually the result of two or three pivots and multiple years of experimentation by Payal and her partners, and when I got involved it was still called Classtivity. Initially, it operated as a listing site for various classes. However, Payal recognized that the real genius lay in the class-pass model, which eliminated the friction of attending different studios with excess capacity.
        </Body>
        <Body>
          Personally, as someone who struggled with maintaining fitness, traditional gyms didn't appeal to me. The monotony of running on a treadmill or lifting weights without accountability wasn't motivating. I craved the team dynamic, the instructor's guidance, the energizing music — a complete experience that made working out enjoyable. To me, group fitness offered the closest experience to team sports. I saw firsthand the transformative power of group fitness — <strong style={{ color: "#C9A96E" }}>I lost 70 pounds using the product.</strong>
        </Body>
        <Body>
          The emergence of trends like CrossFit and SoulCycle affirmed my bullish outlook on health and wellness as a macro theme. With the fitness industry being highly fragmented, ClassPass's role as an aggregator made perfect sense.
        </Body>

        <Section title="Moving to Montana and Taking ClassPass to Unicorn Status" />
        <Body>
          After taking the helm at ClassPass, I shifted to a recurring subscription model, implementing a credit system where users could spend points each month — a strategy that proved highly effective. As we scaled to nearly 30 countries and thousands of cities worldwide, my board member Bob Mylo urged me to consider relocating to a more cost-effective location.
        </Body>
        <Body>
          Colorado was quickly ruled out due to its popularity and high costs, leading me to Missoula, Montana — the perfect blend of affordability, outdoor recreation, and a vibrant community, reminiscent of what Boulder was like decades ago. We established an office there, and with the relocation of key executives and hiring of local talent, Missoula soon became our largest office and headquarters.
        </Body>
        <Body>
          Eventually, ClassPass merged with Mindbody, another distributed company with offices in San Luis Obispo, New York, Scottsdale, and Atlanta. Building a company from Missoula has been a rewarding journey — a testament to the power of innovation and the potential for growth beyond traditional tech hubs.
        </Body>

        {/* Speaking photo */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/fritz-lanman-speaking.webp"
            alt="Fritz Lanman speaking at a conference"
            width={800}
            height={533}
            className="w-full object-cover"
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>Fritz Lanman speaking at a tech conference</p>
          </div>
        </div>

        <Section title="The Takeaway: Lessons for Aspiring Founders" />
        <Body>
          Reflecting on my path — from the Bay Area, to Yale, to Microsoft, to angel investing, to ClassPass — it's clear that adaptability, curiosity, and a willingness to learn have been the constants.
        </Body>
        <Body>
          Firstly, building a company is incredibly challenging, and I often advise aspiring entrepreneurs against it unless they absolutely can't resist the urge to create. It takes a level of determination and passion that few can comprehend until they're knee-deep in the process.
        </Body>
        <Body>
          Secondly, luck plays a significant role in success. While hard work, intelligence, and a great idea are crucial, there are many variables beyond our control. Recognizing this can alleviate some of the pressure and self-doubt when things don't go as planned.
        </Body>
        <Body>
          And thirdly, give yourself a break. It's easy to be hard on yourself when faced with setbacks or failures, but nobody has all the answers — and perfection is an impossible standard.
        </Body>
        <Quote>
          "Don't rush through life's transitions. The gap years, the travels, the career shifts — they're not just delays; they're stepping stones to a fulfilling and impactful career."
        </Quote>
        <Body>
          Living through the digital revolution in Silicon Valley, witnessing Adobe's rise, playing sports, studying at Yale, working at Microsoft, and ultimately shaping the tech landscape as an angel investor and entrepreneur — this journey is a testament to embracing life's unexpected turns, risks, and opportunities. Stay curious, stay open, and most importantly, give yourself the freedom to explore.
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
            Gildre Mentor
          </p>
          <h3
            className="mt-3 text-xl font-bold text-white sm:text-2xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Meet Fritz Lanman at Gildre
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Fritz is a mentor in the Gildre community. Gildre members get access to advisory sessions, warm introductions, and curated peer matching with founders and executives like Fritz.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://gildre.circle.so/checkout/gildre-gold-membership"
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
              Watch the Full Episode
            </a>
          </div>
        </div>

        {/* External links */}
        <div className="mt-10 flex flex-wrap gap-4 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
          <a
            href="https://www.classpass.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9A96E] transition-colors"
          >
            Learn more about ClassPass →
          </a>
          <a
            href="https://www.mindbodyonline.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9A96E] transition-colors"
          >
            Learn more about Mindbody →
          </a>
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

function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      className="my-8 rounded-xl px-7 py-6 text-base italic leading-relaxed"
      style={{
        borderLeft: "3px solid #C9A96E",
        backgroundColor: "rgba(201,169,110,0.06)",
        color: "rgba(255,255,255,0.75)",
      }}
    >
      {children}
    </blockquote>
  );
}
