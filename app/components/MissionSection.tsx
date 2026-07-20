const values = [
  {
    num: "01",
    title: "A Rising Tide Lifts All Ships",
    body: "Gildre has the belief in the power of collective progress and shared prosperity. We emphasize the idea that when one individual or group succeeds, it has the potential to positively impact and uplift the entire community. This promotes collaboration, cooperation, and mutual support among individuals and groups, recognizing that by working together and supporting each other's growth, everyone can benefit and thrive.",
  },
  {
    num: "02",
    title: "Meaningful Connections",
    body: "At Gildre we value strong, organic, and authentic relationships between members of our community. We believe that meaningful connections are essential for professional growth. We provide a safe and supportive space for members to connect, share their thoughts without judgment, celebrate the relationships they build, and interact through group discussions, events, and one-on-one meetings.",
  },
  {
    num: "03",
    title: "Trust and Commitment",
    body: "Gildre is a place for passionate, lifelong learners. In order to grow and succeed we must put in the time and effort to get there. While our members ultimately choose how to make the most out of their Gildre membership, they have our unwavering commitment to supporting their development. We ask that members within the community respect one another and trust us to facilitate these strategic connections.",
  },
  {
    num: "04",
    title: "Community for All",
    body: "At Gildre we want to foster a community of helping others. The Gildre community is a place where you can make meaningful connections, learn new things, and find solutions to your problems. We want you to use the community for all that it has to offer — but to keep the community healthy and vibrant, it's also important to give back. Ask yourself who you can help, what lessons you can share, and how you can be a mentor, teacher, and advocate for your fellow members.",
  },
];

export default function MissionSection() {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #080e1a 0%, #0d1a30 60%, #080e1a 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-28">

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
          Our Mission: A Founder Community{" "}
          <span style={{ color: "#C9A96E" }}>Built on Shared Success</span>
        </h2>

        {/* Intro copy */}
        <div className="mx-auto mt-8 max-w-2xl space-y-5 text-center">
          <p className="text-base leading-[1.9] text-zinc-400">
            At Gildre, we believe every startup founder deserves a real community — not a database, not a directory, but experienced mentors, peer operators, and a support system built around{" "}
            <span className="font-semibold text-white">&ldquo;Community for All&rdquo;</span>.
          </p>
          <p className="text-base leading-[1.9] text-zinc-400">
            You don&rsquo;t need a specific industry background to join. You just need the drive to build something meaningful and the willingness to support the founders building alongside you.
          </p>
          <p className="text-base leading-[1.9] text-zinc-400">
            Our principles guide everything: curated mentor matching, genuine peer connections, and programming that gives startup founders the resources they need to grow and scale.
          </p>
          <p className="text-sm text-zinc-500">
            The values that shape this founder community are below.
          </p>
        </div>

        {/* Gold divider */}
        <div className="mx-auto mt-10 mb-10 flex items-center gap-5 max-w-xs sm:mt-14 sm:mb-14">
          <div className="flex-1 h-px" style={{ backgroundColor: "rgba(201,169,110,0.2)" }} />
          <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#C9A96E" }} />
          <div className="flex-1 h-px" style={{ backgroundColor: "rgba(201,169,110,0.2)" }} />
        </div>

        {/* Core Values — 2-column staggered grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {values.map((v, i) => (
            <div
              key={i}
              className="group relative flex flex-col rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl"
              style={{
                background: i % 2 === 0
                  ? "linear-gradient(135deg, #0f1d35 0%, #0d1828 100%)"
                  : "linear-gradient(135deg, #111e35 0%, #0f1a2e 100%)",
                border: "1px solid rgba(201,169,110,0.12)",
              }}
            >
              {/* Subtle gold glow corner */}
              <div
                className="pointer-events-none absolute top-0 right-0 h-32 w-32 opacity-30 rounded-tr-2xl"
                style={{
                  background: "radial-gradient(circle at top right, rgba(201,169,110,0.15) 0%, transparent 70%)",
                }}
              />

              {/* Number */}
              <span
                className="text-[0.7rem] font-bold tracking-[0.25em] uppercase"
                style={{ color: "rgba(201,169,110,0.5)" }}
              >
                {v.num}
              </span>

              {/* Gold accent line */}
              <div
                className="mt-4 mb-5 h-[2px] w-8 rounded-full"
                style={{ backgroundColor: "#C9A96E" }}
              />

              {/* Title */}
              <h3
                className="text-xl font-bold leading-snug text-white sm:text-2xl"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                {v.title}
              </h3>

              {/* Body */}
              <p className="mt-4 text-sm leading-[1.9] text-zinc-400">
                {v.body}
              </p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
