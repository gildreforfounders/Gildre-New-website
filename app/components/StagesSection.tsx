const stages = [
  {
    num: "Stage 1",
    label: "Build",
    tier: "Silver",
    range: "< $500K ARR",
    headline: "Validate & Launch",
    body: "You're actively building your MVP, acquiring early customers, and searching for Product-Market Fit. Gildre connects you with founders who've been in your exact seat and members who help you move faster.",
    href: "https://gildre.circle.so/checkout/gildre-silver-membership",
    cta: "Get Access",
    gold: false,
  },
  {
    num: "Stage 2",
    label: "Growth",
    tier: "Gold",
    range: "$500K – $5M ARR",
    headline: "Scaling Operations",
    body: "You have steady revenue and customers, but growth is hitting bottlenecks. You need to accelerate while building systems, hiring, and fundraising. Gildre gives you the operators and advisors to break through.",
    href: "https://tally.so/r/VLERVa",
    cta: "Apply Now",
    gold: true,
  },
  {
    num: "Stage 3",
    label: "Scale",
    tier: "Platinum",
    range: "$5M+ ARR",
    headline: "Lead & Compound",
    body: "You've proven the model and are scaling revenue and team. The decisions get harder and the stakes get higher. Gildre connects you with senior operators and investors who've led companies through this exact inflection point.",
    href: "https://tally.so/r/VLERVa",
    cta: "Apply Now",
    gold: false,
  },
];

export default function StagesSection() {
  return (
    <section className="relative overflow-hidden py-12 px-6 sm:py-20" style={{ backgroundColor: "#0f1524" }}>
      {/* Subtle top border */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[1px] opacity-25"
        style={{ background: "linear-gradient(to right, transparent, rgba(201,169,110,0.5), transparent)" }}
      />

      <div className="mx-auto max-w-5xl">
        <p className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
          Who It&rsquo;s For
        </p>
        <h2
          className="mt-3 text-center text-[2rem] font-bold text-white sm:text-[2.5rem]"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Built for Founders Hitting Their Next Milestone
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
          Build alongside founders solving the same problems as you, at your stage.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {stages.map((s) => (
            <div
              key={s.label}
              className="relative flex flex-col overflow-hidden rounded-2xl p-7"
              style={{
                backgroundColor: s.gold ? "rgba(28,39,68,0.9)" : "rgba(255,255,255,0.03)",
                border: s.gold
                  ? "1.5px solid rgba(201,169,110,0.45)"
                  : "1.5px solid rgba(255,255,255,0.07)",
                boxShadow: s.gold
                  ? "0 0 40px rgba(201,169,110,0.15), 0 0 80px rgba(201,169,110,0.06)"
                  : "none",
              }}
            >
              {/* Gold inner top glow */}
              {s.gold && (
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-36 rounded-t-2xl"
                  style={{ background: "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(201,169,110,0.12) 0%, transparent 100%)" }}
                />
              )}

              {/* Stage chip */}
              <div className="relative flex items-center justify-between">
                <span
                  className="rounded-full px-3 py-1 text-[0.6rem] font-bold uppercase tracking-widest"
                  style={{
                    backgroundColor: s.gold ? "rgba(201,169,110,0.18)" : "rgba(255,255,255,0.05)",
                    color: s.gold ? "#C9A96E" : "rgba(255,255,255,0.35)",
                  }}
                >
                  {s.num} · {s.label}
                </span>
                <span
                  className="text-[0.6rem] font-semibold uppercase tracking-widest"
                  style={{ color: s.gold ? "rgba(201,169,110,0.6)" : "rgba(255,255,255,0.22)" }}
                >
                  {s.tier}
                </span>
              </div>

              {/* ARR range */}
              <p className="relative mt-4 text-[0.65rem] font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>
                {s.range}
              </p>

              {/* Headline */}
              <h3
                className="relative mt-2 text-xl font-bold leading-snug"
                style={{
                  fontFamily: "var(--font-fraunces)",
                  color: s.gold ? "#C9A96E" : "rgba(255,255,255,0.9)",
                }}
              >
                {s.headline}
              </h3>

              {/* Body */}
              <p className="relative mt-3 flex-1 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.48)" }}>
                {s.body}
              </p>

              {/* CTA */}
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-6 inline-block self-start rounded-full px-5 py-2 text-xs font-bold transition-all hover:opacity-90"
                style={
                  s.gold
                    ? {
                        backgroundColor: "#C9A96E",
                        color: "#1C2744",
                        boxShadow: "0 4px 16px rgba(201,169,110,0.35)",
                      }
                    : {
                        backgroundColor: "rgba(255,255,255,0.06)",
                        color: "rgba(255,255,255,0.7)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }
                }
              >
                {s.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
