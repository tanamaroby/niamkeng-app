import { AppSidebar } from "@/components/app-sidebar";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const font = Noto_Sans({
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
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${font.className} antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider attribute="class" enableSystem={false}>
          <SidebarProvider defaultOpen={false}>
            <AppSidebar />
            <main className="w-full">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
