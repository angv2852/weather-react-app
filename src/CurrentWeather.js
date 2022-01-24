import React, { useState } from "react";
import WeatherToday from "./WeatherToday";
import FormattedDate from "./FormattedDate";
import WeatherForecast from "./WeatherForecast";
import "./CurrentWeather.css";
import axios from "axios";

export default function CurrentWeather(props) {
  const [currentWeather, setCurrentWeather] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);

  function showTemperature(response) {
    setCurrentWeather({
      loaded: true,
      coordinates: response.data.coord,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      feelsLike: response.data.main.feels_like,
      date: new Date(response.data.dt * 1000),
    });
  }
  function search() {
    let apiKey = "3e4837b1fe633f474ee7c985588f6e07";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(showTemperature);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    // search for a city
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  if (currentWeather.loaded) {
    return (
      <div className="SearchBar">
        <WeatherToday weather={currentWeather} />
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="text"
            placeholder="Enter city name"
            autoFocus="on"
            autoComplete="off"
            id="city-name-input"
            onChange={changeCity}
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
        <div className="WeatherForecast">
          <hr />
          <WeatherForecast coordinates={currentWeather.coordinates} />
        </div>
        <div className="date">
          <hr />
          <FormattedDate date={currentWeather.date} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
