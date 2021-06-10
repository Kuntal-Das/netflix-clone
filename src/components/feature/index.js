import React from "react";
import { Container, SubTitle, Title } from "./styles/featureStyles";

export default function Feature({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Feature.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);

Feature.SubTitle = ({ children, ...restProps }) => (
  <SubTitle {...restProps}>{children}</SubTitle>
);
