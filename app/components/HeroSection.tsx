"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/community/hero.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#000",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <a
            href="https://www.nexus.app/dashboard/gildre"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-6 inline-block rounded-full border border-white/30 bg-white/10 px-5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            Private Founder Community · 250+ Members
          </a>

          <h1
            className="text-[clamp(1.85rem,4.8vw,4rem)] font-bold leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            The startup founder community<br />
            built by operators who have<br />
            <span style={{ color: "#C9A96E" }}>built, scaled &amp; exited</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            Gildre is a private founder community offering 1:1 startup mentorship, curated peer introductions, and expert-led programming — for founders from pre-revenue to $5M+ ARR.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://tally.so/r/VLERVa"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-zinc-100"
            >
              Apply Now
            </a>
            <a
              href="https://calendly.com/taiga-gildre/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/80 underline underline-offset-4 transition-colors hover:text-white"
            >
              Schedule a call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
