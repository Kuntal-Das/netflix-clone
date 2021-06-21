import React from "react";
import {
  Container,
  List,
  Name,
  Title,
  Item,
  Picture,
  StyledProfiles
} from "./styles/profileStyles";

export default function Profiles({ children, ...restProps }) {
  return <StyledProfiles {...restProps}>{children}</StyledProfiles>;
}

Profiles.Container = ({children, ...restProps})=>(
  <Container {...restProps}>{children}</Container>
  )

Profiles.Name = ({ children, ...restProps }) => (
  <Name {...restProps}>{children}</Name>
);

Profiles.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);

Profiles.List = ({ children, ...restProps }) => (
  <List {...restProps}>{children}</List>
);

Profiles.User = ({ children, ...restProps }) => (
  <Item {...restProps}>{children}</Item>
);

Profiles.Picture = ({ src, ...restProps }) => (
  <Picture {...restProps} src={src ? src : `/images/misc/loading.gif`} />
);
