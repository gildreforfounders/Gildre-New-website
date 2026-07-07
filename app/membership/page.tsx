"use client";
import { useState } from "react";

// ─── Icons ───────────────────────────────────────────────────────────────────

const CheckCircle = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
    <circle cx="8" cy="8" r="7.25" stroke="#C9A96E" strokeWidth="1.3" />
    <path d="M4.8 8L6.9 10.2L11.2 5.8" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BenefitIcon = ({ d }: { d: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

// ─── Data ────────────────────────────────────────────────────────────────────

const stages = [
  {
    tag: "Stage 1 · Build",
    headline: "Validate & Launch",
    sub: "<$500K ARR",
    body: "You're building your MVP, locking in early customers, and chasing product-market fit. Gildre connects you with founders who've navigated your exact stage — so you move faster and avoid costly mistakes.",
    dark: false,
  },
  {
    tag: "Stage 2 · Growth",
    headline: "Scaling Operations",
    sub: "$500K–$5M ARR",
    body: "You have traction. Now you need to break through growth bottlenecks, build systems, hire right, and fundraise. Gildre gives you the operators and advisors who've scaled through this exact phase.",
    dark: true,
  },
  {
    tag: "Stage 3 · Scale",
    headline: "Expanding & Exiting",
    sub: "$5M+ ARR",
    body: "You're building at the top. Enterprise deals, board dynamics, strategic M&A, or the path to exit — Gildre's Platinum network pairs you with founders who've already been there and come out ahead.",
    dark: false,
  },
];

const benefits = [
  {
    icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
    title: "Private Community Platform",
    body: "Instant access to a curated workspace with 250+ active founders across every industry — ongoing conversations, peer support, and resources, 24/7.",
    tier: "All Members",
  },
  {
    icon: "M15 10l4.553-2.069A1 1 0 0121 8.82V15a2 2 0 01-2 2H5a2 2 0 01-2-2V8.82a1 1 0 011.447-.89L9 10l3-1.5L15 10zM3 8l9-4.5L21 8",
    title: "Curated Virtual Events",
    body: "Weekly AMAs, Innovation Roundtables, Founder Fireside Chats, and Executive Workshops led by operators who've built at scale.",
    tier: "All Members",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    title: "Personalized 1:1 Matching",
    body: "Weekly introductions to founders and mentors matched to your specific stage, industry, and goals. Real relationships, not random networking.",
    tier: "All Members",
  },
  {
    icon: "M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM1 7l11-4 11 4",
    title: "$5M+ in Partner Perks",
    body: "Exclusive deals from 500+ partners — software tools, legal, finance, marketing, and more. Everything you need to build faster from day one.",
    tier: "Platinum Only",
  },
  {
    icon: "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z",
    title: "Advisory Sessions",
    body: "Monthly 1:1 sessions with a Gildre Managing Partner — an exited founder with deep domain expertise matched to your business and stage.",
    tier: "Gold & Platinum",
  },
  {
    icon: "M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    title: "In-Person Events & Dinners",
    body: "Exclusive chapter dinners, executive retreats, and in-person events across 5 core cities — for founders who value real-world connections.",
    tier: "Gold & Platinum",
  },
];

const plans = [
  {
    id: "silver",
    name: "Silver",
    tagline: "For founders building and connecting",
    monthlyPrice: 59,
    annualMonthly: 50,
    cta: "Get Access",
    href: "https://gildre.circle.so/checkout/gildre-silver-membership",
    popular: false,
    includesNote: null,
    features: [
      "White-Glove Onboarding Experience",
      "Private Community Workspace",
      "Curated, High-Impact Virtual Events",
      "Personalized Weekly 1:1 Introductions",
      "Individualized Goal Tracking Roadmap",
      "Member-Only Resource Library",
    ],
  },
  {
    id: "gold",
    name: "Gold",
    tagline: "For founders who want real guidance",
    monthlyPrice: 149,
    annualMonthly: 125,
    cta: "Get Access",
    href: "https://gildre.circle.so/checkout/gildre-gold-membership",
    popular: true,
    includesNote: "Everything in Silver, plus:",
    features: [
      "1 Monthly Advisory Session with a Managing Partner",
      "Access to Exclusive In-Person Events & Dinners",
      "Podcasting & Personal Brand Opportunities",
      "Investor Directory Access & Warm Introductions",
    ],
  },
  {
    id: "platinum",
    name: "Platinum",
    tagline: "For founders building at the top",
    monthlyPrice: 349,
    annualMonthly: 249,
    cta: "Get Access",
    href: "https://gildre.circle.so/checkout/gildre-platinum-membership",
    popular: false,
    includesNote: "Everything in Gold, plus:",
    features: [
      "2 Monthly Advisory Sessions",
      "Personalized 1:1 Mentorship Pairing",
      "Multiple Monthly Warm Investor Introductions",
      "Priority Access to Executive Retreats",
      "Dedicated Concierge Onboarding",
      "$5M+ in Partner Perks & Exclusive Deals",
    ],
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function MembershipPage() {
  const [yearly, setYearly] = useState(false);

  return (
    <div className="flex flex-col" style={{ fontFamily: "var(--font-geist-sans)" }}>

      {/* ── 1. Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 pb-24 pt-40"
        style={{
          background: "linear-gradient(160deg, #080e1a 0%, #0f1524 55%, #0a1020 100%)",
        }}
      >
        {/* Gold glow orb */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #C9A96E 0%, transparent 65%)" }}
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <p
            className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]"
            style={{ color: "#C9A96E" }}
          >
            Gildre Membership
          </p>

          <h1
            className="mt-4 text-[clamp(2.4rem,5.5vw,4rem)] font-bold leading-[1.08] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            The Founder Community
            <br />
            <span style={{ color: "#C9A96E" }}>Built for Builders.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            Join 250+ founders across 74 cities who are building, scaling, and exiting together. Choose the membership tier that fits your stage — and upgrade anytime as you grow.
          </p>

          {/* CTA */}
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-full px-8 py-3.5 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
            >
              View Membership Options ↓
            </button>
          </div>

          {/* Trust stats */}
          <div
            className="mx-auto mt-16 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-2xl"
            style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
          >
            {[
              { value: "250+", label: "Active Members" },
              { value: "95%", label: "Member Retention" },
              { value: "74", label: "Cities Worldwide" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center gap-1 px-4 py-5"
                style={{ backgroundColor: "#0f1524" }}
              >
                <span
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {s.value}
                </span>
                <span className="text-[0.65rem] font-medium uppercase tracking-wide" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. Who It's For ─────────────────────────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: "#F5F0E8" }}>
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            Who It&rsquo;s For
          </p>
          <h2
            className="mt-3 text-center text-[2rem] font-bold text-[#1C2744] sm:text-[2.5rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Built for Every Stage of the Journey
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-zinc-500">
            Whether you&rsquo;re pre-revenue or post-exit, Gildre was built for founders who execute.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {stages.map((s) => (
              <div
                key={s.tag}
                className="relative overflow-hidden rounded-2xl p-8"
                style={{
                  backgroundColor: s.dark ? "#1C2744" : "#fff",
                  border: s.dark ? "1.5px solid rgba(201,169,110,0.15)" : "1.5px solid #e8e0d0",
                }}
              >
                <div
                  className="mb-5 inline-flex items-center rounded-full px-3 py-1 text-[0.63rem] font-bold uppercase tracking-widest"
                  style={{
                    backgroundColor: "rgba(201,169,110,0.15)",
                    color: "#C9A96E",
                  }}
                >
                  {s.tag}
                </div>
                <h3
                  className="text-xl font-bold"
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    color: s.dark ? "#fff" : "#1C2744",
                  }}
                >
                  {s.headline}
                </h3>
                <p
                  className="mt-1 text-sm font-semibold"
                  style={{ color: s.dark ? "rgba(255,255,255,0.4)" : "#a1a1aa" }}
                >
                  {s.sub}
                </p>
                <p
                  className="mt-4 text-sm leading-relaxed"
                  style={{ color: s.dark ? "rgba(255,255,255,0.65)" : "#52525b" }}
                >
                  {s.body}
                </p>
                <div
                  className="pointer-events-none absolute bottom-0 right-0 h-28 w-28 rounded-tl-full opacity-25"
                  style={{
                    background: "radial-gradient(circle at bottom right, rgba(201,169,110,0.4) 0%, transparent 70%)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Core Benefits ────────────────────────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: "#1C2744" }}>
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            What You Get
          </p>
          <h2
            className="mt-3 text-center text-[2rem] font-bold text-white sm:text-[2.5rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Your Growth Operating System
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            Every Gildre member gets the infrastructure, community, and guidance to build faster — at every tier.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="relative overflow-hidden rounded-2xl p-7"
                style={{
                  backgroundColor: "#0f1a2e",
                  border: "1px solid rgba(201,169,110,0.12)",
                }}
              >
                {/* Subtle glow */}
                <div
                  className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-bl-full opacity-15"
                  style={{ background: "radial-gradient(circle at top right, #C9A96E 0%, transparent 70%)" }}
                />
                <div
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "rgba(201,169,110,0.1)" }}
                >
                  <BenefitIcon d={b.icon} />
                </div>
                <h3
                  className="text-base font-bold text-white"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {b.body}
                </p>
                <div
                  className="mt-5 inline-flex items-center rounded-full px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-wider"
                  style={{ backgroundColor: "rgba(201,169,110,0.1)", color: "#C9A96E" }}
                >
                  {b.tier}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Pricing ──────────────────────────────────────────────────────── */}
      <section id="pricing" className="px-6 py-24" style={{ backgroundColor: "#F5F0E8" }}>
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            Membership Pricing
          </p>
          <h2
            className="mt-3 text-center text-[2rem] font-bold text-[#1C2744] sm:text-[2.5rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Select Your Program
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-center text-base leading-relaxed text-zinc-500">
            Join at the tier that fits where you are. Upgrade anytime as you grow.
          </p>

          {/* Toggle */}
          <div className="mt-10 flex items-center justify-center">
            <div className="flex rounded-full p-1" style={{ backgroundColor: "rgba(28,39,68,0.08)" }}>
              <button
                onClick={() => setYearly(false)}
                className="rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200"
                style={{
                  backgroundColor: !yearly ? "#fff" : "transparent",
                  color: !yearly ? "#1C2744" : "#6b7280",
                  boxShadow: !yearly ? "0 1px 4px rgba(0,0,0,0.10)" : "none",
                }}
              >
                Monthly
              </button>
              <button
                onClick={() => setYearly(true)}
                className="flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200"
                style={{
                  backgroundColor: yearly ? "#1C2744" : "transparent",
                  color: yearly ? "#fff" : "#6b7280",
                  boxShadow: yearly ? "0 1px 4px rgba(0,0,0,0.15)" : "none",
                }}
              >
                Annual
                <span
                  className="rounded-full px-2 py-0.5 text-[0.6rem] font-bold"
                  style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
                >
                  Save up to 29%
                </span>
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:items-start">
            {plans.map((plan) => {
              const price = yearly ? plan.annualMonthly : plan.monthlyPrice;
              return (
                <div
                  key={plan.id}
                  className="relative flex flex-col rounded-2xl bg-white p-8 transition-shadow duration-200 hover:shadow-lg"
                  style={{
                    border: plan.popular ? "2px solid #C9A96E" : "1.5px solid #e8e0d0",
                    boxShadow: plan.popular
                      ? "0 4px 32px rgba(201,169,110,0.12)"
                      : "0 2px 12px rgba(0,0,0,0.05)",
                  }}
                >
                  {plan.popular && (
                    <div
                      className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-[0.65rem] font-bold uppercase tracking-widest whitespace-nowrap"
                      style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
                    >
                      Most Popular
                    </div>
                  )}

                  {/* Tier name */}
                  <h3
                    className="text-2xl font-bold text-[#1C2744]"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-400">{plan.tagline}</p>

                  {/* Price */}
                  <div className="mt-6 flex items-end gap-1">
                    <span className="mb-1 text-lg font-bold leading-none text-[#1C2744]">$</span>
                    <span
                      className="text-5xl font-bold leading-none text-[#1C2744]"
                      style={{ fontFamily: "var(--font-fraunces)" }}
                    >
                      {price}
                    </span>
                    <span className="mb-1.5 ml-1 text-sm leading-none text-zinc-400">per month</span>
                  </div>
                  {yearly && <p className="mt-1 text-xs text-zinc-400">billed annually</p>}

                  {/* CTA */}
                  <a
                    href={plan.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 block rounded-xl py-3.5 text-center text-sm font-bold transition-opacity hover:opacity-90"
                    style={
                      plan.popular
                        ? { backgroundColor: "#C9A96E", color: "#1C2744" }
                        : { backgroundColor: "#F0EAE0", color: "#1C2744" }
                    }
                  >
                    {plan.cta}
                  </a>

                  {/* Divider */}
                  <div className="my-6 h-px" style={{ backgroundColor: "#f0ece4" }} />

                  {/* Includes note */}
                  {plan.includesNote && (
                    <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-widest text-zinc-400">
                      {plan.includesNote}
                    </p>
                  )}

                  {/* Features */}
                  <ul className="flex flex-col gap-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle />
                        <span className="text-sm leading-snug text-zinc-600">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-center text-xs text-zinc-400">
            All memberships renew automatically. Cancel anytime.{" "}
            <a
              href="https://calendly.com/taiga-gildre/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-zinc-600"
            >
              Have questions? Schedule a call with the team.
            </a>
          </p>
        </div>
      </section>

      {/* ── 5. Social Proof Bar ─────────────────────────────────────────────── */}
      <section className="px-6 py-16" style={{ backgroundColor: "#0f1524" }}>
        <div className="mx-auto max-w-4xl">
          <div
            className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl sm:grid-cols-4"
            style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
          >
            {[
              { value: "250+", label: "Active Members" },
              { value: "95%", label: "Member Satisfaction" },
              { value: "15+", label: "In-Person Cities" },
              { value: "$5M+", label: "in Partner Perks" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center gap-1.5 px-6 py-8"
                style={{ backgroundColor: "#0f1524" }}
              >
                <span
                  className="text-3xl font-bold text-white"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {s.value}
                </span>
                <span
                  className="text-center text-[0.65rem] font-semibold uppercase tracking-wider"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Closing CTA ──────────────────────────────────────────────────── */}
      <section className="px-6 py-24 text-center" style={{ backgroundColor: "#1C2744" }}>
        <div className="mx-auto max-w-2xl">
          <p
            className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]"
            style={{ color: "#C9A96E" }}
          >
            Ready to Join?
          </p>
          <h2
            className="mt-4 text-[2rem] font-bold leading-tight text-white sm:text-[2.75rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Your next chapter starts here.
          </h2>
          <p
            className="mx-auto mt-5 max-w-lg text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            You were referred to Gildre because someone in our community believes you belong here. Join the founders who are already building alongside people who get it.
          </p>
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-full px-8 py-3.5 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
            >
              Select Your Membership
            </button>
          </div>
          <a
            href="https://calendly.com/taiga-gildre/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block text-sm underline underline-offset-4 transition-opacity hover:opacity-70"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Still have questions? Schedule a call first.
          </a>
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
