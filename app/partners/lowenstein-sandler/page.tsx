import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/partners/lowenstein-sandler" },
  title: "Gildre × Lowenstein Sandler | Legal Counsel for Founders Who Move Fast",
  description:
    "Gildre has partnered with Lowenstein Sandler to give our founders access to one of the most active startup law firms in the country — representing both sides of the table from seed to IPO.",
  keywords: [
    "Lowenstein Sandler startup law",
    "ECVC lawyer for founders",
    "startup legal counsel",
    "Gildre Lowenstein Sandler partnership",
    "emerging companies venture capital law",
    "seed to IPO legal firm",
    "startup attorney",
    "venture capital law firm founders",
  ],
  openGraph: {
    title: "Gildre × Lowenstein Sandler | Legal Counsel for Founders Who Move Fast",
    description: "One of the most active startup law firms in the country. Lowenstein Sandler represents both founders and investors from seed to IPO.",
    url: "https://www.gildre.com/partners/lowenstein-sandler",
    siteName: "Gildre",
    type: "website",
    images: [{ url: "https://www.gildre.com/og-home.png", width: 1200, height: 630, alt: "Gildre x Lowenstein Sandler Partnership" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gildre × Lowenstein Sandler | Legal Counsel for Founders Who Move Fast",
    description: "Legal counsel from a firm that knows both sides of the table. Lowenstein Sandler is Gildre's official legal partner.",
  },
};

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Emerging Companies and Venture Capital Practice",
    body: "Lowenstein Sandler&rsquo;s ECVC practice is one of the most active in the country, representing hundreds of startups and the funds that back them. That dual-sided experience means your counsel has seen the term sheet from both sides of the table and knows exactly where founders win or leave money on the table.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Seed to IPO Coverage",
    body: "Lowenstein Sandler works with founders at every stage: incorporation, seed round structuring, Series A through late-stage venture, secondary transactions, M&A, and public offerings. One firm can grow with you from day one through exit, which means no institutional knowledge lost in transitions and no ramp-up time when you hit an inflection.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "VentureCrush and Founder Community Access",
    body: "Lowenstein Sandler organizes VentureCrush, one of the premier venture and founder networking events in the country. Gildre members gain access to the Lowenstein Sandler founder community, including curated events and introductions to the investors, operators, and advisors in their network.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    title: "Equity, Compensation, and Employment Law",
    body: "From early equity plan design and option grants to employment agreements, advisor arrangements, and IP assignments, Lowenstein Sandler&rsquo;s team covers the legal infrastructure that underpins your cap table and team. Getting this right early prevents the expensive cleanup that derails due diligence later.",
  },
];

export default function LowensteinSandlerPage() {
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
              <span className="text-sm font-bold tracking-tight text-white" style={{ fontFamily: "var(--font-fraunces)" }}>Lowenstein Sandler</span>
            </div>
          </div>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.08] text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
            Legal counsel that knows
            <span style={{ color: "#C9A96E" }}> both sides of the table.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Lowenstein Sandler is Gildre&rsquo;s official legal partner. One of the most active startup law firms in the country, they represent founders and the investors who back them, from incorporation through Series A, late-stage venture, and exit.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="https://www.lowenstein.com/practices-sectors/emerging-companies-venture-capital" target="_blank" rel="noopener noreferrer" className="rounded-full px-9 py-3.5 text-sm font-bold transition-opacity hover:opacity-90" style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}>
              Learn About Lowenstein Sandler
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
            { value: "Seed", label: "Starting Point" },
            { value: "IPO", label: "Full Lifecycle Coverage" },
            { value: "Both Sides", label: "Founders and Investors" },
            { value: "ECVC", label: "Practice Focus" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold sm:text-3xl" style={{ fontFamily: "var(--font-fraunces)", color: "#C9A96E" }}>{s.value}</p>
              <p className="mt-1 text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── What Is Lowenstein Sandler ───────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: "#0f1524" }}>
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>What Is Lowenstein Sandler</p>
              <h2 className="mt-3 text-[1.75rem] font-bold leading-tight text-white sm:text-[2.25rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
                The startup law firm The Wall Street Journal called one of the most active in the country.
              </h2>
              <p className="mt-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                Lowenstein Sandler is a national law firm with a market-leading Emerging Companies and Venture Capital (ECVC) practice. They&rsquo;ve built their reputation by going deep on the startup ecosystem: representing both founders raising capital and the funds deploying it. That dual perspective gives their attorneys an understanding of deal dynamics that single-sided firms simply don&rsquo;t have.
              </p>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                For founders, this means counsel that can anticipate how investors will read your docs, where pushback typically comes from, and which terms actually matter versus which are noise.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { tier: "ECVC Practice", desc: "One of the most active emerging companies and venture capital practices in the country, representing hundreds of startups and the funds that back them." },
                { tier: "Both-Sides Representation", desc: "Lowenstein Sandler represents founders and investors, giving their attorneys a perspective on deal dynamics that single-sided firms don't have." },
                { tier: "Seed to IPO", desc: "Full lifecycle coverage: incorporation, seed structuring, Series A through late-stage, M&A, and public offerings. One firm, every stage." },
                { tier: "VentureCrush Network", desc: "Access to one of the premier founder and venture networking events in the country, plus curated introductions through the Lowenstein Sandler founder community." },
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
            Founders deserve lawyers who know what&rsquo;s on the other side of the table.<br className="hidden sm:block" /> Lowenstein Sandler does.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            Most startup law firms represent either founders or investors. Lowenstein Sandler represents both, which means their attorneys have context that changes how they negotiate and advise on every deal.
          </p>
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { heading: "They know what investors actually care about", body: "Because Lowenstein Sandler represents the funds writing checks, their attorneys know which terms are real sticking points for investors and which are standard asks that can be negotiated. That knowledge translates directly into better outcomes for founder clients." },
              { heading: "Legal infrastructure done right the first time", body: "Equity plan design, option grants, IP assignments, advisor agreements, employment docs: Lowenstein Sandler builds the legal foundation that lets founders raise cleanly and exit cleanly. Getting this right at the start costs a fraction of cleaning it up before a deal closes." },
              { heading: "A network that goes beyond legal advice", body: "VentureCrush and the broader Lowenstein Sandler founder community mean access to investors, operators, and advisors who have actually built and backed companies. For Gildre members, that network is an extension of what Gildre already provides." },
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
            Four areas where Lowenstein Sandler makes a real difference.
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
                Gildre builds the founder network. Lowenstein Sandler handles the legal foundation that makes everything else possible.
              </h2>
              <p className="mt-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                Gildre members get a direct introduction to the Lowenstein Sandler ECVC team and access to preferred rates for early-stage legal work. When a member is preparing to raise, structure equity, or negotiate a deal, Lowenstein Sandler is already briefed on the Gildre community and ready to engage without the standard cold-start process.
              </p>
            </div>
            <div className="flex flex-col gap-0">
              {[
                { stage: "Gildre Community", detail: "Peer accountability, operator mentorship, and introductions to founders who have successfully navigated the legal and fundraising milestones you are approaching." },
                { stage: "Lowenstein Sandler Introduction", detail: "Gildre members get a warm introduction to the ECVC team and access to preferred rates for early-stage legal work." },
                { stage: "Legal Foundation Setup", detail: "Incorporation, equity plan design, IP assignments, employment docs, and advisor agreements: the infrastructure that lets you raise cleanly and operate safely." },
                { stage: "Fundraising and Deal Support", detail: "When you raise, Lowenstein Sandler negotiates from the perspective of a firm that knows how investors think, which terms matter, and where the real leverage sits." },
                { stage: "Scale Through Exit", detail: "M&A, secondary transactions, late-stage venture rounds, and public offerings: one firm with the full lifecycle knowledge to take you all the way." },
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
            Most founders get legal advice from someone who only sees one side of the table. Lowenstein Sandler has sat on both sides of hundreds of deals, which means they know where the real risk is and where founders tend to give away more than they need to.
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
              <span className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>Lowenstein Sandler</span>
            </div>
          </div>
          <h2 className="text-[2rem] font-bold leading-tight text-white sm:text-[2.5rem]" style={{ fontFamily: "var(--font-fraunces)" }}>
            Build your legal foundation before you need it.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            Gildre members get a direct introduction to the Lowenstein Sandler ECVC team. Apply for membership to connect with a firm that knows the startup legal landscape from both sides of the table.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="https://tally.so/r/VLERVa" target="_blank" rel="noopener noreferrer" className="rounded-full px-9 py-4 text-sm font-bold transition-opacity hover:opacity-90" style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}>Apply for Gildre Membership</a>
            <a href="https://www.lowenstein.com/practices-sectors/emerging-companies-venture-capital" target="_blank" rel="noopener noreferrer" className="rounded-full px-8 py-4 text-sm font-semibold transition-opacity hover:opacity-80" style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.2)" }}>Visit Lowenstein Sandler</a>
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
