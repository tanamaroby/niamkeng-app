"use client";

import { Button } from "@/components/ui/button";
import {
  PLAYBACK_SPEEDS,
  readDefaultPlaybackSpeed,
  writeDefaultPlaybackSpeed,
} from "@/lib/preferences";
import { useState } from "react";

const SettingsDefaultSpeedControl = () => {
  const [speed, setSpeed] = useState(() => readDefaultPlaybackSpeed());

  const handleChange = (rate: number) => {
    setSpeed(rate);
    writeDefaultPlaybackSpeed(rate);
  };

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {PLAYBACK_SPEEDS.map((rate) => (
        <Button
          key={rate}
          size="sm"
          variant={speed === rate ? "default" : "outline"}
          onClick={() => handleChange(rate)}
          className="rounded-full px-3 active:scale-95"
        >
          {rate}×
        </Button>
      ))}
    </div>
  );
};

export default SettingsDefaultSpeedControl;
