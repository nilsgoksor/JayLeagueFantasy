import * as actionTypes from "./actiontypes";

export const getHistoryData = (state, action) => {
  return { type: actionTypes.GET_HISTORYDATA };
};

export const getHistoryDataInit = (state, action) => {
  return { type: actionTypes.GET_HISTORYDATA_INIT };
};

export const getHistoryDataSuccess = previousWinners => {
  return {
    type: actionTypes.GET_HISTORYDATA_SUCCESS,
    previousWinners: previousWinners
  };
};
export const getHistoryDataFail = (state, action) => {
  return { type: actionTypes.GET_HISTORYDATA_FAIL };
};
