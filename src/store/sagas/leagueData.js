import { put } from "redux-saga/effects";
import * as actions from "../actions/index";
import axios from "../../axios-fantasy";

export function* leagueDataSaga(action) {
  console.log("test");
  axios.defaults.headers.get["Content-Type"] =
    "application/x-www-form-urlencoded";

  yield put(actions.getLeagueDataInit());
  const url = "/api/leagues-classic/" + action.leagueId + "/standings/";

  try {
    const response = yield axios.get(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const leagueName = response.data.league.name;
    const standings = response.data.standings.results;
    const playerInfo = yield standings.map(player => {
      return { id: player.entry, name: player.player_name };
    });
    yield put(actions.getLeagueDataSuccess(leagueName, standings, playerInfo));
  } catch (error) {
    yield put(actions.getLeagueDataFail(error));
  }
}
