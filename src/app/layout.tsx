import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const font = Jost({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Niamkeng Web App",
  description: "Created for family",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased dark flex flex-col gap-4`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
