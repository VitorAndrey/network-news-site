import "./globals.css";
import type { Metadata } from "next";

import { Inter } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";

import { Header } from "@/components/header";
import { SideNavigation } from "@/components/side-navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "network news",
  description: "O site perfeito para quem ama tecnologia",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          <main className="flex">
            <SideNavigation />
            {children}
            <Analytics />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
