import {PropTypes} from "prop-types";

function Card ({activity}) {
    return (
        <>
        <img src={`/src/${activity.img}`}/>
        <h2>{activity.address}</h2>
        <p>{activity.description}</p>
        </>
    )
}

Card.propTypes = {
    activity: PropTypes.object,
}

export default Card;