"use client";

import { useRef, useState, useEffect } from "react";

interface AudioPlayerProps {
  src: string;
  label: string;
}

export default function AudioPlayer({ src, label }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      setProgress(audio.duration ? (audio.currentTime / audio.duration) * 100 : 0);
    };
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => setPlaying(false);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      // play() kann rejecten (Autoplay-Policy) — State erst nach Erfolg setzen
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  }

  function seek(e: React.MouseEvent<HTMLDivElement>) {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audio.currentTime = ratio * duration;
  }

  function onSeekKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const step = 5;
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      audio.currentTime = Math.min(audio.currentTime + step, duration);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      audio.currentTime = Math.max(audio.currentTime - step, 0);
    } else if (e.key === "Home") {
      e.preventDefault();
      audio.currentTime = 0;
    } else if (e.key === "End") {
      e.preventDefault();
      audio.currentTime = duration;
    }
  }

  function formatTime(s: number) {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  }

  return (
    <div className="flex items-center gap-5 bg-surface border border-rule p-5 md:p-6 w-full">
      <audio ref={audioRef} src={src} preload="metadata" aria-label={label} />

      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        aria-label={playing ? "Pause" : "Abspielen"}
        className="shrink-0 w-12 h-12 flex items-center justify-center bg-brand text-inverse hover:bg-brand-dark transition-colors rounded-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
      >
        {playing ? (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
            <rect x="3" y="2" width="4" height="14" rx="1" />
            <rect x="11" y="2" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
            <path d="M4 2.5L15 9L4 15.5V2.5Z" />
          </svg>
        )}
      </button>

      {/* Progress + Time */}
      <div className="flex-1 min-w-0">
        {/* Progress Bar */}
        <div
          role="slider"
          tabIndex={0}
          aria-label="Abspielposition"
          aria-valuenow={Math.round(currentTime)}
          aria-valuemin={0}
          aria-valuemax={Math.round(duration)}
          aria-valuetext={`${formatTime(currentTime)} von ${formatTime(duration)}`}
          onClick={seek}
          onKeyDown={onSeekKeyDown}
          className="h-1.5 bg-rule cursor-pointer group relative mb-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-4"
        >
          <div
            className="h-full bg-brand transition-all"
            style={{ width: `${progress}%` }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-brand rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ left: `calc(${progress}% - 6px)` }}
            aria-hidden="true"
          />
        </div>

        <div className="flex justify-between items-center">
          <span className="font-sans text-[11px] text-ink-muted tabular-nums">
            {formatTime(currentTime)}
          </span>
          <span className="font-sans text-[11px] text-ink-muted tabular-nums">
            {formatTime(duration)}
          </span>
        </div>
      </div>
    </div>
  );
}
