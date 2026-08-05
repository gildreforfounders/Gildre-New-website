"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const avatars = [
  "/reviews/caitlin-van-berkel.webp",
  "/reviews/iliana-alvarado.webp",
  "/reviews/christof-mannfeld.webp",
  "/reviews/dan-hernandez.jpg",
  "/reviews/carol-palombini.webp",
];

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#000" }}
    >
      <Image
        src="/images/community/hero.webp"
        alt="Gildre founder community"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Layered overlay — darker at bottom for text legibility */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.65) 100%)" }} />

      {/* Subtle gold glow at center */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
        style={{ background: "radial-gradient(ellipse, #C9A96E 0%, transparent 65%)" }}
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          {/* Pill badge with shimmer border */}
          <a
            href="https://www.nexus.app/dashboard/gildre"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-6 inline-block rounded-full px-5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            style={{
              border: "1px solid rgba(201,169,110,0.45)",
              backgroundColor: "rgba(201,169,110,0.08)",
            }}
          >
            Curated Founder Community · 250+ Members
          </a>

          <h1
            className="text-[clamp(1.85rem,4.8vw,4rem)] font-bold leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Level up with founders<br />
            &amp; advisors who have<br />
            <span style={{ color: "#C9A96E" }}>built, scaled &amp; exited</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Gildre is the home for founders who execute. Whether establishing PMF or scaling to $5M ARR, get direct access to the people and insights you need to build with certainty.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://tally.so/r/VLERVa"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-3.5 text-sm font-bold transition-all hover:opacity-90"
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
              className="text-sm text-white/70 underline underline-offset-4 transition-colors hover:text-white"
            >
              Schedule a call
            </a>
          </div>

          {/* Social proof avatar cluster */}
          <div className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-2.5">
              {avatars.map((src, i) => (
                <div
                  key={i}
                  className="relative h-8 w-8 overflow-hidden rounded-full"
                  style={{
                    border: "2px solid rgba(255,255,255,0.2)",
                    zIndex: avatars.length - i,
                  }}
                >
                  <Image src={src} alt="Gildre member" fill sizes="32px" className="object-cover" />
                </div>
              ))}
            </div>
            <p className="text-sm text-white/65">
              <span className="font-semibold text-white">250+ founders</span> already building inside
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white/35">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 5.5L8 10.5L13 5.5" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
