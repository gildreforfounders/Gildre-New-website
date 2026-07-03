"use client";
import { useState } from "react";

const tiers = [
  {
    label: "Silver",
    color: "#7D7B65",
    price: "$59/mo",
    steps: [
      {
        n: "01",
        title: "Identify Your Peers",
        body: "Browse the Gildre community to find founders at your stage and in your industry — connect with peers across 15+ cities instantly.",
        note: "Join in minutes",
      },
      {
        n: "02",
        title: "Get Access",
        body: "Instantly unlock the Gildre community platform, weekly virtual events, our full resource library, and $5M+ in partner perks from day one.",
        note: "Access within 24 hours",
      },
      {
        n: "03",
        title: "Build Your Network",
        body: "Join live virtual sessions, connect with 200+ active founders in your field, and tap into a global peer community that's always building.",
        note: "Start connecting immediately",
      },
    ],
  },
  {
    label: "Gold",
    color: "#C9A520",
    price: "$149/mo",
    steps: [
      {
        n: "01",
        title: "Apply",
        body: "Tell us about yourself, your company, and where you're building. Every Gold application is reviewed personally by the Gildre team. We're selective because the community matters.",
        note: "Takes under 5 minutes",
      },
      {
        n: "02",
        title: "Get Onboarded",
        body: "We personally welcome you into the community and set up your monthly advisory session with a Gildre Managing Partner. Someone who has built and exited at scale.",
        note: "Onboarded within 1 week",
      },
      {
        n: "03",
        title: "Build Together",
        body: "One advisory session per month with a Managing Partner, in-person events and dinners, weekly virtual events, the full community platform, and $5M+ in partner perks.",
        note: "Start building immediately",
      },
    ],
  },
  {
    label: "Platinum",
    color: "#1C2744",
    price: "$349/mo",
    steps: [
      {
        n: "01",
        title: "Apply",
        body: "Your application goes to the top of the queue. A Gildre team member will personally reach out within 24 hours to understand your goals and fast-track your onboarding.",
        note: "Priority review in 24 hours",
      },
      {
        n: "02",
        title: "White-Glove Match",
        body: "We personally curate your match: a senior exited founder or operator with domain expertise in your exact space, plus a hand-selected mastermind peer group at your level.",
        note: "Matched within 1 week",
      },
      {
        n: "03",
        title: "Build at the Top",
        body: "Monthly 1:1 sessions, exclusive executive retreats and dinners, direct investor introductions, full community access, and $5M+ in partner perks. The full Gildre experience.",
        note: "Full access from day one",
      },
    ],
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(1); // default Gold (Most Popular)
  const tier = tiers[active];

  return (
    <section className="px-6 py-20" style={{ backgroundColor: "#F5F0E8" }}>
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#C9A96E]">
          The Process
        </p>
        <h2
          className="mt-3 text-center text-[2rem] font-bold text-[#1C2744] sm:text-[2.5rem]"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Engineered for Your Stage. Tailored for Action.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-zinc-500">
          We built Gildre to be the community we wished existed when we were building. Here&rsquo;s how it works.
        </p>

        {/* Tier tabs */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {tiers.map((t, i) => (
            <button
              key={t.label}
              onClick={() => setActive(i)}
              className="rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200"
              style={
                active === i
                  ? { backgroundColor: "#1C2744", color: "#C9A96E" }
                  : { backgroundColor: "rgba(28,39,68,0.07)", color: "#1C2744" }
              }
            >
              {t.label}
              <span
                className="ml-2 text-[0.65rem] font-normal opacity-60"
              >
                {t.price}
              </span>
            </button>
          ))}
        </div>

        {/* Steps */}
        <div className="relative mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Connecting line, desktop only */}
          <div
            className="absolute left-[16.5%] right-[16.5%] top-7 hidden h-[1px] sm:block"
            style={{ backgroundColor: "rgba(201,169,110,0.25)" }}
          />

          {tier.steps.map((step) => (
            <div key={step.n} className="relative flex flex-col items-center text-center">
              <div
                className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold"
                style={{
                  backgroundColor: "#1C2744",
                  color: "#C9A96E",
                  fontFamily: "var(--font-fraunces)",
                  boxShadow: "0 0 0 4px #F5F0E8, 0 0 0 5px rgba(201,169,110,0.3)",
                }}
              >
                {step.n}
              </div>
              <h3
                className="mt-5 text-xl font-bold text-[#1C2744]"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">{step.body}</p>
              <span
                className="mt-4 text-[0.65rem] font-semibold uppercase tracking-widest"
                style={{ color: "#C9A96E" }}
              >
                {step.note}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="https://tally.so/r/VLERVa"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-8 py-3.5 text-sm font-bold transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#1C2744", color: "#fff" }}
          >
            {active === 0 ? "Identify Your Peers" : "Start Your Application"}
          </a>
          <a
            href="https://calendly.com/taiga-gildre/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 underline underline-offset-4 hover:text-zinc-600 transition-colors"
          >
            Have questions? Schedule a call first
          </a>
        </div>
      </div>
    </section>
  );
}
