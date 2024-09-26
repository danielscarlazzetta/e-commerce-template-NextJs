import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/config/fonts";
import { Provider } from "@/components";


export const metadata: Metadata = {
  title: {
    template: '%s - Que leo curico',
    default: 'Home - Que leo curico'
  },
  description: "Tienda virtual, ubicada en curico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html >
  );
}
