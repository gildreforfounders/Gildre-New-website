const members = [
  { company: "HUPR",               role: "Co-Founder & CEO",      serif: true,  italic: false },
  { company: "Boop.VIP",           role: "Founder & CEO",          serif: false, italic: false },
  { company: "Cerené",             role: "Founder & CEO",          serif: true,  italic: true  },
  { company: "AGI Beacon",         role: "Founder & CEO",          serif: false, italic: false },
  { company: "Clipsense.ai",       role: "Founder & CEO",          serif: false, italic: false },
  { company: "SOLVEE",             role: "Founder & CEO",          serif: true,  italic: false },
  { company: "Rodo",               role: "Founder & CEO",          serif: true,  italic: false },
  { company: "Topline",            role: "Co-Founder & CEO",       serif: false, italic: false },
  { company: "Kade Keyo",          role: "Co-Founder & CEO",       serif: true,  italic: true  },
  { company: "Remote Vans",        role: "Founder & CMO",          serif: false, italic: false },
  { company: "Cardo English",      role: "Founder & CEO",          serif: true,  italic: false },
  { company: "Roamli",             role: "Co-Founder",             serif: false, italic: false },
  { company: "Threadable",         role: "Co-Founder & COO",       serif: true,  italic: true  },
  { company: "Ensyx Systems",      role: "Founder & President",    serif: false, italic: false },
  { company: "Palombini Coaching", role: "Founder & CEO",          serif: true,  italic: false },
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
              <div key={m.company} className="flex flex-col gap-1.5">
                <span
                  className="text-base font-bold text-white"
                  style={{
                    fontFamily: m.serif ? "var(--font-fraunces)" : "var(--font-geist-sans)",
                    fontStyle: m.italic ? "italic" : "normal",
                  }}
                >
                  {m.company}
                </span>
                <span
                  className="text-[0.6rem] font-semibold uppercase tracking-widest"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  {m.role}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
