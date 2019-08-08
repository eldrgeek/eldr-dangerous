import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";

const bounceAnimation = keyframes`${bounce}`;

const BouncyDiv = styled.div`
  fontSize: "20px",
  animation: 2s ${bounceAnimation};
`;

export default () => {
  return <BouncyDiv>Bouncer!</BouncyDiv>;
};
