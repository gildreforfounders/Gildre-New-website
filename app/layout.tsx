import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://www.gildre.com"),
  title: "Gildre — The Home for Founders Who Execute",
  description: "Get direct access to members, founders, and the insights you need to build with certainty.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Gildre — The Home for Founders Who Execute",
    description: "Join 250+ founders building, scaling, and exiting together.",
    url: "https://www.gildre.com",
    siteName: "Gildre",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.gildre.com/og-home.png",
        width: 1200,
        height: 630,
        alt: "Gildre — Private Founder Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gildre — The Home for Founders Who Execute",
    description: "Join 250+ founders building, scaling, and exiting together.",
    images: ["https://www.gildre.com/og-home.png"],
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
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="alternate" type="application/rss+xml" title="Gildre — Founder Stories, Guides &amp; Insights" href="https://www.gildre.com/feed.xml" />
      </head>
      <body className="min-h-full flex flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-26LD8J5Q8P"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-26LD8J5Q8P');
          `}
        </Script>
          <Navbar />
          {children}
          <ScrollToTop />
        </body>
    </html>
  );
}
