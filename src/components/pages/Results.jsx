import Modal from "../Modal";
import "../../styles/results.css";
import { useState } from "react";
import activities from "../../activities";
import Card from "../Card";

function Results() {
  const [isOpen, setIsOpen] = useState(true);
  const natureArray = activities.filter(
    (activity) => activity.category === "nature"
  );
  const randomActivity = natureArray[Math.floor(Math.random() * natureArray.length)];
  const sportArray = activities.filter(
    (activity) => activity.category === "sport"
  );
  const cultureArray = activities.filter(
    (activity) => activity.category === "culture"
  );
  return (
    <>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
      <h2 className="results-header">Out te propose 3 activités</h2>
      <div>
        {natureArray.map((activity) => (
          <Card
            key={activity.description}
            activity={activity}
          />
        ))}
        {sportArray.map((activity) => (
          <Card
            key={activity.description}
            activity={activity}
          />
        ))}
        {cultureArray.map((activity) => (
          <Card
            key={activity.description}
            activity={activity}
          />
        ))}
      </div>
      <button>Voir plus</button>
    </>
  );
}

export default Results;
