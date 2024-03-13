import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { SessionProvider } from "next-auth/react"
import { auth } from "@/auth"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Strategic Management Dashboard",
  description: "LPPSA Strategic Management Dashboard",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()
  return (
    <html lang="en">
      <SessionProvider session={session}>
        
        <body className={inter.className}>{children}</body>
      </SessionProvider>
    </html>
  );
}
