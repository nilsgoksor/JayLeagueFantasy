import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/index";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const NavTabs = props => {
  const dispatch = useDispatch();
  const currentTabValue = useSelector(state => {
    return state.settingsReducer.tabValue;
  });

  const handleChange = (event, newValue) => {
    dispatch(actions.setTabVal(newValue));
  };

  return (
    <React.Fragment>
      <AppBar style={{ background: "#f9cdda" }} position="static">
        <Tabs
          variant="fullWidth"
          value={currentTabValue}
          onChange={handleChange}
        >
          <Tab
            style={{ color: "#000000", font: "FF Bauer Grotesk Pro Regular" }}
            label="Current table"
          />
          <Tab
            style={{ color: "#000000", font: "FF Bauer Grotesk Pro Regular" }}
            label="Stats"
          />
          <Tab
            style={{ color: "#000000", font: "FF Bauer Grotesk Pro Regular" }}
            label="Previous seasons"
          />
        </Tabs>
      </AppBar>
    </React.Fragment>
  );
};
export default NavTabs;
