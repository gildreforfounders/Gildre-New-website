import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/partners/g-p" },
  title: "Gildre × G-P | Hire Globally Without the Entity Setup",
  description:
    "Gildre has partnered with G-P (Globalization Partners) to give our founders access to the world's leading Employer of Record platform — hire talent in 180+ countries without setting up a legal entity.",
  keywords: [
    "G-P Globalization Partners",
    "employer of record startup",
    "EOR for founders",
    "Gildre G-P partnership",
    "global hiring startup",
    "hire internationally without entity",
    "G-P startup EOR",
    "global employment platform founders",
  ],
  openGraph: {
    title: "Gildre × G-P | Hire Globally Without the Entity Setup",
    description: "The world's leading Employer of Record. Hire and pay talent in 180+ countries without setting up a legal entity.",
    url: "https://www.gildre.com/partners/g-p",
    siteName: "Gildre",
    type: "website",
    images: [{ url: "https://www.gildre.com/og-home.png", width: 1200, height: 630, alt: "Gildre x G-P Partnership" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gildre × G-P | Hire Globally Without the Entity Setup",
    description: "Hire and pay talent in 180+ countries without a legal entity. G-P is Gildre's official global employment partner.",
  },
};

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: "Employer of Record in 180+ Countries",
    body: "G-P becomes the legal employer in each country on your behalf, handling payroll, tax withholding, benefits, and local labor law compliance. You manage the work. G-P manages the legal structure around it, in every market you operate in.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "G-P Gia: AI-Powered HR Agent",
    body: "G-P Gia handles the complete employee lifecycle across every market: onboarding, contract generation, benefits administration, and offboarding. The AI-first approach means faster setup and fewer manual steps for founders who don't have a dedicated HR team yet.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    title: "Compliant Contractor Engagement",
    body: "Hiring contractors internationally introduces misclassification risk that can result in significant fines and back taxes. G-P&rsquo;s contractor solution includes built-in misclassification protection and streamlined global payment infrastructure, so you engage contractors with confidence.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "In-Country Legal and HR Experts",
    body: "G-P has the largest team of in-country HR, legal, and compliance specialists in the industry. When local law changes or a complex employment situation arises, you have access to people who actually know the market, backed by over a decade of proprietary knowledge.",
  },
];

export default function GPPage() {
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
            <span className="rounded-full px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em]" style={{ backgroundColor: "rgba(201,169,110,0.12)", color: "#C9A96E", border: "1px solid rgba(201,169,110,0.25)" }}>
              Official Partnership
            </span>
          </div>
          <div className="mb-8 flex items-center justify-center gap-5">
            <Image src="/images/gildre-logo.png" alt="Gildre" width={52} height={52} className="rounded-xl object-contain bg-white p-1" />
            <span className="text-2xl font-light" style={{ color: "rgba(255,255,255,0.3)" }}>×</span>
            <div className="flex items-center rounded-xl px-5 py-2.5" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <span className="text-xl font-bold tracking-tight text-white" style={{ fontFamily: "var(--font-fraunces)" }}>G-P</span>
            </div>
          </div>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.08] text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
            Hire the best person for the job.
            <span style={{ color: "#C9A96E" }}> Wherever they are.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            G-P is Gildre&rsquo;s official global employment partner. Through their Employer of Record platform, Gildre founders can hire, pay, and manage talent in 180+ countries without setting up a legal entity, handling compliance, or navigating local labor law alone.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="https://www.globalization-partners.com/startups/" target="_blank" rel="noopener noreferrer" className="rounded-full px-9 py-3.5 text-sm font-bold transition-opacity hover:opacity-90" style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}>
              Learn About G-P
            </a>
            <a href="https://tally.so/r/VLERVa" target="_blank" rel="noopener noreferrer" className="rounded-full px-8 py-3.5 text-sm font-semibold transition-opacity hover:opacity-80" style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)" }}>
              Apply to Gildre
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────────── */}
      <section className="px-6 py-10" style={{ backgroundColor: "#080e1a", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="mx-auto max-w-4xl grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { value: "180+", label: "Countries Covered" },
            { value: "10+", label: "Years of EOR Experience" },
            { value: "AI-Powered", label: "G-P Gia HR Agent" },
            { value: "Full", label: "Compliance Coverage" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold sm:text-3xl" style={{ fontFamily: "var(--font-fraunces)", color: "#C9A96E" }}>{s.value}</p>
              <p className="mt-1 text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── What Is G-P ──────────────────────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: "#0f1524" }}>
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>What Is G-P</p>
              <h2 className="mt-3 text-[1.75rem] font-bold leading-tight text-white sm:text-[2.25rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
                The company that pioneered global employment, built for companies of every size.
              </h2>
              <p className="mt-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                G-P (Globalization Partners) is the world&rsquo;s leading Employer of Record platform, enabling companies to hire and employ talent in 180+ countries without establishing a local legal entity. Founded in 2012, G-P pioneered the EOR model and has spent over a decade building the compliance infrastructure, local expertise, and technology that makes international hiring actually work.
              </p>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                For founders scaling beyond their home market, G-P removes the single biggest barrier: the months-long, costly process of setting up a foreign entity just to hire one or two people. You find the talent. G-P handles the rest.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { tier: "Employer of Record", desc: "G-P becomes the legal employer in each country so you can hire without setting up an entity, handling payroll tax, or managing local labor compliance yourself." },
                { tier: "G-P Gia AI Agent", desc: "An AI-powered HR agent that handles the full employee lifecycle, from onboarding to offboarding, across every market you operate in." },
                { tier: "Contractor Solutions", desc: "Engage international contractors compliantly, with built-in misclassification protection and streamlined global payments." },
                { tier: "In-Country Experts", desc: "The largest team of in-country HR, legal, and compliance experts in the industry, backed by a decade of proprietary knowledge." },
              ].map((t, i) => (
                <div key={t.tier} className="flex items-start gap-4 rounded-xl p-5" style={{ backgroundColor: i === 0 ? "rgba(201,169,110,0.07)" : "rgba(255,255,255,0.03)", border: i === 0 ? "1px solid rgba(201,169,110,0.25)" : "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-[0.6rem] font-bold" style={{ backgroundColor: "rgba(201,169,110,0.15)", color: "#C9A96E" }}>{i + 1}</div>
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

      {/* ── Why Gildre Chose Them ────────────────────────────────────── */}
      <section className="px-6 py-20" style={{ backgroundColor: "#080e1a" }}>
        <div className="mx-auto max-w-5xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-center" style={{ color: "#C9A96E" }}>Why We Chose Them</p>
          <h2 className="mt-3 text-center text-[1.75rem] font-bold leading-tight text-white sm:text-[2.25rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
            The best hire for the job isn&rsquo;t always in your city.<br className="hidden sm:block" /> G-P means that doesn&rsquo;t have to stop you.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            As Gildre members scale, the talent they need is increasingly global. We needed a partner that could make international hiring as simple as domestic hiring, with real compliance coverage and an AI-first platform that matches how founders work today.
          </p>
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { heading: "No entity, no problem", body: "Setting up a legal entity in a foreign country takes months and costs thousands before you hire a single person. G-P eliminates that entirely: you can have a fully compliant employee in a new country in days, not months." },
              { heading: "180+ countries, one platform", body: "G-P covers more markets than any other EOR provider, with the deepest in-country expertise. Whether your next hire is in Germany, Singapore, or Brazil, G-P has the compliance infrastructure already in place." },
              { heading: "AI-first, not AI-washed", body: "G-P Gia is a genuine AI-powered HR agent handling the full employee lifecycle. For founders who want to scale globally without scaling their HR headcount, this is the infrastructure that makes it possible." },
            ].map((item) => (
              <div key={item.heading} className="rounded-2xl p-7" style={{ backgroundColor: "rgba(201,169,110,0.04)", border: "1px solid rgba(201,169,110,0.12)" }}>
                <h3 className="text-base font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>{item.heading}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature deep-dives ───────────────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: "#0f1524" }}>
        <div className="mx-auto max-w-5xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-center" style={{ color: "#C9A96E" }}>What We Use It For</p>
          <h2 className="mt-3 text-center text-[1.75rem] font-bold leading-tight text-white sm:text-[2.25rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
            Four things G-P does that no other partner can.
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col gap-5 rounded-2xl p-8" style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(201,169,110,0.12)" }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl flex-shrink-0" style={{ backgroundColor: "rgba(201,169,110,0.1)", color: "#C9A96E" }}>{feature.icon}</div>
                <div>
                  <h3 className="text-[1.1rem] font-bold text-white leading-snug" style={{ fontFamily: "var(--font-fraunces)" }}>{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{feature.body}</p>
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
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>How It Works Together</p>
              <h2 className="mt-3 text-[1.75rem] font-bold leading-tight text-white sm:text-[2rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
                Gildre builds the founder network. G-P removes the borders from your hiring.
              </h2>
              <p className="mt-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                Gildre members get a direct introduction to G-P&rsquo;s startup team and priority access to the platform. When you&rsquo;re ready to make your first international hire, G-P is already briefed on Gildre members and ready to onboard you without the standard cold-start process.
              </p>
            </div>
            <div className="flex flex-col gap-0">
              {[
                { stage: "Gildre Community", detail: "Peer accountability, operator mentorship, and introductions to founders who have scaled internationally." },
                { stage: "G-P Introduction", detail: "Gildre members get a direct introduction to the G-P startup team and priority access to their platform." },
                { stage: "EOR Account Setup", detail: "G-P onboards your company onto the platform, covering the countries where you plan to hire first." },
                { stage: "First International Hire", detail: "Find your candidate. G-P handles the contract, payroll setup, benefits, and compliance in their local jurisdiction." },
                { stage: "Scale Without Borders", detail: "As your team grows across markets, G-P's platform scales with you: one dashboard, every country, full compliance." },
              ].map((step, i, arr) => (
                <div key={step.stage} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold" style={{ backgroundColor: "rgba(201,169,110,0.15)", color: "#C9A96E", border: "1px solid rgba(201,169,110,0.3)" }}>{i + 1}</div>
                    {i < arr.length - 1 && <div className="mt-1 w-px flex-1" style={{ backgroundColor: "rgba(201,169,110,0.15)", minHeight: "2.5rem" }} />}
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
          <div className="text-5xl mb-6" style={{ color: "rgba(201,169,110,0.35)", fontFamily: "Georgia, serif", lineHeight: 1 }}>&ldquo;</div>
          <p className="text-[1.2rem] leading-relaxed text-white font-medium" style={{ fontFamily: "var(--font-fraunces)" }}>
            The best person for a role isn&rsquo;t always in the same country as your office. G-P removes the single biggest reason founders settle for the second-best hire: the cost and complexity of hiring internationally. Our members shouldn&rsquo;t have that as a constraint.
          </p>
          <p className="mt-6 text-sm font-semibold" style={{ color: "#C9A96E" }}>Taiga Gamell, Founder, Gildre</p>
        </div>
      </section>

      {/* ── Dual CTA ─────────────────────────────────────────────────── */}
      <section className="px-6 py-28 text-center" style={{ backgroundColor: "#1C2744" }}>
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 flex items-center justify-center gap-4">
            <Image src="/images/gildre-logo.png" alt="Gildre" width={36} height={36} className="rounded-lg object-contain bg-white p-0.5" />
            <span className="text-lg font-light" style={{ color: "rgba(255,255,255,0.3)" }}>×</span>
            <div className="rounded-lg px-4 py-1.5" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <span className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>G-P</span>
            </div>
          </div>
          <h2 className="text-[2rem] font-bold leading-tight text-white sm:text-[2.5rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
            Your next great hire might be anywhere in the world.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            Gildre members get a direct introduction to the G-P startup team and priority access to the Employer of Record platform. Apply for membership to get started, or visit G-P directly to learn about their solutions.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="https://tally.so/r/VLERVa" target="_blank" rel="noopener noreferrer" className="rounded-full px-9 py-4 text-sm font-bold transition-opacity hover:opacity-90" style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}>Apply for Gildre Membership</a>
            <a href="https://www.globalization-partners.com/startups/" target="_blank" rel="noopener noreferrer" className="rounded-full px-8 py-4 text-sm font-semibold transition-opacity hover:opacity-80" style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.2)" }}>Visit G-P</a>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <div className="px-6 py-8 text-center text-[0.7rem] text-zinc-600" style={{ backgroundColor: "#080e1a", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <p>
          &copy; {new Date().getFullYear()} Gildre, LLC. All rights reserved.{" "}
          <a href="/privacy" className="underline underline-offset-2 hover:text-zinc-400 transition-colors">Privacy Policy</a>
          {" · "}
          <Link href="/partners" className="underline underline-offset-2 hover:text-zinc-400 transition-colors">Partner Network</Link>
        </p>
      </div>
    </div>
  );
}
