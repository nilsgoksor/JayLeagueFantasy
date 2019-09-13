import { takeLatest, takeEvery } from "redux-saga/effects";
import { leagueDataSaga } from "./leagueData";
import { playerDataSaga } from "./playerData";
import * as actionTypes from "../actions/actiontypes";

export function* watchLeagueData() {
  yield takeLatest(actionTypes.GET_LEAGUEDATA, leagueDataSaga);
}

export function* watchPlayerData() {
  yield takeEvery(actionTypes.GET_PLAYERDATA, playerDataSaga);
}
