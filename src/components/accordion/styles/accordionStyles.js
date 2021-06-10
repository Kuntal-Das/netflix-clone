import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  border-bottom: 8px soild #222;
`;

export const Inner = styled.div`
  display: flex;
  padding: 4em 2.8em;
  flex-direction: column;
  max-width: 1190px;
  margin: 0 auto;
`;

export const Item = styled.div`
  color: white;
  margin-bottom: 10px;

  :first-of-type {
    margin-top: 3em;
  }
`;

export const Title = styled.h1`
  font-size: 3.125rem;
  line-height: 1.1;
  margin-bottom: 0.5em;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 2.1875rem;
  }
`;

export const Header = styled.h3`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  font-size: 1.675rem;
  background-color: #303030;
  padding: 0.8em 1.2em 0.8em 1.2em;
  user-select: none;

  img {
    filter: brightness(0) invert(1);
    width: 1.5rem;

    @media (max-width: 600px) {
      width: 1rem;
    }
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const Body = styled.div`
  /* display:${({ isVisible }) => (isVisible ? "block" : "none")}; */
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.6;
  background: #303030;
  padding: 0.8em 1.2em 0.8em 1.2em;
  overflow:hidden;
  transition: 
    max-height 250ms cubic-bezier(0.5, 0, 0.1, 1),
    opacity 250ms linear;
  transform-origin: top;
  max-height: ${({ isVisible }) => (isVisible ? "1500px" : "0px")}; 
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};

  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;
