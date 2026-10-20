import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  /** スクロール移動用の要素ID（例: "hero", "characters"） */
  id: string;
  /** セクションごとの背景色や追加スタイル */
  className?: string;
  /** 調整用の最背面の背景 */
  baseBg?: string;
}

export function SectionWrapper({
  children,
  id,
  className = "",
  baseBg = "bg-brand-white",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className="relative w-full overflow-hidden flex items-center justify-center"
    >
      {/* 【Layer 0】セクションの背景色 */}
      <div className={`absolute inset-0 z-0 ${baseBg}`} />

      {/* 【Layer 1】16:9 アスペクト比固定キャンバス */}
      <div
        className={`responsive-canvas @container relative z-10 flex flex-col justify-between overflow-hidden ${className}`}
      >
        {children}
      </div>
    </section>
  );
}
