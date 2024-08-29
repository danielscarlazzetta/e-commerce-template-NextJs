import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/config/fonts";


export const metadata: Metadata = {
  title: "Que leo curico",
  description: "Tienda virtual, ubicada en curico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
