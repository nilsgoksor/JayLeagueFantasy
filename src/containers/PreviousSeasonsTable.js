import React from "react";

import {
  Table,
  TableHead,
  TableRow,
  TableData
} from "../components/styledcomponents/Table";

const previousWinners = [
  { season: "2018/2019", name: "David Tran" },
  { season: "2019/2020", name: "???" }
];

const PreviousSeasonsTable = props => {
  const previousWinnersTable = previousWinners.map((winner, index) => {
    return (
      <TableRow key={index}>
        <TableData key={winner.season + index}>{winner.season}</TableData>
        <TableData key={winner.name + index}>{winner.name}</TableData>
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

export default PreviousSeasonsTable;
