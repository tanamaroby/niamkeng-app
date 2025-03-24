import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <div className="bg-gradient-to-b from-[var(--primary-background)] to-white flex items-center justify-between px-6 py-4">
      {/* Left Section: Logo */}
      <div className="flex items-center gap-3">
        <Image height={40} width={40} src="/navbar-icon.png" alt="FBC Logo" />
        <p className="text-2xl font-extrabold text-secondary tracking-wide">
          FBC
        </p>
      </div>

      {/* Right Section: Navigation Links */}
      <div className="flex items-center gap-6">
        <Link
          href="/"
          className="text-secondary hover:text-primary font-medium transition-colors"
        >
          <Home />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
