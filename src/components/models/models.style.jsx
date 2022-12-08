import styled from 'styled-components';

export const ModelsContainer = styled.div`
    backdrop-filter: blur(20px);
    background-color: rgba(255, 255, 255, .15);
    box-shadow: 0 0 4px grey, 0 3px 3px black;
    margin: 15% 0;
    padding: 27px;

    @media (min-width: 650px) {
    margin: 10% 5%;
    }

    @media (min-width: 1000px) {
        margin: 10% 10%;
    }

    h3 {
        font-size: 3em;
        padding-bottom: 8px;
    
        @media (min-width: 650px) {
            font-size: 4em;
         }
        }

    span {
        display: table;
        margin: 0 auto;
        margin-bottom: 25px;
        font-size: 20px;
        text-align: center;
        font-family: 'Permanent Marker', sans-serif;
    
        @media (min-width: 650px) {
            font-size: 35px;
            }
        }
`;

export const FeaturesContainer = styled.div``;

export const FeatureContainer = styled.div`
display: grid;
gap: 15px;
grid-auto-flow: column;
grid-auto-columns: 70%;
overflow-x: auto;
overscroll-behavior-inline: contain;
scroll-snap-type: inline mandatory;
margin: 5% 0;

  @media (min-width: 650px) {
    grid-auto-columns: 45%;
  }

  @media (min-width: 1000px) {
    grid-auto-columns: 35%;
  }

  @media (min-width: 1200px) {
    grid-auto-columns: 30%;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  & > * {
    scroll-snap-align: start;
}
`;

export const FeatureItem = styled.div`
margin: 0 7.5px 15px;
width: 100%;
height: 100%;

img {
    max-width: 100%;
    width: 100%;
    height: 243px;
    box-shadow: 4px 4px 7px black;
}

p {
    text-align: center;
    font-size: 27px;
    font-family: 'Permanent Marker', sans-serif;

    @media (min-width: 650px) {
        font-size: 30px;
      }
}
`;