"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: 250, suffix: "+", label: "Active Members" },
  { value: 50, suffix: "+", label: "Members with Exits" },
  { value: 5, prefix: "$", suffix: "M+", label: "Partner Perks" },
  { value: 15, suffix: "+", label: "Cities" },
  { value: 100, suffix: "+", label: "Annual Events" },
  { value: 500, suffix: "+", label: "Partner Network" },
];

function CountUp({
  target,
  prefix = "",
  suffix = "",
}: {
  target: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const totalFrames = Math.round((duration / 1000) * 60);
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (frame >= totalFrames) {
        setCount(target);
        clearInterval(timer);
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function StatsBlock() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#0f1524" }}>
      <div className="mx-auto max-w-5xl">

        {/* Featured 95% stat */}
        <div
          className="mb-16 flex flex-col items-center gap-3 rounded-2xl px-8 py-10 text-center sm:flex-row sm:text-left sm:gap-10"
          style={{
            background: "linear-gradient(135deg, rgba(201,169,110,0.1) 0%, rgba(201,169,110,0.04) 100%)",
            border: "1px solid rgba(201,169,110,0.25)",
          }}
        >
          <span
            className="flex-shrink-0 text-5xl font-bold sm:text-6xl"
            style={{ fontFamily: "var(--font-fraunces)", color: "#C9A96E" }}
          >
            <CountUp target={95} suffix="%" />
          </span>
          <div>
            <p className="text-2xl font-bold text-white sm:text-3xl" style={{ fontFamily: "var(--font-fraunces)" }}>
              Member Retention & Satisfaction
            </p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Gildre member retention & satisfaction score over the past 24 months within the community.
            </p>
          </div>
        </div>

        {/* Main stats grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-14 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <span
                className="text-6xl font-bold text-white sm:text-7xl"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                <CountUp target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </span>
              <span className="mt-3 text-xs font-medium uppercase tracking-widest text-zinc-400">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
