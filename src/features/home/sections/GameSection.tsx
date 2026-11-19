import { DescriptionPanel } from "@/components/ui/DescriptionPanel/DescriptionPanel";
import styles from "@/components/ui/DescriptionPanel/DescriptionPanel.module.css";
import { MonitorOverlay } from "@/components/ui/MonitorOverlay";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SECTIONS } from "@/constants/sections";
import { GameBackgroundVideo } from "../components/game/GameBackgroundVideo";
import { SectionWrapper } from "../components/SectionWrapper";

const GAME_INFO = {
  title: "TagPach",
  description:
    "変わり続ける世界の中で、変わらず残り続けるもの。記憶と協力をテーマにした、2対2のローカル対戦ゲーム。",
};

const DESCRIPTION_PANEL_STYLE = `${styles.panel} p-[2cqw]`;

export function GameSection() {
  return (
    <SectionWrapper id={SECTIONS.GAME} background={<GameBackgroundVideo />}>
      <MonitorOverlay />
      <SectionTitle sectionId={SECTIONS.GAME} />

      {/* Description */}
      <div
        className="
          absolute bottom-[5%] right-[5%]
          desktop-only
          w-[35%]
        "
      >
        <DescriptionPanel
          title={GAME_INFO.title}
          description={GAME_INFO.description}
          titleSize="text-[2cqw]"
          descriptionSize="text-[1cqw]"
          className={DESCRIPTION_PANEL_STYLE}
        />
      </div>

      <div
        className="
          absolute bottom-[10%] left-1/2
          -translate-x-1/2
          mobile-only
          w-[50%]
        "
      >
        <DescriptionPanel
          title={GAME_INFO.title}
          description={GAME_INFO.description}
          titleSize="text-[2.5cqw]"
          descriptionSize="text-[1.5cqw]"
          className={DESCRIPTION_PANEL_STYLE}
        />
      </div>
    </SectionWrapper>
  );
}
