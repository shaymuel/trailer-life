import styled from "styled-components";

export const ContactHeroContainer = styled.div`

    h2 {
    font-size: 4em;
    text-align: center;
    padding-top: 15%;   
    padding-bottom: 4%;

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
    }
`;