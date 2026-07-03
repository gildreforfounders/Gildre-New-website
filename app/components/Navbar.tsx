"use client";
import { useState } from "react";

const links = [
  { label: "Membership", id: "benefits" },
  { label: "About Us",   id: "about"    },
  { label: "FAQ",        id: "faq"      },
  { label: "Wall of Love", id: "reviews" },
  { label: "Pricing",   id: "pricing"  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  }

  return (
    <>
      <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2">
        <nav
          className="flex items-center justify-between px-5 py-3 sm:px-7 sm:py-3.5"
          style={{
            backgroundColor: "#0f1524",
            borderRadius: open ? "1.25rem" : "9999px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.07)",
            transition: "border-radius 0.25s ease",
          }}
        >
          {/* Brand */}
          <a
            href="/"
            className="text-2xl font-semibold text-white flex-shrink-0"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Gildre
          </a>

          {/* Center links — desktop only */}
          <div className="hidden items-center gap-6 lg:flex">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-sm text-white/70 transition-colors hover:text-white whitespace-nowrap"
              >
                {l.label}
              </button>
            ))}
            <a
              href="https://login.circle.so/sign_in?request_host=gildre.circle.so"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/70 transition-colors hover:text-white whitespace-nowrap"
            >
              Member Login
            </a>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* CTA — hidden on mobile */}
            <a
              href="https://tally.so/r/VLERVa"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block flex-shrink-0 rounded-full px-6 py-2.5 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
            >
              Apply Now
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] flex-shrink-0"
              aria-label="Toggle menu"
            >
              <span
                className="block h-[2px] w-5 rounded-full bg-white transition-all duration-300"
                style={{
                  transform: open ? "translateY(7px) rotate(45deg)" : "none",
                }}
              />
              <span
                className="block h-[2px] w-5 rounded-full bg-white transition-all duration-300"
                style={{ opacity: open ? 0 : 1 }}
              />
              <span
                className="block h-[2px] w-5 rounded-full bg-white transition-all duration-300"
                style={{
                  transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </nav>

        {/* Mobile dropdown */}
        <div
          className="lg:hidden overflow-hidden transition-all duration-300"
          style={{
            maxHeight: open ? "400px" : "0px",
            opacity: open ? 1 : 0,
          }}
        >
          <div
            className="mt-2 rounded-2xl px-6 py-5 flex flex-col gap-1"
            style={{
              backgroundColor: "#0f1524",
              boxShadow: "0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.07)",
            }}
          >
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="w-full text-left py-3 text-base text-white/80 hover:text-white transition-colors border-b border-white/5 last:border-0"
              >
                {l.label}
              </button>
            ))}
            <a
              href="https://login.circle.so/sign_in?request_host=gildre.circle.so"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-left py-3 text-base text-white/80 hover:text-white transition-colors border-b border-white/5"
            >
              Member Login
            </a>
            <a
              href="https://tally.so/r/VLERVa"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block rounded-full py-3 text-center text-sm font-bold"
              style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
            >
              Apply Now
            </a>
          </div>
        </div>
      </header>

      {/* Overlay to close menu on outside tap */}
      {open && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
