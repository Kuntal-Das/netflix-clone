import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 1192px;
  flex-direction: column;
  padding: 4.25em 3.5em;
  margin: 0 auto;

  @media (max-width: 1000px) {
    padding-top: 1.875rem;
    padding-bottom: 1.875rem;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 1em 1.5em;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Link = styled.a`
  color: white;
  margin-bottom: 1.55em;
  font-size: 0.8125rem;
  text-decoration: none;
  opacity: 0.5;

  :hover,
  :focus {
    opacity: 1;
  }
`;

export const Title = styled.p`
  color: #757575;
  font-size: 1rem;
  margin-bottom: 3em;
`;

export const Text = styled.p`
  color: #757575;
  font-size: 0.8125rem;
  margin-bottom: 2.5rem;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 1px;
  background-color: white;
`;
