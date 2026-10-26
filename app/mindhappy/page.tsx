import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.gildre.com/mindhappy" },
  title: "MindHappy × Gildre — Wellness Boxes for Founders and Teams",
  description:
    "Curated wellness boxes built for founders. Elevate for deep work and personal focus. Bond for team building and culture moments. Exclusive Gildre partner pricing.",
  keywords: ["founder wellness", "MindHappy", "team building box", "startup wellness", "founder gift box", "Gildre"],
  openGraph: {
    title: "MindHappy × Gildre — Wellness Boxes for Founders and Teams",
    description:
      "Curated wellness boxes built for founders. Elevate for deep work and focus. Bond for team building and culture moments.",
    url: "https://www.gildre.com/mindhappy",
    siteName: "Gildre",
    type: "website",
    images: [{ url: "https://www.gildre.com/opengraph-image.png", width: 1200, height: 630, alt: "MindHappy x Gildre wellness boxes" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MindHappy × Gildre — Wellness Boxes for Founders and Teams",
    description: "Curated wellness boxes built for founders. Elevate for focus. Bond for team building.",
  },
};

const boxes = [
  {
    name: "Elevate",
    tag: "Focus & Skill-Building",
    emoji: "⚡",
    color: "#C9A96E",
    description:
      "Elevate is for those ready to go deeper. Featuring two focused, skill-building activities, this collection is designed to challenge your hands and your mind, helping you build real craft, one satisfying project at a time. It’s the perfect pick for anyone looking to turn a passing interest into a genuine skill.",
    bestFor: [
      "Built to Challenge: two activities with a bit more depth, designed to stretch your skills",
      "Focused Flow: a rewarding way to enter deep, screen-free concentration",
      "Visible Progress: walk away with sharpened skills and a project to be proud of",
      "Fuel for Growth: perfect for anyone ready to level up their creative practice",
    ],
    href: "https://mindhappy.com/products/bond-gildre-copy?utm_source=copyToPasteBoard&utm_medium=product-links&utm_content=web",
  },
  {
    name: "Bond",
    tag: "Team Building",
    emoji: "🤝",
    color: "#5B7FA6",
    description:
      "Bond brings people closer through shared, hands-on experiences. Designed for teams, friends, or partners, these activities turn “let’s catch up” into something more memorable, sparking conversation, laughter, and a little friendly collaboration along the way. It’s connection, made tangible.",
    bestFor: [
      "Built for Bonding: activities designed to be shared, not solo, better together",
      "Icebreaker, Elevated: a natural way to spark conversation without the awkward small talk",
      "Shared Accomplishment: finish with something you made together, not just talked about",
      "Memory in the Making: a creative experience that becomes a story worth retelling",
    ],
    href: "https://mindhappy.com/products/bond-gildre-copy?utm_source=copyToPasteBoard&utm_medium=product-links&utm_content=web",
  },
  {
    name: "Restore",
    tag: "Rest & Recharge",
    emoji: "🌿",
    color: "#6B8A6F",
    description:
      "Restore is a curated pair of activities designed to help you slow down and reconnect with yourself. Whether you have a quiet evening or a lazy Sunday, these hands-on projects offer a gentle escape from the noise of everyday life. It’s the perfect antidote to a packed calendar, a chance to breathe, create, and simply be.",
    bestFor: [
      "Restorative by Design: two low-pressure activities crafted to soothe, not stress",
      "Screen-Free Serenity: a meaningful alternative to scrolling, streaming, or zoning out",
      "Two Moments of Calm: double the opportunity to pause and reset, whenever you need it",
      "Comfort in Creation: simple, tactile projects that feel like a warm exhale",
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
          <div className="mb-8 flex items-center justify-center gap-6">
            <div className="relative h-14 w-44">
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
              className="relative h-14 w-48 rounded-xl overflow-hidden"
              style={{ backgroundColor: "#1C2744" }}
            >
              <div
                className="absolute inset-0"
                style={{ filter: "invert(1)", mixBlendMode: "screen" }}
              >
                <Image
                  src="/images/mindhappy-logo.png"
                  alt="MindHappy"
                  fill
                  sizes="192px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <h1
            className="text-center text-[clamp(2.2rem,5vw,3.75rem)] font-bold leading-[1.08] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Wellness Built for{" "}
            <span style={{ color: "#C9A96E" }}>Founders</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-center text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            Gildre has partnered with MindHappy to bring exclusive curated wellness boxes to our founder community. Choose the experience that fits where you are right now.
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
                MindHappy creates intentional wellness experiences for high-performers: founders, teams, and operators who know that peak performance starts with taking care of yourself and the people around you.
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

      {/* ── GIF Showcase ──────────────────────────────────────────────── */}
      <section className="px-6 pb-10 pt-2" style={{ backgroundColor: "#080e1a" }}>
        <div className="mx-auto max-w-5xl grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.12)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/mindhappy-festive-box.gif"
              alt="MindHappy Festive Box unboxing experience"
              className="w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.12)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/mindhappy-mystery-box.gif"
              alt="MindHappy Mystery Box surprise reveal"
              className="w-full object-cover"
            />
          </div>
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
                  <div
                    className="block w-full rounded-xl py-3.5 text-center text-sm font-bold"
                    style={{ backgroundColor: `${box.color}22`, color: box.color, border: `1px solid ${box.color}40` }}
                  >
                    {box.name} Box
                  </div>
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
            Not sure which box is right for you? Start with what your week has felt like, and go from there.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {boxes.map((box) => (
              <div
                key={box.name}
                className="rounded-full px-6 py-3 text-sm font-semibold"
                style={{ backgroundColor: `${box.color}22`, color: box.color, border: `1px solid ${box.color}40` }}
              >
                {box.emoji} {box.name}
              </div>
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
