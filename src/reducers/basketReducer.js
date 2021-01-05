import products from '../products/products.json'
import { ADD_TO_BASKET } from '../actions/action-types/cart-actions'

const initState = {
    items: products.items,
    itemsInBasket: [],
    total: 0,
    quantity: 0
}

const basketReducer = (state = initState, action ) => {
    if(action.type === ADD_TO_BASKET){
        // Check if selected wine matches Wines in state
       const addItem = state.items.find(item => item.id === action.id)
       // check if action id exists in itemsInBasket
       const basketIsNotEmpty = state.itemsInBasket.find(item => action.id === item.id)
       
       if(basketIsNotEmpty){
           addItem.quantity++
           return {
               ...state,
                total: parseFloat(state.total) + parseFloat(addItem.price),
                quantity: state.quantity + 1
           }
       }
       else{
    
           addItem.quantity = 1
           return {
               ...state,
               itemsInBasket: [...state.itemsInBasket, addItem],
               total: parseFloat(state.total) + parseFloat(addItem.price),
               quantity: state.quantity + 1
           }
       }
       
    }
    return state
}

export default basketReducer;