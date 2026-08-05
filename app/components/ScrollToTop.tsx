"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:opacity-90"
      style={{
        backgroundColor: "#C9A96E",
        boxShadow: "0 4px 20px rgba(201,169,110,0.4), 0 2px 8px rgba(0,0,0,0.35)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "scale(1)" : "scale(0.85)",
        transition: "opacity 0.25s ease, transform 0.25s ease",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 10.5L8 5.5L13 10.5" stroke="#1C2744" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
