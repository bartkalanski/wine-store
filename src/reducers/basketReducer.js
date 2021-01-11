import products from "../products/products.json";
import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
} from "../actions/action-types/cart-actions";
import formatPrice from '../components/helper-functions/formatPrice'

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
  if (action.type === REMOVE_FROM_BASKET) {
    let product = state.itemsInBasket.find((item) => action.id === item.id);
    let findProduct = state.itemsInBasket.indexOf(product);
    
    return {
      ...state,
      itemsInBasket: state.itemsInBasket.filter(
        (item, index) => index !== findProduct
      ),
      total: formatPrice(state.total - product.price),
      basketQuantity: state.basketQuantity - product.quantity,
    };
  }
  return state;
};

export default basketReducer;
