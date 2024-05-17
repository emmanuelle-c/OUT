/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Timer.css";

const Timer = () => {
  const initialMinutes = 0.1;
  const [seconds, setSeconds] = useState(initialMinutes * 60);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const audioRef = useRef(null);

  useEffect(() => {
    if (isActive && seconds > 0) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (seconds === 0) {
      setIsActive(false);
      if (audioRef.current) {
        audioRef.current.play();
      }
      navigate("/results");
    }
  }, [isActive, seconds, navigate]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleTimeChange = (event) => {
    setSeconds(event.target.value * 60);
  };

  return (
    <div className="timer">
      <div className="timerlogo" onClick={() => navigate("/")}>
        <img
          src="src/assets/images/outlogo.svg"
          alt="logo"
          className="logotimer"
        />
      </div>
      <h1 className="time">{formatTime(seconds)}</h1>
      <div className="selecttime">
        <input
          type="range"
          min="1"
          max="60"
          value={seconds / 60}
          onChange={handleTimeChange}
          className="timerslider"
        />
      </div>
      <div className="timertext">
        <p className="textetimer">
          <b>Pour utiliser Out, c'est simple</b> tape le temps où tu souhaites
          rester concentré et lance le timer
        </p>
      </div>
      <div className="timeflex">
        <button
          onClick={() => setIsActive(true)}
          disabled={isActive || seconds === 0}
          className="timerbutton"
        >
          Lancer le timer
        </button>
      </div>
      <audio ref={audioRef} src="/public/AMBBird.mp3" />
    </div>
  );
};

export default Timer;
