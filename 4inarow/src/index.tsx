import * as React from "react";
import * as ReactDOM from "react-dom";
import MainApp from "./mainapp";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./store/reducers";

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <MainApp />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
