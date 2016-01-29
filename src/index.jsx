import React from "react";
import ReactDOM from "react-dom";
import App from "components/app";

window.addEventListener("load", () => {
  const container = document.querySelector("#app");
  ReactDOM.render(<App />, container);
});
