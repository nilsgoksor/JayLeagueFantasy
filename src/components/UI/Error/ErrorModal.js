import React from "react";
import styled from "styled-components";

const ErrorModal = props => {
  const url = "https://fantasy.premierleague.com/my-team";
  const api_url =
    "https://fantasy.premierleague.com/api/leagues-classic/848627/standings/";
  const errorTitle = "access to the fpl api denied";
  return (
    <React.Fragment>
      <Backdrop />
      <ErrorModalWrapper>
        <h3>{errorTitle}</h3>
        <h5>Make sure you are logged in to fantasy premier league.</h5>
        <h5>
          <a
            rel="noopener noreferrer"
            href={url}
            target="_blank"
            style={{ padding: "10px" }}
          >
            <Button>Login to FPL</Button>
          </a>
          <h5>Then open this link, close it and refresh this page.</h5>
          <a
            rel="noopener noreferrer"
            href={api_url}
            target="_blank"
            style={{ padding: "10px" }}
          >
            <Button>Open link</Button>
          </a>
        </h5>
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
