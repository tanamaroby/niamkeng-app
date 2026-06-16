"use client";

import { usePreferences } from "@/components/preferences-provider";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TextSize } from "@/lib/preferences";

const SettingsTextSizeControl = () => {
  const { textSize, setTextSize } = usePreferences();

  return (
    <Tabs
      value={textSize}
      onValueChange={(value) => setTextSize(value as TextSize)}
    >
      <TabsList className="w-full">
        <TabsTrigger value="small" className="flex-1">
          Small
        </TabsTrigger>
        <TabsTrigger value="medium" className="flex-1">
          Medium
        </TabsTrigger>
        <TabsTrigger value="large" className="flex-1">
          Large
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default SettingsTextSizeControl;
