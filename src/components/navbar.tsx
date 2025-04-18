"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`h-16 w-full px-4 py-3 flex items-center justify-between bg-sidebar`}
    >
      <SidebarTrigger />
      {/* Left: Logo + Brand */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
        <Link href="/" aria-label="Home">
          <div className="flex items-center gap-2">
            <Image
              height={36}
              width={36}
              src="/Logo.png"
              alt="FBC Logo"
              className="rounded-md h-auto"
            />
            <p className="text-xl font-bold tracking-tight">FBC</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
