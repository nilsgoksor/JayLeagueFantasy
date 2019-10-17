import * as actionTypes from "../actions/actiontypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  previousWinners: [],
  error: false,
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_HISTORYDATA_INIT:
      return getHistorydataInit(state, action);
    case actionTypes.GET_HISTORYDATA_SUCCESS:
      return getHistorydataSuccess(state, action);
    case actionTypes.GET_HISTORYDATA_FAIL:
      return getHistorydataFail(state, action);
    default:
      return state;
  }
};

const getHistorydataInit = state => {
  return updateObject(state, { loading: true, error: false });
};

const getHistorydataSuccess = (state, action) => {
  return updateObject(state, {
    error: false,
    loading: false,
    previousWinners: action.previousWinners
  });
};

const getHistorydataFail = state => {
  return updateObject(state, { error: true, loading: false });
};

export default reducer;
