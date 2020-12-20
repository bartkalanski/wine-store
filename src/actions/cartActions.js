import { ADD_TO_BASKET } from './action-types/cart-actions'

export const addToBasket = (id) =>{
    return {
        type: ADD_TO_BASKET,
        id
    }
}