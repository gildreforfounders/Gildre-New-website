const members = [
  { company: "Clockout",      serif: false, italic: false },
  { company: "Silo Markets",  serif: true,  italic: false },
  { company: "Nexus",         serif: true,  italic: false },
  { company: "Bubbl",         serif: false, italic: false },
  { company: "Clipsense",     serif: false, italic: false },
  { company: "Avistar",       serif: true,  italic: false },
  { company: "Inciteful",     serif: false, italic: false },
  { company: "Vault",         serif: true,  italic: false },
  { company: "Clausey",       serif: false, italic: false },
  { company: "Opulentia",     serif: true,  italic: true  },
  { company: "ReWorked",      serif: false, italic: false },
  { company: "Celeria",       serif: true,  italic: false },
  { company: "Forum Media",   serif: false, italic: false },
  { company: "Featurely",     serif: false, italic: false },
  { company: "PromptHalo",    serif: true,  italic: false },
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
            {members.map((m) => (
              <div key={m.company} className="flex flex-col">
                <span
                  className="text-base font-bold text-white"
                  style={{
                    fontFamily: m.serif ? "var(--font-fraunces)" : "var(--font-geist-sans)",
                    fontStyle: m.italic ? "italic" : "normal",
                  }}
                >
                  {m.company}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
