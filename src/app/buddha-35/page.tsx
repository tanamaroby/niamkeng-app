import Audio from "@/components/audio-player";
import BackLink from "@/components/back-link";
import ChantHero from "@/components/chant-hero";
import Counter from "@/components/counter";
import NiamCard from "@/components/niam-card";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { BUDDHA_35, BUDDHA_35_COOKIE_KEY } from "@/lib/constants";

export default function Buddha35Page() {
  return (
    <div className="p-4 flex flex-col gap-6 items-center">
      <BackLink href="/" />
      <ChantHero image={{ src: "/niam-background.jpeg", alt: "35 Buddha" }}>
        35 Buddha
      </ChantHero>
      <Audio src="/35-audio.mp3" />
      <div className="w-full flex flex-col gap-4 items-center">
        {BUDDHA_35.map((card, i) => {
          return <NiamCard key={`${card.title}-${i}`} {...card} />;
        })}
      </div>
      <Counter cookieKey={BUDDHA_35_COOKIE_KEY} />
      <ScrollToTopButton />
    </div>
  );
}
