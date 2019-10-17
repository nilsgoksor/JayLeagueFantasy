import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import LeagueSelector from "./containers/LeagueSelector";
import League from "./containers/League";

const App = () => {
  const { leagueId, leagueName } = useSelector(state => {
    return state.settingsReducer;
  });
  const [routes, setRoutes] = useState();
  const [theme, setTheme] = useState();

  useEffect(() => {
    if (leagueId && leagueId.length !== 0) {
      setRoutes(
        <Switch>
          <Route path="/" exact component={LeagueSelector}></Route>
          <Route path="/League" component={League}></Route>
        </Switch>
      );
    } else {
      setRoutes(
        <Switch>
          <Route path="/" exact component={LeagueSelector}></Route>
        </Switch>
      );
    }
    setTheme(getLeagueTheme(leagueName));
  }, [leagueId, leagueName]);

  return (
    <React.Fragment>
      <ThemeProvider theme={{ theme }}>
        <Router>{routes}</Router>
      </ThemeProvider>
    </React.Fragment>
  );
};
export default App;

const getLeagueTheme = leagueName => {
  let theme;
  switch (leagueName) {
    case "jayleague":
      theme = {
        color: {
          background: "#f9cdda",
          primary: "#000000",
          secondary: "#ffffff",
          highlight: "#fbec49"
        }
      };
      break;
    case "brebrebre":
      theme = {
        color: {
          background: "#BB2852",
          primary: "#000000",
          secondary: "#ffffff",
          highlight: "#fbec49"
        }
      };
      break;
    case "öl på glorias till vinnaren":
      theme = {
        color: {
          background: "#366B1D",
          primary: "#000000",
          secondary: "#ffffff",
          highlight: "#fbec49"
        }
      };
      break;
    default:
      theme = {
        color: {
          primary: "#000000",
          background: "#ffffff",
          secondary: "#ffffff",
          highlight: "#fbec49"
        }
      };
      break;
  }
  return theme;
};
