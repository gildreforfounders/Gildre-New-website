import { NextRequest, NextResponse } from "next/server";

const WEB3FORMS_KEY = "975e3f10-dc81-4bc4-9e17-3ff07d36f1df";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { formType, ...fields } = data;

  let subject = "";
  let emailFields: Record<string, string> = {};

  switch (formType) {
    case "mentorcode":
      subject = `[Gildre] Mentor Code Signed — ${fields.firstName} ${fields.lastName}`;
      emailFields = {
        Name: `${fields.firstName} ${fields.lastName}`,
        Email: fields.email,
        "Date Acknowledged": fields.date,
        Agreed: "Yes",
        Submitted: fields.timestamp,
      };
      break;

    case "referralsignup":
      subject = `[Gildre] Referral Program Sign-Up — ${fields.firstName} ${fields.lastName}`;
      emailFields = {
        Name: `${fields.firstName} ${fields.lastName}`,
        Email: fields.email,
        "Newsletter Opt-In": fields.newsletter,
        Submitted: fields.timestamp,
      };
      break;

    case "referral":
      subject = `[Gildre] New Referral — ${fields.refFirstName} ${fields.refLastName} via ${fields.yourFirstName} ${fields.yourLastName}`;
      emailFields = {
        "Referred Name": `${fields.refFirstName} ${fields.refLastName}`,
        "Referred Email": fields.refEmail,
        "Referred LinkedIn": fields.refLinkedIn,
        Relationship: fields.relationship,
        "Referred By": `${fields.yourFirstName} ${fields.yourLastName}`,
        Submitted: fields.timestamp,
      };
      break;

    case "contact":
      subject = `[Gildre Contact] ${fields.subject} — ${fields.firstName} ${fields.lastName}`;
      emailFields = {
        Name: `${fields.firstName} ${fields.lastName}`,
        Email: fields.email,
        Subject: fields.subject,
        Message: fields.message,
        Submitted: fields.timestamp,
      };
      break;

    default:
      return NextResponse.json({ error: "Unknown form type" }, { status: 400 });
  }

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_KEY,
      subject,
      from_name: "Gildre Website",
      ...emailFields,
    }),
  });

  const result = await res.json();

  if (!result.success) {
    console.error("[submit] Web3Forms error:", result.message);
    return NextResponse.json({ error: result.message }, { status: 500 });
  }

  console.log("[submit] Email sent via Web3Forms, form:", formType);
  return NextResponse.json({ success: true });
}
