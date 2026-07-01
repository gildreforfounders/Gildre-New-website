export default function StagesSection() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#F5F0E8" }}>
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#C9A96E]">
          Who It&rsquo;s For
        </p>
        <h2
          className="mt-3 text-center text-[2rem] font-bold text-[#1C2744] sm:text-[2.5rem]"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Built for Founders Hitting Their Next Milestone
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-zinc-500">
          Build alongside founders solving the same problems as you, at your stage.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Build stage */}
          <div className="relative overflow-hidden rounded-2xl border border-[#e8e0d0] bg-[#F5F0E8] p-8">
            <div
              className="mb-5 inline-flex items-center rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest"
              style={{ backgroundColor: "rgba(201,169,110,0.15)", color: "#C9A96E" }}
            >
              Stage 1 · Build
            </div>
            <h3
              className="text-2xl font-bold text-[#1C2744]"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Validate &amp; Launch
            </h3>
            <p className="mt-1 text-sm font-semibold text-zinc-400">&lt;$500K ARR</p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600">
              You&rsquo;re actively building your MVP, acquiring early customers, and looking for Product-Market Fit. Gildre connects you with founders who&rsquo;ve been in your exact seat and members who help you move faster.
            </p>
            <div
              className="pointer-events-none absolute bottom-0 right-0 h-32 w-32 rounded-tl-full opacity-40"
              style={{ background: "radial-gradient(circle at bottom right, rgba(201,169,110,0.25) 0%, transparent 70%)" }}
            />
          </div>

          {/* Growth stage */}
          <div className="relative overflow-hidden rounded-2xl border border-zinc-100 bg-[#1C2744] p-8">
            <div
              className="mb-5 inline-flex items-center rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest"
              style={{ backgroundColor: "rgba(201,169,110,0.2)", color: "#C9A96E" }}
            >
              Stage 2 · Growth
            </div>
            <h3
              className="text-2xl font-bold text-white"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Scaling Operations
            </h3>
            <p className="mt-1 text-sm font-semibold" style={{ color: "rgba(255,255,255,0.4)" }}>&lt;$5M ARR</p>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
              You have steady revenue and customers, but growth bottlenecks. You need to accelerate revenue while building systems, hiring, and fundraising. Gildre gives you the operators and advisors to break through.
            </p>
            <div
              className="pointer-events-none absolute bottom-0 right-0 h-32 w-32 rounded-tl-full opacity-30"
              style={{ background: "radial-gradient(circle at bottom right, rgba(201,169,110,0.4) 0%, transparent 70%)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
