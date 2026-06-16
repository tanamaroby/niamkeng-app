import { AppSidebar } from "@/components/app-sidebar";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { PreferencesProvider } from "@/components/preferences-provider";
import ServiceWorkerRegister from "@/components/service-worker-register";
import TextSizeScope from "@/components/text-size-scope";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { Inconsolata, Inter, Lora } from "next/font/google";
import "./globals.css";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const displayFont = Lora({
  subsets: ["latin"],
  variable: "--font-display",
});

const monoFont = Inconsolata({
  subsets: ["latin"],
  variable: "--font-mono-num",
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5e9de" },
    { media: "(prefers-color-scheme: dark)", color: "#1d140f" },
  ],
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
        className={cn(
          bodyFont.variable,
          displayFont.variable,
          monoFont.variable,
          "font-sans antialiased flex flex-col min-h-screen"
        )}
      >
        <ThemeProvider attribute="class" enableSystem>
          <PreferencesProvider>
            <SidebarProvider defaultOpen={false}>
              <AppSidebar />
              <main className="w-full">
                <Navbar />
                <main className="grow flex justify-center">
                  <TextSizeScope>{children}</TextSizeScope>
                </main>
                <Footer />
              </main>
            </SidebarProvider>
          </PreferencesProvider>
        </ThemeProvider>
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
