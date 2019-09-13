import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "typeface-roboto";

//redux
import { Provider } from "react-redux";
import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import leagueDataReducer from "./store/reducers/leagueData";
import settingsReducer from "./store/reducers/settings";
import playerDataReducer from "./store/reducers/playerData";
import funk from "redux-thunk";

//redux saga
import createSagaMiddleware from "redux-saga";
import { watchLeagueData, watchPlayerData } from "./store/sagas";

const rootRedcuer = combineReducers({
  leagueDataReducer: leagueDataReducer,
  settingsReducer: settingsReducer,
  playerDataReducer: playerDataReducer
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootRedcuer,
  composeEnhancers(applyMiddleware(funk, sagaMiddleware))
);

sagaMiddleware.run(watchLeagueData);
sagaMiddleware.run(watchPlayerData);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

serviceWorker.unregister();
