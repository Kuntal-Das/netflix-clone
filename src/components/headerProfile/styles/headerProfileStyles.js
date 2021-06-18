import styled from "styled-components";

export const Picture = styled.img`
  object-fit: cover;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const Link = styled.p`
  font-size: 0.875rem;
  margin: 0;
  /* padding: 0.5em; */

  &:hover{
    text-decoration: underline;
  }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    
    button {
      cursor: pointer;
    }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;

  & ${Link}{
    font-weight:700;
  }
`;

export const DropDown = styled.div`
  top: 32px;
  right: 0;
  position: absolute;
  text-align: right;
  background-color: black;
  /* border:1px solid gray; */
  opacity: ${({ isVisible }) => isVisible ? 1 : 0};
  pointer-events: ${({ isVisible }) => isVisible ? "initial" : "none"};
  transition: opacity 200ms ease-in-out;
  display: grid;
  grid-auto-rows: 2em;
  align-items: center;
`;