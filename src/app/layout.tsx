"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./tailwind.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Particles from "@/components/ui/particles";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";

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

export default function RootLayout({
  auth,
  children,
}: Readonly<{
  auth: React.ReactNode;
  children: React.ReactNode;
}>) {
  console.log("RootLayout rendered");

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
      >
        <SessionProvider>
          <Navbar />
          <div className="pt-1">{auth}</div>

          <main className="mt-16 p-10">{children}</main>
          <Particles
            className="fixed inset-0"
            quantity={250}
            ease={80}
            refresh
          />

          <Footer />
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  );
}
