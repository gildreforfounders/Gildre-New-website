"use client";

export default function Navbar() {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2">
      <nav
        className="flex items-center justify-between px-5 py-2.5"
        style={{
          backgroundColor: "#0f1524",
          borderRadius: "9999px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.07)",
        }}
      >
        {/* Brand */}
        <a
          href="/"
          className="text-xl font-semibold text-white flex-shrink-0"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Gildre
        </a>

        {/* Center links — hidden on small screens */}
        <div className="hidden items-center gap-6 lg:flex">
          <button
            onClick={() => scrollTo("benefits")}
            className="text-xs text-white/60 transition-colors hover:text-white whitespace-nowrap"
          >
            Membership
          </button>
          <button
            onClick={() => scrollTo("about")}
            className="text-xs text-white/60 transition-colors hover:text-white whitespace-nowrap"
          >
            About Us
          </button>
          <a
            href="https://www.gildre.com/faq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/60 transition-colors hover:text-white whitespace-nowrap"
          >
            FAQ
          </a>
          <a
            href="https://www.gildre.com/wall-of-love"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/60 transition-colors hover:text-white whitespace-nowrap"
          >
            Wall of Love
          </a>
          <button
            onClick={() => scrollTo("pricing")}
            className="text-xs text-white/60 transition-colors hover:text-white whitespace-nowrap"
          >
            Pricing
          </button>
          <a
            href="https://login.circle.so/sign_in?request_host=gildre.circle.so"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/60 transition-colors hover:text-white whitespace-nowrap"
          >
            Member Login
          </a>
        </div>

        {/* CTA */}
        <a
          href="https://tally.so/r/VLERVa"
          className="flex-shrink-0 rounded-full px-5 py-2 text-xs font-bold transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
        >
          Apply Now
        </a>
      </nav>
    </header>
  );
}
