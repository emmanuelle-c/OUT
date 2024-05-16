
import "../../styles/results.css";
import Card from "../Card";

function Results() {
  const [isOpen, setIsOpen] = useState(true);
  const natureArray = activities.filter(
    (activity) => activity.category === "nature"
  );
  const randomNatureActivity = natureArray[Math.floor(Math.random() * natureArray.length)];
  const sportArray = activities.filter(
    (activity) => activity.category === "sport"
  );
  const randomSportActivity = sportArray[Math.floor(Math.random() * sportArray.length)];
  const cultureArray = activities.filter(
    (activity) => activity.category === "culture"
  );
  const randomCultureActivity = cultureArray[Math.floor(Math.random() * cultureArray.length)];
  return (
    <main className="main-result">
      {isOpen && <Modal setIsOpen={setIsOpen} />}
      <h2 className="results-header">Out te propose 3 activités</h2>
      <div>
          <Card
            activity={randomNatureActivity}
          />
          <Card
            activity={randomSportActivity}
          />
          <Card
            activity={randomCultureActivity}
          />
      </div>
      <button className="show-more-cards">Voir plus</button>
    </main>
  );
}

export default Results;
