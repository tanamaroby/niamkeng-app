import Image from "next/image";
import { FC, PropsWithChildren } from "react";
import ChantTitle from "./chant-title";

interface ChantHeroProps extends PropsWithChildren {
  image: { src: string; alt: string };
}

const ChantHero: FC<ChantHeroProps> = ({ image, children }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-card shadow-lg ring-2 ring-primary/40">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="160px"
          className="object-cover"
          priority
        />
      </div>
      <ChantTitle>{children}</ChantTitle>
    </div>
  );
};

export default ChantHero;
