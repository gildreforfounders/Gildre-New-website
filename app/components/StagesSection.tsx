export default function StagesSection() {
  return (
    <section className="relative overflow-hidden py-12 px-6 sm:py-20" style={{ backgroundColor: "#0f1524" }}>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[1px] opacity-25"
        style={{ background: "linear-gradient(to right, transparent, rgba(201,169,110,0.5), transparent)" }}
      />

      <div className="mx-auto max-w-5xl">
        <p className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
          Who It&rsquo;s For
        </p>
        <h2
          className="mt-3 text-center text-[2rem] font-bold text-white sm:text-[2.5rem]"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Built for Founders Hitting Their Next Milestone
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
          Build alongside founders solving the same problems as you, at your stage.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Build stage */}
          <div
            className="relative overflow-hidden rounded-2xl p-8"
            style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1.5px solid rgba(255,255,255,0.07)" }}
          >
            <div
              className="mb-5 inline-flex items-center rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest"
              style={{ backgroundColor: "rgba(201,169,110,0.15)", color: "#C9A96E" }}
            >
              Stage 1 · Build
            </div>
            <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
              Validate &amp; Launch
            </h3>
            <p className="mt-1 text-sm font-semibold" style={{ color: "rgba(255,255,255,0.35)" }}>&lt;$500K ARR</p>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              You&rsquo;re actively building your MVP, acquiring early customers, and looking for Product-Market Fit. Gildre connects you with founders who&rsquo;ve been in your exact seat and members who help you move faster.
            </p>
            <div
              className="pointer-events-none absolute bottom-0 right-0 h-32 w-32 rounded-tl-full opacity-20"
              style={{ background: "radial-gradient(circle at bottom right, rgba(201,169,110,0.3) 0%, transparent 70%)" }}
            />
          </div>

          {/* Growth stage */}
          <div
            className="relative overflow-hidden rounded-2xl p-8"
            style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1.5px solid rgba(255,255,255,0.07)" }}
          >
            <div
              className="mb-5 inline-flex items-center rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest"
              style={{ backgroundColor: "rgba(201,169,110,0.15)", color: "#C9A96E" }}
            >
              Stage 2 · Growth
            </div>
            <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
              Scaling Operations
            </h3>
            <p className="mt-1 text-sm font-semibold" style={{ color: "rgba(255,255,255,0.35)" }}>&lt;$5M ARR</p>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              You have steady revenue and customers, but growth is hitting bottlenecks. You need to accelerate revenue while building systems, hiring, and fundraising. Gildre gives you the operators and advisors to break through.
            </p>
            <div
              className="pointer-events-none absolute bottom-0 right-0 h-32 w-32 rounded-tl-full opacity-20"
              style={{ background: "radial-gradient(circle at bottom right, rgba(201,169,110,0.25) 0%, transparent 70%)" }}
            />
          </div>

          {/* Scale stage */}
          <div
            className="relative overflow-hidden rounded-2xl p-8 sm:col-span-2 lg:col-span-1"
            style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1.5px solid rgba(255,255,255,0.07)" }}
          >
            <div
              className="mb-5 inline-flex items-center rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest"
              style={{ backgroundColor: "rgba(201,169,110,0.15)", color: "#C9A96E" }}
            >
              Stage 3 · Scale
            </div>
            <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
              Lead &amp; Compound
            </h3>
            <p className="mt-1 text-sm font-semibold" style={{ color: "rgba(255,255,255,0.35)" }}>$5M+ ARR</p>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              You&rsquo;ve proven the model. Now the decisions get harder and the stakes get higher. Gildre connects you with senior operators and investors who&rsquo;ve led companies through this exact inflection point.
            </p>
            <div
              className="pointer-events-none absolute bottom-0 right-0 h-32 w-32 rounded-tl-full opacity-20"
              style={{ background: "radial-gradient(circle at bottom right, rgba(201,169,110,0.25) 0%, transparent 70%)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
