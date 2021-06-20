import styled from "styled-components";

export const Title = styled.p`
  font-size: 1.5rem;
  color: #e5e5e5;
  font-weight: bold;
  margin-left: 2.33em;
  margin-right: 2.33em;
  margin-top: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3.125em;
  padding: 0;
  box-sizing: border-box;

  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 1.875em;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection === "row" ? "row" : "column"};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};
  margin-top: -9.375em;
`;

export const SubTitle = styled.p`
  font-size: 0.75rem;
  color: white;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  display: none;
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

export const Entities = styled.div`
  max-width: var(--container-max-width);
  margin:0 auto;
  padding: 1em;
  display: flex;
  flex-direction: row;
`;

export const Meta = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  padding: 0.625em;
  background-color: #0000008f;
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

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 0.3125em;
  position: relative;
  cursor: pointer;
  transition: transform 200ms linear;

  &:hover {
    transform: scale(1.3);
    z-index: 99;
  }

  @media (min-width: 1000px) {
    &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
      display: block;
      z-index: 100;
    }
  }

  &:first-of-type {
    margin-left: 3.5em;

    @media (max-width: 1000px) {
      margin-left: 1.875em;
    }
  }

  &:last-of-type {
    margin-right: 3.5em;

    @media (max-width: 1000px) {
      margin-right: 1.875em;
    }
  }
`;

export const FeatureText = styled.p`
  font-size: 1.125rem;
  color: white;
  font-weight: ${({ fontWeight }) => (fontWeight === "bold" ? 700 : 500)};
  margin: 0;

  @media (max-width: 800px) {
    line-height: 1.375em;
  }
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: row;
  background: url(${({ src }) => src});
  background-size: contain;
  position: relative;
  height: 360px;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: black;

  @media (max-width: 1000px) {
    height: auto;
    background-size: auto;

    ${Title} {
      font-size: 1.25rem;
      line-height: 1em;
      margin-bottom: 0.5em;
    }
    ${FeatureText} {
      font-size: 0.875rem;
    }
  }
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

export const Content = styled.div`
  margin: 3.5em;
  max-width: 500px;
  line-height: normal;

  @media (max-width: 1000px) {
    margin: 1.875em;
    max-width: none;
  }
`;

export const Maturity = styled.div`
  background-color: ${({ rating }) => (rating >= 15 ? "red" : "green")};
  border-radius: 15px;
  width: 20px;
  padding: 5px;
  text-align: center;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 0.625em;
  font-size: 0.75rem;
`;
