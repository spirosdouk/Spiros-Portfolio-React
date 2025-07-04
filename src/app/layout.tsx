import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Spiros Doukeris - Frontend Developer Portfolio",
    template: "%s | Spiros Doukeris",
  },
  description:
    "Experienced Frontend Developer specializing in React, Next.js, and TypeScript. View my portfolio showcasing modern web applications and innovative projects.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Web Development",
    "Spiros Doukeris",
    "Computer Science",
    "Full Stack Developer",
  ],
  authors: [{ name: "Spiros Doukeris" }],
  creator: "Spiros Doukeris",
  publisher: "Spiros Doukeris",
  metadataBase: new URL("https://spiros-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spiros-portfolio.vercel.app",
    title: "Spiros Doukeris - Frontend Developer Portfolio",
    description:
      "Experienced Frontend Developer specializing in React, Next.js, and TypeScript. View my portfolio showcasing modern web applications.",
    siteName: "Spiros Doukeris Portfolio",
    images: [
      {
        url: "/images/profile.png",
        width: 800,
        height: 600,
        alt: "Spiros Doukeris - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spiros Doukeris - Frontend Developer Portfolio",
    description:
      "Experienced Frontend Developer specializing in React, Next.js, and TypeScript.",
    images: ["/images/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
