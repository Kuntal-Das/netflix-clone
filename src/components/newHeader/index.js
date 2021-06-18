import React from "react";
import { Container, Group, Logo, StyledHeader, Link } from "./styles/newHeaderStyles";

export default function NewHeader({ children, restProps }) {

    return (
        <StyledHeader>
            <Container {...restProps}>{children}</Container>
        </StyledHeader>
    )
}

NewHeader.Group = ({ children, ...restProps }) => (
    <Group {...restProps}>{children}</Group>
)

NewHeader.Logo = ({ to, ...restProps }) => (
    <Link to={to} noStyle={true} >
        <Logo {...restProps} />
    </Link>
);

NewHeader.Link = ({ children, ...restProps }) => (
    <Link {...restProps}>{children}</Link>
);