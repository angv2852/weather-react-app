import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <div className="row">
        <div className="col-6">
          <h1>Las Vegas</h1>
          <div className="d-flex justify-content-center align-items-center">
            <h2>73</h2>
            <div className="degrees">
              <button className="active">°F</button>
            </div>
          </div>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            id="icon"
          />
        </div>
        <div className="col-6">
          <ul>
            <li>
              <strong>Description:</strong> <span id="description"></span>
            </li>
            <li>
              <strong>Humidity:</strong> <span id="humidity"></span>%
            </li>
            <li>
              <strong>Wind Speed:</strong> <span id="wind"></span> M/H
            </li>
            <li>
              <strong>Feels like:</strong> <span id="feels"></span>°
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
