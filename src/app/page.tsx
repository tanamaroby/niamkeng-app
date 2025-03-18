import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";

const NavButton: FC<PropsWithChildren & { href: string }> = ({
  children,
  href,
}) => {
  return (
    <Link className="w-full" href={href}>
      <Button size="lg" className="uppercase w-full">
        {children}
      </Button>
    </Link>
  );
};

export default function Home() {
  return (
    <div className="p-4 h-full flex flex-grow items-center justify-center flex-col gap-8">
      <p className="text-lg font-semibold">Please select one</p>
      <NavButton href="/buddha-35">35 Buddha</NavButton>
      <NavButton href="/ta-cia-che-yin">Ta Cia Che Yin</NavButton>
      <NavButton href="/aksobhyabuddha">Aksobhyabuddha Dharani Sutra</NavButton>
      <div className="p-6 w-full bg-orange-700 absolute left-0 bottom-0 flex flex-col text-center gap-2 font-semibold">
        <p>Developed by Roby Tanama</p>
        <p>Dedicated to Julia Kurniawan</p>
      </div>
    </div>
  );
}
