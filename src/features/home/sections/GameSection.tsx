import { SectionWrapper } from "../components/SectionWrapper";
import { SECTIONS } from "@/constants/sections";

export function GameSection() {
  return (
    <SectionWrapper
      id={SECTIONS.GAME}
      baseBg="bg-[#cccccc]"
      className="bg-[#26ab26]"
    >
      <h1>Game Section</h1>
    </SectionWrapper>
  );
}
