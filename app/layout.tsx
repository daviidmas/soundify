import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Sidebar from "@/components/sidebar";
import Player from "@/components/player";

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
        <body className={cn("bg-background font-sans antialiased",inter.variable)}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <div className="flex flex-col">
            <div className="flex flex-1">
              <Sidebar></Sidebar>
              <div className="flex-1 p-6">
                {children}
              </div>
            </div>
            <Player></Player>
          </div>
          </ThemeProvider>
        </body>
    </html>
  );
}
