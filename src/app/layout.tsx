import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Church Street Studio - Creative Space in Greenville, TX",
    template: "%s | Church Street Studio",
  },
  description:
    "Book a pet-friendly creative space in Greenville, TX. Perfect for remote work, events, podcasting, and overnight stays. Starting at $41.",
  keywords: [
    "creative space",
    "Greenville TX",
    "event venue",
    "remote work",
    "short term rental",
    "pet friendly",
    "Church Street Studio",
  ],
  openGraph: {
    title: "Church Street Studio",
    description:
      "A creative space with small-town soul. Book for remote work, events, or overnight stays in Greenville, TX.",
    url: "https://churchst.studio",
    siteName: "Church Street Studio",
    locale: "en_US",
    type: "website",
  },
};

// Johnny Outlaw, LLC
// Designed in Greenville, TX
// Church Street Studio - churchst.studio

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
