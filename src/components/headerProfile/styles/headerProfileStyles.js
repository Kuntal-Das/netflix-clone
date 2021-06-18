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

  /* &:first-child{
      margin: 0 1em 0 0;
  } */
  * + *{
      margin-left: 0.5em;
  }

  & ${Link}{
    font-weight:700;
  }
`;

export const DropDown = styled.div`
  top: 32px;
  right: 0;
  position: absolute;
  background-color: black;
  border:1px solid gray;
  padding: 0 0.5em;
  opacity: ${({ isVisible }) => isVisible ? 1 : 0};
  pointer-events: ${({ isVisible }) => isVisible ? "initial" : "none"};
  transition: opacity 250ms ease-in-out;
`;