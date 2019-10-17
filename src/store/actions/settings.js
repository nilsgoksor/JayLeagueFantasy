import * as actionTypes from "./actiontypes";

export const setTabVal = tabValue => {
  return { type: actionTypes.SET_TAB_VAL, value: tabValue };
};

export const setLeagueInfo = (leagueName, leagueId) => {
  return {
    type: actionTypes.SET_LEAGUE_INFO,
    value: { leagueName: leagueName, leagueId: leagueId }
  };
};

export const resetLeagueInfo = () => {
  return { type: actionTypes.RESET_LEAGUE_INFO };
};
