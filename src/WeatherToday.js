import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherToday(props) {
  return (
    <div className="CurrentWeather">
      <div className="row">
        <div className="col-6">
          <h1>{props.weather.city}</h1>
          <div className="d-flex justify-content-center align-items-center">
            <h2>{Math.round(props.weather.temperature)}</h2>
            <div className="degrees">
              <button className="active">°F</button>
            </div>
          </div>
          <div className WeatherIcon>
            <WeatherIcon code={props.weather.icon} />
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              <strong>Description:</strong> {props.weather.description}{" "}
              <span id="description"></span>
            </li>
            <li>
              <strong>Humidity:</strong> {props.weather.humidity}{" "}
              <span id="humidity"></span>%
            </li>
            <li>
              <strong>Wind Speed:</strong> {Math.round(props.weather.windSpeed)}{" "}
              <span id="wind"></span> m/h
            </li>
            <li>
              <strong>Feels like:</strong> {Math.round(props.weather.feelsLike)}{" "}
              <span id="feels"></span>°
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
