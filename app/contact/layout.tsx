import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.gildre.com/contact" },
  title: "Contact Gildre — Get in Touch With Our Team",
  description:
    "Questions about membership, partnerships, or the Start to Scale podcast? Reach Brian, Taiga, or the full Gildre team directly. We respond within one business day.",
  keywords: ["contact Gildre", "Gildre team", "startup community contact", "founder community questions"],
  openGraph: {
    title: "Contact Gildre — Get in Touch With Our Team",
    description:
      "Questions about membership, partnerships, or the Start to Scale podcast? Reach the Gildre team directly.",
    url: "https://www.gildre.com/contact",
    siteName: "Gildre",
    type: "website",
    images: [{ url: "https://www.gildre.com/og-home.png", width: 1200, height: 630, alt: "Gildre contact" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Gildre — Get in Touch With Our Team",
    description: "Questions about membership, partnerships, or the Start to Scale podcast? Reach the Gildre team directly.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
