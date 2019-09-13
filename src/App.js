import React from "react";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";

import LeagueData from "./containers/LeagueData";
import Stats from "./containers/Stats";
import PreviousSeasonsTable from "./containers/PreviousSeasonsTable";
import NavTabs from "./components/UI/NavTabs";

const App = () => {
  const currentTabValue = useSelector(state => {
    return state.settingsReducer.tabValue;
  });
  const leagueName = useSelector(state => {
    return state.leagueDataReducer.leagueName;
  });

  let content = null;
  let tabName = "";
  if (currentTabValue === 0) {
    content = <LeagueData />;
    tabName = "current table";
  }
  if (currentTabValue === 1) {
    content = <Stats />;
    tabName = "some league stats";
  }
  if (currentTabValue === 2) {
    content = <PreviousSeasonsTable />;
    tabName = "previous season winners";
  }

  return (
    <React.Fragment>
      <NavTabs></NavTabs>
      <React.Fragment>
        <h1>{leagueName}</h1>
        <AppLogo src={process.env.PUBLIC_URL + "/logo.jpg"} alt="logo" />
        <h1>{tabName}</h1>
      </React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {content}
      </div>
    </React.Fragment>
  );
};

export default App;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }`;
const AppLogo = styled.img`
  animation: ${rotate360} infinite 60s linear;
  height: 80px;
  width: 80px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  &:hover {
    animation: ${rotate360} infinite 1.5s linear;
  }
`;
