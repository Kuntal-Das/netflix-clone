import styled from "styled-components";

export const Picture = styled.img`
  object-fit: cover;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const Text = styled.p`
  font-size: 0.875rem;
  margin: 0;
`;

export const Linklike = styled(Text)`
  &:hover{
    text-decoration: underline;
  }
`;

export const Profile = styled.div.attrs(props=>({
  tabIndex: 0
}))`
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

  & ${Linklike}{
    font-weight:700;
  }
`;

export const DropDown = styled.div`
  top: 32px;
  right: 0;
  position: absolute;
  text-align: right;
  background-color: black;
  border:1px solid gray;
  padding: 0.25em;
  border-radius: 0 0 5px 5px;
  opacity: ${({ isVisible }) => isVisible ? 1 : 0};
  pointer-events: ${({ isVisible }) => isVisible ? "initial" : "none"};
  transition: opacity 200ms ease-in-out;
  display: grid;
  grid-auto-rows: 2em;
  align-items: center;
`;