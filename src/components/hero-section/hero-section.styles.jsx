import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Hero = styled.div`
    height: 70vh;

    .hero-h2 {
        @media (min-width: 650px) {
            margin: 0 10%;
            text-align: left;
            font-size: 6em;
            padding-top: 11%;
            padding-bottom: 4%;
        }
     
         @media (min-width: 1000px) {
             margin: 0% 10%;
          }
        font-size: 4em;
        text-align: center;
        padding-top: 25%;
        padding-bottom: 4%;

    }`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 650px) {
        display: block;
        margin-left: 10%;
    }
`;

export const TrailerLink = styled(Link)``;