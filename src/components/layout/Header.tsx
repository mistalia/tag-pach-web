"use client";

import { NAV_ITEMS, SECTIONS } from "@/constants/sections";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-brand-dark/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8 aspect-mobile:px-4">
        {/* ロゴ（クリックで一番上へ） */}
        <a
          href={`#${SECTIONS.HERO}`}
          className="font-game text-xl font-bold tracking-wider text-brand-gold transition-opacity hover:opacity-80"
        >
          TAG PACH
        </a>

        {/* PC用ナビゲーション */}
        <nav className="flex items-center gap-8 aspect-mobile:hidden">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="font-game text-sm tracking-wide text-text-primary transition-colors hover:text-brand-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* モバイル用ハンバーガーボタン */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="hidden p-2 text-text-primary transition-colors hover:text-brand-gold focus:outline-none aspect-mobile:block"
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={isOpen}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828-1.414-1.414 4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.828 4.828 4.829-4.828a1 1 0 111.414 1.414l-4.829 4.828 4.829 4.828z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010 2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              />
            )}
          </svg>
        </button>
      </div>

      {/* モバイル用ドロワーメニュー */}
      {isOpen && (
        <nav className="border-b border-white/10 bg-brand-dark/95 px-4 pb-6 pt-2">
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className="border-b border-white/5 py-2 text-base font-medium text-text-primary transition-colors hover:text-brand-gold"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
