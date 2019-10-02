import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions/index";
import Spinner from "../components/UI/Spinner/Spinner";
import ErrorModal from "../components/UI/Error/ErrorModal";
import StatsCard from "../components/UI/StatsCard/StatsCard";

const Stats = props => {
  const dispatch = useDispatch();

  const [player, setPlayer] = useState("");

  const { error, loading, playerStats } = useSelector(state => {
    return state.playerDataReducer;
  });
  let { leagueDataError } = useSelector(state => {
    return state.leagueDataReducer.error;
  });
  const playerInfo = useSelector(state => {
    return state.leagueDataReducer.playerInfo;
  });

  const onGetPlayerData = useCallback(
    playerIds => {
      dispatch(actions.getPlayerData(playerIds));
    },
    [dispatch]
  );

  const randomPlayer = useCallback(() => {
    const randomIndex = Math.floor(
      Math.random() * Math.floor(playerStats.length)
    );
    setPlayer(randomIndex);
  }, [playerStats]);

  useEffect(() => {
    if (player === "" && playerStats) {
      randomPlayer();
    }
  }, [randomPlayer, player, playerStats]);

  useEffect(() => {
    let playerIds = [];
    if (playerInfo) {
      playerInfo.map(pInfo => {
        return playerIds.push(pInfo.id);
      });
    }

    onGetPlayerData(playerIds);
  }, [onGetPlayerData, playerInfo]);

  if (
    playerStats[player] &&
    !loading &&
    !error &&
    !leagueDataError &&
    playerInfo
  ) {
    const p = playerInfo.find(p => p.id === playerStats[player].player);

    return (
      <StatsCard
        title={playerStats[player].title}
        player={p ? p.name : "unknown player"}
        stat={playerStats[player].stat}
        imgSrc={playerStats[player].imgSrc}
        onChangeHandler={() => randomPlayer()}
      ></StatsCard>
    );
  } else {
    return loading ? <Spinner /> : <ErrorModal />;
  }
};

export default Stats;
