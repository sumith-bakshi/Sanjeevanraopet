export default function GalleryCard({ image, language }) {
  return (
    <figure className="gallery-card">
      <img src={image.src} alt={image.title[language]} loading="lazy" />
      <figcaption>
        <strong>{image.title[language]}</strong>
        <span>{image.caption[language]}</span>
      </figcaption>
    </figure>
  );
}
