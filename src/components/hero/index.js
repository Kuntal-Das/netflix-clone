import React from "react";
import { Container, PlayButton, StyledHero, Text, Title } from "./styles/heroStyles";

export default function Hero ({children, ...restProps}) {
    return <StyledHero { ...restProps }>
        { children }
        </StyledHero>
}

Hero.Container = ({children, ...restProps}) => (
    <Container {...restProps}>{children}</Container>
)

Hero.Title = ({children, ...restProps}) => (
    <Title {...restProps}>{children}</Title>
)

Hero.Text = ({children, ...restProps}) => (
    <Text {...restProps}>{children}</Text>
)

Hero.PlayButton = ({children, ...restProps}) => (
    <PlayButton {...restProps}>{children}</PlayButton>
)