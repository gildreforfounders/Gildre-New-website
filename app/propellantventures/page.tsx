"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const plans = [
  {
    id: "silver",
    name: "Silver",
    tagline: "For founders building and connecting",
    monthlyPrice: 59,
    annualMonthly: 50,
    popular: false,
    includesNote: null,
    href: "https://gildre.circle.so/checkout/gildre-silver-membership?affiliate_code=74673a",
    features: [
      "White-Glove Onboarding Experience",
      "Curated, High-Impact Virtual Events",
      "Private Community Workspace",
      "Personalized, Weekly 1:1 Matches & Introductions",
      "Individualized Goal Tracking Roadmap",
    ],
  },
  {
    id: "gold",
    name: "Gold",
    tagline: "For founders who want real guidance",
    monthlyPrice: 149,
    annualMonthly: 125,
    popular: true,
    includesNote: "All Silver Benefits plus:",
    href: "https://gildre.circle.so/checkout/gildre-gold-membership?affiliate_code=74673a",
    features: [
      "1 Monthly Advisory Session",
      "Access to Exclusive, In-Person Events",
      "Podcasting & Personal Brand Opportunities",
      "Access to Investor Directory & Warm Intros",
    ],
  },
  {
    id: "platinum",
    name: "Platinum",
    tagline: "For founders building at the top",
    monthlyPrice: 349,
    annualMonthly: 249,
    popular: false,
    includesNote: "All Gold Benefits and:",
    href: "https://gildre.circle.so/checkout/gildre-platinum-membership?affiliate_code=74673a",
    features: [
      "2 Monthly Advisory Sessions",
      "Personalized 1:1 Mentorship Pairing",
      "Access to Investor Directory & Multiple Monthly Warm Intros",
      "$5M+ in Premium Resources & Partner Tools",
    ],
  },
];

const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="flex-shrink-0 mt-0.5">
    <circle cx="7.5" cy="7.5" r="7" stroke="#C9A96E" strokeWidth="1.2" />
    <path d="M4.5 7.5L6.5 9.5L10.5 5.5" stroke="#C9A96E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const benefits = [
  {
    title: "Curated Community",
    body: "Access 250+ active founders across every industry: ongoing conversations, peer support, and resources 24/7.",
  },
  {
    title: "1:1 Matching",
    body: "Weekly introductions to founders and mentors matched to your specific stage, industry, and goals.",
  },
  {
    title: "Advisory Sessions",
    body: "Monthly 1:1 sessions with a Gildre Managing Partner: an exited founder matched to your business.",
  },
  {
    title: "In-Person Events",
    body: "Exclusive dinners, retreats, and events across core cities for founders who value real-world connections.",
  },
  {
    title: "Investor Access",
    body: "Access to our investor directory with warm introductions to aligned investors at the right stage.",
  },
  {
    title: "$5M+ in Perks",
    body: "Exclusive deals from 500+ partners: software, legal, finance, marketing, and more.",
  },
];

export default function PropellantVenturesPage() {
  const [yearly, setYearly] = useState(false);

  return (
    <div style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 pb-20 pt-32"
        style={{ background: "linear-gradient(160deg, #080e1a 0%, #1C2744 55%, #0a1020 100%)" }}
      >
        {/* Gold glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #C9A96E 0%, transparent 65%)" }}
        />

        <div className="relative mx-auto max-w-6xl">
          {/* Partnership logos */}
          <div className="mb-10 flex items-center justify-center gap-7">
            <div className="relative h-16 w-44">
              <Image
                src="/images/gildre-logo.png"
                alt="Gildre"
                fill
                sizes="176px"
                className="object-contain brightness-0 invert"
              />
            </div>
            <span className="text-3xl font-light" style={{ color: "rgba(201,169,110,0.6)" }}>×</span>
            <div
              className="relative h-16 w-52"
              style={{ filter: "grayscale(1) invert(1)", mixBlendMode: "screen" }}
            >
              <Image
                src="/images/logos/propellant.jpeg"
                alt="Propellant Ventures"
                fill
                sizes="208px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Heading */}
          <h1
            className="text-center text-[clamp(2.4rem,5.5vw,4rem)] font-bold leading-[1.08] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Gildre &amp;{" "}
            <span style={{ color: "#C9A96E" }}>Propellant Ventures</span>
          </h1>

          {/* Two-column content + image */}
          <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Left — copy */}
            <div className="flex flex-col gap-7">
              <div>
                <div className="mb-3 h-[2px] w-10 rounded-full" style={{ backgroundColor: "#C9A96E" }} />
                <p
                  className="text-xl font-bold leading-snug text-white sm:text-2xl"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  Building a company is a journey; you don&rsquo;t have to do it alone.
                </p>
              </div>

              <div>
                <div className="mb-3 h-[2px] w-10 rounded-full" style={{ backgroundColor: "#C9A96E" }} />
                <p
                  className="text-xl font-bold leading-snug text-white sm:text-2xl"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  Gildre and Propellant Ventures have partnered to support game-changing founders.
                </p>
              </div>

              <div>
                <div className="mb-3 h-[2px] w-10 rounded-full" style={{ backgroundColor: "#C9A96E" }} />
                <p
                  className="text-xl font-bold leading-snug text-white sm:text-2xl"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  Stop sifting through generic advice. Join the network of world-class founders and operators.
                </p>
              </div>

              <div className="mt-2">
                <button
                  onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                  className="rounded-full px-8 py-3.5 text-sm font-bold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
                >
                  View Memberships
                </button>
              </div>
            </div>

            {/* Right — event photo */}
            <div className="relative overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.2)" }}>
              <div className="relative aspect-[1/1] w-full">
                <Image
                  src="/images/gildre-propellant-event.webp"
                  alt="Gildre × Propellant Ventures event"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────────────── */}
      <section className="px-6 py-12" style={{ backgroundColor: "#080e1a" }}>
        <div className="mx-auto max-w-4xl">
          <div
            className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl sm:grid-cols-4"
            style={{ backgroundColor: "rgba(201,169,110,0.12)" }}
          >
            {[
              { value: "250+", label: "Active Members" },
              { value: "95%", label: "Member Retention" },
              { value: "74", label: "Cities Worldwide" },
              { value: "$5M+", label: "in Partner Perks" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center gap-1.5 px-6 py-7"
                style={{ backgroundColor: "#080e1a" }}
              >
                <span
                  className="text-3xl font-bold"
                  style={{ fontFamily: "var(--font-fraunces)", color: "#C9A96E" }}
                >
                  {s.value}
                </span>
                <span
                  className="text-center text-[0.6rem] font-semibold uppercase tracking-wider"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What you get ─────────────────────────────────────────────────── */}
      <section className="px-6 py-20" style={{ backgroundColor: "#0f1524" }}>
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            Partnership Benefits
          </p>
          <h2
            className="mt-3 text-center text-[2rem] font-bold text-white sm:text-[2.5rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Everything You Need to Build
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            As a Propellant Ventures portfolio company or partner, you get direct access to Gildre&rsquo;s full founder ecosystem.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl p-7"
                style={{
                  backgroundColor: "#0a1020",
                  border: "1px solid rgba(201,169,110,0.12)",
                }}
              >
                <div
                  className="pointer-events-none absolute right-0 top-0 h-24 w-24 opacity-15 rounded-tr-2xl"
                  style={{ background: "radial-gradient(circle at top right, #C9A96E 0%, transparent 70%)" }}
                />
                <div className="mb-4 h-[2px] w-8 rounded-full" style={{ backgroundColor: "#C9A96E" }} />
                <h3
                  className="text-base font-bold text-white"
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

      {/* ── Pricing ──────────────────────────────────────────────────────── */}
      <section id="pricing" className="relative px-6 py-20 overflow-hidden" style={{ backgroundColor: "#080e1a" }}>
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[400px] -translate-x-1/2 -translate-y-1/2 opacity-[0.07]"
          style={{ background: "radial-gradient(ellipse, #C9A96E 0%, transparent 65%)" }}
        />
        <div className="relative mx-auto max-w-5xl">
          <p className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            Membership Pricing
          </p>
          <h2
            className="mt-3 text-center text-[2rem] font-bold text-white sm:text-[2.5rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Select Your Program
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-center text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            Join at the tier that fits where you are. Upgrade anytime as you grow.
          </p>

          {/* Toggle */}
          <div className="mt-10 flex items-center justify-center">
            <div
              className="flex rounded-full p-1"
              style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <button
                onClick={() => setYearly(false)}
                className="rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200"
                style={{
                  backgroundColor: !yearly ? "rgba(255,255,255,0.1)" : "transparent",
                  color: !yearly ? "#fff" : "rgba(255,255,255,0.4)",
                }}
              >
                Monthly
              </button>
              <button
                onClick={() => setYearly(true)}
                className="flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200"
                style={{
                  backgroundColor: yearly ? "#C9A96E" : "transparent",
                  color: yearly ? "#1C2744" : "rgba(255,255,255,0.4)",
                }}
              >
                Annual
                {!yearly && (
                  <span
                    className="rounded-full px-2 py-0.5 text-[0.58rem] font-bold"
                    style={{ backgroundColor: "rgba(201,169,110,0.18)", color: "#C9A96E" }}
                  >
                    Save 29%
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:items-end">
            {plans.map((plan) => {
              const price = yearly ? plan.annualMonthly : plan.monthlyPrice;
              const isGold = plan.id === "gold";
              const savePct = plan.id === "silver" ? 15 : plan.id === "gold" ? 16 : 29;
              return (
                <div
                  key={plan.id}
                  className="relative flex flex-col rounded-2xl transition-all duration-300"
                  style={{
                    padding: isGold ? "2.25rem" : "1.75rem",
                    marginBottom: isGold ? "0" : "1.25rem",
                    backgroundColor: isGold ? "rgba(28,39,68,0.9)" : "rgba(255,255,255,0.03)",
                    border: isGold
                      ? "1.5px solid rgba(201,169,110,0.55)"
                      : "1.5px solid rgba(255,255,255,0.07)",
                    boxShadow: isGold
                      ? "0 0 0 1px rgba(201,169,110,0.12), 0 0 50px rgba(201,169,110,0.22), 0 0 100px rgba(201,169,110,0.08), 0 24px 64px rgba(0,0,0,0.55)"
                      : "0 4px 24px rgba(0,0,0,0.25)",
                  }}
                >
                  {isGold && (
                    <div
                      className="pointer-events-none absolute inset-x-0 top-0 h-44 overflow-hidden rounded-t-2xl"
                      style={{ background: "radial-gradient(ellipse 80% 70% at 50% 0%, rgba(201,169,110,0.14) 0%, transparent 100%)" }}
                    />
                  )}
                  {isGold && (
                    <div
                      className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-5 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.18em] whitespace-nowrap"
                      style={{ backgroundColor: "#C9A96E", color: "#1C2744", boxShadow: "0 4px 20px rgba(201,169,110,0.55)" }}
                    >
                      Most Popular
                    </div>
                  )}
                  {!isGold && (
                    <span
                      className="mb-4 inline-block self-start rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-widest"
                      style={{ backgroundColor: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.35)" }}
                    >
                      {plan.id === "silver" ? "Start here" : "Top tier"}
                    </span>
                  )}
                  {isGold && <div className="mt-2" />}

                  <h3
                    className="relative text-2xl font-bold"
                    style={{ fontFamily: "var(--font-fraunces)", color: isGold ? "#C9A96E" : "rgba(255,255,255,0.85)" }}
                  >
                    {plan.name}
                  </h3>
                  <p className="relative mt-1 text-sm" style={{ color: "rgba(255,255,255,0.38)" }}>{plan.tagline}</p>

                  <div className="relative mt-6 flex items-end gap-1">
                    <span className="mb-1 text-base font-bold leading-none" style={{ color: isGold ? "#C9A96E" : "rgba(255,255,255,0.55)" }}>$</span>
                    <span className="text-5xl font-bold leading-none text-white" style={{ fontFamily: "var(--font-fraunces)" }}>{price}</span>
                    <span className="mb-1.5 ml-1 text-sm leading-none" style={{ color: "rgba(255,255,255,0.38)" }}>/ mo</span>
                  </div>
                  {yearly ? (
                    <p className="relative mt-1.5 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>billed annually · save {savePct}%</p>
                  ) : (
                    <p className="relative mt-1.5 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>billed monthly</p>
                  )}

                  <a
                    href={plan.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative mt-7 block rounded-xl py-3.5 text-center text-sm font-bold transition-all duration-200 hover:opacity-90"
                    style={
                      isGold
                        ? { backgroundColor: "#C9A96E", color: "#1C2744", boxShadow: "0 4px 24px rgba(201,169,110,0.4)" }
                        : { backgroundColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.1)" }
                    }
                  >
                    Get Access
                  </a>

                  <div className="relative my-6 h-px" style={{ backgroundColor: isGold ? "rgba(201,169,110,0.2)" : "rgba(255,255,255,0.06)" }} />

                  {plan.includesNote && (
                    <p
                      className="relative mb-3 text-[0.65rem] font-semibold uppercase tracking-widest"
                      style={{ color: isGold ? "rgba(201,169,110,0.6)" : "rgba(255,255,255,0.28)" }}
                    >
                      {plan.includesNote}
                    </p>
                  )}

                  <ul className="relative flex flex-col gap-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckIcon />
                        <span className="text-sm leading-snug" style={{ color: "rgba(255,255,255,0.6)" }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <p className="mt-10 text-center text-xs" style={{ color: "rgba(255,255,255,0.28)" }}>
            All memberships renew automatically. Cancel anytime.{" "}
            <a
              href="https://calendly.com/taiga-gildre/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-white"
            >
              Questions? Schedule a call.
            </a>
          </p>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="px-6 py-20 text-center" style={{ backgroundColor: "#1C2744" }}>
        <div className="mx-auto max-w-2xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            Ready to Join?
          </p>
          <h2
            className="mt-4 text-[2rem] font-bold leading-tight text-white sm:text-[2.75rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Your next chapter starts here.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            You&rsquo;re building something great. Gildre and Propellant Ventures are here to make sure you don&rsquo;t have to figure it out alone.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://tally.so/r/VLERVa"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-3.5 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
            >
              Apply Now
            </a>
            <a
              href="https://calendly.com/taiga-gildre/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline underline-offset-4 transition-opacity hover:opacity-80"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Schedule a call first
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
          <a href="/privacy" className="underline underline-offset-2 hover:text-zinc-400 transition-colors" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          {" · "}
          <a href="/" className="underline underline-offset-2 hover:text-zinc-400 transition-colors" target="_blank" rel="noopener noreferrer">
            Back to Gildre.com
          </a>
        </p>
      </div>

    </div>
  );
}
