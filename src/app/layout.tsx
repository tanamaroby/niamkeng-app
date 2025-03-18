import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Jost } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const font = Jost({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My KBP",
  description: "Hub for KBP Resources",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased dark flex flex-col`}>
        <Image
          height={1024}
          width={760}
          src="/niam-background.jpeg"
          alt="Niam Background"
          loading="lazy"
          className="opacity-50 -z-10 fixed top-1/2 left-0 -mt-[512px] h-[1024px] w-full object-contain"
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
