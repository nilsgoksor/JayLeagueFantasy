import { takeLatest, takeEvery } from "redux-saga/effects";
import { leagueDataSaga } from "./leagueData";
import { historyDataSaga } from "./historyData";
import { playerDataSaga } from "./playerData";
import * as actionTypes from "../actions/actiontypes";

export function* watchLeagueData() {
  yield takeLatest(actionTypes.GET_LEAGUEDATA, leagueDataSaga);
}

export function* watchHistoryData() {
  yield takeEvery(actionTypes.GET_HISTORYDATA, historyDataSaga);
}

export function* watchPlayerData() {
  yield takeEvery(actionTypes.GET_PLAYERDATA, playerDataSaga);
}
