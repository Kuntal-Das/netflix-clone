import Fuse from "fuse.js";
import React, { useContext, useEffect, useState } from "react";
import { Card, NewHeader, HeaderProfile, Hero, Loading, Player } from "../components";
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

  const user = firebase.auth().currentUser;

  const selectProfile = (name, photoURL) => {
    setProfile({
      displayName: name,
      photoURL: photoURL
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ["data.description", "data.title", "data.genre"]
    });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);

  return (
    <>
      {profile.displayName ? (
        <>
          {isLoading ? (
            <Loading src={user.photoURL} />
          ) : (
            <Loading.ReleaseBody />
          )}
          <NewHeader>
            <NewHeader.Container>
              <NewHeader.Group>
                <NewHeader.Logo
                  to={HOME}
                  src="/images/misc/logo.svg"
                  alt="Netflix"
                />
                <NewHeader.Group>
                  <NewHeader.Link
                    active={category === "series"}
                    onClick={() => setCategory("series")}
                  >
                    Series
                  </NewHeader.Link>
                  <NewHeader.Link
                    active={category === "films"}
                    onClick={() => setCategory("films")}
                  >
                    Films
                  </NewHeader.Link>
                </NewHeader.Group>  
              </NewHeader.Group>
              <NewHeader.Group>
                <NewHeader.Search
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  slides={slides}
                />
                <HeaderProfile>
                  <HeaderProfile.Picture src={profile.photoURL} />
                  <HeaderProfile.Dropdown>
                    <HeaderProfile.Group>
                      <HeaderProfile.Picture src={profile.photoURL} />
                      <HeaderProfile.Link>{profile.displayName}</HeaderProfile.Link>
                    </HeaderProfile.Group>
                    <HeaderProfile.Link onClick={() => firebase.auth().signOut()}>
                      Sign out
                    </HeaderProfile.Link>
                  </HeaderProfile.Dropdown>
                </HeaderProfile>
              </NewHeader.Group>
            </NewHeader.Container>
          </NewHeader>

          <Hero src="/images/misc/joker1.jpg">
            <Hero.Container>
              <Hero.Title>Watch Joker Now</Hero.Title>
              <Hero.Text>
                Forever alone in a crowd, failed comedian Arthur Fleck seeks
                connection as he walks the streets of Gotham City. Arthur wears
                two masks -- the one he paints for his day job as a clown, and
                the guise he projects in a futile attempt to feel like he's part
                of the world around him.
              </Hero.Text>
              <Hero.PlayButton>Play</Hero.PlayButton>
            </Hero.Container>
          </Hero>

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
                <Card.Feature category={category}>
                  <Player>
                    <Player.Button />
                    <Player.Video />
                  </Player>
                </Card.Feature>
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
