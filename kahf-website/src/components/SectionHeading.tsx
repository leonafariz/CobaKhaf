export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {eyebrow && (
        <span className="inline-block font-accent text-label-caps font-bold uppercase tracking-wider text-primary mb-xs">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-display-lg-mobile md:text-[36px] md:leading-[44px] font-extrabold text-on-surface mb-sm">
        {title}
      </h2>
      {subtitle && (
        <p className="font-sans text-body-lg text-on-surface-variant">{subtitle}</p>
      )}
    </div>
  );
}
