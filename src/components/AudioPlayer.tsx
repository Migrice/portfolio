"use client";

import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} src="/audio/bg.m4a" loop />

      <button
        onClick={toggleAudio}
        className={`
          w-10 h-10 rounded-full flex items-center justify-center
          bg-indigo-600 text-white shadow-lg cursor-pointer
          hover:scale-110 hover:shadow-indigo-500/50 transition-all duration-300
          ${isPlaying ? "animate-pulse" : ""}
        `}
      >
        {isPlaying ? (
          <Pause className="w-4 h-4" />
        ) : (
          <Play className="w-4 h-4 translate-x-0.5" />
        )}
      </button>
    </div>
  );
}
