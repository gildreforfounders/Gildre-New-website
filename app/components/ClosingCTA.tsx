"use client";
import { motion } from "framer-motion";

export default function ClosingCTA() {
  return (
    <section
      className="relative overflow-hidden px-6 py-16 text-center sm:py-28"
      style={{ backgroundColor: "#080e1a" }}
    >
      {/* Background glow orbs */}
      <div
        className="pointer-events-none absolute left-1/3 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 opacity-[0.08]"
        style={{ background: "radial-gradient(ellipse, #C9A96E 0%, transparent 65%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/3 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 opacity-[0.05]"
        style={{ background: "radial-gradient(ellipse, #4a6fa5 0%, transparent 65%)" }}
      />

      {/* Subtle horizontal rule */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[1px] w-[50%] -translate-x-1/2 opacity-40"
        style={{ background: "linear-gradient(to right, transparent, rgba(201,169,110,0.5), transparent)" }}
      />

      <motion.div
        className="relative mx-auto max-w-2xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
          Ready to build?
        </p>
        <h2
          className="mt-4 text-[2rem] font-bold text-white sm:text-[2.75rem] leading-tight"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Nobody said it was going to be easy.
        </h2>
        <p className="mt-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
          Whether you&rsquo;re starting your first company or scaling to Series A, every founder needs the right startup mentor, the right peers, and a founder community that actually shows up. At Gildre, 250+ founders and experienced operators are ready to help you build something extraordinary.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://tally.so/r/VLERVa"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-8 py-3.5 text-sm font-semibold transition-all hover:opacity-90"
            style={{
              backgroundColor: "#C9A96E",
              color: "#1C2744",
              boxShadow: "0 0 28px rgba(201,169,110,0.45), 0 4px 16px rgba(0,0,0,0.3)",
            }}
          >
            Apply Now
          </a>
          <a
            href="https://calendly.com/taiga-gildre/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline underline-offset-4 transition-colors hover:text-white"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Schedule a call first
          </a>
        </div>

        {/* Trust signal */}
        <p className="mt-8 text-xs" style={{ color: "rgba(255,255,255,0.22)" }}>
          250+ founders · 15+ cities · Curated community
        </p>
      </motion.div>
    </section>
  );
}
