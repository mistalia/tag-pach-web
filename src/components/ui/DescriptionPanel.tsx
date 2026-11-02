export type DescriptionPanelProps = {
  title: string;
  description: string;
  className?: string;
};

export function DescriptionPanel({
  title,
  description,
  className = "",
}: DescriptionPanelProps) {
  return (
    <section className={`flex flex-col gap-2 ${className}`}>
      <h3 className="text-[4cqw] font-bold aspect-mobile:text-[6vw]">{title}</h3>
      <p className="text-[1.5cqw] leading-relaxed aspect-mobile:text-[4vw]">{description}</p>
    </section>
  );
}
