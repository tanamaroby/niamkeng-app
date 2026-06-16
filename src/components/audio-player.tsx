"use client";

import { cn } from "@/lib/utils";
import {
  DEFAULT_PLAYBACK_SPEED,
  PLAYBACK_SPEEDS,
  readDefaultPlaybackSpeed,
} from "@/lib/preferences";
import { FC, useEffect, useRef, useState } from "react";
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
  // Starts at the SSR-safe default and syncs from the persisted preference
  // after mount — these chant pages are statically prerendered, so reading
  // localStorage up front would make the client's first render disagree
  // with the server-rendered markup (which button looks "selected").
  const [speed, setSpeed] = useState(DEFAULT_PLAYBACK_SPEED);
  const speeds = PLAYBACK_SPEEDS;

  useEffect(() => {
    setSpeed(readDefaultPlaybackSpeed());
  }, []);

  const handleSpeedChange = (rate: number) => {
    setSpeed(rate);
    if (playerRef.current?.audio?.current) {
      playerRef.current.audio.current.playbackRate = rate;
    }
  };

  const handleLoadedMetaData = () => {
    if (playerRef.current?.audio?.current) {
      playerRef.current.audio.current.playbackRate = readDefaultPlaybackSpeed();
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
        onLoadedMetaData={handleLoadedMetaData}
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
