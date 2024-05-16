import "../../styles/getout.css";

function GetOut() {
  return (
    <section className="get-out-section">
      <h2 className="results-header">
        {"Retrouve l'activité près de chez toi"}
      </h2>
      <div className="plan-activity"></div>
      <button type="button" className="go-out">
        Voir sur Map
      </button>
      <button className="find-activity">Back-Out !</button>
    </section>
  );
}

export default GetOut;
