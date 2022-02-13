import React from "react";
import ReactDOM from "react-dom";

const fName = "Breana";
const lName = "Myrtil";
const favNo = 7;

ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}!
    </h1>
    <p>Your favorite number is {favNo}</p>
  </div>,
  document.getElementById("root")
);
