import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--inter",
 });

export const metadata: Metadata = {
  title: "Soundify",
  description: "Enjoy your favourite music!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={cn( "min-h-screen bg-background font-sans antialiased",inter.variable)}>
          {children}
        </body>
    </html>
  );
}
