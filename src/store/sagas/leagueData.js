import { put } from "redux-saga/effects";
import * as actions from "../actions/index";
import axios from "../../axios-fantasy";

export function* leagueDataSaga(action) {
  yield put(actions.getLeagueDataInit());
  const url = "/api/leagues-classic/" + action.leagueId + "/standings/";
  const config = {
    headers: {
      Accept: "application/json",
      ContentType: "application/json"
    }
  };
  try {
    const response = yield axios.get(url, config);
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
