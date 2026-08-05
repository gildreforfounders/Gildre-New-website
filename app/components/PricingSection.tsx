"use client";
import { useState } from "react";

const Check = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="flex-shrink-0 mt-0.5">
    <circle cx="7.5" cy="7.5" r="7" stroke="#C9A96E" strokeWidth="1.2" />
    <path d="M4.5 7.5L6.5 9.5L10.5 5.5" stroke="#C9A96E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const plans = [
  {
    id: "silver",
    name: "Silver",
    tagline: "Build your foundation",
    label: "Start here",
    monthlyPrice: 59,
    annualMonthly: 50,
    savePct: 15,
    cta: "Get Access",
    href: "https://gildre.circle.so/checkout/gildre-silver-membership",
    popular: false,
    extraLabel: null,
    coreFeatures: [
      "White-Glove Onboarding Experience",
      "Curated, High-Impact Virtual Events",
      "Private Community Workspace",
      "Weekly 1:1 Curated Introductions",
      "Individualized Goal Tracking Roadmap",
    ],
  },
  {
    id: "gold",
    name: "Gold",
    tagline: "Real guidance, real rooms",
    label: "Most popular",
    monthlyPrice: 149,
    annualMonthly: 125,
    savePct: 16,
    cta: "Apply Now",
    href: "https://tally.so/r/VLERVa",
    popular: true,
    extraLabel: "All Silver, plus:",
    coreFeatures: [
      "1 Monthly Advisory Session",
      "Exclusive In-Person Founder Dinners",
      "Podcasting & Personal Brand Opportunities",
      "Investor Directory & Warm Introductions",
    ],
  },
  {
    id: "platinum",
    name: "Platinum",
    tagline: "Full-stack founder support",
    label: "Top tier",
    monthlyPrice: 349,
    annualMonthly: 249,
    savePct: 29,
    cta: "Apply Now",
    href: "https://tally.so/r/VLERVa",
    popular: false,
    extraLabel: "All Gold, plus:",
    coreFeatures: [
      "2 Monthly Advisory Sessions",
      "Personalized 1:1 Mentorship Pairing",
      "Multiple Monthly Investor Warm Intros",
      "$5M+ in Premium Resources & Tools",
    ],
  },
];

export default function PricingSection() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="relative px-6 py-20 sm:py-28 overflow-hidden" style={{ backgroundColor: "#080e1a" }}>
      {/* Ambient glow behind Gold card */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[400px] -translate-x-1/2 -translate-y-1/2 opacity-[0.07]"
        style={{ background: "radial-gradient(ellipse, #C9A96E 0%, transparent 65%)" }}
      />

      <div className="relative mx-auto max-w-5xl">

        {/* Heading */}
        <p className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
          Membership Pricing
        </p>
        <h2
          className="mt-3 text-center text-[2rem] font-bold text-white sm:text-[2.5rem]"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Gildre Membership
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
          Choose the tier that fits your stage. Upgrade anytime as you grow.
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

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-2xl transition-all duration-300 ${!isGold ? "md:mb-5" : ""}`}
                style={{
                  padding: isGold ? "2.25rem" : "1.75rem",
                  backgroundColor: isGold ? "rgba(28,39,68,0.9)" : "rgba(255,255,255,0.03)",
                  border: isGold
                    ? "1.5px solid rgba(201,169,110,0.55)"
                    : "1.5px solid rgba(255,255,255,0.07)",
                  boxShadow: isGold
                    ? "0 0 0 1px rgba(201,169,110,0.12), 0 0 50px rgba(201,169,110,0.22), 0 0 100px rgba(201,169,110,0.08), 0 24px 64px rgba(0,0,0,0.55)"
                    : "0 4px 24px rgba(0,0,0,0.25)",
                }}
              >
                {/* Gold inner glow */}
                {isGold && (
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-44 overflow-hidden rounded-t-2xl"
                    style={{ background: "radial-gradient(ellipse 80% 70% at 50% 0%, rgba(201,169,110,0.14) 0%, transparent 100%)" }}
                  />
                )}

                {/* Most Popular badge */}
                {isGold && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-5 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.18em] whitespace-nowrap"
                    style={{
                      backgroundColor: "#C9A96E",
                      color: "#1C2744",
                      boxShadow: "0 4px 20px rgba(201,169,110,0.55)",
                    }}
                  >
                    Most Popular
                  </div>
                )}

                {/* Label chip */}
                {!isGold && (
                  <span
                    className="mb-4 inline-block self-start rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-widest"
                    style={{ backgroundColor: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.35)" }}
                  >
                    {plan.label}
                  </span>
                )}
                {isGold && <div className="mt-2" />}

                {/* Tier name */}
                <h3
                  className="relative text-2xl font-bold"
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    color: isGold ? "#C9A96E" : "rgba(255,255,255,0.85)",
                  }}
                >
                  {plan.name}
                </h3>
                <p className="relative mt-1 text-sm" style={{ color: "rgba(255,255,255,0.38)" }}>
                  {plan.tagline}
                </p>

                {/* Price */}
                <div className="relative mt-6 flex items-end gap-1">
                  <span
                    className="mb-1 text-base font-bold leading-none"
                    style={{ color: isGold ? "#C9A96E" : "rgba(255,255,255,0.55)" }}
                  >
                    $
                  </span>
                  <span
                    className="text-5xl font-bold leading-none text-white"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    {price}
                  </span>
                  <span className="mb-1.5 ml-1 text-sm leading-none" style={{ color: "rgba(255,255,255,0.38)" }}>
                    / mo
                  </span>
                </div>
                {yearly ? (
                  <p className="relative mt-1.5 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                    billed annually · save {plan.savePct}%
                  </p>
                ) : (
                  <p className="relative mt-1.5 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                    billed monthly
                  </p>
                )}

                {/* CTA */}
                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-7 block rounded-xl py-3.5 text-center text-sm font-bold transition-all duration-200 hover:opacity-90"
                  style={
                    isGold
                      ? {
                          backgroundColor: "#C9A96E",
                          color: "#1C2744",
                          boxShadow: "0 4px 24px rgba(201,169,110,0.4)",
                        }
                      : {
                          backgroundColor: "rgba(255,255,255,0.07)",
                          color: "rgba(255,255,255,0.8)",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }
                  }
                >
                  {plan.cta}
                </a>

                {/* Divider */}
                <div
                  className="relative my-6 h-px"
                  style={{
                    backgroundColor: isGold
                      ? "rgba(201,169,110,0.2)"
                      : "rgba(255,255,255,0.06)",
                  }}
                />

                {/* Includes label */}
                {plan.extraLabel && (
                  <p
                    className="relative mb-3 text-[0.65rem] font-semibold uppercase tracking-widest"
                    style={{ color: isGold ? "rgba(201,169,110,0.6)" : "rgba(255,255,255,0.28)" }}
                  >
                    {plan.extraLabel}
                  </p>
                )}

                {/* Features */}
                <ul className="relative flex flex-col gap-3">
                  {plan.coreFeatures.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check />
                      <span className="text-sm leading-snug" style={{ color: "rgba(255,255,255,0.6)" }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
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
  );
}
