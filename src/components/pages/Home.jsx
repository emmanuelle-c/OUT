import "../../styles/home.css";

function Home() {
  return (
    <section id="home">
      <img src="./src/assets/images/outlogo.svg " />
      <div className="description-out-home">
        <h1 className="bienvenue">Bienvenue sur OUT</h1>
        <p className="paragraphe">
          {
            "l'application qui t'aide à reconnecter avec le réel près de chez toi, tout simplement !"
          }
        </p>
      </div>
      <div className="buttons-home">
        <button type="button" className="go-out">
          Lancer OUT !
        </button>
        <button type="button" className="find-activity">
          <p className="p-activity">Trouver une activité</p>
        </button>
      </div>
    </section>
  );
}

export default Home;
