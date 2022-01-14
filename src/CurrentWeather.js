import React, { useState } from "react";
import WeatherToday from "./WeatherToday";
import "./CurrentWeather.css";
import axios from "axios";

export default function CurrentWeather(props) {
  const [currentWeather, setCurrentWeather] = useState({ loaded: false });

  function showTemperature(response) {
    setCurrentWeather({
      loaded: true,
      city: response.data.name,
      iconUrl: "https://openweathermap.org/img/wn/01d@2x.png",
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      feelsLike: response.data.main.feels_like,
    });
  }

  if (currentWeather.loaded) {
    return (
      <div className="SearchBar">
        <WeatherToday weather={currentWeather} />
        <form id="search-form">
          <input
            type="text"
            placeholder="Enter city name"
            autoFocus="on"
            autoComplete="off"
            id="city-name-input"
          />
          <input
            type="submit"
            value="Search"
            id="city-button"
            className="btn btn-outline-primary"
          />
          <input
            type="submit"
            value="Current City"
            className="btn btn-outline-danger"
            id="current-btn"
          />
        </form>
      </div>
    );
  } else {
    let apiKey = "3e4837b1fe633f474ee7c985588f6e07";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(showTemperature);

    return "Loading...";
  }
}
