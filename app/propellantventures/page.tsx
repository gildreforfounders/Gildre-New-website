"use client";
import Image from "next/image";
import Link from "next/link";

const benefits = [
  {
    title: "Curated Community",
    body: "Access 250+ active founders across every industry — ongoing conversations, peer support, and resources 24/7.",
  },
  {
    title: "1:1 Matching",
    body: "Weekly introductions to founders and mentors matched to your specific stage, industry, and goals.",
  },
  {
    title: "Advisory Sessions",
    body: "Monthly 1:1 sessions with a Gildre Managing Partner — an exited founder matched to your business.",
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
    body: "Exclusive deals from 500+ partners — software, legal, finance, marketing, and more.",
  },
];

export default function PropellantVenturesPage() {
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
          <div className="mb-10 flex items-center justify-center gap-5">
            <div className="relative h-10 w-28">
              <Image
                src="/images/gildre-logo.png"
                alt="Gildre"
                fill
                sizes="112px"
                className="object-contain brightness-0 invert"
              />
            </div>
            <span className="text-2xl font-light" style={{ color: "rgba(201,169,110,0.6)" }}>×</span>
            <div
              className="relative h-10 w-36"
              style={{ filter: "grayscale(1) invert(1)", mixBlendMode: "screen" }}
            >
              <Image
                src="/images/logos/propellant.jpeg"
                alt="Propellant Ventures"
                fill
                sizes="144px"
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
                  Building a company is a journey — you don&rsquo;t have to do it alone.
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

              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://tally.so/r/VLERVa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full px-8 py-3.5 text-sm font-bold transition-opacity hover:opacity-90 text-center"
                  style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
                >
                  Apply Now
                </a>
                <a
                  href="https://calendly.com/taiga-gildre/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full px-8 py-3.5 text-sm font-semibold transition-opacity hover:opacity-80 text-center"
                  style={{ border: "1.5px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)" }}
                >
                  Schedule a Call
                </a>
              </div>
            </div>

            {/* Right — event photo */}
            <div className="relative overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.2)" }}>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/community/workshops.webp"
                  alt="Gildre × Propellant Ventures event"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                {/* Overlay with partnership text */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center"
                  style={{ background: "rgba(8,14,26,0.55)" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative h-7 w-20">
                      <Image
                        src="/images/gildre-logo.png"
                        alt="Gildre"
                        fill
                        sizes="80px"
                        className="object-contain brightness-0 invert"
                      />
                    </div>
                    <span className="text-lg font-light" style={{ color: "rgba(201,169,110,0.8)" }}>×</span>
                    <div
                      className="relative h-7 w-24"
                      style={{ filter: "grayscale(1) invert(1)", mixBlendMode: "screen" }}
                    >
                      <Image
                        src="/images/logos/propellant.jpeg"
                        alt="Propellant Ventures"
                        fill
                        sizes="96px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <p
                    className="mt-2 max-w-[220px] text-sm font-semibold leading-snug text-white"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    Level up with founders and advisors who have built, scaled, &amp; exited
                  </p>
                </div>
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
