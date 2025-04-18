"use client";

import NavCard from "@/components/nav-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChineseNavCard from "./chinese-nav-card";

export function ChantTabs() {
  return (
    <Tabs
      defaultValue="sanskrit"
      className="w-full flex flex-col items-center gap-6"
    >
      <TabsList>
        <TabsTrigger value="sanskrit">Sanskrit Chants</TabsTrigger>
        <TabsTrigger value="chinese">Chinese Chants</TabsTrigger>
      </TabsList>

      <TabsContent
        value="sanskrit"
        className="flex flex-col gap-4 items-center w-full"
      >
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
      </TabsContent>

      <TabsContent
        value="chinese"
        className="flex flex-col gap-4 items-center w-full"
      >
        <ChineseNavCard
          hanzi={["甘", "露", "施", "食", "儀", "軌"]}
          href="/kan-lu-she-she-yi-kuei"
          pinyin={["gān", "lù", "shī", "shí", "yí", "guǐ"]}
        />
      </TabsContent>
    </Tabs>
  );
}
