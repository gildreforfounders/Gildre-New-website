import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/partners/leader-bank" },
  title: "Gildre × Leader Bank | Startup Banking Built for Founders",
  description:
    "Gildre has partnered with Leader Bank to give our founders access to startup-focused banking, $1.5M+ in partner perks, and curated investor introductions through Leader Link.",
  keywords: [
    "Leader Bank startup banking",
    "founder banking perks",
    "Gildre Leader Bank",
    "startup bank account",
    "Leader Link investor matching",
    "innovation toolkit startup discounts",
    "pre-seed to IPO banking",
    "community bank founders",
  ],
  openGraph: {
    title: "Gildre × Leader Bank | Startup Banking Built for Founders",
    description:
      "Startup banking from pre-seed to IPO. $1.5M+ in partner discounts and curated investor introductions through Leader Link.",
    url: "https://www.gildre.com/partners/leader-bank",
    siteName: "Gildre",
    type: "website",
    images: [{ url: "https://www.gildre.com/og-home.png", width: 1200, height: 630, alt: "Gildre x Leader Bank Partnership" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gildre × Leader Bank | Startup Banking Built for Founders",
    description: "Startup banking from pre-seed to IPO. $1.5M+ in partner perks through the Gildre x Leader Bank partnership.",
  },
};

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    title: "Startup Deposit Accounts",
    body: "Purpose-built accounts for startups with the digital banking infrastructure of a major institution and a team that actually picks up the phone. No minimum revenue requirements to open a relationship and no hoops designed for established businesses.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    title: "Innovation Toolkit: $1.5M+ in Discounts",
    body: "Leader Bank has negotiated more than $1.5M in partner discounts across software, legal, HR, and infrastructure tools startups use anyway. Gildre members access these perks through the partnership, applied from day one of the banking relationship.",
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
    title: "Leader Link: Curated Investor Matching",
    body: "Leader Link connects startups to VC firms, accelerators, and venture debt providers matched to their stage and goals. Unlike a cold list, introductions are curated to your profile, so you walk into the right conversations rather than blasting and hoping.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: "Working Capital Lines of Credit",
    body: "For startups that need cash flow flexibility, Leader Bank offers working capital lines of credit to finance inventory, bridge receivables, and keep the business moving when timing gaps appear between revenue and expenses.",
  },
];

export default function LeaderBankPage() {
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
              <span className="text-xl font-bold tracking-tight text-white" style={{ fontFamily: "var(--font-fraunces)" }}>Leader</span>
              <span className="ml-1 text-xl font-light" style={{ color: "#C9A96E" }}>Bank</span>
            </div>
          </div>

          <h1
            className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.08] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Banking that was built for founders,
            <span style={{ color: "#C9A96E" }}> not retrofitted for them.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Leader Bank is Gildre&rsquo;s official banking partner. From your first startup account to working capital lines of credit,
            Leader Bank gives Gildre founders the financial infrastructure, perks, and connections that most banks simply don&rsquo;t offer.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://www.leaderbank.com/business_/startup-banking"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-9 py-3.5 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
            >
              Learn About Leader Bank
            </a>
            <a
              href="https://tally.so/r/VLERVa"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-3.5 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              Apply to Gildre
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────────── */}
      <section className="px-6 py-10" style={{ backgroundColor: "#080e1a", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="mx-auto max-w-4xl grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { value: "$1.5M+", label: "Partner Discounts" },
            { value: "Pre-Seed → IPO", label: "Stages Served" },
            { value: "22+", label: "Years Banking Founders" },
            { value: "1 Partner", label: "For Startup Banking" },
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

      {/* ── What Is Leader Bank ──────────────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: "#0f1524" }}>
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
                What Is Leader Bank
              </p>
              <h2 className="mt-3 text-[1.75rem] font-bold leading-tight text-white sm:text-[2.25rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
                A community bank built with an entrepreneurial mindset, from day one.
              </h2>
              <p className="mt-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                Leader Bank is a Massachusetts-based community bank with national reach, built from the ground up with an entrepreneurial approach to banking. Their startup banking team works specifically with founders from pre-seed through IPO, offering accounts designed for startup cash flow, an innovation toolkit with over $1.5M in partner discounts, and Leader Link, a curated matching platform that connects startups to the right venture capital firms, accelerators, and venture debt providers.
              </p>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                This isn&rsquo;t a big-four bank that bolted a startup page onto its website. Leader Bank was built by people who understand how founders operate and what they actually need from a banking relationship at the stage when it matters most.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {[
                { tier: "Startup Deposit Accounts", desc: "Accounts built for how startups operate, with large-bank technology and community-bank personal service." },
                { tier: "Innovation Toolkit", desc: "Over $1.5M in curated partner discounts on the tools, services, and software your startup actually uses." },
                { tier: "Leader Link", desc: "A curated matching platform that connects you to the right VC, accelerator, or venture debt provider at your stage." },
                { tier: "Working Capital", desc: "Lines of credit to manage cash flow, fund inventory, and finance receivables when you need to move faster than your revenue." },
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

      {/* ── Why Gildre Chose Them ────────────────────────────────────── */}
      <section className="px-6 py-20" style={{ backgroundColor: "#080e1a" }}>
        <div className="mx-auto max-w-5xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-center" style={{ color: "#C9A96E" }}>Why We Chose Them</p>
          <h2 className="mt-3 text-center text-[1.75rem] font-bold leading-tight text-white sm:text-[2.25rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
            Most founders bank at whoever was convenient.<br className="hidden sm:block" /> Leader Bank is the one you&rsquo;d choose if you knew better.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            We needed a banking partner that understood founders at the pre-revenue stage, not just at Series B. Leader Bank&rsquo;s combination of startup-native accounts, a real innovation toolkit, and investor-matching infrastructure through Leader Link made them the right choice.
          </p>
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { heading: "Built for the stage you're at", body: "Most banks won't look at you seriously until you have revenue. Leader Bank built products specifically for pre-seed to early-stage founders, with infrastructure that matches how startups actually manage cash." },
              { heading: "$1.5M in real perks", body: "The innovation toolkit isn't a collection of 10%-off coupons. It's a curated set of partner discounts on tools founders use, adding up to over $1.5M in collective value across the portfolio." },
              { heading: "Leader Link changes the intro game", body: "Getting in front of the right investor is one of the hardest things in early-stage fundraising. Leader Link matches founders to VCs, accelerators, and venture debt providers based on stage and thesis, not a cold blast." },
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
            Four things Leader Bank does that most banks can&rsquo;t.
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col gap-5 rounded-2xl p-8" style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(201,169,110,0.12)" }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl flex-shrink-0" style={{ backgroundColor: "rgba(201,169,110,0.1)", color: "#C9A96E" }}>
                  {feature.icon}
                </div>
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
                Gildre builds the network. Leader Bank builds the financial foundation.
              </h2>
              <p className="mt-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                Gildre members get a warm introduction to Leader Bank&rsquo;s startup banking team from day one of membership. The relationship starts with the right conversation, not a cold application form, and leads directly into the accounts, toolkit, and Leader Link access that matter most at your stage.
              </p>
            </div>
            <div className="flex flex-col gap-0">
              {[
                { stage: "Gildre Community", detail: "Peer accountability, operator mentorship, and weekly curated introductions to founders at your stage." },
                { stage: "Leader Bank Introduction", detail: "Gildre members get a warm introduction to the Leader Bank startup banking team, bypassing the cold application process." },
                { stage: "Startup Account Setup", detail: "Open your account with a team that understands pre-revenue cash flow and doesn't penalize you for not being profitable yet." },
                { stage: "Innovation Toolkit Access", detail: "Unlock over $1.5M in partner discounts on tools, software, and services across the startup stack." },
                { stage: "Leader Link Matching", detail: "When you're ready to raise, Leader Link connects you to the right VC, accelerator, or venture debt provider for your stage and goals." },
              ].map((step, i, arr) => (
                <div key={step.stage} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold" style={{ backgroundColor: "rgba(201,169,110,0.15)", color: "#C9A96E", border: "1px solid rgba(201,169,110,0.3)" }}>
                      {i + 1}
                    </div>
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
            Most founders open a bank account at whoever was convenient when they incorporated. We wanted to give our members something better: a banking partner that actually understands the pre-revenue stage and has real infrastructure to help them grow.
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
              <span className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>Leader Bank</span>
            </div>
          </div>
          <h2 className="text-[2rem] font-bold leading-tight text-white sm:text-[2.5rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
            Bank where founders bank.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            Gildre members get a warm introduction to Leader Bank&rsquo;s startup banking team, access to the innovation toolkit, and a curated path into Leader Link. Apply for membership to get started, or visit Leader Bank directly.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="https://tally.so/r/VLERVa" target="_blank" rel="noopener noreferrer" className="rounded-full px-9 py-4 text-sm font-bold transition-opacity hover:opacity-90" style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}>
              Apply for Gildre Membership
            </a>
            <a href="https://www.leaderbank.com/business_/startup-banking" target="_blank" rel="noopener noreferrer" className="rounded-full px-8 py-4 text-sm font-semibold transition-opacity hover:opacity-80" style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.2)" }}>
              Visit Leader Bank
            </a>
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
