import type { CSSProperties, ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  /** スクロール移動用の要素ID */
  id: string;
  /** セクション固有の追加スタイル */
  className?: string;
  /** 最背面の背景 */
  baseBg?: string;
  /** セクションの最低高さ */
  minHeight?: string;
  /** 背景コンポーネント（画像・動画・エフェクトなど） */
  background?: ReactNode;
}

export function SectionWrapper({
  children,
  id,
  className = "",
  baseBg = "bg-brand-white",
  minHeight,
  background,
}: SectionWrapperProps) {
  const style: CSSProperties = {
    minHeight,
  };

  return (
    <section
      id={id}
      style={style}
      className="relative flex w-full items-center justify-center overflow-hidden"
    >
      {/* Layer 0: セクション背景色 */}
      <div aria-hidden="true" className={`absolute inset-0 z-0 ${baseBg}`} />

      {/* Layer 1: カスタム背景 */}
      {background && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
        >
          {background}
        </div>
      )}

      {/* Layer 2: セクションコンテンツ */}
      <div
        className={`responsive-canvas @container relative z-10 flex flex-col justify-between overflow-hidden ${className}`}
      >
        {children}
      </div>
    </section>
  );
}
