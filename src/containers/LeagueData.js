import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions/index";
import TrendingDown from "@material-ui/icons/TrendingDown";
import TrendingUp from "@material-ui/icons/TrendingUp";
import TrendingStale from "@material-ui/icons/Remove";

import {
  Table,
  TableHead,
  TableRow,
  TableData
} from "../components/styledcomponents/styledcomponents";

import Spinner from "../components/UI/Spinner/Spinner";
import ErrorModal from "../components/UI/Error/ErrorModal";

const LeagueData = props => {
  const dispatch = useDispatch();

  const { standings, loading, error } = useSelector(state => {
    return state.leagueDataReducer;
  });

  const { leagueId } = useSelector(state => {
    return state.settingsReducer;
  });

  useEffect(() => {
    dispatch(actions.getLeagueData(leagueId));
  }, [leagueId, dispatch]);

  let content = error ? <ErrorModal /> : <Spinner />;

  if (!loading && !error) {
    const leagueTable = standings.map(player => {
      return (
        <TableRow key={player.id}>
          <TableData>{player.rank}</TableData>
          <TableData>{player.player_name}</TableData>
          <TableData>{player.entry_name}</TableData>
          <TableData>{player.event_total}</TableData>
          <TableData>
            {player.rank - player.last_rank === 0 ? (
              <TrendingStale></TrendingStale>
            ) : player.rank - player.last_rank < 0 ? (
              <TrendingUp style={{ color: "green" }}></TrendingUp>
            ) : (
              <TrendingDown style={{ color: "red" }}></TrendingDown>
            )}
          </TableData>
          <TableData>{player.total}</TableData>
        </TableRow>
      );
    });

    content = (
      <React.Fragment>
        <React.Fragment>
          <Table>
            <TableHead>
              <TableRow>
                <TableData>Rank</TableData>
                <TableData>Name</TableData>
                <TableData>Team</TableData>
                <TableData>GW points</TableData>
                <TableData>Form</TableData>
                <TableData>Total points</TableData>
              </TableRow>
            </TableHead>
            <tbody>{leagueTable}</tbody>
          </Table>
        </React.Fragment>
      </React.Fragment>
    );
  }
  return content;
};

export default LeagueData;
