"use client";
import { useState } from "react";

const Check = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="flex-shrink-0 mt-0.5">
    <circle cx="7.5" cy="7.5" r="7" stroke="#C9A96E" strokeWidth="1.2" />
    <path d="M4.5 7.5L6.5 9.5L10.5 5.5" stroke="#C9A96E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Divider = ({ label }: { label: string }) => (
  <p className="mt-5 mb-3 text-[0.68rem] font-semibold uppercase tracking-widest text-zinc-400">
    {label}
  </p>
);

const plans = [
  {
    id: "silver",
    name: "Silver",
    tagline: "For founders building and connecting",
    monthlyPrice: 59,
    annualMonthly: 50,
    savePct: 15,
    cta: "Get Access",
    href: "https://tally.so/r/VLERVa",
    popular: false,
    coreFeatures: [
      "White-Glove Onboarding Experience",
      "Curated, High-Impact Virtual Events",
      "Private Community Workspace",
      "Personalized, Weekly 1:1 Matches & Introductions",
      "Individualized Goal Tracking Roadmap",
    ],
    extraLabel: null,
    extraFeatures: [],
  },
  {
    id: "gold",
    name: "Gold",
    tagline: "For founders who want real guidance",
    monthlyPrice: 149,
    annualMonthly: 125,
    savePct: 16,
    cta: "Apply Now",
    href: "https://tally.so/r/VLERVa",
    popular: true,
    coreFeatures: [
      "1 Monthly Advisory Session",
      "Access to Exclusive, In-Person Events",
      "Podcasting & Personal Brand Opportunities",
      "Access to Investor Directory & Warm Intros",
    ],
    extraLabel: "All Silver Benefits plus:",
    extraFeatures: [],
  },
  {
    id: "platinum",
    name: "Platinum",
    tagline: "For founders building at the top",
    monthlyPrice: 349,
    annualMonthly: 249,
    savePct: 29,
    cta: "Apply Now",
    href: "https://tally.so/r/VLERVa",
    popular: false,
    coreFeatures: [
      "2 Monthly Advisory Sessions",
      "Personalized 1:1 Mentorship Pairing",
      "Access to Investor Directory & Multiple Monthly Warm Intros",
      "$5M+ in Premium Resources & Partner Tools",
    ],
    extraLabel: "All Gold Benefits and:",
    extraFeatures: [],
  },
];

export default function PricingSection() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="px-6 py-24" style={{ backgroundColor: "#F5F0E8" }}>
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <p className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#C9A96E]">
          Membership Pricing
        </p>
        <h2
          className="mt-3 text-center text-[2rem] font-bold text-[#1C2744] sm:text-[2.5rem]"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Choose Your Membership
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-base leading-relaxed text-zinc-500">
          Join at the tier that fits where you are. Upgrade anytime as you grow.
        </p>

        {/* Toggle */}
        <div className="mt-10 flex items-center justify-center">
          <div
            className="flex rounded-full p-1"
            style={{ backgroundColor: "rgba(28,39,68,0.08)" }}
          >
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
                  border: plan.popular
                    ? "2px solid #C9A96E"
                    : "1.5px solid #e8e0d0",
                  boxShadow: plan.popular
                    ? "0 4px 32px rgba(201,169,110,0.12)"
                    : "0 2px 12px rgba(0,0,0,0.05)",
                }}
              >
                {/* Most Popular badge */}
                {plan.popular && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-[0.65rem] font-bold uppercase tracking-widest"
                    style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
                  >
                    Most Popular
                  </div>
                )}

                {/* Tier name + tagline */}
                <h3
                  className="text-2xl font-bold text-[#1C2744]"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-zinc-400">{plan.tagline}</p>

                {/* Price */}
                <div className="mt-6 flex items-end gap-1">
                  <span className="text-lg font-bold text-[#1C2744] leading-none mb-1">$</span>
                  <span
                    className="text-5xl font-bold leading-none text-[#1C2744]"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    {price}
                  </span>
                  <span className="text-sm text-zinc-400 leading-none mb-1.5 ml-1">per month</span>
                </div>
                {yearly && (
                  <p className="mt-1 text-xs text-zinc-400">billed annually</p>
                )}

                {/* CTA */}
                <a
                  href={plan.href}
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

                {/* "Includes X, plus:" label */}
                {plan.extraLabel && <Divider label={plan.extraLabel} />}

                {/* Features */}
                <ul className="flex flex-col gap-3">
                  {plan.coreFeatures.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check />
                      <span className="text-sm leading-snug text-zinc-600">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="mt-8 text-center text-xs text-zinc-400">
          All memberships renew automatically. Cancel anytime. Questions?{" "}
          <a
            href="https://calendly.com/taiga-gildre/30min"
            className="underline underline-offset-2 hover:text-zinc-600 transition-colors"
          >
            Schedule a call with the team.
          </a>
        </p>
      </div>
    </section>
  );
}
