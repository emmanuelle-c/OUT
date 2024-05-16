import { EmblaCarousel } from "../EmblaCarousel";
import "../../styles/search.css";

function Search() {
  const OPTIONS = {};
  const SLIDES = [
    "En moyenne, les Français passent environ 4 heures et 30 minutes par jour devant un écran, que ce soit pour le travail ou les loisirs.",
    "La surexposition aux écrans peut causer des problèmes de vision,  perturber le sommeil, et entraîner des douleurs physiques. Elle peut  aussi augmenter l'anxiété, la dépression, et réduire la concentration.",
    "Il est important de limiter le temps d'écran et de privilégier d'autres activités pour préserver la santé.",
  ];

  return (
    <main className="main-search">
      <section className="off-screen-carrousel">
        <h1>Pourquoi faire attention à son temps hors écran ?</h1>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>
      <section className="off-screen-carrousel">
        <h1>Les sorties à la une</h1>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>
    </main>
  );
}

export default Search;
