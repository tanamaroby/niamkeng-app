import Counter from "@/components/counter";
import NiamCard from "@/components/niam-card";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { NIAM_CARDS } from "@/lib/constants";

export default function Home() {
  return (
    <div className="p-4 pt-0 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold text-center">Audio Source</p>
        <audio controls className="w-full">
          <source src="/35-audio.mp3" type="audio/mp3" />
          Your browser does not support audio element.
        </audio>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        {NIAM_CARDS.map((card, i) => {
          return <NiamCard key={`${card.title}-${i}`} {...card} />;
        })}
      </div>
      <Counter />
      <ScrollToTopButton />
    </div>
  );
}
