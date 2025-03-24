import Audio from "@/components/audio-player";
import BackLink from "@/components/back-link";
import ChantTitle from "@/components/chant-title";
import Counter from "@/components/counter";
import NiamCard from "@/components/niam-card";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { BUDDHA_35, BUDDHA_35_COOKIE_KEY } from "@/lib/constants";
import Image from "next/image";

export default function Buddha35Page() {
  return (
    <div className="p-4 pt-0 flex flex-col gap-4">
      <Image
        height={1024}
        width={760}
        src="/niam-background.jpeg"
        alt="Niam Background"
        loading="lazy"
        className="opacity-40 -z-10 fixed inset-0 h-full w-full object-cover"
      />
      <BackLink href="/" />
      <ChantTitle>35 BUDDHA</ChantTitle>
      <Audio src="/35-audio.mp3" />
      <div className="flex flex-col gap-4 items-center justify-center">
        {BUDDHA_35.map((card, i) => {
          return <NiamCard key={`${card.title}-${i}`} {...card} />;
        })}
      </div>
      <Counter cookieKey={BUDDHA_35_COOKIE_KEY} />
      <ScrollToTopButton />
    </div>
  );
}
