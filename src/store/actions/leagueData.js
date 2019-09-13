import * as actionTypes from "./actiontypes";

export const getLeagueData = leagueId => {
  return { type: actionTypes.GET_LEAGUEDATA, leagueId: leagueId };
};

export const getLeagueDataInit = (state, action) => {
  return { type: actionTypes.GET_LEAGUEDATA_INIT };
};

export const getLeagueDataSuccess = (leagueName, standings, playerInfo) => {
  return {
    type: actionTypes.GET_LEAGUEDATA_SUCCESS,
    leagueName: leagueName,
    standings: standings,
    playerInfo: playerInfo
  };
};
export const getLeagueDataFail = (state, action) => {
  return { type: actionTypes.GET_LEAGUEDATA_FAIL };
};
