import { SECTIONS } from "@/constants/sections";
import Image from "next/image";
import { HeroBackground } from "../components/backgrounds/HeroBackground";
import { SectionWrapper } from "../components/SectionWrapper";

export function HeroSection() {
  return (
    <SectionWrapper id={SECTIONS.HERO} background={<HeroBackground />}>
      <Image
        src="/images/title-logo.webp"
        alt="Title Logo"
        width={1000} // 画像の本来のピクセル幅（1000px）
        height={500} // 画像の本来のピクセル高さ（500px）
        className="absolute bottom-[5%] right-[20%] w-[35vw] h-auto z-20"
      />
    </SectionWrapper>
  );
}
