import styled from "styled-components";

export const StyledHero = styled.div`
    background-image: url(${({ src }) => (src ? src : "../images/misc/home-bg.jpg")}),
        linear-gradient(${({src})=>src ? "#575757":"transparent"} 75%, #000) ;
    background-size: cover;
    background-blend-mode: overlay;
    background-position: top center;
    background-repeat: no-repeat;
    flex-direction: column;
`;

export const Title = styled.h1`
    color: white;
    font-size: 3.125rem;
    line-height: 1.5;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    margin: 0 0 0.5em;

    @media (max-width:400px){
        font-size: 2.5rem;
    }
`;

export const Text = styled.p`
    max-width: 50ch;
    color: white;
    font-size: 1.25rem;
    line-height: 1.5;
    /* text-align: right; */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const PlayButton = styled.button`
    color: #000;
    cursor: pointer;
    font-size: 1.25rem;
    margin-top: 0.5em;
    padding: 0.5em 2.5em;
    border-width: 0;
    border-radius: 5px;
    font-weight: bold;
    background-color: #e6e6e6;
    box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
    transition: background-color 0.5s ease, color 0.5s ease;

    &:hover {
      background: #ff1e1e;
      color: white;
    }
`;

export const Container = styled.section`
    padding: 9em 1em 15em;
    max-width: var(--container-max-width);
    margin:0 auto;
    width: 100%;

    @media(min-width:900px){
        padding-left: 2em;
        padding-right: 2em;
    }
`;