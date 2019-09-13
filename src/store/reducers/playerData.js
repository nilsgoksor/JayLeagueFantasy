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

  let mostPointsPastSeason = 0;
  let leastPointsPastSeason = Number.MAX_SAFE_INTEGER;
  let bestPastSeason = {};
  let worstPastSeason = {};

  let mostPOB = 0;
  let leastPOB = Number.MAX_SAFE_INTEGER;
  let mostPointsOnBench = {};
  let leastPointsOnBench = {};

  let mt = 0;
  let lt = Number.MAX_SAFE_INTEGER;
  let mostTransfers = {};
  let leastTransfers = {};

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

    if (parseInt(player.pastSeason.total_points) > mostPointsPastSeason) {
      bestPastSeason = {
        title: "Best past season",
        player: player.id,
        stat: player.pastSeason.total_points + " points",
        imgSrc:
          "https://4.bp.blogspot.com/-1BKX0V67lzM/W_7PdNJsWWI/AAAAAAAADEc/CChu_4np3HYsZ0xcW9kY39ChfVRC1MqZACLcBGAs/s1600/mohamed-salah-liverpool-2018-19_12clx3rbzczgc13sgxgwwlqqek.jpg"
      };
      mostPointsPastSeason = player.pastSeason.total_points;
    }
    if (parseInt(player.pastSeason.total_points) < leastPointsPastSeason) {
      worstPastSeason = {
        title: "Worst past season",
        player: player.id,
        stat: player.pastSeason.total_points + " points",
        imgSrc:
          "http://1.bp.blogspot.com/-N3ieX10np_w/UoFZUHeJDXI/AAAAAAAAC1o/OIGWu70lzXw/s1600/philjonesnightmare.jpg"
      };
      leastPointsPastSeason = player.pastSeason.total_points;
    }

    if (player.pointsOnBench > mostPOB) {
      mostPointsOnBench = {
        title: "Most points on the bench",
        player: player.id,
        stat: player.pointsOnBench + " points",
        imgSrc:
          "https://e0.365dm.com/18/04/1600x900/skysports-pep-guardiola-manchester-city_4276601.jpg"
      };
      mostPOB = player.pointsOnBench;
    }

    if (player.pointsOnBench <= leastPOB) {
      leastPointsOnBench = {
        title: "Least points on the bench",
        player: player.id,
        stat: player.pointsOnBench + " points",
        imgSrc:
          "https://i.eurosport.com/2015/09/30/1701815-36034723-2560-1440.jpg?w=700"
      };
      leastPOB = player.pointsOnBench;
    }

    if (player.totalTransfers <= lt) {
      leastTransfers = {
        title: "Least transfers",
        player: player.id,
        stat: player.totalTransfers + " transfers",
        imgSrc:
          "https://e0.365dm.com/18/09/1600x900/skysports-jurgen-klopp-liverpool_4426129.jpg"
      };
      lt = player.totalTransfers;
    }
    if (player.totalTransfers > mt) {
      leastTransfers = {
        title: "Most transfers",
        player: player.id,
        stat: player.totalTransfers + " transfers",
        imgSrc:
          "https://3.bp.blogspot.com/-AlMgEIgh__A/XJ0C02XmceI/AAAAAAAANsI/CwGw0BXDPNg815vXnj84-la5--y6OF8jwCLcBGAs/s1600/ole-gunnar-solskjaer-manchester-united-2018-19_ybx9u7ieixb51lbcyhghgz199.jpg"
      };
      mt = player.totalTransfers;
    }

    playerData.push(data);
    return data;
  });
  playerStats.push(bestPastSeason);
  playerStats.push(worstPastSeason);
  playerStats.push(mostPointsOnBench);
  playerStats.push(leastPointsOnBench);
  playerStats.push(mostTransfers);
  playerStats.push(leastTransfers);

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
