import React, { useContext } from 'react';
import { Context } from '../../contexts/new.context';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';


import {
    TrailerContainer, 
    TrailerFormContainer,
    HeadingsContainer,
    TrailerItemsOptions,
    OptDetails,
    ButtonContainers
} from './trailer-customization.styles';

const modelType = [
    {
        id: 2,
        name: 'Babi Yak',
        imgUrl: 'https://images.unsplash.com/photo-1566847838496-c670dd0ec05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        id: 3,
        name: 'Mommi Yak',
        imgUrl: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        id: 4,
        name: 'Daddi Yak',
        imgUrl: 'https://images.unsplash.com/photo-1527542902003-a675625fb1eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=952&q=80'
}];  
const colors = [
    {
        id: 6,
        name: 'Black',
        imgUrl: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
        id: 7,
        name: 'Gray',
        imgUrl: 'https://images.unsplash.com/photo-1536566482680-fca31930a0bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
    },
    {
        id: 8,
        name: 'White',
        imgUrl: 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
        id: 9,
        name: 'Teal',
        imgUrl: 'https://images.unsplash.com/photo-1617957848811-9c07f14d7ba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
    },
    {
        id: 10,
        name: 'Pink',
        imgUrl: 'https://images.unsplash.com/photo-1503455637927-730bce8583c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
}];
const kitchen =  [
    {
        id: 12,
        name: 'Decked out Kitchen (You want us to provide everything)',
        imgUrl: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        id: 13,
        name: 'Basic Kitchen (You want to have the basics)',
        imgUrl: 'https://images.unsplash.com/photo-1503011510-c0e00592713b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    },
    {
        id: 14,
        name: 'Minimalist Kitchen (You want to make it your own)',
        imgUrl: 'https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
}];
const windows = [
    {
        id: 16,
        name: 'No windows',
        imgUrl: 'https://images.unsplash.com/photo-1627386172141-c6fec8bf5aa3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        id: 17,
        name: '1 windows',
        imgUrl: 'https://images.unsplash.com/photo-1482670205041-1281b9faf4b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        id: 18,
        name: '2 windows',
        imgUrl: 'https://images.unsplash.com/photo-1518789178517-963cbd3d1803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
    }]; 
const mattress = [
    {
        id: 20,
        name: '4” mattress',
        imgUrl: 'https://images.unsplash.com/photo-1649284538754-8d69dfa984cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=813&q=80'
    },
    {
        id: 21,
        name: '6” mattress',
        imgUrl: 'https://images.unsplash.com/photo-1649284538754-8d69dfa984cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=813&q=80'
    },
    {
        id: 22,
        name: '8” mattress',
        imgUrl: 'https://images.unsplash.com/photo-1649284538754-8d69dfa984cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=813&q=80'
}];
const upgrades = [
    {
        id: 25,
        name: 'Outside Shower',
        imgUrl: 'https://images.unsplash.com/photo-1576678433413-202829a1ab98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        id: 26,
        name: 'Roof rack',
        imgUrl: 'https://images.unsplash.com/photo-1612564747426-3576284509a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
    },
    {
        id: 27,
        name: 'Outside Lighting',
        imgUrl: 'https://images.unsplash.com/photo-1631113035882-f53eda07d134?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80'
    },
    {
        id: 28,
        name: 'Outside Cameras',
        imgUrl: 'https://images.unsplash.com/photo-1549109926-58f039549485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        id: 29,
        name: 'Metal Siding',
        imgUrl: 'https://images.unsplash.com/photo-1501166222995-ff31c7e93cef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1034&q=80'
    },
    {
        id: 30,
        name: 'Heater & A/C',
        imgUrl: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    }
];

const TrailerCustom = () => {
  const { state, setState } = useContext(Context);
  let optionsArray = [];
  let upgradesArray = [];
  let modelChosen = '';
  let colorChosen = '';
  let kitchenChosen = '';
  let windowChosen = '';
  let mattressChosen = '';

  function handleClick() {
    setState(optionsArray);
    alert('Added to Cart. Select cart to see selections');
  }

  const handleChange = (e) =>  {
    const { name, value } = e.target;
        switch(name) {
            case 'modelType':
                modelChosen = value;
                break;
            case 'colorOptions':
                colorChosen = value;
                break;
            case 'kitchenOptions':
                kitchenChosen = value;
                break;
            case 'windowOptions':
                windowChosen = value;
                break;
            case 'mattressOptions':
                mattressChosen = value;
                break;
            default:
                if (upgradesArray.includes(value)) {
                    upgradesArray.splice(upgradesArray.indexOf(value), 1);
                } else {
                    upgradesArray.push(value);
                }
                break;
        }
        optionsArray = [ modelChosen, colorChosen, kitchenChosen, windowChosen, mattressChosen, ...upgradesArray];
    };
  

  return (
    <TrailerContainer>
    <h2>Customize</h2>
    <p>Tailor your Trailer to your needs</p>
    <TrailerFormContainer>
    <HeadingsContainer>Model Type (Choose One)</HeadingsContainer>
    <TrailerItemsOptions>
    {modelType.map((obj, i) => {
        const { id, name, imgUrl } = obj;
        return (
            <OptDetails key={i}> 
            <img src={imgUrl} alt={name} />
            <div>
            <label>{name}</label>   
            <input
            type='radio'
            key={id}
            name='modelType'
            value={name}
            onChange={handleChange}
            required
          />
          </div>
          </OptDetails>
        );
    })}
    </TrailerItemsOptions>
    <HeadingsContainer>Colors (Choose One)</HeadingsContainer>
    <TrailerItemsOptions>
    {colors.map((obj, i) => {
        const { id, name, imgUrl } = obj;
        return (
            <OptDetails key={i}>
            <img src={imgUrl} alt={name} /> 
            <div>
            <label>{name}</label>   
            <input
            type='radio'
            key={id}
            name='colorOptions'
            value={name}
            onChange={handleChange}
            required
          />
          </div>
          </OptDetails>
        );
    })}
    </TrailerItemsOptions>
    <HeadingsContainer>Kitchen Options (Choose One)</HeadingsContainer>
    <TrailerItemsOptions>
    {kitchen.map((obj, i) => {
        const { id, name, imgUrl } = obj;
        return (
            <OptDetails key={i}>
            <img src={imgUrl} alt={name} /> 
            <div>
            <label>{name}</label>   
            <input
            type='radio'
            key={id}
            name='kitchenOptions'
            value={name}
            onChange={handleChange}
            required
          />
          </div>
          </OptDetails>
        );
    })}
    </TrailerItemsOptions>
    <HeadingsContainer>Window Options (Choose One)</HeadingsContainer>
    <TrailerItemsOptions>
    {windows.map((obj, i) => {
        const { id, name, imgUrl } = obj;
        return (
            <OptDetails key={i}> 
            <img src={imgUrl} alt={name} />
            <div>
            <label>{name}</label> 
            <input
            type='radio'
            key={id}
            name='windowOptions'
            value={name}
            onChange={handleChange}
            required
          />
          </div>
          </OptDetails>
        );
    })}
    </TrailerItemsOptions>
    <HeadingsContainer>Mattress Options (Choose One)</HeadingsContainer>
    <TrailerItemsOptions>
    {mattress.map((obj, i) => {
        const { id, name, imgUrl } = obj;
        return (
            <OptDetails key={i}> 
            <img src={imgUrl} alt={name} />
            <div>
            <label>{name}</label> 
            <input
            type='radio'
            key={id}
            name='mattressOptions'
            value={name}
            onChange={handleChange}
            required
          />
          </div>
          </OptDetails>
        );
      })}
      </TrailerItemsOptions>
      <HeadingsContainer>Upgrades (Choose Many)</HeadingsContainer>
      <TrailerItemsOptions>
      {upgrades.map((obj, i) => {
        const { id, name, imgUrl } = obj;
        return (
            <OptDetails key={i}> 
            <img src={imgUrl} alt={name} />
            <div>
            <label>{name}</label> 
            <input
            type='checkbox'
            key={id}
            name={name}
            value={name}
            onChange={handleChange}
          />
          </div>
          </OptDetails>
        );
      })}
      </TrailerItemsOptions>
      <ButtonContainers>
      <Button 
      type='button' 
      buttonType={BUTTON_TYPE_CLASSES.base} 
      className='hero-button'
      onClick={handleClick}
      >Add To Cart</Button>
      </ButtonContainers>
      </TrailerFormContainer>
    </TrailerContainer>
  );

}

export default TrailerCustom;