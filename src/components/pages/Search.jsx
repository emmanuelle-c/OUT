import { EmblaCarousel } from "../EmblaCarousel";
import { EmblaCarouselCards } from "../EmblaCarouselCards";
import "../../styles/search.css";
import SearchBar from "../SearchBar";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import activities from "../../activities";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
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
      title: "Exploration du bois du boulogne",
      address: "Bois de Boulogne, 75016 Paris",
      description:
        "Explorez le Bois de Boulogne, un immense parc urbain offrant des sentiers de randonnée, des lacs pour faire du canotage, et des jardins paysagers.",
      img: "./assets/images/nature2.jpeg",
      popular: true,
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
      <Link to="/">
        <img className="logo" src="./src/assets/images/outlogo.svg " />
      </Link>
      <section className="off-screen-carrousel">
        <h1>Pourquoi faire attention à son temps hors écran ?</h1>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>
      <section className="off-screen-carrousel">
        <h1>Les sorties à la une</h1>
        <EmblaCarouselCards slides={favorites} options={OPTIONS} />
      </section>
      <div className="searchdiv">
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} activities={activities}/>
        <ul className="tags">
          <li className="tag" onClick={() => navigate(`/results/category/nature`)}>
            {" "}
            <svg 
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.66667 0C2 0 0.666667 1.22222 0.666667 2.75C0.666667 3.12278 0.753333 3.48944 0.913333 3.83167C0.333333 4.35111 0 5.06 0 5.80556C0 7.33333 1.33333 8.55556 3 8.55556C3.33333 8.55556 3.66667 8.48833 4 8.38444V11H5.33333V7.80389C5.66667 7.88944 6 7.94444 6.33333 7.94444C6.81485 7.94444 7.29165 7.85751 7.73651 7.68859C8.18137 7.51968 8.58558 7.27211 8.92606 6.96C9.26654 6.64789 9.53662 6.27736 9.72089 5.86958C9.90516 5.46179 10 5.02472 10 4.58333C10 4.14195 9.90516 3.70488 9.72089 3.29709C9.53662 2.8893 9.26654 2.51878 8.92606 2.20667C8.58558 1.89456 8.18137 1.64698 7.73651 1.47807C7.29165 1.30916 6.81485 1.22222 6.33333 1.22222C6.27333 1.22222 6.22 1.22222 6.16 1.22222C5.60667 0.464444 4.66667 0 3.66667 0ZM3.66667 1.22222C4.54667 1.22222 5.27333 1.85167 5.33333 2.65833C5.64 2.51778 6 2.44444 6.33333 2.44444C6.95217 2.44444 7.54566 2.66979 7.98325 3.07091C8.42083 3.47203 8.66667 4.01606 8.66667 4.58333C8.66667 5.1506 8.42083 5.69464 7.98325 6.09576C7.54566 6.49688 6.95217 6.72222 6.33333 6.72222C5.69333 6.72222 5.08667 6.48389 4.64 6.05611C4.50667 6.79556 3.81333 7.33333 3 7.33333C2.55797 7.33333 2.13405 7.17237 1.82149 6.88586C1.50893 6.59934 1.33333 6.21075 1.33333 5.80556C1.33333 4.96222 1.86667 4.60778 2.66667 4.14944C2.13333 3.52 2 3.15333 2 2.75C2 2.34481 2.17559 1.95621 2.48816 1.6697C2.80072 1.38318 3.22464 1.22222 3.66667 1.22222Z"
                fill="black"
              />
            </svg>
            Nature
          </li>
          <li className="tag" onClick={() => navigate(`/results/category/culture`)}>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.25 4.5H1.25V8H2.25V4.5ZM5.25 4.5H4.25V8H5.25V4.5ZM9.5 9H0V10H9.5V9ZM8.25 4.5H7.25V8H8.25V4.5ZM4.75 1.13L7.355 2.5H2.145L4.75 1.13ZM4.75 0L0 2.5V3.5H9.5V2.5L4.75 0Z"
                fill="black"
              />
            </svg>
            Culture
          </li>
          <li className="tag" onClick={() => navigate(`/results/category/sport`)}>
            <svg
              width="10"
              height="12"
              viewBox="0 0 10 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.25 2.75C7.51522 2.75 7.76957 2.64464 7.95711 2.45711C8.14464 2.26957 8.25 2.01522 8.25 1.75C8.25 1.48478 8.14464 1.23043 7.95711 1.04289C7.76957 0.855357 7.51522 0.75 7.25 0.75C6.98478 0.75 6.73043 0.855357 6.54289 1.04289C6.35536 1.23043 6.25 1.48478 6.25 1.75C6.25 2.01522 6.35536 2.26957 6.54289 2.45711C6.73043 2.64464 6.98478 2.75 7.25 2.75ZM5.45 9.7L5.95 7.5L7 8.5V11.5H8V7.75L6.95 6.75L7.25 5.25C7.945 6.045 8.945 6.5 10 6.5V5.5C9.12 5.515 8.3 5.055 7.85 4.3L7.35 3.5C7.17 3.2 6.85 3 6.5 3C6.35 3 6.25 3.05 6.1 3.05L3.5 4.15V6.5H4.5V4.8L5.4 4.45L4.6 8.5L2.15 8L1.95 9L5.45 9.7ZM1 4.5C0.867392 4.5 0.740215 4.44732 0.646447 4.35355C0.552678 4.25979 0.5 4.13261 0.5 4C0.5 3.86739 0.552678 3.74021 0.646447 3.64645C0.740215 3.55268 0.867392 3.5 1 3.5H2.5V4.5H1ZM1.5 2.5C1.36739 2.5 1.24021 2.44732 1.14645 2.35355C1.05268 2.25979 1 2.13261 1 2C1 1.86739 1.05268 1.74021 1.14645 1.64645C1.24021 1.55268 1.36739 1.5 1.5 1.5H4V2.5H1.5ZM0.5 6.5C0.367392 6.5 0.240215 6.44732 0.146447 6.35355C0.0526784 6.25979 0 6.13261 0 6C0 5.86739 0.0526784 5.74021 0.146447 5.64645C0.240215 5.55268 0.367392 5.5 0.5 5.5H2.5V6.5H0.5Z"
                fill="black"
              />
            </svg>
            Sport
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Search;
