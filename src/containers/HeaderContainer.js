import React from "react";
import { NewHeader } from "../components";
import * as ROUTES from "../constants/routes";

export const HeaderContainer = ({ children, ...restProps }) => (
  <NewHeader {...restProps}>
    <NewHeader.Container>
      <NewHeader.Logo
        to={ROUTES.HOME}
        src="./images/misc/logo.svg"
        alt="Netflix Logo"
      />
      <NewHeader.ButtonLink to={ROUTES.SIGN_IN}>sign in</NewHeader.ButtonLink>
    </NewHeader.Container>
    {children}
  </NewHeader>
);
