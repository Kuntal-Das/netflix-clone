import Fuse from "fuse.js";
import React from "react";
import { Card, NewHeader, HeaderProfile, Hero, Loading, Player } from "../components";
import { HOME } from "../constants/routes";
import { FirebaseContext } from "../context/firebase";
import { FooterContainer } from "./FooterContainer";
import { SelectProfileContainer } from "./SelectProfileContainer";

export class BrowseContainer extends React.Component {
  state = {
      isLoading:true,
      profile:{},
      category:"series",
      slideRows:[],
      searchTerm:""
    }

  selectProfile = (name, photoURL) => {
    this.setState({profile:{
      displayName: name,
      photoURL: photoURL
    }})
    setTimeout(() => {
      this.setState({isLoading:false});
    }, 1000);
  };

  setCategory = (newCategory="series") => {
    this.setState({category : newCategory});
  }

  setSearchTerm = (newSrcTerm="") => {
    this.setState({searchTerm : newSrcTerm});
  }

  componentDidMount = () => {
    this.setState({slideRows : this.props.slides[this.state.category]})
  }

  componentDidUpdate = (prevProps, prevState, snapshot) =>{
    if(this.state.category !== prevState.category){
      this.setState({slideRows: this.props.slides[this.state.category]})
    }
    if(this.state.searchTerm !== prevState.searchTerm){
      const fuse = new Fuse(this.state.slideRows, {
        keys: ["data.description", "data.title", "data.genre"]
      });
      const results = fuse.search(this.state.searchTerm).map(({ item }) => item);
      
      if (this.state.slideRows.length > 0 && this.state.searchTerm.length > 3 && results.length > 0) {
        this.setState({slideRows : results})
      } else {
        this.setState({slideRows : results})
        this.setState({slideRows: this.props.slides[this.state.category]})
      }
    }
  }

  render = () => (
    <>
      {this.state.profile.displayName ? (
        <>
          {this.state.isLoading ? (
            <Loading src={this.props.user.photoURL} />
          ) : (
            <Loading.ReleaseBody />
          )}
          <NewHeader>
            <NewHeader.Container>
              <NewHeader.Group>
                <NewHeader.Logo
                  to={HOME}
                  src="./images/misc/logo.svg"
                  alt="Netflix"
                />
                <NewHeader.Group>
                  <NewHeader.Linklike
                    active={this.state.category === "series"?"true":"false"}
                    onClick={() => this.setCategory("series")}
                  >
                    Series
                  </NewHeader.Linklike>
                  <NewHeader.Linklike
                    active={this.state.category === "films"?"true":"false"}
                    onClick={() => this.setCategory("films")}
                  >
                    Films
                  </NewHeader.Linklike>
                </NewHeader.Group>  
              </NewHeader.Group>
              <NewHeader.Group>
                <NewHeader.Search
                  searchTerm={this.state.searchTerm}
                  setSearchTerm={this.setSearchTerm}
                  slides={this.state.slides}
                />
                <HeaderProfile>
                  <HeaderProfile.Picture src={this.state.profile.photoURL} />
                  <HeaderProfile.Dropdown>
                    <HeaderProfile.Group>
                      <HeaderProfile.Picture src={this.state.profile.photoURL} />
                      <HeaderProfile.Text>{this.state.profile.displayName}</HeaderProfile.Text>
                    </HeaderProfile.Group>
                    <FirebaseContext.Consumer>
                      {({firebase})=>(
                        <HeaderProfile.Linklike onClick={() => firebase.auth().signOut()}>
                          Sign out
                        </HeaderProfile.Linklike>
                      )}
                    </FirebaseContext.Consumer>
                  </HeaderProfile.Dropdown>
                </HeaderProfile>
              </NewHeader.Group>
            </NewHeader.Container>
          </NewHeader>

          <Hero src="./images/misc/joker1.jpg">
            <Hero.Container>
              <Hero.Title>Watch Joker Now</Hero.Title>
              <Hero.Text>
                Forever alone in a crowd, failed comedian Arthur Fleck seeks
                connection as he walks the streets of Gotham City. Arthur wears
                two masks -- the one he paints for his day job as a clown, and
                the guise he projects in a futile attempt to feel like he's part
                of the world around him.
              </Hero.Text>
              <Player>
                <Player.Button CustomBtn={Hero.PlayButton}/>
                <Player.Video />
              </Player>
            </Hero.Container>
          </Hero>

          <Card.Group>
            {this.state.slideRows.map((slideItem) => (
              <Card key={`${this.state.category}-${slideItem.title.toLowerCase()}`}>
                <Card.Title>{slideItem.title}</Card.Title>
                <Card.Entities>
                  {slideItem.data.map((item) => (
                    <Card.Item key={item.docId} item={item}>
                      <Card.Image
                        src={`./images/${this.state.category}/${item.genre}/${item.slug}/small.jpg`}
                        alt={item.title}
                      />
                      <Card.Meta>
                        <Card.SubTitle>{item.title}</Card.SubTitle>
                      </Card.Meta>
                    </Card.Item>
                  ))}
                </Card.Entities>
                <Card.Feature category={this.state.category}>
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
          user={this.props.user}
          setProfile={() => this.selectProfile(this.props.user.displayName, this.props.user.photoURL)}
        />
      )}
      <FooterContainer />
    </>
  );
}