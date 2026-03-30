import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "@/../utils/ScrollToTopButton";
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
  title: "John Rey F. Billones | Automation Engineer & Full-Stack Developer",
  description:
    "Explore the portfolio of John Rey F. Billones, an automation engineer and full-stack developer building practical data-driven web solutions.",
  keywords: [
    "John Rey F. Billones",
    "John Rey Billones",
    "Automation Engineer",
    "Full Stack Developer",
    "Next.js Portfolio",
    "React Developer",
    "FastAPI",
    "Supabase",
    "n8n",
    "React Developer",
  ],
  authors: [{ name: "John Rey F. Billones" }],
  openGraph: {
    title: "John Rey F. Billones | Personal Portfolio",
    description:
      "Automation engineer and full-stack developer building practical web and workflow systems.",
    url: "https://johnreybillones.vercel.app",
    siteName: "John Rey F. Billones Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "John Rey F. Billones Portfolio Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Rey F. Billones | Automation Engineer",
    description: "Building modern web applications and automation workflows.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [{ url: "/logo.png?v=2", type: "image/png" }],
    shortcut: [{ url: "/logo.png?v=2", type: "image/png" }],
    apple: [{ url: "/logo.png?v=2", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="text-white">
          <div className="container">{children}</div>
        </main>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
