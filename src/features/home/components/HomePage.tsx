import { CharactersSection } from "../sections/CharactersSection";
import { GameSection } from "../sections/GameSection";
import { GuideSection } from "../sections/GuideSection";
import { HeroSection } from "../sections/HeroSection";
import { WorldSection } from "../sections/WorldSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <CharactersSection />
      <WorldSection />
      <GameSection />
      <GuideSection />
    </>
  );
}
