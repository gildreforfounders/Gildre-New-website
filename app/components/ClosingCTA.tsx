export default function ClosingCTA() {
  return (
    <section
      className="px-6 py-16 text-center sm:py-24"
      style={{ backgroundColor: "#1C2744" }}
    >
      <div className="mx-auto max-w-2xl">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
          Ready to build?
        </p>
        <h2
          className="mt-4 text-[2rem] font-bold text-white sm:text-[2.75rem] leading-tight"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Nobody said it was going to be easy.
        </h2>
        <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
          Whether you&rsquo;re starting your first company or scaling to Series A — every founder needs the right startup mentor, the right peers, and a founder community that actually shows up. At Gildre, 250+ founders and experienced operators are ready to help you build something extraordinary.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://tally.so/r/VLERVa"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-8 py-3.5 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
          >
            Apply Now
          </a>
          <a
            href="https://calendly.com/taiga-gildre/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline underline-offset-4 transition-opacity hover:opacity-80"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Schedule a call first
          </a>
        </div>
      </div>
    </section>
  );
}
