import { SectionWrapper } from "../components/SectionWrapper";
import { SECTIONS } from "@/constants/sections";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function CharactersSection() {
  return (
    <SectionWrapper
      id={SECTIONS.CHARACTERS}
      baseBg="bg-[#eeeeee]"
      className="bg-[#ab8326]"
    >
      <SectionTitle sectionId={SECTIONS.CHARACTERS} />
    </SectionWrapper>
  );
}
