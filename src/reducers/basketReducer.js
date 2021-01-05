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
    // Check if selected wine matches wines in state
    const addItem = { ...state.items.find((item) => action.id === item.id) };
    // Check if selected wine is in the basket
    const wineIsInBasket = state.itemsInBasket.find(
      (item) => action.id === item.id
    );
    if (wineIsInBasket) {
      addItem.quantity++;
      return {
        ...state,
        total: parseFloat(state.total) + parseFloat(addItem.price),
        basketQuantity: state.basketQuantity + 1,
      };
    } else {
      addItem.quantity = 1;
      return {
        ...state,
        itemsInBasket: [...state.itemsInBasket, addItem],
        total: parseFloat(state.total) + parseFloat(addItem.price),
        basketQuantity: state.basketQuantity + 1,
      };
    }
  }
  return state;
};

export default basketReducer;

/*if (basketIsNotEmpty) {
      console.log("copyAddItem", addItem);
      addItem.quantity += 1;

      return {
        ...state,
        total: parseFloat(state.total) + parseFloat(addItem.price),
        quantity: state.quantity + 1,
      };
    } else {
      console.log(addItem.quantity);
      return {
        ...state,
        itemsInBasket: [...state.itemsInBasket, addItem],
        total: parseFloat(state.total) + parseFloat(addItem.price),
        quantity: state.quantity + 1,
      };
    } */

/*
    
    
    if (addItem.quantity === undefined) {
      addItem.quantity = 1;
      return {
        ...state,
        itemsInBasket: [...state.itemsInBasket, addItem],
        total: parseFloat(state.total) + parseFloat(addItem.price),
        quantity: state.quantity + 1,
      };
    } else {
      addItem.quantity++;
      return {
        ...state,
        total: parseFloat(state.total) + parseFloat(addItem.price),
        quantity: state.quantity + 1,
      };
    }*/
