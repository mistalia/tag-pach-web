type Character3DProps = {
  src: string;
  poster?: string;
  alt: string;
  className?: string;
};

export function Character3D({
  src,
  poster,
  alt,
  className = "",
}: Character3DProps) {
  return (
    <video
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      aria-label={alt}
      className={`h-full w-full object-contain ${className}`}
    />
  );
}
