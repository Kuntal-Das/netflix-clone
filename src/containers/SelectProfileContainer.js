import React from "react";
import { NewHeader, Header, Profiles } from "../components";
import * as ROUTES from "../constants/routes";

export const SelectProfileContainer = ({ user, setProfile }) => (
  <>
    <NewHeader>
      <NewHeader.Container>
        <NewHeader.Logo
          to={ROUTES.HOME}
          src="/images/misc/logo.svg"
          alt="Netflix Logo"
          />
      </NewHeader.Container>
    </NewHeader>
    <Profiles style={{marginTop:"5em", marginBottom:"5em"}}>
      <Profiles.Container>
      <Profiles.Title>Who's watching?</Profiles.Title>
      <Profiles.List>
        <Profiles.User onClick={setProfile}>
          <Profiles.Picture src={user.photoURL} />
          <Profiles.Name>{user.displayName}</Profiles.Name>
        </Profiles.User>
      </Profiles.List>
      </Profiles.Container>
    </Profiles>
  </>
);
