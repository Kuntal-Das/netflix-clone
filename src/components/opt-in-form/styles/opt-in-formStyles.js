import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 1.25em;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  font-size: 1.5em;
  font-family: inherit;
  padding: 1em 2em;
  box-sizing: border-box;
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 1em 2em;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  font-size: 1.5em;
  border: 0;
  cursor: pointer;

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 1.4em;

    @media (max-width: 1000px) {
      width: 1em;
    }
  }

  &:hover {
    background: #f40612;
  }

  @media (max-width: 1000px) {
    margin-top: 1.125em;
    font-size: 1rem;
    font-weight: bold;
  }
`;
export const Label = styled.label``;
export const Text = styled.p`
  font-size: 1.125rem;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;
