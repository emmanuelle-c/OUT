import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";
import "../styles/card.css";

function Card({ activity }) {
  const navigate = useNavigate();
  return (
    <div className="card-container" onClick={() => navigate("/get-out")}>
      <img src={`/src/${activity.img}`} />
      <div className="card-desc">
        <p className="activity-cat">{activity.category}</p>
        <h2>{activity.title}</h2>
        <p className="activity-address">{activity.address}</p>
        <p>{activity.description}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  activity: PropTypes.object,
};

export default Card;
