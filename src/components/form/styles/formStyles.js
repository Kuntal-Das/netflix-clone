import styled from "styled-components";
import { Link as ReachRouterLink } from "react-router-dom";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;

  /* min-height: 660px; */
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.75);
  padding: 2em 4.25em 2.5em;
  margin: 3em auto 6em;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.875em;
`;

export const Input = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 3.125em;
  line-height: 1.6;
  padding: 0.3125em 1.25em;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const Label = styled.label``;

export const Submit = styled.button`
  background: #e50914;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 700;
  /* margin: 1em 0 0.75em; */
  padding: 1em;
  border: 0;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;

export const ErrorMsg = styled.span`
  background: #e87c03;
  border-radius: 4px;
  font-size: 0.875rem;
  margin: 0 0 1.15em;
  color: white;
  padding: 1.1em 1.425em;
`;

export const Text = styled.p`
  font-size: ${({ small }) => (small ? "0.8125rem" : "1rem")};
  color: ${({ small }) => (small ? "#8c8c8c" : "#737373")};
  line-height: 1.6;
`;

export const Link = styled(ReachRouterLink)`
  color: #fff;
  text-decoration: none;
  display: inline-block;
  margin-left: 0.5em;

  :focus,
  :hover {
    text-decoration: underline;
  }
`;
