import React from "react";

export default function Footer() {
  return (
    <div className="Footer">
      <small>
        {" "}
        <a
          href="https://github.com/angv2852/weather-react-app"
          target="blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Angela Sullivan, hosted on{" "}
        <a
          href="https://eloquent-shockley-047514.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </small>
      <script src="script.js"></script>
    </div>
  );
}
