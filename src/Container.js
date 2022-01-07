import React from "react";
import "./Container.css";
import CurrentWeather from "./CurrentWeather";
import SearchBar from "./SearchBar";

export default function Container() {
  return (
    <div className="Container">
      <CurrentWeather />
      <SearchBar />
    </div>
  );
}
