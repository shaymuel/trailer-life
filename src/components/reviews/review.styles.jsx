import styled from 'styled-components';

export const ReviewsContainer = styled.div`
    backdrop-filter: blur(20px);
    background-color: rgba(255, 255, 255, .15);
    box-shadow: 0 0 4px grey, 0 3px 3px black;
    padding: 5% 15px;
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

export const ReviewDiv = styled.div`
    display: grid;
    gap: 10px;
    grid-auto-flow: column;
    grid-auto-columns: 70%;
    overflow-x: auto;
    overscroll-behavior-inline: contain;
    scroll-snap-type: inline mandatory;
    margin-left: 10px;

      @media (min-width: 650px) {
        grid-auto-columns: 60%;
      }

      @media (min-width: 1000px) {
        grid-auto-columns: 45%;
      }

      ::-webkit-scrollbar {
        display: none;
      }
    
      & > * {
        scroll-snap-align: start;
    }
`;