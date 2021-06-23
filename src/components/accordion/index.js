import React, { createContext, useContext, useState } from "react";
import {
  Body,
  Container,
  Header,
  Inner,
  Item,
  Title
} from "./styles/accordionStyles";

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [isShown, setIsShown] = useState(false);

  const toggleIsShown = () => setIsShown((prevToggleShow) => !prevToggleShow);

  return (
    <ToggleContext.Provider value={{ isShown, toggleIsShown }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { isShown, toggleIsShown } = useContext(ToggleContext);
  return (
    <Header onClick={toggleIsShown} {...restProps}>
      {children}
      {isShown ? (
        <img src="./images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="./images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { isShown } = useContext(ToggleContext);
  return (
    <Body isVisible={isShown} {...restProps}>
      {children}
    </Body>
  );
};
