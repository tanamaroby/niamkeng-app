"use client";

import { FC, useRef, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

interface AudioProps {
  src: string;
}

const Audio: FC<AudioProps> = ({ src }) => {
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
      <p className="text-xl font-bold text-secondary tracking-wider uppercase text-center">
        Audio
      </p>

      <AudioPlayer
        ref={playerRef}
        src={src}
        className="w-full max-w-xl rounded-xl shadow-md"
      />

      <div className="flex flex-wrap justify-center gap-2">
        {speeds.map((rate) => (
          <button
            key={rate}
            onClick={() => handleSpeedChange(rate)}
            className={`px-3 py-1 rounded-full text-sm font-medium border transition-all active:scale-95
              ${
                speed === rate
                  ? "bg-primary text-white border-primary"
                  : "bg-muted text-foreground border-border"
              }
            `}
          >
            {rate}×
          </button>
        ))}
      </div>
    </div>
  );
};

export default Audio;
