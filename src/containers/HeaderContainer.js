import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";

export const HeaderContainer = ({ children, ...restProps }) => (
  <Header {...restProps}>
    <Header.Frame>
      <Header.Logo
        to={ROUTES.HOME}
        src="/images/misc/logo.svg"
        alt="Netflix Logo"
      />
      <Header.ButtonLink to={ROUTES.SIGN_IN}>sign in</Header.ButtonLink>
    </Header.Frame>
    {children}
  </Header>
);
