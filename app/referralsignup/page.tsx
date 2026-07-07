"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  newsletter: boolean;
};

type Errors = Partial<Record<"firstName" | "lastName" | "email", string>>;

export default function ReferralSignupPage() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    newsletter: false,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): Errors {
    const errs: Errors = {};
    if (!form.firstName.trim()) errs.firstName = "First name is required.";
    if (!form.lastName.trim()) errs.lastName = "Last name is required.";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = "A valid email is required.";
    return errs;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    const subject = encodeURIComponent(`Gildre Referral Program Sign-Up — ${form.firstName} ${form.lastName}`);
    const body = encodeURIComponent(
      `Gildre Referral Program Sign-Up\n\n` +
      `Name: ${form.firstName} ${form.lastName}\n` +
      `Email: ${form.email}\n` +
      `Newsletter Opt-In: ${form.newsletter ? "Yes" : "No"}\n\n` +
      `Please send a personalized affiliate link to the email above.`
    );
    window.open(`mailto:Info@Gildre.com?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
  }

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
            Earn While You
            <br />
            <span style={{ color: "#C9A96E" }}>Build the Community.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            Get your custom affiliate link to refer friends to the Gildre Community.
          </p>

          {/* 20% callout pill */}
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
                20%
              </span>
              <div className="text-left">
                <p className="text-sm font-semibold text-white">Ongoing Monthly Stipend</p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Per qualified member, every month, for as long as they stay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content — image + form */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">

            {/* Left — image + how it works */}
            <div>
              {/* Image */}
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
                    Grow together.
                  </p>
                </div>
              </div>

              {/* How it works */}
              <div className="mt-8 space-y-4">
                <p
                  className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: "#C9A96E" }}
                >
                  How It Works
                </p>
                {[
                  {
                    n: "01",
                    title: "Sign Up Below",
                    body: "Complete the form and we'll send you a personalized affiliate link via email.",
                  },
                  {
                    n: "02",
                    title: "Share Your Link",
                    body: "Invite qualified founders, investors, and executives to join the Gildre community.",
                  },
                  {
                    n: "03",
                    title: "Earn Every Month",
                    body: "Earn a 20% ongoing monthly stipend for every accepted member you refer, for as long as they remain active.",
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
                    You&rsquo;re on the list!
                  </h3>
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Thanks, <span className="font-semibold text-white">{form.firstName}</span>. Your personalized affiliate link will be sent to <span className="text-white">{form.email}</span> within 1–2 business days.
                  </p>
                  <p className="mt-5 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                    Questions?{" "}
                    <a href="mailto:Info@Gildre.com" className="underline underline-offset-2" style={{ color: "#C9A96E" }}>
                      Info@Gildre.com
                    </a>
                  </p>
                </div>
              ) : (
                <>
                  <p
                    className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]"
                    style={{ color: "#C9A96E" }}
                  >
                    Get Your Affiliate Link
                  </p>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Referrers earn an ongoing 20% Membership Stipend every month based on the selected program for any qualified founder, investor, or executive who is accepted into the community.
                  </p>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Submit the form below and we&rsquo;ll send you a personalized affiliate link via email to invite qualified colleagues to Gildre.
                  </p>

                  <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-4">
                    {/* Name */}
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/60">
                        Name
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <input
                            type="text"
                            value={form.firstName}
                            onChange={(e) => set("firstName", e.target.value)}
                            placeholder="First Name"
                            className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none"
                            style={{
                              backgroundColor: "rgba(255,255,255,0.05)",
                              border: errors.firstName
                                ? "1.5px solid rgba(239,68,68,0.6)"
                                : "1.5px solid rgba(255,255,255,0.1)",
                            }}
                          />
                          {errors.firstName && (
                            <p className="mt-1 text-xs" style={{ color: "rgba(239,68,68,0.8)" }}>
                              {errors.firstName}
                            </p>
                          )}
                        </div>
                        <div>
                          <input
                            type="text"
                            value={form.lastName}
                            onChange={(e) => set("lastName", e.target.value)}
                            placeholder="Last Name"
                            className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none"
                            style={{
                              backgroundColor: "rgba(255,255,255,0.05)",
                              border: errors.lastName
                                ? "1.5px solid rgba(239,68,68,0.6)"
                                : "1.5px solid rgba(255,255,255,0.1)",
                            }}
                          />
                          {errors.lastName && (
                            <p className="mt-1 text-xs" style={{ color: "rgba(239,68,68,0.8)" }}>
                              {errors.lastName}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                        placeholder="Email"
                        className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.05)",
                          border: errors.email
                            ? "1.5px solid rgba(239,68,68,0.6)"
                            : "1.5px solid rgba(255,255,255,0.1)",
                        }}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs" style={{ color: "rgba(239,68,68,0.8)" }}>
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Newsletter */}
                    <label className="flex cursor-pointer items-center gap-3 pt-1">
                      <div className="relative flex-shrink-0">
                        <input
                          type="checkbox"
                          checked={form.newsletter}
                          onChange={(e) => set("newsletter", e.target.checked)}
                          className="sr-only"
                        />
                        <div
                          className="flex h-5 w-5 items-center justify-center rounded"
                          style={{
                            backgroundColor: form.newsletter ? "#C9A96E" : "rgba(255,255,255,0.06)",
                            border: form.newsletter ? "none" : "1.5px solid rgba(255,255,255,0.2)",
                          }}
                        >
                          {form.newsletter && (
                            <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                              <path d="M1 4.5L3.8 7.5L10 1" stroke="#1C2744" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                        Sign up for news and updates
                      </span>
                    </label>

                    {/* Submit */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full rounded-xl py-3.5 text-sm font-bold tracking-wide transition-opacity hover:opacity-90"
                        style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
                      >
                        Submit
                      </button>
                    </div>

                    {/* Footer note */}
                    <p className="pt-1 text-[0.7rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.3)" }}>
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
                  </form>
                </>
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
