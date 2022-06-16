import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./CounterApp";
//import { HelloWorldApp } from "./HelloWorldApp";

const valor = 10;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp value={valor} />
  </React.StrictMode>
);
