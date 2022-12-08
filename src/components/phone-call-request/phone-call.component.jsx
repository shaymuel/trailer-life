import { Outlet } from 'react-router-dom';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { CallRequestContainer, InfoContainer, InfoText, QALink, Form, InputField } from './phone-call.styles';


const PhoneCallRequest = () => {

    const phoneRequest = () => {
        alert('Call Request Sent! We will reach out to you shortly.');
    };

    return (
        <CallRequestContainer>
            <h3>Questions?</h3>
            <InfoText>Check out our <QALink to='/contact'>Q/A Section</QALink> or feel free to contact us. Request a call by entering your phone number.</InfoText>
            <InfoContainer>
            <Form>
                <InputField 
                    placeholder='Enter Phone Number'
                    type='phone'
                    required
                    name='phone'
                />
                <Button
                    buttonType={BUTTON_TYPE_CLASSES.base}
                    type='button'
                    onClick={phoneRequest}
                >
                    Send
                </Button>
            </Form>
            <div>
                <p><strong>Address:</strong> 1234 Road Dr Somewhere, WL 5P GXW</p>
                <p><strong>Email:</strong> support@yaktrailers.com</p>
                <p><strong>Phone:</strong> 1(234) 567-8901</p>
            </div>
            </InfoContainer>
            <Outlet />
        </CallRequestContainer>
    );
}

export default PhoneCallRequest;