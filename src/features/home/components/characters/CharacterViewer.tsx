import { Character2D } from "./Character2D";
import { Character3D } from "./Character3D";

type CharacterViewerProps = {
  mode?: "2d" | "3d";
  imageSrc: string;
  imageAlt: string;
  videoSrc: string;
  videoPoster?: string;
  className?: string;
};

export function CharacterViewer({
  mode = "2d",
  imageSrc,
  imageAlt,
  videoSrc,
  videoPoster,
  className = "",
}: CharacterViewerProps) {
  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      {mode === "2d" ? (
        <Character2D src={imageSrc} alt={imageAlt} />
      ) : (
        <Character3D src={videoSrc} poster={videoPoster} alt={imageAlt} />
      )}
    </div>
  );
}
