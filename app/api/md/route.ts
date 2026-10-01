import { NextRequest, NextResponse } from "next/server";

const MD_HEADERS = {
  "Content-Type": "text/markdown; charset=utf-8",
  Vary: "Accept",
};

const pages: Record<string, string> = {
  "/": `# Gildre — Private Startup Founder Community

Gildre is a private membership community for startup founders offering stage-matched peer introductions, 1:1 mentorship from exited operators, and curated programming — from pre-revenue through $5M+ ARR. No equity taken.

## Membership Tiers

- **Silver** — $59/month. Build stage (pre-revenue to $500K ARR). Peer introductions, virtual events, partner perks.
- **Gold** — $149/month. Growth stage ($500K–$5M ARR). Everything in Silver plus monthly advisory sessions and in-person events.
- **Platinum** — $349/month. Scale stage ($5M+ ARR). Everything in Gold plus 1:1 mentor pairing and investor introductions.

Annual billing saves up to 29%.

## Key Links

- Membership: https://www.gildre.com/membership
- Founder Community: https://www.gildre.com/founder-community
- Mentor Network: https://www.gildre.com/mentor
- Content Hub: https://www.gildre.com/content
- Contact: https://www.gildre.com/contact
- Full AI index: https://www.gildre.com/llms.txt
`,

  "/membership": `# Gildre Membership

Three tiers mapped to the Build, Growth, and Scale stages of the founder journey. No equity. Cancel anytime.

- **Silver** — $59/month ($50/mo annual). Pre-revenue to $500K ARR.
- **Gold** — $149/month ($125/mo annual). $500K–$5M ARR. Adds advisory sessions and in-person events.
- **Platinum** — $349/month ($249/mo annual). $5M+ ARR. Adds 1:1 mentor pairing and investor introductions.

Apply at https://www.gildre.com/membership
`,

  "/founder-community": `# Gildre Founder Community

A private, curated startup founder community with 250+ active members, 95% retention rate, and 100+ annual events across 15+ US cities. Human-matched peer introductions and operator mentors — not an algorithm.

Learn more: https://www.gildre.com/founder-community
`,

  "/mentor": `# Gildre Mentor Network

20+ expert mentors available for 1:1 sessions. Mentors include:

- Fritz Lanman — CEO ClassPass / Mindbody, led Microsoft's $240M Facebook investment
- Diana Stepner — VP Product, Chan Zuckerberg Initiative; former Kayak and Monster
- Sam Bradley — Director of Product, PayPal
- Krishna Dosapati — Founder of Clockout ($1.1M ARR in 10 months)

Details: https://www.gildre.com/mentor
`,
};

const NOT_FOUND_BODY = (path: string) =>
  `# 404 Not Found

The page \`${path}\` does not exist on gildre.com.

For a full index of available content, see:
https://www.gildre.com/llms.txt

Key pages:
- Home: https://www.gildre.com/
- Membership: https://www.gildre.com/membership
- Founder Community: https://www.gildre.com/founder-community
- Content Hub: https://www.gildre.com/content
- Contact: https://www.gildre.com/contact
`;

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path") ?? "/";
  const content = pages[path];

  if (!content) {
    return new NextResponse(NOT_FOUND_BODY(path), {
      status: 404,
      headers: MD_HEADERS,
    });
  }

  return new NextResponse(content, { headers: MD_HEADERS });
}
