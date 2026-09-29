import { SectionWrapper } from "../components/SectionWrapper";
import { SECTIONS } from "@/constants/sections";

export function GuideSection() {
  return (
    <SectionWrapper
      id={SECTIONS.GUIDE}
      baseBg="bg-[#bbbbbb]"
      className="bg-[#8e597c]"
    >
      <h1>Guide Section</h1>
    </SectionWrapper>
  );
}
