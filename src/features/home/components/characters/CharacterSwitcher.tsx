import { ImageGlow } from "@/components/ui/ImageGlow";

interface CharacterSwitcherProps {
  activeIndex: number;
  onChange: (index: number) => void;
}

const CHARACTERS = [
  {
    id: "magu",
    name: "MAGU",
    iconSrc: "/images/characters/magu-icon.webp",
    color: "orange",
    outlineColor: "#FB923C",
    glowColor: "#FDBA74",
  },
  {
    id: "oshiro",
    name: "OSHIRO",
    iconSrc: "/images/characters/oshiro-icon.webp",
    color: "sky",
    outlineColor: "#38BDF8",
    glowColor: "#7DD3FC",
  },
] as const;

export function CharacterSwitcher({
  activeIndex,
  onChange,
}: CharacterSwitcherProps) {
  return (
    <div
      className="flex items-center justify-center gap-10"
      role="group"
      aria-label="キャラクター選択"
    >
      {CHARACTERS.map((character, index) => {
        const isActive = activeIndex === index;

        return (
          <button
            key={character.id}
            type="button"
            onClick={() => onChange(index)}
            aria-pressed={isActive}
            aria-label={character.name}
            className={`
              relative size-17 overflow-hidden rounded-full border-[3px]
              transition-all duration-200
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#FFD700]
              motion-reduce:transition-none
              ${
                isActive
                  ? `scale-110 shadow-lg`
                  : "border-gray-300 opacity-60 hover:opacity-100"
              }
            `}
            style={{
              borderColor: isActive ? character.outlineColor : undefined,
              boxShadow: isActive
                ? `0 0 5px ${character.glowColor}, 0 0 12px ${character.outlineColor}80`
                : undefined,
            }}
          >
            <ImageGlow
              src={character.iconSrc}
              alt=""
              fill
              sizes="56px"
              className="object-cover"
              outlineColor={character.outlineColor}
              glowColor={character.glowColor}
              outlineWidth={1}
              glowBlur={3}
            />
          </button>
        );
      })}
    </div>
  );
}
