import React, { useState } from "react";
import { FooterContainer } from "./FooterContainer";
import { SelectProfileContainer } from "./SelectProfileContainer";

export const BrowseContainer = () => {
  const [profile, setProfile] = useState({});
  const user = {
    displayName: "Robin Malex",
    photoURL: "/images/users/1.png"
    // photoURL: "https://source.unsplash.com/random"
  };
  return (
    <>
      {profile.displayName ? (
        <p>Browse Container</p>
      ) : (
        <SelectProfileContainer user={user} />
      )}
      <FooterContainer />
    </>
  );
};
