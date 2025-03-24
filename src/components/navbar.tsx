"use client";

import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
      {/* Left: Logo + Brand */}
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

      {/* Right: Icon Nav */}
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="rounded-full p-2 bg-muted active:scale-95 transition-transform text-secondary"
          aria-label="Home"
        >
          <Home className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
