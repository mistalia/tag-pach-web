import { useId } from "react";

interface MonitorOverlayProps {
  /** Tile size in pixels */
  cellSize?: number;

  /** Gap between tiles in pixels */
  gap?: number;

  /** Tile opacity */
  opacity?: number;

  /** Tile color */
  color?: string;

  /** Corner radius in pixels */
  radius?: number;

  /** Enable semi-transparent background */
  showBackground?: boolean;

  /** Background color */
  backgroundColor?: string;

  /** Background opacity */
  backgroundOpacity?: number;

  /** Additional styles */
  className?: string;
}

export function MonitorOverlay({
  cellSize = 3,
  gap = 2,
  opacity = 0.1,
  color = "#FFFFFF",
  radius = 1,
  showBackground = true,
  backgroundColor = "#ffffff",
  backgroundOpacity = 0.1,
  className = "",
}: MonitorOverlayProps) {
  const patternId = `monitor-overlay-${useId().replace(/:/g, "")}`;
  const patternSize = cellSize + gap;

  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-[-10] h-full w-full ${className}`}
    >
      <defs>
        <pattern
          id={patternId}
          width={patternSize}
          height={patternSize}
          patternUnits="userSpaceOnUse"
        >
          <rect
            width={cellSize}
            height={cellSize}
            rx={radius}
            fill={color}
            fillOpacity={opacity}
          />
        </pattern>
      </defs>

      {/* Semi-transparent background */}
      {showBackground && (
        <rect
          width="100%"
          height="100%"
          fill={backgroundColor}
          fillOpacity={backgroundOpacity}
        />
      )}

      {/* Dot pattern */}
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
