import Modal from "../Modal";
import "../../styles/results.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import activities from "../../activities";
import Card from "../Card";

function Results() {
  const [isOpen, setIsOpen] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const [isButton, setIsButton] = useState(true);
  const natureArray = activities.filter(
    (activity) => activity.category === "nature"
  ).sort(() => Math.random() - 0.5);

  const sportArray = activities.filter(
    (activity) => activity.category === "sport"
  ).sort(() => Math.random() - 0.5);

  const cultureArray = activities.filter(
    (activity) => activity.category === "culture"
  ).sort(() => Math.random() - 0.5);


  const handleShow = () => {
    setShowMore(true);
    setIsButton(false);
  };
  return (
    <main className="main-result">
      {isOpen && <Modal setIsOpen={setIsOpen} />}
      <h2 className="results-header">Out te propose 3 activités</h2>
      <div>
        <Card activity={natureArray[0]} />
        <Card activity={sportArray[0]} />
        <Card activity={cultureArray[0]} />
      </div>
      {isButton && (
        <button className="show-more-cards" onClick={handleShow}>
          Voir plus
        </button>
      )}
      {showMore && (
        <div className="show-more-items">
          <Card activity={natureArray[1]} />
          <Card activity={sportArray[1]} />
          <Card activity={cultureArray[1]} />
          <Link to="/search">Faire ma propre recherche d'activités</Link>
        </div>
      )}
    </main>
  );
}

export default Results;
