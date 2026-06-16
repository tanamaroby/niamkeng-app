import Audio from "@/components/audio-player";
import BackLink from "@/components/back-link";
import ChantHero from "@/components/chant-hero";
import Counter from "@/components/counter";
import NiamCard from "@/components/niam-card";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { AKSOBHYABUDDHA, AKSOBHYABUDDHA_COOKIE_KEY } from "@/lib/constants";

export default function AksobhyabuddhaPage() {
  return (
    <div className="p-4 flex flex-col gap-6 items-center">
      <BackLink href="/" />
      <ChantHero
        image={{ src: "/niam-background-blue.jpeg", alt: "Aksobhyabuddha" }}
      >
        Aksobhyabuddha Dharani Sutra
      </ChantHero>
      <div className="w-full flex flex-col gap-4">
        <Audio src="/aksobhyabuddha.mp3" />
        <Audio src="/aksobhyabuddha-song.mp3" title="Song Version" />
      </div>
      <div className="w-full flex flex-col gap-4 items-center">
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
