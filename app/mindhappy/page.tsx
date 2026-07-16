import Image from "next/image";

const boxes = [
  {
    name: "Elevate",
    tag: "Focus & Growth",
    emoji: "⚡",
    color: "#C9A96E",
    description:
      "Designed for founders who want to sharpen focus and fuel their growth mindset. The Elevate box is packed with tools, resources, and wellness essentials to help you perform at your peak — mentally and professionally.",
    bestFor: [
      "Deep work and focus sessions",
      "High-output founders and operators",
      "Leveling up your daily routine",
    ],
    href: "https://mindhappy.com/products/bond-gildre-copy?utm_source=copyToPasteBoard&utm_medium=product-links&utm_content=web",
  },
  {
    name: "Bond",
    tag: "Team Building",
    emoji: "🤝",
    color: "#5B7FA6",
    description:
      "Built to bring teams closer together. The Bond box is a curated team experience that fosters connection, communication, and culture — perfect for founders who want to invest in the people building alongside them.",
    bestFor: [
      "Leadership teams and co-founders",
      "Remote or distributed teams",
      "Culture-building moments and offsites",
    ],
    href: "https://mindhappy.com/products/bond-gildre-copy?utm_source=copyToPasteBoard&utm_medium=product-links&utm_content=web",
  },
  {
    name: "Restore",
    tag: "Relax & Recharge",
    emoji: "🌿",
    color: "#6B8A6F",
    description:
      "For founders who need to step back, breathe, and recharge. The Restore box is a thoughtfully curated wellness experience designed to help you recover, reset, and come back stronger.",
    bestFor: [
      "Post-sprint recovery and burnout prevention",
      "Stress relief and mental wellness",
      "Founders who give everything and need to refuel",
    ],
    href: "https://mindhappy.com/products/gildre?utm_source=copyToPasteBoard&utm_medium=product-links&utm_content=web",
  },
];

export default function MindHappyPage() {
  return (
    <div style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 pb-20 pt-32"
        style={{ background: "linear-gradient(160deg, #080e1a 0%, #1C2744 55%, #0a1020 100%)" }}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #C9A96E 0%, transparent 65%)" }}
        />

        <div className="relative mx-auto max-w-6xl">

          {/* Partnership label */}
          <div className="mb-8 flex items-center justify-center gap-4">
            <div className="relative h-8 w-24">
              <Image
                src="/images/gildre-logo.png"
                alt="Gildre"
                fill
                sizes="96px"
                className="object-contain brightness-0 invert"
              />
            </div>
            <span className="text-2xl font-light" style={{ color: "rgba(201,169,110,0.6)" }}>×</span>
            <span
              className="text-2xl font-bold tracking-tight text-white"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              MindHappy
            </span>
          </div>

          <h1
            className="text-center text-[clamp(2.2rem,5vw,3.75rem)] font-bold leading-[1.08] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Wellness Built for{" "}
            <span style={{ color: "#C9A96E" }}>Founders</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-center text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            Gildre has partnered with MindHappy — as featured in Forbes — to bring exclusive curated wellness boxes to our founder community. Choose the experience that fits where you are right now.
          </p>

          {/* Two-column: copy + Forbes image */}
          <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

            {/* Left — about the partnership */}
            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(201,169,110,0.15)",
              }}
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
                The Partnership
              </p>
              <h2
                className="mt-3 text-xl font-bold leading-snug text-white sm:text-2xl"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                Building a company takes everything you have. MindHappy helps you keep giving it.
              </h2>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                MindHappy creates intentional wellness experiences for high-performers — founders, teams, and operators who know that peak performance starts with taking care of yourself and the people around you.
              </p>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                Through our partnership, Gildre members get exclusive access to three curated box experiences designed around the real challenges founders face: staying focused, building culture, and avoiding burnout.
              </p>

              <div
                className="mt-6 flex items-center gap-3 rounded-xl p-4"
                style={{ backgroundColor: "rgba(201,169,110,0.08)", border: "1px solid rgba(201,169,110,0.15)" }}
              >
                <div className="text-2xl">🏆</div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A96E" }}>As Featured In</p>
                  <p className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>Forbes</p>
                </div>
              </div>
            </div>

            {/* Right — MindHappy Forbes image */}
            <div className="flex justify-center">
              <div
                className="overflow-hidden rounded-2xl"
                style={{ border: "1px solid rgba(201,169,110,0.2)", maxWidth: "360px", width: "100%" }}
              >
                <Image
                  src="/images/mindhappy-forbes.jpeg"
                  alt="MindHappy — As Featured in Forbes"
                  width={399}
                  height={501}
                  className="w-full"
                  style={{ display: "block" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How to Choose ─────────────────────────────────────────────── */}
      <section className="px-6 py-6" style={{ backgroundColor: "#080e1a" }}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            How to Choose
          </p>
          <h2
            className="mt-3 text-[1.75rem] font-bold text-white sm:text-[2.25rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Pick the Box That Fits Right Now
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            Each box is designed around a specific founder need. Ask yourself: do you need to <span style={{ color: "#C9A96E" }}>perform</span>, <span style={{ color: "#5B7FA6" }}>connect</span>, or <span style={{ color: "#6B8A6F" }}>recover</span>?
          </p>
        </div>
      </section>

      {/* ── 3 Boxes ───────────────────────────────────────────────────── */}
      <section className="px-6 pb-24 pt-10" style={{ backgroundColor: "#080e1a" }}>
        <div className="mx-auto max-w-5xl grid grid-cols-1 gap-6 md:grid-cols-3">
          {boxes.map((box) => (
            <div
              key={box.name}
              className="relative flex flex-col overflow-hidden rounded-2xl"
              style={{
                backgroundColor: "#0a1020",
                border: `1px solid ${box.color}30`,
              }}
            >
              {/* Top accent bar */}
              <div className="h-1 w-full" style={{ backgroundColor: box.color }} />

              <div className="flex flex-1 flex-col p-8">
                {/* Icon + tag */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
                    style={{ backgroundColor: `${box.color}18` }}
                  >
                    {box.emoji}
                  </div>
                  <div>
                    <p
                      className="text-[0.6rem] font-bold uppercase tracking-widest"
                      style={{ color: box.color }}
                    >
                      {box.tag}
                    </p>
                    <h3
                      className="text-2xl font-bold text-white"
                      style={{ fontFamily: "var(--font-fraunces)" }}
                    >
                      {box.name}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {box.description}
                </p>

                {/* Best for */}
                <div className="mt-6">
                  <p
                    className="mb-3 text-[0.6rem] font-bold uppercase tracking-widest"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
                    Best for
                  </p>
                  <ul className="flex flex-col gap-2">
                    {box.bestFor.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <div
                          className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                          style={{ backgroundColor: box.color }}
                        />
                        <span className="text-sm leading-snug" style={{ color: "rgba(255,255,255,0.55)" }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-auto pt-8">
                  <a
                    href={box.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-xl py-3.5 text-center text-sm font-bold transition-opacity hover:opacity-90"
                    style={{ backgroundColor: box.color, color: box.name === "Bond" ? "#fff" : "#1C2744" }}
                  >
                    Get the {box.name} Box →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="px-6 py-20 text-center" style={{ backgroundColor: "#1C2744" }}>
        <div className="mx-auto max-w-2xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            Gildre × MindHappy
          </p>
          <h2
            className="mt-4 text-[2rem] font-bold leading-tight text-white sm:text-[2.75rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            You build better when you feel better.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            Not sure which box is right for you? Start with what your week has felt like — and go from there.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {boxes.map((box) => (
              <a
                key={box.name}
                href={box.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ backgroundColor: `${box.color}22`, color: box.color, border: `1px solid ${box.color}40` }}
              >
                {box.emoji} {box.name}
              </a>
            ))}
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
