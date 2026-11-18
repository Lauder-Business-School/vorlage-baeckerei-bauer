"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Loads a YouTube embed only when it enters the viewport.
 * Shows a lightweight poster image until then.
 * Saves ~1.9 MB of YouTube JS for off-screen videos.
 */
export default function LazyYouTubeEmbed({
  videoId,
  title,
  className = "",
  params: extraParams = {},
}: {
  videoId: string;
  title: string;
  className?: string;
  params?: Record<string, string>;
}) {
  const [active, setActive] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    rel: "0",
    modestbranding: "1",
    showinfo: "0",
    playsinline: "1",
    iv_load_policy: "3",
    color: "white",
    ...extraParams,
  });

  return (
    <div ref={wrapperRef} className={`relative w-full aspect-video ${className}`}>
      {active ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?${params}`}
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
          loading="lazy"
        />
      ) : (
        /* Lokaler Platzhalter, kein Request an Google-Server vor Nutzeraktion */
        <div className="absolute inset-0 bg-brand-dark flex flex-col items-center justify-center gap-3 cursor-pointer">
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span className="text-white/60 text-xs font-sans">{title}</span>
        </div>
      )}
    </div>
  );
}
