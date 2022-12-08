import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Context } from '../../contexts/new.context';

import Button from '../button/button.component';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const { state, setState } = useContext(Context);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
      {state ? <div><h3>{`${state[0]}`}</h3><p>{`${state[1]}, ${state[2]}, ${state[3]}, ${state[4]}`}</p></div> : ( <EmptyMessage>Your cart is empty</EmptyMessage>) }
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
