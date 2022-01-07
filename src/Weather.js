import React from "react";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    return <h2>Weather app</h2>;

    let apiKey = "24938515d6364eea8b6bfd1202de9eb1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
}
