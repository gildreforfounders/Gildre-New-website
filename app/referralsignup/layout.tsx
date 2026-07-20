import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gildre Referral Program Sign Up",
  description:
    "Sign up for the Gildre Referral Program and earn an ongoing 20% monthly stipend for every founder you refer who joins the network.",
  robots: { index: false, follow: false },
};

export default function ReferralSignupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
