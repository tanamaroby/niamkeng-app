import Image from "next/image";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <div className="bg-orange-700 flex items-center justify-center py-4 gap-4">
      <Image height={32} width={32} src="/navbar-icon.png" alt="FBC Logo" />
      <p className="text-2xl font-bold">FBC</p>
    </div>
  );
};

export default Navbar;
