import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Humonos",
  description: "Decentralized agentic-AI robotics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full p-2 bg-[#FFFFFF]`}>
        <div className="min-h-full rounded-lg overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
