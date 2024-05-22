/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Timer.css";
import outLogo from "../../assets/images/outlogo.svg";

const Timer = () => {
  const initialMinutes = 1;
  const [seconds, setSeconds] = useState(initialMinutes * 60);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isActive && seconds > 0) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (seconds === 0) {
      setIsActive(false);
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
          src={outLogo}
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
          <b>Pour utiliser Out, c'est simple !</b> Choisis le temps et lance le timer
        </p>
      </div>
      <div className="timeflex">
        <button
          onClick={() => setIsActive(true)}
          disabled={isActive || seconds === 0}
          className="go-out"
        >
          Lancer le timer
        </button>
      </div>
    </div>
  );
};

export default Timer;
