import { SectionTitle } from "@/components/ui/SectionTitle";
import { SECTIONS } from "@/constants/sections";
import { SectionWrapper } from "../../components/SectionWrapper";
import { CharactersLayout } from "./CharactersLayout";

export function CharactersSection() {
  return (
    <SectionWrapper
      id={SECTIONS.CHARACTERS}
      className="bg-[#ffffff]"
    >
      <SectionTitle sectionId={SECTIONS.CHARACTERS} />
      <CharactersLayout />
    </SectionWrapper>
  );
}
