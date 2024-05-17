import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/results.css";
import activities from "../../activities";
import Modal from "../Modal";
import Card from "../Card";

function Results() {
  const [isOpen, setIsOpen] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const [isButton, setIsButton] = useState(true);
  const { type, input } = useParams();

  const natureArray = activities
    .filter((activity) => activity.category === "nature")
    .sort(() => Math.random() - 0.5);

  const sportArray = activities
    .filter((activity) => activity.category === "sport")
    .sort(() => Math.random() - 0.5);

  const cultureArray = activities
    .filter((activity) => activity.category === "culture")
    .sort(() => Math.random() - 0.5);

  let inputArray = [];
  if (type === "search") {
    inputArray = activities.filter(
      (activity) =>
        activity.title.toLowerCase().includes(input.toLowerCase()) ||
        activity.description.toLowerCase().includes(input.toLowerCase())
    );
  } else {
    if (input === "nature") {
      inputArray = natureArray;
    } else if (input === "culture") {
      inputArray = cultureArray;
    } else if (input === "sport") {
      inputArray = sportArray;
    }
  }

  const handleShow = () => {
    setShowMore(true);
    setIsButton(false);
  };
  return (
    <main className="main-result">
      <Link to="/">
        <img className="logo" src="/src/assets/images/outlogo.svg " />
      </Link>
      {!input && (
        <>
          {isOpen && <Modal setIsOpen={setIsOpen} />}
          <h2 className="results-header">Out te propose 3 activités</h2>
          <div>
            <Card activity={natureArray[0]} />
            <Card activity={sportArray[0]} />
            <Card activity={cultureArray[0]} />
          </div>
          {isButton && (
            <button className="go-out go-out-results" onClick={handleShow}>
              Voir plus
            </button>
          )}
          {showMore && (
            <div className="show-more-items">
              <Card activity={natureArray[1]} />
              <Card activity={sportArray[1]} />
              <Card activity={cultureArray[1]} />
              <Link to="/search">
                {"Faire ma propre recherche d'activités"}
              </Link>
            </div>
          )}
        </>
      )}
      {input && type === "search" && (
        <>
          <h2 className="results-header">Voilà ce que donne ta recherche 😀</h2>
          {inputArray.map((activity) => (
            <Card key={activity.address} activity={activity} />
          ))}
        </>
      )}
      {type === "category" &&
        input &&
        <>
        <h2 className="results-header">Voilà ce que donne ta recherche 😀</h2>
        {inputArray.map((activity) => (
          <Card key={activity.address} activity={activity} />
        ))}
        </>}
      <Link to="/">
        <button className="find-activity">Back-Out !</button>
      </Link>
    </main>
  );
}

export default Results;
