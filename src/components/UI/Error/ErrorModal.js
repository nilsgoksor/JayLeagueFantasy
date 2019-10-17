import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../store/actions/index";

import styled from "styled-components";
import { Title, Text } from "../../styledcomponents/styledcomponents";

const ErrorModal = props => {
  const dispatch = useDispatch();
  const { leagueId } = useSelector(state => {
    return state.settingsReducer;
  });
  const fpl_url = "https://fantasy.premierleague.com/my-team";

  const openAndCloseApi = () => {
    const api_url = `https://fantasy.premierleague.com/api/leagues-classic/${leagueId}/standings/`; //TODO
    const w = window.open(api_url);
    setTimeout(() => {
      w.close();
      dispatch(actions.getLeagueData(leagueId));
    }, 100);
  };
  return (
    <React.Fragment>
      <Backdrop />
      <ErrorModalWrapper>
        <Title>you need to login to see this content</Title>
        <Button
          onClick={() => {
            window.open(fpl_url);
          }}
        >
          Login to FPL
        </Button>
        <Link href="#" onClick={openAndCloseApi}>
          <Text>click here once you've logged in</Text>
        </Link>
      </ErrorModalWrapper>
    </React.Fragment>
  );
};
export default ErrorModal;

const ErrorModalWrapper = styled.div`
  z-index: 500;
  background-color: #efa948;
  width: 400px;
  box-shadow: 1px 1px 1px black;
  padding: 16px;
  left: 15%;
  top: 30%;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
`;
const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Button = styled.button`
  background: #000000;
  color: #ffffff;
  height: 40px;
  width: 100px;
  border-radius: 5px;

  &:hover {
    background: #ffffff;
    color: #000000;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;

const Link = styled.a`
  color: #000000;
  text-decoration: none;
`;
