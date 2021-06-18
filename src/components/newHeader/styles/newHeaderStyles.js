import styled from "styled-components";

export const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    z-index:100;
`;
export const Container = styled.div`
    max-width:1200px;
    margin:0 auto;
    display: flex;
    justify-content: space-between;
    padding: 0.5em 1em;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;

  /* &:first-child{
      margin: 0 1em 0 0;
  } */
  * + *{
      margin-left: 1em;
  }
`;

export const Logo = styled.img`
  height: 32px;
  width: 108px;
  
  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

export const Link = styled.p`
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  opacity : ${({ active, noStyle }) => (active && !noStyle ? 1 : 0.85)};
  border-bottom : 2px solid ${({ active }) => (active ? "currentColor" : "transparent")};
  padding-bottom: 0.05em;
  cursor: pointer;

  &:hover {
    opacity: 1;
    border-bottom: 2px solid currentColor;
    border: ${({ noStyle }) => noStyle && "none"};
  }
  opacity: ${({noStyle})=> noStyle && 1};
  padding: ${({noStyle})=> noStyle && "none"};
  border:${({ noStyle }) => noStyle && "none"};
`;