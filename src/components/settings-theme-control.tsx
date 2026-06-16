"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const SettingsThemeControl = () => {
  const { theme, setTheme } = useTheme();
  // next-themes can't know the persisted theme during SSR/first paint —
  // render the "system" fallback until mounted to avoid a hydration
  // mismatch, then switch to the real value.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <Tabs value={mounted ? theme ?? "system" : "system"} onValueChange={setTheme}>
      <TabsList className="w-full">
        <TabsTrigger value="light" className="flex-1">
          Light
        </TabsTrigger>
        <TabsTrigger value="dark" className="flex-1">
          Dark
        </TabsTrigger>
        <TabsTrigger value="system" className="flex-1">
          System
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default SettingsThemeControl;
