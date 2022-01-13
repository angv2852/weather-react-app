import React from "react";
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
      <p>Last updated Monday, 13:28</p>
    </div>
  );
}
