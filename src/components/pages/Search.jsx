import { EmblaCarousel } from "../EmblaCarousel";
import "../../styles/search.css";
import Card from "../Card";
import { useState } from "react";

function Search() {

const [favorites, setFavorites] = useState([{
    category: "sport",
    address: "Roland Garros, 75016 Paris",
    description: "Assistez au célèbre tournoi de tennis de Roland Garros, où les meilleurs joueurs du monde s'affrontent sur terre battue.",
    img: "./assets/images/sport4.avif",
    popular: 'true'
},
{
    category: "culture",
    address: "Musée du Louvre, 75001 Paris",
    description: "Explorez une exposition d'art au Musée du Louvre mettant en vedette des artistes locaux, une opportunité de découvrir des talents émergents.",
    img: "./assets/images/culture1.jpeg",
    popular: 'true'
},
{
    category: "nature",
    address: "Jardin des Plantes, 75005 Paris",
    description: "Promenez-vous dans le Jardin des Plantes, un vaste jardin botanique avec une grande variété de plantes, serres tropicales, et une ménagerie.",
    img: "./assets/images/nature1.jpeg",
    popular: 'true'
},

]);


  const OPTIONS = {};
  const SLIDES = [
    "En moyenne, les Français passent environ 4 heures et 30 minutes par jour devant un écran, que ce soit pour le travail ou les loisirs.",
    "La surexposition aux écrans peut causer des problèmes de vision,  perturber le sommeil, et entraîner des douleurs physiques. Elle peut aussi augmenter l'anxiété, la dépression, et réduire la concentration.",
    "Il est important de limiter le temps d'écran et de privilégier d'autres activités pour préserver la santé.",
  ];

  const UNE = [
    <Card activity={favorites[0]}/>,
    <Card activity={favorites[1]}/>,
    <Card activity={favorites[2]}/>,
  ]

  return (

    <main className="main-search">
      <section className="off-screen-carrousel">
        <h1>Pourquoi faire attention à son temps hors écran ?</h1>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>
      <section className="off-screen-carrousel">
        <h1>Les sorties à la une</h1>
        <EmblaCarousel slides={UNE} options={OPTIONS} />
      </section>
    </main>
  );
}

export default Search;
