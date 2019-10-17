import { put, select } from "redux-saga/effects";
import * as actions from "../actions/index";
import axios from "axios";

export function* historyDataSaga(action) {
  axios.defaults.headers.get["Content-Type"] =
    "application/x-www-form-urlencoded";

  yield put(actions.getHistoryDataInit());
  let leagueName = yield select(state => {
    return state.settingsReducer.leagueName;
  });
  let previousWinners = [];
  switch (leagueName) {
    case "öl på glorias till vinnaren":
      previousWinners = [
        { season: "2018/2019", winner: "Nils Goksör" },
        { season: "2019/2020", winner: "???" }
      ];
      yield put(actions.getHistoryDataSuccess(previousWinners));
      return;
    case "jayleague":
      previousWinners = [
        { season: "2017/2018", winner: "Ulf Lindgren" },
        { season: "2018/2019", winner: "David Tran" },
        { season: "2019/2020", winner: "???" }
      ];
      yield put(actions.getHistoryDataSuccess(previousWinners));
      return;
    case "brebrebre":
      previousWinners = [
        { season: "2017/2018", winner: "Kristoffer Mårtensson" },
        { season: "2018/2019", winner: "Nils Goksör" },
        { season: "2019/2020", winner: "???" }
      ];
      yield put(actions.getHistoryDataSuccess(previousWinners));
      return;
    case "en gammal klassiker":
      previousWinners = [
        { season: "2018/2019", winner: "Nils Goksör" },
        { season: "2019/2020", winner: "???" }
      ];
      yield put(actions.getHistoryDataSuccess(previousWinners));
      return;
    default:
      yield yield put(actions.getHistoryDataFail("League not supported"));
      return;
  }
}
