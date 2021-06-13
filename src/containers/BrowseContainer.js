import React, { useContext, useState } from "react";
import { Header } from "../components";
import { HOME } from "../constants/routes";
import { FirebaseContext } from "../context/firebase";
import { FooterContainer } from "./FooterContainer";
import { SelectProfileContainer } from "./SelectProfileContainer";

export const BrowseContainer = () => {
  const { firebase } = useContext(FirebaseContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("series");
  const [profile, setProfile] = useState({});
  const user = {
    displayName: "Robin Malex",
    photoURL: "./images/users/1.png"
    // photoURL: "https://source.unsplash.com/random"
  };

  const selectProfile = (name, photoURL) => {
    setProfile({
      displayName: user.displayName,
      photoURL: user.photoURL
    });
  };
  return (
    <>
      {profile.displayName ? (
        <Header src="./images/misc/joker1.jpg" dontShowOnSmallViewPort>
          <Header.Frame>
            <Header.Group>
              <Header.Logo
                to={HOME}
                src="/images/misc/logo.svg"
                alt="Netflix"
              />
              <Header.Link
                active={category === "series" ? "true" : "false"}
                onClick={() => setCategory("series")}
              >
                Series
              </Header.Link>
              <Header.Link
                active={category === "films" ? "true" : "false"}
                onClick={() => setCategory("films")}
              >
                Films
              </Header.Link>
            </Header.Group>
            <Header.Group>
              <Header.Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
              <Header.Profile>
                <Header.Picture src={user.photoURL} />
                <Header.Dropdown>
                  <Header.Group>
                    <Header.Picture src={user.photoURL} />
                    <Header.Link>{user.displayName}</Header.Link>
                  </Header.Group>
                  <Header.Group>
                    <Header.Link onClick={() => firebase.auth().signOut()}>
                      Sign out
                    </Header.Link>
                  </Header.Group>
                </Header.Dropdown>
              </Header.Profile>
            </Header.Group>
          </Header.Frame>

          <Header.Feature>
            <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
            <Header.Text>
              Forever alone in a crowd, failed comedian Arthur Fleck seeks
              connection as he walks the streets of Gotham City. Arthur wears
              two masks -- the one he paints for his day job as a clown, and the
              guise he projects in a futile attempt to feel like he's part of
              the world around him.
            </Header.Text>
            <Header.PlayButton>Play</Header.PlayButton>
          </Header.Feature>
        </Header>
      ) : (
        <SelectProfileContainer
          user={user}
          setProfile={() => selectProfile(user.displayName, user.photoURL)}
        />
      )}
      <FooterContainer />
    </>
  );
};
