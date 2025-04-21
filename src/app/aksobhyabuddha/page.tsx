import Audio from "@/components/audio-player";
import BackLink from "@/components/back-link";
import ChantTitle from "@/components/chant-title";
import Counter from "@/components/counter";
import NiamCard from "@/components/niam-card";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { AKSOBHYABUDDHA, AKSOBHYABUDDHA_COOKIE_KEY } from "@/lib/constants";
import Image from "next/image";

export default function AksobhyabuddhaPage() {
  return (
    <div className="p-4 pt-0 flex flex-col gap-4">
      <Image
        height={1024}
        width={760}
        src="/niam-background-blue.jpeg"
        alt="Niam Background"
        loading="lazy"
        className="opacity-40 -z-10 fixed inset-0 h-full w-full object-cover"
      />
      <BackLink href="/" />
      <ChantTitle>AKSOBHYABUDDHA DHARANI SUTRA</ChantTitle>
      <Audio src="/aksobhyabuddha.mp3" />
      <Audio
        src="/aksobhyabuddha-song.mp3"
        title="Song Version"
        titleClassname="text-lg tracking-wide font-semibold"
      />
      <div className="flex flex-col gap-4 items-center justify-center">
        {AKSOBHYABUDDHA.map((card, i) => {
          return (
            <NiamCard
              key={`${card.title}-${i}`}
              linesClassname="uppercase"
              {...card}
            />
          );
        })}
      </div>
      <Counter cookieKey={AKSOBHYABUDDHA_COOKIE_KEY} />
      <ScrollToTopButton />
    </div>
  );
}
