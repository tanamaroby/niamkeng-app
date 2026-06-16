import Audio from "@/components/audio-player";
import BackLink from "@/components/back-link";
import ChantHero from "@/components/chant-hero";
import Counter from "@/components/counter";
import NiamCard from "@/components/niam-card";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { TA_CIA_CHE_YIN, TA_CIA_CHE_YIN_COOKIE_KEY } from "@/lib/constants";

export default function TaCiaCheYinPage() {
  return (
    <div className="p-4 flex flex-col gap-6 items-center">
      <BackLink href="/" />
      <ChantHero image={{ src: "/niam-background.jpeg", alt: "Ta Cia Che Yin" }}>
        Ta Cia Che Yin
      </ChantHero>
      <Audio src="/ta-cia-che-yin.mp3" />
      <div className="w-full flex flex-col gap-4 items-center">
        {TA_CIA_CHE_YIN.map((card, i) => {
          return (
            <NiamCard
              key={`${card.title}-${i}`}
              linesClassname="uppercase"
              {...card}
            />
          );
        })}
      </div>
      <Counter cookieKey={TA_CIA_CHE_YIN_COOKIE_KEY} />
      <ScrollToTopButton />
    </div>
  );
}
