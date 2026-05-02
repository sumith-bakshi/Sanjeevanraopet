import { useEffect, useState } from "react";

export default function GalleryCard({ image, language }) {
  const images = image.images?.length ? image.images : [image.src];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!isHovering || images.length < 2) {
      setActiveIndex(0);
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 2500);

    return () => window.clearInterval(intervalId);
  }, [images.length, isHovering]);

  return (
    <figure
      className="gallery-card"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="gallery-main-image">
        <img src={images[activeIndex]} alt={image.title[language]} loading="lazy" />
        <figcaption>
          <strong>{image.title[language]}</strong>
          <span>{image.caption[language]}</span>
        </figcaption>
        {images.length > 1 && (
          <div className="gallery-dots" aria-hidden="true">
            {images.map((src, index) => (
              <span
                className={activeIndex === index ? "active" : ""}
                key={`${src}-${index}`}
              />
            ))}
          </div>
        )}
      </div>
    </figure>
  );
}
