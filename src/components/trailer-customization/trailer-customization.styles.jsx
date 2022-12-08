import styled from "styled-components";

export const TrailerContainer = styled.div`
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

export const TrailerFormContainer = styled.div`
backdrop-filter: blur(20px);
background-color: rgba(255, 255, 255, .15);
box-shadow: 0 0 4px grey, 0 3px 3px black;
padding: 27px;
margin: 4% 0;

@media (min-width: 650px) {
   margin: 2% 5%;
}

@media (min-width: 1000px) {
    margin: 2% 10%;
 }
`;

export const TrailerUpgradesSectionContainer = styled.div`
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

export const HeadingsContainer = styled.p`
  margin: 0 !important;
  border-bottom: 2px solid black;
  padding: 10px 0;
`;

export const TrailerItemsOptions = styled.div`
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

export const OptDetails = styled.div`
img {
    max-width: 100%;
    width: 100%;
    height: 243px;
    box-shadow: 4px 4px 7px black;
}

div {
  display: flex;
  flex-direction: column;
  
  label {
    text-align: center;
    font-size: 27px;
    font-family: 'Permanent Marker', sans-serif;
    background-color: rgba(255, 255, 255, .75);
  }

  input[type='radio'], input[type='checkbox'] {
   width: 26px;
    height: 26px;
    /* background-color: black; */
    position: relative;
    top: 0;
    left: 44%;
  }

}
`;

export const ButtonContainers = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;