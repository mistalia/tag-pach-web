import { SectionWrapper } from "../components/SectionWrapper";
import { SECTIONS } from "@/constants/sections";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { DescriptionPanel } from "@/components/ui/DescriptionPanel";

export function CharactersSection() {
  return (
    <SectionWrapper
      id={SECTIONS.CHARACTERS}
      baseBg="bg-[#eeeeee]"
      className="bg-[#ab8326]"
    >
      <SectionTitle sectionId={SECTIONS.CHARACTERS} />
      <DescriptionPanel
        className=""
        title="Main Characters"
        description="Meet the fascinating characters that inhabit the world of our story."
      />
    </SectionWrapper>
  );
}
