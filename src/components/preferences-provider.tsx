"use client";

import {
  DEFAULT_TEXT_SIZE,
  readTextSize,
  TextSize,
  writeTextSize,
} from "@/lib/preferences";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

interface PreferencesContextValue {
  textSize: TextSize;
  setTextSize: (size: TextSize) => void;
}

const PreferencesContext = createContext<PreferencesContextValue>({
  textSize: DEFAULT_TEXT_SIZE,
  setTextSize: () => {},
});

export const PreferencesProvider: FC<PropsWithChildren> = ({ children }) => {
  // Starts at the SSR-safe default and syncs from localStorage after mount —
  // reading localStorage in the initializer would make the client's first
  // hydration pass disagree with the server-rendered markup, and React
  // doesn't patch hydration-mismatched attributes (see TextSizeScope).
  const [textSize, setTextSizeState] = useState<TextSize>(DEFAULT_TEXT_SIZE);

  useEffect(() => {
    setTextSizeState(readTextSize());
  }, []);

  const setTextSize = (size: TextSize) => {
    setTextSizeState(size);
    writeTextSize(size);
  };

  return (
    <PreferencesContext.Provider value={{ textSize, setTextSize }}>
      {children}
    </PreferencesContext.Provider>
  );
};

export function usePreferences() {
  return useContext(PreferencesContext);
}
