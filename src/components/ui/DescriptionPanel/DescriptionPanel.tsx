export type DescriptionPanelProps = {
  title: string;
  description: string;
  titleSize?: string;
  descriptionSize?: string;
  className?: string;
};

export function DescriptionPanel({
  title,
  description,
  titleSize = "text-[5cqw]",
  descriptionSize = "text-[2cqw]",
  className = "",
}: DescriptionPanelProps) {
  return (
    <section className={`flex flex-col gap-2 ${className}`}>
      <h3 className={`${titleSize} font-bold `}>{title}</h3>
      <p className={`${descriptionSize} leading-relaxed`}>{description}</p>
    </section>
  );
}
