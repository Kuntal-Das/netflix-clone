import styled from "styled-components";

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction};

  padding: 50px 1em;
  max-width: var(--container-max-width);
  margin: 0 auto;
  width: 100%;

  @media (min-width:900px) {
    padding-left: 2em;
    padding-right: 2em;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Pane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 2.8125em;
    text-align: center;
  }
`;

export const Item = styled.div`
  display: flex;
  color: whitesmoke;
  overflow: hidden;
  border-bottom: 8px solid #222;
`;

export const Container = styled.div`
  background-color: black;

  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 3.125rem;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 2.1875rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.625rem;
  font-weight: 400;
  line-height: 1.6;

  @media (max-width: 600px) {
    font-size: 1.125rem;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
`;
