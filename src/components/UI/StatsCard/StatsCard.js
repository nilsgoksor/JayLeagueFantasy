import React from "react";
import styled from "styled-components";

const StatsCard = props => {
  return (
    <Card>
      <CardImg src={props.imgSrc}></CardImg>
      <CardContent>
        <h4>{props.title}</h4>
        <p>
          {props.player} - {props.stat}
        </p>
      </CardContent>
      <CardButton onClick={props.onChangeHandler}>new stat</CardButton>
    </Card>
  );
};

export default StatsCard;

const Card = styled.div`
  width: 500px;
  height: 450px;
  text-align: center;
  border-radius: 5px;

  background: #4b8cca;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  transition: 0.3s;

  &:hover {
    background: #4b8cca;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    width: 325px;
    height: 350px;
  }
`;
const CardImg = styled.img`
  width: 100%;
  border-radius: 5px 5px 0px 0px;
  opacity: 0.8;
`;
const CardContent = styled.div`
  padding: 5px;
`;
const CardButton = styled.button`
  background: #f9cdda;
  height: 40px;
  width: 100px;
  border-radius: 5px;

  &:hover {
    background: #efa948;
    color: #ffffff;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;
