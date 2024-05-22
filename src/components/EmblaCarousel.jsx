import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import "../styles/emblaCarousel.css";

export function EmblaCarousel({ slides, options }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <p>{index.text}</p>
              <img src={index.img} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
