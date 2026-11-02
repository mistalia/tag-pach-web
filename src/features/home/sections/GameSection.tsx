import { SectionWrapper } from "../components/SectionWrapper";
import { SECTIONS } from "@/constants/sections";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function GameSection() {
  return (
    <SectionWrapper
      id={SECTIONS.GAME}
      baseBg="bg-[#cccccc]"
      className="bg-[#26ab26]"
    >
      <SectionTitle sectionId={SECTIONS.GAME} />
    </SectionWrapper>
  );
}
