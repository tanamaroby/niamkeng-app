import Audio from "@/components/audio-player";
import BackLink from "@/components/back-link";
import ChantTitle from "@/components/chant-title";
import Counter from "@/components/counter";
import { PADMASAMBHAVA_COOKIE_KEY } from "@/lib/constants";
import Image from "next/image";

export default function OmAHungPage() {
  return (
    <div className="p-4 pt-0 flex flex-col gap-4">
      <BackLink href="/" />
      <ChantTitle>Padmasambhava Matra</ChantTitle>
      <Audio src="/om-a-hung.mp3" />
      <Image
        height={1024}
        width={760}
        src="/om-a-hung.jpeg"
        alt="Om A Hung Background"
        loading="lazy"
        className="inset-0 h-full w-full object-contain rounded-xl"
      />
      <Counter cookieKey={PADMASAMBHAVA_COOKIE_KEY} />
    </div>
  );
}
