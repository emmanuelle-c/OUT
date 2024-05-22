import { Link } from "react-router-dom";
import outLogo from "../../assets/images/outlogo.svg";
import "../../styles/home.css";

function Home() {
    return (
        <section id="home">
            <img className="logo" src={outLogo} />
            <div className="description-out-home">
                <h1 className="bienvenue">Bienvenue sur OUT</h1>
                <p className="paragraphe">
                    {
                        "L' application qui t'aide à reconnecter avec le réel près de chez toi, tout simplement !"
                    }
                </p>
            </div>
            <div className="buttons-home">
                <Link to="./timer">
                    <button type="button" className="go-out">
                        Lancer OUT !
                    </button>
                </Link>
                <Link to="./search">
                    <button type="button" className="find-activity">
                        <p className="p-activity">Trouver une activité</p>
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default Home;
