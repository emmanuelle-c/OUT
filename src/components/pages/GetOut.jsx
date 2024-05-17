import { Link } from "react-router-dom";
import "../../styles/getout.css";

function GetOut() {
  return (
    <section className="get-out-section">
      <Link to="/">
        <img className="logo" src="./src/assets/images/outlogo.svg " />
      </Link>
      <h2 className="getout-header">
        {"Retrouve l'activité près de chez toi"}
      </h2>
      <div className="plan-activity">
        <img src="./src/assets/images/plan.png" alt="plan/carte"/>
      </div>
      <a
        href="https://www.google.com/maps/@48.8046592,2.4357993,14z?authuser=0&entry=ttu"
        target="blanck"
      >
        <button type="button" className="go-out">
          Voir sur Map
        </button>
      </a>
      <Link to="/">
        <button className="find-activity">Back-Out !</button>
      </Link>
    </section>
  );
}

export default GetOut;
