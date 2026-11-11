import Image, { type ImageProps } from "next/image";
import { useId } from "react";

interface ImageGlowProps extends ImageProps {
  alt: string;
  outlineColor?: string;
  glowColor?: string;
  outlineWidth?: number;
  glowBlur?: number;
}

export function ImageGlow({
  alt,
  outlineColor = "#10B981",
  glowColor = "#6EE7B7",
  outlineWidth = 1.5,
  glowBlur = 5,
  style,
  ...imageProps
}: ImageGlowProps) {
  const filterId = `image-glow-${useId().replace(/:/g, "")}`;

  return (
    <>
      <svg aria-hidden="true" className="pointer-events-none absolute size-0">
        <defs>
          <filter
            id={filterId}
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
            colorInterpolationFilters="sRGB"
          >
            {/* Expand image silhouette */}
            <feMorphology
              in="SourceAlpha"
              operator="dilate"
              radius={outlineWidth}
              result="expanded"
            />

            {/* Extract outer outline */}
            <feComposite
              in="expanded"
              in2="SourceAlpha"
              operator="out"
              result="outlineShape"
            />

            {/* Outline */}
            <feFlood floodColor={outlineColor} result="outlineColor" />
            <feComposite
              in="outlineColor"
              in2="outlineShape"
              operator="in"
              result="outline"
            />

            {/* Glow */}
            <feFlood floodColor={glowColor} result="glowColor" />
            <feComposite
              in="glowColor"
              in2="outlineShape"
              operator="in"
              result="glowSource"
            />
            <feGaussianBlur
              in="glowSource"
              stdDeviation={glowBlur}
              result="blurredGlow"
            />

            {/* Combine */}
            <feMerge>
              <feMergeNode in="blurredGlow" />
              <feMergeNode in="outline" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      <Image
        {...imageProps}
        alt={alt}
        draggable={false}
        className={`pointer-events-none select-none ${imageProps.className ?? ""}`}
        style={{
          ...style,
          filter: `url(#${filterId})`,
        }}
      />
    </>
  );
}
