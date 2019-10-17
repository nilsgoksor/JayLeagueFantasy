import * as actionTypes from "../actions/actiontypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  leagueId: null,
  leagueName: null,
  tabValue: 0,
  logo: null,
  favIcon: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TAB_VAL:
      return setTabVal(state, action);
    case actionTypes.SET_LEAGUE_INFO:
      return setLeagueInfo(state, action);
    case actionTypes.RESET_LEAGUE_INFO:
      return resetLeagueInfo(state, action);
    default:
      return state;
  }
};

const setTabVal = (state, action) => {
  return updateObject(state, { tabValue: action.value });
};

const setLeagueInfo = (state, action) => {
  let logo = "";
  let favicon = "";
  const leagueName = action.value.leagueName;
  const leagueId = action.value.leagueId;
  if (action.value.leagueName === "jayleague") {
    logo = `/jayleague-logo.jpg`;
    favicon = "/jayleague-favicon-16x16.jpg";
  } else if (action.value.leagueName === "öl på glorias till vinnaren") {
    logo = `/glorias-logo.png`;
    favicon = "/glorias-favicon-16x16.png";
  } else if (action.value.leagueName === "brebrebre") {
    logo = `/brebrebre-logo.png`;
    favicon = "/brebrebree-favicon-16x16.png";
  } else {
    logo = `/brebrebre-logo.png`;
    favicon = "/brebrebree-favicon-16x16.png";
  }
  return updateObject(state, {
    leagueName: leagueName,
    leagueId: leagueId,
    logo: logo,
    favicon: favicon
  });
};

const resetLeagueInfo = (state, action) => {
  return updateObject(state, initialState);
};

export default reducer;
