import styled, { createGlobalStyle } from 'styled-components';

export const LockBody = createGlobalStyle`
    body {
        overflow: hidden;
    }
`

export const ReleaseBody = createGlobalStyle`
    body {
        overflow: initial;
    }
`

export const Spinner = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: 999;
    
    :after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        background-image: url(/images/misc/spinner.png);
        background-size: contain;
        background-repeat: no-repeat;
        margin-top: -9.375em;
        margin-left: -4.6875em;
        width: 150px;
        height: 150px;
        animation-name: spin;
        animation-duration: 1000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
    
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

export const Picture = styled.img`
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -6.25em;
    margin-left: -1.375em;
`;