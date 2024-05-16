import React, { useState, useEffect } from "react";
import "./Timer.css";

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
    <div>
      <h1>{formatTime(seconds)}</h1>
      <p>
        Pour utiliser Out c'est simple tape le temp où tu souhaite rester
        concentré et lance le timer
      </p>
      <button
        onClick={() => setIsActive(true)}
        disabled={isActive || seconds === 0}
      >
        Lancer le timer
      </button>
    </div>
  );
};

export default Timer;
