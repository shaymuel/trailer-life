import styled from 'styled-components';

export const QandASectionContainer = styled.div`
    backdrop-filter: blur(20px);
    background-color: rgba(255, 255, 255, .15);
    box-shadow: 0 0 4px grey, 0 3px 3px black;
    padding: 27px;
    margin: 15% 0;

    @media (min-width: 650px) {
    margin: 15% 5%;
    }

    @media (min-width: 1000px) {
        margin: 15% 10%;
    }

    h3 {
    text-align: center;
    font-size: 3em;
    padding-bottom: 8px;

    @media (min-width: 650px) {
        font-size: 4em;
    }
    }
`;