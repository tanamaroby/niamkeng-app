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
  const playerRef = useRef<AudioPlayer>(null);
  const [speed, setSpeed] = useState(1.0);
  const speeds = [0.5, 0.75, 1.0, 1.25, 1.5, 2.0];

  const handleSpeedChange = (rate: number) => {
    setSpeed(rate);
    if (playerRef.current?.audio?.current) {
      playerRef.current.audio.current.playbackRate = rate;
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center w-full p-5 sm:p-6 rounded-2xl border bg-card shadow-sm">
      <p
        className={cn(
          "font-serif text-lg font-semibold tracking-wide uppercase text-center text-foreground",
          titleClassname
        )}
      >
        {title}
      </p>

      <AudioPlayer
        ref={playerRef}
        src={src}
        className="chant-audio-player w-full"
      />

      <div className="flex flex-wrap justify-center gap-2">
        {speeds.map((rate) => (
          <Button
            key={rate}
            size="sm"
            variant={speed === rate ? "default" : "outline"}
            onClick={() => handleSpeedChange(rate)}
            className="rounded-full px-3 active:scale-95"
          >
            {rate}×
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Audio;
