import * as actionTypes from "./actiontypes";

export const setTabVal = tabValue => {
  return { type: actionTypes.SET_TAB_VAL, value: tabValue };
};
