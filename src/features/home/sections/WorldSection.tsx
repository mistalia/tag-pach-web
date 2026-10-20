import { SECTIONS } from "@/constants/sections";
import { SectionWrapper } from "../components/SectionWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function WorldSection() {
  return (
    <SectionWrapper
      id={SECTIONS.WORLD}
      baseBg="bg-[#dddddd]"
      className="bg-[#ab2659]"
    >
      <SectionTitle sectionId={SECTIONS.WORLD} />
    </SectionWrapper>
  );
}
