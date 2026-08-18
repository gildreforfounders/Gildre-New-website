import Link from "next/link";

export const metadata = {
  title: "Page Not Found | Gildre",
  description: "The page you're looking for doesn't exist. Find founder community resources, membership, and blog content on Gildre.",
};

const quickLinks = [
  {
    label: "Founder Community",
    href: "/founder-community",
    desc: "Why founders join Gildre",
  },
  {
    label: "Membership",
    href: "/membership",
    desc: "Silver, Gold, and Platinum plans",
  },
  {
    label: "Blog & Guides",
    href: "/content",
    desc: "Founder stories, playbooks, and insights",
  },
  {
    label: "Podcast",
    href: "/podcast",
    desc: "Start to Scale — real founder conversations",
  },
  {
    label: "Chicago Chapter",
    href: "/chicago",
    desc: "Events and community in Chicago",
  },
  {
    label: "Contact",
    href: "/contact",
    desc: "Talk to the Gildre team directly",
  },
];

export default function NotFound() {
  return (
    <div
      style={{ backgroundColor: "#080e1a", minHeight: "100vh" }}
      className="flex flex-col items-center justify-center px-6 py-24"
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none fixed left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(ellipse, #C9A96E 0%, transparent 65%)" }}
      />

      <div className="relative mx-auto w-full max-w-2xl text-center">
        {/* 404 number */}
        <p
          className="text-[6rem] font-bold leading-none sm:text-[8rem]"
          style={{
            fontFamily: "var(--font-fraunces)",
            color: "rgba(201,169,110,0.15)",
            letterSpacing: "-0.04em",
          }}
        >
          404
        </p>

        {/* Heading */}
        <h1
          className="-mt-6 text-[1.75rem] font-bold text-white sm:text-[2.25rem]"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          This page doesn't exist.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
          The link may have moved or expired. Here's where you probably want to go.
        </p>

        {/* Quick links grid */}
        <div className="mt-10 grid grid-cols-1 gap-3 text-left sm:grid-cols-2">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex flex-col rounded-xl px-5 py-4 transition-all duration-200 hover:border-[rgba(201,169,110,0.3)] hover:bg-[rgba(201,169,110,0.05)]"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <span className="text-sm font-semibold text-white">{link.label}</span>
              <span className="mt-0.5 text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                {link.desc}
              </span>
            </Link>
          ))}
        </div>

        {/* Back to home */}
        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
          >
            Back to Gildre
          </Link>
        </div>
      </div>
    </div>
  );
}
