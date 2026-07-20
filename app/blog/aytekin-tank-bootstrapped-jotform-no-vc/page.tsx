import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Aytekin Tank: How He Bootstrapped Jotform to 25 Million Users Without a Dollar of VC Funding | Gildre",
  description:
    "Jotform CEO Aytekin Tank on bootstrapping to 25 million users without VC, competing with Google Forms, and why long-term thinking beats chasing funding rounds.",
  keywords: ["Aytekin Tank", "Jotform", "bootstrapped startup", "no VC funding", "SaaS growth", "Google Forms competitor", "Gildre podcast"],
  openGraph: {
    title: "Aytekin Tank: How He Bootstrapped Jotform to 25 Million Users Without VC Funding",
    description:
      "From coding on a school computer in Turkey to competing with Google — Jotform CEO Aytekin Tank on bootstrapping, the 50/50 rule, and why long-term thinking beats chasing funding.",
    type: "article",
    images: [{ url: "https://www.gildre.com/images/aytekin-tank-headshot.webp", width: 512, height: 512, alt: "Aytekin Tank, founder and CEO of Jotform" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aytekin Tank: How He Bootstrapped Jotform to 25 Million Users Without VC Funding",
    description: "Jotform CEO Aytekin Tank on bootstrapping to 25M users, competing with Google Forms, and long-term thinking over funding rounds.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Aytekin Tank: How He Bootstrapped Jotform to 25 Million Users Without a Dollar of VC Funding",
  description:
    "Jotform founder and CEO Aytekin Tank shares how he bootstrapped from a school computer in Turkey to 25 million users and 600 employees — competing with Google Forms without taking external funding.",
  image: "https://www.gildre.com/images/aytekin-tank-headshot.webp",
  datePublished: "2024-02-01",
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
  mainEntityOfPage: "https://www.gildre.com/blog/aytekin-tank-bootstrapped-jotform-no-vc",
  about: [
    { "@type": "Person", name: "Aytekin Tank", jobTitle: "Founder & CEO", worksFor: { "@type": "Organization", name: "Jotform" } },
    { "@type": "Organization", name: "Jotform", url: "https://www.jotform.com" },
  ],
  keywords: "Aytekin Tank, Jotform, bootstrapping, SaaS founder, 25 million users, no VC funding, startup founder story, Google Forms competitor, Gildre Spotlight Podcast, entrepreneur Turkey",
};

export default function AytekintankBlog() {
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
            <span className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>Podcast Recap · SaaS · Bootstrapping</span>
          </div>
          <h1
            className="text-[clamp(1.9rem,4.5vw,3.25rem)] font-bold leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Aytekin Tank: How He Bootstrapped{" "}
            <span style={{ color: "#C9A96E" }}>Jotform to 25 Million Users</span>{" "}
            Without a Dollar of VC Funding
          </h1>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            From coding on a school computer in Turkey with no computer at home, to building a 600-person SaaS company that competes with Google — Jotform founder and CEO Aytekin Tank joined the Gildre Spotlight Podcast to share the bootstrapper's playbook behind one of the most quietly impressive companies in tech.
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
              <span>12 min read</span>
              <span>·</span>
              <span>Jotform · Bootstrap · SaaS · Turkey → NYC</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────────────────────── */}
      <article className="mx-auto max-w-3xl px-6 py-16">

        {/* Headshot */}
        <div className="mb-10 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/aytekin-tank-headshot.webp"
            alt="Aytekin Tank, founder and CEO of Jotform"
            width={800}
            height={800}
            className="w-full object-cover"
            style={{ maxHeight: "480px", objectPosition: "center top" }}
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>Aytekin Tank — founder and CEO of Jotform</p>
          </div>
        </div>

        <Body>
          We have an exclusive Gildre Spotlight Podcast interview to share as we delve into the inspiring journey of <strong style={{ color: "#fff" }}>Aytekin Tank</strong>, the founder and CEO of Jotform. His story is a testament to perseverance, innovation, and the importance of investing in one's vision. From his humble beginnings in Turkey to leading a successful tech company with 25 million users, Aytekin shares insights into what it takes to build a thriving business — entirely on his own terms.
        </Body>

        <Section title="Growing Up in Turkey: The Seeds of Entrepreneurship" />
        <Body>
          Aytekin's story begins in Turkey during the 1980s and 1990s. Despite not having a computer at home, he discovered his passion for programming through a school computer class. The thrill of coding in a basic programming language ignited a lifelong fascination with technology and problem-solving.
        </Body>
        <Body>
          Despite the lack of resources, Aytekin was determined. He recalls spending hours thinking about the code he would write during his limited time in front of a computer. This early exposure to programming laid the groundwork for his later studies in computer science in the United States — where his dreams began to take shape.
        </Body>

        {/* Outdoor photo */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/aytekin-tank-outdoor.webp"
            alt="Aytekin Tank, Jotform CEO"
            width={800}
            height={534}
            className="w-full object-cover"
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>Aytekin Tank, founder of Jotform</p>
          </div>
        </div>

        <Section title="The Birth of Jotform" />
        <Body>
          After moving to the U.S. to study computer science, Aytekin landed his dream job at a media company in New York City. However, he soon realized that despite his excitement, he lacked the freedom to work on projects that truly inspired him. This realization pushed him to start his own company, leading to the inception of Jotform in 2005. He launched the platform in 2006, and it quickly gained traction — eventually amassing over 25 million users.
        </Body>
        <Body>
          Aytekin's decision to leave a stable job to pursue his passion was pivotal. He emphasizes the importance of investing in one's product and maintaining a long-term vision, a philosophy that has guided him through the ups and downs of entrepreneurship.
        </Body>

        {/* Jotform logo */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/jotform-logo.webp"
            alt="Jotform — online form builder with 25 million users"
            width={800}
            height={450}
            className="w-full object-cover"
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>Jotform — founded in 2006, now serving 25 million users worldwide</p>
          </div>
        </div>

        <Section title="Lessons from Olive Picking: Investing in Your Product" />
        <Body>
          Interestingly, Aytekin draws parallels between his childhood experiences of picking olives in Turkey and his approach to business. He likens the process of cultivating olives — investing time and effort to reap rewards — to the software industry. Just as olives are harvested once a year, successful software requires consistent investment and nurturing to yield results.
        </Body>
        <Body>
          He believes that many founders fall into the trap of short-term thinking, focusing solely on immediate profits rather than investing in their products for long-term growth. Aytekin's commitment to continuous improvement and investment in Jotform has been a key factor in its sustained success.
        </Body>

        <Section title="The Importance of a Free Version" />
        <Body>
          From the outset, Jotform offered a free version, allowing users to explore its features without financial commitment. This strategy not only attracted a large user base but also helped establish a strong feedback loop. By engaging users early on, Jotform could refine its offerings based on real-world usage and needs.
        </Body>
        <Body>
          This approach has proven highly successful. Forms tend to have a viral nature — sharing a form introduces new users to Jotform, creating a network effect that drives compounding growth.
        </Body>

        <Section title="The Bootstrap Philosophy: A Sustainable Approach" />
        <Body>
          Aytekin's commitment to bootstrapping has been a cornerstone of Jotform's success. By maintaining financial discipline, he ensures the company remains independent and focused on long-term goals rather than chasing external funding. This approach fosters a culture of stability and growth — and gives Aytekin the freedom to build on his own timeline.
        </Body>

        {/* Working photo */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/aytekin-tank-working.webp"
            alt="Aytekin Tank working at Jotform"
            width={400}
            height={400}
            className="w-full object-cover"
            style={{ maxHeight: "420px", objectPosition: "center" }}
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>Aytekin at work — building Jotform with a long-term mindset</p>
          </div>
        </div>

        <Section title="Balancing Product Development and Growth: The 50/50 Rule" />
        <Body>
          With a user base of 25 million, Aytekin adheres to the "50/50 rule" — dedicating equal time to product development and user growth. This balance ensures that Jotform not only attracts new users but also retains them by continuously improving the product based on user feedback.
        </Body>

        <Section title="Navigating Competition With Google Forms" />
        <Body>
          When Google Forms entered the market, Aytekin faced significant challenges. Instead of succumbing to pressure, he focused on automation and delegation. By streamlining operations and automating repetitive tasks, he freed up time to concentrate on product development and improvement.
        </Body>
        <Body>
          This shift in mindset proved beneficial — enabling Jotform to compete effectively against one of the world's largest technology companies. Aytekin emphasizes that understanding user needs and automating processes can significantly enhance a company's efficiency and product quality.
        </Body>

        <Section title="Transitioning from Developer to Leader of 600 People" />
        <Body>
          Transitioning from a solo developer to leading a 600-employee company posed real challenges for Aytekin. He learned to embrace a growth mindset, focusing on building effective teams rather than micromanaging tasks. By fostering small, cross-functional teams, he created a collaborative environment that drives innovation.
        </Body>
        <Body>
          His approach to meetings is equally intentional. He holds regular cross-functional sessions to discuss product development, encourage collaboration, and foster a culture of continuous improvement — ensuring that leadership stays connected to what the product team is actually building.
        </Body>

        {/* Office photo */}
        <div className="my-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
          <Image
            src="/images/aytekin-tank-office.webp"
            alt="Aytekin Tank at Jotform HQ"
            width={800}
            height={450}
            className="w-full object-cover"
          />
          <div className="px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>Aytekin at Jotform HQ — building a culture of independence and long-term thinking</p>
          </div>
        </div>

        <Section title="The Future of Jotform and AI" />
        <Body>
          Looking ahead, Aytekin is excited about the integration of AI into Jotform's offerings. He envisions a future where users can interact with forms through AI agents, making the process more intuitive and efficient. This innovation aligns with his belief that AI can significantly enhance productivity by automating mundane tasks.
        </Body>
        <Body>
          Aytekin believes that the potential of AI is comparable to the revolutions brought about by personal computers, the internet, and smartphones — and Jotform is positioned to be part of that next wave.
        </Body>

        <Section title="Advice for Aspiring Entrepreneurs" />
        <Body>
          Aytekin encourages aspiring founders to start small — perhaps even while maintaining a full-time job — and to focus on product-market fit before seeking external funding. He stresses that success doesn't require massive investments; rather, it requires dedication, resilience, and a willingness to learn.
        </Body>
        <Body>
          Moreover, he advises founders to enjoy the journey. Reflecting on his own experiences, Aytekin cherishes the moments spent building Jotform from the ground up — emphasizing that the journey is just as important as the destination.
        </Body>

        {/* Key takeaways block */}
        <div
          className="my-12 rounded-2xl p-8"
          style={{
            backgroundColor: "rgba(201,169,110,0.05)",
            border: "1px solid rgba(201,169,110,0.15)",
          }}
        >
          <p className="text-[0.65rem] font-bold uppercase tracking-widest mb-5" style={{ color: "#C9A96E" }}>
            Key Takeaways from Aytekin Tank
          </p>
          <ul className="flex flex-col gap-4">
            {[
              "Bootstrap if you can — independence gives you the freedom to build for the long term, not the next funding round.",
              "Use the 50/50 rule: split your focus equally between improving your product and growing your user base.",
              "A free tier isn't a giveaway — it's a feedback engine and a viral growth mechanism.",
              "When a giant competitor enters your market, double down on automation and product quality rather than panic.",
              "Enjoy the process. The best founders cherish the building phase, not just the exit.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 text-base" style={{ color: "#C9A96E" }}>✓</span>
                <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <Section title="Final Thoughts" />
        <Body>
          Aytekin Tank's story is a powerful reminder of the impact of passion, perseverance, and a long-term vision in entrepreneurship. His journey from Turkey to CEO of a 25-million-user SaaS company demonstrates that with the right mindset and dedication, you don't need VC backing to build something extraordinary.
        </Body>
        <Body>
          As Jotform continues to grow and innovate, Aytekin remains committed to his principles — shaping a future where technology empowers users and drives success without compromising independence. For those looking to learn from his experiences: embrace challenges, seek feedback, and continuously invest in your vision. The road may be long, but the rewards are worth the effort.
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
            Build alongside founders like Aytekin
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Gildre connects founders at every stage with curated peer matches, expert mentorship, and the community you need to build with confidence.
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
            href="https://www.jotform.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9A96E] transition-colors"
          >
            Learn more about Jotform at jotform.com →
          </a>
        </div>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-2">
          {["Founder Journey", "Podcast", "Jotform", "Startup", "Bootstrap", "SaaS"].map((tag) => (
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
