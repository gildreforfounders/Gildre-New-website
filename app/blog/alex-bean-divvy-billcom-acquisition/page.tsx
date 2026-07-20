import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Alex Bean: How the Co-Founder of Divvy Sold to Bill.com and Moved Into Venture Capital | Gildre",
  description:
    "Divvy co-founder Alex Bean on selling before the product was built, scaling to a Bill.com acquisition, and what he looks for now as a VC at Tandem Invest.",
  keywords: ["Alex Bean", "Divvy", "Bill.com acquisition", "fintech startup", "Tandem Invest", "venture capital", "Gildre podcast"],
  openGraph: {
    title: "Alex Bean: How the Co-Founder of Divvy Sold to Bill.com and Moved Into Venture Capital",
    description:
      "From Redmond to fintech exit to VC — Divvy co-founder Alex Bean on selling before the product was built, scaling to acquisition, and what he looks for now as an investor.",
    type: "article",
    images: [{ url: "https://www.gildre.com/images/alex-bean-headshot.webp", width: 512, height: 512, alt: "Alex Bean, co-founder of Divvy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Bean: How the Co-Founder of Divvy Sold to Bill.com and Moved Into Venture Capital",
    description: "Divvy co-founder Alex Bean on selling before the product was built, the Bill.com exit, and investing at Tandem Invest.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Alex Bean: How the Co-Founder of Divvy Sold to Bill.com and Moved Into Venture Capital",
  description:
    "Alex Bean, co-founder of Divvy (acquired by Bill.com), shares how growing up in Redmond, playing quarterback, and a conviction in expense management automation led him to build and exit one of fintech's fastest-growing startups — then co-found Tandem Invest.",
  image: "https://www.gildre.com/images/alex-bean-headshot.webp",
  datePublished: "2024-03-01",
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
  mainEntityOfPage: "https://www.gildre.com/blog/alex-bean-divvy-billcom-acquisition",
  about: [
    { "@type": "Person", name: "Alex Bean", jobTitle: "Co-Founder", worksFor: { "@type": "Organization", name: "Tandem Invest" } },
    { "@type": "Organization", name: "Divvy" },
    { "@type": "Organization", name: "Bill.com" },
    { "@type": "Organization", name: "Tandem Invest" },
  ],
  keywords: "Alex Bean, Divvy founder, Bill.com acquisition, Tandem Invest, fintech startup, venture capital, Redmond Washington, expense management, bootstrapping, founder story, Gildre Spotlight",
};

export default function AlexBeanBlog() {
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
            <span className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>Podcast Recap · Fintech · Venture Capital</span>
          </div>
          <h1
            className="text-[clamp(1.9rem,4.5vw,3.25rem)] font-bold leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Alex Bean: How the Co-Founder of Divvy{" "}
            <span style={{ color: "#C9A96E" }}>Sold to Bill.com</span>{" "}
            and Moved Into Venture Capital
          </h1>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Growing up in Redmond, Washington — blocks from Microsoft and Amazon — Alex Bean learned entrepreneurship from his family before he ever stepped into a boardroom. He went on to co-found Divvy, sell it to Bill.com, and launch Tandem Invest. This is that journey.
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
              <span>9 min read</span>
              <span>·</span>
              <span>Redmond · Divvy · Bill.com · Fintech · VC</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────────────────────── */}
      <article className="mx-auto max-w-3xl px-6 py-16">

        {/* Headshot — centered portrait */}
        <div className="mb-10 flex flex-col items-center">
          <div className="overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)", maxWidth: "400px", width: "100%" }}>
            <Image
              src="/images/alex-bean-headshot.webp"
              alt="Alex Bean, co-founder of Divvy and Tandem Invest"
              width={600}
              height={600}
              className="w-full"
              style={{ display: "block" }}
            />
            <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
              <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>Alex Bean — co-founder of Divvy and Tandem Invest</p>
            </div>
          </div>
        </div>

        <Body>
          Growing up in Redmond, Washington, <strong style={{ color: "#fff" }}>Alex Bean</strong> was surrounded by the burgeoning tech giants like Microsoft and Amazon. But it was his family's entrepreneurial spirit that truly ignited his passion for business — a passion that would eventually lead him to co-found Divvy, one of fintech's fastest-growing startups, and sell it to Bill.com before launching his own venture fund.
        </Body>

        <Section title="The Early Days: A Family Built on Entrepreneurship" />
        <Body>
          Alex's entrepreneurial roots run deep. His great-grandfather moved to the Pacific Northwest in the 1950s, starting a family business that inspired generations. Alex's father and brothers followed suit, each starting their own ventures. This environment fostered a natural inclination towards entrepreneurship for Alex, who began experimenting with small businesses even in high school.
        </Body>
        <Body>
          In Redmond, the presence of tech giants like Microsoft and Amazon created a unique ecosystem that nurtured innovation and ambition. The community was buzzing with ideas and opportunities — a fertile ground for young minds eager to make their mark. Combined with his family's entrepreneurial background, this instilled in Alex a deep-seated belief in the potential of entrepreneurship to drive change and create value.
        </Body>

        <Section title="Lessons from the Field: Quarterback to CEO" />
        <Body>
          Playing quarterback in high school taught Alex invaluable lessons in leadership and vision — skills that would later prove essential in his entrepreneurial career. He learned the importance of having a clear vision and the ability to rally people around a common goal, much like leading a football team.
        </Body>
        <Body>
          In business, as in sports, the ability to pivot and adapt to changing circumstances is crucial. Alex often draws parallels between the two — emphasizing how the discipline and teamwork required on the field translate seamlessly into the boardroom. Resilience, the willingness to call a new play when the first one fails, and the ability to inspire a team around a shared outcome — these are just as valuable at a startup as they are at the line of scrimmage.
        </Body>

        <Section title="The Leap into Entrepreneurship: Selling Before the Product Existed" />
        <Body>
          After studying geography at BYU, Alex's career path took him through various sales roles, where he honed his skills in driving revenue and understanding product-market fit. His big break came with the co-founding of <strong style={{ color: "#fff" }}>Divvy</strong> — a financial services company that automated expense management for businesses.
        </Body>
        <Body>
          What's remarkable about Divvy's early days is that Alex was selling the concept before the product was even built. His ability to get customers to commit to something that didn't yet exist was a testament to his sales acumen, his conviction in the idea, and his skill at articulating a vision that others immediately understood. For founders, this is one of the most important early-stage skills: selling the future, not just the present.
        </Body>

        {/* Divvy → Bill.com image */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)", backgroundColor: "#fff" }}>
          <Image
            src="/images/divvy-bill.png"
            alt="Divvy acquired by Bill.com"
            width={800}
            height={320}
            className="w-full object-contain p-8"
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>Divvy, co-founded by Alex Bean, was acquired by Bill.com</p>
          </div>
        </div>

        <Section title="Building Divvy: Innovation, Scale, and Acquisition" />
        <Body>
          Divvy's success was not without its challenges. Alex and his team navigated the complexities of scaling a startup — from hiring the right people to managing explosive growth and securing funding. Their innovative approach of combining a corporate credit card with expense management software set them apart in the market, creating a product that was genuinely differentiated rather than iterative.
        </Body>
        <Body>
          As Divvy grew, Alex faced the challenge of maintaining the company's culture and values while scaling operations. He emphasizes the importance of hiring individuals who not only possess the necessary skills but also align with the company's mission. Culture isn't a side project — it's a competitive advantage. The team you build in the first 20 hires sets the tone for everything that follows.
        </Body>
        <Body>
          The journey culminated in a successful acquisition by <strong style={{ color: "#fff" }}>Bill.com</strong> — one of fintech's landmark exits and a validation of everything Alex and his team had built. For the entrepreneurial community, Divvy's journey highlights the importance of innovation, resilience, and strategic positioning in achieving a successful outcome.
        </Body>

        {/* Key lessons callout */}
        <div
          className="my-12 rounded-2xl p-8"
          style={{
            backgroundColor: "rgba(201,169,110,0.05)",
            border: "1px solid rgba(201,169,110,0.15)",
          }}
        >
          <p className="text-[0.65rem] font-bold uppercase tracking-widest mb-5" style={{ color: "#C9A96E" }}>
            What Made Divvy Work
          </p>
          <ul className="flex flex-col gap-4">
            {[
              "Sell the vision before the product — conviction is your earliest competitive advantage.",
              "Combine two existing categories (credit cards + expense software) into one seamless product.",
              "Hire for values alignment, not just skill — culture is built in the first 20 hires.",
              "Know when a strategic partnership or acquisition creates more value than going it alone.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0" style={{ color: "#C9A96E" }}>✓</span>
                <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <Section title="A New Chapter: From Founder to Investor at Tandem Invest" />
        <Body>
          Post-Divvy, Alex transitioned into venture capital, co-founding <strong style={{ color: "#fff" }}>Tandem Invest</strong>. His focus is on helping other entrepreneurs succeed — investing in promising early-stage startups and sharing the hard-won experience that comes from having built and exited a company himself.
        </Body>
        <Body>
          In his role as a venture capitalist, Alex is committed to supporting founders who are passionate about their ideas and have the potential to make a significant impact. He believes in the power of mentorship and collaboration, working closely with entrepreneurs to help them navigate the challenges of building a business. For the entrepreneurial community, Alex's hands-on approach to venture capital serves as a model for what founder-first investing looks like in practice.
        </Body>

        <Section title="What Alex Looks for in Founders" />
        <Body>
          Having been a founder himself, Alex brings a unique lens to evaluating startups. He looks for conviction — founders who believe so deeply in what they're building that they'd do it regardless of the outcome. He looks for product-market fit signals, not just TAM slides. And he looks for teams who know how to sell, even before they have something to show.
        </Body>
        <Body>
          His journey is a reminder that the skills that build great companies — vision, resilience, the ability to inspire others, and the willingness to take calculated risks — are the same skills that make great investors. The best VCs are the ones who've felt the weight of making payroll.
        </Body>

        <Section title="The Takeaway" />
        <Body>
          Alex Bean's story — from the entrepreneurial households of Redmond, to the football fields of high school, to co-founding a fintech company that was acquired by Bill.com, to backing the next generation of founders at Tandem Invest — is a masterclass in compounding the right experiences over time.
        </Body>
        <Body>
          Success is not just about the destination. It's about the discipline built on the field, the product conviction built before the first line of code, the culture built in the first hire, and the wisdom built through every exit and every mistake along the way.
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
            Build alongside founders like Alex
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Gildre connects founders at every stage with curated peer matches, mentorship from operators who've built and exited, and access to investors who understand what it actually takes.
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

        {/* Tags */}
        <div className="mt-10 flex flex-wrap gap-2">
          {["Founder Journey", "Fintech", "Divvy", "Bill.com", "Venture Capital", "Startup Exit"].map((tag) => (
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
