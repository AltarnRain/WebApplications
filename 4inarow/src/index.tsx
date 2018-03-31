import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/app";
import registerServiceWorker from "./registerServiceWorker";
import "./css/index.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./store/reducers";

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
