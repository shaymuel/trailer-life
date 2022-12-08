import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const OrderNowContainer = styled.div`
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

 span {
    display: table;
    margin: 0 auto;
    margin-bottom: 25px;
    font-style: italic;
    font-size: 23px;
    text-align: center;

    @media (min-width: 650px) {
        font-size: 27px;
     }
    }

    
    p {
        padding: 0% 10% 5% 10%;
        font-size: 16px;
        text-align: center;
    
        @media (min-width: 650px) {
            font-size: 20px;
         }
        }
`;

export const ButtonContainerOrder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CustomizeLink = styled(Link)``;