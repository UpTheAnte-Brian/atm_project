import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import NavBar from "./ui/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ATM Project",
  description: "Created for Thomson Reuters by Brian Johnson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {/* <div className=" h-15 -mb-15">
          <NavBar />
        </div> */}
        <main className="bg-blue-200 flex justify-center min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
