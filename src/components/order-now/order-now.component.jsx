import { Outlet } from 'react-router-dom';

import { OrderNowContainer, CustomizeLink, ButtonContainerOrder } from './order-now.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const OrderNow = () => {
    return (
        <OrderNowContainer>
            <span>Order Now</span>
            <p>Every teardrop trailer owner needs something different that fits their needs.</p>
            <ButtonContainerOrder>
            <CustomizeLink to='/custom'>
            <Button
            buttonType={BUTTON_TYPE_CLASSES.base}
            type='button'
          >
            Order Now
          </Button>
          </CustomizeLink>
          </ButtonContainerOrder>
          <Outlet />
        </OrderNowContainer>
    );
}

export default OrderNow;