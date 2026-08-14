import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://www.gildre.com/gatherlypartnership" },
  title: "Gildre x Gatherly | Our Official Virtual Events Partnership",
  description:
    "Gildre has partnered with Gatherly to power virtual founder events that actually feel like being in the room. Learn why we chose Gatherly and how it works for our community.",
  openGraph: {
    title: "Gildre x Gatherly | Our Official Virtual Events Partnership",
    description:
      "Gildre has partnered with Gatherly to power virtual founder events that actually feel like being in the room.",
    url: "https://www.gildre.com/gatherlypartnership",
    siteName: "Gildre",
    type: "website",
    images: [{ url: "https://www.gildre.com/og-home.png", width: 1200, height: 630, alt: "Gildre x Gatherly Partnership" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gildre x Gatherly | Our Official Virtual Events Partnership",
    description:
      "Gildre has partnered with Gatherly to power virtual founder events that actually feel like being in the room.",
  },
};

const features = [
  {
    title: "1:1 Conversations That Happen Naturally",
    body: "In a standard video call, you can only talk to the whole group. In Gatherly, founders drift in and out of rooms the same way they would at a dinner. Two people end up in the Brainstorm Room and a real conversation happens. That's the mechanic we needed.",
    image: "/images/gatherly/1on1.jpg",
    alt: "Gatherly 1:1 conversation in a brainstorm room",
  },
  {
    title: "Group Rooms Built for Real Sessions",
    body: "The Cinema Room fits up to 20+ for a keynote or panel. The Social Room is open networking. The Brainstorm Room is small-group deep work. Gatherly lets us run a full event program on a single platform without switching tools mid-session.",
    image: "/images/gatherly/huddle.jpg",
    alt: "Gatherly cinema room with multiple founders on video",
  },
  {
    title: "Sponsor Booths That Actually Work",
    body: "Virtual sponsor booths are usually an afterthought. Gatherly's booth system gives sponsors a branded space where attendees can walk in, talk to a rep, and get a real conversation. For our partner events, this makes sponsor ROI measurable and real.",
    image: "/images/gatherly/booths.jpg",
    alt: "Gatherly virtual sponsor booths",
  },
  {
    title: "Live Broadcast to the Whole Room",
    body: "When we have a speaker or an announcement, we broadcast to every floor simultaneously. One host, every attendee, no coordination overhead. The platform handles it cleanly while the rest of the event keeps running around the broadcast.",
    image: "/images/gatherly/broadcast.jpg",
    alt: "Gatherly live broadcast feature",
  },
];

export default function GatherlyPartnershipPage() {
  return (
    <div style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 pb-28 pt-36"
        style={{ background: "linear-gradient(155deg, #080e1a 0%, #1C2744 50%, #0a1020 100%)" }}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #C9A96E 0%, transparent 65%)" }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span
              className="rounded-full px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em]"
              style={{ backgroundColor: "rgba(201,169,110,0.12)", color: "#C9A96E", border: "1px solid rgba(201,169,110,0.25)" }}
            >
              Official Partnership
            </span>
          </div>

          <div className="mb-8 flex items-center justify-center gap-5">
            <Image
              src="/images/gildre-logo.png"
              alt="Gildre"
              width={52}
              height={52}
              className="rounded-xl object-contain bg-white p-1"
            />
            <span className="text-2xl font-light" style={{ color: "rgba(255,255,255,0.3)" }}>×</span>
            <Image
              src="/images/gatherly/gatherly-logo.png"
              alt="Gatherly"
              width={140}
              height={44}
              className="object-contain"
            />
          </div>

          <h1
            className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.08] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Virtual events that feel like
            <span style={{ color: "#C9A96E" }}> being in the room.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Gildre has partnered with Gatherly to bring our founder community together across
            cities, time zones, and chapters. When we can't be at the same table, Gatherly is
            the closest thing to it.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://gatherly.io"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-9 py-3.5 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
            >
              Try Gatherly
            </a>
            <Link
              href="https://tally.so/r/VLERVa"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-3.5 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              Join a Gildre Event
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats from Gatherly analytics ────────────────────────────── */}
      <section
        className="px-6 py-10"
        style={{ backgroundColor: "#080e1a", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="mx-auto max-w-4xl grid grid-cols-2 gap-6 sm:grid-cols-3">
          {[
            { value: "9,495", label: "Conversations Facilitated" },
            { value: "415", label: "Peak Concurrent Attendees" },
            { value: "7 Cities", label: "Connected in One Event" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold" style={{ fontFamily: "var(--font-fraunces)", color: "#C9A96E" }}>
                {s.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── What is Gatherly ─────────────────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: "#0f1524" }}>
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
                What Is Gatherly
              </p>
              <h2
                className="mt-3 text-[1.75rem] font-bold leading-tight text-white sm:text-[2.25rem]"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                A virtual event platform built around how people actually connect.
              </h2>
              <p className="mt-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                Gatherly is not a webinar tool. It's a spatial, room-based virtual events
                platform where attendees move between rooms, bump into people, and have the
                kinds of conversations that don't happen on a Zoom call with 50 people in
                gallery view.
              </p>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                Every Gatherly event has a live map. You see where people are. You walk into
                a room. You talk to whoever is there. You leave when the conversation is done
                and find someone new. It works because it mirrors what happens in a real
                physical space.
              </p>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                For a community like Gildre, where the whole point is the quality of the
                introduction and the depth of the conversation, that matters more than
                anything else a virtual platform can offer.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/gatherly/usage.webp"
                alt="Gatherly running across desktop, tablet, and laptop devices"
                width={700}
                height={480}
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Gildre Chose Gatherly ─────────────────────────────────── */}
      <section className="px-6 py-20" style={{ backgroundColor: "#080e1a" }}>
        <div className="mx-auto max-w-5xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-center" style={{ color: "#C9A96E" }}>
            Why We Chose Them
          </p>
          <h2
            className="mt-3 text-center text-[1.75rem] font-bold leading-tight text-white sm:text-[2.25rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            We tried a lot of platforms. Gatherly was the only one<br className="hidden sm:block" /> that felt like a room.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            Gildre runs on the premise that the right conversation between two founders is worth more
            than a hundred passive introductions. That only happens in a format where people can
            genuinely discover each other. Gatherly is the only virtual platform we found where that
            happens reliably.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                heading: "Spatial, not sequential",
                body: "Most virtual events are queued presentations. Gatherly is a space you move through. Founders find each other the same way they would at a dinner.",
              },
              {
                heading: "Every conversation is opt-in",
                body: "Nobody gets pulled into a breakout they didn't choose. You walk into a room because you want to be there. That changes the energy of every conversation.",
              },
              {
                heading: "It scales without losing signal",
                body: "Whether it's 20 founders or 400, the quality of individual conversations stays consistent. The platform doesn't get louder as it gets bigger.",
              },
            ].map((item) => (
              <div
                key={item.heading}
                className="rounded-2xl p-7"
                style={{ backgroundColor: "rgba(201,169,110,0.04)", border: "1px solid rgba(201,169,110,0.12)" }}
              >
                <h3 className="text-base font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
                  {item.heading}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature deep-dives ───────────────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: "#0f1524" }}>
        <div className="mx-auto max-w-5xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-center" style={{ color: "#C9A96E" }}>
            What We Use It For
          </p>
          <h2
            className="mt-3 text-center text-[1.75rem] font-bold leading-tight text-white sm:text-[2.25rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Four things Gatherly does better than anything else.
          </h2>

          <div className="mt-16 flex flex-col gap-24">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={`grid grid-cols-1 gap-10 lg:grid-cols-2 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <h3
                    className="text-[1.4rem] font-bold text-white leading-snug"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {feature.body}
                  </p>
                </div>
                <div className={`relative overflow-hidden rounded-2xl ${i % 2 === 1 ? "lg:order-1" : ""}`} style={{ border: "1px solid rgba(201,169,110,0.12)" }}>
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    width={720}
                    height={450}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Agenda / Program management ──────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: "#080e1a" }}>
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
            <div className="relative overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.12)" }}>
              <Image
                src="/images/gatherly/agenda.jpg"
                alt="Gatherly agenda and session management interface"
                width={720}
                height={480}
                className="w-full object-cover"
              />
            </div>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
                Session Management
              </p>
              <h2
                className="mt-3 text-[1.75rem] font-bold leading-tight text-white sm:text-[2rem]"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                Run a full event program in one place.
              </h2>
              <p className="mt-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                Gildre events typically run a structured program: a speaker session, open
                networking, and small-group roundtables. Gatherly's agenda system lets
                attendees see what's live, what's next, and where to go, all without needing
                a separate event app or a host managing it manually.
              </p>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                Sessions appear on the left panel in real time. Attendees know whether
                something is live, past, or coming up. The host controls transitions.
                It removes the friction that kills the energy in most virtual events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Analytics dashboard ──────────────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: "#0f1524" }}>
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
                Post-Event Data
              </p>
              <h2
                className="mt-3 text-[1.75rem] font-bold leading-tight text-white sm:text-[2rem]"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                We can actually see what happened.
              </h2>
              <p className="mt-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                After every Gatherly event, we get a full analytics report: how many
                conversations happened, how long they lasted, where attendees were located,
                how many photos were taken. It tells us whether the event actually worked.
              </p>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                In one Gildre event, Gatherly tracked 9,495 total conversations with a peak
                of 415 concurrent attendees. That's the kind of engagement data that most
                virtual platforms don't surface at all. For a community built on the quality
                of introductions, knowing that number matters.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { value: "9,495", label: "Total conversations" },
                  { value: "415", label: "Peak concurrent" },
                  { value: "104", label: "Group photos taken" },
                  { value: "1:20:06", label: "Avg session time" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl px-5 py-4"
                    style={{ backgroundColor: "rgba(201,169,110,0.05)", border: "1px solid rgba(201,169,110,0.12)" }}
                  >
                    <p className="text-xl font-bold" style={{ color: "#C9A96E", fontFamily: "var(--font-fraunces)" }}>
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.12)" }}>
              <Image
                src="/images/gatherly/analytics.jpg"
                alt="Gatherly event analytics dashboard showing 9,495 conversations and 415 attendees"
                width={720}
                height={480}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Quote / Pull ─────────────────────────────────────────────── */}
      <section className="px-6 py-20" style={{ backgroundColor: "#080e1a" }}>
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="text-5xl mb-6 flex-shrink-0"
            style={{ color: "rgba(201,169,110,0.35)", fontFamily: "Georgia, serif", lineHeight: 1 }}
          >
            &ldquo;
          </div>
          <p
            className="text-[1.2rem] leading-relaxed text-white font-medium"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Most virtual platforms make you feel like you're watching an event. Gatherly makes
            you feel like you're at one. That's the difference between a community and an audience,
            and it's the only reason we partnered with them.
          </p>
          <p className="mt-6 text-sm font-semibold" style={{ color: "#C9A96E" }}>
            Brian Lee, Co-Founder & Managing Partner, Gildre
          </p>
        </div>
      </section>

      {/* ── Dual CTA ─────────────────────────────────────────────────── */}
      <section className="px-6 py-28 text-center" style={{ backgroundColor: "#1C2744" }}>
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 flex items-center justify-center gap-4">
            <Image
              src="/images/gildre-logo.png"
              alt="Gildre"
              width={36}
              height={36}
              className="rounded-lg object-contain bg-white p-0.5"
            />
            <span className="text-lg font-light" style={{ color: "rgba(255,255,255,0.3)" }}>×</span>
            <Image
              src="/images/gatherly/gatherly-logo.png"
              alt="Gatherly"
              width={100}
              height={32}
              className="object-contain"
            />
          </div>
          <h2
            className="text-[2rem] font-bold leading-tight text-white sm:text-[2.5rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Come to a Gildre event. See it for yourself.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            Every Gildre virtual event runs on Gatherly. Apply for membership to join the next
            one, or visit Gatherly directly to run your own.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://tally.so/r/VLERVa"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-9 py-4 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
            >
              Apply for Gildre Membership
            </a>
            <a
              href="https://gatherly.io"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-4 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              Visit Gatherly.io
            </a>
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
