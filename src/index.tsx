import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import "babel-polyfill";
import allReducers from "./Reducers";
import { Provider } from "react-redux";
import App from "./components/app";

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);

registerServiceWorker();
