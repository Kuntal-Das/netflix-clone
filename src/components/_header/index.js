import React, { useState } from "react";

import { Link as ReachRouterLink } from "react-router-dom";
import {
  Background,
  ButtonLink,
  Container,
  Group,
  Logo,
  Link,
  Feature,
  FeatureCallOut,
  PlayButton,
  Text,
  Search,
  SearchIcon,
  SearchInput,
  Picture,
  Profile,
  Dropdown
} from "./styles/headerStyles";

export default function Header({ isBgvisible = true, children, ...restProps }) {
  return isBgvisible ? (
    <Background {...restProps}>{children}</Background>
  ) : (
    children
  );
}

Header.Logo = ({ to, ...restProps }) => (
  <ReachRouterLink to={to}>
    <Logo {...restProps} />
  </ReachRouterLink>
);

Header.Frame = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

Header.Group = ({ children, ...restProps }) => (
  <Group {...restProps}>{children}</Group>
);

Header.Text = ({ children, ...restProps }) => (
  <Text {...restProps}>{children}</Text>
);

Header.Link = ({ children, ...restProps }) => (
  <Link {...restProps}>{children}</Link>
);

Header.ButtonLink = ({ children, ...restProps }) => (
  <ButtonLink {...restProps}>{children}</ButtonLink>
);

Header.Feature = ({ children, ...restProps }) => (
  <Feature {...restProps}>{children}</Feature>
);

Header.FeatureCallOut = ({ children, ...restProps }) => (
  <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
);

Header.PlayButton = ({ children, ...restProps }) => (
  <PlayButton {...restProps}>{children}</PlayButton>
);

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  const [searchActive, setSearchActive] = useState(false);
  const toggleSearchBar = () => {
    if (searchTerm) setSearchTerm("");
    setSearchActive(!searchActive)
  }
  return (
    <Search {...restProps}>
      <SearchIcon onClick={toggleSearchBar}>
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search files and series"
        active={searchActive}
      />
    </Search>
  );
};

Header.Picture = ({ src, ...restProps }) => (
  <Picture {...restProps} src={src} />
);
Header.Profile = ({ children, ...restProps }) => (
  <Profile {...restProps}>{children}</Profile>
);
Header.Dropdown = ({ children, ...restProps }) => (
  <Dropdown {...restProps}>{children}</Dropdown>
);
