import * as React from "react";
import * as ReactDOM from "react-dom";
import MainApp from "../mainapp";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MainApp />, div);
});
