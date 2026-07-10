"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const contacts = [
  {
    label: "General Inbox",
    email: "info@gildre.com",
    photo: null,
    name: null,
  },
  {
    label: "Brian Lee",
    email: "brian@gildre.com",
    photo: "/team/brian-lee.png",
    name: "Brian Lee",
  },
  {
    label: "Taiga Gamell",
    email: "taiga@gildre.com",
    photo: "/team/taiga-gamell.jpg",
    name: "Taiga Gamell",
  },
  {
    label: "Michael J. Frank",
    email: "michael@gildre.com",
    photo: "/team/michael-frank.png",
    name: "Michael J. Frank",
  },
];

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;


export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function set<K extends keyof FormState>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): Errors {
    const errs: Errors = {};
    if (!form.firstName.trim()) errs.firstName = "Required.";
    if (!form.lastName.trim()) errs.lastName = "Required.";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = "A valid email is required.";
    if (!form.subject.trim()) errs.subject = "Required.";
    if (!form.message.trim()) errs.message = "Required.";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setSubmitting(true);
    try {
      await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "contact",
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          subject: form.subject,
          message: form.message,
          timestamp: new Date().toISOString(),
        }),
      });
    } finally {
      setSubmitting(false);
    }
    setSubmitted(true);
  }

  const inputBase = "w-full rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none";
  const inputStyle = (hasError: boolean) => ({
    backgroundColor: "rgba(255,255,255,0.05)",
    border: hasError ? "1.5px solid rgba(239,68,68,0.6)" : "1.5px solid rgba(255,255,255,0.1)",
  });

  return (
    <div style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>

      {/* Hero */}
      <section
        className="relative overflow-hidden px-6 pb-16 pt-20"
        style={{ background: "linear-gradient(160deg, #080e1a 0%, #0f1524 60%, #0a1020 100%)" }}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #C9A96E 0%, transparent 65%)" }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            Get in Touch
          </p>
          <h1
            className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Contact Us
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            If you have any questions or are interested in partnerships, please don&rsquo;t hesitate to reach out using the contact form.
          </p>
        </div>
      </section>

      {/* Main — two column */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">

            {/* Left — contact directory */}
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
                Direct Contacts
              </p>
              <h2
                className="mt-3 text-xl font-bold text-white sm:text-2xl"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                Reach the Right Person
              </h2>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                Whether it&rsquo;s a general question or something specific, here&rsquo;s who to reach.
              </p>

              <div className="mt-8 space-y-3">
                {contacts.map((c) => (
                  <a
                    key={c.email}
                    href={`mailto:${c.email}`}
                    className="group flex items-center gap-4 rounded-2xl p-4 transition-all"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(201,169,110,0.06)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.18)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.03)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                    }}
                  >
                    {/* Avatar */}
                    {c.photo ? (
                      <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-full">
                        <Image
                          src={c.photo}
                          alt={c.label}
                          fill
                          sizes="44px"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-xl bg-white p-1">
                        <Image
                          src="/images/gildre-logo.png"
                          alt="Gildre"
                          fill
                          sizes="44px"
                          className="object-contain"
                        />
                      </div>
                    )}

                    <div className="min-w-0 flex-1">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.35)" }}>
                        {c.label}
                      </p>
                      <p className="mt-0.5 truncate text-sm font-semibold text-white transition-colors group-hover:text-[#C9A96E]">
                        {c.email}
                      </p>
                    </div>

                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-zinc-600 transition-colors group-hover:text-[#C9A96E]">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {submitted ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <div
                    className="mb-5 flex h-14 w-14 items-center justify-center rounded-full"
                    style={{ backgroundColor: "rgba(201,169,110,0.15)" }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-fraunces)" }}>
                    Message Sent!
                  </h3>
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Thanks, <span className="font-semibold text-white">{form.firstName}</span>. We&rsquo;ll get back to you at <span className="text-white">{form.email}</span> as soon as possible.
                  </p>
                </div>
              ) : (
                <>
                  <p className="mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
                    Send a Message
                  </p>

                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    {/* Name */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold text-white">
                          First Name <span style={{ color: "#C9A96E" }}>*</span>
                        </label>
                        <input
                          type="text"
                          value={form.firstName}
                          onChange={(e) => set("firstName", e.target.value)}
                          placeholder="Jane"
                          className={inputBase}
                          style={inputStyle(!!errors.firstName)}
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-xs" style={{ color: "rgba(239,68,68,0.8)" }}>{errors.firstName}</p>
                        )}
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold text-white">
                          Last Name <span style={{ color: "#C9A96E" }}>*</span>
                        </label>
                        <input
                          type="text"
                          value={form.lastName}
                          onChange={(e) => set("lastName", e.target.value)}
                          placeholder="Smith"
                          className={inputBase}
                          style={inputStyle(!!errors.lastName)}
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-xs" style={{ color: "rgba(239,68,68,0.8)" }}>{errors.lastName}</p>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-white">
                        Email <span style={{ color: "#C9A96E" }}>*</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                        placeholder="jane@company.com"
                        className={inputBase}
                        style={inputStyle(!!errors.email)}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs" style={{ color: "rgba(239,68,68,0.8)" }}>{errors.email}</p>
                      )}
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-white">
                        Subject <span style={{ color: "#C9A96E" }}>*</span>
                      </label>
                      <input
                        type="text"
                        value={form.subject}
                        onChange={(e) => set("subject", e.target.value)}
                        placeholder="e.g. Partnership inquiry, Membership question..."
                        className={inputBase}
                        style={inputStyle(!!errors.subject)}
                      />
                      {errors.subject && (
                        <p className="mt-1.5 text-xs" style={{ color: "rgba(239,68,68,0.8)" }}>{errors.subject}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-white">
                        Message <span style={{ color: "#C9A96E" }}>*</span>
                      </label>
                      <textarea
                        value={form.message}
                        onChange={(e) => set("message", e.target.value)}
                        placeholder="Tell us what's on your mind..."
                        rows={5}
                        className="w-full resize-none rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none"
                        style={inputStyle(!!errors.message)}
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-xs" style={{ color: "rgba(239,68,68,0.8)" }}>{errors.message}</p>
                      )}
                    </div>

                    <div className="pt-1">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full rounded-xl py-3.5 text-sm font-bold tracking-wide transition-opacity hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                        style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
                      >
                        {submitting ? "Sending…" : "Submit"}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Schedule a Meeting */}
      <section className="px-6 py-16" style={{ backgroundColor: "#080e1a" }}>
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 overflow-hidden rounded-2xl lg:grid-cols-2" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>

            {/* Image */}
            <div className="relative min-h-[280px]">
              <Image
                src="/images/community/coaching.webp"
                alt="Gildre members collaborating"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to right, transparent 60%, #080e1a 100%)" }}
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center px-8 py-10 lg:py-14 lg:pl-0 lg:pr-12">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
                Book a Call
              </p>
              <h2
                className="mt-3 text-xl font-bold leading-snug text-white sm:text-2xl"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                Interested in learning more about membership at Gildre?
              </h2>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                Schedule some time with our Managing Partner, <span className="font-semibold text-white">Taiga Gamell</span>, below.
              </p>

              {/* Taiga avatar + name */}
              <div className="mt-5 flex items-center gap-3">
                <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full" style={{ border: "1.5px solid rgba(201,169,110,0.3)" }}>
                  <Image
                    src="/team/taiga-gamell.jpg"
                    alt="Taiga Gamell"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Taiga Gamell</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Managing Partner, Gildre</p>
                </div>
              </div>

              <a
                href="https://calendly.com/taiga-gildre/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-block self-start rounded-full px-7 py-3 text-sm font-bold transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
              >
                Schedule a Meeting
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div
        className="px-6 py-8 text-center text-[0.7rem] text-zinc-600"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <p>
          &copy; {new Date().getFullYear()} Gildre, LLC. All rights reserved.{" "}
          <a href="/privacy" className="underline underline-offset-2 hover:text-zinc-400 transition-colors">
            Privacy Policy
          </a>
          {" · "}
          <a href="/" className="underline underline-offset-2 hover:text-zinc-400 transition-colors">
            Back to Gildre.com
          </a>
        </p>
      </div>

    </div>
  );
}
