import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import Hello from "./Containers/Hello";
import { createStore } from "redux";
import { enthusiasm } from "./Reducers/Reducers";
import { StoreState } from "./Types/Types";
import { Provider } from "react-redux";

const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: "TypeScript",
});

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
