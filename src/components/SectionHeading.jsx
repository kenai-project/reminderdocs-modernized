// Reusable centred section heading (eyebrow + title + optional subtitle).
export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="section-head">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
