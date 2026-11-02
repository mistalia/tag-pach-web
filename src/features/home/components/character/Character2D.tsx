import Image from "next/image";

type Character2DProps = {
  src: string;
  alt: string;
};

export function Character2D({ src, alt }: Character2DProps) {
  return (
    <div className="relative h-full w-full">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-contain object-bottom"
        priority={false}
      />
    </div>
  );
}
