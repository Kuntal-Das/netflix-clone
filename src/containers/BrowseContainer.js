import React, { useContext, useEffect, useState } from "react";
import { Card, Header, Loading } from "../components";
import { HOME } from "../constants/routes";
import { FirebaseContext } from "../context/firebase";
import { FooterContainer } from "./FooterContainer";
import { SelectProfileContainer } from "./SelectProfileContainer";

export const BrowseContainer = ({ slides }) => {
  const { firebase } = useContext(FirebaseContext);

  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState({});
  const [category, setCategory] = useState("series");
  const [slideRows, setSlideRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  return (
    <>
      {profile.displayName ? (
        <>
          {isLoading ? (
            <Loading src={user.photoURL} />
          ) : (
            <Loading.ReleaseBody />
          )}
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
                two masks -- the one he paints for his day job as a clown, and
                the guise he projects in a futile attempt to feel like he's part
                of the world around him.
              </Header.Text>
              <Header.PlayButton>Play</Header.PlayButton>
            </Header.Feature>
          </Header>

          <Card.Group>
            {slideRows.map((slideItem) => (
              <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                <Card.Title>{slideItem.title}</Card.Title>
                <Card.Entities>
                  {slideItem.data.map((item) => (
                    <Card.Item key={item.docId} item={item}>
                      <Card.Image
                        src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                      />
                      <Card.Meta>
                        <Card.SubTitle>{item.title}</Card.SubTitle>
                        <Card.Text>{item.description}</Card.Text>
                      </Card.Meta>
                    </Card.Item>
                  ))}
                </Card.Entities>
                <Card.Feature category={category} />
              </Card>
            ))}
          </Card.Group>
        </>
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
