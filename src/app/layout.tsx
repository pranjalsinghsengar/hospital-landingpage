import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CityCare Hospital | Advanced Healthcare. Compassionate Treatment.",
  description: "CityCare Hospital provides world-class healthcare with experienced specialists, advanced medical equipment, and 24/7 emergency services. Book your appointment today.",
  keywords: "hospital, healthcare, doctors, medical, emergency, cardiology, orthopedics, neurology, pediatrics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}