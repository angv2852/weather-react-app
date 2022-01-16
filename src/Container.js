import React from "react";
import "./Container.css";
import CurrentWeather from "./CurrentWeather";

export default function Container() {
  return (
    <div className="Container">
      <CurrentWeather defaultCity="Las Vegas" />
    </div>
  );
}
