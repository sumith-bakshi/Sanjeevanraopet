export default function InfoCard({ item, language }) {
  const Icon = item.icon;

  return (
    <article className="info-card">
      <div className="card-icon">
        <Icon size={24} />
      </div>
      <h3>{item.title[language]}</h3>
      <p>{item.description[language]}</p>
    </article>
  );
}
