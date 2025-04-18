"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed h-16 top-0 z-50 w-full px-4 py-3 flex items-center justify-between bg-gradient-to-b from-[var(--primary-background)] to-white transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <SidebarTrigger />
      {/* Left: Logo + Brand */}
      <Link href="/" aria-label="Home">
        <div className="flex items-center gap-2">
          <Image
            height={36}
            width={36}
            src="/navbar-icon.png"
            alt="FBC Logo"
            className="rounded-md"
          />
          <p className="text-xl font-bold tracking-tight text-secondary">FBC</p>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
