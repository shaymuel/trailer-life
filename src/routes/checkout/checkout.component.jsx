import { useContext, useState, useEffect } from 'react';

import { Context } from '../../contexts/new.context';
import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/button.component';


import {
  CheckoutContainer,
  CheckoutHeader,
  FormCheckoutDetails,
  CheckoutFormContainer,
  ButtonContainerss,
  ProductDets
} from './checkout.styles';

const Checkout = () => {
    const { state, setState } = useContext(Context);
    const [ checkoutState, setCheckoutState ] = useState();
    let checkoutArray = [];
    let arr = [];
    let show = false;

    const handleClick = () => {
      setCheckoutState(arr);
      alert(`Hi ${checkoutArray[0]}, your cart was submitted! We will reach out to you soon for more details.`);
    }

    const handleChange = (e) =>  {
      const { name, value } = e.target;
      checkoutArray.push(value);
      arr = [...checkoutArray, ...state];
    }

    useEffect(() => {
      show = !show;
      localStorage.setItem('checkout', JSON.stringify(checkoutState));
    }, [checkoutState]);


  return (
    <CheckoutContainer>
      <CheckoutHeader>
        Your Cart
      </CheckoutHeader>
      <ProductDets>
      {state ? ( <h2>{`${state[0]}`}</h2> ) : ''}
      {state ? ( <p>{`Color: ${state[1]}`}</p> ) : ''}
      {state ? ( <p>{`Kitchen: ${state[2]}`}</p> ) : ''}
      {state ? ( <p>{`Windows: ${state[3]}`}</p> ) : ''}
      {state ? ( <p>{`Mattress: ${state[4]}`}</p> ) : ''}
      {state ? ( <p>{`Upgrades:
      ${state[5] ? state[5] : ''}, 
      ${state[6] ? state[6] : ''},
      ${state[7] ? state[7] : ''},
      ${state[8] ? state[8] : ''},
      ${state[9] ? state[9] : ''},
      ${state[10] ? state[10] : ''}`}</p> ) : ''}
      </ProductDets>
      { state ? <CheckoutFormContainer>
      <FormCheckoutDetails>
      <label>Full Name</label>
      <input type='text' name='fullName' onChange={handleChange} required/>
      </FormCheckoutDetails>
      <FormCheckoutDetails>
      <label>Email</label>
      <input type='text' name='email' onChange={handleChange} required />
      </FormCheckoutDetails>
      <FormCheckoutDetails>
      <label>Phone Number</label>
      <input type='text' name='phone' onChange={handleChange} required />
      </FormCheckoutDetails>
      <FormCheckoutDetails>
      <label>Special Requests</label>
      <textarea name='requests' />
      </FormCheckoutDetails>
      <ButtonContainerss>
      <Button 
      type='button' 
      buttonType={BUTTON_TYPE_CLASSES.base} 
      onClick={handleClick}
      >Add To Cart</Button>
      </ButtonContainerss>
      </CheckoutFormContainer> : 'Your Cart is Empty'
  }
    </CheckoutContainer>
  );
};

export default Checkout;
