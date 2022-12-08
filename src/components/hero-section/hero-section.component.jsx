import { Outlet } from 'react-router-dom';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { Hero, ButtonContainer, TrailerLink } from './hero-section.styles';


const HeroSection = () => {
    return (
        <Hero>
            <h2 className='hero-h2'>Camp In Style</h2>
            <ButtonContainer>
            <TrailerLink to='/models'>
            <Button
            buttonType={BUTTON_TYPE_CLASSES.base}
            type='button'
          >View Trailer Models
          </Button>
          </TrailerLink>
          </ButtonContainer>
          <Outlet />
        </Hero>
    );
}

export default HeroSection;