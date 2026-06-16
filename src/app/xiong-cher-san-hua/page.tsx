import Audio from "@/components/audio-player";
import BackLink from "@/components/back-link";
import ChantHero from "@/components/chant-hero";
import Counter from "@/components/counter";
import StaticCard from "@/components/static-card";
import {
  XIONG_CHER_SAN_HUA,
  XIONG_CHER_SAN_HUA_COOKIE_KEY,
} from "@/lib/constants";
import Image from "next/image";

export default function XiongCherSanHuaPage() {
  return (
    <div className="p-4 flex flex-col gap-6 items-center">
      <BackLink href="/" />
      <ChantHero
        image={{ src: "/xiong-cher-san-hua.jpeg", alt: "Xiong Cher San Hua" }}
      >
        Xiong Cher San Hua
      </ChantHero>
      <Audio src="/xiong-cher-san-hua.mp3" />
      <div className="w-full p-3 rounded-2xl border bg-card shadow-sm">
        <Image
          height={1024}
          width={760}
          src="/xiong-cher-san-hua.jpeg"
          alt="Xiong Cher San Hua"
          loading="lazy"
          className="w-full h-auto object-contain rounded-lg"
        />
      </div>
      <StaticCard {...XIONG_CHER_SAN_HUA} />
      <Counter cookieKey={XIONG_CHER_SAN_HUA_COOKIE_KEY} />
    </div>
  );
}
