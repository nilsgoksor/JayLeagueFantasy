import * as actionTypes from "../actions/actiontypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  loading: false,
  error: false,
  id: null,
  playerData: [
    {
      id: null,
      pastSeason: { season: "", totalPoints: "", rank: "" },
      pointsOnBench: 0
    }
  ],
  playerStats: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PLAYERDATA_INIT:
      return getPlayerDataInit(state, action);
    case actionTypes.GET_PLAYERDATA_SUCCESS:
      return getPlayerDataSuccess(state, action);
    case actionTypes.GET_PLAYERDATA_FAIL:
      return getPlayerDataFail(state, action);
    default:
      return state;
  }
};

const getPlayerDataInit = state => {
  return updateObject(state, { loading: true, error: false });
};

const getPlayerDataSuccess = (state, action) => {
  let playerData = [];
  let playerStats = [];

  let tp = 0;
  let bestPastSeason = {};
  let mostPOB = 0;
  let leastPOB = Number.MAX_SAFE_INTEGER;
  let mostPointsOnBench = {};
  let leastPointsOnBench = {};
  playerData.map(player => {
    const data = {
      id: player.id,
      pastSeason: {
        season: player.pastSeason.season_name,
        stat: player.pastSeason.total_points,
        rank: player.pastSeason.rank
      },
      pointsOnBench: player.pointsOnBench
    };

    if (parseInt(player.pastSeason.total_points) > tp) {
      bestPastSeason = {
        title: "Best past season",
        player: player.id,
        stat: player.pastSeason.total_points,
        imgSrc:
          "https://4.bp.blogspot.com/-1BKX0V67lzM/W_7PdNJsWWI/AAAAAAAADEc/CChu_4np3HYsZ0xcW9kY39ChfVRC1MqZACLcBGAs/s1600/mohamed-salah-liverpool-2018-19_12clx3rbzczgc13sgxgwwlqqek.jpg"
      };
      tp = player.pastSeason.total_points;
    }

    if (player.pointsOnBench > mostPOB) {
      mostPointsOnBench = {
        title: "Most points on the bench",
        player: player.id,
        stat: player.pointsOnBench,
        imgSrc:
          "https://e0.365dm.com/18/04/1600x900/skysports-pep-guardiola-manchester-city_4276601.jpg"
      };
      mostPOB = player.pointsOnBench;
    }

    if (player.pointsOnBench <= leastPOB) {
      leastPointsOnBench = {
        title: "Least points on the bench",
        player: player.id,
        stat: player.pointsOnBench,
        imgSrc:
          "https://i.eurosport.com/2015/09/30/1701815-36034723-2560-1440.jpg?w=700"
      };
      leastPOB = player.pointsOnBench;
    }
    playerData.push(data);
    return data;
  });
  playerStats.push(bestPastSeason);
  playerStats.push(mostPointsOnBench);
  playerStats.push(leastPointsOnBench);

  return updateObject(state, {
    loading: false,
    error: false,
    playerData: playerData,
    playerStats: playerStats
  });
};

const getPlayerDataFail = state => {
  return updateObject(state, { loading: false, error: true });
};

export default reducer;
