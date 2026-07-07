"use client";
import { useState } from "react";
import Link from "next/link";

const sections = [
  {
    n: "1",
    title: "How The Program Works",
    body: "This Program allows Referrers/Affiliates to earn rewards or commissions by referring customers to the Company's products or services. To participate in the Program, Referrers/Affiliates must agree to these Terms and comply with all applicable laws and regulations.",
    subsections: [],
  },
  {
    n: "2",
    title: "A Referral Is",
    body: "A referred/recommended candidate who meets the Gildre membership criteria and successfully joins for a minimum of 1 month. A qualified referral is counted once said candidate registers and pays their first month membership dues in the Gildre Community.",
    subsections: [],
  },
  {
    n: "3",
    title: "Rewards, Commission And Offers",
    body: 'Any qualified Referral provides 20% of their membership dues in a "Membership Stipend" for the referring member and ongoing commission for the lifetime duration so long as both members remain in the Gildre Community. At the Referrer\'s choice we can also make a donation to any nonprofit or charity in their name. Qualified referrals are tracked in the Gildre internal dashboard.',
    subsections: [],
  },
  {
    n: "4",
    title: "Issuing Of Rewards And Offers",
    body: "Membership Stipends or donations are issued quarterly on the first Monday of every quarter (Jan 1, Apr 1, Jul 1, Oct 1). A qualified referral is counted once said candidate registers and pays their first month membership dues in the Gildre Community. For Referrers with earned commission we will email you directly for the preferred way to accept commissions (Zelle, etc.). For those who earn more than $600 in any calendar year we will ask you for an IRS Form W-9 as you will receive a 1099 form from us for tax-reporting purposes.",
    subsections: [],
  },
  {
    n: "5",
    title: "Privacy",
    body: "All personal information collected and processed as part of this Referral Program will be used in accordance with Gildre's Privacy Policy, available at the Gildre.com website. Under the applicable laws and regulations, Gildre shall be responsible for collecting and processing such personal information.",
    subsections: [],
  },
  {
    n: "6",
    title: "General",
    body: null,
    subsections: [
      {
        n: "6.1",
        body: 'These Referral Terms are published by Gildre ("we", "us" and "our"). Our Referral Program as displayed on our Website and these Terms form a binding agreement for both Referring Users ("you" or "your(s)") and people who receive our referral invitation.',
      },
      {
        n: "6.2",
        body: "This Referral Program permits you to invite your contacts to participate in one or more Referral Program(s).",
      },
      {
        n: "6.3",
        body: "You may only invite personal friends, family members, colleagues and acquaintances to this Referral Program. For example you should not be mass-promoting or spamming other communities with your affiliate/referral link.",
      },
    ],
  },
  {
    n: "7",
    title: "Completed Referrals and Limit",
    body: null,
    subsections: [
      {
        n: "7.1",
        body: "A Completed Referral is when a Referring User refers this Program to one of its contacts. Subsequently, that contact will either sign-up, make a purchase or complete whatever action is determined as a referral above — which is not canceled or disputed in accordance with Section 4.",
      },
      {
        n: "7.2",
        body: "A limit to the number of referrals by Referring Users may apply in the future. Or we may specify a maximum number of Completed Referrals who are eligible for the benefits of this Program. All existing referrals will be grandfathered in accordance with any limit should it occur.",
      },
      {
        n: "7.3",
        body: "All referred people must be new and first-time Users. Existing Users and Prior Members/Users cannot participate in and benefit from the Referral Program.",
      },
      {
        n: "7.4",
        body: "You represent that all personal information provided is 100% correct and up to date. We may monitor your use of the Referral Program or request your ID to verify your identity before issuing rewards.",
      },
    ],
  },
  {
    n: "8",
    title: "Restrictions",
    body: null,
    subsections: [
      {
        n: "8.1",
        body: "This Program cannot be combined with any other referral programs, discounts, vouchers, benefits or incentives activated by Gildre. By participating in this Referral Program, we may restrict you from any other promotion, program, discount, or vouchers.",
      },
      {
        n: "8.2",
        body: "You understand and agree that you must not use referral methods that are bothersome to the recipients. Moreover, your participation in the Referral Program must not violate the applicable law, including but not limited to anti-Spam legislation, which is mass distribution of unsolicited messages.",
      },
      {
        n: "8.3",
        body: "You must not publish our Referral Program on any sites or platforms that house any Adult Content, Alcohol, Tobacco, Gambling, Games and Online Casinos, Political Content, and any form of illegal activities.",
      },
      {
        n: "8.4",
        body: "You must not at any time, invite or refer people who are unknown to you.",
      },
      {
        n: "8.5",
        body: "You must only use our Referral Program for personal use and refrain from its use for commercial purposes.",
      },
    ],
  },
  {
    n: "9",
    title: "Term and Termination",
    body: null,
    subsections: [
      {
        n: "9.1",
        body: "This Referral Program will run until the announced date and that date can be extended or restricted. We may also in our sole discretion notify Users that the Referral Program has ended with immediate effect.",
      },
      {
        n: "9.2",
        body: "Any referral made before the end of the Referral Program can still participate. However we may exclude referrals in our sole discretion made after its termination date.",
      },
      {
        n: "9.3",
        body: "We may terminate this Referral Program at any time, including your participation or the availability of its benefits.",
      },
    ],
  },
  {
    n: "10",
    title: "Exclusive Relationship",
    body: null,
    subsections: [
      {
        n: "10.1",
        body: "You understand and agree that you are only the User of our services and/or products, and refrain from implying any other affiliation or legal relationship with us.",
      },
      {
        n: "10.2",
        body: "You understand and agree that you are never authorized to legally bind our company.",
      },
      {
        n: "10.3",
        body: "You must never create any materials that contain our branding, trademark, (part of) our corporate identity.",
      },
      {
        n: "10.4",
        body: "By participating in the Referral Program you must not represent yourself as a duplicate, agent or intermediary of our company.",
      },
    ],
  },
  {
    n: "11",
    title: "Privacy and Information",
    body: null,
    subsections: [
      {
        n: "11.1",
        body: "You undertake to respect the privacy rights of the people you invite to our Referral Program and direct to our website.",
      },
      {
        n: "11.2",
        body: "When referring other people, you must always inform them about the applicable terms and conditions and privacy policy. You must do so before they participate in the Referral Program, and leave their personal information.",
      },
    ],
  },
  {
    n: "12",
    title: "Amendments",
    body: "We may amend the terms and conditions of our Referral Program. We may offer and/or restrict additional incentives, benefits and programs. As a result, additional terms may apply. You agree that you are aware of those amended and additional terms.",
    subsections: [],
  },
  {
    n: "13",
    title: "Violations and Termination",
    body: null,
    subsections: [
      {
        n: "13.1",
        body: "In case we suspect any violations of these terms or otherwise tampering with, fraud or unreasonable use of our Referral Program, we may in our sole discretion cancel the distribution of any discount, benefit or payout.",
      },
      {
        n: "13.2",
        body: "If you are a current or former employee, contractor or affiliate of our company, we may restrict your participation in the Referral Program, and we may restrict or cancel your participation with immediate effect.",
      },
      {
        n: "13.3",
        body: "You must comply with all applicable laws and regulations, and refrain from violating any third party rights. These rights include any copyright, trademark or other proprietary rights.",
      },
    ],
  },
  {
    n: "14",
    title: "Disclaimer and Indemnification",
    body: null,
    subsections: [
      {
        n: "14.1",
        body: 'We offer our Referral Program and its benefits only on an "as is" and "as available" basis. We may remove, change and update the Referral Program at our sole discretion. We will never make any promises or guarantees about the content and information of our Referral Program. We disclaim our responsibility for any information that is incorrect or has errors.',
      },
      {
        n: "14.2",
        body: "Our Referral Program is based on our best efforts. You acknowledge and agree that we can never guarantee any benefit or result from participating in the Referral Program.",
      },
      {
        n: "14.3",
        body: "You will defend, indemnify and hold Gildre harmless from and against all claims, damages, liabilities, losses, expenses and costs (including reasonable attorneys' fees) arising out of your participation in the Referral Program.",
      },
    ],
  },
  {
    n: "15",
    title: "No Correspondence, Disputes And Refunds",
    body: 'With regards to the distribution of discounts, vouchers, incentives, prizes, awards or other benefits, no correspondence will be entered into. Moreover, we shall never respond to any complaint or accept any dispute about the Referral Program, and the abovementioned benefits are provided "as is" and we never refund or exchange such benefits.',
    subsections: [],
  },
  {
    n: "16",
    title: "Applicable Law",
    body: "The law of our residence shall apply and the court in that country is competent to hear any claim that may arise out of these terms.",
    subsections: [],
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

export default function ReferralAgreementPage() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    date: "",
    agreed: false,
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
    if (!form.date) errs.date = "Date is required.";
    if (!form.agreed) errs.agreed = "You must agree to the terms to proceed.";
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
      `Gildre Referral Agreement — ${form.firstName} ${form.lastName}`
    );
    const body = encodeURIComponent(
      `Gildre Referral Agreement Acknowledgement\n\n` +
      `Name: ${form.firstName} ${form.lastName}\n` +
      `Email: ${form.email}\n` +
      `Date Acknowledged: ${form.date}\n` +
      `Agreed to Terms: Yes\n\n` +
      `This acknowledgement was submitted electronically via gildre.com/referralagreement.`
    );
    window.open(`mailto:Info@Gildre.com?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
  }

  return (
    <div style={{ backgroundColor: "#0f1524", minHeight: "100vh" }}>

      {/* Top nav */}
      <div className="border-b px-6 py-4" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
        <Link href="/referralsignup" className="text-sm text-zinc-500 transition-colors hover:text-white">
          ← Back to Referral Sign-Up
        </Link>
      </div>

      <div className="mx-auto w-full max-w-3xl px-6 py-16 pb-24">

        {/* Header */}
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: "#C9A96E" }}>
          Legal
        </p>
        <h1
          className="mt-3 text-[2rem] font-bold text-white sm:text-[2.5rem]"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Gildre Referral Agreement
        </h1>
        <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
          Please read the full agreement below before signing.
        </p>

        {/* Divider */}
        <div className="my-10 h-px" style={{ backgroundColor: "rgba(201,169,110,0.15)" }} />

        {/* Sections */}
        <div className="space-y-9">
          {sections.map((s) => (
            <div key={s.n} className="flex gap-5">
              <div
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold"
                style={{ backgroundColor: "rgba(201,169,110,0.12)", color: "#C9A96E" }}
              >
                {s.n}
              </div>
              <div className="flex-1">
                <h3
                  className="text-sm font-bold text-white"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {s.title}
                </h3>
                {s.body && (
                  <p className="mt-2 text-sm leading-[1.85]" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {s.body}
                  </p>
                )}
                {s.subsections.length > 0 && (
                  <div className="mt-3 space-y-3">
                    {s.subsections.map((sub) => (
                      <div key={sub.n} className="flex gap-3">
                        <span
                          className="flex-shrink-0 pt-[1px] text-xs font-semibold"
                          style={{ color: "rgba(201,169,110,0.6)", minWidth: "2.8rem" }}
                        >
                          {sub.n}
                        </span>
                        <p className="text-sm leading-[1.85]" style={{ color: "rgba(255,255,255,0.6)" }}>
                          {sub.body}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
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
              Agreement Acknowledged
            </h3>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Thank you, <span className="font-semibold text-white">{form.firstName} {form.lastName}</span>. Your electronic acknowledgement of the Gildre Referral Agreement has been submitted. A confirmation has been sent to <span className="text-white">{form.email}</span>.
            </p>
            <p className="mt-5 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
              Questions?{" "}
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
              Gildre Referral Agreement Acknowledgement Form
            </h2>
            <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              By submitting this form, you confirm that you have read, understood, and agree to the terms of the Gildre Referral Agreement above.
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
                    className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: errors.firstName ? "1.5px solid rgba(239,68,68,0.6)" : "1.5px solid rgba(255,255,255,0.1)",
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
                    className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: errors.lastName ? "1.5px solid rgba(239,68,68,0.6)" : "1.5px solid rgba(255,255,255,0.1)",
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
                  className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: errors.email ? "1.5px solid rgba(239,68,68,0.6)" : "1.5px solid rgba(255,255,255,0.1)",
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
                  className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: errors.date ? "1.5px solid rgba(239,68,68,0.6)" : "1.5px solid rgba(255,255,255,0.1)",
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
                  className="flex cursor-pointer items-start gap-3.5 rounded-xl p-5"
                  style={{
                    backgroundColor: errors.agreed ? "rgba(239,68,68,0.05)" : "rgba(201,169,110,0.05)",
                    border: errors.agreed ? "1.5px solid rgba(239,68,68,0.4)" : "1.5px solid rgba(201,169,110,0.15)",
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
                    I agree with the Terms outlined in the Gildre Referral Agreement{" "}
                    <span style={{ color: "#C9A96E" }}>*</span>
                  </span>
                </label>
                {errors.agreed && (
                  <p className="mt-1.5 text-xs" style={{ color: "rgba(239,68,68,0.8)" }}>{errors.agreed}</p>
                )}
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-xl py-4 text-sm font-bold tracking-wide transition-opacity hover:opacity-90 sm:w-auto sm:px-10"
                  style={{ backgroundColor: "#C9A96E", color: "#1C2744" }}
                >
                  Submit
                </button>
                <p className="mt-3 text-[0.7rem]" style={{ color: "rgba(255,255,255,0.3)" }}>
                  Submitting will open your email client to send a confirmation to Gildre. All required fields must be completed.
                </p>
              </div>
            </form>
          </div>
        )}

        {/* Footer rule */}
        <div className="mt-16 h-px" style={{ backgroundColor: "rgba(201,169,110,0.15)" }} />
        <p className="mt-6 text-center text-xs text-zinc-600">
          &copy; {new Date().getFullYear()} Gildre, LLC. All rights reserved.{" "}
          &nbsp;&middot;&nbsp;{" "}
          <a href="/privacy" className="underline underline-offset-2 hover:text-zinc-400 transition-colors">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}
