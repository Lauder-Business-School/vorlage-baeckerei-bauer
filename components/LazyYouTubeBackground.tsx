"use client";

import { useEffect, useState } from "react";

/**
 * Defers YouTube background video loading until after the page is interactive.
 * The static hero image shows immediately; the iframe loads after a short delay.
 * This eliminates ~1.9 MB of blocking YouTube JS from the critical path.
 */
export default function LazyYouTubeBackground({
  videoId,
  title,
  start,
  end,
  delayMs = 3000,
}: {
  videoId: string;
  title: string;
  start?: number;
  end?: number;
  delayMs?: number;
}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Kein Autoplay-Hintergrundvideo für Menschen mit reduzierter Bewegung
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setTimeout(() => setLoaded(true), delayMs);
    return () => clearTimeout(timer);
  }, [delayMs]);

  if (!loaded) return null;

  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    loop: "1",
    playlist: videoId,
    controls: "0",
    rel: "0",
    modestbranding: "1",
    showinfo: "0",
    playsinline: "1",
    disablekb: "1",
    iv_load_policy: "3",
    cc_load_policy: "0",
    ...(start !== undefined ? { start: String(start) } : {}),
    ...(end !== undefined ? { end: String(end) } : {}),
  });

  return (
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${videoId}?${params}`}
      className="w-full h-full"
      frameBorder="0"
      allow="autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
