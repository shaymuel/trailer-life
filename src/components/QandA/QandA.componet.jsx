import QandAItem from "../QandAItem/QandAItem.componet";

import { QandASectionContainer } from "./QandA.styles";

const questions = [
    {
        id: 1,
        q : 'How long does it take to make my Yak?',
        answer: 'Once you have made the final approval, we will start your trailer construction. It usually takes about 45-50 days to get the trailer delivered to you.'
    },
    {
        id: 2,
        q : 'How durable is the Yak and can you go off-road?',
        answer: 'Yes, it has all-terrain tires and the frame/roof has a warranty of 5/lifetime year warranty.'
    },
    {
        id: 3,
        q : 'How durable is the Yak and can you go off-road?',
        answer: 'Yes, it has all-terrain tires and the frame/roof has a warranty of 5/lifetime year warranty.'
    }, 
    {
        id: 4,
        q : 'Does the Yak have a bathroom?',
        answer: 'The classic Yak design does not come with a toilet but there are some great portable bathroom camping options. If you go to a camp site, there are also sometimes amenities that can be used.'
    }, 
    {
        id: 5,
        q : 'Does the Yak have a shower?',
        answer: 'A shower can be hooked up to your waterline and used outside. If you would like this feature, make sure to select in your customization!'
    }, 
    {
        id: 6,
        q : 'Is a spare tire mount standard?',
        answer: 'Each of the trailer models comes with a spare tire mounted on the passenger side.'
    }, 
    {
        id: 7,
        q : 'Where can I come see a Yak in person?',
        answer: 'We are located in the WL and have options for both live tours or online tours. Contact us and we can help you learn more.'
    }, 
    {
        id: 8,
        q : 'Is the Yak insulated?',
        answer: 'Yes, we bought the insulation from Home Depot - not a sponsor.'
    },
    {
        id: 9,
        q : 'Does each Yak Model come with all-terrain tires?',
        answer: 'Yes, each come with the 235/75R15 all-terrain tires.'
    },

];

const QAndASection = () => {
    return (
        <QandASectionContainer id="qa">
            <h3>Question & Answer</h3>
            {questions.map((question) => (
                <QandAItem key={question.id} question={question} />
            ))}
        </QandASectionContainer>
    );
}

export default QAndASection;