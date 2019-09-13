import * as actionTypes from "./actiontypes";

export const getPlayerData = playerIds => {
  return { type: actionTypes.GET_PLAYERDATA, playerIds: playerIds };
};

export const getPlayerDataInit = action => {
  return { type: actionTypes.GET_PLAYERDATA_INIT };
};

export const getPlayerDataSuccess = playerData => {
  return {
    type: actionTypes.GET_PLAYERDATA_SUCCESS,
    playerData: playerData
  };
};
export const getPlayerDataFail = action => {
  return { type: actionTypes.GET_PLAYERDATA_FAIL };
};
