import React from "react";
import "./Container.css";
import CurrentWeather from "./CurrentWeather";
import FormattedDate from "./FormattedDate";

export default function Container() {
  return (
    <div className="Container">
      <CurrentWeather defaultCity="Las Vegas" />
      <hr />
      <p>
        <FormattedDate />
      </p>
    </div>
  );
}
