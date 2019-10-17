import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions/index";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Title, Text } from "../components/styledcomponents/styledcomponents";

const LeagueSelector = ({ history }) => {
  const dispatch = useDispatch();

  const selectLeagueHandler = leagueId => {
    let leagueName;
    if (leagueId === 848627) {
      leagueName = "jayleague";
    } else if (leagueId === 347375) {
      leagueName = "öl på glorias till vinnaren";
    } else if (leagueId === 347374) {
      leagueName = "brebrebre";
    } else if (leagueId === 412171) {
      leagueName = "en gammal klassiker";
    } else {
      return;
    }
    dispatch(actions.setLeagueInfo(leagueName, leagueId));
    openAndCloseApi(leagueId);
    history.push("/League/" + leagueName);
  };

  const openAndCloseApi = leagueId => {
    const api_url = `https://fantasy.premierleague.com/api/leagues-classic/${leagueId}/standings/`;
    const w = window.open(api_url);
    setTimeout(() => {
      w.close();
      dispatch(actions.getLeagueData(leagueId));
    }, 20);
  };

  const getLeagueCards = () => {
    return (
      <LeagueCardsWrapper>
        <League>
          <LeagueCard onClick={() => selectLeagueHandler(848627)}>
            <LeagueCardImg
              src={process.env.PUBLIC_URL + "/jayleague-logo.jpg"}
            ></LeagueCardImg>
          </LeagueCard>
          <LeagueTextWrapper>
            <Text>jayleague</Text>
          </LeagueTextWrapper>
        </League>
        <League>
          <LeagueCard onClick={() => selectLeagueHandler(347375)}>
            <LeagueCardImg
              src={process.env.PUBLIC_URL + "/glorias-logo.png"}
            ></LeagueCardImg>
          </LeagueCard>
          <LeagueTextWrapper>
            <Text>en öl på glorias till vinnaren</Text>
          </LeagueTextWrapper>
        </League>
        <League>
          <LeagueCard onClick={() => selectLeagueHandler(347374)}>
            <LeagueCardImg
              src={process.env.PUBLIC_URL + "/brebrebre-logo.png"}
            ></LeagueCardImg>
          </LeagueCard>
          <LeagueTextWrapper>
            <Text>bre bre bre</Text>
          </LeagueTextWrapper>
        </League>
        <League>
          <LeagueCard onClick={() => selectLeagueHandler(412171)}>
            <LeagueCardImg
              src={process.env.PUBLIC_URL + "/brebrebre-logo.png"}
            ></LeagueCardImg>
          </LeagueCard>
          <LeagueTextWrapper>
            <Text>en gammal klassiker</Text>
          </LeagueTextWrapper>
        </League>
      </LeagueCardsWrapper>
    );
  };
  return (
    <Wrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fantasy League Stats</title>
        <link rel="icon" type="image/png" sizes="16x16" href={""}></link>
      </Helmet>
      <Title>select your league</Title>
      {getLeagueCards()}
    </Wrapper>
  );
};
export default LeagueSelector;

const LeagueCardsWrapper = styled.div`
  width: 500px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 768px) {
    width: 250px;
  }
`;

const League = styled.div`
  margin: 30px;
`;

const LeagueCard = styled.div`
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
  border-radius: 5px 5px 5px 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
  }
`;

const LeagueCardImg = styled.img`
  width: 100%;
  border-radius: 5px 5px 5px 5px;
  opacity: 0.8;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LeagueTextWrapper = styled.div`
  width: 150px;
  word-wrap: break-word;
  text-align: center;
`;
