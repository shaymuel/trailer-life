import styled from "styled-components";
import { Link } from 'react-router-dom';


export const CallRequestContainer = styled.div`
    backdrop-filter: blur(20px);
    background-color: rgba(255, 255, 255, .15);
    box-shadow: 0 0 4px grey, 0 3px 3px black;
    padding: 27px;
    margin: 10% 0;

    @media (min-width: 650px) {
        margin: 10% 5%;
     }
 
     @media (min-width: 1000px) {
         margin: 10% 10%;
      }

    h3 {
        text-align: center;
        font-size: 3em;
        padding-bottom: 8px;
    
        @media (min-width: 650px) {
            font-size: 4em;
         }
`;

export const InfoContainer = styled.div`

    @media (min-width: 450px) {
    margin: 20px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    }
`;

export const InfoText = styled.div`
    margin-bottom: 25px;
    font-style: italic;
    font-size: 18px;
    text-align: center;

    @media (min-width: 650px) {
        font-size: 22px;
    }
`;

export const QALink = styled(Link)`
    text-decoration: underline;

    &:hover {
        color: blue;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    @media (min-width: 650px) {
    display: grid;
    gap: 10px;
    max-width: 100%;
    justify-content: center;
`;

export const InputField = styled.input`
    height: 40px;
`;