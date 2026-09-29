import { SectionWrapper } from "../components/SectionWrapper";
import { SECTIONS } from "@/constants/sections";

export function HeroSection() {
  return (
    <SectionWrapper
      id={SECTIONS.HERO}
      className="bg-[#8a26ab]"
    >
      <h1>Hero Section</h1>
    </SectionWrapper>
  );
}
