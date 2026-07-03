import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  linkedin: string;
  color: string;
  photo?: string;
};

const team: TeamMember[] = [
  {
    name: "Brian Lee",
    role: "Co-Founder & Managing Partner",
    tagline: "Passionate about helping founders find their footing.",
    bio: "Brian is a 2X exited entrepreneur who has spent the past decade working with bootstrapped and venture-backed companies. He launched his first company in 2015 and has since co-founded multiple 7-figure ARR startups. His most recent role was Head of Product at a global accelerator working with hundreds of Series A-Pre Seed founders across high-growth industries. He currently sits on two advisory boards for organizations including Techstars and Watson Institute where he serves as the Entrepreneur-in-Residence.",
    linkedin: "https://www.linkedin.com/in/brianconnorlee-gildre/",
    color: "#3B6CC9",
    photo: "/team/brian-lee.png",
  },
  {
    name: "Michael J. Frank",
    role: "Co-Founder & Managing Partner",
    tagline: "Believes every founder deserves a seasoned operator in their corner.",
    bio: "Michael is a founder and operator with deep experience building, scaling, and exiting companies in regulated markets. Prior to Gildre he founded Gateway Partners, a market-making and specialist trading firm he led through significant technology and risk transformation before selling to a NASDAQ-listed company. He currently serves as an Advisory Board Member and Independent Director, advising Desync.ai, Silo Markets, and Visionary Philanthropy Group, and mentors MBA students at Baruch College and Columbia Business School.",
    linkedin: "https://www.linkedin.com/in/mikejfrank/",
    color: "#C97B3B",
    photo: "/team/michael-frank.png",
  },
  {
    name: "Taiga Gamell",
    role: "Co-Founder & Managing Partner",
    tagline: "Loves connecting people and building the ecosystems around them.",
    bio: "Taiga was born in Japan and grew up in an entrepreneurial family. He ran a family-owned EdTech platform then went on to co-found and raise funding for a sustainability startup called Kudos. As a GTM and revenue leader, Taiga has led sales teams at multiple product and service-based startups scaling upwards of $20M ARR. Beyond his professional pursuits you can find him hiking, water skiing, or practicing taekwondo.",
    linkedin: "https://www.linkedin.com/in/taigagamell-gildre/",
    color: "#3BC97B",
    photo: "/team/taiga-gamell.jpg",
  },
  {
    name: "Eliana Acosta",
    role: "Community Manager",
    tagline: "Makes every Gildre member feel at home from day one.",
    bio: "Eliana is the Community Manager at Gildre and was born and raised in Bogota, Colombia. She has spent the majority of her career in digital and content marketing, developing high-impact resources for founders and entrepreneurs across the globe. She supports the community's key events by coordinating and curating world-class speakers along with developing programming throughout the year.",
    linkedin: "https://www.linkedin.com/in/eliana-acosta-ni%C3%B1o-gildre-communitymanager/",
    color: "#C93B8E",
    photo: "/team/eliana-acosta.png",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");
}

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        background: "linear-gradient(180deg, #0c1628 0%, #162040 50%, #0c1628 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 py-28">

        {/* Header */}
        <div className="mb-20 text-center">
          <p
            className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]"
            style={{ color: "#C9A96E" }}
          >
            Meet the Team
          </p>
          <h2
            className="mt-3 text-[2rem] font-bold text-white sm:text-[2.6rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            The Founders{" "}
            <span style={{ color: "#C9A96E" }}>Who Built</span> Gildre
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-400">
            We have been in your shoes — raising capital, building teams, and figuring it out on the fly. We created Gildre because we wished it had existed when we needed it most.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {team.map((person, i) => (
            <div
              key={i}
              className="flex flex-col overflow-hidden rounded-3xl"
              style={{
                backgroundColor: "#111e35",
                border: "1px solid rgba(255,255,255,0.07)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.35)",
              }}
            >
              {/* Card body */}
              <div className="flex flex-col items-center px-8 pb-8 pt-10 text-center">
              {/* Photo */}
              <div
                className="relative mb-6 h-44 w-44 flex-shrink-0 overflow-hidden rounded-full"
                style={{
                  border: "2px solid rgba(201,169,110,0.35)",
                  boxShadow: "0 0 0 6px rgba(201,169,110,0.08), 0 8px 32px rgba(0,0,0,0.4)",
                }}
              >
                {person.photo ? (
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    sizes="176px"
                    className="object-cover object-center"
                  />
                ) : (
                  <div
                    className="flex h-full w-full items-center justify-center text-4xl font-bold"
                    style={{ backgroundColor: person.color + "22", color: person.color }}
                  >
                    {initials(person.name)}
                  </div>
                )}
              </div>
                {/* Name */}
                <h3
                  className="text-[1.35rem] font-bold text-white"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {person.name}
                </h3>

                {/* Divider */}
                <div
                  className="my-5 h-px w-10"
                  style={{ backgroundColor: "rgba(201,169,110,0.35)" }}
                />

                {/* Bio */}
                <p className="flex-1 text-sm leading-[1.85] text-zinc-400 text-left">
                  {person.bio}
                </p>

                {/* LinkedIn */}
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold transition-opacity duration-200 hover:opacity-80"
                  style={{
                    backgroundColor: "rgba(201,169,110,0.1)",
                    border: "1px solid rgba(201,169,110,0.3)",
                    color: "#C9A96E",
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
