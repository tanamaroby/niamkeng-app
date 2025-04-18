import NavCard from "@/components/nav-card";
import StaticCard from "@/components/static-card";
import { DEDICATION_PRAYER, MULTIPLY_MANTRA } from "@/lib/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4 h-full flex flex-grow items-center justify-center flex-col gap-8">
      <p className="text-2xl font-bold">FBC Chant Application</p>
      <div className="flex flex-col gap-2 items-center justify-center">
        <Image
          src="/Rinpochest.jpeg"
          alt="Passang Rinpoche Profile"
          height={500}
          width={300}
          className="rounded-lg shadow-md ring-2 ring-accent-foreground"
        />
        <p className="italic">Passang Rinpoche</p>
      </div>
      <StaticCard {...MULTIPLY_MANTRA} />
      <div className="flex flex-col gap-2 text-center">
        <p className="text-lg font-semibold text-primary">
          Select a chant to begin your practice
        </p>
        <p className="text-sm">
          Additionally, you can select the type of chant from the sidebar.
        </p>
      </div>
      <NavCard
        href="/buddha-35"
        title="35 Buddha"
        subtitle="The Confession of Downfalls"
      />
      <NavCard
        href="/ta-cia-che-yin"
        title="Ta Cia Che Yin"
        subtitle="The Great Compassion Mantra"
      />
      <NavCard
        href="/aksobhyabuddha"
        title="Aksobhya Buddha"
        subtitle="The Buddha of Unshakable Resolve"
      />
      <StaticCard {...DEDICATION_PRAYER} />
    </div>
  );
}
