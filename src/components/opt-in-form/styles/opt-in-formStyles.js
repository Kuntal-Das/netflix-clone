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
export const Input = styled.input.attrs(props=>({
  type: props.email || "email"
}))`
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
  color: white;
  text-transform: uppercase;
  font-size: 1.5em;
  border: 0;
  cursor: pointer;
  background-color: rgba(0,0,0,0.40);
  background-image: linear-gradient(#e50914 , #f40612);
  background-size: 100% 300%;
  background-position-Y: top;
  transition: background-position 200ms linear;

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 1.4em;

    @media (max-width: 1000px) {
      width: 1em;
    }
  }

  background-blend-mode:${({disabled})=> disabled === "true" ? "darken" : "initial" };
  
  :hover { background-position: ${({disabled})=> disabled === "true" ? "top" :'bottom'};}

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
