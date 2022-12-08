import { HowOrderingContainer } from "./how-to-order.styles";

const steps = [ 
    { 
        id: 1,
        step: 'Go to our customization page and select your options.' 
    },
    { 
        id: 2,
        step: 'Add your customizations to the cart.' 
    },
    { 
        id: 3,
        step: 'Submit your cart to us to get a quote - add a phone number, address, name, and special requests section' 
    },
    { 
        id: 4,
        step: 'Once you approve your final request we will start making your trailer and get it to you in 45-50 days! Then your adventures can finally begin.' 
    }
];

const HowToOrder = () => {
    return (
        <HowOrderingContainer>
            <h3>How To Order Your Teardrop Trailer</h3>
            <ol>
                {steps.map((step) => (
                    <li key={step.id}>{step.step}</li>
                ))}
            </ol>
            <p><strong>We love to let our customer personalize and tailor their trailer to their needs. We can't wait to see your customizations!</strong></p>
        </HowOrderingContainer>
    );
}

export default HowToOrder;