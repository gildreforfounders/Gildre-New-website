import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gildre — The Home for Founders Who Execute",
  description: "Get direct access to members, founders, and the insights you need to build with certainty.",
  openGraph: {
    title: "Gildre — The Home for Founders Who Execute",
    description: "Join 250+ founders building, scaling, and exiting together.",
    url: "https://www.gildre.com",
    siteName: "Gildre",
    images: [
      {
        url: "https://www.gildre.com/images/gildre-logo.png",
        width: 800,
        height: 600,
        alt: "Gildre",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gildre — The Home for Founders Who Execute",
    description: "Join 250+ founders building, scaling, and exiting together.",
    images: ["https://www.gildre.com/images/gildre-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
          <Navbar />
          {children}
        </body>
    </html>
  );
}
