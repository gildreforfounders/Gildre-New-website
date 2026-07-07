import Image from "next/image";

// ─── Data ────────────────────────────────────────────────────────────────────

const mentors = [
  {
    name: "Fritz Lanman",
    title: "CEO",
    company: "ClassPass & MindBody",
    bio: "Fritz is the CEO at ClassPass, which attained unicorn status in 2019 with a $285M financing round. He led Microsoft's $240M Facebook investment in 2007 — a deal now worth over $8 billion.",
    photo: "/mentors/fritz-lanman.png",
  },
  {
    name: "Diana Stepner",
    title: "Head of Product & Startup Executive",
    company: null,
    bio: "Established product leader who served as VP of Product at Chan Zuckerberg Initiative, Pearson, Kayak, SimplePractice, and Monster.com.",
    photo: "/mentors/diana-stepner.jpg",
  },
  {
    name: "Sam Bradley",
    title: "Director of Product",
    company: "PayPal",
    bio: "Experienced product leader who has led global product teams at Expedia Group, Quizlet, Stitch Fix, and most recently PayPal.",
    photo: "/mentors/sam-bradley.jpg",
  },
  {
    name: "Jayme Strauss",
    title: "Chief Commercial Officer",
    company: "Precision Neuroscience",
    bio: "Pioneered clinical advancements in Neurotech, Healthcare, AI, and Medical Devices for over 15 years across multiple startups including Viz.ai.",
    photo: "/mentors/jayme-strauss.jpg",
  },
  {
    name: "Jason Jacobsohn",
    title: "Managing Partner & Founder",
    company: "Propellant Ventures",
    bio: "Has worked with thousands of startups and multiple VCs supporting 14 industries. Director of the Chicago Founder Institute.",
    photo: "/mentors/jason-jacobsohn.jpg",
  },
  {
    name: "Bipasha Ghosh",
    title: "Chief Marketing Officer",
    company: "Dali Spaces",
    bio: "Former VP of International Marketing at NBC Universal and Head of Marketing at BBC World. CMO at Dali Spaces.",
    photo: "/mentors/bipasha-ghosh.png",
  },
  {
    name: "Lysle Wikersham",
    title: "Mentor & Advisor",
    company: null,
    bio: "Seasoned entrepreneur and advisor dedicated to helping founders navigate the complexities of building and scaling companies.",
    photo: null,
  },
  {
    name: "Ankur Jain",
    title: "CTO & Founder",
    company: "Carallel and Sprout",
    bio: "Former VP of Architecture and Engineering at Groupon and Chief Architect at Walgreens. Advisor to multiple Series A startups.",
    photo: "/mentors/ankur-jain.png",
  },
];

const benefits = [
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Advisory Board & Board of Director Opportunities",
    body: "Gain formal advisory or board roles with high-potential companies — expand your portfolio and your impact.",
  },
  {
    icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
    title: "Host Executive Workshops & Speaking Engagements",
    body: "Share your expertise through curated workshops, roundtables, and fireside chats with the Gildre community.",
  },
  {
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    title: "Access to Gildre Partnerships & Resources",
    body: "Tap into our $5M+ partner ecosystem, educational resources, and tools alongside the founders you support.",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Connect with World-Class Leaders & Executives",
    body: "Build relationships with a global network of founders, operators, and executives across every major industry.",
  },
  {
    icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z",
    title: "Personalized Podcast & Thought Leadership Episodes",
    body: "Amplify your brand through Gildre's Start to Scale podcast and exclusive thought leadership opportunities.",
  },
  {
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    title: "Invitations to Exclusive Events & Activities",
    body: "Priority access to Gildre dinners, retreats, and in-person events across our 5 core chapters and beyond.",
  },
];

const requirements = [
  "Minimum of 10 years or 20,000 hours of relevant industry experience",
  "Has mentored at least 2–3 startups or individuals with measurable results",
  "Availability for 2 hours per month with your assigned Mentee or Founder",
  "A high-energy passion for coaching and lifelong learning",
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function BenefitIcon({ d }: { d: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C9A96E"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={d} />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="9" cy="9" r="8.25" stroke="#C9A96E" strokeWidth="1.3" />
      <path d="M5.5 9L7.8 11.5L12.5 6.5" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function MentorPage() {
  return (
    <div className="flex flex-col" style={{ fontFamily: "var(--font-geist-sans)" }}>

      {/* ── 1. Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 pb-24 pt-40"
        style={{
          background: "linear-gradient(160deg, #080e1a 0%, #0f1524 55%, #0a1020 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #C9A96E 0%, transparent 65%)" }}
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <p
            className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]"
            style={{ color: "#C9A96E" }}
          >
            Mentorship at Gildre
          </p>
          <h1
            className="mt-4 text-[clamp(2.2rem,5.2vw,3.75rem)] font-bold leading-[1.08] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            The People Behind
            <br />
            <span style={{ color: "#C9A96E" }}>the Progress.</span>
          </h1>
          <p
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            At Gildre we believe mentors play one of the most crucial roles in an entrepreneur&rsquo;s journey. As a mentor you&rsquo;ll impact the entire community and help founders solve real-world problems. Our goal is to facilitate meaningful connections and long-lasting relationships — geared towards providing value to both entrepreneur and mentor.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="https://tally.so/r/VLERVa"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-3.5 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
            >
              Apply to Become a Mentor
            </a>
          </div>

          {/* Divider line */}
          <div className="mx-auto mt-16 h-px max-w-xs" style={{ backgroundColor: "rgba(201,169,110,0.2)" }} />
        </div>
      </section>

      {/* ── 2. Who Are Our Mentors? ─────────────────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: "#F5F0E8" }}>
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            Our Community
          </p>
          <h2
            className="mt-3 text-center text-[2rem] font-bold text-[#1C2744] sm:text-[2.5rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Who Are Our Mentors?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-zinc-500">
            Our mentors come from every corner of the business world — operators, executives, and founders who have built, scaled, and exited at the highest levels.
          </p>

          <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {mentors.map((m) => (
              <div
                key={m.name}
                className="flex flex-col overflow-hidden rounded-2xl bg-white"
                style={{ border: "1.5px solid #e8e0d0", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
              >
                {/* Photo or initials */}
                <div className="relative h-52 w-full overflow-hidden" style={{ backgroundColor: "#1C2744" }}>
                  {m.photo ? (
                    <Image
                      src={m.photo}
                      alt={m.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span
                        className="text-4xl font-bold"
                        style={{ color: "#C9A96E", fontFamily: "var(--font-fraunces)" }}
                      >
                        {m.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                  )}
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)",
                    }}
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col gap-1 p-4">
                  <p
                    className="text-sm font-bold text-[#1C2744]"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    {m.name}
                  </p>
                  <p className="text-[0.7rem] leading-snug text-zinc-400">
                    {m.title}{m.company ? ` · ${m.company}` : ""}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Why Mentor at Gildre? ────────────────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: "#1C2744" }}>
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
                Why Gildre?
              </p>
              <h2
                className="mt-3 text-[2rem] font-bold leading-tight text-white sm:text-[2.4rem]"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                Why Mentor at Gildre?
              </h2>
              <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                Mentors impact the lives of so many individuals — not just entrepreneurs and founders. The right piece of advice can positively change the trajectory of a company and impact countless stories.
              </p>
              <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                This is your opportunity to support innovation in the ecosystem and meet an amazing network of passionate leaders across the globe.
              </p>
              <div className="mt-8">
                <a
                  href="https://tally.so/r/VLERVa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full px-7 py-3 text-sm font-bold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
                >
                  Apply to Mentor
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "250+", label: "Founders Supported" },
                { value: "74", label: "Cities Worldwide" },
                { value: "15+", label: "In-Person Chapters" },
                { value: "95%", label: "Member Satisfaction" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center justify-center rounded-2xl px-6 py-8 text-center"
                  style={{
                    backgroundColor: "#0f1a2e",
                    border: "1px solid rgba(201,169,110,0.12)",
                  }}
                >
                  <span
                    className="text-3xl font-bold text-white"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    {s.value}
                  </span>
                  <span
                    className="mt-1.5 text-[0.65rem] font-semibold uppercase tracking-wider"
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Mentor Benefits ──────────────────────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: "#0f1524" }}>
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            What You&rsquo;ll Receive
          </p>
          <h2
            className="mt-3 text-center text-[2rem] font-bold text-white sm:text-[2.5rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Mentor Benefits
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            Mentoring at Gildre isn&rsquo;t a one-way street. We invest in our mentors just as much as the founders they guide.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="relative overflow-hidden rounded-2xl p-7"
                style={{
                  backgroundColor: "#1C2744",
                  border: "1px solid rgba(201,169,110,0.1)",
                }}
              >
                <div
                  className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-bl-full opacity-10"
                  style={{ background: "radial-gradient(circle at top right, #C9A96E 0%, transparent 70%)" }}
                />
                <div
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "rgba(201,169,110,0.1)" }}
                >
                  <BenefitIcon d={b.icon} />
                </div>
                <h3
                  className="text-sm font-bold leading-snug text-white"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Mentor Requirements ──────────────────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: "#F5F0E8" }}>
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
                Who Qualifies
              </p>
              <h2
                className="mt-3 text-[2rem] font-bold leading-tight text-[#1C2744] sm:text-[2.4rem]"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                Mentor Requirements
              </h2>
              <p className="mt-5 text-base leading-relaxed text-zinc-500">
                Mentors come from all different industries and backgrounds to provide a wide range of advice through experience. We carefully vet each mentor to ensure they&rsquo;re here for the right reasons — to ensure a world-class experience for every founder.
              </p>

              <ul className="mt-8 flex flex-col gap-5">
                {requirements.map((r) => (
                  <li key={r} className="flex items-start gap-3.5">
                    <CheckIcon />
                    <span className="text-sm leading-relaxed text-zinc-600">{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quote block */}
            <div
              className="relative overflow-hidden rounded-2xl p-10"
              style={{
                backgroundColor: "#1C2744",
                border: "1.5px solid rgba(201,169,110,0.15)",
              }}
            >
              <div
                className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-bl-full opacity-10"
                style={{ background: "radial-gradient(circle at top right, #C9A96E 0%, transparent 65%)" }}
              />
              <div className="mb-6 h-[2px] w-10 rounded-full" style={{ backgroundColor: "#C9A96E" }} />
              <p
                className="text-lg font-bold leading-snug text-white sm:text-xl"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                &ldquo;The right piece of advice at the right moment can change the entire trajectory of a company.&rdquo;
              </p>
              <p className="mt-6 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                — The Gildre Founding Team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. CTA ──────────────────────────────────────────────────────────── */}
      <section className="px-6 py-24 text-center" style={{ backgroundColor: "#1C2744" }}>
        <div className="mx-auto max-w-2xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            Join the Network
          </p>
          <h2
            className="mt-4 text-[2rem] font-bold leading-tight text-white sm:text-[2.75rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Interested in Becoming a Mentor?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            Please complete the application below to start the process. Our team personally reviews every application and will be in touch within 3–5 business days.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://tally.so/r/VLERVa"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-9 py-4 text-sm font-bold tracking-wide transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
            >
              Apply Now
            </a>
            <a
              href="https://calendly.com/taiga-gildre/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline underline-offset-4 transition-opacity hover:opacity-70"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Have questions? Schedule a call first.
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
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
