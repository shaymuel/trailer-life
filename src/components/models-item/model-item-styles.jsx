import styled from 'styled-components';

export const ModelItemsContainer = styled.div`
`;

export const ModelItemContainer = styled.div`
display: grid;
gap: 15px;
grid-auto-flow: column;
grid-auto-columns: 70%;
overflow-x: auto;
overflow-y: hidden;
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

export const ModelItemDetails = styled.div`

img {
    max-width: 100%;
    width: 100%;
    height: 243px;
    box-shadow: 4px 4px 7px black;
}

div {
    position relative;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -100%);

p {
    text-align: center;
    font-size: 27px;
    font-family: 'Permanent Marker', sans-serif;
    background-color: rgba(255, 255, 255, .75);

    @media (min-width: 650px) {
        font-size: 30px;
      }
}

}
`;