import Image from "next/image";

export function HeroBackground() {
  return (
    <>
      {/* Desktop */}
      <Image
        src="/images/hero/desktop-hero-image.webp"
        alt=""
        fill
        sizes="100vw"
        className="desktop-only object-fill"
        priority
      />

      {/* Mobile */}
      <Image
        src="/images/hero/mobile-hero-image.webp"
        alt=""
        fill
        sizes="100vw"
        className="mobile-only object-fill"
        priority
      />
    </>
  );
}
