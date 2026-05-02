export default function SectionTitle({ icon, label, title }) {
  return (
    <div className="section-title">
      <span className="section-label">
        {icon}
        {label}
      </span>
      <h2>{title}</h2>
    </div>
  );
}
