"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ========================================
  Types
======================================== */

interface GameBackgroundVideoProps {
  videoId?: string;
  posterSrc?: string;
  title?: string;
  className?: string;
}

interface VideoLoadState {
  videoId: string;
  status: "loaded" | "error";
}

/* ========================================
  Constants
======================================== */

const DEFAULT_VIDEO_ID = process.env.NEXT_PUBLIC_DEFAULT_VIDEO_ID ?? "";
const DEFAULT_POSTER_SRC = "/images/game/game-poster.webp";
const DEFAULT_TITLE = "Tag Pach Gameplay";

/* ========================================
  Component
======================================== */

export function GameBackgroundVideo({
  videoId = DEFAULT_VIDEO_ID,
  posterSrc = DEFAULT_POSTER_SRC,
  title = DEFAULT_TITLE,
  className = "",
}: GameBackgroundVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [shouldLoad, setShouldLoad] = useState(false);
  const [loadState, setLoadState] = useState<VideoLoadState | null>(null);

  /* ========================================
    Derived State
  ======================================== */

  const currentLoadState =
    loadState?.videoId === videoId ? loadState.status : null;

  const hasLoaded = currentLoadState === "loaded";
  const hasError = currentLoadState === "error";

  /* ========================================
    YouTube Embed URL
  ======================================== */

  const embedParams = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    loop: "1",
    playlist: videoId,
    controls: "0",
    playsinline: "1",
    rel: "0",
  });

  const embedUrl =
    `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}` +
    `?${embedParams.toString()}`;

  /* ========================================
    Visibility & Motion Detection
  ======================================== */

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    let observer: IntersectionObserver | null = null;

    const handleVisibility = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];

      if (!entry?.isIntersecting) return;

      setShouldLoad(true);
      observer?.disconnect();
    };

    const observeVisibility = () => {
      observer?.disconnect();

      if (mediaQuery.matches) {
        setShouldLoad(false);
        return;
      }

      if (!("IntersectionObserver" in window)) {
        setShouldLoad(true);
        return;
      }

      observer = new IntersectionObserver(handleVisibility, {
        rootMargin: "200px 0px",
      });

      observer.observe(container);
    };

    observeVisibility();

    const handleMotionChange = () => {
      if (mediaQuery.matches) {
        observer?.disconnect();
        setShouldLoad(false);
      } else {
        observeVisibility();
      }
    };

    mediaQuery.addEventListener("change", handleMotionChange);

    return () => {
      observer?.disconnect();
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  /* ========================================
    Render
  ======================================== */

  return (
    <div
      ref={containerRef}
      className={`
        pointer-events-none
        absolute inset-0
        overflow-hidden
        bg-brand-dark
        ${className}
      `}
      aria-hidden="true"
    >
      {/* YouTube Background */}
      {shouldLoad && !hasError && (
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            key={videoId}
            src={embedUrl}
            title={title}
            allow="autoplay; encrypted-media"
            referrerPolicy="strict-origin-when-cross-origin"
            tabIndex={-1}
            onLoad={() => {
              setLoadState({
                videoId,
                status: "loaded",
              });
            }}
            onError={() => {
              setLoadState({
                videoId,
                status: "error",
              });
            }}
            className="
              absolute
              left-1/2 top-1/2
              aspect-video
              h-full w-auto
              min-w-full
              max-w-none
              -translate-x-1/2 -translate-y-1/2
              border-0
            "
          />
        </div>
      )}

      {/* Poster */}
      {posterSrc && (!hasLoaded || hasError) && (
        <Image
          src={posterSrc}
          alt=""
          fill
          sizes="100vw"
          className="z-10 object-cover"
        />
      )}
    </div>
  );
}
