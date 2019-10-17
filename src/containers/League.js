import React from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import LeagueData from "./LeagueData";
import Stats from "./Stats";
import HistoryData from "./HistoryData";
import NavTabs from "../components/UI/NavTabs";
import { Title } from "../components/styledcomponents/styledcomponents";

const App = () => {
  const { tabValue, leagueName, logo, favicon } = useSelector(state => {
    return state.settingsReducer;
  });

  let content = null;
  let tabName = "";
  if (tabValue === 0) {
    content = <LeagueData />;
    tabName = "current table";
  }
  if (tabValue === 1) {
    content = <Stats />;
    tabName = "some league stats";
  }
  if (tabValue === 2) {
    content = <HistoryData />;
    tabName = "previous season winners";
  }
  return (
    <React.Fragment>
      <GlobalStyle></GlobalStyle>
      <Helmet>
        <title>{leagueName}</title>
        <link rel="icon" type="image/png" sizes="16x16" href={favicon}></link>
      </Helmet>
      <NavTabs></NavTabs>
      <React.Fragment>
        <AppLogo src={process.env.PUBLIC_URL + logo} alt="logo" />
        <Title>{tabName}</Title>
      </React.Fragment>
      <Wrapper>{content}</Wrapper>
    </React.Fragment>
  );
};

export default App;

//${p => p.theme.theme.color.background};
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 50;
    padding: 50;
    background: ${p => p.theme.theme.color.background};
    margin: auto;
    text-align: center;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppLogo = styled.img`
  animation: ${rotate360} infinite 60s linear;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
  opacity: 0.6;
  height: 80px;
  width: 80px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  margin-top: 20px;
  &:hover {
    animation: ${rotate360} infinite 1.5s linear;
  }
`;
