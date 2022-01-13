import React, { useState } from "react";
import "./CurrentWeather.css";
import axios from "axios";

export default function CurrentWeather(props) {
  const [currentWeather, setCurrentWeather] = useState({ loaded: false });

  function showTemperature(response) {
    console.log(response);
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
      <div className="CurrentWeather">
        <div className="row">
          <div className="col-6">
            <h1>{currentWeather.city}</h1>
            <div className="d-flex justify-content-center align-items-center">
              <h2>{Math.round(currentWeather.temperature)}</h2>
              <div className="degrees">
                <button className="active">°F</button>
              </div>
            </div>
            <img
              src={currentWeather.iconUrl}
              alt={currentWeather.description}
              id="icon"
            />
          </div>
          <div className="col-6">
            <ul>
              <li>
                <strong>Description:</strong> {currentWeather.description}{" "}
                <span id="description"></span>
              </li>
              <li>
                <strong>Humidity:</strong> {currentWeather.humidity}{" "}
                <span id="humidity"></span>%
              </li>
              <li>
                <strong>Wind Speed:</strong>{" "}
                {Math.round(currentWeather.windSpeed)} <span id="wind"></span>{" "}
                m/h
              </li>
              <li>
                <strong>Feels like:</strong>{" "}
                {Math.round(currentWeather.feelsLike)} <span id="feels"></span>°
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "3e4837b1fe633f474ee7c985588f6e07";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(showTemperature);

    return "Loading...";
  }
}
