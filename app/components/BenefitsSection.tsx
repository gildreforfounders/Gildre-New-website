import Image from "next/image";

type PhotoCard = {
  kind: "photo";
  src: string;
  title: string;
  sub?: string;
};

type TextCard = {
  kind: "text";
  stat: string;
  body: string;
};

type Card = PhotoCard | TextCard;

const row1: Card[] = [
  {
    kind: "photo",
    src: "/images/community/mentor-match.webp",
    title: "Results-Driven Mentor Matches",
    sub: "Personalized 1:1 mentorship pairing with a subject matter expert in your field, geared towards accelerating professional growth and achieving measurable outcomes.",
  },
  {
    kind: "photo",
    src: "/images/community/connections.jpg",
    title: "Meaningful Connections",
    sub: "Genuine connections designed to facilitate long-lasting relationships. This isn't a one-and-done. Meet, develop, and build with others in the Gildre community.",
  },
  {
    kind: "photo",
    src: "/images/community/community-group.webp",
    title: "Engaging Community",
    sub: "Access to a highly engaged community of entrepreneurs, mentors, and industry experts. With weekly AMAs, newsletters, and unique content just for you.",
  },
];

const row2: Card[] = [
  {
    kind: "photo",
    src: "/images/community/workshops.webp",
    title: "Workshops & Events",
    sub: "Curated virtual and in-person events including Executive Workshops, Innovation Roundtables, Founder Fireside Chats, and intimate dinners — all bridging connections across the globe.",
  },
  {
    kind: "photo",
    src: "/images/community/coaching.webp",
    title: "Coaching & Education",
    sub: "Our mentors have decades of professional experience. You'll receive access to business blueprints, practical tools, a vast library of fundraising resources, and expert-led sessions across every industry.",
  },
  {
    kind: "photo",
    src: "/images/community/partnerships.webp",
    title: "Partnerships & Perks",
    sub: "500+ partners and $5M+ in exclusive tools and perks to accelerate your growth, whether you're launching a business or advancing your career.",
  },
];

function PhotoCardEl({ card }: { card: PhotoCard }) {
  return (
    <div className="flip-card h-[400px] rounded-2xl">
      <div className="flip-card-inner rounded-2xl">

        {/* Front — photo */}
        <div className="flip-card-front">
          <Image
            src={card.src}
            alt={card.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 55%, transparent 100%)",
            }}
          />
          <div className="absolute bottom-0 left-0 p-6">
            <div className="mb-2 h-5 w-[2px] rounded-full" style={{ backgroundColor: "#C9A96E" }} />
            <h3
              className="text-xl font-semibold leading-snug text-white"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              {card.title}
            </h3>
          </div>
        </div>

        {/* Back — navy with text */}
        <div
          className="flip-card-back flex flex-col justify-center p-8"
          style={{
            background: "linear-gradient(135deg, #1C2744 0%, #0f1a2e 100%)",
            border: "1px solid rgba(201,169,110,0.2)",
          }}
        >
          <div className="mb-5 h-[2px] w-10 rounded-full" style={{ backgroundColor: "#C9A96E" }} />
          <h3
            className="text-2xl font-bold leading-snug text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            {card.title}
          </h3>
          {card.sub && (
            <p className="mt-4 text-sm leading-[1.9] text-white/70">
              {card.sub}
            </p>
          )}
        </div>

      </div>
    </div>
  );
}

function TextCardEl({ card }: { card: TextCard }) {
  return (
    <div
      className="relative flex h-[400px] flex-col justify-end overflow-hidden rounded-2xl p-8"
      style={{
        backgroundColor: "#0a1020",
        border: "1px solid rgba(201,169,110,0.15)",
      }}
    >
      {/* Subtle gold glow */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-bl-full opacity-20"
        style={{
          background:
            "radial-gradient(circle at top right, #C9A96E 0%, transparent 70%)",
        }}
      />
      <div
        className="mb-3 h-[2px] w-8 rounded-full"
        style={{ backgroundColor: "#C9A96E" }}
      />
      <h3
        className="text-[2rem] font-bold leading-tight text-white"
        style={{ fontFamily: "var(--font-fraunces)" }}
      >
        {card.stat}
      </h3>
      <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
        {card.body}
      </p>
    </div>
  );
}

function CardEl({ card }: { card: Card }) {
  if (card.kind === "photo") return <PhotoCardEl card={card} />;
  return <TextCardEl card={card} />;
}

export default function BenefitsSection() {
  return (
    <section id="benefits" className="px-6 py-20" style={{ backgroundColor: "#1C2744" }}>
      <div className="mx-auto max-w-6xl">
        {/* Heading — left-aligned, editorial style */}
        <h2
          className="mb-10 text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-tight"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          <span className="text-white">Your Growth </span>
          <span style={{ color: "#C9A96E" }}>Operating System</span>
        </h2>

        {/* Row 1 */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {row1.map((card, i) => (
            <CardEl key={i} card={card} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {row2.map((card, i) => (
            <CardEl key={i} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
