"use client";

import { useState } from "react";
import { CharactersDesktop } from "./CharactersDesktop";
import { CharactersMobile } from "./CharactersMobile";

type DisplayMode = "2d" | "3d";

export function CharactersLayout() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mode, setMode] = useState<DisplayMode>("2d");

  return (
    <>
      <div className="desktop-only">
        <CharactersDesktop mode={mode} onModeChange={setMode} />
      </div>

      <div className="mobile-only">
        <CharactersMobile
          activeIndex={activeIndex}
          onChange={setActiveIndex}
          mode={mode}
          onModeChange={setMode}
        />
      </div>
    </>
  );
}
