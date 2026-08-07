import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/matchplaygroup" },
  title: "Gildre x Matchplay | Our Official Investor-Readiness Partnership",
  description:
    "Gildre has partnered with Matchplay Group to give our founders a structured path from community-ready to investor-ready. Learn how it works and why we chose them.",
  openGraph: {
    title: "Gildre x Matchplay | Our Official Investor-Readiness Partnership",
    description:
      "Gildre has partnered with Matchplay Group to give our founders a structured path from community-ready to investor-ready.",
    url: "https://www.gildre.com/matchplaygroup",
    siteName: "Gildre",
    type: "website",
    images: [{ url: "https://www.gildre.com/og-home.png", width: 1200, height: 630, alt: "Gildre x Matchplay Partnership" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gildre x Matchplay | Our Official Investor-Readiness Partnership",
    description:
      "Gildre has partnered with Matchplay Group to give our founders a structured path from community-ready to investor-ready.",
  },
};

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    title: "Verified Due Diligence Package",
    body: "Matchplay puts every founder through the same diligence process investors run — before the first meeting. You come to a pitch with a complete data room, verified financials, and a standardized investor presentation. Investors see what they expect. You stop losing deals to process gaps.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Navigator: Your Personalized Roadmap",
    body: "After due diligence, Matchplay builds you a custom Navigator roadmap — specific milestones, gaps to close, and resources to get there. Not generic startup advice. A prioritized action plan tied to what investors at your stage are actually evaluating.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
    title: "Precision Investor Matching",
    body: "Matchplay's syndicate network spans early-stage angels to institutional funds. They match founders to investors at the right check size, thesis fit, and stage — not a blanket intro blast. Every connection is pre-qualified on both sides, which is the only kind of warm intro that converts.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Summits & Live Investor Events",
    body: "Matchplay runs flagship summits — ATX, NYC, and growing — where founders pitch directly in front of active investors and receive real-time feedback from their investment committee. Gildre members get priority access. It's the room you actually want to be in.",
  },
];

export default function MatchplayPartnershipPage() {
  return (
    <div style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 pb-28 pt-36"
        style={{ background: "linear-gradient(155deg, #080e1a 0%, #1C2744 50%, #0a1020 100%)" }}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #C9A96E 0%, transparent 65%)" }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span
              className="rounded-full px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em]"
              style={{ backgroundColor: "rgba(201,169,110,0.12)", color: "#C9A96E", border: "1px solid rgba(201,169,110,0.25)" }}
            >
              Official Partnership
            </span>
          </div>

          <div className="mb-8 flex items-center justify-center gap-5">
            <Image
              src="/images/gildre-logo.png"
              alt="Gildre"
              width={52}
              height={52}
              className="rounded-xl object-contain bg-white p-1"
            />
            <span className="text-2xl font-light" style={{ color: "rgba(255,255,255,0.3)" }}>×</span>
            <div
              className="flex items-center rounded-xl px-5 py-2.5"
              style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <span
                className="text-xl font-bold tracking-tight text-white"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                Matchplay
              </span>
              <span className="ml-1 text-xl font-light" style={{ color: "#C9A96E" }}>Group</span>
            </div>
          </div>

          <h1
            className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.08] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            From community-ready
            <span style={{ color: "#C9A96E" }}> to investor-ready.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Gildre builds the peer community, the accountability, and the operator network. Matchplay
            takes you the rest of the way — structured due diligence, a personalized fundraising roadmap,
            and precision-matched introductions to investors who are actively deploying.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://www.matchplaygroup.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-9 py-3.5 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
            >
              Learn About Matchplay
            </a>
            <Link
              href="https://tally.so/r/VLERVa"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-3.5 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              Apply to Gildre
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────────── */}
      <section
        className="px-6 py-10"
        style={{ backgroundColor: "#080e1a", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="mx-auto max-w-4xl grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { value: "4", label: "Program Tiers" },
            { value: "Early → Growth", label: "Stages Served" },
            { value: "2", label: "Annual Summits" },
            { value: "1 Partner", label: "For Investor Intros" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold sm:text-3xl" style={{ fontFamily: "var(--font-fraunces)", color: "#C9A96E" }}>
                {s.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── What is Matchplay ────────────────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: "#0f1524" }}>
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
                What Is Matchplay
              </p>
              <h2
                className="mt-3 text-[1.75rem] font-bold leading-tight text-white sm:text-[2.25rem]"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                A syndicate built around getting founders funded — the right way.
              </h2>
              <p className="mt-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                Matchplay Group is not a pitch competition or a cold investor database. It's a structured
                fundraising platform that runs founders through the same due diligence process investors
                use — before you ever walk into a meeting. You build a verified data room, close your
                gaps, and get matched to investors at the right check size and thesis.
              </p>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                Their Navigator platform gives you a personalized roadmap: the milestones you need to hit,
                the specific gaps investors at your stage care about, and the resources to close them. It
                turns fundraising from a black box into a process you can actually manage.
              </p>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                For Gildre members who are ready to raise, Matchplay is the most direct path from
                community momentum to closed capital.
              </p>
            </div>

            {/* Visual — program tiers */}
            <div className="flex flex-col gap-3">
              {[
                { tier: "Open", desc: "Foundation diligence, data room setup, and first-pass investor matching." },
                { tier: "Invitational", desc: "Caddie mentorship, pitch refinement, and curated investor introductions." },
                { tier: "Masters", desc: "Full Navigator roadmap, sidecar fund access, and summit priority placement." },
                { tier: "Challenge", desc: "Investment committee review, live pitch events, and direct MatchPlay Ventures consideration." },
              ].map((t, i) => (
                <div
                  key={t.tier}
                  className="flex items-start gap-4 rounded-xl p-5"
                  style={{
                    backgroundColor: i === 2 ? "rgba(201,169,110,0.07)" : "rgba(255,255,255,0.03)",
                    border: i === 2 ? "1px solid rgba(201,169,110,0.25)" : "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-[0.6rem] font-bold"
                    style={{ backgroundColor: "rgba(201,169,110,0.15)", color: "#C9A96E" }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{t.tier}</p>
                    <p className="mt-0.5 text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Gildre Chose Matchplay ───────────────────────────────── */}
      <section className="px-6 py-20" style={{ backgroundColor: "#080e1a" }}>
        <div className="mx-auto max-w-5xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-center" style={{ color: "#C9A96E" }}>
            Why We Chose Them
          </p>
          <h2
            className="mt-3 text-center text-[1.75rem] font-bold leading-tight text-white sm:text-[2.25rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Most investor intros go nowhere. Matchplay<br className="hidden sm:block" /> changes the reason why.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            Gildre can get a founder in front of an investor. What we couldn't do was guarantee the founder
            was ready for that meeting. Matchplay solves the preparation side — so the introductions we make
            actually convert. That's the gap we needed a partner to close.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                heading: "Process, not luck",
                body: "Fundraising fails most often because of process gaps — incomplete data rooms, unclear milestones, mismatched stage expectations. Matchplay runs the same process investors run, so you show up prepared.",
              },
              {
                heading: "Matched, not blasted",
                body: "The worst thing in fundraising is a warm intro to the wrong investor. Matchplay matches on thesis, check size, and stage before the introduction is made. Every intro is pre-qualified on both sides.",
              },
              {
                heading: "Feedback before the pitch",
                body: "Their investment committee reviews your deck and diligence before you go to market. You get real investor feedback with time to act on it — not a rejection email three weeks later.",
              },
            ].map((item) => (
              <div
                key={item.heading}
                className="rounded-2xl p-7"
                style={{ backgroundColor: "rgba(201,169,110,0.04)", border: "1px solid rgba(201,169,110,0.12)" }}
              >
                <h3 className="text-base font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
                  {item.heading}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature deep-dives ───────────────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: "#0f1524" }}>
        <div className="mx-auto max-w-5xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-center" style={{ color: "#C9A96E" }}>
            What We Use It For
          </p>
          <h2
            className="mt-3 text-center text-[1.75rem] font-bold leading-tight text-white sm:text-[2.25rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Four things Matchplay does that nobody else does.
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-5 rounded-2xl p-8"
                style={{
                  backgroundColor: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(201,169,110,0.12)",
                }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl flex-shrink-0"
                  style={{ backgroundColor: "rgba(201,169,110,0.1)", color: "#C9A96E" }}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3
                    className="text-[1.1rem] font-bold text-white leading-snug"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {feature.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How the partnership works ────────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: "#080e1a" }}>
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
                How It Works Together
              </p>
              <h2
                className="mt-3 text-[1.75rem] font-bold leading-tight text-white sm:text-[2rem]"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                Gildre gets you ready. Matchplay gets you funded.
              </h2>
              <p className="mt-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                Gildre Gold and Platinum members work with peers, operators, and mentors who've been
                through a raise. By the time you're ready to go to market, you have a tested pitch,
                real feedback, and a network of founders who can make introductions.
              </p>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                Matchplay takes that foundation and adds the infrastructure: a verified data room,
                a diligence package that passes investor review, a personalized Navigator roadmap,
                and direct access to their syndicate network and summits. The two work in sequence —
                Gildre builds the founder, Matchplay converts the raise.
              </p>
            </div>

            {/* Timeline */}
            <div className="flex flex-col gap-0">
              {[
                {
                  stage: "Gildre Community",
                  detail: "Peer accountability, operator mentorship, weekly curated intros, and in-person events — you build the reps.",
                  color: "#C9A96E",
                },
                {
                  stage: "Gildre Investor Directory",
                  detail: "Warm introductions to investors in the Gildre network at Gold and Platinum tier.",
                  color: "#C9A96E",
                },
                {
                  stage: "Matchplay Due Diligence",
                  detail: "Matchplay runs your diligence package, closes your gaps, and issues your verified investor data room.",
                  color: "#C9A96E",
                },
                {
                  stage: "Navigator Roadmap",
                  detail: "Personalized milestones and resources tied to what investors at your stage are actually evaluating.",
                  color: "#C9A96E",
                },
                {
                  stage: "Investor Matching & Summits",
                  detail: "Precision intros from the Matchplay syndicate + priority access to ATX and NYC summits.",
                  color: "#C9A96E",
                },
              ].map((step, i, arr) => (
                <div key={step.stage} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div
                      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold"
                      style={{ backgroundColor: "rgba(201,169,110,0.15)", color: "#C9A96E", border: "1px solid rgba(201,169,110,0.3)" }}
                    >
                      {i + 1}
                    </div>
                    {i < arr.length - 1 && (
                      <div className="mt-1 w-px flex-1" style={{ backgroundColor: "rgba(201,169,110,0.15)", minHeight: "2.5rem" }} />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="text-sm font-bold text-white">{step.stage}</p>
                    <p className="mt-1 text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Quote ────────────────────────────────────────────────────── */}
      <section className="px-6 py-20" style={{ backgroundColor: "#0f1524" }}>
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="text-5xl mb-6 flex-shrink-0"
            style={{ color: "rgba(201,169,110,0.35)", fontFamily: "Georgia, serif", lineHeight: 1 }}
          >
            &ldquo;
          </div>
          <p
            className="text-[1.2rem] leading-relaxed text-white font-medium"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Most founders lose rounds not because their company isn't fundable — but because they
            walked in with gaps an investor couldn't get past. Matchplay closes those gaps before
            the meeting. That's the piece we needed.
          </p>
          <p className="mt-6 text-sm font-semibold" style={{ color: "#C9A96E" }}>
            Taiga Gamell, Founder, Gildre
          </p>
        </div>
      </section>

      {/* ── Dual CTA ─────────────────────────────────────────────────── */}
      <section className="px-6 py-28 text-center" style={{ backgroundColor: "#1C2744" }}>
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 flex items-center justify-center gap-4">
            <Image
              src="/images/gildre-logo.png"
              alt="Gildre"
              width={36}
              height={36}
              className="rounded-lg object-contain bg-white p-0.5"
            />
            <span className="text-lg font-light" style={{ color: "rgba(255,255,255,0.3)" }}>×</span>
            <div
              className="rounded-lg px-4 py-1.5"
              style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <span className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
                Matchplay Group
              </span>
            </div>
          </div>
          <h2
            className="text-[2rem] font-bold leading-tight text-white sm:text-[2.5rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Ready to raise? Start with the community.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            Gildre Gold and Platinum members get direct access to the Matchplay partnership — including
            investor directory introductions and priority at Matchplay summits. Apply for membership to
            get started, or visit Matchplay directly to learn about their programs.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://tally.so/r/VLERVa"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-9 py-4 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
            >
              Apply for Gildre Membership
            </a>
            <a
              href="https://www.matchplaygroup.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-4 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              Visit Matchplay Group
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <div
        className="px-6 py-8 text-center text-[0.7rem] text-zinc-600"
        style={{ backgroundColor: "#080e1a", borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <p>
          &copy; {new Date().getFullYear()} Gildre, LLC. All rights reserved.{" "}
          <a href="/privacy" className="underline underline-offset-2 hover:text-zinc-400 transition-colors" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          {" · "}
          <a href="/" className="underline underline-offset-2 hover:text-zinc-400 transition-colors" target="_blank" rel="noopener noreferrer">
            Back to Gildre.com
          </a>
        </p>
      </div>
    </div>
  );
}
