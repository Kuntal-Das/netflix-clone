import styled from "styled-components";

export const StyledProfiles = styled.div``;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding-top: 2em;
  max-width: var(--container-max-width);
`;

export const Title = styled.h1`
  width: 100%;
  color: #fff;
  font-size: 3rem;
  text-align: center;
  font-weight: 500;
`;

export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 1rem;

  &:hover {
    font-weight: bold;
    color: #e5e5e5;
  }
`;
export const Picture = styled.img`
  width: 100%;
  object-fit: cover;
  max-width: 150px;
  height: auto;
  border: 3px solid black;
  cursor: pointer;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
`;

export const Item = styled.li`
  max-height: 12.5em;
  max-width: 12.5em;
  list-style-type: none;
  text-align: center;
  margin-right: 1.875em;

  &:hover > ${Picture} {
    border: 3px solid white;
  }

  &:hover ${Name} {
    font-weight: bold;
    color: white;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
