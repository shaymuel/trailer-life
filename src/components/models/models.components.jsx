import ModelItem from "../models-item/model-item.component";
import { 
    ModelsContainer, 
    FeaturesContainer,
    FeatureContainer,
    FeatureItem

} from "./models.style";

const models = [
    {
        id: 1,
        name: 'Babi Yak',
        sleeps: '2',
        floor: '62 x 80 in',
        width: '7ft 2in',
        height: '82 in',
        length: '14ft',
        clearance: '18 in',
        weight: '1650 lbs'
    },
    {
        id: 2,
        name: 'Mommi Yak',
        sleeps: '3',
        floor: '64 x 80 in',
        width: '7ft 7in',
        height: '85 in',
        length: '15ft',
        clearance: '18 in',
        weight: '1800 lbs'
    },
    {
        id: 3,
        name: 'Daddi Yak',
        sleeps: '4',
        floor: '67 x 80 in',
        width: '8ft',
        height: '87 in',
        length: '16ft',
        clearance: '20 in',
        weight: '2000 lbs'
    },
];

const trailerFeatures = [
    { 
        id: 1,
        feature: 'Solar panels',
        imgUrl: 'https://images.unsplash.com/photo-1625301840055-7c1b7198cfc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
    },
    { 
        id: 2,
        feature: 'Floor storage',
        imgUrl: 'https://images.unsplash.com/photo-1595428774795-8e16f034a3d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    { 
        id: 3,
        feature: 'Electric brakes',
        imgUrl: 'https://images.unsplash.com/photo-1650218484828-5c842c51c771?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
    },
    { 
        id: 4,
        feature: '5-Year Structural Warranty',
        imgUrl: 'https://images.unsplash.com/photo-1640145738384-d914d8b34716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    { 
        id: 5,
        feature: 'Roof lifetime warranty',
        imgUrl: 'https://images.unsplash.com/photo-1518736346281-76873166a64a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    { 
        id: 6,
        feature: 'XL tires',
        imgUrl: 'https://images.unsplash.com/photo-1601411101851-ea0e07766235?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    { 
        id: 8,
        feature: 'Spare tires',
        imgUrl: 'https://images.unsplash.com/photo-1655228025670-7dae77275694?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    { 
        id: 9,
        feature: 'Hitch & Hookup',
        imgUrl: 'https://images.unsplash.com/photo-1500274869470-1cf3be073d1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    { 
        id: 10,
        feature: 'Rooftop fan',
        imgUrl: 'https://images.unsplash.com/photo-1564510182791-29645da7fac4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    }
];

const Models = () => {
    return (
        <ModelsContainer>
          <h3>Every Yak comes with:</h3>
            <FeaturesContainer>
                <FeatureContainer>
                    {trailerFeatures.map((feature) => (
                        <FeatureItem key={feature.id}>
                            <img src={feature.imgUrl} alt={feature.feature}/>
                            <p>{feature.feature}</p>
                        </FeatureItem>
                    ))}
                </FeatureContainer>
            </FeaturesContainer>
            <h3>Specs</h3>
            <div>
            {models.map((model) => (
                <ModelItem key={model.id} model={model}/>
            ))}
            </div>
        </ModelsContainer>
    );
}

export default Models;