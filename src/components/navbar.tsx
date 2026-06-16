"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <div className="sticky top-0 z-20 h-16 w-full px-3 sm:px-6 flex items-center justify-between bg-sidebar/95 backdrop-blur-sm border-b border-sidebar-border">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="size-9" />
        <Link href="/" aria-label="Home" className="flex items-center gap-2.5">
          <Image
            height={36}
            width={36}
            src="/Logo.png"
            alt="FBC Logo"
            className="rounded-full w-9 h-9 object-cover ring-1 ring-sidebar-border"
          />
          <p className="font-serif text-xl font-semibold tracking-tight text-sidebar-foreground">
            <span className="sm:hidden">FBC</span>
            <span className="hidden sm:inline">Flourishing Buddhist Center</span>
          </p>
        </Link>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
      >
        {resolvedTheme === "dark" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
};

export default Navbar;
