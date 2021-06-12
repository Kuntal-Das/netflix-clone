import React from "react";
import { Header, Profiles } from "../components";
import * as ROUTES from "../constants/routes";

export const SelectProfileContainer = ({ user }) => (
  <>
    <Header isBgvisible={false}>
      <Header.Frame>
        <Header.Logo
          to={ROUTES.HOME}
          src="/images/misc/logo.svg"
          alt="Netflix Logo"
        />
      </Header.Frame>
    </Header>
    <Profiles>
      <Profiles.Title>Who's watching?</Profiles.Title>
      <Profiles.List>
        <Profiles.User>
          <Profiles.Picture src={user.photoURL} />
          <Profiles.Name>{user.displayName}</Profiles.Name>
        </Profiles.User>
        <Profiles.User>
          <Profiles.Picture src={user.photoURL} />
          <Profiles.Name>{user.displayName}</Profiles.Name>
        </Profiles.User>
        <Profiles.User>
          <Profiles.Picture src={user.photoURL} />
          <Profiles.Name>{user.displayName}</Profiles.Name>
        </Profiles.User>
      </Profiles.List>
    </Profiles>
  </>
);
