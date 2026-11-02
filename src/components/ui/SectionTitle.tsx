import type { SectionId } from "@/constants/sections";
import { SafeBleed } from "@/features/home/components/SafeBleed";

type SectionTitleProps = {
  sectionId: SectionId;
};

export function SectionTitle({ sectionId }: SectionTitleProps) {
  return (
    <SafeBleed>
      <h2
        id={sectionId}
        className="mb-4 text-[13cqw] font-bold uppercase text-brand-black aspect-mobile:text-[13vw]"
      >
        {sectionId}
      </h2>
    </SafeBleed>
  );
}
