import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import { Providers } from "@/store/storeProvider";
import { DM_Sans, Marcellus } from "next/font/google";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "ecommerce",
  description: "ecommerce admin panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${marcellus.variable} ${dmSans.variable}`}>
      <body className="overflow-hidden">
        <Providers>
          <div className="flex flex-col h-screen">
            {/* Fixed Header */}
            <div className="fixed top-0 left-0 right-0 z-50 h-16 shrink-0">
              <Header />
            </div>

            {/* Content area offset by header height */}
            <div className="flex pt-16 h-full">
              {/* Sidebar container */}
              <div className="h-[calc(100vh-4rem)]">
                <Sidebar />
              </div>

              {/* Main content container */}
              <main className="flex-1 overflow-y-auto h-[calc(100vh-4rem)] p-4">
                {children}
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
