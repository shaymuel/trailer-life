import styled from 'styled-components';

export const ReviewItemContainer = styled.div`
    border: 1px solid black;
    border-radius: 20px;
    margin: 0 7.5px 15px;
    padding: 15px;
    width: 100%;
    height: 100%;
    
    h4 {
        margin-bottom: 15px;
        font-size: 1.5em;

        @media (min-width: 650px) {
            font-size: 2em;
         }
    }

    img {
        width: 100px;
        height: 100px;
        float: right;
        border: 1px solid black;
        border-radius: 50%;
        margin-top: -50px;
        margin-right: 10px;
    }
`;

export const Buyer = styled.p`
    color: green;
`;

export const ReviewText = styled.p`
    margin-top: 15px;
`;