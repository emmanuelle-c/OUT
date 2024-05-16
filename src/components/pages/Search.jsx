import { EmblaCarousel } from "../EmblaCarousel";
import { EmblaCarouselCards } from "../EmblaCarouselCards";
import "../../styles/search.css";

function Search() {
  const favorites = [
    {
      category: "culture",
      title: "Foire artisanale",
      address: "Marché des Enfants Rouges, 75003 Paris",
      description:
        "Parcourez la foire artisanale au Marché des Enfants Rouges et découvrez des produits faits main uniques et créatifs.",
      img: "./assets/images/culture1.jpeg",
      popular: false,
    },
    {
      category: "sport",
      title: "Séances de yoga",
      address: "Bois de Vincennes, 75012 Paris",
      description:
        "Détendez-vous avec des séances de yoga en plein air dans le cadre paisible du Bois de Vincennes.",
      img: "./assets/images/sport3.jpg",
      popular: false,
    },
    {
      category: "nature",
      title: 'Exploration du bois du boulogne',
      address: "Bois de Boulogne, 75016 Paris",
      description: "Explorez le Bois de Boulogne, un immense parc urbain offrant des sentiers de randonnée, des lacs pour faire du canotage, et des jardins paysagers.",
      img: "./assets/images/nature2.jpeg",
      popular: true
  },
  ];

  const OPTIONS = {};
  const SLIDES = [
    {
      text: "En moyenne, les Français passent environ 4 heures et 30 minutes par jour devant un écran, que ce soit pour le travail ou les loisirs.",
      img: "assets/images/warning_slide1.jpg",
    },
    {
      text: "La surexposition aux écrans peut causer des problèmes de vision, perturber le sommeil, et entraîner des douleurs physiques.",
      img: "assets/images/warning_slide2.jpg",
    },
    {
      text: "Il est important de limiter le temps d'écran et de privilégier d'autres activités pour préserver la santé.",
      img: "assets/images/warning_slide3.jpg",
    },
  ];

  return (
    <main className="main-search">
      <section className="off-screen-carrousel">
        <h1>Pourquoi faire attention à son temps hors écran ?</h1>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>
      <section className="off-screen-carrousel">
        <h1>Les sorties à la une</h1>
        <EmblaCarouselCards slides={favorites} options={OPTIONS} />
      </section>
    </main>
  );
}

export default Search;
