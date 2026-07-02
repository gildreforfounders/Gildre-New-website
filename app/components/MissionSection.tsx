const principles = [
  {
    icon: "✦",
    title: "Results-Driven Mentor Matches",
    body: "Personalized 1:1 mentorship pairing with a subject matter expert geared towards accelerating professional growth.",
  },
  {
    icon: "✦",
    title: "Meaningful Connections",
    body: "Genuine connections designed to facilitate long-lasting relationships built on trust and mutual ambition.",
  },
  {
    icon: "✦",
    title: "Engaging Community",
    body: "Access to a highly engaged community of entrepreneurs, mentors, and industry experts.",
  },
  {
    icon: "✦",
    title: "Workshops & Events",
    body: "Curated virtual and in-person events bridging connections between members and mentors across the globe.",
  },
  {
    icon: "✦",
    title: "Coaching & Education",
    body: "Decades of professional experience distilled into business blueprints, practical tools, and expert-led sessions.",
  },
  {
    icon: "✦",
    title: "Partnerships & Perks",
    body: "500+ partners and $5M+ in exclusive tools and perks to accelerate your growth at every stage.",
  },
];

export default function MissionSection() {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #080e1a 0%, #0d1a30 50%, #080e1a 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 py-28">

        {/* Label */}
        <p
          className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.22em]"
          style={{ color: "#C9A96E" }}
        >
          Who We Are
        </p>

        {/* Headline */}
        <h2
          className="mt-4 text-center text-[2rem] font-bold text-white sm:text-[2.6rem]"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Mission &{" "}
          <span style={{ color: "#C9A96E" }}>Principles</span>
        </h2>

        {/* "Community for All" callout */}
        <div className="mx-auto mt-14 max-w-3xl text-center">
          <div
            className="relative inline-block px-8 py-6 rounded-2xl"
            style={{
              background: "rgba(201,169,110,0.06)",
              border: "1px solid rgba(201,169,110,0.2)",
            }}
          >
            <p
              className="text-[0.65rem] font-bold uppercase tracking-[0.25em] mb-3"
              style={{ color: "rgba(201,169,110,0.7)" }}
            >
              Our Core Thesis
            </p>
            <p
              className="text-3xl font-bold text-white sm:text-4xl"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              &ldquo;Community for All&rdquo;
            </p>
          </div>
        </div>

        {/* Body copy */}
        <div className="mx-auto mt-12 max-w-2xl space-y-6 text-center">
          <p className="text-base leading-[1.9] text-zinc-400">
            You don&rsquo;t need a specific industry or experience background to become a member — just the motivation to build something great and support other founders.
          </p>
          <p className="text-base leading-[1.9] text-zinc-400">
            Our principles revolve around our 6 core benefits, geared towards crafting meaningful connections and providing the necessary resources to scale your company.
          </p>
        </div>

        {/* Gold divider */}
        <div className="mx-auto mt-14 mb-14 flex items-center gap-5 max-w-xs">
          <div className="flex-1 h-px" style={{ backgroundColor: "rgba(201,169,110,0.2)" }} />
          <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#C9A96E" }} />
          <div className="flex-1 h-px" style={{ backgroundColor: "rgba(201,169,110,0.2)" }} />
        </div>

        {/* 6 Principles grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p, i) => (
            <div
              key={i}
              className="group rounded-2xl px-7 py-6 transition-all duration-300"
              style={{
                backgroundColor: "#0f1a2e",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <span
                className="text-sm"
                style={{ color: "#C9A96E" }}
              >
                {p.icon}
              </span>
              <h3
                className="mt-3 text-base font-bold text-white"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Learn more CTA */}
        <div className="mt-14 text-center">
          <p className="text-sm text-zinc-500">
            You can learn more about our values{" "}
            <a
              href="https://www.gildre.com/about-us"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-4 transition-opacity hover:opacity-80"
              style={{ color: "#C9A96E" }}
            >
              here
            </a>
            .
          </p>
        </div>

      </div>
    </section>
  );
}
