export const SECTIONS = {
  HERO: "hero",
  GAME: "game",
  WORLD: "world",
  GUIDE: "guide",
  CHARACTERS: "characters",
} as const;

// 型定義（"hero" | "game" | "world" | "guide" | "characters"）
export type SectionId = (typeof SECTIONS)[keyof typeof SECTIONS];

// ヘッダーやドットナビゲーションで繰り返し処理（map）するためのリスト
export const NAV_ITEMS = [
  { id: SECTIONS.HERO, label: "TOP" },
  { id: SECTIONS.CHARACTERS, label: "CHARACTERS" },
  { id: SECTIONS.WORLD, label: "WORLD" },
  { id: SECTIONS.GAME, label: "GAME" },
  { id: SECTIONS.GUIDE, label: "GUIDE" },
] as const;
