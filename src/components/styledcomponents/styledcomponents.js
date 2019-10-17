import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${p => p.theme.theme.color.background};
    margin: auto;
    text-align: center;
  }
`;

export const Table = styled.table`
  width: 75%;
  max-width: 700px;
  margin: auto;
  text-align: center;
  border-spacing: 0;
  border: 1px solid ${p => p.theme.theme.color.background};
  font-size: 14px;
`;
export const TableHead = styled.thead`
  font-weight: bold;
  font-size: 20px;
`;

export const TableData = styled.td`
  padding: 1px;
  height: 40px;
  border: 0.9px solid ${p => p.theme.theme.color.background};
`;
export const TableRow = styled.tr`
  background-color: ${p => p.theme.theme.color.primary};
  color: ${p => p.theme.theme.color.secondary};
  &:hover {
    color: ${p => p.theme.theme.color.primary};
    background-color: ${p => p.theme.theme.color.highlight};
  }
`;

export const Title = styled.h1`
  color: ${p => p.theme.theme.color.primary};
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

export const Text = styled.h3`
  color: ${p => (p ? p.theme.theme.color.primary : "#000000")};
`;

export const DescriptionText = styled.h5`
  color: ${p => (p ? p.theme.theme.color.secondary : "#000000")};
`;

export const Button = styled.button`
  background: ${p => p.theme.theme.color.secondary};
  color: ${p => p.theme.theme.color.primary};
  height: 40px;
  width: 100px;
  border-radius: 5px;

  &:hover {
    background: ${p => p.theme.theme.color.highlight};
    color: ${p => p.theme.theme.color.primary};
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;
