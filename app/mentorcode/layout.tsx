import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gildre Mentor Code of Conduct",
  description: "Review and acknowledge the Gildre Mentor Code of Conduct before joining the mentor program.",
  robots: { index: false, follow: false },
};

export default function MentorCodeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
