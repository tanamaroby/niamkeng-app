import { AppSidebar } from "@/components/app-sidebar";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ServiceWorkerRegister from "@/components/service-worker-register";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata, Viewport } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";

const font = Inconsolata({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Flourishing Buddhist Center",
    template: "%s | FBC",
  },
  description:
    "Chant texts and audio for Flourishing Buddhist Center practices — read along while you listen.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "FBC",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#27548a",
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
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
