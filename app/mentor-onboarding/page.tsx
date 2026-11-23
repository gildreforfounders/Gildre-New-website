import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentor Onboarding | Gildre",
  description: "Welcome to the Gildre Mentor Network. Complete your onboarding steps to get started.",
  robots: { index: false, follow: false },
};

const AGREEMENT_URL = "https://docs.google.com/document/d/1Te7Wy7bcF5U"; // TODO: replace with full URL
const CALENDLY_URL = "https://calendly.com/taiga-gildre/30min";
const CIRCLE_URL = "https://gildre.circle.so";

const steps = [
  {
    n: "01",
    title: "Sign the Mentor Agreement",
    body: "Review and sign the Gildre Mentor Agreement. This covers your commitment, confidentiality, and what you can expect from us as a partner in this program.",
    cta: { label: "Open Agreement", href: AGREEMENT_URL },
    note: "Takes under 5 minutes",
  },
  {
    n: "02",
    title: "Schedule Your Intro Call",
    body: "Book a 30-minute onboarding call with Taiga. We'll walk you through how mentorship sessions work, introduce you to your first mentee match, and answer any questions.",
    cta: { label: "Book Intro Call", href: CALENDLY_URL },
    note: "30 minutes with Taiga",
  },
  {
    n: "03",
    title: "Join the Gildre Community Platform",
    body: "Get access to the Gildre Circle community where you'll connect with founders, receive mentee match notifications, and join exclusive mentor channels.",
    cta: { label: "Join Community", href: CIRCLE_URL },
    note: "Invite required — sent after signing",
  },
  {
    n: "04",
    title: "Meet Your First Mentee",
    body: "Our team will personally introduce you to your first matched founder. Expect a warm intro email within 3–5 business days after your intro call.",
    cta: null,
    note: "Matched by the Gildre team",
  },
];

const expectations = [
  {
    title: "2 hours per month",
    body: "Your commitment is two 1:1 sessions per month with your assigned mentee. Sessions are typically 45–60 minutes each.",
  },
  {
    title: "Rotating matches",
    body: "Mentee matches rotate every 3–6 months based on mutual fit and goals, so your impact compounds across multiple founders over time.",
  },
  {
    title: "You set the agenda",
    body: "Sessions are founder-led. Your mentee comes prepared with specific questions or decisions. Your job is to share honest perspective, not deliver a curriculum.",
  },
  {
    title: "Support from our team",
    body: "Taiga and the Gildre team are always reachable. If a match isn't working or you need anything, just reach out directly.",
  },
];

export default function MentorOnboardingPage() {
  return (
    <div style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>

      {/* Hero */}
      <section
        className="relative overflow-hidden px-6 pb-20 pt-32"
        style={{ background: "linear-gradient(160deg, #080e1a 0%, #1C2744 55%, #0a1020 100%)" }}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #C9A96E 0%, transparent 65%)" }}
        />
        <div className="relative mx-auto max-w-2xl text-center">
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-widest"
            style={{ backgroundColor: "rgba(201,169,110,0.12)", color: "#C9A96E", border: "1px solid rgba(201,169,110,0.25)" }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="#C9A96E">
              <circle cx="5" cy="5" r="5" />
            </svg>
            You&rsquo;re In
          </div>
          <h1
            className="text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Welcome to the Gildre Mentor Network
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            You&rsquo;ve been accepted. Complete the steps below to finish your onboarding and get matched with your first founder.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            Onboarding Steps
          </p>
          <h2
            className="mt-3 text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Four steps to get started
          </h2>

          <div className="mt-10 flex flex-col gap-6">
            {steps.map((step, i) => (
              <div
                key={step.n}
                className="relative overflow-hidden rounded-2xl p-8"
                style={{
                  backgroundColor: i === 0 ? "rgba(201,169,110,0.07)" : "rgba(255,255,255,0.03)",
                  border: i === 0 ? "1px solid rgba(201,169,110,0.25)" : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="flex items-start gap-6">
                  {/* Step number */}
                  <div
                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold"
                    style={{
                      backgroundColor: i === 0 ? "rgba(201,169,110,0.15)" : "rgba(255,255,255,0.05)",
                      color: i === 0 ? "#C9A96E" : "rgba(255,255,255,0.3)",
                      fontFamily: "var(--font-fraunces)",
                      border: i === 0 ? "1px solid rgba(201,169,110,0.3)" : "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {step.n}
                  </div>

                  <div className="flex-1">
                    <h3
                      className="text-lg font-bold text-white"
                      style={{ fontFamily: "var(--font-fraunces)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {step.body}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-4">
                      {step.cta && (
                        <a
                          href={step.cta.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full px-6 py-2.5 text-sm font-bold transition-all hover:opacity-90"
                          style={{
                            backgroundColor: i === 0 ? "#C9A96E" : "rgba(255,255,255,0.08)",
                            color: i === 0 ? "#1C2744" : "rgba(255,255,255,0.75)",
                            border: i === 0 ? "none" : "1px solid rgba(255,255,255,0.1)",
                          }}
                        >
                          {step.cta.label} →
                        </a>
                      )}
                      <span className="text-[0.65rem] font-semibold uppercase tracking-widest" style={{ color: "rgba(201,169,110,0.6)" }}>
                        {step.note}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="px-6 py-20" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="mx-auto max-w-2xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            What to Expect
          </p>
          <h2
            className="mt-3 text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            How mentorship works at Gildre
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {expectations.map((e) => (
              <div
                key={e.title}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <p className="font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
                  {e.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {e.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 pb-24 pt-4">
        <div className="mx-auto max-w-2xl">
          <div
            className="rounded-2xl p-8 text-center"
            style={{ backgroundColor: "rgba(201,169,110,0.06)", border: "1px solid rgba(201,169,110,0.15)" }}
          >
            <p className="font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
              Questions? Reach out directly.
            </p>
            <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              Taiga and the team are always reachable. Don&rsquo;t hesitate.
            </p>
            <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="mailto:taiga@gildre.com"
                className="text-sm font-semibold transition-opacity hover:opacity-70"
                style={{ color: "#C9A96E" }}
              >
                taiga@gildre.com
              </a>
              <span style={{ color: "rgba(255,255,255,0.2)" }} className="hidden sm:block">·</span>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-opacity hover:opacity-70"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Schedule a call
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
