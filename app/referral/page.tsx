"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type FormState = {
  refFirstName: string;
  refLastName: string;
  refEmail: string;
  refLinkedIn: string;
  relationship: string;
  yourFirstName: string;
  yourLastName: string;
};

type Errors = Partial<Record<
  "refFirstName" | "refLastName" | "refEmail" | "refLinkedIn" | "yourFirstName" | "yourLastName",
  string
>>;

export default function ReferralPage() {
  const [form, setForm] = useState<FormState>({
    refFirstName: "",
    refLastName: "",
    refEmail: "",
    refLinkedIn: "",
    relationship: "",
    yourFirstName: "",
    yourLastName: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): Errors {
    const errs: Errors = {};
    if (!form.refFirstName.trim()) errs.refFirstName = "Required.";
    if (!form.refLastName.trim()) errs.refLastName = "Required.";
    if (!form.refEmail.trim() || !/\S+@\S+\.\S+/.test(form.refEmail)) errs.refEmail = "A valid email is required.";
    if (!form.refLinkedIn.trim()) errs.refLinkedIn = "Required.";
    if (!form.yourFirstName.trim()) errs.yourFirstName = "Required.";
    if (!form.yourLastName.trim()) errs.yourLastName = "Required.";
    return errs;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    const subject = encodeURIComponent(
      `Gildre Referral — ${form.refFirstName} ${form.refLastName} referred by ${form.yourFirstName} ${form.yourLastName}`
    );
    const body = encodeURIComponent(
      `Gildre Community Referral\n\n` +
      `--- Person Being Referred ---\n` +
      `Name: ${form.refFirstName} ${form.refLastName}\n` +
      `Email: ${form.refEmail}\n` +
      `LinkedIn: ${form.refLinkedIn}\n` +
      `Relationship: ${form.relationship || "Not specified"}\n\n` +
      `--- Referred By ---\n` +
      `Name: ${form.yourFirstName} ${form.yourLastName}\n`
    );
    window.open(`mailto:Info@Gildre.com?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
  }

  const inputStyle = (hasError: boolean) => ({
    backgroundColor: "rgba(255,255,255,0.05)",
    border: hasError ? "1.5px solid rgba(239,68,68,0.6)" : "1.5px solid rgba(255,255,255,0.1)",
  });

  return (
    <div style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>

      {/* Top nav */}
      <div className="border-b px-6 py-4" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
        <Link href="/" className="text-sm text-zinc-500 transition-colors hover:text-white">
          ← Back to Gildre
        </Link>
      </div>

      {/* Hero */}
      <section
        className="relative overflow-hidden px-6 pb-16 pt-20"
        style={{
          background: "linear-gradient(160deg, #080e1a 0%, #0f1524 60%, #0a1020 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #C9A96E 0%, transparent 65%)" }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
            Referral Program
          </p>
          <h1
            className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Refer a Friend to Join
            <br />
            <span style={{ color: "#C9A96E" }}>the Gildre Community.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            Referrers earn a 100% Membership Stipend based on the first month of the selected program for any qualified founder, investor, or executive who is accepted into the community.
          </p>

          {/* Stipend callout */}
          <div className="mt-8 flex justify-center">
            <div
              className="inline-flex items-center gap-3 rounded-2xl px-6 py-4"
              style={{
                backgroundColor: "rgba(201,169,110,0.08)",
                border: "1px solid rgba(201,169,110,0.2)",
              }}
            >
              <span
                className="text-3xl font-bold"
                style={{ color: "#C9A96E", fontFamily: "var(--font-fraunces)" }}
              >
                100%
              </span>
              <div className="text-left">
                <p className="text-sm font-semibold text-white">First-Month Membership Stipend</p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                  For every qualified member you refer who gets accepted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">

            {/* Left — image */}
            <div>
              <div className="relative overflow-hidden rounded-2xl" style={{ height: "340px" }}>
                <Image
                  src="/images/community/friends.webp"
                  alt="Gildre community members"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(15,21,36,0.7) 0%, transparent 55%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="mb-2 h-[2px] w-8 rounded-full" style={{ backgroundColor: "#C9A96E" }} />
                  <p
                    className="text-lg font-bold text-white"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    Great things happen in great company.
                  </p>
                </div>
              </div>

              {/* How it works */}
              <div className="mt-8 space-y-4">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
                  What Happens Next
                </p>
                {[
                  {
                    n: "01",
                    title: "Submit the Form",
                    body: "Fill out their info below. Takes less than 2 minutes.",
                  },
                  {
                    n: "02",
                    title: "We Reach Out",
                    body: "Our team will contact them directly to schedule a time to chat and learn more about what they're building.",
                  },
                  {
                    n: "03",
                    title: "You Earn",
                    body: "Once they're accepted and pay their first month's dues, you receive a 100% membership stipend.",
                  },
                ].map((step) => (
                  <div key={step.n} className="flex gap-4">
                    <div
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold"
                      style={{
                        backgroundColor: "rgba(201,169,110,0.1)",
                        color: "#C9A96E",
                        fontFamily: "var(--font-fraunces)",
                      }}
                    >
                      {step.n}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{step.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                        {step.body}
                      </p>
                    </div>
                  </div>
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
                  <h3
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    Referral Submitted!
                  </h3>
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Thanks, <span className="font-semibold text-white">{form.yourFirstName}</span>. We&rsquo;ll reach out to{" "}
                    <span className="font-semibold text-white">{form.refFirstName} {form.refLastName}</span> shortly to schedule a time to chat.
                  </p>
                  <p className="mt-5 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                    Questions?{" "}
                    <a href="mailto:Info@Gildre.com" className="underline underline-offset-2" style={{ color: "#C9A96E" }}>
                      Info@Gildre.com
                    </a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">

                  {/* Section — Who you're referring */}
                  <div>
                    <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
                      Who are you referring?
                    </p>
                    <p className="mb-4 text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                      Complete the form below and we&rsquo;ll reach out to schedule a time to chat and learn more about what they&rsquo;re building.
                    </p>

                    {/* Referred name */}
                    <div className="mb-4">
                      <p className="mb-2 text-xs font-semibold text-white/60 uppercase tracking-wider">Name</p>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <input
                            type="text"
                            value={form.refFirstName}
                            onChange={(e) => set("refFirstName", e.target.value)}
                            placeholder="First Name"
                            className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none"
                            style={inputStyle(!!errors.refFirstName)}
                          />
                          {errors.refFirstName && (
                            <p className="mt-1 text-xs" style={{ color: "rgba(239,68,68,0.8)" }}>{errors.refFirstName}</p>
                          )}
                        </div>
                        <div>
                          <input
                            type="text"
                            value={form.refLastName}
                            onChange={(e) => set("refLastName", e.target.value)}
                            placeholder="Last Name"
                            className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none"
                            style={inputStyle(!!errors.refLastName)}
                          />
                          {errors.refLastName && (
                            <p className="mt-1 text-xs" style={{ color: "rgba(239,68,68,0.8)" }}>{errors.refLastName}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Referred email */}
                    <div className="mb-4">
                      <label className="mb-1.5 block text-xs font-semibold text-white">
                        Their Email <span style={{ color: "#C9A96E" }}>*</span>
                      </label>
                      <input
                        type="email"
                        value={form.refEmail}
                        onChange={(e) => set("refEmail", e.target.value)}
                        placeholder="colleague@company.com"
                        className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none"
                        style={inputStyle(!!errors.refEmail)}
                      />
                      {errors.refEmail && (
                        <p className="mt-1.5 text-xs" style={{ color: "rgba(239,68,68,0.8)" }}>{errors.refEmail}</p>
                      )}
                    </div>

                    {/* LinkedIn */}
                    <div className="mb-4">
                      <label className="mb-1.5 block text-xs font-semibold text-white">
                        Their LinkedIn URL <span style={{ color: "#C9A96E" }}>*</span>
                      </label>
                      <input
                        type="url"
                        value={form.refLinkedIn}
                        onChange={(e) => set("refLinkedIn", e.target.value)}
                        placeholder="linkedin.com/in/username"
                        className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none"
                        style={inputStyle(!!errors.refLinkedIn)}
                      />
                      {errors.refLinkedIn && (
                        <p className="mt-1.5 text-xs" style={{ color: "rgba(239,68,68,0.8)" }}>{errors.refLinkedIn}</p>
                      )}
                    </div>

                    {/* Relationship */}
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-white">
                        How do you know them?
                      </label>
                      <textarea
                        value={form.relationship}
                        onChange={(e) => set("relationship", e.target.value)}
                        placeholder="e.g. Former colleague, met at a conference, close friend..."
                        rows={3}
                        className="w-full resize-none rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.05)",
                          border: "1.5px solid rgba(255,255,255,0.1)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />

                  {/* Section — Your info */}
                  <div>
                    <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
                      Your Name
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <input
                          type="text"
                          value={form.yourFirstName}
                          onChange={(e) => set("yourFirstName", e.target.value)}
                          placeholder="First Name"
                          className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none"
                          style={inputStyle(!!errors.yourFirstName)}
                        />
                        {errors.yourFirstName && (
                          <p className="mt-1 text-xs" style={{ color: "rgba(239,68,68,0.8)" }}>{errors.yourFirstName}</p>
                        )}
                      </div>
                      <div>
                        <input
                          type="text"
                          value={form.yourLastName}
                          onChange={(e) => set("yourLastName", e.target.value)}
                          placeholder="Last Name"
                          className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none"
                          style={inputStyle(!!errors.yourLastName)}
                        />
                        {errors.yourLastName && (
                          <p className="mt-1 text-xs" style={{ color: "rgba(239,68,68,0.8)" }}>{errors.yourLastName}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      className="w-full rounded-xl py-3.5 text-sm font-bold tracking-wide transition-opacity hover:opacity-90"
                      style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
                    >
                      Submit Referral
                    </button>

                    <p className="mt-4 text-[0.7rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.3)" }}>
                      For more information on the full referral agreement itself please visit our{" "}
                      <Link
                        href="/referralagreement"
                        className="underline underline-offset-2 transition-colors hover:text-white"
                        style={{ color: "rgba(201,169,110,0.7)" }}
                      >
                        Gildre Referral Agreement
                      </Link>{" "}
                      page.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div
        className="mt-4 px-6 py-8 text-center text-[0.7rem] text-zinc-600"
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
