import { SectionWrapper } from "../components/SectionWrapper";
import { SECTIONS } from "@/constants/sections";

export function CharactersSection() {
  return (
    <SectionWrapper
      id={SECTIONS.CHARACTERS}
      baseBg="bg-[#eeeeee]"
      className="bg-[#ab8326]"
    >
      <h1>Characters Section</h1>
    </SectionWrapper>
  );
}
