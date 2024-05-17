import "../styles/modal.css";
import "../styles/global.css";
import { RiCloseLine } from "react-icons/ri";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types"

function Modal ({setIsOpen}) {
    const audioRef = useRef(null);
    useEffect( () => {
        audioRef.current.play();
    }, []) 
    return (
        <>
        <div className="darkBG" onClick={()=> setIsOpen(false)}/>
        <div className="centered">
            <div className="modal">
                <div className="modalHeader">
                    <h1 className="heading">Timer terminé !</h1>
                </div>
                <button className="closeBtn" onClick={() => setIsOpen(false)}>
                    <RiCloseLine style={{marginBottom: "-3px"}}/>
                </button>
                <div className="modalContent">
                    <p>Il est temps de prendre une pause !</p>
                </div>
            </div>
            <audio ref={audioRef} src="/public/AMBBird.mp3" />
        </div>
        </>
    )
}

Modal.propTypes = {
    setIsOpen : PropTypes.func,
}

export default Modal;