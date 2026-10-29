import { SectionWrapper } from "../components/SectionWrapper";
import { SECTIONS } from "@/constants/sections";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { DescriptionPanel } from "@/components/ui/DescriptionPanel";
import { CharacterViewer } from "../components/character/CharacterViewer";

export function CharactersSection() {
  return (
    <SectionWrapper
      id={SECTIONS.CHARACTERS}
      baseBg="bg-[#eeeeee]"
      className="bg-[#ab8326]"
    >
      <CharacterViewer
        mode="2d"
        imageSrc="/images/hero/magu.webp"
        imageAlt="キャラクター01の立ち絵"
        className="h-full w-full"
      />
      <CharacterViewer
        mode="2d"
        imageSrc="/images/hero/oshiro.webp"
        imageAlt="キャラクター02の立ち絵"
        className="h-full w-full"
      />
      <SectionTitle sectionId={SECTIONS.CHARACTERS} />
      <DescriptionPanel
        className=""
        title="Main Characters"
        description="Meet the fascinating characters that inhabit the world of our story."
      />
    </SectionWrapper>
  );
}
