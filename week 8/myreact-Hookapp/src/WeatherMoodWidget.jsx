// WeatherMoodWidget.jsx
// CN5006 Week 8 portfolio task – Bohdan Voitenkov (3121742)
// "My Mood Weather Widget": shows a weather condition with a matching picture
// and counts how many times the user clicks to say how the weather makes them feel.
// The count is saved in the browser (localStorage), so it is still there after a page reload.

import { useState, useEffect } from "react";
import Sunny from "./Sunny.svg";
import Rainy from "./Rainy.svg";
import Cloudy from "./Cloudy.svg";

// one entry for every weather the widget understands
const weatherInfo = {
  Sunny:  { image: Sunny,  mood: "Sunny days make me happy!",      colour: "#FFF4D6" },
  Rainy:  { image: Rainy,  mood: "Rain makes me want to stay in.", colour: "#E3ECF8" },
  Cloudy: { image: Cloudy, mood: "Clouds make me feel calm.",      colour: "#EEF0F3" },
};

function WeatherMoodWidget({ weather }) {
  // picture, text and colour come straight from the weather prop
  // (an unknown weather falls back to Sunny)
  const info = weatherInfo[weather] || weatherInfo.Sunny;
  const storageKey = "mood-" + weather;

  // state: number of clicks, starting from the value saved last time (or 0)
  const [count, setCount] = useState(() => Number(localStorage.getItem(storageKey)) || 0);

  // side effect: every time count changes, save it in the browser
  useEffect(() => {
    localStorage.setItem(storageKey, count);
    console.log(`${weather}: ${count} click(s) saved`);
  }, [storageKey, weather, count]);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={{ background: info.colour, border: "1px solid #ccc", borderRadius: 12,
                  padding: "16px 24px", margin: "12px auto", width: 300, textAlign: "center" }}>
      <h2 style={{ margin: "0 0 8px" }}>{weather}</h2>
      <img src={info.image} alt={weather} width="64" height="64" />
      <p>{info.mood}</p>

      <button type="button" onClick={handleClick}>
        This weather makes me feel this way ({count})
      </button>
      <button type="button" onClick={handleReset} style={{ marginLeft: 8 }}>
        Reset
      </button>

      {count >= 5 && <p><b>You really feel this weather!</b></p>}
    </div>
  );
}

export default WeatherMoodWidget;
