"use client";

import { usePreferences } from "@/components/preferences-provider";
import { PropsWithChildren } from "react";

export default function TextSizeScope({ children }: PropsWithChildren) {
  const { textSize } = usePreferences();

  return (
    <div className="w-full max-w-3xl" data-text-size={textSize}>
      {children}
    </div>
  );
}
