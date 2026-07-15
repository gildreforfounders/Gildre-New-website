const members = [
  { company: "Clockout",      role: "Founder & CEO",      serif: false, italic: false, href: "https://clockoutapp.com/" },
  { company: "Silo Markets",  role: "Co-Founder & CEO",   serif: true,  italic: false, href: "https://www.silomarkets.com/" },
  { company: "Nexus",         role: "Founder & CEO",      serif: true,  italic: false, href: "https://www.nexus.app/" },
  { company: "Bubbl",         role: "Co-Founder",         serif: false, italic: false, href: "https://bubblai.com/" },
  { company: "Clipsense",     role: "Founder & CEO",      serif: false, italic: false, href: "https://www.clipsense.ai/" },
  { company: "Avistar",       role: "Co-Founder & CEO",   serif: true,  italic: false, href: "https://avistar.ai/" },
  { company: "Inciteful",     role: "Founder",            serif: false, italic: false, href: "https://www.incitefulapp.com/" },
  { company: "Vault",         role: "Co-Founder & CEO",   serif: true,  italic: false, href: "https://usevault.app/" },
  { company: "Clausey",       role: "Founder & CEO",      serif: false, italic: false, href: "https://clausey.ai/" },
  { company: "Opulentia",     role: "Founder",            serif: true,  italic: true,  href: "https://www.opulentia.net/" },
  { company: "ReWorked",      role: "Co-Founder",         serif: false, italic: false, href: null },
  { company: "Celeria",       role: "Founder & CEO",      serif: true,  italic: false, href: "https://celeria.ai/" },
  { company: "Forum Media",   role: "Co-Founder & CEO",   serif: false, italic: false, href: null },
  { company: "Featurely",     role: "Founder & CEO",      serif: false, italic: false, href: null },
  { company: "PromptHalo",    role: "Founder",            serif: true,  italic: false, href: "https://prompthalo.ai/" },
];

export default function MemberCompanies() {
  return (
    <section className="px-6 py-20" style={{ backgroundColor: "#0f1524" }}>
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">

          {/* Left label */}
          <div className="flex-shrink-0 lg:w-56">
            <p
              className="text-[0.65rem] font-bold uppercase tracking-[0.2em]"
              style={{ color: "#C9A96E" }}
            >
              Gildre Community:
            </p>
            <p
              className="mt-4 text-[1.35rem] font-semibold leading-snug text-white"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Companies our members are building
            </p>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
              Founders across every industry — from fintech and healthcare to consumer and B2B SaaS.
            </p>
          </div>

          {/* Right grid */}
          <div className="grid flex-1 grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
            {members.map((m) => {
              const nameStyle = {
                fontFamily: m.serif ? "var(--font-fraunces)" : "var(--font-geist-sans)",
                fontStyle: m.italic ? "italic" : "normal",
              };
              return (
                <div key={m.company} className="flex flex-col gap-1.5">
                  {m.href ? (
                    <a
                      href={m.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-white transition-colors hover:text-[#C9A96E]"
                      style={nameStyle}
                    >
                      {m.company}
                    </a>
                  ) : (
                    <span className="text-base font-bold text-white" style={nameStyle}>
                      {m.company}
                    </span>
                  )}
                  <span
                    className="text-[0.6rem] font-semibold uppercase tracking-widest"
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  >
                    {m.role}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
