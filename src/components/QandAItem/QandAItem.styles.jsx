import styled from 'styled-components';

export const PanelButton = styled.button`
  font-size: 1.5em;
  text-align: center;
  
  @media (min-width: 650px) {
    font-size: 1.8em;
    text-align: left;
  }
`;

export const PanelText = styled.p`
    font-size: 1em;
    text-align: center;

    @media (min-width: 650px) {
        font-size: 1.2em;
        text-align: left;
    }
`;