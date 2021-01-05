import imageOne from '../imgs/porta6.jpg'
import imageTwo from '../imgs/CNDP.png'
import imageThree from '../imgs/riesling.jpg'
import imageFour from '../imgs/rioja.jpg'
import { ADD_TO_BASKET } from '../actions/action-types/cart-actions'

const initState = {
    items:[
        {id:1, title: 'Châteauneuf du Pape', type: 'Red', origin: 'France', price: '27.99', image: imageTwo},
        {id:2, title: 'Porta 6', type: 'Red', origin: 'Portugal', price: '7.99', image: imageOne },
        {id:3, title: 'Rioja', type: 'Red', origin: 'Spain', price: '14.99', image: imageFour },
        {id:4, title: 'Riesling', type: 'White', origin: 'Germany', price: '9.99', image: imageThree },
    ],
    itemsInBasket: [],
    total: 0
}

const basketReducer = (state = initState, action ) => {
    if(action.type === ADD_TO_BASKET){
        let product = state.itemsInBasket.find(item => action.id === item.id);
        let alreadyInBasket = true;

        if(!product) {
            product = {
                ...state.items.find(item => item.id === action.id)
            };
            alreadyInBasket = false;
        }
       
       if(alreadyInBasket){
           product.quantity++
           return {
               ...state,
                total: parseInt(state.total) + parseInt(product.price)
           }
       }
       else {
           product.quantity = 1
           return {
               ...state,
               itemsInBasket: [...state.itemsInBasket, product],
               total: parseInt(state.total) + parseInt(product.price)
           }
       }
       
    }
    return state
}

export default basketReducer;