import { put } from "redux-saga/effects";
import * as actions from "../actions/index";
import axios from "../../axios-fantasy";

export function* playerDataSaga(action) {
  yield put(actions.getPlayerDataInit());

  let playerData = [];
  for (const playerId of action.playerIds) {
    const url = "/api/entry/" + playerId + "/history/";
    try {
      const response = yield axios.get(url);

      const pastSeasons = response.data.past;
      let pastSeason = pastSeasons[pastSeasons.length - 1];
      if (!pastSeason) {
        pastSeason = { season_name: "N/A", total_points: "N/A", rank: "N/A" };
      }

      const thisSeason = response.data.current;
      let pointsOnBench = 0;
      let totalTransfers = 0;
      thisSeason.map(gameweek => {
        totalTransfers += gameweek.event_transfers;
        pointsOnBench += gameweek.points_on_bench;
        return true;
      });

      playerData.push({
        id: playerId,
        pastSeason: pastSeason,
        pointsOnBench: pointsOnBench,
        totalTransfers: totalTransfers
      });
    } catch (error) {
      yield put(actions.getPlayerDataFail(error));
    }
  }
  yield put(actions.getPlayerDataSuccess(playerData));
}
