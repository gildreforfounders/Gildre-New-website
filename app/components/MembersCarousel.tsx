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

export default function MembersCarousel({
  members,
  initialIndex = 0,
}: {
  members: Member[];
  initialIndex?: number;
}) {
  const n = members.length;
  const items = [...members, ...members, ...members];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(initialIndex + n);
  const [paused, setPaused] = useState(false);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const scrollStartLeft = useRef(0);
  const didDrag = useRef(false);
  const isSilentJump = useRef(false);

  const getLeft = useCallback((index: number): number => {
    const el = scrollRef.current;
    if (!el) return 0;
    const card = el.children[index] as HTMLElement;
    if (!card) return 0;
    return card.offsetLeft - (el.clientWidth - card.clientWidth) / 2;
  }, []);

  const smoothScrollTo = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: getLeft(index), behavior: "smooth" });
  }, [getLeft]);

  const instantScrollTo = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft = getLeft(index);
  }, [getLeft]);

  function toMiddle(index: number): number {
    return ((index % n) + n) % n + n;
  }

  useEffect(() => {
    requestAnimationFrame(() => {
      instantScrollTo(initialIndex + n);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((prev) => {
        const next = prev + 1;
        if (next >= 2 * n) {
          const middlePrev = prev - n;
          isSilentJump.current = true;
          instantScrollTo(middlePrev);
          requestAnimationFrame(() => {
            isSilentJump.current = false;
            smoothScrollTo(middlePrev + 1);
          });
          return middlePrev + 1;
        }
        smoothScrollTo(next);
        return next;
      });
    }, 3500);
    return () => clearInterval(id);
  }, [paused, smoothScrollTo, instantScrollTo, n]);

  function goTo(index: number) {
    const target = toMiddle(index);
    setActive(target);
    smoothScrollTo(target);
    setPaused(true);
  }

  function getActiveFromScroll(): number {
    const el = scrollRef.current;
    if (!el) return active;
    const center = el.scrollLeft + el.clientWidth / 2;
    let closest = 0;
    let closestDist = Infinity;
    Array.from(el.children).forEach((child, idx) => {
      const c = child as HTMLElement;
      const dist = Math.abs(c.offsetLeft + c.clientWidth / 2 - center);
      if (dist < closestDist) { closestDist = dist; closest = idx; }
    });
    return closest;
  }

  function handleScroll() {
    if (isSilentJump.current) return;
    const found = getActiveFromScroll();
    setActive(found);
    if (found < n || found >= 2 * n) {
      const mid = toMiddle(found);
      isSilentJump.current = true;
      instantScrollTo(mid);
      setActive(mid);
      requestAnimationFrame(() => { isSilentJump.current = false; });
    }
  }

  function handleMouseDown(e: React.MouseEvent) {
    isDragging.current = true;
    didDrag.current = false;
    dragStartX.current = e.pageX;
    scrollStartLeft.current = scrollRef.current?.scrollLeft ?? 0;
    setPaused(true);
  }

  function handleMouseMove(e: React.MouseEvent) {
    if (!isDragging.current || !scrollRef.current) return;
    const delta = e.pageX - dragStartX.current;
    if (Math.abs(delta) > 4) didDrag.current = true;
    scrollRef.current.scrollLeft = scrollStartLeft.current - delta;
  }

  function handleMouseUp() {
    if (!isDragging.current) return;
    isDragging.current = false;
    const found = getActiveFromScroll();
    const mid = toMiddle(found);
    if (found !== mid) {
      isSilentJump.current = true;
      instantScrollTo(mid);
      setActive(mid);
      requestAnimationFrame(() => { isSilentJump.current = false; });
    } else {
      setActive(found);
    }
  }

  const realActive = ((active - n) % n + n) % n;

  return (
    <section className="py-12 sm:py-20" style={{ backgroundColor: "#1C2744" }}>
      {/* Heading */}
      <div className="px-6 text-center">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
          Meet Your Peers
        </p>
        <h2
          className="mt-3 text-[2rem] font-bold text-white sm:text-[2.5rem]"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Build alongside founders solving the same problems as you, at your stage.
        </h2>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="no-scrollbar mt-10 flex gap-5 overflow-x-auto px-6 pb-2 select-none cursor-grab active:cursor-grabbing"
        style={{ scrollSnapType: "x mandatory" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => { handleMouseUp(); setPaused(false); }}
        onMouseEnter={() => setPaused(true)}
        onScroll={handleScroll}
      >
        {items.map((member, i) => {
          const isActive = i === active;
          return (
            <div
              key={`${member.name}-${i}`}
              onClick={() => { if (!didDrag.current) goTo(i); }}
              className="flex w-[min(80vw,300px)] flex-shrink-0 cursor-pointer flex-col items-center rounded-2xl p-6 text-center transition-all duration-300"
              style={{
                scrollSnapAlign: "center",
                backgroundColor: isActive ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.03)",
                border: isActive
                  ? "1px solid rgba(201,169,110,0.35)"
                  : "1px solid rgba(255,255,255,0.07)",
                opacity: isActive ? 1 : 0.55,
                transform: isActive ? "scale(1.02)" : "scale(0.97)",
                boxShadow: isActive
                  ? "0 8px 32px rgba(0,0,0,0.4), 0 0 20px rgba(201,169,110,0.08)"
                  : "none",
                pointerEvents: isDragging.current ? "none" : "auto",
              }}
            >
              <div className="relative h-24 w-24 overflow-hidden rounded-full ring-2 ring-[#C9A96E]/30">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="96px"
                  className="object-cover"
                  draggable={false}
                />
              </div>
              <h3
                className="mt-4 text-base font-bold text-white"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                {member.name}
              </h3>
              <p className="mt-0.5 text-xs font-medium text-zinc-500">
                {member.title}
                {member.company ? ` · ${member.company}` : ""}
              </p>
              <div className="my-4 h-px w-12" style={{ backgroundColor: "rgba(201,169,110,0.3)" }} />
              <p className="text-sm leading-relaxed text-zinc-400">{member.bio}</p>
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2 px-6">
        {members.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i + n)}
            className="h-2 rounded-full transition-all duration-300"
            style={{
              width: realActive === i ? "1.5rem" : "0.5rem",
              backgroundColor: realActive === i ? "#C9A96E" : "rgba(255,255,255,0.2)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
