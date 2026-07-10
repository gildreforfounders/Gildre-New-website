import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO = "info@gildre.com";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const data = await req.json();
  const { formType, ...fields } = data;

  let subject = "";
  let text = "";

  switch (formType) {
    case "mentorcode":
      subject = `[Gildre] Mentor Code Signed — ${fields.firstName} ${fields.lastName}`;
      text = [
        "MENTOR CODE OF CONDUCT — ACKNOWLEDGEMENT",
        "─────────────────────────────────────────",
        `Name:             ${fields.firstName} ${fields.lastName}`,
        `Email:            ${fields.email}`,
        `Date Acknowledged:${fields.date}`,
        `Agreed:           Yes`,
        `Submitted:        ${fields.timestamp}`,
      ].join("\n");
      break;

    case "referralsignup":
      subject = `[Gildre] Referral Program Sign-Up — ${fields.firstName} ${fields.lastName}`;
      text = [
        "REFERRAL PROGRAM — NEW SIGN-UP",
        "──────────────────────────────",
        `Name:          ${fields.firstName} ${fields.lastName}`,
        `Email:         ${fields.email}`,
        `Newsletter:    ${fields.newsletter}`,
        `Submitted:     ${fields.timestamp}`,
      ].join("\n");
      break;

    case "referral":
      subject = `[Gildre] New Referral — ${fields.refFirstName} ${fields.refLastName} via ${fields.yourFirstName} ${fields.yourLastName}`;
      text = [
        "NEW MEMBER REFERRAL",
        "───────────────────",
        "REFERRED PERSON:",
        `  Name:         ${fields.refFirstName} ${fields.refLastName}`,
        `  Email:        ${fields.refEmail}`,
        `  LinkedIn:     ${fields.refLinkedIn}`,
        `  Relationship: ${fields.relationship}`,
        "",
        "REFERRED BY:",
        `  Name:         ${fields.yourFirstName} ${fields.yourLastName}`,
        "",
        `Submitted:     ${fields.timestamp}`,
      ].join("\n");
      break;

    case "contact":
      subject = `[Gildre Contact] ${fields.subject} — ${fields.firstName} ${fields.lastName}`;
      text = [
        "CONTACT FORM SUBMISSION",
        "───────────────────────",
        `From:      ${fields.firstName} ${fields.lastName}`,
        `Email:     ${fields.email}`,
        `Subject:   ${fields.subject}`,
        "",
        "Message:",
        fields.message,
        "",
        `Submitted: ${fields.timestamp}`,
      ].join("\n");
      break;

    default:
      return NextResponse.json({ error: "Unknown form type" }, { status: 400 });
  }

  const result = await resend.emails.send({
    from: "Gildre Forms <onboarding@resend.dev>",
    to: TO,
    subject,
    text,
  });

  if (result.error) {
    console.error("[submit] Resend error:", result.error);
    return NextResponse.json({ error: result.error.message }, { status: 500 });
  }

  console.log("[submit] Email sent:", result.data?.id, "form:", formType);
  return NextResponse.json({ success: true });
}
