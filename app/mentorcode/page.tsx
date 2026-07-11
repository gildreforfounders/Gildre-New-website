"use client";
import { useState } from "react";
import Link from "next/link";

const sections = [
  {
    n: "1",
    title: "Services",
    body: "Gildre wishes to obtain the Mentor's services to achieve the following goals/maximize the following areas for the Members: personal development, business development, go-to-market strategy, product development, fundraising, and other areas of business expertise as needed.",
  },
  {
    n: "2",
    title: "Duties & Responsibilities",
    body: "The Mentor is an independent contractor. Nothing in this Agreement shall be construed to create a partnership, joint venture, agency, fiduciary, or employment relationship between the Mentor and the Company or any Member. All Parties, including the Members, must uphold their obligations for the relationship to be successful. The Mentor agrees to maintain the professional ethics and standards of behavior expected of mentors.",
  },
  {
    n: "3",
    title: "No Conflicts",
    body: "Mentor represents that Mentor's compliance with the terms of this Code and provision of Services hereunder will not violate any duty which Mentor may have to any other person or entity (such as a present or former employer). In addition, Mentor agrees that, during the term of this Agreement, Mentor shall promptly notify the Company in writing of any competitor or potential competitor of the Member and/or the Company, upon which Mentor is also performing services in any manner, free or for any type of compensation. It is understood that in such an event, the Company will review whether the Mentor's activities are consistent with the Mentor remaining as an advisor of a Member and the Company.",
  },
  {
    n: "4",
    title: "No Partnership",
    body: "This Agreement does not create a legal partnership relationship between the Member and the Mentor, the Company and the Mentor, or between all Parties. Unless otherwise directed, the Mentor shall have no authority to enter contracts on the Company's or Member's behalf or represent the Company or Member in any manner that is not outlined in writing.",
  },
  {
    n: "5",
    title: "Non-Solicit",
    body: "The Mentor agrees that during an active pairing made by Gildre, Mentor shall not either directly or indirectly solicit, or encourage any of the Members to purchase additional services through the Mentor. Under special circumstances, Mentor may request in writing to Gildre for permission on a case-by-case basis for approval.",
  },
  {
    n: "6",
    title: "Company & Member Confidentiality",
    body: "The Mentor acknowledges that it will be necessary for the Company and/or Members to disclose certain confidential and proprietary information to the Mentor to perform their duties under this Agreement. The Mentor acknowledges that disclosure to a third party, or misuse of this proprietary or confidential information could irreparably harm the Company and Members. Accordingly, the Mentor will not disclose or use, either during the term of this Agreement or for a period of two (2) years following its termination, any proprietary or confidential information of the Company or Members without their individual prior written permission, except to the extent necessary to perform services on the Company's or Member's behalf. Proprietary or confidential information includes but is not limited to the written, printed, graphic, or electronically recorded materials furnished by the Company or Members for the Mentor to use.",
  },
  {
    n: "7",
    title: "Side Party Agreements",
    body: "Before the Mentor engages or attempts to engage a Member of Gildre in any type of engagement or relationship (professional) outside of this Agreement, they should let Gildre know. Regardless of any communication, the Mentor indemnifies the Company of any actions, engagements, or relationships formed on the Mentor's end.",
  },
  {
    n: "8",
    title: "Termination of Agreement",
    body: "The Company or Mentor may terminate this Agreement and any obligations stated hereunder by providing written notice at any point. This Agreement will automatically renew after 12 months unless the Mentor or Gildre chooses to cancel willingly.",
  },
  {
    n: "9",
    title: "Limited Liability & Indemnification",
    body: "Mentors will provide services in a professional manner, making no guarantees, representations, or warranties of any kind or nature, expressed or implied with respect to the services agreed upon, and rendered in this Agreement. In no event shall the Mentor be liable to the Company or Members for any indirect, consequential, or special damages concerning services. Notwithstanding any damages that the Company or Members may incur, the Mentor's entire liability under this Agreement, and the Company or Member's exclusive remedy, whether such liability is asserted based on contract, tort, or otherwise, shall be limited, even if the Mentor has been warned of the possibility of any such loss or damage.",
  },
  {
    n: "10",
    title: "Photograph & Release",
    body: "I grant Gildre permission to the rights of my image and likeness without payment or any other consideration for use on the Company website and materials for general business use. Gildre will ask permission from Mentor prior to any testimonial or use case.",
  },
  {
    n: "11",
    title: "Entire Agreement",
    body: "This document reflects the entire agreement between the Mentor and the Company and reflects a complete understanding of the Parties concerning the subject matter. This Agreement supersedes all prior written and oral representations. The Agreement may not be amended, altered, or supplemented except in writing signed by both the Mentor and the Company.",
  },
  {
    n: "12",
    title: "Governing Law & Venue",
    body: "This Agreement shall be governed by and construed in accordance with the laws of the State of Illinois, without regard to its conflict of law principles. Any legal action or proceeding arising under this Agreement shall be brought exclusively in the state or federal courts located in Illinois, and the Parties hereby irrevocably consent to the personal jurisdiction and venue therein.",
  },
  {
    n: "13",
    title: "Survival",
    body: "Upon the termination of this Agreement for any reason, those provisions which by their nature are intended to survive termination shall so survive. This includes, but is not limited to, the Mentor's obligations under Section 5 (Non-Solicit), Section 6 (Confidentiality), Section 9 (Limited Liability & Indemnification), and Section 12 (Governing Law & Venue).",
  },
];

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  date: string;
  agreed: boolean;
};

type Errors = Partial<Record<keyof FormState, string>>;


export default function MentorCodePage() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    date: "",
    agreed: false,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): Errors {
    const errs: Errors = {};
    if (!form.firstName.trim()) errs.firstName = "First name is required.";
    if (!form.lastName.trim()) errs.lastName = "Last name is required.";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = "A valid email is required.";
    if (!form.date) errs.date = "Date is required.";
    if (!form.agreed) errs.agreed = "You must agree to the terms to proceed.";
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
    setSubmitError(null);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "975e3f10-dc81-4bc4-9e17-3ff07d36f1df",
          subject: `[Gildre] Mentor Code Signed — ${form.firstName} ${form.lastName}`,
          from_name: "Gildre Website",
          Name: `${form.firstName} ${form.lastName}`,
          Email: form.email,
          "Date Acknowledged": form.date,
          Agreed: "Yes",
          Submitted: new Date().toISOString(),
        }),
      });
      const result = await res.json();
      if (!result.success) {
        setSubmitError(result.message ?? "Something went wrong. Please try again.");
        return;
      }
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
      return;
    } finally {
      setSubmitting(false);
    }
    setSubmitted(true);
  }

  return (
    <div className="flex flex-col" style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>

      <div className="mx-auto w-full max-w-3xl px-6 py-16 pb-24">

        {/* Header */}
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
          Legal
        </p>
        <h1
          className="mt-3 text-[2rem] font-bold text-white sm:text-[2.5rem]"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Gildre Mentor Code of Conduct
        </h1>

        {/* Preamble */}
        <div
          className="mt-8 rounded-2xl p-6 text-sm leading-relaxed"
          style={{
            backgroundColor: "rgba(201,169,110,0.05)",
            border: "1px solid rgba(201,169,110,0.15)",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          <p>
            This Mentor Code of Conduct (the &ldquo;Code&rdquo; or &ldquo;Agreement&rdquo;) is entered into on the acknowledgment date, by and between the Mentor, <strong className="text-white">Gildre, an Illinois LLC</strong> (the &ldquo;Company&rdquo;), and participating individuals enrolled in the Company&rsquo;s network (the &ldquo;Members&rdquo;), subject to the Gildre Member Code of Conduct. The Mentor, Company, and Members are collectively referred to as &ldquo;the Parties.&rdquo;
          </p>
        </div>

        {/* Definitions */}
        <div className="mt-8">
          <h2
            className="mb-4 text-base font-bold uppercase tracking-widest"
            style={{ color: "#C9A96E", fontFamily: "var(--font-fraunces)" }}
          >
            Definitions
          </h2>
          <ul className="space-y-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            <li>
              <span className="font-semibold text-white">&ldquo;Company&rdquo;</span> refers to Gildre, an Illinois LLC, its staff, and its internal management team.
            </li>
            <li>
              <span className="font-semibold text-white">&ldquo;Member&rdquo;</span> refers to any individual, entrepreneur, or professional enrolled in the Gildre network who receives mentorship, coaching, or advisory services from the Mentor.
            </li>
          </ul>
          <p className="mt-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            The purpose of this Agreement is to develop a meaningful mentoring and coaching relationship between the Mentor and Members of Gildre to cultivate personal, professional, and/or business goals. This will be accomplished via 1-on-1 phone calls or video calls for an expected time commitment of 1–2 hours monthly.
          </p>
          <p className="mt-3 text-sm font-semibold text-white">The Parties Agree as follows:</p>
        </div>

        {/* Divider */}
        <div className="my-10 h-px" style={{ backgroundColor: "rgba(201,169,110,0.15)" }} />

        {/* Numbered sections */}
        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.n} className="flex gap-5">
              <div
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold"
                style={{ backgroundColor: "rgba(201,169,110,0.12)", color: "#C9A96E" }}
              >
                {s.n}
              </div>
              <div>
                <h3
                  className="text-sm font-bold text-white"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-[1.85]" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-12 h-px" style={{ backgroundColor: "rgba(201,169,110,0.15)" }} />

        {/* Acknowledgement Form */}
        {submitted ? (
          <div
            className="rounded-2xl px-8 py-10 text-center"
            style={{
              backgroundColor: "rgba(201,169,110,0.06)",
              border: "1px solid rgba(201,169,110,0.2)",
            }}
          >
            <div
              className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full"
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
              Acknowledgement Received
            </h3>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Thank you, <span className="text-white font-semibold">{form.firstName} {form.lastName}</span>. Your electronic acknowledgement of the Gildre Mentor Code of Conduct has been submitted. Please check your email — a confirmation has been sent to <span className="text-white">{form.email}</span>.
            </p>
            <p className="mt-5 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
              If you have questions, contact us at{" "}
              <a href="mailto:Info@Gildre.com" className="underline underline-offset-2" style={{ color: "#C9A96E" }}>
                Info@Gildre.com
              </a>
            </p>
          </div>
        ) : (
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
              Electronic Acknowledgement
            </p>
            <h2
              className="mt-3 text-xl font-bold text-white sm:text-2xl"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Gildre Mentor Code of Conduct Acknowledgement Form
            </h2>
            <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              By submitting this form, you confirm that you have read, understood, and agree to the terms outlined above.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
              {/* Name row */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-white">
                    First Name <span style={{ color: "#C9A96E" }}>*</span>
                  </label>
                  <input
                    type="text"
                    value={form.firstName}
                    onChange={(e) => set("firstName", e.target.value)}
                    placeholder="Jane"
                    className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: errors.firstName
                        ? "1.5px solid rgba(239,68,68,0.6)"
                        : "1.5px solid rgba(255,255,255,0.1)",
                    }}
                  />
                  {errors.firstName && (
                    <p className="mt-1.5 text-xs" style={{ color: "rgba(239,68,68,0.8)" }}>{errors.firstName}</p>
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
                    className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: errors.lastName
                        ? "1.5px solid rgba(239,68,68,0.6)"
                        : "1.5px solid rgba(255,255,255,0.1)",
                    }}
                  />
                  {errors.lastName && (
                    <p className="mt-1.5 text-xs" style={{ color: "rgba(239,68,68,0.8)" }}>{errors.lastName}</p>
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
                  className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: errors.email
                      ? "1.5px solid rgba(239,68,68,0.6)"
                      : "1.5px solid rgba(255,255,255,0.1)",
                  }}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs" style={{ color: "rgba(239,68,68,0.8)" }}>{errors.email}</p>
                )}
              </div>

              {/* Date */}
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-white">
                  Date <span style={{ color: "#C9A96E" }}>*</span>
                </label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => set("date", e.target.value)}
                  className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: errors.date
                      ? "1.5px solid rgba(239,68,68,0.6)"
                      : "1.5px solid rgba(255,255,255,0.1)",
                    colorScheme: "dark",
                  }}
                />
                {errors.date && (
                  <p className="mt-1.5 text-xs" style={{ color: "rgba(239,68,68,0.8)" }}>{errors.date}</p>
                )}
              </div>

              {/* Agreement checkbox */}
              <div>
                <label
                  className="flex cursor-pointer items-start gap-3.5 rounded-xl p-5 transition"
                  style={{
                    backgroundColor: errors.agreed
                      ? "rgba(239,68,68,0.05)"
                      : "rgba(201,169,110,0.05)",
                    border: errors.agreed
                      ? "1.5px solid rgba(239,68,68,0.4)"
                      : "1.5px solid rgba(201,169,110,0.15)",
                  }}
                >
                  <div className="relative mt-0.5 flex-shrink-0">
                    <input
                      type="checkbox"
                      checked={form.agreed}
                      onChange={(e) => set("agreed", e.target.checked)}
                      className="sr-only"
                    />
                    <div
                      className="flex h-5 w-5 items-center justify-center rounded"
                      style={{
                        backgroundColor: form.agreed ? "#C9A96E" : "rgba(255,255,255,0.06)",
                        border: form.agreed ? "none" : "1.5px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      {form.agreed && (
                        <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                          <path d="M1 4.5L3.8 7.5L10 1" stroke="#1C2744" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                    I agree with the Terms outlined in the Gildre Mentor Code of Conduct <span style={{ color: "#C9A96E" }}>*</span>
                  </span>
                </label>
                {errors.agreed && (
                  <p className="mt-1.5 text-xs" style={{ color: "rgba(239,68,68,0.8)" }}>{errors.agreed}</p>
                )}
              </div>

              {/* Submit */}
              <div className="pt-2">
                {submitError && (
                  <p className="mb-3 rounded-lg px-4 py-2.5 text-sm" style={{ backgroundColor: "rgba(239,68,68,0.1)", color: "rgba(239,68,68,0.9)", border: "1px solid rgba(239,68,68,0.2)" }}>
                    {submitError}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-xl py-4 text-sm font-bold tracking-wide transition-opacity hover:opacity-90 sm:w-auto sm:px-10 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
                >
                  {submitting ? "Submitting…" : "Submit Acknowledgement"}
                </button>
                <p className="mt-3 text-[0.7rem]" style={{ color: "rgba(255,255,255,0.3)" }}>
                  All required fields must be completed before submitting.
                </p>
              </div>
            </form>
          </div>
        )}

        {/* Footer rule */}
        <div className="mt-16 h-px" style={{ backgroundColor: "rgba(201,169,110,0.15)" }} />
        <p className="mt-6 text-center text-xs text-zinc-600">
          &copy; {new Date().getFullYear()} Gildre, LLC. All rights reserved. &nbsp;·&nbsp;{" "}
          <a href="/privacy" className="underline underline-offset-2 hover:text-zinc-400 transition-colors">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}
