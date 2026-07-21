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
  // Triple the array so wrapping is invisible — we always stay in the middle copy
  const items = [...members, ...members, ...members];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(initialIndex + n);
  const [paused, setPaused] = useState(false);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const scrollStartLeft = useRef(0);
  const didDrag = useRef(false);
  const isSilentJump = useRef(false);

  // Pixel offset so the given card is centered in the scroll container
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

  // Normalize any absolute index to the middle copy [n, 2n)
  function toMiddle(index: number): number {
    return ((index % n) + n) % n + n;
  }

  // On mount: instantly center the initial card (Fritz = index 0 in middle copy)
  useEffect(() => {
    requestAnimationFrame(() => {
      instantScrollTo(initialIndex + n);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((prev) => {
        const next = prev + 1;
        if (next >= 2 * n) {
          // About to enter the 3rd copy — silently jump to the middle copy's
          // equivalent position, then smooth-scroll forward from there.
          const middlePrev = prev - n;
          isSilentJump.current = true;
          instantScrollTo(middlePrev);
          requestAnimationFrame(() => {
            isSilentJump.current = false;
            smoothScrollTo(middlePrev + 1);
          });
          return middlePrev + 1; // = n (first card of middle copy)
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
    // Silently jump back to middle copy if user scrolled into an outer copy
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
    <section className="py-12 sm:py-20" style={{ backgroundColor: "#F5F0E8" }}>
      {/* Heading */}
      <div className="px-6 text-center">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#C9A96E]">
          Meet Your Peers
        </p>
        <h2
          className="mt-3 text-[2rem] font-bold text-[#1C2744] sm:text-[2.5rem]"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Build alongside founders solving the same<br />
          problems as you, at your stage.
        </h2>
      </div>

      {/* Carousel — tripled array for seamless infinite loop */}
      <div
        ref={scrollRef}
        className="no-scrollbar mt-12 flex gap-5 overflow-x-auto px-6 pb-2 select-none cursor-grab active:cursor-grabbing"
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
              className="flex w-[min(80vw,300px)] flex-shrink-0 cursor-pointer flex-col items-center rounded-2xl border border-[#e8e0d0] bg-white p-7 text-center transition-all duration-300"
              style={{
                scrollSnapAlign: "center",
                opacity: isActive ? 1 : 0.6,
                transform: isActive ? "scale(1.02)" : "scale(0.97)",
                boxShadow: isActive ? "0 8px 32px rgba(28,39,68,0.10)" : "none",
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
          );
        })}
      </div>

      {/* Dots — always reflect position in original members array */}
      <div className="mt-6 flex justify-center gap-2 px-6">
        {members.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i + n)}
            className="h-2 rounded-full transition-all duration-300"
            style={{
              width: realActive === i ? "1.5rem" : "0.5rem",
              backgroundColor: realActive === i ? "#C9A96E" : "rgba(28,39,68,0.18)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
