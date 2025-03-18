import Counter from "@/components/counter";
import NiamCard from "@/components/niam-card";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { Button } from "@/components/ui/button";
import { AKSOBHYABUDDHA, AKSOBHYABUDDHA_COOKIE_KEY } from "@/lib/constants";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function AksobhyabuddhaPage() {
  return (
    <div className="p-4 pt-0 flex flex-col gap-4">
      <Link href="/">
        <Button variant="link" className="flex items-center gap-2">
          <MoveLeft /> Back to home
        </Button>
      </Link>
      <p className="text-xl font-bold text-center">
        AKSOBHYABUDDHA DHARANI SUTRA
      </p>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold text-center">Audio Source</p>
        <audio controls className="w-full">
          <source src="/aksobhyabuddha.mp3" type="audio/mp3" />
          Your browser does not support audio element.
        </audio>
      </div>
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
