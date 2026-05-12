import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ethan Rechichi",
  description: "Portfolio website for Ethan Rechichi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />

        <main className="flex-1">
          <div className="mx-auto max-w-340 px-4">{children}</div>
        </main>

        <Footer />
      </body>
    </html>
  );
}
