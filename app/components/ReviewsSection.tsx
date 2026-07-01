"use client";
import { useRef, useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    quote: "Being in Gildre feels like having founder co-workers that actually get it. They've saved me hours of research just by sharing what's worked for them.",
    name: "Caitlin Van Berkel",
    title: "Founder",
    company: "Silver Lining Career Coach",
  },
  {
    quote: "This is the first membership where I truly feel like I'm getting what I paid for. The value and time the Gildre team spends with us on our business is remarkable.",
    name: "Iliana Alvarado",
    title: "President",
    company: "Ensyx Systems",
  },
  {
    quote: "Gildre continues to introduce me to an amazing, growing network of people that helped our company partner with and reach different sponsors. The in-person events are genuine and you get to connect with the real people behind unique companies.",
    name: "Dan Hernandez",
    title: "Co-Founder",
    company: "HUPR",
  },
  {
    quote: "The resources offered at Gildre are exceptionally beneficial for entrepreneurs and professionals, providing crucial tools and insights from seasoned mentors across countless industries.",
    name: "Horacio Rilo",
    title: "Founder",
    company: "Boop.VIP",
  },
  {
    quote: "I wanted to surround myself with others going through similar growth and challenges. Gildre gives me exactly that, a community where I can both give and gain exceptional value.",
    name: "Elise Madrick",
    title: "Founder",
    company: "Cerené",
  },
  {
    quote: "Gildre was instrumental when I was first starting my company and needed to meet other business owners who understood the same challenges.",
    name: "Connor Fitzgerald",
    title: "Founder",
    company: "AGI Beacon",
  },
  {
    quote: "The structure at Gildre is impressive, it's truly a space where founders challenge each other and mentorship isn't abstract.",
    name: "Christof Mannfeld",
    title: "Founder",
    company: "SOLVEE",
  },
  {
    quote: "Joining Gildre was the best decision I made since starting my practice in 2016. Having mentors makes things smoother, and the path more enjoyable as well. At each encounter I got better ideas that improved my offering.",
    name: "Carol Palombini",
    title: "Founder",
    company: "Palombini Coaching",
  },
  {
    quote: "Since we joined Gildre we've started to see measurable consistency in new customers. Inbound interest continues to grow which has helped create momentum.",
    name: "Alejandro Sandoval",
    title: "Founder",
    company: "Rodo",
  },
  {
    quote: "Joining Gildre has been a thrilling experience with vibrant and intelligent members across the globe. There are so many resources and advisors ready to lend an ear and guiding hand.",
    name: "Yara Schilling",
    title: "Director of Talent & Development",
    company: "MoveOn",
  },
  {
    quote: "Gildre connected me with founders who had the SaaS and entrepreneurship experience I needed, so I wasn't walking that road alone.",
    name: "Gavin Buckland",
    title: "Founder",
    company: "Clipsense.ai",
  },
  {
    quote: "For founders in my network, Gildre is a rare community that consistently adds value, and I highly recommend checking them out!",
    name: "Chris Riklin",
    title: "Co-Founder",
    company: "Topline",
  },
  {
    quote: "Since joining Gildre I've been able to receive great advice, find supportive friends, and solve pressing problems across a network of amazing individuals. If you're looking for an active and engaged community home, you'll find it here.",
    name: "Tanho Attah",
    title: "Co-Founder",
    company: "Kade Keyo",
  },
  {
    quote: "Gildre is a thriving community of motivated, high-performing individuals who share knowledge, resources, and insights for those navigating the challenging world of startups.",
    name: "Robyn Hobson",
    title: "Chief Marketing Officer",
    company: "Remote Vans",
  },
  {
    quote: "The value of this community is the diverse voices on the platform. Each member is curious, genuine, engaging, and always open to a conversation.",
    name: "William Luck",
    title: "Founder",
    company: "Cardo English",
  },
];

const avatarColors = [
  "#7C6F57","#5B7FA6","#6B8A6F","#8A5B6F","#7A6B8A",
  "#6F8A7A","#8A7A5B","#5B6F8A","#8A6B5B","#6F7A8A",
  "#8A8A5B","#5B8A7A","#7A5B8A","#6B7A5B","#8A5B7A",
];

function initials(name: string) {
  return name.split(" ").slice(0, 2).map((n) => n[0]).join("");
}

export default function ReviewsSection() {
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
        const next = (prev + 1) % testimonials.length;
        scrollTo(next);
        return next;
      });
    }, 4000);
    return () => clearInterval(id);
  }, [paused, scrollTo]);

  function goTo(i: number) {
    setActive(i);
    scrollTo(i);
    setPaused(true);
  }

  return (
    <section className="py-20" style={{ backgroundColor: "#0f1524" }}>
      <div className="px-6 text-center">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#C9A96E]">
          Real Founders. Real Results.
        </p>
        <h2
          className="mt-3 text-[2rem] font-bold text-white sm:text-[2.5rem]"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          What Our Members <span style={{ color: "#C9A96E" }}>Are Saying</span>
        </h2>
        <p className="mx-auto mt-4 mb-12 max-w-xl text-base leading-relaxed text-zinc-400">
          Over 200 founders building their next chapter inside Gildre.
        </p>
      </div>

      <div
        ref={scrollRef}
        className="no-scrollbar flex gap-4 overflow-x-auto px-6 pb-4"
        style={{ scrollSnapType: "x mandatory" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            onClick={() => goTo(i)}
            className="flex w-[min(85vw,380px)] flex-shrink-0 cursor-pointer flex-col gap-5 rounded-2xl p-7 transition-opacity duration-300"
            style={{ backgroundColor: "#1C2744", scrollSnapAlign: "center", opacity: active === i ? 1 : 0.7 }}
          >
            <p className="text-[0.95rem] leading-relaxed text-zinc-200">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-auto flex items-center gap-3">
              <div
                className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{ backgroundColor: avatarColors[i % avatarColors.length] }}
              >
                {initials(t.name)}
              </div>
              <div>
                <p className="text-sm font-bold" style={{ color: "#C9A96E" }}>
                  {t.name}
                </p>
                <p className="text-xs text-zinc-400">
                  {t.title} @ {t.company}
                </p>
                <div className="mt-1 flex gap-0.5">
                  {[...Array(5)].map((_, s) => (
                    <span key={s} className="text-sm" style={{ color: "#C9A96E" }}>★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-2 px-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="h-2 rounded-full transition-all duration-300"
            style={{
              width: active === i ? "1.5rem" : "0.5rem",
              backgroundColor: active === i ? "#C9A96E" : "rgba(255,255,255,0.15)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
