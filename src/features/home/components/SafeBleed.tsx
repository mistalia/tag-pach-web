import { ReactNode } from "react";

type SafeBleedProps = {
  children: ReactNode;
  className?: string;
};

export function SafeBleed({ children, className = "" }: SafeBleedProps) {
  return (
    <div
      className={className}
      style={{
        marginLeft: "max(0px, calc((100% - 100vw) / 2 + 1rem))",
      }}
    >
      {children}
    </div>
  );
}
