import { ImageGlow } from "@/components/ui/ImageGlow";

type DisplayMode = "2d" | "3d";

interface CharacterDisplaySwitcherProps {
  mode: DisplayMode;
  onChange: (mode: DisplayMode) => void;
  className?: string;
}

/**
 * Display mode definitions
 */
const DISPLAY_MODES = [
  {
    value: "2d",
    label: "2D",
    imageSrc: "/images/characters/logo-2d.webp",
    imageAlt: "",
  },
  {
    value: "3d",
    label: "3D",
    imageSrc: "/images/characters/logo-3d.webp",
    imageAlt: "",
  },
] as const;

/**
 * Visual configuration
 */
const SWITCHER_STYLE = {
  // Layout
  container: {
    gap: `
      aspect-desktop:gap-[2.5cqw]
      aspect-mobile:gap-[1.75cqw]
    `,
    itemGap: "gap-[0.0cqw]",
    labelGap: "gap-[0.6cqw]",
  },

  // Logo
  logo: {
    size: `
      aspect-desktop:w-[12cqw]
      aspect-mobile:w-[10cqw]
    `,
    outlineColor: "#5cd5af",
    glowColor: "#6EE7B7",
    outlineWidth: 0.8,
    glowBlur: 5,
  },

  // Label
  label: {
    fontSize: `
      aspect-desktop:text-[2.5cqw]
      aspect-mobile:text-[2.1cqw]
    `,
    fontWeight: "font-semibold",
    tracking: "tracking-[0.1em]",
    activeColor: "text-[#047857]",
    inactiveColor: "text-[#8B949E]",
    hoverColor: "group-hover:text-[#10B981]",
  },

  // Underline
  underline: {
    height: "h-[2px]",
    width: "w-full",
    color: "bg-[#10B981]",
    glow: "shadow-[0_0_5px_#6EE7B7,0_0_12px_#10B981,0_0_20px_#10B98180]",
  },

  // Accessibility
  focus: {
    outline: "focus-visible:outline-2",
    offset: "focus-visible:outline-offset-4",
    color: "focus-visible:outline-[#FFD700]",
  },
} as const;

/**
 * Animation configuration
 */
const ANIMATION = {
  duration: "duration-300",
  easing: "ease-out",
  activeScale: "scale-110",
  inactiveScale: "scale-95",
  inactiveOpacity: "opacity-40",
  inactiveFilter: "grayscale",
} as const;

export function CharacterDisplaySwitcher({
  mode,
  onChange,
  className = "",
}: CharacterDisplaySwitcherProps) {
  return (
    <div
      className={`@container flex w-full justify-center ${className}`}
      role="group"
      aria-label="Character display mode"
    >
      <div
        className={`
          flex items-end justify-center
          ${SWITCHER_STYLE.container.gap}
        `}
      >
        {DISPLAY_MODES.map((item) => {
          const isActive = mode === item.value;

          const logoState = isActive
            ? ANIMATION.activeScale
            : `
                ${ANIMATION.inactiveScale}
                ${ANIMATION.inactiveOpacity}
                ${ANIMATION.inactiveFilter}
                group-hover:grayscale-0
                group-hover:opacity-100
              `;

          const labelColor = isActive
            ? SWITCHER_STYLE.label.activeColor
            : `${SWITCHER_STYLE.label.inactiveColor} ${SWITCHER_STYLE.label.hoverColor}`;

          return (
            <button
              key={item.value}
              type="button"
              onClick={() => onChange(item.value)}
              aria-pressed={isActive}
              className={`
                group flex flex-col items-center
                ${SWITCHER_STYLE.container.itemGap}
                ${SWITCHER_STYLE.focus.outline}
                ${SWITCHER_STYLE.focus.offset}
                ${SWITCHER_STYLE.focus.color}
                motion-reduce:transition-none
              `}
            >
              {/* Logo */}
              <div
                className={`
                  relative aspect-square
                  ${SWITCHER_STYLE.logo.size}
                  transition-transform
                  ${ANIMATION.duration}
                  ${ANIMATION.easing}
                  motion-reduce:transition-none
                  ${logoState}
                `}
              >
                <ImageGlow
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="
                    (min-aspect-ratio: 1001/1000) 11cqw,
                    9cqw
                  "
                  className="object-contain"
                  outlineColor={SWITCHER_STYLE.logo.outlineColor}
                  glowColor={SWITCHER_STYLE.logo.glowColor}
                  outlineWidth={SWITCHER_STYLE.logo.outlineWidth}
                  glowBlur={SWITCHER_STYLE.logo.glowBlur}
                />
              </div>

              {/* Label and underline */}
              <div
                className={`
                  flex flex-col items-center
                  ${SWITCHER_STYLE.container.labelGap}
                `}
              >
                <span
                  className={`
                    ${SWITCHER_STYLE.label.fontSize}
                    ${SWITCHER_STYLE.label.fontWeight}
                    ${SWITCHER_STYLE.label.tracking}
                    ${labelColor}
                    transition-colors
                    ${ANIMATION.duration}
                  `}
                >
                  {item.label}
                </span>

                {/* Glow underline */}
                <span
                  aria-hidden="true"
                  className={`
                    rounded-full
                    ${SWITCHER_STYLE.underline.height}
                    ${SWITCHER_STYLE.underline.width}
                    ${SWITCHER_STYLE.underline.color}
                    transition-all
                    ${ANIMATION.duration}
                    ${ANIMATION.easing}
                    motion-reduce:transition-none
                    ${
                      isActive
                        ? `scale-x-100 ${SWITCHER_STYLE.underline.glow}`
                        : "scale-x-0"
                    }
                  `}
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
