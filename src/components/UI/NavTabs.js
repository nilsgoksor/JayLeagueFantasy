import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/index";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { AppBar, Tabs, Tab } from "@material-ui/core/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Title } from "../styledcomponents/styledcomponents";

const NavTabs = props => {
  const dispatch = useDispatch();
  const { tabValue, leagueName } = useSelector(state => {
    return state.settingsReducer;
  });

  const handleChange = (event, newValue) => {
    dispatch(actions.setTabVal(newValue));
  };
  const goBackHandler = () => {
    props.history.goBack();
    dispatch(actions.resetLeagueInfo());
  };

  return (
    <React.Fragment>
      <NavBar>
        <IconWrapper onClick={() => goBackHandler()}>
          <BackIcon icon={faArrowAltCircleLeft} />
        </IconWrapper>
        <Title>{leagueName ? leagueName : "league stats"}</Title>
        <StyledTabs
          variant="fullWidth"
          value={tabValue}
          onChange={handleChange}
          indicatorColor="ignore"
        >
          <StyledTab
            label="Current table"
            style={
              tabValue === 0 ? { background: "black", color: "white" } : null
            }
          />
          <StyledTab
            label="Stats"
            style={
              tabValue === 1 ? { background: "black", color: "white" } : null
            }
          />
          <StyledTab
            label="Previous seasons"
            style={
              tabValue === 2 ? { background: "black", color: "white" } : null
            }
          />
        </StyledTabs>
      </NavBar>
    </React.Fragment>
  );
};
export default withRouter(NavTabs);

const NavBar = styled(AppBar)`
  && {
    background: ${p => p.theme.theme.color.background};
    position: static;
  }
`;

const IconWrapper = styled.div`
  float: left;
  margin-left: 15px;
  margin-top: 15px;
  position: absolute;
`;

const BackIcon = styled(FontAwesomeIcon)`
  color: ${p => p.theme.theme.color.primary};
  font-size: 30px;
`;

const StyledTab = styled(Tab)`
  && {
    color: ${p => p.theme.theme.color.primary};
    &:hover {
      color: ${p => p.theme.theme.color.secondary};
      background: ${p => p.theme.theme.color.primary};

      opacity: 1;
    }
  }
`;

const StyledTabs = styled(Tabs)`
  && {
    color: ${p => p.theme.theme.color.primary};
  }
`;
