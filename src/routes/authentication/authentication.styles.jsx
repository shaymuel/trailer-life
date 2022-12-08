import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 80px;
    width: 80%;

    @media (min-width: 1000px) {
      display: flex;
      width: 900px;
      flex-direction: unset;
      justify-content: space-between;
      gap: 0;
    }
`;
