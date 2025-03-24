"use client";

import { FC } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

interface AudioProps {
  src: string;
}

const Audio: FC<AudioProps> = ({ src }) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <p className="text-lg font-semibold text-center">Audio Source</p>
      <AudioPlayer src={src} className="w-full max-x-xl rounded-xl shadow-md" />
    </div>
  );
};

export default Audio;
