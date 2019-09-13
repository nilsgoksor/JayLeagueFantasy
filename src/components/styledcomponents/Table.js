import styled from "styled-components";

export const Table = styled.table`
  width: 75%;
  max-width: 700px;
  margin: auto;
  text-align: center;
  border-spacing: 0;
  border: 1px solid #000000;
  font-size: 14px;
`;
export const TableHead = styled.thead`
  font-weight: bold;
  font-size: 20px;
`;

export const TableData = styled.td`
  padding: 1px;
  height: 40px;
  border: 0.3px solid #f9cdda;
`;
export const TableRow = styled.tr`
  background-color: #000000;
  color: #ffffff;
  &:hover {
    background-color: #fbec49;
    color: #000000;
  }
`;
