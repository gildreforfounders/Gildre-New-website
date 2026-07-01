type Val = true | false | "partial";

const competitors = [
  { label: "Gildre", isUs: true },
  { label: "Tribe", isUs: false },
  { label: "Founders Club", isUs: false },
  { label: "Hampton", isUs: false },
  { label: "YPO", isUs: false },
  { label: "EO", isUs: false },
];

const rows: { feature: string; vals: Val[] }[] = [
  {
    feature: "For Early-Stage Founders",
    vals: [true, true, "partial", false, false, false],
  },
  {
    feature: "Personalized 1:1 Member Matching",
    vals: [true, "partial", "partial", false, false, false],
  },
  {
    feature: "Members Are Exited Founders",
    vals: [true, false, false, false, false, false],
  },
  {
    feature: "Under $5,000 / Year",
    vals: [true, true, "partial", false, false, false],
  },
  {
    feature: "Virtual + In-Person Events",
    vals: [true, "partial", true, true, true, true],
  },
  {
    feature: "$5M+ in Partner Perks & Deals",
    vals: [true, false, false, "partial", false, false],
  },
  {
    feature: "Stage-Specific Programming",
    vals: [true, false, false, false, false, false],
  },
  {
    feature: "Investor Directory Access",
    vals: [true, false, "partial", true, true, false],
  },
  {
    feature: "Private Community Platform",
    vals: [true, "partial", true, true, true, true],
  },
  {
    feature: "Innovation Roundtables",
    vals: [true, false, false, true, true, true],
  },
];

function CheckIcon({ val, isUs }: { val: Val; isUs: boolean }) {
  if (val === false) return <span className="block h-7 w-7" />;

  const filled = val === true && isUs;

  return (
    <span
      className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
      style={
        filled
          ? { backgroundColor: "#C9A96E" }
          : { border: "1.5px solid rgba(201,169,110,0.55)" }
      }
    >
      <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
        <path
          d="M1 4.5L3.8 7.5L10 1"
          stroke={filled ? "#1C2744" : "rgba(201,169,110,0.7)"}
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function ComparisonTable() {
  return (
    <section className="px-6 py-20" style={{ backgroundColor: "#0f1524" }}>
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
          Why Gildre
        </p>
        <h2
          className="mt-3 text-center text-[2rem] font-bold text-white sm:text-[2.5rem]"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          See How We Stack Up
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
          Built specifically for early-stage founders — not executives with $5M+ in revenue.
        </p>

        {/* Table wrapper — scrollable on mobile */}
        <div className="mt-10 overflow-x-auto rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
          <table className="w-full min-w-[640px] border-collapse text-sm">
            {/* Header */}
            <thead>
              <tr
                style={{
                  background: "linear-gradient(to bottom, rgba(201,169,110,0.18) 0%, rgba(201,169,110,0.04) 100%)",
                }}
              >
                {/* Empty corner */}
                <th className="w-[38%] px-6 py-5 text-left" />

                {competitors.map((c) => (
                  <th
                    key={c.label}
                    className="px-3 py-5 text-center"
                    style={{
                      borderLeft: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {c.isUs ? (
                      <span
                        className="text-2xl font-semibold text-white"
                        style={{ fontFamily: "var(--font-fraunces)" }}
                      >
                        {c.label}
                      </span>
                    ) : (
                      <span className="text-sm font-semibold text-white/60">
                        {c.label}
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Rows */}
            <tbody>
              {rows.map((row, ri) => (
                <tr
                  key={row.feature}
                  style={{
                    backgroundColor:
                      ri % 2 === 0
                        ? "rgba(255,255,255,0.025)"
                        : "transparent",
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <td className="px-6 py-4 font-medium" style={{ color: "rgba(255,255,255,0.82)" }}>
                    {row.feature}
                  </td>

                  {competitors.map((c, ci) => (
                    <td
                      key={c.label}
                      className="px-3 py-4 text-center"
                      style={{ borderLeft: "1px solid rgba(255,255,255,0.05)" }}
                    >
                      <CheckIcon val={row.vals[ci]} isUs={c.isUs} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
