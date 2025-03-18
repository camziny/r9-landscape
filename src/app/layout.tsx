import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopNav } from "./components/TopNav";
import { Footer } from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Route 9 Landscape Products",
  description:
    "Route 9 Landscape Products offers a comprehensive selection of high-quality landscaping materials, including soil, gravel, sand, and decorative stones. Whether you're a professional landscaper or a DIY enthusiast, we have everything you need to create and maintain beautiful outdoor spaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.className} flex flex-col min-h-screen`}>
        <TopNav />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
