import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-auto-flow: column;
  grid-auto-columns: 70%;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  scroll-snap-type: inline mandatory;
  margin-left: 15px;

  @media (min-width: 650px) {
    margin-left: 10%;
    grid-auto-columns: 30%;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  & > * {
    scroll-snap-align: start;
}
`;
