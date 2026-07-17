import Link from "next/link";

export type LocationData = {
  name: string;
  slug: string;
  state: string;
  tagline: string;
  hook: string;
  intro: string;
  scene: string;
  benefits: { icon: string; title: string; body: string }[];
  lat: number;
  lng: number;
  zip: string;
};

const stats = [
  { value: "250+", label: "Active Members" },
  { value: "15+", label: "Cities Represented" },
  { value: "3", label: "Membership Tiers" },
  { value: "Weekly", label: "Curated Events" },
];

export default function LocationPageTemplate({ data }: { data: LocationData }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Gildre",
    url: "https://www.gildre.com",
    logo: "https://www.gildre.com/images/gildre-logo.png",
    description: `Gildre is a private founder membership community serving ${data.name}, ${data.state} and beyond.`,
    email: "info@gildre.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: data.name,
      addressRegion: data.state,
      postalCode: data.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: data.lat,
      longitude: data.lng,
    },
    areaServed: [
      { "@type": "City", name: data.name },
      { "@type": "Country", name: "United States" },
    ],
    sameAs: [
      "https://www.instagram.com/gildreforfounders",
      "https://www.linkedin.com/company/gildre/",
      "https://www.youtube.com/@GildreforFounders",
      "https://x.com/Gildre_",
      "https://www.tiktok.com/@gildreforfounders",
    ],
  };

  return (
    <div style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 pb-24 pt-36"
        style={{ background: "linear-gradient(160deg, #080e1a 0%, #1C2744 55%, #0a1020 100%)" }}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #C9A96E 0%, transparent 65%)" }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            Gildre · {data.name}, {data.state}
          </p>
          <h1
            className="mt-4 text-[clamp(2.4rem,5.5vw,4.25rem)] font-bold leading-[1.08] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            The Founder Community<br />
            <span style={{ color: "#C9A96E" }}>{data.name}</span> Has Been Missing
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            {data.intro}
          </p>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed font-medium" style={{ color: "rgba(201,169,110,0.8)" }}>
            {data.hook}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://gildre.circle.so/checkout/gildre-silver-membership"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-3.5 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
            >
              Apply for Membership →
            </a>
            <Link
              href="/membership"
              className="rounded-full px-8 py-3.5 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              View Memberships
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────────────────── */}
      <section className="px-6 py-10" style={{ backgroundColor: "#080e1a", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="mx-auto max-w-4xl grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="text-3xl font-bold"
                style={{ fontFamily: "var(--font-fraunces)", color: "#C9A96E" }}
              >
                {s.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── City Scene ───────────────────────────────────────────────── */}
      <section className="px-6 py-20" style={{ backgroundColor: "#0f1524" }}>
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
                The {data.name} Scene
              </p>
              <h2
                className="mt-3 text-[1.75rem] font-bold leading-tight text-white sm:text-[2.25rem]"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                {data.tagline}
              </h2>
              <p className="mt-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                {data.scene}
              </p>
            </div>
            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(201,169,110,0.15)",
              }}
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
                What you get
              </p>
              <ul className="mt-5 flex flex-col gap-4">
                {[
                  "Weekly curated 1:1 intros with relevant founders",
                  "Access to in-person events and local meetups",
                  "Mentorship from operators who've built and exited",
                  "Investor directory with warm introduction paths",
                  "Private community workspace for real conversations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 text-base" style={{ color: "#C9A96E" }}>✓</span>
                    <span className="text-sm leading-snug" style={{ color: "rgba(255,255,255,0.6)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────────────── */}
      <section className="px-6 py-20" style={{ backgroundColor: "#080e1a" }}>
        <div className="mx-auto max-w-5xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-center" style={{ color: "#C9A96E" }}>
            Built for {data.name} Founders
          </p>
          <h2
            className="mt-3 text-center text-[1.75rem] font-bold text-white sm:text-[2.25rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Why {data.name} Founders Choose Gildre
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {data.benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl p-7"
                style={{
                  backgroundColor: "rgba(201,169,110,0.04)",
                  border: "1px solid rgba(201,169,110,0.12)",
                }}
              >
                <div className="text-3xl mb-4">{b.icon}</div>
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

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="px-6 py-24 text-center" style={{ backgroundColor: "#1C2744" }}>
        <div className="mx-auto max-w-2xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            {data.name}, {data.state}
          </p>
          <h2
            className="mt-4 text-[2rem] font-bold leading-tight text-white sm:text-[2.75rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Your next breakthrough starts with the right room.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            Join {data.name}&rsquo;s most focused founder community. Apply today and get matched with peers who are building at your level.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://gildre.circle.so/checkout/gildre-silver-membership"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-10 py-4 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
            >
              Apply for Membership →
            </a>
            <Link
              href="/contact"
              className="rounded-full px-8 py-4 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              Talk to Us
            </Link>
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
