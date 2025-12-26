import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Sans_3, Sulphur_Point } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ui/ScrollProgress";

export const sulphur = Sulphur_Point({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-sulphur-point",
  display: "swap",
});

export const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shwetha",
  description: "Shwetha's portfoliooo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sulphur.variable} ${sourceSans.variable} antialiased`}
      >
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
