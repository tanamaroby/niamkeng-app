import { AppSidebar } from "@/components/app-sidebar";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const font = Jost({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FBC",
  description: "FBC Resources",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased flex flex-col min-h-screen`}
      >
        <SidebarProvider defaultOpen={false}>
          <AppSidebar />
          <main>
            <Navbar />
            <main className="flex-grow pt-16">{children}</main>
            <Footer />
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
