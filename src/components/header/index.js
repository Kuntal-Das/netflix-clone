import React from "react";

import { Link as ReachRouterLink } from "react-router-dom";
import { Background, ButtonLink, Container, Logo } from "./styles/headerStyles";

export default function Header({ isBgvisible = true, children, ...restProps }) {
  return isBgvisible ? (
    <Background {...restProps}>{children}</Background>
  ) : (
    children
  );
}

Header.Frame = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

Header.ButtonLink = ({ children, ...restProps }) => (
  <ButtonLink {...restProps}>{children}</ButtonLink>
);

Header.Logo = ({ to, ...restProps }) => (
  <ReachRouterLink to={to}>
    <Logo {...restProps} />
  </ReachRouterLink>
);
