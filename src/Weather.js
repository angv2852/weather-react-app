import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather() {
  function handleResponse(response) {
    alert(`the weather in New York is ${Math.round(response.data.main.temp)}`);
  }

  let apiKey = "24938515d6364eea8b6bfd1202de9eb1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <Loader
      type="Hearts"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
}
