import { SectionWrapper } from "../components/SectionWrapper";
import { SECTIONS } from "@/constants/sections";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function GuideSection() {
  return (
    <SectionWrapper
      id={SECTIONS.GUIDE}
      baseBg="bg-[#bbbbbb]"
      className="bg-[#8e597c]"
    >
      <SectionTitle sectionId={SECTIONS.GUIDE} />
    </SectionWrapper>
  );
}
