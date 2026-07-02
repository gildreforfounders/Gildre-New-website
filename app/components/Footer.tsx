const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/gildreforfounders",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/gildre/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@GildreforFounders",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/Gildre_",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@gildreforfounders",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#080e1a", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">

          {/* Brand */}
          <div>
            <p
              className="text-2xl font-bold text-white"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Gildre
            </p>
            <p className="mt-1 text-xs text-zinc-500">
              The founder community built for builders.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-5">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="text-zinc-500 transition-colors duration-200 hover:text-[#C9A96E]"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter + Podcast */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">

          {/* Newsletter */}
          <div
            className="flex flex-col justify-between gap-5 rounded-2xl px-7 py-6"
            style={{
              background: "rgba(201,169,110,0.05)",
              border: "1px solid rgba(201,169,110,0.15)",
            }}
          >
            <div className="flex items-center gap-4">
              <img
                src="/images/gildre-logo.png"
                alt="Gildre"
                className="h-14 w-14 flex-shrink-0 rounded-xl object-contain bg-white p-1"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "#C9A96E" }}>
                  Free Newsletter
                </p>
                <p className="mt-1 text-sm font-semibold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
                  The Essential Founder Newsletter
                </p>
                <p className="mt-0.5 text-xs text-zinc-500">
                  Insights, resources, and stories for founders — delivered to your inbox.
                </p>
              </div>
            </div>
            <a
              href="https://gildre-for-founders.beehiiv.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block self-start rounded-full px-6 py-2.5 text-xs font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
            >
              Subscribe →
            </a>
          </div>

          {/* Podcast */}
          <div
            className="flex flex-col justify-between gap-5 rounded-2xl px-7 py-6"
            style={{
              background: "rgba(201,169,110,0.05)",
              border: "1px solid rgba(201,169,110,0.15)",
            }}
          >
            <div className="flex items-center gap-4">
              <img
                src="/images/start-to-scale-logo.webp"
                alt="Start to Scale Podcast"
                className="h-14 w-14 flex-shrink-0 rounded-xl object-cover"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "#C9A96E" }}>
                  Podcast
                </p>
                <p className="mt-1 text-sm font-semibold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
                  Start to Scale
                </p>
                <p className="mt-0.5 text-xs text-zinc-500">
                  The Founder&rsquo;s Podcast by Gildre
                </p>
              </div>
            </div>
            <a
              href="https://linktr.ee/starttoscale"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block self-start rounded-full px-6 py-2.5 text-xs font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
            >
              Follow →
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 flex flex-col items-center gap-2 pt-8 text-center text-[0.7rem] text-zinc-600 sm:flex-row sm:justify-between"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p>&copy; {new Date().getFullYear()} Gildre. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="https://www.gildre.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="https://www.gildre.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
