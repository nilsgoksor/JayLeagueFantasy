import * as actionTypes from "../actions/actiontypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  leagueName: "JayLeague",
  standings: [],
  playerNames: [],
  error: false,
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_LEAGUEDATA_INIT:
      return getLeaguedataInit(state, action);
    case actionTypes.GET_LEAGUEDATA_SUCCESS:
      return getLeaguedataSuccess(state, action);
    case actionTypes.GET_LEAGUEDATA_FAIL:
      return getLeaguedataFail(state, action);
    default:
      return state;
  }
};

const getLeaguedataInit = state => {
  return updateObject(state, { loading: true, error: false });
};

const getLeaguedataSuccess = (state, action) => {
  return updateObject(state, {
    error: false,
    loading: false,
    leagueName: action.leagueName,
    standings: action.standings,
    playerInfo: action.playerInfo
  });
};

const getLeaguedataFail = state => {
  return updateObject(state, { error: true, loading: false });
};

export default reducer;
