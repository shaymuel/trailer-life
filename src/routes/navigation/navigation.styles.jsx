import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 85px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  position: -webkit-sticky;
	position: sticky;
	top: 0;
  backdrop-filter: blur(20px);
  background-color: rgba(255, 255, 255, .15);
  z-index: 10;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  svg {
  width: 75px;
  height: auto;
  border-radius: 50%;
  margin-top: -17px;
  margin-left: -21px;
  }
`;

export const NavLinks = styled.div`
    position: absolute;
    background-color: white;
    top: 84px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border: 2px solid white;
`;

export const NavLink = styled(Link)`
  padding: 13px 15px;
  cursor: pointer;
  width: 100%;
  text-align: center;
  border: 1px solid black;

  &:hover {
    background: black;
    color: white;
  }
  
`;

export const MenuButtonTop = styled.div`
	margin: 1em;
  width: 3.5em;
  height: 4em;
  background: none;
  border: none;
  border-radius: .5em;
  cursor: pointer; cursor: hand;

  div {
    position: absolute;
    background: black;
    margin-top: -1em;
    width: 2.5em;
    height: .3em;
    border-radius: 1em;
    box-shadow: 0 10px, 0px 20px;
  }

`;
