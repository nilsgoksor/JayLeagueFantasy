import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions/index";
import {
  Table,
  TableHead,
  TableRow,
  TableData
} from "../components/styledcomponents/styledcomponents";

const HistoryData = props => {
  const dispatch = useDispatch();

  const { leagueName } = useSelector(state => {
    return state.settingsReducer;
  });
  const { previousWinners } = useSelector(state => {
    return state.historyDataReuducer;
  });

  useEffect(() => {
    dispatch(actions.getHistoryData());
  }, [leagueName, dispatch]);

  const previousWinnersTable = previousWinners.map((winner, index) => {
    return (
      <TableRow key={index}>
        <TableData key={winner.season + index}>{winner.season}</TableData>
        <TableData key={winner.winner + index}>{winner.winner}</TableData>
      </TableRow>
    );
  });
  return (
    <React.Fragment>
      <Table>
        <TableHead>
          <TableRow>
            <TableData>Season</TableData>
            <TableData>Winner</TableData>
          </TableRow>
        </TableHead>
        <tbody>{previousWinnersTable}</tbody>
      </Table>
    </React.Fragment>
  );
};

export default HistoryData;
