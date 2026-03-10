import type { Metadata } from "next";
import "./globals.css";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
