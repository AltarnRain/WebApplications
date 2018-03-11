import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import "babel-polyfill";

ReactDOM.render(
  <h2>hey now</h2>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
