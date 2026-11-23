import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentor Onboarding | Gildre",
  description: "Welcome to the Gildre Mentor Network. Complete your onboarding steps to get started.",
  robots: { index: false, follow: false },
};

const WELCOME_CHECKLIST_URL = "#"; // TODO: replace with Welcome Checklist link
const CIRCLE_URL = "https://gildre.circle.so";
const EVENTS_URL = "/membership";

const steps = [
  {
    n: "01",
    title: "Sign the Mentor Agreement",
    body: "Review the Gildre Mentor Code of Conduct below and complete the Welcome Checklist to confirm your agreement. This covers your commitment, confidentiality, and what you can expect from us.",
    cta: { label: "Open Welcome Checklist", href: WELCOME_CHECKLIST_URL },
    note: "Takes under 5 minutes",
  },
  {
    n: "02",
    title: "Join the Gildre Community Platform",
    body: "Get access to the Gildre Circle community where you'll connect with founders, receive mentee match notifications, and join exclusive mentor channels.",
    cta: { label: "Join Community", href: CIRCLE_URL },
    note: "Invite sent after signing",
  },
  {
    n: "03",
    title: "Attend One of Our Events",
    body: "Join your first Gildre event — virtual or in-person. This is the best way to meet the founders you'll be working with and get a feel for how the community operates.",
    cta: { label: "View Upcoming Events", href: EVENTS_URL },
    note: "Events across 15+ chapters",
  },
];

const expectations = [
  {
    title: "1 hour per month",
    body: "Your commitment is one 1:1 session per month with your assigned mentee, typically 45–60 minutes.",
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

const agreementSections = [
  {
    title: "1. Services",
    body: "Gildre wishes to obtain the Mentor's services to achieve the following goals and maximize the following areas for the Members: personal development, business development, go-to-market strategy, product development, fundraising, and other areas of business expertise as needed.",
  },
  {
    title: "2. Duties & Responsibilities",
    body: "The Mentor is an independent contractor. Nothing in this Agreement shall be construed to create a partnership, joint venture, agency, fiduciary, or employment relationship between the Mentor and the Company or any Member. All Parties, including the Members, must uphold their obligations for the relationship to be successful. The Mentor agrees to maintain the professional ethics and standards of behavior expected of mentors.",
  },
  {
    title: "3. No Conflicts",
    body: "Mentor represents that compliance with the terms of this Code and provision of Services hereunder will not violate any duty which Mentor may have to any other person or entity. Mentor agrees to promptly notify the Company in writing of any competitor or potential competitor of the Member and/or the Company upon which Mentor is also performing services.",
  },
  {
    title: "4. No Partnership",
    body: "This Agreement does not create a legal partnership relationship between the Member and the Mentor, the Company and the Mentor, or between all Parties. Unless otherwise directed, the Mentor shall have no authority to enter contracts on the Company's or Member's behalf.",
  },
  {
    title: "5. Non-Solicit",
    body: "The Mentor agrees that during an active pairing made by Gildre, Mentor shall not directly or indirectly solicit or encourage any of the Members to purchase additional services through the Mentor. Under special circumstances, Mentor may request in writing to Gildre for permission on a case-by-case basis.",
  },
  {
    title: "6. Company & Member Confidentiality",
    body: "The Mentor will not disclose or use, either during the term of this Agreement or for a period of two (2) years following its termination, any proprietary or confidential information of the Company or Members without prior written permission, except to the extent necessary to perform services on the Company's or Member's behalf.",
  },
  {
    title: "7. Side Party Agreements",
    body: "Before the Mentor engages or attempts to engage a Member of Gildre in any type of professional engagement or relationship outside of this Agreement, they should notify Gildre. Regardless of any communication, the Mentor indemnifies the Company of any actions, engagements, or relationships formed independently.",
  },
  {
    title: "8. Termination of Agreement",
    body: "The Company or Mentor may terminate this Agreement and any obligations stated hereunder by providing written notice at any point. This Agreement will automatically renew after 12 months unless either party chooses to cancel.",
  },
  {
    title: "9. Limited Liability & Indemnification",
    body: "Mentors will provide services in a professional manner, making no guarantees, representations, or warranties of any kind or nature. In no event shall the Mentor be liable to the Company or Members for any indirect, consequential, or special damages concerning services rendered under this Agreement.",
  },
  {
    title: "10. Photograph & Release",
    body: "I grant Gildre permission to the rights of my image and likeness without payment or any other consideration for use on the Company website and materials for general business use. Gildre will ask permission from Mentor prior to any testimonial or use case.",
  },
  {
    title: "11. Entire Agreement",
    body: "This document reflects the entire agreement between the Mentor and the Company and reflects a complete understanding of the Parties concerning the subject matter. This Agreement supersedes all prior written and oral representations. The Agreement may not be amended, altered, or supplemented except in writing signed by both the Mentor and the Company.",
  },
  {
    title: "12. Governing Law & Venue",
    body: "This Agreement shall be governed by and construed in accordance with the laws of the State of Illinois, without regard to its conflict of law principles. Any legal action or proceeding arising under this Agreement shall be brought exclusively in the state or federal courts located in Illinois.",
  },
  {
    title: "13. Survival",
    body: "Upon the termination of this Agreement for any reason, those provisions which by their nature are intended to survive termination shall so survive. This includes the Mentor's obligations under Section 5 (Non-Solicit), Section 6 (Confidentiality), Section 9 (Limited Liability & Indemnification), and Section 12 (Governing Law & Venue).",
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
            You&rsquo;ve been accepted. Complete the three steps below to finish your onboarding and get matched with your first founder.
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
            Three steps to get started
          </h2>

          <div className="mt-10 flex flex-col gap-5">
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

      {/* Mentor Code of Conduct */}
      <section className="px-6 py-20" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="mx-auto max-w-2xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            Legal
          </p>
          <h2
            className="mt-3 text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Gildre Mentor Code of Conduct
          </h2>
          <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            This Mentor Code of Conduct (the &ldquo;Code&rdquo; or &ldquo;Agreement&rdquo;) is entered into on the acknowledgment date, by and between the Mentor, Gildre, an Illinois LLC (the &ldquo;Company&rdquo;), and participating individuals enrolled in the Company&rsquo;s network (the &ldquo;Members&rdquo;), subject to the Gildre Member Code of Conduct. The purpose of this Agreement is to develop a meaningful mentoring relationship via 1-on-1 phone or video calls for an expected time commitment of 1 hour monthly.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {agreementSections.map((s) => (
              <div
                key={s.title}
                className="rounded-xl p-6"
                style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <p className="text-sm font-bold text-white">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          {/* Sign CTA */}
          <div
            className="mt-10 rounded-2xl p-8 text-center"
            style={{ backgroundColor: "rgba(201,169,110,0.07)", border: "1px solid rgba(201,169,110,0.2)" }}
          >
            <p className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
              Ready to sign?
            </p>
            <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              Complete the Welcome Checklist to confirm your agreement and finish onboarding.
            </p>
            <a
              href={WELCOME_CHECKLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full px-8 py-3.5 text-sm font-bold transition-all hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
            >
              Open Welcome Checklist →
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 pb-24 pt-4">
        <div className="mx-auto max-w-2xl">
          <div
            className="rounded-2xl p-8 text-center"
            style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <p className="font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
              Questions? Reach out directly.
            </p>
            <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              Taiga and the team are always reachable.
            </p>
            <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="mailto:taiga@gildre.com"
                className="text-sm font-semibold transition-opacity hover:opacity-70"
                style={{ color: "#C9A96E" }}
              >
                taiga@gildre.com
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
