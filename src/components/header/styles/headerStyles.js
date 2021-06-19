import styled from "styled-components";

export const StyledHeader = styled.header`
    /* position: sticky; */
    position: fixed;
    width: 100%;
    top: 0;
    z-index:1;
    background-image: linear-gradient(black, rgba(0,0,0,0.5) 60%, transparent);
`;

export const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 1em;
  
  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }

  @media (max-width:400px){
    height:28px;
    margin-right: 0.5em;
  }
`;

export const Link = styled.p`
  color: #fff;
  text-decoration: none;
  font-size: 1.05rem;
  font-weight: 700;
  opacity : ${({ active, noStyle }) => (active && !noStyle ? 1 : 0.85)};
  border-bottom : 2px solid ${({ active }) => (active ? "currentColor" : "transparent")};
  padding-bottom: 0.05em;
  cursor: pointer;
  margin: 0;

  &:hover {
    opacity: 1;
    border-bottom: 2px solid currentColor;
    border: ${({ noStyle }) => noStyle && "none"};
  }
  opacity: ${({ noStyle }) => noStyle && 1};
  padding: ${({ noStyle }) => noStyle && "none"};
  border:${({ noStyle }) => noStyle && "none"};
`;

export const Container = styled.div`
    max-width: var(--container-max-width);
    margin:0 auto;
    display: flex;
    justify-content: space-between;
    padding: 1.125em 1em;
    position: relative;

    * + * {
      margin-left: 1em;
    }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  
  * + *{
      margin-left: 1em;
  }
  @media (max-width:400px){
    * + *{
      margin-left: 0.5em;
    }
  }
`;

export const Search = styled.form`
  display: flex;
  align-items: center;
  overflow: initial;

  @media (min-width:575px){
    overflow: hidden;
  }
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;

export const SearchInput = styled.input`
  background-color: #44444459;
  color: white;
  border: 1px solid gray;
  transition: margin 500ms, opacity 500ms;
  height: 30px;
  font-size: 0.875rem;
  padding: 0 0.75em;
  
  position: absolute;
  top: calc(100% - 1em);
  right: 1em;
  
  opacity: ${({ active }) => (active ? "1" : "0")};
  pointer-events: ${({ active }) => (active ? "initial" : "none")};
    
  @media (min-width:575px){
    position: initial;
    margin-right: ${({ active }) => (active ? "0" : "-15em")};;
  }

  :focus{
    border-color: whitesmoke;
  }
`;