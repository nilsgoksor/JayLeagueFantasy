import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import * as serviceWorker from "./serviceWorker";
import configureStore from "./store/configureStore";

import { Provider } from "react-redux";

const { store, persistor } = configureStore();

const app = (
  <Provider store={store} persistor={persistor}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();
