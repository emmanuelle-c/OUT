import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import "../styles/emblaCarousel.css";
import Card from "./Card";

export function EmblaCarouselCards({ slides, options }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <section className="embla_cards">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla_cards__container">
          {slides.map((index) => (
            <Card key={index} activity={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
