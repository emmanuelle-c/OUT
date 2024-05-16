/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import "../../styles/Timer.css";

const Timer = () => {
  const initialMinutes = 5;
  const [seconds, setSeconds] = useState(initialMinutes * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive && seconds > 0) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (seconds === 0) {
      setIsActive(false);
    }
  }, [isActive, seconds]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="timer">
      <h1 className="time">{formatTime(seconds)}</h1>
      <div className="timertext">
        <p className="textetimer">
          <b>Pour utiliser Out, c'est simple</b> tape le temp où tu souhaite
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
    </div>
  );
};

export default Timer;
