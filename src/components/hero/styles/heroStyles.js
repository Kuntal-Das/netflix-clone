import styled from "styled-components";

export const StyledHero = styled.div`
    background: url(${({ src }) => (src ? src : "../images/misc/home-bg.jpg")});
    /* top left / cover no-repeat; */
    background-size: cover;
    background-position: top center;
    flex-direction: column;
    background-color: #575757;

    background-blend-mode: overlay;
    /* align-items: normal; */
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
`;