import React from "react";
import FormattedDate from "./FormattedDate";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="SearchBar">
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
      <hr />
      <p>
        <FormattedDate />
      </p>
    </div>
  );
}
