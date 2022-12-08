import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import React, { useState } from "react";

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { ReactComponent as CompanyLogo } from '../../assets/trailer.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
  MenuButtonTop
} from './navigation.styles';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  let [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CompanyLogo className='logo' />
        </LogoContainer>
          <CartIcon />
          {isCartOpen && <CartDropdown />}
        <MenuButtonTop onClick={handleToggle}><br/>
          <div></div><br/>
        </MenuButtonTop>
        <NavLinks>
          <NavLink to='/' className={isActive ? 'hide' : ''} onClick={handleToggle}>Home</NavLink>
          <NavLink to='/models' className={isActive ? 'hide' : ''} onClick={handleToggle}>Models</NavLink>
          <NavLink to='/custom' className={isActive ? 'hide' : ''} onClick={handleToggle}>Customize</NavLink>
          <NavLink to='/contact' className={isActive ? 'hide' : ''} onClick={handleToggle}>Contact</NavLink>

          {currentUser ? (
            <NavLink as='span' className={isActive ? 'hide' : ''} onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth' className={isActive ? 'hide' : ''} onClick={handleToggle}>SIGN IN</NavLink>
          )}
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
