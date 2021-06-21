import React, { useState, useContext, createContext } from "react";
import ReactDOM from "react-dom";
import {
  Button,
  Close,
  Container,
  Inner,
  Overlay
} from "./styles/playerStyles";

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);

  const togglePlayer = () => setShowPlayer(prevVal => !prevVal)

  return (
    <PlayerContext.Provider value={{ showPlayer, togglePlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ ...restProps }) {
  const { showPlayer, togglePlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay onClick={togglePlayer}>
          <Inner>
            <video id="netflix-player" controls>
              <source src="/videos/bunny.mp4" type="video/mp4" />
            </video>
            <Close />
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton({ CustomBtn, ...restProps }) {
  const { togglePlayer } = useContext(PlayerContext);
  if(CustomBtn){
    return <CustomBtn onClick={togglePlayer}>Play</CustomBtn>;
  }
  return <Button onClick={togglePlayer}>Play</Button>;
};
