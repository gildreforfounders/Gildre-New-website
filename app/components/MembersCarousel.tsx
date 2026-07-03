"use client";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";

type Member = {
  name: string;
  title: string;
  company?: string;
  bio: string;
  photo: string;
};

export default function MembersCarousel({ members }: { members: Member[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const scrollTo = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement;
    if (!card) return;
    const targetLeft = card.offsetLeft - (el.clientWidth - card.clientWidth) / 2;
    el.scrollTo({ left: targetLeft, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % members.length;
        scrollTo(next);
        return next;
      });
    }, 3500);
    return () => clearInterval(id);
  }, [paused, scrollTo, members.length]);

  function goTo(i: number) {
    setActive(i);
    scrollTo(i);
    setPaused(true);
  }

  return (
    <section className="py-20" style={{ backgroundColor: "#F5F0E8" }}>
      {/* Heading */}
      <div className="px-6 text-center">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#C9A96E]">
          Your Members
        </p>
        <h2
          className="mt-3 text-[2rem] font-bold text-[#1C2744] sm:text-[2.5rem]"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Founders &amp; Operators in Your Corner
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-500">
          Build alongside founders solving the same problems as you, at your stage.
        </p>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="no-scrollbar mt-12 flex gap-5 overflow-x-auto px-6 pb-2"
        style={{ scrollSnapType: "x mandatory" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {members.map((member, i) => (
          <div
            key={member.name}
            onClick={() => goTo(i)}
            className="flex w-[min(80vw,300px)] flex-shrink-0 cursor-pointer flex-col items-center rounded-2xl border border-[#e8e0d0] bg-white p-7 text-center transition-all duration-300"
            style={{
              scrollSnapAlign: "center",
              opacity: active === i ? 1 : 0.6,
              transform: active === i ? "scale(1.02)" : "scale(0.97)",
              boxShadow: active === i ? "0 8px 32px rgba(28,39,68,0.10)" : "none",
            }}
          >
            <div className="relative h-24 w-24 overflow-hidden rounded-full ring-2 ring-[#C9A96E]/30">
              <Image
                src={member.photo}
                alt={member.name}
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
            <h3
              className="mt-4 text-base font-bold text-[#1C2744]"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              {member.name}
            </h3>
            <p className="mt-0.5 text-xs font-medium text-zinc-400">
              {member.title}
              {member.company ? ` · ${member.company}` : ""}
            </p>
            <div className="my-4 h-px w-12" style={{ backgroundColor: "rgba(201,169,110,0.35)" }} />
            <p className="text-sm leading-relaxed text-zinc-500">{member.bio}</p>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2 px-6">
        {members.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="h-2 rounded-full transition-all duration-300"
            style={{
              width: active === i ? "1.5rem" : "0.5rem",
              backgroundColor: active === i ? "#C9A96E" : "rgba(28,39,68,0.18)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
