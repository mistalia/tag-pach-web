import { Character2D } from "./Character2D";

type CharacterViewerProps = {
  mode?: "2d" | "3d";
  imageSrc: string;
  imageAlt: string;
  className?: string;
};

export function CharacterViewer({
  mode = "2d",
  imageSrc,
  imageAlt,
  className = "",
}: CharacterViewerProps) {
  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      {mode === "2d" ? (
        <Character2D src={imageSrc} alt={imageAlt} />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center"
          aria-label="3Dモデル表示は未実装です"
        >
          <p className="text-sm text-brand-secondary">3Dモデルは準備中です</p>
        </div>
      )}
    </div>
  );
}
