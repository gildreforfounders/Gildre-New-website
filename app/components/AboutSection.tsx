const team = [
  {
    name: "Brian Lee",
    role: "Co-Founder & CEO",
    bio: "Brian is a 2X exited entrepreneur who has spent the past decade working with bootstrapped and venture-backed companies. He launched his first company in 2015 and has since co-founded multiple 7-figure ARR startups. His most recent role was Head of Product at a global accelerator working with hundreds of Series A-Pre Seed founders across high-growth industries. He currently sits on two advisory boards and mentors for organizations including Techstars and Watson Institute where he serves as the Entrepreneur-in-Residence.",
    linkedin: "https://www.linkedin.com/in/brianleenyc/",
    gradient: ["#1C3A6E", "#2A5298"],
  },
  {
    name: "Michael J. Frank",
    role: "Co-Founder & Managing Partner",
    bio: "Michael is a founder and operator with deep experience building, scaling, and exiting companies in regulated markets. Prior to Gildre he founded Gateway Partners, a market-making and specialist trading firm he led through significant technology and risk transformation before selling to a NASDAQ-listed company. He currently serves as an Advisory Board Member and Independent Director, advising Desync.ai, Silo Markets, Visionary Philanthropy Group, and Ziggurat Technology among mentoring MBA students at Baruch College and Columbia Business School.",
    linkedin: "https://www.linkedin.com/in/michaeljfrank/",
    gradient: ["#2C1810", "#8B4513"],
  },
  {
    name: "Taiga Gamell",
    role: "Co-Founder & Head of Growth",
    bio: "Taiga was born in Japan and grew up in an entrepreneurial family. He ran a family-owned EdTech platform then went on to co-found and raise funding for a sustainability startup called Kudos. As a GTM and revenue leader, Taiga has led sales teams at multiple product and service-based startups scaling upwards of $20M ARR. Beyond his professional pursuits you can find him hiking, water skiing, or practicing taekwondo.",
    linkedin: "https://www.linkedin.com/in/taigagamell/",
    gradient: ["#0D2B1E", "#1A5C3A"],
  },
  {
    name: "Eliana Acosta",
    role: "Community Manager",
    bio: "Eliana is the Community Manager at Gildre and was born and raised in Bogota, Colombia. She's spent the majority of her career in digital/content marketing, developing high-impact resources for founders and entrepreneurs across the globe. She supports the communities' key events by coordinating and curating world-class speakers along with developing programming throughout the year.",
    linkedin: "https://www.linkedin.com/in/elianaacosta/",
    gradient: ["#2D0D3D", "#7B2D8B"],
  },
];

function initials(name: string) {
  return name.split(" ").slice(0, 2).map((n) => n[0]).join("");
}

export default function AboutSection() {
  return (
    <section id="about" style={{ backgroundColor: "#080e1a" }}>
      <div className="mx-auto max-w-6xl px-6 py-24">

        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            The People Behind Gildre
          </p>
          <h2
            className="mt-3 text-[2rem] font-bold text-white sm:text-[2.6rem]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Built by{" "}
            <span style={{ color: "#C9A96E" }}>Founders</span>
            {", "}for Founders
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-500">
            We have been in your shoes — raising capital, scaling teams, navigating uncertainty. Gildre was built from that lived experience.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {team.map((person, i) => (
            <div
              key={i}
              className="group relative flex flex-col overflow-hidden rounded-2xl p-8"
              style={{
                backgroundColor: "#0d1424",
                border: "1px solid rgba(201,169,110,0.12)",
              }}
            >
              {/* Gold top accent */}
              <div
                className="absolute left-0 top-0 h-[3px] w-full rounded-t-2xl"
                style={{ background: "linear-gradient(90deg, #C9A96E 0%, rgba(201,169,110,0.3) 100%)" }}
              />

              {/* Avatar + Name row */}
              <div className="flex items-center gap-5 mb-6">
                <div
                  className="flex h-[72px] w-[72px] flex-shrink-0 items-center justify-center rounded-full text-xl font-bold text-white"
                  style={{
                    background: `linear-gradient(135deg, ${person.gradient[0]}, ${person.gradient[1]})`,
                    boxShadow: "0 0 0 3px rgba(201,169,110,0.25)",
                  }}
                >
                  {initials(person.name)}
                </div>
                <div>
                  <h3
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    {person.name}
                  </h3>
                  <p
                    className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em]"
                    style={{ color: "#C9A96E" }}
                  >
                    {person.role}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div
                className="mb-6 h-px w-full"
                style={{ background: "rgba(201,169,110,0.12)" }}
              />

              {/* Bio */}
              <p className="flex-1 text-sm leading-[1.8] text-zinc-400">
                {person.bio}
              </p>

              {/* LinkedIn */}
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 self-start rounded-lg px-4 py-2 text-xs font-semibold transition-all duration-200"
                style={{
                  backgroundColor: "rgba(201,169,110,0.08)",
                  border: "1px solid rgba(201,169,110,0.2)",
                  color: "#C9A96E",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(201,169,110,0.16)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.5)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(201,169,110,0.08)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.2)";
                }}
              >
                {/* LinkedIn icon */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
