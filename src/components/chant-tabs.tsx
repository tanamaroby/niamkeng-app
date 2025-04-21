"use client";

import NavCard from "@/components/nav-card";

export function ChantTabs() {
  return (
    <div className="flex flex-col gap-4 items-center w-full">
      <NavCard
        href="/buddha-35"
        title="35 Buddha"
        subtitle="The Confession of Downfalls"
      />
      <NavCard
        href="/ta-cia-che-yin"
        title="Ta Cia Che Yin"
        subtitle="The Great Compassion Mantra"
      />
      <NavCard
        href="/aksobhyabuddha"
        title="Aksobhya Buddha"
        subtitle="The Buddha of Unshakable Resolve"
      />
      <NavCard
        href="/om-a-hung"
        title="Padmasambhava Mantra"
        subtitle="Guru Rinpoche Padmasambhava union of wisdom and compassion"
      />
    </div>
  );
}
