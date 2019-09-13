import * as actionTypes from "../actions/actiontypes";
import { updateObject } from "../../shared/utility";

const initialState = { leagueId: "848627", tabValue: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TAB_VAL:
      return setTabVal(state, action);
    default:
      return state;
  }
};
const setTabVal = (state, action) => {
  return updateObject(state, { tabValue: action.value });
};

export default reducer;
