import { SECTIONS } from "@/constants/sections";
import Image from "next/image";
import { SectionWrapper } from "../components/SectionWrapper";

export function WorldSection() {
  return (
    <SectionWrapper
      id={SECTIONS.WORLD}
      baseBg="bg-[#dddddd]"
      className="bg-[#ab2659]"
    >
      <Image
        src="/images/stellasora.png"
        alt="World Section"
        width={1920}
        height={1080}
      />
    </SectionWrapper>
  );
}
