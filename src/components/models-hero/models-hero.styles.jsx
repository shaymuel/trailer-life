import styled from 'styled-components';

export const ModelsHeroContainer = styled.div`

h2 {
    font-size: 4em;
    text-align: center;
    padding-top: 25%;   

    @media (min-width: 650px) {
        margin: 0 10%;
        text-align: left;
        font-size: 6em;
        padding-top: 11%;
    }
 
     @media (min-width: 1000px) {
         margin: 0% 10%;
      }
    }

    p {
        font-style: italic;
        font-size: 20px;
        text-align: center;
    
        @media (min-width: 650px) {
            font-size: 23px;
            text-align: left;
            margin: 0 10% 0 10%;
         }
    }

`;