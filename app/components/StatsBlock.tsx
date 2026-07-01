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
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-8 gap-y-14 md:grid-cols-3">
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
    </section>
  );
}
