"use client";

import { cn } from "@/lib/utils";
import { FC, useRef, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Button } from "./ui/button";

interface AudioProps {
  src: string;
  title?: string;
  titleClassname?: string;
}

const Audio: FC<AudioProps> = ({ src, title = "Audio", titleClassname }) => {
  const playerRef = useRef<any>(null);
  const [speed, setSpeed] = useState(1.0);
  const speeds = [0.5, 0.75, 1.0, 1.25, 1.5, 2.0];

  const handleSpeedChange = (rate: number) => {
    setSpeed(rate);
    if (playerRef.current?.audio?.current) {
      playerRef.current.audio.current.playbackRate = rate;
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center w-full">
      <p
        className={cn(
          "text-xl font-bold tracking-wider uppercase text-center",
          titleClassname
        )}
      >
        {title}
      </p>

      <AudioPlayer
        ref={playerRef}
        src={src}
        className="w-full max-w-xl rounded-xl shadow-md"
      />

      <div className="flex flex-wrap justify-center gap-2">
        {speeds.map((rate) => (
          <Button
            key={rate}
            onClick={() => handleSpeedChange(rate)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all active:scale-95
              ${speed === rate ? "" : "bg-muted-foreground"}
            `}
          >
            <p>{rate}×</p>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Audio;
