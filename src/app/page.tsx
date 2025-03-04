import Counter from "@/components/counter";
import NiamCard from "@/components/niam-card";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { NIAM_CARDS } from "@/lib/constants";

export default function Home() {
  return (
    <div className="p-4 pt-0 pb-4 flex flex-col gap-12">
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
