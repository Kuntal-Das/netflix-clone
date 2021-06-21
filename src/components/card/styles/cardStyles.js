import styled from "styled-components";

export const Title = styled.h3`
  font-size: 1.5rem;
  color: #e5e5e5;
  font-weight: 700;
  margin-top: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3.125em;
  padding: 0;
  box-sizing: border-box;

  max-width: var(--container-max-width);
  margin:0 auto;
  padding: 1em;

  @media (min-width:900px){
    padding-left: 2em;
    padding-right: 2em;
  }

  /* > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 1.875em;
    }
  } */

  /* &:last-of-type {
    margin-bottom: 0;
  } */
`;

export const Group = styled.div`
  display: flex;
  margin-top: -9.375em;
  flex-direction: ${({ flexDirection }) =>
    flexDirection === "row" ? "row" : "column"};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};
`;

export const SubTitle = styled.p`
  font-size: 1rem;
  color: white;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
`;

export const Text = styled.p`
  margin-top: 0.5em;
  font-size: 0.625rem;
  color: white;
  margin-bottom: 0;
  user-select: none;
  display: none;
  line-height: normal;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  transition: transform 200ms linear;
  outline-offset: 3px;
  z-index: 1;
  
  outline: ${({showOutline}) => showOutline && "2px ridge #efefefaf"};

  &:hover {
    transform: scale(1.15);
    z-index: 2;
  }
`;

export const Entities = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${Item} + ${Item} {
    margin-left: 0.3125em;
  }
`;

export const Meta = styled.div`
  position: absolute;
  bottom: 0;
  left:0;
  right: 0;
  padding: 0.35em;
  text-align: center;
  background-image: linear-gradient(transparent 10%, #0000008f);
`;

export const FeatureTitle = styled(Title)`  
  margin-left: 0;
`;

export const FeatureClose = styled.button`
  color: white;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`;

export const Image = styled.img`
  border: 0;
  width: 100%;
  max-width: 305px;
  cursor: pointer;
  height: auto;
  padding: 0;
  margin: 0;
`;

export const FeatureText = styled.p`
  font-size: 1.125rem;
  max-width: 55ch;
  color: white;
  font-weight: ${({ fontWeight }) => (fontWeight === "bold" ? 700 : 500)};
  margin: 1em 0;

  /* @media (max-width: 800px) {
    line-height: 1.375em;
  } */
`;

export const Maturity = styled.div`
  background-color: ${({ rating }) => (rating >= 15 ? "red" : "green")};
  border-radius: 15px;
  /* width: 20px; */
  padding: 5px 7px;
  text-align: center;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 0.625em;
  font-size: 0.75rem;
`;

export const Content = styled.div`
  /* max-width: 500px; */
  padding: 3.5em 0;
  line-height: 1.6;

  /* display: flex;
  flex-direction: column; */

  /* @media (max-width: 1000px) {
    margin: 1.875em;
    max-width: none;
  } */
`;

export const Feature = styled.div`
  position: relative;
  background-image: url(${({ src }) => src}),
    linear-gradient(90deg, black, transparent);
  background-size: contain;
  background-position:top right;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  
  /* display: flex;
  flex-direction: row; */

  /* @media (max-width: 1000px) {
    height: auto;
    background-size: auto;

    Title {
      font-size: 1.25rem;
      line-height: 1em;
      margin-bottom: 0.5em;
    }
    FeatureText {
      font-size: 0.875rem;
    }
  } */
`;