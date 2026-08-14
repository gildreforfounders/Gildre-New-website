import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/solvee" },
  title: "Gildre x solvee | Our Official AI Accelerator Partnership",
  description:
    "Gildre has partnered with solvee — an AI-powered personalized accelerator built by a Gildre member — to give every Silver, Gold, and Platinum member a strategic co-pilot from day one.",
  openGraph: {
    title: "Gildre x solvee | Our Official AI Accelerator Partnership",
    description:
      "Gildre has partnered with solvee to give every member an AI-powered strategic co-pilot. Strategy first. Then the right move, every day.",
    url: "https://www.gildre.com/solvee",
    siteName: "Gildre",
    type: "website",
    images: [{ url: "https://www.gildre.com/og-home.png", width: 1200, height: 630, alt: "Gildre x solvee Partnership" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gildre x solvee | Our Official AI Accelerator Partnership",
    description:
      "Every Gildre member gets access to solvee — AI-powered strategic guidance from idea to scale, built by one of our own.",
  },
};

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "Business Context That Carries Forward",
    body: "Unlike ChatGPT, solvee remembers everything about your business. Every answer you give, every decision you make, every gap it surfaces — it's retained. The longer you use it, the more precisely it advises you. It's the difference between a first meeting with a consultant and one who's been with you for a year.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Strategy Layer, Not Just Task Management",
    body: "solvee's 43-step curriculum runs from business assessment through validation, positioning, go-to-market, financials, and scale decisions. Every daily priority you set is tied back to a strategic decision you've already made. You stop winging it. You start executing from a plan.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: "24/7 AI Business Advisor Between Sessions",
    body: "Mentors and advisors are available an hour a month, if you're lucky. solvee is available every morning when you sit down and need to know what to work on. It monitors your business performance in real time, flags gaps before they become problems, and keeps you on the path you set.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "No Equity. No Cohort Schedule. No Waiting.",
    body: "Top accelerators take 7% equity and run on a fixed schedule. solvee starts immediately, costs a fraction, takes nothing from your cap table, and moves at your pace. You get the strategic framework of an accelerator without giving up ownership or waiting for the next batch.",
  },
];

const comparisons = [
  {
    vs: "vs. Top Accelerators",
    them: "~7% equity, fixed cohort schedule, 3-month program",
    solvee: "No equity, immediate access, moves at your pace",
  },
  {
    vs: "vs. Business Coaches",
    them: "$1–2K/month, 1 hour/week, loses context between sessions",
    solvee: "Full context retention, daily guidance, fraction of the cost",
  },
  {
    vs: "vs. Generic AI (ChatGPT)",
    them: "Broad answers, no business memory, high hallucination risk",
    solvee: "Your-business-specific advice, context retained, near-zero hallucination",
  },
];

export default function SolveePartnershipPage() {
  return (
    <div style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 pb-28 pt-36"
        style={{ background: "linear-gradient(155deg, #080e1a 0%, #1C2744 50%, #0a1020 100%)" }}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #C9A96E 0%, transparent 65%)" }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span
              className="rounded-full px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em]"
              style={{ backgroundColor: "rgba(201,169,110,0.12)", color: "#C9A96E", border: "1px solid rgba(201,169,110,0.25)" }}
            >
              Official Partnership · Silver Benefit
            </span>
          </div>

          <div className="mb-8 flex items-center justify-center gap-5">
            <Image
              src="/images/gildre-logo.png"
              alt="Gildre"
              width={52}
              height={52}
              className="rounded-xl object-contain bg-white p-1"
            />
            <span className="text-2xl font-light" style={{ color: "rgba(255,255,255,0.3)" }}>×</span>
            <div
              className="flex items-center rounded-xl px-5 py-2.5"
              style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <span
                className="text-xl font-bold tracking-tight lowercase text-white"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                solvee
              </span>
            </div>
          </div>

          <h1
            className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.08] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Strategy first.
            <span style={{ color: "#C9A96E" }}> The right move, every day.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Gildre has partnered with solvee — an AI-powered personalized accelerator built by one of our own members — to give every Gildre member a strategic co-pilot from day one. No equity. No cohort. Starts immediately.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://www.solvee.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-9 py-3.5 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
            >
              Try solvee Free
            </a>
            <Link
              href="https://tally.so/r/VLERVa"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-3.5 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              Apply to Gildre
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────────── */}
      <section
        className="px-6 py-10"
        style={{ backgroundColor: "#080e1a", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="mx-auto max-w-4xl grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { value: "43", label: "Steps, Idea to Exit" },
            { value: "0%", label: "Equity Taken" },
            { value: "24/7", label: "AI Business Advisor Access" },
            { value: "$0", label: "To Start" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold" style={{ fontFamily: "var(--font-fraunces)", color: "#C9A96E" }}>
                {s.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Built by one of our own ──────────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: "#0f1524" }}>
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
                Built by a Gildre Member
              </p>
              <h2
                className="mt-3 text-[1.75rem] font-bold leading-tight text-white sm:text-[2.25rem]"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                An AI accelerator from a Bosch engineer who got fired and built the tool he needed.
              </h2>
              <p className="mt-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                Christof Gomez Mannfeld spent seven years at Bosch working on machine learning and organizational strategy — watching large companies fail because their strategy lived in silos and nobody connected daily work to long-term outcomes. When he was let go, he didn't pivot. He built solvee: the AI accelerator that gives founders the strategic clarity that most companies spend millions trying to achieve.
              </p>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                Christof is a Gildre member based in southern Spain. When we evaluated AI tools for our community, solvee was the only one that thought like a founder — asking questions rather than giving generic answers, retaining context between sessions, and building a knowledge base specific to each business.
              </p>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                That's why we made it the first tool included in every Gildre membership tier — starting from Silver.
              </p>
              <div className="mt-8">
                <a
                  href="/blog/christof-gomez-mannfeld-solvee-ai-business-coach"
                  className="inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4 transition-opacity hover:opacity-70"
                  style={{ color: "#C9A96E" }}>
                  Read Christof's full story →
                </a>
              </div>
            </div>

            {/* Christof photo */}
            <div className="relative overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
              <Image
                src="/images/christof-gomez-manfeld-headshot.jpeg"
                alt="Christof Gomez Mannfeld, founder of solvee and Gildre member"
                width={720}
                height={540}
                className="w-full object-cover"
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{ background: "linear-gradient(to top, rgba(8,14,26,0.95) 0%, transparent 100%)" }}
              >
                <p className="text-sm font-bold text-white">Christof Gomez Mannfeld</p>
                <p className="text-xs mt-0.5" style={{ color: "#C9A96E" }}>Founder, solvee · Gildre Member, Spain</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What is solvee ───────────────────────────────────────────── */}
      <section className="px-6 py-20" style={{ backgroundColor: "#080e1a" }}>
        <div className="mx-auto max-w-5xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-center" style={{ color: "#C9A96E" }}>
            What Is solvee
          </p>
          <h2
            className="mt-3 text-center text-[1.75rem] font-bold leading-tight text-white sm:text-[2.25rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            A personalized accelerator that learns your business and never forgets it.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            solvee runs on two layers: strategy and execution. The strategy layer guides you through a structured curriculum — validation, positioning, go-to-market, financials, and scale. The execution layer monitors your actual business performance and surfaces the right priorities each day. The two are connected through your business profile, so every morning's priority flows from a decision you've already made.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              {
                label: "Layer 1 — Strategy",
                title: "Build the foundation",
                items: [
                  "Business assessment and gap identification",
                  "Guided conversations applying proven frameworks",
                  "Clear positioning and go-to-market strategy",
                  "43-step curriculum from idea to exit",
                ],
              },
              {
                label: "Layer 2 — Execution",
                title: "Stay on it, every day",
                items: [
                  "Integration with your existing business tools",
                  "Real-time performance monitoring",
                  "Daily priority setting tied to strategic goals",
                  "Gap flags and opportunity alerts",
                ],
              },
            ].map((layer) => (
              <div
                key={layer.label}
                className="rounded-2xl p-8"
                style={{ backgroundColor: "rgba(201,169,110,0.04)", border: "1px solid rgba(201,169,110,0.14)" }}
              >
                <p className="mb-1 text-[0.6rem] font-bold uppercase tracking-widest" style={{ color: "#C9A96E" }}>
                  {layer.label}
                </p>
                <h3 className="mb-5 text-lg font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
                  {layer.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {layer.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg viewBox="0 0 15 15" fill="none" className="mt-0.5 h-4 w-4 flex-shrink-0">
                        <circle cx="7.5" cy="7.5" r="7" stroke="#C9A96E" strokeWidth="1.2" />
                        <path d="M4.5 7.5L6.5 9.5L10.5 5.5" stroke="#C9A96E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-sm leading-snug" style={{ color: "rgba(255,255,255,0.6)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature deep-dives ───────────────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: "#0f1524" }}>
        <div className="mx-auto max-w-5xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-center" style={{ color: "#C9A96E" }}>
            Why It Works
          </p>
          <h2
            className="mt-3 text-center text-[1.75rem] font-bold leading-tight text-white sm:text-[2.25rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Four things solvee does that nothing else does.
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-5 rounded-2xl p-8"
                style={{
                  backgroundColor: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(201,169,110,0.12)",
                }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl flex-shrink-0"
                  style={{ backgroundColor: "rgba(201,169,110,0.1)", color: "#C9A96E" }}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3
                    className="text-[1.1rem] font-bold text-white leading-snug"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {feature.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison table ─────────────────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: "#080e1a" }}>
        <div className="mx-auto max-w-4xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-center" style={{ color: "#C9A96E" }}>
            How It Compares
          </p>
          <h2
            className="mt-3 text-center text-[1.75rem] font-bold leading-tight text-white sm:text-[2.25rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            The alternatives all have a catch.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            solvee isn't the only way to get strategic guidance. It's just the only one that doesn't cost equity, require a cohort, or forget your business the moment you close the tab.
          </p>

          <div className="mt-12 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            {/* Header row */}
            <div
              className="grid grid-cols-3 px-6 py-4 text-[0.6rem] font-bold uppercase tracking-widest"
              style={{ backgroundColor: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <span style={{ color: "rgba(255,255,255,0.35)" }}>Compared to</span>
              <span style={{ color: "rgba(255,255,255,0.35)" }}>Their trade-off</span>
              <span style={{ color: "#C9A96E" }}>solvee</span>
            </div>
            {comparisons.map((row, i) => (
              <div
                key={row.vs}
                className="grid grid-cols-3 items-start gap-4 px-6 py-5"
                style={{
                  borderBottom: i < comparisons.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  backgroundColor: i % 2 === 1 ? "rgba(255,255,255,0.01)" : "transparent",
                }}
              >
                <p className="text-sm font-semibold text-white">{row.vs}</p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{row.them}</p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(201,169,110,0.85)" }}>{row.solvee}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote ────────────────────────────────────────────────────── */}
      <section className="px-6 py-20" style={{ backgroundColor: "#0f1524" }}>
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="text-5xl mb-6"
            style={{ color: "rgba(201,169,110,0.35)", fontFamily: "Georgia, serif", lineHeight: 1 }}
          >
            &ldquo;
          </div>
          <p
            className="text-[1.2rem] leading-relaxed text-white font-medium"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Most founders don't fail because their idea is wrong. They fail because they can't connect
            their daily work to a real strategy. solvee is the first tool we've seen that solves that
            problem — and it was built by one of our own members. That's why it's in every membership tier.
          </p>
          <p className="mt-6 text-sm font-semibold" style={{ color: "#C9A96E" }}>
            Taiga Gamell, Founder, Gildre
          </p>
        </div>
      </section>

      {/* ── Membership context ───────────────────────────────────────── */}
      <section className="px-6 py-20" style={{ backgroundColor: "#080e1a" }}>
        <div className="mx-auto max-w-4xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-center" style={{ color: "#C9A96E" }}>
            Included In Your Membership
          </p>
          <h2
            className="mt-3 text-center text-[1.75rem] font-bold text-white sm:text-[2rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            solvee comes with every Gildre tier — starting from Silver.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            We made it a base benefit because strategy shouldn't be a premium add-on. Every Gildre member gets access to solvee alongside the peer community, the events, and the mentorship.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                tier: "Silver",
                price: "$59/mo",
                highlight: false,
                solveeAccess: "solvee AI partner access",
              },
              {
                tier: "Gold",
                price: "$149/mo",
                highlight: true,
                solveeAccess: "solvee AI partner access + in-person events",
              },
              {
                tier: "Platinum",
                price: "$349/mo",
                highlight: false,
                solveeAccess: "solvee AI partner access + full investor access",
              },
            ].map((t) => (
              <div
                key={t.tier}
                className="rounded-2xl p-7"
                style={{
                  backgroundColor: t.highlight ? "rgba(28,39,68,0.9)" : "rgba(255,255,255,0.03)",
                  border: t.highlight ? "1.5px solid rgba(201,169,110,0.45)" : "1.5px solid rgba(255,255,255,0.07)",
                }}
              >
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: t.highlight ? "#C9A96E" : "rgba(255,255,255,0.4)" }}>
                  {t.tier}
                </p>
                <p className="mt-1 text-2xl font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
                  {t.price}
                </p>
                <div className="my-4 h-px" style={{ backgroundColor: "rgba(255,255,255,0.07)" }} />
                <div className="flex items-start gap-2.5">
                  <svg viewBox="0 0 15 15" fill="none" className="mt-0.5 h-4 w-4 flex-shrink-0">
                    <circle cx="7.5" cy="7.5" r="7" stroke="#C9A96E" strokeWidth="1.2" />
                    <path d="M4.5 7.5L6.5 9.5L10.5 5.5" stroke="#C9A96E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-sm leading-snug" style={{ color: "rgba(255,255,255,0.65)" }}>{t.solveeAccess}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://tally.so/r/VLERVa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full px-9 py-3.5 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
            >
              Apply for Gildre Membership
            </a>
          </div>
        </div>
      </section>

      {/* ── Dual CTA ─────────────────────────────────────────────────── */}
      <section className="px-6 py-28 text-center" style={{ backgroundColor: "#1C2744" }}>
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 flex items-center justify-center gap-4">
            <Image
              src="/images/gildre-logo.png"
              alt="Gildre"
              width={36}
              height={36}
              className="rounded-lg object-contain bg-white p-0.5"
            />
            <span className="text-lg font-light" style={{ color: "rgba(255,255,255,0.3)" }}>×</span>
            <div
              className="rounded-lg px-4 py-1.5"
              style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <span className="text-sm font-bold lowercase text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
                solvee
              </span>
            </div>
          </div>
          <h2
            className="text-[2rem] font-bold leading-tight text-white sm:text-[2.5rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            One move at a time. Starting today.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            solvee is free to start and included in every Gildre membership. Join the community, get your strategic co-pilot, and stop going in circles.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://tally.so/r/VLERVa"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-9 py-4 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
            >
              Apply for Gildre Membership
            </a>
            <a
              href="https://www.solvee.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-4 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              Try solvee Free
            </a>
          </div>
        </div>
      </section>

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
