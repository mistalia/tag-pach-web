export type DescriptionPanelProps = {
  title: string;
  description: string;
  titleSize?: string;
  mobileTitleSize?: string;
  descriptionSize?: string;
  mobileDescriptionSize?: string;
  className?: string;
};

export function DescriptionPanel({
  title,
  description,
  titleSize = "text-[5cqw]",
  mobileTitleSize = "text-[4.5cqw]",
  descriptionSize = "text-[2cqw]",
  mobileDescriptionSize = "text-[2.5cqw]",
  className = "",
}: DescriptionPanelProps) {
  return (
    <section className={`flex flex-col gap-2 ${className}`}>
      <h3 className={`${titleSize} font-bold aspect-mobile:${mobileTitleSize}`}>
        {title}
      </h3>
      <p
        className={`${descriptionSize} leading-relaxed aspect-mobile:${mobileDescriptionSize}`}
      >
        {description}
      </p>
    </section>
  );
}
