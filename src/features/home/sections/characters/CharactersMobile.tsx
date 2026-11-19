import { DescriptionPanel } from "@/components/ui/DescriptionPanel/DescriptionPanel";
import { CharacterDisplaySwitcher } from "../../components/characters/CharacterDisplaySwitcher";
import { CharacterSwitcher } from "../../components/characters/CharacterSwitcher";
import { CharacterViewer } from "../../components/characters/CharacterViewer";

type DisplayMode = "2d" | "3d";

interface CharactersMobileProps {
  activeIndex: number;
  onChange: (index: number) => void;
  mode: DisplayMode;
  onModeChange: (mode: DisplayMode) => void;
}

const CHARACTERS = [
  {
    id: "magu",
    name: "MAGU",
    imageSrc: "/images/characters/magu.webp",
    imageAlt: "Magu",
    videoSrc: "/videos/characters/magu.mp4",
    videoPoster: "/images/characters/magu-3d-poster.webp",
    description: "Character description for Magu.",
  },
  {
    id: "oshiro",
    name: "OSHIRO",
    imageSrc: "/images/characters/oshiro.webp",
    imageAlt: "Oshiro",
    videoSrc: "/videos/characters/oshiro.mp4",
    videoPoster: "/images/characters/oshiro-3d-poster.webp",
    description: "Character description for Oshiro.",
  },
] as const;

export function CharactersMobile({
  activeIndex,
  onChange,
  mode,
  onModeChange,
}: CharactersMobileProps) {
  const character = CHARACTERS[activeIndex];

  return (
    <div className="absolute inset-0">
      {/* Character */}
      <div className="absolute inset-x-0 top-[3%] bottom-[38%] flex justify-center">
        <CharacterViewer
          mode="2d"
          imageSrc={character.imageSrc}
          imageAlt={character.imageAlt}
          videoSrc={character.videoSrc}
          videoPoster={character.videoPoster}
          className="h-full w-auto scale-130 translate-y-[10%]"
        />
      </div>

      {/* Description */}
      <div className="absolute inset-x-[5%] bottom-[18%]">
        <DescriptionPanel
          title={character.name}
          description={character.description}
          className="mx-[25%]"
        />
      </div>

      {/* Character Switcher */}
      <div className="absolute inset-x-0 bottom-[6%]">
        <CharacterSwitcher activeIndex={activeIndex} onChange={onChange} />
      </div>

      <div className="absolute inset-x-0 right-[35%] bottom-[30%]">
        <CharacterDisplaySwitcher mode={mode} onChange={onModeChange} />
      </div>
    </div>
  );
}
