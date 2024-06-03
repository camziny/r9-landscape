import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Route 9 Landscape Prodcuts",
  description: "Home of all of your landscaping needs",
};

function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Home</div>
      <div>About</div>
      <div>Products</div>
      <div>Contact Us</div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` font-sans ${inter.className} flex flex-col gap-4`}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
