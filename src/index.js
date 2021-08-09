//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>My favourite foods</h1>
    <ul>
      <li>Bacon</li>
      <li>Noodles</li>
      <li>Jannon</li>
    </ul>
  </div>,
  document.getElementById("root")
);
