import React, { useState, useContext, createContext } from "react";
import {
  Container,
  Content,
  Entities,
  Feature,
  FeatureClose,
  FeatureText,
  FeatureTitle,
  Group,
  Image,
  Item,
  Maturity,
  Meta,
  SubTitle,
  Text,
  Title
} from "./styles/cardStyles";

const FeatureContext = createContext();

export default function Card({ children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState(false);

  const toggleFeature = (item) => {
    if(item !== null){
      setItemFeature(item)
      setShowFeature(true)
    }else{
      setItemFeature(null)
      setShowFeature(false)
    }
  }

  return (
    <FeatureContext.Provider
      value={{ itemFeature, showFeature, toggleFeature }}
    >
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
}

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

Card.Item = function CardItem({ item, children, ...restProps }) {
  const { itemFeature, toggleFeature } = useContext(FeatureContext);

  return (
    <Item
      showOutline={itemFeature && JSON.stringify(itemFeature) === JSON.stringify(item)}
      onClick={() => toggleFeature(item)}
      {...restProps}
    >
      {children}
    </Item>
  );
};

Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Card.Feature = function CardFeature({ children, category, ...restProps }) {
  const { showFeature, itemFeature, toggleFeature } = useContext(
    FeatureContext
  );

  return showFeature ? (
    <Feature
      src={`./images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
      {...restProps}
    >
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose 
          onClick={() => toggleFeature(null)}>
          <img src="./images/icons/close.png" alt="Close" />
        </FeatureClose>

        <Group margin="0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity < 12 ? "PG" : itemFeature.maturity}
          </Maturity>
          <FeatureText fontWeight="bold">
            {`${itemFeature.genre
              .charAt(0)
              .toUpperCase()}${itemFeature.genre.slice(1)}`}
          </FeatureText>
        </Group>
        {children}
      </Content>
    </Feature>
  ) : null;
};
