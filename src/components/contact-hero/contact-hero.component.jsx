import PhoneCallRequest from "../phone-call-request/phone-call.component";

import { ContactHeroContainer } from './contact-hero.styles';

const ContactHero = () => {
    return (
        <ContactHeroContainer>
            <h2>Contact Us</h2>
            <PhoneCallRequest />
        </ContactHeroContainer>
    );
}

export default ContactHero;