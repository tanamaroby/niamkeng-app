import Audio from "@/components/audio-player";
import BackLink from "@/components/back-link";
import ChantTitle from "@/components/chant-title";
import Counter from "@/components/counter";
import StaticCard from "@/components/static-card";
import {
  XIONG_CHER_SAN_HUA,
  XIONG_CHER_SAN_HUA_COOKIE_KEY,
} from "@/lib/constants";
import Image from "next/image";

export default function XiongCherSanHuaPage() {
  return (
    <div className="p-4 pt-0 flex flex-col gap-4">
      <BackLink href="/" />
      <ChantTitle>Xiong Cher San Hua</ChantTitle>
      <Audio src="/xiong-cher-san-hua.mp3" />
      <Image
        height={1024}
        width={760}
        src="/xiong-cher-san-hua.jpeg"
        alt="Xiong Cher San Hua Image"
        loading="lazy"
        className="inset-0 h-full w-full object-contain rounded-xl"
      />
      <StaticCard {...XIONG_CHER_SAN_HUA} />
      <Counter cookieKey={XIONG_CHER_SAN_HUA_COOKIE_KEY} />
    </div>
  );
}
