import React from "react";
import styled from "styled-components";
import {
  Button,
  Text,
  DescriptionText
} from "../../styledcomponents/styledcomponents";

const StatsCard = props => {
  return (
    <Card>
      <CardImg src={props.imgSrc}></CardImg>
      <CardContent>
        <StyledText>{props.title}</StyledText>
        <DescriptionText>
          {props.player} - {props.stat}
        </DescriptionText>
      </CardContent>
      <Button onClick={props.onChangeHandler}>new stat</Button>
    </Card>
  );
};

export default StatsCard;

const Card = styled.div`
  width: 500px;
  height: 450px;
  text-align: center;
  border-radius: 5px;

  background: ${p => p.theme.theme.color.primary};
  opacity: 0.8;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  transition: 0.3s;

  &:hover {
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

const StyledText = styled(Text)`
  color: ${p => p.theme.theme.color.secondary};
`;
