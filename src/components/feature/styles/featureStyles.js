import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 10.35em 2.8125em;
`;
export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 3.125rem;
  font-weight: 500;
  margin: 0 auto;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;
export const SubTitle = styled.h3`
  color: white;
  font-size: 1.625rem;
  font-weight: normal;
  margin: 0.75em auto;

  @media (max-width: 600px) {
    font-size: 1.125rem;
  }
`;
