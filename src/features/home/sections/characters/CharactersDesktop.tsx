import { DescriptionPanel } from "@/components/ui/DescriptionPanel/DescriptionPanel";
import { CharacterDisplaySwitcher } from "../../components/characters/CharacterDisplaySwitcher";
import { CharacterViewer } from "../../components/characters/CharacterViewer";

type DisplayMode = "2d" | "3d";

interface CharactersDesktopProps {
  mode: DisplayMode;
  onModeChange: (mode: DisplayMode) => void;
}

const CHARACTERS = {
  magu: {
    id: "magu",
    name: "MAGU",
    imageSrc: "/images/characters/magu.webp",
    imageAlt: "Magu",
    videoSrc: "/videos/characters/magu.mp4",
    videoPoster: "/images/characters/magu-3d-poster.webp",
    description: "Character description for Magu.",
  },
  oshiro: {
    id: "oshiro",
    name: "OSHIRO",
    imageSrc: "/images/characters/oshiro.webp",
    imageAlt: "Oshiro",
    videoSrc: "/videos/characters/oshiro.mp4",
    videoPoster: "/images/characters/oshiro-3d-poster.webp",
    description: "Character description for Oshiro.",
  },
} as const;

export function CharactersDesktop({
  mode,
  onModeChange,
}: CharactersDesktopProps) {
  const { magu, oshiro } = CHARACTERS;

  return (
    <div className="absolute inset-0 flex items-center justify-center px-[3%]">
      {/*
        ================================================================
        【中央のキャラ同士の距離調整】
        下記の gap-[6%] や gap-8 などで「MAGUグループ」と「OSHIROグループ」の離れ具合を調整
        ================================================================
      */}
      <div className="flex h-full w-full items-center justify-center gap-[1%]">
        {/* ============================================================
            1. MAGU エリア（説明文 → キャラクター）
           ============================================================ */}
        {/* MAGUグループ全体のY軸調整: translate-y-[0px] や translate-y-4 など */}
        <div className="flex h-full min-w-0 flex-1 items-center justify-center gap-4 translate-y-0">
          {/* MAGU 説明文（個別Y軸調整） */}
          <div className="w-[32%] shrink-0 translate-y-[80px] translate-x-[20px]">
            <DescriptionPanel
              title={magu.name}
              description={magu.description}
            />
          </div>

          {/* MAGU キャラクター（個別Y軸調整 & 間隔調整） */}
          {/* 左右の余白を変えたい場合は ml-4 や mr-4、または親の gap-4 を変更 */}
          <div className="relative h-[90%] min-w-0 flex-1 translate-y-[10px] translate-x-[10px]">
            <CharacterViewer
              mode="2d"
              imageSrc={magu.imageSrc}
              imageAlt={magu.imageAlt}
              videoSrc={magu.videoSrc}
              videoPoster={magu.videoPoster}
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        {/* ============================================================
            2. OSHIRO エリア（キャラクター → 説明文）
           ============================================================ */}
        {/* OSHIROグループ全体のY軸調整 */}
        <div className="flex h-full min-w-0 flex-1 items-center justify-center gap-4 translate-y-0">
          {/* OSHIRO キャラクター（個別Y軸調整） */}
          <div className="relative h-[90%] min-w-0 flex-1 translate-y-[-30px] translate-x-[-10px]">
            <CharacterViewer
              mode="2d"
              imageSrc={oshiro.imageSrc}
              imageAlt={oshiro.imageAlt}
              videoSrc={oshiro.videoSrc}
              videoPoster={oshiro.videoPoster}
              className="h-full w-full object-contain"
            />
          </div>

          {/* OSHIRO 説明文（個別Y軸調整） */}
          <div className="w-[32%] shrink-0 translate-y-[1px] translate-x-[-50px]">
            <DescriptionPanel
              title={oshiro.name}
              description={oshiro.description}
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 left-[60%] bottom-[6%]">
        <CharacterDisplaySwitcher mode={mode} onChange={onModeChange} />
      </div>
    </div>
  );
}
