import { ADD_TO_BASKET } from './action-types/cart-actions'
import { REMOVE_FROM_BASKET } from './action-types/cart-actions'

export const addToBasket = (id) =>{
    return {
        type: ADD_TO_BASKET,
        id
    }
}
export const removeFromBasket = (id) =>{
    return {
        type: REMOVE_FROM_BASKET,
        id
    }
}