import products from "../products/products.json";
import { ADD_TO_BASKET } from "../actions/action-types/cart-actions";

const initState = {
  items: products.items,
  itemsInBasket: [],
  total: 0,
  basketQuantity: 0,
};

const basketReducer = (state = initState, action) => {
  if (action.type === ADD_TO_BASKET) {
    // Find product in Basket
    let product = state.itemsInBasket.find((item) => action.id === item.id);
    let alreadyInBasket = true;

    if (!product) {
      product = {
        ...state.items.find((item) => item.id === action.id),
      };
      alreadyInBasket = false;
    }
    if (alreadyInBasket) {
      product.quantity++;
      return {
        ...state,
        total: parseFloat(state.total) + parseFloat(product.price),
        basketQuantity: state.basketQuantity + 1,
      };
    } else {
      product.quantity = 1;
      return {
        ...state,
        itemsInBasket: [...state.itemsInBasket, product],
        total: parseFloat(state.total) + parseFloat(product.price),
        basketQuantity: state.basketQuantity + 1,
      };
    }
  }
  return state;
};

export default basketReducer;
