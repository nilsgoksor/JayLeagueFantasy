import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import leagueDataReducer from "./reducers/leagueData";
import historyDataReuducer from "./reducers/historyData";
import settingsReducer from "./reducers/settings";
import playerDataReducer from "./reducers/playerData";
import funk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import { watchLeagueData, watchHistoryData, watchPlayerData } from "./sagas";

const persistConfig = {
  key: "root",
  storage: storageSession
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const rootRedcuer = combineReducers({
  leagueDataReducer: leagueDataReducer,
  historyDataReuducer: historyDataReuducer,
  settingsReducer: settingsReducer,
  playerDataReducer: playerDataReducer
});
const persistedReducer = persistReducer(persistConfig, rootRedcuer);

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(funk, sagaMiddleware))
);

sagaMiddleware.run(watchLeagueData);
sagaMiddleware.run(watchHistoryData);
sagaMiddleware.run(watchPlayerData);

const persistor = persistStore(store);

export default () => {
  return { store, persistor };
};
