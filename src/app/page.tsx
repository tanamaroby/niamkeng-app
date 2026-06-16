import { ChantTabs } from "@/components/chant-tabs";
import StaticCard from "@/components/static-card";
import { DEDICATION_PRAYER, MULTIPLY_MANTRA } from "@/lib/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4 sm:p-6 flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-4 pt-4 text-center">
        <Image
          src="/Rinpochest.jpeg"
          alt="Passang Rinpoche"
          height={256}
          width={192}
          priority
          className="rounded-2xl border shadow-md w-40 h-52 sm:w-48 sm:h-64 object-cover object-[75%_30%]"
        />
        <div className="flex flex-col gap-1">
          <h1 className="font-serif text-2xl sm:text-3xl font-semibold tracking-wide text-foreground">
            Flourishing Buddhist Center
          </h1>
          <p className="text-sm italic text-muted-foreground">
            Passang Rinpoche
          </p>
        </div>
      </div>

      <StaticCard {...MULTIPLY_MANTRA} />

      <div className="flex flex-col gap-1.5 text-center">
        <p className="font-serif text-lg font-semibold text-primary">
          Select a chant to begin your practice
        </p>
        <p className="text-sm text-muted-foreground">
          You can also choose a chant from the sidebar menu.
        </p>
      </div>
      <ChantTabs />

      <StaticCard {...DEDICATION_PRAYER} />
    </div>
  );
}
