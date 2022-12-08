import styled from 'styled-components';

export const Body = styled.div`
  height: 48px;
  padding: 0 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  position: relative;
  opacity: 0.7;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 16px;
    color: white;
    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }
`;

export const DirectoryItemContainer = styled.div`
  width: 100%;
  height: 270px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 0 7.5px 15px;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};

  &:hover {
    cursor: pointer;
    box-shadow: 2px 3px 3px black;

    ${Body} {
      opacity: 0.9;
    }
  }
  `;
  