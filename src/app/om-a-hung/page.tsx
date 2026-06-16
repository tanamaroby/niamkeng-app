import Audio from "@/components/audio-player";
import BackLink from "@/components/back-link";
import ChantHero from "@/components/chant-hero";
import Counter from "@/components/counter";
import { PADMASAMBHAVA_COOKIE_KEY } from "@/lib/constants";
import Image from "next/image";

export default function OmAHungPage() {
  return (
    <div className="p-4 flex flex-col gap-6 items-center">
      <BackLink href="/" />
      <ChantHero image={{ src: "/om-a-hung.jpeg", alt: "Padmasambhava" }}>
        Padmasambhava Mantra
      </ChantHero>
      <Audio src="/om-a-hung.mp3" />
      <div className="w-full p-3 rounded-2xl border bg-card shadow-sm">
        <Image
          height={1024}
          width={760}
          src="/om-a-hung.jpeg"
          alt="Om Ah Hung Banzar Guru Pedma Siddhi Hung"
          loading="lazy"
          className="w-full h-auto object-contain rounded-lg"
        />
      </div>
      <Counter cookieKey={PADMASAMBHAVA_COOKIE_KEY} />
    </div>
  );
}
